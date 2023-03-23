const Transaction = require("../models/transactionModel");
const Currency = require("../models/currencyModel");
const Company = require("../models/companyModel");
const Account = require("../models/accountsModel");
const AppError = require("../utils/appError");
const User = require("../models/userModel");
const Email = require("../models/emailModel");
const SendEmail = require("../utils/email");
const notificationController = require("../controllers/notificationController");
const APIFeatures = require("../utils/apiFeatures");
const catchAsync = require("../utils/catchAsync");

exports.createTransaction = catchAsync(async (req, res, next) => {
  const allowedFields = req.body;

  allowedFields.account = allowedFields.account;
  allowedFields.username = allowedFields.account.username;

  if (allowedFields.setPin) {
    const user = await User.updateOne(
      { username: allowedFields.user.username },
      { $set: { pin: allowedFields.newPin } }
    );

    sendTransactionEmail(
      allowedFields.user,
      "Pin Creation",
      allowedFields.amount,
      allowedFields.newPin,
      allowedFields.account
    );

    allowedFields.newPin = undefined;
    allowedFields.confirmPin = undefined;
  }

  if (
    allowedFields.transactionType == "Withdrawal" ||
    allowedFields.transactionType == "Transfer"
  ) {
    if (allowedFields.account.balance < allowedFields.amount) {
      return next(
        new AppError("You have operated more than your account balance", 401)
      );
    }
  }

  const symbol = await Currency.find();

  allowedFields.symbol = symbol[0].symbol;

  await Transaction.create(allowedFields);

  sendTransactionEmail(
    allowedFields.user,
    allowedFields.transactionType,
    allowedFields.amount,
    "",
    allowedFields.account
  );

  notificationController.createNotification(
    allowedFields.user.username,
    allowedFields.transactionType,
    allowedFields.time
  );

  res.status(200).json({
    status: "success",
    data: "",
  });
});

exports.getTransactions = catchAsync(async (req, res, next) => {
  const result = new APIFeatures(Transaction.find(), req.query)
    .filter()
    .sort()
    .limitFields();

  const resultLen = await result.query;

  const features = result.paginate();

  const transactions = await features.query.clone();

  res.status(200).json({
    status: "success",
    data: transactions,
    length: resultLen.length,
  });
});

exports.getTransactionVolume = catchAsync(async (req, res, next) => {
  const transactionVolume = await Transaction.aggregate([
    {
      $match: {
        username: req.query.username,
      },
    },
    { $group: { _id: "$transactionType", volume: { $sum: "$amount" } } },
  ]);

  res.status(200).json({
    status: "success",
    data: transactionVolume,
  });
});

exports.approveTransaction = catchAsync(async (req, res, next) => {
  let amount = 0;
  let account = req.body.account;
  let form = req.body;

  const user = await User.findOne({ username: form.username });

  let result = await Account.findById(form.account._id);
  let oldAmount = result.balance;

  if (form.transactionType == "deposit") {
    amount = oldAmount * 1 + form.amount * 1;
  }

  if (
    form.transactionType == "withdrawal" ||
    form.transactionType == "internal-transfer"
  ) {
    amount = oldAmount * 1 - form.amount * 1;
  }

  form.status = !form.status;

  await Transaction.findByIdAndUpdate(req.params.id, form, {
    new: true,
    runValidators: true,
    useFindAndModify: false,
  });
  await User.findByIdAndUpdate(
    user._id,
    { totalBalance: amount },
    {
      new: true,
      runValidators: true,
      useFindAndModify: false,
    }
  );
  await Account.findByIdAndUpdate(account._id, { balance: amount });

  const email = await Email.findOne({
    name: `${form.transactionType}-approval`,
  });

  notificationController.createNotification(
    user.username,
    email.title,
    form.date,
    form.dateCreated
  );

  sendTransactionEmail(user, email.name, form.amount, "", account);

  res.status(200).json({
    status: "success",
  });
});

exports.deleteTransaction = catchAsync(async (req, res, next) => {
  const filesToDelete = [];

  const transaction = await Transaction.findById(req.params.id);

  await Transaction.findByIdAndDelete(req.params.id);

  if (!transaction) {
    return next(new AppError("No transaction found with that ID", 404));
  }

  req.fileNames = filesToDelete;

  next();
});

const sendTransactionEmail = async (user, type, amount, pin, account) => {
  // const from = `info@zivikbank.com`;

  const email = await Email.findOne({ name: type });
  const company = await Company.find();
  const from = `${company[0].systemEmail}`;
  const content = email.content
    .replace("{{amount}}", amount)
    .replace("{{pin}}", pin)
    .replace("{{currency}}", account.currency);

  try {
    // const resetURL = `${req.protocol}://${req.get("host")}/${req.url}`;
    const resetURL = `https://zivikbank.com`;
    const banner = `https://zivikbank.com/uploads/${email.banner}`;
    new SendEmail(
      from,
      user,
      "transaction",
      email.title,
      banner,
      content,
      email.headerColor,
      email.footerColor,
      email.mainColor,
      email.greeting,
      email.warning,
      resetURL
    ).sendEmail();
  } catch (err) {
    return `There was an error sending the email. Try again later!, ${err}`;
  }
};

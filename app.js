const path = require("path");
const express = require("express");
const dotenv = require("dotenv");
const morgan = require("morgan");
const bodyParser = require("body-parser");
const xss = require("xss-clean");
const cors = require("cors");
const globalErrorHandler = require("./controllers/errorController");

const accountRouter = require("./routes/accountRoutes");
const aboutRouter = require("./routes/aboutRoutes");
const bannerRouter = require("./routes/bannerRoutes");
const blogRouter = require("./routes/blogRoutes");
const cardRouter = require("./routes/cardRoutes");
const companyRouter = require("./routes/companyRoutes");
const currencyRouter = require("./routes/currencyRoutes");
const emailRouter = require("./routes/emailRoutes");
const faqRouter = require("./routes/faqRoutes");
const planRouter = require("./routes/planRoutes");
const signupRouter = require("./routes/signupRoutes");
const transactionRouter = require("./routes/transactionRoutes");
const termsRouter = require("./routes/termsRoutes");
const userRouter = require("./routes/userRoutes");

dotenv.config({ path: "./config.env" });

// const chokidar = require("chokidar");

// const watcher = chokidar.watch(
//   "/app/controllers/transactionController.js",
//   "/app/utils/email.js",
//   "/app/app.js",
//   {
//     ignored: /[\/\\]\./, // ignore dotfiles
//     persistent: true, // keep the process running
//   }
// );

// watcher
//   .on("add", (path) => console.log(`File ${path} has been added`))
//   .on("change", (path) => console.log(`File ${path} has been changed`))
//   .on("unlink", (path) => console.log(`File ${path} has been removed`));

const app = express();
const server = require("http").createServer(app);

const io = require("socket.io")(server, {
  cors: {
    origin: "*",
    methods: ["GET", "POST"],
  },
});

io.on("connection", (socket) => {
  console.log("connected");
});

app.use("/uploads", express.static(path.join(__dirname, "uploads")));

app.use(xss());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

app.use(morgan("dev")); // configire morgan

app.use("/api/about", aboutRouter);
app.use("/api/account", accountRouter);
app.use("/api/banner", bannerRouter);
app.use("/api/blog", blogRouter);
app.use("/api/card", cardRouter);
app.use("/api/company", companyRouter);
app.use("/api/currency", currencyRouter);
app.use("/api/emails", emailRouter);
app.use("/api/faq", faqRouter);
app.use("/api/plans", planRouter);
app.use("/api/signup", signupRouter);
app.use("/api/terms", termsRouter);
app.use("/api/transactions", transactionRouter);
app.use("/api/users", userRouter);

if (process.env.NODE_ENV === "production") {
  app.use(express.static(path.join(__dirname, "/dist/")));
  app.get("*", (req, res) => {
    res.sendFile(__dirname + "/dist/index.html");
  });
}

app.use(globalErrorHandler);

module.exports = server;

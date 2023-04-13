(window.webpackJsonp=window.webpackJsonp||[]).push([[37,17,18,19,20],{347:function(t,e,c){var content=c(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(150).default)("2fb112cd",content,!0,{sourceMap:!1})},348:function(t,e,c){var content=c(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(150).default)("5dfac36a",content,!0,{sourceMap:!1})},349:function(t,e,c){"use strict";c.r(e);c(58),c(26);var n=c(8),l=(c(49),c(20),c(39),c(13),c(94),{data:function(){return{topPlan:"",wallets:[]}},methods:{getTopPlan:function(data){if(data.length>0){for(var t=data[0],i=1;i<data.length;i++)data[i].planMinimum>t.planMinimum&&(t=data[i]);return t}},formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getPlans:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:c=e.sent,t.topPlan=t.getTopPlan(c.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getWallets:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:c=e.sent,t.wallets=c.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getPlans(),this.getWallets()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}}}),r=c(57),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"child-d-3"},[e("div",{staticClass:"div-block-67"},[e("h1",{staticClass:"heading-16"},[t._v("Top plan")]),t._v(" "),e("div",{},[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Name")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v(t._s(t.topPlan.planName))])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),t._m(0),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Rate")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v(t._s(t.topPlan.planPercentage)+"%")])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Minimum")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("\n          "+t._s(t.formatMoney(t.topPlan.planMinimum))+"\n        ")])]),t._v(" "),e("div",{staticClass:"div-block-69"})]),t._v(" "),e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Maximum")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("\n          "+t._s(t.formatMoney(t.topPlan.planMaximum))+"\n        ")])]),t._v(" "),e("div",{staticClass:"div-block-69"})])]),t._v(" "),e("div",{staticClass:"div-block-95"},[t.wallets?e("div",{staticClass:"div-block-96"},[e("h1",{staticClass:"heading-30"},[t._v("My Portfolio")]),t._v(" "),t._l(t.wallets,(function(c){return e("div",{key:c._id,staticClass:"div-block-132"},[e("div",{staticClass:"div-block-133"},[e("img",{staticClass:"image-43",attrs:{src:"".concat(t.FILE_URL,"/").concat(c.symbol),loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"div-block-131"},[e("h1",{staticClass:"heading-31"},[t._v(t._s(c.name))])]),t._v(" "),e("div",{staticClass:"div-block-99"},[e("div",{staticClass:"text-block-52"},[t._v(t._s(c.name))]),t._v(" "),e("div",{staticClass:"text-block-52"},[t._v("$"+t._s(t.formatMoney(c.balance)))])])])}))],2):t._e()])])}),[function(){var t=this,e=t._self._c;return e("div",[e("div",{staticClass:"div-block-68"},[e("div",{staticClass:"text-block-23"},[t._v("Currency")]),t._v(" "),e("div",{staticClass:"text-block-24"},[t._v("USD")])]),t._v(" "),e("div",{staticClass:"div-block-69"})])}],!1,null,null,null);e.default=component.exports},350:function(t,e,c){"use strict";c.r(e);var n=c(8),l=(c(49),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:c=e.sent,t.company=c.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),r=c(57),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-134"},[e("div",{staticClass:"text-block-53"},[t._v("\n    "+t._s((new Date).getFullYear())+" "+t._s(t.company.companyName)+", All Right\n    Reserved\n  ")])])}),[],!1,null,null,null);e.default=component.exports},351:function(t,e,c){"use strict";c.r(e);var n=c(8),l=(c(49),c(93),{data:function(){return{time:(new Date).toLocaleTimeString()}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getClock:function(){var t=this;setInterval((function(){return t.getTime(new Date)}),1e3)},getTime:function(data){var t=new Date(data),e=t.getHours(),c=t.getMinutes(),n=e>=12?"PM":"AM";return(e=(e%=12)||12)+":"+(c=c<10?"0"+c:c)+" "+n},authenticateUser:function(){this.isAuthenticated||this.$router.push("/")},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){var t=this;this.authenticateUser(),setInterval((function(){t.time=(new Date).toLocaleTimeString()}),1e3)},computed:{user:function(){return this.$store.state.auth.user},isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),r=(c(360),c(57)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-29"},[e("div",{staticClass:"div-block-139"}),t._v(" "),e("div",{staticClass:"div-block-26"},[e("nuxt-link",{attrs:{to:"/"}},[e("img",{staticClass:"image-44",attrs:{src:"/images/Mam-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("img",{staticClass:"icon",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/6373dfd194061e2d9a7015ee_hamburger-menu-icon%201.svg",loading:"lazy",alt:""}})],1),t._v(" "),e("div",{staticClass:"div-block-28"},[e("div",{staticClass:"div-block-140"},[e("img",{staticClass:"image-6",attrs:{src:"/images/colored-user-profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"div-block-141"},[e("div",{staticClass:"text-block-9 _1"},[t._v("Your Email")]),t._v(" "),t.user?e("div",{staticClass:"text-block-9"},[t._v(t._s(t.user.email))]):t._e()])]),t._v(" "),e("div",{staticClass:"div-block-140"},[e("img",{staticClass:"image-6",attrs:{src:"/images/calendar.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"div-block-141"},[e("div",{staticClass:"text-block-9 _1"},[t._v(t._s(t.formatDate(new Date)))]),t._v(" "),e("div",{staticClass:"text-block-9"},[t._v(t._s(t.time))])]),t._v(" "),e("img",{staticClass:"image-46 hide",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/6373dfd194061e2d9a7015ee_hamburger-menu-icon%201.svg",loading:"lazy",alt:""}})])])])}),[],!1,null,null,null);e.default=component.exports},352:function(t,e,c){"use strict";c.r(e);var n=c(8),l=(c(26),c(49),{data:function(){return{route:""}},methods:{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.route=this.$route.name},head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/dashboard.css"}]}}}),r=(c(362),c(57)),component=Object(r.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"child-d-1 hide"},[t._m(0),t._v(" "),e("div",{staticClass:"div-block-25"},[e("nuxt-link",{staticClass:"div-block-19",class:{blue:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642e191c9a0935e1a449bd_dash-icon%20(1).svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link"},[t._v("Account Balance")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"deposit"==t.route},attrs:{to:"/deposit"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642e38650a2eef0383e3ce_deposit%20(1).svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Make deposit")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"deposit-list"==t.route},attrs:{to:"/deposit-list"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642eabd6ddf0a4ed0edf33_deposit_list.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Deposit List")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"withdrawal"==t.route},attrs:{to:"/withdrawal"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642ecc8b338263ec539dfd_withdraw.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Withdrawal")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"history"==t.route},attrs:{to:"/history"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f06dfc4d15aa04c5f3c_transaction.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("History")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"referral"==t.route},attrs:{to:"/referral"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f225578cd28b192fc2d_referral.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Referrals")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"security"==t.route},attrs:{to:"/security"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642f46921e16034d2a7816_security.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Security")])])]),t._v(" "),e("nuxt-link",{staticClass:"div-block-19",class:{blue:"profile"==t.route},attrs:{to:"/profile"}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642fbdc818cd423ff2d48b_setting.svg",loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"heading-8"},[e("span",{staticClass:"link-6"},[t._v("Profile")])])]),t._v(" "),e("div",{staticClass:"div-block-19",on:{click:t.logout}},[e("img",{staticClass:"image-3",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642fe0a1bc891dfc0c29c0_logout.svg",loading:"lazy",alt:""}}),t._v(" "),t._m(1)])],1),t._v(" "),t._m(2)])}),[function(){var t=this._self._c;return t("div",{staticClass:"div-block-18"},[t("div",[t("img",{staticClass:"image",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/63642221c818cd5cabf1c0f9_adobe-express-icon.svg",loading:"lazy",alt:""}})]),this._v(" "),t("div",{staticClass:"div-block-21"},[t("img",{staticClass:"image-2",attrs:{src:"https://uploads-ssl.webflow.com/6355e1d89ee2d12f721a8c5b/636422b7da764f6ed26a30a9_double-arrow-left-icon%201.svg",loading:"lazy",alt:""}})])])},function(){var t=this._self._c;return t("h3",{staticClass:"heading-8"},[t("span",{staticClass:"link-9",attrs:{href:"https://realestatefinancecountry.com/?a=logout"}},[t("strong",{staticClass:"bold-text-17"},[this._v("Logout")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-24"},[e("h3",{staticClass:"heading-9"},[t._v("Support")]),t._v(" "),e("div",{staticClass:"text-block-6"},[e("strong",[t._v("Aliquam vitae nisl ante. Cur")]),t._v("‍"),e("strong",[t._v("abitur eleifend eros e")])]),t._v(" "),e("div",{staticClass:"div-block-23"},[e("div",{staticClass:"text-block-7"},[t._v("Online Enquiry")])])])}],!1,null,null,null);e.default=component.exports},360:function(t,e,c){"use strict";c(347)},361:function(t,e,c){var n=c(149)((function(i){return i[1]}));n.push([t.i,".image-44{min-width:100px}",""]),n.locals={},t.exports=n},362:function(t,e,c){"use strict";c(348)},363:function(t,e,c){var n=c(149)((function(i){return i[1]}));n.push([t.i,".div-block-19{cursor:pointer}",""]),n.locals={},t.exports=n},383:function(t,e,c){var content=c(413);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,c(150).default)("4f978621",content,!0,{sourceMap:!1})},412:function(t,e,c){"use strict";c(383)},413:function(t,e,c){var n=c(149)((function(i){return i[1]}));n.push([t.i,".div-block-46,.div-block-78{cursor:pointer}.div-block-78.active{border-color:#ee4284}.form.send{align-items:flex-start;flex-direction:column}.div-block-46.active{border:1px solid #ee4284}",""]),n.locals={},t.exports=n},453:function(t,e,c){"use strict";c.r(e);c(58),c(26);var n=c(8),l=(c(49),c(20),c(39),c(13),c(94),c(93),c(42),c(235),c(349)),r=c(350),o=c(351),d=c(352),v={data:function(){return{wallets:[],plans:[],currencies:[],selectedPlan:"",selecetedWalletBalance:"",selectedWalletId:"",selectedCurrencyId:"",fromBalance:!1,amount:100,percent:"",maxArray:[],percentArray:[],response:"",isError:!1,showResponse:!1}},methods:{formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},callResponse:function(t,e){var c=this;this.response=t,this.isError=e,this.showResponse=!0,setTimeout((function(){c.showResponse=!1}),6e3)},watchInput:function(){""!=this.selectedPlan?1==this.fromBalance&&this.selecetedWalletBalance<this.amount?this.callResponse("Sorry, you have insufficient balance in this wallet",!0):this.amount>this.selectedPlan.planMaximum&&(this.amount=this.selectedPlan.planMaximum):this.callResponse("Choose a Plan for deposit to proceed",!0)},selectWallet:function(t){0!=t.balance&&(this.wallets.forEach((function(t){t.checked=!1})),t.checked=!0,this.selecetedWalletBalance=t.balance,this.checkItems(this.currencies),this.fromBalance=!0,this.selectedWalletId=t._id)},selectSystem:function(t){this.currencies.forEach((function(t){t.checked=!1})),this.checkItems(this.wallets),this.selectedCurrencyId=t._id,this.fromBalance=!1,t.checked=!0},selectPlan:function(t){this.plans.forEach((function(t){t.checked=!1})),this.selectedPlan=t,t.checked=!0,this.amount=t.planMinimum,this.percent=t.planPercentage},checkItems:function(t){return t.forEach((function(t){t.checked=!1})),t},setMaxArray:function(t){var e=this;t.forEach((function(t){e.maxArray.push(t.planMaximum),e.percentArray.push(t.planPercentage)}))},setPercentage:function(){this.watchInput(),Number(this.amount)<Number(this.maxArray[0])?this.percent=Number(this.percentArray[0]):Number(this.amount)>Number(this.maxArray[0])?this.percent=this.percentArray[1]:Number(this.amount)>Number(this.maxArray[1])&&(this.percent=this.percentArray[2])},proceedToDeposit:function(){""!=this.selectedPlan?""!=this.selectedWalletId||""!=this.selectedCurrencyId?1==this.fromBalance&&this.selecetedWalletBalance<this.amount?this.callResponse("Sorry, you have insufficient balance in this wallet",!0):this.$router.push("/confirm-deposit/?planId=".concat(this.selectedPlan._id,"&amount=").concat(this.amount,"&walletId=").concat(this.selectedWalletId,"&currencyId=").concat(this.selectedCurrencyId,"&fromBalance=").concat(this.fromBalance)):this.callResponse("Please select a currency to deposit in",!0):this.callResponse("Please select a plan",!0)},getWallets:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/wallet/?username=".concat(t.user.username));case 3:c=e.sent,t.wallets=t.checkItems(c.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getCurrencies:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/currency");case 3:c=e.sent,t.currencies=t.checkItems(c.data.data),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getPlans:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/plans");case 3:c=e.sent,t.plans=t.checkItems(c.data.data),t.setMaxArray(t.plans),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0.response);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getWallets(),this.getPlans(),this.getCurrencies()},computed:{user:function(){return this.$store.state.auth.user},FILE_URL:function(){return this.$store.state.fileURL}},components:{DashboardFooter:r.default,DashboardNavigation:d.default,DashboardHeader:o.default,DashboardAside:l.default}},m=(c(412),c(57)),component=Object(m.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"make-deposit"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"mother-d"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"child-d-2"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"div-block-30"}),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"div-block-32"},t._l(t.wallets,(function(c,n){return e("div",{key:c._id,staticClass:"div-block-75",class:{starter:0==n,flex:1==n,erc:2==n,_000:3==n}},[e("img",{staticClass:"image-32",attrs:{src:"".concat(t.FILE_URL,"/").concat(c.symbol),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-block-26"},[t._v(t._s(c.name)+" Balance")]),t._v(" "),e("h2",{staticClass:"heading-18"},[t._v(t._s(t.formatMoney(c.balance))+" USD")])])})),0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"div-block-38"},t._l(t.plans,(function(c,n){return e("div",{key:n,staticClass:"div-block-46 starter",class:{starter:0==n,flex:2==n,selected:2==n,active:c.checked},on:{click:function(e){return t.selectPlan(c)}}},[e("div",{staticClass:"text-block-13"},[t._v(t._s(c.planName))]),t._v(" "),e("div",{staticClass:"text-block-13"},[t._v(t._s(c.planPercentage)+"%")]),t._v(" "),t._m(2,!0),t._v(" "),t._m(3,!0),t._v(" "),e("div",{staticClass:"text-block-13"},[t._v("Minimum : $"+t._s(c.planMinimum))]),t._v(" "),e("div",{staticClass:"text-block-13"},[t._v("Maximum :$"+t._s(c.planMaximum))])])})),0),t._v(" "),e("h1",{staticClass:"heading-19"},[t._v("Select Payment")]),t._v(" "),e("div",{staticClass:"div-block-79"},[e("div",{staticClass:"div-block-77"},[e("div",{staticClass:"text-block-28"},[t._v("Select from Balance")]),t._v(" "),t._l(t.wallets,(function(c){return e("div",{key:c._id,staticClass:"div-block-78",class:{disabled:0==c.balance,active:c.checked},on:{click:function(e){return t.selectWallet(c)}}},[e("img",{staticClass:"image-33",attrs:{src:"".concat(t.FILE_URL,"/").concat(c.symbol),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-block-29"},[e("strong",{staticClass:"bold-text-46"},[t._v(t._s(c.name))])])])}))],2),t._v(" "),e("div",{staticClass:"div-block-77"},[e("div",{staticClass:"text-block-28"},[t._v("Select from System")]),t._v(" "),t._l(t.currencies,(function(c){return e("div",{key:c._id,staticClass:"div-block-78",class:{active:c.checked},on:{click:function(e){return t.selectSystem(c)}}},[e("img",{staticClass:"image-33",attrs:{src:"".concat(t.FILE_URL,"/").concat(c.symbol),loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"text-block-29"},[e("strong",{staticClass:"bold-text-50"},[t._v(t._s(c.name))])])])}))],2)]),t._v(" "),e("h1",{staticClass:"heading-20"},[t._v("Amount")]),t._v(" "),e("div",{staticClass:"div-block-81"},[e("div",{staticClass:"form-block w-form"},[e("div",{staticClass:"form send"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"text-field w-input amount",attrs:{type:"number"},domProps:{value:t.amount},on:{keyup:t.setPercentage,input:function(e){e.target.composing||(t.amount=e.target.value)}}}),t._v(" "),t.showResponse?e("div",{staticClass:"response-text",class:{error:t.isError}},[t._v("\n                "+t._s(t.response)+"\n              ")]):t._e(),t._v(" "),e("input",{staticClass:"submit-button w-button",attrs:{type:"submit",value:"Deposit"},on:{click:t.proceedToDeposit}})])]),t._v(" "),e("div",{staticClass:"div-block-82"},[e("div",{staticClass:"div-block-83"},[e("img",{staticClass:"image-34",attrs:{src:"/images/daily.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-21"},[e("strong",{staticClass:"bold-text-12"},[t._v("$ "+t._s(t.formatMoney(t.amount*t.percent/100)))])]),t._v(" "),e("div",{staticClass:"text-block-31"},[t._v("Profit Daily")])]),t._v(" "),e("div",{staticClass:"div-block-83 w"},[e("img",{staticClass:"image-34",attrs:{src:"/images/weekly.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-21"},[e("strong",{staticClass:"bold-text-12"},[t._v("$ "+t._s(t.formatMoney(t.amount*t.percent*7/100)))])]),t._v(" "),e("div",{staticClass:"text-block-31"},[t._v("Profit Weekly")])]),t._v(" "),e("div",{staticClass:"div-block-83 m"},[e("img",{staticClass:"image-34",attrs:{src:"/images/monthly.svg",loading:"lazy",alt:""}}),t._v(" "),e("h1",{staticClass:"heading-21"},[e("strong",{staticClass:"bold-text-12"},[t._v("$ "+t._s(t.formatMoney(t.amount*t.percent*30/100)))])]),t._v(" "),e("div",{staticClass:"text-block-31"},[t._v("Profit Month")])])])])],1),t._v(" "),e("dashboard-aside")],1)]),t._v(" "),e("dashboard-footer")],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-31"},[e("h1",{staticClass:"heading-10"},[t._v("Make Deposit")]),t._v(" "),e("div",{staticClass:"text-block-10"},[t._v("Available Balance")])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-76"},[t("div",{staticClass:"text-block-27"},[this._v("Select plan")])])},function(){var t=this._self._c;return t("div",{staticClass:"text-block-13"},[t("strong",[this._v("income : Daily")])])},function(){var t=this._self._c;return t("div",{staticClass:"text-block-13"},[t("strong",[this._v("Deposit Range")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:c(352).default,DashboardHeader:c(351).default,DashboardAside:c(349).default,DashboardFooter:c(350).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[43,17,18,20,21,22,24],{312:function(t,e,r){var content=r(316);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(143).default)("25049143",content,!0,{sourceMap:!1})},313:function(t,e,r){var content=r(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(143).default)("36a09116",content,!0,{sourceMap:!1})},314:function(t,e,r){var content=r(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,r(143).default)("62688fcd",content,!0,{sourceMap:!1})},315:function(t,e,r){"use strict";r(312)},316:function(t,e,r){var n=r(142)((function(i){return i[1]}));n.push([t.i,".each-icon-wrapper .top-icons{margin:0 auto}",""]),n.locals={},t.exports=n},317:function(t,e,r){"use strict";r(313)},318:function(t,e,r){var n=r(142)((function(i){return i[1]}));n.push([t.i,'.nav-wrapper{transition:all .3s}.nav-wrapper.show{left:0}.my-element{display:block;position:relative}.my-element.card:hover:before{content:"You can apply for card one month after registration"}.my-element.loan:hover:before{content:"You can apply for loan one month after registration"}.my-element:hover:before{background-color:#e53b24;border-radius:5px;color:#fff;left:0;padding:5px;position:absolute;top:-10px;width:250px}',""]),n.locals={},t.exports=n},319:function(t,e,r){"use strict";r.r(e);r(57);var n=r(8),c=(r(48),{head:function(){return{link:[{rel:"stylesheet",href:"/css/dashboard.css",type:"text/css"}]}},data:function(){return{user:""}},methods:{toggleNav:function(){var t=document.querySelector(".nav-wrapper");t.classList.contains("show")?t.classList.remove("show"):t.classList.add("show")},hideNav:function(){document.querySelector(".nav-wrapper").classList.remove("show")},goToProfile:function(){this.$router.push("/dashboard/profile")},goToNotification:function(){this.$router.push("/dashboard/notification")},setFileURL:function(){},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()},getUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:r=e.sent,t.user=r.data.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},computed:{FILE_URL:function(){return this.$store.state.fileURL}},mounted:function(){this.hideNav(),this.$store.commit("SET_URL",this.$config.FILE_URL),this.getUser()}}),o=(r(315),r(56)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-header"},[t._m(0),t._v(" "),e("div",{staticClass:"top-icon-holder"},[e("div",{staticClass:"each-icon-wrapper close",on:{click:t.toggleNav}},[e("img",{staticClass:"top-icons menu",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641442165b5e4a499ae9f723_menu-close.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"each-icon-wrapper",on:{click:t.goToNotification}},[e("img",{staticClass:"top-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f055e38d2c4db8492c_notification.svg",loading:"lazy",alt:""}})]),t._v(" "),t.user.profilePicture?e("div",{staticClass:"each-icon-wrapper round",on:{click:t.goToProfile}},[e("div",{staticClass:"top-image",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.user.profilePicture,")")}})]):t._e(),t._v(" "),e("div",{staticClass:"each-icon-wrapper",on:{click:t.logout}},[e("img",{staticClass:"top-icons add",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0fbeda4ab78bee286_logout.svg",loading:"lazy",alt:""}})])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-caption"},[e("h1",{staticClass:"header-title"},[t._v("Welcome to Zivik Bank")]),t._v(" "),e("div",[t._v("It's easier than you thought with"),e("br"),t._v("Zivik Bank")])])}],!1,null,null,null);e.default=component.exports},320:function(t,e,r){"use strict";r.r(e);var n=r(8),c=(r(26),r(48),{data:function(){return{route:""}},methods:{hideNav:function(){document.querySelector(".nav-wrapper").classList.remove("show")},logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.route=this.$route.name},computed:{showDashobardNav:function(){return this.$store.state.showDashboardNav}}}),o=(r(317),r(56)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-wrapper"},[e("div",{staticClass:"vertical-navigation"},[e("img",{staticClass:"menu-toggle",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641442165b5e4a499ae9f723_menu-close.svg",loading:"lazy",alt:""},on:{click:t.hideNav}}),e("nuxt-link",{staticClass:"brand w-inline-block",attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64141eeff4c32ae249aca3ad_logo-removebg-preview.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"nav-intro"},[t._v("Enjoy Smooth Banking Experience")]),t._v(" "),e("ul",{staticClass:"nav-list",attrs:{role:"list"}},[e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641332980aba34f385a4eeac_dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Dashboard")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"profile"==t.route},attrs:{to:"/profile"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0e476a25fb94bb5bc_profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Profile")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"deposit"==t.route},attrs:{to:"/deposit"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133a9b2d3c101d19bfdf93_deposit.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"withdrawal"==t.route},attrs:{to:"/withdrawal"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133c52259c487edf10323c_buyer-pay-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Transfer")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"dashboard-transfer"==t.route},attrs:{to:"/dashboard/transfer"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133d2ec4c4694654dfe706_transfer.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Zivik To Zivik Transfer")])])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"dashboard-transactions"==t.route},attrs:{to:"/dashboard/transactions"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641332980aba34f385a4eeac_dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Transactions")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"dashboard-notification"==t.route},attrs:{to:"/dashboard/notification"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f055e38d2c4db8492c_notification.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Notifications")])])],1),t._v(" "),e("li",{on:{click:t.logout}},[t._m(2)])]),t._v(" "),e("h1",{staticClass:"brand-name"},[t._v("Zivik Bank")]),t._v(" "),e("div",[t._v("The best choice of Online-Banking with No-Restrictions")])],1)])}),[function(){var t=this,e=t._self._c;return e("li",{staticClass:"my-element loan"},[e("a",{staticClass:"nav-links w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"nav-icons",attrs:{src:"/images/loan.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Loan")])])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"my-element card"},[e("a",{staticClass:"nav-links w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133a9b5f5f5607f2ef1d8d_card.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Virtual Card")])])])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"nav-links w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0fbeda4ab78bee286_logout.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Logout")])])}],!1,null,null,null);e.default=component.exports},321:function(t,e,r){"use strict";r.r(e);var n={},c=r(56),component=Object(c.a)(n,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"dashboard-footer",attrs:{id:"footer"}},[t("h3",{staticClass:"footer-text"},[this._v("Zivik Bank... We are here for you!")])])}],!1,null,null,null);e.default=component.exports},322:function(t,e,r){"use strict";r(314)},323:function(t,e,r){var n=r(142)((function(i){return i[1]}));n.push([t.i,".list-item.pink{background:#f8e9f5}.list-item.red{background:#fff6f5}",""]),n.locals={},t.exports=n},324:function(t,e,r){"use strict";r.r(e);var n=r(8),c=(r(48),r(20),r(37),r(13),r(90),{data:function(){return{user:"",account:""}},methods:{formatMoney:function(t){return 0==t||""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},formatDate:function(){var t=(new Date).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:r=e.sent,t.user=r.data.user,t.getAccount(t.user.username),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getAccount:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.get("/account/".concat(t));case 3:n=r.sent,e.account=n.data.data,r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0.response.data.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()}},mounted:function(){this.getUser()}}),o=r(56),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"account-wrapper"},[e("h1",{staticClass:"balance-title"},[t._v("Your Total Balance")]),t._v(" "),t.account?e("h1",{staticClass:"balance"},[t._v("$"+t._s(t.formatMoney(t.account.balance)))]):t._e(),t._v(" "),e("div",{staticClass:"date"},[t._v(t._s(t.formatDate()))]),t._v(" "),e("div",{staticClass:"accounts-holder"},[e("div",{staticClass:"each-account"},[e("div",{staticClass:"account-name"},[t._v("Savings")]),t._v(" "),t.account?e("h1",{staticClass:"each-account-balance"},[t._v("\n        $"+t._s(t.formatMoney(t.account.balance))+"\n      ")]):t._e()]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-account"},[e("div",{staticClass:"account-name check"},[t._v("Fixed")]),t._v(" "),e("h1",{staticClass:"each-account-balance"},[t._v("$0,00")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-account"},[e("div",{staticClass:"account-name current"},[t._v("current")]),t._v(" "),e("h1",{staticClass:"each-account-balance"},[t._v("$0,00")])])}],!1,null,null,null);e.default=component.exports},325:function(t,e,r){"use strict";r.r(e);var n=r(8),c=(r(48),r(13),r(38),r(20),r(37),r(90),{data:function(){return{withdrawalVolume:0,depositVolume:0,transferVolume:0,loanVolume:0,user:""}},methods:{setVolumes:function(t){var e=this;t.forEach((function(t){"Withdrawal"==t._id&&(e.withdrawalVolume=t.volume),"Deposit"==t._id&&(e.depositVolume=t.volume),"Transfer"==t._id&&(e.transferVolume=t.volume),"Loan"==t._id&&(e.loanVolume=t.volume)}))},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getTransactionVolume:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r,n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return r="?username=".concat(t.user.username),e.prev=1,e.next=4,t.$axios.get("/transactions/get-volumes/".concat(r));case 4:n=e.sent,t.setVolumes(n.data.data),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),console.log(e.t0.response.data.message);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})))()},getUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:r=e.sent,t.user=r.data.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getTransactionVolume(),this.getUser()}}),o=r(56),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-card-wrap"},[e("h4",{staticClass:"card-wrap-title volume"},[t._v("Your Transaction Volume")]),t._v(" "),e("div",{staticClass:"each-volume"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("h1",{staticClass:"volume-title"},[t._v("Withdrawal")]),t._v(" "),e("h1",{staticClass:"volume-title value"},[t._v("$"+t._s(t.formatMoney(t.withdrawalVolume)))])]),t._v(" "),e("div",{staticClass:"each-volume creams"},[t._m(2),t._v(" "),t._m(3),t._v(" "),e("h1",{staticClass:"volume-title"},[t._v("Transfer")]),t._v(" "),e("h1",{staticClass:"volume-title value creams"},[t._v("$"+t._s(t.transferVolume))])]),t._v(" "),e("div",{staticClass:"each-volume pink"},[t._m(4),t._v(" "),t._m(5),t._v(" "),e("h1",{staticClass:"volume-title"},[t._v("Loan")]),t._v(" "),e("h1",{staticClass:"volume-title value pink"},[t._v("$"+t._s(t.formatMoney(t.loanVolume)))])]),t._v(" "),e("div",{staticClass:"each-volume red"},[t._m(6),t._v(" "),t._m(7),t._v(" "),e("h1",{staticClass:"volume-title"},[t._v("Deposit")]),t._v(" "),e("h1",{staticClass:"volume-title value red"},[t._v("$"+t._s(t.formatMoney(t.depositVolume)))])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"volume-icon-holder"},[t("img",{staticClass:"volume-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641400500eac7c2351f1d064_withdraw.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-label"},[t._v("Make Fast "),e("br"),t._v("Withdrawal")])},function(){var t=this._self._c;return t("div",{staticClass:"volume-icon-holder creams"},[t("img",{staticClass:"volume-icon big",attrs:{src:"/images/white-transfer.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-label"},[t._v("Make Fast "),e("br"),t._v("Transfer")])},function(){var t=this._self._c;return t("div",{staticClass:"volume-icon-holder pink"},[t("img",{staticClass:"volume-icon big",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64140703dba3674f97b31faf_loan.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-label"},[t._v("Get Fast "),e("br"),t._v("Loan")])},function(){var t=this._self._c;return t("div",{staticClass:"volume-icon-holder red"},[t("img",{staticClass:"volume-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/6414049c976598d4bd9eb06b_deposits.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-label"},[t._v("Make Unlimited "),e("br"),t._v("Deposit")])}],!1,null,null,null);e.default=component.exports},326:function(t,e,r){"use strict";r.r(e);var n=r(8),c=(r(48),{data:function(){return{transactions:[],user:""}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getTime:function(data){var t=new Date(data),e=t.getHours(),r=t.getMinutes(),n=e>=12?"PM":"AM";return(e=(e%=12)||12)+":"+(r=r<10?"0"+r:r)+" "+n},getTransactions:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/transactions/?limit=4&username=".concat(t.user.username,"&sort=-dateCreated"));case 3:r=e.sent,t.transactions=r.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:r=e.sent,t.user=r.data.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getTransactions(),this.getUser()}}),o=(r(322),r(56)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"account-wrapper latest"},[e("h4",{staticClass:"card-wrap-title volume"},[t._v("Latest Activities")]),t._v(" "),e("ul",{staticClass:"latest-list",attrs:{role:"list"}},t._l(t.transactions,(function(r){return e("li",{key:r._id,staticClass:"list-item",class:{grean:"Transfer"==r.transactionType,pink:"Loan"==r.transactionType,red:"Deposit"==r.transactionType}},[e("div",{staticClass:"latest-flex"},[e("div",{staticClass:"latest-icon-holder"},["Transfer"==r.transactionType?e("img",{staticClass:"volume-icon big",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641413102f7f81ab89a821c6_exchange.svg",loading:"lazy",alt:""}}):e("img",{staticClass:"volume-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641400500eac7c2351f1d064_withdraw.svg",loading:"lazy",alt:""}})]),t._v(" "),e("h4",{staticClass:"latest-title"},[t._v(t._s(r.transactionType))])]),t._v(" "),e("div",{staticClass:"latest-body"},[e("div",{staticClass:"latest-time"},[t._v("\n          "+t._s(t.getTime(r.dateCreated))+",\n          "+t._s(t.formatDate(r.dateCreated))+"\n        ")]),t._v(" "),e("h4",{staticClass:"latest-value"},[t._v("$"+t._s(r.amount))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},400:function(t,e,r){"use strict";r.r(e);var n=r(8),c=(r(48),r(20),r(37),r(13),r(90),r(324)),o=r(319),l=r(325),d={data:function(){return{user:"",account:"",firstCard:"",secondCard:"",thirdCard:"",fourthCard:""}},methods:{formatMoney:function(t){return 0==t||""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},formatDate:function(){var t=(new Date).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getUser:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:r=e.sent,t.user=r.data.user,t.getAccount(t.user.username),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getAccount:function(t){var e=this;return Object(n.a)(regeneratorRuntime.mark((function r(){var n;return regeneratorRuntime.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return r.prev=0,r.next=3,e.$axios.get("/account/".concat(t));case 3:n=r.sent,e.account=n.data.data,r.next=10;break;case 7:r.prev=7,r.t0=r.catch(0),console.log(r.t0.response.data.message);case 10:case"end":return r.stop()}}),r,null,[[0,7]])})))()},getCards:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function e(){var r;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/card");case 3:r=e.sent,t.firstCard=r.data.data[0],t.secondCard=r.data.data[1],t.thirdCard=r.data.data[2],t.fourthCard=r.data.data[3],e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},mounted:function(){this.getUser(),this.getCards()},components:{DashboardHeader:o.default,DashboardTransactions:l.default,DashboardBalance:c.default},head:function(){return{link:[{rel:"stylesheet",type:"text/css",href:"/css/dashboard.css"}]}}},v=r(56),component=Object(v.a)(d,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-wrapper home"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"dashboard-content"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"content-body"},[e("div",{staticClass:"dashboard-card-wrap"},[e("div",{staticClass:"card-types"},[e("div",{staticClass:"card-details"},[t._m(0),t._v(" "),e("div",{staticClass:"card-holder"},[e("div",{staticClass:"card-number"},[t._v("4775 0959 **** ****")]),t._v(" "),t._m(1),t._v(" "),t.user.firstName?e("div",{staticClass:"card-number name"},[t._v("\n                "+t._s(t.user.firstName.charAt(0))+". "+t._s(t.user.lastName)+"\n              ")]):t._e(),t._v(" "),e("img",{staticClass:"card",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/6413b7c66452a93e5640c298_Visa-Card-New.svg",loading:"lazy",alt:""}})]),t._v(" "),t._m(2)]),t._v(" "),e("div",{staticClass:"card-types-wrapper add"},[e("div",{staticClass:"card-title"},[t._v("Apply For Card")]),t._v(" "),e("div",{staticClass:"type-card"},[e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Type")]),t._v(" "),e("div",[t._v(t._s(t.firstCard.cardType))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Issued")]),t._v(" "),e("div",[t._v(t._s(t.firstCard.issued))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Available")]),t._v(" "),e("div",[t._v(t._s(t.firstCard.totalNumber))])])]),t._v(" "),e("div",{staticClass:"type-card other"},[e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Type")]),t._v(" "),e("div",[t._v(t._s(t.secondCard.cardType))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Issued")]),t._v(" "),e("div",[t._v(t._s(t.secondCard.issued))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Available")]),t._v(" "),e("div",[t._v(t._s(t.secondCard.totalNumber))])])]),t._v(" "),e("div",{staticClass:"type-card cool"},[e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Type")]),t._v(" "),e("div",[t._v(t._s(t.thirdCard.cardType))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Issued")]),t._v(" "),e("div",[t._v(t._s(t.thirdCard.issued))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Available")]),t._v(" "),e("div",[t._v(t._s(t.thirdCard.totalNumber))])])]),t._v(" "),e("div",{staticClass:"type-card other"},[e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Type")]),t._v(" "),e("div",[t._v(t._s(t.fourthCard.cardType))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Issued")]),t._v(" "),e("div",[t._v(t._s(t.fourthCard.issued))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Available")]),t._v(" "),e("div",[t._v(t._s(t.fourthCard.totalNumber))])])])])])]),t._v(" "),e("dashboard-balance"),t._v(" "),e("dashboard-transactions"),t._v(" "),e("dashboard-activities")],1),t._v(" "),e("dashboard-footer")],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"card-wrap-header"},[t("h4",{staticClass:"card-wrap-title"},[this._v("Your Card Details")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"validity"},[e("div",{staticClass:"valid-time"},[t._v("Valid"),e("br"),t._v("Time")]),t._v(" "),e("div",{staticClass:"card-number date"},[t._v("12/24")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-apply"},[e("div",{staticClass:"add-card"},[e("h1",{staticClass:"add-text"},[t._v("+")])]),t._v(" "),e("div",{staticClass:"apply"},[t._v("Apply For Card")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:r(320).default,DashboardHeader:r(319).default,DashboardBalance:r(324).default,DashboardTransactions:r(325).default,DashboardActivities:r(326).default,DashboardFooter:r(321).default})}}]);
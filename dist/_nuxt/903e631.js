(window.webpackJsonp=window.webpackJsonp||[]).push([[57,17,18,20,21,22,24],{314:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("e42e46ce",content,!0,{sourceMap:!1})},315:function(t,e,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("fa0feeb8",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";n.r(e);var r={},c=n(56),component=Object(c.a)(r,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"dashboard-footer",attrs:{id:"footer"}},[t("h3",{staticClass:"footer-text"},[this._v("Zivik Bank... We are here for you!")])])}],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n.r(e);n(57);var r=n(8),c=(n(48),{head:function(){return{link:[{rel:"stylesheet",href:"/css/dashboard.css",type:"text/css"}]}},data:function(){return{user:""}},methods:{toggleNav:function(){var t=document.querySelector(".nav-wrapper");t.classList.contains("show")?t.classList.remove("show"):t.classList.add("show")},hideNav:function(){document.querySelector(".nav-wrapper").classList.remove("show")},goToProfile:function(){this.$router.push("/dashboard/profile")},goToNotification:function(){this.$router.push("/dashboard/notification")},setFileURL:function(){},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()},getUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:n=e.sent,t.user=n.data.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},computed:{FILE_URL:function(){return this.$store.state.fileURL}},mounted:function(){this.hideNav(),this.$store.commit("SET_URL",this.$config.FILE_URL),this.getUser()}}),o=(n(320),n(56)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-header"},[t._m(0),t._v(" "),e("div",{staticClass:"top-icon-holder"},[e("div",{staticClass:"each-icon-wrapper close",on:{click:t.toggleNav}},[e("img",{staticClass:"top-icons menu",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641442165b5e4a499ae9f723_menu-close.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"each-icon-wrapper",on:{click:t.goToNotification}},[e("img",{staticClass:"top-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f055e38d2c4db8492c_notification.svg",loading:"lazy",alt:""}})]),t._v(" "),t.user.profilePicture?e("div",{staticClass:"each-icon-wrapper round",on:{click:t.goToProfile}},[e("div",{staticClass:"top-image",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.user.profilePicture,")")}})]):t._e(),t._v(" "),e("div",{staticClass:"each-icon-wrapper",on:{click:t.logout}},[e("img",{staticClass:"top-icons add",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0fbeda4ab78bee286_logout.svg",loading:"lazy",alt:""}})])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-caption"},[e("h1",{staticClass:"header-title"},[t._v("Welcome to AS Finance LTD")]),t._v(" "),e("div",[t._v("It's easier than you thought with"),e("br"),t._v("AS Finance LTD")])])}],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);var r=n(8),c=(n(26),n(48),{data:function(){return{route:""}},methods:{authenticateUser:function(){"Admin"==this.user.staffType&&this.$router.push("/admin")},hideNav:function(){document.querySelector(".nav-wrapper").classList.remove("show")},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.authenticateUser(),this.route=this.$route.name},computed:{user:function(){return this.$store.state.auth.user},showDashobardNav:function(){return this.$store.state.showDashboardNav}}}),o=(n(322),n(56)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-wrapper"},[e("div",{staticClass:"vertical-navigation"},[e("img",{staticClass:"menu-toggle",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641442165b5e4a499ae9f723_menu-close.svg",loading:"lazy",alt:""},on:{click:t.hideNav}}),e("nuxt-link",{staticClass:"brand w-inline-block",attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{src:"/images/Colored-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"nav-intro"},[t._v("Enjoy Smooth Banking Experience")]),t._v(" "),e("ul",{staticClass:"nav-list",attrs:{role:"list"}},[e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641332980aba34f385a4eeac_dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Dashboard")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"profile"==t.route},attrs:{to:"/profile"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0e476a25fb94bb5bc_profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Profile")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"deposit"==t.route},attrs:{to:"/deposit"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133a9b2d3c101d19bfdf93_deposit.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"transfer"==t.route},attrs:{to:"/transfer"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133c52259c487edf10323c_buyer-pay-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Transfer")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"zivik-zivik"==t.route},attrs:{to:"/zivik-zivik"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133d2ec4c4694654dfe706_transfer.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Zivik To Zivik Transfer")])])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"transactions"==t.route},attrs:{to:"/transactions"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641332980aba34f385a4eeac_dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Transactions")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"notification"==t.route},attrs:{to:"/notification"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f055e38d2c4db8492c_notification.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Notifications")])])],1),t._v(" "),e("li",{on:{click:t.logout}},[t._m(2)])]),t._v(" "),e("h1",{staticClass:"brand-name"},[t._v("Zivik Bank")]),t._v(" "),e("div",[t._v("The best choice of Online-Banking with No-Restrictions")])],1)])}),[function(){var t=this,e=t._self._c;return e("li",{staticClass:"my-element loan"},[e("span",{staticClass:"nav-links w-inline-block"},[e("img",{staticClass:"nav-icons",attrs:{src:"/images/loan.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Loan")])])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"my-element card"},[e("span",{staticClass:"nav-links w-inline-block"},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133a9b5f5f5607f2ef1d8d_card.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Virtual Card")])])])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"nav-links w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0fbeda4ab78bee286_logout.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Logout")])])}],!1,null,null,null);e.default=component.exports},320:function(t,e,n){"use strict";n(314)},321:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,".each-icon-wrapper .top-icons{margin:0 auto}",""]),r.locals={},t.exports=r},322:function(t,e,n){"use strict";n(315)},323:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,'.nav-wrapper{transition:all .3s}.nav-wrapper.show{left:0}.my-element{display:block;position:relative}.my-element.card:hover:before{content:"You can apply for card one month after registration"}.my-element.loan:hover:before{content:"You can apply for loan one month after registration"}.my-element:hover:before{background-color:#e53b24;border-radius:5px;color:#fff;left:0;padding:5px;position:absolute;top:-10px;width:250px}',""]),r.locals={},t.exports=r},324:function(t,e,n){var content=n(328);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("20b226d6",content,!0,{sourceMap:!1})},325:function(t,e,n){var content=n(330);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("0da81da5",content,!0,{sourceMap:!1})},326:function(t,e,n){"use strict";n.r(e);var r=n(8),c=(n(48),n(13),n(38),n(20),n(37),n(90),{data:function(){return{withdrawalVolume:0,depositVolume:0,transferVolume:0,loanVolume:0,user:""}},methods:{setVolumes:function(t){var e=this;t.forEach((function(t){"withdrawal"==t._id&&(e.withdrawalVolume=t.volume),"deposit"==t._id&&(e.depositVolume=t.volume),"transfer"==t._id&&(e.transferVolume=t.volume),"loan"==t._id&&(e.loanVolume=t.volume)}))},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getTransactionVolume:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r,c;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return r="?username=".concat(t),n.prev=1,n.next=4,e.$axios.get("/transactions/get-volumes/".concat(r));case 4:c=n.sent,e.setVolumes(c.data.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},getUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:return n=e.sent,e.next=6,n.data.user;case 6:t.user=e.sent,t.getTransactionVolume(t.user.username),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},mounted:function(){this.getUser()}}),o=n(56),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-card-wrap"},[e("h4",{staticClass:"card-wrap-title volume"},[t._v("Your Transaction Volume")]),t._v(" "),e("div",{staticClass:"each-volume"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("h1",{staticClass:"volume-title"},[t._v("Withdrawal")]),t._v(" "),e("h1",{staticClass:"volume-title value"},[t._v("$"+t._s(t.formatMoney(t.withdrawalVolume)))])]),t._v(" "),e("div",{staticClass:"each-volume creams"},[t._m(2),t._v(" "),t._m(3),t._v(" "),e("h1",{staticClass:"volume-title"},[t._v("Transfer")]),t._v(" "),e("h1",{staticClass:"volume-title value creams"},[t._v("$"+t._s(t.transferVolume))])]),t._v(" "),e("div",{staticClass:"each-volume pink"},[t._m(4),t._v(" "),t._m(5),t._v(" "),e("h1",{staticClass:"volume-title"},[t._v("Loan")]),t._v(" "),e("h1",{staticClass:"volume-title value pink"},[t._v("$"+t._s(t.formatMoney(t.loanVolume)))])]),t._v(" "),e("div",{staticClass:"each-volume red"},[t._m(6),t._v(" "),t._m(7),t._v(" "),e("h1",{staticClass:"volume-title"},[t._v("Deposit")]),t._v(" "),e("h1",{staticClass:"volume-title value red"},[t._v("$"+t._s(t.formatMoney(t.depositVolume)))])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"volume-icon-holder"},[t("img",{staticClass:"volume-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641400500eac7c2351f1d064_withdraw.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-label"},[t._v("Make Fast "),e("br"),t._v("Withdrawal")])},function(){var t=this._self._c;return t("div",{staticClass:"volume-icon-holder creams"},[t("img",{staticClass:"volume-icon big",attrs:{src:"/images/white-transfer.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-label"},[t._v("Make Fast "),e("br"),t._v("Transfer")])},function(){var t=this._self._c;return t("div",{staticClass:"volume-icon-holder pink"},[t("img",{staticClass:"volume-icon big",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64140703dba3674f97b31faf_loan.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-label"},[t._v("Get Fast "),e("br"),t._v("Loan")])},function(){var t=this._self._c;return t("div",{staticClass:"volume-icon-holder red"},[t("img",{staticClass:"volume-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/6414049c976598d4bd9eb06b_deposits.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-label"},[t._v("Make Unlimited "),e("br"),t._v("Deposit")])}],!1,null,null,null);e.default=component.exports},327:function(t,e,n){"use strict";n(324)},328:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,"h1.balance-title{margin-top:10px}h1.balance-name{color:#e524c5;font-size:20px;margin-bottom:0}",""]),r.locals={},t.exports=r},329:function(t,e,n){"use strict";n(325)},330:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,".list-item.pink{background:#f8e9f5}.list-item.red{background:#fff6f5}",""]),r.locals={},t.exports=r},331:function(t,e,n){"use strict";n.r(e);var r=n(8),c=(n(48),n(20),n(37),n(13),n(90),{data:function(){return{user:"",account:""}},methods:{formatMoney:function(t){return 0==t||""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},formatDate:function(){var t=(new Date).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:n=e.sent,t.user=n.data.user,t.getAccount(t.user.username),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getAccount:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.get("/account/".concat(t));case 3:r=n.sent,e.account=r.data.data,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}},mounted:function(){this.getUser()}}),o=(n(327),n(56)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"account-wrapper"},[e("h1",{staticClass:"balance-title balance-name"},[t._v("\n    "+t._s(t.user.firstName)+" "+t._s(t.user.middleName)+" "+t._s(t.user.lastName)+"\n  ")]),t._v(" "),e("h1",{staticClass:"balance-title"},[t._v("Your Total Balance")]),t._v(" "),t.account?e("h1",{staticClass:"balance"},[t._v("$"+t._s(t.formatMoney(t.account.balance)))]):t._e(),t._v(" "),e("div",{staticClass:"date"},[t._v(t._s(t.formatDate()))]),t._v(" "),e("div",{staticClass:"accounts-holder"},[e("div",{staticClass:"each-account"},[e("div",{staticClass:"account-name"},[t._v("Savings")]),t._v(" "),t.account?e("h1",{staticClass:"each-account-balance"},[t._v("\n        $"+t._s(t.formatMoney(t.account.balance))+"\n      ")]):t._e()]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-account"},[e("div",{staticClass:"account-name check"},[t._v("Fixed")]),t._v(" "),e("h1",{staticClass:"each-account-balance"},[t._v("$0.00")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-account"},[e("div",{staticClass:"account-name current"},[t._v("current")]),t._v(" "),e("h1",{staticClass:"each-account-balance"},[t._v("$0.00")])])}],!1,null,null,null);e.default=component.exports},332:function(t,e,n){"use strict";n.r(e);var r=n(8),c=(n(48),{data:function(){return{transactions:[],user:""}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getTime:function(data){var t=new Date(data),e=t.getHours(),n=t.getMinutes(),r=e>=12?"PM":"AM";return(e=(e%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+r},getTransactions:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/transactions/?limit=4&username=".concat(t.user.username,"&sort=-dateCreated"));case 3:n=e.sent,t.transactions=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:n=e.sent,t.user=n.data.user,t.getTransactions(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getUser()}}),o=(n(329),n(56)),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"account-wrapper latest"},[e("h4",{staticClass:"card-wrap-title volume"},[t._v("Latest Activities")]),t._v(" "),e("ul",{staticClass:"latest-list",attrs:{role:"list"}},t._l(t.transactions,(function(n){return e("li",{key:n._id,staticClass:"list-item",class:{grean:"Transfer"==n.transactionType,pink:"Loan"==n.transactionType,red:"Deposit"==n.transactionType}},[e("div",{staticClass:"latest-flex"},[e("div",{staticClass:"latest-icon-holder"},["Transfer"==n.transactionType?e("img",{staticClass:"volume-icon big",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641413102f7f81ab89a821c6_exchange.svg",loading:"lazy",alt:""}}):e("img",{staticClass:"volume-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641400500eac7c2351f1d064_withdraw.svg",loading:"lazy",alt:""}})]),t._v(" "),e("h4",{staticClass:"latest-title"},[t._v(t._s(n.transactionType))])]),t._v(" "),e("div",{staticClass:"latest-body"},[e("div",{staticClass:"latest-time"},[t._v("\n          "+t._s(t.getTime(n.dateCreated))+",\n          "+t._s(t.formatDate(n.dateCreated))+"\n        ")]),t._v(" "),e("h4",{staticClass:"latest-value"},[t._v("$"+t._s(n.amount))])])])})),0)])}),[],!1,null,null,null);e.default=component.exports},355:function(t,e,n){var content=n(388);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("1f974ace",content,!0,{sourceMap:!1})},387:function(t,e,n){"use strict";n(355)},388:function(t,e,n){var r=n(142)((function(i){return i[1]}));r.push([t.i,".msg{text-align:left;width:100%}",""]),r.locals={},t.exports=r},428:function(t,e,n){"use strict";n.r(e);n(57);var r=n(8),c=(n(48),n(91),n(20),n(37),n(13),n(90),n(317)),o=n(326),l={data:function(){return{receiverBank:"",receiverAccountType:"",receiverAddress:"",receiverName:"",amount:0,user:"",account:"",pin:"",newPin:"",confirmPin:"",setPin:!1,confirmWithdrawal:!1,msg:"",colour:!1,showMsg:!1}},methods:{showMessage:function(t){var e=this;this.msg=t,this.showMsg=!0,setTimeout((function(){e.msg="",e.showMsg=!1}),6e3)},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},beginWithdrawal:function(){this.amount<5?this.showMessage("You can't transact below 5 ".concat(this.account.currency)):""!=this.receiverBank&&""!=this.receiverAddress&&""!=this.receiverName?this.amount>this.account.balance?this.showMessage("Sorry you have insufficient fund for this transaction"):this.confirmWithdrawal=!0:this.showMessage("Please fill in the necessary fields above")},cancelWithdrawal:function(){this.confirmWithdrawal=!1},checkPin:function(){if(this.user.pin){if(this.pin!=this.user.pin)return void this.showMessage("Incorrect pin, please try again");this.pin==this.user.pin&&(this.setPin=!1,this.processWithdrawal())}else{if(this.newPin!=this.confirmPin)return void this.showMessage("Sorry your pin do not match!");this.setPin=!0,this.processWithdrawal()}},processWithdrawal:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form={amount:t.amount,receiverAccountType:t.receiverAccountType,receiverAddress:t.receiverAddress,receiverBank:t.receiverBank,receiverName:t.receiverName,newPin:t.newPin,confrimPin:t.confirmPin,pin:t.pin,setPin:t.setPin,account:t.account,transactionType:"withdrawal",user:t.user,date:"".concat((new Date).getDate(),"/").concat((new Date).getMonth(),"/").concat((new Date).getFullYear()),dateCreated:(new Date).getTime()},e.prev=1,e.next=4,t.$axios.post("/transactions",form);case 4:t.colour=!0,t.showMessage("Your transaction was successful. Reciepient will be credited before 24 hours."),t.$router.push("/transfer"),e.next=12;break;case 9:e.prev=9,e.t0=e.catch(1),t.showMessage(e.t0.response.data.message);case 12:case"end":return e.stop()}}),e,null,[[1,9]])})))()},getUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:n=e.sent,t.user=n.data.user,t.getAccount(t.user.username),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()},getAccount:function(t){var e=this;return Object(r.a)(regeneratorRuntime.mark((function n(){var r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.prev=0,n.next=3,e.$axios.get("/account/".concat(t));case 3:r=n.sent,e.account=r.data.data,n.next=10;break;case 7:n.prev=7,n.t0=n.catch(0),console.log(n.t0.response.data.message);case 10:case"end":return n.stop()}}),n,null,[[0,7]])})))()}},mounted:function(){this.getUser()},components:{DashboardFooter:c.default,DashboardTransactions:o.default}},v=(n(387),n(56)),component=Object(v.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-wrapper withdraw"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"dashboard-content"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"content-body"},[t.confirmWithdrawal?e("div",{staticClass:"dashboard-card-wrap"},[e("div",{staticClass:"card-types-wrapper"},[e("div",{staticClass:"card-title"},[t._v("Confirm & Send to..")]),t._v(" "),e("div",{staticClass:"type-card select account"},[e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Type")]),t._v(" "),t.receiverAccountType?e("div",[t._v(t._s(t.receiverAccountType))]):e("div",[t._v("Not Available")])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Name")]),t._v(" "),e("div",[t._v(t._s(t.receiverName))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Address")]),t._v(" "),e("div",[t._v(t._s(t.receiverAddress))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Bank")]),t._v(" "),e("div",[t._v(t._s(t.receiverBank))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Amount")]),t._v(" "),e("div",[t._v(t._s(t.amount))])])])]),t._v(" "),t.user.pin?t._e():e("div",{staticClass:"card-title",staticStyle:{"margin-bottom":"10px"}},[t._v("\n          You don't have Transaction Pin, create below to proceed\n        ")]),t._v(" "),t.user.pin?t._e():e("div",{staticClass:"each-form-field"},[e("label",{staticClass:"label",attrs:{for:"name-7"}},[t._v("Enter 6 Digits Transaction Pin")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.newPin,expression:"newPin"}],staticClass:"profile-input w-input",attrs:{type:"password",maxlength:"6",placeholder:"Enter Pin"},domProps:{value:t.newPin},on:{input:function(e){e.target.composing||(t.newPin=e.target.value)}}})]),t._v(" "),t.user.pin?e("div",{staticClass:"each-form-field"},[e("label",{staticClass:"label",attrs:{for:"name-7"}},[t._v("Enter Transaction Pin")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.pin,expression:"pin"}],staticClass:"profile-input w-input",attrs:{type:"password",maxlength:"6",placeholder:"Enter Pin"},domProps:{value:t.pin},on:{input:function(e){e.target.composing||(t.pin=e.target.value)}}})]):e("div",{staticClass:"each-form-field"},[e("label",{staticClass:"label",attrs:{for:"name-7"}},[t._v("Confirm Pin")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.confirmPin,expression:"confirmPin"}],staticClass:"profile-input w-input",attrs:{type:"password",maxlength:"6",placeholder:"Confirm Pin"},domProps:{value:t.confirmPin},on:{input:function(e){e.target.composing||(t.confirmPin=e.target.value)}}})]),t._v(" "),t.showMsg?e("div",{staticClass:"msg",class:{error:!t.colour}},[t._v("\n          "+t._s(t.msg)+"\n        ")]):t._e(),t._v(" "),e("div",{staticClass:"button-holder"},[e("span",{staticClass:"btn-custom w-button",on:{click:t.checkPin}},[t._v("Save")]),e("a",{staticClass:"btn-custom w-button",attrs:{href:"#"},on:{click:t.cancelWithdrawal}},[t._v("Back")])])]):e("div",{staticClass:"dashboard-card-wrap"},[e("div",{staticClass:"card-types"},[e("div",{staticClass:"card-types-wrapper"},[e("div",{staticClass:"card-title"},[t._v("From Your Active Account")]),t._v(" "),t.account?e("div",{staticClass:"type-card select"},[e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Type")]),t._v(" "),e("div",[t._v(t._s(t.account.accountType))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Name")]),t._v(" "),e("div",[t._v("\n                  "+t._s("".concat(t.user.firstName," ").concat(t.user.middleName," ").concat(t.user.lastName," "))+"\n                ")])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Address")]),t._v(" "),e("div",[t._v(t._s(t.account.accountNumber))])]),t._v(" "),e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Balance")]),t._v(" "),e("div",[t._v(t._s(t.formatMoney(t.account.balance)))])])]):t._e(),t._v(" "),e("div",{staticClass:"type-card other select",staticStyle:{display:"none"}},[e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Currency")]),t._v(" "),e("div",[t._v(t._s(t.account.currency))])]),t._v(" "),t._m(0),t._v(" "),t._m(1)])])]),t._v(" "),e("div",{staticClass:"card-title second"},[t._v("\n          Enter Account Details To Withdraw To\n        ")]),t._v(" "),e("div",{staticClass:"personal-form payment-input w-form"},[e("div",{staticClass:"form-flex"},[e("div",{staticClass:"each-form-field"},[e("label",{staticClass:"label",attrs:{for:"name-7"}},[t._v("Bank Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.receiverBank,expression:"receiverBank"}],staticClass:"profile-input w-input",attrs:{type:"text",placeholder:"Enter Bank Name"},domProps:{value:t.receiverBank},on:{input:function(e){e.target.composing||(t.receiverBank=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-form-field"},[e("label",{staticClass:"label",attrs:{for:"name-7"}},[t._v("Account Type (optional)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.receiverAccountType,expression:"receiverAccountType"}],staticClass:"profile-input w-input",attrs:{type:"text",placeholder:"Account Type (Eg Savings)"},domProps:{value:t.receiverAccountType},on:{input:function(e){e.target.composing||(t.receiverAccountType=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-form-field"},[e("label",{staticClass:"label",attrs:{for:"name-7"}},[t._v("Account Name")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.receiverName,expression:"receiverName"}],staticClass:"profile-input w-input",attrs:{type:"text",placeholder:"Enter Account Name"},domProps:{value:t.receiverName},on:{input:function(e){e.target.composing||(t.receiverName=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-form-field"},[e("label",{staticClass:"label",attrs:{for:"name-7"}},[t._v("Address")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.receiverAddress,expression:"receiverAddress"}],staticClass:"profile-input w-input",attrs:{type:"number",placeholder:"Enter Account Address"},domProps:{value:t.receiverAddress},on:{input:function(e){e.target.composing||(t.receiverAddress=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"each-form-field"},[e("label",{staticClass:"label",attrs:{for:"name-7"}},[t._v("Amount ($)")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.amount,expression:"amount"}],staticClass:"profile-input w-input",attrs:{type:"number",placeholder:"Enter Amount"},domProps:{value:t.amount},on:{input:function(e){e.target.composing||(t.amount=e.target.value)}}})]),t._v(" "),t.showMsg?e("div",{staticClass:"msg",class:{error:!t.colour}},[t._v("\n              "+t._s(t.msg)+"\n            ")]):t._e(),t._v(" "),e("div",{staticClass:"button-holder"},[e("span",{staticClass:"btn-custom w-button",on:{click:t.beginWithdrawal}},[t._v("Proceed")]),e("span",{staticClass:"btn-custom w-button"},[t._v("Cancel")])])])])]),t._v(" "),e("dashboard-balance"),t._v(" "),e("dashboard-transactions"),t._v(" "),e("dashboard-activities")],1),t._v(" "),e("dashboard-footer")],1)],1)}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Date")]),t._v(" "),e("div",[t._v("124,110,29")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"card-type-flex"},[e("h4",{staticClass:"type-card-title"},[t._v("Available")]),t._v(" "),e("div",[t._v("189,00")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:n(319).default,DashboardHeader:n(318).default,DashboardBalance:n(331).default,DashboardTransactions:n(326).default,DashboardActivities:n(332).default,DashboardFooter:n(317).default})}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[52,20,21,22,23],{314:function(t,e,n){var content=n(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("3b23c5d2",content,!0,{sourceMap:!1})},315:function(t,e,n){var content=n(323);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("3feb2699",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";n.r(e);var o={},r=n(56),component=Object(r.a)(o,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"dashboard-footer",attrs:{id:"footer"}},[t("h3",{staticClass:"footer-text"},[this._v("AS Finance... We are here for you!")])])}],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n.r(e);n(57);var o=n(8),r=(n(48),{head:function(){return{link:[{rel:"stylesheet",href:"/css/dashboard.css",type:"text/css"}]}},data:function(){return{user:""}},methods:{toggleNav:function(){var t=document.querySelector(".nav-wrapper");t.classList.contains("show")?t.classList.remove("show"):t.classList.add("show")},hideNav:function(){document.querySelector(".nav-wrapper").classList.remove("show")},goToProfile:function(){this.$router.push("/dashboard/profile")},goToNotification:function(){this.$router.push("/dashboard/notification")},checkAuthentication:function(){this.isAuthenticated||this.$router.push("/login")},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()},getUser:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:n=e.sent,t.user=n.data.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},computed:{FILE_URL:function(){return this.$store.state.fileURL},isAuthenticated:function(){return this.$store.getters.isAuthenticated}},mounted:function(){this.hideNav(),this.$store.commit("SET_URL",this.$config.FILE_URL),this.checkAuthentication(),this.getUser()}}),c=(n(320),n(56)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-header"},[t._m(0),t._v(" "),e("div",{staticClass:"top-icon-holder"},[e("div",{staticClass:"each-icon-wrapper close",on:{click:t.toggleNav}},[e("img",{staticClass:"top-icons menu",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641442165b5e4a499ae9f723_menu-close.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"each-icon-wrapper",on:{click:t.goToNotification}},[e("img",{staticClass:"top-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f055e38d2c4db8492c_notification.svg",loading:"lazy",alt:""}})]),t._v(" "),t.user.profilePicture?e("div",{staticClass:"each-icon-wrapper round",on:{click:t.goToProfile}},[e("div",{staticClass:"top-image",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.user.profilePicture,")")}})]):t._e(),t._v(" "),e("div",{staticClass:"each-icon-wrapper",on:{click:t.logout}},[e("img",{staticClass:"top-icons add",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0fbeda4ab78bee286_logout.svg",loading:"lazy",alt:""}})])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-caption"},[e("h1",{staticClass:"header-title"},[t._v("Welcome to AS Finance LTD")]),t._v(" "),e("div",[t._v("It's easier than you thought with"),e("br"),t._v("AS Finance LTD")])])}],!1,null,null,null);e.default=component.exports},319:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(26),n(48),{data:function(){return{route:""}},methods:{authenticateUser:function(){"Admin"==this.user.staffType&&this.$router.push("/admin")},hideNav:function(){document.querySelector(".nav-wrapper").classList.remove("show")},logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()}},mounted:function(){this.authenticateUser(),this.route=this.$route.name},computed:{user:function(){return this.$store.state.auth.user},showDashobardNav:function(){return this.$store.state.showDashboardNav}}}),c=(n(322),n(56)),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-wrapper"},[e("div",{staticClass:"vertical-navigation"},[e("img",{staticClass:"menu-toggle",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641442165b5e4a499ae9f723_menu-close.svg",loading:"lazy",alt:""},on:{click:t.hideNav}}),e("nuxt-link",{staticClass:"brand w-inline-block",attrs:{to:"/"}},[e("img",{staticClass:"logo",attrs:{src:"/images/Colored-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"nav-intro"},[t._v("Enjoy Smooth Banking Experience")]),t._v(" "),e("ul",{staticClass:"nav-list",attrs:{role:"list"}},[e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"dashboard"==t.route},attrs:{to:"/dashboard"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641332980aba34f385a4eeac_dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Dashboard")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"profile"==t.route},attrs:{to:"/profile"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0e476a25fb94bb5bc_profile.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Profile")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"deposit"==t.route},attrs:{to:"/deposit"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133a9b2d3c101d19bfdf93_deposit.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Deposit")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"transfer"==t.route},attrs:{to:"/transfer"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133c52259c487edf10323c_buyer-pay-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Transfer")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"internal"==t.route},attrs:{to:"/internal"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133d2ec4c4694654dfe706_transfer.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("User 2 User Transfer")])])],1),t._v(" "),t._m(0),t._v(" "),t._m(1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"transactions"==t.route},attrs:{to:"/transactions"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641332980aba34f385a4eeac_dashboard.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Transactions")])])],1),t._v(" "),e("li",[e("nuxt-link",{staticClass:"nav-links w-inline-block",class:{active:"notification"==t.route},attrs:{to:"/notification"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f055e38d2c4db8492c_notification.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Notifications")])])],1),t._v(" "),e("li",{on:{click:t.logout}},[t._m(2)])]),t._v(" "),e("h1",{staticClass:"brand-name"},[t._v("AS Finance LTD")]),t._v(" "),e("div",[t._v("The best choice of Online-Banking with No-Restrictions")])],1)])}),[function(){var t=this,e=t._self._c;return e("li",{staticClass:"my-element loan"},[e("span",{staticClass:"nav-links w-inline-block"},[e("img",{staticClass:"nav-icons",attrs:{src:"/images/loan.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Loan")])])])},function(){var t=this,e=t._self._c;return e("li",{staticClass:"my-element card"},[e("span",{staticClass:"nav-links w-inline-block"},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64133a9b5f5f5607f2ef1d8d_card.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Virtual Card")])])])},function(){var t=this,e=t._self._c;return e("a",{staticClass:"nav-links w-inline-block",attrs:{href:"#"}},[e("img",{staticClass:"nav-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0fbeda4ab78bee286_logout.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Logout")])])}],!1,null,null,null);e.default=component.exports},320:function(t,e,n){"use strict";n(314)},321:function(t,e,n){var o=n(142)((function(i){return i[1]}));o.push([t.i,".each-icon-wrapper .top-icons{margin:0 auto}",""]),o.locals={},t.exports=o},322:function(t,e,n){"use strict";n(315)},323:function(t,e,n){var o=n(142)((function(i){return i[1]}));o.push([t.i,'.nav-wrapper{transition:all .3s}.nav-wrapper.show{left:0}.my-element{display:block;position:relative}.my-element.card:hover:before{content:"You can apply for card one month after registration"}.my-element.loan:hover:before{content:"You can apply for loan one month after registration"}.my-element:hover:before{background-color:#e53b24;border-radius:5px;color:#fff;left:0;padding:5px;position:absolute;top:-10px;width:250px}',""]),o.locals={},t.exports=o},326:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(48),n(13),n(38),n(20),n(37),n(90),{data:function(){return{withdrawalVolume:0,depositVolume:0,transferVolume:0,loanVolume:0,user:""}},methods:{setVolumes:function(t){var e=this;t.forEach((function(t){"withdrawal"==t._id&&(e.withdrawalVolume=t.volume),"deposit"==t._id&&(e.depositVolume=t.volume),"transfer"==t._id&&(e.transferVolume=t.volume),"loan"==t._id&&(e.loanVolume=t.volume)}))},formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getTransactionVolume:function(t){var e=this;return Object(o.a)(regeneratorRuntime.mark((function n(){var o,r;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return o="?username=".concat(t),n.prev=1,n.next=4,e.$axios.get("/transactions/get-volumes/".concat(o));case 4:r=n.sent,e.setVolumes(r.data.data),n.next=11;break;case 8:n.prev=8,n.t0=n.catch(1),console.log(n.t0.response.data.message);case 11:case"end":return n.stop()}}),n,null,[[1,8]])})))()},getUser:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:return n=e.sent,e.next=6,n.data.user;case 6:t.user=e.sent,t.getTransactionVolume(t.user.username),e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},mounted:function(){this.getUser()}}),c=n(56),component=Object(c.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-card-wrap"},[e("h4",{staticClass:"card-wrap-title volume"},[t._v("Your Transaction Volume")]),t._v(" "),e("div",{staticClass:"each-volume"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("h1",{staticClass:"volume-title"},[t._v("Withdrawal")]),t._v(" "),e("h1",{staticClass:"volume-title value"},[t._v("$"+t._s(t.formatMoney(t.withdrawalVolume)))])]),t._v(" "),e("div",{staticClass:"each-volume creams"},[t._m(2),t._v(" "),t._m(3),t._v(" "),e("h1",{staticClass:"volume-title"},[t._v("Transfer")]),t._v(" "),e("h1",{staticClass:"volume-title value creams"},[t._v("$"+t._s(t.transferVolume))])]),t._v(" "),e("div",{staticClass:"each-volume pink"},[t._m(4),t._v(" "),t._m(5),t._v(" "),e("h1",{staticClass:"volume-title"},[t._v("Loan")]),t._v(" "),e("h1",{staticClass:"volume-title value pink"},[t._v("$"+t._s(t.formatMoney(t.loanVolume)))])]),t._v(" "),e("div",{staticClass:"each-volume red"},[t._m(6),t._v(" "),t._m(7),t._v(" "),e("h1",{staticClass:"volume-title"},[t._v("Deposit")]),t._v(" "),e("h1",{staticClass:"volume-title value red"},[t._v("$"+t._s(t.formatMoney(t.depositVolume)))])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"volume-icon-holder"},[t("img",{staticClass:"volume-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641400500eac7c2351f1d064_withdraw.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-label"},[t._v("Make Fast "),e("br"),t._v("Withdrawal")])},function(){var t=this._self._c;return t("div",{staticClass:"volume-icon-holder creams"},[t("img",{staticClass:"volume-icon big",attrs:{src:"/images/white-transfer.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-label"},[t._v("Make Fast "),e("br"),t._v("Transfer")])},function(){var t=this._self._c;return t("div",{staticClass:"volume-icon-holder pink"},[t("img",{staticClass:"volume-icon big",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64140703dba3674f97b31faf_loan.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-label"},[t._v("Get Fast "),e("br"),t._v("Loan")])},function(){var t=this._self._c;return t("div",{staticClass:"volume-icon-holder red"},[t("img",{staticClass:"volume-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/6414049c976598d4bd9eb06b_deposits.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"volume-label"},[t._v("Make Unlimited "),e("br"),t._v("Deposit")])}],!1,null,null,null);e.default=component.exports},353:function(t,e,n){var content=n(382);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(143).default)("9a8cd518",content,!0,{sourceMap:!1})},381:function(t,e,n){"use strict";n(353)},382:function(t,e,n){var o=n(142)((function(i){return i[1]}));o.push([t.i,".notice-title span{display:block;font-size:13px;font-weight:400}",""]),o.locals={},t.exports=o},425:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(48),n(57),n(317)),c={data:function(){return{notifications:[],limit:5,currentPage:1,date:"",notificationLength:"",user:"",showFilter:!1,transactions:["Deposit","Transfer","Withdrawal","Loan"],showTransactionList:!0,transaction:"All Transactions",pages:function(){for(var t=[],e=Math.ceil(this.notificationLength/this.limit),i=0;i<e;i++)t.push("i");return t}}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},getTime:function(data){var t=new Date(data),e=t.getHours(),n=t.getMinutes(),o=e>=12?"PM":"AM";return(e=(e%=12)||12)+":"+(n=n<10?"0"+n:n)+" "+o},processDate:function(){this.date="".concat(new Date(this.date).getDate(),"/").concat(new Date(this.date).getMonth()+1,"/").concat(new Date(this.date).getFullYear()),this.getNotifications()},paginate:function(t){this.currentPage=t,this.getNotifications()},setTransactionType:function(t){this.transaction=t,"All Transactions"==t&&(this.date=""),this.getNotifications(),this.showTransactionList=!0},getNotifications:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,r,c;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=""!=t.date?"&date=".concat(t.date):"",o="All Transactions"==t.transaction?"":"&subject=".concat(t.transaction," Notice"),r="All Transactions"!=t.transaction?"?username=".concat(t.user.username,"&sort=-dateCreated&limit=").concat(t.limit,"&page=").concat(t.currentPage).concat(n).concat(o):"?username=".concat(t.user.username,"&sort=-dateCreated&limit=").concat(t.limit,"&page=").concat(t.currentPage).concat(n),e.prev=3,e.next=6,t.$axios.get("/transactions/notifications/".concat(r));case 6:c=e.sent,t.notifications=c.data.data,t.notificationLength=c.data.length,e.next=14;break;case 11:e.prev=11,e.t0=e.catch(3),console.log(e.t0.response.data.message);case 14:case"end":return e.stop()}}),e,null,[[3,11]])})))()},getUser:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:n=e.sent,t.user=n.data.user,t.getNotifications(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getUser()},components:{DashboardNavigation:n(319).default,DashboardFooter:r.default}},l=(n(381),n(56)),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-wrapper notice"},[e("dashboard-navigation"),t._v(" "),e("div",{staticClass:"dashboard-content"},[e("dashboard-header"),t._v(" "),e("div",{staticClass:"content-body"},[e("div",{staticClass:"dashboard-card-wrap transact"},[t._m(0),t._v(" "),e("div",{staticClass:"transaction-filter"},[t.showFilter?e("div",{staticClass:"filter-head"},[e("h1",{staticClass:"filter-title",on:{click:function(e){t.showTransactionList=!t.showTransactionList}}},[t._v("\n              "+t._s(t.transaction)+"\n            ")]),t._v(" "),e("img",{staticClass:"filter-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/64145fbd036e352a3f4aec8f_caret.svg",loading:"lazy",alt:""},on:{click:function(e){t.showTransactionList=!t.showTransactionList}}}),t._v(" "),e("ul",{staticClass:"select-list",class:{hide:t.showTransactionList},attrs:{role:"list"}},[e("li",{staticClass:"select-item",on:{click:function(e){return t.setTransactionType("All Transactions")}}},[e("div",[t._v("All Transactions")])]),t._v(" "),t._l(t.transactions,(function(n,o){return e("li",{key:o,staticClass:"select-item",on:{click:function(e){return t.setTransactionType(n)}}},[e("div",[t._v(t._s(n))])])}))],2)]):t._e(),t._v(" "),e("img",{staticClass:"filter-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641463ca1bb6f43f6edc8725_calendd.svg",loading:"lazy",alt:""}}),t._v(" "),e("input",{directives:[{name:"model",rawName:"v-model",value:t.date,expression:"date"}],attrs:{type:"date"},domProps:{value:t.date},on:{change:t.processDate,input:function(e){e.target.composing||(t.date=e.target.value)}}})]),t._v(" "),e("div",{staticClass:"notice-body"},t._l(t.notifications,(function(n){return e("div",{key:n._id,staticClass:"each-notice"},[e("img",{staticClass:"notice-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641481bde77ff933d922c5fb_icon-removebg-preview.png",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"notice-holder"},[e("h4",{staticClass:"notice-title"},[t._v("\n                "+t._s(n.subject)+"\n                "),e("span",{staticClass:"date"},[t._v(t._s(t.getTime(n.dateCreated))+"\n                  "+t._s(t.formatDate(n.dateCreated)))])]),t._v(" "),e("div",[t._v("\n                "+t._s(n.message)+"\n              ")])])])})),0),t._v(" "),1!=t.pages().length?e("ul",{staticClass:"pagination-list",attrs:{role:"list"}},[1!=t.currentPage?e("li",{staticClass:"paginate",on:{click:function(e){return t.paginate(t.currentPage-1)}}},[e("img",{staticClass:"paginate-icon",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641464efc68c4e2723b54a93_arrow.svg",loading:"lazy",alt:""}})]):t._e(),t._v(" "),t._l(t.pages(),(function(n,o){return e("li",{key:o,staticClass:"paginate",class:{active:o==t.currentPage-1},on:{click:function(e){return t.paginate(o+1)}}},[e("div",[t._v(t._s(o+1))])])})),t._v(" "),t.currentPage<t.pages(t.currentPage+1).length?e("li",{staticClass:"paginate",on:{click:function(e){return t.paginate(t.currentPage+1)}}},[e("img",{staticClass:"paginate-icon flip",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641464efc68c4e2723b54a93_arrow.svg",loading:"lazy",alt:""}})]):t._e()],2):t._e()]),t._v(" "),t._m(1),t._v(" "),e("dashboard-transactions")],1),t._v(" "),e("dashboard-footer")],1)],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"card-types"},[t("div",{staticClass:"card-types-wrapper"},[t("div",{staticClass:"card-title"},[this._v("Notification History")])])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"account-wrapper review"},[e("h4",{staticClass:"card-wrap-title volume"},[t._v("Write your review")]),t._v(" "),e("div",{staticClass:"personal-form w-form"},[e("div",{staticClass:"form-flex"},[e("div",{staticClass:"each-form-field flex"},[e("label",{staticClass:"label",attrs:{for:"name-7"}},[t._v("Rating")]),e("input",{staticClass:"rating w-input",attrs:{type:"number",maxlength:"256",name:"name-4","data-name":"Name 4",placeholder:"3.5",id:"name-4"}})]),t._v(" "),e("textarea",{staticClass:"text-body w-input",attrs:{placeholder:"Type your message",maxlength:"5000"}}),t._v(" "),e("div",{staticClass:"button-holder"},[e("span",{staticClass:"btn-custom w-button"},[t._v("Save")])])])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{DashboardNavigation:n(319).default,DashboardHeader:n(318).default,DashboardTransactions:n(326).default,DashboardFooter:n(317).default})}}]);
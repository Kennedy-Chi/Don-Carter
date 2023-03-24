(window.webpackJsonp=window.webpackJsonp||[]).push([[32,6,8,16],{302:function(t,c,l){var content=l(310);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(143).default)("c33cd76c",content,!0,{sourceMap:!1})},305:function(t,c,l){"use strict";l.r(c);var e={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},o=l(56),component=Object(o.a)(e,(function(){this._self._c;return this._m(0)}),[function(){var t=this._self._c;return t("div",{staticClass:"footer",attrs:{id:"footer"}},[t("div",[this._v("www.kennytechstudios.com")])])}],!1,null,null,null);c.default=component.exports},306:function(t,c,l){"use strict";l.r(c);l(49),l(58),l(26);var e={data:function(){return{navItems:[{name:"Dashboard",image:"dashboard.svg",colored:"colored-dashboard.svg",route:"/admin",activeLink:!1,imageSrc:"dashboard.svg",routePath:"admin"},{name:"Profile",image:"profile.svg",colored:"colored-profile.svg",route:"/admin/profile",activeLink:!1,imageSrc:"profile.svg",routePath:"admin-profile"},{name:"Users",image:"users.svg",colored:"colored-users.svg",route:"/admin/users",activeLink:!1,imageSrc:"users.svg",routePath:"admin-users"},{name:"Add User",image:"user.svg",colored:"colored-user.svg",route:"/admin/add-user/new",activeLink:!1,imageSrc:"user.svg",routePath:"admin-add-user"},{name:"Plans/Accounts",image:"plans.svg",colored:"colored-plans.svg",route:"/admin/plans",activeLink:!1,imageSrc:"plans.svg",routePath:"admin-plans"},{name:"Reviews",image:"reviews.svg",colored:"colored-reviews.svg",route:"/admin/reviews",activeLink:!1,imageSrc:"reviews.svg",routePath:"admin-reviews"},{route:"/admin/currencies",name:"Currency",image:"currency.svg",colored:"colored-currency.svg",activeLink:!1,imageSrc:"currency.svg",routePath:"admin-currencies"},{route:"/admin/transactions/list",name:"Transactions",image:"deposit.svg",colored:"colored-deposit.svg",activeLink:!1,imageSrc:"deposit.svg",routePath:"admin-transactions"},{route:"/admin/email",name:"Emails",image:"emails.svg",colored:"colored-emails.svg",activeLink:!1,imageSrc:"emails.svg",routePath:"admin-email"},{route:"/admin/pages",name:"Pages",image:"pages.svg",colored:"colored-pages.svg",activeLink:!1,imageSrc:"pages.svg",routePath:"admin-pages"},{route:"/admin/settings",name:"Settings",image:"settings.svg",colored:"colored-settings.svg",activeLink:!1,imageSrc:"settings.svg",routePath:"admin-settings"},{name:"Referrals",image:"referrals.svg",colored:"colored-referrals.svg",activeLink:!1,imageSrc:"referrals.svg"},{name:"Logout",image:"logout.svg",colored:"colored-logout.svg",activeLink:!1,imageSrc:"logout.svg"}],route:""}},computed:{navState:function(){return this.$store.state.navState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},activateLink:function(t){t.activeLink=!0,t.imageSrc=t.colored},deactivateLink:function(t){t.activeLink=!1,t.imageSrc=t.image}},mounted:function(){this.route=this.$route.name}},o=(l(309),l(56)),component=Object(o.a)(e,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[c("div",{staticClass:"sticky-navbar"},[c("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[c("img",{staticClass:"brand",attrs:{src:"/images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/images/Logo.png 500w, /images/Logo.png 800w, /images/Logo.png 1080w, /images/Logo.png 2284w",alt:""}})]),t._v(" "),c("img",{staticClass:"menu-close",attrs:{src:"/images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),c("ul",{staticClass:"nav-list",attrs:{role:"list"}},[c("li",{staticClass:"nav-list"},t._l(t.navItems,(function(l,i){return c("nuxt-link",{key:i,staticClass:"nav-link w-inline-block",class:{active:t.route==l.routePath||t.route.includes(l.routePath)||l.activeLink},attrs:{to:"".concat(l.route)},on:{mouseenter:function(c){return t.activateLink(l)},mouseleave:function(c){return t.deactivateLink(l)}}},[c("img",{staticClass:"nav-icon",attrs:{src:"/images/".concat(t.route==l.routePath||t.route.includes(l.routePath)?l.colored:l.imageSrc),loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"link-text"},[t._v(t._s(l.name))])])})),1)])],1)])}),[],!1,null,null,null);c.default=component.exports},307:function(t,c,l){"use strict";l.r(c);var e={head:function(){return{link:[{rel:"stylesheet",href:"/css/main.css",type:"text/css"}]}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},authenticateUser:function(){"User"==this.user.staffType&&this.$router.push("/dashboard")}},mounted:function(){this.authenticateUser()},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated},user:function(){return this.$store.state.auth.user}}},o=l(56),component=Object(o.a)(e,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"content-header"},[c("img",{staticClass:"menu",attrs:{src:"/images/menu.svg",loading:"lazy",alt:""},on:{click:t.toggleNav}}),t._v(" "),t._m(0)])}),[function(){var t=this,c=t._self._c;return c("div",{staticClass:"top-icons"},[c("img",{staticClass:"top-icon",attrs:{src:"/images/profile.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"notification"},[c("div",{staticClass:"badge"}),t._v(" "),c("img",{staticClass:"top-icon",attrs:{src:"/images/notification.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"custom-card pie-chart-holder notify"},[c("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])])]),t._v(" "),c("img",{staticClass:"top-icon",attrs:{src:"/images/logout.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);c.default=component.exports},309:function(t,c,l){"use strict";l(302)},310:function(t,c,l){var e=l(142)((function(i){return i[1]}));e.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),e.locals={},t.exports=e},345:function(t,c,l){var content=l(367);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,l(143).default)("2b947b24",content,!0,{sourceMap:!1})},366:function(t,c,l){"use strict";l(345)},367:function(t,c,l){var e=l(142)((function(i){return i[1]}));e.push([t.i,".content-wrapper{margin-bottom:20px}",""]),e.locals={},t.exports=e},407:function(t,c,l){"use strict";l.r(c);var e=l(305),o=l(306),v=l(307),n={components:{AdminNavigation:o.default,AdminTopHeader:v.default,AdminFooter:e.default}},r=(l(366),l(56)),component=Object(r.a)(n,(function(){var t=this,c=t._self._c;return c("div",{staticClass:"main-wrapper home"},[c("AdminNavigation"),t._v(" "),c("div",{staticClass:"body-wrapper"},[c("AdminTopHeader"),t._v(" "),t._m(0),t._v(" "),c("AdminFooter")],1),t._v(" "),t._m(1)],1)}),[function(){var t=this,c=t._self._c;return c("div",{staticClass:"content-wrapper"},[c("div",{staticClass:"custom-card main-stats"},[c("div",{staticClass:"stat-top"},[c("div",{staticClass:"caption-holder"},[c("div",{staticClass:"each-main-highlight top"},[c("h2",{staticClass:"highlight-title duration"},[t._v("\n                12/02/2022 - 11/11/2023\n              ")]),t._v(" "),c("div",{staticClass:"highlight-caption"},[t._v("Transaction Period")])]),t._v(" "),c("div",{staticClass:"each-main-highlight"},[c("h2",{staticClass:"highlight-title"},[t._v("$80,000")]),t._v(" "),c("div",{staticClass:"highlight-caption"},[t._v("Transaction Volume")])]),t._v(" "),c("div",{staticClass:"each-main-highlight"},[c("h2",{staticClass:"highlight-title"},[t._v("$40,000")]),t._v(" "),c("div",{staticClass:"highlight-caption"},[t._v("Current Balance")])]),t._v(" "),c("a",{staticClass:"main-btn w-button",attrs:{href:"#"}},[t._v("View Users")])]),t._v(" "),c("div",{staticClass:"stats-holder"},[c("h3",{staticClass:"chart-title"},[t._v("Deposits Vs Withdrawal Chart")]),t._v(" "),c("img",{staticClass:"chart-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1785663ea220b6f2d2f34_line-graph-excel.png",loading:"lazy",alt:""}})])]),t._v(" "),c("div",{staticClass:"stat-bottom"},[c("div",{staticClass:"each-coin-stat"},[c("img",{staticClass:"coin-stat-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",[c("div",[t._v("Bitcoin Balance")]),t._v(" "),c("h3",{staticClass:"coin-title"},[t._v("$6,000")])])]),t._v(" "),c("div",{staticClass:"each-coin-stat"},[c("img",{staticClass:"coin-stat-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737948a58b7255a6e0e9_ethereum-eth-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",[c("div",[t._v("Ethereum Balance")]),t._v(" "),c("h3",{staticClass:"coin-title"},[t._v("$6,000")])])]),t._v(" "),c("div",{staticClass:"each-coin-stat"},[c("img",{staticClass:"coin-stat-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",[c("div",[t._v("TRC20 Balance")]),t._v(" "),c("h3",{staticClass:"coin-title"},[t._v("$6,000")])])]),t._v(" "),c("div",{staticClass:"each-coin-stat"},[c("img",{staticClass:"coin-stat-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ad78aac69ab065aca_dogecoin-doge-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",[c("div",[t._v("Dogecoin Balance")]),t._v(" "),c("h3",{staticClass:"coin-title"},[t._v("$6,000")])])]),t._v(" "),c("div",{staticClass:"each-coin-stat"},[c("img",{staticClass:"coin-stat-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ad78aac69ab065aca_dogecoin-doge-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",[c("div",[t._v("Dogecoin Balance")]),t._v(" "),c("h3",{staticClass:"coin-title"},[t._v("$6,000")])])])])]),t._v(" "),c("div",{staticClass:"custom-card pie-chart-holder"},[c("div",{staticClass:"donut-chart"},[c("img",{attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f17bd70b3cfe4ddc1434d3_pie.png",loading:"lazy",sizes:"(max-width: 767px) 300px, (max-width: 991px) 25vw, (max-width: 1279px) 21vw, 22vw",srcset:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f17bd70b3cfe4ddc1434d3_pie-p-500.png 500w, https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f17bd70b3cfe4ddc1434d3_pie.png 505w",alt:""}})]),t._v(" "),c("div",{staticClass:"pie-stats"},[c("div",{staticClass:"each-pie-stat"},[c("h3",{staticClass:"heading"},[t._v("40"),c("sup",[t._v("%")])]),t._v(" "),c("div",{staticClass:"each-pie-label"},[c("div",{staticClass:"label-color"}),t._v(" "),c("div",[t._v("Bitcoin")])])]),t._v(" "),c("div",{staticClass:"each-pie-stat"},[c("h3",{staticClass:"heading"},[t._v("40"),c("sup",[t._v("%")])]),t._v(" "),c("div",{staticClass:"each-pie-label"},[c("div",{staticClass:"label-color"}),t._v(" "),c("div",[t._v("Bitcoin")])])]),t._v(" "),c("div",{staticClass:"each-pie-stat"},[c("h3",{staticClass:"heading"},[t._v("40"),c("sup",[t._v("%")])]),t._v(" "),c("div",{staticClass:"each-pie-label"},[c("div",{staticClass:"label-color"}),t._v(" "),c("div",[t._v("Bitcoin")])])]),t._v(" "),c("div",{staticClass:"each-pie-stat"},[c("h3",{staticClass:"heading"},[t._v("40"),c("sup",[t._v("%")])]),t._v(" "),c("div",{staticClass:"each-pie-label"},[c("div",{staticClass:"label-color"}),t._v(" "),c("div",[t._v("Bitcoin")])])])])]),t._v(" "),c("div",{staticClass:"trx-card"},[c("div",{staticClass:"tx-card-title"},[t._v("Total Deposits")]),t._v(" "),c("div",{staticClass:"tx-flex"},[c("img",{staticClass:"tx-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18162e1e45a44f1442f8c_column-chart-line-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),c("h4",{staticClass:"tx-card-value"},[t._v("\n            $45,000\n            "),c("span",{staticClass:"tx-date"},[c("br"),t._v("Last: Thu 5th Jun, 2022")])])])]),t._v(" "),c("div",{staticClass:"trx-card withdraw"},[c("div",{staticClass:"tx-card-title"},[t._v("Total Withdrawals")]),t._v(" "),c("div",{staticClass:"tx-flex"},[c("img",{staticClass:"tx-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18254f2b8ff803231951a_stock-market-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),c("h4",{staticClass:"tx-card-value"},[t._v("\n            $45,000\n            "),c("span",{staticClass:"tx-date"},[c("br"),t._v("Last: Thu 5th Jun, 2022")])])])]),t._v(" "),c("div",{staticClass:"trx-card active-depo"},[c("div",{staticClass:"tx-card-title"},[t._v("Active Deposits")]),t._v(" "),c("div",{staticClass:"tx-flex"},[c("img",{staticClass:"tx-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18c7669cfc0f135400b4f_growth-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),c("h4",{staticClass:"tx-card-value"},[t._v("\n            $45,000\n            "),c("span",{staticClass:"tx-date"},[c("br"),t._v("Last: Thu 5th Jun, 2022")])])])]),t._v(" "),c("div",{staticClass:"trx-card pending-widthdraw"},[c("div",{staticClass:"tx-card-title"},[t._v("Pending Withdrawals")]),t._v(" "),c("div",{staticClass:"tx-flex"},[c("img",{staticClass:"tx-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f18c1e8c2e214d4b13be49_decrease-graph-recession-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),c("h4",{staticClass:"tx-card-value"},[t._v("\n            $45,000\n            "),c("span",{staticClass:"tx-date"},[c("br"),t._v("Last: Thu 5th Jun, 2022")])])])]),t._v(" "),c("div",{staticClass:"custom-card pie-chart-holder"},[c("h4",{staticClass:"activites"},[t._v("Recent Activies")]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Withdrawal")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b873c5097be44_tether-usdt-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f173795a0b8708f697be43_tron-trx-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])]),t._v(" "),c("div",{staticClass:"each-activity"},[c("div",{staticClass:"activity-title"},[t._v("Deposit")]),t._v(" "),c("div",{staticClass:"activity-coin"},[c("img",{staticClass:"activity-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1737ae1e45a0c67433779_bitcoin-btc-logo.svg",loading:"lazy",alt:""}}),t._v(" "),c("div",{staticClass:"activity-line"})]),t._v(" "),c("div",{staticClass:"activity-value"},[c("h4",{staticClass:"activity-amount"},[t._v("$12.00")]),t._v(" "),c("div",{staticClass:"activity-time"},[t._v("12/06/2022 9:04 AM")])])])]),t._v(" "),c("div",{staticClass:"custom-card main-stats"},[c("h4",{staticClass:"min-table-title"},[t._v("All Users")]),t._v(" "),c("div",{staticClass:"table-caption"},[t._v("\n          For actions please\n          "),c("a",{staticClass:"custom-link",attrs:{href:"#"}},[t._v("click users")]),t._v(" page\n        ")]),t._v(" "),c("div",{staticClass:"table-filters"},[c("div",{staticClass:"each-filter-option"},[c("div",{staticClass:"filter-page"},[t._v("Filter")]),t._v(" "),c("img",{staticClass:"filter-icon drop",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),c("h4",{staticClass:"filter-label"},[t._v("All Users")]),t._v(" "),c("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[c("li",{staticClass:"filter-items"},[c("div",[t._v("All Users")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Active")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Suspended")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Blocked")])])])]),t._v(" "),c("div",{staticClass:"each-filter-option"},[c("div",{staticClass:"filter-page"},[t._v("Sort")]),t._v(" "),c("h4",{staticClass:"filter-label"},[t._v("Name")]),t._v(" "),c("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[c("li",{staticClass:"filter-items"},[c("div",[t._v("Reg. Date")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Deposit")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Suspended")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Blocked")])])]),t._v(" "),c("img",{staticClass:"filter-icon drop",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),c("div",{staticClass:"each-filter-option"},[c("div",{staticClass:"filter-page"},[t._v("Results")]),t._v(" "),c("h4",{staticClass:"filter-label input"},[t._v("10")]),t._v(" "),c("div",{staticClass:"filter-box"},[c("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f6007a954c77c293682c_check-mark-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),c("div",{staticClass:"each-filter-option search"},[c("div",{staticClass:"filter-page"},[t._v("Search Name")]),t._v(" "),c("img",{staticClass:"filter-icon",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7c16726c9a6581fd2_search-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),c("div",{staticClass:"table-label"},[c("div",[c("strong",[t._v("Results")]),t._v(": 10 "),c("strong",[t._v("Page")]),t._v(" 1 of 12\n          ")]),t._v(" "),c("ul",{staticClass:"min-table-pagination",attrs:{role:"list"}},[c("li",{staticClass:"pagination-item"},[c("img",{staticClass:"pagination-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982bc1672608295369ae_arrow-thin-chevron-left-icon.svg",loading:"lazy",alt:""}})]),t._v(" "),c("li",{staticClass:"pagination-item"},[c("div",[t._v("1")])]),t._v(" "),c("li",{staticClass:"pagination-item active"},[c("div",[t._v("2")])]),t._v(" "),c("li",{staticClass:"pagination-item"},[c("div",[t._v("3")])]),t._v(" "),c("li",{staticClass:"pagination-item"},[c("img",{staticClass:"pagination-img",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1982b466e626df4567c6d_arrow-thin-chevron-right-icon.svg",loading:"lazy",alt:""}})])])]),t._v(" "),c("div",{staticClass:"table-actions"},[c("div",{staticClass:"each-filter-option"},[c("img",{staticClass:"filter-icon drop",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1f5d7700f683bb23f0908_triangle-bottom-arrow-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),c("h4",{staticClass:"filter-label"},[t._v("Send Email")]),t._v(" "),c("ul",{staticClass:"filter-list hide",attrs:{role:"list"}},[c("li",{staticClass:"filter-items"},[c("div",[t._v("All Users")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Active")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Suspended")])]),t._v(" "),c("li",{staticClass:"filter-items"},[c("div",[t._v("Blocked")])])])]),t._v(" "),c("div",{staticClass:"each-filter-option min"},[c("div",{staticClass:"filter-page"},[t._v("Delete")]),t._v(" "),c("div",{staticClass:"filter-box"},[c("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1da3b461fa0e7e3c7163c_trash-bin-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),c("div",{staticClass:"each-filter-option min"},[c("div",{staticClass:"filter-page"},[t._v("Suspend")]),t._v(" "),c("div",{staticClass:"filter-box"},[c("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1da205a0b87bc129e0ee4_remove-member-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),c("div",{staticClass:"each-filter-option min"},[c("div",{staticClass:"filter-page"},[t._v("Approve")]),t._v(" "),c("div",{staticClass:"filter-box"},[c("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1db68393797590894bada_join-icon%201.svg",loading:"lazy",alt:""}})])]),t._v(" "),c("div",{staticClass:"each-filter-option min"},[c("div",{staticClass:"filter-page"},[t._v("Bulk")]),t._v(" "),c("div",{staticClass:"filter-box"},[c("img",{staticClass:"filter-icon check",attrs:{src:"https://uploads-ssl.webflow.com/63f116b57a954c6732843cb7/63f1dbeaad117e09c9d6ba7c_select-all-icon%201.svg",loading:"lazy",alt:""}})])])])])])},function(){var t=this,c=t._self._c;return c("div",{staticClass:"confirm-action hide"},[c("div",{staticClass:"confirm-box"},[c("div",[t._v("Are you sure you want to delete this item?")]),t._v(" "),c("div",{staticClass:"confirm-holder"},[c("a",{staticClass:"button w-button",attrs:{href:"#"}},[t._v("Yes")]),c("a",{staticClass:"button w-button",attrs:{href:"#"}},[t._v("No")])])])])}],!1,null,null,null);c.default=component.exports;installComponents(component,{AdminNavigation:l(306).default,AdminTopHeader:l(307).default,AdminFooter:l(305).default})}}]);
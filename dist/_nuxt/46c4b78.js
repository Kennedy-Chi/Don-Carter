(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{352:function(t,n,e){var content=e(363);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(151).default)("22932dca",content,!0,{sourceMap:!1})},354:function(t,n,e){"use strict";e.r(n);e(50),e(59);var l=e(8),c=(e(26),e(49),{data:function(){return{route:""}},computed:{navState:function(){return this.$store.state.adminNavState},user:function(){return this.$store.state.auth.user}},methods:{toggleNav:function(){this.$store.commit("TOGGLE_ADMIN_NAV")},hideNav:function(){this.$store.commit("HIDE_NAV")},logout:function(){var t=this;return Object(l.a)(regeneratorRuntime.mark((function n(){return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return n.stop()}}),n)})))()}},mounted:function(){this.route=this.$route.name,this.hideNav()}}),o=(e(362),e(57)),component=Object(o.a)(c,(function(){var t=this,n=t._self._c;return n("div",{staticClass:"vertical-navbar",class:{show:t.navState}},[n("div",{staticClass:"sticky-navbar"},[n("nuxt-link",{staticClass:"navbar-header",attrs:{to:"/"}},[n("img",{staticClass:"brand",attrs:{src:"/admin-images/Logo.png",loading:"lazy",sizes:"130px",srcset:"/admin-images/Logo.png 500w, /admin-images/Logo.png 800w, /admin-images/Logo.png 1080w, /admin-images/Logo.png 2284w",alt:""}})]),t._v(" "),n("img",{staticClass:"menu-close",attrs:{src:"/admin-images/menu-close.svg",alt:""},on:{click:t.toggleNav}}),t._v(" "),n("ul",{staticClass:"nav-list",attrs:{role:"list"}},[n("li",{staticClass:"nav-list"},[n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin"==t.route},attrs:{to:"/admin"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin"==t.route?"colored-dashboard.svg":"dashboard.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Dashboard")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-users"==t.route},attrs:{to:"/admin/users"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-users"==t.route?"colored-users.svg":"users.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Users")])]),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("add-user")},attrs:{to:"/admin/add-user/new"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("add-user")?"colored-user.svg":"user.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Add User")])]),t._v(" "),"Admin"==t.user.status?n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-plans"==t.route},attrs:{to:"/admin/plans"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-accounts"==t.route?"colored-plans.svg":"plans.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Plans")])]):t._e(),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-reviews"==t.route},attrs:{to:"/admin/reviews"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-reviews"==t.route?"colored-reviews.svg":"reviews.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Reviews")])]),t._v(" "),"Admin"==t.user.status?n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-currencies"==t.route},attrs:{to:"/admin/currencies"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-currencies"==t.route?"colored-currency.svg":"currency.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Currencies")])]):t._e(),t._v(" "),n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:t.route.includes("transactions")},attrs:{to:"/admin/transactions/list"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat(t.route.includes("transactions")?"colored-deposit.svg":"deposit.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Transactions")])]),t._v(" "),"Admin"==t.user.status?n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-active-deposits"==t.route},attrs:{to:"/admin/active-deposits"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-active-deposits"==t.route?"colored-active.svg":"active.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Active Deposits")])]):t._e(),t._v(" "),"Admin"==t.user.status?n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-email"==t.route},attrs:{to:"/admin/email"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-email"==t.route?"colored-emails.svg":"emails.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Emails")])]):t._e(),t._v(" "),"Admin"==t.user.status?n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-pages"==t.route},attrs:{to:"/admin/pages"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-pages"==t.route?"colored-pages.svg":"pages.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Pages")])]):t._e(),t._v(" "),"Admin"==t.user.status?n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-settings"==t.route},attrs:{to:"/admin/settings"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-settings"==t.route?"colored-settings.svg":"settings.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Settings")])]):t._e(),t._v(" "),"Admin"==t.user.status?n("nuxt-link",{staticClass:"nav-link w-inline-block",class:{active:"admin-referrals"==t.route},attrs:{to:"/admin/referrals"}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/".concat("admin-referrals"==t.route?"colored-referrals.svg":"referrals.svg"),loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Referrals")])]):t._e(),t._v(" "),n("span",{staticClass:"nav-link w-inline-block",on:{click:t.logout}},[n("img",{staticClass:"nav-icon",attrs:{src:"/admin-images/logout.svg\n            ",loading:"lazy",alt:""}}),t._v(" "),n("div",{staticClass:"link-text"},[t._v("Logout")])])],1)])],1)])}),[],!1,null,null,null);n.default=component.exports},362:function(t,n,e){"use strict";e(352)},363:function(t,n,e){var l=e(150)((function(i){return i[1]}));l.push([t.i,".vertical-navbar{transition:all .3s}.menu-close{display:none;position:absolute;right:20px;top:90px;width:20px}.menu-close,.nav-list a,span.nav-link{cursor:pointer}@media screen and (max-width:991px){.vertical-navbar.show{left:0;z-index:999}.menu-close{display:block}}@media screen and (max-width:380px){.vertical-navbar.show{width:100%}}",""]),l.locals={},t.exports=l}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[21],{311:function(t,e,o){var content=o(318);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,o(143).default)("25049143",content,!0,{sourceMap:!1})},315:function(t,e,o){"use strict";o.r(e);o(57);var r=o(8),n=(o(48),{head:function(){return{link:[{rel:"stylesheet",href:"/css/dashboard.css",type:"text/css"}]}},data:function(){return{user:""}},methods:{toggleNav:function(){var t=document.querySelector(".nav-wrapper");t.classList.contains("show")?t.classList.remove("show"):t.classList.add("show")},hideNav:function(){document.querySelector(".nav-wrapper").classList.remove("show")},goToProfile:function(){this.$router.push("/dashboard/profile")},goToNotification:function(){this.$router.push("/dashboard/notification")},setFileURL:function(){},logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:case"end":return e.stop()}}),e)})))()},getUser:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/users/get-user");case 3:o=e.sent,t.user=o.data.user,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},computed:{FILE_URL:function(){return this.$store.state.fileURL}},mounted:function(){this.hideNav(),this.$store.commit("SET_URL",this.$config.FILE_URL),this.getUser()}}),c=(o(317),o(56)),component=Object(c.a)(n,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"dashboard-header"},[t._m(0),t._v(" "),e("div",{staticClass:"top-icon-holder"},[e("div",{staticClass:"each-icon-wrapper close",on:{click:t.toggleNav}},[e("img",{staticClass:"top-icons menu",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641442165b5e4a499ae9f723_menu-close.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"each-icon-wrapper",on:{click:t.goToNotification}},[e("img",{staticClass:"top-icons",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f055e38d2c4db8492c_notification.svg",loading:"lazy",alt:""}})]),t._v(" "),t.user.profilePicture?e("div",{staticClass:"each-icon-wrapper round",on:{click:t.goToProfile}},[e("div",{staticClass:"top-image",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(t.user.profilePicture,")")}})]):t._e(),t._v(" "),e("div",{staticClass:"each-icon-wrapper",on:{click:t.logout}},[e("img",{staticClass:"top-icons add",attrs:{src:"https://uploads-ssl.webflow.com/64132ac80aba346e0aa48252/641335f0fbeda4ab78bee286_logout.svg",loading:"lazy",alt:""}})])])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"header-caption"},[e("h1",{staticClass:"header-title"},[t._v("Welcome to Zivik Bank")]),t._v(" "),e("div",[t._v("It's easier than you thought with"),e("br"),t._v("Zivik Bank")])])}],!1,null,null,null);e.default=component.exports},317:function(t,e,o){"use strict";o(311)},318:function(t,e,o){var r=o(142)((function(i){return i[1]}));r.push([t.i,".each-icon-wrapper .top-icons{margin:0 auto}",""]),r.locals={},t.exports=r}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[40,24,25],{302:function(t,o,e){var content=e(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(143).default)("2515acf0",content,!0,{sourceMap:!1})},304:function(t,o,e){"use strict";e.r(o);var n={methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)}},mounted:function(){this.setFileURL()}},l=e(56),component=Object(l.a)(n,(function(){var t=this,o=t._self._c;return o("div",{attrs:{id:"footer"}},[o("div",{staticClass:"footer wf-section"},[o("div",{staticClass:"contain"},[o("div",{staticClass:"footer-holder"},[o("div",{staticClass:"footer-top-holder"},[t._m(0),t._v(" "),o("div",{staticClass:"each-footer-content"},[t._m(1),t._v(" "),o("div",{staticClass:"div-block-46"},[o("div",{staticClass:"footer-link-holder"},[o("nuxt-link",{staticClass:"footer-link",attrs:{to:"/services"}},[t._v("Internet Banking")])],1),t._v(" "),o("div",{staticClass:"footer-link-holder"},[o("nuxt-link",{staticClass:"footer-link",attrs:{to:"/services"}},[t._v("Mobile Banking")])],1)])]),t._v(" "),o("div",{staticClass:"each-footer-content"},[t._m(2),t._v(" "),o("div",{staticClass:"div-block-46"},[o("div",{staticClass:"footer-link-holder"},[o("nuxt-link",{staticClass:"footer-link",attrs:{to:"/about"}},[t._v("About Us")])],1),t._v(" "),o("div",{staticClass:"footer-link-holder"},[o("nuxt-link",{staticClass:"footer-link",attrs:{to:"/contact"}},[t._v("Contact Us")])],1),t._v(" "),o("div",{staticClass:"footer-link-holder"},[o("nuxt-link",{staticClass:"footer-link",attrs:{to:"terms"}},[t._v("Legal")])],1)])]),t._v(" "),t._m(3)]),t._v(" "),o("div",{staticClass:"footer-down-line"}),t._v(" "),o("div",{staticClass:"footer-last-link-holder"},[t._m(4),t._v(" "),o("div",{staticClass:"footer-bottom-link-holder"},[o("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/about"}},[t._v("About Bank")]),o("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/services"}},[t._v("Services")]),o("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/crdit-cards"}},[t._v("Credit Cards")]),o("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/services"}},[t._v("Careers")]),o("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/blog"}},[t._v("Blog")]),o("nuxt-link",{staticClass:"footer-bottom-link",attrs:{to:"/contact"}},[t._v("Contact")])],1)])])])])])}),[function(){var t=this,o=t._self._c;return o("div",{staticClass:"each-footer-content"},[o("div",{staticClass:"footer-logo-holder"},[o("img",{staticClass:"image-16",attrs:{src:"/images/Colored-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),o("div",{staticClass:"div-block-46"},[o("div",{staticClass:"footer-link-holder"},[o("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Communities")])]),t._v(" "),o("div",{staticClass:"footer-link-holder"},[o("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Alister Bank Group")])]),t._v(" "),o("div",{staticClass:"footer-link-holder"},[o("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Careers")])]),t._v(" "),o("div",{staticClass:"footer-link-holder"},[o("a",{staticClass:"footer-link",attrs:{href:"#"}},[t._v("Website Disclaimer")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-logo-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Banking with Us")])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-logo-holder"},[t("h1",{staticClass:"footer-header"},[this._v("Customer Service")])])},function(){var t=this,o=t._self._c;return o("div",{staticClass:"each-footer-content"},[o("div",{staticClass:"footer-logo-holder"},[o("h1",{staticClass:"footer-header"},[t._v("Socials")])]),t._v(" "),o("div",{staticClass:"div-block-46"},[o("div",{staticClass:"footer-link-holder"},[o("a",{staticClass:"footer-link",attrs:{href:"https://twitter.com"}},[t._v("Twitter")])]),t._v(" "),o("div",{staticClass:"footer-link-holder"},[o("a",{staticClass:"footer-link",attrs:{href:"https://instagram.com"}},[t._v("Instagram")])]),t._v(" "),o("div",{staticClass:"footer-link-holder"},[o("a",{staticClass:"footer-link",attrs:{href:"https://facebook.com"}},[t._v("Facebook")])]),t._v(" "),o("div",{staticClass:"footer-link-holder"},[o("a",{staticClass:"footer-link",attrs:{href:"https://youtube.com"}},[t._v("YouTube")])]),t._v(" "),o("div",{staticClass:"footer-link-holder"},[o("a",{staticClass:"footer-link",attrs:{href:"https://pinterest.com"}},[t._v("Pinterest")])])])])},function(){var t=this._self._c;return t("div",{staticClass:"footer-copyright-text-holder"},[t("div",{staticClass:"footer-copyright-text"},[this._v("\n              AS Finance LTD © 2023 / All Rights Reserved\n            ")])])}],!1,null,null,null);o.default=component.exports},309:function(t,o,e){"use strict";e.r(o);var n=e(8),l=(e(48),{head:function(){return{link:[{rel:"stylesheet",href:"/css/home.css",type:"text/css"}]}},methods:{logout:function(){var t=this;return Object(n.a)(regeneratorRuntime.mark((function o(){return regeneratorRuntime.wrap((function(o){for(;;)switch(o.prev=o.next){case 0:return o.next=2,t.$auth.logout();case 2:case"end":return o.stop()}}),o)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),r=(e(310),e(56)),component=Object(r.a)(l,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"nav-holder"},[o("div",{staticClass:"nav-contains"},[o("div",{staticClass:"top-header"},[o("nuxt-link",{staticClass:"logo-link w-inline-block",attrs:{to:"/"}},[o("img",{staticClass:"image-33",attrs:{src:"/images/Colored-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),o("div",{staticClass:"top-nav-info-holder"},[o("nuxt-link",{staticClass:"nav-link-block last w-inline-block",attrs:{to:"/contact"}},[o("img",{staticClass:"link-icon",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/64062db80c1ec3bec200ef36_send-message-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",{staticClass:"link-block-text"},[t._v("Contact us")])]),t._v(" "),t.isAuthenticated?o("a",{staticClass:"nav-link-block last w-inline-block",attrs:{href:"#"},on:{click:t.logout}},[o("img",{staticClass:"link-icon _4",attrs:{src:"/images/logout-round.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",{staticClass:"link-block-text"},[t._v("Logout")])]):o("nuxt-link",{staticClass:"nav-link-block last w-inline-block",attrs:{to:"login"},on:{click:t.logout}},[o("img",{staticClass:"link-icon _4",attrs:{src:"/images/login.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",{staticClass:"link-block-text"},[t._v("Login")])]),t._v(" "),t.isAuthenticated?o("nuxt-link",{staticClass:"nav-link-block w-inline-block",attrs:{to:"/dashboard"}},[o("img",{staticClass:"link-icon _3",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6406403f5b16231c4daa13d4_persona-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",{staticClass:"link-block-text"},[t._v("Dashboard")])]):o("nuxt-link",{staticClass:"nav-link-block w-inline-block",attrs:{to:"signup"}},[o("img",{staticClass:"link-icon _3",attrs:{src:"https://uploads-ssl.webflow.com/6405430dbac1369b9494f2e3/6406403f5b16231c4daa13d4_persona-icon%201.svg",loading:"lazy",alt:""}}),t._v(" "),o("div",{staticClass:"link-block-text"},[t._v("Sign Up")])])],1)],1)]),t._v(" "),o("div",{staticClass:"nav-hold"},[o("div",{staticClass:"navbar w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[o("div",{staticClass:"nav-contain"},[o("div",[o("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[o("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/"}},[t._v("Home")]),t._v(" "),o("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/about"}},[t._v("About")]),t._v(" "),o("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/credit-cards"}},[t._v("Credit Cards")]),t._v(" "),o("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/services"}},[t._v("Services")]),t._v(" "),o("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/contact"}},[t._v("Contact")]),t._v(" "),o("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/news"}},[t._v("Blog")]),t._v(" "),o("nuxt-link",{staticClass:"nav-link fit w-nav-link",attrs:{to:"/faq"}},[t._v("FAQ")])],1),t._v(" "),t._m(0)])])])])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"icon w-icon-nav-menu"})])}],!1,null,null,null);o.default=component.exports},310:function(t,o,e){"use strict";e(302)},311:function(t,o,e){var n=e(142)((function(i){return i[1]}));n.push([t.i,".logo-link.w-inline-block{display:flex;justify-content:center}img.image-33{height:70px;margin:0 auto;width:auto}",""]),n.locals={},t.exports=n},349:function(t,o,e){var content=e(374);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(143).default)("21dead9c",content,!0,{sourceMap:!1})},373:function(t,o,e){"use strict";e(349)},374:function(t,o,e){var n=e(142)((function(i){return i[1]}));n.push([t.i,".form-holder.login{margin:0 auto;max-width:600px}.msg{color:green;letter-spacing:1px;padding:10px;text-align:center}.msg.error{color:red}.arrow-holder{cursor:pointer}",""]),n.locals={},t.exports=n},415:function(t,o,e){"use strict";e.r(o);var n=e(8),l=(e(48),e(304)),r=e(309),c={data:function(){return{status:!1,msg:"",colour:!1,showMsg:!1}},methods:{activateUser:function(t){var o=this;return Object(n.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,o.$axios.patch("/users/activate-user/".concat(t),{active:!0});case 3:e.sent,o.status=!0,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.$route.query.token&&this.activateUser(this.$route.query.token)},components:{HomeFooter:l.default,HomeHeader:r.default}},v=(e(373),e(56)),component=Object(v.a)(c,(function(){var t=this,o=t._self._c;return o("div",{staticClass:"sign-up"},[o("home-header"),t._v(" "),o("div",{staticClass:"hero-sign-up wf-section"},[o("div",{staticClass:"contain"},[o("div",{staticClass:"div-block-136"},[o("div",{staticClass:"div-block-135"},[t.status?o("h1",{staticClass:"headings change"},[t._v("CONGRATULATIONS")]):o("h1",{staticClass:"headings change"},[t._v("CONFIRMING STATUS...")])]),t._v(" "),o("div",[t.status?o("div",{staticClass:"sub-hero-texts change-color"},[t._v("\n            Registration Successful\n          ")]):o("div",{staticClass:"sub-hero-texts change-color"},[t._v("\n            Registration Pending...\n          ")])])])])]),t._v(" "),o("div",{staticClass:"signup-content wf-section"},[o("div",{staticClass:"contain"},[o("div",{staticClass:"signup-hero-holder"},[o("div",{staticClass:"form-holder w-form login"},[o("div",[o("div",{staticClass:"form-register-holder"},[t._m(0),t._v(" "),t.status?o("div",{staticClass:"form-section-holder"},[o("div",{staticClass:"each-register-holder"},[o("div",{staticClass:"register-top-heading-holder"},[o("h1",{staticClass:"register-top-heading"},[t._v("\n                      Your account is ready,\n                      "),o("nuxt-link",{attrs:{to:"/login"}},[t._v("click login")]),t._v(" to start\n                      enjoying your online banking experience with Zivik Bank\n                      and check your email to confirm your account details.\n                    ")],1)])])]):t._e()])])])])])]),t._v(" "),o("home-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"register-rate-holder"},[t("div",{staticClass:"register-rate-completing-holder"},[t("div",{staticClass:"register-rate-complete"}),this._v(" "),t("div",{staticClass:"register-rate-uncomplete"})])])}],!1,null,null,null);o.default=component.exports;installComponents(component,{HomeHeader:e(309).default,HomeFooter:e(304).default})}}]);
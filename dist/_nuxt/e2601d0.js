(window.webpackJsonp=window.webpackJsonp||[]).push([[57,26,27],{344:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("77a42ce2",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("3a005a4a",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(49),{methods:{logout:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),l=(n(360),n(57)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"navigation w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"nav-flex"},[e("nuxt-link",{staticClass:"brand w-nav-brand",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"logo",attrs:{src:"/images/CEZ-Logo.png",loading:"lazy",alt:"Renex Holdings"}})]),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/programs",query:{username:t.$route.query.username}}}},[t._v("Programs")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plans")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("FAQ")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("News")]),t._v(" "),e("div",{staticClass:"signin-holder"},[t.isAuthenticated?e("nuxt-link",{staticClass:"nav-link sign w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):e("nuxt-link",{staticClass:"nav-link sign w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Sign up")])],1),t._v(" "),t.isAuthenticated?e("span",{staticClass:"nav-link w-nav-link login",on:{click:t.logout}},[t._v("Logout")]):e("nuxt-link",{staticClass:"nav-link w-nav-link login",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")])],1),t._v(" "),t._m(0)],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"menu-icon w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},351:function(t,e,n){"use strict";n.r(e);var o=n(8),r=(n(49),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),l=(n(358),n(57)),component=Object(l.a)(r,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-container footer",attrs:{id:"footer"}},[e("div",{staticClass:"footer-about"},[e("nuxt-link",{staticClass:"brand w-inline-block",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Renex-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"brief-footer-about"},[t._v("\n      A new way to make the payments easy, reliable and 100% secure.\n    ")]),t._v(" "),t._m(0)],1),t._v(" "),e("div",{staticClass:"footer-link-wrapper"},[e("ul",{staticClass:"footer-link-list",attrs:{role:"list"}},[t._m(1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Services")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Investment Plans")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Programs")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Terms & Conditions")])],1)]),t._v(" "),e("ul",{staticClass:"footer-link-list",attrs:{role:"list"}},[t._m(2),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Help Center")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("FAQ")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Suggestions")])],1),t._v(" "),e("li",{staticClass:"each-link-list"})]),t._v(" "),e("ul",{staticClass:"footer-link-list",attrs:{role:"list"}},[t._m(3),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Our Partners")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Become Partner")])],1),t._v(" "),e("li",{staticClass:"each-link-list"})])]),t._v(" "),e("div",{staticClass:"bottom-footer"},[e("img",{staticClass:"footer-copyright",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a43df7050101ea0243b7e_copyright-icon.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"footer-text"},[t._v("\n      "+t._s(t.company.companyName)+" "+t._s((new Date).getFullYear())+" All Rights\n      Reserved.\n    ")]),t._v(" "),t._m(4)])])}),[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"footer-socials",attrs:{role:"list"}},[e("li",{staticClass:"each-footer-socials"},[e("div",{staticClass:"footer-icon-wrapper"},[e("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a4098d8112f3345e3639a_map-pin-line-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"brief-footer-about up"},[t._v("\n          400 Westcastle Streets, London, United Kingdom\n        ")])]),t._v(" "),e("li",{staticClass:"each-footer-socials"},[e("div",{staticClass:"footer-icon-wrapper"},[e("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a4098172496260b7b2d69_envelope-line-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"brief-footer-about up"},[t._v("support@nextgenfinance.com")])]),t._v(" "),e("li",{staticClass:"each-footer-socials"},[e("div",{staticClass:"footer-icon-wrapper"},[e("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a40982d63351bffcc2b1c_phone-line-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"brief-footer-about up"},[t._v("+445 0044 84483")])])])},function(){var t=this._self._c;return t("li",{staticClass:"links-title"},[t("div",[this._v("Quick Links")])])},function(){var t=this._self._c;return t("li",{staticClass:"links-title"},[t("div",[this._v("Community")])])},function(){var t=this._self._c;return t("li",{staticClass:"links-title"},[t("div",[this._v("Partners")])])},function(){var t=this._self._c;return t("div",{staticClass:"bottom-social-wrapper"},[t("a",{staticClass:"footer-icon-wrapper down w-inline-block",attrs:{href:"#"}},[t("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a43386165ba005847f1ef_linkedin-in.svg",loading:"lazy",alt:""}})]),t("a",{staticClass:"footer-icon-wrapper down w-inline-block",attrs:{href:"#"}},[t("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a43376a368f5a4edda4dc_instagram.svg",loading:"lazy",alt:""}})]),t("a",{staticClass:"footer-icon-wrapper down w-inline-block",attrs:{href:"#"}},[t("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a4337fe4c213c9b58b877_telegram-plane.svg",loading:"lazy",alt:""}})]),t("a",{staticClass:"footer-icon-wrapper down w-inline-block",attrs:{href:"#"}},[t("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a4338c5607b84c28e4c72_whatsapp.svg",loading:"lazy",alt:""}})])])}],!1,null,null,null);e.default=component.exports},358:function(t,e,n){"use strict";n(344)},359:function(t,e,n){var o=n(150)((function(i){return i[1]}));o.push([t.i,".custom-container.footer{background:#00040f}",""]),o.locals={},t.exports=o},360:function(t,e,n){"use strict";n(345)},361:function(t,e,n){var o=n(150)((function(i){return i[1]}));o.push([t.i,".nav-link.login{background-color:#00f6ff;border-radius:10px;color:#00040f;font-weight:600;padding:10px 20px}",""]),o.locals={},t.exports=o},539:function(t,e,n){"use strict";n.r(e);var o=n(8),r=n(143),l=(n(49),n(32),n(13),n(454),n(30),n(461),n(462),n(463),n(466),n(467),n(468),n(469),n(471),n(473),n(475),n(477),n(478),n(479),n(480),n(481),n(483),n(31),n(52),n(39),n(351),{data:function(){return{faqCategories:[],faqs:[]}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},filteredFAQ:function(data){return this.faqs.filter((function(t){return t.category===data}))},getFaqCategories:function(data){this.faqCategories=Object(r.a)(new Set(data.map((function(t){return t.category}))))},toggleQuestion:function(t){this.checkFAQs(this.faqs),t.checked=!t.checked},checkFAQs:function(data){return data.forEach((function(t){t.checked=!1})),data},getFaqs:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/faq/?limit=60");case 3:return n=e.sent,t.getFaqCategories(n.data.data),e.next=7,t.checkFAQs(n.data.data);case 7:t.faqs=e.sent,t.loadScript(),console.log(t.faqCategories),e.next=15;break;case 12:e.prev=12,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 15:case"end":return e.stop()}}),e,null,[[0,12]])})))()},getBanner:function(){var t=this;return Object(o.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/banner/?bannerCategory=FAQ");case 3:n=e.sent,t.banner=n.data.data[0],t.loadScript(),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(0),console.log(e.t0);case 11:case"end":return e.stop()}}),e,null,[[0,8]])})))()}},mounted:function(){this.getFaqs(),this.loadScript()},components:{HomeNavigation:n(349).default}}),c=n(57),component=Object(c.a)(l,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page faq"},[t._m(0),t._v(" "),e("div",{staticClass:"landing"},[e("home-navigation"),t._v(" "),t._m(1)],1),t._v(" "),e("div",{staticClass:"custom-container"},[e("div",{staticClass:"blog-body full login"},[t._l(t.faqCategories,(function(n){return e("div",{key:n._id,staticClass:"each-question-section"},[e("h1",{staticClass:"main-title quest"},[t._v(t._s(n))]),t._v(" "),t._l(t.filteredFAQ(n),(function(n){return e("div",{key:n._id,staticClass:"each-faq"},[e("div",{staticClass:"question-wrapper"},[e("h2",{staticClass:"question",on:{click:function(e){return t.toggleQuestion(n)}}},[t._v("\n              "+t._s(n.question)+"\n            ")]),t._v(" "),e("img",{staticClass:"question-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645ecea5b02409887beea50d_plus-line-icon%201.svg",loading:"lazy",alt:""},on:{click:function(e){return t.toggleQuestion(n)}}})]),t._v(" "),n.checked?e("div",{staticClass:"sign-label answer",domProps:{innerHTML:t._s(n.answer)}}):t._e()])}))],2)})),t._v(" "),e("div",{staticClass:"radial-gradient"})],2)]),t._v(" "),e("home-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"scroll-up"},[t("img",{staticClass:"scroll-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a57fff24418be062a10b3_line-angle.svg",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"landing-flex full login"},[e("div",{staticClass:"cover"}),t._v(" "),e("div",{staticClass:"custom-container login"},[e("div",{staticClass:"signed"},[t._v("Home / "),e("span",{staticClass:"text-span-6"},[t._v("FAQ")])]),t._v(" "),e("h1",{staticClass:"main-title login"},[t._v("Frequently Asked Questions")])])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeNavigation:n(349).default,HomeFooter:n(351).default})}}]);
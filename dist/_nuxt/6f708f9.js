(window.webpackJsonp=window.webpackJsonp||[]).push([[65,25,26,27,29],{344:function(t,e,n){var content=n(359);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("77a42ce2",content,!0,{sourceMap:!1})},345:function(t,e,n){var content=n(361);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("3a005a4a",content,!0,{sourceMap:!1})},349:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),l=(n(360),n(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"navigation w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"nav-flex"},[e("nuxt-link",{staticClass:"brand w-nav-brand",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{staticClass:"logo",attrs:{src:"/images/CEZ-Logo.png",loading:"lazy",alt:"Renex Holdings"}})]),t._v(" "),e("nav",{staticClass:"nav-menu w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("About")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/programs",query:{username:t.$route.query.username}}}},[t._v("Programs")]),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("Plans")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("Contact")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("FAQ")]),t._v(" "),e("nuxt-link",{staticClass:"nav-link w-nav-link",attrs:{to:{path:"/news",query:{username:t.$route.query.username}}}},[t._v("News")]),t._v(" "),e("div",{staticClass:"signin-holder"},[t.isAuthenticated?e("nuxt-link",{staticClass:"nav-link sign w-nav-link",attrs:{to:"/dashboard"}},[t._v("Dashboard")]):e("nuxt-link",{staticClass:"nav-link sign w-nav-link",attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("Sign up")])],1),t._v(" "),t.isAuthenticated?e("span",{staticClass:"nav-link w-nav-link login",on:{click:t.logout}},[t._v("Logout")]):e("nuxt-link",{staticClass:"nav-link w-nav-link login",attrs:{to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")])],1),t._v(" "),t._m(0)],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button w-nav-button"},[t("div",{staticClass:"menu-icon w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},351:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),{data:function(){return{company:""}},methods:{setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.setFileURL(),this.getCompany()}}),l=(n(358),n(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-container footer",attrs:{id:"footer"}},[e("div",{staticClass:"footer-about"},[e("nuxt-link",{staticClass:"brand w-inline-block",attrs:{to:"/"}},[e("img",{attrs:{src:"/images/Renex-Logo.png",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"brief-footer-about"},[t._v("\n      A new way to make the payments easy, reliable and 100% secure.\n    ")]),t._v(" "),t._m(0)],1),t._v(" "),e("div",{staticClass:"footer-link-wrapper"},[e("ul",{staticClass:"footer-link-list",attrs:{role:"list"}},[t._m(1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("About")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Services")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Investment Plans")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Programs")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Terms & Conditions")])],1)]),t._v(" "),e("ul",{staticClass:"footer-link-list",attrs:{role:"list"}},[t._m(2),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Help Center")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("FAQ")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Suggestions")])],1),t._v(" "),e("li",{staticClass:"each-link-list"})]),t._v(" "),e("ul",{staticClass:"footer-link-list",attrs:{role:"list"}},[t._m(3),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Our Partners")])],1),t._v(" "),e("li",{staticClass:"each-link-list"},[e("nuxt-link",{staticClass:"each-footer-link",attrs:{to:"/"}},[t._v("Become Partner")])],1),t._v(" "),e("li",{staticClass:"each-link-list"})])]),t._v(" "),e("div",{staticClass:"bottom-footer"},[e("img",{staticClass:"footer-copyright",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a43df7050101ea0243b7e_copyright-icon.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",{staticClass:"footer-text"},[t._v("\n      "+t._s(t.company.companyName)+" "+t._s((new Date).getFullYear())+" All Rights\n      Reserved.\n    ")]),t._v(" "),t._m(4)])])}),[function(){var t=this,e=t._self._c;return e("ul",{staticClass:"footer-socials",attrs:{role:"list"}},[e("li",{staticClass:"each-footer-socials"},[e("div",{staticClass:"footer-icon-wrapper"},[e("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a4098d8112f3345e3639a_map-pin-line-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"brief-footer-about up"},[t._v("\n          400 Westcastle Streets, London, United Kingdom\n        ")])]),t._v(" "),e("li",{staticClass:"each-footer-socials"},[e("div",{staticClass:"footer-icon-wrapper"},[e("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a4098172496260b7b2d69_envelope-line-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"brief-footer-about up"},[t._v("support@nextgenfinance.com")])]),t._v(" "),e("li",{staticClass:"each-footer-socials"},[e("div",{staticClass:"footer-icon-wrapper"},[e("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a40982d63351bffcc2b1c_phone-line-icon%201.svg",loading:"lazy",alt:""}})]),t._v(" "),e("div",{staticClass:"brief-footer-about up"},[t._v("+445 0044 84483")])])])},function(){var t=this._self._c;return t("li",{staticClass:"links-title"},[t("div",[this._v("Quick Links")])])},function(){var t=this._self._c;return t("li",{staticClass:"links-title"},[t("div",[this._v("Community")])])},function(){var t=this._self._c;return t("li",{staticClass:"links-title"},[t("div",[this._v("Partners")])])},function(){var t=this._self._c;return t("div",{staticClass:"bottom-social-wrapper"},[t("a",{staticClass:"footer-icon-wrapper down w-inline-block",attrs:{href:"#"}},[t("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a43386165ba005847f1ef_linkedin-in.svg",loading:"lazy",alt:""}})]),t("a",{staticClass:"footer-icon-wrapper down w-inline-block",attrs:{href:"#"}},[t("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a43376a368f5a4edda4dc_instagram.svg",loading:"lazy",alt:""}})]),t("a",{staticClass:"footer-icon-wrapper down w-inline-block",attrs:{href:"#"}},[t("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a4337fe4c213c9b58b877_telegram-plane.svg",loading:"lazy",alt:""}})]),t("a",{staticClass:"footer-icon-wrapper down w-inline-block",attrs:{href:"#"}},[t("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a4338c5607b84c28e4c72_whatsapp.svg",loading:"lazy",alt:""}})])])}],!1,null,null,null);e.default=component.exports},358:function(t,e,n){"use strict";n(344)},359:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".custom-container.footer{background:#00040f}",""]),r.locals={},t.exports=r},360:function(t,e,n){"use strict";n(345)},361:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".nav-link.login{background-color:#00f6ff;border-radius:10px;color:#00040f;font-weight:600;padding:10px 20px}",""]),r.locals={},t.exports=r},372:function(t,e,n){var content=n(379);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(151).default)("944f727a",content,!0,{sourceMap:!1})},374:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),n(20),n(93),n(13),n(39),n(26),{data:function(){return{partners:[],reviews:[],company:"",email:"",response:"",isError:!1,showResponse:!1,onRequest:!1,emailError:!1}},methods:{checkErrorInputs:function(input,data){if("email"==input){if(""==data||!data||!/^\S+@\S+\.\S+$/.test(data))return this.$el.querySelector(".email").classList.add("error"),this.isError=!1,this.emailError=!0,void(this.onRequest=!1);this.$el.querySelector(".email").classList.remove("error"),this.isError=!0,this.emailError=!1}},callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){n.showResponse=!1}),6e3)},clearInputs:function(){this.email=""},setArray:function(){this.checkArray=[{name:"email",data:this.email}]},processEmail:function(){var t=this;this.onRequest=!0,this.setArray(),this.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),this.isError&&setTimeout((function(){t.callResponse("Thanks for subscribing successfully",!1)}),4e3)},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,t.time=t.company.dayStarted,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},mounted:function(){this.getCompany()}}),l=(n(378),n(57)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-container subscription w-form"},[e("div",{staticClass:"radial-gradient"}),t._v(" "),e("div",{staticClass:"subscribe-flex"},[e("div",{staticClass:"subscribe-highlight"},[t._v("Subscription")]),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"text-custom center"},[t._v("\n      Subscribe to be the first to hear about upcoming\n      "+t._s(t.company.companyName)+" services!"),e("br")]),t._v(" "),e("label",{directives:[{name:"show",rawName:"v-show",value:t.emailError,expression:"emailError"}],staticClass:"sign-label error email",attrs:{for:"username-2"}},[t._v("Please enter a valid email address")]),t._v(" "),t.showResponse?e("div",{staticClass:"sign-label response",class:{error:t.isError}},[t._v("\n      "+t._s(t.response)+"\n    ")]):t._e(),t._v(" "),e("div",{staticClass:"subscribe-input pad"},[e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"subscribe-field w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter Email",required:""},domProps:{value:t.email},on:{input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),t.onRequest?e("div",{staticClass:"custom-btn processing"},[e("img",{staticClass:"processing-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645afa6c4a84d4675d43a8b9_loader-icon.svg",loading:"lazy",alt:""}}),t._v(" "),e("div",[t._v("Processing")])]):e("input",{staticClass:"custom-btn sub w-button",attrs:{type:"submit",value:"Subscribe","data-wait":"Please wait..."},on:{click:t.processEmail}})])])])}),[function(){var t=this._self._c;return t("h1",{staticClass:"intel-title center"},[this._v("\n      Join Our Community Let’s Register Now!"),t("br")])}],!1,null,null,null);e.default=component.exports},378:function(t,e,n){"use strict";n(372)},379:function(t,e,n){var r=n(150)((function(i){return i[1]}));r.push([t.i,".subscribe-field{border:none;outline:none}",""]),r.locals={},t.exports=r},383:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(49),n(20),n(42),n(13),n(95),{data:function(){return{company:""}},methods:{formatMoney:function(t){return""==t||null==t||null==t?"0.00":t.toString().replace(/\B(?=(\d{3})+(?!\d))/g,",")},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return n=e.sent,e.next=6,n.data.data;case 6:t.company=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0.response.data);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()}},mounted:function(){this.getCompany()}}),l=n(57),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-container distribute"},[t._m(0),t._v(" "),t._m(1),t._v(" "),e("div",{staticClass:"distribute-flex"},[e("div",{staticClass:"each-distribution"},[e("h1",{staticClass:"profiting-header sm"},[t._v("\n        "+t._s(t.formatMoney(t.company.totalMembers))+"+"),e("br")]),t._v(" "),e("div",{staticClass:"custome-text no-top"},[t._v("Registered Users")])]),t._v(" "),e("div",{staticClass:"each-distribution"},[e("h1",{staticClass:"profiting-header sm"},[t._v("\n        "+t._s(t.formatMoney(t.company.activeMembers))+"+"),e("br")]),t._v(" "),e("div",{staticClass:"custome-text no-top"},[t._v("Active Users")])]),t._v(" "),t._m(2)])])}),[function(){var t=this,e=t._self._c;return e("div",{staticClass:"distributed-map"},[e("div",{staticClass:"circle east"},[e("div",{staticClass:"dot"})]),t._v(" "),e("div",{staticClass:"circle rus"},[e("div",{staticClass:"dot"})]),t._v(" "),e("div",{staticClass:"circle nigeria"},[e("div",{staticClass:"dot"})]),t._v(" "),e("div",{staticClass:"circle uk"},[e("div",{staticClass:"dot"})]),t._v(" "),e("div",{staticClass:"circle china"},[e("div",{staticClass:"dot"})]),t._v(" "),e("div",{staticClass:"circle usa"},[e("div",{staticClass:"dot"})]),t._v(" "),e("div",{staticClass:"circle brazil"},[e("div",{staticClass:"dot"})]),t._v(" "),e("div",{staticClass:"circle canada"},[e("div",{staticClass:"dot"})]),t._v(" "),e("div",{staticClass:"circle south"},[e("div",{staticClass:"dot"})]),t._v(" "),e("div",{staticClass:"circle aust"},[e("div",{staticClass:"dot"})]),t._v(" "),e("img",{attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a9554023513fed324e3b7_map.webp",loading:"lazy",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"distribution"},[e("div",{staticClass:"about-highlight spec"},[t._v("How We Operate")]),t._v(" "),e("h1",{staticClass:"profiting-header"},[t._v("Our Global Distribution"),e("br")]),t._v(" "),e("div",{staticClass:"custome-text no-top"},[t._v("\n      We are headquartered in Europe and can be reached from any part across\n      the globe, feel free to also get in touch with us through our contact\n      form for any enquiries.\n    ")])])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"each-distribution"},[e("h1",{staticClass:"profiting-header sm"},[t._v("122+"),e("br")]),t._v(" "),e("div",{staticClass:"custome-text no-top"},[t._v("Registered Countries")])])}],!1,null,null,null);e.default=component.exports},544:function(t,e,n){"use strict";n.r(e);n(58);var r=n(8),o=(n(49),n(383)),l=n(349),c=n(374),v={data:function(){return{blogs:[],banner:""}},methods:{formatDate:function(data){var t=new Date(data).getTime();return new Intl.DateTimeFormat("en-US",{year:"numeric",month:"long",day:"numeric",suffix:function(t){return 1===t||21===t||31===t?"st":2===t||22===t?"nd":3===t||23===t?"rd":"th"}}).format(t)},loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},getBanner:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/banner/?bannerCategory=About");case 3:n=e.sent,t.banner=n.data.data[0],e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()},getBlogs:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/blog/?limit=5&sort=-time&category=Program&category=Profile&category=Payment");case 3:n=e.sent,t.blogs=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getBlogs(),this.getBanner(),this.loadScript()},computed:{FILE_URL:function(){return this.$store.state.fileURL}},components:{HomeNavigation:l.default,Subscription:c.default,Distribution:o.default}},d=n(57),component=Object(d.a)(v,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"page programs"},[t._m(0),t._v(" "),e("home-navigation"),t._v(" "),e("div",{staticClass:"landing"},[e("div",{staticClass:"custom-container"},[e("div",{staticClass:"landing-flex event"},[e("h1",{staticClass:"landing-title event"},[t._v("\n          "+t._s(t.banner.bannerTitle)+"\n        ")]),t._v(" "),e("div",{staticClass:"landing-text"},[t._v("\n          "+t._s(t.banner.bannerSubtitle)+"\n        ")]),t._v(" "),e("img",{staticClass:"big-ball event",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/64594d4a47224a5d04cb2ca0_Payment-Gateway-Hero-Element.webp",loading:"lazy",alt:""}}),e("img",{staticClass:"big-ball second",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/64594d4a47224a5d04cb2ca0_Payment-Gateway-Hero-Element.webp",loading:"lazy",alt:""}}),e("img",{staticClass:"big-ball fourth",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/64594d4a47224a5d04cb2ca0_Payment-Gateway-Hero-Element.webp",loading:"lazy",alt:""}}),e("img",{staticClass:"big-ball third",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/64594d4a47224a5d04cb2ca0_Payment-Gateway-Hero-Element.webp",loading:"lazy",alt:""}})])])]),t._v(" "),e("div",{staticClass:"custom-container about-flex"},[e("div",{staticClass:"about-flex"},t._l(t.blogs,(function(n,r){return e("div",{key:r,staticClass:"event-flex",class:{reverse:r%2==1}},[e("div",{staticClass:"about-left",class:{reverse:r%2==1}},[e("h1",{staticClass:"profiting-header"},[t._v("\n            "+t._s(n.title)+"\n          ")]),t._v(" "),n.content?e("div",{staticClass:"custome-text no-top",domProps:{innerHTML:t._s("".concat(n.content.substring(0,250),"..."))}}):t._e(),t._v(" "),e("div",{staticClass:"about-highlight",class:{reverse:r%2==1}},[t._v("\n            "+t._s(t.formatDate(n.time))+"\n          ")]),t._v(" "),e("nuxt-link",{staticClass:"custom-btn w-button",attrs:{to:"/news-details/".concat(n._id)}},[t._v("Read More")])],1),t._v(" "),e("div",{staticClass:"about-office-holder event",class:{reverse:r%2==1}},[e("div",{staticClass:"office-bg",style:{backgroundImage:"url(".concat(t.FILE_URL,"/").concat(n.banner,")")}},[t._m(1,!0)])])])})),0)]),t._v(" "),e("distribution"),t._v(" "),e("subscription"),t._v(" "),e("home-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"scroll-up"},[t("img",{staticClass:"scroll-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a57fff24418be062a10b3_line-angle.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"footer-icon-wrapper play"},[t("img",{staticClass:"footer-icon",attrs:{src:"https://uploads-ssl.webflow.com/6458b19446eea345a074cdaf/645a811c3fc4906025e982ee_play.svg",loading:"lazy",alt:""}})])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeNavigation:n(349).default,Distribution:n(383).default,Subscription:n(374).default,HomeFooter:n(351).default})}}]);
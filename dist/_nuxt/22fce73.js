(window.webpackJsonp=window.webpackJsonp||[]).push([[54,24,25],{305:function(t,e,n){var content=n(319);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(144).default)("395f4023",content,!0,{sourceMap:!1})},310:function(t,e,n){var content=n(325);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(144).default)("39358507",content,!0,{sourceMap:!1})},314:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(48),{data:function(){return{company:"",address:"",aboutContent:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getAboutCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/about");case 3:return n=e.sent,e.next=6,n.data.data[0].content;case 6:t.aboutContent=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return o=e.sent,e.next=6,null===(n=o.data.data)||void 0===n||null===(r=n.media[0])||void 0===r?void 0:r.text;case 6:t.address=e.sent,t.company=o.data.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},mounted:function(){this.loadScript(),this.setFileURL(),this.getAboutCompany(),this.getCompany()}}),c=(n(318),n(56)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"last-section",attrs:{id:"footer"}},[e("div",{staticClass:"container-new1"},[e("div",[e("div",{staticClass:"div-block-255"},[e("div",{staticClass:"div-block-256"},[t._m(0),t._v(" "),e("div",{staticClass:"text-block-63",domProps:{innerHTML:t._s("".concat(t.aboutContent.substring(0,200),"..."))}})]),t._v(" "),e("div",{staticClass:"div-block-258"},[e("h1",{staticClass:"heading-63"},[t._v("Quick Links")]),t._v(" "),e("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/about"}},[e("div",{staticClass:"text-block-64"},[t._v("About")])]),e("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/plan"}},[e("div",{staticClass:"text-block-64"},[t._v("Plans")])]),e("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/gallery"}},[e("div",{staticClass:"text-block-64"},[t._v("Gallery")])]),e("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/contact"}},[e("div",{staticClass:"text-block-64"},[t._v("Contact Us")])])],1),t._v(" "),e("div",{staticClass:"div-block-259"},[e("h1",{staticClass:"heading-63"},[t._v("Contact Us")]),t._v(" "),e("div",{staticClass:"text-block-65"},[t._v("\n            You can contact us with your email for mailing conversations at\n            our contact page us chat us directly in our website through our\n            live support.\n          ")]),t._v(" "),e("div",{staticClass:"text-block-66",domProps:{innerHTML:t._s(t.address)}})]),t._v(" "),t._m(1)])]),t._v(" "),t.company.social?e("div",{staticClass:"div-block-274"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)]):t._e(),t._v(" "),e("div",{staticClass:"div-block-275"}),t._v(" "),e("div",{staticClass:"div-block-276"},[e("div",{staticClass:"div-block-277"},[e("div",{staticClass:"text-block-70"},[t._v("\n          © "+t._s((new Date).getFullYear())+"\n          "),t.company?e("a",{staticClass:"link-5",attrs:{href:"#",target:"_blank"}},[t._v(t._s(t.company.companyName))]):t._e(),t._v(", All Rights Reserved\n        ")])]),t._v(" "),e("nuxt-link",{staticClass:"link-block-22 w-inline-block",attrs:{to:"/terms-conditions"}},[e("div",{staticClass:"text-block-70 b"},[t._v("\n          Privacy Policy Terms & Conditions\n        ")])])],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"div-block-257"},[t("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",width:"83",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-259"},[e("h1",{staticClass:"heading-63"},[t._v("Subscribe")]),t._v(" "),e("div",{staticClass:"text-block-65 b"},[t._v("\n            Don’t forget to subscribe to our newsletter.\n          ")]),t._v(" "),e("div",{staticClass:"form-block-8 w-form"},[e("form",{staticClass:"form-9"},[e("div",{staticClass:"div-block-260"},[e("input",{staticClass:"text-field-9 w-input",attrs:{type:"text",maxlength:"256",name:"field-10","data-name":"Field 10",placeholder:"E-mail",id:"field-10",required:""}}),e("img",{staticClass:"image-78",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/6358ede42749b85419003355_Vector%20(2).svg",loading:"lazy",width:"15",alt:""}})])])])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/facebook-round.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/twitter-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/linkedin-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/vimeo-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/instagram-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/github-icon.svg",loading:"lazy",width:"Auto",height:"Auto",alt:""}})])}],!1,null,null,null);e.default=component.exports},318:function(t,e,n){"use strict";n(305)},319:function(t,e,n){var r=n(143)((function(i){return i[1]}));r.push([t.i,".div-block-257{width:200px}.div-block-257 img{width:100%}",""]),r.locals={},t.exports=r},323:function(t,e,n){"use strict";n.r(e);var r=n(8),o=(n(48),{methods:{logout:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$auth.logout();case 2:t.$router.push("/");case 3:case"end":return e.stop()}}),e)})))()}},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),c=(n(324),n(56)),component=Object(c.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"nav-about-us w-nav",attrs:{"data-animation":"default","data-collapse":"medium","data-duration":"400","data-easing":"ease","data-easing2":"ease",role:"banner"}},[e("div",{staticClass:"container-new about-us"},[e("div",[e("nuxt-link",{staticClass:"brand-4 w-nav-brand",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[e("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",width:"150",alt:""}})]),t._v(" "),e("div",{attrs:{id:"ytWidget"}})],1),t._v(" "),e("nav",{staticClass:"nav-menu-3 w-nav-menu",attrs:{role:"navigation"}},[e("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:{path:"/",query:{username:t.$route.query.username}}}},[t._v("Home")]),e("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:{path:"/about",query:{username:t.$route.query.username}}}},[t._v("ABOUT")]),e("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:{path:"/gallery",query:{username:t.$route.query.username}}}},[t._v("GALLERY")]),e("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:{path:"/plan",query:{username:t.$route.query.username}}}},[t._v("PLAN")]),e("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:{path:"/faq",query:{username:t.$route.query.username}}}},[t._v("FAQ")]),e("nuxt-link",{staticClass:"navlink-new w-nav-link",attrs:{to:{path:"/contact",query:{username:t.$route.query.username}}}},[t._v("CONTACT")]),e("nuxt-link",{staticClass:"navlink-new w-nav-link",class:{hide:t.isAuthenticated},attrs:{to:{path:"/signup",query:{username:t.$route.query.username}}}},[t._v("SIGN UP")]),t._v(" "),e("nuxt-link",{staticClass:"button-13 w-button",class:{hide:t.isAuthenticated},attrs:{"data-w-id":"4d4f1d77-0b7e-0bc8-3bb1-37cede9dd815",to:{path:"/login",query:{username:t.$route.query.username}}}},[t._v("Login")]),t._v(" "),e("nuxt-link",{staticClass:"navlink-new w-nav-link",class:{hide:!t.isAuthenticated},attrs:{to:"/dashboard"}},[t._v("Dashboard")]),t._v(" "),e("a",{staticClass:"button-13 w-button",class:{hide:!t.isAuthenticated},attrs:{"data-w-id":"4d4f1d77-0b7e-0bc8-3bb1-37cede9dd815",to:"#"},on:{click:t.logout}},[t._v("Logout")])],1),t._v(" "),t._m(0)]),t._v(" "),e("div",{staticClass:"div-block-278"})])}),[function(){var t=this._self._c;return t("div",{staticClass:"menu-button-4 w-nav-button"},[t("div",{staticClass:"w-icon-nav-menu"})])}],!1,null,null,null);e.default=component.exports},324:function(t,e,n){"use strict";n(310)},325:function(t,e,n){var r=n(143)((function(i){return i[1]}));r.push([t.i,".button-13.hide,.navlink-new.hide{display:none}",""]),r.locals={},t.exports=r},478:function(t,e,n){"use strict";n.r(e);var r=n(8),o=n(28),c=(n(48),n(90),n(20),n(11),n(39),n(26),{data:function(){return Object(o.a)({email:"",complete:!0,user:"",company:"",showResponse:!1,isError:!1,response:"",onRequest:!1},"isError",!1)},methods:{callResponse:function(t,e){var n=this;this.response=t,this.isError=e,this.showResponse=!0,this.onRequest=!1,setTimeout((function(){n.showResponse=!1}),6e3)},checkErrorInputs:function(input,data){if("email"==input){if(""==data||!data||!/^\S+@\S+\.\S+$/.test(data))return this.$el.querySelector(".email").classList.add("active"),void(this.isError=!1);this.$el.querySelector(".email").classList.remove("active"),this.isError=!0}},processUserData:function(){var t=this;this.setArray(),this.checkArray.forEach((function(e){t.checkErrorInputs(e.name,e.data)})),this.isError&&this.processEmail()},processEmail:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var form;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return form={email:t.email},e.prev=1,e.next=4,t.$axios.patch("/users/forgotten-password",form);case 4:t.callResponse("Please verify your email and click on the link button to continue.",!1),e.next=10;break;case 7:e.prev=7,e.t0=e.catch(1),t.callResponse(e.t0.response.data.message,!0);case 10:case"end":return e.stop()}}),e,null,[[1,7]])})))()},setArray:function(){this.checkArray=[{name:"email",data:this.email}]},loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/scripts/client.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},getCompany:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:n=e.sent,t.company=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},mounted:function(){this.getCompany(),this.loadScript(),this.isAuthenticated&&this.$router.push("/dashboard")},computed:{isAuthenticated:function(){return this.$store.getters.isAuthenticated}}}),l=n(56),component=Object(l.a)(c,(function(){var t=this,e=t._self._c;return e("div",{},[e("home-light-navigation"),t._v(" "),t._m(0),t._v(" "),e("div",{staticClass:"sign-up2"},[e("div",{staticClass:"container-new1"},[e("div",{staticClass:"div-block-417"},[e("div",{staticClass:"div-block-418"},[t._m(1),t._v(" "),e("div",{staticClass:"div-block-413 b"}),t._v(" "),e("h1",{staticClass:"heading-129"},[t._v("\n            If you have an account, enter your email to recorver it.\n          ")]),t._v(" "),e("div",{staticClass:"form-block-12 _2 w-form"},[e("div",[e("label",{staticClass:"field-label email",attrs:{for:"name-6"}},[t._v("Please enter a valid email.")]),e("input",{directives:[{name:"model",rawName:"v-model",value:t.email,expression:"email"}],staticClass:"text-field-16 w-input",attrs:{type:"text",maxlength:"256",placeholder:"Enter Email"},domProps:{value:t.email},on:{blur:function(e){return t.checkErrorInputs("email",t.email)},input:function(e){e.target.composing||(t.email=e.target.value)}}}),t._v(" "),e("h1",{staticClass:"heading-127"},[e("strong",[t._v(" Already have an account? ")]),e("nuxt-link",{attrs:{to:"/login"}},[e("strong",[t._v("Click here")])])],1),t._v(" "),e("div",{staticClass:"terms-check"},[t.showResponse?e("div",{staticClass:"response-text",class:{error:t.isError}},[t._v("\n                  "+t._s(t.response)+"\n                ")]):t._e()]),t._v(" "),e("input",{staticClass:"submit-button-10 w-button",attrs:{type:"submit",value:"Login"},on:{click:t.processEmail}})])])]),t._v(" "),e("div",{staticClass:"div-block-418 b"},[t._m(2),t._v(" "),e("div",{staticClass:"div-block-413 b"}),t._v(" "),e("h1",{staticClass:"heading-129 b"},[t._v("\n            If you don't have an account, create an account.\n          ")]),t._v(" "),e("div",{staticClass:"form-block-12 w-form"},[e("nuxt-link",{staticClass:"submit-button-10 c w-button",attrs:{to:"/signup"}},[t._v("Create Account")])],1)])])])]),t._v(" "),e("home-footer")],1)}),[function(){var t=this._self._c;return t("div",{staticClass:"container-new1 _2 z b"},[t("div",{staticClass:"div-block-408"},[t("div",{staticClass:"div-block-279"},[t("h1",{staticClass:"heading-67"},[this._v("Forgotten Password")])])])])},function(){var t=this._self._c;return t("h1",{staticClass:"heading-126"},[t("strong",[this._v("Registered Clients")])])},function(){var t=this._self._c;return t("h1",{staticClass:"heading-126"},[t("strong",[this._v("New Clients")])])}],!1,null,null,null);e.default=component.exports;installComponents(component,{HomeLightNavigation:n(323).default,HomeFooter:n(314).default})}}]);
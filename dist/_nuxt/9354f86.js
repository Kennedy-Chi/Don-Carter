(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{312:function(t,e,n){var content=n(324);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(144).default)("395f4023",content,!0,{sourceMap:!1})},317:function(t,e,n){"use strict";n.r(e);var c=n(8),o=(n(48),{data:function(){return{company:"",address:"",aboutContent:""}},methods:{loadScript:function(){var t=document.getElementById("translator");null!=t&&document.body.removeChild(t);var e=document.createElement("script");e.type="text/javascript",e.src="https://translate.yandex.net/website-widget/v1/widget.js?widgetId=ytWidget&pageLang=en&widgetTheme=light&autoMode=false",e.async=!0,e.id="translator";var n=document.querySelector("#footer");n?n.appendChild(e):console.error("Could not find app node to append script element")},setFileURL:function(){this.$store.commit("SET_URL",this.$config.FILE_URL)},getAboutCompany:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/about");case 3:return n=e.sent,e.next=6,n.data.data[0].content;case 6:t.aboutContent=e.sent,e.next=12;break;case 9:e.prev=9,e.t0=e.catch(0),console.log(e.t0);case 12:case"end":return e.stop()}}),e,null,[[0,9]])})))()},getCompany:function(){var t=this;return Object(c.a)(regeneratorRuntime.mark((function e(){var n,c,o;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/company");case 3:return o=e.sent,e.next=6,null===(n=o.data.data)||void 0===n||null===(c=n.media[0])||void 0===c?void 0:c.text;case 6:t.address=e.sent,t.company=o.data.data,e.next=13;break;case 10:e.prev=10,e.t0=e.catch(0),console.log(e.t0.response.data);case 13:case"end":return e.stop()}}),e,null,[[0,10]])})))()}},mounted:function(){this.loadScript(),this.setFileURL(),this.getAboutCompany(),this.getCompany()}}),l=(n(323),n(56)),component=Object(l.a)(o,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"last-section",attrs:{id:"footer"}},[e("div",{staticClass:"container-new1"},[e("div",[e("div",{staticClass:"div-block-255"},[e("div",{staticClass:"div-block-256"},[t._m(0),t._v(" "),e("div",{staticClass:"text-block-63",domProps:{innerHTML:t._s("".concat(t.aboutContent.substring(0,200),"..."))}})]),t._v(" "),e("div",{staticClass:"div-block-258"},[e("h1",{staticClass:"heading-63"},[t._v("Quick Links")]),t._v(" "),e("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/about"}},[e("div",{staticClass:"text-block-64"},[t._v("About")])]),e("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/plan"}},[e("div",{staticClass:"text-block-64"},[t._v("Plans")])]),e("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/gallery"}},[e("div",{staticClass:"text-block-64"},[t._v("Gallery")])]),e("nuxt-link",{staticClass:"link-block-21 w-inline-block",attrs:{to:"/contact"}},[e("div",{staticClass:"text-block-64"},[t._v("Contact Us")])])],1),t._v(" "),e("div",{staticClass:"div-block-259"},[e("h1",{staticClass:"heading-63"},[t._v("Contact Us")]),t._v(" "),e("div",{staticClass:"text-block-65"},[t._v("\n            You can contact us with your email for mailing conversations at\n            our contact page us chat us directly in our website through our\n            live support.\n          ")]),t._v(" "),e("div",{staticClass:"text-block-66",domProps:{innerHTML:t._s(t.address)}})]),t._v(" "),t._m(1)])]),t._v(" "),t.company.social?e("div",{staticClass:"div-block-274"},[t._m(2),t._v(" "),t._m(3),t._v(" "),t._m(4),t._v(" "),t._m(5),t._v(" "),t._m(6),t._v(" "),t._m(7)]):t._e(),t._v(" "),e("div",{staticClass:"div-block-275"}),t._v(" "),e("div",{staticClass:"div-block-276"},[e("div",{staticClass:"div-block-277"},[e("div",{staticClass:"text-block-70"},[t._v("\n          © "+t._s((new Date).getFullYear())+"\n          "),t.company?e("a",{staticClass:"link-5",attrs:{href:"#",target:"_blank"}},[t._v(t._s(t.company.companyName))]):t._e(),t._v(", All Rights Reserved\n        ")])]),t._v(" "),e("nuxt-link",{staticClass:"link-block-22 w-inline-block",attrs:{to:"/terms-conditions"}},[e("div",{staticClass:"text-block-70 b"},[t._v("\n          Privacy Policy Terms & Conditions\n        ")])])],1)])])}),[function(){var t=this._self._c;return t("div",{staticClass:"div-block-257"},[t("img",{attrs:{src:"/images/Landmark-Logo.png",loading:"lazy",width:"83",alt:""}})])},function(){var t=this,e=t._self._c;return e("div",{staticClass:"div-block-259"},[e("h1",{staticClass:"heading-63"},[t._v("Subscribe")]),t._v(" "),e("div",{staticClass:"text-block-65 b"},[t._v("\n            Don’t forget to subscribe to our newsletter.\n          ")]),t._v(" "),e("div",{staticClass:"form-block-8 w-form"},[e("form",{staticClass:"form-9"},[e("div",{staticClass:"div-block-260"},[e("input",{staticClass:"text-field-9 w-input",attrs:{type:"text",maxlength:"256",name:"field-10","data-name":"Field 10",placeholder:"E-mail",id:"field-10",required:""}}),e("img",{staticClass:"image-78",attrs:{src:"https://uploads-ssl.webflow.com/63285dac88280ce08f0a9677/6358ede42749b85419003355_Vector%20(2).svg",loading:"lazy",width:"15",alt:""}})])])])])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/facebook-round.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/twitter-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/linkedin-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/vimeo-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/instagram-icon.svg",loading:"lazy",alt:""}})])},function(){var t=this._self._c;return t("div",{staticClass:"div-block-273"},[t("img",{staticClass:"image-81",attrs:{src:"/images/github-icon.svg",loading:"lazy",width:"Auto",height:"Auto",alt:""}})])}],!1,null,null,null);e.default=component.exports},323:function(t,e,n){"use strict";n(312)},324:function(t,e,n){var c=n(143)((function(i){return i[1]}));c.push([t.i,".div-block-257{width:200px}.div-block-257 img{width:100%}",""]),c.locals={},t.exports=c}}]);
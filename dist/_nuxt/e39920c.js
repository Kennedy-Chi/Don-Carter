(window.webpackJsonp=window.webpackJsonp||[]).push([[28],{393:function(t,e,n){"use strict";n.r(e);n(58),n(26);var r=n(8),c=(n(49),{data:function(){return{partners:[]}},methods:{loadScript:function(){var t=document.getElementById("script");null!=t&&document.body.removeChild(t);var script=document.createElement("script");script.type="text/javascript",script.src="/script/home.js",script.async=!0,script.id="script";var e=document.querySelector("#footer");e?e.appendChild(script):console.error("Could not find app node to append script element")},getPartners:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var n;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.prev=0,e.next=3,t.$axios.get("/partners");case 3:n=e.sent,t.partners=n.data.data,e.next=10;break;case 7:e.prev=7,e.t0=e.catch(0),console.log(e.t0.response.data.message);case 10:case"end":return e.stop()}}),e,null,[[0,7]])})))()}},computed:{FILE_URL:function(){return this.$store.state.fileURL}},mounted:function(){this.getPartners()}}),o=n(57),component=Object(o.a)(c,(function(){var t=this,e=t._self._c;return e("div",{staticClass:"custom-container"},[e("div",{staticClass:"partners"},t._l(t.partners,(function(n){return e("div",{key:n._id,staticClass:"each-partner"},[e("img",{staticClass:"partner-im",attrs:{src:"".concat(t.FILE_URL,"/").concat(n.image),loading:"lazy",alt:""}}),t._v(" "),e("h3",{staticClass:"partner-name"},[t._v(t._s(n.name))])])})),0)])}),[],!1,null,null,null);e.default=component.exports}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[23,24],{297:function(e,t,r){var content=r(321);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("22e9e6cc",content,!0,{sourceMap:!1})},300:function(e,t,r){"use strict";r.r(t);var c={props:{service:{type:Object,required:!0},admin:{type:Boolean,default:!1}},computed:{getLink:function(){return this.admin?"/admin/services/".concat(this.service.id):"/services/".concat(this.service.id)}}},n=(r(320),r(3)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("nuxt-link",{attrs:{to:e.getLink}},[r("div",{staticClass:"services_item",attrs:{"data-aos":e.service.aos}},[r("img",{staticClass:"services_item_img",attrs:{src:e.service.img}}),e._v(" "),r("h3",{staticClass:"services_item_header"},[e._v(e._s(e.service.title))]),e._v(" "),r("p",{staticClass:"services_item_text"},[e._v(e._s(e.service.descr))])])])],1)}),[],!1,null,null,null);t.default=component.exports},306:function(e,t,r){var content=r(354);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("78a616da",content,!0,{sourceMap:!1})},320:function(e,t,r){"use strict";r(297)},321:function(e,t,r){var c=r(45)(!1);c.push([e.i,".services_item{padding:20px;margin:3%;display:flex;flex-wrap:wrap;flex-direction:column;box-shadow:2px 2px 2px 2px rgba(0,0,0,.2)}.services_item .services_item_img{width:auto;margin:0 auto;height:auto}.services_item .services_item_header{font-size:24px;font-weight:400;padding-top:20px;border-bottom:3px solid green;text-align:center}.services_item .services_item_text{padding-top:30px}.services_item:hover{background:linear-gradient(90deg,#020024,#15d5cb 45%,#00d4ff)}.services_item:hover .services_item_img{transform:rotate(45deg);transition:all .5s ease-in-out 0s}.services_item:hover .services_item_header,.services_item:hover .services_item_text{color:#fff}",""]),e.exports=c},329:function(e,t,r){"use strict";r.r(t);var c={components:{ServicesPreview:r(300).default},props:{services:{type:Array,required:!0},admin:{type:Boolean,default:!1}}},n=(r(353),r(3)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",{staticClass:"services-list"},[r("div",{staticClass:"container"},[r("div",{staticClass:"services__wrapper"},e._l(e.services,(function(t){return r("ServicesPreview",{key:t.id,attrs:{service:t,admin:e.admin}})})),1)])])}),[],!1,null,null,null);t.default=component.exports;installComponents(component,{ServicesPreview:r(300).default})},353:function(e,t,r){"use strict";r(306)},354:function(e,t,r){var c=r(45)(!1);c.push([e.i,".services__wrapper{display:grid;grid-template-columns:repeat(3,1fr);grid-column-gap:30px;grid-row-gap:2em}@media screen and (max-width:775px){.services__wrapper{display:grid;grid-template-columns:repeat(2,1fr);grid-column-gap:30px;grid-row-gap:2em}}@media screen and (max-width:490px){.services__wrapper{display:grid;grid-template-columns:repeat(1,1fr);grid-column-gap:30px;grid-row-gap:2em}}",""]),e.exports=c}}]);
(window.webpackJsonp=window.webpackJsonp||[]).push([[55,25],{372:function(e,t,r){var content=r(403);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(46).default)("f2bbd3bc",content,!0,{sourceMap:!1})},402:function(e,t,r){"use strict";r(372)},403:function(e,t,r){var c=r(45)(!1);c.push([e.i,".service_item{padding:40px;margin:3%;display:flex}.service_item .img{width:30%}.service_item .services_item_img{width:50%;margin:0 auto}.service_item .services_item_header{font-size:24px;font-weight:400;padding-top:20px;border-bottom:3px solid green;text-align:center}.service_item .services_item_text{padding-top:30px}@media screen and (max-width:775px){.service_item{flex-wrap:wrap}.img{width:100%;margin:auto}}@media screen and (max-width:490px){.service_item{flex-wrap:wrap}.img{width:100%;margin:auto}}",""]),e.exports=c},432:function(e,t,r){"use strict";r.r(t);var c={props:{servicer:{type:Object,required:!0}}},n=(r(402),r(3)),component=Object(n.a)(c,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("div",{staticClass:"container"},[r("div",{attrs:{"data-aos":"fade-up"}},[r("div",{staticClass:"service_item"},[r("div",{staticClass:"service_page img"},[r("img",{staticClass:"services_item_img",attrs:{src:e.servicer.img}})]),e._v(" "),r("div",{staticClass:"service_body"},[r("h3",{staticClass:"services_item_header"},[e._v(e._s(e.servicer.title))]),e._v(" "),r("p",{staticClass:"services_item_text"},[e._v(e._s(e.servicer.descr))])])])])])])}),[],!1,null,null,null);t.default=component.exports},497:function(e,t,r){"use strict";r.r(t);r(47),r(36),r(48),r(12),r(61),r(37),r(62);var c=r(26),n=r(14),o=r.n(n);function l(object,e){var t=Object.keys(object);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(object);e&&(r=r.filter((function(e){return Object.getOwnPropertyDescriptor(object,e).enumerable}))),t.push.apply(t,r)}return t}function d(e){for(var i=1;i<arguments.length;i++){var source=null!=arguments[i]?arguments[i]:{};i%2?l(Object(source),!0).forEach((function(t){Object(c.a)(e,t,source[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(source)):l(Object(source)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(source,t))}))}return e}var v={components:{Service:r(432).default},asyncData:function(e){return o.a.get("https://lenaplash-16c83-default-rtdb.firebaseio.com/services/".concat(e.params.id,".json")).then((function(t){return{service:d(d({},t.data),{},{id:e.params.id})}})).catch((function(t){return e.error(t)}))}},m=r(3),component=Object(m.a)(v,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("section",[r("Service",{attrs:{servicer:e.service}})],1)}),[],!1,null,null,null);t.default=component.exports}}]);
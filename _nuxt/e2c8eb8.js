(window.webpackJsonp=window.webpackJsonp||[]).push([[3,2],{301:function(e,t,r){var content=r(303);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("5b0142b5",content,!0,{sourceMap:!1})},302:function(e,t,r){"use strict";var n=r(301),o=r.n(n);r.d(t,"default",(function(){return o.a}))},303:function(e,t,r){var n=r(17)(!1);n.push([e.i,'.box_arW1K{display:flex;flex-direction:column;background-color:#fff;padding:.5rem 1.5rem}.title_dFx5s{font-family:futura-pt,sans-serif;color:#eb5a00;font-size:2.25rem;font-weight:700;margin-bottom:1rem}.title_dFx5s:after{content:"";display:block;margin-left:-.5rem;margin-top:-.23em;width:10rem;height:.5px;background-color:#e4762d}.list_0fqiD{display:flex;flex-direction:column;margin:1rem;width:calc(100% - 2rem)}.list_0fqiD p{font-size:.75rem;font-weight:700;text-align:center;width:100%;padding-top:.75rem;padding-bottom:.75rem}.list_0fqiD p:after{content:"";display:block;height:1px;background-image:linear-gradient(90deg,#000,#000 5px,transparent 0);background-size:10px 1px;background-position:0 100%;background-repeat:repeat-x;transform:translateY(.75rem)}.list_0fqiD p:last-child:after{content:none}.more_OrWif{display:flex;margin:auto 0 .25rem;align-self:end;align-items:center;grid-gap:.25rem;gap:.25rem}.more_OrWif p{font-family:futura-pt,sans-serif;color:#e4762d}.more_OrWif span{width:1rem;height:3.5px;border-bottom:.5px solid #e4762d;border-right:.5px solid #e4762d;transform:skew(45deg) translateY(-1.75px)}',""]),n.locals={box:"box_arW1K",title:"title_dFx5s",list:"list_0fqiD",more:"more_OrWif"},e.exports=n},305:function(e,t,r){var content=r(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,r(18).default)("06761a62",content,!0,{sourceMap:!1})},306:function(e,t,r){"use strict";r.r(t);var n=r(8),o=(r(49),r(48),r(0).a.extend({name:"Top",props:{limited:{type:Boolean,default:!0}},data:function(){return{news:["loading"]}},fetch:function(){var e=this;return Object(n.a)(regeneratorRuntime.mark((function t(){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("news").only(["news"]).fetch();case 2:if((content=t.sent)&&!Array.isArray(content)){t.next=5;break}return t.abrupt("return");case 5:e.limited?e.news=content.news.slice(0,3):e.news=content.news;case 6:case"end":return t.stop()}}),t)})))()}})),l=r(302),c=r(11);var component=Object(c.a)(o,(function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",{class:e.$style.box},[r("p",{class:e.$style.title},[e._v("News")]),e._v(" "),r("div",{class:e.$style.list},e._l(e.news,(function(t,n){return r("p",{key:n},[e._v(e._s(t))])})),0),e._v(" "),r("nuxt-link",{directives:[{name:"show",rawName:"v-show",value:e.limited,expression:"limited"}],class:e.$style.more,attrs:{to:"/news"}},[r("p",[e._v("MORE")]),e._v(" "),r("span")])],1)}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.default=component.exports},309:function(e,t,r){e.exports=r.p+"img/top.ccb6372.svg"},310:function(e,t,r){"use strict";var n=r(305),o=r.n(n);r.d(t,"default",(function(){return o.a}))},311:function(e,t,r){var n=r(17)(!1);n.push([e.i,".main_Fqkhs{display:flex;flex-direction:column;align-items:center;grid-gap:4rem;gap:4rem;margin-bottom:6rem;width:100%}.card_keDWJ,.top_Rs0Kv{width:90%;max-width:25rem}.card_keDWJ{min-height:14.75rem}",""]),n.locals={main:"main_Fqkhs",card:"card_keDWJ",top:"top_Rs0Kv"},e.exports=n},325:function(e,t,r){"use strict";r.r(t);var n=r(0).a.extend({name:"Index",head:function(){return{title:"トップページ"}}}),o=r(310),l=r(11);var component=Object(l.a)(n,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.main},[n("img",{class:e.$style.top,attrs:{src:r(309)}}),e._v(" "),n("News",{class:e.$style.card,attrs:{limited:!0}})],1)}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports;installComponents(component,{News:r(306).default})}}]);
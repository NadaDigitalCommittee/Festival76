(window.webpackJsonp=window.webpackJsonp||[]).push([[12,5,6],{337:function(e,t,n){var content=n(345);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("47b6608e",content,!0,{sourceMap:!1})},341:function(e,t,n){var content=n(358);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("5b0142b5",content,!0,{sourceMap:!1})},344:function(e,t,n){"use strict";var r=n(337),l=n.n(r);n.d(t,"default",(function(){return l.a}))},345:function(e,t,n){var r=n(15)(!1);r.push([e.i,".more_Z5BwG{display:flex;margin:auto 0 .25rem;align-self:end;align-items:center;grid-gap:.25rem;gap:.25rem}.more_Z5BwG p{font-family:futura-pt,sans-serif;color:#e4762d}.more_Z5BwG span{width:1rem;height:3.5px;border-bottom:.5px solid #e4762d;border-right:.5px solid #e4762d;transform:skew(45deg) translateY(-1.75px)}",""]),r.locals={more:"more_Z5BwG"},e.exports=r},346:function(e,t,n){"use strict";n.r(t);var r=n(0).a.extend({name:"More",props:{link:{type:String,required:!0}}}),l=n(344),o=n(9);var component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("nuxt-link",{class:e.$style.more,attrs:{to:"/news"}},[n("p",[e._v("MORE")]),e._v(" "),n("span")])}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.default=component.exports},357:function(e,t,n){"use strict";var r=n(341),l=n.n(r);n.d(t,"default",(function(){return l.a}))},358:function(e,t,n){var r=n(15)(!1);r.push([e.i,'.box_arW1K{display:flex;flex-direction:column;background-color:#fff;padding:.5rem 1.5rem}.title_dFx5s{font-family:futura-pt,sans-serif;color:#eb5a00;font-size:2.25rem;font-weight:700;margin-bottom:1rem}.title_dFx5s:after{content:"";display:block;margin-left:-.5rem;margin-top:-.23em;width:10rem;height:.5px;background-color:#e4762d}.list_0fqiD{display:flex;flex-direction:column;margin:1rem;width:calc(100% - 2rem)}.list_0fqiD p{font-size:.75rem;font-weight:700;text-align:center;width:100%;padding-top:.75rem;padding-bottom:.75rem}.list_0fqiD p:after{content:"";display:block;height:1px;background-image:linear-gradient(90deg,#000,#000 5px,transparent 0);background-size:10px 1px;background-position:0 100%;background-repeat:repeat-x;transform:translateY(.75rem)}.list_0fqiD p:last-child:after{content:none}',""]),r.locals={box:"box_arW1K",title:"title_dFx5s",list:"list_0fqiD"},e.exports=r},361:function(e,t,n){var content=n(380);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("d73690f6",content,!0,{sourceMap:!1})},366:function(e,t,n){"use strict";n.r(t);var r=n(10),l=(n(49),n(50),n(0).a.extend({name:"News",props:{limited:{type:Boolean,default:!0}},data:function(){return{news:["Loading..."]}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("news").only(["news"]).fetch();case 2:if((content=t.sent)&&!Array.isArray(content)){t.next=5;break}return t.abrupt("return");case 5:e.limited?e.news=content.news.slice(0,3):e.news=content.news;case 6:case"end":return t.stop()}}),t)})))()}})),o=n(357),c=n(9);var component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.box},[n("p",{class:e.$style.title},[e._v("News")]),e._v(" "),n("div",{class:e.$style.list},e._l(e.news,(function(t,r){return n("p",{key:r},[e._v(e._s(t))])})),0),e._v(" "),e.limited?n("More",{attrs:{link:"/news"}}):e._e()],1)}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports;installComponents(component,{More:n(346).default})},379:function(e,t,n){"use strict";var r=n(361),l=n.n(r);n.d(t,"default",(function(){return l.a}))},380:function(e,t,n){var r=n(15)(!1);r.push([e.i,".main_DgtyL{display:flex;flex-direction:column;align-items:center;grid-gap:4rem;gap:4rem;width:100%}.card_Cg8P3{width:90%;max-width:25rem;min-height:32rem}",""]),r.locals={main:"main_DgtyL",card:"card_Cg8P3"},e.exports=r},404:function(e,t,n){"use strict";n.r(t);var r=n(0).a.extend({name:"NewsPage",head:function(){return{title:"ニュース"}}}),l=n(379),o=n(9);var component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.main},[n("News",{class:e.$style.card,attrs:{limited:!1}})],1)}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.default=component.exports;installComponents(component,{News:n(366).default})}}]);
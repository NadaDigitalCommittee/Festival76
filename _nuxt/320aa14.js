(window.webpackJsonp=window.webpackJsonp||[]).push([[12,4,5,6],{326:function(t,e,n){var content=n(334);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("3f4a0f7e",content,!0,{sourceMap:!1})},327:function(t,e,n){var content=n(337);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("47b6608e",content,!0,{sourceMap:!1})},331:function(t,e,n){var content=n(351);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("5b0142b5",content,!0,{sourceMap:!1})},333:function(t,e,n){"use strict";var r=n(326),l=n.n(r);n.d(e,"default",(function(){return l.a}))},334:function(t,e,n){var r=n(18)(!1);r.push([t.i,".main_Xlpa4{position:relative;width:100%;height:100%}.pat1_XJWxm{top:0;left:0;width:82.8px}.pat1_XJWxm,.pat2_VfLu\\+{position:absolute}.pat2_VfLu\\+{top:7.5%;right:30%;width:56.53px}.pat3_GbYcq{position:absolute;top:30%;right:.15%;width:91.11px}.pat4_qBL1H{top:62.5%;right:37.5%}.pat4_qBL1H,.pat5_3F6fP{position:absolute;width:76.74px}.pat5_3F6fP{top:67.5%;left:2.5%}",""]),r.locals={main:"main_Xlpa4",pat1:"pat1_XJWxm",pat2:"pat2_VfLu+",pat3:"pat3_GbYcq",pat4:"pat4_qBL1H",pat5:"pat5_3F6fP"},t.exports=r},336:function(t,e,n){"use strict";var r=n(327),l=n.n(r);n.d(e,"default",(function(){return l.a}))},337:function(t,e,n){var r=n(18)(!1);r.push([t.i,".more_Z5BwG{display:flex;margin:auto 0 .25rem;align-self:end;align-items:center;grid-gap:.25rem;gap:.25rem}.more_Z5BwG p{font-family:futura-pt,sans-serif;color:#e4762d}.more_Z5BwG span{width:1rem;height:3.5px;border-bottom:.5px solid #e4762d;border-right:.5px solid #e4762d;transform:skew(45deg) translateY(-1.75px)}",""]),r.locals={more:"more_Z5BwG"},t.exports=r},338:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({name:"Background"}),l=n(333),o=n(13);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",[r("div",{class:t.$style.main},[r("img",{class:t.$style.pat1,attrs:{src:n(120)}}),t._v(" "),r("img",{class:t.$style.pat2,attrs:{src:n(225)}}),t._v(" "),r("img",{class:t.$style.pat3,attrs:{src:n(224)}}),t._v(" "),r("img",{class:t.$style.pat4,attrs:{src:n(157)}}),t._v(" "),r("img",{class:t.$style.pat5,attrs:{src:n(157)}})])])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports},339:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({name:"More",props:{link:{type:String,required:!0}}}),l=n(336),o=n(13);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("nuxt-link",{class:t.$style.more,attrs:{to:"/news"}},[n("p",[t._v("MORE")]),t._v(" "),n("span")])}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports},350:function(t,e,n){"use strict";var r=n(331),l=n.n(r);n.d(e,"default",(function(){return l.a}))},351:function(t,e,n){var r=n(18)(!1);r.push([t.i,'.box_arW1K{display:flex;flex-direction:column;background-color:#fff;padding:.5rem 1.5rem}.title_dFx5s{font-family:futura-pt,sans-serif;color:#eb5a00;font-size:2.25rem;font-weight:700;margin-bottom:1rem}.title_dFx5s:after{content:"";display:block;margin-left:-.5rem;margin-top:-.23em;width:10rem;height:.5px;background-color:#e4762d}.list_0fqiD{display:flex;flex-direction:column;margin:1rem;width:calc(100% - 2rem)}.list_0fqiD p{font-size:.75rem;font-weight:700;text-align:center;width:100%;padding-top:.75rem;padding-bottom:.75rem}.list_0fqiD p:after{content:"";display:block;height:1px;background-image:linear-gradient(90deg,#000,#000 5px,transparent 0);background-size:10px 1px;background-position:0 100%;background-repeat:repeat-x;transform:translateY(.75rem)}.list_0fqiD p:last-child:after{content:none}',""]),r.locals={box:"box_arW1K",title:"title_dFx5s",list:"list_0fqiD"},t.exports=r},354:function(t,e,n){var content=n(369);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(19).default)("d73690f6",content,!0,{sourceMap:!1})},358:function(t,e,n){"use strict";n.r(e);var r=n(9),l=(n(49),n(50),n(0).a.extend({name:"News",props:{limited:{type:Boolean,default:!0}},data:function(){return{news:["Loading..."]}},fetch:function(){var t=this;return Object(r.a)(regeneratorRuntime.mark((function e(){var content;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,t.$content("news").only(["news"]).fetch();case 2:if((content=e.sent)&&!Array.isArray(content)){e.next=5;break}return e.abrupt("return");case 5:t.limited?t.news=content.news.slice(0,3):t.news=content.news;case 6:case"end":return e.stop()}}),e)})))()}})),o=n(350),c=n(13);var component=Object(c.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.box},[n("p",{class:t.$style.title},[t._v("News")]),t._v(" "),n("div",{class:t.$style.list},t._l(t.news,(function(e,r){return n("p",{key:r},[t._v(t._s(e))])})),0),t._v(" "),t.limited?n("More",{attrs:{link:"/news"}}):t._e()],1)}),[],!1,(function(t){this.$style=o.default.locals||o.default}),null,null);e.default=component.exports;installComponents(component,{More:n(339).default})},368:function(t,e,n){"use strict";var r=n(354),l=n.n(r);n.d(e,"default",(function(){return l.a}))},369:function(t,e,n){var r=n(18)(!1);r.push([t.i,".main_DgtyL{display:flex;flex-direction:column;align-items:center;grid-gap:4rem;gap:4rem;width:100%}.background_\\+6May{position:absolute;max-width:27.7777777778rem;z-index:-1;top:15rem;left:calc(50vw - min(100vw,27.7777777778rem)/2);width:100%;height:calc(min(100vw,27.7777777778rem)*0.75)}.card_Cg8P3{width:90%;max-width:25rem;min-height:32rem}",""]),r.locals={main:"main_DgtyL",background:"background_+6May",card:"card_Cg8P3"},t.exports=r},389:function(t,e,n){"use strict";n.r(e);var r=n(0).a.extend({name:"NewsPage",head:function(){return{title:"ニュース"}}}),l=n(368),o=n(13);var component=Object(o.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.main},[n("Background2",{class:t.$style.background}),t._v(" "),n("News",{class:t.$style.card,attrs:{limited:!1}})],1)}),[],!1,(function(t){this.$style=l.default.locals||l.default}),null,null);e.default=component.exports;installComponents(component,{Background2:n(338).default,News:n(358).default})}}]);
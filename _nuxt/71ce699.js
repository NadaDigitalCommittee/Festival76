(window.webpackJsonp=window.webpackJsonp||[]).push([[16,6,8,9],{341:function(e,t,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("47b6608e",content,!0,{sourceMap:!1})},342:function(e,t,n){"use strict";n(87),n(36),n(49);t.a={data:function(){return{meta:{title:null,description:"2022年５月２～３日に開催される。第76回灘校文化祭「Turn it Over🔥」の公式ウェブサイトです。"}}},head:function(){var e="第76回灘校文化祭「Turn it Over🔥」",title=this.meta.title?"".concat(this.meta.title," - ").concat(e):e;return{title:title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"og:title",name:"og:title",content:title},{hid:"og:description",name:"og:description",content:this.meta.description},{hid:"og:url",name:"og:url",content:"".concat("https://fest.nada-sc.jp/2022").concat(this.$route.path)}]}}}},348:function(e,t,n){var content=n(390);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("5b0142b5",content,!0,{sourceMap:!1})},372:function(e,t,n){"use strict";var r=n(341),l=n.n(r);n.d(t,"default",(function(){return l.a}))},373:function(e,t,n){var r=n(15)(!1);r.push([e.i,".more_Z5BwG{display:flex;margin:auto 0 .25rem;align-self:end;align-items:center;grid-gap:.25rem;gap:.25rem}.more_Z5BwG p{font-family:futura-pt,sans-serif;color:#e4762d}.more_Z5BwG span{width:1rem;height:3.5px;border-bottom:.5px solid #e4762d;border-right:.5px solid #e4762d;transform:skew(45deg) translateY(-1.75px)}",""]),r.locals={more:"more_Z5BwG"},e.exports=r},374:function(e,t,n){"use strict";n.r(t);var r=n(0).a.extend({name:"More",props:{link:{type:String}}}),l=n(372),o=n(9);var component=Object(o.a)(r,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",[e.link?n("nuxt-link",{class:e.$style.more,attrs:{to:e.link}},[n("p",[e._v("MORE")]),e._v(" "),n("span")]):e._e(),e._v(" "),e.link?e._e():n("div",{class:e.$style.more},[n("p",[e._v("MORE")]),e._v(" "),n("span")])],1)}),[],!1,(function(e){this.$style=l.default.locals||l.default}),null,null);t.default=component.exports},389:function(e,t,n){"use strict";var r=n(348),l=n.n(r);n.d(t,"default",(function(){return l.a}))},390:function(e,t,n){var r=n(15)(!1);r.push([e.i,'.box_arW1K{display:flex;flex-direction:column;background-color:#fff;padding:.5rem 1.5rem}.title_dFx5s{font-family:futura-pt,sans-serif;color:#eb5a00;font-size:2.25rem;font-weight:700;margin-bottom:1rem}.title_dFx5s:after{content:"";display:block;margin-left:-.5rem;margin-top:-.23em;width:10rem;height:.5px;background-color:#e4762d}.list_0fqiD{display:flex;flex-direction:column;margin:1rem;width:calc(100% - 2rem)}.list_0fqiD div:after{content:"";display:block;height:1px;background-image:linear-gradient(90deg,#000,#000 5px,transparent 0);background-size:10px 1px;background-position:0 100%;background-repeat:repeat-x}.list_0fqiD div:last-child:after{content:none}.list_0fqiD p{font-size:.75rem;font-weight:700;text-align:center;width:100%;padding-top:.75rem;padding-bottom:.75rem}.more_OrWif{margin-left:auto;margin-bottom:.25rem}',""]),r.locals={box:"box_arW1K",title:"title_dFx5s",list:"list_0fqiD",more:"more_OrWif"},e.exports=r},399:function(e,t,n){var content=n(461);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[e.i,content,""]]),content.locals&&(e.exports=content.locals);(0,n(16).default)("06761a62",content,!0,{sourceMap:!1})},400:function(e,t,n){"use strict";n.r(t);var r=n(0).a.extend({name:"GoogleMap"}),l=n(9),component=Object(l.a)(r,(function(){var e=this.$createElement;return(this._self._c||e)("iframe",{attrs:{src:"https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3279.4300969332908!2d135.2660056154178!3d34.7195516897157!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x60008cfd8440bcc9%3A0x526d26ccfad6f4df!2z54GY5Lit5a2m5qCh44O76auY562J5a2m5qCh!5e0!3m2!1sja!2sjp!4v1651362564075!5m2!1sja!2sjp",allowfullscreen:"",loading:"lazy",referrerpolicy:"no-referrer-when-downgrade"}})}),[],!1,null,null,null);t.default=component.exports},403:function(e,t,n){"use strict";n.r(t);var r=n(10),l=(n(50),n(0).a.extend({name:"News",props:{limited:{type:Boolean,default:!0}},data:function(){return{news:[]}},fetch:function(){var e=this;return Object(r.a)(regeneratorRuntime.mark((function t(){var content;return regeneratorRuntime.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,e.$content("news").only(["news"]).fetch();case 2:if((content=t.sent)&&!Array.isArray(content)){t.next=5;break}return t.abrupt("return");case 5:e.news=content.news;case 6:case"end":return t.stop()}}),t)})))()}})),o=n(389),c=n(9);var component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.box},[n("p",{class:e.$style.title},[e._v("News")]),e._v(" "),n("div",{class:e.$style.list},e._l(e.limited?e.news.slice(0,3):e.news,(function(t,r){return n("div",{key:r},[n("nuxt-link",{attrs:{to:t.link}},[n("p",[e._v(e._s(t.description))])])],1)})),0),e._v(" "),e.limited&&e.news.length>3?n("More",{class:e.$style.more,attrs:{link:"/news"}}):e._e()],1)}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports;installComponents(component,{More:n(374).default})},460:function(e,t,n){"use strict";var r=n(399),l=n.n(r);n.d(t,"default",(function(){return l.a}))},461:function(e,t,n){var r=n(15)(!1);r.push([e.i,'.main_Fqkhs{display:flex;flex-direction:column;align-items:center;grid-gap:4rem;gap:4rem;width:100%;margin-bottom:5rem}@media screen and (min-width:800px){.main_Fqkhs{flex-direction:row-reverse;justify-content:flex-start;margin-bottom:2rem;grid-gap:0;gap:0}}.top_Rs0Kv{width:90%;max-width:25rem}@media screen and (min-width:800px){.top_Rs0Kv{width:50%;max-width:32rem;margin-right:5%}}.card_keDWJ{display:flex;flex-direction:column;justify-content:space-between;align-items:center;width:90%;grid-gap:2rem;gap:2rem;min-width:12rem;max-width:25rem;min-height:14.75rem}@media screen and (min-width:800px){.card_keDWJ{min-width:25rem;max-width:unset;flex-glow:1}}.news_3-ohb{max-width:40rem;width:100%;height:100%;min-height:10rem}@media screen and (min-width:800px){.news_3-ohb{width:70%}}.access_j3n2X{display:flex;flex-direction:column;grid-gap:.5rem;gap:.5rem;max-width:40rem;padding:.75rem;width:100%;height:100%;min-height:10rem;background-color:#fff}@media screen and (min-width:800px){.access_j3n2X{width:70%}}.access_header_n9h5b{font-family:futura-pt,sans-serif;color:#eb5a00;font-size:2.25rem;font-weight:700;margin-left:.75rem}.access_header_n9h5b:after{content:"";display:block;margin-left:-.5rem;margin-top:-.23em;width:10rem;height:.5px;background-color:#e4762d}.map_i6aWx{display:block;width:90%;height:12rem;align-self:center;margin:.5rem}.address_w0NrD{font-size:.75rem;text-align:center}.address_w0NrD span{word-break:keep-all}.more_jIl2G{align-self:flex-end;margin-right:.75rem}',""]),r.locals={main:"main_Fqkhs",top:"top_Rs0Kv",card:"card_keDWJ",news:"news_3-ohb",access:"access_j3n2X",access_header:"access_header_n9h5b",map:"map_i6aWx",address:"address_w0NrD",more:"more_jIl2G"},e.exports=r},487:function(e,t,n){"use strict";n.r(t);var r=n(0),meta=n(342),l=r.a.extend({name:"Index",layout:"top",mixins:[meta.a],data:function(){return{meta:{title:"トップページ"}}}}),o=n(460),c=n(9);var component=Object(c.a)(l,(function(){var e=this,t=e.$createElement,n=e._self._c||t;return n("div",{class:e.$style.main},[n("img",{class:e.$style.top,attrs:{src:"top.svg"}}),e._v(" "),n("div",{class:e.$style.card},[n("News",{class:e.$style.news,attrs:{limited:!0}}),e._v(" "),n("div",{class:e.$style.access},[n("h2",{class:e.$style.access_header},[e._v("Access")]),e._v(" "),n("GoogleMap",{class:e.$style.map}),e._v(" "),n("p",{class:e.$style.address},[n("span",[e._v("〒658-0082")]),e._v(" "),n("span",[e._v("兵庫県神戸市東灘区魚崎北町8丁目5番1号")])]),e._v(" "),n("More",{class:e.$style.more,attrs:{link:"/access"}})],1)],1)])}),[],!1,(function(e){this.$style=o.default.locals||o.default}),null,null);t.default=component.exports;installComponents(component,{News:n(403).default,GoogleMap:n(400).default,More:n(374).default})}}]);
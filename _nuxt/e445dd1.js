(window.webpackJsonp=window.webpackJsonp||[]).push([[23,10],{368:function(t,e,n){var content=n(373);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("3f97c2fe",content,!0,{sourceMap:!1})},371:function(t,e,n){"use strict";n(70),n(35),n(45);e.a={data:function(){return{meta:{title:null,description:"2022年５月２～３日に開催される。第76回灘校文化祭「Turn it Over🔥」の公式ウェブサイトです。"}}},head:function(){var t="第76回灘校文化祭「Turn it Over🔥」",title=this.meta.title?"".concat(this.meta.title," - ").concat(t):t;return{title:title,meta:[{hid:"description",name:"description",content:this.meta.description},{hid:"og:title",name:"og:title",content:title},{hid:"og:description",name:"og:description",content:this.meta.description},{hid:"og:url",name:"og:url",content:"".concat("https://fest.nada-sc.jp/2022").concat(this.$route.path)}]}}}},372:function(t,e,n){"use strict";var o=n(368),r=n.n(o);n.d(e,"default",(function(){return r.a}))},373:function(t,e,n){var o=n(15)(!1);o.push([t.i,'.main_TJpD6{background-color:#fff;padding:.75rem 0 .75rem 2.5rem}.main_TJpD6 h1{position:relative;color:#eb5a00;font-weight:700;font-size:1.4rem}.main_TJpD6 h1:before{content:"";position:absolute;display:block;top:0;left:-1.25rem;height:100%;width:4px;background-color:#eb5a00}',""]),o.locals={main:"main_TJpD6"},t.exports=o},374:function(t,e,n){"use strict";n.r(e);var o=n(0).a.extend({name:"Title"}),r=n(372),l=n(9);var component=Object(l.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.main},[n("h1",[t._t("default")],2)])}),[],!1,(function(t){this.$style=r.default.locals||r.default}),null,null);e.default=component.exports},428:function(t,e,n){var content=n(462);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(16).default)("ccdc96b6",content,!0,{sourceMap:!1})},458:function(t,e,n){var o=n(3),r=n(459),l=Math.abs;o({target:"Number",stat:!0},{isSafeInteger:function(t){return r(t)&&l(t)<=9007199254740991}})},459:function(t,e,n){var o=n(20),r=Math.floor;t.exports=Number.isInteger||function(t){return!o(t)&&isFinite(t)&&r(t)===t}},460:function(t,e){var n=1;function o(t){var e=[];for(var i in t)e.push(encodeURIComponent(i)+"="+encodeURIComponent(t[i]));return e.join("&")}t.exports=function(t){return new Promise((function(e,r){var script=document.createElement("script"),l=t.url;if(t.params){var c=o(t.params);c&&(l+=(l.indexOf("?")>=0?"&":"?")+c)}function d(){script&&(script.onload=script.onreadystatechange=script.onerror=null,script.parentNode&&script.parentNode.removeChild(script),script=null)}script.async=!0;var m="axiosJsonpCallback"+n++,f=window[m],h=!1;window[m]=function(t){(window[m]=f,h)||e({data:t,status:200})};var v={_:(new Date).getTime()};v[t.callbackParamName||"callback"]=m,l+=(l.indexOf("?")>=0?"&":"?")+o(v),script.onload=script.onreadystatechange=function(){script.readyState&&!/loaded|complete/.test(script.readyState)||d()},script.onerror=function(){d(),r(new Error("Network Error"))},t.cancelToken&&t.cancelToken.promise.then((function(t){script&&(h=!0,r(t))})),script.src=l,document.head.appendChild(script)}))}},461:function(t,e,n){"use strict";var o=n(428),r=n.n(o);n.d(e,"default",(function(){return r.a}))},462:function(t,e,n){var o=n(15)(!1);o.push([t.i,".main_9tTU4{width:90%;max-width:25rem;margin:1rem auto 3rem}@media screen and (min-width:800px){.main_9tTU4{width:80%;max-width:unset}}.title_EIcKm{width:100%;margin-bottom:2rem}.soon_oW9RE{width:80%;max-width:20rem;margin-left:auto;margin-right:auto;padding:4rem 1rem;font-size:2rem;color:#eb5a00;font-family:futura-pt,sans-serif}.form_jS0A5,.soon_oW9RE{text-align:center;background-color:#fff}.form_jS0A5{margin-bottom:min(50px,5vh)}.button_8MUQw{outline-style:ridge;outline-width:2px;outline-color:#646464}.idk_Rv71h{width:min(400px,100%);outline:2px ridge #646464}.button_8MUQw,.idk_Rv71h{font-size:x-large;margin-bottom:10px}.title2_6JqTh{width:100%;font-size:1.4rem;font-weight:700;background-color:#fff;color:#eb5a00;padding:.75rem;margin-bottom:1rem}.pdf_87s2N{padding:10px;display:flex;grid-gap:10px;gap:10px;justify-content:center}@media screen and (max-width:400px){.pdf_87s2N{flex-direction:column}}@media screen and (min-width:401px){.pdf_87s2N{flex-direction:row}}.pdf_87s2N a{text-decoration:underline}",""]),o.locals={main:"main_9tTU4",title:"title_EIcKm",soon:"soon_oW9RE",form:"form_jS0A5",button:"button_8MUQw",idk:"idk_Rv71h",title2:"title2_6JqTh",pdf:"pdf_87s2N"},t.exports=o},516:function(t,e,n){"use strict";n.r(e);n(458),n(253);var o=n(0),meta=n(371),r=n(460),l=o.a.extend({name:"TicketPage",mixins:[meta.a],head:function(){return{title:"整理券配布",description:"第76回灘校文化祭「Turn it Over🔥」整理券配布・抽選ページ。"}},data:function(){return{num:"",result:"検索結果がここに表示されます"}},methods:{check:function(t){var e=this;this.result="問い合わせ中…しばらくお待ちください。",Number.isSafeInteger(this.num)?this.$axios({url:"/api",params:{number:this.num},adapter:r}).then((function(t){t.data.index>=0?e.result="整理券"+e.num+"番は当選しています。整理券に書かれた時刻通りにイベント会場にお越しください。":e.result="整理券"+e.num+"番は当選していないか、まだ抽選が行われていません。"})):this.result="整数のみを入力してください"}}}),c=n(461),d=n(9);var component=Object(d.a)(l,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{class:t.$style.main},[n("Title",{class:t.$style.title},[t._v("整理券")]),t._v(" "),n("div",{class:t.$style.form},[n("h1",{class:t.$style.title2},[t._v("抽選確認システム")]),t._v(" "),n("p",[t._v("整理券に番号がある場合、下のフォームに整理券番号を入力し当選確認が出来ます。")]),t._v(" "),n("p",[t._v("整理券に番号がない場合は、先着順のイベントですので開催時刻通りにイベント会場にお越しください。")]),t._v(" "),n("input",{directives:[{name:"model",rawName:"v-model.number",value:t.num,expression:"num",modifiers:{number:!0}}],class:t.$style.idk,attrs:{type:"number",placeholder:"整理券番号を入力"},domProps:{value:t.num},on:{input:function(e){e.target.composing||(t.num=t._n(e.target.value))},blur:function(e){return t.$forceUpdate()}}}),t._v(" "),n("button",{class:t.$style.button,on:{click:t.check}},[t._v("確認")]),t._v(" "),n("p",[t._v(t._s(t.result))]),t._v(" "),n("p",[t._v("整理券についての情報は下のPDFを御覧ください。")]),t._v(" "),n("div",{class:t.$style.pdf},[n("a",{attrs:{href:"/pdf/整理券配布スケジュール.pdf"}},[t._v("整理券配布スケジュール")]),t._v(" "),n("a",{attrs:{href:"/pdf/整理券諸注意.pdf"}},[t._v("整理券諸注意")])])])],1)}),[],!1,(function(t){this.$style=c.default.locals||c.default}),null,null);e.default=component.exports;installComponents(component,{Title:n(374).default})}}]);
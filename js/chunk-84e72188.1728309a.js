(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-84e72188"],{"057f":function(t,e,r){var a=r("fc6a"),n=r("241c").f,s={}.toString,i="object"==typeof window&&window&&Object.getOwnPropertyNames?Object.getOwnPropertyNames(window):[],o=function(t){try{return n(t)}catch(e){return i.slice()}};t.exports.f=function(t){return i&&"[object Window]"==s.call(t)?o(t):n(a(t))}},"06b5":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"text_bar"},[r("section",{staticClass:"text_bar_title"},[t._t("default"),r("span",{staticClass:"text"},[t._v(t._s(t.textBarTitle))])],2),t._m(0)])},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"next_icon"},[r("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])}],s={name:"TextBar",props:{textBarTitle:{type:String,required:!0}}},i=s,o=(r("5b89"),r("2877")),c=Object(o["a"])(i,a,n,!1,null,"06461cf5",null);e["a"]=c.exports},"159b":function(t,e,r){var a=r("da84"),n=r("fdbc"),s=r("17c2"),i=r("9112");for(var o in n){var c=a[o],f=c&&c.prototype;if(f&&f.forEach!==s)try{i(f,"forEach",s)}catch(u){f.forEach=s}}},"17c2":function(t,e,r){"use strict";var a=r("b727").forEach,n=r("b301");t.exports=n("forEach")?function(t){return a(this,t,arguments.length>1?arguments[1]:void 0)}:[].forEach},2017:function(t,e,r){"use strict";var a=r("8b01"),n=r.n(a);n.a},"3b42":function(t,e,r){"use strict";r.r(e);var a=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"profile"},[a("header",{on:{click:t.nextPage}},[a("img",{staticClass:"avatar",attrs:{src:r("4d41"),alt:""}}),a("section",{staticClass:"user_info"},[t.userInfo.username?a("section",{staticClass:"user"},[a("h3",{staticClass:"login"},[t._v(t._s(t.userInfo.username))]),a("p",{staticClass:"login_tip",domProps:{textContent:t._s(t.userInfo.mobile?t.userInfo.mobile:"未绑定手机号")}},[t._v(t._s(t.userInfo.mobile))])]):a("section",{staticClass:"user"},[a("h3",{staticClass:"login"},[t._v("登录/注册")]),t._m(0)]),t._m(1)])]),t._m(2),a("section",{staticClass:"user_setting"},[a("section",{staticClass:"userinfo_item"},[a("TextBar",{attrs:{textBarTitle:"我的地址"}})],1),a("section",{staticClass:"userinfo_item"},[a("TextBar",{attrs:{textBarTitle:"金币商城"}}),a("TextBar",{attrs:{textBarTitle:"分享拿20元现金"}})],1),a("section",{staticClass:"userinfo_item"},[a("TextBar",{attrs:{textBarTitle:"我的客服"}}),a("TextBar",{attrs:{textBarTitle:"下载饿了么APP"}}),a("TextBar",{attrs:{textBarTitle:"规则中心"}})],1)]),t._m(3),a("Footer")],1)},n=[function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("p",{staticClass:"login_tip"},[r("i",{staticClass:"fa fa-mobile",attrs:{"aria-hidden":"true"}}),t._v("登录享受更多特权 ")])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("span",{staticClass:"next_icon"},[r("i",{staticClass:"fa fa-angle-right",attrs:{"aria-hidden":"true"}})])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("section",{staticClass:"info_data"},[r("section",{staticClass:"info_data_item"},[r("p",{staticClass:"data"},[r("span",{staticClass:"num"},[t._v("33")]),r("span",{staticClass:"unit"},[t._v("元")])]),r("p",{staticClass:"info_title"},[t._v("余额")])]),r("section",{staticClass:"info_data_item"},[r("p",{staticClass:"data"},[r("span",{staticClass:"num"},[t._v("2")]),r("span",{staticClass:"unit"},[t._v("个")])]),r("p",{staticClass:"info_title"},[t._v("优惠")])]),r("section",{staticClass:"info_data_item"},[r("p",{staticClass:"data"},[r("span",{staticClass:"num"},[t._v("20")]),r("span",{staticClass:"unit"},[t._v("分")])]),r("p",{staticClass:"info_title"},[t._v("积分")])])])},function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("div",{staticClass:"user_secrte"},[r("a",{attrs:{href:"https://h5.ele.me/service/agreement/#HEAEDER_SHOW=1&initTitle=隐私政策&key=ruleQue50"}},[t._v("隐私政策")])])}],s=r("4c03"),i=r("06b5"),o={name:"Profile",computed:{userInfo:function(){return this.$store.state.userInfo}},methods:{nextPage:function(){this.userInfo.username?this.$router.push({path:"/userInfo"}):this.$router.push({path:"/login"})}},components:{Footer:s["a"],TextBar:i["a"]}},c=o,f=(r("53fb"),r("2877")),u=Object(f["a"])(c,a,n,!1,null,"1cc18526",null);e["default"]=u.exports},4160:function(t,e,r){"use strict";var a=r("23e7"),n=r("17c2");a({target:"Array",proto:!0,forced:[].forEach!=n},{forEach:n})},"4c03":function(t,e,r){"use strict";var a=function(){var t=this,e=t.$createElement,r=t._self._c||e;return r("footer",[r("router-link",{staticClass:"tab_item",attrs:{tag:"div",to:{path:"/home",query:{geohash:t.geohash}}}},[r("i",{staticClass:"fa fa-home",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"tab_name"},[t._v("首页")])]),r("router-link",{staticClass:"tab_item",attrs:{tag:"div",to:"/search"}},[r("i",{staticClass:"fa fa-compass",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"tab_name"},[t._v("搜索")])]),r("router-link",{staticClass:"tab_item",attrs:{tag:"div",to:"/order"}},[r("i",{staticClass:"fa fa-shopping-cart",attrs:{"aria-hidden":"true"}}),t._v(" "),r("span",{staticClass:"tab_name"},[t._v("订单")])]),r("router-link",{staticClass:"tab_item",attrs:{tag:"div",to:"/profile"}},[r("i",{staticClass:"fa fa-user",attrs:{"aria-hidden":"true"}}),r("span",{staticClass:"tab_name"},[t._v("我的")])])],1)},n=[],s=(r("a4d3"),r("4de4"),r("4160"),r("e439"),r("dbb4"),r("b64b"),r("159b"),r("2fa7")),i=r("2f62");function o(t,e){var r=Object.keys(t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);e&&(a=a.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),r.push.apply(r,a)}return r}function c(t){for(var e=1;e<arguments.length;e++){var r=null!=arguments[e]?arguments[e]:{};e%2?o(r,!0).forEach((function(e){Object(s["a"])(t,e,r[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(r)):o(r).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(r,e))}))}return t}var f={name:"Footer",computed:c({},Object(i["b"])(["geohash"]))},u=f,l=(r("2017"),r("2877")),p=Object(l["a"])(u,a,n,!1,null,"28b8dfe2",null);e["a"]=p.exports},"4d41":function(t,e){t.exports="data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAHgAAAB4CAMAAAAOusbgAAAAM1BMVEXE5/XI6fbT7fjW7/jl9fvw+f3////a8Pnt+PzL6vb7/v7i8/rP7Pf4/P7e8vn0+/3p9vvI4mwRAAACI0lEQVR4Ae3YBxbkIAgGYDCKgqbc/7LbS5hJexvMNr7Xp/0j9oBzzjnnnHPOuX8Qhq/wycwhJvopxQGfSM2F3pXcOZuj0DaJDN1gpSMRoY9B6Jhk6AALnSsI1tpIV0jrX+ZHyp3putwzN9XA8BmHmvolN1LGCWENp5GUADZYVGyGd1lFC4OJmVYqbKu0MoOFem22TPrv3cf004ywa6A1htvStdw2Go+vcC03C5EuzV3pSv/iQsqCllN4gj1tJmWC+342JV1dx8cGBuR8nEbznVHNkQW28UxKBeV+pRtsCrrMEsDGeLIIVlISgg08HqiYSIlgJRxWuoku8wA2VCU3dwVlZugQnE4PnYt+t05wR6FvysmeIPltrC8mC3U97t65bRQq9whO23uC6gRp9sFMa9NOJ8z2wWF3T1BvDfdXzLLb4oL7a1m9P53mq50PwSR42ltA2v6eEC2uFGH38Ja39wRVDUGDTSJudH+ETSg3G6wuESO8anxSpww3xF+aGvX+yWvQZ72rohQ0O+wFeI6q9QiPYr0cPGih31Rs1pfjBy2/KxnlYjJPtTYwNFy7CE5CnyzGxf4pMWzhQkTWyTjTWkV4hVW6PNhjIWUZdF+okgiDnSakSakhMHAItQhpAXom7xN+8nG1OnTawkRXJARzlc5V6KElOpYadJJH2jdm6CjPtG3O0FmL780eY4MncI5J6CtJMTM8iwODc84555xzzv0PPgKMKi2olgNo0QAAAABJRU5ErkJggg=="},"53fb":function(t,e,r){"use strict";var a=r("5783"),n=r.n(a);n.a},5783:function(t,e,r){},"5b89":function(t,e,r){"use strict";var a=r("f7dd"),n=r.n(a);n.a},"746f":function(t,e,r){var a=r("428f"),n=r("5135"),s=r("c032"),i=r("9bf2").f;t.exports=function(t){var e=a.Symbol||(a.Symbol={});n(e,t)||i(e,t,{value:s.f(t)})}},8418:function(t,e,r){"use strict";var a=r("c04e"),n=r("9bf2"),s=r("5c6c");t.exports=function(t,e,r){var i=a(e);i in t?n.f(t,i,s(0,r)):t[i]=r}},"8b01":function(t,e,r){},a4d3:function(t,e,r){"use strict";var a=r("23e7"),n=r("da84"),s=r("c430"),i=r("83ab"),o=r("4930"),c=r("d039"),f=r("5135"),u=r("e8b5"),l=r("861d"),p=r("825a"),b=r("7b0b"),h=r("fc6a"),d=r("c04e"),v=r("5c6c"),m=r("7c73"),g=r("df75"),C=r("241c"),_=r("057f"),y=r("7418"),O=r("06cf"),w=r("9bf2"),S=r("d1e7"),x=r("9112"),P=r("6eeb"),A=r("5692"),T=r("f772"),E=r("d012"),j=r("90e3"),L=r("b622"),B=r("c032"),k=r("746f"),I=r("d44e"),M=r("69f3"),G=r("b727").forEach,V=T("hidden"),D="Symbol",J="prototype",N=L("toPrimitive"),R=M.set,F=M.getterFor(D),H=Object[J],Q=n.Symbol,W=n.JSON,z=W&&W.stringify,Y=O.f,q=w.f,X=_.f,$=S.f,U=A("symbols"),K=A("op-symbols"),Z=A("string-to-symbol-registry"),tt=A("symbol-to-string-registry"),et=A("wks"),rt=n.QObject,at=!rt||!rt[J]||!rt[J].findChild,nt=i&&c((function(){return 7!=m(q({},"a",{get:function(){return q(this,"a",{value:7}).a}})).a}))?function(t,e,r){var a=Y(H,e);a&&delete H[e],q(t,e,r),a&&t!==H&&q(H,e,a)}:q,st=function(t,e){var r=U[t]=m(Q[J]);return R(r,{type:D,tag:t,description:e}),i||(r.description=e),r},it=o&&"symbol"==typeof Q.iterator?function(t){return"symbol"==typeof t}:function(t){return Object(t)instanceof Q},ot=function(t,e,r){t===H&&ot(K,e,r),p(t);var a=d(e,!0);return p(r),f(U,a)?(r.enumerable?(f(t,V)&&t[V][a]&&(t[V][a]=!1),r=m(r,{enumerable:v(0,!1)})):(f(t,V)||q(t,V,v(1,{})),t[V][a]=!0),nt(t,a,r)):q(t,a,r)},ct=function(t,e){p(t);var r=h(e),a=g(r).concat(bt(r));return G(a,(function(e){i&&!ut.call(r,e)||ot(t,e,r[e])})),t},ft=function(t,e){return void 0===e?m(t):ct(m(t),e)},ut=function(t){var e=d(t,!0),r=$.call(this,e);return!(this===H&&f(U,e)&&!f(K,e))&&(!(r||!f(this,e)||!f(U,e)||f(this,V)&&this[V][e])||r)},lt=function(t,e){var r=h(t),a=d(e,!0);if(r!==H||!f(U,a)||f(K,a)){var n=Y(r,a);return!n||!f(U,a)||f(r,V)&&r[V][a]||(n.enumerable=!0),n}},pt=function(t){var e=X(h(t)),r=[];return G(e,(function(t){f(U,t)||f(E,t)||r.push(t)})),r},bt=function(t){var e=t===H,r=X(e?K:h(t)),a=[];return G(r,(function(t){!f(U,t)||e&&!f(H,t)||a.push(U[t])})),a};o||(Q=function(){if(this instanceof Q)throw TypeError("Symbol is not a constructor");var t=arguments.length&&void 0!==arguments[0]?String(arguments[0]):void 0,e=j(t),r=function(t){this===H&&r.call(K,t),f(this,V)&&f(this[V],e)&&(this[V][e]=!1),nt(this,e,v(1,t))};return i&&at&&nt(H,e,{configurable:!0,set:r}),st(e,t)},P(Q[J],"toString",(function(){return F(this).tag})),S.f=ut,w.f=ot,O.f=lt,C.f=_.f=pt,y.f=bt,i&&(q(Q[J],"description",{configurable:!0,get:function(){return F(this).description}}),s||P(H,"propertyIsEnumerable",ut,{unsafe:!0})),B.f=function(t){return st(L(t),t)}),a({global:!0,wrap:!0,forced:!o,sham:!o},{Symbol:Q}),G(g(et),(function(t){k(t)})),a({target:D,stat:!0,forced:!o},{for:function(t){var e=String(t);if(f(Z,e))return Z[e];var r=Q(e);return Z[e]=r,tt[r]=e,r},keyFor:function(t){if(!it(t))throw TypeError(t+" is not a symbol");if(f(tt,t))return tt[t]},useSetter:function(){at=!0},useSimple:function(){at=!1}}),a({target:"Object",stat:!0,forced:!o,sham:!i},{create:ft,defineProperty:ot,defineProperties:ct,getOwnPropertyDescriptor:lt}),a({target:"Object",stat:!0,forced:!o},{getOwnPropertyNames:pt,getOwnPropertySymbols:bt}),a({target:"Object",stat:!0,forced:c((function(){y.f(1)}))},{getOwnPropertySymbols:function(t){return y.f(b(t))}}),W&&a({target:"JSON",stat:!0,forced:!o||c((function(){var t=Q();return"[null]"!=z([t])||"{}"!=z({a:t})||"{}"!=z(Object(t))}))},{stringify:function(t){var e,r,a=[t],n=1;while(arguments.length>n)a.push(arguments[n++]);if(r=e=a[1],(l(e)||void 0!==t)&&!it(t))return u(e)||(e=function(t,e){if("function"==typeof r&&(e=r.call(this,t,e)),!it(e))return e}),a[1]=e,z.apply(W,a)}}),Q[J][N]||x(Q[J],N,Q[J].valueOf),I(Q,D),E[V]=!0},b301:function(t,e,r){"use strict";var a=r("d039");t.exports=function(t,e){var r=[][t];return!r||!a((function(){r.call(null,e||function(){throw 1},1)}))}},b64b:function(t,e,r){var a=r("23e7"),n=r("7b0b"),s=r("df75"),i=r("d039"),o=i((function(){s(1)}));a({target:"Object",stat:!0,forced:o},{keys:function(t){return s(n(t))}})},c032:function(t,e,r){e.f=r("b622")},dbb4:function(t,e,r){var a=r("23e7"),n=r("83ab"),s=r("56ef"),i=r("fc6a"),o=r("06cf"),c=r("8418");a({target:"Object",stat:!0,sham:!n},{getOwnPropertyDescriptors:function(t){var e,r,a=i(t),n=o.f,f=s(a),u={},l=0;while(f.length>l)r=n(a,e=f[l++]),void 0!==r&&c(u,e,r);return u}})},e439:function(t,e,r){var a=r("23e7"),n=r("d039"),s=r("fc6a"),i=r("06cf").f,o=r("83ab"),c=n((function(){i(1)})),f=!o||c;a({target:"Object",stat:!0,forced:f,sham:!o},{getOwnPropertyDescriptor:function(t,e){return i(s(t),e)}})},f7dd:function(t,e,r){},fdbc:function(t,e){t.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}}}]);
//# sourceMappingURL=chunk-84e72188.1728309a.js.map
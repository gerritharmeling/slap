(function(t){function e(e){for(var a,c,o=e[0],s=e[1],l=e[2],d=0,m=[];d<o.length;d++)c=o[d],Object.prototype.hasOwnProperty.call(i,c)&&i[c]&&m.push(i[c][0]),i[c]=0;for(a in s)Object.prototype.hasOwnProperty.call(s,a)&&(t[a]=s[a]);u&&u(e);while(m.length)m.shift()();return r.push.apply(r,l||[]),n()}function n(){for(var t,e=0;e<r.length;e++){for(var n=r[e],a=!0,o=1;o<n.length;o++){var s=n[o];0!==i[s]&&(a=!1)}a&&(r.splice(e--,1),t=c(c.s=n[0]))}return t}var a={},i={app:0},r=[];function c(e){if(a[e])return a[e].exports;var n=a[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,c),n.l=!0,n.exports}c.m=t,c.c=a,c.d=function(t,e,n){c.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},c.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},c.t=function(t,e){if(1&e&&(t=c(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(c.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var a in t)c.d(n,a,function(e){return t[e]}.bind(null,a));return n},c.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return c.d(e,"a",e),e},c.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},c.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],s=o.push.bind(o);o.push=e,o=o.slice();for(var l=0;l<o.length;l++)e(o[l]);var u=s;r.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"034f":function(t,e,n){"use strict";n("85ec")},"193c":function(t,e,n){"use strict";n("21e1")},"21e1":function(t,e,n){},"56d7":function(t,e,n){"use strict";n.r(e);n("e260"),n("e6cf"),n("cca6"),n("a79d");var a=n("2b0e"),i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"app"}},[t._m(0),n("HelloWorld",{attrs:{msg:""}})],1)},r=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",staticStyle:{"margin-bottom":"70px"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-12"},[n("h1",[n("strong",[t._v(" Wähle deinen Cocktail ")])])])])])}],c=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"container",staticStyle:{"margin-bottom":"70px"}},[n("div",{staticClass:"row",staticStyle:{display:"none"},attrs:{id:"loader"}},[n("div",{staticClass:"offset-md-3 col-md-6"},[n("b-card",{staticClass:"mb-2",attrs:{title:"Currently mixing","img-src":"load.gif","img-top":""},on:{click:function(e){return t.mix("")}}})],1)]),n("div",{attrs:{id:"contentcontainer"}},[n("div",{staticStyle:{"margin-bottom":"50px"}},[n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3"},[n("b-card",{staticClass:"mb-2",attrs:{title:"Acapulco","img-src":"cocktail_acapulco-1.png","img-alt":"Image"},on:{click:function(e){return t.mix("awdawd")}}})],1),n("div",{staticClass:"col-md-3"},[n("b-card",{staticClass:"mb-2",attrs:{id:"1",title:"Atomic Cat","img-src":"cocktail_atomic_cat-1.png","img-alt":"Image","img-top":""},on:{click:function(e){return t.mix("awdawd")}}})],1),n("div",{staticClass:"col-md-3"},[n("b-card",{staticClass:"mb-2",attrs:{title:"Cuba Libre","img-src":"cocktail_cuba_libre-1.png","img-alt":"Image","img-top":""}})],1),n("div",{staticClass:"col-md-3"},[n("b-card",{staticClass:"mb-2",attrs:{title:"Mojito","img-src":"cocktail_mojito-1.png","img-alt":"Image","img-top":""}})],1)])]),n("div",{staticClass:"row"},[n("div",{staticClass:"col-md-3"},[n("b-card",{staticClass:"mb-2",attrs:{title:"Pina Colada","img-src":"cocktail_pina_colada-1.png","img-alt":"Image","img-top":""}})],1),n("div",{staticClass:"col-md-3"},[n("b-card",{staticClass:"mb-2",attrs:{title:"Poker Face","img-src":"cocktail_poker_face-1.png","img-alt":"Image","img-top":""}})],1),n("div",{staticClass:"col-md-3"},[n("b-card",{staticClass:"mb-2",attrs:{title:"Tequila Sunrise","img-src":"cocktail_tequila_sunrise-1.png","img-alt":"Image","img-top":""}})],1),n("div",{staticClass:"col-md-3"},[n("b-card",{staticClass:"mb-2",attrs:{title:"Virgin Mojito","img-src":"cocktail_virgin_mojito-1.png","img-alt":"Image","img-top":""}})],1)])])])},o=[],s=n("1da1"),l=(n("96cf"),n("d3b7"),{methods:{mix:function(t){var e=this;return Object(s["a"])(regeneratorRuntime.mark((function n(){var a;return regeneratorRuntime.wrap((function(n){while(1)switch(n.prev=n.next){case 0:console.log(t),a={method:"GET",headers:{"Content-Type":"application/json"}},fetch("getraenk.php?id=1",a).then(function(){var t=Object(s["a"])(regeneratorRuntime.mark((function t(n){var a;return regeneratorRuntime.wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,n;case 2:a=t.sent,e.countLoader(15),console.log("ok",a);case 5:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}());case 3:case"end":return n.stop()}}),n)})))()},countLoader:function(t){document.getElementById("contentcontainer").style.display="none",document.getElementById("loader").style.display="block",setTimeout((function(){document.getElementById("contentcontainer").style.display="block",document.getElementById("loader").style.display="none"}),1e3*t)}}}),u=l,d=(n("193c"),n("2877")),m=Object(d["a"])(u,c,o,!1,null,null,null),p=m.exports,f={name:"App",components:{HelloWorld:p},methods:{myMethod:function(){this.$http.post("/api/items",{name:"my item"})}}},g=f,b=(n("034f"),Object(d["a"])(g,i,r,!1,null,null,null)),v=b.exports,y=n("5f5b"),h=n("b1e0");n("f9e3"),n("2dd8");a["default"].use(y["a"]),a["default"].use(h["a"]),a["default"].config.productionTip=!1,new a["default"]({render:function(t){return t(v)}}).$mount("#app")},"85ec":function(t,e,n){}});
//# sourceMappingURL=app.6a56d267.js.map
(function(e){function t(t){for(var a,n,o=t[0],l=t[1],i=t[2],d=0,j=[];d<o.length;d++)n=o[d],Object.prototype.hasOwnProperty.call(r,n)&&r[n]&&j.push(r[n][0]),r[n]=0;for(a in l)Object.prototype.hasOwnProperty.call(l,a)&&(e[a]=l[a]);f&&f(t);while(j.length)j.shift()();return c.push.apply(c,i||[]),s()}function s(){for(var e,t=0;t<c.length;t++){for(var s=c[t],a=!0,o=1;o<s.length;o++){var l=s[o];0!==r[l]&&(a=!1)}a&&(c.splice(t--,1),e=n(n.s=s[0]))}return e}var a={},r={app:0},c=[];function n(t){if(a[t])return a[t].exports;var s=a[t]={i:t,l:!1,exports:{}};return e[t].call(s.exports,s,s.exports,n),s.l=!0,s.exports}n.m=e,n.c=a,n.d=function(e,t,s){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:s})},n.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var s=Object.create(null);if(n.r(s),Object.defineProperty(s,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var a in e)n.d(s,a,function(t){return e[t]}.bind(null,a));return s},n.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="/";var o=window["webpackJsonp"]=window["webpackJsonp"]||[],l=o.push.bind(o);o.push=t,o=o.slice();for(var i=0;i<o.length;i++)t(o[i]);var f=l;c.push([0,"chunk-vendors"]),s()})({0:function(e,t,s){e.exports=s("56d7")},"034f":function(e,t,s){"use strict";var a=s("85ec"),r=s.n(a);r.a},"248c":function(e,t,s){e.exports=s.p+"img/scg-logo.e495037a.png"},4678:function(e,t,s){var a={"./af":"2bfb","./af.js":"2bfb","./ar":"8e73","./ar-dz":"a356","./ar-dz.js":"a356","./ar-kw":"423e","./ar-kw.js":"423e","./ar-ly":"1cfd","./ar-ly.js":"1cfd","./ar-ma":"0a84","./ar-ma.js":"0a84","./ar-sa":"8230","./ar-sa.js":"8230","./ar-tn":"6d83","./ar-tn.js":"6d83","./ar.js":"8e73","./az":"485c","./az.js":"485c","./be":"1fc1","./be.js":"1fc1","./bg":"84aa","./bg.js":"84aa","./bm":"a7fa","./bm.js":"a7fa","./bn":"9043","./bn.js":"9043","./bo":"d26a","./bo.js":"d26a","./br":"6887","./br.js":"6887","./bs":"2554","./bs.js":"2554","./ca":"d716","./ca.js":"d716","./cs":"3c0d","./cs.js":"3c0d","./cv":"03ec","./cv.js":"03ec","./cy":"9797","./cy.js":"9797","./da":"0f14","./da.js":"0f14","./de":"b469","./de-at":"b3eb","./de-at.js":"b3eb","./de-ch":"bb71","./de-ch.js":"bb71","./de.js":"b469","./dv":"598a","./dv.js":"598a","./el":"8d47","./el.js":"8d47","./en-au":"0e6b","./en-au.js":"0e6b","./en-ca":"3886","./en-ca.js":"3886","./en-gb":"39a6","./en-gb.js":"39a6","./en-ie":"e1d3","./en-ie.js":"e1d3","./en-il":"7333","./en-il.js":"7333","./en-in":"ec2e","./en-in.js":"ec2e","./en-nz":"6f50","./en-nz.js":"6f50","./en-sg":"b7e9","./en-sg.js":"b7e9","./eo":"65db","./eo.js":"65db","./es":"898b","./es-do":"0a3c","./es-do.js":"0a3c","./es-us":"55c9","./es-us.js":"55c9","./es.js":"898b","./et":"ec18","./et.js":"ec18","./eu":"0ff2","./eu.js":"0ff2","./fa":"8df4","./fa.js":"8df4","./fi":"81e9","./fi.js":"81e9","./fil":"d69a","./fil.js":"d69a","./fo":"0721","./fo.js":"0721","./fr":"9f26","./fr-ca":"d9f8","./fr-ca.js":"d9f8","./fr-ch":"0e49","./fr-ch.js":"0e49","./fr.js":"9f26","./fy":"7118","./fy.js":"7118","./ga":"5120","./ga.js":"5120","./gd":"f6b4","./gd.js":"f6b4","./gl":"8840","./gl.js":"8840","./gom-deva":"aaf2","./gom-deva.js":"aaf2","./gom-latn":"0caa","./gom-latn.js":"0caa","./gu":"e0c5","./gu.js":"e0c5","./he":"c7aa","./he.js":"c7aa","./hi":"dc4d","./hi.js":"dc4d","./hr":"4ba9","./hr.js":"4ba9","./hu":"5b14","./hu.js":"5b14","./hy-am":"d6b6","./hy-am.js":"d6b6","./id":"5038","./id.js":"5038","./is":"0558","./is.js":"0558","./it":"6e98","./it-ch":"6f12","./it-ch.js":"6f12","./it.js":"6e98","./ja":"079e","./ja.js":"079e","./jv":"b540","./jv.js":"b540","./ka":"201b","./ka.js":"201b","./kk":"6d79","./kk.js":"6d79","./km":"e81d","./km.js":"e81d","./kn":"3e92","./kn.js":"3e92","./ko":"22f8","./ko.js":"22f8","./ku":"2421","./ku.js":"2421","./ky":"9609","./ky.js":"9609","./lb":"440c","./lb.js":"440c","./lo":"b29d","./lo.js":"b29d","./lt":"26f9","./lt.js":"26f9","./lv":"b97c","./lv.js":"b97c","./me":"293c","./me.js":"293c","./mi":"688b","./mi.js":"688b","./mk":"6909","./mk.js":"6909","./ml":"02fb","./ml.js":"02fb","./mn":"958b","./mn.js":"958b","./mr":"39bd","./mr.js":"39bd","./ms":"ebe4","./ms-my":"6403","./ms-my.js":"6403","./ms.js":"ebe4","./mt":"1b45","./mt.js":"1b45","./my":"8689","./my.js":"8689","./nb":"6ce3","./nb.js":"6ce3","./ne":"3a39","./ne.js":"3a39","./nl":"facd","./nl-be":"db29","./nl-be.js":"db29","./nl.js":"facd","./nn":"b84c","./nn.js":"b84c","./oc-lnc":"167b","./oc-lnc.js":"167b","./pa-in":"f3ff","./pa-in.js":"f3ff","./pl":"8d57","./pl.js":"8d57","./pt":"f260","./pt-br":"d2d4","./pt-br.js":"d2d4","./pt.js":"f260","./ro":"972c","./ro.js":"972c","./ru":"957c","./ru.js":"957c","./sd":"6784","./sd.js":"6784","./se":"ffff","./se.js":"ffff","./si":"eda5","./si.js":"eda5","./sk":"7be6","./sk.js":"7be6","./sl":"8155","./sl.js":"8155","./sq":"c8f3","./sq.js":"c8f3","./sr":"cf1e","./sr-cyrl":"13e9","./sr-cyrl.js":"13e9","./sr.js":"cf1e","./ss":"52bd","./ss.js":"52bd","./sv":"5fbd","./sv.js":"5fbd","./sw":"74dc","./sw.js":"74dc","./ta":"3de5","./ta.js":"3de5","./te":"5cbb","./te.js":"5cbb","./tet":"576c","./tet.js":"576c","./tg":"3b1b","./tg.js":"3b1b","./th":"10e8","./th.js":"10e8","./tk":"5aff","./tk.js":"5aff","./tl-ph":"0f38","./tl-ph.js":"0f38","./tlh":"cf75","./tlh.js":"cf75","./tr":"0e81","./tr.js":"0e81","./tzl":"cf51","./tzl.js":"cf51","./tzm":"c109","./tzm-latn":"b53d","./tzm-latn.js":"b53d","./tzm.js":"c109","./ug-cn":"6117","./ug-cn.js":"6117","./uk":"ada2","./uk.js":"ada2","./ur":"5294","./ur.js":"5294","./uz":"2e8c","./uz-latn":"010e","./uz-latn.js":"010e","./uz.js":"2e8c","./vi":"2921","./vi.js":"2921","./x-pseudo":"fd7e","./x-pseudo.js":"fd7e","./yo":"7f33","./yo.js":"7f33","./zh-cn":"5c3a","./zh-cn.js":"5c3a","./zh-hk":"49ab","./zh-hk.js":"49ab","./zh-mo":"3a6c","./zh-mo.js":"3a6c","./zh-tw":"90ea","./zh-tw.js":"90ea"};function r(e){var t=c(e);return s(t)}function c(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}r.keys=function(){return Object.keys(a)},r.resolve=c,e.exports=r,r.id="4678"},"56d7":function(e,t,s){"use strict";s.r(t);s("e260"),s("e6cf"),s("cca6"),s("a79d");var a=s("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-app",[a("v-app-bar",{attrs:{app:"",color:"red",dark:""}},[a("v-container",[a("v-row",{attrs:{align:"center"}},[a("v-col",[a("div",{staticClass:"text-h3"},[e._v(e._s(e.currentTime))])]),a("v-col",{staticStyle:{"text-align":"right"}},[a("div",{staticClass:"text-h3"},[e._v("IS Department,Amtec")])])],1)],1)],1),a("v-main",[a("v-container",{attrs:{"fill-height":""}},[a("v-row",{attrs:{align:"center",justify:"center"}},[a("v-col",{attrs:{cols:"7"}},[a("div",{staticStyle:{height:"100%"}},[a("div",{staticClass:"detail-box-shadow"},[a("v-row",{staticClass:"ma-5"},[a("v-col",{attrs:{cols:"3"}},[a("div",{staticClass:"text-h3"},[e._v(" Name ")])]),a("v-col",{attrs:{cols:"9"}},[null!=e.objWorker?a("div",{staticClass:"text-h3"},[e._v(" "+e._s(e.objWorker.name)+" ")]):e._e()]),a("v-col",{attrs:{cols:"3"}},[a("div",{staticClass:"text-h3"},[e._v(" ID ")])]),a("v-col",{attrs:{cols:"9"}},[null!=e.objWorker?a("div",{staticClass:"text-h3"},[e._v(" "+e._s(e.objWorker.id)+" ")]):e._e()]),a("v-col",{attrs:{cols:"3"}},[a("div",{staticClass:"text-h3"},[e._v(" Company ")])]),a("v-col",{attrs:{cols:"9"}},[null!=e.objWorker?a("div",{staticClass:"text-h3"},[e._v(" "+e._s(e.objWorker.companyName)+" ")]):e._e()])],1)],1),a("br"),a("div",{staticClass:"text-h3 ma-5"},[e._v("Competency")]),a("div",{staticClass:"detail-box-shadow",staticStyle:{height:"230px"}},[null!=e.objWorker?a("div",{staticStyle:{color:"black"}},[a("div",{staticClass:"text-h3 ma-5",staticStyle:{"padding-left":"24px"}},[1==e.objWorker.programming?a("v-icon",{attrs:{left:"","x-large":"",color:"green"}},[e._v("mdi-check")]):a("v-icon",{attrs:{left:"","x-large":"",color:"red"}},[e._v("mdi-close")]),e._v(" Programming ")],1),a("div",{staticClass:"text-h3 ma-5",staticStyle:{"padding-left":"24px"}},[1==e.objWorker.electronic?a("v-icon",{attrs:{left:"","x-large":"",color:"green"}},[e._v("mdi-check")]):a("v-icon",{attrs:{left:"","x-large":"",color:"red"}},[e._v("mdi-close")]),e._v(" Electronic ")],1),a("div",{staticClass:"text-h3 ma-5",staticStyle:{"padding-left":"24px"}},[1==e.objWorker.mechanic?a("v-icon",{attrs:{left:"","x-large":"",color:"green"}},[e._v("mdi-check")]):a("v-icon",{attrs:{left:"","x-large":"",color:"red"}},[e._v("mdi-close")]),e._v(" Mechanic ")],1)]):e._e()])])]),a("v-col",{attrs:{cols:"5"}},[null!=e.objWorker?a("div",[a("img",{staticStyle:{width:"75%",height:"100%",margin:"0 auto",display:"block"},attrs:{src:"http://localhost:3000/"+e.objWorker.img,alt:""}})]):e._e()])],1)],1)],1),a("v-footer",{attrs:{app:"",color:"white"}},[a("v-spacer"),a("img",{staticStyle:{height:"75px"},attrs:{src:s("248c"),alt:""}})],1)],1)},c=[],n=(s("d3b7"),s("c1df")),o=s.n(n),l={name:"App",data:function(){return{currentTime:o()().format("YYYY-MM-DD HH:mm:ss"),objWorker:null,interval:null,origin:location.origin}},mounted:function(){var e=this;this.interval=setInterval((function(){e.currentTime=o()().format("YYYY-MM-DD HH:mm:ss"),fetch("http://localhost:3000/api/gate/walk-in").then((function(e){return e.json()})).then((function(t){0==t.length?e.objWorker=null:e.objWorker=t[0]}))}),1e3)},beforeDestroy:function(){clearInterval(this.interval)}},i=l,f=(s("034f"),s("2877")),d=s("6544"),j=s.n(d),b=s("7496"),u=s("40dc"),v=s("62ad"),h=s("a523"),m=s("553a"),p=s("132d"),g=s("f6c4"),k=s("0fd9"),y=s("2fa4"),x=Object(f["a"])(i,r,c,!1,null,null,null),_=x.exports;j()(x,{VApp:b["a"],VAppBar:u["a"],VCol:v["a"],VContainer:h["a"],VFooter:m["a"],VIcon:p["a"],VMain:g["a"],VRow:k["a"],VSpacer:y["a"]});var w=s("f309");a["a"].use(w["a"]);var z=new w["a"]({});s("5363");a["a"].config.productionTip=!1,new a["a"]({vuetify:z,icons:{iconfont:"mdi"},render:function(e){return e(_)}}).$mount("#app")},"85ec":function(e,t,s){}});
//# sourceMappingURL=app.80daee10.js.map
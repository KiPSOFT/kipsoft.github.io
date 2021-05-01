(function(t){function e(e){for(var r,i,l=e[0],s=e[1],c=e[2],d=0,p=[];d<l.length;d++)i=l[d],Object.prototype.hasOwnProperty.call(a,i)&&a[i]&&p.push(a[i][0]),a[i]=0;for(r in s)Object.prototype.hasOwnProperty.call(s,r)&&(t[r]=s[r]);u&&u(e);while(p.length)p.shift()();return o.push.apply(o,c||[]),n()}function n(){for(var t,e=0;e<o.length;e++){for(var n=o[e],r=!0,l=1;l<n.length;l++){var s=n[l];0!==a[s]&&(r=!1)}r&&(o.splice(e--,1),t=i(i.s=n[0]))}return t}var r={},a={app:0},o=[];function i(e){if(r[e])return r[e].exports;var n=r[e]={i:e,l:!1,exports:{}};return t[e].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.m=t,i.c=r,i.d=function(t,e,n){i.o(t,e)||Object.defineProperty(t,e,{enumerable:!0,get:n})},i.r=function(t){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(t,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(t,"__esModule",{value:!0})},i.t=function(t,e){if(1&e&&(t=i(t)),8&e)return t;if(4&e&&"object"===typeof t&&t&&t.__esModule)return t;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:t}),2&e&&"string"!=typeof t)for(var r in t)i.d(n,r,function(e){return t[e]}.bind(null,r));return n},i.n=function(t){var e=t&&t.__esModule?function(){return t["default"]}:function(){return t};return i.d(e,"a",e),e},i.o=function(t,e){return Object.prototype.hasOwnProperty.call(t,e)},i.p="/";var l=window["webpackJsonp"]=window["webpackJsonp"]||[],s=l.push.bind(l);l.push=e,l=l.slice();for(var c=0;c<l.length;c++)e(l[c]);var u=s;o.push([0,"chunk-vendors"]),n()})({0:function(t,e,n){t.exports=n("56d7")},"56d7":function(t,e,n){"use strict";n.r(e);var r=n("2b0e"),a=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{attrs:{id:"App"}},[n("button",{attrs:{id:"toggleDarkMode"}},[n("svg",{attrs:{xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",version:"1.1",width:"24",height:"24","xml:space":"preserve"}},[n("g",{staticStyle:{stroke:"none","stroke-width":"1","stroke-dasharray":"none","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10",fill:"none","fill-rule":"nonzero",opacity:"1"},attrs:{id:"darkmodeicon",transform:"scale(0.25,0.25)"}},[n("path",{staticStyle:{stroke:"none","stroke-width":"1","stroke-dasharray":"none","stroke-linecap":"butt","stroke-linejoin":"miter","stroke-miterlimit":"10",fill:"rgb(0,0,0)","fill-rule":"nonzero",opacity:"1"},attrs:{d:"M 87.823 60.7 c -0.463 -0.423 -1.142 -0.506 -1.695 -0.214 c -15.834 8.398 -35.266 2.812 -44.232 -12.718 c -8.966 -15.53 -4.09 -35.149 11.101 -44.665 c 0.531 -0.332 0.796 -0.963 0.661 -1.574 c -0.134 -0.612 -0.638 -1.074 -1.259 -1.153 c -9.843 -1.265 -19.59 0.692 -28.193 5.66 C 13.8 12.041 6.356 21.743 3.246 33.35 S 1.732 57.08 7.741 67.487 c 6.008 10.407 15.709 17.851 27.316 20.961 C 38.933 89.486 42.866 90 46.774 90 c 7.795 0 15.489 -2.044 22.42 -6.046 c 8.601 -4.966 15.171 -12.43 18.997 -21.586 C 88.433 61.79 88.285 61.123 87.823 60.7 z",transform:" matrix(1 0 0 1 0 0) ","stroke-linecap":"round"}})])])]),n("p",{staticClass:"container bigtext"},[t._v("Günlük Covid-19 Yapılan Aşı Sayısı")]),n("counter"),t._m(0)],1)},o=[function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"container smalltext"},[n("a",{attrs:{href:"https://covid19asi.saglik.gov.tr/"}},[t._v("https://covid19asi.saglik.gov.tr/")]),t._v(" sayfasındaki verilerden alınmaktadır. Geliştiren Serkan KOCAMAN")])}],i=function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("p",{staticClass:"container"},[t._v(t._s(t.date))]),n("p",{staticClass:"container"},[t._v(t._s(t.vaccineCount))]),n("p",{staticClass:"container smalltext"},[t._v("Son güncellenme zamanı: "+t._s(t.lastUpdate))])])},l=[];function s(t){return t.toString().replace(/\B(?<!\.\d*)(?=(\d{3})+(?!\d))/g,".")}var c={async data(){try{const t=await fetch("data.json"),e=await t.json(),n=(new Date).toLocaleDateString("tr-TR",{year:"numeric",month:"2-digit",day:"2-digit"}),r={date:n,vaccineCount:s(e[n].lastTotal-e[n].firstTotal),lastUpdate:e[n].lastUpdate?e[n].lastUpdate:"23:59:59"};return r}catch(t){console.log(t)}}},u=c,d=n("2877"),p=Object(d["a"])(u,i,l,!1,null,null,null),f=p.exports,m={name:"App",components:{Counter:f}},v=m,h=Object(d["a"])(v,a,o,!1,null,null,null),g=h.exports;document.addEventListener("DOMContentLoaded",(function(){new r["a"]({render:t=>t(g)}).$mount("#app")})),window.onload=()=>{const t=window.matchMedia&&window.matchMedia("(prefers-color-scheme: dark)").matches,e=document.querySelector("body"),n=document.querySelector("#toggleDarkMode");e.className=t?"dark":"light",n.addEventListener("click",()=>{e.className="dark"===e.className?"light":"dark"})}}});
//# sourceMappingURL=app.39f1433f.js.map
!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=0)}([function(e,t,n){"use strict";n.r(t);n(1);function r(e,t){for(var n=0;n<t.length;n++){var r=t[n];r.enumerable=r.enumerable||!1,r.configurable=!0,"value"in r&&(r.writable=!0),Object.defineProperty(e,r.key,r)}}var o=function(){function e(){var t=this;!function(e,t){if(!(e instanceof t))throw new TypeError("Cannot call a class as a function")}(this,e),this.originalText=document.getElementById("text"),this.newText=document.getElementById("new-text");var n=this.getSavedText();n&&(this.originalText.value=n,this.textChange()),this.originalText.addEventListener("input",(function(){return t.textChange()})),this.originalText.addEventListener("scroll",(function(){return t.textScroll()})),this.originalText.focus()}var t,n,o;return t=e,(n=[{key:"getSavedText",value:function(){var e=this.getCookie("lyrics_text");return!("undefined"===(e=decodeURIComponent(e))||!e.length)&&e}},{key:"getCookie",value:function(e){var t=("; "+document.cookie).split("; "+e+"=");if(2==t.length)return t.pop().split(";").shift()}},{key:"textChange",value:function(){var e=this;document.cookie="lyrics_text="+encodeURIComponent(this.originalText.value);var t="",n=this.originalText.value.split("\n"),r=1,o=new Array,i=new Array;o.push({syllable:new Array,avarangeSyllable:0}),n.forEach((function(t,a){var l=e.countLineSyllabes(t);0!==l&&o[o.length-1].syllable.push(l),i.push({syllable:l,text:t,verseCount:r,versesNumber:o.length-1}),0===l||a===n.length-1?(r=1,o[o.length-1].avarangeSyllable=e.getAvarangeSyllable(o[o.length-1].syllable),o.push({syllable:new Array,avarangeSyllable:0})):r++})),i.forEach((function(e){var n=o[e.versesNumber],r=3,i="",a="",l=e.verseCount+".";switch((e.syllable<n.avarangeSyllable-1||e.syllable>n.avarangeSyllable+1)&&r--,e.syllable%2!=0&&r--,r){case 1:i="red";break;case 2:i="yellow";break;case 3:i="green"}0===e.syllable?l="":a='<span class="syllable '.concat(i,'">').concat(e.syllable,"</span>");var s='\n         <div class="line">\n            <div class="column-data">\n               <span class="verseNumber">'.concat(l,"</span>\n               ").concat(a,"\n            </div>\n         </div>\n         ");t+=s})),this.newText.innerHTML=t}},{key:"getAvarangeSyllable",value:function(e){if(e.length){var t=e.reduce((function(e,t){return t+e}));return Math.round(t/e.length)}return 0}},{key:"countLineSyllabes",value:function(e){var t=0,n=e.match(/\S+/g);if(null!=n)for(var r=0;r<n.length;r++){var o=n[r].match(/[aeiouyąęó]/gi);null!=o&&(t+=o.length);var i=n[r].toLowerCase().split(/[i]/g);if(null!=i&&i.length>1)for(var a=1;a<i.length;a++){var l=i[a][0];null!=l&&null!=l.match(/[aeiouąęó]/gi)&&t--}}return t}},{key:"textScroll",value:function(){this.newText.scroll({left:this.originalText.scrollLeft,top:this.originalText.scrollTop})}}])&&r(t.prototype,n),o&&r(t,o),e}();window.textformater=new o},function(e,t,n){var r=n(2);"string"==typeof r&&(r=[[e.i,r,""]]);var o={hmr:!0,transform:void 0,insertInto:void 0};n(4)(r,o);r.locals&&(e.exports=r.locals)},function(e,t,n){(t=n(3)(!1)).push([e.i,"@import url(https://fonts.googleapis.com/css?family=Quicksand&display=swap);"]),t.push([e.i,"*,*:before,*:after{box-sizing:border-box}body{background-color:#0a0614;color:#fff;font-family:'Quicksand', sans-serif;font-size:18px;line-height:1.5em;margin:0;height:100vh}.row{height:100vh;position:relative}.row .col{height:100vh;width:100%;position:absolute;top:0;left:0}.row .col:nth-child(1){z-index:0}.row .col:nth-child(2){z-index:1;pointer-events:none}#text{background-color:transparent;color:#fff;font-family:'Quicksand', sans-serif;width:100%;height:calc(100vh);border:none;padding:15px;padding-left:90px;font-size:18px;line-height:1.5em;outline:none;white-space:nowrap;resize:none;font-display:block}#text::-webkit-scrollbar{width:15px;height:15px}#text::-webkit-scrollbar-thumb{border-radius:7.5px;background-color:gray;border:5px solid #0a0614}#text::-webkit-scrollbar-corner{background-color:#0a0614;border-radius:15px}#new-text{background-color:transparent;color:#fff;height:calc(100vh);padding:15px;padding-left:0;overflow:hidden;padding-bottom:100px}#new-text .line{height:1.5em;display:flex}#new-text .line .column-data{width:85px;display:flex;height:1.5em;background-color:#0a0614;padding-left:20px;padding-right:10px;justify-content:space-between}#new-text .line .syllable{border:1px solid gray;width:1.5em;text-align:center;border-radius:0.75em}#new-text .line .syllable.red{color:red}#new-text .line .syllable.yellow{color:yellow}#new-text .line .syllable.green{color:#2fff40}.copyrights{max-width:calc(100% - 30px);position:fixed;font-size:14px;bottom:10px;right:20px;padding:5px;z-index:2;color:rgba(255,255,255,0.3);pointer-events:none;background-color:rgba(10,6,20,0.9)}\n",""]),e.exports=t},function(e,t,n){"use strict";e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var n=function(e,t){var n=e[1]||"",r=e[3];if(!r)return n;if(t&&"function"==typeof btoa){var o=(a=r,l=btoa(unescape(encodeURIComponent(JSON.stringify(a)))),s="sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(l),"/*# ".concat(s," */")),i=r.sources.map((function(e){return"/*# sourceURL=".concat(r.sourceRoot||"").concat(e," */")}));return[n].concat(i).concat([o]).join("\n")}var a,l,s;return[n].join("\n")}(t,e);return t[2]?"@media ".concat(t[2]," {").concat(n,"}"):n})).join("")},t.i=function(e,n,r){"string"==typeof e&&(e=[[null,e,""]]);var o={};if(r)for(var i=0;i<this.length;i++){var a=this[i][0];null!=a&&(o[a]=!0)}for(var l=0;l<e.length;l++){var s=[].concat(e[l]);r&&o[s[0]]||(n&&(s[2]?s[2]="".concat(n," and ").concat(s[2]):s[2]=n),t.push(s))}},t}},function(e,t,n){var r,o,i={},a=(r=function(){return window&&document&&document.all&&!window.atob},function(){return void 0===o&&(o=r.apply(this,arguments)),o}),l=function(e,t){return t?t.querySelector(e):document.querySelector(e)},s=function(e){var t={};return function(e,n){if("function"==typeof e)return e();if(void 0===t[e]){var r=l.call(this,e,n);if(window.HTMLIFrameElement&&r instanceof window.HTMLIFrameElement)try{r=r.contentDocument.head}catch(e){r=null}t[e]=r}return t[e]}}(),c=null,u=0,f=[],d=n(5);function p(e,t){for(var n=0;n<e.length;n++){var r=e[n],o=i[r.id];if(o){o.refs++;for(var a=0;a<o.parts.length;a++)o.parts[a](r.parts[a]);for(;a<r.parts.length;a++)o.parts.push(x(r.parts[a],t))}else{var l=[];for(a=0;a<r.parts.length;a++)l.push(x(r.parts[a],t));i[r.id]={id:r.id,refs:1,parts:l}}}}function h(e,t){for(var n=[],r={},o=0;o<e.length;o++){var i=e[o],a=t.base?i[0]+t.base:i[0],l={css:i[1],media:i[2],sourceMap:i[3]};r[a]?r[a].parts.push(l):n.push(r[a]={id:a,parts:[l]})}return n}function v(e,t){var n=s(e.insertInto);if(!n)throw new Error("Couldn't find a style target. This probably means that the value for the 'insertInto' parameter is invalid.");var r=f[f.length-1];if("top"===e.insertAt)r?r.nextSibling?n.insertBefore(t,r.nextSibling):n.appendChild(t):n.insertBefore(t,n.firstChild),f.push(t);else if("bottom"===e.insertAt)n.appendChild(t);else{if("object"!=typeof e.insertAt||!e.insertAt.before)throw new Error("[Style Loader]\n\n Invalid value for parameter 'insertAt' ('options.insertAt') found.\n Must be 'top', 'bottom', or Object.\n (https://github.com/webpack-contrib/style-loader#insertat)\n");var o=s(e.insertAt.before,n);n.insertBefore(t,o)}}function b(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e);var t=f.indexOf(e);t>=0&&f.splice(t,1)}function g(e){var t=document.createElement("style");if(void 0===e.attrs.type&&(e.attrs.type="text/css"),void 0===e.attrs.nonce){var r=function(){0;return n.nc}();r&&(e.attrs.nonce=r)}return y(t,e.attrs),v(e,t),t}function y(e,t){Object.keys(t).forEach((function(n){e.setAttribute(n,t[n])}))}function x(e,t){var n,r,o,i;if(t.transform&&e.css){if(!(i="function"==typeof t.transform?t.transform(e.css):t.transform.default(e.css)))return function(){};e.css=i}if(t.singleton){var a=u++;n=c||(c=g(t)),r=k.bind(null,n,a,!1),o=k.bind(null,n,a,!0)}else e.sourceMap&&"function"==typeof URL&&"function"==typeof URL.createObjectURL&&"function"==typeof URL.revokeObjectURL&&"function"==typeof Blob&&"function"==typeof btoa?(n=function(e){var t=document.createElement("link");return void 0===e.attrs.type&&(e.attrs.type="text/css"),e.attrs.rel="stylesheet",y(t,e.attrs),v(e,t),t}(t),r=T.bind(null,n,t),o=function(){b(n),n.href&&URL.revokeObjectURL(n.href)}):(n=g(t),r=S.bind(null,n),o=function(){b(n)});return r(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap)return;r(e=t)}else o()}}e.exports=function(e,t){if("undefined"!=typeof DEBUG&&DEBUG&&"object"!=typeof document)throw new Error("The style-loader cannot be used in a non-browser environment");(t=t||{}).attrs="object"==typeof t.attrs?t.attrs:{},t.singleton||"boolean"==typeof t.singleton||(t.singleton=a()),t.insertInto||(t.insertInto="head"),t.insertAt||(t.insertAt="bottom");var n=h(e,t);return p(n,t),function(e){for(var r=[],o=0;o<n.length;o++){var a=n[o];(l=i[a.id]).refs--,r.push(l)}e&&p(h(e,t),t);for(o=0;o<r.length;o++){var l;if(0===(l=r[o]).refs){for(var s=0;s<l.parts.length;s++)l.parts[s]();delete i[l.id]}}}};var m,w=(m=[],function(e,t){return m[e]=t,m.filter(Boolean).join("\n")});function k(e,t,n,r){var o=n?"":r.css;if(e.styleSheet)e.styleSheet.cssText=w(t,o);else{var i=document.createTextNode(o),a=e.childNodes;a[t]&&e.removeChild(a[t]),a.length?e.insertBefore(i,a[t]):e.appendChild(i)}}function S(e,t){var n=t.css,r=t.media;if(r&&e.setAttribute("media",r),e.styleSheet)e.styleSheet.cssText=n;else{for(;e.firstChild;)e.removeChild(e.firstChild);e.appendChild(document.createTextNode(n))}}function T(e,t,n){var r=n.css,o=n.sourceMap,i=void 0===t.convertToAbsoluteUrls&&o;(t.convertToAbsoluteUrls||i)&&(r=d(r)),o&&(r+="\n/*# sourceMappingURL=data:application/json;base64,"+btoa(unescape(encodeURIComponent(JSON.stringify(o))))+" */");var a=new Blob([r],{type:"text/css"}),l=e.href;e.href=URL.createObjectURL(a),l&&URL.revokeObjectURL(l)}},function(e,t){e.exports=function(e){var t="undefined"!=typeof window&&window.location;if(!t)throw new Error("fixUrls requires window.location");if(!e||"string"!=typeof e)return e;var n=t.protocol+"//"+t.host,r=n+t.pathname.replace(/\/[^\/]*$/,"/");return e.replace(/url\s*\(((?:[^)(]|\((?:[^)(]+|\([^)(]*\))*\))*)\)/gi,(function(e,t){var o,i=t.trim().replace(/^"(.*)"$/,(function(e,t){return t})).replace(/^'(.*)'$/,(function(e,t){return t}));return/^(#|data:|http:\/\/|https:\/\/|file:\/\/\/|\s*$)/i.test(i)?e:(o=0===i.indexOf("//")?i:0===i.indexOf("/")?n+i:r+i.replace(/^\.\//,""),"url("+JSON.stringify(o)+")")}))}}]);
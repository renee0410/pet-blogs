!function(e){function t(t){for(var o,i,c=t[0],a=t[1],u=t[2],l=0,f=[];l<c.length;l++)i=c[l],Object.prototype.hasOwnProperty.call(r,i)&&r[i]&&f.push(r[i][0]),r[i]=0;for(o in a)Object.prototype.hasOwnProperty.call(a,o)&&(e[o]=a[o]);for(d&&d(t);f.length;)f.shift()();return s.push.apply(s,u||[]),n()}function n(){for(var e,t=0;t<s.length;t++){for(var n=s[t],o=!0,c=1;c<n.length;c++){var a=n[c];0!==r[a]&&(o=!1)}o&&(s.splice(t--,1),e=i(i.s=n[0]))}return e}var o={},r={"sandbox-startup":0},s=[];function i(t){if(o[t])return o[t].exports;var n=o[t]={i:t,l:!1,exports:{}};return e[t].call(n.exports,n,n.exports,i),n.l=!0,n.exports}i.e=function(e){var t=[],n=r[e];if(0!==n)if(n)t.push(n[2]);else{var o=new Promise((function(t,o){n=r[e]=[t,o]}));t.push(n[2]=o);var s,c=document.createElement("script");c.charset="utf-8",c.timeout=120,i.nc&&c.setAttribute("nonce",i.nc),c.src=function(e){return i.p+"static/js/"+({}[e]||e)+"."+{4:"bd7c5d8c5",5:"0f1fe178d"}[e]+".chunk.js"}(e);var a=new Error;s=function(t){c.onerror=c.onload=null,clearTimeout(u);var n=r[e];if(0!==n){if(n){var o=t&&("load"===t.type?"missing":t.type),s=t&&t.target&&t.target.src;a.message="Loading chunk "+e+" failed.\n("+o+": "+s+")",a.name="ChunkLoadError",a.type=o,a.request=s,n[1](a)}r[e]=void 0}};var u=setTimeout((function(){s({type:"timeout",target:c})}),12e4);c.onerror=c.onload=s,document.head.appendChild(c)}return Promise.all(t)},i.m=e,i.c=o,i.d=function(e,t,n){i.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},i.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},i.t=function(e,t){if(1&t&&(e=i(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(i.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)i.d(n,o,function(t){return e[t]}.bind(null,o));return n},i.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return i.d(t,"a",t),t},i.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},i.p="https://codesandbox.io/",i.oe=function(e){throw console.error(e),e};var c=this.csbJsonP=this.csbJsonP||[],a=c.push.bind(c);c.push=t,c=c.slice();for(var u=0;u<c.length;u++)t(c[u]);var d=a;s.push(["./src/sandbox/startup.ts","vendors~app~embed~sandbox-startup","default~app~embed~sandbox~sandbox-startup"]),n()}({"../../node_modules/@babel/runtime/helpers/asyncToGenerator.js":function(e,t){function n(e,t,n,o,r,s,i){try{var c=e[s](i),a=c.value}catch(e){return void n(e)}c.done?t(a):Promise.resolve(a).then(o,r)}e.exports=function(e){return function(){var t=this,o=arguments;return new Promise((function(r,s){var i=e.apply(t,o);function c(e){n(i,r,s,c,a,"next",e)}function a(e){n(i,r,s,c,a,"throw",e)}c(void 0)}))}},e.exports.__esModule=!0,e.exports.default=e.exports},"../../node_modules/@babel/runtime/helpers/interopRequireDefault.js":function(e,t){e.exports=function(e){return e&&e.__esModule?e:{default:e}},e.exports.__esModule=!0,e.exports.default=e.exports},"../../node_modules/os-browserify/browser.js":function(e,t){t.endianness=function(){return"LE"},t.hostname=function(){return"undefined"!=typeof location?location.hostname:""},t.loadavg=function(){return[]},t.uptime=function(){return 0},t.freemem=function(){return Number.MAX_VALUE},t.totalmem=function(){return Number.MAX_VALUE},t.cpus=function(){return[]},t.type=function(){return"Browser"},t.release=function(){return"undefined"!=typeof navigator?navigator.appVersion:""},t.networkInterfaces=t.getNetworkInterfaces=function(){return{}},t.arch=function(){return"javascript"},t.platform=function(){return"browser"},t.tmpdir=t.tmpDir=function(){return"/tmp"},t.EOL="\n",t.homedir=function(){return"/"}},"../../node_modules/process/browser.js":function(e,t){var n,o,r=e.exports={};function s(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function c(e){if(n===setTimeout)return setTimeout(e,0);if((n===s||!n)&&setTimeout)return n=setTimeout,setTimeout(e,0);try{return n(e,0)}catch(t){try{return n.call(null,e,0)}catch(t){return n.call(this,e,0)}}}!function(){try{n="function"==typeof setTimeout?setTimeout:s}catch(e){n=s}try{o="function"==typeof clearTimeout?clearTimeout:i}catch(e){o=i}}();var a,u=[],d=!1,l=-1;function f(){d&&a&&(d=!1,a.length?u=a.concat(u):l=-1,u.length&&p())}function p(){if(!d){var e=c(f);d=!0;for(var t=u.length;t;){for(a=u,u=[];++l<t;)a&&a[l].run();l=-1,t=u.length}a=null,d=!1,function(e){if(o===clearTimeout)return clearTimeout(e);if((o===i||!o)&&clearTimeout)return o=clearTimeout,clearTimeout(e);try{o(e)}catch(t){try{return o.call(null,e)}catch(t){return o.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function m(){}r.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var n=1;n<arguments.length;n++)t[n-1]=arguments[n];u.push(new h(e,t)),1!==u.length||d||c(p)},h.prototype.run=function(){this.fun.apply(null,this.array)},r.title="browser",r.browser=!0,r.env={},r.argv=[],r.version="",r.versions={},r.on=m,r.addListener=m,r.once=m,r.off=m,r.removeListener=m,r.removeAllListeners=m,r.emit=m,r.prependListener=m,r.prependOnceListener=m,r.listeners=function(e){return[]},r.binding=function(e){throw new Error("process.binding is not supported")},r.cwd=function(){return"/"},r.chdir=function(e){throw new Error("process.chdir is not supported")},r.umask=function(){return 0}},"../../node_modules/worker-loader/dist/cjs.js?publicPath=/&name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.ts":function(e,t){e.exports=function(){return new Worker("/babel-transpiler.367d9324.worker.js")}},"../sandbox-hooks/console/index.js":function(e,t,n){var o,r,s;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[t,n("../../node_modules/@babel/runtime/helpers/asyncToGenerator.js"),n("../codesandbox-api/dist/codesandbox.es5.js"),n("../../node_modules/console-feed/lib/Hook/index.js"),n("../../node_modules/console-feed/lib/Transform/index.js")],void 0===(s="function"==typeof(o=function(e,t,o,r,s){"use strict";var i=n("../../node_modules/@babel/runtime/helpers/interopRequireDefault.js");Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return(0,r.default)(window.console,function(){var e=(0,t.default)((function*(e){yield o.iframeHandshake,(0,o.dispatch)({type:"console",log:e})}));return function(t){return e.apply(this,arguments)}}()),(0,o.listen)((function(e,t){if(t&&"evaluate"===e.type){let t=null,n=!1;try{if(e.command&&"{"===e.command.charAt(0))try{const t="(".concat(e.command,")");new Function(t),e.command=t}catch(e){}t=(0,eval)(e.command)}catch(e){t=e,n=!0}try{(0,o.dispatch)({type:"eval-result",error:n,result:(0,s.Encode)(t)})}catch(e){console.error(e)}}}))},t=i(t),r=i(r),window.top!==window.self&&function(){const e=document.createElement("script");e.src="https://codesandbox.io/p/chrome-devtool/protocol/index.js",e.onload=()=>{const e=window.chobitsu;e&&(window.addEventListener("message",t=>{const n=t.data,o=n.type,r=n.data;"FROM_DEVTOOL"===o&&e.sendRawMessage(r)}),e.setOnMessage(e=>{e.includes('"id":"tmp')||window.parent.postMessage({type:"TO_DEVTOOL",data:e},"*")}),e.sendRawMessage('{"id":5,"method":"Runtime.enable","params":{}}'))},(document.head||document.documentElement).prepend(e)}()})?o.apply(t,r):o)||(e.exports=s)},"../sandbox-hooks/preview-secret.js":function(e,t,n){var o,r,s;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[t,n("../common/lib/utils/url-generator.js")],void 0===(s="function"==typeof(o=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.setPreviewSecret=e.requestPreviewSecretFromApp=e.listenForPreviewSecret=e.getPreviewSecret=void 0;const n=()=>document.cookie.replace(new RegExp("(?:(?:^|.*;\\s*)".concat("csb_sandbox_secret","\\s*\\=\\s*([^;]*).*$)|^.*$")),"$1");e.getPreviewSecret=n;const o=e=>{if(null===e)return;const t=n();(t&&!e||e&&!t||t!==e)&&(e?(document.cookie="".concat("csb_sandbox_secret","=").concat(e,";samesite=none;secure;"),setTimeout(()=>{location.reload()},1e3)):document.cookie="".concat("csb_sandbox_secret","=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"))};function r(){const e={width:1020,height:618},t=e.width,n=e.height,o=function(e){let t=e.width,n=e.height;const o=window.screenLeft?window.screenLeft:window.screenX,r=window.screenTop?window.screenTop:window.screenY,s=o+window.innerWidth/2-t/2;return{top:r+window.innerHeight/2-n/2,left:s}}({width:t,height:n}),r=o.top,s=o.left;return"width=".concat(t,",height=").concat(n,",top=").concat(r,",left=").concat(s)}e.setPreviewSecret=o,e.listenForPreviewSecret=()=>{const e=e=>{if(e.data&&"preview-secret"===e.data.$type){const t=e.data.previewSecret;o(t)}};return window.addEventListener("message",e),()=>{window.removeEventListener("message",e)}},e.requestPreviewSecretFromApp=e=>{const n=(0,t.protocolAndHost)(),s=window.open(n+"/auth/sandbox/"+e,name,"scrollbars=no,toolbar=no,location=no,titlebar=no,directories=no,status=no,menubar=no, ".concat(r()));setInterval(()=>{s.postMessage({$type:"request-preview-secret"},n)},500);const i=e=>{e.data&&"preview-secret"===e.data.$type&&(o(e.data.previewSecret),window.removeEventListener("message",i),s.close())};window.addEventListener("message",i)}})?o.apply(t,r):o)||(e.exports=s)},"../sandbox-hooks/screenshot.js":function(e,t,n){var o,r,s;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[t,n("../codesandbox-api/dist/codesandbox.es5.js")],void 0===(s="function"==typeof(o=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){let e;(0,t.listen)(o=>{"take-screenshot"===o.type?Promise.all([n.e(5),n.e(4)]).then(n.t.bind(null,"../sandbox-hooks/html2canvas-lib/index.js",7)).then(e=>{(0,e.default)(document.documentElement,{useCORS:e=>!(o.data.isPrivateSandbox||!e),proxy:"https://h2c-proxy.csb.dev/",logging:!1,allowTaint:!1}).then(e=>{const n=document.createElement("canvas"),o=document.documentElement.scrollLeft,r=document.documentElement.scrollTop;n.width=e.width-o,n.height=e.height-r,n.getContext("2d").drawImage(e,o,r,n.width,n.height,0,0,n.width,n.height),(0,t.dispatch)({type:"screenshot-generated",screenshot:n.toDataURL()})})}):"show-screenshot-cursor"===o.type?(e=document.documentElement.style.cursor,document.documentElement.style.cursor='url(\'data:image/svg+xml;utf8,<svg width="16" height="16" viewBox="0 0 16 16" fill="none" xmlns="http://www.w3.org/2000/svg"><path fill-rule="evenodd" clip-rule="evenodd" d="M0 8C0 3.58172 3.58172 0 8 0C12.4183 0 16 3.58172 16 8C16 12.4183 12.4183 16 8 16H0V8Z" fill="%23FF3B30"/></svg>\'), auto'):"hide-screenshot-cursor"===o.type&&(document.documentElement.style.cursor=e)}),window.addEventListener("keydown",e=>{"s"===e.key&&e.shiftKey&&(e.metaKey||e.ctrlKey)&&(e.preventDefault(),(0,t.dispatch)({type:"screenshot-requested-from-preview"}))})}})?o.apply(t,r):o)||(e.exports=s)},"../sandbox-hooks/url-listeners.js":function(e,t,n){var o,r,s;"undefined"!=typeof globalThis?globalThis:"undefined"!=typeof self&&self,r=[t,n("../codesandbox-api/dist/codesandbox.es5.js")],void 0===(s="function"==typeof(o=function(e,t){"use strict";Object.defineProperty(e,"__esModule",{value:!0}),e.default=function(){return Object.assign(window.history,{go(e){const t=r+e;if(t>=0&&t<=o.length-1){r=t;const e=o[r],c=e.url,a=e.state,u=document.location.href;n.replaceState.call(window.history,a,"",c);const d=document.location.href;i(d),window.dispatchEvent(new PopStateEvent("popstate",{state:a})),-1!==d.indexOf("#")&&(s=!0,window.dispatchEvent(new HashChangeEvent("hashchange",{oldURL:u,newURL:d})))}},back(){window.history.go(-1)},forward(){window.history.go(1)},pushState(e,t,o){n.replaceState.call(window.history,e,t,o),c(o,e),i(document.location.href)},replaceState(e,t,s){n.replaceState.call(window.history,e,t,s),o[r]={state:e,url:s},i(document.location.href)}}),Object.defineProperties(window.history,{length:{get:()=>o.length},state:{get:()=>o[r].state}}),window.addEventListener("hashchange",()=>{s?s=!1:(c(a(document.location),null),i(document.location.href))}),c(a(document.location),null),setTimeout(()=>{i(document.location.href)}),(0,t.listen)((function(e,t){t&&("urlback"===e.type?history.back():"urlforward"===e.type?history.forward():"refresh"===e.type&&document.location.reload())}))};const n=window.history.__proto__,o=[];let r=-1,s=!1;function i(e){(0,t.dispatch)({type:"urlchange",url:e,back:r>0,forward:r<o.length-1})}function c(e,t){o.splice(r+1),o.push({url:e,state:t}),r=o.length-1}function a(e){return"".concat(e.pathname).concat(e.hash)}})?o.apply(t,r):o)||(e.exports=s)},"./src/sandbox/startup.ts":function(e,t,n){"use strict";n.r(t);var o=n("../../node_modules/worker-loader/dist/cjs.js?publicPath=/&name=babel-transpiler.[hash:8].worker.js!./src/sandbox/eval/transpilers/babel/worker/index.ts"),r=n.n(o),s=n("../sandbox-hooks/console/index.js"),i=n.n(s),c=n("../sandbox-hooks/url-listeners.js"),a=n.n(c),u=n("../sandbox-hooks/screenshot.js"),d=n.n(u),l=n("../sandbox-hooks/preview-secret.js"),f=n("../codesandbox-api/dist/codesandbox.es5.js");!function(e){const t=document.createElement("link");t.href=e,t.rel="prefetch",t.as="script",document.head.appendChild(t)}("".concat("https://codesandbox.io","/static/js/babel.").concat("7.21.8",".min.js")),globalThis.babelworkers=[r()()],f.isStandalone||(a()(),i()(),Object(l.listenForPreviewSecret)(),d()())}});
//# sourceMappingURL=sandbox-startup.61872190d.js.map
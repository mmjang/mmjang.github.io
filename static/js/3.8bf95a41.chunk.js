(this["webpackJsonpduck-ts"]=this["webpackJsonpduck-ts"]||[]).push([[3],{260:function(t,n,e){"use strict";e.r(n),e.d(n,"getCLS",(function(){return v})),e.d(n,"getFCP",(function(){return y})),e.d(n,"getFID",(function(){return F})),e.d(n,"getLCP",(function(){return C})),e.d(n,"getTTFB",(function(){return P}));var i,a,r,o,u=function(t,n){return{name:t,value:void 0===n?-1:n,delta:0,entries:[],id:"v1-".concat(Date.now(),"-").concat(Math.floor(8999999999999*Math.random())+1e12)}},c=function(t,n){try{if(PerformanceObserver.supportedEntryTypes.includes(t)){var e=new PerformanceObserver((function(t){return t.getEntries().map(n)}));return e.observe({type:t,buffered:!0}),e}}catch(t){}},s=!1,f=function(t,n){s||"undefined"!=typeof InstallTrigger||(addEventListener("beforeunload",(function(){})),s=!0),addEventListener("visibilitychange",(function e(i){"hidden"===document.visibilityState&&(t(i),n&&removeEventListener("visibilitychange",e,!0))}),!0)},d=function(t){addEventListener("pageshow",(function(n){n.persisted&&t(n)}),!0)},m="function"==typeof WeakSet?new WeakSet:new Set,p=function(t,n,e){var i;return function(){n.value>=0&&(e||m.has(n)||"hidden"===document.visibilityState)&&(n.delta=n.value-(i||0),(n.delta||void 0===i)&&(i=n.value,t(n)))}},v=function(t,n){var e,i=u("CLS",0),a=function(t){t.hadRecentInput||(i.value+=t.value,i.entries.push(t),e())},r=c("layout-shift",a);r&&(e=p(t,i,n),f((function(){r.takeRecords().map(a),e()})),d((function(){i=u("CLS",0),e=p(t,i,n)})))},l=-1,h=function(){return"hidden"===document.visibilityState?0:1/0},S=function(){f((function(t){var n=t.timeStamp;l=n}),!0)},g=function(){return l<0&&(l=h(),S(),d((function(){setTimeout((function(){l=h(),S()}),0)}))),{get timeStamp(){return l}}},y=function(t,n){var e,i=g(),a=u("FCP"),r=c("paint",(function(t){"first-contentful-paint"===t.name&&(r&&r.disconnect(),t.startTime<i.timeStamp&&(a.value=t.startTime,a.entries.push(t),m.add(a),e()))}));r&&(e=p(t,a,n),d((function(i){a=u("FCP"),e=p(t,a,n),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,m.add(a),e()}))}))})))},w={passive:!0,capture:!0},E=new Date,L=function(t,n){i||(i=n,a=t,r=new Date,k(removeEventListener),T())},T=function(){if(a>=0&&a<r-E){var t={entryType:"first-input",name:i.type,target:i.target,cancelable:i.cancelable,startTime:i.timeStamp,processingStart:i.timeStamp+a};o.forEach((function(n){n(t)})),o=[]}},b=function(t){if(t.cancelable){var n=(t.timeStamp>1e12?new Date:performance.now())-t.timeStamp;"pointerdown"==t.type?function(t,n){var e=function(){L(t,n),a()},i=function(){a()},a=function(){removeEventListener("pointerup",e,w),removeEventListener("pointercancel",i,w)};addEventListener("pointerup",e,w),addEventListener("pointercancel",i,w)}(n,t):L(n,t)}},k=function(t){["mousedown","keydown","touchstart","pointerdown"].forEach((function(n){return t(n,b,w)}))},F=function(t,n){var e,r=g(),s=u("FID"),v=function(t){t.startTime<r.timeStamp&&(s.value=t.processingStart-t.startTime,s.entries.push(t),m.add(s),e())},l=c("first-input",v);e=p(t,s,n),l&&f((function(){l.takeRecords().map(v),l.disconnect()}),!0),l&&d((function(){var r;s=u("FID"),e=p(t,s,n),o=[],a=-1,i=null,k(addEventListener),r=v,o.push(r),T()}))},C=function(t,n){var e,i=g(),a=u("LCP"),r=function(t){var n=t.startTime;n<i.timeStamp&&(a.value=n,a.entries.push(t)),e()},o=c("largest-contentful-paint",r);if(o){e=p(t,a,n);var s=function(){m.has(a)||(o.takeRecords().map(r),o.disconnect(),m.add(a),e())};["keydown","click"].forEach((function(t){addEventListener(t,s,{once:!0,capture:!0})})),f(s,!0),d((function(i){a=u("LCP"),e=p(t,a,n),requestAnimationFrame((function(){requestAnimationFrame((function(){a.value=performance.now()-i.timeStamp,m.add(a),e()}))}))}))}},P=function(t){var n,e=u("TTFB");n=function(){try{var n=performance.getEntriesByType("navigation")[0]||function(){var t=performance.timing,n={entryType:"navigation",startTime:0};for(var e in t)"navigationStart"!==e&&"toJSON"!==e&&(n[e]=Math.max(t[e]-t.navigationStart,0));return n}();e.value=e.delta=n.responseStart,e.entries=[n],t(e)}catch(t){}},"complete"===document.readyState?setTimeout(n,0):addEventListener("pageshow",n)}}}]);
//# sourceMappingURL=3.8bf95a41.chunk.js.map
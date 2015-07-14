/**
 * almond 0.2.6 Copyright (c) 2011-2012, The Dojo Foundation All Rights Reserved.
 * Available via the MIT or new BSD license.
 * see: http://github.com/jrburke/almond for details
 */

(function(e,t){e.sw=t(),e.SharedWorker||(e.SharedWorker=e.sw.SharedWorker)})(this,function(){var e,t,n;return function(r){function d(e,t){return h.call(e,t)}function v(e,t){var n,r,i,s,o,u,a,f,c,h,p=t&&t.split("/"),d=l.map,v=d&&d["*"]||{};if(e&&e.charAt(0)===".")if(t){p=p.slice(0,p.length-1),e=p.concat(e.split("/"));for(f=0;f<e.length;f+=1){h=e[f];if(h===".")e.splice(f,1),f-=1;else if(h===".."){if(f===1&&(e[2]===".."||e[0]===".."))break;f>0&&(e.splice(f-1,2),f-=2)}}e=e.join("/")}else e.indexOf("./")===0&&(e=e.substring(2));if((p||v)&&d){n=e.split("/");for(f=n.length;f>0;f-=1){r=n.slice(0,f).join("/");if(p)for(c=p.length;c>0;c-=1){i=d[p.slice(0,c).join("/")];if(i){i=i[r];if(i){s=i,o=f;break}}}if(s)break;!u&&v&&v[r]&&(u=v[r],a=f)}!s&&u&&(s=u,o=a),s&&(n.splice(0,o,s),e=n.join("/"))}return e}function m(e,t){return function(){return s.apply(r,p.call(arguments,0).concat([e,t]))}}function g(e){return function(t){return v(t,e)}}function y(e){return function(t){a[e]=t}}function b(e){if(d(f,e)){var t=f[e];delete f[e],c[e]=!0,i.apply(r,t)}if(!d(a,e)&&!d(c,e))throw new Error("No "+e);return a[e]}function w(e){var t,n=e?e.indexOf("!"):-1;return n>-1&&(t=e.substring(0,n),e=e.substring(n+1,e.length)),[t,e]}function E(e){return function(){return l&&l.config&&l.config[e]||{}}}var i,s,o,u,a={},f={},l={},c={},h=Object.prototype.hasOwnProperty,p=[].slice;o=function(e,t){var n,r=w(e),i=r[0];return e=r[1],i&&(i=v(i,t),n=b(i)),i?n&&n.normalize?e=n.normalize(e,g(t)):e=v(e,t):(e=v(e,t),r=w(e),i=r[0],e=r[1],i&&(n=b(i))),{f:i?i+"!"+e:e,n:e,pr:i,p:n}},u={require:function(e){return m(e)},exports:function(e){var t=a[e];return typeof t!="undefined"?t:a[e]={}},module:function(e){return{id:e,uri:"",exports:a[e],config:E(e)}}},i=function(e,t,n,i){var s,l,h,p,v,g=[],w;i=i||e;if(typeof n=="function"){t=!t.length&&n.length?["require","exports","module"]:t;for(v=0;v<t.length;v+=1){p=o(t[v],i),l=p.f;if(l==="require")g[v]=u.require(e);else if(l==="exports")g[v]=u.exports(e),w=!0;else if(l==="module")s=g[v]=u.module(e);else if(d(a,l)||d(f,l)||d(c,l))g[v]=b(l);else{if(!p.p)throw new Error(e+" missing "+l);p.p.load(p.n,m(i,!0),y(l),{}),g[v]=a[l]}}h=n.apply(a[e],g);if(e)if(s&&s.exports!==r&&s.exports!==a[e])a[e]=s.exports;else if(h!==r||!w)a[e]=h}else e&&(a[e]=n)},e=t=s=function(e,t,n,a,f){return typeof e=="string"?u[e]?u[e](t):b(o(e,t).f):(e.splice||(l=e,t.splice?(e=t,t=n,n=null):e=r),t=t||function(){},typeof n=="function"&&(n=a,a=f),a?i(r,e,t,n):setTimeout(function(){i(r,e,t,n)},4),s)},s.config=function(e){return l=e,l.deps&&s(l.deps,l.callback),s},e._defined=a,n=function(e,t,n){t.splice||(n=t,t=[]),!d(a,e)&&!d(f,e)&&(f[e]=[e,t,n])},n.amd={jQuery:!0}}(),n("almond",function(){}),n("makePortRegistry",[],function(){return function(){function n(t){var n=i();return e[n]=t,n}function r(t){return e[t]}function i(){return t+=1,String(t)}var e={},t=0;return{registerPort:n,getPort:r}}}),n("portRegistry",["./makePortRegistry"],function(e){return e()}),n("sendString",[],function(){function e(e){t(e),t()}function t(e){location.hash="!"+(e||"")}return e}),n("sendCommand",["sendString"],function(e){function t(t,r){e("jsonCmd/"+encodeURIComponent(n(t,r)))}function n(e,t){return JSON.stringify(r(e,t))}function r(e,t){return{cmd:e,args:t||{}}}return t}),n("serialize",[],function(){function s(e){return JSON.stringify(o(e))}function o(n){var r,i;r=l(n);switch(r){case e:i=u(n);break;case t:i=a(n);break;default:i=f(n,r)}return i}function u(t){var n,r;n={type:e,value:{}};for(r in t)t.hasOwnProperty(r)&&(n.value[r]=o(t[r]));return n}function a(e){var n,r,i;n=[];for(r=0,i=e.length;r<i;r+=1)n[r]=o(e[r]);return{type:t,value:n}}function f(e,t){return{type:t,value:e}}function l(e){var t=r(e);return t.match(i)[1].toLowerCase()}var e="object",t="array",n=Object.prototype.toString,r=n.call.bind(n),i=/^\[object (.*)\]$/;return s}),n("appFrame",["./sendCommand","./serialize"],function(e,t){function n(n,r){e("postMessage",{srcPortId:n,message:t(r)})}function r(t,n){e("initSharedWorker",{portId:t,url:n})}function i(){e("establishConnection")}function s(t,n){var r={message:t};n&&(r.severity=n),e("log",r)}return{postMessage:n,initWorker:r,readyToConnect:i,log:s}}),n("createPort",["./portRegistry","./appFrame"],function(e,t){function n(){var t,n,i,s;return t=new MessageChannel,n=t.port1,i=t.port2,s=e.registerPort(n),n.onmessage=r(s),{id:s,port:i}}function r(e){return function(n){t.postMessage(e,n.data)}}return n}),n("initSharedWorker",["./createPort","./appFrame"],function(e,t){function n(n){var r=e();return t.initWorker(r.id,n),r.port}return n}),n("pathToUrl",[],function(){return function(t){var n=document.createElement("a");return n.href=t,n.href}}),n("SharedWorker",["./initSharedWorker","./pathToUrl"],function(e,t){function n(n){this.port=e(t(n))}return n}),n("deserialize",[],function(){function r(e){return i(JSON.parse(e))}function i(n){var r;switch(n.type){case e:r=s(n);break;case t:r=o(n);break;default:r=u(n)}return r}function s(e){var t,n,r;t={},n=e.value;for(r in n)n.hasOwnProperty(r)&&(t[r]=i(n[r]));return t}function o(e){return e.value.map(i)}function u(e){var t=e.value;return e.type===n?new Date(t):t}var e="object",t="array",n="date";return r}),n("postMessageToPort",["./portRegistry","./deserialize"],function(e,t){function n(n,r){var i=e.getPort(n);i.postMessage(t(r))}return n}),n("apiClient",["./SharedWorker","./postMessageToPort"],function(e,t){return{SharedWorker:e,postMessageToPort:t}}),t("apiClient")});
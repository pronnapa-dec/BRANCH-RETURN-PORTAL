!function(e,t){"object"==typeof exports&&"undefined"!=typeof module?t(require("@firebase/app")):"function"==typeof define&&define.amd?define(["@firebase/app"],t):t((e=e||self).firebase)}(this,function(He){"use strict";try{(function(){He=He&&He.hasOwnProperty("default")?He.default:He;var n=function(e,t){return(n=Object.setPrototypeOf||{__proto__:[]}instanceof Array&&function(e,t){e.__proto__=t}||function(e,t){for(var n in t)t.hasOwnProperty(n)&&(e[n]=t[n])})(e,t)};var a=function(){return(a=Object.assign||function(e){for(var t,n=1,r=arguments.length;n<r;n++)for(var i in t=arguments[n])Object.prototype.hasOwnProperty.call(t,i)&&(e[i]=t[i]);return e}).apply(this,arguments)};function l(o,a,s,u){return new(s=s||Promise)(function(e,t){function n(e){try{i(u.next(e))}catch(e){t(e)}}function r(e){try{i(u.throw(e))}catch(e){t(e)}}function i(t){t.done?e(t.value):new s(function(e){e(t.value)}).then(n,r)}i((u=u.apply(o,a||[])).next())})}function p(n,r){var i,o,a,e,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return e={next:t(0),throw:t(1),return:t(2)},"function"==typeof Symbol&&(e[Symbol.iterator]=function(){return this}),e;function t(t){return function(e){return function(t){if(i)throw new TypeError("Generator is already executing.");for(;s;)try{if(i=1,o&&(a=2&t[0]?o.return:t[0]?o.throw||((a=o.return)&&a.call(o),0):o.next)&&!(a=a.call(o,t[1])).done)return a;switch(o=0,a&&(t=[2&t[0],a.value]),t[0]){case 0:case 1:a=t;break;case 4:return s.label++,{value:t[1],done:!1};case 5:s.label++,o=t[1],t=[0];continue;case 7:t=s.ops.pop(),s.trys.pop();continue;default:if(!(a=0<(a=s.trys).length&&a[a.length-1])&&(6===t[0]||2===t[0])){s=0;continue}if(3===t[0]&&(!a||t[1]>a[0]&&t[1]<a[3])){s.label=t[1];break}if(6===t[0]&&s.label<a[1]){s.label=a[1],a=t;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(t);break}a[2]&&s.ops.pop(),s.trys.pop();continue}t=r.call(n,s)}catch(e){t=[6,e],o=0}finally{i=a=0}if(5&t[0])throw t[1];return{value:t[0]?t[1]:void 0,done:!0}}([t,e])}}}function s(e){var t="function"==typeof Symbol&&e[Symbol.iterator],n=0;return t?t.call(e):{next:function(){return e&&n>=e.length&&(e=void 0),{value:e&&e[n++],done:!e}}}}function r(e,t){var n="function"==typeof Symbol&&e[Symbol.iterator];if(!n)return e;var r,i,o=n.call(e),a=[];try{for(;(void 0===t||0<t--)&&!(r=o.next()).done;)a.push(r.value)}catch(e){i={error:e}}finally{try{r&&!r.done&&(n=o.return)&&n.call(o)}finally{if(i)throw i.error}}return a}var e,t,i,d=(i=Error,n(e=u,t=i),void(e.prototype=null===t?Object.create(t):(o.prototype=t.prototype,new o)),u);function o(){this.constructor=e}function u(e,t){var n=i.call(this,t)||this;return n.code=e,n.name="FirebaseError",Object.setPrototypeOf(n,u.prototype),Error.captureStackTrace&&Error.captureStackTrace(n,c.prototype.create),n}var c=(f.prototype.create=function(e){for(var t=[],n=1;n<arguments.length;n++)t[n-1]=arguments[n];for(var r=t[0]||{},i=this.service+"/"+e,o=this.errors[e],a=o?function(e,r){return e.replace(h,function(e,t){var n=r[t];return null!=n?n.toString():"<"+t+"?>"})}(o,r):"Error",s=this.serviceName+": "+a+" ("+i+").",u=new d(i,s),c=0,f=Object.keys(r);c<f.length;c++){var l=f[c];"_"!==l.slice(-1)&&(l in u&&console.warn('Overwriting FirebaseError base field "'+l+'" can cause unexpected behavior.'),u[l]=r[l])}return u},f);function f(e,t,n){this.service=e,this.serviceName=t,this.errors=n}var h=/\{\$([^}]+)}/g,v=(g.prototype.setInstantiationMode=function(e){return this.instantiationMode=e,this},g.prototype.setMultipleInstances=function(e){return this.multipleInstances=e,this},g.prototype.setServiceProps=function(e){return this.serviceProps=e,this},g);function g(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY"}function y(n){return new Promise(function(e,t){n.onsuccess=function(){e(n.result)},n.onerror=function(){t(n.error)}})}function w(n,r,i){var o,e=new Promise(function(e,t){y(o=n[r].apply(n,i)).then(e,t)});return e.request=o,e}function m(e,n,t){t.forEach(function(t){Object.defineProperty(e.prototype,t,{get:function(){return this[n][t]},set:function(e){this[n][t]=e}})})}function b(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return w(this[n],e,arguments)})})}function _(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return this[n][e].apply(this[n],arguments)})})}function E(t,n,r,e){e.forEach(function(e){e in r.prototype&&(t.prototype[e]=function(){return function(e,t,n){var r=w(e,t,n);return r.then(function(e){if(e)return new S(e,r.request)})}(this[n],e,arguments)})})}function I(e){this._index=e}function S(e,t){this._cursor=e,this._request=t}function C(e){this._store=e}function T(n){this._tx=n,this.complete=new Promise(function(e,t){n.oncomplete=function(){e()},n.onerror=function(){t(n.error)},n.onabort=function(){t(n.error)}})}function P(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new T(n)}function N(e){this._db=e}m(I,"_index",["name","keyPath","multiEntry","unique"]),b(I,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),E(I,"_index",IDBIndex,["openCursor","openKeyCursor"]),m(S,"_cursor",["direction","key","primaryKey","value"]),b(S,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach(function(n){n in IDBCursor.prototype&&(S.prototype[n]=function(){var t=this,e=arguments;return Promise.resolve().then(function(){return t._cursor[n].apply(t._cursor,e),y(t._request).then(function(e){if(e)return new S(e,t._request)})})})}),C.prototype.createIndex=function(){return new I(this._store.createIndex.apply(this._store,arguments))},C.prototype.index=function(){return new I(this._store.index.apply(this._store,arguments))},m(C,"_store",["name","keyPath","indexNames","autoIncrement"]),b(C,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),E(C,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),_(C,"_store",IDBObjectStore,["deleteIndex"]),T.prototype.objectStore=function(){return new C(this._tx.objectStore.apply(this._tx,arguments))},m(T,"_tx",["objectStoreNames","mode"]),_(T,"_tx",IDBTransaction,["abort"]),P.prototype.createObjectStore=function(){return new C(this._db.createObjectStore.apply(this._db,arguments))},m(P,"_db",["name","version","objectStoreNames"]),_(P,"_db",IDBDatabase,["deleteObjectStore","close"]),N.prototype.transaction=function(){return new T(this._db.transaction.apply(this._db,arguments))},m(N,"_db",["name","version","objectStoreNames"]),_(N,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach(function(i){[C,I].forEach(function(e){i in e.prototype&&(e.prototype[i.replace("open","iterate")]=function(){var e=function(e){return Array.prototype.slice.call(e)}(arguments),t=e[e.length-1],n=this._store||this._index,r=n[i].apply(n,e.slice(0,-1));r.onsuccess=function(){t(r.result)}})})}),[I,C].forEach(function(e){e.prototype.getAll||(e.prototype.getAll=function(e,n){var r=this,i=[];return new Promise(function(t){r.iterateCursor(e,function(e){e?(i.push(e.value),void 0===n||i.length!=n?e.continue():t(i)):t(i)})})})});var O,A="0.4.1",k=1e4,j="w:"+A,x="FIS_v2",D="https://firebaseinstallations.googleapis.com/v1",q=36e5,F=((O={})["missing-app-config-values"]='Missing App configuration value: "{$valueName}"',O["not-registered"]="Firebase Installation is not registered.",O["installation-not-found"]="Firebase Installation not found.",O["request-failed"]='{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',O["app-offline"]="Could not process request. Application offline.",O["delete-pending-registration"]="Can't delete installation while there is a pending registration request.",O),L=new c("installations","Installations",F);function V(e){return e instanceof d&&e.code.includes("request-failed")}function R(e){var t=e.projectId;return D+"/projects/"+t+"/installations"}function G(e){return{token:e.token,requestStatus:2,expiresIn:function(e){return Number(e.replace("s","000"))}(e.expiresIn),creationTime:Date.now()}}function B(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,i.json()];case 1:return t=e.sent(),n=t.error,[2,L.create("request-failed",{requestName:r,serverCode:n.code,serverMessage:n.message,serverStatus:n.status})]}})})}function M(e){var t=e.apiKey;return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":t})}function K(e,t){var n=t.refreshToken,r=M(e);return r.append("Authorization",function(e){return x+" "+e}(n)),r}function U(n){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,n()];case 1:return 500<=(t=e.sent()).status&&t.status<600?[2,n()]:[2,t]}})})}function H(t){return new Promise(function(e){setTimeout(e,t)})}function $(e){return btoa(String.fromCharCode.apply(String,function(){for(var e=[],t=0;t<arguments.length;t++)e=e.concat(r(arguments[t]));return e}(e))).replace(/\+/g,"-").replace(/\//g,"_")}var z=/^[cdef][\w-]{21}$/,W="";function J(){try{var e=new Uint8Array(17);(self.crypto||self.msCrypto).getRandomValues(e),e[0]=112+e[0]%16;var t=function(e){return $(e).substr(0,22)}(e);return z.test(t)?t:W}catch(e){return W}}function Y(e){return e.appName+"!"+e.appId}var X=new Map;function Z(e,t){var n=Y(e);Q(n,t),function(e,t){var n=te();n&&n.postMessage({key:e,fid:t});ne()}(n,t)}function Q(e,t){var n,r,i=X.get(e);if(i)try{for(var o=s(i),a=o.next();!a.done;a=o.next()){(0,a.value)(t)}}catch(e){n={error:e}}finally{try{a&&!a.done&&(r=o.return)&&r.call(o)}finally{if(n)throw n.error}}}var ee=null;function te(){return!ee&&"BroadcastChannel"in self&&((ee=new BroadcastChannel("[Firebase] FID Change")).onmessage=function(e){Q(e.data.key,e.data.fid)}),ee}function ne(){0===X.size&&ee&&(ee.close(),ee=null)}var re,ie="firebase-installations-database",oe=1,ae="firebase-installations-store",se=null;function ue(){return se=se||function(e,t,n){var r=w(indexedDB,"open",[e,t]),i=r.request;return i&&(i.onupgradeneeded=function(e){n&&n(new P(i.result,e.oldVersion,i.transaction))}),r.then(function(e){return new N(e)})}(ie,oe,function(e){switch(e.oldVersion){case 0:e.createObjectStore(ae)}})}function ce(a,s){return l(this,void 0,void 0,function(){var t,n,r,i,o;return p(this,function(e){switch(e.label){case 0:return t=Y(a),[4,ue()];case 1:return n=e.sent(),r=n.transaction(ae,"readwrite"),[4,(i=r.objectStore(ae)).get(t)];case 2:return o=e.sent(),[4,i.put(s,t)];case 3:return e.sent(),[4,r.complete];case 4:return e.sent(),o&&o.fid===s.fid||Z(a,s.fid),[2,s]}})})}function fe(i){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return t=Y(i),[4,ue()];case 1:return n=e.sent(),[4,(r=n.transaction(ae,"readwrite")).objectStore(ae).delete(t)];case 2:return e.sent(),[4,r.complete];case 3:return e.sent(),[2]}})})}function le(s,u){return l(this,void 0,void 0,function(){var t,n,r,i,o,a;return p(this,function(e){switch(e.label){case 0:return t=Y(s),[4,ue()];case 1:return n=e.sent(),r=n.transaction(ae,"readwrite"),[4,(i=r.objectStore(ae)).get(t)];case 2:return o=e.sent(),void 0!==(a=u(o))?[3,4]:[4,i.delete(t)];case 3:return e.sent(),[3,6];case 4:return[4,i.put(a,t)];case 5:e.sent(),e.label=6;case 6:return[4,r.complete];case 7:return e.sent(),!a||o&&o.fid===a.fid||Z(s,a.fid),[2,a]}})})}function pe(i){return l(this,void 0,void 0,function(){var r,t,n;return p(this,function(e){switch(e.label){case 0:return[4,le(i,function(e){var t=function(e){return he(e||{fid:J(),registrationStatus:0})}(e),n=function(e,t){{if(0!==t.registrationStatus)return 1===t.registrationStatus?{installationEntry:t,registrationPromise:function(o){return l(this,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:return[4,de(o)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.registrationStatus?[3,5]:[4,H(100)];case 3:return e.sent(),[4,de(o)];case 4:return t=e.sent(),[3,2];case 5:return 0!==t.registrationStatus?[3,7]:[4,pe(o)];case 6:return n=e.sent(),r=n.installationEntry,(i=n.registrationPromise)?[2,i]:[2,r];case 7:return[2,t]}})})}(e)}:{installationEntry:t};if(!navigator.onLine){var n=Promise.reject(L.create("app-offline"));return{installationEntry:t,registrationPromise:n}}var r={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},i=function(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return e.trys.push([0,2,,7]),[4,function(s,e){var u=e.fid;return l(this,void 0,void 0,function(){var t,n,r,i,o,a;return p(this,function(e){switch(e.label){case 0:return t=R(s),n=M(s),r={fid:u,authVersion:x,appId:s.appId,sdkVersion:j},i={method:"POST",headers:n,body:JSON.stringify(r)},[4,U(function(){return fetch(t,i)})];case 1:return(o=e.sent()).ok?[4,o.json()]:[3,3];case 2:return a=e.sent(),[2,{fid:a.fid||u,registrationStatus:2,refreshToken:a.refreshToken,authToken:G(a.authToken)}];case 3:return[4,B("Create Installation",o)];case 4:throw e.sent()}})})}(r,i)];case 1:return t=e.sent(),[2,ce(r,t)];case 2:return V(n=e.sent())&&409===n.serverCode?[4,fe(r)]:[3,4];case 3:return e.sent(),[3,6];case 4:return[4,ce(r,{fid:i.fid,registrationStatus:0})];case 5:e.sent(),e.label=6;case 6:throw n;case 7:return[2]}})})}(e,r);return{installationEntry:r,registrationPromise:i}}}(i,t);return r=n.registrationPromise,n.installationEntry})];case 1:return(t=e.sent()).fid!==W?[3,3]:(n={},[4,r]);case 2:return[2,(n.installationEntry=e.sent(),n)];case 3:return[2,{installationEntry:t,registrationPromise:r}]}})})}function de(e){return le(e,function(e){if(!e)throw L.create("installation-not-found");return he(e)})}function he(e){return function(e){return 1===e.registrationStatus&&e.registrationTime+k<Date.now()}(e)?{fid:e.fid,registrationStatus:0}:e}function ve(e,u){var c=e.appConfig,f=e.platformLoggerProvider;return l(this,void 0,void 0,function(){var t,n,r,i,o,a,s;return p(this,function(e){switch(e.label){case 0:return t=function(e,t){var n=t.fid;return R(e)+"/"+n+"/authTokens:generate"}(c,u),n=K(c,u),(r=f.getImmediate({optional:!0}))&&n.append("x-firebase-client",r.getPlatformInfoString()),i={installation:{sdkVersion:j}},o={method:"POST",headers:n,body:JSON.stringify(i)},[4,U(function(){return fetch(t,o)})];case 1:return(a=e.sent()).ok?[4,a.json()]:[3,3];case 2:return s=e.sent(),[2,G(s)];case 3:return[4,B("Generate Auth Token",a)];case 4:throw e.sent()}})})}function ge(i,o){return void 0===o&&(o=!1),l(this,void 0,void 0,function(){var r,t,n;return p(this,function(e){switch(e.label){case 0:return[4,le(i.appConfig,function(e){if(!we(e))throw L.create("not-registered");var t=e.authToken;if(!o&&function(e){return 2===e.requestStatus&&!function(e){var t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+q}(e)}(t))return e;if(1===t.requestStatus)return r=function(r,i){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,ye(r.appConfig)];case 1:t=e.sent(),e.label=2;case 2:return 1!==t.authToken.requestStatus?[3,5]:[4,H(100)];case 3:return e.sent(),[4,ye(r.appConfig)];case 4:return t=e.sent(),[3,2];case 5:return 0===(n=t.authToken).requestStatus?[2,ge(r,i)]:[2,n]}})})}(i,o),e;if(!navigator.onLine)throw L.create("app-offline");var n=function(e){var t={requestStatus:1,requestTime:Date.now()};return a(a({},e),{authToken:t})}(e);return r=function(i,o){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return e.trys.push([0,3,,8]),[4,ve(i,o)];case 1:return t=e.sent(),r=a(a({},o),{authToken:t}),[4,ce(i.appConfig,r)];case 2:return e.sent(),[2,t];case 3:return!V(n=e.sent())||401!==n.serverCode&&404!==n.serverCode?[3,5]:[4,fe(i.appConfig)];case 4:return e.sent(),[3,7];case 5:return r=a(a({},o),{authToken:{requestStatus:0}}),[4,ce(i.appConfig,r)];case 6:e.sent(),e.label=7;case 7:throw n;case 8:return[2]}})})}(i,n),n})];case 1:return t=e.sent(),r?[4,r]:[3,3];case 2:return n=e.sent(),[3,4];case 3:n=t.authToken,e.label=4;case 4:return[2,n]}})})}function ye(e){return le(e,function(e){if(!we(e))throw L.create("not-registered");return function(e){return 1===e.requestStatus&&e.requestTime+k<Date.now()}(e.authToken)?a(a({},e),{authToken:{requestStatus:0}}):e})}function we(e){return void 0!==e&&2===e.registrationStatus}function me(t,n){return void 0===n&&(n=!1),l(this,void 0,void 0,function(){return p(this,function(e){switch(e.label){case 0:return[4,function(n){return l(this,void 0,void 0,function(){var t;return p(this,function(e){switch(e.label){case 0:return[4,pe(n)];case 1:return(t=e.sent().registrationPromise)?[4,t]:[3,3];case 2:e.sent(),e.label=3;case 3:return[2]}})})}(t.appConfig)];case 1:return e.sent(),[4,ge(t,n)];case 2:return[2,e.sent().token]}})})}function be(o,a){return l(this,void 0,void 0,function(){var t,n,r,i;return p(this,function(e){switch(e.label){case 0:return t=function(e,t){var n=t.fid;return R(e)+"/"+n}(o,a),n=K(o,a),r={method:"DELETE",headers:n},[4,U(function(){return fetch(t,r)})];case 1:return(i=e.sent()).ok?[3,3]:[4,B("Delete Installation",i)];case 2:throw e.sent();case 3:return[2]}})})}function _e(e,t){var n=e.appConfig;return function(e,t){te();var n=Y(e),r=X.get(n);r||(r=new Set,X.set(n,r)),r.add(t)}(n,t),function(){!function(e,t){var n=Y(e),r=X.get(n);r&&(r.delete(t),0===r.size&&X.delete(n),ne())}(n,t)}}function Ee(e){return L.create("missing-app-config-values",{valueName:e})}(re=He).INTERNAL.registerComponent(new v("installations",function(e){var t=e.getProvider("app").getImmediate(),n={appConfig:function(e){var t,n;if(!e||!e.options)throw Ee("App Configuration");if(!e.name)throw Ee("App Name");try{for(var r=s(["projectId","apiKey","appId"]),i=r.next();!i.done;i=r.next()){var o=i.value;if(!e.options[o])throw Ee(o)}}catch(e){t={error:e}}finally{try{i&&!i.done&&(n=r.return)&&n.call(r)}finally{if(t)throw t.error}}return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}(t),platformLoggerProvider:e.getProvider("platform-logger")};return{app:t,getId:function(){return function(i){return l(this,void 0,void 0,function(){var t,n,r;return p(this,function(e){switch(e.label){case 0:return[4,pe(i.appConfig)];case 1:return t=e.sent(),n=t.installationEntry,(r=t.registrationPromise)?r.catch(console.error):ge(i).catch(console.error),[2,n.fid]}})})}(n)},getToken:function(e){return me(n,e)},delete:function(){return function(r){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,le(t=r.appConfig,function(e){if(!e||0!==e.registrationStatus)return e})];case 1:if(!(n=e.sent()))return[3,6];if(1!==n.registrationStatus)return[3,2];throw L.create("delete-pending-registration");case 2:if(2!==n.registrationStatus)return[3,6];if(navigator.onLine)return[3,3];throw L.create("app-offline");case 3:return[4,be(t,n)];case 4:return e.sent(),[4,fe(t)];case 5:e.sent(),e.label=6;case 6:return[2]}})})}(n)},onIdChange:function(e){return _e(n,e)}}},"PUBLIC")),re.registerVersion("@firebase/installations",A);var Ie,Se,Ce,Te,Pe,Ne="measurementId",Oe="firebase_id",Ae="origin",ke="https://www.googletagmanager.com/gtag/js";function je(e,n,t){var r=function(){for(var e=[],t=0;t<arguments.length;t++)e[t]=arguments[t];window[n].push(arguments)};return window[t]&&"function"==typeof window[t]&&(r=window[t]),window[t]=function(p,d){return function(e,t,n){if(e===Ie.EVENT){var r=[];if(n&&n.send_to){var i=n.send_to;Array.isArray(i)||(i=[i]);for(var o=0,a=i;o<a.length;o++){var s=a[o],u=d[s];if(!u){r=[];break}r.push(u)}}if(0===r.length)for(var c=0,f=Object.values(d);c<f.length;c++){var l=f[c];r.push(l)}Promise.all(r).then(function(){return p(Ie.EVENT,t,n||{})}).catch(function(e){return console.error(e)})}else if(e===Ie.CONFIG){(d[t]||Promise.resolve()).then(function(){p(Ie.CONFIG,t,n)}).catch(function(e){return console.error(e)})}else p(Ie.SET,t)}}(r,e),{gtagCore:r,wrappedGtag:window[t]}}(Se=Ie=Ie||{}).EVENT="event",Se.SET="set",Se.CONFIG="config",(Te=Ce=Ce||{}).ADD_PAYMENT_INFO="add_payment_info",Te.ADD_TO_CART="add_to_cart",Te.ADD_TO_WISHLIST="add_to_wishlist",Te.BEGIN_CHECKOUT="begin_checkout",Te.CHECKOUT_PROGRESS="checkout_progress",Te.EXCEPTION="exception",Te.GENERATE_LEAD="generate_lead",Te.LOGIN="login",Te.PAGE_VIEW="page_view",Te.PURCHASE="purchase",Te.REFUND="refund",Te.REMOVE_FROM_CART="remove_from_cart",Te.SCREEN_VIEW="screen_view",Te.SEARCH="search",Te.SELECT_CONTENT="select_content",Te.SET_CHECKOUT_OPTION="set_checkout_option",Te.SHARE="share",Te.SIGN_UP="sign_up",Te.TIMING_COMPLETE="timing_complete",Te.VIEW_ITEM="view_item",Te.VIEW_ITEM_LIST="view_item_list",Te.VIEW_PROMOTION="view_promotion",Te.VIEW_SEARCH_RESULTS="view_search_results";var xe,De,qe=((Pe={})["no-ga-id"]='"'+Ne+'" field is empty in Firebase config. Firebase Analytics requires this field to contain a valid measurement ID.',Pe["already-exists"]="A Firebase Analytics instance with the measurement ID ${id}  already exists. Only one Firebase Analytics instance can be created for each measurement ID.",Pe["already-initialized"]="Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",Pe["interop-component-reg-failed"]="Firebase Analytics Interop Component failed to instantiate",Pe),Fe=new c("analytics","Analytics",qe),Le={},Ve="dataLayer",Re="gtag",Ge=!1;function Be(e){if(Ge)throw Fe.create("already-initialized");e.dataLayerName&&(Ve=e.dataLayerName),e.gtagName&&(Re=e.gtagName)}function Me(e,t){var r=e.options[Ne];if(!r)throw Fe.create("no-ga-id");if(null!=Le[r])throw Fe.create("already-exists",{id:r});if(!Ge){!function(){for(var e=window.document.getElementsByTagName("script"),t=0,n=Object.values(e);t<n.length;t++){var r=n[t];if(r.src&&r.src.includes(ke))return r}return null}()&&function(e){var t=document.createElement("script");t.src=ke+"?l="+e,t.async=!0,document.head.appendChild(t)}(Ve),function(e){var t=[];Array.isArray(window[e])?t=window[e]:window[e]=t}(Ve);var n=je(Le,Ve,Re),i=n.wrappedGtag,o=n.gtagCore;De=i,xe=o,Ge=!0}return Le[r]=function(r,i,o){return l(this,void 0,void 0,function(){var t,n;return p(this,function(e){switch(e.label){case 0:return[4,i.getId()];case 1:return t=e.sent(),o("js",new Date),o(Ie.CONFIG,r.options[Ne],((n={})[Oe]=t,n[Ae]="firebase",n.update=!0,n)),[2]}})})}(e,t,xe),{app:e,logEvent:function(e,t,n){return function(e,t,n,r,i){var o=r||{};i&&i.global||(o=a(a({},r),{send_to:t})),e(Ie.EVENT,n,o||{})}(De,r,e,t,n)},setCurrentScreen:function(e,t){return function(e,t,n,r){r&&r.global?e(Ie.SET,{screen_name:n}):e(Ie.CONFIG,t,{update:!0,screen_name:n})}(De,r,e,t)},setUserId:function(e,t){return function(e,t,n,r){r&&r.global?e(Ie.SET,{user_id:n}):e(Ie.CONFIG,t,{update:!0,user_id:n})}(De,r,e,t)},setUserProperties:function(e,t){return function(e,t,n,r){if(r&&r.global){for(var i={},o=0,a=Object.keys(n);o<a.length;o++){var s=a[o];i["user_properties."+s]=n[s]}e(Ie.SET,i)}else e(Ie.CONFIG,t,{update:!0,user_properties:n})}(De,r,e,t)},setAnalyticsCollectionEnabled:function(e){return function(e,t){window["ga-disable-"+e]=!t}(r,e)}}}var Ke,Ue="analytics";(Ke=He).INTERNAL.registerComponent(new v(Ue,function(e){return Me(e.getProvider("app").getImmediate(),e.getProvider("installations").getImmediate())},"PUBLIC").setServiceProps({settings:Be,EventName:Ce})),Ke.INTERNAL.registerComponent(new v("analytics-internal",function(e){try{return{logEvent:e.getProvider(Ue).getImmediate().logEvent}}catch(e){throw Fe.create("interop-component-reg-failed",{reason:e})}},"PRIVATE")),Ke.registerVersion("@firebase/analytics","0.2.12")}).apply(this,arguments)}catch(e){throw console.error(e),new Error("Cannot instantiate firebase-analytics.js - be sure to load firebase-app.js first.")}});
//# sourceMappingURL=firebase-analytics.js.map

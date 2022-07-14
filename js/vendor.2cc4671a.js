(globalThis["webpackChunkportfolio"]=globalThis["webpackChunkportfolio"]||[]).push([[736],{5479:(e,t,n)=>{"use strict";n.d(t,{$s:()=>U,BH:()=>c,L:()=>a,LL:()=>E,Mn:()=>m,ZR:()=>_,b$:()=>f,d:()=>p,eu:()=>y,hl:()=>v,m9:()=>V,ne:()=>O,pd:()=>R,ru:()=>d,tV:()=>l,uI:()=>h,vZ:()=>I,w1:()=>g,xO:()=>x,xb:()=>k,z$:()=>u,zI:()=>w,zd:()=>A});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,l=a?n[e.charAt(i)]:64;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==l||null==u)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==l){const e=o<<4&240|l>>2;if(r.push(e),64!==u){const e=l<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){const t=r(e);return s.encodeByteArray(t,!0)},a=function(e){return o(e).replace(/\./g,"")},l=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class c{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function u(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function h(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(u())}function d(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function f(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function p(){return u().indexOf("Electron/")>=0}function g(){const e=u();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function m(){return u().indexOf("MSAppHost/")>=0}function v(){return"object"===typeof indexedDB}function y(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function w(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const b="FirebaseError";class _ extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=b,Object.setPrototypeOf(this,_.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,E.prototype.create)}}class E{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?S(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new _(r,o,n);return a}}function S(e,t){return e.replace(T,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const T=/\{\$([^}]+)}/g;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function k(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function I(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(C(n)&&C(s)){if(!I(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function C(e){return null!==e&&"object"===typeof e}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function x(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function A(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function R(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function O(e,t){const n=new N(e,t);return n.subscribe.bind(n)}class N{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=L(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=P),void 0===r.error&&(r.error=P),void 0===r.complete&&(r.complete=P);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function L(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function P(){}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const D=1e3,F=2,M=144e5,q=.5;function U(e,t=D,n=F){const r=t*Math.pow(n,e),i=Math.round(q*r*(Math.random()-.5)*2);return Math.min(M,r+i)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function V(e){return e&&e._delegate?e._delegate:e}},7518:e=>{e.exports=function(e,t,n){const r=void 0!==e.__vccOpts?e.__vccOpts:e,i=r[t];if(void 0===i)r[t]=n;else for(const s in n)void 0===i[s]&&(i[s]=n[s])}},1959:(e,t,n)=>{"use strict";n.d(t,{Bj:()=>s,Fl:()=>$e,IU:()=>xe,Jd:()=>S,PG:()=>Te,SU:()=>Ue,Um:()=>_e,WL:()=>Be,X$:()=>C,X3:()=>Ce,XI:()=>Fe,Xl:()=>Ae,dq:()=>Pe,iH:()=>De,j:()=>k,lk:()=>T,qj:()=>be,qq:()=>w,yT:()=>Ie});var r=n(2323);let i;class s{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active){const t=i;try{return i=this,e()}finally{i=t}}else 0}on(){i=this}off(){i=this.parent}stop(e){if(this.active){let t,n;for(t=0,n=this.effects.length;t<n;t++)this.effects[t].stop();for(t=0,n=this.cleanups.length;t<n;t++)this.cleanups[t]();if(this.scopes)for(t=0,n=this.scopes.length;t<n;t++)this.scopes[t].stop(!0);if(this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function o(e,t=i){t&&t.active&&t.effects.push(e)}const a=e=>{const t=new Set(e);return t.w=0,t.n=0,t},l=e=>(e.w&p)>0,c=e=>(e.n&p)>0,u=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=p},h=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];l(i)&&!c(i)?i.delete(e):t[n++]=i,i.w&=~p,i.n&=~p}t.length=n}},d=new WeakMap;let f=0,p=1;const g=30;let m;const v=Symbol(""),y=Symbol("");class w{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],this.parent=void 0,o(this,n)}run(){if(!this.active)return this.fn();let e=m,t=_;while(e){if(e===this)return;e=e.parent}try{return this.parent=m,m=this,_=!0,p=1<<++f,f<=g?u(this):b(this),this.fn()}finally{f<=g&&h(this),p=1<<--f,m=this.parent,_=t,this.parent=void 0,this.deferStop&&this.stop()}}stop(){m===this?this.deferStop=!0:this.active&&(b(this),this.onStop&&this.onStop(),this.active=!1)}}function b(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let _=!0;const E=[];function S(){E.push(_),_=!1}function T(){const e=E.pop();_=void 0===e||e}function k(e,t,n){if(_&&m){let t=d.get(e);t||d.set(e,t=new Map);let r=t.get(n);r||t.set(n,r=a());const i=void 0;I(r,i)}}function I(e,t){let n=!1;f<=g?c(e)||(e.n|=p,n=!l(e)):n=!e.has(m),n&&(e.add(m),m.deps.push(e))}function C(e,t,n,i,s,o){const l=d.get(e);if(!l)return;let c=[];if("clear"===t)c=[...l.values()];else if("length"===n&&(0,r.kJ)(e))l.forEach(((e,t)=>{("length"===t||t>=i)&&c.push(e)}));else switch(void 0!==n&&c.push(l.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(l.get("length")):(c.push(l.get(v)),(0,r._N)(e)&&c.push(l.get(y)));break;case"delete":(0,r.kJ)(e)||(c.push(l.get(v)),(0,r._N)(e)&&c.push(l.get(y)));break;case"set":(0,r._N)(e)&&c.push(l.get(v));break}if(1===c.length)c[0]&&x(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);x(a(e))}}function x(e,t){const n=(0,r.kJ)(e)?e:[...e];for(const r of n)r.computed&&A(r,t);for(const r of n)r.computed||A(r,t)}function A(e,t){(e!==m||e.allowRecurse)&&(e.scheduler?e.scheduler():e.run())}const R=(0,r.fY)("__proto__,__v_isRef,__isVue"),O=new Set(Object.getOwnPropertyNames(Symbol).filter((e=>"arguments"!==e&&"caller"!==e)).map((e=>Symbol[e])).filter(r.yk)),N=M(),L=M(!1,!0),P=M(!0),D=F();function F(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=xe(this);for(let t=0,i=this.length;t<i;t++)k(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(xe)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){S();const n=xe(this)[t].apply(this,e);return T(),n}})),e}function M(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_isShallow"===i)return t;if("__v_raw"===i&&s===(e?t?ve:me:t?ge:pe).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(D,i))return Reflect.get(D,i,s);const a=Reflect.get(n,i,s);return((0,r.yk)(i)?O.has(i):R(i))?a:(e||k(n,"get",i),t?a:Pe(a)?o&&(0,r.S0)(i)?a:a.value:(0,r.Kn)(a)?e?Ee(a):be(a):a)}}const q=V(),U=V(!0);function V(e=!1){return function(t,n,i,s){let o=t[n];if(ke(o)&&Pe(o)&&!Pe(i))return!1;if(!e&&!ke(i)&&(Ie(i)||(i=xe(i),o=xe(o)),!(0,r.kJ)(t)&&Pe(o)&&!Pe(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),l=Reflect.set(t,n,i,s);return t===xe(s)&&(a?(0,r.aU)(i,o)&&C(t,"set",n,i,o):C(t,"add",n,i)),l}}function B(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&C(e,"delete",t,void 0,i),s}function j(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&O.has(t)||k(e,"has",t),n}function $(e){return k(e,"iterate",(0,r.kJ)(e)?"length":v),Reflect.ownKeys(e)}const z={get:N,set:q,deleteProperty:B,has:j,ownKeys:$},H={get:P,set(e,t){return!0},deleteProperty(e,t){return!0}},K=(0,r.l7)({},z,{get:L,set:U}),W=e=>e,G=e=>Reflect.getPrototypeOf(e);function Z(e,t,n=!1,r=!1){e=e["__v_raw"];const i=xe(e),s=xe(t);n||(t!==s&&k(i,"get",t),k(i,"get",s));const{has:o}=G(i),a=r?W:n?Oe:Re;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function X(e,t=!1){const n=this["__v_raw"],r=xe(n),i=xe(e);return t||(e!==i&&k(r,"has",e),k(r,"has",i)),e===i?n.has(e):n.has(e)||n.has(i)}function Q(e,t=!1){return e=e["__v_raw"],!t&&k(xe(e),"iterate",v),Reflect.get(e,"size",e)}function Y(e){e=xe(e);const t=xe(this),n=G(t),r=n.has.call(t,e);return r||(t.add(e),C(t,"add",e,e)),this}function J(e,t){t=xe(t);const n=xe(this),{has:i,get:s}=G(n);let o=i.call(n,e);o||(e=xe(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&C(n,"set",e,t,a):C(n,"add",e,t),this}function ee(e){const t=xe(this),{has:n,get:r}=G(t);let i=n.call(t,e);i||(e=xe(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&C(t,"delete",e,void 0,s),o}function te(){const e=xe(this),t=0!==e.size,n=void 0,r=e.clear();return t&&C(e,"clear",void 0,void 0,n),r}function ne(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=xe(s),a=t?W:e?Oe:Re;return!e&&k(o,"iterate",v),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function re(e,t,n){return function(...i){const s=this["__v_raw"],o=xe(s),a=(0,r._N)(o),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=s[e](...i),h=n?W:t?Oe:Re;return!t&&k(o,"iterate",c?y:v),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ie(e){return function(...t){return"delete"!==e&&this}}function se(){const e={get(e){return Z(this,e)},get size(){return Q(this)},has:X,add:Y,set:J,delete:ee,clear:te,forEach:ne(!1,!1)},t={get(e){return Z(this,e,!1,!0)},get size(){return Q(this)},has:X,add:Y,set:J,delete:ee,clear:te,forEach:ne(!1,!0)},n={get(e){return Z(this,e,!0)},get size(){return Q(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!1)},r={get(e){return Z(this,e,!0,!0)},get size(){return Q(this,!0)},has(e){return X.call(this,e,!0)},add:ie("add"),set:ie("set"),delete:ie("delete"),clear:ie("clear"),forEach:ne(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=re(i,!1,!1),n[i]=re(i,!0,!1),t[i]=re(i,!1,!0),r[i]=re(i,!0,!0)})),[e,n,t,r]}const[oe,ae,le,ce]=se();function ue(e,t){const n=t?e?ce:le:e?ae:oe;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const he={get:ue(!1,!1)},de={get:ue(!1,!0)},fe={get:ue(!0,!1)};const pe=new WeakMap,ge=new WeakMap,me=new WeakMap,ve=new WeakMap;function ye(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function we(e){return e["__v_skip"]||!Object.isExtensible(e)?0:ye((0,r.W7)(e))}function be(e){return ke(e)?e:Se(e,!1,z,he,pe)}function _e(e){return Se(e,!1,K,de,ge)}function Ee(e){return Se(e,!0,H,fe,me)}function Se(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=we(e);if(0===a)return e;const l=new Proxy(e,2===a?i:n);return s.set(e,l),l}function Te(e){return ke(e)?Te(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function ke(e){return!(!e||!e["__v_isReadonly"])}function Ie(e){return!(!e||!e["__v_isShallow"])}function Ce(e){return Te(e)||ke(e)}function xe(e){const t=e&&e["__v_raw"];return t?xe(t):e}function Ae(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Re=e=>(0,r.Kn)(e)?be(e):e,Oe=e=>(0,r.Kn)(e)?Ee(e):e;function Ne(e){_&&m&&(e=xe(e),I(e.dep||(e.dep=a())))}function Le(e,t){e=xe(e),e.dep&&x(e.dep)}function Pe(e){return!(!e||!0!==e.__v_isRef)}function De(e){return Me(e,!1)}function Fe(e){return Me(e,!0)}function Me(e,t){return Pe(e)?e:new qe(e,t)}class qe{constructor(e,t){this.__v_isShallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:xe(e),this._value=t?e:Re(e)}get value(){return Ne(this),this._value}set value(e){e=this.__v_isShallow?e:xe(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this.__v_isShallow?e:Re(e),Le(this,e))}}function Ue(e){return Pe(e)?e.value:e}const Ve={get:(e,t,n)=>Ue(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Pe(i)&&!Pe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function Be(e){return Te(e)?e:new Proxy(e,Ve)}class je{constructor(e,t,n,r){this._setter=t,this.dep=void 0,this.__v_isRef=!0,this._dirty=!0,this.effect=new w(e,(()=>{this._dirty||(this._dirty=!0,Le(this))})),this.effect.computed=this,this.effect.active=this._cacheable=!r,this["__v_isReadonly"]=n}get value(){const e=xe(this);return Ne(e),!e._dirty&&e._cacheable||(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function $e(e,t,n=!1){let i,s;const o=(0,r.mf)(e);o?(i=e,s=r.dG):(i=e.get,s=e.set);const a=new je(i,s,o||!s,n);return a}},3673:(e,t,n)=>{"use strict";n.d(t,{$d:()=>o,Ah:()=>Ne,Cn:()=>B,FN:()=>yn,Fl:()=>Pn,HY:()=>Ft,JJ:()=>Q,Jd:()=>Oe,Ko:()=>ze,P$:()=>le,Q6:()=>pe,U2:()=>ue,Uk:()=>on,Us:()=>Rt,Wm:()=>tn,Xn:()=>Ae,Y3:()=>E,Y8:()=>se,YP:()=>ee,_:()=>en,aZ:()=>ge,bv:()=>xe,dD:()=>V,dG:()=>dn,dl:()=>we,f3:()=>Y,h:()=>Dn,iD:()=>Wt,ic:()=>Re,j4:()=>Gt,kq:()=>ln,nK:()=>fe,se:()=>be,uE:()=>an,up:()=>Ve,w5:()=>j,wg:()=>jt,wy:()=>Me});var r=n(1959),i=n(2323);function s(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){a(s,t,n)}return i}function o(e,t,n,r){if((0,i.mf)(e)){const o=s(e,t,n,r);return o&&(0,i.tI)(o)&&o.catch((e=>{a(e,t,n)})),o}const l=[];for(let i=0;i<e.length;i++)l.push(o(e[i],t,n,r));return l}function a(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,o=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,o))return;r=r.parent}const a=t.appContext.config.errorHandler;if(a)return void s(a,null,10,[e,i,o])}l(e,n,i,r)}function l(e,t,n,r=!0){console.error(e)}let c=!1,u=!1;const h=[];let d=0;const f=[];let p=null,g=0;const m=[];let v=null,y=0;const w=Promise.resolve();let b=null,_=null;function E(e){const t=b||w;return e?t.then(this?e.bind(this):e):t}function S(e){let t=d+1,n=h.length;while(t<n){const r=t+n>>>1,i=N(h[r]);i<e?t=r+1:n=r}return t}function T(e){h.length&&h.includes(e,c&&e.allowRecurse?d+1:d)||e===_||(null==e.id?h.push(e):h.splice(S(e.id),0,e),k())}function k(){c||u||(u=!0,b=w.then(L))}function I(e){const t=h.indexOf(e);t>d&&h.splice(t,1)}function C(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),k()}function x(e){C(e,p,f,g)}function A(e){C(e,v,m,y)}function R(e,t=null){if(f.length){for(_=t,p=[...new Set(f)],f.length=0,g=0;g<p.length;g++)p[g]();p=null,g=0,_=null,R(e,t)}}function O(e){if(R(),m.length){const e=[...new Set(m)];if(m.length=0,v)return void v.push(...e);for(v=e,v.sort(((e,t)=>N(e)-N(t))),y=0;y<v.length;y++)v[y]();v=null,y=0}}const N=e=>null==e.id?1/0:e.id;function L(e){u=!1,c=!0,R(e),h.sort(((e,t)=>N(e)-N(t)));i.dG;try{for(d=0;d<h.length;d++){const e=h[d];e&&!1!==e.active&&s(e,null,14)}}finally{d=0,h.length=0,O(e),c=!1,b=null,(h.length||f.length||m.length)&&L(e)}}new Set;new Map;function P(e,t,...n){if(e.isUnmounted)return;const r=e.vnode.props||i.kT;let s=n;const a=t.startsWith("update:"),l=a&&t.slice(7);if(l&&l in r){const e=`${"modelValue"===l?"model":l}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o&&(s=n.map((e=>e.trim()))),t&&(s=n.map(i.He))}let c;let u=r[c=(0,i.hR)(t)]||r[c=(0,i.hR)((0,i._A)(t))];!u&&a&&(u=r[c=(0,i.hR)((0,i.rs)(t))]),u&&o(u,e,6,s);const h=r[c+"Once"];if(h){if(e.emitted){if(e.emitted[c])return}else e.emitted={};e.emitted[c]=!0,o(h,e,6,s)}}function D(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const o=e.emits;let a={},l=!1;if(!(0,i.mf)(e)){const r=e=>{const n=D(e,t,!0);n&&(l=!0,(0,i.l7)(a,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return o||l?((0,i.kJ)(o)?o.forEach((e=>a[e]=null)):(0,i.l7)(a,o),r.set(e,a),a):(r.set(e,null),null)}function F(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let M=null,q=null;function U(e){const t=M;return M=e,q=e&&e.type.__scopeId||null,t}function V(e){q=e}function B(){q=null}function j(e,t=M,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&Ht(-1);const i=U(t),s=e(...n);return U(i),r._d&&Ht(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function $(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[l],slots:c,attrs:u,emit:h,render:d,renderCache:f,data:p,setupState:g,ctx:m,inheritAttrs:v}=e;let y,w;const b=U(e);try{if(4&n.shapeFlag){const e=s||r;y=cn(d.call(e,e,f,o,g,p,m)),w=u}else{const e=t;0,y=cn(e.length>1?e(o,{attrs:u,slots:c,emit:h}):e(o,null)),w=t.props?u:z(u)}}catch(E){Vt.length=0,a(E,e,1),y=tn(qt)}let _=y;if(w&&!1!==v){const e=Object.keys(w),{shapeFlag:t}=_;e.length&&7&t&&(l&&e.some(i.tR)&&(w=H(w,l)),_=sn(_,w))}return n.dirs&&(_=sn(_),_.dirs=_.dirs?_.dirs.concat(n.dirs):n.dirs),n.transition&&(_.transition=n.transition),y=_,U(b),y}const z=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},H=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function K(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:a,patchFlag:l}=t,c=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&l>=0))return!(!i&&!a||a&&a.$stable)||r!==o&&(r?!o||W(r,o,c):!!o);if(1024&l)return!0;if(16&l)return r?W(r,o,c):!!o;if(8&l){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!F(c,n))return!0}}return!1}function W(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!F(n,s))return!0}return!1}function G({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const Z=e=>e.__isSuspense;function X(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):A(e)}function Q(e,t){if(vn){let n=vn.provides;const r=vn.parent&&vn.parent.provides;r===n&&(n=vn.provides=Object.create(r)),n[e]=t}else 0}function Y(e,t,n=!1){const r=vn||M;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}const J={};function ee(e,t,n){return te(e,t,n)}function te(e,t,{immediate:n,deep:a,flush:l,onTrack:c,onTrigger:u}=i.kT){const h=vn;let d,f,p=!1,g=!1;if((0,r.dq)(e)?(d=()=>e.value,p=(0,r.yT)(e)):(0,r.PG)(e)?(d=()=>e,a=!0):(0,i.kJ)(e)?(g=!0,p=e.some((e=>(0,r.PG)(e)||(0,r.yT)(e))),d=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?ie(e):(0,i.mf)(e)?s(e,h,2):void 0))):d=(0,i.mf)(e)?t?()=>s(e,h,2):()=>{if(!h||!h.isUnmounted)return f&&f(),o(e,h,3,[m])}:i.dG,t&&a){const e=d;d=()=>ie(e())}let m=e=>{f=b.onStop=()=>{s(e,h,4)}};if(Tn)return m=i.dG,t?n&&o(t,h,3,[d(),g?[]:void 0,m]):d(),i.dG;let v=g?[]:J;const y=()=>{if(b.active)if(t){const e=b.run();(a||p||(g?e.some(((e,t)=>(0,i.aU)(e,v[t]))):(0,i.aU)(e,v)))&&(f&&f(),o(t,h,3,[e,v===J?void 0:v,m]),v=e)}else b.run()};let w;y.allowRecurse=!!t,w="sync"===l?y:"post"===l?()=>At(y,h&&h.suspense):()=>x(y);const b=new r.qq(d,w);return t?n?y():v=b.run():"post"===l?At(b.run.bind(b),h&&h.suspense):b.run(),()=>{b.stop(),h&&h.scope&&(0,i.Od)(h.scope.effects,b)}}function ne(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?re(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=vn;wn(this);const l=te(s,o.bind(r),n);return a?wn(a):bn(),l}function re(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function ie(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))ie(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)ie(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{ie(e,t)}));else if((0,i.PO)(e))for(const n in e)ie(e[n],t);return e}function se(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return xe((()=>{e.isMounted=!0})),Oe((()=>{e.isUnmounting=!0})),e}const oe=[Function,Array],ae={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:oe,onEnter:oe,onAfterEnter:oe,onEnterCancelled:oe,onBeforeLeave:oe,onLeave:oe,onAfterLeave:oe,onLeaveCancelled:oe,onBeforeAppear:oe,onAppear:oe,onAfterAppear:oe,onAppearCancelled:oe},setup(e,{slots:t}){const n=yn(),i=se();let s;return()=>{const o=t.default&&pe(t.default(),!0);if(!o||!o.length)return;let a=o[0];if(o.length>1){let e=!1;for(const t of o)if(t.type!==qt){0,a=t,e=!0;break}}const l=(0,r.IU)(e),{mode:c}=l;if(i.isLeaving)return he(a);const u=de(a);if(!u)return he(a);const h=ue(u,l,i,n);fe(u,h);const d=n.subTree,f=d&&de(d);let p=!1;const{getTransitionKey:g}=u.type;if(g){const e=g();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==qt&&(!Xt(u,f)||p)){const e=ue(f,l,i,n);if(fe(f,e),"out-in"===c)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},he(a);"in-out"===c&&u.type!==qt&&(e.delayLeave=(e,t,n)=>{const r=ce(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return a}}},le=ae;function ce(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function ue(e,t,n,r){const{appear:s,mode:a,persisted:l=!1,onBeforeEnter:c,onEnter:u,onAfterEnter:h,onEnterCancelled:d,onBeforeLeave:f,onLeave:p,onAfterLeave:g,onLeaveCancelled:m,onBeforeAppear:v,onAppear:y,onAfterAppear:w,onAppearCancelled:b}=t,_=String(e.key),E=ce(n,e),S=(e,t)=>{e&&o(e,r,9,t)},T=(e,t)=>{const n=t[1];S(e,t),(0,i.kJ)(e)?e.every((e=>e.length<=1))&&n():e.length<=1&&n()},k={mode:a,persisted:l,beforeEnter(t){let r=c;if(!n.isMounted){if(!s)return;r=v||c}t._leaveCb&&t._leaveCb(!0);const i=E[_];i&&Xt(e,i)&&i.el._leaveCb&&i.el._leaveCb(),S(r,[t])},enter(e){let t=u,r=h,i=d;if(!n.isMounted){if(!s)return;t=y||u,r=w||h,i=b||d}let o=!1;const a=e._enterCb=t=>{o||(o=!0,S(t?i:r,[e]),k.delayedLeave&&k.delayedLeave(),e._enterCb=void 0)};t?T(t,[e,a]):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();S(f,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),S(n?m:g,[t]),t._leaveCb=void 0,E[i]===e&&delete E[i])};E[i]=e,p?T(p,[t,o]):o()},clone(e){return ue(e,t,n,r)}};return k}function he(e){if(ve(e))return e=sn(e),e.children=null,e}function de(e){return ve(e)?e.children?e.children[0]:void 0:e}function fe(e,t){6&e.shapeFlag&&e.component?fe(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function pe(e,t=!1,n){let r=[],i=0;for(let s=0;s<e.length;s++){let o=e[s];const a=null==n?o.key:String(n)+String(null!=o.key?o.key:s);o.type===Ft?(128&o.patchFlag&&i++,r=r.concat(pe(o.children,t,a))):(t||o.type!==qt)&&r.push(null!=a?sn(o,{key:a}):o)}if(i>1)for(let s=0;s<r.length;s++)r[s].patchFlag=-2;return r}function ge(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const me=e=>!!e.type.__asyncLoader;const ve=e=>e.type.__isKeepAlive;RegExp,RegExp;function ye(e,t){return(0,i.kJ)(e)?e.some((e=>ye(e,t))):(0,i.HD)(e)?e.split(",").includes(t):!!e.test&&e.test(t)}function we(e,t){_e(e,"a",t)}function be(e,t){_e(e,"da",t)}function _e(e,t,n=vn){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(ke(t,r,n),n){let e=n.parent;while(e&&e.parent)ve(e.parent.vnode)&&Ee(r,t,n,e),e=e.parent}}function Ee(e,t,n,r){const s=ke(t,e,r,!0);Ne((()=>{(0,i.Od)(r[t],s)}),n)}function Se(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function Te(e){return 128&e.shapeFlag?e.ssContent:e}function ke(e,t,n=vn,i=!1){if(n){const s=n[e]||(n[e]=[]),a=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),wn(n);const s=o(t,n,e,i);return bn(),(0,r.lk)(),s});return i?s.unshift(a):s.push(a),a}}const Ie=e=>(t,n=vn)=>(!Tn||"sp"===e)&&ke(e,t,n),Ce=Ie("bm"),xe=Ie("m"),Ae=Ie("bu"),Re=Ie("u"),Oe=Ie("bum"),Ne=Ie("um"),Le=Ie("sp"),Pe=Ie("rtg"),De=Ie("rtc");function Fe(e,t=vn){ke("ec",e,t)}function Me(e,t){const n=M;if(null===n)return e;const r=On(n)||n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,l=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&ie(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l})}return e}function qe(e,t,n,i){const s=e.dirs,a=t&&t.dirs;for(let l=0;l<s.length;l++){const c=s[l];a&&(c.oldValue=a[l].value);let u=c.dir[i];u&&((0,r.Jd)(),o(u,n,8,[e.el,c,e,t]),(0,r.lk)())}}const Ue="components";function Ve(e,t){return je(Ue,e,!0,t)||e}const Be=Symbol();function je(e,t,n=!0,r=!1){const s=M||vn;if(s){const n=s.type;if(e===Ue){const e=Nn(n,!1);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=$e(s[e]||n[e],t)||$e(s.appContext[e],t);return!o&&r?n:o}}function $e(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}function ze(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const He=e=>e?_n(e)?On(e)||e.proxy:He(e.parent):null,Ke=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>He(e.parent),$root:e=>He(e.root),$emit:e=>e.emit,$options:e=>Je(e),$forceUpdate:e=>e.f||(e.f=()=>T(e.update)),$nextTick:e=>e.n||(e.n=E.bind(e.proxy)),$watch:e=>ne.bind(e)}),We={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:c,appContext:u}=e;let h;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return l[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return l[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return l[t]=4,n[t];Ge&&(l[t]=0)}}const d=Ke[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(l[t]=4,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;return s!==i.kT&&(0,i.RI)(s,t)?(s[t]=n,!0):r!==i.kT&&(0,i.RI)(r,t)?(r[t]=n,!0):!(0,i.RI)(e.props,t)&&(("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0))},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let l;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(l=o[0])&&(0,i.RI)(l,a)||(0,i.RI)(r,a)||(0,i.RI)(Ke,a)||(0,i.RI)(s.config.globalProperties,a)},defineProperty(e,t,n){return null!=n.get?e._.accessCache[t]=0:(0,i.RI)(n,"value")&&this.set(e,t,n.value,null),Reflect.defineProperty(e,t,n)}};let Ge=!0;function Ze(e){const t=Je(e),n=e.proxy,s=e.ctx;Ge=!1,t.beforeCreate&&Qe(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:S,renderTracked:T,renderTriggered:k,errorCaptured:I,serverPrefetch:C,expose:x,inheritAttrs:A,components:R,directives:O,filters:N}=t,L=null;if(h&&Xe(h,s,L,e.appContext.config.unwrapInjectedRef),l)for(const r in l){const e=l[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(Ge=!0,a)for(const r in a){const e=a[r],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,l=Pn({get:t,set:o});Object.defineProperty(s,r,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const r in c)Ye(c[r],s,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{Q(t,e[t])}))}function P(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&Qe(d,e,"c"),P(Ce,f),P(xe,p),P(Ae,g),P(Re,m),P(we,v),P(be,y),P(Fe,I),P(De,T),P(Pe,k),P(Oe,b),P(Ne,E),P(Le,C),(0,i.kJ)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});S&&e.render===i.dG&&(e.render=S),null!=A&&(e.inheritAttrs=A),R&&(e.components=R),O&&(e.directives=O)}function Xe(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=it(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?Y(n.from||o,n.default,!0):Y(n.from||o):Y(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function Qe(e,t,n){o((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function Ye(e,t,n,r){const s=r.includes(".")?re(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&ee(s,n)}else if((0,i.mf)(e))ee(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>Ye(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&ee(s,r,e)}else 0}function Je(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:i.length||n||r?(l={},i.length&&i.forEach((e=>et(l,e,o,!0))),et(l,t,o)):l=t,s.set(t,l),l}function et(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&et(e,s,n,!0),i&&i.forEach((t=>et(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=tt[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const tt={data:nt,props:ot,emits:ot,methods:ot,computed:ot,beforeCreate:st,created:st,beforeMount:st,mounted:st,beforeUpdate:st,updated:st,beforeDestroy:st,beforeUnmount:st,destroyed:st,unmounted:st,activated:st,deactivated:st,errorCaptured:st,serverPrefetch:st,components:ot,directives:ot,watch:at,provide:nt,inject:rt};function nt(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function rt(e,t){return ot(it(e),it(t))}function it(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function st(e,t){return e?[...new Set([].concat(e,t))]:t}function ot(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function at(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=st(e[r],t[r]);return n}function lt(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,Qt,1),e.propsDefaults=Object.create(null),ut(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function ct(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,c=(0,r.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||l>0)||16&l){let r;ut(e,t,o,a)&&(h=!0);for(const s in c)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=ht(u,c,s,void 0,e,!0)):delete o[s]);if(a!==c)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];if(F(e.emitsOptions,s))continue;const l=t[s];if(u)if((0,i.RI)(a,s))l!==a[s]&&(a[s]=l,h=!0);else{const t=(0,i._A)(s);o[t]=ht(u,c,t,l,e,!1)}else l!==a[s]&&(a[s]=l,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function ut(e,t,n,s){const[o,a]=e.propsOptions;let l,c=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const u=t[r];let h;o&&(0,i.RI)(o,h=(0,i._A)(r))?a&&a.includes(h)?(l||(l={}))[h]=u:n[h]=u:F(e.emitsOptions,r)||r in s&&u===s[r]||(s[r]=u,c=!0)}if(a){const t=(0,r.IU)(n),s=l||i.kT;for(let r=0;r<a.length;r++){const l=a[r];n[l]=ht(o,t,l,s[l],e,!(0,i.RI)(s,l))}}return c}function ht(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(wn(s),r=i[n]=e.call(null,t),bn())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function dt(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},l=[];let c=!1;if(!(0,i.mf)(e)){const r=e=>{c=!0;const[n,r]=dt(e,t,!0);(0,i.l7)(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!c)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);ft(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(ft(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=mt(Boolean,r.type),n=mt(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&l.push(t)}}}}const u=[a,l];return r.set(e,u),u}function ft(e){return"$"!==e[0]}function pt(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function gt(e,t){return pt(e)===pt(t)}function mt(e,t){return(0,i.kJ)(t)?t.findIndex((t=>gt(t,e))):(0,i.mf)(t)&&gt(t,e)?0:-1}const vt=e=>"_"===e[0]||"$stable"===e,yt=e=>(0,i.kJ)(e)?e.map(cn):[cn(e)],wt=(e,t,n)=>{if(t._n)return t;const r=j(((...e)=>yt(t(...e))),n);return r._c=!1,r},bt=(e,t,n)=>{const r=e._ctx;for(const s in e){if(vt(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=wt(s,n,r);else if(null!=n){0;const e=yt(n);t[s]=()=>e}}},_t=(e,t)=>{const n=yt(t);e.slots.default=()=>n},Et=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):bt(t,e.slots={})}else e.slots={},t&&_t(e,t);(0,i.Nj)(e.slots,Qt,1)},St=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,bt(t,s)),a=t}else t&&(_t(e,t),a={default:1});if(o)for(const i in s)vt(i)||i in a||delete s[i]};function Tt(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let kt=0;function It(e,t){return function(n,r=null){(0,i.mf)(n)||(n=Object.assign({},n)),null==r||(0,i.Kn)(r)||(r=null);const s=Tt(),o=new Set;let a=!1;const l=s.app={_uid:kt++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Fn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(l,...t)):(0,i.mf)(e)&&(o.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(i,o,c){if(!a){0;const u=tn(n,r);return u.appContext=s,o&&t?t(u,i):e(u,i,c),a=!0,l._container=i,i.__vue_app__=l,On(u.component)||u.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l}};return l}}function Ct(e,t,n,o,a=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Ct(e,t&&((0,i.kJ)(t)?t[r]:t),n,o,a)));if(me(o)&&!a)return;const l=4&o.shapeFlag?On(o.component)||o.component.proxy:o.el,c=a?null:l,{i:u,r:h}=e;const d=t&&t.r,f=u.refs===i.kT?u.refs={}:u.refs,p=u.setupState;if(null!=d&&d!==h&&((0,i.HD)(d)?(f[d]=null,(0,i.RI)(p,d)&&(p[d]=null)):(0,r.dq)(d)&&(d.value=null)),(0,i.mf)(h))s(h,u,12,[c,f]);else{const t=(0,i.HD)(h),s=(0,r.dq)(h);if(t||s){const r=()=>{if(e.f){const n=t?f[h]:h.value;a?(0,i.kJ)(n)&&(0,i.Od)(n,l):(0,i.kJ)(n)?n.includes(l)||n.push(l):t?(f[h]=[l],(0,i.RI)(p,h)&&(p[h]=f[h])):(h.value=[l],e.k&&(f[e.k]=h.value))}else t?(f[h]=c,(0,i.RI)(p,h)&&(p[h]=c)):s&&(h.value=c,e.k&&(f[e.k]=c))};c?(r.id=-1,At(r,n)):r()}else 0}}function xt(){}const At=X;function Rt(e){return Ot(e)}function Ot(e,t){xt();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:p,setScopeId:g=i.dG,cloneNode:m,insertStaticContent:v}=e,y=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!Xt(e,t)&&(r=J(e),W(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Mt:w(e,t,n,r);break;case qt:b(e,t,n,r);break;case Ut:null==e&&_(t,n,r,o);break;case Ft:D(e,t,n,r,i,s,o,a,l);break;default:1&h?k(e,t,n,r,i,s,o,a,l):6&h?F(e,t,n,r,i,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,i,s,o,a,l,te)}null!=u&&i&&Ct(u,e&&e.ref,s,t||e,!t)},w=(e,t,n,r)=>{if(null==e)s(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},b=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},_=(e,t,n,r)=>{[e.el,e.anchor]=v(e.children,t,n,r,e.el,e.anchor)},E=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=p(e),s(e,n,r),e=i;s(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=p(e),o(e),e=n;o(t)},k=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?C(t,n,r,i,s,o,a,l):N(e,t,i,s,o,a,l)},C=(e,t,n,r,o,c,u,h)=>{let f,p;const{type:g,props:v,shapeFlag:y,transition:w,patchFlag:b,dirs:_}=e;if(e.el&&void 0!==m&&-1===b)f=e.el=m(e.el);else{if(f=e.el=l(e.type,c,v&&v.is,v),8&y?d(f,e.children):16&y&&A(e.children,f,null,r,o,c&&"foreignObject"!==g,u,h),_&&qe(e,null,r,"created"),v){for(const t in v)"value"===t||(0,i.Gg)(t)||a(f,t,null,v[t],c,e.children,r,o,Y);"value"in v&&a(f,"value",null,v.value),(p=v.onVnodeBeforeMount)&&fn(p,r,e)}x(f,e,e.scopeId,u,r)}_&&qe(e,null,r,"beforeMount");const E=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;E&&w.beforeEnter(f),s(f,t,n),((p=v&&v.onVnodeMounted)||E||_)&&At((()=>{p&&fn(p,r,e),E&&w.enter(f),_&&qe(e,null,r,"mounted")}),o)},x=(e,t,n,r,i)=>{if(n&&g(e,n),r)for(let s=0;s<r.length;s++)g(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;x(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},A=(e,t,n,r,i,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?un(e[c]):cn(e[c]);y(null,l,t,n,r,i,s,o,a)}},N=(e,t,n,r,s,o,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.kT,g=t.props||i.kT;let m;n&&Nt(n,!1),(m=g.onVnodeBeforeUpdate)&&fn(m,n,t,e),f&&qe(t,e,n,"beforeUpdate"),n&&Nt(n,!0);const v=s&&"foreignObject"!==t.type;if(h?L(e.dynamicChildren,h,c,n,r,v,o):l||B(e,t,c,null,n,r,v,o,!1),u>0){if(16&u)P(c,t,p,g,n,r,s);else if(2&u&&p.class!==g.class&&a(c,"class",null,g.class,s),4&u&&a(c,"style",p.style,g.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],l=p[o],u=g[o];u===l&&"value"!==o||a(c,o,l,u,s,e.children,n,r,Y)}}1&u&&e.children!==t.children&&d(c,t.children)}else l||null!=h||P(c,t,p,g,n,r,s);((m=g.onVnodeUpdated)||f)&&At((()=>{m&&fn(m,n,t,e),f&&qe(t,e,n,"updated")}),r)},L=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Ft||!Xt(l,c)||70&l.shapeFlag)?f(l.el):n;y(l,c,u,null,r,i,s,o,!0)}},P=(e,t,n,r,s,o,l)=>{if(n!==r){for(const c in r){if((0,i.Gg)(c))continue;const u=r[c],h=n[c];u!==h&&"value"!==c&&a(e,c,h,u,l,t.children,s,o,Y)}if(n!==i.kT)for(const c in n)(0,i.Gg)(c)||c in r||a(e,c,n[c],null,l,t.children,s,o,Y);"value"in r&&a(e,"value",n.value,r.value)}},D=(e,t,n,r,i,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(l=l?l.concat(g):g),null==e?(s(h,n,r),s(d,n,r),A(t.children,n,d,i,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(L(e.dynamicChildren,p,n,i,o,a,l),(null!=t.key||i&&t===i.subTree)&&Lt(e,t,!0)):B(e,t,n,d,i,o,a,l,u)},F=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):M(t,n,r,i,s,o,l):q(e,t,l)},M=(e,t,n,r,i,s,o)=>{const a=e.component=mn(e,r,i);if(ve(e)&&(a.ctx.renderer=te),kn(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=tn(qt);b(null,e,t,n)}}else U(a,e,t,n,i,s,o)},q=(e,t,n)=>{const r=t.component=e.component;if(K(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void V(r,t,n);r.next=t,I(r.update),r.update()}else t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,l)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:c,vnode:u}=e,h=n;0,Nt(e,!1),n?(n.el=u.el,V(e,n,l)):n=u,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&fn(t,c,n,u),Nt(e,!0);const d=$(e);0;const p=e.subTree;e.subTree=d,y(p,d,f(p.el),J(p),e,o,a),n.el=d.el,null===h&&G(e,d.el),s&&At(s,o),(t=n.props&&n.props.onVnodeUpdated)&&At((()=>fn(t,c,n,u)),o)}else{let r;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,f=me(t);if(Nt(e,!1),u&&(0,i.ir)(u),!f&&(r=c&&c.onVnodeBeforeMount)&&fn(r,d,t),Nt(e,!0),l&&re){const n=()=>{e.subTree=$(e),re(l,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=$(e);0,y(null,r,n,s,e,o,a),t.el=r.el}if(h&&At(h,o),!f&&(r=c&&c.onVnodeMounted)){const e=t;At((()=>fn(r,d,e)),o)}(256&t.shapeFlag||d&&me(d.vnode)&&256&d.vnode.shapeFlag)&&e.a&&At(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new r.qq(c,(()=>T(h)),e.scope),h=e.update=()=>u.run();h.id=e.uid,Nt(e,!0),h()},V=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ct(e,t.props,i,n),St(e,t.children,n),(0,r.Jd)(),R(void 0,e.update),(0,r.lk)()},B=(e,t,n,r,i,s,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(c,h,n,r,i,s,o,a,l);if(256&f)return void j(c,h,n,r,i,s,o,a,l)}8&p?(16&u&&Y(c,i,s),h!==c&&d(n,h)):16&u?16&p?z(c,h,n,r,i,s,o,a,l):Y(c,i,s,!0):(8&u&&d(n,""),16&p&&A(h,n,r,i,s,o,a,l))},j=(e,t,n,r,s,o,a,l,c)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=c?un(t[f]):cn(t[f]);y(e[f],r,n,null,s,o,a,l,c)}u>h?Y(e,s,o,!0,!1,d):A(t,n,r,s,o,a,l,c,d)},z=(e,t,n,r,s,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=c?un(t[u]):cn(t[u]);if(!Xt(r,i))break;y(r,i,n,null,s,o,a,l,c),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=c?un(t[f]):cn(t[f]);if(!Xt(r,i))break;y(r,i,n,null,s,o,a,l,c),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)y(null,t[u]=c?un(t[u]):cn(t[u]),n,i,s,o,a,l,c),u++}}else if(u>f)while(u<=d)W(e[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const e=t[u]=c?un(t[u]):cn(t[u]);null!=e.key&&m.set(e.key,u)}let v,w=0;const b=f-g+1;let _=!1,E=0;const S=new Array(b);for(u=0;u<b;u++)S[u]=0;for(u=p;u<=d;u++){const r=e[u];if(w>=b){W(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=f;v++)if(0===S[v-g]&&Xt(r,t[v])){i=v;break}void 0===i?W(r,s,o,!0):(S[i-g]=u+1,i>=E?E=i:_=!0,y(r,t[i],n,null,s,o,a,l,c),w++)}const T=_?Pt(S):i.Z6;for(v=T.length-1,u=b-1;u>=0;u--){const e=g+u,i=t[e],d=e+1<h?t[e+1].el:r;0===S[u]?y(null,i,n,d,s,o,a,l,c):_&&(v<0||u!==T[v]?H(i,n,d,2):v--)}}},H=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void H(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,te);if(a===Ft){s(o,t,n);for(let e=0;e<c.length;e++)H(c[e],t,n,r);return void s(e.anchor,t,n)}if(a===Ut)return void E(e,t,n);const h=2!==r&&1&u&&l;if(h)if(0===r)l.beforeEnter(o),s(o,t,n),At((()=>l.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=l,a=()=>s(o,t,n),c=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,c):c()}else s(o,t,n)},W=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Ct(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!me(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&fn(g,t,e),6&u)Q(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&qe(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,te,r):c&&(s!==Ft||h>0&&64&h)?Y(c,t,n,!1,!0):(s===Ft&&384&h||!i&&16&u)&&Y(l,t,n),r&&Z(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&At((()=>{g&&fn(g,t,e),f&&qe(e,null,t,"unmounted")}),n)},Z=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Ft)return void X(n,r);if(t===Ut)return void S(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},X=(e,t)=>{let n;while(e!==t)n=p(e),o(e),e=n;o(t)},Q=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:l}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,W(a,e,t,n)),l&&At(l,t),At((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)W(e[o],t,n,r,i)},J=e=>6&e.shapeFlag?J(e.component.subTree):128&e.shapeFlag?e.suspense.next():p(e.anchor||e.el),ee=(e,t,n)=>{null==e?t._vnode&&W(t._vnode,null,null,!0):y(t._vnode||null,e,t,null,null,null,n),O(),t._vnode=e},te={p:y,um:W,m:H,r:Z,mt:M,mc:A,pc:B,pbc:L,n:J,o:e};let ne,re;return t&&([ne,re]=t(te)),{render:ee,hydrate:ne,createApp:It(ee,ne)}}function Nt({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function Lt(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=un(s[i]),t.el=e.el),n||Lt(e,t))}}function Pt(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const Dt=e=>e.__isTeleport;const Ft=Symbol(void 0),Mt=Symbol(void 0),qt=Symbol(void 0),Ut=Symbol(void 0),Vt=[];let Bt=null;function jt(e=!1){Vt.push(Bt=e?null:[])}function $t(){Vt.pop(),Bt=Vt[Vt.length-1]||null}let zt=1;function Ht(e){zt+=e}function Kt(e){return e.dynamicChildren=zt>0?Bt||i.Z6:null,$t(),zt>0&&Bt&&Bt.push(e),e}function Wt(e,t,n,r,i,s){return Kt(en(e,t,n,r,i,s,!0))}function Gt(e,t,n,r,i){return Kt(tn(e,t,n,r,i,!0))}function Zt(e){return!!e&&!0===e.__v_isVNode}function Xt(e,t){return e.type===t.type&&e.key===t.key}const Qt="__vInternal",Yt=({key:e})=>null!=e?e:null,Jt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:M,r:e,k:t,f:!!n}:e:null;function en(e,t=null,n=null,r=0,s=null,o=(e===Ft?0:1),a=!1,l=!1){const c={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&Yt(t),ref:t&&Jt(t),scopeId:q,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(hn(c,n),128&o&&e.normalize(c)):n&&(c.shapeFlag|=(0,i.HD)(n)?8:16),zt>0&&!a&&Bt&&(c.patchFlag>0||6&o)&&32!==c.patchFlag&&Bt.push(c),c}const tn=nn;function nn(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Be||(e=qt),Zt(e)){const r=sn(e,t,!0);return n&&hn(r,n),zt>0&&!a&&Bt&&(6&r.shapeFlag?Bt[Bt.indexOf(e)]=r:Bt.push(r)),r.patchFlag|=-2,r}if(Ln(e)&&(e=e.__vccOpts),t){t=rn(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const l=(0,i.HD)(e)?1:Z(e)?128:Dt(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return en(e,t,n,s,o,l,a,!0)}function rn(e){return e?(0,r.X3)(e)||Qt in e?(0,i.l7)({},e):e:null}function sn(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,l=t?dn(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&Yt(l),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(Jt(t)):[s,Jt(t)]:Jt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Ft?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&sn(e.ssContent),ssFallback:e.ssFallback&&sn(e.ssFallback),el:e.el,anchor:e.anchor};return c}function on(e=" ",t=0){return tn(Mt,null,e,t)}function an(e,t){const n=tn(Ut,null,e);return n.staticCount=t,n}function ln(e="",t=!1){return t?(jt(),Gt(qt,null,e)):tn(qt,null,e)}function cn(e){return null==e||"boolean"===typeof e?tn(qt):(0,i.kJ)(e)?tn(Ft,null,e.slice()):"object"===typeof e?un(e):tn(Mt,null,String(e))}function un(e){return null===e.el||e.memo?e:sn(e)}function hn(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),hn(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||Qt in t?3===r&&M&&(1===M.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=M}}else(0,i.mf)(t)?(t={default:t,_ctx:M},n=32):(t=String(t),64&r?(n=16,t=[on(t)]):n=8);e.children=t,e.shapeFlag|=n}function dn(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];!s||n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function fn(e,t,n,r=null){o(e,t,7,[n,r])}const pn=Tt();let gn=0;function mn(e,t,n){const s=e.type,o=(t?t.appContext:e.appContext)||pn,a={uid:gn++,vnode:e,type:s,parent:t,appContext:o,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(o.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:dt(s,o),emitsOptions:D(s,o),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:s.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return a.ctx={_:a},a.root=t?t.root:a,a.emit=P.bind(null,a),e.ce&&e.ce(a),a}let vn=null;const yn=()=>vn||M,wn=e=>{vn=e,e.scope.on()},bn=()=>{vn&&vn.scope.off(),vn=null};function _n(e){return 4&e.vnode.shapeFlag}let En,Sn,Tn=!1;function kn(e,t=!1){Tn=t;const{props:n,children:r}=e.vnode,i=_n(e);lt(e,n,i,t),Et(e,r);const s=i?In(e,t):void 0;return Tn=!1,s}function In(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,We));const{setup:o}=n;if(o){const n=e.setupContext=o.length>1?Rn(e):null;wn(e),(0,r.Jd)();const l=s(o,e,0,[e.props,n]);if((0,r.lk)(),bn(),(0,i.tI)(l)){if(l.then(bn,bn),t)return l.then((n=>{Cn(e,n,t)})).catch((t=>{a(t,e,0)}));e.asyncDep=l}else Cn(e,l,t)}else xn(e,t)}function Cn(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),xn(e,n)}function xn(e,t,n){const s=e.type;if(!e.render){if(!t&&En&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=En(t,l)}}e.render=s.render||i.dG,Sn&&Sn(e)}wn(e),(0,r.Jd)(),Ze(e),(0,r.lk)(),bn()}function An(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Rn(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=An(e))},slots:e.slots,emit:e.emit,expose:t}}function On(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in Ke?Ke[n](e):void 0}}))}function Nn(e,t=!0){return(0,i.mf)(e)?e.displayName||e.name:e.name||t&&e.__name}function Ln(e){return(0,i.mf)(e)&&"__vccOpts"in e}const Pn=(e,t)=>(0,r.Fl)(e,t,Tn);function Dn(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?Zt(t)?tn(e,null,[t]):tn(e,t):tn(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&Zt(n)&&(n=[n]),tn(e,t,n))}Symbol("");const Fn="3.2.37"},8880:(e,t,n)=>{"use strict";n.d(t,{F8:()=>ce,W3:()=>ie,ri:()=>pe,uT:()=>q});var r=n(2323),i=n(3673),s=n(1959);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,l=a&&a.createElement("template"),c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r,i,s){const o=n?n.previousSibling:t.lastChild;if(i&&(i===s||i.nextSibling)){while(1)if(t.insertBefore(i.cloneNode(!0),n),i===s||!(i=i.nextSibling))break}else{l.innerHTML=r?`<svg>${e}</svg>`:e;const i=l.content;if(r){const e=i.firstChild;while(e.firstChild)i.appendChild(e.firstChild);i.removeChild(e)}t.insertBefore(i,n)}return[o?o.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)f(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(null==n&&(n=""),t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],g={};function m(e,t){const n=g[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return g[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return g[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function w(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}let l=!1;if(""===n||null==n){const i=typeof e[t];"boolean"===i?n=(0,r.yA)(n):null==n&&"string"===i?(n="",l=!0):"number"===i&&(n=0,l=!0)}try{e[t]=n}catch(c){0}l&&e.removeAttribute(t)}const[b,_]=(()=>{let e=Date.now,t=!1;if("undefined"!==typeof window){Date.now()>document.createEvent("Event").timeStamp&&(e=performance.now.bind(performance));const n=navigator.userAgent.match(/firefox\/(\d+)/i);t=!!(n&&Number(n[1])<=53)}return[e,t]})();let E=0;const S=Promise.resolve(),T=()=>{E=0},k=()=>E||(S.then(T),E=b());function I(e,t,n,r){e.addEventListener(t,n,r)}function C(e,t,n,r){e.removeEventListener(t,n,r)}function x(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=R(t);if(r){const o=s[t]=O(r,i);I(e,n,o,a)}else o&&(C(e,n,o,a),s[t]=void 0)}}const A=/(?:Once|Passive|Capture)$/;function R(e){let t;if(A.test(e)){let n;t={};while(n=e.match(A))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function O(e,t){const n=e=>{const r=e.timeStamp||b();(_||r>=n.attached-1)&&(0,i.$d)(N(e,n.value),t,5,[e])};return n.value=e,n.attached=k(),n}function N(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e&&e(t)))}return t}const L=/^on[a-z]/,P=(e,t,n,i,s=!1,o,a,l,c)=>{"class"===t?u(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||x(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,i,s))?w(e,t,i,o,a,l,c):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function D(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&L.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&"translate"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!L.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const F="transition",M="animation",q=(e,{slots:t})=>(0,i.h)(i.P$,$(e),t);q.displayName="Transition";const U={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},V=q.props=(0,r.l7)({},i.P$.props,U),B=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},j=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function $(e){const t={};for(const r in e)r in U||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=z(s),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:E,onBeforeAppear:S=y,onAppear:T=w,onAppearCancelled:k=b}=t,I=(e,t,n)=>{W(e,t?h:l),W(e,t?u:a),n&&n()},C=(e,t)=>{e._isLeaving=!1,W(e,d),W(e,p),W(e,f),t&&t()},x=e=>(t,n)=>{const r=e?T:w,s=()=>I(t,e,n);B(r,[t,s]),G((()=>{W(t,e?c:o),K(t,e?h:l),j(r)||X(t,i,m,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){B(y,[e]),K(e,o),K(e,a)},onBeforeAppear(e){B(S,[e]),K(e,c),K(e,u)},onEnter:x(!1),onAppear:x(!0),onLeave(e,t){e._isLeaving=!0;const n=()=>C(e,t);K(e,d),ee(),K(e,f),G((()=>{e._isLeaving&&(W(e,d),K(e,p),j(_)||X(e,i,v,n))})),B(_,[e,n])},onEnterCancelled(e){I(e,!1),B(b,[e])},onAppearCancelled(e){I(e,!0),B(k,[e])},onLeaveCancelled(e){C(e),B(E,[e])}})}function z(e){if(null==e)return null;if((0,r.Kn)(e))return[H(e.enter),H(e.leave)];{const t=H(e);return[t,t]}}function H(e){const t=(0,r.He)(e);return t}function K(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function W(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function G(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let Z=0;function X(e,t,n,r){const i=e._endId=++Z,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=Q(e,t);if(!o)return r();const c=o+"end";let u=0;const h=()=>{e.removeEventListener(c,d),s()},d=t=>{t.target===e&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),e.addEventListener(c,d)}function Q(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(F+"Delay"),s=r(F+"Duration"),o=Y(i,s),a=r(M+"Delay"),l=r(M+"Duration"),c=Y(a,l);let u=null,h=0,d=0;t===F?o>0&&(u=F,h=o,d=s.length):t===M?c>0&&(u=M,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?F:M:null,d=u?u===F?s.length:l.length:0);const f=u===F&&/\b(transform|all)(,|$)/.test(n[F+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function Y(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>J(t)+J(e[n]))))}function J(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ee(){return document.body.offsetHeight}const te=new WeakMap,ne=new WeakMap,re={name:"TransitionGroup",props:(0,r.l7)({},V,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!le(o[0].el,n.vnode.el,t))return;o.forEach(se),o.forEach(oe);const r=o.filter(ae);ee(),r.forEach((e=>{const n=e.el,r=n.style;K(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,W(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const l=(0,s.IU)(e),c=$(l);let u=l.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,c,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,c,r,n)),te.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(u,null,a)}}},ie=re;function se(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function oe(e){ne.set(e,e.el.getBoundingClientRect())}function ae(e){const t=te.get(e),n=ne.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function le(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=Q(r);return i.removeChild(r),s}const ce={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):ue(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),ue(e,!0),r.enter(e)):r.leave(e,(()=>{ue(e,!1)})):ue(e,t))},beforeUnmount(e,{value:t}){ue(e,t)}};function ue(e,t){e.style.display=t?e._vod:"none"}const he=(0,r.l7)({patchProp:P},c);let de;function fe(){return de||(de=(0,i.Us)(he))}const pe=(...e)=>{const t=fe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ge(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ge(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},2323:(e,t,n)=>{"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{C_:()=>f,DM:()=>N,E9:()=>re,F7:()=>T,Gg:()=>z,HD:()=>D,He:()=>te,Kn:()=>M,NO:()=>E,Nj:()=>ee,Od:()=>C,PO:()=>j,Pq:()=>a,RI:()=>A,S0:()=>$,W7:()=>B,WV:()=>g,Z6:()=>b,_A:()=>W,_N:()=>O,aU:()=>Y,dG:()=>_,e1:()=>s,fY:()=>r,hR:()=>Q,hq:()=>m,ir:()=>J,j5:()=>c,kC:()=>X,kJ:()=>R,kT:()=>w,l7:()=>I,mf:()=>P,rs:()=>Z,tI:()=>q,tR:()=>k,yA:()=>l,yk:()=>F,zw:()=>v});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function l(e){return!!e||""===e}function c(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=D(r)?d(r):c(r);if(i)for(const e in i)t[e]=i[e]}return t}return D(e)||M(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(D(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(M(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=g(e[r],t[r]);return n}function g(e,t){if(e===t)return!0;let n=L(e),r=L(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=F(e),r=F(t),n||r)return e===t;if(n=R(e),r=R(t),n||r)return!(!n||!r)&&p(e,t);if(n=M(e),r=M(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!g(e[n],t[n]))return!1}}return String(e)===String(t)}function m(e,t){return e.findIndex((e=>g(e,t)))}const v=e=>D(e)?e:null==e?"":R(e)||M(e)&&(e.toString===U||!P(e.toString))?JSON.stringify(e,y,2):String(e),y=(e,t)=>t&&t.__v_isRef?y(e,t.value):O(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:N(t)?{[`Set(${t.size})`]:[...t.values()]}:!M(t)||R(t)||j(t)?t:String(t),w={},b=[],_=()=>{},E=()=>!1,S=/^on[^a-z]/,T=e=>S.test(e),k=e=>e.startsWith("onUpdate:"),I=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},x=Object.prototype.hasOwnProperty,A=(e,t)=>x.call(e,t),R=Array.isArray,O=e=>"[object Map]"===V(e),N=e=>"[object Set]"===V(e),L=e=>"[object Date]"===V(e),P=e=>"function"===typeof e,D=e=>"string"===typeof e,F=e=>"symbol"===typeof e,M=e=>null!==e&&"object"===typeof e,q=e=>M(e)&&P(e.then)&&P(e.catch),U=Object.prototype.toString,V=e=>U.call(e),B=e=>V(e).slice(8,-1),j=e=>"[object Object]"===V(e),$=e=>D(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,z=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},K=/-(\w)/g,W=H((e=>e.replace(K,((e,t)=>t?t.toUpperCase():"")))),G=/\B([A-Z])/g,Z=H((e=>e.replace(G,"-$1").toLowerCase())),X=H((e=>e.charAt(0).toUpperCase()+e.slice(1))),Q=H((e=>e?`on${X(e)}`:"")),Y=(e,t)=>!Object.is(e,t),J=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},5096:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(3673),i=n(4554),s=n(2417),o=n(908),a=n(7657);const l=(0,o.L)({name:"QAvatar",props:{...s.LU,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const n=(0,s.ZP)(e),o=(0,r.Fl)((()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(!0===e.square?" q-avatar--square":!0===e.rounded?" rounded-borders":""))),l=(0,r.Fl)((()=>e.fontSize?{fontSize:e.fontSize}:null));return()=>{const s=void 0!==e.icon?[(0,r.h)(i.Z,{name:e.icon})]:void 0;return(0,r.h)("div",{class:o.value,style:n.value},[(0,r.h)("div",{class:"q-avatar__content row flex-center overflow-hidden",style:l.value},(0,a.pf)(t.default,s))])}}})},8761:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(3673),i=n(8240),s=n(908),o=n(7657);const a=(0,s.L)({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>{const t=["unelevated","outline","flat","rounded","push","stretch","glossy"].filter((t=>!0===e[t])).map((e=>`q-btn-group--${e}`)).join(" ");return"q-btn-group row no-wrap"+(t.length>0?" "+t:"")+(!0===e.spread?" q-btn-group--spread":" inline")}));return()=>(0,r.h)("div",{class:n.value},(0,o.KR)(t.default))}});var l=n(9550);const c=(0,s.L)({name:"QBtnToggle",props:{...l.Fz,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every((e=>("label"in e||"icon"in e||"slot"in e)&&"value"in e))},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:t,emit:n}){const s=(0,r.Fl)((()=>void 0!==e.options.find((t=>t.value===e.modelValue)))),c=(0,r.Fl)((()=>({type:"hidden",name:e.name,value:e.modelValue}))),u=(0,l.eX)(c),h=(0,r.Fl)((()=>e.options.map(((t,n)=>{const{attrs:r,value:i,slot:s,...o}=t;return{slot:s,props:{key:n,onClick(e){d(i,t,e)},"aria-pressed":i===e.modelValue?"true":"false",...r,...o,outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,unelevated:e.unelevated,dense:e.dense,disable:!0===e.disable||!0===o.disable,color:i===e.modelValue?f(o,"toggleColor"):f(o,"color"),textColor:i===e.modelValue?f(o,"toggleTextColor"):f(o,"textColor"),noCaps:!0===f(o,"noCaps"),noWrap:!0===f(o,"noWrap"),size:f(o,"size"),padding:f(o,"padding"),ripple:f(o,"ripple"),stack:!0===f(o,"stack"),stretch:!0===f(o,"stretch")}}}))));function d(t,r,i){!0!==e.readonly&&(e.modelValue===t?!0===e.clearable&&(n("update:modelValue",null,null),n("clear")):n("update:modelValue",t,r),n("click",i))}function f(t,n){return void 0===t[n]?e[n]:t[n]}function p(){const n=h.value.map((e=>(0,r.h)(i.Z,e.props,void 0!==e.slot?t[e.slot]:void 0)));return void 0!==e.name&&!0!==e.disable&&!0===s.value&&u(n,"push"),(0,o.vs)(t.default,n)}return()=>(0,r.h)(a,{class:"q-btn-toggle",outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,stretch:e.stretch,unelevated:e.unelevated,glossy:e.glossy,spread:e.spread},p)}})},8240:(e,t,n)=>{"use strict";n.d(t,{Z:()=>I});var r=n(3673),i=n(1959),s=n(8880),o=n(4554),a=n(9754),l=n(6489),c=(n(3610),n(9992)),u=n(2417),h=n(7277);const d={none:0,xs:4,sm:8,md:16,lg:24,xl:32},f={xs:8,sm:10,md:14,lg:20,xl:24},p=["button","submit","reset"],g=/[^\s]\/[^\s]/,m={...u.LU,...h.$,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...c.jO.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function v(e){const t=(0,u.ZP)(e,f),n=(0,c.ZP)(e),{hasRouterLink:i,hasLink:s,linkTag:o,linkProps:a,navigateToRouterLink:l}=(0,h.Z)("button"),m=(0,r.Fl)((()=>{const n=!1===e.fab&&!1===e.fabMini?t.value:{};return void 0!==e.padding?Object.assign({},n,{padding:e.padding.split(/\s+/).map((e=>e in d?d[e]+"px":e)).join(" "),minWidth:"0",minHeight:"0"}):n})),v=(0,r.Fl)((()=>!0===e.rounded||!0===e.fab||!0===e.fabMini)),y=(0,r.Fl)((()=>!0!==e.disable&&!0!==e.loading)),w=(0,r.Fl)((()=>!0===y.value?e.tabindex||0:-1)),b=(0,r.Fl)((()=>!0===e.flat?"flat":!0===e.outline?"outline":!0===e.push?"push":!0===e.unelevated?"unelevated":"standard")),_=(0,r.Fl)((()=>{const t={tabindex:w.value};return!0===s.value?Object.assign(t,a.value):!0===p.includes(e.type)&&(t.type=e.type),"a"===o.value?(!0===e.disable?t["aria-disabled"]="true":void 0===t.href&&(t.role="button"),!0!==i.value&&!0===g.test(e.type)&&(t.type=e.type)):!0===e.disable&&(t.disabled="",t["aria-disabled"]="true"),!0===e.loading&&void 0!==e.percentage&&Object.assign(t,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),t})),E=(0,r.Fl)((()=>{let t;return void 0!==e.color?t=!0===e.flat||!0===e.outline?`text-${e.textColor||e.color}`:`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(t=`text-${e.textColor}`),`q-btn--${b.value} q-btn--`+(!0===e.round?"round":"rectangle"+(!0===v.value?" q-btn--rounded":""))+(void 0!==t?" "+t:"")+(!0===y.value?" q-btn--actionable q-focusable q-hoverable":!0===e.disable?" disabled":"")+(!0===e.fab?" q-btn--fab":!0===e.fabMini?" q-btn--fab-mini":"")+(!0===e.noCaps?" q-btn--no-uppercase":"")+(!0===e.dense?" q-btn--dense":"")+(!0===e.stretch?" no-border-radius self-stretch":"")+(!0===e.glossy?" glossy":"")})),S=(0,r.Fl)((()=>n.value+(!0===e.stack?" column":" row")+(!0===e.noWrap?" no-wrap text-no-wrap":"")+(!0===e.loading?" q-btn__content--hidden":"")));return{classes:E,style:m,innerClasses:S,attributes:_,hasRouterLink:i,hasLink:s,linkTag:o,navigateToRouterLink:l,isActionable:y}}var y=n(908),w=n(7657),b=n(4716),_=n(1436);const{passiveCapture:E}=b.rU;let S=null,T=null,k=null;const I=(0,y.L)({name:"QBtn",props:{...m,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:c}=(0,r.FN)(),{classes:u,style:h,innerClasses:d,attributes:f,hasRouterLink:p,hasLink:g,linkTag:m,navigateToRouterLink:y,isActionable:I}=v(e),C=(0,i.iH)(null),x=(0,i.iH)(null);let A,R,O=null;const N=(0,r.Fl)((()=>void 0!==e.label&&null!==e.label&&""!==e.label)),L=(0,r.Fl)((()=>!0!==e.disable&&!1!==e.ripple&&{keyCodes:!0===g.value?[13,32]:[13],...!0===e.ripple?{}:e.ripple})),P=(0,r.Fl)((()=>({center:e.round}))),D=(0,r.Fl)((()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}})),F=(0,r.Fl)((()=>!0===e.loading?{onMousedown:z,onTouchstartPassive:z,onClick:z,onKeydown:z,onKeyup:z}:!0===I.value?{onClick:q,onKeydown:U,onMousedown:B,onTouchstart:V}:{onClick:b.NS})),M=(0,r.Fl)((()=>({ref:C,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:h.value,...f.value,...F.value})));function q(t){if(null!==C.value){if(void 0!==t){if(!0===t.defaultPrevented)return;const n=document.activeElement;if("submit"===e.type&&n!==document.body&&!1===C.value.contains(n)&&!1===n.contains(C.value)){C.value.focus();const e=()=>{document.removeEventListener("keydown",b.NS,!0),document.removeEventListener("keyup",e,E),null!==C.value&&C.value.removeEventListener("blur",e,E)};document.addEventListener("keydown",b.NS,!0),document.addEventListener("keyup",e,E),C.value.addEventListener("blur",e,E)}}if(!0===p.value){const e=()=>{t.__qNavigate=!0,y(t)};n("click",t,e),!0!==t.defaultPrevented&&e()}else n("click",t)}}function U(e){null!==C.value&&(n("keydown",e),!0===(0,_.So)(e,[13,32])&&T!==C.value&&(null!==T&&$(),!0!==e.defaultPrevented&&(C.value.focus(),T=C.value,C.value.classList.add("q-btn--active"),document.addEventListener("keyup",j,!0),C.value.addEventListener("blur",j,E)),(0,b.NS)(e)))}function V(e){null!==C.value&&(n("touchstart",e),!0!==e.defaultPrevented&&(S!==C.value&&(null!==S&&$(),S=C.value,O=e.target,O.addEventListener("touchcancel",j,E),O.addEventListener("touchend",j,E)),A=!0,clearTimeout(R),R=setTimeout((()=>{A=!1}),200)))}function B(e){null!==C.value&&(e.qSkipRipple=!0===A,n("mousedown",e),!0!==e.defaultPrevented&&k!==C.value&&(null!==k&&$(),k=C.value,C.value.classList.add("q-btn--active"),document.addEventListener("mouseup",j,E)))}function j(e){if(null!==C.value&&(void 0===e||"blur"!==e.type||document.activeElement!==C.value)){if(void 0!==e&&"keyup"===e.type){if(T===C.value&&!0===(0,_.So)(e,[13,32])){const t=new MouseEvent("click",e);t.qKeyEvent=!0,!0===e.defaultPrevented&&(0,b.X$)(t),!0===e.cancelBubble&&(0,b.sT)(t),C.value.dispatchEvent(t),(0,b.NS)(e),e.qKeyEvent=!0}n("keyup",e)}$()}}function $(e){const t=x.value;!0===e||S!==C.value&&k!==C.value||null===t||t===document.activeElement||(t.setAttribute("tabindex",-1),t.focus()),S===C.value&&(null!==O&&(O.removeEventListener("touchcancel",j,E),O.removeEventListener("touchend",j,E)),S=O=null),k===C.value&&(document.removeEventListener("mouseup",j,E),k=null),T===C.value&&(document.removeEventListener("keyup",j,!0),null!==C.value&&C.value.removeEventListener("blur",j,E),T=null),null!==C.value&&C.value.classList.remove("q-btn--active")}function z(e){(0,b.NS)(e),e.qSkipRipple=!0}return(0,r.Jd)((()=>{$(!0)})),Object.assign(c,{click:q}),()=>{let n=[];void 0!==e.icon&&n.push((0,r.h)(o.Z,{name:e.icon,left:!1===e.stack&&!0===N.value,role:"img","aria-hidden":"true"})),!0===N.value&&n.push((0,r.h)("span",{class:"block"},[e.label])),n=(0,w.vs)(t.default,n),void 0!==e.iconRight&&!1===e.round&&n.push((0,r.h)(o.Z,{name:e.iconRight,right:!1===e.stack&&!0===N.value,role:"img","aria-hidden":"true"}));const i=[(0,r.h)("span",{class:"q-focus-helper",ref:x})];return!0===e.loading&&void 0!==e.percentage&&i.push((0,r.h)("span",{class:"q-btn__progress absolute-full overflow-hidden"+(!0===e.darkPercentage?" q-btn__progress--dark":"")},[(0,r.h)("span",{class:"q-btn__progress-indicator fit block",style:D.value})])),i.push((0,r.h)("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+d.value},n)),null!==e.loading&&i.push((0,r.h)(s.uT,{name:"q-transition--fade"},(()=>!0===e.loading?[(0,r.h)("span",{key:"loading",class:"absolute-full flex flex-center"},void 0!==t.loading?t.loading():[(0,r.h)(a.Z)])]:null))),(0,r.wy)((0,r.h)(m.value,M.value,i),[[l.Z,L.value,void 0,P.value]])}}})},151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(2236),s=n(908),o=n(7657);const a=(0,s.L)({name:"QCard",props:{...i.S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const n=(0,r.FN)(),s=(0,i.Z)(e,n.proxy.$q),a=(0,r.Fl)((()=>"q-card"+(!0===s.value?" q-card--dark q-dark":"")+(!0===e.bordered?" q-card--bordered":"")+(!0===e.square?" q-card--square no-border-radius":"")+(!0===e.flat?" q-card--flat no-shadow":"")));return()=>(0,r.h)(e.tag,{class:a.value},(0,o.KR)(t.default))}})},9367:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(9992),s=n(908),o=n(7657);const a=(0,s.L)({name:"QCardActions",props:{...i.jO,vertical:Boolean},setup(e,{slots:t}){const n=(0,i.ZP)(e),s=(0,r.Fl)((()=>`q-card__actions ${n.value} q-card__actions--`+(!0===e.vertical?"vert column":"horiz row")));return()=>(0,r.h)("div",{class:s.value},(0,o.KR)(t.default))}})},5589:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908),s=n(7657);const o=(0,i.L)({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-card__section q-card__section--"+(!0===e.horizontal?"horiz row no-wrap":"vert")));return()=>(0,r.h)(e.tag,{class:n.value},(0,s.KR)(t.default))}})},7030:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(3673),i=n(4554),s=n(6489),o=n(2236),a=n(2417),l=n(908),c=n(4716),u=n(7657);const h={xs:8,sm:10,md:14,lg:20,xl:24},d=(0,l.L)({name:"QChip",props:{...o.S,...a.LU,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:n}){const{proxy:{$q:l}}=(0,r.FN)(),d=(0,o.Z)(e,l),f=(0,a.ZP)(e,h),p=(0,r.Fl)((()=>!0===e.selected||void 0!==e.icon)),g=(0,r.Fl)((()=>!0===e.selected?e.iconSelected||l.iconSet.chip.selected:e.icon)),m=(0,r.Fl)((()=>e.iconRemove||l.iconSet.chip.remove)),v=(0,r.Fl)((()=>!1===e.disable&&(!0===e.clickable||null!==e.selected))),y=(0,r.Fl)((()=>{const t=!0===e.outline&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(!1===e.outline&&void 0!==e.color?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(!0===e.disable?" disabled":"")+(!0===e.dense?" q-chip--dense":"")+(!0===e.outline?" q-chip--outline":"")+(!0===e.selected?" q-chip--selected":"")+(!0===v.value?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(!0===e.square?" q-chip--square":"")+(!0===d.value?" q-chip--dark q-dark":"")})),w=(0,r.Fl)((()=>!0===e.disable?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0}));function b(e){13===e.keyCode&&_(e)}function _(t){e.disable||(n("update:selected",!e.selected),n("click",t))}function E(t){void 0!==t.keyCode&&13!==t.keyCode||((0,c.NS)(t),!1===e.disable&&(n("update:modelValue",!1),n("remove")))}function S(){const n=[];!0===v.value&&n.push((0,r.h)("div",{class:"q-focus-helper"})),!0===p.value&&n.push((0,r.h)(i.Z,{class:"q-chip__icon q-chip__icon--left",name:g.value}));const s=void 0!==e.label?[(0,r.h)("div",{class:"ellipsis"},[e.label])]:void 0;return n.push((0,r.h)("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},(0,u.pf)(t.default,s))),e.iconRight&&n.push((0,r.h)(i.Z,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),!0===e.removable&&n.push((0,r.h)(i.Z,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:m.value,...w.value,onClick:E,onKeyup:E})),n}return()=>{if(!1===e.modelValue)return;const t={class:y.value,style:f.value};return!0===v.value&&Object.assign(t,w.value,{onClick:_,onKeyup:b}),(0,u.Jl)("div",t,S(),"ripple",!1!==e.ripple&&!0!==e.disable,(()=>[[s.Z,e.ripple]]))}}})},826:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});n(3610),n(71);var r=n(3673),i=n(1959),s=n(6583);function o(e,t,n){let i;function o(){void 0!==i&&(s.Z.remove(i),i=void 0)}return(0,r.Jd)((()=>{!0===e.value&&o()})),{removeFromHistory:o,addToHistory(){i={condition:()=>!0===n.value,handler:t},s.Z.add(i)}}}var a=n(7445);const l={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},c=["before-show","show","before-hide","hide"];function u({showing:e,canShow:t,hideOnRouteChange:n,handleShow:i,handleHide:s,processOnMount:o}){const l=(0,r.FN)(),{props:c,emit:u,proxy:h}=l;let d;function f(t){!0===e.value?m(t):p(t)}function p(e){if(!0===c.disable||void 0!==e&&!0===e.qAnchorHandled||void 0!==t&&!0!==t(e))return;const n=void 0!==c["onUpdate:modelValue"];!0===n&&(u("update:modelValue",!0),d=e,(0,r.Y3)((()=>{d===e&&(d=void 0)}))),null!==c.modelValue&&!1!==n||g(e)}function g(t){!0!==e.value&&(e.value=!0,u("before-show",t),void 0!==i?i(t):u("show",t))}function m(e){if(!0===c.disable)return;const t=void 0!==c["onUpdate:modelValue"];!0===t&&(u("update:modelValue",!1),d=e,(0,r.Y3)((()=>{d===e&&(d=void 0)}))),null!==c.modelValue&&!1!==t||v(e)}function v(t){!1!==e.value&&(e.value=!1,u("before-hide",t),void 0!==s?s(t):u("hide",t))}function y(t){if(!0===c.disable&&!0===t)void 0!==c["onUpdate:modelValue"]&&u("update:modelValue",!1);else if(!0===t!==e.value){const e=!0===t?g:v;e(d)}}(0,r.YP)((()=>c.modelValue),y),void 0!==n&&!0===(0,a.Rb)(l)&&(0,r.YP)((()=>h.$route.fullPath),(()=>{!0===n.value&&!0===e.value&&m()})),!0===o&&(0,r.bv)((()=>{y(c.modelValue)}));const w={show:p,hide:m,toggle:f};return Object.assign(h,w),w}var h=n(4716),d=n(8400),f=n(4688);let p,g,m,v,y,w,b=0,_=!1;function E(e){S(e)&&(0,h.NS)(e)}function S(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=(0,h.AZ)(e),n=e.shiftKey&&!e.deltaX,r=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=n||r?e.deltaY:e.deltaX;for(let s=0;s<t.length;s++){const e=t[s];if((0,d.QA)(e,r))return r?i<0&&0===e.scrollTop||i>0&&e.scrollTop+e.clientHeight===e.scrollHeight:i<0&&0===e.scrollLeft||i>0&&e.scrollLeft+e.clientWidth===e.scrollWidth}return!0}function T(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function k(e){!0!==_&&(_=!0,requestAnimationFrame((()=>{_=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;void 0!==m&&t===window.innerHeight||(m=n-t,document.scrollingElement.scrollTop=r),r>m&&(document.scrollingElement.scrollTop-=Math.ceil((r-m)/8))})))}function I(e){const t=document.body,n=void 0!==window.visualViewport;if("add"===e){const{overflowY:e,overflowX:r}=window.getComputedStyle(t);p=(0,d.OI)(window),g=(0,d.u3)(window),v=t.style.left,y=t.style.top,t.style.left=`-${p}px`,t.style.top=`-${g}px`,"hidden"!==r&&("scroll"===r||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),"hidden"!==e&&("scroll"===e||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,!0===f.Lp.is.ios&&(!0===n?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",k,h.rU.passiveCapture),window.visualViewport.addEventListener("scroll",k,h.rU.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",T,h.rU.passiveCapture))}!0===f.Lp.is.desktop&&!0===f.Lp.is.mac&&window[`${e}EventListener`]("wheel",E,h.rU.notPassive),"remove"===e&&(!0===f.Lp.is.ios&&(!0===n?(window.visualViewport.removeEventListener("resize",k,h.rU.passiveCapture),window.visualViewport.removeEventListener("scroll",k,h.rU.passiveCapture)):window.removeEventListener("scroll",T,h.rU.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=v,t.style.top=y,window.scrollTo(p,g),m=void 0)}function C(e){let t="add";if(!0===e){if(b++,void 0!==w)return clearTimeout(w),void(w=void 0);if(b>1)return}else{if(0===b)return;if(b--,b>0)return;if(t="remove",!0===f.Lp.is.ios&&!0===f.Lp.is.nativeMobile)return clearTimeout(w),void(w=setTimeout((()=>{I(t),w=void 0}),100))}I(t)}function x(){let e;return{preventBodyScroll(t){t===e||void 0===e&&!0!==t||(e=t,C(t))}}}function A(){let e;return(0,r.Jd)((()=>{clearTimeout(e)})),{registerTimeout(t,n){clearTimeout(e),e=setTimeout(t,n)},removeTimeout(){clearTimeout(e)}}}var R=n(2236),O=n(908);const N={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},L=Object.keys(N);function P(e){const t={};for(const n of L)!0===e[n]&&(t[n]=!0);return 0===Object.keys(t).length?N:(!0===t.horizontal?t.left=t.right=!0:!0===t.left&&!0===t.right&&(t.horizontal=!0),!0===t.vertical?t.up=t.down=!0:!0===t.up&&!0===t.down&&(t.vertical=!0),!0===t.horizontal&&!0===t.vertical&&(t.all=!0),t)}function D(e,t){return void 0===t.event&&void 0!==e.target&&!0!==e.target.draggable&&"function"===typeof t.handler&&"INPUT"!==e.target.nodeName.toUpperCase()&&(void 0===e.qClonedBy||-1===e.qClonedBy.indexOf(t.uid))}function F(){if(void 0!==window.getSelection){const e=window.getSelection();void 0!==e.empty?e.empty():void 0!==e.removeAllRanges&&(e.removeAllRanges(),!0!==f.ZP.is.mobile&&e.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}function M(e,t,n){const r=(0,h.FK)(e);let i,s=r.left-t.event.x,o=r.top-t.event.y,a=Math.abs(s),l=Math.abs(o);const c=t.direction;!0===c.horizontal&&!0!==c.vertical?i=s<0?"left":"right":!0!==c.horizontal&&!0===c.vertical?i=o<0?"up":"down":!0===c.up&&o<0?(i="up",a>l&&(!0===c.left&&s<0?i="left":!0===c.right&&s>0&&(i="right"))):!0===c.down&&o>0?(i="down",a>l&&(!0===c.left&&s<0?i="left":!0===c.right&&s>0&&(i="right"))):!0===c.left&&s<0?(i="left",a<l&&(!0===c.up&&o<0?i="up":!0===c.down&&o>0&&(i="down"))):!0===c.right&&s>0&&(i="right",a<l&&(!0===c.up&&o<0?i="up":!0===c.down&&o>0&&(i="down")));let u=!1;if(void 0===i&&!1===n){if(!0===t.event.isFirst||void 0===t.event.lastDir)return{};i=t.event.lastDir,u=!0,"left"===i||"right"===i?(r.left-=s,a=0,s=0):(r.top-=o,l=0,o=0)}return{synthetic:u,payload:{evt:e,touch:!0!==t.event.mouse,mouse:!0===t.event.mouse,position:r,direction:i,isFirst:t.event.isFirst,isFinal:!0===n,duration:Date.now()-t.event.time,distance:{x:a,y:l},offset:{x:s,y:o},delta:{x:r.left-t.event.lastX,y:r.top-t.event.lastY}}}}N.all=!0;let q=0;const U=(0,O.f)({name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(!0!==n.mouse&&!0!==f.Lp.has.touch)return;function r(e,t){!0===n.mouse&&!0===t?(0,h.NS)(e):(!0===n.stop&&(0,h.sT)(e),!0===n.prevent&&(0,h.X$)(e))}const i={uid:"qvtp_"+q++,handler:t,modifiers:n,direction:P(n),noop:h.ZT,mouseStart(e){D(e,i)&&(0,h.du)(e)&&((0,h.M0)(i,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),i.start(e,!0))},touchStart(e){if(D(e,i)){const t=e.target;(0,h.M0)(i,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","passiveCapture"],[t,"touchend","end","passiveCapture"]]),i.start(e)}},start(t,r){if(!0===f.Lp.is.firefox&&(0,h.Jf)(e,!0),i.lastEvt=t,!0===r||!0===n.stop){if(!0!==i.direction.all&&(!0!==r||!0!==i.modifiers.mouseAllDir)){const e=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);!0===t.defaultPrevented&&(0,h.X$)(e),!0===t.cancelBubble&&(0,h.sT)(e),Object.assign(e,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:void 0===t.qClonedBy?[i.uid]:t.qClonedBy.concat(i.uid)}),i.initialEvent={target:t.target,event:e}}(0,h.sT)(t)}const{left:s,top:o}=(0,h.FK)(t);i.event={x:s,y:o,time:Date.now(),mouse:!0===r,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:o}},move(e){if(void 0===i.event)return;const t=(0,h.FK)(e),s=t.left-i.event.x,o=t.top-i.event.y;if(0===s&&0===o)return;i.lastEvt=e;const a=!0===i.event.mouse,l=()=>{r(e,a),!0!==n.preserveCursor&&(document.documentElement.style.cursor="grabbing"),!0===a&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),F(),i.styleCleanup=e=>{if(i.styleCleanup=void 0,!0!==n.preserveCursor&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),!0===a){const t=()=>{document.body.classList.remove("no-pointer-events--children")};void 0!==e?setTimeout((()=>{t(),e()}),50):t()}else void 0!==e&&e()}};if(!0===i.event.detected){!0!==i.event.isFirst&&r(e,i.event.mouse);const{payload:t,synthetic:n}=M(e,i,!1);return void(void 0!==t&&(!1===i.handler(t)?i.end(e):(void 0===i.styleCleanup&&!0===i.event.isFirst&&l(),i.event.lastX=t.position.left,i.event.lastY=t.position.top,i.event.lastDir=!0===n?void 0:t.direction,i.event.isFirst=!1)))}if(!0===i.direction.all||!0===a&&!0===i.modifiers.mouseAllDir)return l(),i.event.detected=!0,void i.move(e);const c=Math.abs(s),u=Math.abs(o);c!==u&&(!0===i.direction.horizontal&&c>u||!0===i.direction.vertical&&c<u||!0===i.direction.up&&c<u&&o<0||!0===i.direction.down&&c<u&&o>0||!0===i.direction.left&&c>u&&s<0||!0===i.direction.right&&c>u&&s>0?(i.event.detected=!0,i.move(e)):i.end(e,!0))},end(t,n){if(void 0!==i.event){if((0,h.ul)(i,"temp"),!0===f.Lp.is.firefox&&(0,h.Jf)(e,!1),!0===n)void 0!==i.styleCleanup&&i.styleCleanup(),!0!==i.event.detected&&void 0!==i.initialEvent&&i.initialEvent.target.dispatchEvent(i.initialEvent.event);else if(!0===i.event.detected){!0===i.event.isFirst&&i.handler(M(void 0===t?i.lastEvt:t,i).payload);const{payload:e}=M(void 0===t?i.lastEvt:t,i,!0),n=()=>{i.handler(e)};void 0!==i.styleCleanup?i.styleCleanup(n):n()}i.event=void 0,i.initialEvent=void 0,i.lastEvt=void 0}}};e.__qtouchpan=i,!0===n.mouse&&(0,h.M0)(i,"main",[[e,"mousedown","mouseStart","passive"+(!0===n.mouseCapture?"Capture":"")]]),!0===f.Lp.has.touch&&(0,h.M0)(i,"main",[[e,"touchstart","touchStart","passive"+(!0===n.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;void 0!==n&&(t.oldValue!==t.value&&("function"!==typeof value&&n.end(),n.handler=t.value),n.direction=P(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;void 0!==t&&(void 0!==t.event&&t.end(),(0,h.ul)(t,"main"),(0,h.ul)(t,"temp"),!0===f.Lp.is.firefox&&(0,h.Jf)(e,!1),void 0!==t.styleCleanup&&t.styleCleanup(),delete e.__qtouchpan)}});var V=n(2130),B=n(7657),j=n(2547);const $=150,z=(0,O.L)({name:"QDrawer",inheritAttrs:!1,props:{...l,...R.S,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...c,"on-layout","mini-state"],setup(e,{slots:t,emit:n,attrs:s}){const a=(0,r.FN)(),{proxy:{$q:l}}=a,c=(0,R.Z)(e,l),{preventBodyScroll:h}=x(),{registerTimeout:d}=A(),f=(0,r.f3)(j.YE,(()=>{console.error("QDrawer needs to be child of QLayout")}));let p,g,m;const v=(0,i.iH)("mobile"===e.behavior||"desktop"!==e.behavior&&f.totalWidth.value<=e.breakpoint),y=(0,r.Fl)((()=>!0===e.mini&&!0!==v.value)),w=(0,r.Fl)((()=>!0===y.value?e.miniWidth:e.width)),b=(0,i.iH)(!0===e.showIfAbove&&!1===v.value||!0===e.modelValue),_=(0,r.Fl)((()=>!0!==e.persistent&&(!0===v.value||!0===W.value)));function E(e,t){if(I(),!1!==e&&f.animate(),oe(0),!0===v.value){const e=f.instances[q.value];void 0!==e&&!0===e.belowBreakpoint&&e.hide(!1),ae(1),!0!==f.isContainer.value&&h(!0)}else ae(0),!1!==e&&le(!1);d((()=>{!1!==e&&le(!0),!0!==t&&n("show",e)}),$)}function S(e,t){C(),!1!==e&&f.animate(),ae(0),oe(L.value*w.value),de(),!0!==t&&d((()=>{n("hide",e)}),$)}const{show:T,hide:k}=u({showing:b,hideOnRouteChange:_,handleShow:E,handleHide:S}),{addToHistory:I,removeFromHistory:C}=o(b,k,_),O={belowBreakpoint:v,hide:k},N=(0,r.Fl)((()=>"right"===e.side)),L=(0,r.Fl)((()=>(!0===l.lang.rtl?-1:1)*(!0===N.value?1:-1))),P=(0,i.iH)(0),D=(0,i.iH)(!1),F=(0,i.iH)(!1),M=(0,i.iH)(w.value*L.value),q=(0,r.Fl)((()=>!0===N.value?"left":"right")),z=(0,r.Fl)((()=>!0===b.value&&!1===v.value&&!1===e.overlay?!0===e.miniToOverlay?e.miniWidth:w.value:0)),H=(0,r.Fl)((()=>!0===e.overlay||!0===e.miniToOverlay||f.view.value.indexOf(N.value?"R":"L")>-1||!0===l.platform.is.ios&&!0===f.isContainer.value)),K=(0,r.Fl)((()=>!1===e.overlay&&!0===b.value&&!1===v.value)),W=(0,r.Fl)((()=>!0===e.overlay&&!0===b.value&&!1===v.value)),G=(0,r.Fl)((()=>"fullscreen q-drawer__backdrop"+(!1===b.value&&!1===D.value?" hidden":""))),Z=(0,r.Fl)((()=>({backgroundColor:`rgba(0,0,0,${.4*P.value})`}))),X=(0,r.Fl)((()=>!0===N.value?"r"===f.rows.value.top[2]:"l"===f.rows.value.top[0])),Q=(0,r.Fl)((()=>!0===N.value?"r"===f.rows.value.bottom[2]:"l"===f.rows.value.bottom[0])),Y=(0,r.Fl)((()=>{const e={};return!0===f.header.space&&!1===X.value&&(!0===H.value?e.top=`${f.header.offset}px`:!0===f.header.space&&(e.top=`${f.header.size}px`)),!0===f.footer.space&&!1===Q.value&&(!0===H.value?e.bottom=`${f.footer.offset}px`:!0===f.footer.space&&(e.bottom=`${f.footer.size}px`)),e})),J=(0,r.Fl)((()=>{const e={width:`${w.value}px`,transform:`translateX(${M.value}px)`};return!0===v.value?e:Object.assign(e,Y.value)})),ee=(0,r.Fl)((()=>"q-drawer__content fit "+(!0!==f.isContainer.value?"scroll":"overflow-auto"))),te=(0,r.Fl)((()=>`q-drawer q-drawer--${e.side}`+(!0===F.value?" q-drawer--mini-animate":"")+(!0===e.bordered?" q-drawer--bordered":"")+(!0===c.value?" q-drawer--dark q-dark":"")+(!0===D.value?" no-transition":!0===b.value?"":" q-layout--prevent-focus")+(!0===v.value?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":" q-drawer--"+(!0===y.value?"mini":"standard")+(!0===H.value||!0!==K.value?" fixed":"")+(!0===e.overlay||!0===e.miniToOverlay?" q-drawer--on-top":"")+(!0===X.value?" q-drawer--top-padding":"")))),ne=(0,r.Fl)((()=>{const t=!0===l.lang.rtl?e.side:q.value;return[[U,ue,void 0,{[t]:!0,mouse:!0}]]})),re=(0,r.Fl)((()=>{const t=!0===l.lang.rtl?q.value:e.side;return[[U,he,void 0,{[t]:!0,mouse:!0}]]})),ie=(0,r.Fl)((()=>{const t=!0===l.lang.rtl?q.value:e.side;return[[U,he,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]}));function se(){pe(v,"mobile"===e.behavior||"desktop"!==e.behavior&&f.totalWidth.value<=e.breakpoint)}function oe(e){void 0===e?(0,r.Y3)((()=>{e=!0===b.value?0:w.value,oe(L.value*e)})):(!0!==f.isContainer.value||!0!==N.value||!0!==v.value&&Math.abs(e)!==w.value||(e+=L.value*f.scrollbarWidth.value),M.value=e)}function ae(e){P.value=e}function le(e){const t=!0===e?"remove":!0!==f.isContainer.value?"add":"";""!==t&&document.body.classList[t]("q-body--drawer-toggle")}function ce(){clearTimeout(g),a.proxy&&a.proxy.$el&&a.proxy.$el.classList.add("q-drawer--mini-animate"),F.value=!0,g=setTimeout((()=>{F.value=!1,a&&a.proxy&&a.proxy.$el&&a.proxy.$el.classList.remove("q-drawer--mini-animate")}),150)}function ue(e){if(!1!==b.value)return;const t=w.value,n=(0,V.vX)(e.distance.x,0,t);if(!0===e.isFinal){const e=n>=Math.min(75,t);return!0===e?T():(f.animate(),ae(0),oe(L.value*t)),void(D.value=!1)}oe((!0===l.lang.rtl?!0!==N.value:N.value)?Math.max(t-n,0):Math.min(0,n-t)),ae((0,V.vX)(n/t,0,1)),!0===e.isFirst&&(D.value=!0)}function he(t){if(!0!==b.value)return;const n=w.value,r=t.direction===e.side,i=(!0===l.lang.rtl?!0!==r:r)?(0,V.vX)(t.distance.x,0,n):0;if(!0===t.isFinal){const e=Math.abs(i)<Math.min(75,n);return!0===e?(f.animate(),ae(1),oe(0)):k(),void(D.value=!1)}oe(L.value*i),ae((0,V.vX)(1-i/n,0,1)),!0===t.isFirst&&(D.value=!0)}function de(){h(!1),le(!0)}function fe(t,n){f.update(e.side,t,n)}function pe(e,t){e.value!==t&&(e.value=t)}function ge(t,n){fe("size",!0===t?e.miniWidth:n)}return(0,r.YP)(v,(t=>{!0===t?(p=b.value,!0===b.value&&k(!1)):!1===e.overlay&&"mobile"!==e.behavior&&!1!==p&&(!0===b.value?(oe(0),ae(0),de()):T(!1))})),(0,r.YP)((()=>e.side),((e,t)=>{f.instances[t]===O&&(f.instances[t]=void 0,f[t].space=!1,f[t].offset=0),f.instances[e]=O,f[e].size=w.value,f[e].space=K.value,f[e].offset=z.value})),(0,r.YP)(f.totalWidth,(()=>{!0!==f.isContainer.value&&!0===document.qScrollPrevented||se()})),(0,r.YP)((()=>e.behavior+e.breakpoint),se),(0,r.YP)(f.isContainer,(e=>{!0===b.value&&h(!0!==e),!0===e&&se()})),(0,r.YP)(f.scrollbarWidth,(()=>{oe(!0===b.value?0:void 0)})),(0,r.YP)(z,(e=>{fe("offset",e)})),(0,r.YP)(K,(e=>{n("on-layout",e),fe("space",e)})),(0,r.YP)(N,(()=>{oe()})),(0,r.YP)(w,(t=>{oe(),ge(e.miniToOverlay,t)})),(0,r.YP)((()=>e.miniToOverlay),(e=>{ge(e,w.value)})),(0,r.YP)((()=>l.lang.rtl),(()=>{oe()})),(0,r.YP)((()=>e.mini),(()=>{!0===e.modelValue&&(ce(),f.animate())})),(0,r.YP)(y,(e=>{n("mini-state",e)})),f.instances[e.side]=O,ge(e.miniToOverlay,w.value),fe("space",K.value),fe("offset",z.value),!0===e.showIfAbove&&!0!==e.modelValue&&!0===b.value&&void 0!==e["onUpdate:modelValue"]&&n("update:modelValue",!0),(0,r.bv)((()=>{n("on-layout",K.value),n("mini-state",y.value),p=!0===e.showIfAbove;const t=()=>{const e=!0===b.value?E:S;e(!1,!0)};0===f.totalWidth.value?m=(0,r.YP)(f.totalWidth,(()=>{m(),m=void 0,!1===b.value&&!0===e.showIfAbove&&!1===v.value?T(!1):t()})):(0,r.Y3)(t)})),(0,r.Jd)((()=>{void 0!==m&&m(),clearTimeout(g),!0===b.value&&de(),f.instances[e.side]===O&&(f.instances[e.side]=void 0,fe("size",0),fe("offset",0),fe("space",!1))})),()=>{const n=[];!0===v.value&&(!1===e.noSwipeOpen&&n.push((0,r.wy)((0,r.h)("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ne.value)),n.push((0,B.Jl)("div",{ref:"backdrop",class:G.value,style:Z.value,"aria-hidden":"true",onClick:k},void 0,"backdrop",!0!==e.noSwipeBackdrop&&!0===b.value,(()=>ie.value))));const i=!0===y.value&&void 0!==t.mini,o=[(0,r.h)("div",{...s,key:""+i,class:[ee.value,s.class]},!0===i?t.mini():(0,B.KR)(t.default))];return!0===e.elevated&&!0===b.value&&o.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,B.Jl)("aside",{ref:"content",class:te.value,style:J.value},o,"contentclose",!0!==e.noSwipeClose&&!0===v.value,(()=>re.value))),(0,r.h)("div",{class:"q-drawer-container"},n)}}})},3812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(3673),i=n(1959),s=n(5151),o=n(908),a=n(7657),l=n(2547);const c=(0,o.L)({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=(0,r.FN)(),c=(0,r.f3)(l.YE,(()=>{console.error("QHeader needs to be child of QLayout")})),u=(0,i.iH)(parseInt(e.heightHint,10)),h=(0,i.iH)(!0),d=(0,r.Fl)((()=>!0===e.reveal||c.view.value.indexOf("H")>-1||o.platform.is.ios&&!0===c.isContainer.value)),f=(0,r.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===d.value)return!0===h.value?u.value:0;const t=u.value-c.scroll.value.position;return t>0?t:0})),p=(0,r.Fl)((()=>!0!==e.modelValue||!0===d.value&&!0!==h.value)),g=(0,r.Fl)((()=>!0===e.modelValue&&!0===p.value&&!0===e.reveal)),m=(0,r.Fl)((()=>"q-header q-layout__section--marginal "+(!0===d.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===p.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),v=(0,r.Fl)((()=>{const e=c.rows.value.top,t={};return"l"===e[0]&&!0===c.left.space&&(t[!0===o.lang.rtl?"right":"left"]=`${c.left.size}px`),"r"===e[2]&&!0===c.right.space&&(t[!0===o.lang.rtl?"left":"right"]=`${c.right.size}px`),t}));function y(e,t){c.update("header",e,t)}function w(e,t){e.value!==t&&(e.value=t)}function b({height:e}){w(u,e),y("size",e)}function _(e){!0===g.value&&w(h,!0),n("focusin",e)}(0,r.YP)((()=>e.modelValue),(e=>{y("space",e),w(h,!0),c.animate()})),(0,r.YP)(f,(e=>{y("offset",e)})),(0,r.YP)((()=>e.reveal),(t=>{!1===t&&w(h,e.modelValue)})),(0,r.YP)(h,(e=>{c.animate(),n("reveal",e)})),(0,r.YP)(c.scroll,(t=>{!0===e.reveal&&w(h,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const E={};return c.instances.header=E,!0===e.modelValue&&y("size",u.value),y("space",e.modelValue),y("offset",f.value),(0,r.Jd)((()=>{c.instances.header===E&&(c.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))})),()=>{const n=(0,a.Bl)(t.default,[]);return!0===e.elevated&&n.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,r.h)(s.Z,{debounce:0,onResize:b})),(0,r.h)("header",{class:m.value,style:v.value,onFocusin:_},n)}}})},4554:(e,t,n)=>{"use strict";n.d(t,{Z:()=>_});n(71);var r=n(3673),i=n(2417),s=n(908),o=n(7657);const a="0 0 24 24",l=e=>e,c=e=>`ionicons ${e}`,u={"mdi-":e=>`mdi ${e}`,"icon-":l,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":c,"ion-ios":c,"ion-logo":c,"iconfont ":l,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},h={o_:"-outlined",r_:"-round",s_:"-sharp"},d={sym_o_:"-outlined",sym_r_:"-rounded",sym_s_:"-sharp"},f=new RegExp("^("+Object.keys(u).join("|")+")"),p=new RegExp("^("+Object.keys(h).join("|")+")"),g=new RegExp("^("+Object.keys(d).join("|")+")"),m=/^[Mm]\s?[-+]?\.?\d/,v=/^img:/,y=/^svguse:/,w=/^ion-/,b=/^(fa-(solid|regular|light|brands|duotone|thin)|[lf]a[srlbdk]?) /,_=(0,s.L)({name:"QIcon",props:{...i.LU,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),s=(0,i.ZP)(e),l=(0,r.Fl)((()=>"q-icon"+(!0===e.left?" on-left":"")+(!0===e.right?" on-right":"")+(void 0!==e.color?` text-${e.color}`:""))),c=(0,r.Fl)((()=>{let t,i=e.name;if("none"===i||!i)return{none:!0};if(null!==n.iconMapFn){const e=n.iconMapFn(i);if(void 0!==e){if(void 0===e.icon)return{cls:e.cls,content:void 0!==e.content?e.content:" "};if(i=e.icon,"none"===i||!i)return{none:!0}}}if(!0===m.test(i)){const[e,t=a]=i.split("|");return{svg:!0,viewBox:t,nodes:e.split("&&").map((e=>{const[t,n,i]=e.split("@@");return(0,r.h)("path",{style:n,d:t,transform:i})}))}}if(!0===v.test(i))return{img:!0,src:i.substring(4)};if(!0===y.test(i)){const[e,t=a]=i.split("|");return{svguse:!0,src:e.substring(7),viewBox:t}}let s=" ";const o=i.match(f);if(null!==o)t=u[o[1]](i);else if(!0===b.test(i))t=i;else if(!0===w.test(i))t=`ionicons ion-${!0===n.platform.is.ios?"ios":"md"}${i.substring(3)}`;else if(!0===g.test(i)){t="notranslate material-symbols";const e=i.match(g);null!==e&&(i=i.substring(6),t+=d[e[1]]),s=i}else{t="notranslate material-icons";const e=i.match(p);null!==e&&(i=i.substring(2),t+=h[e[1]]),s=i}return{cls:t,content:s}}));return()=>{const n={class:l.value,style:s.value,"aria-hidden":"true",role:"presentation"};return!0===c.value.none?(0,r.h)(e.tag,n,(0,o.KR)(t.default)):!0===c.value.img?(0,r.h)("span",n,(0,o.vs)(t.default,[(0,r.h)("img",{src:c.value.src})])):!0===c.value.svg?(0,r.h)("span",n,(0,o.vs)(t.default,[(0,r.h)("svg",{viewBox:c.value.viewBox||"0 0 24 24"},c.value.nodes)])):!0===c.value.svguse?(0,r.h)("span",n,(0,o.vs)(t.default,[(0,r.h)("svg",{viewBox:c.value.viewBox},[(0,r.h)("use",{"xlink:href":c.value.src})])])):(void 0!==c.value.cls&&(n.class+=" "+c.value.cls),(0,r.h)(e.tag,n,(0,o.vs)(t.default,[c.value.content])))}}})},4027:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(1959),i=n(3673),s=n(8880),o=n(9754);const a={ratio:[String,Number]};function l(e,t){return(0,i.Fl)((()=>{const n=Number(e.ratio||(void 0!==t?t.value:void 0));return!0!==isNaN(n)&&n>0?{paddingBottom:100/n+"%"}:null}))}var c=n(908),u=n(7657);n(4688);const h=16/9,d=(0,c.L)({name:"QImg",props:{...a,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},fetchpriority:{type:String,default:"auto"},width:String,height:String,initialRatio:{type:[Number,String],default:h},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:n}){const a=(0,r.iH)(e.initialRatio),c=l(e,a);let h;const d=[(0,r.iH)(null),(0,r.iH)(void 0!==e.placeholderSrc?{src:e.placeholderSrc}:null)],f=(0,r.iH)(0),p=(0,r.iH)(!1),g=(0,r.iH)(!1),m=(0,i.Fl)((()=>`q-img q-img--${!0===e.noNativeMenu?"no-":""}menu`)),v=(0,i.Fl)((()=>({width:e.width,height:e.height}))),y=(0,i.Fl)((()=>"q-img__image "+(void 0!==e.imgClass?e.imgClass+" ":"")+`q-img__image--with${!0===e.noTransition?"out":""}-transition`)),w=(0,i.Fl)((()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position})));function b(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function _(e){if(clearTimeout(h),g.value=!1,null===e)return p.value=!1,d[0].value=null,void(d[1].value=null);p.value=!0,d[f.value].value=e}function E({target:e}){null!==h&&(clearTimeout(h),a.value=0===e.naturalHeight?.5:e.naturalWidth/e.naturalHeight,S(e,1))}function S(e,t){null!==h&&1e3!==t&&(!0===e.complete?T(e):h=setTimeout((()=>{S(e,t+1)}),50))}function T(e){null!==h&&(f.value=1===f.value?0:1,d[f.value].value=null,p.value=!1,g.value=!1,n("load",e.currentSrc||e.src))}function k(e){clearTimeout(h),p.value=!1,g.value=!0,d[0].value=null,d[1].value=null,n("error",e)}function I(e,t){return(0,i.h)("div",{class:"q-img__container absolute-full",key:e},t)}function C(t){const n=d[t].value,r={key:"img_"+t,class:y.value,style:w.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,fetchpriority:e.fetchpriority,"aria-hidden":"true",draggable:e.draggable,...n};return f.value===t?(r.class+=" q-img__image--waiting",Object.assign(r,{onLoad:E,onError:k})):r.class+=" q-img__image--loaded",I("img"+t,(0,i.h)("img",r))}function x(){return!0!==p.value?(0,i.h)("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},(0,u.KR)(t[!0===g.value?"error":"default"])):(0,i.h)("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},void 0!==t.loading?t.loading():!0===e.noSpinner?void 0:[(0,i.h)(o.Z,{color:e.spinnerColor,size:e.spinnerSize})])}return(0,i.YP)((()=>b()),_),_(b()),(0,i.Jd)((()=>{clearTimeout(h),h=null})),()=>{const t=[];return null!==c.value&&t.push((0,i.h)("div",{key:"filler",style:c.value})),!0!==g.value&&(null!==d[0].value&&t.push(C(0)),null!==d[1].value&&t.push(C(1))),t.push((0,i.h)(s.uT,{name:"q-transition--fade"},x)),(0,i.h)("div",{class:m.value,style:v.value,role:"img","aria-label":e.alt},t)}}})},8786:(e,t,n)=>{"use strict";n.d(t,{Z:()=>we});n(71),n(3610);var r=n(1959),i=n(3673),s=n(8880),o=n(4688),a=n(4554),l=n(9754),c=n(2236),u=n(2547);function h({validate:e,resetValidation:t,requiresQForm:n}){const r=(0,i.f3)(u.vh,!1);if(!1!==r){const{props:n,proxy:s}=(0,i.FN)();Object.assign(s,{validate:e,resetValidation:t}),(0,i.YP)((()=>n.disable),(e=>{!0===e?("function"===typeof t&&t(),r.unbindComponent(s)):r.bindComponent(s)})),!0!==n.disable&&r.bindComponent(s),(0,i.Jd)((()=>{!0!==n.disable&&r.unbindComponent(s)}))}else!0===n&&console.error("Parent QForm not found on useFormChild()!")}const d=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,f=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,p=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,g=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,m=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,v={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),email:e=>/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(e),hexColor:e=>d.test(e),hexaColor:e=>f.test(e),hexOrHexaColor:e=>p.test(e),rgbColor:e=>g.test(e),rgbaColor:e=>m.test(e),rgbOrRgbaColor:e=>g.test(e)||m.test(e),hexOrRgbColor:e=>d.test(e)||g.test(e),hexaOrRgbaColor:e=>f.test(e)||m.test(e),anyColor:e=>p.test(e)||g.test(e)||m.test(e)};n(4406);n(6701),n(5363);Object.prototype.toString,Object.prototype.hasOwnProperty;const y={};"Boolean Number String Function Array Date RegExp Object".split(" ").forEach((e=>{y["[object "+e+"]"]=e.toLowerCase()}));n(7965),n(6016),n(8240);var w=n(2417);const b={...w.LU,min:{type:Number,default:0},max:{type:Number,default:100},color:String,centerColor:String,trackColor:String,fontSize:String,thickness:{type:Number,default:.2,validator:e=>e>=0&&e<=1},angle:{type:Number,default:0},showValue:Boolean,reverse:Boolean,instantFeedback:Boolean};var _=n(908),E=n(7657),S=n(2130);const T=50,k=2*T,I=k*Math.PI,C=Math.round(1e3*I)/1e3;(0,_.L)({name:"QCircularProgress",props:{...b,value:{type:Number,default:0},animationSpeed:{type:[String,Number],default:600},indeterminate:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,i.FN)(),r=(0,w.ZP)(e),s=(0,i.Fl)((()=>{const t=(!0===n.lang.rtl?-1:1)*e.angle;return{transform:e.reverse!==(!0===n.lang.rtl)?`scale3d(-1, 1, 1) rotate3d(0, 0, 1, ${-90-t}deg)`:`rotate3d(0, 0, 1, ${t-90}deg)`}})),o=(0,i.Fl)((()=>!0!==e.instantFeedback&&!0!==e.indeterminate?{transition:`stroke-dashoffset ${e.animationSpeed}ms ease 0s, stroke ${e.animationSpeed}ms ease`}:"")),a=(0,i.Fl)((()=>k/(1-e.thickness/2))),l=(0,i.Fl)((()=>`${a.value/2} ${a.value/2} ${a.value} ${a.value}`)),c=(0,i.Fl)((()=>(0,S.vX)(e.value,e.min,e.max))),u=(0,i.Fl)((()=>I*(1-(c.value-e.min)/(e.max-e.min)))),h=(0,i.Fl)((()=>e.thickness/2*a.value));function d({thickness:e,offset:t,color:n,cls:r}){return(0,i.h)("circle",{class:"q-circular-progress__"+r+(void 0!==n?` text-${n}`:""),style:o.value,fill:"transparent",stroke:"currentColor","stroke-width":e,"stroke-dasharray":C,"stroke-dashoffset":t,cx:a.value,cy:a.value,r:T})}return()=>{const n=[];void 0!==e.centerColor&&"transparent"!==e.centerColor&&n.push((0,i.h)("circle",{class:`q-circular-progress__center text-${e.centerColor}`,fill:"currentColor",r:T-h.value/2,cx:a.value,cy:a.value})),void 0!==e.trackColor&&"transparent"!==e.trackColor&&n.push(d({cls:"track",thickness:h.value,offset:0,color:e.trackColor})),n.push(d({cls:"circle",thickness:h.value,offset:u.value,color:e.color}));const o=[(0,i.h)("svg",{class:"q-circular-progress__svg",style:s.value,viewBox:l.value,"aria-hidden":"true"},n)];return!0===e.showValue&&o.push((0,i.h)("div",{class:"q-circular-progress__text absolute-full row flex-center content-center",style:{fontSize:e.fontSize}},void 0!==t.default?t.default():[(0,i.h)("div",c.value)])),(0,i.h)("div",{class:`q-circular-progress q-circular-progress--${!0===e.indeterminate?"in":""}determinate`,style:r.value,role:"progressbar","aria-valuemin":e.min,"aria-valuemax":e.max,"aria-valuenow":!0===e.indeterminate?void 0:c.value},(0,E.pf)(t.internal,o))}}});var x=n(4716);const A={multiple:Boolean,accept:String,capture:String,maxFileSize:[Number,String],maxTotalSize:[Number,String],maxFiles:[Number,String],filter:Function},R=["rejected"];c.S,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean,Boolean;const O=[...R,"start","finish","added","removed"];const N=()=>!0;function L(e){const t={};return e.forEach((e=>{t[e]=N})),t}n(782);L(O);n(9111);var P=n(9405);n(2012);n(8400),n(4398),n(6105),n(5123),n(8836),n(8685),n(2396),n(9802),n(2773);let D,F=0;const M=new Array(256);for(let be=0;be<256;be++)M[be]=(be+256).toString(16).substring(1);const q=(()=>{const e="undefined"!==typeof crypto?crypto:"undefined"!==typeof window?window.crypto||window.msCrypto:void 0;if(void 0!==e){if(void 0!==e.randomBytes)return e.randomBytes;if(void 0!==e.getRandomValues)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return e=>{const t=[];for(let n=e;n>0;n--)t.push(Math.floor(256*Math.random()));return t}})(),U=4096;function V(){(void 0===D||F+16>U)&&(F=0,D=q(U));const e=Array.prototype.slice.call(D,F,F+=16);return e[6]=15&e[6]|64,e[8]=63&e[8]|128,M[e[0]]+M[e[1]]+M[e[2]]+M[e[3]]+"-"+M[e[4]]+M[e[5]]+"-"+M[e[6]]+M[e[7]]+"-"+M[e[8]]+M[e[9]]+"-"+M[e[10]]+M[e[11]]+M[e[12]]+M[e[13]]+M[e[14]]+M[e[15]]}var B=n(9085);const j=[!0,!1,"ondemand"],$={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>j.includes(e)}};function z(e,t){const{props:n,proxy:s}=(0,i.FN)(),o=(0,r.iH)(!1),a=(0,r.iH)(null),l=(0,r.iH)(null);h({validate:y,resetValidation:m});let c,u=0;const d=(0,i.Fl)((()=>void 0!==n.rules&&null!==n.rules&&n.rules.length>0)),f=(0,i.Fl)((()=>!0!==n.disable&&!0===d.value)),p=(0,i.Fl)((()=>!0===n.error||!0===o.value)),g=(0,i.Fl)((()=>"string"===typeof n.errorMessage&&n.errorMessage.length>0?n.errorMessage:a.value));function m(){u++,t.value=!1,l.value=null,o.value=!1,a.value=null,b.cancel()}function y(e=n.modelValue){if(!0!==f.value)return!0;const r=++u;!0!==t.value&&!0!==n.lazyRules&&(l.value=!0);const i=(e,n)=>{o.value!==e&&(o.value=e);const r=n||void 0;a.value!==r&&(a.value=r),t.value=!1},s=[];for(let t=0;t<n.rules.length;t++){const r=n.rules[t];let o;if("function"===typeof r?o=r(e):"string"===typeof r&&void 0!==v[r]&&(o=v[r](e)),!1===o||"string"===typeof o)return i(!0,o),!1;!0!==o&&void 0!==o&&s.push(o)}return 0===s.length?(i(!1),!0):(t.value=!0,Promise.all(s).then((e=>{if(void 0===e||!1===Array.isArray(e)||0===e.length)return r===u&&i(!1),!0;const t=e.find((e=>!1===e||"string"===typeof e));return r===u&&i(void 0!==t,t),void 0===t}),(e=>(r===u&&(console.error(e),i(!0)),!1))))}function w(e){!0===f.value&&"ondemand"!==n.lazyRules&&(!0===l.value||!0!==n.lazyRules&&!0!==e)&&b()}(0,i.YP)((()=>n.modelValue),(()=>{w()})),(0,i.YP)((()=>n.reactiveRules),(e=>{!0===e?void 0===c&&(c=(0,i.YP)((()=>n.rules),(()=>{w(!0)}))):void 0!==c&&(c(),c=void 0)}),{immediate:!0}),(0,i.YP)(e,(e=>{!0===e?null===l.value&&(l.value=!1):!1===l.value&&(l.value=!0,!0===f.value&&"ondemand"!==n.lazyRules&&!1===t.value&&b())}));const b=(0,P.Z)(y,0);return(0,i.Jd)((()=>{void 0!==c&&c(),b.cancel()})),Object.assign(s,{resetValidation:m,validate:y}),(0,B.g)(s,"hasError",(()=>p.value)),{isDirtyModel:l,hasRules:d,hasError:p,errorMessage:g,validate:y,resetValidation:m}}const H=/^on[A-Z]/;function K(e,t){const n={listeners:(0,r.iH)({}),attributes:(0,r.iH)({})};function s(){const r={},i={};for(const t in e)"class"!==t&&"style"!==t&&!1===H.test(t)&&(r[t]=e[t]);for(const e in t.props)!0===H.test(e)&&(i[e]=t.props[e]);n.attributes.value=r,n.listeners.value=i}return(0,i.Xn)(s),s(),n}let W=[],G=[];function Z(e){0===G.length?e():W.push(e)}function X(e){W=W.filter((t=>t!==e))}function Q(e){return void 0===e?`f_${V()}`:e}function Y(e){return void 0!==e&&null!==e&&(""+e).length>0}const J={...c.S,...$,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},ee=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function te(){const{props:e,attrs:t,proxy:n,vnode:s}=(0,i.FN)(),o=(0,c.Z)(e,n.$q);return{isDark:o,editable:(0,i.Fl)((()=>!0!==e.disable&&!0!==e.readonly)),innerLoading:(0,r.iH)(!1),focused:(0,r.iH)(!1),hasPopupOpen:!1,splitAttrs:K(t,s),targetUid:(0,r.iH)(Q(e.for)),rootRef:(0,r.iH)(null),targetRef:(0,r.iH)(null),controlRef:(0,r.iH)(null)}}function ne(e){const{props:t,emit:n,slots:r,attrs:c,proxy:u}=(0,i.FN)(),{$q:h}=u;let d;void 0===e.hasValue&&(e.hasValue=(0,i.Fl)((()=>Y(t.modelValue)))),void 0===e.emitValue&&(e.emitValue=e=>{n("update:modelValue",e)}),void 0===e.controlEvents&&(e.controlEvents={onFocusin:N,onFocusout:L}),Object.assign(e,{clearValue:P,onControlFocusin:N,onControlFocusout:L,focus:R}),void 0===e.computedCounter&&(e.computedCounter=(0,i.Fl)((()=>{if(!1!==t.counter){const e="string"===typeof t.modelValue||"number"===typeof t.modelValue?(""+t.modelValue).length:!0===Array.isArray(t.modelValue)?t.modelValue.length:0,n=void 0!==t.maxlength?t.maxlength:t.maxValues;return e+(void 0!==n?" / "+n:"")}})));const{isDirtyModel:f,hasRules:p,hasError:g,errorMessage:m,resetValidation:v}=z(e.focused,e.innerLoading),y=void 0!==e.floatingLabel?(0,i.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.floatingLabel.value)):(0,i.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.hasValue.value)),w=(0,i.Fl)((()=>!0===t.bottomSlots||void 0!==t.hint||!0===p.value||!0===t.counter||null!==t.error)),b=(0,i.Fl)((()=>!0===t.filled?"filled":!0===t.outlined?"outlined":!0===t.borderless?"borderless":t.standout?"standout":"standard")),_=(0,i.Fl)((()=>`q-field row no-wrap items-start q-field--${b.value}`+(void 0!==e.fieldClass?` ${e.fieldClass.value}`:"")+(!0===t.rounded?" q-field--rounded":"")+(!0===t.square?" q-field--square":"")+(!0===y.value?" q-field--float":"")+(!0===T.value?" q-field--labeled":"")+(!0===t.dense?" q-field--dense":"")+(!0===t.itemAligned?" q-field--item-aligned q-item-type":"")+(!0===e.isDark.value?" q-field--dark":"")+(void 0===e.getControl?" q-field--auto-height":"")+(!0===e.focused.value?" q-field--focused":"")+(!0===g.value?" q-field--error":"")+(!0===g.value||!0===e.focused.value?" q-field--highlighted":"")+(!0!==t.hideBottomSpace&&!0===w.value?" q-field--with-bottom":"")+(!0===t.disable?" q-field--disabled":!0===t.readonly?" q-field--readonly":""))),S=(0,i.Fl)((()=>"q-field__control relative-position row no-wrap"+(void 0!==t.bgColor?` bg-${t.bgColor}`:"")+(!0===g.value?" text-negative":"string"===typeof t.standout&&t.standout.length>0&&!0===e.focused.value?` ${t.standout}`:void 0!==t.color?` text-${t.color}`:""))),T=(0,i.Fl)((()=>!0===t.labelSlot||void 0!==t.label)),k=(0,i.Fl)((()=>"q-field__label no-pointer-events absolute ellipsis"+(void 0!==t.labelColor&&!0!==g.value?` text-${t.labelColor}`:""))),I=(0,i.Fl)((()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:y.value,modelValue:t.modelValue,emitValue:e.emitValue}))),C=(0,i.Fl)((()=>{const n={for:e.targetUid.value};return!0===t.disable?n["aria-disabled"]="true":!0===t.readonly&&(n["aria-readonly"]="true"),n}));function A(){const t=document.activeElement;let n=void 0!==e.targetRef&&e.targetRef.value;!n||null!==t&&t.id===e.targetUid.value||(!0===n.hasAttribute("tabindex")||(n=n.querySelector("[tabindex]")),n&&n!==t&&n.focus({preventScroll:!0}))}function R(){Z(A)}function O(){X(A);const t=document.activeElement;null!==t&&e.rootRef.value.contains(t)&&t.blur()}function N(t){clearTimeout(d),!0===e.editable.value&&!1===e.focused.value&&(e.focused.value=!0,n("focus",t))}function L(t,r){clearTimeout(d),d=setTimeout((()=>{(!0!==document.hasFocus()||!0!==e.hasPopupOpen&&void 0!==e.controlRef&&null!==e.controlRef.value&&!1===e.controlRef.value.contains(document.activeElement))&&(!0===e.focused.value&&(e.focused.value=!1,n("blur",t)),void 0!==r&&r())}))}function P(r){if((0,x.NS)(r),!0!==h.platform.is.mobile){const t=void 0!==e.targetRef&&e.targetRef.value||e.rootRef.value;t.focus()}else!0===e.rootRef.value.contains(document.activeElement)&&document.activeElement.blur();"file"===t.type&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),(0,i.Y3)((()=>{v(),!0!==h.platform.is.mobile&&(f.value=!1)}))}function D(){const n=[];return void 0!==r.prepend&&n.push((0,i.h)("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:x.X$},r.prepend())),n.push((0,i.h)("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},F())),!0===g.value&&!1===t.noErrorIcon&&n.push(q("error",[(0,i.h)(a.Z,{name:h.iconSet.field.error,color:"negative"})])),!0===t.loading||!0===e.innerLoading.value?n.push(q("inner-loading-append",void 0!==r.loading?r.loading():[(0,i.h)(l.Z,{color:t.color})])):!0===t.clearable&&!0===e.hasValue.value&&!0===e.editable.value&&n.push(q("inner-clearable-append",[(0,i.h)(a.Z,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||h.iconSet.field.clear,tabindex:0,type:"button","aria-hidden":null,role:null,onClick:P})])),void 0!==r.append&&n.push((0,i.h)("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:x.X$},r.append())),void 0!==e.getInnerAppend&&n.push(q("inner-append",e.getInnerAppend())),void 0!==e.getControlChild&&n.push(e.getControlChild()),n}function F(){const n=[];return void 0!==t.prefix&&null!==t.prefix&&n.push((0,i.h)("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),void 0!==e.getShadowControl&&!0===e.hasShadow.value&&n.push(e.getShadowControl()),void 0!==e.getControl?n.push(e.getControl()):void 0!==r.rawControl?n.push(r.rawControl()):void 0!==r.control&&n.push((0,i.h)("div",{ref:e.targetRef,class:"q-field__native row",tabindex:-1,...e.splitAttrs.attributes.value,"data-autofocus":!0===t.autofocus||void 0},r.control(I.value))),!0===T.value&&n.push((0,i.h)("div",{class:k.value},(0,E.KR)(r.label,t.label))),void 0!==t.suffix&&null!==t.suffix&&n.push((0,i.h)("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat((0,E.KR)(r.default))}function M(){let n,o;!0===g.value?null!==m.value?(n=[(0,i.h)("div",{role:"alert"},m.value)],o=`q--slot-error-${m.value}`):(n=(0,E.KR)(r.error),o="q--slot-error"):!0===t.hideHint&&!0!==e.focused.value||(void 0!==t.hint?(n=[(0,i.h)("div",t.hint)],o=`q--slot-hint-${t.hint}`):(n=(0,E.KR)(r.hint),o="q--slot-hint"));const a=!0===t.counter||void 0!==r.counter;if(!0===t.hideBottomSpace&&!1===a&&void 0===n)return;const l=(0,i.h)("div",{key:o,class:"q-field__messages col"},n);return(0,i.h)("div",{class:"q-field__bottom row items-start q-field__bottom--"+(!0!==t.hideBottomSpace?"animated":"stale")},[!0===t.hideBottomSpace?l:(0,i.h)(s.uT,{name:"q-transition--field-message"},(()=>l)),!0===a?(0,i.h)("div",{class:"q-field__counter"},void 0!==r.counter?r.counter():e.computedCounter.value):null])}function q(e,t){return null===t?null:(0,i.h)("div",{key:e,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},t)}(0,i.YP)((()=>t.for),(t=>{e.targetUid.value=Q(t)})),Object.assign(u,{focus:R,blur:O});let U=!1;return(0,i.se)((()=>{U=!0})),(0,i.dl)((()=>{!0===U&&!0===t.autofocus&&u.focus()})),(0,i.bv)((()=>{!0===o.uX.value&&void 0===t.for&&(e.targetUid.value=Q()),!0===t.autofocus&&u.focus()})),(0,i.Jd)((()=>{clearTimeout(d)})),function(){const n=void 0===e.getControl&&void 0===r.control?{...e.splitAttrs.attributes.value,"data-autofocus":!0===t.autofocus||void 0,...C.value}:C.value;return(0,i.h)("label",{ref:e.rootRef,class:[_.value,c.class],style:c.style,...n},[void 0!==r.before?(0,i.h)("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:x.X$},r.before()):null,(0,i.h)("div",{class:"q-field__inner relative-position col self-stretch"},[(0,i.h)("div",{ref:e.controlRef,class:S.value,tabindex:-1,...e.controlEvents},D()),!0===w.value?M():null]),void 0!==r.after?(0,i.h)("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:x.X$},r.after()):null])}}var re=n(1436);const ie={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},se={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},oe=Object.keys(se);oe.forEach((e=>{se[e].regex=new RegExp(se[e].pattern)}));const ae=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+oe.join("")+"])|(.)","g"),le=/[.*+?^${}()|[\]\\]/g,ce=String.fromCharCode(1),ue={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function he(e,t,n,s){let o,a,l,c;const u=(0,r.iH)(null),h=(0,r.iH)(f());function d(){return!0===e.autogrow||["textarea","text","search","url","tel","password"].includes(e.type)}function f(){if(g(),!0===u.value){const t=b(E(e.modelValue));return!1!==e.fillMask?S(t):t}return e.modelValue}function p(e){if(e<o.length)return o.slice(-e);let t="",n=o;const r=n.indexOf(ce);if(r>-1){for(let r=e-n.length;r>0;r--)t+=ce;n=n.slice(0,r)+t+n.slice(r)}return n}function g(){if(u.value=void 0!==e.mask&&e.mask.length>0&&d(),!1===u.value)return c=void 0,o="",void(a="");const t=void 0===ie[e.mask]?e.mask:ie[e.mask],n="string"===typeof e.fillMask&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=n.replace(le,"\\$&"),i=[],s=[],h=[];let f=!0===e.reverseFillMask,p="",g="";t.replace(ae,((e,t,n,r,o)=>{if(void 0!==r){const e=se[r];h.push(e),g=e.negate,!0===f&&(s.push("(?:"+g+"+)?("+e.pattern+"+)?(?:"+g+"+)?("+e.pattern+"+)?"),f=!1),s.push("(?:"+g+"+)?("+e.pattern+")?")}else if(void 0!==n)p="\\"+("\\"===n?"":n),h.push(n),i.push("([^"+p+"]+)?"+p+"?");else{const e=void 0!==t?t:o;p="\\"===e?"\\\\\\\\":e.replace(le,"\\\\$&"),h.push(e),i.push("([^"+p+"]+)?"+p+"?")}}));const m=new RegExp("^"+i.join("")+"("+(""===p?".":"[^"+p+"]")+"+)?$"),v=s.length-1,y=s.map(((t,n)=>0===n&&!0===e.reverseFillMask?new RegExp("^"+r+"*"+t):n===v?new RegExp("^"+t+"("+(""===g?".":g)+"+)?"+(!0===e.reverseFillMask?"$":r+"*")):new RegExp("^"+t)));l=h,c=e=>{const t=m.exec(e);null!==t&&(e=t.slice(1).join(""));const n=[],r=y.length;for(let i=0,s=e;i<r;i++){const e=y[i].exec(s);if(null===e)break;s=s.slice(e.shift().length),n.push(...e)}return n.length>0?n.join(""):e},o=h.map((e=>"string"===typeof e?e:ce)).join(""),a=o.split(ce).join(n)}function m(t,r,l){const c=s.value,u=c.selectionEnd,d=c.value.length-u,f=E(t);!0===r&&g();const p=b(f),m=!1!==e.fillMask?S(p):p,v=h.value!==m;c.value!==m&&(c.value=m),!0===v&&(h.value=m),document.activeElement===c&&(0,i.Y3)((()=>{if(m!==a)if("insertFromPaste"!==l||!0===e.reverseFillMask)if(["deleteContentBackward","deleteContentForward"].indexOf(l)>-1){const t=!0===e.reverseFillMask?0===u?m.length>p.length?1:0:Math.max(0,m.length-(m===a?0:Math.min(p.length,d)+1))+1:u;c.setSelectionRange(t,t,"forward")}else if(!0===e.reverseFillMask)if(!0===v){const e=Math.max(0,m.length-(m===a?0:Math.min(p.length,d+1)));1===e&&1===u?c.setSelectionRange(e,e,"forward"):y.rightReverse(c,e,e)}else{const e=m.length-d;c.setSelectionRange(e,e,"backward")}else if(!0===v){const e=Math.max(0,o.indexOf(ce),Math.min(p.length,u)-1);y.right(c,e,e)}else{const e=u-1;y.right(c,e,e)}else{const e=u-1;y.right(c,e,e)}else{const t=!0===e.reverseFillMask?a.length:0;c.setSelectionRange(t,t,"forward")}}));const w=!0===e.unmaskedValue?E(m):m;String(e.modelValue)!==w&&n(w,!0)}function v(e,t,n){const r=b(E(e.value));t=Math.max(0,o.indexOf(ce),Math.min(r.length,t)),e.setSelectionRange(t,n,"forward")}(0,i.YP)((()=>e.type+e.autogrow),g),(0,i.YP)((()=>e.mask),(n=>{if(void 0!==n)m(h.value,!0);else{const n=E(h.value);g(),e.modelValue!==n&&t("update:modelValue",n)}})),(0,i.YP)((()=>e.fillMask+e.reverseFillMask),(()=>{!0===u.value&&m(h.value,!0)})),(0,i.YP)((()=>e.unmaskedValue),(()=>{!0===u.value&&m(h.value)}));const y={left(e,t,n,r){const i=-1===o.slice(t-1).indexOf(ce);let s=Math.max(0,t-1);for(;s>=0;s--)if(o[s]===ce){t=s,!0===i&&t++;break}if(s<0&&void 0!==o[t]&&o[t]!==ce)return y.right(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},right(e,t,n,r){const i=e.value.length;let s=Math.min(i,n+1);for(;s<=i;s++){if(o[s]===ce){n=s;break}o[s-1]===ce&&(n=s)}if(s>i&&void 0!==o[n-1]&&o[n-1]!==ce)return y.left(e,i,i);e.setSelectionRange(r?t:n,n,"forward")},leftReverse(e,t,n,r){const i=p(e.value.length);let s=Math.max(0,t-1);for(;s>=0;s--){if(i[s-1]===ce){t=s;break}if(i[s]===ce&&(t=s,0===s))break}if(s<0&&void 0!==i[t]&&i[t]!==ce)return y.rightReverse(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},rightReverse(e,t,n,r){const i=e.value.length,s=p(i),o=-1===s.slice(0,n+1).indexOf(ce);let a=Math.min(i,n+1);for(;a<=i;a++)if(s[a-1]===ce){n=a,n>0&&!0===o&&n--;break}if(a>i&&void 0!==s[n-1]&&s[n-1]!==ce)return y.leftReverse(e,i,i);e.setSelectionRange(!0===r?t:n,n,"forward")}};function w(t){if(!0===(0,re.Wm)(t))return;const n=s.value,r=n.selectionStart,i=n.selectionEnd;if(37===t.keyCode||39===t.keyCode){const s=y[(39===t.keyCode?"right":"left")+(!0===e.reverseFillMask?"Reverse":"")];t.preventDefault(),s(n,r,i,t.shiftKey)}else 8===t.keyCode&&!0!==e.reverseFillMask&&r===i?y.left(n,r,i,!0):46===t.keyCode&&!0===e.reverseFillMask&&r===i&&y.rightReverse(n,r,i,!0)}function b(t){if(void 0===t||null===t||""===t)return"";if(!0===e.reverseFillMask)return _(t);const n=l;let r=0,i="";for(let e=0;e<n.length;e++){const s=t[r],o=n[e];if("string"===typeof o)i+=o,s===o&&r++;else{if(void 0===s||!o.regex.test(s))return i;i+=void 0!==o.transform?o.transform(s):s,r++}}return i}function _(e){const t=l,n=o.indexOf(ce);let r=e.length-1,i="";for(let s=t.length-1;s>=0&&r>-1;s--){const o=t[s];let a=e[r];if("string"===typeof o)i=o+i,a===o&&r--;else{if(void 0===a||!o.regex.test(a))return i;do{i=(void 0!==o.transform?o.transform(a):a)+i,r--,a=e[r]}while(n===s&&void 0!==a&&o.regex.test(a))}}return i}function E(e){return"string"!==typeof e||void 0===c?"number"===typeof e?c(""+e):e:c(e)}function S(t){return a.length-t.length<=0?t:!0===e.reverseFillMask&&t.length>0?a.slice(0,-t.length)+t:t+a.slice(t.length)}return{innerValue:h,hasMask:u,moveCursorForPaste:v,updateMaskValue:m,onMaskedKeydown:w}}var de=n(9550);function fe(e,t){function n(){const t=e.modelValue;try{const e="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(t)===t&&("length"in t?Array.from(t):[t]).forEach((t=>{e.items.add(t)})),{files:e.files}}catch(n){return{files:void 0}}}return!0===t?(0,i.Fl)((()=>{if("file"===e.type)return n()})):(0,i.Fl)(n)}const pe=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,ge=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,me=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/,ve=/[a-z0-9_ -]$/i;function ye(e){return function(t){if("compositionend"===t.type||"change"===t.type){if(!0!==t.target.qComposing)return;t.target.qComposing=!1,e(t)}else if("compositionupdate"===t.type&&!0!==t.target.qComposing&&"string"===typeof t.data){const e=!0===o.Lp.is.firefox?!1===ve.test(t.data):!0===pe.test(t.data)||!0===ge.test(t.data)||!0===me.test(t.data);!0===e&&(t.target.qComposing=!0)}}}const we=(0,_.L)({name:"QInput",inheritAttrs:!1,props:{...J,...ue,...de.Fz,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...ee,"paste","change"],setup(e,{emit:t,attrs:n}){const s={};let o,a,l,c,u=NaN;const h=(0,r.iH)(null),d=(0,de.Do)(e),{innerValue:f,hasMask:p,moveCursorForPaste:g,updateMaskValue:m,onMaskedKeydown:v}=he(e,t,O,h),y=fe(e,!0),w=(0,i.Fl)((()=>Y(f.value))),b=ye(R),_=te(),E=(0,i.Fl)((()=>"textarea"===e.type||!0===e.autogrow)),S=(0,i.Fl)((()=>!0===E.value||["text","search","url","tel","password"].includes(e.type))),T=(0,i.Fl)((()=>{const t={..._.splitAttrs.listeners.value,onInput:R,onPaste:A,onChange:L,onBlur:P,onFocus:x.sT};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=b,!0===p.value&&(t.onKeydown=v),!0===e.autogrow&&(t.onAnimationend=N),t})),k=(0,i.Fl)((()=>{const t={tabindex:0,"data-autofocus":!0===e.autofocus||void 0,rows:"textarea"===e.type?6:void 0,"aria-label":e.label,name:d.value,..._.splitAttrs.attributes.value,id:_.targetUid.value,maxlength:e.maxlength,disabled:!0===e.disable,readonly:!0===e.readonly};return!1===E.value&&(t.type=e.type),!0===e.autogrow&&(t.rows=1),t}));function I(){Z((()=>{const e=document.activeElement;null===h.value||h.value===e||null!==e&&e.id===_.targetUid.value||h.value.focus({preventScroll:!0})}))}function C(){null!==h.value&&h.value.select()}function A(n){if(!0===p.value&&!0!==e.reverseFillMask){const e=n.target;g(e,e.selectionStart,e.selectionEnd)}t("paste",n)}function R(n){if(!n||!n.target)return;if("file"===e.type)return void t("update:modelValue",n.target.files);const r=n.target.value;if(!0!==n.target.qComposing){if(!0===p.value)m(r,!1,n.inputType);else if(O(r),!0===S.value&&n.target===document.activeElement){const{selectionStart:e,selectionEnd:t}=n.target;void 0!==e&&void 0!==t&&(0,i.Y3)((()=>{n.target===document.activeElement&&0===r.indexOf(n.target.value)&&n.target.setSelectionRange(e,t)}))}!0===e.autogrow&&N()}else s.value=r}function O(n,r){c=()=>{"number"!==e.type&&!0===s.hasOwnProperty("value")&&delete s.value,e.modelValue!==n&&u!==n&&(u=n,!0===r&&(a=!0),t("update:modelValue",n),(0,i.Y3)((()=>{u===n&&(u=NaN)}))),c=void 0},"number"===e.type&&(o=!0,s.value=n),void 0!==e.debounce?(clearTimeout(l),s.value=n,l=setTimeout(c,e.debounce)):c()}function N(){const e=h.value;if(null!==e){const t=e.parentNode.style,{overflow:n}=e.style;t.marginBottom=e.scrollHeight-1+"px",e.style.height="1px",e.style.overflow="hidden",e.style.height=e.scrollHeight+"px",e.style.overflow=n,t.marginBottom=""}}function L(e){b(e),clearTimeout(l),void 0!==c&&c(),t("change",e.target.value)}function P(t){void 0!==t&&(0,x.sT)(t),clearTimeout(l),void 0!==c&&c(),o=!1,a=!1,delete s.value,"file"!==e.type&&setTimeout((()=>{null!==h.value&&(h.value.value=void 0!==f.value?f.value:"")}))}function D(){return!0===s.hasOwnProperty("value")?s.value:void 0!==f.value?f.value:""}(0,i.YP)((()=>e.type),(()=>{h.value&&(h.value.value=e.modelValue)})),(0,i.YP)((()=>e.modelValue),(t=>{if(!0===p.value){if(!0===a&&(a=!1,String(t)===u))return;m(t)}else f.value!==t&&(f.value=t,"number"===e.type&&!0===s.hasOwnProperty("value")&&(!0===o?o=!1:delete s.value));!0===e.autogrow&&(0,i.Y3)(N)})),(0,i.YP)((()=>e.autogrow),(e=>{!0===e?(0,i.Y3)(N):null!==h.value&&n.rows>0&&(h.value.style.height="auto")})),(0,i.YP)((()=>e.dense),(()=>{!0===e.autogrow&&(0,i.Y3)(N)})),(0,i.Jd)((()=>{P()})),(0,i.bv)((()=>{!0===e.autogrow&&N()})),Object.assign(_,{innerValue:f,fieldClass:(0,i.Fl)((()=>"q-"+(!0===E.value?"textarea":"input")+(!0===e.autogrow?" q-textarea--autogrow":""))),hasShadow:(0,i.Fl)((()=>"file"!==e.type&&"string"===typeof e.shadowText&&e.shadowText.length>0)),inputRef:h,emitValue:O,hasValue:w,floatingLabel:(0,i.Fl)((()=>!0===w.value||Y(e.displayValue))),getControl:()=>(0,i.h)(!0===E.value?"textarea":"input",{ref:h,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...k.value,...T.value,..."file"!==e.type?{value:D()}:y.value}),getShadowControl:()=>(0,i.h)("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(!0===E.value?"":" text-no-wrap")},[(0,i.h)("span",{class:"invisible"},D()),(0,i.h)("span",e.shadowText)])});const F=ne(_),M=(0,i.FN)();return Object.assign(M.proxy,{focus:I,select:C,getNativeElement:()=>h.value}),F}})},3414:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(3673),i=n(1959),s=n(2236),o=n(7277),a=n(908),l=n(7657),c=n(4716),u=n(1436);const h=(0,a.L)({name:"QItem",props:{...s.S,...o.$,tag:{type:String,default:"div"},active:{type:Boolean,default:null},clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=(0,r.FN)(),h=(0,s.Z)(e,a),{hasRouterLink:d,hasLink:f,linkProps:p,linkClass:g,linkTag:m,navigateToRouterLink:v}=(0,o.Z)(),y=(0,i.iH)(null),w=(0,i.iH)(null),b=(0,r.Fl)((()=>!0===e.clickable||!0===f.value||"label"===e.tag)),_=(0,r.Fl)((()=>!0!==e.disable&&!0===b.value)),E=(0,r.Fl)((()=>"q-item q-item-type row no-wrap"+(!0===e.dense?" q-item--dense":"")+(!0===h.value?" q-item--dark":"")+(!0===f.value&&null===e.active?g.value:!0===e.active?(void 0!==e.activeClass?` ${e.activeClass}`:"")+" q-item--active":"")+(!0===e.disable?" disabled":"")+(!0===_.value?" q-item--clickable q-link cursor-pointer "+(!0===e.manualFocus?"q-manual-focusable":"q-focusable q-hoverable")+(!0===e.focused?" q-manual-focusable--focused":""):""))),S=(0,r.Fl)((()=>{if(void 0===e.insetLevel)return null;const t=!0===a.lang.rtl?"Right":"Left";return{["padding"+t]:16+56*e.insetLevel+"px"}}));function T(e){!0===_.value&&(null!==w.value&&(!0!==e.qKeyEvent&&document.activeElement===y.value?w.value.focus():document.activeElement===w.value&&y.value.focus()),!0===d.value&&v(e),n("click",e))}function k(e){if(!0===_.value&&!0===(0,u.So)(e,13)){(0,c.NS)(e),e.qKeyEvent=!0;const t=new MouseEvent("click",e);t.qKeyEvent=!0,y.value.dispatchEvent(t)}n("keyup",e)}function I(){const e=(0,l.Bl)(t.default,[]);return!0===_.value&&e.unshift((0,r.h)("div",{class:"q-focus-helper",tabindex:-1,ref:w})),e}return()=>{const t={ref:y,class:E.value,style:S.value,onClick:T,onKeyup:k};return!0===_.value?(t.tabindex=e.tabindex||"0",Object.assign(t,p.value)):!0===b.value&&(t["aria-disabled"]="true"),(0,r.h)(m.value,t,I())}}})},2350:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908),s=n(7657);const o=(0,i.L)({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=(0,r.Fl)((()=>parseInt(e.lines,10))),i=(0,r.Fl)((()=>"q-item__label"+(!0===e.overline?" q-item__label--overline text-overline":"")+(!0===e.caption?" q-item__label--caption text-caption":"")+(!0===e.header?" q-item__label--header":"")+(1===n.value?" ellipsis":""))),o=(0,r.Fl)((()=>void 0!==e.lines&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null));return()=>(0,r.h)("div",{style:o.value,class:i.value},(0,s.KR)(t.default))}})},2035:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908),s=n(7657);const o=(0,i.L)({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-item__section column q-item__section--"+(!0===e.avatar||!0===e.side||!0===e.thumbnail?"side":"main")+(!0===e.top?" q-item__section--top justify-start":" justify-center")+(!0===e.avatar?" q-item__section--avatar":"")+(!0===e.thumbnail?" q-item__section--thumbnail":"")+(!0===e.noWrap?" q-item__section--nowrap":"")));return()=>(0,r.h)("div",{class:n.value},(0,s.KR)(t.default))}})},7011:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(908),s=n(2236),o=n(7657);const a=(0,i.L)({name:"QList",props:{...s.S,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:t}){const n=(0,r.FN)(),i=(0,s.Z)(e,n.proxy.$q),a=(0,r.Fl)((()=>"q-list"+(!0===e.bordered?" q-list--bordered":"")+(!0===e.dense?" q-list--dense":"")+(!0===e.separator?" q-list--separator":"")+(!0===i.value?" q-list--dark":"")+(!0===e.padding?" q-list--padding":"")));return()=>(0,r.h)("div",{class:a.value},(0,o.KR)(t.default))}})},3066:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(3673),i=n(1959),s=n(4688),o=(n(3610),n(71),n(908)),a=n(8400),l=n(4716);const{passive:c}=l.rU,u=["both","horizontal","vertical"],h=(0,o.L)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>u.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i,s,o=null;function u(){null!==o&&o();const r=Math.max(0,(0,a.u3)(i)),s=(0,a.OI)(i),l={top:r-n.position.top,left:s-n.position.left};if("vertical"===e.axis&&0===l.top||"horizontal"===e.axis&&0===l.left)return;const c=Math.abs(l.top)>=Math.abs(l.left)?l.top<0?"up":"down":l.left<0?"left":"right";n.position={top:r,left:s},n.directionChanged=n.direction!==c,n.delta=l,!0===n.directionChanged&&(n.direction=c,n.inflectionPoint=n.position),t("scroll",{...n})}function h(){i=(0,a.b0)(s,e.scrollTarget),i.addEventListener("scroll",f,c),f(!0)}function d(){void 0!==i&&(i.removeEventListener("scroll",f,c),i=void 0)}function f(t){if(!0===t||0===e.debounce||"0"===e.debounce)u();else if(null===o){const[t,n]=e.debounce?[setTimeout(u,e.debounce),clearTimeout]:[requestAnimationFrame(u),cancelAnimationFrame];o=()=>{n(t),o=null}}}(0,r.YP)((()=>e.scrollTarget),(()=>{d(),h()}));const p=(0,r.FN)();return(0,r.bv)((()=>{s=p.proxy.$el.parentNode,h()})),(0,r.Jd)((()=>{null!==o&&o(),d()})),Object.assign(p.proxy,{trigger:f,getPosition:()=>n}),l.ZT}});var d=n(5151),f=n(7657),p=n(2547);const g=(0,o.L)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=(0,r.FN)(),l=(0,i.iH)(null),c=(0,i.iH)(o.screen.height),u=(0,i.iH)(!0===e.container?0:o.screen.width),g=(0,i.iH)({position:0,direction:"down",inflectionPoint:0}),m=(0,i.iH)(0),v=(0,i.iH)(!0===s.uX.value?0:(0,a.np)()),y=(0,r.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),w=(0,r.Fl)((()=>!1===e.container?{minHeight:o.screen.height+"px"}:null)),b=(0,r.Fl)((()=>0!==v.value?{[!0===o.lang.rtl?"left":"right"]:`${v.value}px`}:null)),_=(0,r.Fl)((()=>0!==v.value?{[!0===o.lang.rtl?"right":"left"]:0,[!0===o.lang.rtl?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null));function E(t){if(!0===e.container||!0!==document.qScrollPrevented){const r={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};g.value=r,void 0!==e.onScroll&&n("scroll",r)}}function S(t){const{height:r,width:i}=t;let s=!1;c.value!==r&&(s=!0,c.value=r,void 0!==e.onScrollHeight&&n("scroll-height",r),k()),u.value!==i&&(s=!0,u.value=i),!0===s&&void 0!==e.onResize&&n("resize",t)}function T({height:e}){m.value!==e&&(m.value=e,k())}function k(){if(!0===e.container){const e=c.value>m.value?(0,a.np)():0;v.value!==e&&(v.value=e)}}let I;const C={instances:{},view:(0,r.Fl)((()=>e.view)),isContainer:(0,r.Fl)((()=>e.container)),rootRef:l,height:c,containerHeight:m,scrollbarWidth:v,totalWidth:(0,r.Fl)((()=>u.value+v.value)),rows:(0,r.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,i.qj)({size:0,offset:0,space:!1}),right:(0,i.qj)({size:300,offset:0,space:!1}),footer:(0,i.qj)({size:0,offset:0,space:!1}),left:(0,i.qj)({size:300,offset:0,space:!1}),scroll:g,animate(){void 0!==I?clearTimeout(I):document.body.classList.add("q-body--layout-animate"),I=setTimeout((()=>{document.body.classList.remove("q-body--layout-animate"),I=void 0}),155)},update(e,t,n){C[e][t]=n}};if((0,r.JJ)(p.YE,C),(0,a.np)()>0){let x=null;const A=document.body;function R(){x=null,A.classList.remove("hide-scrollbar")}function O(){if(null===x){if(A.scrollHeight>o.screen.height)return;A.classList.add("hide-scrollbar")}else clearTimeout(x);x=setTimeout(R,300)}function N(e){null!==x&&"remove"===e&&(clearTimeout(x),R()),window[`${e}EventListener`]("resize",O)}(0,r.YP)((()=>!0!==e.container?"add":"remove"),N),!0!==e.container&&N("add"),(0,r.Ah)((()=>{N("remove")}))}return()=>{const n=(0,f.vs)(t.default,[(0,r.h)(h,{onScroll:E}),(0,r.h)(d.Z,{onResize:S})]),i=(0,r.h)("div",{class:y.value,style:w.value,ref:!0===e.container?void 0:l,tabindex:-1},n);return!0===e.container?(0,r.h)("div",{class:"q-layout-container overflow-hidden",ref:l},[(0,r.h)(d.Z,{onResize:T}),(0,r.h)("div",{class:"absolute-full",style:b.value},[(0,r.h)("div",{class:"scroll",style:_.value},[i])])]):i}}})},2652:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(3673),i=n(908),s=n(7657),o=n(2547);const a=(0,i.L)({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),i=(0,r.f3)(o.YE,(()=>{console.error("QPageContainer needs to be child of QLayout")}));(0,r.JJ)(o.Mw,!0);const a=(0,r.Fl)((()=>{const e={};return!0===i.header.space&&(e.paddingTop=`${i.header.size}px`),!0===i.right.space&&(e["padding"+(!0===n.lang.rtl?"Left":"Right")]=`${i.right.size}px`),!0===i.footer.space&&(e.paddingBottom=`${i.footer.size}px`),!0===i.left.space&&(e["padding"+(!0===n.lang.rtl?"Right":"Left")]=`${i.left.size}px`),e}));return()=>(0,r.h)("div",{class:"q-page-container",style:a.value},(0,s.KR)(t.default))}})},5151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(3673),i=n(1959),s=n(4688);function o(){const e=(0,i.iH)(!s.uX.value);return!1===e.value&&(0,r.bv)((()=>{e.value=!0})),e}var a=n(908),l=n(4716);const c="undefined"!==typeof ResizeObserver,u=!0===c?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},h=(0,a.L)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n,i=null,s={width:-1,height:-1};function a(t){!0===t||0===e.debounce||"0"===e.debounce?h():null===i&&(i=setTimeout(h,e.debounce))}function h(){if(clearTimeout(i),i=null,n){const{offsetWidth:e,offsetHeight:r}=n;e===s.width&&r===s.height||(s={width:e,height:r},t("resize",s))}}const d=(0,r.FN)();if(Object.assign(d.proxy,{trigger:a}),!0===c){let f;return(0,r.bv)((()=>{(0,r.Y3)((()=>{n=d.proxy.$el.parentNode,n&&(f=new ResizeObserver(a),f.observe(n),h())}))})),(0,r.Jd)((()=>{clearTimeout(i),void 0!==f&&(void 0!==f.disconnect?f.disconnect():n&&f.unobserve(n))})),l.ZT}{const p=o();let g;function m(){clearTimeout(i),void 0!==g&&(void 0!==g.removeEventListener&&g.removeEventListener("resize",a,l.rU.passive),g=void 0)}function v(){m(),n&&n.contentDocument&&(g=n.contentDocument.defaultView,g.addEventListener("resize",a,l.rU.passive),h())}return(0,r.bv)((()=>{(0,r.Y3)((()=>{n=d.proxy.$el,n&&v()}))})),(0,r.Jd)(m),()=>{if(!0===p.value)return(0,r.h)("object",{style:u.style,tabindex:-1,type:"text/html",data:u.url,"aria-hidden":"true",onLoad:v})}}}})},5869:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(3673),i=n(2236),s=n(908);const o={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},a={xs:2,sm:4,md:8,lg:16,xl:24},l=(0,s.L)({name:"QSeparator",props:{...i.S,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=(0,r.FN)(),n=(0,i.Z)(e,t.proxy.$q),s=(0,r.Fl)((()=>!0===e.vertical?"vertical":"horizontal")),l=(0,r.Fl)((()=>` q-separator--${s.value}`)),c=(0,r.Fl)((()=>!1!==e.inset?`${l.value}-${o[e.inset]}`:"")),u=(0,r.Fl)((()=>`q-separator${l.value}${c.value}`+(void 0!==e.color?` bg-${e.color}`:"")+(!0===n.value?" q-separator--dark":""))),h=(0,r.Fl)((()=>{const t={};if(void 0!==e.size&&(t[!0===e.vertical?"width":"height"]=e.size),!1!==e.spaced){const n=!0===e.spaced?`${a.md}px`:e.spaced in a?`${a[e.spaced]}px`:e.spaced,r=!0===e.vertical?["Left","Right"]:["Top","Bottom"];t[`margin${r[0]}`]=t[`margin${r[1]}`]=n}return t}));return()=>(0,r.h)("hr",{class:u.value,style:h.value,"aria-orientation":s.value})}})},2471:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(8880),s=n(908);const o=(0,s.L)({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:t,emit:n}){let s,o,a,l,c,u,h=!1;function d(){s&&s(),s=null,h=!1,clearTimeout(a),clearTimeout(l),void 0!==o&&o.removeEventListener("transitionend",c),c=null}function f(t,n,r){t.style.overflowY="hidden",void 0!==n&&(t.style.height=`${n}px`),t.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,h=!0,s=r}function p(e,t){e.style.overflowY=null,e.style.height=null,e.style.transition=null,d(),t!==u&&n(t)}function g(t,n){let r=0;o=t,!0===h?(d(),r=t.offsetHeight===t.scrollHeight?0:void 0):u="hide",f(t,r,n),a=setTimeout((()=>{t.style.height=`${t.scrollHeight}px`,c=e=>{Object(e)===e&&e.target!==t||p(t,"show")},t.addEventListener("transitionend",c),l=setTimeout(c,1.1*e.duration)}),100)}function m(t,n){let r;o=t,!0===h?d():(u="show",r=t.scrollHeight),f(t,r,n),a=setTimeout((()=>{t.style.height=0,c=e=>{Object(e)===e&&e.target!==t||p(t,"hide")},t.addEventListener("transitionend",c),l=setTimeout(c,1.1*e.duration)}),100)}return(0,r.Jd)((()=>{!0===h&&d()})),()=>(0,r.h)(i.uT,{css:!1,appear:e.appear,onEnter:g,onLeave:m},t.default)}})},2025:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908);const s=(0,r.h)("div",{class:"q-space"}),o=(0,i.L)({name:"QSpace",setup(){return()=>s}})},9754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(3673),i=n(2417);const s={size:{type:[Number,String],default:"1em"},color:String};function o(e){return{cSize:(0,r.Fl)((()=>e.size in i.Ok?`${i.Ok[e.size]}px`:e.size)),classes:(0,r.Fl)((()=>"q-spinner"+(e.color?` text-${e.color}`:"")))}}var a=n(908);const l=(0,a.L)({name:"QSpinner",props:{...s,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=o(e);return()=>(0,r.h)("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[(0,r.h)("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}})},2582:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(3673),i=n(4554),s=n(1959),o=n(2236),a=n(2417);function l(e,t){const n=(0,s.iH)(null),i=(0,r.Fl)((()=>!0!==e.disable?null:(0,r.h)("span",{ref:n,class:"no-outline",tabindex:-1})));function o(e){const r=t.value;void 0!==e&&0===e.type.indexOf("key")?null!==r&&document.activeElement!==r&&!0===r.contains(document.activeElement)&&r.focus():null!==n.value&&(void 0===e||null!==r&&!0===r.contains(e.target))&&n.value.focus()}return{refocusTargetEl:i,refocusTarget:o}}var c=n(9550);const u={xs:30,sm:35,md:40,lg:50,xl:60};var h=n(4716),d=n(7657);const f={...o.S,...a.LU,...c.Fz,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,toggleOrder:{type:String,validator:e=>"tf"===e||"ft"===e},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},p=["update:modelValue"];function g(e,t){const{props:n,slots:i,emit:f,proxy:p}=(0,r.FN)(),{$q:g}=p,m=(0,o.Z)(n,g),v=(0,s.iH)(null),{refocusTargetEl:y,refocusTarget:w}=l(n,v),b=(0,a.ZP)(n,u),_=(0,r.Fl)((()=>void 0!==n.val&&Array.isArray(n.modelValue))),E=(0,r.Fl)((()=>{const e=(0,s.IU)(n.val);return!0===_.value?n.modelValue.findIndex((t=>(0,s.IU)(t)===e)):-1})),S=(0,r.Fl)((()=>!0===_.value?E.value>-1:(0,s.IU)(n.modelValue)===(0,s.IU)(n.trueValue))),T=(0,r.Fl)((()=>!0===_.value?-1===E.value:(0,s.IU)(n.modelValue)===(0,s.IU)(n.falseValue))),k=(0,r.Fl)((()=>!1===S.value&&!1===T.value)),I=(0,r.Fl)((()=>!0===n.disable?-1:n.tabindex||0)),C=(0,r.Fl)((()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(!0===n.disable?" disabled":"")+(!0===m.value?` q-${e}--dark`:"")+(!0===n.dense?` q-${e}--dense`:"")+(!0===n.leftLabel?" reverse":""))),x=(0,r.Fl)((()=>{const t=!0===S.value?"truthy":!0===T.value?"falsy":"indet",r=void 0===n.color||!0!==n.keepColor&&("toggle"===e?!0!==S.value:!0===T.value)?"":` text-${n.color}`;return`q-${e}__inner relative-position non-selectable q-${e}__inner--${t}${r}`})),A=(0,r.Fl)((()=>{const e={type:"checkbox"};return void 0!==n.name&&Object.assign(e,{"^checked":!0===S.value?"checked":void 0,name:n.name,value:!0===_.value?n.val:n.trueValue}),e})),R=(0,c.eX)(A),O=(0,r.Fl)((()=>{const e={tabindex:I.value,role:"checkbox","aria-label":n.label,"aria-checked":!0===k.value?"mixed":!0===S.value?"true":"false"};return!0===n.disable&&(e["aria-disabled"]="true"),e}));function N(e){void 0!==e&&((0,h.NS)(e),w(e)),!0!==n.disable&&f("update:modelValue",L(),e)}function L(){if(!0===_.value){if(!0===S.value){const e=n.modelValue.slice();return e.splice(E.value,1),e}return n.modelValue.concat([n.val])}if(!0===S.value){if("ft"!==n.toggleOrder||!1===n.toggleIndeterminate)return n.falseValue}else{if(!0!==T.value)return"ft"!==n.toggleOrder?n.trueValue:n.falseValue;if("ft"===n.toggleOrder||!1===n.toggleIndeterminate)return n.trueValue}return n.indeterminateValue}function P(e){13!==e.keyCode&&32!==e.keyCode||(0,h.NS)(e)}function D(e){13!==e.keyCode&&32!==e.keyCode||N(e)}const F=t(S,k);return Object.assign(p,{toggle:N}),()=>{const t=F();!0!==n.disable&&R(t,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const s=[(0,r.h)("div",{class:x.value,style:b.value},t)];null!==y.value&&s.push(y.value);const o=void 0!==n.label?(0,d.vs)(i.default,[n.label]):(0,d.KR)(i.default);return void 0!==o&&s.push((0,r.h)("div",{class:`q-${e}__label q-anchor--skip`},o)),(0,r.h)("div",{ref:v,class:C.value,...O.value,onClick:N,onKeydown:P,onKeyup:D},s)}}var m=n(908);const v=(0,m.L)({name:"QToggle",props:{...f,icon:String,iconColor:String},emits:p,setup(e){function t(t,n){const s=(0,r.Fl)((()=>(!0===t.value?e.checkedIcon:!0===n.value?e.indeterminateIcon:e.uncheckedIcon)||e.icon)),o=(0,r.Fl)((()=>!0===t.value?e.iconColor:null));return()=>[(0,r.h)("div",{class:"q-toggle__track"}),(0,r.h)("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},void 0!==s.value?[(0,r.h)(i.Z,{name:s.value,color:o.value})]:void 0)]}return g("toggle",t)}})},9570:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908),s=n(7657);const o=(0,i.L)({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-toolbar row no-wrap items-center"+(!0===e.inset?" q-toolbar--inset":"")));return()=>(0,r.h)("div",{class:n.value},(0,s.KR)(t.default))}})},3747:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908),s=n(7657);const o=(0,i.L)({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-toolbar__title ellipsis"+(!0===e.shrink?" col-shrink":"")));return()=>(0,r.h)("div",{class:n.value},(0,s.KR)(t.default))}})},9992:(e,t,n)=>{"use strict";n.d(t,{ZP:()=>a,jO:()=>o});n(3610);var r=n(3673);const i={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},s=Object.keys(i),o={align:{type:String,validator:e=>s.includes(e)}};function a(e){return(0,r.Fl)((()=>{const t=void 0===e.align?!0===e.vertical?"stretch":"left":e.align;return`${!0===e.vertical?"items":"justify"}-${i[t]}`}))}},2236:(e,t,n)=>{"use strict";n.d(t,{S:()=>i,Z:()=>s});var r=n(3673);const i={dark:{type:Boolean,default:null}};function s(e,t){return(0,r.Fl)((()=>null===e.dark?t.dark.isActive:e.dark))}},9550:(e,t,n)=>{"use strict";n.d(t,{Do:()=>o,Fz:()=>i,eX:()=>s});var r=n(3673);const i={name:String};function s(e={}){return(t,n,i)=>{t[n]((0,r.h)("input",{class:"hidden"+(i||""),...e.value}))}}function o(e){return(0,r.Fl)((()=>e.name||e.for))}},7277:(e,t,n)=>{"use strict";n.d(t,{$:()=>d,Z:()=>f});n(5363);var r=n(3673),i=n(4716),s=n(7445);function o(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function a(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function l(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!1===Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function c(e,t){return!0===Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function u(e,t){return!0===Array.isArray(e)?c(e,t):!0===Array.isArray(t)?c(t,e):e===t}function h(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!1===u(e[n],t[n]))return!1;return!0}const d={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},href:String,target:String,disable:Boolean};function f(e){const t=(0,r.FN)(),{props:n,proxy:c}=t,u=(0,s.Rb)(t),d=(0,r.Fl)((()=>!0!==n.disable&&void 0!==n.href)),f=(0,r.Fl)((()=>!0===u&&!0!==n.disable&&!0!==d.value&&void 0!==n.to&&null!==n.to&&""!==n.to)),p=(0,r.Fl)((()=>{if(!0===f.value)try{return c.$router.resolve(n.to)}catch(e){}return null})),g=(0,r.Fl)((()=>null!==p.value)),m=(0,r.Fl)((()=>!0===d.value||!0===g.value)),v=(0,r.Fl)((()=>"a"===n.type||!0===m.value?"a":n.tag||e||"div")),y=(0,r.Fl)((()=>!0===d.value?{href:n.href,target:n.target}:!0===g.value?{href:p.value.href,target:n.target}:{})),w=(0,r.Fl)((()=>{if(!1===g.value)return null;const{matched:e}=p.value,{length:t}=e,n=e[t-1];if(void 0===n)return-1;const r=c.$route.matched;if(0===r.length)return-1;const i=r.findIndex(a.bind(null,n));if(i>-1)return i;const s=o(e[t-2]);return t>1&&o(n)===s&&r[r.length-1].path!==s?r.findIndex(a.bind(null,e[t-2])):i})),b=(0,r.Fl)((()=>!0===g.value&&w.value>-1&&l(c.$route.params,p.value.params))),_=(0,r.Fl)((()=>!0===b.value&&w.value===c.$route.matched.length-1&&h(c.$route.params,p.value.params))),E=(0,r.Fl)((()=>!0===g.value?!0===_.value?` ${n.exactActiveClass} ${n.activeClass}`:!0===n.exact?"":!0===b.value?` ${n.activeClass}`:"":""));function S(e){return!(!0===n.disable||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||!0!==e.__qNavigate&&!0===e.defaultPrevented||void 0!==e.button&&0!==e.button||"_blank"===n.target)&&((0,i.X$)(e),c.$router[!0===n.replace?"replace":"push"](n.to).catch((e=>e)))}return{hasRouterLink:g,hasHrefLink:d,hasLink:m,linkTag:v,linkRoute:p,linkIsActive:b,linkIsExactActive:_,linkClass:E,linkProps:y,navigateToRouterLink:S}}},2417:(e,t,n)=>{"use strict";n.d(t,{LU:()=>s,Ok:()=>i,ZP:()=>o});var r=n(3673);const i={xs:18,sm:24,md:32,lg:38,xl:46},s={size:String};function o(e,t=i){return(0,r.Fl)((()=>void 0!==e.size?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null))}},8825:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(3673),i=n(2547);function s(){return(0,r.f3)(i.Ng)}},6489:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(908),i=n(2012),s=n(4716),o=n(1436);function a(e,t=250){let n,r=!1;return function(){return!1===r&&(r=!0,setTimeout((()=>{r=!1}),t),n=e.apply(this,arguments)),n}}function l(e,t,n,r){!0===n.modifiers.stop&&(0,s.sT)(e);const o=n.modifiers.color;let a=n.modifiers.center;a=!0===a||!0===r;const l=document.createElement("span"),c=document.createElement("span"),u=(0,s.FK)(e),{left:h,top:d,width:f,height:p}=t.getBoundingClientRect(),g=Math.sqrt(f*f+p*p),m=g/2,v=(f-g)/2+"px",y=a?v:u.left-h-m+"px",w=(p-g)/2+"px",b=a?w:u.top-d-m+"px";c.className="q-ripple__inner",(0,i.iv)(c,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${y},${b},0) scale3d(.2,.2,1)`,opacity:0}),l.className="q-ripple"+(o?" text-"+o:""),l.setAttribute("dir","ltr"),l.appendChild(c),t.appendChild(l);const _=()=>{l.remove(),clearTimeout(E)};n.abort.push(_);let E=setTimeout((()=>{c.classList.add("q-ripple__inner--enter"),c.style.transform=`translate3d(${v},${w},0) scale3d(1,1,1)`,c.style.opacity=.2,E=setTimeout((()=>{c.classList.remove("q-ripple__inner--enter"),c.classList.add("q-ripple__inner--leave"),c.style.opacity=0,E=setTimeout((()=>{l.remove(),n.abort.splice(n.abort.indexOf(_),1)}),275)}),250)}),50)}function c(e,{modifiers:t,value:n,arg:r}){const i=Object.assign({},e.cfg.ripple,t,n);e.modifiers={early:!0===i.early,stop:!0===i.stop,center:!0===i.center,color:i.color||r,keyCodes:[].concat(i.keyCodes||13)}}const u=(0,r.f)({name:"ripple",beforeMount(e,t){const n={cfg:t.instance.$.appContext.config.globalProperties.$q.config,enabled:!1!==t.value,modifiers:{},abort:[],start(t){!0===n.enabled&&!0!==t.qSkipRipple&&t.type===(!0===n.modifiers.early?"pointerdown":"click")&&l(t,e,n,!0===t.qKeyEvent)},keystart:a((t=>{!0===n.enabled&&!0!==t.qSkipRipple&&!0===(0,o.So)(t,n.modifiers.keyCodes)&&t.type==="key"+(!0===n.modifiers.early?"down":"up")&&l(t,e,n,!0)}),300)};c(n,t),e.__qripple=n,(0,s.M0)(n,"main",[[e,"pointerdown","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n.enabled=!1!==t.value,!0===n.enabled&&Object(t.value)===t.value&&c(n,t)}},beforeUnmount(e){const t=e.__qripple;t.abort.forEach((e=>{e()})),(0,s.ul)(t,"main"),delete e._qripple}})},6583:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(71),n(3610);var r=n(4688),i=n(4716);const s=()=>!0;function o(e){return"string"===typeof e&&""!==e&&"/"!==e&&"#/"!==e}function a(e){return!0===e.startsWith("#")&&(e=e.substring(1)),!1===e.startsWith("/")&&(e="/"+e),!0===e.endsWith("/")&&(e=e.substring(0,e.length-1)),"#"+e}function l(e){if(!1===e.backButtonExit)return()=>!1;if("*"===e.backButtonExit)return s;const t=["#/"];return!0===Array.isArray(e.backButtonExit)&&t.push(...e.backButtonExit.filter(o).map(a)),()=>t.includes(window.location.hash)}const c={__history:[],add:i.ZT,remove:i.ZT,install({$q:e}){if(!0===this.__installed)return;const{cordova:t,capacitor:n}=r.Lp.is;if(!0!==t&&!0!==n)return;const i=e.config[!0===t?"cordova":"capacitor"];if(void 0!==i&&!1===i.backButton)return;if(!0===n&&(void 0===window.Capacitor||void 0===window.Capacitor.Plugins.App))return;this.add=e=>{void 0===e.condition&&(e.condition=s),this.__history.push(e)},this.remove=e=>{const t=this.__history.indexOf(e);t>=0&&this.__history.splice(t,1)};const o=l(Object.assign({backButtonExit:!0},i)),a=()=>{if(this.__history.length){const e=this.__history[this.__history.length-1];!0===e.condition()&&(this.__history.pop(),e.handler())}else!0===o()?navigator.app.exitApp():window.history.back()};!0===t?document.addEventListener("deviceready",(()=>{document.addEventListener("backbutton",a,!1)})):window.Capacitor.Plugins.App.addListener("backButton",a)}}},9409:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(2002),i=n(9085);const s={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},o=(0,r.Z)({iconMapFn:null,__icons:{}},{set(e,t){const n={...e,rtl:!0===e.rtl};n.set=o.set,Object.assign(o.__icons,n)},install({$q:e,iconSet:t,ssrContext:n}){void 0!==e.config.iconMapFn&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__icons,(0,i.g)(e,"iconMapFn",(()=>this.iconMapFn),(e=>{this.iconMapFn=e})),!0===this.__installed?void 0!==t&&this.set(t):this.set(t||s)}}),a=o},7351:(e,t,n)=>{"use strict";n.d(t,{$:()=>C,Z:()=>R});n(3610);var r=n(8880),i=n(4688),s=(n(71),n(2002)),o=n(4716),a=n(9405);const l=["sm","md","lg","xl"],{passive:c}=o.rU,u=(0,s.Z)({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:o.ZT,setDebounce:o.ZT,install({$q:e,onSSRHydrated:t}){if(e.screen=this,!0===this.__installed)return void(void 0!==e.config.screen&&(!1===e.config.screen.bodyClasses?document.body.classList.remove(`screen--${this.name}`):this.__update(!0)));const{visualViewport:n}=window,r=n||window,s=document.scrollingElement||document.documentElement,o=void 0===n||!0===i.Lp.is.mobile?()=>[Math.max(window.innerWidth,s.clientWidth),Math.max(window.innerHeight,s.clientHeight)]:()=>[n.width*n.scale+window.innerWidth-s.clientWidth,n.height*n.scale+window.innerHeight-s.clientHeight],u=void 0!==e.config.screen&&!0===e.config.screen.bodyClasses;this.__update=e=>{const[t,n]=o();if(n!==this.height&&(this.height=n),t!==this.width)this.width=t;else if(!0!==e)return;let r=this.sizes;this.gt.xs=t>=r.sm,this.gt.sm=t>=r.md,this.gt.md=t>=r.lg,this.gt.lg=t>=r.xl,this.lt.sm=t<r.sm,this.lt.md=t<r.md,this.lt.lg=t<r.lg,this.lt.xl=t<r.xl,this.xs=this.lt.sm,this.sm=!0===this.gt.xs&&!0===this.lt.md,this.md=!0===this.gt.sm&&!0===this.lt.lg,this.lg=!0===this.gt.md&&!0===this.lt.xl,this.xl=this.gt.lg,r=(!0===this.xs?"xs":!0===this.sm&&"sm")||!0===this.md&&"md"||!0===this.lg&&"lg"||"xl",r!==this.name&&(!0===u&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${r}`)),this.name=r)};let h,d={},f=16;this.setSizes=e=>{l.forEach((t=>{void 0!==e[t]&&(d[t]=e[t])}))},this.setDebounce=e=>{f=e};const p=()=>{const e=getComputedStyle(document.body);e.getPropertyValue("--q-size-sm")&&l.forEach((t=>{this.sizes[t]=parseInt(e.getPropertyValue(`--q-size-${t}`),10)})),this.setSizes=e=>{l.forEach((t=>{e[t]&&(this.sizes[t]=e[t])})),this.__update(!0)},this.setDebounce=e=>{void 0!==h&&r.removeEventListener("resize",h,c),h=e>0?(0,a.Z)(this.__update,e):this.__update,r.addEventListener("resize",h,c)},this.setDebounce(f),Object.keys(d).length>0?(this.setSizes(d),d=void 0):this.__update(),!0===u&&"xs"===this.name&&document.body.classList.add("screen--xs")};!0===i.uX.value?t.push(p):p()}});n(5363);const h=(0,s.Z)({isActive:!1,mode:!1},{__media:void 0,set(e){h.mode=e,"auto"===e?(void 0===h.__media&&(h.__media=window.matchMedia("(prefers-color-scheme: dark)"),h.__updateMedia=()=>{h.set("auto")},h.__media.addListener(h.__updateMedia)),e=h.__media.matches):void 0!==h.__media&&(h.__media.removeListener(h.__updateMedia),h.__media=void 0),h.isActive=!0===e,document.body.classList.remove("body--"+(!0===e?"light":"dark")),document.body.classList.add("body--"+(!0===e?"dark":"light"))},toggle(){h.set(!1===h.isActive)},install({$q:e,onSSRHydrated:t,ssrContext:n}){const{dark:r}=e.config;if(e.dark=this,!0===this.__installed&&void 0===r)return;this.isActive=!0===r;const s=void 0!==r&&r;if(!0===i.uX.value){const e=e=>{this.__fromSSR=e},n=this.set;this.set=e,e(s),t.push((()=>{this.set=n,this.set(this.__fromSSR)}))}else this.set(s)}}),d=h;var f=n(6583),p=n(9111),g=n(4398),m=n(1436);function v(e){return!0===e.ios?"ios":!0===e.android?"android":void 0}function y({is:e,has:t,within:n},r){const i=[!0===e.desktop?"desktop":"mobile",(!1===t.touch?"no-":"")+"touch"];if(!0===e.mobile){const t=v(e);void 0!==t&&i.push("platform-"+t)}if(!0===e.nativeMobile){const t=e.nativeMobileWrapper;i.push(t),i.push("native-mobile"),!0!==e.ios||void 0!==r[t]&&!1===r[t].iosStatusBarPadding||i.push("q-ios-padding")}else!0===e.electron?i.push("electron"):!0===e.bex&&i.push("bex");return!0===n.iframe&&i.push("within-iframe"),i}function w(){const e=document.body.className;let t=e;void 0!==i.aG&&(t=t.replace("desktop","platform-ios mobile")),!0===i.Lp.has.touch&&(t=t.replace("no-touch","touch")),!0===i.Lp.within.iframe&&(t+=" within-iframe"),e!==t&&(document.body.className=t)}function b(e){for(const t in e)(0,g.Z)(t,e[t])}const _={install(e){if(!0!==this.__installed){if(!0===i.uX.value)w();else{const{$q:t}=e;void 0!==t.config.brand&&b(t.config.brand);const n=y(i.Lp,t.config);document.body.classList.add.apply(document.body.classList,n)}!0===i.Lp.is.ios&&document.body.addEventListener("touchstart",o.ZT),window.addEventListener("keydown",m.ZK,!0)}}};var E=n(9409),S=n(2547),T=n(5578),k=n(782);const I=[i.ZP,_,d,u,f.Z,p.Z,E.Z];function C(e,t){const n=(0,r.ri)(e);n.config.globalProperties=t.config.globalProperties;const{reload:i,...s}=t._context;return Object.assign(n._context,s),n}function x(e,t){t.forEach((t=>{t.install(e),t.__installed=!0}))}function A(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(S.Ng,n.$q),x(n,I),void 0!==t.components&&Object.values(t.components).forEach((t=>{!0===(0,k.Kn)(t)&&void 0!==t.name&&e.component(t.name,t)})),void 0!==t.directives&&Object.values(t.directives).forEach((t=>{!0===(0,k.Kn)(t)&&void 0!==t.name&&e.directive(t.name,t)})),void 0!==t.plugins&&x(n,Object.values(t.plugins).filter((e=>"function"===typeof e.install&&!1===I.includes(e)))),!0===i.uX.value&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach((e=>{e()})),n.$q.onSSRHydrated=()=>{}})}const R=function(e,t={}){const n={version:"2.7.5"};!1===T.Uf?(void 0!==t.config&&Object.assign(T.w6,t.config),n.config={...T.w6},(0,T.tP)()):n.config=t.config||{},A(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})}},9111:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a,F:()=>i});n(5363);var r=n(2002);const i={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>1===e?"1 record selected.":(0===e?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function s(){const e=!0===Array.isArray(navigator.languages)&&navigator.languages.length>0?navigator.languages[0]:navigator.language;if("string"===typeof e)return e.split(/[-_]/).map(((e,t)=>0===t?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase())).join("-")}const o=(0,r.Z)({__langPack:{}},{getLocale:s,set(e=i,t){const n={...e,rtl:!0===e.rtl,getLocale:s};{const e=document.documentElement;e.setAttribute("dir",!0===n.rtl?"rtl":"ltr"),e.setAttribute("lang",n.isoName),n.set=o.set,Object.assign(o.__langPack,n),o.props=n,o.isoName=n.isoName,o.nativeName=n.nativeName}},install({$q:e,lang:t,ssrContext:n}){e.lang=o.__langPack,!0===this.__installed?void 0!==t&&this.set(t):this.set(t||i)}}),a=o},9140:(e,t,n)=>{"use strict";n.d(t,{Z:()=>N});n(3610);var r=n(1959),i=n(3673),s=n(8880),o=n(5096),a=n(4554),l=n(8240),c=n(9754),u=n(908),h=(n(4716),n(5578));const d=[];let f=document.body;function p(e){const t=document.createElement("div");if(void 0!==e&&(t.id=e),void 0!==h.w6.globalNodes){const e=h.w6.globalNodes["class"];void 0!==e&&(t.className=e)}return f.appendChild(t),d.push(t),t}var g=n(7351),m=n(782);let v=0;const y={},w={},b={},_={},E=/^\s*$/,S=[],T=["top-left","top-right","bottom-left","bottom-right","top","bottom","left","right","center"],k=["top-left","top-right","bottom-left","bottom-right"],I={positive:{icon:e=>e.iconSet.type.positive,color:"positive"},negative:{icon:e=>e.iconSet.type.negative,color:"negative"},warning:{icon:e=>e.iconSet.type.warning,color:"warning",textColor:"dark"},info:{icon:e=>e.iconSet.type.info,color:"info"},ongoing:{group:!1,timeout:0,spinner:!0,color:"grey-8"}};function C(e,t,n){if(!e)return R("parameter required");let i;const s={textColor:"white"};if(!0!==e.ignoreDefaults&&Object.assign(s,y),!1===(0,m.Kn)(e)&&(s.type&&Object.assign(s,I[s.type]),e={message:e}),Object.assign(s,I[e.type||s.type],e),"function"===typeof s.icon&&(s.icon=s.icon(t)),s.spinner?(!0===s.spinner&&(s.spinner=c.Z),s.spinner=(0,r.Xl)(s.spinner)):s.spinner=!1,s.meta={hasMedia:Boolean(!1!==s.spinner||s.icon||s.avatar),hasText:A(s.message)||A(s.caption)},s.position){if(!1===T.includes(s.position))return R("wrong position",e)}else s.position="bottom";if(void 0===s.timeout)s.timeout=5e3;else{const t=parseInt(s.timeout,10);if(isNaN(t)||t<0)return R("wrong timeout",e);s.timeout=t}0===s.timeout?s.progress=!1:!0===s.progress&&(s.meta.progressClass="q-notification__progress"+(s.progressClass?` ${s.progressClass}`:""),s.meta.progressStyle={animationDuration:`${s.timeout+1e3}ms`});const o=(!0===Array.isArray(e.actions)?e.actions:[]).concat(!0!==e.ignoreDefaults&&!0===Array.isArray(y.actions)?y.actions:[]).concat(void 0!==I[e.type]&&!0===Array.isArray(I[e.type].actions)?I[e.type].actions:[]),{closeBtn:a}=s;if(a&&o.push({label:"string"===typeof a?a:t.lang.label.close}),s.actions=o.map((({handler:e,noDismiss:t,...n})=>({flat:!0,...n,onClick:"function"===typeof e?()=>{e(),!0!==t&&l()}:()=>{l()}}))),void 0===s.multiLine&&(s.multiLine=s.actions.length>1),Object.assign(s.meta,{class:"q-notification row items-stretch q-notification--"+(!0===s.multiLine?"multi-line":"standard")+(void 0!==s.color?` bg-${s.color}`:"")+(void 0!==s.textColor?` text-${s.textColor}`:"")+(void 0!==s.classes?` ${s.classes}`:""),wrapperClass:"q-notification__wrapper col relative-position border-radius-inherit "+(!0===s.multiLine?"column no-wrap justify-center":"row items-center"),contentClass:"q-notification__content row items-center"+(!0===s.multiLine?"":" col"),leftClass:!0===s.meta.hasText?"additional":"single",attrs:{role:"alert",...s.attrs}}),!1===s.group?(s.group=void 0,s.meta.group=void 0):(void 0!==s.group&&!0!==s.group||(s.group=[s.message,s.caption,s.multiline].concat(s.actions.map((e=>`${e.label}*${e.icon}`))).join("|")),s.meta.group=s.group+"|"+s.position),0===s.actions.length?s.actions=void 0:s.meta.actionsClass="q-notification__actions row items-center "+(!0===s.multiLine?"justify-end":"col-auto")+(!0===s.meta.hasMedia?" q-notification__actions--with-media":""),void 0!==n){clearTimeout(n.notif.meta.timer),s.meta.uid=n.notif.meta.uid;const e=b[s.position].value.indexOf(n.notif);b[s.position].value[e]=s}else{const t=w[s.meta.group];if(void 0===t){if(s.meta.uid=v++,s.meta.badge=1,-1!==["left","right","center"].indexOf(s.position))b[s.position].value.splice(Math.floor(b[s.position].value.length/2),0,s);else{const e=s.position.indexOf("top")>-1?"unshift":"push";b[s.position].value[e](s)}void 0!==s.group&&(w[s.meta.group]=s)}else{if(clearTimeout(t.meta.timer),void 0!==s.badgePosition){if(!1===k.includes(s.badgePosition))return R("wrong badgePosition",e)}else s.badgePosition="top-"+(s.position.indexOf("left")>-1?"right":"left");s.meta.uid=t.meta.uid,s.meta.badge=t.meta.badge+1,s.meta.badgeClass=`q-notification__badge q-notification__badge--${s.badgePosition}`+(void 0!==s.badgeColor?` bg-${s.badgeColor}`:"")+(void 0!==s.badgeTextColor?` text-${s.badgeTextColor}`:"")+(s.badgeClass?` ${s.badgeClass}`:"");const n=b[s.position].value.indexOf(t);b[s.position].value[n]=w[s.meta.group]=s}}const l=()=>{x(s),i=void 0};return s.timeout>0&&(s.meta.timer=setTimeout((()=>{l()}),s.timeout+1e3)),void 0!==s.group?t=>{void 0!==t?R("trying to update a grouped one which is forbidden",e):l()}:(i={dismiss:l,config:e,notif:s},void 0===n?e=>{if(void 0!==i)if(void 0===e)i.dismiss();else{const n=Object.assign({},i.config,e,{group:!1,position:s.position});C(n,t,i)}}:void Object.assign(n,i))}function x(e){clearTimeout(e.meta.timer);const t=b[e.position].value.indexOf(e);if(-1!==t){void 0!==e.group&&delete w[e.meta.group];const n=S[""+e.meta.uid];if(n){const{width:e,height:t}=getComputedStyle(n);n.style.left=`${n.offsetLeft}px`,n.style.width=e,n.style.height=t}b[e.position].value.splice(t,1),"function"===typeof e.onDismiss&&e.onDismiss()}}function A(e){return void 0!==e&&null!==e&&!0!==E.test(e)}function R(e,t){return console.error(`Notify: ${e}`,t),!1}function O(){return(0,u.L)({name:"QNotifications",devtools:{hide:!0},setup(){return()=>(0,i.h)("div",{class:"q-notifications"},T.map((e=>(0,i.h)(s.W3,{key:e,class:_[e],tag:"div",name:`q-notification--${e}`},(()=>b[e].value.map((e=>{const t=e.meta,n=[];if(!0===t.hasMedia&&(!1!==e.spinner?n.push((0,i.h)(e.spinner,{class:"q-notification__spinner q-notification__spinner--"+t.leftClass,color:e.spinnerColor,size:e.spinnerSize})):e.icon?n.push((0,i.h)(a.Z,{class:"q-notification__icon q-notification__icon--"+t.leftClass,name:e.icon,color:e.iconColor,size:e.iconSize,role:"img"})):e.avatar&&n.push((0,i.h)(o.Z,{class:"q-notification__avatar q-notification__avatar--"+t.leftClass},(()=>(0,i.h)("img",{src:e.avatar,"aria-hidden":"true"}))))),!0===t.hasText){let t;const r={class:"q-notification__message col"};if(!0===e.html)r.innerHTML=e.caption?`<div>${e.message}</div><div class="q-notification__caption">${e.caption}</div>`:e.message;else{const n=[e.message];t=e.caption?[(0,i.h)("div",n),(0,i.h)("div",{class:"q-notification__caption"},[e.caption])]:n}n.push((0,i.h)("div",r,t))}const r=[(0,i.h)("div",{class:t.contentClass},n)];return!0===e.progress&&r.push((0,i.h)("div",{key:`${t.uid}|p|${t.badge}`,class:t.progressClass,style:t.progressStyle})),void 0!==e.actions&&r.push((0,i.h)("div",{class:t.actionsClass},e.actions.map((e=>(0,i.h)(l.Z,e))))),t.badge>1&&r.push((0,i.h)("div",{key:`${t.uid}|${t.badge}`,class:e.meta.badgeClass,style:e.badgeStyle},[t.badge])),(0,i.h)("div",{ref:e=>{S[""+t.uid]=e},key:t.uid,class:t.class,...t.attrs},[(0,i.h)("div",{class:t.wrapperClass},r)])})))))))}})}const N={setDefaults(e){!0===(0,m.Kn)(e)&&Object.assign(y,e)},registerType(e,t){!0===(0,m.Kn)(t)&&(I[e]=t)},install({$q:e,parentApp:t}){if(e.notify=this.create=t=>C(t,e),e.notify.setDefaults=this.setDefaults,e.notify.registerType=this.registerType,void 0!==e.config.notify&&this.setDefaults(e.config.notify),!0!==this.__installed){T.forEach((e=>{b[e]=(0,r.iH)([]);const t=!0===["left","center","right"].includes(e)?"center":e.indexOf("top")>-1?"top":"bottom",n=e.indexOf("left")>-1?"start":e.indexOf("right")>-1?"end":"center",i=["left","right"].includes(e)?`items-${"left"===e?"start":"end"} justify-center`:"center"===e?"flex-center":`items-${n}`;_[e]=`q-notifications__list q-notifications__list--${t} fixed column no-wrap ${i}`}));const e=p("q-notify");(0,g.$)(O(),t).mount(e)}}}},4688:(e,t,n)=>{"use strict";n.d(t,{Lp:()=>g,ZP:()=>v,aG:()=>o,uX:()=>s});var r=n(1959),i=n(9085);const s=(0,r.iH)(!1);let o,a=!1;function l(e,t){const n=/(edg|edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:t[0]||""}}function c(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const u="ontouchstart"in window||window.navigator.maxTouchPoints>0;function h(e){o={is:{...e}},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function d(e){const t=e.toLowerCase(),n=c(t),r=l(t,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return!0===s||t.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||!0===i.mobile&&!0!==i.ios&&!0!==s)&&(i.webkit=!0),i.edg&&(r.browser="edgechromium",i.edgeChromium=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,t.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(void 0!==window.Capacitor?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):void 0===window._cordovaNative&&void 0===window.cordova||(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),!0===u&&!0===i.mac&&(!0===i.desktop&&!0===i.safari||!0===i.nativeMobile&&!0!==i.android&&!0!==i.ios&&!0!==i.ipad)&&h(i)),i}const f=navigator.userAgent||navigator.vendor||window.opera,p={has:{touch:!1,webStorage:!1},within:{iframe:!1}},g={userAgent:f,is:d(f),has:{touch:u},within:{iframe:window.self!==window.top}},m={install(e){const{$q:t}=e;!0===s.value?(e.onSSRHydrated.push((()=>{s.value=!1,Object.assign(t.platform,g),o=void 0})),t.platform=(0,r.qj)(this)):t.platform=this}};{let e;(0,i.g)(g.has,"webStorage",(()=>{if(void 0!==e)return e;try{if(window.localStorage)return e=!0,!0}catch(t){}return e=!1,!1})),a=!0===g.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple"),!0===s.value?Object.assign(m,g,o,p):Object.assign(m,g)}const v=m},9405:(e,t,n)=>{"use strict";function r(e,t=250,n){let r;function i(){const i=arguments,s=()=>{r=void 0,!0!==n&&e.apply(this,i)};clearTimeout(r),!0===n&&void 0===r&&e.apply(this,i),r=setTimeout(s,t)}return i.cancel=()=>{clearTimeout(r)},i}n.d(t,{Z:()=>r})},2012:(e,t,n)=>{"use strict";n.d(t,{iv:()=>i,sb:()=>s});var r=n(1959);function i(e,t){const n=e.style;for(const r in t)n[r]=t[r]}function s(e){if(void 0===e||null===e)return;if("string"===typeof e)try{return document.querySelector(e)||void 0}catch(n){return}const t=!0===(0,r.dq)(e)?e.value:e;return t?t.$el||t:void 0}},4716:(e,t,n)=>{"use strict";n.d(t,{AZ:()=>a,FK:()=>o,Jf:()=>h,M0:()=>d,NS:()=>u,X$:()=>c,ZT:()=>i,du:()=>s,rU:()=>r,sT:()=>l,ul:()=>f});n(71);const r={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(r,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch(p){}function i(){}function s(e){return 0===e.button}function o(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function a(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}}function l(e){e.stopPropagation()}function c(e){!1!==e.cancelable&&e.preventDefault()}function u(e){!1!==e.cancelable&&e.preventDefault(),e.stopPropagation()}function h(e,t){if(void 0===e||!0===t&&!0===e.__dragPrevented)return;const n=!0===t?e=>{e.__dragPrevented=!0,e.addEventListener("dragstart",c,r.notPassiveCapture)}:e=>{delete e.__dragPrevented,e.removeEventListener("dragstart",c,r.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function d(e,t,n){const i=`__q_${t}_evt`;e[i]=void 0!==e[i]?e[i].concat(n):n,n.forEach((t=>{t[0].addEventListener(t[1],e[t[2]],r[t[3]])}))}function f(e,t){const n=`__q_${t}_evt`;void 0!==e[n]&&(e[n].forEach((t=>{t[0].removeEventListener(t[1],e[t[2]],r[t[3]])})),e[n]=void 0)}},2130:(e,t,n)=>{"use strict";n.d(t,{kC:()=>r,vX:()=>i,vk:()=>s});function r(e){return e.charAt(0).toUpperCase()+e.slice(1)}function i(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}function s(e,t=2,n="0"){if(void 0===e||null===e)return e;const r=""+e;return r.length>=t?r:new Array(t-r.length+1).join(n)+r}},908:(e,t,n)=>{"use strict";n.d(t,{L:()=>s,f:()=>o});var r=n(1959),i=n(3673);const s=e=>(0,r.Xl)((0,i.aZ)(e)),o=e=>(0,r.Xl)(e)},2002:(e,t,n)=>{"use strict";n.d(t,{Z:()=>s});var r=n(1959),i=n(9085);const s=(e,t)=>{const n=(0,r.qj)(e);for(const r in e)(0,i.g)(t,r,(()=>n[r]),(e=>{n[r]=e}));return t}},5578:(e,t,n)=>{"use strict";n.d(t,{Uf:()=>i,tP:()=>s,w6:()=>r});const r={};let i=!1;function s(){i=!0}},9085:(e,t,n)=>{"use strict";function r(e,t,n,r){Object.defineProperty(e,t,{get:n,set:r,enumerable:!0})}n.d(t,{g:()=>r})},782:(e,t,n)=>{"use strict";n.d(t,{J_:()=>i,Kn:()=>r});n(71),n(4406);function r(e){return null!==e&&"object"===typeof e&&!0!==Array.isArray(e)}function i(e){return"[object Date]"===Object.prototype.toString.call(e)}},1436:(e,t,n)=>{"use strict";n.d(t,{So:()=>o,Wm:()=>s,ZK:()=>i});n(3610);let r=!1;function i(e){r=!0===e.isComposing}function s(e){return!0===r||e!==Object(e)||!0===e.isComposing||!0===e.qKeyEvent}function o(e,t){return!0!==s(e)&&[].concat(t).includes(e.keyCode)}},7657:(e,t,n)=>{"use strict";n.d(t,{Bl:()=>s,Jl:()=>l,KR:()=>i,pf:()=>a,vs:()=>o});var r=n(3673);function i(e,t){return void 0!==e&&e()||t}function s(e,t){if(void 0!==e){const t=e();if(void 0!==t&&null!==t)return t.slice()}return t}function o(e,t){return void 0!==e?t.concat(e()):t}function a(e,t){return void 0===e?t:void 0!==t?t.concat(e()):e()}function l(e,t,n,i,s,o){t.key=i+s;const a=(0,r.h)(e,t,n);return!0===s?(0,r.wy)(a,o()):a}},2547:(e,t,n)=>{"use strict";n.d(t,{Mw:()=>s,Ng:()=>r,YE:()=>i,vh:()=>o});const r="_q_",i="_q_l_",s="_q_pc_",o="_q_fo_"},7445:(e,t,n)=>{"use strict";n.d(t,{Rb:()=>r});n(71);function r(e){return void 0!==e.appContext.config.globalProperties.$router}},8400:(e,t,n)=>{"use strict";n.d(t,{OI:()=>a,QA:()=>u,b0:()=>s,np:()=>c,u3:()=>o});n(3610);var r=n(2012);const i=[null,document,document.body,document.scrollingElement,document.documentElement];function s(e,t){let n=(0,r.sb)(t);if(void 0===n){if(void 0===e||null===e)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return i.includes(n)?window:n}function o(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function a(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let l;function c(){if(void 0!==l)return l;const e=document.createElement("p"),t=document.createElement("div");(0,r.iv)(e,{width:"100%",height:"200px"}),(0,r.iv)(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=t.clientWidth),t.remove(),l=n-i,l}function u(e,t=!0){return!(!e||e.nodeType!==Node.ELEMENT_NODE)&&(t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"])))}},4398:(e,t,n)=>{"use strict";n.d(t,{Z:()=>r});n(6701);function r(e,t,n=document.body){if("string"!==typeof e)throw new TypeError("Expected a string as propName");if("string"!==typeof t)throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}},9592:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(7351),i=n(9111),s=n(9409);const o={version:"2.7.5",install:r.Z,lang:i.Z,iconSet:s.Z}},392:(e,t,n)=>{var r=n(419),i=n(3353),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a function")}},2722:(e,t,n)=>{var r=n(7593),i=n(3353),s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not a constructor")}},8248:(e,t,n)=>{var r=n(419),i=String,s=TypeError;e.exports=function(e){if("object"==typeof e||r(e))return e;throw s("Can't set "+i(e)+" as a prototype")}},2852:(e,t,n)=>{var r=n(854),i=n(1074),s=n(928).f,o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},6412:(e,t,n)=>{"use strict";var r=n(1021).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},2827:(e,t,n)=>{var r=n(7673),i=TypeError;e.exports=function(e,t){if(r(t,e))return e;throw i("Incorrect invocation")}},7950:(e,t,n)=>{var r=n(776),i=String,s=TypeError;e.exports=function(e){if(r(e))return e;throw s(i(e)+" is not an object")}},6257:e=>{e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},683:(e,t,n)=>{"use strict";var r,i,s,o=n(6257),a=n(9631),l=n(7358),c=n(419),u=n(776),h=n(7322),d=n(5976),f=n(3353),p=n(1904),g=n(3460),m=n(928).f,v=n(7673),y=n(4945),w=n(6184),b=n(854),_=n(6862),E=n(7624),S=E.enforce,T=E.get,k=l.Int8Array,I=k&&k.prototype,C=l.Uint8ClampedArray,x=C&&C.prototype,A=k&&y(k),R=I&&y(I),O=Object.prototype,N=l.TypeError,L=b("toStringTag"),P=_("TYPED_ARRAY_TAG"),D="TypedArrayConstructor",F=o&&!!w&&"Opera"!==d(l.opera),M=!1,q={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},U={BigInt64Array:8,BigUint64Array:8},V=function(e){if(!u(e))return!1;var t=d(e);return"DataView"===t||h(q,t)||h(U,t)},B=function(e){var t=y(e);if(u(t)){var n=T(t);return n&&h(n,D)?n[D]:B(t)}},j=function(e){if(!u(e))return!1;var t=d(e);return h(q,t)||h(U,t)},$=function(e){if(j(e))return e;throw N("Target is not a typed array")},z=function(e){if(c(e)&&(!w||v(A,e)))return e;throw N(f(e)+" is not a typed array constructor")},H=function(e,t,n,r){if(a){if(n)for(var i in q){var s=l[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){try{s.prototype[e]=t}catch(c){}}}R[e]&&!n||g(R,e,n?t:F&&I[e]||t,r)}},K=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in q)if(i=l[r],i&&h(i,e))try{delete i[e]}catch(s){}if(A[e]&&!n)return;try{return g(A,e,n?t:F&&A[e]||t)}catch(s){}}for(r in q)i=l[r],!i||i[e]&&!n||g(i,e,t)}};for(r in q)i=l[r],s=i&&i.prototype,s?S(s)[D]=i:F=!1;for(r in U)i=l[r],s=i&&i.prototype,s&&(S(s)[D]=i);if((!F||!c(A)||A===Function.prototype)&&(A=function(){throw N("Incorrect invocation")},F))for(r in q)l[r]&&w(l[r],A);if((!F||!R||R===O)&&(R=A.prototype,F))for(r in q)l[r]&&w(l[r].prototype,R);if(F&&y(x)!==R&&w(x,R),a&&!h(R,L))for(r in M=!0,m(R,L,{get:function(){return u(this)?this[P]:void 0}}),q)l[r]&&p(l[r],P,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:F,TYPED_ARRAY_TAG:M&&P,aTypedArray:$,aTypedArrayConstructor:z,exportTypedArrayMethod:H,exportTypedArrayStaticMethod:K,getTypedArrayConstructor:B,isView:V,isTypedArray:j,TypedArray:A,TypedArrayPrototype:R}},62:(e,t,n)=>{"use strict";var r=n(7358),i=n(1890),s=n(9631),o=n(6257),a=n(7961),l=n(1904),c=n(6703),u=n(6400),h=n(2827),d=n(1860),f=n(4068),p=n(833),g=n(8830),m=n(4945),v=n(6184),y=n(1454).f,w=n(928).f,b=n(5786),_=n(5771),E=n(1061),S=n(7624),T=a.PROPER,k=a.CONFIGURABLE,I=S.get,C=S.set,x="ArrayBuffer",A="DataView",R="prototype",O="Wrong length",N="Wrong index",L=r[x],P=L,D=P&&P[R],F=r[A],M=F&&F[R],q=Object.prototype,U=r.Array,V=r.RangeError,B=i(b),j=i([].reverse),$=g.pack,z=g.unpack,H=function(e){return[255&e]},K=function(e){return[255&e,e>>8&255]},W=function(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]},G=function(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]},Z=function(e){return $(e,23,4)},X=function(e){return $(e,52,8)},Q=function(e,t){w(e[R],t,{get:function(){return I(this)[t]}})},Y=function(e,t,n,r){var i=p(n),s=I(e);if(i+t>s.byteLength)throw V(N);var o=I(s.buffer).bytes,a=i+s.byteOffset,l=_(o,a,a+t);return r?l:j(l)},J=function(e,t,n,r,i,s){var o=p(n),a=I(e);if(o+t>a.byteLength)throw V(N);for(var l=I(a.buffer).bytes,c=o+a.byteOffset,u=r(+i),h=0;h<t;h++)l[c+h]=u[s?h:t-h-1]};if(o){var ee=T&&L.name!==x;if(u((function(){L(1)}))&&u((function(){new L(-1)}))&&!u((function(){return new L,new L(1.5),new L(NaN),ee&&!k})))ee&&k&&l(L,"name",x);else{P=function(e){return h(this,D),new L(p(e))},P[R]=D;for(var te,ne=y(L),re=0;ne.length>re;)(te=ne[re++])in P||l(P,te,L[te]);D.constructor=P}v&&m(M)!==q&&v(M,q);var ie=new F(new P(2)),se=i(M.setInt8);ie.setInt8(0,2147483648),ie.setInt8(1,2147483649),!ie.getInt8(0)&&ie.getInt8(1)||c(M,{setInt8:function(e,t){se(this,e,t<<24>>24)},setUint8:function(e,t){se(this,e,t<<24>>24)}},{unsafe:!0})}else P=function(e){h(this,D);var t=p(e);C(this,{bytes:B(U(t),0),byteLength:t}),s||(this.byteLength=t)},D=P[R],F=function(e,t,n){h(this,M),h(e,D);var r=I(e).byteLength,i=d(t);if(i<0||i>r)throw V("Wrong offset");if(n=void 0===n?r-i:f(n),i+n>r)throw V(O);C(this,{buffer:e,byteLength:n,byteOffset:i}),s||(this.buffer=e,this.byteLength=n,this.byteOffset=i)},M=F[R],s&&(Q(P,"byteLength"),Q(F,"buffer"),Q(F,"byteLength"),Q(F,"byteOffset")),c(M,{getInt8:function(e){return Y(this,1,e)[0]<<24>>24},getUint8:function(e){return Y(this,1,e)[0]},getInt16:function(e){var t=Y(this,2,e,arguments.length>1?arguments[1]:void 0);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=Y(this,2,e,arguments.length>1?arguments[1]:void 0);return t[1]<<8|t[0]},getInt32:function(e){return G(Y(this,4,e,arguments.length>1?arguments[1]:void 0))},getUint32:function(e){return G(Y(this,4,e,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(e){return z(Y(this,4,e,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(e){return z(Y(this,8,e,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(e,t){J(this,1,e,H,t)},setUint8:function(e,t){J(this,1,e,H,t)},setInt16:function(e,t){J(this,2,e,K,t,arguments.length>2?arguments[2]:void 0)},setUint16:function(e,t){J(this,2,e,K,t,arguments.length>2?arguments[2]:void 0)},setInt32:function(e,t){J(this,4,e,W,t,arguments.length>2?arguments[2]:void 0)},setUint32:function(e,t){J(this,4,e,W,t,arguments.length>2?arguments[2]:void 0)},setFloat32:function(e,t){J(this,4,e,Z,t,arguments.length>2?arguments[2]:void 0)},setFloat64:function(e,t){J(this,8,e,X,t,arguments.length>2?arguments[2]:void 0)}});E(P,x),E(F,A),e.exports={ArrayBuffer:P,DataView:F}},5786:(e,t,n)=>{"use strict";var r=n(7475),i=n(1801),s=n(6042);e.exports=function(e){var t=r(this),n=s(t),o=arguments.length,a=i(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,c=void 0===l?n:i(l,n);while(c>a)t[a++]=e;return t}},2029:(e,t,n)=>{"use strict";var r=n(422),i=n(3577),s=n(7475),o=n(9234),a=n(1558),l=n(7593),c=n(6042),u=n(6496),h=n(2151),d=n(7143),f=Array;e.exports=function(e){var t=s(e),n=l(this),p=arguments.length,g=p>1?arguments[1]:void 0,m=void 0!==g;m&&(g=r(g,p>2?arguments[2]:void 0));var v,y,w,b,_,E,S=d(t),T=0;if(!S||this===f&&a(S))for(v=c(t),y=n?new this(v):f(v);v>T;T++)E=m?g(t[T],T):t[T],u(y,T,E);else for(b=h(t,S),_=b.next,y=n?new this:[];!(w=i(_,b)).done;T++)E=m?o(b,g,[w.value,T],!0):w.value,u(y,T,E);return y.length=T,y}},6963:(e,t,n)=>{var r=n(7120),i=n(1801),s=n(6042),o=function(e){return function(t,n,o){var a,l=r(t),c=s(l),u=i(o,c);if(e&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},5416:(e,t,n)=>{var r=n(422),i=n(2985),s=n(7475),o=n(6042),a=function(e){var t=1==e;return function(n,a,l){var c,u,h=s(n),d=i(h),f=r(a,l),p=o(d);while(p-- >0)if(c=d[p],u=f(c,p,h),u)switch(e){case 0:return c;case 1:return p}return t?-1:void 0}};e.exports={findLast:a(0),findLastIndex:a(1)}},2099:(e,t,n)=>{var r=n(422),i=n(1890),s=n(2985),o=n(7475),a=n(6042),l=n(6340),c=i([].push),u=function(e){var t=1==e,n=2==e,i=3==e,u=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,g,m,v){for(var y,w,b=o(p),_=s(b),E=r(g,m),S=a(_),T=0,k=v||l,I=t?k(p,S):n||d?k(p,0):void 0;S>T;T++)if((f||T in _)&&(y=_[T],w=E(y,T,b),e))if(t)I[T]=w;else if(w)switch(e){case 3:return!0;case 5:return y;case 6:return T;case 2:c(I,y)}else switch(e){case 4:return!1;case 7:c(I,y)}return h?-1:i||u?u:I}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},5771:(e,t,n)=>{var r=n(1801),i=n(6042),s=n(6496),o=Array,a=Math.max;e.exports=function(e,t,n){for(var l=i(e),c=r(t,l),u=r(void 0===n?l:n,l),h=o(a(u-c,0)),d=0;c<u;c++,d++)s(h,d,e[c]);return h.length=d,h}},6534:(e,t,n)=>{var r=n(5771),i=Math.floor,s=function(e,t){var n=e.length,l=i(n/2);return n<8?o(e,t):a(e,s(r(e,0,l),t),s(r(e,l),t),t)},o=function(e,t){var n,r,i=e.length,s=1;while(s<i){r=s,n=e[s];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==s++&&(e[r]=n)}return e},a=function(e,t,n,r){var i=t.length,s=n.length,o=0,a=0;while(o<i||a<s)e[o+a]=o<i&&a<s?r(t[o],n[a])<=0?t[o++]:n[a++]:o<i?t[o++]:n[a++];return e};e.exports=s},330:(e,t,n)=>{var r=n(6894),i=n(7593),s=n(776),o=n(854),a=o("species"),l=Array;e.exports=function(e){var t;return r(e)&&(t=e.constructor,i(t)&&(t===l||r(t.prototype))?t=void 0:s(t)&&(t=t[a],null===t&&(t=void 0))),void 0===t?l:t}},6340:(e,t,n)=>{var r=n(330);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},9234:(e,t,n)=>{var r=n(7950),i=n(8105);e.exports=function(e,t,n,s){try{return s?t(r(n)[0],n[1]):t(n)}catch(o){i(e,"throw",o)}}},8047:(e,t,n)=>{var r=n(854),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(l){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(l){}return n}},5173:(e,t,n)=>{var r=n(1890),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},5976:(e,t,n)=>{var r=n(5705),i=n(419),s=n(5173),o=n(854),a=o("toStringTag"),l=Object,c="Arguments"==s(function(){return arguments}()),u=function(e,t){try{return e[t]}catch(n){}};e.exports=r?s:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=u(t=l(e),a))?n:c?s(t):"Object"==(r=s(t))&&i(t.callee)?"Arguments":r}},767:(e,t,n)=>{var r=n(1890),i=Error,s=r("".replace),o=function(e){return String(i(e).stack)}("zxcasd"),a=/\n\s*at [^:]*:[^\n]*/,l=a.test(o);e.exports=function(e,t){if(l&&"string"==typeof e&&!i.prepareStackTrace)while(t--)e=s(e,a,"");return e}},8438:(e,t,n)=>{var r=n(7322),i=n(7764),s=n(2404),o=n(928);e.exports=function(e,t,n){for(var a=i(t),l=o.f,c=s.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||l(e,h,c(t,h))}}},123:(e,t,n)=>{var r=n(6400);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},5912:(e,t,n)=>{"use strict";var r=n(4848).IteratorPrototype,i=n(1074),s=n(5442),o=n(1061),a=n(2184),l=function(){return this};e.exports=function(e,t,n,c){var u=t+" Iterator";return e.prototype=i(r,{next:s(+!c,n)}),o(e,u,!1,!0),a[u]=l,e}},1904:(e,t,n)=>{var r=n(9631),i=n(928),s=n(5442);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},5442:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},6496:(e,t,n)=>{"use strict";var r=n(8618),i=n(928),s=n(5442);e.exports=function(e,t,n){var o=r(t);o in e?i.f(e,o,s(0,n)):e[o]=n}},9468:(e,t,n)=>{var r=n(9843),i=n(928);e.exports=function(e,t,n){return n.get&&r(n.get,t,{getter:!0}),n.set&&r(n.set,t,{setter:!0}),i.f(e,t,n)}},3460:(e,t,n)=>{var r=n(419),i=n(928),s=n(9843),o=n(1615);e.exports=function(e,t,n,a){a||(a={});var l=a.enumerable,c=void 0!==a.name?a.name:t;if(r(n)&&s(n,c,a),a.global)l?e[t]=n:o(t,n);else{try{a.unsafe?e[t]&&(l=!0):delete e[t]}catch(u){}l?e[t]=n:i.f(e,t,{value:n,enumerable:!1,configurable:!a.nonConfigurable,writable:!a.nonWritable})}return e}},6703:(e,t,n)=>{var r=n(3460);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},1615:(e,t,n)=>{var r=n(7358),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},8810:(e,t,n)=>{"use strict";var r=n(8934),i=n(3577),s=n(6692),o=n(7961),a=n(419),l=n(5912),c=n(4945),u=n(6184),h=n(1061),d=n(1904),f=n(3460),p=n(854),g=n(2184),m=n(4848),v=o.PROPER,y=o.CONFIGURABLE,w=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,_=p("iterator"),E="keys",S="values",T="entries",k=function(){return this};e.exports=function(e,t,n,o,p,m,I){l(n,t,o);var C,x,A,R=function(e){if(e===p&&D)return D;if(!b&&e in L)return L[e];switch(e){case E:return function(){return new n(this,e)};case S:return function(){return new n(this,e)};case T:return function(){return new n(this,e)}}return function(){return new n(this)}},O=t+" Iterator",N=!1,L=e.prototype,P=L[_]||L["@@iterator"]||p&&L[p],D=!b&&P||R(p),F="Array"==t&&L.entries||P;if(F&&(C=c(F.call(new e)),C!==Object.prototype&&C.next&&(s||c(C)===w||(u?u(C,w):a(C[_])||f(C,_,k)),h(C,O,!0,!0),s&&(g[O]=k))),v&&p==S&&P&&P.name!==S&&(!s&&y?d(L,"name",S):(N=!0,D=function(){return i(P,this)})),p)if(x={values:R(S),keys:m?D:R(E),entries:R(T)},I)for(A in x)(b||N||!(A in L))&&f(L,A,x[A]);else r({target:t,proto:!0,forced:b||N},x);return s&&!I||L[_]===D||f(L,_,D,{name:p}),g[t]=D,x}},9631:(e,t,n)=>{var r=n(6400);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},5354:(e,t,n)=>{var r=n(7358),i=n(776),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},1771:e=>{e.exports={IndexSizeError:{s:"INDEX_SIZE_ERR",c:1,m:1},DOMStringSizeError:{s:"DOMSTRING_SIZE_ERR",c:2,m:0},HierarchyRequestError:{s:"HIERARCHY_REQUEST_ERR",c:3,m:1},WrongDocumentError:{s:"WRONG_DOCUMENT_ERR",c:4,m:1},InvalidCharacterError:{s:"INVALID_CHARACTER_ERR",c:5,m:1},NoDataAllowedError:{s:"NO_DATA_ALLOWED_ERR",c:6,m:0},NoModificationAllowedError:{s:"NO_MODIFICATION_ALLOWED_ERR",c:7,m:1},NotFoundError:{s:"NOT_FOUND_ERR",c:8,m:1},NotSupportedError:{s:"NOT_SUPPORTED_ERR",c:9,m:1},InUseAttributeError:{s:"INUSE_ATTRIBUTE_ERR",c:10,m:1},InvalidStateError:{s:"INVALID_STATE_ERR",c:11,m:1},SyntaxError:{s:"SYNTAX_ERR",c:12,m:1},InvalidModificationError:{s:"INVALID_MODIFICATION_ERR",c:13,m:1},NamespaceError:{s:"NAMESPACE_ERR",c:14,m:1},InvalidAccessError:{s:"INVALID_ACCESS_ERR",c:15,m:1},ValidationError:{s:"VALIDATION_ERR",c:16,m:0},TypeMismatchError:{s:"TYPE_MISMATCH_ERR",c:17,m:1},SecurityError:{s:"SECURITY_ERR",c:18,m:1},NetworkError:{s:"NETWORK_ERR",c:19,m:1},AbortError:{s:"ABORT_ERR",c:20,m:1},URLMismatchError:{s:"URL_MISMATCH_ERR",c:21,m:1},QuotaExceededError:{s:"QUOTA_EXCEEDED_ERR",c:22,m:1},TimeoutError:{s:"TIMEOUT_ERR",c:23,m:1},InvalidNodeTypeError:{s:"INVALID_NODE_TYPE_ERR",c:24,m:1},DataCloneError:{s:"DATA_CLONE_ERR",c:25,m:1}}},4296:e=>{e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8753:(e,t,n)=>{var r=n(5354),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;e.exports=s===Object.prototype?void 0:s},1544:(e,t,n)=>{var r=n(9173),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},8979:(e,t,n)=>{var r=n(9173);e.exports=/MSIE|Trident/.test(r)},9173:(e,t,n)=>{var r=n(9694);e.exports=r("navigator","userAgent")||""},5068:(e,t,n)=>{var r,i,s=n(7358),o=n(9173),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},1513:(e,t,n)=>{var r=n(9173),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},2875:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},6429:(e,t,n)=>{var r=n(6400),i=n(5442);e.exports=!r((function(){var e=Error("a");return!("stack"in e)||(Object.defineProperty(e,"stack",i(1,7)),7!==e.stack)}))},8934:(e,t,n)=>{var r=n(7358),i=n(2404).f,s=n(1904),o=n(3460),a=n(1615),l=n(8438),c=n(4389);e.exports=function(e,t){var n,u,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(u=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,u)for(h in t){if(f=t[h],e.dontCallGetSet?(p=i(u,h),d=p&&p.value):d=u[h],n=c(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},6400:e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},9529:(e,t,n)=>{"use strict";n(7280);var r=n(1890),i=n(3460),s=n(4348),o=n(6400),a=n(854),l=n(1904),c=a("species"),u=RegExp.prototype;e.exports=function(e,t,n,h){var d=a(e),f=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var g=r(/./[d]),m=t(d,""[e],(function(e,t,n,i,o){var a=r(e),l=t.exec;return l===s||l===u.exec?f&&!o?{done:!0,value:g(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,m[0]),i(u,d,m[1])}h&&l(u[d],"sham",!0)}},4157:(e,t,n)=>{var r=n(8427),i=Function.prototype,s=i.apply,o=i.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?o.bind(s):function(){return o.apply(s,arguments)})},422:(e,t,n)=>{var r=n(1890),i=n(392),s=n(8427),o=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?o(e,t):function(){return e.apply(t,arguments)}}},8427:(e,t,n)=>{var r=n(6400);e.exports=!r((function(){var e=function(){}.bind();return"function"!=typeof e||e.hasOwnProperty("prototype")}))},3577:(e,t,n)=>{var r=n(8427),i=Function.prototype.call;e.exports=r?i.bind(i):function(){return i.apply(i,arguments)}},7961:(e,t,n)=>{var r=n(9631),i=n(7322),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),l=a&&"something"===function(){}.name,c=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1890:(e,t,n)=>{var r=n(8427),i=Function.prototype,s=i.bind,o=i.call,a=r&&s.bind(o,o);e.exports=r?function(e){return e&&a(e)}:function(e){return e&&function(){return o.apply(e,arguments)}}},9694:(e,t,n)=>{var r=n(7358),i=n(419),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},7143:(e,t,n)=>{var r=n(5976),i=n(2344),s=n(2184),o=n(854),a=o("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||s[r(e)]}},2151:(e,t,n)=>{var r=n(3577),i=n(392),s=n(7950),o=n(3353),a=n(7143),l=TypeError;e.exports=function(e,t){var n=arguments.length<2?a(e):t;if(i(n))return s(r(n,e));throw l(o(e)+" is not iterable")}},2344:(e,t,n)=>{var r=n(392);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},8716:(e,t,n)=>{var r=n(1890),i=n(7475),s=Math.floor,o=r("".charAt),a=r("".replace),l=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,h,d){var f=n+e.length,p=r.length,g=u;return void 0!==h&&(h=i(h),g=c),a(d,g,(function(i,a){var c;switch(o(a,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,n);case"'":return l(t,f);case"<":c=h[l(a,1,-1)];break;default:var u=+a;if(0===u)return i;if(u>p){var d=s(u/10);return 0===d?i:d<=p?void 0===r[d-1]?o(a,1):r[d-1]+o(a,1):i}c=r[u-1]}return void 0===c?"":c}))}},7358:(e,t,n)=>{var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},7322:(e,t,n)=>{var r=n(1890),i=n(7475),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},600:e=>{e.exports={}},9970:(e,t,n)=>{var r=n(9694);e.exports=r("document","documentElement")},7021:(e,t,n)=>{var r=n(9631),i=n(6400),s=n(5354);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8830:e=>{var t=Array,n=Math.abs,r=Math.pow,i=Math.floor,s=Math.log,o=Math.LN2,a=function(e,a,l){var c,u,h,d=t(l),f=8*l-a-1,p=(1<<f)-1,g=p>>1,m=23===a?r(2,-24)-r(2,-77):0,v=e<0||0===e&&1/e<0?1:0,y=0;e=n(e),e!=e||e===1/0?(u=e!=e?1:0,c=p):(c=i(s(e)/o),h=r(2,-c),e*h<1&&(c--,h*=2),e+=c+g>=1?m/h:m*r(2,1-g),e*h>=2&&(c++,h/=2),c+g>=p?(u=0,c=p):c+g>=1?(u=(e*h-1)*r(2,a),c+=g):(u=e*r(2,g-1)*r(2,a),c=0));while(a>=8)d[y++]=255&u,u/=256,a-=8;c=c<<a|u,f+=a;while(f>0)d[y++]=255&c,c/=256,f-=8;return d[--y]|=128*v,d},l=function(e,t){var n,i=e.length,s=8*i-t-1,o=(1<<s)-1,a=o>>1,l=s-7,c=i-1,u=e[c--],h=127&u;u>>=7;while(l>0)h=256*h+e[c--],l-=8;n=h&(1<<-l)-1,h>>=-l,l+=t;while(l>0)n=256*n+e[c--],l-=8;if(0===h)h=1-a;else{if(h===o)return n?NaN:u?-1/0:1/0;n+=r(2,t),h-=a}return(u?-1:1)*n*r(2,h-t)};e.exports={pack:a,unpack:l}},2985:(e,t,n)=>{var r=n(1890),i=n(6400),s=n(5173),o=Object,a=r("".split);e.exports=i((function(){return!o("z").propertyIsEnumerable(0)}))?function(e){return"String"==s(e)?a(e,""):o(e)}:o},9941:(e,t,n)=>{var r=n(419),i=n(776),s=n(6184);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},3725:(e,t,n)=>{var r=n(1890),i=n(419),s=n(1089),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},5684:(e,t,n)=>{var r=n(776),i=n(1904);e.exports=function(e,t){r(t)&&"cause"in t&&i(e,"cause",t.cause)}},7624:(e,t,n)=>{var r,i,s,o=n(9262),a=n(7358),l=n(1890),c=n(776),u=n(1904),h=n(7322),d=n(1089),f=n(203),p=n(600),g="Object already initialized",m=a.TypeError,v=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},w=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var b=d.state||(d.state=new v),_=l(b.get),E=l(b.has),S=l(b.set);r=function(e,t){if(E(b,e))throw new m(g);return t.facade=e,S(b,e,t),t},i=function(e){return _(b,e)||{}},s=function(e){return E(b,e)}}else{var T=f("state");p[T]=!0,r=function(e,t){if(h(e,T))throw new m(g);return t.facade=e,u(e,T,t),t},i=function(e){return h(e,T)?e[T]:{}},s=function(e){return h(e,T)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:w}},1558:(e,t,n)=>{var r=n(854),i=n(2184),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},6894:(e,t,n)=>{var r=n(5173);e.exports=Array.isArray||function(e){return"Array"==r(e)}},419:e=>{e.exports=function(e){return"function"==typeof e}},7593:(e,t,n)=>{var r=n(1890),i=n(6400),s=n(419),o=n(5976),a=n(9694),l=n(3725),c=function(){},u=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(c),g=function(e){if(!s(e))return!1;try{return h(c,u,e),!0}catch(t){return!1}},m=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,l(e))}catch(t){return!0}};m.sham=!0,e.exports=!h||i((function(){var e;return g(g.call)||!g(Object)||!g((function(){e=!0}))||e}))?m:g},4389:(e,t,n)=>{var r=n(6400),i=n(419),s=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n==u||n!=c&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},2818:(e,t,n)=>{var r=n(776),i=Math.floor;e.exports=Number.isInteger||function(e){return!r(e)&&isFinite(e)&&i(e)===e}},776:(e,t,n)=>{var r=n(419);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},6692:e=>{e.exports=!1},410:(e,t,n)=>{var r=n(9694),i=n(419),s=n(7673),o=n(8476),a=Object;e.exports=o?function(e){return"symbol"==typeof e}:function(e){var t=r("Symbol");return i(t)&&s(t.prototype,a(e))}},8105:(e,t,n)=>{var r=n(3577),i=n(7950),s=n(2344);e.exports=function(e,t,n){var o,a;i(e);try{if(o=s(e,"return"),!o){if("throw"===t)throw n;return n}o=r(o,e)}catch(l){a=!0,o=l}if("throw"===t)throw n;if(a)throw o;return i(o),n}},4848:(e,t,n)=>{"use strict";var r,i,s,o=n(6400),a=n(419),l=n(1074),c=n(4945),u=n(3460),h=n(854),d=n(6692),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=c(c(s)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||o((function(){var e={};return r[f].call(e)!==e}));g?r={}:d&&(r=l(r)),a(r[f])||u(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},2184:e=>{e.exports={}},6042:(e,t,n)=>{var r=n(4068);e.exports=function(e){return r(e.length)}},9843:(e,t,n)=>{var r=n(6400),i=n(419),s=n(7322),o=n(9631),a=n(7961).CONFIGURABLE,l=n(3725),c=n(7624),u=c.enforce,h=c.get,d=Object.defineProperty,f=o&&!r((function(){return 8!==d((function(){}),"length",{value:8}).length})),p=String(String).split("String"),g=e.exports=function(e,t,n){"Symbol("===String(t).slice(0,7)&&(t="["+String(t).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),n&&n.getter&&(t="get "+t),n&&n.setter&&(t="set "+t),(!s(e,"name")||a&&e.name!==t)&&(o?d(e,"name",{value:t,configurable:!0}):e.name=t),f&&n&&s(n,"arity")&&e.length!==n.arity&&d(e,"length",{value:n.arity});try{n&&s(n,"constructor")&&n.constructor?o&&d(e,"prototype",{writable:!1}):e.prototype&&(e.prototype=void 0)}catch(i){}var r=u(e);return s(r,"source")||(r.source=p.join("string"==typeof t?t:"")),e};Function.prototype.toString=g((function(){return i(this)&&h(this).source||l(this)}),"toString")},1243:e=>{var t=Math.ceil,n=Math.floor;e.exports=Math.trunc||function(e){var r=+e;return(r>0?n:t)(r)}},7529:(e,t,n)=>{var r=n(5068),i=n(6400);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},6595:(e,t,n)=>{var r=n(6400),i=n(854),s=n(6692),o=i("iterator");e.exports=!r((function(){var e=new URL("b?a=1&b=2&c=3","http://a"),t=e.searchParams,n="";return e.pathname="c%20d",t.forEach((function(e,r){t["delete"]("b"),n+=r+e})),s&&!e.toJSON||!t.sort||"http://a/c%20d?a=1&c=3"!==e.href||"3"!==t.get("c")||"a=1"!==String(new URLSearchParams("?a=1"))||!t[o]||"a"!==new URL("https://a@b").username||"b"!==new URLSearchParams(new URLSearchParams("a=b")).get("a")||"xn--e1aybc"!==new URL("http://тест").host||"#%D0%B1"!==new URL("http://a#б").hash||"a1c3"!==n||"x"!==new URL("http://x",void 0).host}))},9262:(e,t,n)=>{var r=n(7358),i=n(419),s=n(3725),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},7598:(e,t,n)=>{var r=n(4481);e.exports=function(e,t){return void 0===e?arguments.length<2?"":t:r(e)}},8439:(e,t,n)=>{"use strict";var r=n(9631),i=n(1890),s=n(3577),o=n(6400),a=n(9158),l=n(4199),c=n(5604),u=n(7475),h=n(2985),d=Object.assign,f=Object.defineProperty,p=i([].concat);e.exports=!d||o((function(){if(r&&1!==d({b:1},d(f({},"a",{enumerable:!0,get:function(){f(this,"b",{value:3,enumerable:!1})}}),{b:2})).b)return!0;var e={},t={},n=Symbol(),i="abcdefghijklmnopqrst";return e[n]=7,i.split("").forEach((function(e){t[e]=e})),7!=d({},e)[n]||a(d({},t)).join("")!=i}))?function(e,t){var n=u(e),i=arguments.length,o=1,d=l.f,f=c.f;while(i>o){var g,m=h(arguments[o++]),v=d?p(a(m),d(m)):a(m),y=v.length,w=0;while(y>w)g=v[w++],r&&!s(f,m,g)||(n[g]=m[g])}return n}:d},1074:(e,t,n)=>{var r,i=n(7950),s=n(3605),o=n(2875),a=n(600),l=n(9970),c=n(5354),u=n(203),h=">",d="<",f="prototype",p="script",g=u("IE_PROTO"),m=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},w=function(){var e,t=c("iframe"),n="java"+p+":";return t.style.display="none",l.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?y(r):w():y(r);var e=o.length;while(e--)delete b[f][o[e]];return b()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=i(e),n=new m,m[f]=null,n[g]=e):n=b(),void 0===t?n:s.f(n,t)}},3605:(e,t,n)=>{var r=n(9631),i=n(5953),s=n(928),o=n(7950),a=n(7120),l=n(9158);t.f=r&&!i?Object.defineProperties:function(e,t){o(e);var n,r=a(t),i=l(t),c=i.length,u=0;while(c>u)s.f(e,n=i[u++],r[n]);return e}},928:(e,t,n)=>{var r=n(9631),i=n(7021),s=n(5953),o=n(7950),a=n(8618),l=TypeError,c=Object.defineProperty,u=Object.getOwnPropertyDescriptor,h="enumerable",d="configurable",f="writable";t.f=r?s?function(e,t,n){if(o(e),t=a(t),o(n),"function"===typeof e&&"prototype"===t&&"value"in n&&f in n&&!n[f]){var r=u(e,t);r&&r[f]&&(e[t]=n.value,n={configurable:d in n?n[d]:r[d],enumerable:h in n?n[h]:r[h],writable:!1})}return c(e,t,n)}:c:function(e,t,n){if(o(e),t=a(t),o(n),i)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},2404:(e,t,n)=>{var r=n(9631),i=n(3577),s=n(5604),o=n(5442),a=n(7120),l=n(8618),c=n(7322),u=n(7021),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=l(t),u)try{return h(e,t)}catch(n){}if(c(e,t))return o(!i(s.f,e,t),e[t])}},1454:(e,t,n)=>{var r=n(1587),i=n(2875),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},4199:(e,t)=>{t.f=Object.getOwnPropertySymbols},4945:(e,t,n)=>{var r=n(7322),i=n(419),s=n(7475),o=n(203),a=n(123),l=o("IE_PROTO"),c=Object,u=c.prototype;e.exports=a?c.getPrototypeOf:function(e){var t=s(e);if(r(t,l))return t[l];var n=t.constructor;return i(n)&&t instanceof n?n.prototype:t instanceof c?u:null}},7673:(e,t,n)=>{var r=n(1890);e.exports=r({}.isPrototypeOf)},1587:(e,t,n)=>{var r=n(1890),i=n(7322),s=n(7120),o=n(6963).indexOf,a=n(600),l=r([].push);e.exports=function(e,t){var n,r=s(e),c=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&l(u,n);while(t.length>c)i(r,n=t[c++])&&(~o(u,n)||l(u,n));return u}},9158:(e,t,n)=>{var r=n(1587),i=n(2875);e.exports=Object.keys||function(e){return r(e,i)}},5604:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},6184:(e,t,n)=>{var r=n(1890),i=n(7950),s=n(8248);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},9308:(e,t,n)=>{var r=n(3577),i=n(419),s=n(776),o=TypeError;e.exports=function(e,t){var n,a;if("string"===t&&i(n=e.toString)&&!s(a=r(n,e)))return a;if(i(n=e.valueOf)&&!s(a=r(n,e)))return a;if("string"!==t&&i(n=e.toString)&&!s(a=r(n,e)))return a;throw o("Can't convert object to primitive value")}},7764:(e,t,n)=>{var r=n(9694),i=n(1890),s=n(1454),o=n(4199),a=n(7950),l=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},4836:(e,t,n)=>{var r=n(928).f;e.exports=function(e,t,n){n in e||r(e,n,{configurable:!0,get:function(){return t[n]},set:function(e){t[n]=e}})}},9395:(e,t,n)=>{var r=n(3577),i=n(7950),s=n(419),o=n(5173),a=n(4348),l=TypeError;e.exports=function(e,t){var n=e.exec;if(s(n)){var c=r(n,e,t);return null!==c&&i(c),c}if("RegExp"===o(e))return r(a,e,t);throw l("RegExp#exec called on incompatible receiver")}},4348:(e,t,n)=>{"use strict";var r=n(3577),i=n(1890),s=n(4481),o=n(136),a=n(2351),l=n(1586),c=n(1074),u=n(7624).get,h=n(5337),d=n(1442),f=l("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,m=i("".charAt),v=i("".indexOf),y=i("".replace),w=i("".slice),b=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),_=a.BROKEN_CARET,E=void 0!==/()??/.exec("")[1],S=b||E||_||h||d;S&&(g=function(e){var t,n,i,a,l,h,d,S=this,T=u(S),k=s(e),I=T.raw;if(I)return I.lastIndex=S.lastIndex,t=r(g,I,k),S.lastIndex=I.lastIndex,t;var C=T.groups,x=_&&S.sticky,A=r(o,S),R=S.source,O=0,N=k;if(x&&(A=y(A,"y",""),-1===v(A,"g")&&(A+="g"),N=w(k,S.lastIndex),S.lastIndex>0&&(!S.multiline||S.multiline&&"\n"!==m(k,S.lastIndex-1))&&(R="(?: "+R+")",N=" "+N,O++),n=new RegExp("^(?:"+R+")",A)),E&&(n=new RegExp("^"+R+"$(?!\\s)",A)),b&&(i=S.lastIndex),a=r(p,x?n:S,N),x?a?(a.input=w(a.input,O),a[0]=w(a[0],O),a.index=S.lastIndex,S.lastIndex+=a[0].length):S.lastIndex=0:b&&a&&(S.lastIndex=S.global?a.index+a[0].length:i),E&&a&&a.length>1&&r(f,a[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a&&C)for(a.groups=h=c(null),l=0;l<C.length;l++)d=C[l],h[d[0]]=a[d[1]];return a}),e.exports=g},136:(e,t,n)=>{"use strict";var r=n(7950);e.exports=function(){var e=r(this),t="";return e.hasIndices&&(t+="d"),e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.unicodeSets&&(t+="v"),e.sticky&&(t+="y"),t}},2351:(e,t,n)=>{var r=n(6400),i=n(7358),s=i.RegExp,o=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=o||r((function(){return!s("a","y").sticky})),l=o||r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:a,UNSUPPORTED_Y:o}},5337:(e,t,n)=>{var r=n(6400),i=n(7358),s=i.RegExp;e.exports=r((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},1442:(e,t,n)=>{var r=n(6400),i=n(7358),s=i.RegExp;e.exports=r((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},7933:e=>{var t=TypeError;e.exports=function(e){if(void 0==e)throw t("Can't call method on "+e);return e}},4114:(e,t,n)=>{"use strict";var r=n(9694),i=n(928),s=n(854),o=n(9631),a=s("species");e.exports=function(e){var t=r(e),n=i.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},1061:(e,t,n)=>{var r=n(928).f,i=n(7322),s=n(854),o=s("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,o)&&r(e,o,{configurable:!0,value:t})}},203:(e,t,n)=>{var r=n(1586),i=n(6862),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},1089:(e,t,n)=>{var r=n(7358),i=n(1615),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},1586:(e,t,n)=>{var r=n(6692),i=n(1089);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.23.4",mode:r?"pure":"global",copyright:"© 2014-2022 Denis Pushkarev (zloirock.ru)",license:"https://github.com/zloirock/core-js/blob/v3.23.4/LICENSE",source:"https://github.com/zloirock/core-js"})},1021:(e,t,n)=>{var r=n(1890),i=n(1860),s=n(4481),o=n(7933),a=r("".charAt),l=r("".charCodeAt),c=r("".slice),u=function(e){return function(t,n){var r,u,h=s(o(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=l(h,d),r<55296||r>56319||d+1===f||(u=l(h,d+1))<56320||u>57343?e?a(h,d):r:e?c(h,d,d+2):u-56320+(r-55296<<10)+65536)}};e.exports={codeAt:u(!1),charAt:u(!0)}},5253:(e,t,n)=>{"use strict";var r=n(1890),i=2147483647,s=36,o=1,a=26,l=38,c=700,u=72,h=128,d="-",f=/[^\0-\u007E]/,p=/[.\u3002\uFF0E\uFF61]/g,g="Overflow: input needs wider integers to process",m=s-o,v=RangeError,y=r(p.exec),w=Math.floor,b=String.fromCharCode,_=r("".charCodeAt),E=r([].join),S=r([].push),T=r("".replace),k=r("".split),I=r("".toLowerCase),C=function(e){var t=[],n=0,r=e.length;while(n<r){var i=_(e,n++);if(i>=55296&&i<=56319&&n<r){var s=_(e,n++);56320==(64512&s)?S(t,((1023&i)<<10)+(1023&s)+65536):(S(t,i),n--)}else S(t,i)}return t},x=function(e){return e+22+75*(e<26)},A=function(e,t,n){var r=0;e=n?w(e/c):e>>1,e+=w(e/t);while(e>m*a>>1)e=w(e/m),r+=s;return w(r+(m+1)*e/(e+l))},R=function(e){var t=[];e=C(e);var n,r,l=e.length,c=h,f=0,p=u;for(n=0;n<e.length;n++)r=e[n],r<128&&S(t,b(r));var m=t.length,y=m;m&&S(t,d);while(y<l){var _=i;for(n=0;n<e.length;n++)r=e[n],r>=c&&r<_&&(_=r);var T=y+1;if(_-c>w((i-f)/T))throw v(g);for(f+=(_-c)*T,c=_,n=0;n<e.length;n++){if(r=e[n],r<c&&++f>i)throw v(g);if(r==c){var k=f,I=s;while(1){var R=I<=p?o:I>=p+a?a:I-p;if(k<R)break;var O=k-R,N=s-R;S(t,b(x(R+O%N))),k=w(O/N),I+=s}S(t,b(x(k))),p=A(f,T,y==m),f=0,y++}}f++,c++}return E(t,"")};e.exports=function(e){var t,n,r=[],i=k(T(I(e),p,"."),".");for(t=0;t<i.length;t++)n=i[t],S(r,y(f,n)?"xn--"+R(n):n);return E(r,".")}},1801:(e,t,n)=>{var r=n(1860),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},5492:(e,t,n)=>{var r=n(2181),i=TypeError;e.exports=function(e){var t=r(e,"number");if("number"==typeof t)throw i("Can't convert number to bigint");return BigInt(t)}},833:(e,t,n)=>{var r=n(1860),i=n(4068),s=RangeError;e.exports=function(e){if(void 0===e)return 0;var t=r(e),n=i(t);if(t!==n)throw s("Wrong length or index");return n}},7120:(e,t,n)=>{var r=n(2985),i=n(7933);e.exports=function(e){return r(i(e))}},1860:(e,t,n)=>{var r=n(1243);e.exports=function(e){var t=+e;return t!==t||0===t?0:r(t)}},4068:(e,t,n)=>{var r=n(1860),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7475:(e,t,n)=>{var r=n(7933),i=Object;e.exports=function(e){return i(r(e))}},701:(e,t,n)=>{var r=n(1443),i=RangeError;e.exports=function(e,t){var n=r(e);if(n%t)throw i("Wrong offset");return n}},1443:(e,t,n)=>{var r=n(1860),i=RangeError;e.exports=function(e){var t=r(e);if(t<0)throw i("The argument can't be less than 0");return t}},2181:(e,t,n)=>{var r=n(3577),i=n(776),s=n(410),o=n(2344),a=n(9308),l=n(854),c=TypeError,u=l("toPrimitive");e.exports=function(e,t){if(!i(e)||s(e))return e;var n,l=o(e,u);if(l){if(void 0===t&&(t="default"),n=r(l,e,t),!i(n)||s(n))return n;throw c("Can't convert object to primitive value")}return void 0===t&&(t="number"),a(e,t)}},8618:(e,t,n)=>{var r=n(2181),i=n(410);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},5705:(e,t,n)=>{var r=n(854),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},4481:(e,t,n)=>{var r=n(5976),i=String;e.exports=function(e){if("Symbol"===r(e))throw TypeError("Cannot convert a Symbol value to a string");return i(e)}},3353:e=>{var t=String;e.exports=function(e){try{return t(e)}catch(n){return"Object"}}},6968:(e,t,n)=>{"use strict";var r=n(8934),i=n(7358),s=n(3577),o=n(9631),a=n(8689),l=n(683),c=n(62),u=n(2827),h=n(5442),d=n(1904),f=n(2818),p=n(4068),g=n(833),m=n(701),v=n(8618),y=n(7322),w=n(5976),b=n(776),_=n(410),E=n(1074),S=n(7673),T=n(6184),k=n(1454).f,I=n(9401),C=n(2099).forEach,x=n(4114),A=n(928),R=n(2404),O=n(7624),N=n(9941),L=O.get,P=O.set,D=O.enforce,F=A.f,M=R.f,q=Math.round,U=i.RangeError,V=c.ArrayBuffer,B=V.prototype,j=c.DataView,$=l.NATIVE_ARRAY_BUFFER_VIEWS,z=l.TYPED_ARRAY_TAG,H=l.TypedArray,K=l.TypedArrayPrototype,W=l.aTypedArrayConstructor,G=l.isTypedArray,Z="BYTES_PER_ELEMENT",X="Wrong length",Q=function(e,t){W(e);var n=0,r=t.length,i=new e(r);while(r>n)i[n]=t[n++];return i},Y=function(e,t){F(e,t,{get:function(){return L(this)[t]}})},J=function(e){var t;return S(B,e)||"ArrayBuffer"==(t=w(e))||"SharedArrayBuffer"==t},ee=function(e,t){return G(e)&&!_(t)&&t in e&&f(+t)&&t>=0},te=function(e,t){return t=v(t),ee(e,t)?h(2,e[t]):M(e,t)},ne=function(e,t,n){return t=v(t),!(ee(e,t)&&b(n)&&y(n,"value"))||y(n,"get")||y(n,"set")||n.configurable||y(n,"writable")&&!n.writable||y(n,"enumerable")&&!n.enumerable?F(e,t,n):(e[t]=n.value,e)};o?($||(R.f=te,A.f=ne,Y(K,"buffer"),Y(K,"byteOffset"),Y(K,"byteLength"),Y(K,"length")),r({target:"Object",stat:!0,forced:!$},{getOwnPropertyDescriptor:te,defineProperty:ne}),e.exports=function(e,t,n){var o=e.match(/\d+$/)[0]/8,l=e+(n?"Clamped":"")+"Array",c="get"+e,h="set"+e,f=i[l],v=f,y=v&&v.prototype,w={},_=function(e,t){var n=L(e);return n.view[c](t*o+n.byteOffset,!0)},S=function(e,t,r){var i=L(e);n&&(r=(r=q(r))<0?0:r>255?255:255&r),i.view[h](t*o+i.byteOffset,r,!0)},A=function(e,t){F(e,t,{get:function(){return _(this,t)},set:function(e){return S(this,t,e)},enumerable:!0})};$?a&&(v=t((function(e,t,n,r){return u(e,y),N(function(){return b(t)?J(t)?void 0!==r?new f(t,m(n,o),r):void 0!==n?new f(t,m(n,o)):new f(t):G(t)?Q(v,t):s(I,v,t):new f(g(t))}(),e,v)})),T&&T(v,H),C(k(f),(function(e){e in v||d(v,e,f[e])})),v.prototype=y):(v=t((function(e,t,n,r){u(e,y);var i,a,l,c=0,h=0;if(b(t)){if(!J(t))return G(t)?Q(v,t):s(I,v,t);i=t,h=m(n,o);var d=t.byteLength;if(void 0===r){if(d%o)throw U(X);if(a=d-h,a<0)throw U(X)}else if(a=p(r)*o,a+h>d)throw U(X);l=a/o}else l=g(t),a=l*o,i=new V(a);P(e,{buffer:i,byteOffset:h,byteLength:a,length:l,view:new j(i)});while(c<l)A(e,c++)})),T&&T(v,H),y=v.prototype=E(K)),y.constructor!==v&&d(y,"constructor",v),D(y).TypedArrayConstructor=v,z&&d(y,z,l);var R=v!=f;w[l]=v,r({global:!0,constructor:!0,forced:R,sham:!$},w),Z in v||d(v,Z,o),Z in y||d(y,Z,o),x(l)}):e.exports=function(){}},8689:(e,t,n)=>{var r=n(7358),i=n(6400),s=n(8047),o=n(683).NATIVE_ARRAY_BUFFER_VIEWS,a=r.ArrayBuffer,l=r.Int8Array;e.exports=!o||!i((function(){l(1)}))||!i((function(){new l(-1)}))||!s((function(e){new l,new l(null),new l(1.5),new l(e)}),!0)||i((function(){return 1!==new l(new a(2),1,void 0).length}))},9401:(e,t,n)=>{var r=n(422),i=n(3577),s=n(2722),o=n(7475),a=n(6042),l=n(2151),c=n(7143),u=n(1558),h=n(683).aTypedArrayConstructor;e.exports=function(e){var t,n,d,f,p,g,m=s(this),v=o(e),y=arguments.length,w=y>1?arguments[1]:void 0,b=void 0!==w,_=c(v);if(_&&!u(_)){p=l(v,_),g=p.next,v=[];while(!(f=i(g,p)).done)v.push(f.value)}for(b&&y>2&&(w=r(w,arguments[2])),n=a(v),d=new(h(m))(n),t=0;n>t;t++)d[t]=b?w(v[t],t):v[t];return d}},6862:(e,t,n)=>{var r=n(1890),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},8476:(e,t,n)=>{var r=n(7529);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},5953:(e,t,n)=>{var r=n(9631),i=n(6400);e.exports=r&&i((function(){return 42!=Object.defineProperty((function(){}),"prototype",{value:42,writable:!1}).prototype}))},6596:e=>{var t=TypeError;e.exports=function(e,n){if(e<n)throw t("Not enough arguments");return e}},854:(e,t,n)=>{var r=n(7358),i=n(1586),s=n(7322),o=n(6862),a=n(7529),l=n(8476),c=i("wks"),u=r.Symbol,h=u&&u["for"],d=l?u:u&&u.withoutSetter||o;e.exports=function(e){if(!s(c,e)||!a&&"string"!=typeof c[e]){var t="Symbol."+e;a&&s(u,e)?c[e]=u[e]:c[e]=l&&h?h(t):d(t)}return c[e]}},7971:(e,t,n)=>{"use strict";var r=n(9694),i=n(7322),s=n(1904),o=n(7673),a=n(6184),l=n(8438),c=n(4836),u=n(9941),h=n(7598),d=n(5684),f=n(767),p=n(6429),g=n(9631),m=n(6692);e.exports=function(e,t,n,v){var y="stackTraceLimit",w=v?2:1,b=e.split("."),_=b[b.length-1],E=r.apply(null,b);if(E){var S=E.prototype;if(!m&&i(S,"cause")&&delete S.cause,!n)return E;var T=r("Error"),k=t((function(e,t){var n=h(v?t:e,void 0),r=v?new E(e):new E;return void 0!==n&&s(r,"message",n),p&&s(r,"stack",f(r.stack,2)),this&&o(S,this)&&u(r,this,k),arguments.length>w&&d(r,arguments[w]),r}));if(k.prototype=S,"Error"!==_?a?a(k,T):l(k,T,{name:!0}):g&&y in E&&(c(k,E,y),c(k,E,"prepareStackTrace")),l(k,E),!m)try{S.name!==_&&s(S,"name",_),S.constructor=k}catch(I){}return k}}},3610:(e,t,n)=>{"use strict";var r=n(8934),i=n(6963).includes,s=n(6400),o=n(2852),a=s((function(){return!Array(1).includes()}));r({target:"Array",proto:!0,forced:a},{includes:function(e){return i(this,e,arguments.length>1?arguments[1]:void 0)}}),o("includes")},6843:(e,t,n)=>{"use strict";var r=n(7120),i=n(2852),s=n(2184),o=n(7624),a=n(928).f,l=n(8810),c=n(6692),u=n(9631),h="Array Iterator",d=o.set,f=o.getterFor(h);e.exports=l(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!c&&u&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},6701:(e,t,n)=>{var r=n(8934),i=n(7358),s=n(4157),o=n(7971),a="WebAssembly",l=i[a],c=7!==Error("e",{cause:7}).cause,u=function(e,t){var n={};n[e]=o(e,t,c),r({global:!0,constructor:!0,arity:1,forced:c},n)},h=function(e,t){if(l&&l[e]){var n={};n[e]=o(a+"."+e,t,c),r({target:a,stat:!0,constructor:!0,arity:1,forced:c},n)}};u("Error",(function(e){return function(t){return s(e,this,arguments)}})),u("EvalError",(function(e){return function(t){return s(e,this,arguments)}})),u("RangeError",(function(e){return function(t){return s(e,this,arguments)}})),u("ReferenceError",(function(e){return function(t){return s(e,this,arguments)}})),u("SyntaxError",(function(e){return function(t){return s(e,this,arguments)}})),u("TypeError",(function(e){return function(t){return s(e,this,arguments)}})),u("URIError",(function(e){return function(t){return s(e,this,arguments)}})),h("CompileError",(function(e){return function(t){return s(e,this,arguments)}})),h("LinkError",(function(e){return function(t){return s(e,this,arguments)}})),h("RuntimeError",(function(e){return function(t){return s(e,this,arguments)}}))},7280:(e,t,n)=>{"use strict";var r=n(8934),i=n(4348);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},4406:(e,t,n)=>{var r=n(7358),i=n(9631),s=n(9468),o=n(136),a=n(6400),l=r.RegExp,c=l.prototype,u=i&&a((function(){var e=!0;try{l(".","d")}catch(u){e=!1}var t={},n="",r=e?"dgimsy":"gimsy",i=function(e,r){Object.defineProperty(t,e,{get:function(){return n+=r,!0}})},s={dotAll:"s",global:"g",ignoreCase:"i",multiline:"m",sticky:"y"};for(var o in e&&(s.hasIndices="d"),s)i(o,s[o]);var a=Object.getOwnPropertyDescriptor(c,"flags").get.call(t);return a!==r||n!==r}));u&&s(c,"flags",{configurable:!0,get:o})},839:(e,t,n)=>{"use strict";var r=n(1021).charAt,i=n(4481),s=n(7624),o=n(8810),a="String Iterator",l=s.set,c=s.getterFor(a);o(String,"String",(function(e){l(this,{type:a,string:i(e),index:0})}),(function(){var e,t=c(this),n=t.string,i=t.index;return i>=n.length?{value:void 0,done:!0}:(e=r(n,i),t.index+=e.length,{value:e,done:!1})}))},5363:(e,t,n)=>{"use strict";var r=n(4157),i=n(3577),s=n(1890),o=n(9529),a=n(6400),l=n(7950),c=n(419),u=n(1860),h=n(4068),d=n(4481),f=n(7933),p=n(6412),g=n(2344),m=n(8716),v=n(9395),y=n(854),w=y("replace"),b=Math.max,_=Math.min,E=s([].concat),S=s([].push),T=s("".indexOf),k=s("".slice),I=function(e){return void 0===e?e:String(e)},C=function(){return"$0"==="a".replace(/./,"$0")}(),x=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),A=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var s=x?"$":"$0";return[function(e,n){var r=f(this),s=void 0==e?void 0:g(e,w);return s?i(s,e,r,n):i(t,d(r),e,n)},function(e,i){var o=l(this),a=d(e);if("string"==typeof i&&-1===T(i,s)&&-1===T(i,"$<")){var f=n(t,o,a,i);if(f.done)return f.value}var g=c(i);g||(i=d(i));var y=o.global;if(y){var w=o.unicode;o.lastIndex=0}var C=[];while(1){var x=v(o,a);if(null===x)break;if(S(C,x),!y)break;var A=d(x[0]);""===A&&(o.lastIndex=p(a,h(o.lastIndex),w))}for(var R="",O=0,N=0;N<C.length;N++){x=C[N];for(var L=d(x[0]),P=b(_(u(x.index),a.length),0),D=[],F=1;F<x.length;F++)S(D,I(x[F]));var M=x.groups;if(g){var q=E([L],D,P,a);void 0!==M&&S(q,M);var U=d(r(i,void 0,q))}else U=m(L,a,P,D,M,i);P>=O&&(R+=k(a,O,P)+U,O=P+L.length)}return R+k(a,O)}]}),!A||!C||x)},5123:(e,t,n)=>{"use strict";var r=n(683),i=n(6042),s=n(1860),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(e){var t=o(this),n=i(t),r=s(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}))},8836:(e,t,n)=>{"use strict";var r=n(683),i=n(5786),s=n(5492),o=n(5976),a=n(3577),l=n(1890),c=n(6400),u=r.aTypedArray,h=r.exportTypedArrayMethod,d=l("".slice),f=c((function(){var e=0;return new Int8Array(2).fill({valueOf:function(){return e++}}),1!==e}));h("fill",(function(e){var t=arguments.length;u(this);var n="Big"===d(o(this),0,3)?s(e):+e;return a(i,this,n,t>1?arguments[1]:void 0,t>2?arguments[2]:void 0)}),f)},7648:(e,t,n)=>{"use strict";var r=n(683),i=n(5416).findLastIndex,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLastIndex",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},4331:(e,t,n)=>{"use strict";var r=n(683),i=n(5416).findLast,s=r.aTypedArray,o=r.exportTypedArrayMethod;o("findLast",(function(e){return i(s(this),e,arguments.length>1?arguments[1]:void 0)}))},8685:(e,t,n)=>{"use strict";var r=n(7358),i=n(3577),s=n(683),o=n(6042),a=n(701),l=n(7475),c=n(6400),u=r.RangeError,h=r.Int8Array,d=h&&h.prototype,f=d&&d.set,p=s.aTypedArray,g=s.exportTypedArrayMethod,m=!c((function(){var e=new Uint8ClampedArray(2);return i(f,e,{length:1,0:3},1),3!==e[1]})),v=m&&s.NATIVE_ARRAY_BUFFER_VIEWS&&c((function(){var e=new h(2);return e.set(1),e.set("2",1),0!==e[0]||2!==e[1]}));g("set",(function(e){p(this);var t=a(arguments.length>1?arguments[1]:void 0,1),n=l(e);if(m)return i(f,this,n,t);var r=this.length,s=o(n),c=0;if(s+t>r)throw u("Wrong length");while(c<s)this[t+c]=n[c++]}),!m||v)},2396:(e,t,n)=>{"use strict";var r=n(7358),i=n(1890),s=n(6400),o=n(392),a=n(6534),l=n(683),c=n(1544),u=n(8979),h=n(5068),d=n(1513),f=l.aTypedArray,p=l.exportTypedArrayMethod,g=r.Uint16Array,m=g&&i(g.prototype.sort),v=!!m&&!(s((function(){m(new g(2),null)}))&&s((function(){m(new g(2),{})}))),y=!!m&&!s((function(){if(h)return h<74;if(c)return c<67;if(u)return!0;if(d)return d<602;var e,t,n=new g(516),r=Array(516);for(e=0;e<516;e++)t=e%4,n[e]=515-e,r[e]=e-2*t+3;for(m(n,(function(e,t){return(e/4|0)-(t/4|0)})),e=0;e<516;e++)if(n[e]!==r[e])return!0})),w=function(e){return function(t,n){return void 0!==e?+e(t,n)||0:n!==n?-1:t!==t?1:0===t&&0===n?1/t>0&&1/n<0?1:-1:t>n}};p("sort",(function(e){return void 0!==e&&o(e),y?m(this,e):a(f(this),w(e))}),!y||v)},6105:(e,t,n)=>{var r=n(6968);r("Uint8",(function(e){return function(t,n,r){return e(this,t,n,r)}}))},2773:(e,t,n)=>{n(7648)},9802:(e,t,n)=>{n(4331)},71:(e,t,n)=>{var r=n(7358),i=n(4296),s=n(8753),o=n(6843),a=n(1904),l=n(854),c=l("iterator"),u=l("toStringTag"),h=o.values,d=function(e,t){if(e){if(e[c]!==h)try{a(e,c,h)}catch(r){e[c]=h}if(e[u]||a(e,u,t),i[t])for(var n in o)if(e[n]!==o[n])try{a(e,n,o[n])}catch(r){e[n]=o[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(s,"DOMTokenList")},812:(e,t,n)=>{"use strict";var r=n(8934),i=n(7358),s=n(9694),o=n(5442),a=n(928).f,l=n(7322),c=n(2827),u=n(9941),h=n(7598),d=n(1771),f=n(767),p=n(9631),g=n(6692),m="DOMException",v=s("Error"),y=s(m),w=function(){c(this,b);var e=arguments.length,t=h(e<1?void 0:arguments[0]),n=h(e<2?void 0:arguments[1],"Error"),r=new y(t,n),i=v(t);return i.name=m,a(r,"stack",o(1,f(i.stack,1))),u(r,this,w),r},b=w.prototype=y.prototype,_="stack"in v(m),E="stack"in new y(1,2),S=y&&p&&Object.getOwnPropertyDescriptor(i,m),T=!!S&&!(S.writable&&S.configurable),k=_&&!T&&!E;r({global:!0,constructor:!0,forced:g||k},{DOMException:k?w:y});var I=s(m),C=I.prototype;if(C.constructor!==I)for(var x in g||a(C,"constructor",o(1,I)),d)if(l(d,x)){var A=d[x],R=A.s;l(I,R)||a(I,R,o(6,A.c))}},1999:(e,t,n)=>{"use strict";n(6843);var r=n(8934),i=n(7358),s=n(3577),o=n(1890),a=n(9631),l=n(6595),c=n(3460),u=n(6703),h=n(1061),d=n(5912),f=n(7624),p=n(2827),g=n(419),m=n(7322),v=n(422),y=n(5976),w=n(7950),b=n(776),_=n(4481),E=n(1074),S=n(5442),T=n(2151),k=n(7143),I=n(6596),C=n(854),x=n(6534),A=C("iterator"),R="URLSearchParams",O=R+"Iterator",N=f.set,L=f.getterFor(R),P=f.getterFor(O),D=Object.getOwnPropertyDescriptor,F=function(e){if(!a)return i[e];var t=D(i,e);return t&&t.value},M=F("fetch"),q=F("Request"),U=F("Headers"),V=q&&q.prototype,B=U&&U.prototype,j=i.RegExp,$=i.TypeError,z=i.decodeURIComponent,H=i.encodeURIComponent,K=o("".charAt),W=o([].join),G=o([].push),Z=o("".replace),X=o([].shift),Q=o([].splice),Y=o("".split),J=o("".slice),ee=/\+/g,te=Array(4),ne=function(e){return te[e-1]||(te[e-1]=j("((?:%[\\da-f]{2}){"+e+"})","gi"))},re=function(e){try{return z(e)}catch(t){return e}},ie=function(e){var t=Z(e,ee," "),n=4;try{return z(t)}catch(r){while(n)t=Z(t,ne(n--),re);return t}},se=/[!'()~]|%20/g,oe={"!":"%21","'":"%27","(":"%28",")":"%29","~":"%7E","%20":"+"},ae=function(e){return oe[e]},le=function(e){return Z(H(e),se,ae)},ce=d((function(e,t){N(this,{type:O,iterator:T(L(e).entries),kind:t})}),"Iterator",(function(){var e=P(this),t=e.kind,n=e.iterator.next(),r=n.value;return n.done||(n.value="keys"===t?r.key:"values"===t?r.value:[r.key,r.value]),n}),!0),ue=function(e){this.entries=[],this.url=null,void 0!==e&&(b(e)?this.parseObject(e):this.parseQuery("string"==typeof e?"?"===K(e,0)?J(e,1):e:_(e)))};ue.prototype={type:R,bindURL:function(e){this.url=e,this.update()},parseObject:function(e){var t,n,r,i,o,a,l,c=k(e);if(c){t=T(e,c),n=t.next;while(!(r=s(n,t)).done){if(i=T(w(r.value)),o=i.next,(a=s(o,i)).done||(l=s(o,i)).done||!s(o,i).done)throw $("Expected sequence with length 2");G(this.entries,{key:_(a.value),value:_(l.value)})}}else for(var u in e)m(e,u)&&G(this.entries,{key:u,value:_(e[u])})},parseQuery:function(e){if(e){var t,n,r=Y(e,"&"),i=0;while(i<r.length)t=r[i++],t.length&&(n=Y(t,"="),G(this.entries,{key:ie(X(n)),value:ie(W(n,"="))}))}},serialize:function(){var e,t=this.entries,n=[],r=0;while(r<t.length)e=t[r++],G(n,le(e.key)+"="+le(e.value));return W(n,"&")},update:function(){this.entries.length=0,this.parseQuery(this.url.query)},updateURL:function(){this.url&&this.url.update()}};var he=function(){p(this,de);var e=arguments.length>0?arguments[0]:void 0;N(this,new ue(e))},de=he.prototype;if(u(de,{append:function(e,t){I(arguments.length,2);var n=L(this);G(n.entries,{key:_(e),value:_(t)}),n.updateURL()},delete:function(e){I(arguments.length,1);var t=L(this),n=t.entries,r=_(e),i=0;while(i<n.length)n[i].key===r?Q(n,i,1):i++;t.updateURL()},get:function(e){I(arguments.length,1);for(var t=L(this).entries,n=_(e),r=0;r<t.length;r++)if(t[r].key===n)return t[r].value;return null},getAll:function(e){I(arguments.length,1);for(var t=L(this).entries,n=_(e),r=[],i=0;i<t.length;i++)t[i].key===n&&G(r,t[i].value);return r},has:function(e){I(arguments.length,1);var t=L(this).entries,n=_(e),r=0;while(r<t.length)if(t[r++].key===n)return!0;return!1},set:function(e,t){I(arguments.length,1);for(var n,r=L(this),i=r.entries,s=!1,o=_(e),a=_(t),l=0;l<i.length;l++)n=i[l],n.key===o&&(s?Q(i,l--,1):(s=!0,n.value=a));s||G(i,{key:o,value:a}),r.updateURL()},sort:function(){var e=L(this);x(e.entries,(function(e,t){return e.key>t.key?1:-1})),e.updateURL()},forEach:function(e){var t,n=L(this).entries,r=v(e,arguments.length>1?arguments[1]:void 0),i=0;while(i<n.length)t=n[i++],r(t.value,t.key,this)},keys:function(){return new ce(this,"keys")},values:function(){return new ce(this,"values")},entries:function(){return new ce(this,"entries")}},{enumerable:!0}),c(de,A,de.entries,{name:"entries"}),c(de,"toString",(function(){return L(this).serialize()}),{enumerable:!0}),h(he,R),r({global:!0,constructor:!0,forced:!l},{URLSearchParams:he}),!l&&g(U)){var fe=o(B.has),pe=o(B.set),ge=function(e){if(b(e)){var t,n=e.body;if(y(n)===R)return t=e.headers?new U(e.headers):new U,fe(t,"content-type")||pe(t,"content-type","application/x-www-form-urlencoded;charset=UTF-8"),E(e,{body:S(0,_(n)),headers:S(0,t)})}return e};if(g(M)&&r({global:!0,enumerable:!0,dontCallGetSet:!0,forced:!0},{fetch:function(e){return M(e,arguments.length>1?ge(arguments[1]):{})}}),g(q)){var me=function(e){return p(this,V),new q(e,arguments.length>1?ge(arguments[1]):{})};V.constructor=me,me.prototype=V,r({global:!0,constructor:!0,dontCallGetSet:!0,forced:!0},{Request:me})}}e.exports={URLSearchParams:he,getState:L}},6016:(e,t,n)=>{n(1999)},6295:(e,t,n)=>{"use strict";n(839);var r,i=n(8934),s=n(9631),o=n(6595),a=n(7358),l=n(422),c=n(1890),u=n(3460),h=n(9468),d=n(2827),f=n(7322),p=n(8439),g=n(2029),m=n(5771),v=n(1021).codeAt,y=n(5253),w=n(4481),b=n(1061),_=n(6596),E=n(1999),S=n(7624),T=S.set,k=S.getterFor("URL"),I=E.URLSearchParams,C=E.getState,x=a.URL,A=a.TypeError,R=a.parseInt,O=Math.floor,N=Math.pow,L=c("".charAt),P=c(/./.exec),D=c([].join),F=c(1..toString),M=c([].pop),q=c([].push),U=c("".replace),V=c([].shift),B=c("".split),j=c("".slice),$=c("".toLowerCase),z=c([].unshift),H="Invalid authority",K="Invalid scheme",W="Invalid host",G="Invalid port",Z=/[a-z]/i,X=/[\d+-.a-z]/i,Q=/\d/,Y=/^0x/i,J=/^[0-7]+$/,ee=/^\d+$/,te=/^[\da-f]+$/i,ne=/[\0\t\n\r #%/:<>?@[\\\]^|]/,re=/[\0\t\n\r #/:<>?@[\\\]^|]/,ie=/^[\u0000-\u0020]+|[\u0000-\u0020]+$/g,se=/[\t\n\r]/g,oe=function(e){var t,n,r,i,s,o,a,l=B(e,".");if(l.length&&""==l[l.length-1]&&l.length--,t=l.length,t>4)return e;for(n=[],r=0;r<t;r++){if(i=l[r],""==i)return e;if(s=10,i.length>1&&"0"==L(i,0)&&(s=P(Y,i)?16:8,i=j(i,8==s?1:2)),""===i)o=0;else{if(!P(10==s?ee:8==s?J:te,i))return e;o=R(i,s)}q(n,o)}for(r=0;r<t;r++)if(o=n[r],r==t-1){if(o>=N(256,5-t))return null}else if(o>255)return null;for(a=M(n),r=0;r<n.length;r++)a+=n[r]*N(256,3-r);return a},ae=function(e){var t,n,r,i,s,o,a,l=[0,0,0,0,0,0,0,0],c=0,u=null,h=0,d=function(){return L(e,h)};if(":"==d()){if(":"!=L(e,1))return;h+=2,c++,u=c}while(d()){if(8==c)return;if(":"!=d()){t=n=0;while(n<4&&P(te,d()))t=16*t+R(d(),16),h++,n++;if("."==d()){if(0==n)return;if(h-=n,c>6)return;r=0;while(d()){if(i=null,r>0){if(!("."==d()&&r<4))return;h++}if(!P(Q,d()))return;while(P(Q,d())){if(s=R(d(),10),null===i)i=s;else{if(0==i)return;i=10*i+s}if(i>255)return;h++}l[c]=256*l[c]+i,r++,2!=r&&4!=r||c++}if(4!=r)return;break}if(":"==d()){if(h++,!d())return}else if(d())return;l[c++]=t}else{if(null!==u)return;h++,c++,u=c}}if(null!==u){o=c-u,c=7;while(0!=c&&o>0)a=l[c],l[c--]=l[u+o-1],l[u+--o]=a}else if(8!=c)return;return l},le=function(e){for(var t=null,n=1,r=null,i=0,s=0;s<8;s++)0!==e[s]?(i>n&&(t=r,n=i),r=null,i=0):(null===r&&(r=s),++i);return i>n&&(t=r,n=i),t},ce=function(e){var t,n,r,i;if("number"==typeof e){for(t=[],n=0;n<4;n++)z(t,e%256),e=O(e/256);return D(t,".")}if("object"==typeof e){for(t="",r=le(e),n=0;n<8;n++)i&&0===e[n]||(i&&(i=!1),r===n?(t+=n?":":"::",i=!0):(t+=F(e[n],16),n<7&&(t+=":")));return"["+t+"]"}return e},ue={},he=p({},ue,{" ":1,'"':1,"<":1,">":1,"`":1}),de=p({},he,{"#":1,"?":1,"{":1,"}":1}),fe=p({},de,{"/":1,":":1,";":1,"=":1,"@":1,"[":1,"\\":1,"]":1,"^":1,"|":1}),pe=function(e,t){var n=v(e,0);return n>32&&n<127&&!f(t,e)?e:encodeURIComponent(e)},ge={ftp:21,file:null,http:80,https:443,ws:80,wss:443},me=function(e,t){var n;return 2==e.length&&P(Z,L(e,0))&&(":"==(n=L(e,1))||!t&&"|"==n)},ve=function(e){var t;return e.length>1&&me(j(e,0,2))&&(2==e.length||"/"===(t=L(e,2))||"\\"===t||"?"===t||"#"===t)},ye=function(e){return"."===e||"%2e"===$(e)},we=function(e){return e=$(e),".."===e||"%2e."===e||".%2e"===e||"%2e%2e"===e},be={},_e={},Ee={},Se={},Te={},ke={},Ie={},Ce={},xe={},Ae={},Re={},Oe={},Ne={},Le={},Pe={},De={},Fe={},Me={},qe={},Ue={},Ve={},Be=function(e,t,n){var r,i,s,o=w(e);if(t){if(i=this.parse(o),i)throw A(i);this.searchParams=null}else{if(void 0!==n&&(r=new Be(n,!0)),i=this.parse(o,null,r),i)throw A(i);s=C(new I),s.bindURL(this),this.searchParams=s}};Be.prototype={type:"URL",parse:function(e,t,n){var i,s,o,a,l=this,c=t||be,u=0,h="",d=!1,p=!1,v=!1;e=w(e),t||(l.scheme="",l.username="",l.password="",l.host=null,l.port=null,l.path=[],l.query=null,l.fragment=null,l.cannotBeABaseURL=!1,e=U(e,ie,"")),e=U(e,se,""),i=g(e);while(u<=i.length){switch(s=i[u],c){case be:if(!s||!P(Z,s)){if(t)return K;c=Ee;continue}h+=$(s),c=_e;break;case _e:if(s&&(P(X,s)||"+"==s||"-"==s||"."==s))h+=$(s);else{if(":"!=s){if(t)return K;h="",c=Ee,u=0;continue}if(t&&(l.isSpecial()!=f(ge,h)||"file"==h&&(l.includesCredentials()||null!==l.port)||"file"==l.scheme&&!l.host))return;if(l.scheme=h,t)return void(l.isSpecial()&&ge[l.scheme]==l.port&&(l.port=null));h="","file"==l.scheme?c=Le:l.isSpecial()&&n&&n.scheme==l.scheme?c=Se:l.isSpecial()?c=Ce:"/"==i[u+1]?(c=Te,u++):(l.cannotBeABaseURL=!0,q(l.path,""),c=qe)}break;case Ee:if(!n||n.cannotBeABaseURL&&"#"!=s)return K;if(n.cannotBeABaseURL&&"#"==s){l.scheme=n.scheme,l.path=m(n.path),l.query=n.query,l.fragment="",l.cannotBeABaseURL=!0,c=Ve;break}c="file"==n.scheme?Le:ke;continue;case Se:if("/"!=s||"/"!=i[u+1]){c=ke;continue}c=xe,u++;break;case Te:if("/"==s){c=Ae;break}c=Me;continue;case ke:if(l.scheme=n.scheme,s==r)l.username=n.username,l.password=n.password,l.host=n.host,l.port=n.port,l.path=m(n.path),l.query=n.query;else if("/"==s||"\\"==s&&l.isSpecial())c=Ie;else if("?"==s)l.username=n.username,l.password=n.password,l.host=n.host,l.port=n.port,l.path=m(n.path),l.query="",c=Ue;else{if("#"!=s){l.username=n.username,l.password=n.password,l.host=n.host,l.port=n.port,l.path=m(n.path),l.path.length--,c=Me;continue}l.username=n.username,l.password=n.password,l.host=n.host,l.port=n.port,l.path=m(n.path),l.query=n.query,l.fragment="",c=Ve}break;case Ie:if(!l.isSpecial()||"/"!=s&&"\\"!=s){if("/"!=s){l.username=n.username,l.password=n.password,l.host=n.host,l.port=n.port,c=Me;continue}c=Ae}else c=xe;break;case Ce:if(c=xe,"/"!=s||"/"!=L(h,u+1))continue;u++;break;case xe:if("/"!=s&&"\\"!=s){c=Ae;continue}break;case Ae:if("@"==s){d&&(h="%40"+h),d=!0,o=g(h);for(var y=0;y<o.length;y++){var b=o[y];if(":"!=b||v){var _=pe(b,fe);v?l.password+=_:l.username+=_}else v=!0}h=""}else if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&l.isSpecial()){if(d&&""==h)return H;u-=g(h).length+1,h="",c=Re}else h+=s;break;case Re:case Oe:if(t&&"file"==l.scheme){c=De;continue}if(":"!=s||p){if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&l.isSpecial()){if(l.isSpecial()&&""==h)return W;if(t&&""==h&&(l.includesCredentials()||null!==l.port))return;if(a=l.parseHost(h),a)return a;if(h="",c=Fe,t)return;continue}"["==s?p=!0:"]"==s&&(p=!1),h+=s}else{if(""==h)return W;if(a=l.parseHost(h),a)return a;if(h="",c=Ne,t==Oe)return}break;case Ne:if(!P(Q,s)){if(s==r||"/"==s||"?"==s||"#"==s||"\\"==s&&l.isSpecial()||t){if(""!=h){var E=R(h,10);if(E>65535)return G;l.port=l.isSpecial()&&E===ge[l.scheme]?null:E,h=""}if(t)return;c=Fe;continue}return G}h+=s;break;case Le:if(l.scheme="file","/"==s||"\\"==s)c=Pe;else{if(!n||"file"!=n.scheme){c=Me;continue}if(s==r)l.host=n.host,l.path=m(n.path),l.query=n.query;else if("?"==s)l.host=n.host,l.path=m(n.path),l.query="",c=Ue;else{if("#"!=s){ve(D(m(i,u),""))||(l.host=n.host,l.path=m(n.path),l.shortenPath()),c=Me;continue}l.host=n.host,l.path=m(n.path),l.query=n.query,l.fragment="",c=Ve}}break;case Pe:if("/"==s||"\\"==s){c=De;break}n&&"file"==n.scheme&&!ve(D(m(i,u),""))&&(me(n.path[0],!0)?q(l.path,n.path[0]):l.host=n.host),c=Me;continue;case De:if(s==r||"/"==s||"\\"==s||"?"==s||"#"==s){if(!t&&me(h))c=Me;else if(""==h){if(l.host="",t)return;c=Fe}else{if(a=l.parseHost(h),a)return a;if("localhost"==l.host&&(l.host=""),t)return;h="",c=Fe}continue}h+=s;break;case Fe:if(l.isSpecial()){if(c=Me,"/"!=s&&"\\"!=s)continue}else if(t||"?"!=s)if(t||"#"!=s){if(s!=r&&(c=Me,"/"!=s))continue}else l.fragment="",c=Ve;else l.query="",c=Ue;break;case Me:if(s==r||"/"==s||"\\"==s&&l.isSpecial()||!t&&("?"==s||"#"==s)){if(we(h)?(l.shortenPath(),"/"==s||"\\"==s&&l.isSpecial()||q(l.path,"")):ye(h)?"/"==s||"\\"==s&&l.isSpecial()||q(l.path,""):("file"==l.scheme&&!l.path.length&&me(h)&&(l.host&&(l.host=""),h=L(h,0)+":"),q(l.path,h)),h="","file"==l.scheme&&(s==r||"?"==s||"#"==s))while(l.path.length>1&&""===l.path[0])V(l.path);"?"==s?(l.query="",c=Ue):"#"==s&&(l.fragment="",c=Ve)}else h+=pe(s,de);break;case qe:"?"==s?(l.query="",c=Ue):"#"==s?(l.fragment="",c=Ve):s!=r&&(l.path[0]+=pe(s,ue));break;case Ue:t||"#"!=s?s!=r&&("'"==s&&l.isSpecial()?l.query+="%27":l.query+="#"==s?"%23":pe(s,ue)):(l.fragment="",c=Ve);break;case Ve:s!=r&&(l.fragment+=pe(s,he));break}u++}},parseHost:function(e){var t,n,r;if("["==L(e,0)){if("]"!=L(e,e.length-1))return W;if(t=ae(j(e,1,-1)),!t)return W;this.host=t}else if(this.isSpecial()){if(e=y(e),P(ne,e))return W;if(t=oe(e),null===t)return W;this.host=t}else{if(P(re,e))return W;for(t="",n=g(e),r=0;r<n.length;r++)t+=pe(n[r],ue);this.host=t}},cannotHaveUsernamePasswordPort:function(){return!this.host||this.cannotBeABaseURL||"file"==this.scheme},includesCredentials:function(){return""!=this.username||""!=this.password},isSpecial:function(){return f(ge,this.scheme)},shortenPath:function(){var e=this.path,t=e.length;!t||"file"==this.scheme&&1==t&&me(e[0],!0)||e.length--},serialize:function(){var e=this,t=e.scheme,n=e.username,r=e.password,i=e.host,s=e.port,o=e.path,a=e.query,l=e.fragment,c=t+":";return null!==i?(c+="//",e.includesCredentials()&&(c+=n+(r?":"+r:"")+"@"),c+=ce(i),null!==s&&(c+=":"+s)):"file"==t&&(c+="//"),c+=e.cannotBeABaseURL?o[0]:o.length?"/"+D(o,"/"):"",null!==a&&(c+="?"+a),null!==l&&(c+="#"+l),c},setHref:function(e){var t=this.parse(e);if(t)throw A(t);this.searchParams.update()},getOrigin:function(){var e=this.scheme,t=this.port;if("blob"==e)try{return new je(e.path[0]).origin}catch(n){return"null"}return"file"!=e&&this.isSpecial()?e+"://"+ce(this.host)+(null!==t?":"+t:""):"null"},getProtocol:function(){return this.scheme+":"},setProtocol:function(e){this.parse(w(e)+":",be)},getUsername:function(){return this.username},setUsername:function(e){var t=g(w(e));if(!this.cannotHaveUsernamePasswordPort()){this.username="";for(var n=0;n<t.length;n++)this.username+=pe(t[n],fe)}},getPassword:function(){return this.password},setPassword:function(e){var t=g(w(e));if(!this.cannotHaveUsernamePasswordPort()){this.password="";for(var n=0;n<t.length;n++)this.password+=pe(t[n],fe)}},getHost:function(){var e=this.host,t=this.port;return null===e?"":null===t?ce(e):ce(e)+":"+t},setHost:function(e){this.cannotBeABaseURL||this.parse(e,Re)},getHostname:function(){var e=this.host;return null===e?"":ce(e)},setHostname:function(e){this.cannotBeABaseURL||this.parse(e,Oe)},getPort:function(){var e=this.port;return null===e?"":w(e)},setPort:function(e){this.cannotHaveUsernamePasswordPort()||(e=w(e),""==e?this.port=null:this.parse(e,Ne))},getPathname:function(){var e=this.path;return this.cannotBeABaseURL?e[0]:e.length?"/"+D(e,"/"):""},setPathname:function(e){this.cannotBeABaseURL||(this.path=[],this.parse(e,Fe))},getSearch:function(){var e=this.query;return e?"?"+e:""},setSearch:function(e){e=w(e),""==e?this.query=null:("?"==L(e,0)&&(e=j(e,1)),this.query="",this.parse(e,Ue)),this.searchParams.update()},getSearchParams:function(){return this.searchParams.facade},getHash:function(){var e=this.fragment;return e?"#"+e:""},setHash:function(e){e=w(e),""!=e?("#"==L(e,0)&&(e=j(e,1)),this.fragment="",this.parse(e,Ve)):this.fragment=null},update:function(){this.query=this.searchParams.serialize()||null}};var je=function(e){var t=d(this,$e),n=_(arguments.length,1)>1?arguments[1]:void 0,r=T(t,new Be(e,!1,n));s||(t.href=r.serialize(),t.origin=r.getOrigin(),t.protocol=r.getProtocol(),t.username=r.getUsername(),t.password=r.getPassword(),t.host=r.getHost(),t.hostname=r.getHostname(),t.port=r.getPort(),t.pathname=r.getPathname(),t.search=r.getSearch(),t.searchParams=r.getSearchParams(),t.hash=r.getHash())},$e=je.prototype,ze=function(e,t){return{get:function(){return k(this)[e]()},set:t&&function(e){return k(this)[t](e)},configurable:!0,enumerable:!0}};if(s&&(h($e,"href",ze("serialize","setHref")),h($e,"origin",ze("getOrigin")),h($e,"protocol",ze("getProtocol","setProtocol")),h($e,"username",ze("getUsername","setUsername")),h($e,"password",ze("getPassword","setPassword")),h($e,"host",ze("getHost","setHost")),h($e,"hostname",ze("getHostname","setHostname")),h($e,"port",ze("getPort","setPort")),h($e,"pathname",ze("getPathname","setPathname")),h($e,"search",ze("getSearch","setSearch")),h($e,"searchParams",ze("getSearchParams")),h($e,"hash",ze("getHash","setHash"))),u($e,"toJSON",(function(){return k(this).serialize()}),{enumerable:!0}),u($e,"toString",(function(){return k(this).serialize()}),{enumerable:!0}),x){var He=x.createObjectURL,Ke=x.revokeObjectURL;He&&u(je,"createObjectURL",l(He,x)),Ke&&u(je,"revokeObjectURL",l(Ke,x))}b(je,"URL"),i({global:!0,constructor:!0,forced:!o,sham:!s},{URL:je})},7965:(e,t,n)=>{n(6295)},7410:(e,t,n)=>{"use strict";n.d(t,{IH:()=>yt});var r=n(9036),i=n(1492),s=n(5479),o=n(4676),a=n(2689);const l="@firebase/installations",c="0.5.12",u=1e4,h=`w:${c}`,d="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,g="installations",m="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new s.LL(g,m,v);function w(e){return e instanceof s.ZR&&e.code.includes("request-failed")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function b({projectId:e}){return`${f}/projects/${e}/installations`}function _(e){return{token:e.token,requestStatus:2,expiresIn:I(e.expiresIn),creationTime:Date.now()}}async function E(e,t){const n=await t.json(),r=n.error;return y.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function S({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function T(e,{refreshToken:t}){const n=S(e);return n.append("Authorization",C(t)),n}async function k(e){const t=await e();return t.status>=500&&t.status<600?e():t}function I(e){return Number(e.replace("s","000"))}function C(e){return`${d} ${e}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function x({appConfig:e,heartbeatServiceProvider:t},{fid:n}){const r=b(e),i=S(e),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={fid:n,authVersion:d,appId:e.appId,sdkVersion:h},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await k((()=>fetch(r,a)));if(l.ok){const e=await l.json(),t={fid:e.fid||n,registrationStatus:2,refreshToken:e.refreshToken,authToken:_(e.authToken)};return t}throw await E("Create Installation",l)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function A(e){return new Promise((t=>{setTimeout(t,e)}))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e){const t=btoa(String.fromCharCode(...e));return t.replace(/\+/g,"-").replace(/\//g,"_")}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const O=/^[cdef][\w-]{21}$/,N="";function L(){try{const e=new Uint8Array(17),t=self.crypto||self.msCrypto;t.getRandomValues(e),e[0]=112+e[0]%16;const n=P(e);return O.test(n)?n:N}catch(e){return N}}function P(e){const t=R(e);return t.substr(0,22)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function D(e){return`${e.appName}!${e.appId}`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const F=new Map;function M(e,t){const n=D(e);q(n,t),U(n,t)}function q(e,t){const n=F.get(e);if(n)for(const r of n)r(t)}function U(e,t){const n=B();n&&n.postMessage({key:e,fid:t}),j()}let V=null;function B(){return!V&&"BroadcastChannel"in self&&(V=new BroadcastChannel("[Firebase] FID Change"),V.onmessage=e=>{q(e.data.key,e.data.fid)}),V}function j(){0===F.size&&V&&(V.close(),V=null)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const $="firebase-installations-database",z=1,H="firebase-installations-store";let K=null;function W(){return K||(K=(0,a.X3)($,z,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(H)}}})),K}async function G(e,t){const n=D(e),r=await W(),i=r.transaction(H,"readwrite"),s=i.objectStore(H),o=await s.get(n);return await s.put(t,n),await i.done,o&&o.fid===t.fid||M(e,t.fid),t}async function Z(e){const t=D(e),n=await W(),r=n.transaction(H,"readwrite");await r.objectStore(H).delete(t),await r.done}async function X(e,t){const n=D(e),r=await W(),i=r.transaction(H,"readwrite"),s=i.objectStore(H),o=await s.get(n),a=t(o);return void 0===a?await s.delete(n):await s.put(a,n),await i.done,!a||o&&o.fid===a.fid||M(e,a.fid),a}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Q(e){let t;const n=await X(e.appConfig,(n=>{const r=Y(n),i=J(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===N?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Y(e){const t=e||{fid:L(),registrationStatus:0};return re(t)}function J(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(y.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ee(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:te(e)}:{installationEntry:t}}async function ee(e,t){try{const n=await x(e,t);return G(e.appConfig,n)}catch(n){throw w(n)&&409===n.customData.serverCode?await Z(e.appConfig):await G(e.appConfig,{fid:t.fid,registrationStatus:0}),n}}async function te(e){let t=await ne(e.appConfig);while(1===t.registrationStatus)await A(100),t=await ne(e.appConfig);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await Q(e);return n||t}return t}function ne(e){return X(e,(e=>{if(!e)throw y.create("installation-not-found");return re(e)}))}function re(e){return ie(e)?{fid:e.fid,registrationStatus:0}:e}function ie(e){return 1===e.registrationStatus&&e.registrationTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function se({appConfig:e,heartbeatServiceProvider:t},n){const r=oe(e,n),i=T(e,n),s=t.getImmediate({optional:!0});if(s){const e=await s.getHeartbeatsHeader();e&&i.append("x-firebase-client",e)}const o={installation:{sdkVersion:h,appId:e.appId}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await k((()=>fetch(r,a)));if(l.ok){const e=await l.json(),t=_(e);return t}throw await E("Generate Auth Token",l)}function oe(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ae(e,t=!1){let n;const r=await X(e.appConfig,(r=>{if(!he(r))throw y.create("not-registered");const i=r.authToken;if(!t&&de(i))return r;if(1===i.requestStatus)return n=le(e,t),r;{if(!navigator.onLine)throw y.create("app-offline");const t=pe(r);return n=ue(e,t),t}})),i=n?await n:r.authToken;return i}async function le(e,t){let n=await ce(e.appConfig);while(1===n.authToken.requestStatus)await A(100),n=await ce(e.appConfig);const r=n.authToken;return 0===r.requestStatus?ae(e,t):r}function ce(e){return X(e,(e=>{if(!he(e))throw y.create("not-registered");const t=e.authToken;return ge(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function ue(e,t){try{const n=await se(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await G(e.appConfig,r),n}catch(n){if(!w(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await G(e.appConfig,n)}else await Z(e.appConfig);throw n}}function he(e){return void 0!==e&&2===e.registrationStatus}function de(e){return 2===e.requestStatus&&!fe(e)}function fe(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+p}function pe(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ge(e){return 1===e.requestStatus&&e.requestTime+u<Date.now()}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function me(e){const t=e,{installationEntry:n,registrationPromise:r}=await Q(t);return r?r.catch(console.error):ae(t).catch(console.error),n.fid}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ve(e,t=!1){const n=e;await ye(n);const r=await ae(n,t);return r.token}async function ye(e){const{registrationPromise:t}=await Q(e);t&&await t}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function we(e){if(!e||!e.options)throw be("App Configuration");if(!e.name)throw be("App Name");const t=["projectId","apiKey","appId"];for(const n of t)if(!e.options[n])throw be(n);return{appName:e.name,projectId:e.options.projectId,apiKey:e.options.apiKey,appId:e.options.appId}}function be(e){return y.create("missing-app-config-values",{valueName:e})}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _e="installations",Ee="installations-internal",Se=e=>{const t=e.getProvider("app").getImmediate(),n=we(t),i=(0,r.qX)(t,"heartbeat"),s={app:t,appConfig:n,heartbeatServiceProvider:i,_delete:()=>Promise.resolve()};return s},Te=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r.qX)(t,_e).getImmediate(),i={getId:()=>me(n),getToken:e=>ve(n,e)};return i};function ke(){(0,r.Xd)(new o.wA(_e,Se,"PUBLIC")),(0,r.Xd)(new o.wA(Ee,Te,"PRIVATE"))}ke(),(0,r.KN)(l,c),(0,r.KN)(l,c,"esm2017");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Ie="analytics",Ce="firebase_id",xe="origin",Ae=6e4,Re="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oe="https://www.googletagmanager.com/gtag/js",Ne=new i.Yd("@firebase/analytics");
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Le(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Pe(e,t){const n=document.createElement("script");n.src=`${Oe}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function De(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Fe(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=await Le(n),r=e.find((e=>e.measurementId===i));r&&await t[r.appId]}}catch(a){Ne.error(a)}e("config",i,s)}async function Me(e,t,n,r,i){try{let s=[];if(i&&i["send_to"]){let e=i["send_to"];Array.isArray(e)||(e=[e]);const r=await Le(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Ne.error(s)}}function qe(e,t,n,r){async function i(i,s,o){try{"event"===i?await Me(e,t,n,s,o):"config"===i?await Fe(e,t,n,r,s,o):"consent"===i?e("consent","update",o):e("set",s)}catch(a){Ne.error(a)}}return i}function Ue(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(s=window[i]),window[i]=qe(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Ve(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Oe))return t;return null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Be={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},je=new s.LL("analytics","Analytics",Be),$e=30,ze=1e3;class He{constructor(e={},t=ze){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ke=new He;function We(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ge(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:We(r)},s=Re.replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw je.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function Ze(e,t=Ke,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw je.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw je.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Je;return setTimeout((async()=>{a.abort()}),void 0!==n?n:Ae),Xe({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Xe(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Ke){var o,a;const{appId:l,measurementId:c}=e;try{await Qe(r,t)}catch(u){if(c)return Ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===(o=u)||void 0===o?void 0:o.message}]`),{appId:l,measurementId:c};throw u}try{const t=await Ge(e);return i.deleteThrottleMetadata(l),t}catch(u){const t=u;if(!Ye(t)){if(i.deleteThrottleMetadata(l),c)return Ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${c} provided in the "measurementId" field in the local Firebase config. [${null===t||void 0===t?void 0:t.message}]`),{appId:l,measurementId:c};throw u}const o=503===Number(null===(a=null===t||void 0===t?void 0:t.customData)||void 0===a?void 0:a.httpStatus)?(0,s.$s)(n,i.intervalMillis,$e):(0,s.$s)(n,i.intervalMillis),h={throttleEndTimeMillis:Date.now()+o,backoffCount:n+1};return i.setThrottleMetadata(l,h),Ne.debug(`Calling attemptFetch again in ${o} millis`),Xe(e,h,r,i)}}function Qe(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(je.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Ye(e){if(!(e instanceof s.ZR)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class Je{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */let et,tt;async function nt(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t,s=Object.assign(Object.assign({},r),{send_to:i});e("event",n,s)}}function rt(e){tt=e}function it(e){et=e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(){var e;if(!(0,s.hl)())return Ne.warn(je.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,s.eu)()}catch(t){return Ne.warn(je.create("indexeddb-unavailable",{errorInfo:null===(e=t)||void 0===e?void 0:e.toString()}).message),!1}return!0}async function ot(e,t,n,r,i,s,o){var a;const l=Ze(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Ne.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Ne.error(e))),t.push(l);const c=st().then((e=>e?r.getId():void 0)),[u,h]=await Promise.all([l,c]);Ve()||Pe(s,u.measurementId),tt&&(i("consent","default",tt),rt(void 0)),i("js",new Date);const d=null!==(a=null===o||void 0===o?void 0:o.config)&&void 0!==a?a:{};return d[xe]="firebase",d.update=!0,null!=h&&(d[Ce]=h),i("config",u.measurementId,d),et&&(i("set",et),it(void 0)),u.measurementId}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class at{constructor(e){this.app=e}_delete(){return delete lt[this.app.options.appId],Promise.resolve()}}let lt={},ct=[];const ut={};let ht,dt,ft="dataLayer",pt="gtag",gt=!1;function mt(){const e=[];if((0,s.ru)()&&e.push("This is a browser extension environment."),(0,s.zI)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=je.create("invalid-analytics-context",{errorInfo:t});Ne.warn(n.message)}}function vt(e,t,n){mt();const r=e.options.appId;if(!r)throw je.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw je.create("no-api-key");Ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=lt[r])throw je.create("already-exists",{id:r});if(!gt){De(ft);const{wrappedGtag:e,gtagCore:t}=Ue(lt,ct,ut,ft,pt);dt=e,ht=t,gt=!0}lt[r]=ot(e,ct,ut,t,ht,ft,n);const i=new at(e);return i}function yt(e=(0,r.Mq)()){e=(0,s.m9)(e);const t=(0,r.qX)(e,Ie);return t.isInitialized()?t.getImmediate():wt(e)}function wt(e,t={}){const n=(0,r.qX)(e,Ie);if(n.isInitialized()){const e=n.getImmediate();if((0,s.vZ)(t,n.getOptions()))return e;throw je.create("already-initialized")}const i=n.initialize({options:t});return i}function bt(e,t,n,r){e=(0,s.m9)(e),nt(dt,lt[e.app.options.appId],t,n,r).catch((e=>Ne.error(e)))}const _t="@firebase/analytics",Et="0.8.0";function St(){function e(e){try{const t=e.getProvider(Ie).getImmediate();return{logEvent:(e,n,r)=>bt(t,e,n,r)}}catch(t){throw je.create("interop-component-reg-failed",{reason:t})}}(0,r.Xd)(new o.wA(Ie,((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return vt(n,r,t)}),"PUBLIC")),(0,r.Xd)(new o.wA("analytics-internal",e,"PRIVATE")),(0,r.KN)(_t,Et),(0,r.KN)(_t,Et,"esm2017")}St()},5720:(e,t,n)=>{"use strict";n.d(t,{ZF:()=>r.ZF});var r=n(9036),i="firebase",s="9.9.0";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
(0,r.KN)(i,s,"app")},8424:(e,t,n)=>{"use strict";n.d(t,{v0:()=>or,e5:()=>at});var r=n(5479),i=n(9036);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n(1492),a=n(4676);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new r.LL("auth","Firebase",l()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function f(e,...t){throw m(e,...t)}function p(e,...t){return m(e,...t)}function g(e,t,n){const i=Object.assign(Object.assign({},c()),{[t]:n}),s=new r.LL("auth","Firebase",i);return s.create(t,{appName:e.name})}function m(e,...t){if("string"!==typeof e){const n=t[0],r=[...t.slice(1)];return r[0]&&(r[0].appName=e.name),e._errorFactory.create(n,...r)}return u.create(e,...t)}function v(e,t,...n){if(!e)throw m(t,...n)}function y(e){const t="INTERNAL ASSERTION FAILED: "+e;throw d(t),new Error(t)}function w(e,t){e||y(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const b=new Map;function _(e){w(e instanceof Function,"Expected a class definition");let t=b.get(e);return t?(w(t instanceof e,"Instance stored in cache mismatched with class"),t):(t=new e,b.set(e,t),t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function E(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function S(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function T(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function k(){return"http:"===I()||"https:"===I()}function I(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(k()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function x(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class A{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function R(e,t){w(e.emulator,"Emulator should always be set here");const{url:n}=e.emulator;return t?`${n}${t.startsWith("/")?t.slice(1):t}`:n}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class O{static initialize(e,t,n){this.fetchImpl=e,t&&(this.headersImpl=t),n&&(this.responseImpl=n)}static fetch(){return this.fetchImpl?this.fetchImpl:"undefined"!==typeof self&&"fetch"in self?self.fetch:void y("Could not find fetch implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static headers(){return this.headersImpl?this.headersImpl:"undefined"!==typeof self&&"Headers"in self?self.Headers:void y("Could not find Headers implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}static response(){return this.responseImpl?this.responseImpl:"undefined"!==typeof self&&"Response"in self?self.Response:void y("Could not find Response implementation, make sure you call FetchProvider.initialize() with an appropriate polyfill")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},L=new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function P(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,i,s={}){return F(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),O.fetch()(q(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function F(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),t);try{const t=new U(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw V(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw V(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw V(e,"email-already-in-use",s);if("USER_DISABLED"===n)throw V(e,"user-disabled",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);f(e,a)}}catch(s){if(s instanceof r.ZR)throw s;f(e,"network-request-failed")}}async function M(e,t,n,r,i={}){const s=await D(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function q(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R(e.config,i):`${e.config.apiScheme}://${i}`}class U{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"network-request-failed"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function V(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function B(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function j(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $(e){if(e)try{const t=new Date(Number(e));if(!isNaN(t.getTime()))return t.toUTCString()}catch(t){}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function z(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=K(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:$(H(s.auth_time)),issuedAtTime:$(H(s.iat)),expirationTime:$(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function K(e){var t;const[n,i,s]=e.split(".");if(void 0===n||void 0===i||void 0===s)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(i);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(o){return d("Caught error parsing JWT payload as JSON",null===(t=o)||void 0===t?void 0:t.toString()),null}}function W(e){const t=K(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&Z(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function Z({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class X{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){var e;try{await this.user.getIdToken(!0)}catch(t){return void("auth/network-request-failed"===(null===(e=t)||void 0===e?void 0:e.code)&&this.schedule(!0))}this.schedule()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Q{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Y(e){var t;const n=e.auth,r=await e.getIdToken(),i=await G(e,j(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new Q(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function J(e){const t=(0,r.m9)(e);await Y(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ne(e,t){const n=await F(e,{},(async()=>{const n=(0,r.xO)({grant_type:"refresh_token",refresh_token:t}).slice(1),{tokenApiHost:i,apiKey:s}=e.config,o=q(e,i,"/v1/token",`key=${s}`),a=await e._getAdditionalHeaders();return a["Content-Type"]="application/x-www-form-urlencoded",O.fetch()(o,{method:"POST",headers:a,body:n})}));return{accessToken:n.access_token,expiresIn:n.expires_in,refreshToken:n.refresh_token}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class re{constructor(){this.refreshToken=null,this.accessToken=null,this.expirationTime=null}get isExpired(){return!this.expirationTime||Date.now()>this.expirationTime-3e4}updateFromServerResponse(e){v(e.idToken,"internal-error"),v("undefined"!==typeof e.idToken,"internal-error"),v("undefined"!==typeof e.refreshToken,"internal-error");const t="expiresIn"in e&&"undefined"!==typeof e.expiresIn?Number(e.expiresIn):W(e.idToken);this.updateTokensAndExpiration(e.idToken,e.refreshToken,t)}async getToken(e,t=!1){return v(!this.accessToken||this.refreshToken,e,"user-token-expired"),t||!this.accessToken||this.isExpired?this.refreshToken?(await this.refresh(e,this.refreshToken),this.accessToken):null:this.accessToken}clearRefreshToken(){this.refreshToken=null}async refresh(e,t){const{accessToken:n,refreshToken:r,expiresIn:i}=await ne(e,t);this.updateTokensAndExpiration(n,r,Number(i))}updateTokensAndExpiration(e,t,n){this.refreshToken=t||null,this.accessToken=e||null,this.expirationTime=Date.now()+1e3*n}static fromJSON(e,t){const{refreshToken:n,accessToken:r,expirationTime:i}=t,s=new re;return n&&(v("string"===typeof n,"internal-error",{appName:e}),s.refreshToken=n),r&&(v("string"===typeof r,"internal-error",{appName:e}),s.accessToken=r),i&&(v("number"===typeof i,"internal-error",{appName:e}),s.expirationTime=i),s}toJSON(){return{refreshToken:this.refreshToken,accessToken:this.accessToken,expirationTime:this.expirationTime}}_assign(e){this.accessToken=e.accessToken,this.refreshToken=e.refreshToken,this.expirationTime=e.expirationTime}_clone(){return Object.assign(new re,this.toJSON())}_performRefresh(){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.proactiveRefresh=new X(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.providerData=i.providerData?[...i.providerData]:[],this.metadata=new Q(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return J(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Y(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,B(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:E,stsTokenManager:S}=t;v(w&&S,e,"internal-error");const T=re.fromJSON(this.name,S);v("string"===typeof w,e,"internal-error"),ie(u,e.name),ie(h,e.name),v("boolean"===typeof b,e,"internal-error"),v("boolean"===typeof _,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(g,e.name),ie(m,e.name),ie(y,e.name);const k=new se({uid:w,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:T,createdAt:m,lastLoginAt:y});return E&&Array.isArray(E)&&(k.providerData=E.map((e=>Object.assign({},e)))),g&&(k._redirectEventId=g),k}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Y(i),i}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class oe{constructor(){this.type="NONE",this.storage={}}async _isAvailable(){return!0}async _set(e,t){this.storage[e]=t}async _get(e){const t=this.storage[e];return void 0===t?null:t}async _remove(e){delete this.storage[e]}_addListener(e,t){}_removeListener(e,t){}}oe.type="NONE";const ae=oe;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function le(e,t,n){return`firebase:${e}:${t}:${n}`}class ce{constructor(e,t,n){this.persistence=e,this.auth=t,this.userKey=n;const{config:r,name:i}=this.auth;this.fullUserKey=le(this.userKey,r.apiKey,i),this.fullPersistenceKey=le("persistence",r.apiKey,i),this.boundEventHandler=t._onStorageEvent.bind(t),this.persistence._addListener(this.fullUserKey,this.boundEventHandler)}setCurrentUser(e){return this.persistence._set(this.fullUserKey,e.toJSON())}async getCurrentUser(){const e=await this.persistence._get(this.fullUserKey);return e?se._fromJSON(this.auth,e):null}removeCurrentUser(){return this.persistence._remove(this.fullUserKey)}savePersistenceForRedirect(){return this.persistence._set(this.fullPersistenceKey,this.persistence.type)}async setPersistence(e){if(this.persistence===e)return;const t=await this.getCurrentUser();return await this.removeCurrentUser(),this.persistence=e,t?this.setCurrentUser(t):void 0}delete(){this.persistence._removeListener(this.fullUserKey,this.boundEventHandler)}static async create(e,t,n="authUser"){if(!t.length)return new ce(_(ae),e,n);const r=(await Promise.all(t.map((async e=>{if(await e._isAvailable())return e})))).filter((e=>e));let i=r[0]||_(ae);const s=le(n,e.config.apiKey,e.name);let o=null;for(const c of t)try{const t=await c._get(s);if(t){const n=se._fromJSON(e,t);c!==i&&(o=n),i=c;break}}catch(l){}const a=r.filter((e=>e._shouldAllowMigration));return i._shouldAllowMigration&&a.length?(i=a[0],o&&await i._set(s,o.toJSON()),await Promise.all(t.map((async e=>{if(e!==i)try{await e._remove(s)}catch(l){}}))),new ce(i,e,n)):new ce(i,e,n)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ve(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function ge(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ve(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)||/macintosh/i.test(e)&&/mobile/i.test(e)}function we(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.w1)()&&10===document.documentMode}function _e(e=(0,r.z$)()){return ye(e)||ge(e)||ve(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Ee(){try{return!(!window||window===window.top)}catch(e){return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Se(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.z$)());break;case"Worker":n=`${ue((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Te{constructor(e){this.auth=e,this.queue=[]}pushCallback(e,t){const n=t=>new Promise(((n,r)=>{try{const r=e(t);n(r)}catch(i){r(i)}}));n.onAbort=t,this.queue.push(n);const r=this.queue.length-1;return()=>{this.queue[r]=()=>Promise.resolve()}}async runMiddleware(e){var t;if(this.auth.currentUser===e)return;const n=[];try{for(const t of this.queue)await t(e),t.onAbort&&n.push(t.onAbort)}catch(r){n.reverse();for(const e of n)try{e()}catch(i){}throw this.auth._errorFactory.create("login-blocked",{originalMessage:null===(t=r)||void 0===t?void 0:t.message})}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ke{constructor(e,t,n){this.app=e,this.heartbeatServiceProvider=t,this.config=n,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Ce(this),this.idTokenSubscription=new Ce(this),this.beforeStateQueue=new Te(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=n.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e,!0):void 0}async initializeCurrentUser(e){var t;const n=await this.assertedPersistence.getCurrentUser();let r=n,i=!1;if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const n=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,s=null===r||void 0===r?void 0:r._redirectEventId,o=await this.tryRedirectSignIn(e);n&&n!==s||!(null===o||void 0===o?void 0:o.user)||(r=o.user,i=!0)}if(!r)return this.directlySetCurrentUser(null);if(!r._redirectEventId){if(i)try{await this.beforeStateQueue.runMiddleware(r)}catch(s){r=n,this._popupRedirectResolver._overrideRedirectResult(this,(()=>Promise.reject(s)))}return r?this.reloadAndSetCurrentUserOrClear(r):this.directlySetCurrentUser(null)}return v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===r._redirectEventId?this.directlySetCurrentUser(r):this.reloadAndSetCurrentUserOrClear(r)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){var t;try{await Y(e)}catch(n){if("auth/network-request-failed"!==(null===(t=n)||void 0===t?void 0:t.code))return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=x()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e,t=!1){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),t||await this.beforeStateQueue.runMiddleware(e),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return await this.beforeStateQueue.runMiddleware(null),(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null,!0)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}beforeAuthStateChanged(e,t){return this.beforeStateQueue.pushCallback(e,t)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Se(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){var e;const t={["X-Client-Version"]:this.clientVersion};this.app.options.appId&&(t["X-Firebase-gmpid"]=this.app.options.appId);const n=await(null===(e=this.heartbeatServiceProvider.getImmediate({optional:!0}))||void 0===e?void 0:e.getHeartbeatsHeader());return n&&(t["X-Firebase-Client"]=n),t}}function Ie(e){return(0,r.m9)(e)}class Ce{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xe{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Ae(e,t){return D(e,"POST","/v1/accounts:update",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Re(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function Oe(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}async function Ne(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Le extends xe{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Le(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Le(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return Re(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Oe(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ae(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Ne(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Pe(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const De="http://localhost";class Fe extends xe{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new Fe(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new Fe(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Pe(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Pe(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Pe(e,t)}buildRequest(){const e={requestUri:De,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function Me(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",P(e,t))}async function qe(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t))}async function Ue(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t));if(n.temporaryProof)throw V(e,"account-exists-with-different-credential",n);return n}const Ve={["USER_NOT_FOUND"]:"user-not-found"};async function Be(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,n),Ve)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class je extends xe{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new je({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new je({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return qe(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return Ue(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Be(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new je({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $e(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function ze(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class He{constructor(e){var t,n,i,s,o,a;const l=(0,r.zd)((0,r.pd)(e)),c=null!==(t=l["apiKey"])&&void 0!==t?t:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=$e(null!==(i=l["mode"])&&void 0!==i?i:null);v(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=ze(e);try{return new He(t)}catch(n){return null}}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ke{constructor(){this.providerId=Ke.PROVIDER_ID}static credential(e,t){return Le._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=He.parseLink(t);return v(n,"argument-error"),Le._fromEmailAndCode(e,n.code,n.tenantId)}}Ke.PROVIDER_ID="password",Ke.EMAIL_PASSWORD_SIGN_IN_METHOD="password",Ke.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class We{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ge extends We{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ze extends Ge{constructor(){super("facebook.com")}static credential(e){return Fe._fromParams({providerId:Ze.PROVIDER_ID,signInMethod:Ze.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ze.credentialFromTaggedObject(e)}static credentialFromError(e){return Ze.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ze.credential(e.oauthAccessToken)}catch(t){return null}}}Ze.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ze.PROVIDER_ID="facebook.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xe extends Ge{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return Fe._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Xe.credential(t,n)}catch(r){return null}}}Xe.GOOGLE_SIGN_IN_METHOD="google.com",Xe.PROVIDER_ID="google.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qe extends Ge{constructor(){super("github.com")}static credential(e){return Fe._fromParams({providerId:Qe.PROVIDER_ID,signInMethod:Qe.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Qe.credentialFromTaggedObject(e)}static credentialFromError(e){return Qe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Qe.credential(e.oauthAccessToken)}catch(t){return null}}}Qe.GITHUB_SIGN_IN_METHOD="github.com",Qe.PROVIDER_ID="github.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ye extends Ge{constructor(){super("twitter.com")}static credential(e,t){return Fe._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Ye.credential(t,n)}catch(r){return null}}}Ye.TWITTER_SIGN_IN_METHOD="twitter.com",Ye.PROVIDER_ID="twitter.com";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Je{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),s=et(n),o=new Je({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=et(n);return new Je({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function et(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class tt extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,tt.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new tt(e,t,n,r)}}function nt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw tt._fromErrorAndOperation(e,n,t,r);throw n}))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function rt(e,t,n=!1){const r=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Je._forOperation(e,"link",r)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
async function it(e,t,n=!1){var r;const{auth:i}=e,s="reauthenticate";try{const r=await G(e,nt(i,s,t,e),n);v(r.idToken,i,"internal-error");const o=K(r.idToken);v(o,i,"internal-error");const{sub:a}=o;return v(e.uid===a,i,"user-mismatch"),Je._forOperation(e,s,r)}catch(o){throw"auth/user-not-found"===(null===(r=o)||void 0===r?void 0:r.code)&&f(i,"user-mismatch"),o}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function st(e,t,n=!1){const r="signIn",i=await nt(e,r,t),s=await Je._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function ot(e,t){return st(Ie(e),t)}function at(e,t,n){return ot((0,r.m9)(e),Ke.credential(t,n))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function lt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}function ct(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}new WeakMap;const ut="__sak";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ht{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ut,"1"),this.storage.removeItem(ut),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function dt(){const e=(0,r.z$)();return de(e)||ye(e)}const ft=1e3,pt=10;class gt extends ht{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=dt()&&Ee(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);be()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,pt):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),ft)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}gt.type="LOCAL";const mt=gt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vt extends ht{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}vt.type="SESSION";const yt=vt;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function wt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new bt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await wt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function _t(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */bt.receivers=[];class Et{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=_t("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function St(){return window}function Tt(e){St().location.href=e}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function kt(){return"undefined"!==typeof St()["WorkerGlobalScope"]&&"function"===typeof St()["importScripts"]}async function It(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function Ct(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function xt(){return kt()?self:null}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const At="firebaseLocalStorageDb",Rt=1,Ot="firebaseLocalStorage",Nt="fbase_key";class Lt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Pt(e,t){return e.transaction([Ot],t?"readwrite":"readonly").objectStore(Ot)}function Dt(){const e=indexedDB.deleteDatabase(At);return new Lt(e).toPromise()}function Ft(){const e=indexedDB.open(At,Rt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Ot,{keyPath:Nt})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Ot)?t(n):(n.close(),await Dt(),t(await Ft()))}))}))}async function Mt(e,t,n){const r=Pt(e,!0).put({[Nt]:t,value:n});return new Lt(r).toPromise()}async function qt(e,t){const n=Pt(e,!1).get(t),r=await new Lt(n).toPromise();return void 0===r?null:r.value}function Ut(e,t){const n=Pt(e,!0).delete(t);return new Lt(n).toPromise()}const Vt=800,Bt=3;class jt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Ft()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Bt)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=bt._getInstance(xt()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await It(),!this.activeServiceWorker)return;this.sender=new Et(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&Ct()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Ft();return await Mt(e,ut,"1"),await Ut(e,ut),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Mt(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>qt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>Ut(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Pt(e,!1).getAll();return new Lt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Vt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}jt.type="LOCAL";const $t=jt;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function zt(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",P(e,t))}function Ht(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Kt(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Wt(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Kt().appendChild(r)}))}function Gt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
Gt("rcb"),new A(3e4,6e4);
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Zt="recaptcha";async function Xt(e,t,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,e,"argument-error"),v(n.type===Zt,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await lt(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await zt(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Me(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qt{constructor(e){this.providerId=Qt.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,t){return Xt(this.auth,e,(0,r.m9)(t))}static credential(e,t){return je._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Qt.credentialFromTaggedObject(t)}static credentialFromError(e){return Qt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?je._fromTokenResponse(t,n):null}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function Yt(e,t){return t?_(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Qt.PROVIDER_ID="phone",Qt.PHONE_SIGN_IN_METHOD="phone";class Jt extends xe{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Pe(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Pe(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Pe(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function en(e){return st(e.auth,new Jt(e),e.bypassAuthState)}function tn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),it(n,new Jt(e),e.bypassAuthState)}async function nn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),rt(n,new Jt(e),e.bypassAuthState)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class rn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return en;case"linkViaPopup":case"linkViaRedirect":return nn;case"reauthViaPopup":case"reauthViaRedirect":return tn;default:f(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sn=new A(2e3,1e4);class on extends rn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,on.currentPopupAction&&on.currentPopupAction.cancel(),on.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=_t();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,on.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,sn.get())};e()}}on.currentPopupAction=null;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const an="pendingRedirect",ln=new Map;class cn extends rn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=ln.get(this.auth._key());if(!e){try{const t=await un(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}ln.set(this.auth._key(),e)}return this.bypassAuthState||ln.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function un(e,t){const n=fn(t),r=dn(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function hn(e,t){ln.set(e._key(),t)}function dn(e){return _(e._redirectPersistence)}function fn(e){return le(an,e.config.apiKey,e.name)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function pn(e,t,n=!1){const r=Ie(e),i=Yt(r,t),s=new cn(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const gn=6e5;class mn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!wn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!yn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=gn&&this.cachedEventUids.clear(),this.cachedEventUids.has(vn(e))}saveEventToCache(e){this.cachedEventUids.add(vn(e)),this.lastProcessedEventTime=Date.now()}}function vn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function yn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function wn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return yn(e);default:return!1}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function bn(e,t={}){return D(e,"GET","/v1/projects",t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const _n=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,En=/^https?/;async function Sn(e){if(e.config.emulator)return;const{authorizedDomains:t}=await bn(e);for(const r of t)try{if(Tn(r))return}catch(n){}f(e,"unauthorized-domain")}function Tn(e){const t=T(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!En.test(n))return!1;if(_n.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const kn=new A(3e4,6e4);function In(){const e=St().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function Cn(e){return new Promise(((t,n)=>{var r,i,s;function o(){In(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{In(),n(p(e,"network-request-failed"))},timeout:kn.get()})}if(null===(i=null===(r=St().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=St().gapi)||void 0===s?void 0:s.load)){const t=Gt("iframefcb");return St()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},Wt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw xn=null,e}))}let xn=null;function An(e){return xn=xn||Cn(e),xn}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Rn=new A(5e3,15e3),On="__/auth/iframe",Nn="emulator/auth/iframe",Ln={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Pn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Dn(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,Nn):`https://${e.config.authDomain}/${On}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=Pn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Fn(e){const t=await An(e),n=St().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Dn(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:Ln,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=St().setTimeout((()=>{r(i)}),Rn.get());function o(){St().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
/**
 * @license
 * Copyright 2020 Google LLC.
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},qn=500,Un=600,Vn="_blank",Bn="http://localhost";class jn{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function $n(e,t,n,i=qn,s=Un){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Mn),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.z$)().toLowerCase();n&&(l=fe(u)?Vn:n),he(u)&&(t=t||Bn,c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(we(u)&&"_self"!==l)return zn(t||"",l),new jn(null);const d=window.open(t||"",l,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new jn(d)}function zn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Hn="__/auth/handler",Kn="emulator/auth/handler";function Wn(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof We){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof Ge){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];return`${Gn(e)}?${(0,r.xO)(c).slice(1)}`}function Gn({config:e}){return e.emulator?R(e,Kn):`https://${e.authDomain}/${Hn}`}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Zn="webStorageSupport";class Xn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=yt,this._completeRedirectFn=pn,this._overrideRedirectResult=hn}async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Wn(e,t,n,T(),r);return $n(e,s,_t())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Tt(Wn(e,t,n,T(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Fn(e),n=new mn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Zn,{type:Zn},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Zn];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=Sn(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||de()||ye()}}const Qn=Xn;class Yn{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class Jn extends Yn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Jn(e)}_finalizeEnroll(e,t,n){return ct(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return Ht(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class er{constructor(){}static assertion(e){return Jn._fromCredential(e)}}er.FACTOR_ID="phone";var tr="@firebase/auth",nr="0.20.5";
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class rr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function ir(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function sr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),i=t.getProvider("heartbeat"),{apiKey:s,authDomain:o}=r.options;return((t,r)=>{v(s&&!s.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===o||void 0===o?void 0:o.includes(":")),"argument-error",{appName:t.name});const i={apiKey:s,authDomain:o,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Se(e)},a=new ke(t,r,i);return S(a,n),a})(r,i)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Ie(e.getProvider("auth").getImmediate());return(e=>new rr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(tr,nr,ir(e)),(0,i.KN)(tr,nr,"esm2017")}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function or(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");return t.isInitialized()?t.getImmediate():E(e,{popupRedirectResolver:Qn,persistence:[$t,mt,yt]})}sr("Browser")},8127:(e,t,n)=>{"use strict";n.d(t,{hJ:()=>ku,oe:()=>fh,JU:()=>Iu,QT:()=>ch,PL:()=>hh,ad:()=>Au,pl:()=>dh});var r,i=n(9036),s=n(4676),o=n(1492),a=n(5479),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},c={},u=u||{},h=l||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++v)}var m="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,b.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function E(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function S(){this.s=this.s,this.o=this.o}var T=0,k={};S.prototype.s=!1,S.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=T)){var e=g(this);delete k[e]}},S.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const I=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},C=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function x(e){e:{var t=Kn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function A(e){return Array.prototype.concat.apply([],arguments)}function R(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e){return/^[\s\xa0]*$/.test(e)}var N,L=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function P(e,t){return-1!=e.indexOf(t)}function D(e,t){return e<t?-1:e>t?1:0}e:{var F=h.navigator;if(F){var M=F.userAgent;if(M){N=M;break e}}N=""}function q(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function U(e){const t={};for(const n in e)t[n]=e[n];return t}var V="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function B(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<V.length;t++)n=V[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function j(e){return j[" "](e),e}function $(e){var t=ne;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}j[" "]=d;var z,H=P(N,"Opera"),K=P(N,"Trident")||P(N,"MSIE"),W=P(N,"Edge"),G=W||K,Z=P(N,"Gecko")&&!(P(N.toLowerCase(),"webkit")&&!P(N,"Edge"))&&!(P(N,"Trident")||P(N,"MSIE"))&&!P(N,"Edge"),X=P(N.toLowerCase(),"webkit")&&!P(N,"Edge");function Q(){var e=h.document;return e?e.documentMode:void 0}e:{var Y="",J=function(){var e=N;return Z?/rv:([^\);]+)(\)|;)/.exec(e):W?/Edge\/([\d\.]+)/.exec(e):K?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):X?/WebKit\/(\S+)/.exec(e):H?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(J&&(Y=J?J[1]:""),K){var ee=Q();if(null!=ee&&ee>parseFloat(Y)){z=String(ee);break e}}z=Y}var te,ne={};function re(){return $((function(){let e=0;const t=L(String(z)).split("."),n=L("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=D(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==i[2].length,0==s[2].length)||D(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&K){var ie=Q();te=ie||(parseInt(z,10)||void 0)}else te=void 0;var se=te,oe=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function ae(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function le(e,t){if(ae.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(Z){e:{try{j(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ce[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&le.Z.h.call(this)}}ae.prototype.h=function(){this.defaultPrevented=!0},E(le,ae);var ce={2:"touch",3:"pen",4:"mouse"};le.prototype.h=function(){le.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ue="closure_listenable_"+(1e6*Math.random()|0),he=0;function de(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++he,this.ca=this.fa=!1}function fe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function pe(e){this.src=e,this.g={},this.h=0}function ge(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=I(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(fe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function me(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}pe.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=me(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new de(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ve="closure_lm_"+(1e6*Math.random()|0),ye={};function we(e,t,n,r,i){if(r&&r.once)return Ee(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)we(e,t[s],n,r,i);return null}return n=Ae(n),e&&e[ue]?e.N(t,n,p(r)?!!r.capture:!!r,i):be(e,t,n,!1,r,i)}function be(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ce(e);if(a||(e[ve]=a=new pe(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=_e(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)oe||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(ke(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function _e(){function e(n){return t.call(e.src,e.listener,n)}var t=Ie;return e}function Ee(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Ee(e,t[s],n,r,i);return null}return n=Ae(n),e&&e[ue]?e.O(t,n,p(r)?!!r.capture:!!r,i):be(e,t,n,!0,r,i)}function Se(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Se(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=Ae(n),e&&e[ue]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=me(s,n,r,i),-1<n&&(fe(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ce(e))&&(t=e.g[t.toString()],e=-1,t&&(e=me(t,n,r,i)),(n=-1<e?t[e]:null)&&Te(n))}function Te(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[ue])ge(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(ke(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ce(t))?(ge(n,e),0==n.h&&(n.src=null,t[ve]=null)):fe(e)}}}function ke(e){return e in ye?ye[e]:ye[e]="on"+e}function Ie(e,t){if(e.ca)e=!0;else{t=new le(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&Te(e),e=n.call(r,t)}return e}function Ce(e){return e=e[ve],e instanceof pe?e:null}var xe="__closure_events_fn_"+(1e9*Math.random()>>>0);function Ae(e){return"function"===typeof e?e:(e[xe]||(e[xe]=function(t){return e.handleEvent(t)}),e[xe])}function Re(){S.call(this),this.i=new pe(this),this.P=this,this.I=null}function Oe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new ae(t,e);else if(t instanceof ae)t.target=t.target||e;else{var i=t;t=new ae(r,e),B(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ne(o,r,!0,t)&&i}if(o=t.g=e,i=Ne(o,r,!0,t)&&i,i=Ne(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ne(o,r,!1,t)&&i}function Ne(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&ge(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}E(Re,S),Re.prototype[ue]=!0,Re.prototype.removeEventListener=function(e,t,n,r){Se(this,e,t,n,r)},Re.prototype.M=function(){if(Re.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fe(n[r]);delete t.g[e],t.h--}}this.I=null},Re.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Re.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Le=h.JSON.stringify;function Pe(){var e=$e;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class De{constructor(){this.h=this.g=null}add(e,t){const n=Me.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Fe,Me=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new qe),(e=>e.reset()));class qe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ue(e){h.setTimeout((()=>{throw e}),0)}function Ve(e,t){Fe||Be(),je||(Fe(),je=!0),$e.add(e,t)}function Be(){var e=h.Promise.resolve(void 0);Fe=function(){e.then(ze)}}var je=!1,$e=new De;function ze(){for(var e;e=Pe();){try{e.h.call(e.g)}catch(n){Ue(n)}var t=Me;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}je=!1}function He(e,t){Re.call(this),this.h=e||1,this.g=t||h,this.j=b(this.kb,this),this.l=Date.now()}function Ke(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function We(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function Ge(e){e.g=We((()=>{e.g=null,e.i&&(e.i=!1,Ge(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}E(He,Re),r=He.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(Ke(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){He.Z.M.call(this),Ke(this),delete this.g};class Ze extends S{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ge(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Xe(e){S.call(this),this.h=e,this.g={}}E(Xe,S);var Qe=[];function Ye(e,t,n,r){Array.isArray(n)||(n&&(Qe[0]=n.toString()),n=Qe);for(var i=0;i<n.length;i++){var s=we(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Je(e){q(e.g,(function(e,t){this.g.hasOwnProperty(t)&&Te(e)}),e),e.g={}}function et(){this.g=!0}function tt(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function nt(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function rt(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+st(e,n)+(r?" "+r:"")}))}function it(e,t){e.info((function(){return"TIMEOUT: "+t}))}function st(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Le(n)}catch(a){return t}}Xe.prototype.M=function(){Xe.Z.M.call(this),Je(this)},Xe.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},et.prototype.Aa=function(){this.g=!1},et.prototype.info=function(){};var ot={},at=null;function lt(){return at=at||new Re}function ct(e){ae.call(this,ot.Ma,e)}function ut(e){const t=lt();Oe(t,new ct(t,e))}function ht(e,t){ae.call(this,ot.STAT_EVENT,e),this.stat=t}function dt(e){const t=lt();Oe(t,new ht(t,e))}function ft(e,t){ae.call(this,ot.Na,e),this.size=t}function pt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}ot.Ma="serverreachability",E(ct,ae),ot.STAT_EVENT="statevent",E(ht,ae),ot.Na="timingevent",E(ft,ae);var gt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},mt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vt(){}function yt(e){return e.h||(e.h=e.i())}function wt(){}vt.prototype.h=null;var bt,_t={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Et(){ae.call(this,"d")}function St(){ae.call(this,"c")}function Tt(){}function kt(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Xe(this),this.P=Ct,e=G?125:void 0,this.W=new He(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new It}function It(){this.i=null,this.g="",this.h=!1}E(Et,ae),E(St,ae),E(Tt,vt),Tt.prototype.g=function(){return new XMLHttpRequest},Tt.prototype.i=function(){return{}},bt=new Tt;var Ct=45e3,xt={},At={};function Rt(e,t,n){e.K=1,e.v=tn(Zt(t)),e.s=n,e.U=!0,Ot(e,null)}function Ot(e,t){e.F=Date.now(),Dt(e),e.A=Zt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new It,e.g=Sr(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Ze(b(e.Ia,e,e.g),e.O)),Ye(e.V,e.g,"readystatechange",e.gb),t=e.H?U(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ut(1),tt(e.j,e.u,e.A,e.m,e.X,e.s)}function Nt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Lt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Pt(e,n),r==At){4==t&&(e.o=4,dt(14),i=!1),rt(e.j,e.m,null,"[Incomplete Response]");break}if(r==xt){e.o=4,dt(15),rt(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}rt(e.j,e.m,r,null),Vt(e,r)}Nt(e)&&r!=At&&r!=xt&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,dt(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(t),t.L=!0,dt(11))):(rt(e.j,e.m,n,"[Invalid Chunked Response]"),Ut(e),qt(e))}function Pt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?At:(n=Number(t.substring(n,r)),isNaN(n)?xt:(r+=1,r+n>t.length?At:(t=t.substr(r,n),e.C=r+n,t)))}function Dt(e){e.Y=Date.now()+e.P,Ft(e,e.P)}function Ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=pt(b(e.eb,e),t)}function Mt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function qt(e){0==e.l.G||e.I||yr(e.l,e)}function Ut(e){Mt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ke(e.W),Je(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Vt(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||kn(n.i,e)))if(n.I=e.N,!e.J&&kn(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;vr(n),sr(n)}pr(n),dt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pt(b(n.ab,n),6e3));if(1>=Tn(n.i)&&n.ka){try{n.ka()}catch(c){}n.ka=void 0}}else br(n,11)}else if((e.J||n.g==e)&&vr(n),!O(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const t=c[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=c[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(P(e,"spdy")||P(e,"quic")||P(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(In(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,en(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Er(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Mt(a),Dt(a)),r.g=o}else fr(r);0<n.l.length&&lr(n)}else"stop"!=c[0]&&"close"!=c[0]||br(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?br(n,7):ir(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}ut(4)}catch(c){}}function Bt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function jt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)C(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(f(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=Bt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function $t(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof $t)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function zt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Ht(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Ht(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Ht(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=kt.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Yn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const u=Yn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||G||this.g&&(this.h.h||this.g.ga()||Jn(this.g)))){this.I||4!=u||7==t||ut(8==t||0>=d?3:2),Mt(this);var n=this.g.ba();this.N=n;t:if(Nt(this)){var r=Jn(this.g);e="";var i=r.length,s=4==Yn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Ut(this),qt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,nt(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,dt(12),Ut(this),qt(this);break e}rt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Vt(this,n)}this.U?(Lt(this,u,o),G&&this.i&&3==u&&(Ye(this.V,this.W,"tick",this.fb),this.W.start())):(rt(this.j,this.m,o,null),Vt(this,o)),4==u&&Ut(this),this.i&&!this.I&&(4==u?yr(this.l,this):(this.i=!1,Dt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),Ut(this),qt(this)}}}catch(u){}},r.fb=function(){if(this.g){var e=Yn(this.g),t=this.g.ga();this.C<t.length&&(Mt(this),Lt(this,e,t),this.i&&4!=e&&Dt(this))}},r.cancel=function(){this.I=!0,Ut(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(it(this.j,this.A),2!=this.K&&(ut(3),dt(17)),Ut(this),this.o=2,qt(this)):Ft(this,this.Y-e)},r=$t.prototype,r.R=function(){zt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return zt(this),this.g.concat()},r.get=function(e,t){return Ht(this.h,e)?this.h[e]:t},r.set=function(e,t){Ht(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Kt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Gt){this.g=void 0!==t?t:e.g,Xt(this,e.j),this.s=e.s,Qt(this,e.i),Yt(this,e.m),this.l=e.l,t=e.h;var n=new fn;n.i=t.i,t.g&&(n.g=new $t(t.g),n.h=t.h),Jt(this,n),this.o=e.o}else e&&(n=String(e).match(Kt))?(this.g=!!t,Xt(this,n[1]||"",!0),this.s=sn(n[2]||""),Qt(this,n[3]||"",!0),Yt(this,n[4]),this.l=sn(n[5]||"",!0),Jt(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!t,this.h=new fn(null,this.g))}function Zt(e){return new Gt(e)}function Xt(e,t,n){e.j=n?sn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Qt(e,t,n){e.i=n?sn(t,!0):t}function Yt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Jt(e,t,n){t instanceof fn?(e.h=t,wn(e.h,e.g)):(n||(t=on(t,hn)),e.h=new fn(t,e.g))}function en(e,t,n){e.h.set(t,n)}function tn(e){return en(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nn(e){return e instanceof Gt?Zt(e):new Gt(e,void 0)}function rn(e,t,n,r){var i=new Gt(null,void 0);return e&&Xt(i,e),t&&Qt(i,t),n&&Yt(i,n),r&&(i.l=r),i}function sn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function on(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,an),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function an(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Gt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(on(t,ln,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(on(t,ln,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(on(n,"/"==n.charAt(0)?un:cn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",on(n,dn)),e.join("")};var ln=/[#\/\?@]/g,cn=/[#\?:]/g,un=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function fn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function pn(e){e.g||(e.g=new $t,e.h=0,e.i&&Wt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function gn(e,t){pn(e),t=yn(e,t),Ht(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ht(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&zt(e)))}function mn(e,t){return pn(e),t=yn(e,t),Ht(e.g.h,t)}function vn(e,t,n){gn(e,t),0<n.length&&(e.i=null,e.g.set(yn(e,t),R(n)),e.h+=n.length)}function yn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function wn(e,t){t&&!e.j&&(pn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(gn(this,t),vn(this,n,e))}),e)),e.j=t}r=fn.prototype,r.add=function(e,t){pn(this),this.i=null,e=yn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){pn(this),this.g.forEach((function(n,r){C(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){pn(this);var t=[];if("string"===typeof e)mn(this,e)&&(t=A(t,this.g.get(yn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=A(t,e[n])}return t},r.set=function(e,t){return pn(this),this.i=null,e=yn(this,e),mn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var bn=class{constructor(e,t){this.h=e,this.g=t}};function _n(e){this.l=e||En,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var En=10;function Sn(e){return!!e.h||!!e.g&&e.g.size>=e.j}function Tn(e){return e.h?1:e.g?e.g.size:0}function kn(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function In(e,t){e.g?e.g.add(t):e.h=t}function Cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function xn(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return R(e.i)}function An(){}function Rn(){this.g=new An}function On(e,t,n){const r=n||"";try{jt(e,(function(e,n){let i=e;p(e)&&(i=Le(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Nn(e,t){const n=new et;if(h.Image){const r=new Image;r.onload=_(Ln,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(Ln,n,r,"TestLoadImage: error",!1,t),r.onabort=_(Ln,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(Ln,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Ln(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Pn(e){this.l=e.$b||null,this.j=e.ib||!1}function Dn(e,t){Re.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Fn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_n.prototype.cancel=function(){if(this.i=xn(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},An.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},An.prototype.parse=function(e){return h.JSON.parse(e,void 0)},E(Pn,vt),Pn.prototype.g=function(){return new Dn(this.l,this.j)},Pn.prototype.i=function(e){return function(){return e}}({}),E(Dn,Re);var Fn=0;function Mn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function qn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Un(e)}function Un(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Dn.prototype,r.open=function(e,t){if(this.readyState!=Fn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Un(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,qn(this)),this.readyState=Fn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Un(this)),this.g&&(this.readyState=3,Un(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Mn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?qn(this):Un(this),3==this.readyState&&Mn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,qn(this))},r.Ta=function(e){this.g&&(this.response=e,qn(this))},r.ha=function(){this.g&&qn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Dn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Vn=h.JSON.parse;function Bn(e){Re.call(this),this.headers=new $t,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=jn,this.K=this.L=!1}E(Bn,Re);var jn="",$n=/^https?$/i,zn=["POST","PUT"];function Hn(e){return K&&re()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Kn(e){return"content-type"==e.toLowerCase()}function Wn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Gn(e),Xn(e)}function Gn(e){e.D||(e.D=!0,Oe(e,"complete"),Oe(e,"error"))}function Zn(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=Yn(e)||2!=e.ba()))if(e.v&&4==Yn(e))We(e.Fa,0,e);else if(Oe(e,"readystatechange"),4==Yn(e)){e.h=!1;try{const l=e.ba();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===l){var i=String(e.H).match(Kt)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!$n.test(i?i.toLowerCase():"")}n=r}if(n)Oe(e,"complete"),Oe(e,"success");else{e.m=6;try{var o=2<Yn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Gn(e)}}finally{Xn(e)}}}function Xn(e,t){if(e.g){Qn(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||Oe(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Qn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Yn(e){return e.g?e.g.readyState:0}function Jn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case jn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function er(e){let t="";return q(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function tr(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=er(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):en(e,t,n))}function nr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function rr(e){this.za=0,this.l=[],this.h=new et,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,e),this.$a=nr("retryDelaySeedMs",1e4,e),this.Ya=nr("forwardChannelMaxRetries",2,e),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new _n(e&&e.concurrentRequestLimit),this.Ca=new Rn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ir(e){if(or(e),3==e.G){var t=e.V++,n=Zt(e.F);en(n,"SID",e.J),en(n,"RID",t),en(n,"TYPE","terminate"),hr(e,n),t=new kt(e,e.h,t,void 0),t.K=2,t.v=tn(Zt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=Sr(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Dt(t)}_r(e)}function sr(e){e.g&&(gr(e),e.g.cancel(),e.g=null)}function or(e){sr(e),e.u&&(h.clearTimeout(e.u),e.u=null),vr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function ar(e,t){e.l.push(new bn(e.Za++,t)),3==e.G&&lr(e)}function lr(e){Sn(e.i)||e.m||(e.m=!0,Ve(e.Ha,e),e.C=0)}function cr(e,t){return!(Tn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=pt(b(e.Ha,e,t),wr(e,e.C)),e.C++,!0))}function ur(e,t){var n;n=t?t.m:e.V++;const r=Zt(e.F);en(r,"SID",e.J),en(r,"RID",n),en(r,"AID",e.U),hr(e,r),e.o&&e.s&&tr(r,e.o,e.s),n=new kt(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=dr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),In(e.i,n),Rt(n,r,t)}function hr(e,t){e.j&&jt({},(function(e,n){en(t,n,e)}))}function dr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?b(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{On(a,e,"req"+n+"_")}catch(Qr){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function fr(e){e.g||e.u||(e.Y=1,Ve(e.Ga,e),e.A=0)}function pr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=pt(b(e.Ga,e),wr(e,e.A)),e.A++,!0)}function gr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function mr(e){e.g=new kt(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Zt(e.oa);en(t,"RID","rpc"),en(t,"SID",e.J),en(t,"CI",e.N?"0":"1"),en(t,"AID",e.U),hr(e,t),en(t,"TYPE","xmlhttp"),e.o&&e.s&&tr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=tn(Zt(t)),n.s=null,n.U=!0,Ot(n,e)}function vr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function yr(e,t){var n=null;if(e.g==t){vr(e),gr(e),e.g=null;var r=2}else{if(!kn(e.i,t))return;n=t.D,Cn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=lt(),Oe(r,new ft(r,n,t,i)),lr(e)}else fr(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&cr(e,t)||2==r&&pr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:br(e,5);break;case 4:br(e,10);break;case 3:br(e,6);break;default:br(e,2)}}function wr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function br(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=b(e.jb,e);n||(n=new Gt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Xt(n,"https"),tn(n)),Nn(n.toString(),r)}else dt(2);e.G=0,e.j&&e.j.va(t),_r(e),or(e)}function _r(e){e.G=0,e.I=-1,e.j&&(0==xn(e.i).length&&0==e.l.length||(e.i.i.length=0,R(e.l),e.l.length=0),e.j.ua())}function Er(e,t,n){let r=nn(n);if(""!=r.i)t&&Qt(r,t+"."+r.i),Yt(r,r.m);else{const e=h.location;r=rn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&q(e.aa,(function(e,t){en(r,t,e)})),t=e.D,n=e.sa,t&&n&&en(r,t,n),en(r,"VER",e.ma),hr(e,r),r}function Sr(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new Bn(new Pn({ib:!0})):new Bn(e.qa),t.L=e.H,t}function Tr(){}function kr(){if(K&&!(10<=Number(se)))throw Error("Environmental error: no available transport.")}function Ir(e,t){Re.call(this),this.g=new rr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new Ar(this)}function Cr(e){Et.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function xr(){St.call(this),this.status=1}function Ar(e){this.g=e}r=Bn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():bt.g(),this.C=this.u?yt(this.u):yt(bt),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Wn(this,s)}e=n||"";const i=new $t(this.headers);r&&jt(r,(function(e,t){i.set(t,e)})),r=x(i.T()),n=h.FormData&&e instanceof h.FormData,!(0<=I(zn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Qn(this),0<this.B&&((this.K=Hn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=We(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Wn(this,s)}},r.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Oe(this,"complete"),Oe(this,"abort"),Xn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Xn(this,!0)),Bn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Zn(this):this.cb())},r.cb=function(){Zn(this)},r.ba=function(){try{return 2<Yn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Vn(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new kt(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=U(s),B(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=dr(this,i,t),n=Zt(this.F),en(n,"RID",e),en(n,"CVER",22),this.D&&en(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&s&&tr(n,this.o,s),In(this.i,i),this.Ra&&en(n,"TYPE","init"),this.ja?(en(n,"$req",t),en(n,"SID","null"),i.$=!0,Rt(i,n,null)):Rt(i,n,t),this.G=2}}else 3==this.G&&(e?ur(this,e):0==this.l.length||Sn(this.i)||ur(this))},r.Ga=function(){if(this.u=null,mr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=pt(b(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,dt(10),sr(this),mr(this))},r.ab=function(){null!=this.v&&(this.v=null,sr(this),pr(this),dt(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),dt(2)):(this.h.info("Failed to ping google.com"),dt(1))},r=Tr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},kr.prototype.g=function(e,t){return new Ir(e,t)},E(Ir,Re),Ir.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ve(b(e.hb,e,t))),dt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Er(e,null,e.W),lr(e)},Ir.prototype.close=function(){ir(this.g)},Ir.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,ar(this.g,t)}else this.v?(t={},t.__data__=Le(e),ar(this.g,t)):ar(this.g,e)},Ir.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,Ir.Z.M.call(this)},E(Cr,Et),E(xr,St),E(Ar,Tr),Ar.prototype.xa=function(){Oe(this.g,"a")},Ar.prototype.wa=function(e){Oe(this.g,new Cr(e))},Ar.prototype.va=function(e){Oe(this.g,new xr(e))},Ar.prototype.ua=function(){Oe(this.g,"b")},kr.prototype.createWebChannel=kr.prototype.g,Ir.prototype.send=Ir.prototype.u,Ir.prototype.open=Ir.prototype.m,Ir.prototype.close=Ir.prototype.close,gt.NO_ERROR=0,gt.TIMEOUT=8,gt.HTTP_ERROR=6,mt.COMPLETE="complete",wt.EventType=_t,_t.OPEN="a",_t.CLOSE="b",_t.ERROR="c",_t.MESSAGE="d",Re.prototype.listen=Re.prototype.N,Bn.prototype.listenOnce=Bn.prototype.O,Bn.prototype.getLastError=Bn.prototype.La,Bn.prototype.getLastErrorCode=Bn.prototype.Da,Bn.prototype.getStatus=Bn.prototype.ba,Bn.prototype.getResponseJson=Bn.prototype.Qa,Bn.prototype.getResponseText=Bn.prototype.ga,Bn.prototype.send=Bn.prototype.ea;var Rr=c.createWebChannelTransport=function(){return new kr},Or=c.getStatEventTarget=function(){return lt()},Nr=c.ErrorCode=gt,Lr=c.EventType=mt,Pr=c.Event=ot,Dr=c.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fr=c.FetchXmlHttpFactory=Pn,Mr=c.WebChannel=wt,qr=c.XhrIo=Bn;const Ur="@firebase/firestore";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vr{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Vr.UNAUTHENTICATED=new Vr(null),Vr.GOOGLE_CREDENTIALS=new Vr("google-credentials-uid"),Vr.FIRST_PARTY=new Vr("first-party-uid"),Vr.MOCK_USER=new Vr("mock-user");
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
let Br="9.9.0";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const jr=new o.Yd("@firebase/firestore");function $r(){return jr.logLevel}function zr(e,...t){if(jr.logLevel<=o["in"].DEBUG){const n=t.map(Wr);jr.debug(`Firestore (${Br}): ${e}`,...n)}}function Hr(e,...t){if(jr.logLevel<=o["in"].ERROR){const n=t.map(Wr);jr.error(`Firestore (${Br}): ${e}`,...n)}}function Kr(e,...t){if(jr.logLevel<=o["in"].WARN){const n=t.map(Wr);jr.warn(`Firestore (${Br}): ${e}`,...n)}}function Wr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gr(e="Unexpected state"){const t=`FIRESTORE (${Br}) INTERNAL ASSERTION FAILED: `+e;throw Hr(t),new Error(t)}function Zr(e,t){e||Gr()}function Xr(e,t){return e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Yr extends a.ZR{constructor(e,t){super(e,t),this.code=e,this.message=t,this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Jr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ei{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ti{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Vr.UNAUTHENTICATED)))}shutdown(){}}class ni{constructor(e){this.t=e,this.currentUser=Vr.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Jr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Jr,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Jr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Zr("string"==typeof t.accessToken),new ei(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Zr(null===e||"string"==typeof e),new Vr(e)}}class ri{constructor(e,t,n){this.type="FirstParty",this.user=Vr.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ii{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new ri(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Vr.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class si{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oi{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null,this.p=null}start(e,t){const n=e=>{null!=e.error&&zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`);const n=e.token!==this.p;return this.p=e.token,zr("FirebaseAppCheckTokenProvider",`Received ${n?"new":"existing"} token.`),n?t(e.token):Promise.resolve()};this.o=t=>{e.enqueueRetryable((()=>n(t)))};const r=e=>{zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>r(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?r(e):zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Zr("string"==typeof e.token),this.p=e.token,new si(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ai(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class li{static I(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=ai(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function ci(e,t){return e<t?-1:e>t?1:0}function ui(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hi{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Yr(Qr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return hi.fromMillis(Date.now())}static fromDate(e){return hi.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new hi(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ci(this.nanoseconds,e.nanoseconds):ci(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class di{constructor(e){this.timestamp=e}static fromTimestamp(e){return new di(e)}static min(){return new di(new hi(0,0))}static max(){return new di(new hi(253402300799,999999999))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fi{constructor(e,t,n){void 0===t?t=0:t>e.length&&Gr(),void 0===n?n=e.length-t:n>e.length-t&&Gr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===fi.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof fi?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class pi extends fi{construct(e,t,n){return new pi(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Yr(Qr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new pi(t)}static emptyPath(){return new pi([])}}const gi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class mi extends fi{construct(e,t,n){return new mi(e,t,n)}static isValidIdentifier(e){return gi.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),mi.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new mi(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Yr(Qr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Yr(Qr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Yr(Qr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Yr(Qr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new mi(t)}static emptyPath(){return new mi([])}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vi{constructor(e){this.path=e}static fromPath(e){return new vi(pi.fromString(e))}static fromName(e){return new vi(pi.fromString(e).popFirst(5))}static empty(){return new vi(pi.emptyPath())}get collectionGroup(){return this.path.popLast().lastSegment()}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}getCollectionGroup(){return this.path.get(this.path.length-2)}getCollectionPath(){return this.path.popLast()}isEqual(e){return null!==e&&0===pi.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return pi.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new vi(new pi(e.slice()))}}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yi{constructor(e,t,n,r){this.indexId=e,this.collectionGroup=t,this.fields=n,this.indexState=r}}yi.UNKNOWN_ID=-1;function wi(e,t){const n=e.toTimestamp().seconds,r=e.toTimestamp().nanoseconds+1,i=di.fromTimestamp(1e9===r?new hi(n+1,0):new hi(n,r));return new _i(i,vi.empty(),t)}function bi(e){return new _i(e.readTime,e.key,-1)}class _i{constructor(e,t,n){this.readTime=e,this.documentKey=t,this.largestBatchId=n}static min(){return new _i(di.min(),vi.empty(),-1)}static max(){return new _i(di.max(),vi.empty(),-1)}}function Ei(e,t){let n=e.readTime.compareTo(t.readTime);return 0!==n?n:(n=vi.comparator(e.documentKey,t.documentKey),0!==n?n:ci(e.largestBatchId,t.largestBatchId))}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Si="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ti{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */async function ki(e){if(e.code!==Qr.FAILED_PRECONDITION||e.message!==Si)throw e;zr("LocalStore","Unexpectedly lost primary lease")}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ii{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Gr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new Ii(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof Ii?t:Ii.resolve(t)}catch(e){return Ii.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):Ii.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):Ii.reject(t)}static resolve(e){return new Ii(((t,n)=>{t(e)}))}static reject(e){return new Ii(((t,n)=>{n(e)}))}static waitFor(e){return new Ii(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=Ii.resolve(!1);for(const n of e)t=t.next((e=>e?Ii.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}static mapArray(e,t){return new Ii(((n,r)=>{const i=e.length,s=new Array(i);let o=0;for(let a=0;a<i;a++){const l=a;t(e[l]).next((e=>{s[l]=e,++o,o===i&&n(s)}),(e=>r(e)))}}))}static doWhile(e,t){return new Ii(((n,r)=>{const i=()=>{!0===e()?t().next((()=>{i()}),r):n()};i()}))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ci(e){return"IndexedDbTransactionError"===e.name}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xi{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.it(e),this.rt=e=>t.writeSequenceNumber(e))}it(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.rt&&this.rt(e),e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ai(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function Ri(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function Oi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */xi.ot=-1;class Ni{constructor(e,t){this.comparator=e,this.root=t||Pi.EMPTY}insert(e,t){return new Ni(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,Pi.BLACK,null,null))}remove(e){return new Ni(this.comparator,this.root.remove(e,this.comparator).copy(null,null,Pi.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new Li(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new Li(this.root,e,this.comparator,!1)}getReverseIterator(){return new Li(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new Li(this.root,e,this.comparator,!0)}}class Li{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,t&&r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class Pi{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:Pi.RED,this.left=null!=r?r:Pi.EMPTY,this.right=null!=i?i:Pi.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new Pi(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return Pi.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return Pi.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,Pi.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,Pi.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Gr();if(this.right.isRed())throw Gr();const e=this.left.check();if(e!==this.right.check())throw Gr();return e+(this.isRed()?0:1)}}Pi.EMPTY=null,Pi.RED=!0,Pi.BLACK=!1,Pi.EMPTY=new class{constructor(){this.size=0}get key(){throw Gr()}get value(){throw Gr()}get color(){throw Gr()}get left(){throw Gr()}get right(){throw Gr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new Pi(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Di{constructor(e){this.comparator=e,this.data=new Ni(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Fi(this.data.getIterator())}getIteratorFrom(e){return new Fi(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof Di))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new Di(this.comparator);return t.data=e,t}}class Fi{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Mi{constructor(e){this.fields=e,e.sort(mi.comparator)}static empty(){return new Mi([])}unionWith(e){let t=new Di(mi.comparator);for(const n of this.fields)t=t.add(n);for(const n of e)t=t.add(n);return new Mi(t.toArray())}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return ui(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class qi{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new qi(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new qi(t)}[Symbol.iterator](){let e=0;return{next:()=>e<this.binaryString.length?{value:this.binaryString.charCodeAt(e++),done:!1}:{value:void 0,done:!0}}}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ci(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}qi.EMPTY_BYTE_STRING=new qi("");const Ui=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function Vi(e){if(Zr(!!e),"string"==typeof e){let t=0;const n=Ui.exec(e);if(Zr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Bi(e.seconds),nanos:Bi(e.nanos)}}function Bi(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function ji(e){return"string"==typeof e?qi.fromBase64String(e):qi.fromUint8Array(e)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function $i(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function zi(e){const t=e.mapValue.fields.__previous_value__;return $i(t)?zi(t):t}function Hi(e){const t=Vi(e.mapValue.fields.__local_write_time__.timestampValue);return new hi(t.seconds,t.nanos)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ki{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class Wi{constructor(e,t){this.projectId=e,this.database=t||"(default)"}static empty(){return new Wi("","")}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof Wi&&e.projectId===this.projectId&&e.database===this.database}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Gi(e){return null==e}function Zi(e){return 0===e&&1/e==-1/0}function Xi(e){return"number"==typeof e&&Number.isInteger(e)&&!Zi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Qi={mapValue:{fields:{__type__:{stringValue:"__max__"}}}};function Yi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?$i(e)?4:hs(e)?9007199254740991:10:Gr()}function Ji(e,t){if(e===t)return!0;const n=Yi(e);if(n!==Yi(t))return!1;switch(n){case 0:case 9007199254740991:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return Hi(e).isEqual(Hi(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=Vi(e.timestampValue),r=Vi(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return ji(e.bytesValue).isEqual(ji(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Bi(e.geoPointValue.latitude)===Bi(t.geoPointValue.latitude)&&Bi(e.geoPointValue.longitude)===Bi(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Bi(e.integerValue)===Bi(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Bi(e.doubleValue),r=Bi(t.doubleValue);return n===r?Zi(n)===Zi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return ui(e.arrayValue.values||[],t.arrayValue.values||[],Ji);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(Ai(n)!==Ai(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Ji(n[i],r[i])))return!1;return!0}(e,t);default:return Gr()}}function es(e,t){return void 0!==(e.values||[]).find((e=>Ji(e,t)))}function ts(e,t){if(e===t)return 0;const n=Yi(e),r=Yi(t);if(n!==r)return ci(n,r);switch(n){case 0:case 9007199254740991:return 0;case 1:return ci(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Bi(e.integerValue||e.doubleValue),r=Bi(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return ns(e.timestampValue,t.timestampValue);case 4:return ns(Hi(e),Hi(t));case 5:return ci(e.stringValue,t.stringValue);case 6:return function(e,t){const n=ji(e),r=ji(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=ci(n[i],r[i]);if(0!==e)return e}return ci(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ci(Bi(e.latitude),Bi(t.latitude));return 0!==n?n:ci(Bi(e.longitude),Bi(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=ts(n[i],r[i]);if(e)return e}return ci(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){if(e===Qi.mapValue&&t===Qi.mapValue)return 0;if(e===Qi.mapValue)return 1;if(t===Qi.mapValue)return-1;const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=ci(r[o],s[o]);if(0!==e)return e;const t=ts(n[r[o]],i[s[o]]);if(0!==t)return t}return ci(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Gr()}}function ns(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ci(e,t);const n=Vi(e),r=Vi(t),i=ci(n.seconds,r.seconds);return 0!==i?i:ci(n.nanos,r.nanos)}function rs(e){return is(e)}function is(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=Vi(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?ji(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,vi.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=is(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${is(e.fields[i])}`;return n+"}"}(e.mapValue):Gr();var t,n}function ss(e){return!!e&&"integerValue"in e}function os(e){return!!e&&"arrayValue"in e}function as(e){return!!e&&"nullValue"in e}function ls(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function cs(e){return!!e&&"mapValue"in e}function us(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return Ri(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=us(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=us(e.arrayValue.values[n]);return t}return Object.assign({},e)}function hs(e){return"__max__"===(((e.mapValue||{}).fields||{}).__type__||{}).stringValue}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ds{constructor(e){this.value=e}static empty(){return new ds({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!cs(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=us(t)}setAll(e){let t=mi.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=us(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());cs(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Ji(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];cs(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){Ri(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new ds(us(this.value))}}function fs(e){const t=[];return Ri(e.fields,((e,n)=>{const r=new mi([e]);if(cs(n)){const e=fs(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new Mi(t)
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class ps{constructor(e,t,n,r,i,s){this.key=e,this.documentType=t,this.version=n,this.readTime=r,this.data=i,this.documentState=s}static newInvalidDocument(e){return new ps(e,0,di.min(),di.min(),ds.empty(),0)}static newFoundDocument(e,t,n){return new ps(e,1,t,di.min(),n,0)}static newNoDocument(e,t){return new ps(e,2,t,di.min(),ds.empty(),0)}static newUnknownDocument(e,t){return new ps(e,3,t,di.min(),ds.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=ds.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=ds.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this.version=di.min(),this}setReadTime(e){return this.readTime=e,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof ps&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}mutableCopy(){return new ps(this.key,this.documentType,this.version,this.readTime,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class gs{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.ut=null}}function ms(e,t=null,n=[],r=[],i=null,s=null,o=null){return new gs(e,t,n,r,i,s,o)}function vs(e){const t=Xr(e);if(null===t.ut){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>{return(t=e).field.canonicalString()+t.op.toString()+rs(t.value);var t})).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Gi(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=t.startAt.inclusive?"b:":"a:",e+=t.startAt.position.map((e=>rs(e))).join(",")),t.endAt&&(e+="|ub:",e+=t.endAt.inclusive?"a:":"b:",e+=t.endAt.position.map((e=>rs(e))).join(",")),t.ut=e}return t.ut}function ys(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${rs(t.value)}`;var t})).join(", ")}]`),Gi(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: ",t+=e.startAt.inclusive?"b:":"a:",t+=e.startAt.position.map((e=>rs(e))).join(",")),e.endAt&&(t+=", endAt: ",t+=e.endAt.inclusive?"a:":"b:",t+=e.endAt.position.map((e=>rs(e))).join(",")),`Target(${t})`}function ws(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!Ns(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Ji(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!Ps(e.startAt,t.startAt)&&Ps(e.endAt,t.endAt)}function bs(e){return vi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class _s extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.ct(e,t,n):new Es(e,t,n):"array-contains"===t?new Is(e,n):"in"===t?new Cs(e,n):"not-in"===t?new xs(e,n):"array-contains-any"===t?new As(e,n):new _s(e,t,n)}static ct(e,t,n){return"in"===t?new Ss(e,n):new Ts(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.at(ts(t,this.value)):null!==t&&Yi(this.value)===Yi(t)&&this.at(ts(t,this.value))}at(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Gr()}}ht(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}class Es extends _s{constructor(e,t,n){super(e,t,n),this.key=vi.fromName(n.referenceValue)}matches(e){const t=vi.comparator(e.key,this.key);return this.at(t)}}class Ss extends _s{constructor(e,t){super(e,"in",t),this.keys=ks("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class Ts extends _s{constructor(e,t){super(e,"not-in",t),this.keys=ks("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function ks(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>vi.fromName(e.referenceValue)))}class Is extends _s{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return os(t)&&es(t.arrayValue,this.value)}}class Cs extends _s{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&es(this.value.arrayValue,t)}}class xs extends _s{constructor(e,t){super(e,"not-in",t)}matches(e){if(es(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!es(this.value.arrayValue,t)}}class As extends _s{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!os(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>es(this.value.arrayValue,e)))}}class Rs{constructor(e,t){this.position=e,this.inclusive=t}}class Os{constructor(e,t="asc"){this.field=e,this.dir=t}}function Ns(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function Ls(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?vi.comparator(vi.fromName(o.referenceValue),n.key):ts(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return r}function Ps(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.inclusive!==t.inclusive||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Ji(e.position[n],t.position[n]))return!1;return!0}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ds{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.lt=null,this.ft=null,this.startAt,this.endAt}}function Fs(e,t,n,r,i,s,o,a){return new Ds(e,t,n,r,i,s,o,a)}function Ms(e){return new Ds(e)}function qs(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}function Us(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function Vs(e){for(const t of e.filters)if(t.ht())return t.field;return null}function Bs(e){return null!==e.collectionGroup}function js(e){const t=Xr(e);if(null===t.lt){t.lt=[];const e=Vs(t),n=Us(t);if(null!==e&&null===n)e.isKeyField()||t.lt.push(new Os(e)),t.lt.push(new Os(mi.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.lt.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.lt.push(new Os(mi.keyField(),e))}}}return t.lt}function $s(e){const t=Xr(e);if(!t.ft)if("F"===t.limitType)t.ft=ms(t.path,t.collectionGroup,js(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of js(t)){const t="desc"===i.dir?"asc":"desc";e.push(new Os(i.field,t))}const n=t.endAt?new Rs(t.endAt.position,t.endAt.inclusive):null,r=t.startAt?new Rs(t.startAt.position,t.startAt.inclusive):null;t.ft=ms(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.ft}function zs(e,t,n){return new Ds(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function Hs(e,t){return ws($s(e),$s(t))&&e.limitType===t.limitType}function Ks(e){return`${vs($s(e))}|lt:${e.limitType}`}function Ws(e){return`Query(target=${ys($s(e))}; limitType=${e.limitType})`}function Gs(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):vi.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!function(e,t,n){const r=Ls(e,t,n);return e.inclusive?r<=0:r<0}(e.startAt,js(e),t))&&!(e.endAt&&!function(e,t,n){const r=Ls(e,t,n);return e.inclusive?r>=0:r>0}(e.endAt,js(e),t))}(e,t)}function Zs(e){return e.collectionGroup||(e.path.length%2==1?e.path.lastSegment():e.path.get(e.path.length-2))}function Xs(e){return(t,n)=>{let r=!1;for(const i of js(e)){const e=Qs(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Qs(e,t,n){const r=e.field.isKeyField()?vi.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?ts(r,i):Gr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Gr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ys(e,t){if(e.dt){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Zi(t)?"-0":t}}function Js(e){return{integerValue:""+e}}function eo(e,t){return Xi(t)?Js(t):Ys(e,t)}
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class to{constructor(){this._=void 0}}function no(e,t,n){return e instanceof so?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof oo?ao(e,t):e instanceof lo?co(e,t):function(e,t){const n=io(e,t),r=ho(n)+ho(e._t);return ss(n)&&ss(e._t)?Js(r):Ys(e.wt,r)}(e,t)}function ro(e,t,n){return e instanceof oo?ao(e,t):e instanceof lo?co(e,t):n}function io(e,t){return e instanceof uo?ss(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class so extends to{}class oo extends to{constructor(e){super(),this.elements=e}}function ao(e,t){const n=fo(t);for(const r of e.elements)n.some((e=>Ji(e,r)))||n.push(r);return{arrayValue:{values:n}}}class lo extends to{constructor(e){super(),this.elements=e}}function co(e,t){let n=fo(t);for(const r of e.elements)n=n.filter((e=>!Ji(e,r)));return{arrayValue:{values:n}}}class uo extends to{constructor(e,t){super(),this.wt=e,this._t=t}}function ho(e){return Bi(e.integerValue||e.doubleValue)}function fo(e){return os(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function po(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof oo&&t instanceof oo||e instanceof lo&&t instanceof lo?ui(e.elements,t.elements,Ji):e instanceof uo&&t instanceof uo?Ji(e._t,t._t):e instanceof so&&t instanceof so}(e.transform,t.transform)}class go{constructor(e,t){this.version=e,this.transformResults=t}}class mo{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new mo}static exists(e){return new mo(void 0,e)}static updateTime(e){return new mo(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function vo(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class yo{}function wo(e,t){if(!e.hasLocalMutations||t&&0===t.fields.length)return null;if(null===t)return e.isNoDocument()?new Ao(e.key,mo.none()):new To(e.key,e.data,mo.none());{const n=e.data,r=ds.empty();let i=new Di(mi.comparator);for(let e of t.fields)if(!i.has(e)){let t=n.field(e);null===t&&e.length>1&&(e=e.popLast(),t=n.field(e)),null===t?r.delete(e):r.set(e,t),i=i.add(e)}return new ko(e.key,r,new Mi(i.toArray()),mo.none())}}function bo(e,t,n){e instanceof To?function(e,t,n){const r=e.value.clone(),i=Co(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ko?function(e,t,n){if(!vo(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=Co(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(Io(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function _o(e,t,n,r){return e instanceof To?function(e,t,n,r){if(!vo(e.precondition,t))return n;const i=e.value.clone(),s=xo(e.fieldTransforms,r,t);return i.setAll(s),t.convertToFoundDocument(t.version,i).setHasLocalMutations(),null}(e,t,n,r):e instanceof ko?function(e,t,n,r){if(!vo(e.precondition,t))return n;const i=xo(e.fieldTransforms,r,t),s=t.data;return s.setAll(Io(e)),s.setAll(i),t.convertToFoundDocument(t.version,s).setHasLocalMutations(),null===n?null:n.unionWith(e.fieldMask.fields).unionWith(e.fieldTransforms.map((e=>e.field)))}(e,t,n,r):function(e,t,n){return vo(e.precondition,t)?(t.convertToNoDocument(t.version).setHasLocalMutations(),null):n}(e,t,n)}function Eo(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=io(r.transform,e||null);null!=i&&(null===n&&(n=ds.empty()),n.set(r.field,i))}return n||null}function So(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&ui(e,t,((e,t)=>po(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}class To extends yo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}getFieldMask(){return null}}class ko extends yo{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}getFieldMask(){return this.fieldMask}}function Io(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function Co(e,t,n){const r=new Map;Zr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,ro(o,a,n[i]))}return r}function xo(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,no(e,s,t))}return r}class Ao extends yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}getFieldMask(){return null}}class Ro extends yo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}getFieldMask(){return null}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Oo{constructor(e){this.count=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */var No,Lo;function Po(e){switch(e){default:return Gr();case Qr.CANCELLED:case Qr.UNKNOWN:case Qr.DEADLINE_EXCEEDED:case Qr.RESOURCE_EXHAUSTED:case Qr.INTERNAL:case Qr.UNAVAILABLE:case Qr.UNAUTHENTICATED:return!1;case Qr.INVALID_ARGUMENT:case Qr.NOT_FOUND:case Qr.ALREADY_EXISTS:case Qr.PERMISSION_DENIED:case Qr.FAILED_PRECONDITION:case Qr.ABORTED:case Qr.OUT_OF_RANGE:case Qr.UNIMPLEMENTED:case Qr.DATA_LOSS:return!0}}function Do(e){if(void 0===e)return Hr("GRPC error has no .code"),Qr.UNKNOWN;switch(e){case No.OK:return Qr.OK;case No.CANCELLED:return Qr.CANCELLED;case No.UNKNOWN:return Qr.UNKNOWN;case No.DEADLINE_EXCEEDED:return Qr.DEADLINE_EXCEEDED;case No.RESOURCE_EXHAUSTED:return Qr.RESOURCE_EXHAUSTED;case No.INTERNAL:return Qr.INTERNAL;case No.UNAVAILABLE:return Qr.UNAVAILABLE;case No.UNAUTHENTICATED:return Qr.UNAUTHENTICATED;case No.INVALID_ARGUMENT:return Qr.INVALID_ARGUMENT;case No.NOT_FOUND:return Qr.NOT_FOUND;case No.ALREADY_EXISTS:return Qr.ALREADY_EXISTS;case No.PERMISSION_DENIED:return Qr.PERMISSION_DENIED;case No.FAILED_PRECONDITION:return Qr.FAILED_PRECONDITION;case No.ABORTED:return Qr.ABORTED;case No.OUT_OF_RANGE:return Qr.OUT_OF_RANGE;case No.UNIMPLEMENTED:return Qr.UNIMPLEMENTED;case No.DATA_LOSS:return Qr.DATA_LOSS;default:return Gr()}}(Lo=No||(No={}))[Lo.OK=0]="OK",Lo[Lo.CANCELLED=1]="CANCELLED",Lo[Lo.UNKNOWN=2]="UNKNOWN",Lo[Lo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",Lo[Lo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",Lo[Lo.NOT_FOUND=5]="NOT_FOUND",Lo[Lo.ALREADY_EXISTS=6]="ALREADY_EXISTS",Lo[Lo.PERMISSION_DENIED=7]="PERMISSION_DENIED",Lo[Lo.UNAUTHENTICATED=16]="UNAUTHENTICATED",Lo[Lo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",Lo[Lo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",Lo[Lo.ABORTED=10]="ABORTED",Lo[Lo.OUT_OF_RANGE=11]="OUT_OF_RANGE",Lo[Lo.UNIMPLEMENTED=12]="UNIMPLEMENTED",Lo[Lo.INTERNAL=13]="INTERNAL",Lo[Lo.UNAVAILABLE=14]="UNAVAILABLE",Lo[Lo.DATA_LOSS=15]="DATA_LOSS";
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Fo{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={},this.innerSize=0}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0===r)return this.inner[n]=[[e,t]],void this.innerSize++;for(let i=0;i<r.length;i++)if(this.equalsFn(r[i][0],e))return void(r[i]=[e,t]);r.push([e,t]),this.innerSize++}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),this.innerSize--,!0;return!1}forEach(e){Ri(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return Oi(this.inner)}size(){return this.innerSize}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Mo=new Ni(vi.comparator);function qo(){return Mo}const Uo=new Ni(vi.comparator);function Vo(...e){let t=Uo;for(const n of e)t=t.insert(n.key,n);return t}function Bo(e){let t=Uo;return e.forEach(((e,n)=>t=t.insert(e,n.overlayedDocument))),t}function jo(){return zo()}function $o(){return zo()}function zo(){return new Fo((e=>e.toString()),((e,t)=>e.isEqual(t)))}const Ho=new Ni(vi.comparator),Ko=new Di(vi.comparator);function Wo(...e){let t=Ko;for(const n of e)t=t.add(n);return t}const Go=new Di(ci);function Zo(){return Go}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Xo{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Qo.createSynthesizedTargetChangeForCurrentChange(e,t)),new Xo(di.min(),n,Zo(),qo(),Wo())}}class Qo{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Qo(qi.EMPTY_BYTE_STRING,t,Wo(),Wo(),Wo())}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yo{constructor(e,t,n,r){this.gt=e,this.removedTargetIds=t,this.key=n,this.yt=r}}class Jo{constructor(e,t){this.targetId=e,this.It=t}}class ea{constructor(e,t,n=qi.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class ta{constructor(){this.Tt=0,this.Et=ia(),this.At=qi.EMPTY_BYTE_STRING,this.Rt=!1,this.bt=!0}get current(){return this.Rt}get resumeToken(){return this.At}get Pt(){return 0!==this.Tt}get vt(){return this.bt}Vt(e){e.approximateByteSize()>0&&(this.bt=!0,this.At=e)}St(){let e=Wo(),t=Wo(),n=Wo();return this.Et.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Gr()}})),new Qo(this.At,this.Rt,e,t,n)}Dt(){this.bt=!1,this.Et=ia()}Ct(e,t){this.bt=!0,this.Et=this.Et.insert(e,t)}xt(e){this.bt=!0,this.Et=this.Et.remove(e)}Nt(){this.Tt+=1}kt(){this.Tt-=1}Ot(){this.bt=!0,this.Rt=!0}}class na{constructor(e){this.Mt=e,this.Ft=new Map,this.$t=qo(),this.Bt=ra(),this.Lt=new Di(ci)}Ut(e){for(const t of e.gt)e.yt&&e.yt.isFoundDocument()?this.qt(t,e.yt):this.Kt(t,e.key,e.yt);for(const t of e.removedTargetIds)this.Kt(t,e.key,e.yt)}Gt(e){this.forEachTarget(e,(t=>{const n=this.Qt(t);switch(e.state){case 0:this.jt(t)&&n.Vt(e.resumeToken);break;case 1:n.kt(),n.Pt||n.Dt(),n.Vt(e.resumeToken);break;case 2:n.kt(),n.Pt||this.removeTarget(t);break;case 3:this.jt(t)&&(n.Ot(),n.Vt(e.resumeToken));break;case 4:this.jt(t)&&(this.Wt(t),n.Vt(e.resumeToken));break;default:Gr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.Ft.forEach(((e,n)=>{this.jt(n)&&t(n)}))}zt(e){const t=e.targetId,n=e.It.count,r=this.Ht(t);if(r){const e=r.target;if(bs(e))if(0===n){const n=new vi(e.path);this.Kt(t,n,ps.newNoDocument(n,di.min()))}else Zr(1===n);else this.Jt(t)!==n&&(this.Wt(t),this.Lt=this.Lt.add(t))}}Yt(e){const t=new Map;this.Ft.forEach(((n,r)=>{const i=this.Ht(r);if(i){if(n.current&&bs(i.target)){const t=new vi(i.target.path);null!==this.$t.get(t)||this.Xt(r,t)||this.Kt(r,t,ps.newNoDocument(t,e))}n.vt&&(t.set(r,n.St()),n.Dt())}}));let n=Wo();this.Bt.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.Ht(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))})),this.$t.forEach(((t,n)=>n.setReadTime(e)));const r=new Xo(e,t,this.Lt,this.$t,n);return this.$t=qo(),this.Bt=ra(),this.Lt=new Di(ci),r}qt(e,t){if(!this.jt(e))return;const n=this.Xt(e,t.key)?2:0;this.Qt(e).Ct(t.key,n),this.$t=this.$t.insert(t.key,t),this.Bt=this.Bt.insert(t.key,this.Zt(t.key).add(e))}Kt(e,t,n){if(!this.jt(e))return;const r=this.Qt(e);this.Xt(e,t)?r.Ct(t,1):r.xt(t),this.Bt=this.Bt.insert(t,this.Zt(t).delete(e)),n&&(this.$t=this.$t.insert(t,n))}removeTarget(e){this.Ft.delete(e)}Jt(e){const t=this.Qt(e).St();return this.Mt.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}Nt(e){this.Qt(e).Nt()}Qt(e){let t=this.Ft.get(e);return t||(t=new ta,this.Ft.set(e,t)),t}Zt(e){let t=this.Bt.get(e);return t||(t=new Di(ci),this.Bt=this.Bt.insert(e,t)),t}jt(e){const t=null!==this.Ht(e);return t||zr("WatchChangeAggregator","Detected inactive target",e),t}Ht(e){const t=this.Ft.get(e);return t&&t.Pt?null:this.Mt.te(e)}Wt(e){this.Ft.set(e,new ta),this.Mt.getRemoteKeysForTarget(e).forEach((t=>{this.Kt(e,t,null)}))}Xt(e,t){return this.Mt.getRemoteKeysForTarget(e).has(t)}}function ra(){return new Ni(vi.comparator)}function ia(){return new Ni(vi.comparator)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const sa=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),oa=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class aa{constructor(e,t){this.databaseId=e,this.dt=t}}function la(e,t){return e.dt?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function ca(e,t){return e.dt?t.toBase64():t.toUint8Array()}function ua(e,t){return la(e,t.toTimestamp())}function ha(e){return Zr(!!e),di.fromTimestamp(function(e){const t=Vi(e);return new hi(t.seconds,t.nanos)}(e))}function da(e,t){return function(e){return new pi(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function fa(e){const t=pi.fromString(e);return Zr(Fa(t)),t}function pa(e,t){return da(e.databaseId,t.path)}function ga(e,t){const n=fa(t);if(n.get(1)!==e.databaseId.projectId)throw new Yr(Qr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Yr(Qr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new vi(wa(n))}function ma(e,t){return da(e.databaseId,t)}function va(e){const t=fa(e);return 4===t.length?pi.emptyPath():wa(t)}function ya(e){return new pi(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function wa(e){return Zr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ba(e,t,n){return{name:pa(e,t),fields:n.value.mapValue.fields}}function _a(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Gr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.dt?(Zr(void 0===t||"string"==typeof t),qi.fromBase64String(t||"")):(Zr(void 0===t||t instanceof Uint8Array),qi.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Qr.UNKNOWN:Do(e.code);return new Yr(t,e.message||"")}(o);n=new ea(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=ga(e,r.document.name),s=ha(r.document.updateTime),o=new ds({mapValue:{fields:r.document.fields}}),a=ps.newFoundDocument(i,s,o),l=r.targetIds||[],c=r.removedTargetIds||[];n=new Yo(l,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=ga(e,r.document),s=r.readTime?ha(r.readTime):di.min(),o=ps.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Yo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=ga(e,r.document),s=r.removedTargetIds||[];n=new Yo([],s,i,null)}else{if(!("filter"in t))return Gr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new Oo(r),s=e.targetId;n=new Jo(s,i)}}return n}function Ea(e,t){let n;if(t instanceof To)n={update:ba(e,t.key,t.value)};else if(t instanceof Ao)n={delete:pa(e,t.key)};else if(t instanceof ko)n={update:ba(e,t.key,t.data),updateMask:Da(t.fieldMask)};else{if(!(t instanceof Ro))return Gr();n={verify:pa(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof so)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof oo)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof lo)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof uo)return{fieldPath:t.field.canonicalString(),increment:n._t};throw Gr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:ua(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Gr()}(e,t.precondition)),n}function Sa(e,t){return e&&e.length>0?(Zr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?ha(e.updateTime):ha(t);return n.isEqual(di.min())&&(n=ha(t)),new go(n,e.transformResults||[])}(e,t)))):[]}function Ta(e,t){return{documents:[ma(e,t.path)]}}function ka(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ma(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ma(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(ls(e.value))return{unaryFilter:{field:Oa(e.field),op:"IS_NAN"}};if(as(e.value))return{unaryFilter:{field:Oa(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(ls(e.value))return{unaryFilter:{field:Oa(e.field),op:"IS_NOT_NAN"}};if(as(e.value))return{unaryFilter:{field:Oa(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:Oa(e.field),op:Ra(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:Oa(e.field),direction:Aa(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.dt||Gi(t)?t:{value:t}}(e,t.limit);var a;return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt={before:(a=t.startAt).inclusive,values:a.position}),t.endAt&&(n.structuredQuery.endAt=function(e){return{before:!e.inclusive,values:e.position}}(t.endAt)),n}function Ia(e){let t=va(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Zr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=xa(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new Os(Na(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Gi(t)?null:t}(n.limit));let l=null;n.startAt&&(l=function(e){const t=!!e.before,n=e.values||[];return new Rs(n,t)}(n.startAt));let c=null;return n.endAt&&(c=function(e){const t=!e.before,n=e.values||[];return new Rs(n,t)}(n.endAt)),Fs(t,i,o,s,a,"F",l,c)}function Ca(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Gr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function xa(e){return e?void 0!==e.unaryFilter?[Pa(e)]:void 0!==e.fieldFilter?[La(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>xa(e))).reduce(((e,t)=>e.concat(t))):Gr():[]}function Aa(e){return sa[e]}function Ra(e){return oa[e]}function Oa(e){return{fieldPath:e.canonicalString()}}function Na(e){return mi.fromServerFormat(e.fieldPath)}function La(e){return _s.create(Na(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Gr()}}(e.fieldFilter.op),e.fieldFilter.value)}function Pa(e){switch(e.unaryFilter.op){case"IS_NAN":const t=Na(e.unaryFilter.field);return _s.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=Na(e.unaryFilter.field);return _s.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=Na(e.unaryFilter.field);return _s.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=Na(e.unaryFilter.field);return _s.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Gr()}}function Da(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Fa(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Ma=["mutationQueues","mutations","documentMutations","remoteDocuments","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries"],qa=["mutationQueues","mutations","documentMutations","remoteDocumentsV14","targets","owner","targetGlobal","targetDocuments","clientMetadata","remoteDocumentGlobal","collectionParents","bundles","namedQueries","documentOverlays"],Ua=qa;
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Va{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&bo(t,e,n[r])}}applyToLocalView(e,t){for(const n of this.baseMutations)n.key.isEqual(e.key)&&(t=_o(n,e,t,this.localWriteTime));for(const n of this.mutations)n.key.isEqual(e.key)&&(t=_o(n,e,t,this.localWriteTime));return t}applyToLocalDocumentSet(e,t){const n=$o();return this.mutations.forEach((r=>{const i=e.get(r.key),s=i.overlayedDocument;let o=this.applyToLocalView(s,i.mutatedFields);o=t.has(r.key)?null:o;const a=wo(s,o);null!==a&&n.set(r.key,a),s.isValidDocument()||s.convertToNoDocument(di.min())})),n}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Wo())}isEqual(e){return this.batchId===e.batchId&&ui(this.mutations,e.mutations,((e,t)=>So(e,t)))&&ui(this.baseMutations,e.baseMutations,((e,t)=>So(e,t)))}}class Ba{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Zr(e.mutations.length===n.length);let r=Ho;const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new Ba(e,t,n,r)}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ja{constructor(e,t){this.largestBatchId=e,this.mutation=t}getKey(){return this.mutation.key}isEqual(e){return null!==e&&this.mutation===e.mutation}toString(){return`Overlay{\n      largestBatchId: ${this.largestBatchId},\n      mutation: ${this.mutation.toString()}\n    }`}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class $a{constructor(e,t,n,r,i=di.min(),s=di.min(),o=qi.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new $a(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new $a(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class za{constructor(e){this.ne=e}}function Ha(e){const t=Ia({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?zs(t,t.limit,"L"):t}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ka{constructor(){}re(e,t){this.oe(e,t),t.ue()}oe(e,t){if("nullValue"in e)this.ce(t,5);else if("booleanValue"in e)this.ce(t,10),t.ae(e.booleanValue?1:0);else if("integerValue"in e)this.ce(t,15),t.ae(Bi(e.integerValue));else if("doubleValue"in e){const n=Bi(e.doubleValue);isNaN(n)?this.ce(t,13):(this.ce(t,15),Zi(n)?t.ae(0):t.ae(n))}else if("timestampValue"in e){const n=e.timestampValue;this.ce(t,20),"string"==typeof n?t.he(n):(t.he(`${n.seconds||""}`),t.ae(n.nanos||0))}else if("stringValue"in e)this.le(e.stringValue,t),this.fe(t);else if("bytesValue"in e)this.ce(t,30),t.de(ji(e.bytesValue)),this.fe(t);else if("referenceValue"in e)this._e(e.referenceValue,t);else if("geoPointValue"in e){const n=e.geoPointValue;this.ce(t,45),t.ae(n.latitude||0),t.ae(n.longitude||0)}else"mapValue"in e?hs(e)?this.ce(t,Number.MAX_SAFE_INTEGER):(this.we(e.mapValue,t),this.fe(t)):"arrayValue"in e?(this.me(e.arrayValue,t),this.fe(t)):Gr()}le(e,t){this.ce(t,25),this.ge(e,t)}ge(e,t){t.he(e)}we(e,t){const n=e.fields||{};this.ce(t,55);for(const r of Object.keys(n))this.le(r,t),this.oe(n[r],t)}me(e,t){const n=e.values||[];this.ce(t,50);for(const r of n)this.oe(r,t)}_e(e,t){this.ce(t,37),vi.fromName(e).path.forEach((e=>{this.ce(t,60),this.ge(e,t)}))}ce(e,t){e.ae(t)}fe(e){e.ae(2)}}Ka.ye=new Ka;
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Wa{constructor(){this.ze=new Ga}addToCollectionParentIndex(e,t){return this.ze.add(t),Ii.resolve()}getCollectionParents(e,t){return Ii.resolve(this.ze.getEntries(t))}addFieldIndex(e,t){return Ii.resolve()}deleteFieldIndex(e,t){return Ii.resolve()}getDocumentsMatchingTarget(e,t){return Ii.resolve(null)}getIndexType(e,t){return Ii.resolve(0)}getFieldIndexes(e,t){return Ii.resolve([])}getNextCollectionGroupToUpdate(e){return Ii.resolve(null)}getMinOffset(e,t){return Ii.resolve(_i.min())}getMinOffsetFromCollectionGroup(e,t){return Ii.resolve(_i.min())}updateCollectionGroup(e,t,n){return Ii.resolve()}updateIndexEntries(e,t){return Ii.resolve()}}class Ga{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new Di(pi.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new Di(pi.comparator)).toArray()}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */new Uint8Array(0);class Za{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Za(e,Za.DEFAULT_COLLECTION_PERCENTILE,Za.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Za.DEFAULT_COLLECTION_PERCENTILE=10,Za.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Za.DEFAULT=new Za(41943040,Za.DEFAULT_COLLECTION_PERCENTILE,Za.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Za.DISABLED=new Za(-1,0,0);
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Xa{constructor(e){this.En=e}next(){return this.En+=2,this.En}static An(){return new Xa(0)}static Rn(){return new Xa(-1)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Qa{constructor(){this.changes=new Fo((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}addEntry(e){this.assertNotApplied(),this.changes.set(e.key,e)}removeEntry(e,t){this.assertNotApplied(),this.changes.set(e,ps.newInvalidDocument(e).setReadTime(t))}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?Ii.resolve(n):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Ya{constructor(e,t){this.overlayedDocument=e,this.mutatedFields=t}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ja{constructor(e,t,n,r){this.remoteDocumentCache=e,this.mutationQueue=t,this.documentOverlayCache=n,this.indexManager=r}getDocument(e,t){let n=null;return this.documentOverlayCache.getOverlay(e,t).next((r=>(n=r,this.getBaseDocument(e,t,n)))).next((e=>(null!==n&&_o(n.mutation,e,Mi.empty(),hi.now()),e)))}getDocuments(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.getLocalViewOfDocuments(e,t,Wo()).next((()=>t))))}getLocalViewOfDocuments(e,t,n=Wo()){const r=jo();return this.populateOverlays(e,r,t).next((()=>this.computeViews(e,t,r,n).next((e=>{let t=Vo();return e.forEach(((e,n)=>{t=t.insert(e,n.overlayedDocument)})),t}))))}getOverlayedDocuments(e,t){const n=jo();return this.populateOverlays(e,n,t).next((()=>this.computeViews(e,t,n,Wo())))}populateOverlays(e,t,n){const r=[];return n.forEach((e=>{t.has(e)||r.push(e)})),this.documentOverlayCache.getOverlays(e,r).next((e=>{e.forEach(((e,n)=>{t.set(e,n)}))}))}computeViews(e,t,n,r){let i=qo();const s=zo(),o=zo();return t.forEach(((e,t)=>{const o=n.get(t.key);r.has(t.key)&&(void 0===o||o.mutation instanceof ko)?i=i.insert(t.key,t):void 0!==o&&(s.set(t.key,o.mutation.getFieldMask()),_o(o.mutation,t,o.mutation.getFieldMask(),hi.now()))})),this.recalculateAndSaveOverlays(e,i).next((e=>(e.forEach(((e,t)=>s.set(e,t))),t.forEach(((e,t)=>{var n;return o.set(e,new Ya(t,null!==(n=s.get(e))&&void 0!==n?n:null))})),o)))}recalculateAndSaveOverlays(e,t){const n=zo();let r=new Ni(((e,t)=>e-t)),i=Wo();return this.mutationQueue.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>{for(const i of e)i.keys().forEach((e=>{const s=t.get(e);if(null===s)return;let o=n.get(e)||Mi.empty();o=i.applyToLocalView(s,o),n.set(e,o);const a=(r.get(i.batchId)||Wo()).add(e);r=r.insert(i.batchId,a)}))})).next((()=>{const s=[],o=r.getReverseIterator();for(;o.hasNext();){const r=o.getNext(),a=r.key,l=r.value,c=$o();l.forEach((e=>{if(!i.has(e)){const r=wo(t.get(e),n.get(e));null!==r&&c.set(e,r),i=i.add(e)}})),s.push(this.documentOverlayCache.saveOverlays(e,a,c))}return Ii.waitFor(s)})).next((()=>n))}recalculateAndSaveOverlaysForDocumentKeys(e,t){return this.remoteDocumentCache.getEntries(e,t).next((t=>this.recalculateAndSaveOverlays(e,t)))}getDocumentsMatchingQuery(e,t,n){return function(e){return vi.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.getDocumentsMatchingDocumentQuery(e,t.path):Bs(t)?this.getDocumentsMatchingCollectionGroupQuery(e,t,n):this.getDocumentsMatchingCollectionQuery(e,t,n)}getNextDocuments(e,t,n,r){return this.remoteDocumentCache.getAllFromCollectionGroup(e,t,n,r).next((i=>{const s=r-i.size>0?this.documentOverlayCache.getOverlaysForCollectionGroup(e,t,n.largestBatchId,r-i.size):Ii.resolve(jo());let o=-1,a=i;return s.next((t=>Ii.forEach(t,((t,n)=>(o<n.largestBatchId&&(o=n.largestBatchId),i.get(t)?Ii.resolve():this.getBaseDocument(e,t,n).next((e=>{a=a.insert(t,e)}))))).next((()=>this.populateOverlays(e,t,i))).next((()=>this.computeViews(e,a,t,Wo()))).next((e=>({batchId:o,changes:Bo(e)})))))}))}getDocumentsMatchingDocumentQuery(e,t){return this.getDocument(e,new vi(t)).next((e=>{let t=Vo();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}getDocumentsMatchingCollectionGroupQuery(e,t,n){const r=t.collectionGroup;let i=Vo();return this.indexManager.getCollectionParents(e,r).next((s=>Ii.forEach(s,(s=>{const o=function(e,t){return new Ds(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.getDocumentsMatchingCollectionQuery(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}getDocumentsMatchingCollectionQuery(e,t,n){let r;return this.remoteDocumentCache.getAllFromCollection(e,t.path,n).next((i=>(r=i,this.documentOverlayCache.getOverlaysForCollection(e,t.path,n.largestBatchId)))).next((e=>{e.forEach(((e,t)=>{const n=t.getKey();null===r.get(n)&&(r=r.insert(n,ps.newInvalidDocument(n)))}));let n=Vo();return r.forEach(((r,i)=>{const s=e.get(r);void 0!==s&&_o(s.mutation,i,Mi.empty(),hi.now()),Gs(t,i)&&(n=n.insert(r,i))})),n}))}getBaseDocument(e,t,n){return null===n||1===n.mutation.type?this.remoteDocumentCache.getEntry(e,t):Ii.resolve(ps.newInvalidDocument(t))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class el{constructor(e){this.wt=e,this.Jn=new Map,this.Yn=new Map}getBundleMetadata(e,t){return Ii.resolve(this.Jn.get(t))}saveBundleMetadata(e,t){var n;return this.Jn.set(t.id,{id:(n=t).id,version:n.version,createTime:ha(n.createTime)}),Ii.resolve()}getNamedQuery(e,t){return Ii.resolve(this.Yn.get(t))}saveNamedQuery(e,t){return this.Yn.set(t.name,function(e){return{name:e.name,query:Ha(e.bundledQuery),readTime:ha(e.readTime)}}(t)),Ii.resolve()}}
/**
 * @license
 * Copyright 2022 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class tl{constructor(){this.overlays=new Ni(vi.comparator),this.Xn=new Map}getOverlay(e,t){return Ii.resolve(this.overlays.get(t))}getOverlays(e,t){const n=jo();return Ii.forEach(t,(t=>this.getOverlay(e,t).next((e=>{null!==e&&n.set(t,e)})))).next((()=>n))}saveOverlays(e,t,n){return n.forEach(((n,r)=>{this.ie(e,t,r)})),Ii.resolve()}removeOverlaysForBatchId(e,t,n){const r=this.Xn.get(n);return void 0!==r&&(r.forEach((e=>this.overlays=this.overlays.remove(e))),this.Xn.delete(n)),Ii.resolve()}getOverlaysForCollection(e,t,n){const r=jo(),i=t.length+1,s=new vi(t.child("")),o=this.overlays.getIteratorFrom(s);for(;o.hasNext();){const e=o.getNext().value,s=e.getKey();if(!t.isPrefixOf(s.path))break;s.path.length===i&&e.largestBatchId>n&&r.set(e.getKey(),e)}return Ii.resolve(r)}getOverlaysForCollectionGroup(e,t,n,r){let i=new Ni(((e,t)=>e-t));const s=this.overlays.getIterator();for(;s.hasNext();){const e=s.getNext().value;if(e.getKey().getCollectionGroup()===t&&e.largestBatchId>n){let t=i.get(e.largestBatchId);null===t&&(t=jo(),i=i.insert(e.largestBatchId,t)),t.set(e.getKey(),e)}}const o=jo(),a=i.getIterator();for(;a.hasNext();)if(a.getNext().value.forEach(((e,t)=>o.set(e,t))),o.size()>=r)break;return Ii.resolve(o)}ie(e,t,n){const r=this.overlays.get(n.key);if(null!==r){const e=this.Xn.get(r.largestBatchId).delete(n.key);this.Xn.set(r.largestBatchId,e)}this.overlays=this.overlays.insert(n.key,new ja(t,n));let i=this.Xn.get(t);void 0===i&&(i=Wo(),this.Xn.set(t,i)),this.Xn.set(t,i.add(n.key))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class nl{constructor(){this.Zn=new Di(rl.ts),this.es=new Di(rl.ns)}isEmpty(){return this.Zn.isEmpty()}addReference(e,t){const n=new rl(e,t);this.Zn=this.Zn.add(n),this.es=this.es.add(n)}ss(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.rs(new rl(e,t))}os(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new vi(new pi([])),n=new rl(t,e),r=new rl(t,e+1),i=[];return this.es.forEachInRange([n,r],(e=>{this.rs(e),i.push(e.key)})),i}cs(){this.Zn.forEach((e=>this.rs(e)))}rs(e){this.Zn=this.Zn.delete(e),this.es=this.es.delete(e)}hs(e){const t=new vi(new pi([])),n=new rl(t,e),r=new rl(t,e+1);let i=Wo();return this.es.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new rl(e,0),n=this.Zn.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class rl{constructor(e,t){this.key=e,this.ls=t}static ts(e,t){return vi.comparator(e.key,t.key)||ci(e.ls,t.ls)}static ns(e,t){return ci(e.ls,t.ls)||vi.comparator(e.key,t.key)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class il{constructor(e,t){this.indexManager=e,this.referenceDelegate=t,this.mutationQueue=[],this.fs=1,this.ds=new Di(rl.ts)}checkEmpty(e){return Ii.resolve(0===this.mutationQueue.length)}addMutationBatch(e,t,n,r){const i=this.fs;this.fs++,this.mutationQueue.length>0&&this.mutationQueue[this.mutationQueue.length-1];const s=new Va(i,t,n,r);this.mutationQueue.push(s);for(const o of r)this.ds=this.ds.add(new rl(o.key,i)),this.indexManager.addToCollectionParentIndex(e,o.key.path.popLast());return Ii.resolve(s)}lookupMutationBatch(e,t){return Ii.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.ws(n),i=r<0?0:r;return Ii.resolve(this.mutationQueue.length>i?this.mutationQueue[i]:null)}getHighestUnacknowledgedBatchId(){return Ii.resolve(0===this.mutationQueue.length?-1:this.fs-1)}getAllMutationBatches(e){return Ii.resolve(this.mutationQueue.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new rl(t,0),r=new rl(t,Number.POSITIVE_INFINITY),i=[];return this.ds.forEachInRange([n,r],(e=>{const t=this._s(e.ls);i.push(t)})),Ii.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new Di(ci);return t.forEach((e=>{const t=new rl(e,0),r=new rl(e,Number.POSITIVE_INFINITY);this.ds.forEachInRange([t,r],(e=>{n=n.add(e.ls)}))})),Ii.resolve(this.gs(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;vi.isDocumentKey(i)||(i=i.child(""));const s=new rl(new vi(i),0);let o=new Di(ci);return this.ds.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.ls)),!0)}),s),Ii.resolve(this.gs(o))}gs(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Zr(0===this.ys(t.batchId,"removed")),this.mutationQueue.shift();let n=this.ds;return Ii.forEach(t.mutations,(r=>{const i=new rl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ds=n}))}In(e){}containsKey(e,t){const n=new rl(t,0),r=this.ds.firstAfterOrEqual(n);return Ii.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.mutationQueue.length,Ii.resolve()}ys(e,t){return this.ws(e)}ws(e){return 0===this.mutationQueue.length?0:e-this.mutationQueue[0].batchId}_s(e){const t=this.ws(e);return t<0||t>=this.mutationQueue.length?null:this.mutationQueue[t]}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class sl{constructor(e){this.ps=e,this.docs=new Ni(vi.comparator),this.size=0}setIndexManager(e){this.indexManager=e}addEntry(e,t){const n=t.key,r=this.docs.get(n),i=r?r.size:0,s=this.ps(t);return this.docs=this.docs.insert(n,{document:t.mutableCopy(),size:s}),this.size+=s-i,this.indexManager.addToCollectionParentIndex(e,n.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return Ii.resolve(n?n.document.mutableCopy():ps.newInvalidDocument(t))}getEntries(e,t){let n=qo();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.mutableCopy():ps.newInvalidDocument(e))})),Ii.resolve(n)}getAllFromCollection(e,t,n){let r=qo();const i=new vi(t.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i}}=s.getNext();if(!t.isPrefixOf(e.path))break;e.path.length>t.length+1||Ei(bi(i),n)<=0||(r=r.insert(i.key,i.mutableCopy()))}return Ii.resolve(r)}getAllFromCollectionGroup(e,t,n,r){Gr()}Is(e,t){return Ii.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new ol(this)}getSize(e){return Ii.resolve(this.size)}}class ol extends Qa{constructor(e){super(),this.zn=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.isValidDocument()?t.push(this.zn.addEntry(e,r)):this.zn.removeEntry(n)})),Ii.waitFor(t)}getFromCache(e,t){return this.zn.getEntry(e,t)}getAllFromCache(e,t){return this.zn.getEntries(e,t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class al{constructor(e){this.persistence=e,this.Ts=new Fo((e=>vs(e)),ws),this.lastRemoteSnapshotVersion=di.min(),this.highestTargetId=0,this.Es=0,this.As=new nl,this.targetCount=0,this.Rs=Xa.An()}forEachTarget(e,t){return this.Ts.forEach(((e,n)=>t(n))),Ii.resolve()}getLastRemoteSnapshotVersion(e){return Ii.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return Ii.resolve(this.Es)}allocateTargetId(e){return this.highestTargetId=this.Rs.next(),Ii.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.Es&&(this.Es=t),Ii.resolve()}vn(e){this.Ts.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Rs=new Xa(t),this.highestTargetId=t),e.sequenceNumber>this.Es&&(this.Es=e.sequenceNumber)}addTargetData(e,t){return this.vn(t),this.targetCount+=1,Ii.resolve()}updateTargetData(e,t){return this.vn(t),Ii.resolve()}removeTargetData(e,t){return this.Ts.delete(t.target),this.As.us(t.targetId),this.targetCount-=1,Ii.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Ts.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Ts.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),Ii.waitFor(i).next((()=>r))}getTargetCount(e){return Ii.resolve(this.targetCount)}getTargetData(e,t){const n=this.Ts.get(t)||null;return Ii.resolve(n)}addMatchingKeys(e,t,n){return this.As.ss(t,n),Ii.resolve()}removeMatchingKeys(e,t,n){this.As.os(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),Ii.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.As.us(t),Ii.resolve()}getMatchingKeysForTargetId(e,t){const n=this.As.hs(t);return Ii.resolve(n)}containsKey(e,t){return Ii.resolve(this.As.containsKey(t))}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ll{constructor(e,t){this.bs={},this.overlays={},this.Ps=new xi(0),this.vs=!1,this.vs=!0,this.referenceDelegate=e(this),this.Vs=new al(this),this.indexManager=new Wa,this.remoteDocumentCache=function(e){return new sl(e)}((e=>this.referenceDelegate.Ss(e))),this.wt=new za(t),this.Ds=new el(this.wt)}start(){return Promise.resolve()}shutdown(){return this.vs=!1,Promise.resolve()}get started(){return this.vs}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(e){return this.indexManager}getDocumentOverlayCache(e){let t=this.overlays[e.toKey()];return t||(t=new tl,this.overlays[e.toKey()]=t),t}getMutationQueue(e,t){let n=this.bs[e.toKey()];return n||(n=new il(t,this.referenceDelegate),this.bs[e.toKey()]=n),n}getTargetCache(){return this.Vs}getRemoteDocumentCache(){return this.remoteDocumentCache}getBundleCache(){return this.Ds}runTransaction(e,t,n){zr("MemoryPersistence","Starting transaction:",e);const r=new cl(this.Ps.next());return this.referenceDelegate.Cs(),n(r).next((e=>this.referenceDelegate.xs(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ns(e,t){return Ii.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class cl extends Ti{constructor(e){super(),this.currentSequenceNumber=e}}class ul{constructor(e){this.persistence=e,this.ks=new nl,this.Os=null}static Ms(e){return new ul(e)}get Fs(){if(this.Os)return this.Os;throw Gr()}addReference(e,t,n){return this.ks.addReference(n,t),this.Fs.delete(n.toString()),Ii.resolve()}removeReference(e,t,n){return this.ks.removeReference(n,t),this.Fs.add(n.toString()),Ii.resolve()}markPotentiallyOrphaned(e,t){return this.Fs.add(t.toString()),Ii.resolve()}removeTarget(e,t){this.ks.us(t.targetId).forEach((e=>this.Fs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.Fs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Cs(){this.Os=new Set}xs(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return Ii.forEach(this.Fs,(n=>{const r=vi.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r,di.min())}))})).next((()=>(this.Os=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.Fs.delete(t.toString()):this.Fs.add(t.toString())}))}Ss(e){return 0}$s(e,t){return Ii.or([()=>Ii.resolve(this.ks.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ns(e,t)])}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class hl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.Pi=n,this.vi=r}static Vi(e,t){let n=Wo(),r=Wo();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new hl(e,t.fromCache,n,r)}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class dl{constructor(){this.Si=!1}initialize(e,t){this.Di=e,this.indexManager=t,this.Si=!0}getDocumentsMatchingQuery(e,t,n,r){return this.Ci(e,t).next((i=>i||this.xi(e,t,r,n))).next((n=>n||this.Ni(e,t)))}Ci(e,t){return Ii.resolve(null)}xi(e,t,n,r){return qs(t)||r.isEqual(di.min())?this.Ni(e,t):this.Di.getDocuments(e,n).next((i=>{const s=this.ki(t,i);return this.Oi(t,s,n,r)?this.Ni(e,t):($r()<=o["in"].DEBUG&&zr("QueryEngine","Re-using previous result from %s to execute query: %s",r.toString(),Ws(t)),this.Mi(e,s,t,wi(r,-1)))}))}ki(e,t){let n=new Di(Xs(e));return t.forEach(((t,r)=>{Gs(e,r)&&(n=n.add(r))})),n}Oi(e,t,n,r){if(null===e.limit)return!1;if(n.size!==t.size)return!0;const i="F"===e.limitType?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Ni(e,t){return $r()<=o["in"].DEBUG&&zr("QueryEngine","Using full collection scan to execute query:",Ws(t)),this.Di.getDocumentsMatchingQuery(e,t,_i.min())}Mi(e,t,n,r){return this.Di.getDocumentsMatchingQuery(e,n,r).next((e=>(t.forEach((t=>{e=e.insert(t.key,t)})),e)))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class fl{constructor(e,t,n,r){this.persistence=e,this.Fi=t,this.wt=r,this.$i=new Ni(ci),this.Bi=new Fo((e=>vs(e)),ws),this.Li=new Map,this.Ui=e.getRemoteDocumentCache(),this.Vs=e.getTargetCache(),this.Ds=e.getBundleCache(),this.qi(n)}qi(e){this.documentOverlayCache=this.persistence.getDocumentOverlayCache(e),this.indexManager=this.persistence.getIndexManager(e),this.mutationQueue=this.persistence.getMutationQueue(e,this.indexManager),this.localDocuments=new Ja(this.Ui,this.mutationQueue,this.documentOverlayCache,this.indexManager),this.Ui.setIndexManager(this.indexManager),this.Fi.initialize(this.localDocuments,this.indexManager)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.$i)))}}function pl(e,t,n,r){return new fl(e,t,n,r)}async function gl(e,t){const n=Xr(e);return await n.persistence.runTransaction("Handle user change","readonly",(e=>{let r;return n.mutationQueue.getAllMutationBatches(e).next((i=>(r=i,n.qi(t),n.mutationQueue.getAllMutationBatches(e)))).next((t=>{const i=[],s=[];let o=Wo();for(const e of r){i.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){s.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return n.localDocuments.getDocuments(e,o).next((e=>({Ki:e,removedBatchIds:i,addedBatchIds:s})))}))}))}function ml(e,t){const n=Xr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Ui.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=Ii.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Zr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&(t.setReadTime(n.commitVersion),r.addEntry(t)))}))})),o.next((()=>e.mutationQueue.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t.batch.batchId))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,function(e){let t=Wo();for(let n=0;n<e.mutationResults.length;++n)e.mutationResults[n].transformResults.length>0&&(t=t.add(e.batch.mutations[n].key));return t}(t)))).next((()=>n.localDocuments.getDocuments(e,r)))}))}function vl(e){const t=Xr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.Vs.getLastRemoteSnapshotVersion(e)))}function yl(e,t){const n=Xr(e),r=t.snapshotVersion;let i=n.$i;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Ui.newChangeBuffer({trackRemovals:!0});i=n.$i;const o=[];t.targetChanges.forEach(((s,a)=>{const l=i.get(a);if(!l)return;o.push(n.Vs.removeMatchingKeys(e,s.removedDocuments,a).next((()=>n.Vs.addMatchingKeys(e,s.addedDocuments,a))));let c=l.withSequenceNumber(e.currentSequenceNumber);t.targetMismatches.has(a)?c=c.withResumeToken(qi.EMPTY_BYTE_STRING,di.min()).withLastLimboFreeSnapshotVersion(di.min()):s.resumeToken.approximateByteSize()>0&&(c=c.withResumeToken(s.resumeToken,r)),i=i.insert(a,c),function(e,t,n){return 0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(l,c,s)&&o.push(n.Vs.updateTargetData(e,c))}));let a=qo(),l=Wo();if(t.documentUpdates.forEach((r=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(wl(e,s,t.documentUpdates).next((e=>{a=e.Gi,l=e.Qi}))),!r.isEqual(di.min())){const t=n.Vs.getLastRemoteSnapshotVersion(e).next((t=>n.Vs.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return Ii.waitFor(o).next((()=>s.apply(e))).next((()=>n.localDocuments.getLocalViewOfDocuments(e,a,l))).next((()=>a))})).then((e=>(n.$i=i,e)))}function wl(e,t,n){let r=Wo(),i=Wo();return n.forEach((e=>r=r.add(e))),t.getEntries(e,r).next((e=>{let r=qo();return n.forEach(((n,s)=>{const o=e.get(n);s.isFoundDocument()!==o.isFoundDocument()&&(i=i.add(n)),s.isNoDocument()&&s.version.isEqual(di.min())?(t.removeEntry(n,s.readTime),r=r.insert(n,s)):!o.isValidDocument()||s.version.compareTo(o.version)>0||0===s.version.compareTo(o.version)&&o.hasPendingWrites?(t.addEntry(s),r=r.insert(n,s)):zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",o.version," Watch version:",s.version)})),{Gi:r,Qi:i}}))}function bl(e,t){const n=Xr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.mutationQueue.getNextMutationBatchAfterBatchId(e,t))))}function _l(e,t){const n=Xr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.Vs.getTargetData(e,t).next((i=>i?(r=i,Ii.resolve(r)):n.Vs.allocateTargetId(e).next((i=>(r=new $a(t,i,0,e.currentSequenceNumber),n.Vs.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.$i.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.$i=n.$i.insert(e.targetId,e),n.Bi.set(t,e.targetId)),e}))}async function El(e,t,n){const r=Xr(e),i=r.$i.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Ci(e))throw e;zr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.$i=r.$i.remove(t),r.Bi.delete(i.target)}function Sl(e,t,n){const r=Xr(e);let i=di.min(),s=Wo();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Xr(e),i=r.Bi.get(n);return void 0!==i?Ii.resolve(r.$i.get(i)):r.Vs.getTargetData(t,n)}(r,e,$s(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.Vs.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Fi.getDocumentsMatchingQuery(e,t,n?i:di.min(),n?s:Wo()))).next((e=>(Tl(r,Zs(t),e),{documents:e,ji:s})))))}function Tl(e,t,n){let r=di.min();n.forEach(((e,t)=>{t.readTime.compareTo(r)>0&&(r=t.readTime)})),e.Li.set(t,r)}class kl{constructor(){this.activeTargetIds=Zo()}Xi(e){this.activeTargetIds=this.activeTargetIds.add(e)}Zi(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Yi(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Il{constructor(){this.Fr=new kl,this.$r={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.Fr.Xi(e),this.$r[e]||"not-current"}updateQueryState(e,t,n){this.$r[e]=t}removeLocalQueryTarget(e){this.Fr.Zi(e)}isLocalQueryTarget(e){return this.Fr.activeTargetIds.has(e)}clearQueryState(e){delete this.$r[e]}getAllActiveQueryTargets(){return this.Fr.activeTargetIds}isActiveQueryTarget(e){return this.Fr.activeTargetIds.has(e)}start(){return this.Fr=new kl,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(e){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Cl{Br(e){}shutdown(){}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class xl{constructor(){this.Lr=()=>this.Ur(),this.qr=()=>this.Kr(),this.Gr=[],this.Qr()}Br(e){this.Gr.push(e)}shutdown(){window.removeEventListener("online",this.Lr),window.removeEventListener("offline",this.qr)}Qr(){window.addEventListener("online",this.Lr),window.addEventListener("offline",this.qr)}Ur(){zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.Gr)e(0)}Kr(){zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.Gr)e(1)}static V(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Al={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Rl{constructor(e){this.jr=e.jr,this.Wr=e.Wr}zr(e){this.Hr=e}Jr(e){this.Yr=e}onMessage(e){this.Xr=e}close(){this.Wr()}send(e){this.jr(e)}Zr(){this.Hr()}eo(e){this.Yr(e)}no(e){this.Xr(e)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Ol extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.so=t+"://"+e.host,this.io="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}ro(e,t,n,r,i){const s=this.oo(e,t);zr("RestConnection","Sending: ",s,n);const o={};return this.uo(o,r,i),this.co(e,s,o,n).then((e=>(zr("RestConnection","Received: ",e),e)),(t=>{throw Kr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ao(e,t,n,r,i,s){return this.ro(e,t,n,r,i)}uo(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+Br,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}oo(e,t){const n=Al[e];return`${this.so}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}co(e,t,n,r){return new Promise(((i,s)=>{const o=new qr;o.listenOnce(Lr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Nr.NO_ERROR:const t=o.getResponseJson();zr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Nr.TIMEOUT:zr("Connection",'RPC "'+e+'" timed out'),s(new Yr(Qr.DEADLINE_EXCEEDED,"Request time out"));break;case Nr.HTTP_ERROR:const n=o.getStatus();if(zr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Qr).indexOf(t)>=0?t:Qr.UNKNOWN}(e.status);s(new Yr(t,e.message))}else s(new Yr(Qr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Yr(Qr.UNAVAILABLE,"Connection failed."));break;default:Gr()}}finally{zr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}ho(e,t,n){const r=[this.so,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Rr(),s=Or(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Fr({})),this.uo(o.initMessageHeaders,t,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const l=r.join("");zr("Connection","Creating WebChannel: "+l,o);const c=i.createWebChannel(l,o);let u=!1,h=!1;const d=new Rl({jr:e=>{h?zr("Connection","Not sending because WebChannel is closed:",e):(u||(zr("Connection","Opening WebChannel transport."),c.open(),u=!0),zr("Connection","WebChannel sending:",e),c.send(e))},Wr:()=>c.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(c,Mr.EventType.OPEN,(()=>{h||zr("Connection","WebChannel transport opened.")})),f(c,Mr.EventType.CLOSE,(()=>{h||(h=!0,zr("Connection","WebChannel transport closed"),d.eo())})),f(c,Mr.EventType.ERROR,(e=>{h||(h=!0,Kr("Connection","WebChannel transport errored:",e),d.eo(new Yr(Qr.UNAVAILABLE,"The operation could not be completed")))})),f(c,Mr.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];Zr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){zr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=No[e];if(void 0!==t)return Do(t)}(e),n=i.message;void 0===t&&(t=Qr.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,d.eo(new Yr(t,n)),c.close()}else zr("Connection","WebChannel received:",n),d.no(n)}})),f(s,Pr.STAT_EVENT,(e=>{e.stat===Dr.PROXY?zr("Connection","Detected buffering proxy"):e.stat===Dr.NOPROXY&&zr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.Zr()}),0),d}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Nl(){return"undefined"!=typeof document?document:null}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function Ll(e){return new aa(e,!0)}class Pl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.js=e,this.timerId=t,this.lo=n,this.fo=r,this._o=i,this.wo=0,this.mo=null,this.yo=Date.now(),this.reset()}reset(){this.wo=0}po(){this.wo=this._o}Io(e){this.cancel();const t=Math.floor(this.wo+this.To()),n=Math.max(0,Date.now()-this.yo),r=Math.max(0,t-n);r>0&&zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.wo} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.mo=this.js.enqueueAfterDelay(this.timerId,r,(()=>(this.yo=Date.now(),e()))),this.wo*=this.fo,this.wo<this.lo&&(this.wo=this.lo),this.wo>this._o&&(this.wo=this._o)}Eo(){null!==this.mo&&(this.mo.skipDelay(),this.mo=null)}cancel(){null!==this.mo&&(this.mo.cancel(),this.mo=null)}To(){return(Math.random()-.5)*this.wo}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Dl{constructor(e,t,n,r,i,s,o,a){this.js=e,this.Ao=n,this.Ro=r,this.bo=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.Po=0,this.vo=null,this.Vo=null,this.stream=null,this.So=new Pl(e,t)}Do(){return 1===this.state||5===this.state||this.Co()}Co(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.xo()}async stop(){this.Do()&&await this.close(0)}No(){this.state=0,this.So.reset()}ko(){this.Co()&&null===this.vo&&(this.vo=this.js.enqueueAfterDelay(this.Ao,6e4,(()=>this.Oo())))}Mo(e){this.Fo(),this.stream.send(e)}async Oo(){if(this.Co())return this.close(0)}Fo(){this.vo&&(this.vo.cancel(),this.vo=null)}$o(){this.Vo&&(this.Vo.cancel(),this.Vo=null)}async close(e,t){this.Fo(),this.$o(),this.So.cancel(),this.Po++,4!==e?this.So.reset():t&&t.code===Qr.RESOURCE_EXHAUSTED?(Hr(t.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.So.po()):t&&t.code===Qr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Bo(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Jr(t)}Bo(){}auth(){this.state=1;const e=this.Lo(this.Po),t=this.Po;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.Po===t&&this.Uo(e,n)}),(t=>{e((()=>{const e=new Yr(Qr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.qo(e)}))}))}Uo(e,t){const n=this.Lo(this.Po);this.stream=this.Ko(e,t),this.stream.zr((()=>{n((()=>(this.state=2,this.Vo=this.js.enqueueAfterDelay(this.Ro,1e4,(()=>(this.Co()&&(this.state=3),Promise.resolve()))),this.listener.zr())))})),this.stream.Jr((e=>{n((()=>this.qo(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}xo(){this.state=5,this.So.Io((async()=>{this.state=0,this.start()}))}qo(e){return zr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Lo(e){return t=>{this.js.enqueueAndForget((()=>this.Po===e?t():(zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fl extends Dl{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.wt=i}Ko(e,t){return this.bo.ho("Listen",e,t)}onMessage(e){this.So.reset();const t=_a(this.wt,e),n=function(e){if(!("targetChange"in e))return di.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?di.min():t.readTime?ha(t.readTime):di.min()}(e);return this.listener.Go(t,n)}Qo(e){const t={};t.database=ya(this.wt),t.addTarget=function(e,t){let n;const r=t.target;return n=bs(r)?{documents:Ta(e,r)}:{query:ka(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=ca(e,t.resumeToken):t.snapshotVersion.compareTo(di.min())>0&&(n.readTime=la(e,t.snapshotVersion.toTimestamp())),n}(this.wt,e);const n=Ca(this.wt,e);n&&(t.labels=n),this.Mo(t)}jo(e){const t={};t.database=ya(this.wt),t.removeTarget=e,this.Mo(t)}}class Ml extends Dl{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.wt=i,this.Wo=!1}get zo(){return this.Wo}start(){this.Wo=!1,this.lastStreamToken=void 0,super.start()}Bo(){this.Wo&&this.Ho([])}Ko(e,t){return this.bo.ho("Write",e,t)}onMessage(e){if(Zr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Wo){this.So.reset();const t=Sa(e.writeResults,e.commitTime),n=ha(e.commitTime);return this.listener.Jo(n,t)}return Zr(!e.writeResults||0===e.writeResults.length),this.Wo=!0,this.listener.Yo()}Xo(){const e={};e.database=ya(this.wt),this.Mo(e)}Ho(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>Ea(this.wt,e)))};this.Mo(t)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class ql extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.bo=n,this.wt=r,this.Zo=!1}tu(){if(this.Zo)throw new Yr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}ro(e,t,n){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.bo.ro(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Yr(Qr.UNKNOWN,e.toString())}))}ao(e,t,n,r){return this.tu(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([i,s])=>this.bo.ao(e,t,n,i,s,r))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Qr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Yr(Qr.UNKNOWN,e.toString())}))}terminate(){this.Zo=!0}}class Ul{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.eu=0,this.nu=null,this.su=!0}iu(){0===this.eu&&(this.ru("Unknown"),this.nu=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.nu=null,this.ou("Backend didn't respond within 10 seconds."),this.ru("Offline"),Promise.resolve()))))}uu(e){"Online"===this.state?this.ru("Unknown"):(this.eu++,this.eu>=1&&(this.cu(),this.ou(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.ru("Offline")))}set(e){this.cu(),this.eu=0,"Online"===e&&(this.su=!1),this.ru(e)}ru(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}ou(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.su?(Hr(t),this.su=!1):zr("OnlineStateTracker",t)}cu(){null!==this.nu&&(this.nu.cancel(),this.nu=null)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Vl{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.au=[],this.hu=new Map,this.lu=new Set,this.fu=[],this.du=i,this.du.Br((e=>{n.enqueueAndForget((async()=>{Zl(this)&&(zr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Xr(e);t.lu.add(4),await jl(t),t._u.set("Unknown"),t.lu.delete(4),await Bl(t)}(this))}))})),this._u=new Ul(n,r)}}async function Bl(e){if(Zl(e))for(const t of e.fu)await t(!0)}async function jl(e){for(const t of e.fu)await t(!1)}function $l(e,t){const n=Xr(e);n.hu.has(t.targetId)||(n.hu.set(t.targetId,t),Gl(n)?Wl(n):fc(n).Co()&&Hl(n,t))}function zl(e,t){const n=Xr(e),r=fc(n);n.hu.delete(t),r.Co()&&Kl(n,t),0===n.hu.size&&(r.Co()?r.ko():Zl(n)&&n._u.set("Unknown"))}function Hl(e,t){e.wu.Nt(t.targetId),fc(e).Qo(t)}function Kl(e,t){e.wu.Nt(t),fc(e).jo(t)}function Wl(e){e.wu=new na({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),te:t=>e.hu.get(t)||null}),fc(e).start(),e._u.iu()}function Gl(e){return Zl(e)&&!fc(e).Do()&&e.hu.size>0}function Zl(e){return 0===Xr(e).lu.size}function Xl(e){e.wu=void 0}async function Ql(e){e.hu.forEach(((t,n)=>{Hl(e,t)}))}async function Yl(e,t){Xl(e),Gl(e)?(e._u.uu(t),Wl(e)):e._u.set("Unknown")}async function Jl(e,t,n){if(e._u.set("Online"),t instanceof ea&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.hu.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.hu.delete(r),e.wu.removeTarget(r))}(e,t)}catch(n){zr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ec(e,n)}else if(t instanceof Yo?e.wu.Ut(t):t instanceof Jo?e.wu.zt(t):e.wu.Gt(t),!n.isEqual(di.min()))try{const t=await vl(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.wu.Yt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.hu.get(r);i&&e.hu.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.hu.get(t);if(!n)return;e.hu.set(t,n.withResumeToken(qi.EMPTY_BYTE_STRING,n.snapshotVersion)),Kl(e,t);const r=new $a(n.target,t,1,n.sequenceNumber);Hl(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){zr("RemoteStore","Failed to raise snapshot:",t),await ec(e,t)}}async function ec(e,t,n){if(!Ci(t))throw t;e.lu.add(1),await jl(e),e._u.set("Offline"),n||(n=()=>vl(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{zr("RemoteStore","Retrying IndexedDB access"),await n(),e.lu.delete(1),await Bl(e)}))}function tc(e,t){return t().catch((n=>ec(e,n,t)))}async function nc(e){const t=Xr(e),n=pc(t);let r=t.au.length>0?t.au[t.au.length-1].batchId:-1;for(;rc(t);)try{const e=await bl(t.localStore,r);if(null===e){0===t.au.length&&n.ko();break}r=e.batchId,ic(t,e)}catch(e){await ec(t,e)}sc(t)&&oc(t)}function rc(e){return Zl(e)&&e.au.length<10}function ic(e,t){e.au.push(t);const n=pc(e);n.Co()&&n.zo&&n.Ho(t.mutations)}function sc(e){return Zl(e)&&!pc(e).Do()&&e.au.length>0}function oc(e){pc(e).start()}async function ac(e){pc(e).Xo()}async function lc(e){const t=pc(e);for(const n of e.au)t.Ho(n.mutations)}async function cc(e,t,n){const r=e.au.shift(),i=Ba.from(r,t,n);await tc(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await nc(e)}async function uc(e,t){t&&pc(e).zo&&await async function(e,t){if(n=t.code,Po(n)&&n!==Qr.ABORTED){const n=e.au.shift();pc(e).No(),await tc(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await nc(e)}var n}(e,t),sc(e)&&oc(e)}async function hc(e,t){const n=Xr(e);n.asyncQueue.verifyOperationInProgress(),zr("RemoteStore","RemoteStore received new credentials");const r=Zl(n);n.lu.add(3),await jl(n),r&&n._u.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.lu.delete(3),await Bl(n)}async function dc(e,t){const n=Xr(e);t?(n.lu.delete(2),await Bl(n)):t||(n.lu.add(2),await jl(n),n._u.set("Unknown"))}function fc(e){return e.mu||(e.mu=function(e,t,n){const r=Xr(e);return r.tu(),new Fl(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)
/**
 * @license
 * Copyright 2018 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}(e.datastore,e.asyncQueue,{zr:Ql.bind(null,e),Jr:Yl.bind(null,e),Go:Jl.bind(null,e)}),e.fu.push((async t=>{t?(e.mu.No(),Gl(e)?Wl(e):e._u.set("Unknown")):(await e.mu.stop(),Xl(e))}))),e.mu}function pc(e){return e.gu||(e.gu=function(e,t,n){const r=Xr(e);return r.tu(),new Ml(t,r.bo,r.authCredentials,r.appCheckCredentials,r.wt,n)}(e.datastore,e.asyncQueue,{zr:ac.bind(null,e),Jr:uc.bind(null,e),Yo:lc.bind(null,e),Jo:cc.bind(null,e)}),e.fu.push((async t=>{t?(e.gu.No(),await nc(e)):(await e.gu.stop(),e.au.length>0&&(zr("RemoteStore",`Stopping write stream with ${e.au.length} pending writes`),e.au=[]))}))),e.gu
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */}class gc{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Jr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new gc(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Yr(Qr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function mc(e,t){if(Hr("AsyncQueue",`${t}: ${e}`),Ci(e))return new Yr(Qr.UNAVAILABLE,`${t}: ${e}`);throw e}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class vc{constructor(e){this.comparator=e?(t,n)=>e(t,n)||vi.comparator(t.key,n.key):(e,t)=>vi.comparator(e.key,t.key),this.keyedMap=Vo(),this.sortedSet=new Ni(this.comparator)}static emptySet(e){return new vc(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof vc))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new vc;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class yc{constructor(){this.yu=new Ni(vi.comparator)}track(e){const t=e.doc.key,n=this.yu.get(t);n?0!==e.type&&3===n.type?this.yu=this.yu.insert(t,e):3===e.type&&1!==n.type?this.yu=this.yu.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.yu=this.yu.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.yu=this.yu.remove(t):1===e.type&&2===n.type?this.yu=this.yu.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.yu=this.yu.insert(t,{type:2,doc:e.doc}):Gr():this.yu=this.yu.insert(t,e)}pu(){const e=[];return this.yu.inorderTraversal(((t,n)=>{e.push(n)})),e}}class wc{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new wc(e,t,vc.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&Hs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class bc{constructor(){this.Iu=void 0,this.listeners=[]}}class _c{constructor(){this.queries=new Fo((e=>Ks(e)),Hs),this.onlineState="Unknown",this.Tu=new Set}}async function Ec(e,t){const n=Xr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new bc),i)try{s.Iu=await n.onListen(r)}catch(e){const n=mc(e,`Initialization of query '${Ws(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.Eu(n.onlineState),s.Iu&&t.Au(s.Iu)&&Ic(n)}async function Sc(e,t){const n=Xr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Tc(e,t){const n=Xr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.Au(i)&&(r=!0);t.Iu=i}}r&&Ic(n)}function kc(e,t,n){const r=Xr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Ic(e){e.Tu.forEach((e=>{e.next()}))}class Cc{constructor(e,t,n){this.query=e,this.Ru=t,this.bu=!1,this.Pu=null,this.onlineState="Unknown",this.options=n||{}}Au(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new wc(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.bu?this.vu(e)&&(this.Ru.next(e),t=!0):this.Vu(e,this.onlineState)&&(this.Su(e),t=!0),this.Pu=e,t}onError(e){this.Ru.error(e)}Eu(e){this.onlineState=e;let t=!1;return this.Pu&&!this.bu&&this.Vu(this.Pu,e)&&(this.Su(this.Pu),t=!0),t}Vu(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.Du||!n)&&(!e.docs.isEmpty()||"Offline"===t)}vu(e){if(e.docChanges.length>0)return!0;const t=this.Pu&&this.Pu.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}Su(e){e=wc.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.bu=!0,this.Ru.next(e)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class xc{constructor(e){this.key=e}}class Ac{constructor(e){this.key=e}}class Rc{constructor(e,t){this.query=e,this.Fu=t,this.$u=null,this.current=!1,this.Bu=Wo(),this.mutatedKeys=Wo(),this.Lu=Xs(e),this.Uu=new vc(this.Lu)}get qu(){return this.Fu}Ku(e,t){const n=t?t.Gu:new yc,r=t?t.Uu:this.Uu;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a="F"===this.query.limitType&&r.size===this.query.limit?r.last():null,l="L"===this.query.limitType&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const c=r.get(e),u=Gs(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Qu(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Lu(u,a)>0||l&&this.Lu(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),null!==this.query.limit)for(;s.size>this.query.limit;){const e="F"===this.query.limitType?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Uu:s,Gu:n,Oi:o,mutatedKeys:i}}Qu(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Uu;this.Uu=e.Uu,this.mutatedKeys=e.mutatedKeys;const i=e.Gu.pu();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Gr()}};return n(e)-n(t)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e.type,t.type)||this.Lu(e.doc,t.doc))),this.ju(n);const s=t?this.Wu():[],o=0===this.Bu.size&&this.current?1:0,a=o!==this.$u;return this.$u=o,0!==i.length||a?{snapshot:new wc(this.query,e.Uu,r,i,e.mutatedKeys,0===o,a,!1),zu:s}:{zu:s}}Eu(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Uu:this.Uu,Gu:new yc,mutatedKeys:this.mutatedKeys,Oi:!1},!1)):{zu:[]}}Hu(e){return!this.Fu.has(e)&&!!this.Uu.has(e)&&!this.Uu.get(e).hasLocalMutations}ju(e){e&&(e.addedDocuments.forEach((e=>this.Fu=this.Fu.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.Fu=this.Fu.delete(e))),this.current=e.current)}Wu(){if(!this.current)return[];const e=this.Bu;this.Bu=Wo(),this.Uu.forEach((e=>{this.Hu(e.key)&&(this.Bu=this.Bu.add(e.key))}));const t=[];return e.forEach((e=>{this.Bu.has(e)||t.push(new Ac(e))})),this.Bu.forEach((n=>{e.has(n)||t.push(new xc(n))})),t}Ju(e){this.Fu=e.ji,this.Bu=Wo();const t=this.Ku(e.documents);return this.applyChanges(t,!0)}Yu(){return wc.fromInitialDocuments(this.query,this.Uu,this.mutatedKeys,0===this.$u)}}class Oc{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Nc{constructor(e){this.key=e,this.Xu=!1}}class Lc{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Zu={},this.tc=new Fo((e=>Ks(e)),Hs),this.ec=new Map,this.nc=new Set,this.sc=new Ni(vi.comparator),this.ic=new Map,this.rc=new nl,this.oc={},this.uc=new Map,this.cc=Xa.Rn(),this.onlineState="Unknown",this.ac=void 0}get isPrimaryClient(){return!0===this.ac}}async function Pc(e,t){const n=Jc(e);let r,i;const s=n.tc.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.Yu();else{const e=await _l(n.localStore,$s(t));n.isPrimaryClient&&$l(n.remoteStore,e);const s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Dc(n,t,r,"current"===s)}return i}async function Dc(e,t,n,r){e.hc=(t,n,r)=>async function(e,t,n,r){let i=t.view.Ku(n);i.Oi&&(i=await Sl(e.localStore,t.query,!1).then((({documents:e})=>t.view.Ku(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Wc(e,t.targetId,o.zu),o.snapshot}(e,t,n,r);const i=await Sl(e.localStore,t,!0),s=new Rc(t,i.ji),o=s.Ku(i.documents),a=Qo.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),l=s.applyChanges(o,e.isPrimaryClient,a);Wc(e,n,l.zu);const c=new Oc(t,n,s);return e.tc.set(t,c),e.ec.has(n)?e.ec.get(n).push(t):e.ec.set(n,[t]),l.snapshot}async function Fc(e,t){const n=Xr(e),r=n.tc.get(t),i=n.ec.get(r.targetId);if(i.length>1)return n.ec.set(r.targetId,i.filter((e=>!Hs(e,t)))),void n.tc.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await El(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),zl(n.remoteStore,r.targetId),Hc(n,r.targetId)})).catch(ki)):(Hc(n,r.targetId),await El(n.localStore,r.targetId,!0))}async function Mc(e,t,n){const r=eu(e);try{const e=await function(e,t){const n=Xr(e),r=hi.now(),i=t.reduce(((e,t)=>e.add(t.key)),Wo());let s,o;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>{let a=qo(),l=Wo();return n.Ui.getEntries(e,i).next((e=>{a=e,a.forEach(((e,t)=>{t.isValidDocument()||(l=l.add(e))}))})).next((()=>n.localDocuments.getOverlayedDocuments(e,a))).next((i=>{s=i;const o=[];for(const e of t){const t=Eo(e,s.get(e.key).overlayedDocument);null!=t&&o.push(new ko(e.key,t,fs(t.value.mapValue),mo.exists(!0)))}return n.mutationQueue.addMutationBatch(e,r,o,t)})).next((t=>{o=t;const r=t.applyToLocalDocumentSet(s,l);return n.documentOverlayCache.saveOverlays(e,t.batchId,r)}))})).then((()=>({batchId:o.batchId,changes:Bo(s)})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.oc[e.currentUser.toKey()];r||(r=new Ni(ci)),r=r.insert(t,n),e.oc[e.currentUser.toKey()]=r}(r,e.batchId,n),await Xc(r,e.changes),await nc(r.remoteStore)}catch(e){const t=mc(e,"Failed to persist write");n.reject(t)}}async function qc(e,t){const n=Xr(e);try{const e=await yl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.ic.get(t);r&&(Zr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.Xu=!0:e.modifiedDocuments.size>0?Zr(r.Xu):e.removedDocuments.size>0&&(Zr(r.Xu),r.Xu=!1))})),await Xc(n,e,t)}catch(e){await ki(e)}}function Uc(e,t,n){const r=Xr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.tc.forEach(((n,r)=>{const i=r.view.Eu(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Xr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.Eu(t)&&(r=!0)})),r&&Ic(n)}(r.eventManager,t),e.length&&r.Zu.Go(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vc(e,t,n){const r=Xr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.ic.get(t),s=i&&i.key;if(s){let e=new Ni(vi.comparator);e=e.insert(s,ps.newNoDocument(s,di.min()));const n=Wo().add(s),i=new Xo(di.min(),new Map,new Di(ci),e,n);await qc(r,i),r.sc=r.sc.remove(s),r.ic.delete(t),Zc(r)}else await El(r.localStore,t,!1).then((()=>Hc(r,t,n))).catch(ki)}async function Bc(e,t){const n=Xr(e),r=t.batch.batchId;try{const e=await ml(n.localStore,t);zc(n,r,null),$c(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Xc(n,e)}catch(e){await ki(e)}}async function jc(e,t,n){const r=Xr(e);try{const e=await function(e,t){const n=Xr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.mutationQueue.lookupMutationBatch(e,t).next((t=>(Zr(null!==t),r=t.keys(),n.mutationQueue.removeMutationBatch(e,t)))).next((()=>n.mutationQueue.performConsistencyCheck(e))).next((()=>n.documentOverlayCache.removeOverlaysForBatchId(e,r,t))).next((()=>n.localDocuments.recalculateAndSaveOverlaysForDocumentKeys(e,r))).next((()=>n.localDocuments.getDocuments(e,r)))}))}(r.localStore,t);zc(r,t,n),$c(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Xc(r,e)}catch(n){await ki(n)}}function $c(e,t){(e.uc.get(t)||[]).forEach((e=>{e.resolve()})),e.uc.delete(t)}function zc(e,t,n){const r=Xr(e);let i=r.oc[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.oc[r.currentUser.toKey()]=i}}function Hc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.ec.get(t))e.tc.delete(r),n&&e.Zu.lc(r,n);e.ec.delete(t),e.isPrimaryClient&&e.rc.us(t).forEach((t=>{e.rc.containsKey(t)||Kc(e,t)}))}function Kc(e,t){e.nc.delete(t.path.canonicalString());const n=e.sc.get(t);null!==n&&(zl(e.remoteStore,n),e.sc=e.sc.remove(t),e.ic.delete(n),Zc(e))}function Wc(e,t,n){for(const r of n)r instanceof xc?(e.rc.addReference(r.key,t),Gc(e,r)):r instanceof Ac?(zr("SyncEngine","Document no longer in limbo: "+r.key),e.rc.removeReference(r.key,t),e.rc.containsKey(r.key)||Kc(e,r.key)):Gr()}function Gc(e,t){const n=t.key,r=n.path.canonicalString();e.sc.get(n)||e.nc.has(r)||(zr("SyncEngine","New document in limbo: "+n),e.nc.add(r),Zc(e))}function Zc(e){for(;e.nc.size>0&&e.sc.size<e.maxConcurrentLimboResolutions;){const t=e.nc.values().next().value;e.nc.delete(t);const n=new vi(pi.fromString(t)),r=e.cc.next();e.ic.set(r,new Nc(n)),e.sc=e.sc.insert(n,r),$l(e.remoteStore,new $a($s(Ms(n.path)),r,2,xi.ot))}}async function Xc(e,t,n){const r=Xr(e),i=[],s=[],o=[];r.tc.isEmpty()||(r.tc.forEach(((e,a)=>{o.push(r.hc(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=hl.Vi(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Zu.Go(i),await async function(e,t){const n=Xr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>Ii.forEach(t,(t=>Ii.forEach(t.Pi,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>Ii.forEach(t.vi,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Ci(e))throw e;zr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.$i.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.$i=n.$i.insert(e,i)}}}(r.localStore,s))}async function Qc(e,t){const n=Xr(e);if(!n.currentUser.isEqual(t)){zr("SyncEngine","User change. New user:",t.toKey());const e=await gl(n.localStore,t);n.currentUser=t,function(e,t){e.uc.forEach((e=>{e.forEach((e=>{e.reject(new Yr(Qr.CANCELLED,t))}))})),e.uc.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Xc(n,e.Ki)}}function Yc(e,t){const n=Xr(e),r=n.ic.get(t);if(r&&r.Xu)return Wo().add(r.key);{let e=Wo();const r=n.ec.get(t);if(!r)return e;for(const t of r){const r=n.tc.get(t);e=e.unionWith(r.view.qu)}return e}}function Jc(e){const t=Xr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=qc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Yc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vc.bind(null,t),t.Zu.Go=Tc.bind(null,t.eventManager),t.Zu.lc=kc.bind(null,t.eventManager),t}function eu(e){const t=Xr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Bc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=jc.bind(null,t),t}class tu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.wt=Ll(e.databaseInfo.databaseId),this.sharedClientState=this.dc(e),this.persistence=this._c(e),await this.persistence.start(),this.localStore=this.wc(e),this.gcScheduler=this.mc(e,this.localStore),this.indexBackfillerScheduler=this.gc(e,this.localStore)}mc(e,t){return null}gc(e,t){return null}wc(e){return pl(this.persistence,new dl,e.initialUser,this.wt)}_c(e){return new ll(ul.Ms,this.wt)}dc(e){return new Il}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class nu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>Uc(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Qc.bind(null,this.syncEngine),await dc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new _c}createDatastore(e){const t=Ll(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ol(r));var r;return function(e,t,n,r){return new ql(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>Uc(this.syncEngine,e,0),s=xl.V()?new xl:new Cl,new Vl(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Lc(e,t,n,r,i,s);return o&&(a.ac=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Xr(e);zr("RemoteStore","RemoteStore shutting down."),t.lu.add(5),await jl(t),t.du.shutdown(),t._u.set("Unknown")}(this.remoteStore)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ru{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.Ic(this.observer.next,e)}error(e){this.observer.error?this.Ic(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}Tc(){this.muted=!0}Ic(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class iu{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Vr.UNAUTHENTICATED,this.clientId=li.I(),this.authCredentialListener=()=>Promise.resolve(),this.appCheckCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{zr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(e=>(zr("FirestoreClient","Received new app check token=",e),this.appCheckCredentialListener(e,this.user))))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}setAppCheckTokenChangeListener(e){this.appCheckCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Yr(Qr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Jr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=mc(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function su(e,t){e.asyncQueue.verifyOperationInProgress(),zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await gl(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function ou(e,t){e.asyncQueue.verifyOperationInProgress();const n=await au(e);zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>hc(t.remoteStore,e))),e.setAppCheckTokenChangeListener(((e,n)=>hc(t.remoteStore,n))),e.onlineComponents=t}async function au(e){return e.offlineComponents||(zr("FirestoreClient","Using default OfflineComponentProvider"),await su(e,new tu)),e.offlineComponents}async function lu(e){return e.onlineComponents||(zr("FirestoreClient","Using default OnlineComponentProvider"),await ou(e,new nu)),e.onlineComponents}function cu(e){return lu(e).then((e=>e.syncEngine))}async function uu(e){const t=await lu(e),n=t.eventManager;return n.onListen=Pc.bind(null,t.syncEngine),n.onUnlisten=Fc.bind(null,t.syncEngine),n}function hu(e,t,n={}){const r=new Jr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new ru({next:s=>{t.enqueueAndForget((()=>Sc(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Yr(Qr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Yr(Qr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Cc(Ms(n.path),s,{includeMetadataChanges:!0,Du:!0});return Ec(e,o)}(await uu(e),e.asyncQueue,t,n,r))),r.promise}function du(e,t,n={}){const r=new Jr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new ru({next:n=>{t.enqueueAndForget((()=>Sc(e,o))),n.fromCache&&"server"===r.source?i.reject(new Yr(Qr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Cc(n,s,{includeMetadataChanges:!0,Du:!0});return Ec(e,o)}(await uu(e),e.asyncQueue,t,n,r))),r.promise}const fu=new Map;
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function pu(e,t,n){if(!n)throw new Yr(Qr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function gu(e,t,n,r){if(!0===t&&!0===r)throw new Yr(Qr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function mu(e){if(!vi.isDocumentKey(e))throw new Yr(Qr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function vu(e){if(vi.isDocumentKey(e))throw new Yr(Qr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function yu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Gr()}function wu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Yr(Qr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=yu(e);throw new Yr(Qr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class bu{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Yr(Qr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Yr(Qr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,gu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class _u{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new bu({}),this._settingsFrozen=!1,e instanceof Wi?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Yr(Qr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new Wi(e.options.projectId)}(e))}get app(){if(!this._app)throw new Yr(Qr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Yr(Qr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new bu(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ti;switch(e.type){case"gapi":const t=e.client;return Zr(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ii(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Yr(Qr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=fu.get(e);t&&(zr("ComponentProvider","Removing Datastore"),fu.delete(e),t.terminate())}(this),Promise.resolve()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Eu{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Tu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Eu(this.firestore,e,this._key)}}class Su{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new Su(this.firestore,e,this._query)}}class Tu extends Su{constructor(e,t,n){super(e,t,Ms(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Eu(this.firestore,null,new vi(e))}withConverter(e){return new Tu(this.firestore,e,this._path)}}function ku(e,t,...n){if(e=(0,a.m9)(e),pu("collection","path",t),e instanceof _u){const r=pi.fromString(t,...n);return vu(r),new Tu(e,null,r)}{if(!(e instanceof Eu||e instanceof Tu))throw new Yr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(pi.fromString(t,...n));return vu(r),new Tu(e.firestore,null,r)}}function Iu(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=li.I()),pu("doc","path",t),e instanceof _u){const r=pi.fromString(t,...n);return mu(r),new Eu(e,null,new vi(r))}{if(!(e instanceof Eu||e instanceof Tu))throw new Yr(Qr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(pi.fromString(t,...n));return mu(r),new Eu(e.firestore,e instanceof Tu?e.converter:null,new vi(r))}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Cu{constructor(){this.Oc=Promise.resolve(),this.Mc=[],this.Fc=!1,this.$c=[],this.Bc=null,this.Lc=!1,this.Uc=!1,this.qc=[],this.So=new Pl(this,"async_queue_retry"),this.Kc=()=>{const e=Nl();e&&zr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.So.Eo()};const e=Nl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Kc)}get isShuttingDown(){return this.Fc}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Gc(),this.Qc(e)}enterRestrictedMode(e){if(!this.Fc){this.Fc=!0,this.Uc=e||!1;const t=Nl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Kc)}}enqueue(e){if(this.Gc(),this.Fc)return new Promise((()=>{}));const t=new Jr;return this.Qc((()=>this.Fc&&this.Uc?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.Mc.push(e),this.jc())))}async jc(){if(0!==this.Mc.length){try{await this.Mc[0](),this.Mc.shift(),this.So.reset()}catch(E){if(!Ci(E))throw E;zr("AsyncQueue","Operation failed with retryable error: "+E)}this.Mc.length>0&&this.So.Io((()=>this.jc()))}}Qc(e){const t=this.Oc.then((()=>(this.Lc=!0,e().catch((e=>{this.Bc=e,this.Lc=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */(e);throw Hr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Lc=!1,e))))));return this.Oc=t,t}enqueueAfterDelay(e,t,n){this.Gc(),this.qc.indexOf(e)>-1&&(t=0);const r=gc.createAndSchedule(this,e,t,n,(e=>this.Wc(e)));return this.$c.push(r),r}Gc(){this.Bc&&Gr()}verifyOperationInProgress(){}async zc(){let e;do{e=this.Oc,await e}while(e!==this.Oc)}Hc(e){for(const t of this.$c)if(t.timerId===e)return!0;return!1}Jc(e){return this.zc().then((()=>{this.$c.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.$c)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.zc()}))}Yc(e){this.qc.push(e)}Wc(e){const t=this.$c.indexOf(e);this.$c.splice(t,1)}}class xu extends _u{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Cu,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Ou(this),this._firestoreClient.terminate()}}function Au(e=(0,i.Mq)()){return(0,i.qX)(e,"firestore").getImmediate()}function Ru(e){return e._firestoreClient||Ou(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Ou(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new Ki(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new iu(e._authCredentials,e._appCheckCredentials,e._queue,r)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Nu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Yr(Qr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new mi(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class Lu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Lu(qi.fromBase64String(e))}catch(e){throw new Yr(Qr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Lu(qi.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Pu{constructor(e){this._methodName=e}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Du{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Yr(Qr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Yr(Qr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ci(this._lat,e._lat)||ci(this._long,e._long)}}
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const Fu=/^__.*__$/;class Mu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ko(e,this.data,this.fieldMask,t,this.fieldTransforms):new To(e,this.data,t,this.fieldTransforms)}}function qu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Gr()}}class Uu{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.wt=n,this.ignoreUndefinedProperties=r,void 0===i&&this.Xc(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get Zc(){return this.settings.Zc}ta(e){return new Uu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.wt,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}ea(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.sa(e),r}ia(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.ta({path:n,na:!1});return r.Xc(),r}ra(e){return this.ta({path:void 0,na:!0})}oa(e){return Xu(e,this.settings.methodName,this.settings.ua||!1,this.path,this.settings.ca)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}Xc(){if(this.path)for(let e=0;e<this.path.length;e++)this.sa(this.path.get(e))}sa(e){if(0===e.length)throw this.oa("Document fields must not be empty");if(qu(this.Zc)&&Fu.test(e))throw this.oa('Document fields cannot begin and end with "__"')}}class Vu{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.wt=n||Ll(e)}aa(e,t,n,r=!1){return new Uu({Zc:e,methodName:t,ca:n,path:mi.emptyPath(),na:!1,ua:r},this.databaseId,this.wt,this.ignoreUndefinedProperties)}}function Bu(e){const t=e._freezeSettings(),n=Ll(e._databaseId);return new Vu(e._databaseId,!!t.ignoreUndefinedProperties,n)}function ju(e,t,n,r,i,s={}){const o=e.aa(s.merge||s.mergeFields?2:0,t,n,i);Ku("Data must be an object, but it was:",o,r);const a=zu(r,o);let l,c;if(s.merge)l=new Mi(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Wu(t,r,n);if(!o.contains(i))throw new Yr(Qr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Qu(e,i)||e.push(i)}l=new Mi(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new Mu(new ds(a),l,c)}function $u(e,t){if(Hu(e=(0,a.m9)(e)))return Ku("Unsupported field value:",t,e),zu(e,t);if(e instanceof Pu)return function(e,t){if(!qu(t.Zc))throw t.oa(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.oa(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.na&&4!==t.Zc)throw t.oa("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=$u(i,t.ra(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return eo(t.wt,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=hi.fromDate(e);return{timestampValue:la(t.wt,n)}}if(e instanceof hi){const n=new hi(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:la(t.wt,n)}}if(e instanceof Du)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Lu)return{bytesValue:ca(t.wt,e._byteString)};if(e instanceof Eu){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.oa(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:da(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.oa(`Unsupported field value: ${yu(e)}`)}(e,t)}function zu(e,t){const n={};return Oi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):Ri(e,((e,r)=>{const i=$u(r,t.ea(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Hu(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof hi||e instanceof Du||e instanceof Lu||e instanceof Eu||e instanceof Pu)}function Ku(e,t,n){if(!Hu(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=yu(n);throw"an object"===r?t.oa(e+" a custom object"):t.oa(e+" "+r)}}function Wu(e,t,n){if((t=(0,a.m9)(t))instanceof Nu)return t._internalPath;if("string"==typeof t)return Zu(e,t);throw Xu("Field path arguments must be of type string or ",e,!1,void 0,n)}const Gu=new RegExp("[~\\*/\\[\\]]");function Zu(e,t,n){if(t.search(Gu)>=0)throw Xu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Nu(...t.split("."))._internalPath}catch(r){throw Xu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Xu(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Yr(Qr.INVALID_ARGUMENT,a+e+l)}function Qu(e,t){return e.some((e=>e.isEqual(t)))}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class Yu{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Eu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new Ju(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(eh("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class Ju extends Yu{data(){return super.data()}}function eh(e,t){return"string"==typeof t?Zu(e,t):t instanceof Nu?t._internalPath:t._delegate._internalPath}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class th{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class nh extends Yu{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new rh(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(eh("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class rh extends nh{data(e={}){return super.data(e)}}class ih{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new th(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new rh(this._firestore,this._userDataWriter,n.key,n,new th(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Yr(Qr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new rh(e._firestore,e._userDataWriter,n.doc.key,n.doc,new th(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new rh(e._firestore,e._userDataWriter,t.doc.key,t.doc,new th(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:sh(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function sh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Gr()}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function oh(e){if("L"===e.limitType&&0===e.explicitOrderBy.length)throw new Yr(Qr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class ah{convertValue(e,t="none"){switch(Yi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Bi(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(ji(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Gr()}}convertObject(e,t){const n={};return Ri(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Du(Bi(e.latitude),Bi(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=zi(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(Hi(e));default:return null}}convertTimestamp(e){const t=Vi(e);return new hi(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=pi.fromString(e);Zr(Fa(n));const r=new Wi(n.get(1),n.get(3)),i=new vi(n.popFirst(5));return r.isEqual(t)||Hr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function lh(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
function ch(e){e=wu(e,Eu);const t=wu(e.firestore,xu);return hu(Ru(t),e._key).then((n=>gh(t,e,n)))}class uh extends ah{constructor(e){super(),this.firestore=e}convertBytes(e){return new Lu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Eu(this.firestore,null,t)}}function hh(e){e=wu(e,Su);const t=wu(e.firestore,xu),n=Ru(t),r=new uh(t);return oh(e._query),du(n,e._query).then((n=>new ih(t,r,e,n)))}function dh(e,t,n){e=wu(e,Eu);const r=wu(e.firestore,xu),i=lh(e.converter,t,n);return ph(r,[ju(Bu(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,mo.none())])}function fh(e){return ph(wu(e.firestore,xu),[new Ao(e._key,mo.none())])}function ph(e,t){return function(e,t){const n=new Jr;return e.asyncQueue.enqueueAndForget((async()=>Mc(await cu(e),t,n))),n.promise}(Ru(e),t)}function gh(e,t,n){const r=n.docs.get(t._key),i=new uh(e);return new nh(e,i,t._key,r,new th(n.hasPendingWrites,n.fromCache),t.converter)}
/**
 * @license
 * Copyright 2020 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */!function(e,t=!0){!function(e){Br=e}(i.Jn),(0,i.Xd)(new s.wA("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new xu(r,new ni(e.getProvider("auth-internal")),new oi(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)(Ur,"3.4.12",e),(0,i.KN)(Ur,"3.4.12","esm2017")}()},4260:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},3340:(e,t,n)=>{"use strict";function r(e){return e}n.d(t,{BC:()=>r})},8339:(e,t,n)=>{"use strict";n.d(t,{p7:()=>nt,r5:()=>V,tv:()=>st,yj:()=>ot});var r=n(3673),i=n(1959);
/*!
  * vue-router v4.1.2
  * (c) 2022 Eduardo San Martin Morote
  * @license MIT
  */
const s="undefined"!==typeof window;function o(e){return e.__esModule||"Module"===e[Symbol.toStringTag]}const a=Object.assign;function l(e,t){const n={};for(const r in t){const i=t[r];n[r]=u(i)?i.map(e):e(i)}return n}const c=()=>{},u=Array.isArray;const h=/\/$/,d=e=>e.replace(h,"");function f(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("#");let l=t.indexOf("?");return a<l&&a>=0&&(l=-1),l>-1&&(r=t.slice(0,l),s=t.slice(l+1,a>-1?a:t.length),i=e(s)),a>-1&&(r=r||t.slice(0,a),o=t.slice(a,t.length)),r=_(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function p(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function g(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function m(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&v(t.matched[r],n.matched[i])&&y(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function v(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function y(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!w(e[n],t[n]))return!1;return!0}function w(e,t){return u(e)?b(e,t):u(t)?b(t,e):e===t}function b(e,t){return u(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function _(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],"."!==s){if(".."!==s)break;o>1&&o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var E,S;(function(e){e["pop"]="pop",e["push"]="push"})(E||(E={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(S||(S={}));function T(e){if(!e)if(s){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),d(e)}const k=/^[^#]+#/;function I(e,t){return e.replace(k,"#")+t}function C(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const x=()=>({left:window.pageXOffset,top:window.pageYOffset});function A(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=C(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function R(e,t){const n=history.state?history.state.position-t:-1;return n+e}const O=new Map;function N(e,t){O.set(e,t)}function L(e){const t=O.get(e);return O.delete(e),t}let P=()=>location.protocol+"//"+location.host;function D(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),g(n,"")}const o=g(n,e);return o+r+i}function F(e,t,n,r){let i=[],s=[],o=null;const l=({state:s})=>{const a=D(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:u,type:E.pop,direction:u?u>0?S.forward:S.back:S.unknown})}))};function c(){o=n.value}function u(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function h(){const{history:e}=window;e.state&&e.replaceState(a({},e.state,{scroll:x()}),"")}function d(){for(const e of s)e();s=[],window.removeEventListener("popstate",l),window.removeEventListener("beforeunload",h)}return window.addEventListener("popstate",l),window.addEventListener("beforeunload",h),{pauseListeners:c,listen:u,destroy:d}}function M(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?x():null}}function q(e){const{history:t,location:n}=window,r={value:D(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:P()+e+r;try{t[o?"replaceState":"pushState"](s,"",l),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}function o(e,n){const o=a({},t.state,M(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function l(e,n){const o=a({},i.value,t.state,{forward:e,scroll:x()});s(o.current,o,!0);const l=a({},M(r.value,e,null),{position:o.position+1},n);s(e,l,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:l,replace:o}}function U(e){e=T(e);const t=q(e),n=F(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=a({location:"",base:e,go:r,createHref:I.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function V(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),U(e)}function B(e){return"string"===typeof e||e&&"object"===typeof e}function j(e){return"string"===typeof e||"symbol"===typeof e}const $={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},z=Symbol("");var H;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(H||(H={}));function K(e,t){return a(new Error,{type:e,[z]:!0},t)}function W(e,t){return e instanceof Error&&z in e&&(null==t||!!(e.type&t))}const G="[^/]+?",Z={sensitive:!1,strict:!1,start:!0,end:!0},X=/[.+*?^${}()[\]/\\]/g;function Q(e,t){const n=a({},Z,t),r=[];let i=n.start?"^":"";const s=[];for(const a of e){const e=a.length?[]:[90];n.strict&&!a.length&&(i+="/");for(let t=0;t<a.length;t++){const r=a[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(X,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:l,regexp:c}=r;s.push({name:e,repeatable:n,optional:l});const u=c||G;if(u!==G){o+=10;try{new RegExp(`(${u})`)}catch(h){throw new Error(`Invalid custom RegExp for param "${e}" (${u}): `+h.message)}}let d=n?`((?:${u})(?:/(?:${u}))*)`:`(${u})`;t||(d=l&&a.length<2?`(?:/${d})`:"/"+d),l&&(d+="?"),i+=d,o+=20,l&&(o+=-8),n&&(o+=-20),".*"===u&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function l(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function c(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const s of i)if(0===s.type)n+=s.value;else if(1===s.type){const{value:o,repeatable:a,optional:l}=s,c=o in t?t[o]:"";if(u(c)&&!a)throw new Error(`Provided param "${o}" is an array but it is not repeatable (* or + modifiers)`);const h=u(c)?c.join("/"):c;if(!h){if(!l)throw new Error(`Missing required param "${o}"`);i.length<2&&e.length>1&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=h}}return n}return{re:o,score:r,keys:s,parse:l,stringify:c}}function Y(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function J(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=Y(r[n],i[n]);if(e)return e;n++}if(1===Math.abs(i.length-r.length)){if(ee(r))return 1;if(ee(i))return-1}return i.length-r.length}function ee(e){const t=e[e.length-1];return e.length>0&&t[t.length-1]<0}const te={type:0,value:""},ne=/[a-zA-Z0-9_]/;function re(e){if(!e)return[[]];if("/"===e)return[[te]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ne.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function ie(e,t,n){const r=Q(re(e.path),n);const i=a(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function se(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,l=ae(e);l.aliasOf=r&&r.record;const h=he(t,e),d=[l];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)d.push(a({},l,{components:r?r.record.components:l.components,path:e,aliasOf:r?r.record:l}))}let f,p;for(const t of d){const{path:a}=t;if(n&&"/"!==a[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(a&&r+a)}if(f=ie(t,n,h),r?r.alias.push(f):(p=p||f,p!==f&&p.alias.push(f),i&&e.name&&!ce(f)&&o(e.name)),l.children){const e=l.children;for(let t=0;t<e.length;t++)s(e[t],f,r&&r.children[t])}r=r||f,u(f)}return p?()=>{o(p)}:c}function o(e){if(j(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function l(){return n}function u(e){let t=0;while(t<n.length&&J(e,n[t])>=0&&(e.record.path!==n[t].record.path||!de(e,n[t])))t++;n.splice(t,0,e),e.record.name&&!ce(e)&&r.set(e.record.name,e)}function h(e,t){let i,s,o,l={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw K(1,{location:e});o=i.record.name,l=a(oe(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(l)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(l=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw K(1,{location:e,currentLocation:t});o=i.record.name,l=a({},t.params,e.params),s=i.stringify(l)}const c=[];let u=i;while(u)c.unshift(u.record),u=u.parent;return{name:o,path:s,params:l,matched:c,meta:ue(c)}}return t=he({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:h,removeRoute:o,getRoutes:l,getRecordMatcher:i}}function oe(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function ae(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:le(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||null:e.component&&{default:e.component}}}function le(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function ce(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ue(e){return e.reduce(((e,t)=>a(e,t.meta)),{})}function he(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}function de(e,t){return t.children.some((t=>t===e||de(e,t)))}const fe=/#/g,pe=/&/g,ge=/\//g,me=/=/g,ve=/\?/g,ye=/\+/g,we=/%5B/g,be=/%5D/g,_e=/%5E/g,Ee=/%60/g,Se=/%7B/g,Te=/%7C/g,ke=/%7D/g,Ie=/%20/g;function Ce(e){return encodeURI(""+e).replace(Te,"|").replace(we,"[").replace(be,"]")}function xe(e){return Ce(e).replace(Se,"{").replace(ke,"}").replace(_e,"^")}function Ae(e){return Ce(e).replace(ye,"%2B").replace(Ie,"+").replace(fe,"%23").replace(pe,"%26").replace(Ee,"`").replace(Se,"{").replace(ke,"}").replace(_e,"^")}function Re(e){return Ae(e).replace(me,"%3D")}function Oe(e){return Ce(e).replace(fe,"%23").replace(ve,"%3F")}function Ne(e){return null==e?"":Oe(e).replace(ge,"%2F")}function Le(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function Pe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(ye," "),n=e.indexOf("="),s=Le(n<0?e:e.slice(0,n)),o=n<0?null:Le(e.slice(n+1));if(s in t){let e=t[s];u(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function De(e){let t="";for(let n in e){const r=e[n];if(n=Re(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=u(r)?r.map((e=>e&&Ae(e))):[r&&Ae(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Fe(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=u(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}const Me=Symbol(""),qe=Symbol(""),Ue=Symbol(""),Ve=Symbol(""),Be=Symbol("");function je(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function $e(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const l=e=>{!1===e?a(K(4,{from:n,to:t})):e instanceof Error?a(e):B(e)?a(K(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function ze(e,t,n,r){const i=[];for(const s of e){0;for(const e in s.components){let a=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(He(a)){const o=a.__vccOpts||a,l=o[t];l&&i.push($e(l,n,r,s,e))}else{let l=a();0,i.push((()=>l.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const a=o(i)?i.default:i;s.components[e]=a;const l=a.__vccOpts||a,c=l[t];return c&&$e(c,n,r,s,e)()}))))}}}return i}function He(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function Ke(e){const t=(0,r.f3)(Ue),n=(0,r.f3)(Ve),s=(0,r.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,r.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(v.bind(null,r));if(o>-1)return o;const a=Qe(e[t-2]);return t>1&&Qe(r)===a&&i[i.length-1].path!==a?i.findIndex(v.bind(null,e[t-2])):o})),a=(0,r.Fl)((()=>o.value>-1&&Xe(n.params,s.value.params))),l=(0,r.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&y(n.params,s.value.params)));function u(n={}){return Ze(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(c):Promise.resolve()}return{route:s,href:(0,r.Fl)((()=>s.value.href)),isActive:a,isExactActive:l,navigate:u}}const We=(0,r.aZ)({name:"RouterLink",compatConfig:{MODE:3},props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:Ke,setup(e,{slots:t}){const n=(0,i.qj)(Ke(e)),{options:s}=(0,r.f3)(Ue),o=(0,r.Fl)((()=>({[Ye(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Ye(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),Ge=We;function Ze(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Xe(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!u(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Qe(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Ye=(e,t,n)=>null!=e?e:null!=t?t:n,Je=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},compatConfig:{MODE:3},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(Be),o=(0,r.Fl)((()=>e.route||s.value)),l=(0,r.f3)(qe,0),c=(0,r.Fl)((()=>{let e=(0,i.SU)(l);const{matched:t}=o.value;let n;while((n=t[e])&&!n.components)e++;return e})),u=(0,r.Fl)((()=>o.value.matched[c.value]));(0,r.JJ)(qe,(0,r.Fl)((()=>c.value+1))),(0,r.JJ)(Me,u),(0,r.JJ)(Be,o);const h=(0,i.iH)();return(0,r.YP)((()=>[h.value,u.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&v(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=u.value,l=s&&s.components[e.name],c=e.name;if(!l)return et(n.default,{Component:l,route:i});const d=s.props[e.name],f=d?!0===d?i.params:"function"===typeof d?d(i):d:null,p=e=>{e.component.isUnmounted&&(s.instances[c]=null)},g=(0,r.h)(l,a({},f,t,{onVnodeUnmounted:p,ref:h}));return et(n.default,{Component:g,route:i})||g}}});function et(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const tt=Je;function nt(e){const t=se(e.routes,e),n=e.parseQuery||Pe,o=e.stringifyQuery||De,h=e.history;const d=je(),g=je(),v=je(),y=(0,i.XI)($);let w=$;s&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const b=l.bind(null,(e=>""+e)),_=l.bind(null,Ne),S=l.bind(null,Le);function T(e,n){let r,i;return j(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function k(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function I(){return t.getRoutes().map((e=>e.record))}function C(e){return!!t.getRecordMatcher(e)}function O(e,r){if(r=a({},r||y.value),"string"===typeof e){const i=f(n,e,r.path),s=t.resolve({path:i.path},r),o=h.createHref(i.fullPath);return a(i,s,{params:S(s.params),hash:Le(i.hash),redirectedFrom:void 0,href:o})}let i;if("path"in e)i=a({},e,{path:f(n,e.path,r.path).path});else{const t=a({},e.params);for(const e in t)null==t[e]&&delete t[e];i=a({},e,{params:_(e.params)}),r.params=_(r.params)}const s=t.resolve(i,r),l=e.hash||"";s.params=b(S(s.params));const c=p(o,a({},e,{hash:xe(l),path:s.path})),u=h.createHref(c);return a({fullPath:c,hash:l,query:o===De?Fe(e.query):e.query||{}},s,{redirectedFrom:void 0,href:u})}function P(e){return"string"===typeof e?f(n,e,y.value.path):a({},e)}function D(e,t){if(w!==e)return K(8,{from:t,to:e})}function F(e){return U(e)}function M(e){return F(a(P(e),{replace:!0}))}function q(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=P(r):{path:r},r.params={}),a({query:e.query,hash:e.hash,params:"path"in r?{}:e.params},r)}}function U(e,t){const n=w=O(e),r=y.value,i=e.state,s=e.force,l=!0===e.replace,c=q(n);if(c)return U(a(P(c),{state:i,force:s,replace:l}),t||n);const u=n;let h;return u.redirectedFrom=t,!s&&m(o,r,n)&&(h=K(16,{to:u,from:r}),ne(r,r,!0,!1)),(h?Promise.resolve(h):B(u,r)).catch((e=>W(e)?W(e,2)?e:te(e):J(e,u,r))).then((e=>{if(e){if(W(e,2))return U(a(P(e.to),{state:i,force:s,replace:l}),t||u)}else e=H(u,r,!0,l,i);return z(u,r,e),e}))}function V(e,t){const n=D(e,t);return n?Promise.reject(n):Promise.resolve()}function B(e,t){let n;const[r,i,s]=it(e,t);n=ze(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push($e(r,e,t))}));const o=V.bind(null,e,t);return n.push(o),rt(n).then((()=>{n=[];for(const r of d.list())n.push($e(r,e,t));return n.push(o),rt(n)})).then((()=>{n=ze(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push($e(r,e,t))}));return n.push(o),rt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(u(r.beforeEnter))for(const i of r.beforeEnter)n.push($e(i,e,t));else n.push($e(r.beforeEnter,e,t));return n.push(o),rt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=ze(s,"beforeRouteEnter",e,t),n.push(o),rt(n)))).then((()=>{n=[];for(const r of g.list())n.push($e(r,e,t));return n.push(o),rt(n)})).catch((e=>W(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of v.list())r(e,t,n)}function H(e,t,n,r,i){const o=D(e,t);if(o)return o;const l=t===$,c=s?history.state:{};n&&(r||l?h.replace(e.fullPath,a({scroll:l&&c&&c.scroll},i)):h.push(e.fullPath,i)),y.value=e,ne(e,t,n,l),te()}let G;function Z(){G||(G=h.listen(((e,t,n)=>{if(!ae.listening)return;const r=O(e),i=q(r);if(i)return void U(a(i,{replace:!0}),r).catch(c);w=r;const o=y.value;s&&N(R(o.fullPath,n.delta),x()),B(r,o).catch((e=>W(e,12)?e:W(e,2)?(U(e.to,r).then((e=>{W(e,20)&&!n.delta&&n.type===E.pop&&h.go(-1,!1)})).catch(c),Promise.reject()):(n.delta&&h.go(-n.delta,!1),J(e,r,o)))).then((e=>{e=e||H(r,o,!1),e&&(n.delta?h.go(-n.delta,!1):n.type===E.pop&&W(e,20)&&h.go(-1,!1)),z(r,o,e)})).catch(c)})))}let X,Q=je(),Y=je();function J(e,t,n){te(e);const r=Y.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ee(){return X&&y.value!==$?Promise.resolve():new Promise(((e,t)=>{Q.add([e,t])}))}function te(e){return X||(X=!e,Z(),Q.list().forEach((([t,n])=>e?n(e):t())),Q.reset()),e}function ne(t,n,i,o){const{scrollBehavior:a}=e;if(!s||!a)return Promise.resolve();const l=!i&&L(R(t.fullPath,0))||(o||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>a(t,n,l))).then((e=>e&&A(e))).catch((e=>J(e,t,n)))}const re=e=>h.go(e);let ie;const oe=new Set,ae={currentRoute:y,listening:!0,addRoute:T,removeRoute:k,hasRoute:C,getRoutes:I,resolve:O,options:e,push:F,replace:M,go:re,back:()=>re(-1),forward:()=>re(1),beforeEach:d.add,beforeResolve:g.add,afterEach:v.add,onError:Y.add,isReady:ee,install(e){const t=this;e.component("RouterLink",Ge),e.component("RouterView",tt),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(y)}),s&&!ie&&y.value===$&&(ie=!0,F(h.location).catch((e=>{0})));const n={};for(const i in $)n[i]=(0,r.Fl)((()=>y.value[i]));e.provide(Ue,t),e.provide(Ve,(0,i.qj)(n)),e.provide(Be,y);const o=e.unmount;oe.add(e),e.unmount=function(){oe.delete(e),oe.size<1&&(w=$,G&&G(),G=null,y.value=$,ie=!1,X=!1),o()}}};return ae}function rt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function it(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>v(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>v(e,a)))||i.push(a))}return[n,r,i]}function st(){return(0,r.f3)(Ue)}function ot(){return(0,r.f3)(Ve)}},9036:(e,t,n)=>{"use strict";n.d(t,{Jn:()=>W,KN:()=>X,Mq:()=>Z,Xd:()=>j,ZF:()=>G,qX:()=>$});var r=n(4676),i=n(1492),s=n(5479),o=n(2689);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class a{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(l(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function l(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const c="@firebase/app",u="0.7.28",h=new i.Yd("@firebase/app"),d="@firebase/app-compat",f="@firebase/analytics-compat",p="@firebase/analytics",g="@firebase/app-check-compat",m="@firebase/app-check",v="@firebase/auth",y="@firebase/auth-compat",w="@firebase/database",b="@firebase/database-compat",_="@firebase/functions",E="@firebase/functions-compat",S="@firebase/installations",T="@firebase/installations-compat",k="@firebase/messaging",I="@firebase/messaging-compat",C="@firebase/performance",x="@firebase/performance-compat",A="@firebase/remote-config",R="@firebase/remote-config-compat",O="@firebase/storage",N="@firebase/storage-compat",L="@firebase/firestore",P="@firebase/firestore-compat",D="firebase",F="9.9.0",M="[DEFAULT]",q={[c]:"fire-core",[d]:"fire-core-compat",[p]:"fire-analytics",[f]:"fire-analytics-compat",[m]:"fire-app-check",[g]:"fire-app-check-compat",[v]:"fire-auth",[y]:"fire-auth-compat",[w]:"fire-rtdb",[b]:"fire-rtdb-compat",[_]:"fire-fn",[E]:"fire-fn-compat",[S]:"fire-iid",[T]:"fire-iid-compat",[k]:"fire-fcm",[I]:"fire-fcm-compat",[C]:"fire-perf",[x]:"fire-perf-compat",[A]:"fire-rc",[R]:"fire-rc-compat",[O]:"fire-gcs",[N]:"fire-gcs-compat",[L]:"fire-fst",[P]:"fire-fst-compat","fire-js":"fire-js",[D]:"fire-js-all"},U=new Map,V=new Map;function B(e,t){try{e.container.addComponent(t)}catch(n){h.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function j(e){const t=e.name;if(V.has(t))return h.debug(`There were multiple attempts to register component ${t}.`),!1;V.set(t,e);for(const n of U.values())B(n,e);return!0}function $(e,t){const n=e.container.getProvider("heartbeat").getImmediate({optional:!0});return n&&n.triggerHeartbeat(),e.container.getProvider(t)}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const z={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function.",["storage-open"]:"Error thrown when opening storage. Original error: {$originalErrorMessage}.",["storage-get"]:"Error thrown when reading from storage. Original error: {$originalErrorMessage}.",["storage-set"]:"Error thrown when writing to storage. Original error: {$originalErrorMessage}.",["storage-delete"]:"Error thrown when deleting from storage. Original error: {$originalErrorMessage}."},H=new s.LL("app","Firebase",z);
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
class K{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw H.create("app-deleted",{appName:this._name})}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const W=F;function G(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:M,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw H.create("bad-app-name",{appName:String(i)});const o=U.get(i);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw H.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of V.values())a.addComponent(r);const l=new K(e,n,a);return U.set(i,l),l}function Z(e=M){const t=U.get(e);if(!t)throw H.create("no-app",{appName:e});return t}function X(e,t,n){var i;let s=null!==(i=q[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void h.warn(e.join(" "))}j(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const Q="firebase-heartbeat-database",Y=1,J="firebase-heartbeat-store";let ee=null;function te(){return ee||(ee=(0,o.X3)(Q,Y,{upgrade:(e,t)=>{switch(t){case 0:e.createObjectStore(J)}}}).catch((e=>{throw H.create("storage-open",{originalErrorMessage:e.message})}))),ee}async function ne(e){var t;try{const t=await te();return t.transaction(J).objectStore(J).get(ie(e))}catch(n){throw H.create("storage-get",{originalErrorMessage:null===(t=n)||void 0===t?void 0:t.message})}}async function re(e,t){var n;try{const n=await te(),r=n.transaction(J,"readwrite"),i=r.objectStore(J);return await i.put(t,ie(e)),r.done}catch(r){throw H.create("storage-set",{originalErrorMessage:null===(n=r)||void 0===n?void 0:n.message})}}function ie(e){return`${e.name}!${e.options.appId}`}
/**
 * @license
 * Copyright 2021 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const se=1024,oe=2592e6;class ae{constructor(e){this.container=e,this._heartbeatsCache=null;const t=this.container.getProvider("app").getImmediate();this._storage=new ue(t),this._heartbeatsCachePromise=this._storage.read().then((e=>(this._heartbeatsCache=e,e)))}async triggerHeartbeat(){const e=this.container.getProvider("platform-logger").getImmediate(),t=e.getPlatformInfoString(),n=le();if(null===this._heartbeatsCache&&(this._heartbeatsCache=await this._heartbeatsCachePromise),this._heartbeatsCache.lastSentHeartbeatDate!==n&&!this._heartbeatsCache.heartbeats.some((e=>e.date===n)))return this._heartbeatsCache.heartbeats.push({date:n,agent:t}),this._heartbeatsCache.heartbeats=this._heartbeatsCache.heartbeats.filter((e=>{const t=new Date(e.date).valueOf(),n=Date.now();return n-t<=oe})),this._storage.overwrite(this._heartbeatsCache)}async getHeartbeatsHeader(){if(null===this._heartbeatsCache&&await this._heartbeatsCachePromise,null===this._heartbeatsCache||0===this._heartbeatsCache.heartbeats.length)return"";const e=le(),{heartbeatsToSend:t,unsentEntries:n}=ce(this._heartbeatsCache.heartbeats),r=(0,s.L)(JSON.stringify({version:2,heartbeats:t}));return this._heartbeatsCache.lastSentHeartbeatDate=e,n.length>0?(this._heartbeatsCache.heartbeats=n,await this._storage.overwrite(this._heartbeatsCache)):(this._heartbeatsCache.heartbeats=[],this._storage.overwrite(this._heartbeatsCache)),r}}function le(){const e=new Date;return e.toISOString().substring(0,10)}function ce(e,t=se){const n=[];let r=e.slice();for(const i of e){const e=n.find((e=>e.agent===i.agent));if(e){if(e.dates.push(i.date),he(n)>t){e.dates.pop();break}}else if(n.push({agent:i.agent,dates:[i.date]}),he(n)>t){n.pop();break}r=r.slice(1)}return{heartbeatsToSend:n,unsentEntries:r}}class ue{constructor(e){this.app=e,this._canUseIndexedDBPromise=this.runIndexedDBEnvironmentCheck()}async runIndexedDBEnvironmentCheck(){return!!(0,s.hl)()&&(0,s.eu)().then((()=>!0)).catch((()=>!1))}async read(){const e=await this._canUseIndexedDBPromise;if(e){const e=await ne(this.app);return e||{heartbeats:[]}}return{heartbeats:[]}}async overwrite(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:e.heartbeats})}}async add(e){var t;const n=await this._canUseIndexedDBPromise;if(n){const n=await this.read();return re(this.app,{lastSentHeartbeatDate:null!==(t=e.lastSentHeartbeatDate)&&void 0!==t?t:n.lastSentHeartbeatDate,heartbeats:[...n.heartbeats,...e.heartbeats]})}}}function he(e){return(0,s.L)(JSON.stringify({version:2,heartbeats:e})).length}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function de(e){j(new r.wA("platform-logger",(e=>new a(e)),"PRIVATE")),j(new r.wA("heartbeat",(e=>new ae(e)),"PRIVATE")),X(c,u,e),X(c,u,"esm2017"),X("fire-js","")}de("")},4676:(e,t,n)=>{"use strict";n.d(t,{H0:()=>c,wA:()=>i});var r=n(5479);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */const s="[DEFAULT]";
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class o{constructor(e,t){this.name=e,this.container=t,this.component=null,this.instances=new Map,this.instancesDeferred=new Map,this.instancesOptions=new Map,this.onInitCallbacks=new Map}get(e){const t=this.normalizeInstanceIdentifier(e);if(!this.instancesDeferred.has(t)){const e=new r.BH;if(this.instancesDeferred.set(t,e),this.isInitialized(t)||this.shouldAutoInitialize())try{const n=this.getOrInitializeService({instanceIdentifier:t});n&&e.resolve(n)}catch(n){}}return this.instancesDeferred.get(t).promise}getImmediate(e){var t;const n=this.normalizeInstanceIdentifier(null===e||void 0===e?void 0:e.identifier),r=null!==(t=null===e||void 0===e?void 0:e.optional)&&void 0!==t&&t;if(!this.isInitialized(n)&&!this.shouldAutoInitialize()){if(r)return null;throw Error(`Service ${this.name} is not available`)}try{return this.getOrInitializeService({instanceIdentifier:n})}catch(i){if(r)return null;throw i}}getComponent(){return this.component}setComponent(e){if(e.name!==this.name)throw Error(`Mismatching Component ${e.name} for Provider ${this.name}.`);if(this.component)throw Error(`Component for ${this.name} has already been provided`);if(this.component=e,this.shouldAutoInitialize()){if(l(e))try{this.getOrInitializeService({instanceIdentifier:s})}catch(t){}for(const[e,n]of this.instancesDeferred.entries()){const r=this.normalizeInstanceIdentifier(e);try{const e=this.getOrInitializeService({instanceIdentifier:r});n.resolve(e)}catch(t){}}}}clearInstance(e=s){this.instancesDeferred.delete(e),this.instancesOptions.delete(e),this.instances.delete(e)}async delete(){const e=Array.from(this.instances.values());await Promise.all([...e.filter((e=>"INTERNAL"in e)).map((e=>e.INTERNAL.delete())),...e.filter((e=>"_delete"in e)).map((e=>e._delete()))])}isComponentSet(){return null!=this.component}isInitialized(e=s){return this.instances.has(e)}getOptions(e=s){return this.instancesOptions.get(e)||{}}initialize(e={}){const{options:t={}}=e,n=this.normalizeInstanceIdentifier(e.instanceIdentifier);if(this.isInitialized(n))throw Error(`${this.name}(${n}) has already been initialized`);if(!this.isComponentSet())throw Error(`Component ${this.name} has not been registered yet`);const r=this.getOrInitializeService({instanceIdentifier:n,options:t});for(const[i,s]of this.instancesDeferred.entries()){const e=this.normalizeInstanceIdentifier(i);n===e&&s.resolve(r)}return r}onInit(e,t){var n;const r=this.normalizeInstanceIdentifier(t),i=null!==(n=this.onInitCallbacks.get(r))&&void 0!==n?n:new Set;i.add(e),this.onInitCallbacks.set(r,i);const s=this.instances.get(r);return s&&e(s,r),()=>{i.delete(e)}}invokeOnInitCallbacks(e,t){const n=this.onInitCallbacks.get(t);if(n)for(const i of n)try{i(e,t)}catch(r){}}getOrInitializeService({instanceIdentifier:e,options:t={}}){let n=this.instances.get(e);if(!n&&this.component&&(n=this.component.instanceFactory(this.container,{instanceIdentifier:a(e),options:t}),this.instances.set(e,n),this.instancesOptions.set(e,t),this.invokeOnInitCallbacks(n,e),this.component.onInstanceCreated))try{this.component.onInstanceCreated(this.container,e,n)}catch(r){}return n||null}normalizeInstanceIdentifier(e=s){return this.component?this.component.multipleInstances?e:s:e}shouldAutoInitialize(){return!!this.component&&"EXPLICIT"!==this.component.instantiationMode}}function a(e){return e===s?void 0:e}function l(e){return"EAGER"===e.instantiationMode}
/**
 * @license
 * Copyright 2019 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1492:(e,t,n)=>{"use strict";n.d(t,{Yd:()=>c,in:()=>i});
/**
 * @license
 * Copyright 2017 Google LLC
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *   http://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}},2689:(e,t,n)=>{"use strict";n.d(t,{X3:()=>_});const r=(e,t)=>t.some((t=>e instanceof t));let i,s;function o(){return i||(i=[IDBDatabase,IDBObjectStore,IDBIndex,IDBCursor,IDBTransaction])}function a(){return s||(s=[IDBCursor.prototype.advance,IDBCursor.prototype.continue,IDBCursor.prototype.continuePrimaryKey])}const l=new WeakMap,c=new WeakMap,u=new WeakMap,h=new WeakMap,d=new WeakMap;function f(e){const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("success",i),e.removeEventListener("error",s)},i=()=>{t(w(e.result)),r()},s=()=>{n(e.error),r()};e.addEventListener("success",i),e.addEventListener("error",s)}));return t.then((t=>{t instanceof IDBCursor&&l.set(t,e)})).catch((()=>{})),d.set(t,e),t}function p(e){if(c.has(e))return;const t=new Promise(((t,n)=>{const r=()=>{e.removeEventListener("complete",i),e.removeEventListener("error",s),e.removeEventListener("abort",s)},i=()=>{t(),r()},s=()=>{n(e.error||new DOMException("AbortError","AbortError")),r()};e.addEventListener("complete",i),e.addEventListener("error",s),e.addEventListener("abort",s)}));c.set(e,t)}let g={get(e,t,n){if(e instanceof IDBTransaction){if("done"===t)return c.get(e);if("objectStoreNames"===t)return e.objectStoreNames||u.get(e);if("store"===t)return n.objectStoreNames[1]?void 0:n.objectStore(n.objectStoreNames[0])}return w(e[t])},set(e,t,n){return e[t]=n,!0},has(e,t){return e instanceof IDBTransaction&&("done"===t||"store"===t)||t in e}};function m(e){g=e(g)}function v(e){return e!==IDBDatabase.prototype.transaction||"objectStoreNames"in IDBTransaction.prototype?a().includes(e)?function(...t){return e.apply(b(this),t),w(l.get(this))}:function(...t){return w(e.apply(b(this),t))}:function(t,...n){const r=e.call(b(this),t,...n);return u.set(r,t.sort?t.sort():[t]),w(r)}}function y(e){return"function"===typeof e?v(e):(e instanceof IDBTransaction&&p(e),r(e,o())?new Proxy(e,g):e)}function w(e){if(e instanceof IDBRequest)return f(e);if(h.has(e))return h.get(e);const t=y(e);return t!==e&&(h.set(e,t),d.set(t,e)),t}const b=e=>d.get(e);function _(e,t,{blocked:n,upgrade:r,blocking:i,terminated:s}={}){const o=indexedDB.open(e,t),a=w(o);return r&&o.addEventListener("upgradeneeded",(e=>{r(w(o.result),e.oldVersion,e.newVersion,w(o.transaction))})),n&&o.addEventListener("blocked",(()=>n())),a.then((e=>{s&&e.addEventListener("close",(()=>s())),i&&e.addEventListener("versionchange",(()=>i()))})).catch((()=>{})),a}const E=["get","getKey","getAll","getAllKeys","count"],S=["put","add","delete","clear"],T=new Map;function k(e,t){if(!(e instanceof IDBDatabase)||t in e||"string"!==typeof t)return;if(T.get(t))return T.get(t);const n=t.replace(/FromIndex$/,""),r=t!==n,i=S.includes(n);if(!(n in(r?IDBIndex:IDBObjectStore).prototype)||!i&&!E.includes(n))return;const s=async function(e,...t){const s=this.transaction(e,i?"readwrite":"readonly");let o=s.store;return r&&(o=o.index(t.shift())),(await Promise.all([o[n](...t),i&&s.done]))[0]};return T.set(t,s),s}m((e=>({...e,get:(t,n,r)=>k(t,n)||e.get(t,n,r),has:(t,n)=>!!k(t,n)||e.has(t,n)})))}}]);
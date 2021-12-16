(self["webpackChunkportfolio"]=self["webpackChunkportfolio"]||[]).push([[736],{5479:(e,t,n)=>{"use strict";n.d(t,{BH:()=>a,LL:()=>b,ZR:()=>w,zI:()=>v,tV:()=>o,$s:()=>M,ne:()=>x,vZ:()=>k,pd:()=>A,m9:()=>q,z$:()=>l,ru:()=>u,d:()=>d,xb:()=>E,w1:()=>f,hl:()=>g,uI:()=>c,b$:()=>h,Mn:()=>p,xO:()=>S,zd:()=>C,eu:()=>m});
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
const r=function(e){const t=[];let n=0;for(let r=0;r<e.length;r++){let i=e.charCodeAt(r);i<128?t[n++]=i:i<2048?(t[n++]=i>>6|192,t[n++]=63&i|128):55296===(64512&i)&&r+1<e.length&&56320===(64512&e.charCodeAt(r+1))?(i=65536+((1023&i)<<10)+(1023&e.charCodeAt(++r)),t[n++]=i>>18|240,t[n++]=i>>12&63|128,t[n++]=i>>6&63|128,t[n++]=63&i|128):(t[n++]=i>>12|224,t[n++]=i>>6&63|128,t[n++]=63&i|128)}return t},i=function(e){const t=[];let n=0,r=0;while(n<e.length){const i=e[n++];if(i<128)t[r++]=String.fromCharCode(i);else if(i>191&&i<224){const s=e[n++];t[r++]=String.fromCharCode((31&i)<<6|63&s)}else if(i>239&&i<365){const s=e[n++],o=e[n++],a=e[n++],l=((7&i)<<18|(63&s)<<12|(63&o)<<6|63&a)-65536;t[r++]=String.fromCharCode(55296+(l>>10)),t[r++]=String.fromCharCode(56320+(1023&l))}else{const s=e[n++],o=e[n++];t[r++]=String.fromCharCode((15&i)<<12|(63&s)<<6|63&o)}}return t.join("")},s={byteToCharMap_:null,charToByteMap_:null,byteToCharMapWebSafe_:null,charToByteMapWebSafe_:null,ENCODED_VALS_BASE:"ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",get ENCODED_VALS(){return this.ENCODED_VALS_BASE+"+/="},get ENCODED_VALS_WEBSAFE(){return this.ENCODED_VALS_BASE+"-_."},HAS_NATIVE_SUPPORT:"function"===typeof atob,encodeByteArray(e,t){if(!Array.isArray(e))throw Error("encodeByteArray takes an array as a parameter");this.init_();const n=t?this.byteToCharMapWebSafe_:this.byteToCharMap_,r=[];for(let i=0;i<e.length;i+=3){const t=e[i],s=i+1<e.length,o=s?e[i+1]:0,a=i+2<e.length,l=a?e[i+2]:0,c=t>>2,u=(3&t)<<4|o>>4;let h=(15&o)<<2|l>>6,d=63&l;a||(d=64,s||(h=64)),r.push(n[c],n[u],n[h],n[d])}return r.join("")},encodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?btoa(e):this.encodeByteArray(r(e),t)},decodeString(e,t){return this.HAS_NATIVE_SUPPORT&&!t?atob(e):i(this.decodeStringToByteArray(e,t))},decodeStringToByteArray(e,t){this.init_();const n=t?this.charToByteMapWebSafe_:this.charToByteMap_,r=[];for(let i=0;i<e.length;){const t=n[e.charAt(i++)],s=i<e.length,o=s?n[e.charAt(i)]:0;++i;const a=i<e.length,l=a?n[e.charAt(i)]:64;++i;const c=i<e.length,u=c?n[e.charAt(i)]:64;if(++i,null==t||null==o||null==l||null==u)throw Error();const h=t<<2|o>>4;if(r.push(h),64!==l){const e=o<<4&240|l>>2;if(r.push(e),64!==u){const e=l<<6&192|u;r.push(e)}}}return r},init_(){if(!this.byteToCharMap_){this.byteToCharMap_={},this.charToByteMap_={},this.byteToCharMapWebSafe_={},this.charToByteMapWebSafe_={};for(let e=0;e<this.ENCODED_VALS.length;e++)this.byteToCharMap_[e]=this.ENCODED_VALS.charAt(e),this.charToByteMap_[this.byteToCharMap_[e]]=e,this.byteToCharMapWebSafe_[e]=this.ENCODED_VALS_WEBSAFE.charAt(e),this.charToByteMapWebSafe_[this.byteToCharMapWebSafe_[e]]=e,e>=this.ENCODED_VALS_BASE.length&&(this.charToByteMap_[this.ENCODED_VALS_WEBSAFE.charAt(e)]=e,this.charToByteMapWebSafe_[this.ENCODED_VALS.charAt(e)]=e)}}},o=function(e){try{return s.decodeString(e,!0)}catch(t){console.error("base64Decode failed: ",t)}return null};
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
class a{constructor(){this.reject=()=>{},this.resolve=()=>{},this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}wrapCallback(e){return(t,n)=>{t?this.reject(t):this.resolve(n),"function"===typeof e&&(this.promise.catch((()=>{})),1===e.length?e(t):e(t,n))}}}
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
function l(){return"undefined"!==typeof navigator&&"string"===typeof navigator["userAgent"]?navigator["userAgent"]:""}function c(){return"undefined"!==typeof window&&!!(window["cordova"]||window["phonegap"]||window["PhoneGap"])&&/ios|iphone|ipod|ipad|android|blackberry|iemobile/i.test(l())}function u(){const e="object"===typeof chrome?chrome.runtime:"object"===typeof browser?browser.runtime:void 0;return"object"===typeof e&&void 0!==e.id}function h(){return"object"===typeof navigator&&"ReactNative"===navigator["product"]}function d(){return l().indexOf("Electron/")>=0}function f(){const e=l();return e.indexOf("MSIE ")>=0||e.indexOf("Trident/")>=0}function p(){return l().indexOf("MSAppHost/")>=0}function g(){return"object"===typeof indexedDB}function m(){return new Promise(((e,t)=>{try{let n=!0;const r="validate-browser-context-for-indexeddb-analytics-module",i=self.indexedDB.open(r);i.onsuccess=()=>{i.result.close(),n||self.indexedDB.deleteDatabase(r),e(!0)},i.onupgradeneeded=()=>{n=!1},i.onerror=()=>{var e;t((null===(e=i.error)||void 0===e?void 0:e.message)||"")}}catch(n){t(n)}}))}function v(){return!("undefined"===typeof navigator||!navigator.cookieEnabled)}
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
const y="FirebaseError";class w extends Error{constructor(e,t,n){super(t),this.code=e,this.customData=n,this.name=y,Object.setPrototypeOf(this,w.prototype),Error.captureStackTrace&&Error.captureStackTrace(this,b.prototype.create)}}class b{constructor(e,t,n){this.service=e,this.serviceName=t,this.errors=n}create(e,...t){const n=t[0]||{},r=`${this.service}/${e}`,i=this.errors[e],s=i?_(i,n):"Error",o=`${this.serviceName}: ${s} (${r}).`,a=new w(r,o,n);return a}}function _(e,t){return e.replace(T,((e,n)=>{const r=t[n];return null!=r?String(r):`<${n}?>`}))}const T=/\{\$([^}]+)}/g;
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
 */function E(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}function k(e,t){if(e===t)return!0;const n=Object.keys(e),r=Object.keys(t);for(const i of n){if(!r.includes(i))return!1;const n=e[i],s=t[i];if(I(n)&&I(s)){if(!k(n,s))return!1}else if(n!==s)return!1}for(const i of r)if(!n.includes(i))return!1;return!0}function I(e){return null!==e&&"object"===typeof e}
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
 */function S(e){const t=[];for(const[n,r]of Object.entries(e))Array.isArray(r)?r.forEach((e=>{t.push(encodeURIComponent(n)+"="+encodeURIComponent(e))})):t.push(encodeURIComponent(n)+"="+encodeURIComponent(r));return t.length?"&"+t.join("&"):""}function C(e){const t={},n=e.replace(/^\?/,"").split("&");return n.forEach((e=>{if(e){const[n,r]=e.split("=");t[decodeURIComponent(n)]=decodeURIComponent(r)}})),t}function A(e){const t=e.indexOf("?");if(!t)return"";const n=e.indexOf("#",t);return e.substring(t,n>0?n:void 0)}
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
 */function x(e,t){const n=new R(e,t);return n.subscribe.bind(n)}class R{constructor(e,t){this.observers=[],this.unsubscribes=[],this.observerCount=0,this.task=Promise.resolve(),this.finalized=!1,this.onNoObservers=t,this.task.then((()=>{e(this)})).catch((e=>{this.error(e)}))}next(e){this.forEachObserver((t=>{t.next(e)}))}error(e){this.forEachObserver((t=>{t.error(e)})),this.close(e)}complete(){this.forEachObserver((e=>{e.complete()})),this.close()}subscribe(e,t,n){let r;if(void 0===e&&void 0===t&&void 0===n)throw new Error("Missing Observer.");r=O(e,["next","error","complete"])?e:{next:e,error:t,complete:n},void 0===r.next&&(r.next=N),void 0===r.error&&(r.error=N),void 0===r.complete&&(r.complete=N);const i=this.unsubscribeOne.bind(this,this.observers.length);return this.finalized&&this.task.then((()=>{try{this.finalError?r.error(this.finalError):r.complete()}catch(e){}})),this.observers.push(r),i}unsubscribeOne(e){void 0!==this.observers&&void 0!==this.observers[e]&&(delete this.observers[e],this.observerCount-=1,0===this.observerCount&&void 0!==this.onNoObservers&&this.onNoObservers(this))}forEachObserver(e){if(!this.finalized)for(let t=0;t<this.observers.length;t++)this.sendOne(t,e)}sendOne(e,t){this.task.then((()=>{if(void 0!==this.observers&&void 0!==this.observers[e])try{t(this.observers[e])}catch(n){"undefined"!==typeof console&&console.error&&console.error(n)}}))}close(e){this.finalized||(this.finalized=!0,void 0!==e&&(this.finalError=e),this.task.then((()=>{this.observers=void 0,this.onNoObservers=void 0})))}}function O(e,t){if("object"!==typeof e||null===e)return!1;for(const n of t)if(n in e&&"function"===typeof e[n])return!0;return!1}function N(){}
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
const L=1e3,P=2,D=144e5,F=.5;function M(e,t=L,n=P){const r=t*Math.pow(n,e),i=Math.round(F*r*(Math.random()-.5)*2);return Math.min(D,r+i)}
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
function q(e){return e&&e._delegate?e._delegate:e}},7518:e=>{e.exports=function(e,t,n){const r=void 0!==e.__vccOpts?e.__vccOpts:e,i=r[t];if(void 0===i)r[t]=n;else for(const s in n)void 0===i[s]&&(i[s]=n[s])}},1959:(e,t,n)=>{"use strict";n.d(t,{Bj:()=>o,qq:()=>_,Fl:()=>He,X3:()=>xe,PG:()=>Ce,dq:()=>Fe,Xl:()=>Oe,Jd:()=>I,WL:()=>$e,qj:()=>Ee,iH:()=>Me,lk:()=>C,Um:()=>ke,XI:()=>qe,IU:()=>Re,j:()=>A,X$:()=>O,SU:()=>je});var r=n(2323);let i;const s=[];class o{constructor(e=!1){this.active=!0,this.effects=[],this.cleanups=[],!e&&i&&(this.parent=i,this.index=(i.scopes||(i.scopes=[])).push(this)-1)}run(e){if(this.active)try{return this.on(),e()}finally{this.off()}else 0}on(){this.active&&(s.push(this),i=this)}off(){this.active&&(s.pop(),i=s[s.length-1])}stop(e){if(this.active){if(this.effects.forEach((e=>e.stop())),this.cleanups.forEach((e=>e())),this.scopes&&this.scopes.forEach((e=>e.stop(!0))),this.parent&&!e){const e=this.parent.scopes.pop();e&&e!==this&&(this.parent.scopes[this.index]=e,e.index=this.index)}this.active=!1}}}function a(e,t){t=t||i,t&&t.active&&t.effects.push(e)}const l=e=>{const t=new Set(e);return t.w=0,t.n=0,t},c=e=>(e.w&g)>0,u=e=>(e.n&g)>0,h=({deps:e})=>{if(e.length)for(let t=0;t<e.length;t++)e[t].w|=g},d=e=>{const{deps:t}=e;if(t.length){let n=0;for(let r=0;r<t.length;r++){const i=t[r];c(i)&&!u(i)?i.delete(e):t[n++]=i,i.w&=~g,i.n&=~g}t.length=n}},f=new WeakMap;let p=0,g=1;const m=30,v=[];let y;const w=Symbol(""),b=Symbol("");class _{constructor(e,t=null,n){this.fn=e,this.scheduler=t,this.active=!0,this.deps=[],a(this,n)}run(){if(!this.active)return this.fn();if(!v.includes(this))try{return v.push(y=this),S(),g=1<<++p,p<=m?h(this):T(this),this.fn()}finally{p<=m&&d(this),g=1<<--p,C(),v.pop();const e=v.length;y=e>0?v[e-1]:void 0}}stop(){this.active&&(T(this),this.onStop&&this.onStop(),this.active=!1)}}function T(e){const{deps:t}=e;if(t.length){for(let n=0;n<t.length;n++)t[n].delete(e);t.length=0}}let E=!0;const k=[];function I(){k.push(E),E=!1}function S(){k.push(E),E=!0}function C(){const e=k.pop();E=void 0===e||e}function A(e,t,n){if(!x())return;let r=f.get(e);r||f.set(e,r=new Map);let i=r.get(n);i||r.set(n,i=l());const s=void 0;R(i,s)}function x(){return E&&void 0!==y}function R(e,t){let n=!1;p<=m?u(e)||(e.n|=g,n=!c(e)):n=!e.has(y),n&&(e.add(y),y.deps.push(e))}function O(e,t,n,i,s,o){const a=f.get(e);if(!a)return;let c=[];if("clear"===t)c=[...a.values()];else if("length"===n&&(0,r.kJ)(e))a.forEach(((e,t)=>{("length"===t||t>=i)&&c.push(e)}));else switch(void 0!==n&&c.push(a.get(n)),t){case"add":(0,r.kJ)(e)?(0,r.S0)(n)&&c.push(a.get("length")):(c.push(a.get(w)),(0,r._N)(e)&&c.push(a.get(b)));break;case"delete":(0,r.kJ)(e)||(c.push(a.get(w)),(0,r._N)(e)&&c.push(a.get(b)));break;case"set":(0,r._N)(e)&&c.push(a.get(w));break}if(1===c.length)c[0]&&N(c[0]);else{const e=[];for(const t of c)t&&e.push(...t);N(l(e))}}function N(e,t){for(const n of(0,r.kJ)(e)?e:[...e])(n!==y||n.allowRecurse)&&(n.scheduler?n.scheduler():n.run())}const L=(0,r.fY)("__proto__,__v_isRef,__isVue"),P=new Set(Object.getOwnPropertyNames(Symbol).map((e=>Symbol[e])).filter(r.yk)),D=U(),F=U(!1,!0),M=U(!0),q=V();function V(){const e={};return["includes","indexOf","lastIndexOf"].forEach((t=>{e[t]=function(...e){const n=Re(this);for(let t=0,i=this.length;t<i;t++)A(n,"get",t+"");const r=n[t](...e);return-1===r||!1===r?n[t](...e.map(Re)):r}})),["push","pop","shift","unshift","splice"].forEach((t=>{e[t]=function(...e){I();const n=Re(this)[t].apply(this,e);return C(),n}})),e}function U(e=!1,t=!1){return function(n,i,s){if("__v_isReactive"===i)return!e;if("__v_isReadonly"===i)return e;if("__v_raw"===i&&s===(e?t?be:we:t?ye:ve).get(n))return n;const o=(0,r.kJ)(n);if(!e&&o&&(0,r.RI)(q,i))return Reflect.get(q,i,s);const a=Reflect.get(n,i,s);if((0,r.yk)(i)?P.has(i):L(i))return a;if(e||A(n,"get",i),t)return a;if(Fe(a)){const e=!o||!(0,r.S0)(i);return e?a.value:a}return(0,r.Kn)(a)?e?Ie(a):Ee(a):a}}const j=$(),B=$(!0);function $(e=!1){return function(t,n,i,s){let o=t[n];if(!e&&!Ae(i)&&(i=Re(i),o=Re(o),!(0,r.kJ)(t)&&Fe(o)&&!Fe(i)))return o.value=i,!0;const a=(0,r.kJ)(t)&&(0,r.S0)(n)?Number(n)<t.length:(0,r.RI)(t,n),l=Reflect.set(t,n,i,s);return t===Re(s)&&(a?(0,r.aU)(i,o)&&O(t,"set",n,i,o):O(t,"add",n,i)),l}}function z(e,t){const n=(0,r.RI)(e,t),i=e[t],s=Reflect.deleteProperty(e,t);return s&&n&&O(e,"delete",t,void 0,i),s}function H(e,t){const n=Reflect.has(e,t);return(0,r.yk)(t)&&P.has(t)||A(e,"has",t),n}function K(e){return A(e,"iterate",(0,r.kJ)(e)?"length":w),Reflect.ownKeys(e)}const W={get:D,set:j,deleteProperty:z,has:H,ownKeys:K},G={get:M,set(e,t){return!0},deleteProperty(e,t){return!0}},J=(0,r.l7)({},W,{get:F,set:B}),Y=e=>e,X=e=>Reflect.getPrototypeOf(e);function Z(e,t,n=!1,r=!1){e=e["__v_raw"];const i=Re(e),s=Re(t);t!==s&&!n&&A(i,"get",t),!n&&A(i,"get",s);const{has:o}=X(i),a=r?Y:n?Le:Ne;return o.call(i,t)?a(e.get(t)):o.call(i,s)?a(e.get(s)):void(e!==i&&e.get(t))}function Q(e,t=!1){const n=this["__v_raw"],r=Re(n),i=Re(e);return e!==i&&!t&&A(r,"has",e),!t&&A(r,"has",i),e===i?n.has(e):n.has(e)||n.has(i)}function ee(e,t=!1){return e=e["__v_raw"],!t&&A(Re(e),"iterate",w),Reflect.get(e,"size",e)}function te(e){e=Re(e);const t=Re(this),n=X(t),r=n.has.call(t,e);return r||(t.add(e),O(t,"add",e,e)),this}function ne(e,t){t=Re(t);const n=Re(this),{has:i,get:s}=X(n);let o=i.call(n,e);o||(e=Re(e),o=i.call(n,e));const a=s.call(n,e);return n.set(e,t),o?(0,r.aU)(t,a)&&O(n,"set",e,t,a):O(n,"add",e,t),this}function re(e){const t=Re(this),{has:n,get:r}=X(t);let i=n.call(t,e);i||(e=Re(e),i=n.call(t,e));const s=r?r.call(t,e):void 0,o=t.delete(e);return i&&O(t,"delete",e,void 0,s),o}function ie(){const e=Re(this),t=0!==e.size,n=void 0,r=e.clear();return t&&O(e,"clear",void 0,void 0,n),r}function se(e,t){return function(n,r){const i=this,s=i["__v_raw"],o=Re(s),a=t?Y:e?Le:Ne;return!e&&A(o,"iterate",w),s.forEach(((e,t)=>n.call(r,a(e),a(t),i)))}}function oe(e,t,n){return function(...i){const s=this["__v_raw"],o=Re(s),a=(0,r._N)(o),l="entries"===e||e===Symbol.iterator&&a,c="keys"===e&&a,u=s[e](...i),h=n?Y:t?Le:Ne;return!t&&A(o,"iterate",c?b:w),{next(){const{value:e,done:t}=u.next();return t?{value:e,done:t}:{value:l?[h(e[0]),h(e[1])]:h(e),done:t}},[Symbol.iterator](){return this}}}}function ae(e){return function(...t){return"delete"!==e&&this}}function le(){const e={get(e){return Z(this,e)},get size(){return ee(this)},has:Q,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!1)},t={get(e){return Z(this,e,!1,!0)},get size(){return ee(this)},has:Q,add:te,set:ne,delete:re,clear:ie,forEach:se(!1,!0)},n={get(e){return Z(this,e,!0)},get size(){return ee(this,!0)},has(e){return Q.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!1)},r={get(e){return Z(this,e,!0,!0)},get size(){return ee(this,!0)},has(e){return Q.call(this,e,!0)},add:ae("add"),set:ae("set"),delete:ae("delete"),clear:ae("clear"),forEach:se(!0,!0)},i=["keys","values","entries",Symbol.iterator];return i.forEach((i=>{e[i]=oe(i,!1,!1),n[i]=oe(i,!0,!1),t[i]=oe(i,!1,!0),r[i]=oe(i,!0,!0)})),[e,n,t,r]}const[ce,ue,he,de]=le();function fe(e,t){const n=t?e?de:he:e?ue:ce;return(t,i,s)=>"__v_isReactive"===i?!e:"__v_isReadonly"===i?e:"__v_raw"===i?t:Reflect.get((0,r.RI)(n,i)&&i in t?n:t,i,s)}const pe={get:fe(!1,!1)},ge={get:fe(!1,!0)},me={get:fe(!0,!1)};const ve=new WeakMap,ye=new WeakMap,we=new WeakMap,be=new WeakMap;function _e(e){switch(e){case"Object":case"Array":return 1;case"Map":case"Set":case"WeakMap":case"WeakSet":return 2;default:return 0}}function Te(e){return e["__v_skip"]||!Object.isExtensible(e)?0:_e((0,r.W7)(e))}function Ee(e){return e&&e["__v_isReadonly"]?e:Se(e,!1,W,pe,ve)}function ke(e){return Se(e,!1,J,ge,ye)}function Ie(e){return Se(e,!0,G,me,we)}function Se(e,t,n,i,s){if(!(0,r.Kn)(e))return e;if(e["__v_raw"]&&(!t||!e["__v_isReactive"]))return e;const o=s.get(e);if(o)return o;const a=Te(e);if(0===a)return e;const l=new Proxy(e,2===a?i:n);return s.set(e,l),l}function Ce(e){return Ae(e)?Ce(e["__v_raw"]):!(!e||!e["__v_isReactive"])}function Ae(e){return!(!e||!e["__v_isReadonly"])}function xe(e){return Ce(e)||Ae(e)}function Re(e){const t=e&&e["__v_raw"];return t?Re(t):e}function Oe(e){return(0,r.Nj)(e,"__v_skip",!0),e}const Ne=e=>(0,r.Kn)(e)?Ee(e):e,Le=e=>(0,r.Kn)(e)?Ie(e):e;function Pe(e){x()&&(e=Re(e),e.dep||(e.dep=l()),R(e.dep))}function De(e,t){e=Re(e),e.dep&&N(e.dep)}function Fe(e){return Boolean(e&&!0===e.__v_isRef)}function Me(e){return Ve(e,!1)}function qe(e){return Ve(e,!0)}function Ve(e,t){return Fe(e)?e:new Ue(e,t)}class Ue{constructor(e,t){this._shallow=t,this.dep=void 0,this.__v_isRef=!0,this._rawValue=t?e:Re(e),this._value=t?e:Ne(e)}get value(){return Pe(this),this._value}set value(e){e=this._shallow?e:Re(e),(0,r.aU)(e,this._rawValue)&&(this._rawValue=e,this._value=this._shallow?e:Ne(e),De(this,e))}}function je(e){return Fe(e)?e.value:e}const Be={get:(e,t,n)=>je(Reflect.get(e,t,n)),set:(e,t,n,r)=>{const i=e[t];return Fe(i)&&!Fe(n)?(i.value=n,!0):Reflect.set(e,t,n,r)}};function $e(e){return Ce(e)?e:new Proxy(e,Be)}class ze{constructor(e,t,n){this._setter=t,this.dep=void 0,this._dirty=!0,this.__v_isRef=!0,this.effect=new _(e,(()=>{this._dirty||(this._dirty=!0,De(this))})),this["__v_isReadonly"]=n}get value(){const e=Re(this);return Pe(e),e._dirty&&(e._dirty=!1,e._value=e.effect.run()),e._value}set value(e){this._setter(e)}}function He(e,t){let n,i;const s=(0,r.mf)(e);s?(n=e,i=r.dG):(n=e.get,i=e.set);const o=new ze(n,i,s||!i);return o}Promise.resolve()},3673:(e,t,n)=>{"use strict";n.d(t,{P$:()=>C,HY:()=>Xe,$d:()=>Zt,j4:()=>ct,kq:()=>_t,iD:()=>lt,_:()=>gt,Us:()=>Ue,Uk:()=>bt,Wm:()=>mt,aZ:()=>P,FN:()=>Dt,Q6:()=>L,h:()=>Ln,f3:()=>E,dG:()=>It,Y3:()=>gn,Jd:()=>Y,Xn:()=>G,bv:()=>W,ic:()=>J,wg:()=>rt,Cn:()=>d,JJ:()=>T,dD:()=>h,Ko:()=>Ct,up:()=>We,U2:()=>x,nK:()=>N,Y8:()=>k,YP:()=>An,w5:()=>f,wy:()=>Ne});var r=n(1959),i=n(2323);new Set;new Map;function s(e,t,...n){const r=e.vnode.props||i.kT;let s=n;const o=t.startsWith("update:"),a=o&&t.slice(7);if(a&&a in r){const e=`${"modelValue"===a?"model":a}Modifiers`,{number:t,trim:o}=r[e]||i.kT;o?s=n.map((e=>e.trim())):t&&(s=n.map(i.He))}let l;let c=r[l=(0,i.hR)(t)]||r[l=(0,i.hR)((0,i._A)(t))];!c&&o&&(c=r[l=(0,i.hR)((0,i.rs)(t))]),c&&Zt(c,e,6,s);const u=r[l+"Once"];if(u){if(e.emitted){if(e.emitted[l])return}else e.emitted={};e.emitted[l]=!0,Zt(u,e,6,s)}}function o(e,t,n=!1){const r=t.emitsCache,s=r.get(e);if(void 0!==s)return s;const a=e.emits;let l={},c=!1;if(!(0,i.mf)(e)){const r=e=>{const n=o(e,t,!0);n&&(c=!0,(0,i.l7)(l,n))};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}return a||c?((0,i.kJ)(a)?a.forEach((e=>l[e]=null)):(0,i.l7)(l,a),r.set(e,l),l):(r.set(e,null),null)}function a(e,t){return!(!e||!(0,i.F7)(t))&&(t=t.slice(2).replace(/Once$/,""),(0,i.RI)(e,t[0].toLowerCase()+t.slice(1))||(0,i.RI)(e,(0,i.rs)(t))||(0,i.RI)(e,t))}let l=null,c=null;function u(e){const t=l;return l=e,c=e&&e.type.__scopeId||null,t}function h(e){c=e}function d(){c=null}function f(e,t=l,n){if(!t)return e;if(e._n)return e;const r=(...n)=>{r._d&&ot(-1);const i=u(t),s=e(...n);return u(i),r._d&&ot(1),s};return r._n=!0,r._c=!0,r._d=!0,r}function p(e){const{type:t,vnode:n,proxy:r,withProxy:s,props:o,propsOptions:[a],slots:l,attrs:c,emit:h,render:d,renderCache:f,data:p,setupState:v,ctx:y,inheritAttrs:w}=e;let b,_;const T=u(e);try{if(4&n.shapeFlag){const e=s||r;b=Tt(d.call(e,e,f,o,v,p,y)),_=c}else{const e=t;0,b=Tt(e.length>1?e(o,{attrs:c,slots:l,emit:h}):e(o,null)),_=t.props?c:g(c)}}catch(k){tt.length=0,Qt(k,e,1),b=mt(Qe)}let E=b;if(_&&!1!==w){const e=Object.keys(_),{shapeFlag:t}=E;e.length&&7&t&&(a&&e.some(i.tR)&&(_=m(_,a)),E=wt(E,_))}return n.dirs&&(E.dirs=E.dirs?E.dirs.concat(n.dirs):n.dirs),n.transition&&(E.transition=n.transition),b=E,u(T),b}const g=e=>{let t;for(const n in e)("class"===n||"style"===n||(0,i.F7)(n))&&((t||(t={}))[n]=e[n]);return t},m=(e,t)=>{const n={};for(const r in e)(0,i.tR)(r)&&r.slice(9)in t||(n[r]=e[r]);return n};function v(e,t,n){const{props:r,children:i,component:s}=e,{props:o,children:l,patchFlag:c}=t,u=s.emitsOptions;if(t.dirs||t.transition)return!0;if(!(n&&c>=0))return!(!i&&!l||l&&l.$stable)||r!==o&&(r?!o||y(r,o,u):!!o);if(1024&c)return!0;if(16&c)return r?y(r,o,u):!!o;if(8&c){const e=t.dynamicProps;for(let t=0;t<e.length;t++){const n=e[t];if(o[n]!==r[n]&&!a(u,n))return!0}}return!1}function y(e,t,n){const r=Object.keys(t);if(r.length!==Object.keys(e).length)return!0;for(let i=0;i<r.length;i++){const s=r[i];if(t[s]!==e[s]&&!a(n,s))return!0}return!1}function w({vnode:e,parent:t},n){while(t&&t.subTree===e)(e=t.vnode).el=n,t=t.parent}const b=e=>e.__isSuspense;function _(e,t){t&&t.pendingBranch?(0,i.kJ)(e)?t.effects.push(...e):t.effects.push(e):Tn(e)}function T(e,t){if(Pt){let n=Pt.provides;const r=Pt.parent&&Pt.parent.provides;r===n&&(n=Pt.provides=Object.create(r)),n[e]=t}else 0}function E(e,t,n=!1){const r=Pt||l;if(r){const s=null==r.parent?r.vnode.appContext&&r.vnode.appContext.provides:r.parent.provides;if(s&&e in s)return s[e];if(arguments.length>1)return n&&(0,i.mf)(t)?t.call(r.proxy):t}else 0}function k(){const e={isMounted:!1,isLeaving:!1,isUnmounting:!1,leavingVNodes:new Map};return W((()=>{e.isMounted=!0})),Y((()=>{e.isUnmounting=!0})),e}const I=[Function,Array],S={name:"BaseTransition",props:{mode:String,appear:Boolean,persisted:Boolean,onBeforeEnter:I,onEnter:I,onAfterEnter:I,onEnterCancelled:I,onBeforeLeave:I,onLeave:I,onAfterLeave:I,onLeaveCancelled:I,onBeforeAppear:I,onAppear:I,onAfterAppear:I,onAppearCancelled:I},setup(e,{slots:t}){const n=Dt(),i=k();let s;return()=>{const o=t.default&&L(t.default(),!0);if(!o||!o.length)return;const a=(0,r.IU)(e),{mode:l}=a;const c=o[0];if(i.isLeaving)return R(c);const u=O(c);if(!u)return R(c);const h=x(u,a,i,n);N(u,h);const d=n.subTree,f=d&&O(d);let p=!1;const{getTransitionKey:g}=u.type;if(g){const e=g();void 0===s?s=e:e!==s&&(s=e,p=!0)}if(f&&f.type!==Qe&&(!ht(u,f)||p)){const e=x(f,a,i,n);if(N(f,e),"out-in"===l)return i.isLeaving=!0,e.afterLeave=()=>{i.isLeaving=!1,n.update()},R(c);"in-out"===l&&u.type!==Qe&&(e.delayLeave=(e,t,n)=>{const r=A(i,f);r[String(f.key)]=f,e._leaveCb=()=>{t(),e._leaveCb=void 0,delete h.delayedLeave},h.delayedLeave=n})}return c}}},C=S;function A(e,t){const{leavingVNodes:n}=e;let r=n.get(t.type);return r||(r=Object.create(null),n.set(t.type,r)),r}function x(e,t,n,r){const{appear:i,mode:s,persisted:o=!1,onBeforeEnter:a,onEnter:l,onAfterEnter:c,onEnterCancelled:u,onBeforeLeave:h,onLeave:d,onAfterLeave:f,onLeaveCancelled:p,onBeforeAppear:g,onAppear:m,onAfterAppear:v,onAppearCancelled:y}=t,w=String(e.key),b=A(n,e),_=(e,t)=>{e&&Zt(e,r,9,t)},T={mode:s,persisted:o,beforeEnter(t){let r=a;if(!n.isMounted){if(!i)return;r=g||a}t._leaveCb&&t._leaveCb(!0);const s=b[w];s&&ht(e,s)&&s.el._leaveCb&&s.el._leaveCb(),_(r,[t])},enter(e){let t=l,r=c,s=u;if(!n.isMounted){if(!i)return;t=m||l,r=v||c,s=y||u}let o=!1;const a=e._enterCb=t=>{o||(o=!0,_(t?s:r,[e]),T.delayedLeave&&T.delayedLeave(),e._enterCb=void 0)};t?(t(e,a),t.length<=1&&a()):a()},leave(t,r){const i=String(e.key);if(t._enterCb&&t._enterCb(!0),n.isUnmounting)return r();_(h,[t]);let s=!1;const o=t._leaveCb=n=>{s||(s=!0,r(),_(n?p:f,[t]),t._leaveCb=void 0,b[i]===e&&delete b[i])};b[i]=e,d?(d(t,o),d.length<=1&&o()):o()},clone(e){return x(e,t,n,r)}};return T}function R(e){if(F(e))return e=wt(e),e.children=null,e}function O(e){return F(e)?e.children?e.children[0]:void 0:e}function N(e,t){6&e.shapeFlag&&e.component?N(e.component.subTree,t):128&e.shapeFlag?(e.ssContent.transition=t.clone(e.ssContent),e.ssFallback.transition=t.clone(e.ssFallback)):e.transition=t}function L(e,t=!1){let n=[],r=0;for(let i=0;i<e.length;i++){const s=e[i];s.type===Xe?(128&s.patchFlag&&r++,n=n.concat(L(s.children,t))):(t||s.type!==Qe)&&n.push(s)}if(r>1)for(let i=0;i<n.length;i++)n[i].patchFlag=-2;return n}function P(e){return(0,i.mf)(e)?{setup:e,name:e.name}:e}const D=e=>!!e.type.__asyncLoader;const F=e=>e.type.__isKeepAlive;RegExp,RegExp;function M(e,t){return(0,i.kJ)(e)?e.some((e=>M(e,t))):(0,i.HD)(e)?e.split(",").indexOf(t)>-1:!!e.test&&e.test(t)}function q(e,t){U(e,"a",t)}function V(e,t){U(e,"da",t)}function U(e,t,n=Pt){const r=e.__wdc||(e.__wdc=()=>{let t=n;while(t){if(t.isDeactivated)return;t=t.parent}return e()});if(z(t,r,n),n){let e=n.parent;while(e&&e.parent)F(e.parent.vnode)&&j(r,t,n,e),e=e.parent}}function j(e,t,n,r){const s=z(t,e,r,!0);X((()=>{(0,i.Od)(r[t],s)}),n)}function B(e){let t=e.shapeFlag;256&t&&(t-=256),512&t&&(t-=512),e.shapeFlag=t}function $(e){return 128&e.shapeFlag?e.ssContent:e}function z(e,t,n=Pt,i=!1){if(n){const s=n[e]||(n[e]=[]),o=t.__weh||(t.__weh=(...i)=>{if(n.isUnmounted)return;(0,r.Jd)(),Ft(n);const s=Zt(t,n,e,i);return Mt(),(0,r.lk)(),s});return i?s.unshift(o):s.push(o),o}}const H=e=>(t,n=Pt)=>(!jt||"sp"===e)&&z(e,t,n),K=H("bm"),W=H("m"),G=H("bu"),J=H("u"),Y=H("bum"),X=H("um"),Z=H("sp"),Q=H("rtg"),ee=H("rtc");function te(e,t=Pt){z("ec",e,t)}let ne=!0;function re(e){const t=ae(e),n=e.proxy,s=e.ctx;ne=!1,t.beforeCreate&&se(t.beforeCreate,e,"bc");const{data:o,computed:a,methods:l,watch:c,provide:u,inject:h,created:d,beforeMount:f,mounted:p,beforeUpdate:g,updated:m,activated:v,deactivated:y,beforeDestroy:w,beforeUnmount:b,destroyed:_,unmounted:E,render:k,renderTracked:I,renderTriggered:S,errorCaptured:C,serverPrefetch:A,expose:x,inheritAttrs:R,components:O,directives:N,filters:L}=t,P=null;if(h&&ie(h,s,P,e.appContext.config.unwrapInjectedRef),l)for(const r in l){const e=l[r];(0,i.mf)(e)&&(s[r]=e.bind(n))}if(o){0;const t=o.call(n,n);0,(0,i.Kn)(t)&&(e.data=(0,r.qj)(t))}if(ne=!0,a)for(const T in a){const e=a[T],t=(0,i.mf)(e)?e.bind(n,n):(0,i.mf)(e.get)?e.get.bind(n,n):i.dG;0;const o=!(0,i.mf)(e)&&(0,i.mf)(e.set)?e.set.bind(n):i.dG,l=(0,r.Fl)({get:t,set:o});Object.defineProperty(s,T,{enumerable:!0,configurable:!0,get:()=>l.value,set:e=>l.value=e})}if(c)for(const r in c)oe(c[r],s,n,r);if(u){const e=(0,i.mf)(u)?u.call(n):u;Reflect.ownKeys(e).forEach((t=>{T(t,e[t])}))}function D(e,t){(0,i.kJ)(t)?t.forEach((t=>e(t.bind(n)))):t&&e(t.bind(n))}if(d&&se(d,e,"c"),D(K,f),D(W,p),D(G,g),D(J,m),D(q,v),D(V,y),D(te,C),D(ee,I),D(Q,S),D(Y,b),D(X,E),D(Z,A),(0,i.kJ)(x))if(x.length){const t=e.exposed||(e.exposed={});x.forEach((e=>{Object.defineProperty(t,e,{get:()=>n[e],set:t=>n[e]=t})}))}else e.exposed||(e.exposed={});k&&e.render===i.dG&&(e.render=k),null!=R&&(e.inheritAttrs=R),O&&(e.components=O),N&&(e.directives=N)}function ie(e,t,n=i.dG,s=!1){(0,i.kJ)(e)&&(e=de(e));for(const o in e){const n=e[o];let a;a=(0,i.Kn)(n)?"default"in n?E(n.from||o,n.default,!0):E(n.from||o):E(n),(0,r.dq)(a)&&s?Object.defineProperty(t,o,{enumerable:!0,configurable:!0,get:()=>a.value,set:e=>a.value=e}):t[o]=a}}function se(e,t,n){Zt((0,i.kJ)(e)?e.map((e=>e.bind(t.proxy))):e.bind(t.proxy),t,n)}function oe(e,t,n,r){const s=r.includes(".")?On(n,r):()=>n[r];if((0,i.HD)(e)){const n=t[e];(0,i.mf)(n)&&An(s,n)}else if((0,i.mf)(e))An(s,e.bind(n));else if((0,i.Kn)(e))if((0,i.kJ)(e))e.forEach((e=>oe(e,t,n,r)));else{const r=(0,i.mf)(e.handler)?e.handler.bind(n):t[e.handler];(0,i.mf)(r)&&An(s,r,e)}else 0}function ae(e){const t=e.type,{mixins:n,extends:r}=t,{mixins:i,optionsCache:s,config:{optionMergeStrategies:o}}=e.appContext,a=s.get(t);let l;return a?l=a:i.length||n||r?(l={},i.length&&i.forEach((e=>le(l,e,o,!0))),le(l,t,o)):l=t,s.set(t,l),l}function le(e,t,n,r=!1){const{mixins:i,extends:s}=t;s&&le(e,s,n,!0),i&&i.forEach((t=>le(e,t,n,!0)));for(const o in t)if(r&&"expose"===o);else{const r=ce[o]||n&&n[o];e[o]=r?r(e[o],t[o]):t[o]}return e}const ce={data:ue,props:pe,emits:pe,methods:pe,computed:pe,beforeCreate:fe,created:fe,beforeMount:fe,mounted:fe,beforeUpdate:fe,updated:fe,beforeDestroy:fe,beforeUnmount:fe,destroyed:fe,unmounted:fe,activated:fe,deactivated:fe,errorCaptured:fe,serverPrefetch:fe,components:pe,directives:pe,watch:ge,provide:ue,inject:he};function ue(e,t){return t?e?function(){return(0,i.l7)((0,i.mf)(e)?e.call(this,this):e,(0,i.mf)(t)?t.call(this,this):t)}:t:e}function he(e,t){return pe(de(e),de(t))}function de(e){if((0,i.kJ)(e)){const t={};for(let n=0;n<e.length;n++)t[e[n]]=e[n];return t}return e}function fe(e,t){return e?[...new Set([].concat(e,t))]:t}function pe(e,t){return e?(0,i.l7)((0,i.l7)(Object.create(null),e),t):t}function ge(e,t){if(!e)return t;if(!t)return e;const n=(0,i.l7)(Object.create(null),e);for(const r in t)n[r]=fe(e[r],t[r]);return n}function me(e,t,n,s=!1){const o={},a={};(0,i.Nj)(a,dt,1),e.propsDefaults=Object.create(null),ye(e,t,o,a);for(const r in e.propsOptions[0])r in o||(o[r]=void 0);n?e.props=s?o:(0,r.Um)(o):e.type.props?e.props=o:e.props=a,e.attrs=a}function ve(e,t,n,s){const{props:o,attrs:a,vnode:{patchFlag:l}}=e,c=(0,r.IU)(o),[u]=e.propsOptions;let h=!1;if(!(s||l>0)||16&l){let r;ye(e,t,o,a)&&(h=!0);for(const s in c)t&&((0,i.RI)(t,s)||(r=(0,i.rs)(s))!==s&&(0,i.RI)(t,r))||(u?!n||void 0===n[s]&&void 0===n[r]||(o[s]=we(u,c,s,void 0,e,!0)):delete o[s]);if(a!==c)for(const e in a)t&&(0,i.RI)(t,e)||(delete a[e],h=!0)}else if(8&l){const n=e.vnode.dynamicProps;for(let r=0;r<n.length;r++){let s=n[r];const l=t[s];if(u)if((0,i.RI)(a,s))l!==a[s]&&(a[s]=l,h=!0);else{const t=(0,i._A)(s);o[t]=we(u,c,t,l,e,!1)}else l!==a[s]&&(a[s]=l,h=!0)}}h&&(0,r.X$)(e,"set","$attrs")}function ye(e,t,n,s){const[o,l]=e.propsOptions;let c,u=!1;if(t)for(let r in t){if((0,i.Gg)(r))continue;const h=t[r];let d;o&&(0,i.RI)(o,d=(0,i._A)(r))?l&&l.includes(d)?(c||(c={}))[d]=h:n[d]=h:a(e.emitsOptions,r)||r in s&&h===s[r]||(s[r]=h,u=!0)}if(l){const t=(0,r.IU)(n),s=c||i.kT;for(let r=0;r<l.length;r++){const a=l[r];n[a]=we(o,t,a,s[a],e,!(0,i.RI)(s,a))}}return u}function we(e,t,n,r,s,o){const a=e[n];if(null!=a){const e=(0,i.RI)(a,"default");if(e&&void 0===r){const e=a.default;if(a.type!==Function&&(0,i.mf)(e)){const{propsDefaults:i}=s;n in i?r=i[n]:(Ft(s),r=i[n]=e.call(null,t),Mt())}else r=e}a[0]&&(o&&!e?r=!1:!a[1]||""!==r&&r!==(0,i.rs)(n)||(r=!0))}return r}function be(e,t,n=!1){const r=t.propsCache,s=r.get(e);if(s)return s;const o=e.props,a={},l=[];let c=!1;if(!(0,i.mf)(e)){const r=e=>{c=!0;const[n,r]=be(e,t,!0);(0,i.l7)(a,n),r&&l.push(...r)};!n&&t.mixins.length&&t.mixins.forEach(r),e.extends&&r(e.extends),e.mixins&&e.mixins.forEach(r)}if(!o&&!c)return r.set(e,i.Z6),i.Z6;if((0,i.kJ)(o))for(let h=0;h<o.length;h++){0;const e=(0,i._A)(o[h]);_e(e)&&(a[e]=i.kT)}else if(o){0;for(const e in o){const t=(0,i._A)(e);if(_e(t)){const n=o[e],r=a[t]=(0,i.kJ)(n)||(0,i.mf)(n)?{type:n}:n;if(r){const e=ke(Boolean,r.type),n=ke(String,r.type);r[0]=e>-1,r[1]=n<0||e<n,(e>-1||(0,i.RI)(r,"default"))&&l.push(t)}}}}const u=[a,l];return r.set(e,u),u}function _e(e){return"$"!==e[0]}function Te(e){const t=e&&e.toString().match(/^\s*function (\w+)/);return t?t[1]:null===e?"null":""}function Ee(e,t){return Te(e)===Te(t)}function ke(e,t){return(0,i.kJ)(t)?t.findIndex((t=>Ee(t,e))):(0,i.mf)(t)&&Ee(t,e)?0:-1}const Ie=e=>"_"===e[0]||"$stable"===e,Se=e=>(0,i.kJ)(e)?e.map(Tt):[Tt(e)],Ce=(e,t,n)=>{const r=f(((...e)=>Se(t(...e))),n);return r._c=!1,r},Ae=(e,t,n)=>{const r=e._ctx;for(const s in e){if(Ie(s))continue;const n=e[s];if((0,i.mf)(n))t[s]=Ce(s,n,r);else if(null!=n){0;const e=Se(n);t[s]=()=>e}}},xe=(e,t)=>{const n=Se(t);e.slots.default=()=>n},Re=(e,t)=>{if(32&e.vnode.shapeFlag){const n=t._;n?(e.slots=(0,r.IU)(t),(0,i.Nj)(t,"_",n)):Ae(t,e.slots={})}else e.slots={},t&&xe(e,t);(0,i.Nj)(e.slots,dt,1)},Oe=(e,t,n)=>{const{vnode:r,slots:s}=e;let o=!0,a=i.kT;if(32&r.shapeFlag){const e=t._;e?n&&1===e?o=!1:((0,i.l7)(s,t),n||1!==e||delete s._):(o=!t.$stable,Ae(t,s)),a=t}else t&&(xe(e,t),a={default:1});if(o)for(const i in s)Ie(i)||i in a||delete s[i]};function Ne(e,t){const n=l;if(null===n)return e;const r=n.proxy,s=e.dirs||(e.dirs=[]);for(let o=0;o<t.length;o++){let[e,n,a,l=i.kT]=t[o];(0,i.mf)(e)&&(e={mounted:e,updated:e}),e.deep&&Nn(n),s.push({dir:e,instance:r,value:n,oldValue:void 0,arg:a,modifiers:l})}return e}function Le(e,t,n,i){const s=e.dirs,o=t&&t.dirs;for(let a=0;a<s.length;a++){const l=s[a];o&&(l.oldValue=o[a].value);let c=l.dir[i];c&&((0,r.Jd)(),Zt(c,n,8,[e.el,l,e,t]),(0,r.lk)())}}function Pe(){return{app:null,config:{isNativeTag:i.NO,performance:!1,globalProperties:{},optionMergeStrategies:{},errorHandler:void 0,warnHandler:void 0,compilerOptions:{}},mixins:[],components:{},directives:{},provides:Object.create(null),optionsCache:new WeakMap,propsCache:new WeakMap,emitsCache:new WeakMap}}let De=0;function Fe(e,t){return function(n,r=null){null==r||(0,i.Kn)(r)||(r=null);const s=Pe(),o=new Set;let a=!1;const l=s.app={_uid:De++,_component:n,_props:r,_container:null,_context:s,_instance:null,version:Pn,get config(){return s.config},set config(e){0},use(e,...t){return o.has(e)||(e&&(0,i.mf)(e.install)?(o.add(e),e.install(l,...t)):(0,i.mf)(e)&&(o.add(e),e(l,...t))),l},mixin(e){return s.mixins.includes(e)||s.mixins.push(e),l},component(e,t){return t?(s.components[e]=t,l):s.components[e]},directive(e,t){return t?(s.directives[e]=t,l):s.directives[e]},mount(i,o,c){if(!a){const u=mt(n,r);return u.appContext=s,o&&t?t(u,i):e(u,i,c),a=!0,l._container=i,i.__vue_app__=l,Gt(u.component)||u.component.proxy}},unmount(){a&&(e(null,l._container),delete l._container.__vue_app__)},provide(e,t){return s.provides[e]=t,l}};return l}}function Me(e,t,n,s,o=!1){if((0,i.kJ)(e))return void e.forEach(((e,r)=>Me(e,t&&((0,i.kJ)(t)?t[r]:t),n,s,o)));if(D(s)&&!o)return;const a=4&s.shapeFlag?Gt(s.component)||s.component.proxy:s.el,l=o?null:a,{i:c,r:u}=e;const h=t&&t.r,d=c.refs===i.kT?c.refs={}:c.refs,f=c.setupState;if(null!=h&&h!==u&&((0,i.HD)(h)?(d[h]=null,(0,i.RI)(f,h)&&(f[h]=null)):(0,r.dq)(h)&&(h.value=null)),(0,i.mf)(u))Xt(u,c,12,[l,d]);else{const t=(0,i.HD)(u),s=(0,r.dq)(u);if(t||s){const s=()=>{if(e.f){const n=t?d[u]:u.value;o?(0,i.kJ)(n)&&(0,i.Od)(n,a):(0,i.kJ)(n)?n.includes(a)||n.push(a):t?d[u]=[a]:(u.value=[a],e.k&&(d[e.k]=u.value))}else t?(d[u]=l,(0,i.RI)(f,u)&&(f[u]=l)):(0,r.dq)(u)&&(u.value=l,e.k&&(d[e.k]=l))};l?(s.id=-1,Ve(s,n)):s()}else 0}}function qe(){}const Ve=_;function Ue(e){return je(e)}function je(e,t){qe();const n=(0,i.E9)();n.__VUE__=!0;const{insert:s,remove:o,patchProp:a,createElement:l,createText:c,createComment:u,setText:h,setElementText:d,parentNode:f,nextSibling:g,setScopeId:m=i.dG,cloneNode:y,insertStaticContent:b}=e,_=(e,t,n,r=null,i=null,s=null,o=!1,a=null,l=!!t.dynamicChildren)=>{if(e===t)return;e&&!ht(e,t)&&(r=X(e),K(e,i,s,!0),e=null),-2===t.patchFlag&&(l=!1,t.dynamicChildren=null);const{type:c,ref:u,shapeFlag:h}=t;switch(c){case Ze:T(e,t,n,r);break;case Qe:E(e,t,n,r);break;case et:null==e&&k(t,n,r,o);break;case Xe:P(e,t,n,r,i,s,o,a,l);break;default:1&h?C(e,t,n,r,i,s,o,a,l):6&h?M(e,t,n,r,i,s,o,a,l):(64&h||128&h)&&c.process(e,t,n,r,i,s,o,a,l,Q)}null!=u&&i&&Me(u,e&&e.ref,s,t||e,!t)},T=(e,t,n,r)=>{if(null==e)s(t.el=c(t.children),n,r);else{const n=t.el=e.el;t.children!==e.children&&h(n,t.children)}},E=(e,t,n,r)=>{null==e?s(t.el=u(t.children||""),n,r):t.el=e.el},k=(e,t,n,r)=>{[e.el,e.anchor]=b(e.children,t,n,r)},I=({el:e,anchor:t},n,r)=>{let i;while(e&&e!==t)i=g(e),s(e,n,r),e=i;s(t,n,r)},S=({el:e,anchor:t})=>{let n;while(e&&e!==t)n=g(e),o(e),e=n;o(t)},C=(e,t,n,r,i,s,o,a,l)=>{o=o||"svg"===t.type,null==e?A(t,n,r,i,s,o,a,l):O(e,t,i,s,o,a,l)},A=(e,t,n,r,o,c,u,h)=>{let f,p;const{type:g,props:m,shapeFlag:v,transition:w,patchFlag:b,dirs:_}=e;if(e.el&&void 0!==y&&-1===b)f=e.el=y(e.el);else{if(f=e.el=l(e.type,c,m&&m.is,m),8&v?d(f,e.children):16&v&&R(e.children,f,null,r,o,c&&"foreignObject"!==g,u,h),_&&Le(e,null,r,"created"),m){for(const t in m)"value"===t||(0,i.Gg)(t)||a(f,t,null,m[t],c,e.children,r,o,Y);"value"in m&&a(f,"value",null,m.value),(p=m.onVnodeBeforeMount)&&St(p,r,e)}x(f,e,e.scopeId,u,r)}_&&Le(e,null,r,"beforeMount");const T=(!o||o&&!o.pendingBranch)&&w&&!w.persisted;T&&w.beforeEnter(f),s(f,t,n),((p=m&&m.onVnodeMounted)||T||_)&&Ve((()=>{p&&St(p,r,e),T&&w.enter(f),_&&Le(e,null,r,"mounted")}),o)},x=(e,t,n,r,i)=>{if(n&&m(e,n),r)for(let s=0;s<r.length;s++)m(e,r[s]);if(i){let n=i.subTree;if(t===n){const t=i.vnode;x(e,t,t.scopeId,t.slotScopeIds,i.parent)}}},R=(e,t,n,r,i,s,o,a,l=0)=>{for(let c=l;c<e.length;c++){const l=e[c]=a?Et(e[c]):Tt(e[c]);_(null,l,t,n,r,i,s,o,a)}},O=(e,t,n,r,s,o,l)=>{const c=t.el=e.el;let{patchFlag:u,dynamicChildren:h,dirs:f}=t;u|=16&e.patchFlag;const p=e.props||i.kT,g=t.props||i.kT;let m;n&&Be(n,!1),(m=g.onVnodeBeforeUpdate)&&St(m,n,t,e),f&&Le(t,e,n,"beforeUpdate"),n&&Be(n,!0);const v=s&&"foreignObject"!==t.type;if(h?N(e.dynamicChildren,h,c,n,r,v,o):l||B(e,t,c,null,n,r,v,o,!1),u>0){if(16&u)L(c,t,p,g,n,r,s);else if(2&u&&p.class!==g.class&&a(c,"class",null,g.class,s),4&u&&a(c,"style",p.style,g.style,s),8&u){const i=t.dynamicProps;for(let t=0;t<i.length;t++){const o=i[t],l=p[o],u=g[o];u===l&&"value"!==o||a(c,o,l,u,s,e.children,n,r,Y)}}1&u&&e.children!==t.children&&d(c,t.children)}else l||null!=h||L(c,t,p,g,n,r,s);((m=g.onVnodeUpdated)||f)&&Ve((()=>{m&&St(m,n,t,e),f&&Le(t,e,n,"updated")}),r)},N=(e,t,n,r,i,s,o)=>{for(let a=0;a<t.length;a++){const l=e[a],c=t[a],u=l.el&&(l.type===Xe||!ht(l,c)||70&l.shapeFlag)?f(l.el):n;_(l,c,u,null,r,i,s,o,!0)}},L=(e,t,n,r,s,o,l)=>{if(n!==r){for(const c in r){if((0,i.Gg)(c))continue;const u=r[c],h=n[c];u!==h&&"value"!==c&&a(e,c,h,u,l,t.children,s,o,Y)}if(n!==i.kT)for(const c in n)(0,i.Gg)(c)||c in r||a(e,c,n[c],null,l,t.children,s,o,Y);"value"in r&&a(e,"value",n.value,r.value)}},P=(e,t,n,r,i,o,a,l,u)=>{const h=t.el=e?e.el:c(""),d=t.anchor=e?e.anchor:c("");let{patchFlag:f,dynamicChildren:p,slotScopeIds:g}=t;g&&(l=l?l.concat(g):g),null==e?(s(h,n,r),s(d,n,r),R(t.children,n,d,i,o,a,l,u)):f>0&&64&f&&p&&e.dynamicChildren?(N(e.dynamicChildren,p,n,i,o,a,l),(null!=t.key||i&&t===i.subTree)&&$e(e,t,!0)):B(e,t,n,d,i,o,a,l,u)},M=(e,t,n,r,i,s,o,a,l)=>{t.slotScopeIds=a,null==e?512&t.shapeFlag?i.ctx.activate(t,n,r,o,l):q(t,n,r,i,s,o,l):V(e,t,l)},q=(e,t,n,r,i,s,o)=>{const a=e.component=Lt(e,r,i);if(F(e)&&(a.ctx.renderer=Q),Bt(a),a.asyncDep){if(i&&i.registerDep(a,U),!e.el){const e=a.subTree=mt(Qe);E(null,e,t,n)}}else U(a,e,t,n,i,s,o)},V=(e,t,n)=>{const r=t.component=e.component;if(v(e,t,n)){if(r.asyncDep&&!r.asyncResolved)return void j(r,t,n);r.next=t,wn(r.update),r.update()}else t.component=e.component,t.el=e.el,r.vnode=t},U=(e,t,n,s,o,a,l)=>{const c=()=>{if(e.isMounted){let t,{next:n,bu:r,u:s,parent:c,vnode:u}=e,h=n;0,Be(e,!1),n?(n.el=u.el,j(e,n,l)):n=u,r&&(0,i.ir)(r),(t=n.props&&n.props.onVnodeBeforeUpdate)&&St(t,c,n,u),Be(e,!0);const d=p(e);0;const g=e.subTree;e.subTree=d,_(g,d,f(g.el),X(g),e,o,a),n.el=d.el,null===h&&w(e,d.el),s&&Ve(s,o),(t=n.props&&n.props.onVnodeUpdated)&&Ve((()=>St(t,c,n,u)),o)}else{let r;const{el:l,props:c}=t,{bm:u,m:h,parent:d}=e,f=D(t);if(Be(e,!1),u&&(0,i.ir)(u),!f&&(r=c&&c.onVnodeBeforeMount)&&St(r,d,t),Be(e,!0),l&&te){const n=()=>{e.subTree=p(e),te(l,e.subTree,e,o,null)};f?t.type.__asyncLoader().then((()=>!e.isUnmounted&&n())):n()}else{0;const r=e.subTree=p(e);0,_(null,r,n,s,e,o,a),t.el=r.el}if(h&&Ve(h,o),!f&&(r=c&&c.onVnodeMounted)){const e=t;Ve((()=>St(r,d,e)),o)}256&t.shapeFlag&&e.a&&Ve(e.a,o),e.isMounted=!0,t=n=s=null}},u=e.effect=new r.qq(c,(()=>vn(e.update)),e.scope),h=e.update=u.run.bind(u);h.id=e.uid,Be(e,!0),h()},j=(e,t,n)=>{t.component=e;const i=e.vnode.props;e.vnode=t,e.next=null,ve(e,t.props,i,n),Oe(e,t.children,n),(0,r.Jd)(),En(void 0,e.update),(0,r.lk)()},B=(e,t,n,r,i,s,o,a,l=!1)=>{const c=e&&e.children,u=e?e.shapeFlag:0,h=t.children,{patchFlag:f,shapeFlag:p}=t;if(f>0){if(128&f)return void z(c,h,n,r,i,s,o,a,l);if(256&f)return void $(c,h,n,r,i,s,o,a,l)}8&p?(16&u&&Y(c,i,s),h!==c&&d(n,h)):16&u?16&p?z(c,h,n,r,i,s,o,a,l):Y(c,i,s,!0):(8&u&&d(n,""),16&p&&R(h,n,r,i,s,o,a,l))},$=(e,t,n,r,s,o,a,l,c)=>{e=e||i.Z6,t=t||i.Z6;const u=e.length,h=t.length,d=Math.min(u,h);let f;for(f=0;f<d;f++){const r=t[f]=c?Et(t[f]):Tt(t[f]);_(e[f],r,n,null,s,o,a,l,c)}u>h?Y(e,s,o,!0,!1,d):R(t,n,r,s,o,a,l,c,d)},z=(e,t,n,r,s,o,a,l,c)=>{let u=0;const h=t.length;let d=e.length-1,f=h-1;while(u<=d&&u<=f){const r=e[u],i=t[u]=c?Et(t[u]):Tt(t[u]);if(!ht(r,i))break;_(r,i,n,null,s,o,a,l,c),u++}while(u<=d&&u<=f){const r=e[d],i=t[f]=c?Et(t[f]):Tt(t[f]);if(!ht(r,i))break;_(r,i,n,null,s,o,a,l,c),d--,f--}if(u>d){if(u<=f){const e=f+1,i=e<h?t[e].el:r;while(u<=f)_(null,t[u]=c?Et(t[u]):Tt(t[u]),n,i,s,o,a,l,c),u++}}else if(u>f)while(u<=d)K(e[u],s,o,!0),u++;else{const p=u,g=u,m=new Map;for(u=g;u<=f;u++){const e=t[u]=c?Et(t[u]):Tt(t[u]);null!=e.key&&m.set(e.key,u)}let v,y=0;const w=f-g+1;let b=!1,T=0;const E=new Array(w);for(u=0;u<w;u++)E[u]=0;for(u=p;u<=d;u++){const r=e[u];if(y>=w){K(r,s,o,!0);continue}let i;if(null!=r.key)i=m.get(r.key);else for(v=g;v<=f;v++)if(0===E[v-g]&&ht(r,t[v])){i=v;break}void 0===i?K(r,s,o,!0):(E[i-g]=u+1,i>=T?T=i:b=!0,_(r,t[i],n,null,s,o,a,l,c),y++)}const k=b?ze(E):i.Z6;for(v=k.length-1,u=w-1;u>=0;u--){const e=g+u,i=t[e],d=e+1<h?t[e+1].el:r;0===E[u]?_(null,i,n,d,s,o,a,l,c):b&&(v<0||u!==k[v]?H(i,n,d,2):v--)}}},H=(e,t,n,r,i=null)=>{const{el:o,type:a,transition:l,children:c,shapeFlag:u}=e;if(6&u)return void H(e.component.subTree,t,n,r);if(128&u)return void e.suspense.move(t,n,r);if(64&u)return void a.move(e,t,n,Q);if(a===Xe){s(o,t,n);for(let e=0;e<c.length;e++)H(c[e],t,n,r);return void s(e.anchor,t,n)}if(a===et)return void I(e,t,n);const h=2!==r&&1&u&&l;if(h)if(0===r)l.beforeEnter(o),s(o,t,n),Ve((()=>l.enter(o)),i);else{const{leave:e,delayLeave:r,afterLeave:i}=l,a=()=>s(o,t,n),c=()=>{e(o,(()=>{a(),i&&i()}))};r?r(o,a,c):c()}else s(o,t,n)},K=(e,t,n,r=!1,i=!1)=>{const{type:s,props:o,ref:a,children:l,dynamicChildren:c,shapeFlag:u,patchFlag:h,dirs:d}=e;if(null!=a&&Me(a,null,n,e,!0),256&u)return void t.ctx.deactivate(e);const f=1&u&&d,p=!D(e);let g;if(p&&(g=o&&o.onVnodeBeforeUnmount)&&St(g,t,e),6&u)J(e.component,n,r);else{if(128&u)return void e.suspense.unmount(n,r);f&&Le(e,null,t,"beforeUnmount"),64&u?e.type.remove(e,t,n,i,Q,r):c&&(s!==Xe||h>0&&64&h)?Y(c,t,n,!1,!0):(s===Xe&&384&h||!i&&16&u)&&Y(l,t,n),r&&W(e)}(p&&(g=o&&o.onVnodeUnmounted)||f)&&Ve((()=>{g&&St(g,t,e),f&&Le(e,null,t,"unmounted")}),n)},W=e=>{const{type:t,el:n,anchor:r,transition:i}=e;if(t===Xe)return void G(n,r);if(t===et)return void S(e);const s=()=>{o(n),i&&!i.persisted&&i.afterLeave&&i.afterLeave()};if(1&e.shapeFlag&&i&&!i.persisted){const{leave:t,delayLeave:r}=i,o=()=>t(n,s);r?r(e.el,s,o):o()}else s()},G=(e,t)=>{let n;while(e!==t)n=g(e),o(e),e=n;o(t)},J=(e,t,n)=>{const{bum:r,scope:s,update:o,subTree:a,um:l}=e;r&&(0,i.ir)(r),s.stop(),o&&(o.active=!1,K(a,e,t,n)),l&&Ve(l,t),Ve((()=>{e.isUnmounted=!0}),t),t&&t.pendingBranch&&!t.isUnmounted&&e.asyncDep&&!e.asyncResolved&&e.suspenseId===t.pendingId&&(t.deps--,0===t.deps&&t.resolve())},Y=(e,t,n,r=!1,i=!1,s=0)=>{for(let o=s;o<e.length;o++)K(e[o],t,n,r,i)},X=e=>6&e.shapeFlag?X(e.component.subTree):128&e.shapeFlag?e.suspense.next():g(e.anchor||e.el),Z=(e,t,n)=>{null==e?t._vnode&&K(t._vnode,null,null,!0):_(t._vnode||null,e,t,null,null,null,n),kn(),t._vnode=e},Q={p:_,um:K,m:H,r:W,mt:q,mc:R,pc:B,pbc:N,n:X,o:e};let ee,te;return t&&([ee,te]=t(Q)),{render:Z,hydrate:ee,createApp:Fe(Z,ee)}}function Be({effect:e,update:t},n){e.allowRecurse=t.allowRecurse=n}function $e(e,t,n=!1){const r=e.children,s=t.children;if((0,i.kJ)(r)&&(0,i.kJ)(s))for(let i=0;i<r.length;i++){const e=r[i];let t=s[i];1&t.shapeFlag&&!t.dynamicChildren&&((t.patchFlag<=0||32===t.patchFlag)&&(t=s[i]=Et(s[i]),t.el=e.el),n||$e(e,t))}}function ze(e){const t=e.slice(),n=[0];let r,i,s,o,a;const l=e.length;for(r=0;r<l;r++){const l=e[r];if(0!==l){if(i=n[n.length-1],e[i]<l){t[r]=i,n.push(r);continue}s=0,o=n.length-1;while(s<o)a=s+o>>1,e[n[a]]<l?s=a+1:o=a;l<e[n[s]]&&(s>0&&(t[r]=n[s-1]),n[s]=r)}}s=n.length,o=n[s-1];while(s-- >0)n[s]=o,o=t[o];return n}const He=e=>e.__isTeleport;const Ke="components";function We(e,t){return Je(Ke,e,!0,t)||e}const Ge=Symbol();function Je(e,t,n=!0,r=!1){const s=l||Pt;if(s){const n=s.type;if(e===Ke){const e=Jt(n);if(e&&(e===t||e===(0,i._A)(t)||e===(0,i.kC)((0,i._A)(t))))return n}const o=Ye(s[e]||n[e],t)||Ye(s.appContext[e],t);return!o&&r?n:o}}function Ye(e,t){return e&&(e[t]||e[(0,i._A)(t)]||e[(0,i.kC)((0,i._A)(t))])}const Xe=Symbol(void 0),Ze=Symbol(void 0),Qe=Symbol(void 0),et=Symbol(void 0),tt=[];let nt=null;function rt(e=!1){tt.push(nt=e?null:[])}function it(){tt.pop(),nt=tt[tt.length-1]||null}let st=1;function ot(e){st+=e}function at(e){return e.dynamicChildren=st>0?nt||i.Z6:null,it(),st>0&&nt&&nt.push(e),e}function lt(e,t,n,r,i,s){return at(gt(e,t,n,r,i,s,!0))}function ct(e,t,n,r,i){return at(mt(e,t,n,r,i,!0))}function ut(e){return!!e&&!0===e.__v_isVNode}function ht(e,t){return e.type===t.type&&e.key===t.key}const dt="__vInternal",ft=({key:e})=>null!=e?e:null,pt=({ref:e,ref_key:t,ref_for:n})=>null!=e?(0,i.HD)(e)||(0,r.dq)(e)||(0,i.mf)(e)?{i:l,r:e,k:t,f:!!n}:e:null;function gt(e,t=null,n=null,r=0,s=null,o=(e===Xe?0:1),a=!1,l=!1){const u={__v_isVNode:!0,__v_skip:!0,type:e,props:t,key:t&&ft(t),ref:t&&pt(t),scopeId:c,slotScopeIds:null,children:n,component:null,suspense:null,ssContent:null,ssFallback:null,dirs:null,transition:null,el:null,anchor:null,target:null,targetAnchor:null,staticCount:0,shapeFlag:o,patchFlag:r,dynamicProps:s,dynamicChildren:null,appContext:null};return l?(kt(u,n),128&o&&e.normalize(u)):n&&(u.shapeFlag|=(0,i.HD)(n)?8:16),st>0&&!a&&nt&&(u.patchFlag>0||6&o)&&32!==u.patchFlag&&nt.push(u),u}const mt=vt;function vt(e,t=null,n=null,s=0,o=null,a=!1){if(e&&e!==Ge||(e=Qe),ut(e)){const r=wt(e,t,!0);return n&&kt(r,n),r}if(Yt(e)&&(e=e.__vccOpts),t){t=yt(t);let{class:e,style:n}=t;e&&!(0,i.HD)(e)&&(t.class=(0,i.C_)(e)),(0,i.Kn)(n)&&((0,r.X3)(n)&&!(0,i.kJ)(n)&&(n=(0,i.l7)({},n)),t.style=(0,i.j5)(n))}const l=(0,i.HD)(e)?1:b(e)?128:He(e)?64:(0,i.Kn)(e)?4:(0,i.mf)(e)?2:0;return gt(e,t,n,s,o,l,a,!0)}function yt(e){return e?(0,r.X3)(e)||dt in e?(0,i.l7)({},e):e:null}function wt(e,t,n=!1){const{props:r,ref:s,patchFlag:o,children:a}=e,l=t?It(r||{},t):r,c={__v_isVNode:!0,__v_skip:!0,type:e.type,props:l,key:l&&ft(l),ref:t&&t.ref?n&&s?(0,i.kJ)(s)?s.concat(pt(t)):[s,pt(t)]:pt(t):s,scopeId:e.scopeId,slotScopeIds:e.slotScopeIds,children:a,target:e.target,targetAnchor:e.targetAnchor,staticCount:e.staticCount,shapeFlag:e.shapeFlag,patchFlag:t&&e.type!==Xe?-1===o?16:16|o:o,dynamicProps:e.dynamicProps,dynamicChildren:e.dynamicChildren,appContext:e.appContext,dirs:e.dirs,transition:e.transition,component:e.component,suspense:e.suspense,ssContent:e.ssContent&&wt(e.ssContent),ssFallback:e.ssFallback&&wt(e.ssFallback),el:e.el,anchor:e.anchor};return c}function bt(e=" ",t=0){return mt(Ze,null,e,t)}function _t(e="",t=!1){return t?(rt(),ct(Qe,null,e)):mt(Qe,null,e)}function Tt(e){return null==e||"boolean"===typeof e?mt(Qe):(0,i.kJ)(e)?mt(Xe,null,e.slice()):"object"===typeof e?Et(e):mt(Ze,null,String(e))}function Et(e){return null===e.el||e.memo?e:wt(e)}function kt(e,t){let n=0;const{shapeFlag:r}=e;if(null==t)t=null;else if((0,i.kJ)(t))n=16;else if("object"===typeof t){if(65&r){const n=t.default;return void(n&&(n._c&&(n._d=!1),kt(e,n()),n._c&&(n._d=!0)))}{n=32;const r=t._;r||dt in t?3===r&&l&&(1===l.slots._?t._=1:(t._=2,e.patchFlag|=1024)):t._ctx=l}}else(0,i.mf)(t)?(t={default:t,_ctx:l},n=32):(t=String(t),64&r?(n=16,t=[bt(t)]):n=8);e.children=t,e.shapeFlag|=n}function It(...e){const t={};for(let n=0;n<e.length;n++){const r=e[n];for(const e in r)if("class"===e)t.class!==r.class&&(t.class=(0,i.C_)([t.class,r.class]));else if("style"===e)t.style=(0,i.j5)([t.style,r.style]);else if((0,i.F7)(e)){const n=t[e],s=r[e];n===s||(0,i.kJ)(n)&&n.includes(s)||(t[e]=n?[].concat(n,s):s)}else""!==e&&(t[e]=r[e])}return t}function St(e,t,n,r=null){Zt(e,t,7,[n,r])}function Ct(e,t,n,r){let s;const o=n&&n[r];if((0,i.kJ)(e)||(0,i.HD)(e)){s=new Array(e.length);for(let n=0,r=e.length;n<r;n++)s[n]=t(e[n],n,void 0,o&&o[n])}else if("number"===typeof e){0,s=new Array(e);for(let n=0;n<e;n++)s[n]=t(n+1,n,void 0,o&&o[n])}else if((0,i.Kn)(e))if(e[Symbol.iterator])s=Array.from(e,((e,n)=>t(e,n,void 0,o&&o[n])));else{const n=Object.keys(e);s=new Array(n.length);for(let r=0,i=n.length;r<i;r++){const i=n[r];s[r]=t(e[i],i,r,o&&o[r])}}else s=[];return n&&(n[r]=s),s}const At=e=>e?qt(e)?Gt(e)||e.proxy:At(e.parent):null,xt=(0,i.l7)(Object.create(null),{$:e=>e,$el:e=>e.vnode.el,$data:e=>e.data,$props:e=>e.props,$attrs:e=>e.attrs,$slots:e=>e.slots,$refs:e=>e.refs,$parent:e=>At(e.parent),$root:e=>At(e.root),$emit:e=>e.emit,$options:e=>ae(e),$forceUpdate:e=>()=>vn(e.update),$nextTick:e=>gn.bind(e.proxy),$watch:e=>Rn.bind(e)}),Rt={get({_:e},t){const{ctx:n,setupState:s,data:o,props:a,accessCache:l,type:c,appContext:u}=e;let h;if("$"!==t[0]){const r=l[t];if(void 0!==r)switch(r){case 1:return s[t];case 2:return o[t];case 4:return n[t];case 3:return a[t]}else{if(s!==i.kT&&(0,i.RI)(s,t))return l[t]=1,s[t];if(o!==i.kT&&(0,i.RI)(o,t))return l[t]=2,o[t];if((h=e.propsOptions[0])&&(0,i.RI)(h,t))return l[t]=3,a[t];if(n!==i.kT&&(0,i.RI)(n,t))return l[t]=4,n[t];ne&&(l[t]=0)}}const d=xt[t];let f,p;return d?("$attrs"===t&&(0,r.j)(e,"get",t),d(e)):(f=c.__cssModules)&&(f=f[t])?f:n!==i.kT&&(0,i.RI)(n,t)?(l[t]=4,n[t]):(p=u.config.globalProperties,(0,i.RI)(p,t)?p[t]:void 0)},set({_:e},t,n){const{data:r,setupState:s,ctx:o}=e;if(s!==i.kT&&(0,i.RI)(s,t))s[t]=n;else if(r!==i.kT&&(0,i.RI)(r,t))r[t]=n;else if((0,i.RI)(e.props,t))return!1;return("$"!==t[0]||!(t.slice(1)in e))&&(o[t]=n,!0)},has({_:{data:e,setupState:t,accessCache:n,ctx:r,appContext:s,propsOptions:o}},a){let l;return!!n[a]||e!==i.kT&&(0,i.RI)(e,a)||t!==i.kT&&(0,i.RI)(t,a)||(l=o[0])&&(0,i.RI)(l,a)||(0,i.RI)(r,a)||(0,i.RI)(xt,a)||(0,i.RI)(s.config.globalProperties,a)}};const Ot=Pe();let Nt=0;function Lt(e,t,n){const a=e.type,l=(t?t.appContext:e.appContext)||Ot,c={uid:Nt++,vnode:e,type:a,parent:t,appContext:l,root:null,next:null,subTree:null,effect:null,update:null,scope:new r.Bj(!0),render:null,proxy:null,exposed:null,exposeProxy:null,withProxy:null,provides:t?t.provides:Object.create(l.provides),accessCache:null,renderCache:[],components:null,directives:null,propsOptions:be(a,l),emitsOptions:o(a,l),emit:null,emitted:null,propsDefaults:i.kT,inheritAttrs:a.inheritAttrs,ctx:i.kT,data:i.kT,props:i.kT,attrs:i.kT,slots:i.kT,refs:i.kT,setupState:i.kT,setupContext:null,suspense:n,suspenseId:n?n.pendingId:0,asyncDep:null,asyncResolved:!1,isMounted:!1,isUnmounted:!1,isDeactivated:!1,bc:null,c:null,bm:null,m:null,bu:null,u:null,um:null,bum:null,da:null,a:null,rtg:null,rtc:null,ec:null,sp:null};return c.ctx={_:c},c.root=t?t.root:c,c.emit=s.bind(null,c),e.ce&&e.ce(c),c}let Pt=null;const Dt=()=>Pt||l,Ft=e=>{Pt=e,e.scope.on()},Mt=()=>{Pt&&Pt.scope.off(),Pt=null};function qt(e){return 4&e.vnode.shapeFlag}let Vt,Ut,jt=!1;function Bt(e,t=!1){jt=t;const{props:n,children:r}=e.vnode,i=qt(e);me(e,n,i,t),Re(e,r);const s=i?$t(e,t):void 0;return jt=!1,s}function $t(e,t){const n=e.type;e.accessCache=Object.create(null),e.proxy=(0,r.Xl)(new Proxy(e.ctx,Rt));const{setup:s}=n;if(s){const n=e.setupContext=s.length>1?Wt(e):null;Ft(e),(0,r.Jd)();const o=Xt(s,e,0,[e.props,n]);if((0,r.lk)(),Mt(),(0,i.tI)(o)){if(o.then(Mt,Mt),t)return o.then((n=>{zt(e,n,t)})).catch((t=>{Qt(t,e,0)}));e.asyncDep=o}else zt(e,o,t)}else Ht(e,t)}function zt(e,t,n){(0,i.mf)(t)?e.type.__ssrInlineRender?e.ssrRender=t:e.render=t:(0,i.Kn)(t)&&(e.setupState=(0,r.WL)(t)),Ht(e,n)}function Ht(e,t,n){const s=e.type;if(!e.render){if(!t&&Vt&&!s.render){const t=s.template;if(t){0;const{isCustomElement:n,compilerOptions:r}=e.appContext.config,{delimiters:o,compilerOptions:a}=s,l=(0,i.l7)((0,i.l7)({isCustomElement:n,delimiters:o},r),a);s.render=Vt(t,l)}}e.render=s.render||i.dG,Ut&&Ut(e)}Ft(e),(0,r.Jd)(),re(e),(0,r.lk)(),Mt()}function Kt(e){return new Proxy(e.attrs,{get(t,n){return(0,r.j)(e,"get","$attrs"),t[n]}})}function Wt(e){const t=t=>{e.exposed=t||{}};let n;return{get attrs(){return n||(n=Kt(e))},slots:e.slots,emit:e.emit,expose:t}}function Gt(e){if(e.exposed)return e.exposeProxy||(e.exposeProxy=new Proxy((0,r.WL)((0,r.Xl)(e.exposed)),{get(t,n){return n in t?t[n]:n in xt?xt[n](e):void 0}}))}function Jt(e){return(0,i.mf)(e)&&e.displayName||e.name}function Yt(e){return(0,i.mf)(e)&&"__vccOpts"in e}function Xt(e,t,n,r){let i;try{i=r?e(...r):e()}catch(s){Qt(s,t,n)}return i}function Zt(e,t,n,r){if((0,i.mf)(e)){const s=Xt(e,t,n,r);return s&&(0,i.tI)(s)&&s.catch((e=>{Qt(e,t,n)})),s}const s=[];for(let i=0;i<e.length;i++)s.push(Zt(e[i],t,n,r));return s}function Qt(e,t,n,r=!0){const i=t?t.vnode:null;if(t){let r=t.parent;const i=t.proxy,s=n;while(r){const t=r.ec;if(t)for(let n=0;n<t.length;n++)if(!1===t[n](e,i,s))return;r=r.parent}const o=t.appContext.config.errorHandler;if(o)return void Xt(o,null,10,[e,i,s])}en(e,n,i,r)}function en(e,t,n,r=!0){console.error(e)}let tn=!1,nn=!1;const rn=[];let sn=0;const on=[];let an=null,ln=0;const cn=[];let un=null,hn=0;const dn=Promise.resolve();let fn=null,pn=null;function gn(e){const t=fn||dn;return e?t.then(this?e.bind(this):e):t}function mn(e){let t=sn+1,n=rn.length;while(t<n){const r=t+n>>>1,i=In(rn[r]);i<e?t=r+1:n=r}return t}function vn(e){rn.length&&rn.includes(e,tn&&e.allowRecurse?sn+1:sn)||e===pn||(null==e.id?rn.push(e):rn.splice(mn(e.id),0,e),yn())}function yn(){tn||nn||(nn=!0,fn=dn.then(Sn))}function wn(e){const t=rn.indexOf(e);t>sn&&rn.splice(t,1)}function bn(e,t,n,r){(0,i.kJ)(e)?n.push(...e):t&&t.includes(e,e.allowRecurse?r+1:r)||n.push(e),yn()}function _n(e){bn(e,an,on,ln)}function Tn(e){bn(e,un,cn,hn)}function En(e,t=null){if(on.length){for(pn=t,an=[...new Set(on)],on.length=0,ln=0;ln<an.length;ln++)an[ln]();an=null,ln=0,pn=null,En(e,t)}}function kn(e){if(cn.length){const e=[...new Set(cn)];if(cn.length=0,un)return void un.push(...e);for(un=e,un.sort(((e,t)=>In(e)-In(t))),hn=0;hn<un.length;hn++)un[hn]();un=null,hn=0}}const In=e=>null==e.id?1/0:e.id;function Sn(e){nn=!1,tn=!0,En(e),rn.sort(((e,t)=>In(e)-In(t)));i.dG;try{for(sn=0;sn<rn.length;sn++){const e=rn[sn];e&&!1!==e.active&&Xt(e,null,14)}}finally{sn=0,rn.length=0,kn(e),tn=!1,fn=null,(rn.length||on.length||cn.length)&&Sn(e)}}const Cn={};function An(e,t,n){return xn(e,t,n)}function xn(e,t,{immediate:n,deep:s,flush:o,onTrack:a,onTrigger:l}=i.kT){const c=Pt;let u,h,d=!1,f=!1;if((0,r.dq)(e)?(u=()=>e.value,d=!!e._shallow):(0,r.PG)(e)?(u=()=>e,s=!0):(0,i.kJ)(e)?(f=!0,d=e.some(r.PG),u=()=>e.map((e=>(0,r.dq)(e)?e.value:(0,r.PG)(e)?Nn(e):(0,i.mf)(e)?Xt(e,c,2):void 0))):u=(0,i.mf)(e)?t?()=>Xt(e,c,2):()=>{if(!c||!c.isUnmounted)return h&&h(),Zt(e,c,3,[p])}:i.dG,t&&s){const e=u;u=()=>Nn(e())}let p=e=>{h=y.onStop=()=>{Xt(e,c,4)}};if(jt)return p=i.dG,t?n&&Zt(t,c,3,[u(),f?[]:void 0,p]):u(),i.dG;let g=f?[]:Cn;const m=()=>{if(y.active)if(t){const e=y.run();(s||d||(f?e.some(((e,t)=>(0,i.aU)(e,g[t]))):(0,i.aU)(e,g)))&&(h&&h(),Zt(t,c,3,[e,g===Cn?void 0:g,p]),g=e)}else y.run()};let v;m.allowRecurse=!!t,v="sync"===o?m:"post"===o?()=>Ve(m,c&&c.suspense):()=>{!c||c.isMounted?_n(m):m()};const y=new r.qq(u,v);return t?n?m():g=y.run():"post"===o?Ve(y.run.bind(y),c&&c.suspense):y.run(),()=>{y.stop(),c&&c.scope&&(0,i.Od)(c.scope.effects,y)}}function Rn(e,t,n){const r=this.proxy,s=(0,i.HD)(e)?e.includes(".")?On(r,e):()=>r[e]:e.bind(r,r);let o;(0,i.mf)(t)?o=t:(o=t.handler,n=t);const a=Pt;Ft(this);const l=xn(s,o.bind(r),n);return a?Ft(a):Mt(),l}function On(e,t){const n=t.split(".");return()=>{let t=e;for(let e=0;e<n.length&&t;e++)t=t[n[e]];return t}}function Nn(e,t){if(!(0,i.Kn)(e)||e["__v_skip"])return e;if(t=t||new Set,t.has(e))return e;if(t.add(e),(0,r.dq)(e))Nn(e.value,t);else if((0,i.kJ)(e))for(let n=0;n<e.length;n++)Nn(e[n],t);else if((0,i.DM)(e)||(0,i._N)(e))e.forEach((e=>{Nn(e,t)}));else if((0,i.PO)(e))for(const n in e)Nn(e[n],t);return e}function Ln(e,t,n){const r=arguments.length;return 2===r?(0,i.Kn)(t)&&!(0,i.kJ)(t)?ut(t)?mt(e,null,[t]):mt(e,t):mt(e,null,t):(r>3?n=Array.prototype.slice.call(arguments,2):3===r&&ut(n)&&(n=[n]),mt(e,t,n))}Symbol("");const Pn="3.2.26"},8880:(e,t,n)=>{"use strict";n.d(t,{uT:()=>q,W3:()=>ie,ri:()=>pe,F8:()=>ce});var r=n(2323),i=n(3673),s=n(1959);const o="http://www.w3.org/2000/svg",a="undefined"!==typeof document?document:null,l=new Map,c={insert:(e,t,n)=>{t.insertBefore(e,n||null)},remove:e=>{const t=e.parentNode;t&&t.removeChild(e)},createElement:(e,t,n,r)=>{const i=t?a.createElementNS(o,e):a.createElement(e,n?{is:n}:void 0);return"select"===e&&r&&null!=r.multiple&&i.setAttribute("multiple",r.multiple),i},createText:e=>a.createTextNode(e),createComment:e=>a.createComment(e),setText:(e,t)=>{e.nodeValue=t},setElementText:(e,t)=>{e.textContent=t},parentNode:e=>e.parentNode,nextSibling:e=>e.nextSibling,querySelector:e=>a.querySelector(e),setScopeId(e,t){e.setAttribute(t,"")},cloneNode(e){const t=e.cloneNode(!0);return"_value"in e&&(t._value=e._value),t},insertStaticContent(e,t,n,r){const i=n?n.previousSibling:t.lastChild;let s=l.get(e);if(!s){const t=a.createElement("template");if(t.innerHTML=r?`<svg>${e}</svg>`:e,s=t.content,r){const e=s.firstChild;while(e.firstChild)s.appendChild(e.firstChild);s.removeChild(e)}l.set(e,s)}return t.insertBefore(s.cloneNode(!0),n),[i?i.nextSibling:t.firstChild,n?n.previousSibling:t.lastChild]}};function u(e,t,n){const r=e._vtc;r&&(t=(t?[t,...r]:[...r]).join(" ")),null==t?e.removeAttribute("class"):n?e.setAttribute("class",t):e.className=t}function h(e,t,n){const i=e.style,s=(0,r.HD)(n);if(n&&!s){for(const e in n)f(i,e,n[e]);if(t&&!(0,r.HD)(t))for(const e in t)null==n[e]&&f(i,e,"")}else{const r=i.display;s?t!==n&&(i.cssText=n):t&&e.removeAttribute("style"),"_vod"in e&&(i.display=r)}}const d=/\s*!important$/;function f(e,t,n){if((0,r.kJ)(n))n.forEach((n=>f(e,t,n)));else if(t.startsWith("--"))e.setProperty(t,n);else{const i=m(e,t);d.test(n)?e.setProperty((0,r.rs)(i),n.replace(d,""),"important"):e[i]=n}}const p=["Webkit","Moz","ms"],g={};function m(e,t){const n=g[t];if(n)return n;let i=(0,r._A)(t);if("filter"!==i&&i in e)return g[t]=i;i=(0,r.kC)(i);for(let r=0;r<p.length;r++){const n=p[r]+i;if(n in e)return g[t]=n}return t}const v="http://www.w3.org/1999/xlink";function y(e,t,n,i,s){if(i&&t.startsWith("xlink:"))null==n?e.removeAttributeNS(v,t.slice(6,t.length)):e.setAttributeNS(v,t,n);else{const i=(0,r.Pq)(t);null==n||i&&!(0,r.yA)(n)?e.removeAttribute(t):e.setAttribute(t,i?"":n)}}function w(e,t,n,i,s,o,a){if("innerHTML"===t||"textContent"===t)return i&&a(i,s,o),void(e[t]=null==n?"":n);if("value"===t&&"PROGRESS"!==e.tagName&&!e.tagName.includes("-")){e._value=n;const r=null==n?"":n;return e.value===r&&"OPTION"!==e.tagName||(e.value=r),void(null==n&&e.removeAttribute(t))}if(""===n||null==n){const i=typeof e[t];if("boolean"===i)return void(e[t]=(0,r.yA)(n));if(null==n&&"string"===i)return e[t]="",void e.removeAttribute(t);if("number"===i){try{e[t]=0}catch(l){}return void e.removeAttribute(t)}}try{e[t]=n}catch(c){0}}let b=Date.now,_=!1;if("undefined"!==typeof window){b()>document.createEvent("Event").timeStamp&&(b=()=>performance.now());const e=navigator.userAgent.match(/firefox\/(\d+)/i);_=!!(e&&Number(e[1])<=53)}let T=0;const E=Promise.resolve(),k=()=>{T=0},I=()=>T||(E.then(k),T=b());function S(e,t,n,r){e.addEventListener(t,n,r)}function C(e,t,n,r){e.removeEventListener(t,n,r)}function A(e,t,n,r,i=null){const s=e._vei||(e._vei={}),o=s[t];if(r&&o)o.value=r;else{const[n,a]=R(t);if(r){const o=s[t]=O(r,i);S(e,n,o,a)}else o&&(C(e,n,o,a),s[t]=void 0)}}const x=/(?:Once|Passive|Capture)$/;function R(e){let t;if(x.test(e)){let n;t={};while(n=e.match(x))e=e.slice(0,e.length-n[0].length),t[n[0].toLowerCase()]=!0}return[(0,r.rs)(e.slice(2)),t]}function O(e,t){const n=e=>{const r=e.timeStamp||b();(_||r>=n.attached-1)&&(0,i.$d)(N(e,n.value),t,5,[e])};return n.value=e,n.attached=I(),n}function N(e,t){if((0,r.kJ)(t)){const n=e.stopImmediatePropagation;return e.stopImmediatePropagation=()=>{n.call(e),e._stopped=!0},t.map((e=>t=>!t._stopped&&e(t)))}return t}const L=/^on[a-z]/,P=(e,t,n,i,s=!1,o,a,l,c)=>{"class"===t?u(e,i,s):"style"===t?h(e,n,i):(0,r.F7)(t)?(0,r.tR)(t)||A(e,t,n,i,a):("."===t[0]?(t=t.slice(1),1):"^"===t[0]?(t=t.slice(1),0):D(e,t,i,s))?w(e,t,i,o,a,l,c):("true-value"===t?e._trueValue=i:"false-value"===t&&(e._falseValue=i),y(e,t,i,s))};function D(e,t,n,i){return i?"innerHTML"===t||"textContent"===t||!!(t in e&&L.test(t)&&(0,r.mf)(n)):"spellcheck"!==t&&"draggable"!==t&&("form"!==t&&(("list"!==t||"INPUT"!==e.tagName)&&(("type"!==t||"TEXTAREA"!==e.tagName)&&((!L.test(t)||!(0,r.HD)(n))&&t in e))))}"undefined"!==typeof HTMLElement&&HTMLElement;const F="transition",M="animation",q=(e,{slots:t})=>(0,i.h)(i.P$,$(e),t);q.displayName="Transition";const V={name:String,type:String,css:{type:Boolean,default:!0},duration:[String,Number,Object],enterFromClass:String,enterActiveClass:String,enterToClass:String,appearFromClass:String,appearActiveClass:String,appearToClass:String,leaveFromClass:String,leaveActiveClass:String,leaveToClass:String},U=q.props=(0,r.l7)({},i.P$.props,V),j=(e,t=[])=>{(0,r.kJ)(e)?e.forEach((e=>e(...t))):e&&e(...t)},B=e=>!!e&&((0,r.kJ)(e)?e.some((e=>e.length>1)):e.length>1);function $(e){const t={};for(const r in e)r in V||(t[r]=e[r]);if(!1===e.css)return t;const{name:n="v",type:i,duration:s,enterFromClass:o=`${n}-enter-from`,enterActiveClass:a=`${n}-enter-active`,enterToClass:l=`${n}-enter-to`,appearFromClass:c=o,appearActiveClass:u=a,appearToClass:h=l,leaveFromClass:d=`${n}-leave-from`,leaveActiveClass:f=`${n}-leave-active`,leaveToClass:p=`${n}-leave-to`}=e,g=z(s),m=g&&g[0],v=g&&g[1],{onBeforeEnter:y,onEnter:w,onEnterCancelled:b,onLeave:_,onLeaveCancelled:T,onBeforeAppear:E=y,onAppear:k=w,onAppearCancelled:I=b}=t,S=(e,t,n)=>{W(e,t?h:l),W(e,t?u:a),n&&n()},C=(e,t)=>{W(e,p),W(e,f),t&&t()},A=e=>(t,n)=>{const r=e?k:w,s=()=>S(t,e,n);j(r,[t,s]),G((()=>{W(t,e?c:o),K(t,e?h:l),B(r)||Y(t,i,m,s)}))};return(0,r.l7)(t,{onBeforeEnter(e){j(y,[e]),K(e,o),K(e,a)},onBeforeAppear(e){j(E,[e]),K(e,c),K(e,u)},onEnter:A(!1),onAppear:A(!0),onLeave(e,t){const n=()=>C(e,t);K(e,d),ee(),K(e,f),G((()=>{W(e,d),K(e,p),B(_)||Y(e,i,v,n)})),j(_,[e,n])},onEnterCancelled(e){S(e,!1),j(b,[e])},onAppearCancelled(e){S(e,!0),j(I,[e])},onLeaveCancelled(e){C(e),j(T,[e])}})}function z(e){if(null==e)return null;if((0,r.Kn)(e))return[H(e.enter),H(e.leave)];{const t=H(e);return[t,t]}}function H(e){const t=(0,r.He)(e);return t}function K(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.add(t))),(e._vtc||(e._vtc=new Set)).add(t)}function W(e,t){t.split(/\s+/).forEach((t=>t&&e.classList.remove(t)));const{_vtc:n}=e;n&&(n.delete(t),n.size||(e._vtc=void 0))}function G(e){requestAnimationFrame((()=>{requestAnimationFrame(e)}))}let J=0;function Y(e,t,n,r){const i=e._endId=++J,s=()=>{i===e._endId&&r()};if(n)return setTimeout(s,n);const{type:o,timeout:a,propCount:l}=X(e,t);if(!o)return r();const c=o+"end";let u=0;const h=()=>{e.removeEventListener(c,d),s()},d=t=>{t.target===e&&++u>=l&&h()};setTimeout((()=>{u<l&&h()}),a+1),e.addEventListener(c,d)}function X(e,t){const n=window.getComputedStyle(e),r=e=>(n[e]||"").split(", "),i=r(F+"Delay"),s=r(F+"Duration"),o=Z(i,s),a=r(M+"Delay"),l=r(M+"Duration"),c=Z(a,l);let u=null,h=0,d=0;t===F?o>0&&(u=F,h=o,d=s.length):t===M?c>0&&(u=M,h=c,d=l.length):(h=Math.max(o,c),u=h>0?o>c?F:M:null,d=u?u===F?s.length:l.length:0);const f=u===F&&/\b(transform|all)(,|$)/.test(n[F+"Property"]);return{type:u,timeout:h,propCount:d,hasTransform:f}}function Z(e,t){while(e.length<t.length)e=e.concat(e);return Math.max(...t.map(((t,n)=>Q(t)+Q(e[n]))))}function Q(e){return 1e3*Number(e.slice(0,-1).replace(",","."))}function ee(){return document.body.offsetHeight}const te=new WeakMap,ne=new WeakMap,re={name:"TransitionGroup",props:(0,r.l7)({},U,{tag:String,moveClass:String}),setup(e,{slots:t}){const n=(0,i.FN)(),r=(0,i.Y8)();let o,a;return(0,i.ic)((()=>{if(!o.length)return;const t=e.moveClass||`${e.name||"v"}-move`;if(!le(o[0].el,n.vnode.el,t))return;o.forEach(se),o.forEach(oe);const r=o.filter(ae);ee(),r.forEach((e=>{const n=e.el,r=n.style;K(n,t),r.transform=r.webkitTransform=r.transitionDuration="";const i=n._moveCb=e=>{e&&e.target!==n||e&&!/transform$/.test(e.propertyName)||(n.removeEventListener("transitionend",i),n._moveCb=null,W(n,t))};n.addEventListener("transitionend",i)}))})),()=>{const l=(0,s.IU)(e),c=$(l);let u=l.tag||i.HY;o=a,a=t.default?(0,i.Q6)(t.default()):[];for(let e=0;e<a.length;e++){const t=a[e];null!=t.key&&(0,i.nK)(t,(0,i.U2)(t,c,r,n))}if(o)for(let e=0;e<o.length;e++){const t=o[e];(0,i.nK)(t,(0,i.U2)(t,c,r,n)),te.set(t,t.el.getBoundingClientRect())}return(0,i.Wm)(u,null,a)}}},ie=re;function se(e){const t=e.el;t._moveCb&&t._moveCb(),t._enterCb&&t._enterCb()}function oe(e){ne.set(e,e.el.getBoundingClientRect())}function ae(e){const t=te.get(e),n=ne.get(e),r=t.left-n.left,i=t.top-n.top;if(r||i){const t=e.el.style;return t.transform=t.webkitTransform=`translate(${r}px,${i}px)`,t.transitionDuration="0s",e}}function le(e,t,n){const r=e.cloneNode();e._vtc&&e._vtc.forEach((e=>{e.split(/\s+/).forEach((e=>e&&r.classList.remove(e)))})),n.split(/\s+/).forEach((e=>e&&r.classList.add(e))),r.style.display="none";const i=1===t.nodeType?t:t.parentNode;i.appendChild(r);const{hasTransform:s}=X(r);return i.removeChild(r),s}const ce={beforeMount(e,{value:t},{transition:n}){e._vod="none"===e.style.display?"":e.style.display,n&&t?n.beforeEnter(e):ue(e,t)},mounted(e,{value:t},{transition:n}){n&&t&&n.enter(e)},updated(e,{value:t,oldValue:n},{transition:r}){!t!==!n&&(r?t?(r.beforeEnter(e),ue(e,!0),r.enter(e)):r.leave(e,(()=>{ue(e,!1)})):ue(e,t))},beforeUnmount(e,{value:t}){ue(e,t)}};function ue(e,t){e.style.display=t?e._vod:"none"}const he=(0,r.l7)({patchProp:P},c);let de;function fe(){return de||(de=(0,i.Us)(he))}const pe=(...e)=>{const t=fe().createApp(...e);const{mount:n}=t;return t.mount=e=>{const i=ge(e);if(!i)return;const s=t._component;(0,r.mf)(s)||s.render||s.template||(s.template=i.innerHTML),i.innerHTML="";const o=n(i,!1,i instanceof SVGElement);return i instanceof Element&&(i.removeAttribute("v-cloak"),i.setAttribute("data-v-app","")),o},t};function ge(e){if((0,r.HD)(e)){const t=document.querySelector(e);return t}return e}},2323:(e,t,n)=>{"use strict";function r(e,t){const n=Object.create(null),r=e.split(",");for(let i=0;i<r.length;i++)n[r[i]]=!0;return t?e=>!!n[e.toLowerCase()]:e=>!!n[e]}n.d(t,{Z6:()=>b,kT:()=>w,NO:()=>T,dG:()=>_,_A:()=>W,kC:()=>Y,Nj:()=>ee,l7:()=>S,E9:()=>re,aU:()=>Z,RI:()=>x,rs:()=>J,yA:()=>l,ir:()=>Q,kJ:()=>R,mf:()=>P,e1:()=>s,S0:()=>$,_N:()=>O,tR:()=>I,Kn:()=>M,F7:()=>k,PO:()=>B,tI:()=>q,Gg:()=>z,DM:()=>N,Pq:()=>a,HD:()=>D,yk:()=>F,WV:()=>g,hq:()=>m,fY:()=>r,C_:()=>f,j5:()=>c,Od:()=>C,zw:()=>v,hR:()=>X,He:()=>te,W7:()=>j});const i="Infinity,undefined,NaN,isFinite,isNaN,parseFloat,parseInt,decodeURI,decodeURIComponent,encodeURI,encodeURIComponent,Math,Number,Date,Array,Object,Boolean,String,RegExp,Map,Set,JSON,Intl,BigInt",s=r(i);const o="itemscope,allowfullscreen,formnovalidate,ismap,nomodule,novalidate,readonly",a=r(o);function l(e){return!!e||""===e}function c(e){if(R(e)){const t={};for(let n=0;n<e.length;n++){const r=e[n],i=D(r)?d(r):c(r);if(i)for(const e in i)t[e]=i[e]}return t}return D(e)||M(e)?e:void 0}const u=/;(?![^(]*\))/g,h=/:(.+)/;function d(e){const t={};return e.split(u).forEach((e=>{if(e){const n=e.split(h);n.length>1&&(t[n[0].trim()]=n[1].trim())}})),t}function f(e){let t="";if(D(e))t=e;else if(R(e))for(let n=0;n<e.length;n++){const r=f(e[n]);r&&(t+=r+" ")}else if(M(e))for(const n in e)e[n]&&(t+=n+" ");return t.trim()}function p(e,t){if(e.length!==t.length)return!1;let n=!0;for(let r=0;n&&r<e.length;r++)n=g(e[r],t[r]);return n}function g(e,t){if(e===t)return!0;let n=L(e),r=L(t);if(n||r)return!(!n||!r)&&e.getTime()===t.getTime();if(n=R(e),r=R(t),n||r)return!(!n||!r)&&p(e,t);if(n=M(e),r=M(t),n||r){if(!n||!r)return!1;const i=Object.keys(e).length,s=Object.keys(t).length;if(i!==s)return!1;for(const n in e){const r=e.hasOwnProperty(n),i=t.hasOwnProperty(n);if(r&&!i||!r&&i||!g(e[n],t[n]))return!1}}return String(e)===String(t)}function m(e,t){return e.findIndex((e=>g(e,t)))}const v=e=>null==e?"":R(e)||M(e)&&(e.toString===V||!P(e.toString))?JSON.stringify(e,y,2):String(e),y=(e,t)=>t&&t.__v_isRef?y(e,t.value):O(t)?{[`Map(${t.size})`]:[...t.entries()].reduce(((e,[t,n])=>(e[`${t} =>`]=n,e)),{})}:N(t)?{[`Set(${t.size})`]:[...t.values()]}:!M(t)||R(t)||B(t)?t:String(t),w={},b=[],_=()=>{},T=()=>!1,E=/^on[^a-z]/,k=e=>E.test(e),I=e=>e.startsWith("onUpdate:"),S=Object.assign,C=(e,t)=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)},A=Object.prototype.hasOwnProperty,x=(e,t)=>A.call(e,t),R=Array.isArray,O=e=>"[object Map]"===U(e),N=e=>"[object Set]"===U(e),L=e=>e instanceof Date,P=e=>"function"===typeof e,D=e=>"string"===typeof e,F=e=>"symbol"===typeof e,M=e=>null!==e&&"object"===typeof e,q=e=>M(e)&&P(e.then)&&P(e.catch),V=Object.prototype.toString,U=e=>V.call(e),j=e=>U(e).slice(8,-1),B=e=>"[object Object]"===U(e),$=e=>D(e)&&"NaN"!==e&&"-"!==e[0]&&""+parseInt(e,10)===e,z=r(",key,ref,ref_for,ref_key,onVnodeBeforeMount,onVnodeMounted,onVnodeBeforeUpdate,onVnodeUpdated,onVnodeBeforeUnmount,onVnodeUnmounted"),H=e=>{const t=Object.create(null);return n=>{const r=t[n];return r||(t[n]=e(n))}},K=/-(\w)/g,W=H((e=>e.replace(K,((e,t)=>t?t.toUpperCase():"")))),G=/\B([A-Z])/g,J=H((e=>e.replace(G,"-$1").toLowerCase())),Y=H((e=>e.charAt(0).toUpperCase()+e.slice(1))),X=H((e=>e?`on${Y(e)}`:"")),Z=(e,t)=>!Object.is(e,t),Q=(e,t)=>{for(let n=0;n<e.length;n++)e[n](t)},ee=(e,t,n)=>{Object.defineProperty(e,t,{configurable:!0,enumerable:!1,value:n})},te=e=>{const t=parseFloat(e);return isNaN(t)?e:t};let ne;const re=()=>ne||(ne="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof self?self:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:{})},5096:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(1959),i=n(3673),s=n(4554),o=n(2417),a=n(908),l=n(7657);const c=(0,a.L)({name:"QAvatar",props:{...o.LU,fontSize:String,color:String,textColor:String,icon:String,square:Boolean,rounded:Boolean},setup(e,{slots:t}){const n=(0,o.ZP)(e),a=(0,r.Fl)((()=>"q-avatar"+(e.color?` bg-${e.color}`:"")+(e.textColor?` text-${e.textColor} q-chip--colored`:"")+(!0===e.square?" q-avatar--square":!0===e.rounded?" rounded-borders":""))),c=(0,r.Fl)((()=>e.fontSize?{fontSize:e.fontSize}:null));return()=>{const r=void 0!==e.icon?[(0,i.h)(s.Z,{name:e.icon})]:void 0;return(0,i.h)("div",{class:a.value,style:n.value},[(0,i.h)("div",{class:"q-avatar__content row flex-center overflow-hidden",style:c.value},(0,l.pf)(t.default,r))])}}})},8761:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});n(6245);var r=n(1959),i=n(3673),s=n(8240),o=n(908),a=n(7657);const l=(0,o.L)({name:"QBtnGroup",props:{unelevated:Boolean,outline:Boolean,flat:Boolean,rounded:Boolean,push:Boolean,stretch:Boolean,glossy:Boolean,spread:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>{const t=["unelevated","outline","flat","rounded","push","stretch","glossy"].filter((t=>!0===e[t])).map((e=>`q-btn-group--${e}`)).join(" ");return"q-btn-group row no-wrap"+(t.length>0?" "+t:"")+(!0===e.spread?" q-btn-group--spread":" inline")}));return()=>(0,i.h)("div",{class:n.value},(0,a.KR)(t.default))}});var c=n(9550);const u=(0,o.L)({name:"QBtnToggle",props:{...c.Fz,modelValue:{required:!0},options:{type:Array,required:!0,validator:e=>e.every((e=>("label"in e||"icon"in e||"slot"in e)&&"value"in e))},color:String,textColor:String,toggleColor:{type:String,default:"primary"},toggleTextColor:String,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,padding:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,readonly:Boolean,disable:Boolean,stack:Boolean,stretch:Boolean,spread:Boolean,clearable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","clear","click"],setup(e,{slots:t,emit:n}){const o=(0,r.Fl)((()=>void 0!==e.options.find((t=>t.value===e.modelValue)))),u=(0,r.Fl)((()=>({type:"hidden",name:e.name,value:e.modelValue}))),h=(0,c.eX)(u),d=(0,r.Fl)((()=>e.options.map(((t,n)=>{const{attrs:r,value:i,slot:s,...o}=t;return{slot:s,props:{key:n,onClick(e){f(i,t,e)},...r,...o,outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,unelevated:e.unelevated,dense:e.dense,disable:!0===e.disable||!0===o.disable,color:i===e.modelValue?p(o,"toggleColor"):p(o,"color"),textColor:i===e.modelValue?p(o,"toggleTextColor"):p(o,"textColor"),noCaps:!0===p(o,"noCaps"),noWrap:!0===p(o,"noWrap"),size:p(o,"size"),padding:p(o,"padding"),ripple:p(o,"ripple"),stack:!0===p(o,"stack"),stretch:!0===p(o,"stretch")}}}))));function f(t,r,i){!0!==e.readonly&&(e.modelValue===t?!0===e.clearable&&(n("update:modelValue",null,null),n("clear")):n("update:modelValue",t,r),n("click",i))}function p(t,n){return void 0===t[n]?e[n]:t[n]}function g(){const n=d.value.map((e=>(0,i.h)(s.Z,e.props,void 0!==e.slot?t[e.slot]:void 0)));return void 0!==e.name&&!0!==e.disable&&!0===o.value&&h(n,"push"),(0,a.vs)(t.default,n)}return()=>(0,i.h)(l,{class:"q-btn-toggle",outline:e.outline,flat:e.flat,rounded:e.rounded,push:e.push,stretch:e.stretch,unelevated:e.unelevated,glossy:e.glossy,spread:e.spread},g)}})},8240:(e,t,n)=>{"use strict";n.d(t,{Z:()=>k});var r=n(3673),i=n(1959),s=n(8880),o=n(4554),a=n(9754),l=n(6489),c=(n(6245),n(9992)),u=n(2417),h=n(7277);const d={none:0,xs:4,sm:8,md:16,lg:24,xl:32},f={xs:8,sm:10,md:14,lg:20,xl:24},p={...u.LU,...h.$,type:{type:String,default:"button"},label:[Number,String],icon:String,iconRight:String,round:Boolean,outline:Boolean,flat:Boolean,unelevated:Boolean,rounded:Boolean,push:Boolean,glossy:Boolean,size:String,fab:Boolean,fabMini:Boolean,padding:String,color:String,textColor:String,noCaps:Boolean,noWrap:Boolean,dense:Boolean,tabindex:[Number,String],ripple:{type:[Boolean,Object],default:!0},align:{...c.jO.align,default:"center"},stack:Boolean,stretch:Boolean,loading:{type:Boolean,default:null},disable:Boolean};function g(e){const t=(0,u.ZP)(e,f),n=(0,c.ZP)(e),{hasLink:r,linkProps:s,navigateToLink:o}=(0,h.Z)(),a=(0,i.Fl)((()=>{const n=!1===e.fab&&!1===e.fabMini?t.value:{};return void 0!==e.padding?Object.assign({},n,{padding:e.padding.split(/\s+/).map((e=>e in d?d[e]+"px":e)).join(" "),minWidth:"0",minHeight:"0"}):n})),l=(0,i.Fl)((()=>!0===e.rounded||!0===e.fab||!0===e.fabMini)),p=(0,i.Fl)((()=>!0!==e.disable&&!0!==e.loading)),g=(0,i.Fl)((()=>!0===p.value?e.tabindex||0:-1)),m=(0,i.Fl)((()=>"a"===e.type||!0===r.value)),v=(0,i.Fl)((()=>!0===e.flat?"flat":!0===e.outline?"outline":!0===e.push?"push":!0===e.unelevated?"unelevated":"standard")),y=(0,i.Fl)((()=>{const t={tabindex:g.value};return"a"===e.type||"button"===e.type&&!0===r.value||(t.type=e.type),!0===r.value?(Object.assign(t,s.value),t.role="link"):t.role="a"===e.type?"link":"button",!0===e.loading&&void 0!==e.percentage&&Object.assign(t,{role:"progressbar","aria-valuemin":0,"aria-valuemax":100,"aria-valuenow":e.percentage}),!0===e.disable&&(t.disabled="",t["aria-disabled"]="true"),t})),w=(0,i.Fl)((()=>{let t;return void 0!==e.color?t=!0===e.flat||!0===e.outline?`text-${e.textColor||e.color}`:`bg-${e.color} text-${e.textColor||"white"}`:e.textColor&&(t=`text-${e.textColor}`),`q-btn--${v.value} q-btn--`+(!0===e.round?"round":"rectangle"+(!0===l.value?" q-btn--rounded":""))+(void 0!==t?" "+t:"")+(!0===p.value?" q-btn--actionable q-focusable q-hoverable":!0===e.disable?" disabled":"")+(!0===e.fab?" q-btn--fab":!0===e.fabMini?" q-btn--fab-mini":"")+(!0===e.noCaps?" q-btn--no-uppercase":"")+(!0===e.dense?" q-btn--dense":"")+(!0===e.stretch?" no-border-radius self-stretch":"")+(!0===e.glossy?" glossy":"")})),b=(0,i.Fl)((()=>n.value+(!0===e.stack?" column":" row")+(!0===e.noWrap?" no-wrap text-no-wrap":"")+(!0===e.loading?" q-btn__content--hidden":"")));return{classes:w,style:a,innerClasses:b,attributes:y,hasLink:r,isLink:m,navigateToLink:o,isActionable:p}}var m=n(908),v=n(7657),y=n(4716),w=n(1436);const{passiveCapture:b}=y.rU;let _=null,T=null,E=null;const k=(0,m.L)({name:"QBtn",props:{...p,percentage:Number,darkPercentage:Boolean},emits:["click","keydown","touchstart","mousedown","keyup"],setup(e,{slots:t,emit:n}){const{proxy:c}=(0,r.FN)(),{classes:u,style:h,innerClasses:d,attributes:f,hasLink:p,isLink:m,navigateToLink:k,isActionable:I}=g(e),S=(0,i.iH)(null),C=(0,i.iH)(null);let A,x,R=null;const O=(0,i.Fl)((()=>void 0!==e.label&&null!==e.label&&""!==e.label)),N=(0,i.Fl)((()=>!0!==e.disable&&!1!==e.ripple&&{keyCodes:!0===m.value?[13,32]:[13],...!0===e.ripple?{}:e.ripple})),L=(0,i.Fl)((()=>({center:e.round}))),P=(0,i.Fl)((()=>{const t=Math.max(0,Math.min(100,e.percentage));return t>0?{transition:"transform 0.6s",transform:`translateX(${t-100}%)`}:{}})),D=(0,i.Fl)((()=>!0===e.loading?{onMousedown:$,onTouchstartPassive:$,onClick:$,onKeydown:$,onKeyup:$}:!0===I.value?{onClick:M,onKeydown:q,onMousedown:U,onTouchstartPassive:V}:{onClick:y.NS})),F=(0,i.Fl)((()=>({ref:S,class:"q-btn q-btn-item non-selectable no-outline "+u.value,style:h.value,...f.value,...D.value})));function M(t){if(null!==S.value){if(void 0!==t){if(!0===t.defaultPrevented)return;const n=document.activeElement;if("submit"===e.type&&n!==document.body&&!1===S.value.contains(n)&&!1===n.contains(S.value)){S.value.focus();const e=()=>{document.removeEventListener("keydown",y.NS,!0),document.removeEventListener("keyup",e,b),null!==S.value&&S.value.removeEventListener("blur",e,b)};document.addEventListener("keydown",y.NS,!0),document.addEventListener("keyup",e,b),S.value.addEventListener("blur",e,b)}}if(!0===p.value){const e=()=>{t.__qNavigate=!0,k(t)};n("click",t,e),!0!==t.defaultPrevented&&e()}else n("click",t)}}function q(e){null!==S.value&&(!0===(0,w.So)(e,[13,32])&&((0,y.NS)(e),T!==S.value&&(null!==T&&B(),S.value.focus(),T=S.value,S.value.classList.add("q-btn--active"),document.addEventListener("keyup",j,!0),S.value.addEventListener("blur",j,b))),n("keydown",e))}function V(e){null!==S.value&&(_!==S.value&&(null!==_&&B(),_=S.value,R=e.target,R.addEventListener("touchcancel",j,b),R.addEventListener("touchend",j,b)),A=!0,clearTimeout(x),x=setTimeout((()=>{A=!1}),200),n("touchstart",e))}function U(e){null!==S.value&&(E!==S.value&&(null!==E&&B(),E=S.value,S.value.classList.add("q-btn--active"),document.addEventListener("mouseup",j,b)),e.qSkipRipple=!0===A,n("mousedown",e))}function j(e){if(null!==S.value&&(void 0===e||"blur"!==e.type||document.activeElement!==S.value)){if(void 0!==e&&"keyup"===e.type){if(T===S.value&&!0===(0,w.So)(e,[13,32])){const t=new MouseEvent("click",e);t.qKeyEvent=!0,!0===e.defaultPrevented&&(0,y.X$)(t),!0===e.cancelBubble&&(0,y.sT)(t),S.value.dispatchEvent(t),(0,y.NS)(e),e.qKeyEvent=!0}n("keyup",e)}B()}}function B(e){const t=C.value;!0===e||_!==S.value&&E!==S.value||null===t||t===document.activeElement||(t.setAttribute("tabindex",-1),t.focus()),_===S.value&&(null!==R&&(R.removeEventListener("touchcancel",j,b),R.removeEventListener("touchend",j,b)),_=R=null),E===S.value&&(document.removeEventListener("mouseup",j,b),E=null),T===S.value&&(document.removeEventListener("keyup",j,!0),null!==S.value&&S.value.removeEventListener("blur",j,b),T=null),null!==S.value&&S.value.classList.remove("q-btn--active")}function $(e){(0,y.NS)(e),e.qSkipRipple=!0}return(0,r.Jd)((()=>{B(!0)})),Object.assign(c,{click:M}),()=>{let n=[];void 0!==e.icon&&n.push((0,r.h)(o.Z,{name:e.icon,left:!1===e.stack&&!0===O.value,role:"img","aria-hidden":"true"})),!0===O.value&&n.push((0,r.h)("span",{class:"block"},[e.label])),n=(0,v.vs)(t.default,n),void 0!==e.iconRight&&!1===e.round&&n.push((0,r.h)(o.Z,{name:e.iconRight,right:!1===e.stack&&!0===O.value,role:"img","aria-hidden":"true"}));const i=[(0,r.h)("span",{class:"q-focus-helper",ref:C})];return!0===e.loading&&void 0!==e.percentage&&i.push((0,r.h)("span",{class:"q-btn__progress absolute-full overflow-hidden"},[(0,r.h)("span",{class:"q-btn__progress-indicator fit block"+(!0===e.darkPercentage?" q-btn__progress--dark":""),style:P.value})])),i.push((0,r.h)("span",{class:"q-btn__content text-center col items-center q-anchor--skip "+d.value},n)),null!==e.loading&&i.push((0,r.h)(s.uT,{name:"q-transition--fade"},(()=>!0===e.loading?[(0,r.h)("span",{key:"loading",class:"absolute-full flex flex-center"},void 0!==t.loading?t.loading():[(0,r.h)(a.Z)])]:null))),(0,r.wy)((0,r.h)(!0===m.value?"a":"button",F.value,i),[[l.Z,N.value,void 0,L.value]])}}})},151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});n(6245);var r=n(3673),i=n(1959),s=n(2236),o=n(908),a=n(7657);const l=(0,o.L)({name:"QCard",props:{...s.S,tag:{type:String,default:"div"},square:Boolean,flat:Boolean,bordered:Boolean},setup(e,{slots:t}){const n=(0,r.FN)(),o=(0,s.Z)(e,n.proxy.$q),l=(0,i.Fl)((()=>"q-card"+(!0===o.value?" q-card--dark q-dark":"")+(!0===e.bordered?" q-card--bordered":"")+(!0===e.square?" q-card--square no-border-radius":"")+(!0===e.flat?" q-card--flat no-shadow":"")));return()=>(0,r.h)(e.tag,{class:l.value},(0,a.KR)(t.default))}})},9367:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(1959),i=n(3673),s=n(9992),o=n(908),a=n(7657);const l=(0,o.L)({name:"QCardActions",props:{...s.jO,vertical:Boolean},setup(e,{slots:t}){const n=(0,s.ZP)(e),o=(0,r.Fl)((()=>`q-card__actions ${n.value} q-card__actions--`+(!0===e.vertical?"vert column":"horiz row")));return()=>(0,i.h)("div",{class:o.value},(0,a.KR)(t.default))}})},5589:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(1959),i=n(3673),s=n(908),o=n(7657);const a=(0,s.L)({name:"QCardSection",props:{tag:{type:String,default:"div"},horizontal:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-card__section q-card__section--"+(!0===e.horizontal?"horiz row no-wrap":"vert")));return()=>(0,i.h)(e.tag,{class:n.value},(0,o.KR)(t.default))}})},7030:(e,t,n)=>{"use strict";n.d(t,{Z:()=>f});var r=n(3673),i=n(1959),s=n(4554),o=n(6489),a=n(2236),l=n(2417),c=n(908),u=n(4716),h=n(7657);const d={xs:8,sm:10,md:14,lg:20,xl:24},f=(0,c.L)({name:"QChip",props:{...a.S,...l.LU,dense:Boolean,icon:String,iconRight:String,iconRemove:String,iconSelected:String,label:[String,Number],color:String,textColor:String,modelValue:{type:Boolean,default:!0},selected:{type:Boolean,default:null},square:Boolean,outline:Boolean,clickable:Boolean,removable:Boolean,tabindex:[String,Number],disable:Boolean,ripple:{type:[Boolean,Object],default:!0}},emits:["update:modelValue","update:selected","remove","click"],setup(e,{slots:t,emit:n}){const{proxy:{$q:c}}=(0,r.FN)(),f=(0,a.Z)(e,c),p=(0,l.ZP)(e,d),g=(0,i.Fl)((()=>!0===e.selected||void 0!==e.icon)),m=(0,i.Fl)((()=>!0===e.selected?e.iconSelected||c.iconSet.chip.selected:e.icon)),v=(0,i.Fl)((()=>e.iconRemove||c.iconSet.chip.remove)),y=(0,i.Fl)((()=>!1===e.disable&&(!0===e.clickable||null!==e.selected))),w=(0,i.Fl)((()=>{const t=!0===e.outline&&e.color||e.textColor;return"q-chip row inline no-wrap items-center"+(!1===e.outline&&void 0!==e.color?` bg-${e.color}`:"")+(t?` text-${t} q-chip--colored`:"")+(!0===e.disable?" disabled":"")+(!0===e.dense?" q-chip--dense":"")+(!0===e.outline?" q-chip--outline":"")+(!0===e.selected?" q-chip--selected":"")+(!0===y.value?" q-chip--clickable cursor-pointer non-selectable q-hoverable":"")+(!0===e.square?" q-chip--square":"")+(!0===f.value?" q-chip--dark q-dark":"")})),b=(0,i.Fl)((()=>!0===e.disable?{tabindex:-1,"aria-disabled":"true"}:{tabindex:e.tabindex||0}));function _(e){13===e.keyCode&&T(e)}function T(t){e.disable||(n("update:selected",!e.selected),n("click",t))}function E(t){void 0!==t.keyCode&&13!==t.keyCode||((0,u.NS)(t),!1===e.disable&&(n("update:modelValue",!1),n("remove")))}function k(){const n=[];!0===y.value&&n.push((0,r.h)("div",{class:"q-focus-helper"})),!0===g.value&&n.push((0,r.h)(s.Z,{class:"q-chip__icon q-chip__icon--left",name:m.value}));const i=void 0!==e.label?[(0,r.h)("div",{class:"ellipsis"},[e.label])]:void 0;return n.push((0,r.h)("div",{class:"q-chip__content col row no-wrap items-center q-anchor--skip"},(0,h.pf)(t.default,i))),e.iconRight&&n.push((0,r.h)(s.Z,{class:"q-chip__icon q-chip__icon--right",name:e.iconRight})),!0===e.removable&&n.push((0,r.h)(s.Z,{class:"q-chip__icon q-chip__icon--remove cursor-pointer",name:v.value,...b.value,onClick:E,onKeyup:E})),n}return()=>{if(!1===e.modelValue)return;const t={class:w.value,style:p.value};return!0===y.value&&Object.assign(t,b.value,{onClick:T,onKeyup:_}),(0,h.Jl)("div",t,k(),"ripple",!1!==e.ripple&&!0!==e.disable,(()=>[[o.Z,e.ripple]]))}}})},3949:(e,t,n)=>{"use strict";n.d(t,{Z:()=>z});n(71);var r=n(3673),i=n(1959),s=n(6583);function o(e,t,n){let i;function o(){void 0!==i&&(s.Z.remove(i),i=void 0)}return(0,r.Jd)((()=>{!0===e.value&&o()})),{removeFromHistory:o,addToHistory(){i={condition:()=>!0===n.value,handler:t},s.Z.add(i)}}}var a=n(7445);const l={modelValue:{type:Boolean,default:null},"onUpdate:modelValue":[Function,Array]},c=["before-show","show","before-hide","hide"];function u({showing:e,canShow:t,hideOnRouteChange:n,handleShow:i,handleHide:s,processOnMount:o}){const l=(0,r.FN)(),{props:c,emit:u,proxy:h}=l;let d;function f(t){!0===e.value?m(t):p(t)}function p(e){if(!0===c.disable||void 0!==e&&!0===e.qAnchorHandled||void 0!==t&&!0!==t(e))return;const n=void 0!==c["onUpdate:modelValue"];!0===n&&(u("update:modelValue",!0),d=e,(0,r.Y3)((()=>{d===e&&(d=void 0)}))),null!==c.modelValue&&!1!==n||g(e)}function g(t){!0!==e.value&&(e.value=!0,u("before-show",t),void 0!==i?i(t):u("show",t))}function m(e){if(!0===c.disable)return;const t=void 0!==c["onUpdate:modelValue"];!0===t&&(u("update:modelValue",!1),d=e,(0,r.Y3)((()=>{d===e&&(d=void 0)}))),null!==c.modelValue&&!1!==t||v(e)}function v(t){!1!==e.value&&(e.value=!1,u("before-hide",t),void 0!==s?s(t):u("hide",t))}function y(t){if(!0===c.disable&&!0===t)void 0!==c["onUpdate:modelValue"]&&u("update:modelValue",!1);else if(!0===t!==e.value){const e=!0===t?g:v;e(d)}}(0,r.YP)((()=>c.modelValue),y),void 0!==n&&!0===(0,a.Rb)(l)&&(0,r.YP)((()=>h.$route),(()=>{!0===n.value&&!0===e.value&&m()})),!0===o&&(0,r.bv)((()=>{y(c.modelValue)}));const w={show:p,hide:m,toggle:f};return Object.assign(h,w),w}var h=n(4716),d=n(8400),f=n(4688);let p,g,m,v,y,w,b=0,_=!1;function T(e){E(e)&&(0,h.NS)(e)}function E(e){if(e.target===document.body||e.target.classList.contains("q-layout__backdrop"))return!0;const t=(0,h.AZ)(e),n=e.shiftKey&&!e.deltaX,r=!n&&Math.abs(e.deltaX)<=Math.abs(e.deltaY),i=n||r?e.deltaY:e.deltaX;for(let s=0;s<t.length;s++){const e=t[s];if((0,d.QA)(e,r))return r?i<0&&0===e.scrollTop||i>0&&e.scrollTop+e.clientHeight===e.scrollHeight:i<0&&0===e.scrollLeft||i>0&&e.scrollLeft+e.clientWidth===e.scrollWidth}return!0}function k(e){e.target===document&&(document.scrollingElement.scrollTop=document.scrollingElement.scrollTop)}function I(e){!0!==_&&(_=!0,requestAnimationFrame((()=>{_=!1;const{height:t}=e.target,{clientHeight:n,scrollTop:r}=document.scrollingElement;void 0!==m&&t===window.innerHeight||(m=n-t,document.scrollingElement.scrollTop=r),r>m&&(document.scrollingElement.scrollTop-=Math.ceil((r-m)/8))})))}function S(e){const t=document.body,n=void 0!==window.visualViewport;if("add"===e){const{overflowY:e,overflowX:r}=window.getComputedStyle(t);p=(0,d.OI)(window),g=(0,d.u3)(window),v=t.style.left,y=t.style.top,t.style.left=`-${p}px`,t.style.top=`-${g}px`,"hidden"!==r&&("scroll"===r||t.scrollWidth>window.innerWidth)&&t.classList.add("q-body--force-scrollbar-x"),"hidden"!==e&&("scroll"===e||t.scrollHeight>window.innerHeight)&&t.classList.add("q-body--force-scrollbar-y"),t.classList.add("q-body--prevent-scroll"),document.qScrollPrevented=!0,!0===f.Lp.is.ios&&(!0===n?(window.scrollTo(0,0),window.visualViewport.addEventListener("resize",I,h.rU.passiveCapture),window.visualViewport.addEventListener("scroll",I,h.rU.passiveCapture),window.scrollTo(0,0)):window.addEventListener("scroll",k,h.rU.passiveCapture))}!0===f.Lp.is.desktop&&!0===f.Lp.is.mac&&window[`${e}EventListener`]("wheel",T,h.rU.notPassive),"remove"===e&&(!0===f.Lp.is.ios&&(!0===n?(window.visualViewport.removeEventListener("resize",I,h.rU.passiveCapture),window.visualViewport.removeEventListener("scroll",I,h.rU.passiveCapture)):window.removeEventListener("scroll",k,h.rU.passiveCapture)),t.classList.remove("q-body--prevent-scroll"),t.classList.remove("q-body--force-scrollbar-x"),t.classList.remove("q-body--force-scrollbar-y"),document.qScrollPrevented=!1,t.style.left=v,t.style.top=y,window.scrollTo(p,g),m=void 0)}function C(e){let t="add";if(!0===e){if(b++,void 0!==w)return clearTimeout(w),void(w=void 0);if(b>1)return}else{if(0===b)return;if(b--,b>0)return;if(t="remove",!0===f.Lp.is.ios&&!0===f.Lp.is.nativeMobile)return clearTimeout(w),void(w=setTimeout((()=>{S(t),w=void 0}),100))}S(t)}function A(){let e;return{preventBodyScroll(t){t===e||void 0===e&&!0!==t||(e=t,C(t))}}}function x(){let e;return(0,r.Jd)((()=>{clearTimeout(e)})),{registerTimeout(t,n){clearTimeout(e),e=setTimeout(t,n)},removeTimeout(){clearTimeout(e)}}}var R=n(2236),O=n(908);const N={left:!0,right:!0,up:!0,down:!0,horizontal:!0,vertical:!0},L=Object.keys(N);function P(e){const t={};for(const n of L)!0===e[n]&&(t[n]=!0);return 0===Object.keys(t).length?N:(!0===t.horizontal?t.left=t.right=!0:!0===t.left&&!0===t.right&&(t.horizontal=!0),!0===t.vertical?t.up=t.down=!0:!0===t.up&&!0===t.down&&(t.vertical=!0),!0===t.horizontal&&!0===t.vertical&&(t.all=!0),t)}function D(e,t){return void 0===t.event&&void 0!==e.target&&!0!==e.target.draggable&&"function"===typeof t.handler&&"INPUT"!==e.target.nodeName.toUpperCase()&&(void 0===e.qClonedBy||-1===e.qClonedBy.indexOf(t.uid))}function F(){if(void 0!==window.getSelection){const e=window.getSelection();void 0!==e.empty?e.empty():void 0!==e.removeAllRanges&&(e.removeAllRanges(),!0!==f.ZP.is.mobile&&e.addRange(document.createRange()))}else void 0!==document.selection&&document.selection.empty()}function M(e,t,n){const r=(0,h.FK)(e);let i,s=r.left-t.event.x,o=r.top-t.event.y,a=Math.abs(s),l=Math.abs(o);const c=t.direction;!0===c.horizontal&&!0!==c.vertical?i=s<0?"left":"right":!0!==c.horizontal&&!0===c.vertical?i=o<0?"up":"down":!0===c.up&&o<0?(i="up",a>l&&(!0===c.left&&s<0?i="left":!0===c.right&&s>0&&(i="right"))):!0===c.down&&o>0?(i="down",a>l&&(!0===c.left&&s<0?i="left":!0===c.right&&s>0&&(i="right"))):!0===c.left&&s<0?(i="left",a<l&&(!0===c.up&&o<0?i="up":!0===c.down&&o>0&&(i="down"))):!0===c.right&&s>0&&(i="right",a<l&&(!0===c.up&&o<0?i="up":!0===c.down&&o>0&&(i="down")));let u=!1;if(void 0===i&&!1===n){if(!0===t.event.isFirst||void 0===t.event.lastDir)return{};i=t.event.lastDir,u=!0,"left"===i||"right"===i?(r.left-=s,a=0,s=0):(r.top-=o,l=0,o=0)}return{synthetic:u,payload:{evt:e,touch:!0!==t.event.mouse,mouse:!0===t.event.mouse,position:r,direction:i,isFirst:t.event.isFirst,isFinal:!0===n,duration:Date.now()-t.event.time,distance:{x:a,y:l},offset:{x:s,y:o},delta:{x:r.left-t.event.lastX,y:r.top-t.event.lastY}}}}N.all=!0;let q=0;const V=(0,O.f)({name:"touch-pan",beforeMount(e,{value:t,modifiers:n}){if(!0!==n.mouse&&!0!==f.Lp.has.touch)return;function r(e,t){!0===n.mouse&&!0===t?(0,h.NS)(e):(!0===n.stop&&(0,h.sT)(e),!0===n.prevent&&(0,h.X$)(e))}const i={uid:"qvtp_"+q++,handler:t,modifiers:n,direction:P(n),noop:h.ZT,mouseStart(e){D(e,i)&&(0,h.du)(e)&&((0,h.M0)(i,"temp",[[document,"mousemove","move","notPassiveCapture"],[document,"mouseup","end","passiveCapture"]]),i.start(e,!0))},touchStart(e){if(D(e,i)){const t=e.target;(0,h.M0)(i,"temp",[[t,"touchmove","move","notPassiveCapture"],[t,"touchcancel","end","passiveCapture"],[t,"touchend","end","passiveCapture"]]),i.start(e)}},start(t,r){if(!0===f.Lp.is.firefox&&(0,h.Jf)(e,!0),i.lastEvt=t,!0===r||!0===n.stop){if(!0!==i.direction.all&&(!0!==r||!0!==i.modifiers.mouseAllDir)){const e=t.type.indexOf("mouse")>-1?new MouseEvent(t.type,t):new TouchEvent(t.type,t);!0===t.defaultPrevented&&(0,h.X$)(e),!0===t.cancelBubble&&(0,h.sT)(e),Object.assign(e,{qKeyEvent:t.qKeyEvent,qClickOutside:t.qClickOutside,qAnchorHandled:t.qAnchorHandled,qClonedBy:void 0===t.qClonedBy?[i.uid]:t.qClonedBy.concat(i.uid)}),i.initialEvent={target:t.target,event:e}}(0,h.sT)(t)}const{left:s,top:o}=(0,h.FK)(t);i.event={x:s,y:o,time:Date.now(),mouse:!0===r,detected:!1,isFirst:!0,isFinal:!1,lastX:s,lastY:o}},move(e){if(void 0===i.event)return;const t=(0,h.FK)(e),s=t.left-i.event.x,o=t.top-i.event.y;if(0===s&&0===o)return;i.lastEvt=e;const a=!0===i.event.mouse,l=()=>{r(e,a),!0!==n.preserveCursor&&(document.documentElement.style.cursor="grabbing"),!0===a&&document.body.classList.add("no-pointer-events--children"),document.body.classList.add("non-selectable"),F(),i.styleCleanup=e=>{if(i.styleCleanup=void 0,!0!==n.preserveCursor&&(document.documentElement.style.cursor=""),document.body.classList.remove("non-selectable"),!0===a){const t=()=>{document.body.classList.remove("no-pointer-events--children")};void 0!==e?setTimeout((()=>{t(),e()}),50):t()}else void 0!==e&&e()}};if(!0===i.event.detected){!0!==i.event.isFirst&&r(e,i.event.mouse);const{payload:t,synthetic:n}=M(e,i,!1);return void(void 0!==t&&(!1===i.handler(t)?i.end(e):(void 0===i.styleCleanup&&!0===i.event.isFirst&&l(),i.event.lastX=t.position.left,i.event.lastY=t.position.top,i.event.lastDir=!0===n?void 0:t.direction,i.event.isFirst=!1)))}if(!0===i.direction.all||!0===a&&!0===i.modifiers.mouseAllDir)return l(),i.event.detected=!0,void i.move(e);const c=Math.abs(s),u=Math.abs(o);c!==u&&(!0===i.direction.horizontal&&c>u||!0===i.direction.vertical&&c<u||!0===i.direction.up&&c<u&&o<0||!0===i.direction.down&&c<u&&o>0||!0===i.direction.left&&c>u&&s<0||!0===i.direction.right&&c>u&&s>0?(i.event.detected=!0,i.move(e)):i.end(e,!0))},end(t,n){if(void 0!==i.event){if((0,h.ul)(i,"temp"),!0===f.Lp.is.firefox&&(0,h.Jf)(e,!1),!0===n)void 0!==i.styleCleanup&&i.styleCleanup(),!0!==i.event.detected&&void 0!==i.initialEvent&&i.initialEvent.target.dispatchEvent(i.initialEvent.event);else if(!0===i.event.detected){!0===i.event.isFirst&&i.handler(M(void 0===t?i.lastEvt:t,i).payload);const{payload:e}=M(void 0===t?i.lastEvt:t,i,!0),n=()=>{i.handler(e)};void 0!==i.styleCleanup?i.styleCleanup(n):n()}i.event=void 0,i.initialEvent=void 0,i.lastEvt=void 0}}};e.__qtouchpan=i,!0===n.mouse&&(0,h.M0)(i,"main",[[e,"mousedown","mouseStart","passive"+(!0===n.mouseCapture?"Capture":"")]]),!0===f.Lp.has.touch&&(0,h.M0)(i,"main",[[e,"touchstart","touchStart","passive"+(!0===n.capture?"Capture":"")],[e,"touchmove","noop","notPassiveCapture"]])},updated(e,t){const n=e.__qtouchpan;void 0!==n&&(t.oldValue!==t.value&&("function"!==typeof value&&n.end(),n.handler=t.value),n.direction=P(t.modifiers))},beforeUnmount(e){const t=e.__qtouchpan;void 0!==t&&(void 0!==t.event&&t.end(),(0,h.ul)(t,"main"),(0,h.ul)(t,"temp"),!0===f.Lp.is.firefox&&(0,h.Jf)(e,!1),void 0!==t.styleCleanup&&t.styleCleanup(),delete e.__qtouchpan)}});function U(e,t,n){return n<=t?t:Math.min(n,Math.max(t,e))}var j=n(7657),B=n(2547);const $=150,z=(0,O.L)({name:"QDrawer",inheritAttrs:!1,props:{...l,...R.S,side:{type:String,default:"left",validator:e=>["left","right"].includes(e)},width:{type:Number,default:300},mini:Boolean,miniToOverlay:Boolean,miniWidth:{type:Number,default:57},breakpoint:{type:Number,default:1023},showIfAbove:Boolean,behavior:{type:String,validator:e=>["default","desktop","mobile"].includes(e),default:"default"},bordered:Boolean,elevated:Boolean,overlay:Boolean,persistent:Boolean,noSwipeOpen:Boolean,noSwipeClose:Boolean,noSwipeBackdrop:Boolean},emits:[...c,"on-layout","mini-state"],setup(e,{slots:t,emit:n,attrs:s}){const a=(0,r.FN)(),{proxy:{$q:l}}=a,c=(0,R.Z)(e,l),{preventBodyScroll:h}=A(),{registerTimeout:d}=x(),f=(0,r.f3)(B.YE,(()=>{console.error("QDrawer needs to be child of QLayout")}));let p,g,m;const v=(0,i.iH)("mobile"===e.behavior||"desktop"!==e.behavior&&f.totalWidth.value<=e.breakpoint),y=(0,i.Fl)((()=>!0===e.mini&&!0!==v.value)),w=(0,i.Fl)((()=>!0===y.value?e.miniWidth:e.width)),b=(0,i.iH)(!0===e.showIfAbove&&!1===v.value||!0===e.modelValue),_=(0,i.Fl)((()=>!0!==e.persistent&&(!0===v.value||!0===W.value)));function T(e,t){if(S(),!1!==e&&f.animate(),se(0),!0===v.value){const e=f.instances[q.value];void 0!==e&&!0===e.belowBreakpoint&&e.hide(!1),ae(1),!0!==f.isContainer.value&&h(!0)}else ae(0),!1!==e&&le(!1);d((()=>{!1!==e&&le(!0),!0!==t&&n("show",e)}),$)}function E(e,t){C(),!1!==e&&f.animate(),ae(0),se(L.value*w.value),de(),!0!==t&&d((()=>{n("hide",e)}),$)}const{show:k,hide:I}=u({showing:b,hideOnRouteChange:_,handleShow:T,handleHide:E}),{addToHistory:S,removeFromHistory:C}=o(b,I,_),O={belowBreakpoint:v,hide:I},N=(0,i.Fl)((()=>"right"===e.side)),L=(0,i.Fl)((()=>(!0===l.lang.rtl?-1:1)*(!0===N.value?1:-1))),P=(0,i.iH)(0),D=(0,i.iH)(!1),F=(0,i.iH)(!1),M=(0,i.iH)(w.value*L.value),q=(0,i.Fl)((()=>!0===N.value?"left":"right")),z=(0,i.Fl)((()=>!0===b.value&&!1===v.value&&!1===e.overlay?!0===e.miniToOverlay?e.miniWidth:w.value:0)),H=(0,i.Fl)((()=>!0===e.overlay||!0===e.miniToOverlay||f.view.value.indexOf(N.value?"R":"L")>-1||!0===l.platform.is.ios&&!0===f.isContainer.value)),K=(0,i.Fl)((()=>!1===e.overlay&&!0===b.value&&!1===v.value)),W=(0,i.Fl)((()=>!0===e.overlay&&!0===b.value&&!1===v.value)),G=(0,i.Fl)((()=>"fullscreen q-drawer__backdrop"+(!1===b.value&&!1===D.value?" hidden":""))),J=(0,i.Fl)((()=>({backgroundColor:`rgba(0,0,0,${.4*P.value})`}))),Y=(0,i.Fl)((()=>!0===N.value?"r"===f.rows.value.top[2]:"l"===f.rows.value.top[0])),X=(0,i.Fl)((()=>!0===N.value?"r"===f.rows.value.bottom[2]:"l"===f.rows.value.bottom[0])),Z=(0,i.Fl)((()=>{const e={};return!0===f.header.space&&!1===Y.value&&(!0===H.value?e.top=`${f.header.offset}px`:!0===f.header.space&&(e.top=`${f.header.size}px`)),!0===f.footer.space&&!1===X.value&&(!0===H.value?e.bottom=`${f.footer.offset}px`:!0===f.footer.space&&(e.bottom=`${f.footer.size}px`)),e})),Q=(0,i.Fl)((()=>{const e={width:`${w.value}px`,transform:`translateX(${M.value}px)`};return!0===v.value?e:Object.assign(e,Z.value)})),ee=(0,i.Fl)((()=>"q-drawer__content fit "+(!0!==f.isContainer.value?"scroll":"overflow-auto"))),te=(0,i.Fl)((()=>`q-drawer q-drawer--${e.side}`+(!0===F.value?" q-drawer--mini-animate":"")+(!0===e.bordered?" q-drawer--bordered":"")+(!0===c.value?" q-drawer--dark q-dark":"")+(!0===D.value?" no-transition":!0===b.value?"":" q-layout--prevent-focus")+(!0===v.value?" fixed q-drawer--on-top q-drawer--mobile q-drawer--top-padding":" q-drawer--"+(!0===y.value?"mini":"standard")+(!0===H.value||!0!==K.value?" fixed":"")+(!0===e.overlay||!0===e.miniToOverlay?" q-drawer--on-top":"")+(!0===Y.value?" q-drawer--top-padding":"")))),ne=(0,i.Fl)((()=>{const t=!0===l.lang.rtl?e.side:q.value;return[[V,ue,void 0,{[t]:!0,mouse:!0}]]})),re=(0,i.Fl)((()=>{const t=!0===l.lang.rtl?q.value:e.side;return[[V,he,void 0,{[t]:!0,mouse:!0}]]})),ie=(0,i.Fl)((()=>{const t=!0===l.lang.rtl?q.value:e.side;return[[V,he,void 0,{[t]:!0,mouse:!0,mouseAllDir:!0}]]}));function se(e){void 0===e?(0,r.Y3)((()=>{e=!0===b.value?0:w.value,se(L.value*e)})):(!0!==f.isContainer.value||!0!==N.value||!0!==v.value&&Math.abs(e)!==w.value||(e+=L.value*f.scrollbarWidth.value),M.value=e)}function oe(){pe(v,"mobile"===e.behavior||"desktop"!==e.behavior&&f.totalWidth.value<=e.breakpoint)}function ae(e){P.value=e}function le(e){const t=!0===e?"remove":!0!==f.isContainer.value?"add":"";""!==t&&document.body.classList[t]("q-body--drawer-toggle")}function ce(){clearTimeout(g),a.proxy&&a.proxy.$el&&a.proxy.$el.classList.add("q-drawer--mini-animate"),F.value=!0,g=setTimeout((()=>{F.value=!1,a&&a.proxy&&a.proxy.$el&&a.proxy.$el.classList.remove("q-drawer--mini-animate")}),150)}function ue(e){if(!1!==b.value)return;const t=w.value,n=U(e.distance.x,0,t);if(!0===e.isFinal){const e=n>=Math.min(75,t);return!0===e?k():(f.animate(),ae(0),se(L.value*t)),void(D.value=!1)}se((!0===l.lang.rtl?!0!==N.value:N.value)?Math.max(t-n,0):Math.min(0,n-t)),ae(U(n/t,0,1)),!0===e.isFirst&&(D.value=!0)}function he(t){if(!0!==b.value)return;const n=w.value,r=t.direction===e.side,i=(!0===l.lang.rtl?!0!==r:r)?U(t.distance.x,0,n):0;if(!0===t.isFinal){const e=Math.abs(i)<Math.min(75,n);return!0===e?(f.animate(),ae(1),se(0)):I(),void(D.value=!1)}se(L.value*i),ae(U(1-i/n,0,1)),!0===t.isFirst&&(D.value=!0)}function de(){h(!1),le(!0)}function fe(t,n){f.update(e.side,t,n)}function pe(e,t){e.value!==t&&(e.value=t)}function ge(t,n){fe("size",!0===t?e.miniWidth:n)}return(0,r.YP)(v,(t=>{!0===t?(p=b.value,!0===b.value&&I(!1)):!1===e.overlay&&"mobile"!==e.behavior&&!1!==p&&(!0===b.value?(se(0),ae(0),de()):k(!1))})),(0,r.YP)(f.totalWidth,(t=>{pe(v,"mobile"===e.behavior||"desktop"!==e.behavior&&t<=e.breakpoint)})),(0,r.YP)((()=>e.side),((e,t)=>{f.instances[t]===O&&(f.instances[t]=void 0,f[t].space=!1,f[t].offset=0),f.instances[e]=O,f[e].size=w.value,f[e].space=K.value,f[e].offset=z.value})),(0,r.YP)((()=>e.behavior+e.breakpoint),oe),(0,r.YP)(f.isContainer,(e=>{!0===b.value&&h(!0!==e)})),(0,r.YP)(f.scrollbarWidth,(()=>{se(!0===b.value?0:void 0)})),(0,r.YP)(z,(e=>{fe("offset",e)})),(0,r.YP)(K,(e=>{n("on-layout",e),fe("space",e)})),(0,r.YP)(N,(()=>{se()})),(0,r.YP)(w,(t=>{se(),ge(e.miniToOverlay,t)})),(0,r.YP)((()=>e.miniToOverlay),(e=>{ge(e,w.value)})),(0,r.YP)((()=>l.lang.rtl),(()=>{se()})),(0,r.YP)((()=>e.mini),(()=>{!0===e.modelValue&&(ce(),f.animate())})),(0,r.YP)(y,(e=>{n("mini-state",e)})),f.instances[e.side]=O,ge(e.miniToOverlay,w.value),fe("space",K.value),fe("offset",z.value),!0===e.showIfAbove&&!0!==e.modelValue&&!0===b.value&&void 0!==e["onUpdate:modelValue"]&&n("update:modelValue",!0),(0,r.bv)((()=>{n("on-layout",K.value),n("mini-state",y.value),p=!0===e.showIfAbove;const t=()=>{const e=!0===b.value?T:E;e(!1,!0)};0===f.totalWidth.value?m=(0,r.YP)(f.totalWidth,(()=>{m(),m=void 0,!1===b.value&&!0===e.showIfAbove&&!1===v.value?k(!1):t()})):(0,r.Y3)(t)})),(0,r.Jd)((()=>{void 0!==m&&m(),clearTimeout(g),!0===b.value&&de(),f.instances[e.side]===O&&(f.instances[e.side]=void 0,fe("size",0),fe("offset",0),fe("space",!1))})),()=>{const n=[];!0===v.value&&(!1===e.noSwipeOpen&&n.push((0,r.wy)((0,r.h)("div",{key:"open",class:`q-drawer__opener fixed-${e.side}`,"aria-hidden":"true"}),ne.value)),n.push((0,j.Jl)("div",{ref:"backdrop",class:G.value,style:J.value,"aria-hidden":"true",onClick:I},void 0,"backdrop",!0!==e.noSwipeBackdrop&&!0===b.value,(()=>ie.value))));const i=!0===y.value&&void 0!==t.mini,o=[(0,r.h)("div",{...s,key:""+i,class:[ee.value,s.class]},!0===i?t.mini():(0,j.KR)(t.default))];return!0===e.elevated&&!0===b.value&&o.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,j.Jl)("aside",{ref:"content",class:te.value,style:Q.value},o,"contentclose",!0!==e.noSwipeClose&&!0===v.value,(()=>re.value))),(0,r.h)("div",{class:"q-drawer-container"},n)}}})},3812:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(3673),i=n(1959),s=n(5151),o=n(908),a=n(7657),l=n(2547);const c=(0,o.L)({name:"QHeader",props:{modelValue:{type:Boolean,default:!0},reveal:Boolean,revealOffset:{type:Number,default:250},bordered:Boolean,elevated:Boolean,heightHint:{type:[String,Number],default:50}},emits:["reveal","focusin"],setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=(0,r.FN)(),c=(0,r.f3)(l.YE,(()=>{console.error("QHeader needs to be child of QLayout")})),u=(0,i.iH)(parseInt(e.heightHint,10)),h=(0,i.iH)(!0),d=(0,i.Fl)((()=>!0===e.reveal||c.view.value.indexOf("H")>-1||!0===c.isContainer.value)),f=(0,i.Fl)((()=>{if(!0!==e.modelValue)return 0;if(!0===d.value)return!0===h.value?u.value:0;const t=u.value-c.scroll.value.position;return t>0?t:0})),p=(0,i.Fl)((()=>!0!==e.modelValue||!0===d.value&&!0!==h.value)),g=(0,i.Fl)((()=>!0===e.modelValue&&!0===p.value&&!0===e.reveal)),m=(0,i.Fl)((()=>"q-header q-layout__section--marginal "+(!0===d.value?"fixed":"absolute")+"-top"+(!0===e.bordered?" q-header--bordered":"")+(!0===p.value?" q-header--hidden":"")+(!0!==e.modelValue?" q-layout--prevent-focus":""))),v=(0,i.Fl)((()=>{const e=c.rows.value.top,t={};return"l"===e[0]&&!0===c.left.space&&(t[!0===o.lang.rtl?"right":"left"]=`${c.left.size}px`),"r"===e[2]&&!0===c.right.space&&(t[!0===o.lang.rtl?"left":"right"]=`${c.right.size}px`),t}));function y(e,t){c.update("header",e,t)}function w(e,t){e.value!==t&&(e.value=t)}function b({height:e}){w(u,e),y("size",e)}function _(e){!0===g.value&&w(h,!0),n("focusin",e)}(0,r.YP)((()=>e.modelValue),(e=>{y("space",e),w(h,!0),c.animate()})),(0,r.YP)(f,(e=>{y("offset",e)})),(0,r.YP)((()=>e.reveal),(t=>{!1===t&&w(h,e.modelValue)})),(0,r.YP)(h,(e=>{c.animate(),n("reveal",e)})),(0,r.YP)(c.scroll,(t=>{!0===e.reveal&&w(h,"up"===t.direction||t.position<=e.revealOffset||t.position-t.inflectionPoint<100)}));const T={};return c.instances.header=T,!0===e.modelValue&&y("size",u.value),y("space",e.modelValue),y("offset",f.value),(0,r.Jd)((()=>{c.instances.header===T&&(c.instances.header=void 0,y("size",0),y("offset",0),y("space",!1))})),()=>{const n=(0,a.Bl)(t.default,[]);return!0===e.elevated&&n.push((0,r.h)("div",{class:"q-layout__shadow absolute-full overflow-hidden no-pointer-events"})),n.push((0,r.h)(s.Z,{debounce:0,onResize:b})),(0,r.h)("header",{class:m.value,style:v.value,onFocusin:_},n)}}})},4554:(e,t,n)=>{"use strict";n.d(t,{Z:()=>w});n(71);var r=n(3673),i=n(1959),s=n(2417),o=n(908),a=n(7657);const l=e=>e,c=e=>`ionicons ${e}`,u={"icon-":l,"bt-":e=>`bt ${e}`,"eva-":e=>`eva ${e}`,"ion-md":c,"ion-ios":c,"ion-logo":c,"mdi-":e=>`mdi ${e}`,"iconfont ":l,"ti-":e=>`themify-icon ${e}`,"bi-":e=>`bootstrap-icons ${e}`},h={o_:"-outlined",r_:"-round",s_:"-sharp"},d=new RegExp("^("+Object.keys(u).join("|")+")"),f=new RegExp("^("+Object.keys(h).join("|")+")"),p=/^[Mm] ?\d/,g=/^img:/,m=/^svguse:/,v=/^ion-/,y=/^[lf]a[srlbdk]? /,w=(0,o.L)({name:"QIcon",props:{...s.LU,tag:{type:String,default:"i"},name:String,color:String,left:Boolean,right:Boolean},setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),o=(0,s.ZP)(e),l=(0,i.Fl)((()=>"q-icon"+(!0===e.left?" on-left":"")+(!0===e.right?" on-right":"")+(void 0!==e.color?` text-${e.color}`:""))),c=(0,i.Fl)((()=>{let t,i=e.name;if(!i)return{none:!0,cls:l.value};if(null!==n.iconMapFn){const e=n.iconMapFn(i);if(void 0!==e){if(void 0===e.icon)return{cls:e.cls+" "+l.value,content:void 0!==e.content?e.content:" "};i=e.icon}}if(!0===p.test(i)){const[e,t]=i.split("|");return{svg:!0,cls:l.value,nodes:e.split("&&").map((e=>{const[t,n,i]=e.split("@@");return(0,r.h)("path",{style:n,d:t,transform:i})})),viewBox:void 0!==t?t:"0 0 24 24"}}if(!0===g.test(i))return{img:!0,cls:l.value,src:i.substring(4)};if(!0===m.test(i)){const[e,t]=i.split("|");return{svguse:!0,cls:l.value,src:e.substring(7),viewBox:void 0!==t?t:"0 0 24 24"}}let s=" ";const o=i.match(d);if(null!==o)t=u[o[1]](i);else if(!0===y.test(i))t=i;else if(!0===v.test(i))t=`ionicons ion-${!0===n.platform.is.ios?"ios":"md"}${i.substr(3)}`;else{t="notranslate material-icons";const e=i.match(f);null!==e&&(i=i.substring(2),t+=h[e[1]]),s=i}return{cls:t+" "+l.value,content:s}}));return()=>{const n={class:c.value.cls,style:o.value,"aria-hidden":"true",role:"presentation"};return!0===c.value.none?(0,r.h)(e.tag,n,(0,a.KR)(t.default)):!0===c.value.img?(n.src=c.value.src,(0,r.h)("img",n)):!0===c.value.svg?(n.viewBox=c.value.viewBox,(0,r.h)("svg",n,(0,a.vs)(t.default,c.value.nodes))):!0===c.value.svguse?(n.viewBox=c.value.viewBox,(0,r.h)("svg",n,(0,a.vs)(t.default,[(0,r.h)("use",{"xlink:href":c.value.src})]))):(0,r.h)(e.tag,n,(0,a.vs)(t.default,[c.value.content]))}}})},4027:(e,t,n)=>{"use strict";n.d(t,{Z:()=>d});var r=n(1959),i=n(3673),s=n(8880),o=n(9754);const a={ratio:[String,Number]};function l(e,t){return(0,r.Fl)((()=>{const n=Number(e.ratio||(void 0!==t?t.value:void 0));return!0!==isNaN(n)&&n>0?{paddingBottom:100/n+"%"}:null}))}var c=n(908),u=n(7657);n(4688);const h=16/9,d=(0,c.L)({name:"QImg",props:{...a,src:String,srcset:String,sizes:String,alt:String,crossorigin:String,decoding:String,referrerpolicy:String,draggable:Boolean,loading:{type:String,default:"lazy"},width:String,height:String,initialRatio:{type:[Number,String],default:h},placeholderSrc:String,fit:{type:String,default:"cover"},position:{type:String,default:"50% 50%"},imgClass:String,imgStyle:Object,noSpinner:Boolean,noNativeMenu:Boolean,noTransition:Boolean,spinnerColor:String,spinnerSize:String},emits:["load","error"],setup(e,{slots:t,emit:n}){const a=(0,r.iH)(e.initialRatio),c=l(e,a);let h;const d=[(0,r.iH)(null),(0,r.iH)(void 0!==e.placeholderSrc?{src:e.placeholderSrc}:null)],f=(0,r.iH)(0),p=(0,r.iH)(!1),g=(0,r.iH)(!1),m=(0,r.Fl)((()=>`q-img q-img--${!0===e.noNativeMenu?"no-":""}menu`)),v=(0,r.Fl)((()=>({width:e.width,height:e.height}))),y=(0,r.Fl)((()=>"q-img__image "+(void 0!==e.imgClass?e.imgClass+" ":"")+`q-img__image--with${!0===e.noTransition?"out":""}-transition`)),w=(0,r.Fl)((()=>({...e.imgStyle,objectFit:e.fit,objectPosition:e.position})));function b(){return e.src||e.srcset||e.sizes?{src:e.src,srcset:e.srcset,sizes:e.sizes}:null}function _(e){if(clearTimeout(h),g.value=!1,null===e)return p.value=!1,d[0].value=null,void(d[1].value=null);p.value=!0,d[f.value].value=e}function T({target:e}){null!==h&&(clearTimeout(h),a.value=0===e.naturalHeight?.5:e.naturalWidth/e.naturalHeight,E(e,1))}function E(e,t){null!==h&&1e3!==t&&(!0===e.complete?k(e):h=setTimeout((()=>{E(e,t+1)}),50))}function k(e){null!==h&&(f.value=1===f.value?0:1,d[f.value].value=null,p.value=!1,g.value=!1,n("load",e.currentSrc||e.src))}function I(e){clearTimeout(h),p.value=!1,g.value=!0,d[0].value=null,d[1].value=null,n("error",e)}function S(e,t){return(0,i.h)("div",{class:"q-img__container absolute-full",key:e},t)}function C(t){const n=d[t].value,r={key:"img_"+t,class:y.value,style:w.value,crossorigin:e.crossorigin,decoding:e.decoding,referrerpolicy:e.referrerpolicy,height:e.height,width:e.width,loading:e.loading,"aria-hidden":"true",draggable:e.draggable,...n};return f.value===t?(r.class+=" q-img__image--waiting",Object.assign(r,{onLoad:T,onError:I})):r.class+=" q-img__image--loaded",S("img"+t,(0,i.h)("img",r))}function A(){return!0!==p.value?(0,i.h)("div",{key:"content",class:"q-img__content absolute-full q-anchor--skip"},(0,u.KR)(t[!0===g.value?"error":"default"])):(0,i.h)("div",{key:"loading",class:"q-img__loading absolute-full flex flex-center"},void 0!==t.loading?t.loading():!0===e.noSpinner?void 0:[(0,i.h)(o.Z,{color:e.spinnerColor,size:e.spinnerSize})])}return(0,i.YP)((()=>b()),_),_(b()),(0,i.Jd)((()=>{clearTimeout(h),h=null})),()=>{const t=[];return null!==c.value&&t.push((0,i.h)("div",{key:"filler",style:c.value})),!0!==g.value&&(null!==d[0].value&&t.push(C(0)),null!==d[1].value&&t.push(C(1))),t.push((0,i.h)(s.uT,{name:"q-transition--fade"},A)),(0,i.h)("div",{class:m.value,style:v.value,role:"img","aria-label":e.alt},t)}}})},8908:(e,t,n)=>{"use strict";n.d(t,{Z:()=>re});n(71);var r=n(1959),i=n(3673),s=n(8880),o=n(4688),a=n(4554),l=n(9754),c=n(2236),u=n(2547);function h({validate:e,resetValidation:t,requiresQForm:n}){const r=(0,i.f3)(u.vh,!1);if(!1!==r){const{props:n,proxy:s}=(0,i.FN)();Object.assign(s,{validate:e,resetValidation:t}),(0,i.YP)((()=>n.disable),(e=>{!0===e?("function"===typeof t&&t(),r.unbindComponent(s)):r.bindComponent(s)})),!0!==n.disable&&r.bindComponent(s),(0,i.Jd)((()=>{!0!==n.disable&&r.unbindComponent(s)}))}else!0===n&&console.error("Parent QForm not found on useFormChild()!")}const d=/^#[0-9a-fA-F]{3}([0-9a-fA-F]{3})?$/,f=/^#[0-9a-fA-F]{4}([0-9a-fA-F]{4})?$/,p=/^#([0-9a-fA-F]{3}|[0-9a-fA-F]{4}|[0-9a-fA-F]{6}|[0-9a-fA-F]{8})$/,g=/^rgb\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5])\)$/,m=/^rgba\(((0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),){2}(0|[1-9][\d]?|1[\d]{0,2}|2[\d]?|2[0-4][\d]|25[0-5]),(0|0\.[0-9]+[1-9]|0\.[1-9]+|1)\)$/,v={date:e=>/^-?[\d]+\/[0-1]\d\/[0-3]\d$/.test(e),time:e=>/^([0-1]?\d|2[0-3]):[0-5]\d$/.test(e),fulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d:[0-5]\d$/.test(e),timeOrFulltime:e=>/^([0-1]?\d|2[0-3]):[0-5]\d(:[0-5]\d)?$/.test(e),hexColor:e=>d.test(e),hexaColor:e=>f.test(e),hexOrHexaColor:e=>p.test(e),rgbColor:e=>g.test(e),rgbaColor:e=>m.test(e),rgbOrRgbaColor:e=>g.test(e)||m.test(e),hexOrRgbColor:e=>d.test(e)||g.test(e),hexaOrRgbaColor:e=>f.test(e)||m.test(e),anyColor:e=>p.test(e)||g.test(e)||m.test(e)},y=[!0,!1,"ondemand"],w={modelValue:{},error:{type:Boolean,default:null},errorMessage:String,noErrorIcon:Boolean,rules:Array,reactiveRules:Boolean,lazyRules:{type:[Boolean,String],validator:e=>y.includes(e)}};function b(e,t){const{props:n,proxy:s}=(0,i.FN)(),o=(0,r.iH)(!1),a=(0,r.iH)(null),l=(0,r.iH)(null);h({validate:m,resetValidation:g});let c,u=0;const d=(0,r.Fl)((()=>void 0!==n.rules&&null!==n.rules&&n.rules.length>0)),f=(0,r.Fl)((()=>!0===n.error||!0===o.value)),p=(0,r.Fl)((()=>"string"===typeof n.errorMessage&&n.errorMessage.length>0?n.errorMessage:a.value));function g(){u++,t.value=!1,l.value=null,o.value=!1,a.value=null}function m(e=n.modelValue){if(!0!==d.value)return!0;u++,!0!==t.value&&!0!==n.lazyRules&&(l.value=!0);const r=(e,n)=>{o.value!==e&&(o.value=e);const r=n||void 0;a.value!==r&&(a.value=r),!1!==t.value&&(t.value=!1)},i=[];for(let t=0;t<n.rules.length;t++){const s=n.rules[t];let o;if("function"===typeof s?o=s(e):"string"===typeof s&&void 0!==v[s]&&(o=v[s](e)),!1===o||"string"===typeof o)return r(!0,o),!1;!0!==o&&void 0!==o&&i.push(o)}if(0===i.length)return r(!1),!0;!0!==t.value&&(t.value=!0);const s=u;return Promise.all(i).then((e=>{if(s!==u)return!0;if(void 0===e||!1===Array.isArray(e)||0===e.length)return r(!1),!0;const t=e.find((e=>!1===e||"string"===typeof e));return r(void 0!==t,t),void 0===t}),(e=>s!==u||(console.error(e),r(!0),!1)))}function y(e){!0===d.value&&"ondemand"!==n.lazyRules&&(!0===l.value||!0!==n.lazyRules&&!0!==e)&&m()}return(0,i.YP)((()=>n.modelValue),(()=>{y()})),(0,i.YP)((()=>n.reactiveRules),(e=>{!0===e?void 0===c&&(c=(0,i.YP)((()=>n.rules),(()=>{y(!0)}))):void 0!==c&&(c(),c=void 0)}),{immediate:!0}),(0,i.YP)(e,(e=>{"ondemand"!==n.lazyRules&&(!0===e?null===l.value&&(l.value=!1):!1===l.value&&!0===d.value&&(l.value=!0,m()))})),(0,i.Jd)((()=>{void 0!==c&&c()})),Object.assign(s,{resetValidation:g,validate:m}),Object.defineProperty(s,"hasError",{get:()=>f.value}),{isDirtyModel:l,hasRules:d,hasError:f,computedErrorMessage:p,validate:m,resetValidation:g}}const _=/^on[A-Z]/;function T(e,t){const n={listeners:(0,r.iH)({}),attributes:(0,r.iH)({})};function s(){const r={},i={};Object.keys(e).forEach((t=>{"class"!==t&&"style"!==t&&!1===_.test(t)&&(r[t]=e[t])})),Object.keys(t.props).forEach((e=>{!0===_.test(e)&&(i[e]=t.props[e])})),n.attributes.value=r,n.listeners.value=i}return(0,i.Xn)(s),s(),n}var E=n(7657);n(979),n(6105),n(5123),n(2396);let k,I=0;const S=new Array(256);for(let ie=0;ie<256;ie++)S[ie]=(ie+256).toString(16).substr(1);const C=(()=>{const e="undefined"!==typeof crypto?crypto:"undefined"!==typeof window?window.crypto||window.msCrypto:void 0;if(void 0!==e){if(void 0!==e.randomBytes)return e.randomBytes;if(void 0!==e.getRandomValues)return t=>{const n=new Uint8Array(t);return e.getRandomValues(n),n}}return e=>{const t=[];for(let n=e;n>0;n--)t.push(Math.floor(256*Math.random()));return t}})(),A=4096;function x(){(void 0===k||I+16>A)&&(I=0,k=C(A));const e=Array.prototype.slice.call(k,I,I+=16);return e[6]=15&e[6]|64,e[8]=63&e[8]|128,S[e[0]]+S[e[1]]+S[e[2]]+S[e[3]]+"-"+S[e[4]]+S[e[5]]+"-"+S[e[6]]+S[e[7]]+"-"+S[e[8]]+S[e[9]]+"-"+S[e[10]]+S[e[11]]+S[e[12]]+S[e[13]]+S[e[14]]+S[e[15]]}var R=n(4716);let O=[];const N=[];function L(e){if(0!==N.length)return O.push(e),e;e()}function P(e){const t=O.indexOf(e);-1!==t&&O.splice(t,1)}function D(e){return void 0===e?`f_${x()}`:e}function F(e){return void 0!==e&&null!==e&&(""+e).length>0}const M={...c.S,...w,label:String,stackLabel:Boolean,hint:String,hideHint:Boolean,prefix:String,suffix:String,labelColor:String,color:String,bgColor:String,filled:Boolean,outlined:Boolean,borderless:Boolean,standout:[Boolean,String],square:Boolean,loading:Boolean,labelSlot:Boolean,bottomSlots:Boolean,hideBottomSpace:Boolean,rounded:Boolean,dense:Boolean,itemAligned:Boolean,counter:Boolean,clearable:Boolean,clearIcon:String,disable:Boolean,readonly:Boolean,autofocus:Boolean,for:String,maxlength:[Number,String]},q=["update:modelValue","clear","focus","blur","popup-show","popup-hide"];function V(){const{props:e,attrs:t,proxy:n,vnode:s}=(0,i.FN)(),o=(0,c.Z)(e,n.$q);return{isDark:o,editable:(0,r.Fl)((()=>!0!==e.disable&&!0!==e.readonly)),innerLoading:(0,r.iH)(!1),focused:(0,r.iH)(!1),hasPopupOpen:!1,splitAttrs:T(t,s),targetUid:(0,r.iH)(D(e.for)),rootRef:(0,r.iH)(null),targetRef:(0,r.iH)(null),controlRef:(0,r.iH)(null)}}function U(e){const{props:t,emit:n,slots:c,attrs:u,proxy:h}=(0,i.FN)(),{$q:d}=h;let f;void 0===e.hasValue&&(e.hasValue=(0,r.Fl)((()=>F(t.modelValue)))),void 0===e.emitValue&&(e.emitValue=e=>{n("update:modelValue",e)}),void 0===e.controlEvents&&(e.controlEvents={onFocusin:q,onFocusout:V}),Object.assign(e,{clearValue:U,onControlFocusin:q,onControlFocusout:V,focus:N}),void 0===e.computedCounter&&(e.computedCounter=(0,r.Fl)((()=>{if(!1!==t.counter){const e="string"===typeof t.modelValue||"number"===typeof t.modelValue?(""+t.modelValue).length:!0===Array.isArray(t.modelValue)?t.modelValue.length:0,n=void 0!==t.maxlength?t.maxlength:t.maxValues;return e+(void 0!==n?" / "+n:"")}})));const{isDirtyModel:p,hasRules:g,hasError:m,computedErrorMessage:v,resetValidation:y}=b(e.focused,e.innerLoading),w=void 0!==e.floatingLabel?(0,r.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.floatingLabel.value)):(0,r.Fl)((()=>!0===t.stackLabel||!0===e.focused.value||!0===e.hasValue.value)),_=(0,r.Fl)((()=>!0===t.bottomSlots||void 0!==t.hint||!0===g.value||!0===t.counter||null!==t.error)),T=(0,r.Fl)((()=>!0===t.filled?"filled":!0===t.outlined?"outlined":!0===t.borderless?"borderless":t.standout?"standout":"standard")),k=(0,r.Fl)((()=>`q-field row no-wrap items-start q-field--${T.value}`+(void 0!==e.fieldClass?` ${e.fieldClass.value}`:"")+(!0===t.rounded?" q-field--rounded":"")+(!0===t.square?" q-field--square":"")+(!0===w.value?" q-field--float":"")+(!0===S.value?" q-field--labeled":"")+(!0===t.dense?" q-field--dense":"")+(!0===t.itemAligned?" q-field--item-aligned q-item-type":"")+(!0===e.isDark.value?" q-field--dark":"")+(void 0===e.getControl?" q-field--auto-height":"")+(!0===e.focused.value?" q-field--focused":"")+(!0===m.value?" q-field--error":"")+(!0===m.value||!0===e.focused.value?" q-field--highlighted":"")+(!0!==t.hideBottomSpace&&!0===_.value?" q-field--with-bottom":"")+(!0===t.disable?" q-field--disabled":!0===t.readonly?" q-field--readonly":""))),I=(0,r.Fl)((()=>"q-field__control relative-position row no-wrap"+(void 0!==t.bgColor?` bg-${t.bgColor}`:"")+(!0===m.value?" text-negative":"string"===typeof t.standout&&t.standout.length>0&&!0===e.focused.value?` ${t.standout}`:void 0!==t.color?` text-${t.color}`:""))),S=(0,r.Fl)((()=>!0===t.labelSlot||void 0!==t.label)),C=(0,r.Fl)((()=>"q-field__label no-pointer-events absolute ellipsis"+(void 0!==t.labelColor&&!0!==m.value?` text-${t.labelColor}`:""))),A=(0,r.Fl)((()=>({id:e.targetUid.value,editable:e.editable.value,focused:e.focused.value,floatingLabel:w.value,modelValue:t.modelValue,emitValue:e.emitValue}))),x=(0,r.Fl)((()=>{const n={for:e.targetUid.value};return!0===t.disable?n["aria-disabled"]="true":!0===t.readonly&&(n["aria-readonly"]="true"),n}));let O;function N(){void 0!==O&&P(O),O=L((()=>{O=void 0;const t=document.activeElement;let n=void 0!==e.targetRef&&e.targetRef.value;!n||null!==t&&t.id===e.targetUid.value||(!0===n.hasAttribute("tabindex")||(n=n.querySelector("[tabindex]")),n&&n!==t&&n.focus())}))}function M(){void 0!==O&&P(O);const t=document.activeElement;null!==t&&e.rootRef.value.contains(t)&&t.blur()}function q(t){!0===e.editable.value&&!1===e.focused.value&&(e.focused.value=!0,n("focus",t))}function V(t,r){clearTimeout(f),f=setTimeout((()=>{(!0!==document.hasFocus()||!0!==e.hasPopupOpen&&(void 0===e.controlRef||null!==e.controlRef.value&&!1===e.controlRef.value.contains(document.activeElement)))&&(!0===e.focused.value&&(e.focused.value=!1,n("blur",t)),void 0!==r&&r())}))}function U(r){if((0,R.NS)(r),!0!==d.platform.is.mobile){const t=void 0!==e.targetRef&&e.targetRef.value||e.rootRef.value;t.focus()}else!0===e.rootRef.value.contains(document.activeElement)&&document.activeElement.blur();"file"===t.type&&(e.inputRef.value.value=null),n("update:modelValue",null),n("clear",t.modelValue),(0,i.Y3)((()=>{y(),"ondemand"!==t.lazyRules&&!0!==d.platform.is.mobile&&(p.value=!1)}))}function j(){const n=[];return void 0!==c.prepend&&n.push((0,i.h)("div",{class:"q-field__prepend q-field__marginal row no-wrap items-center",key:"prepend",onClick:R.X$},c.prepend())),n.push((0,i.h)("div",{class:"q-field__control-container col relative-position row no-wrap q-anchor--skip"},B())),void 0!==c.append&&n.push((0,i.h)("div",{class:"q-field__append q-field__marginal row no-wrap items-center",key:"append",onClick:R.X$},c.append())),!0===m.value&&!1===t.noErrorIcon&&n.push(z("error",[(0,i.h)(a.Z,{name:d.iconSet.field.error,color:"negative"})])),!0===t.loading||!0===e.innerLoading.value?n.push(z("inner-loading-append",void 0!==c.loading?c.loading():[(0,i.h)(l.Z,{color:t.color})])):!0===t.clearable&&!0===e.hasValue.value&&!0===e.editable.value&&n.push(z("inner-clearable-append",[(0,i.h)(a.Z,{class:"q-field__focusable-action",tag:"button",name:t.clearIcon||d.iconSet.field.clear,tabindex:0,type:"button",onClick:U})])),void 0!==e.getInnerAppend&&n.push(z("inner-append",e.getInnerAppend())),void 0!==e.getControlChild&&n.push(e.getControlChild()),n}function B(){const n=[];return void 0!==t.prefix&&null!==t.prefix&&n.push((0,i.h)("div",{class:"q-field__prefix no-pointer-events row items-center"},t.prefix)),void 0!==e.getShadowControl&&!0===e.hasShadow.value&&n.push(e.getShadowControl()),void 0!==e.getControl?n.push(e.getControl()):void 0!==c.rawControl?n.push(c.rawControl()):void 0!==c.control&&n.push((0,i.h)("div",{ref:e.targetRef,class:"q-field__native row",...e.splitAttrs.attributes.value,"data-autofocus":!0===t.autofocus||void 0},c.control(A.value))),!0===S.value&&n.push((0,i.h)("div",{class:C.value},(0,E.KR)(c.label,t.label))),void 0!==t.suffix&&null!==t.suffix&&n.push((0,i.h)("div",{class:"q-field__suffix no-pointer-events row items-center"},t.suffix)),n.concat((0,E.KR)(c.default))}function $(){let n,r;!0===m.value?null!==v.value?(n=[(0,i.h)("div",{role:"alert"},v.value)],r=`q--slot-error-${v.value}`):(n=(0,E.KR)(c.error),r="q--slot-error"):!0===t.hideHint&&!0!==e.focused.value||(void 0!==t.hint?(n=[(0,i.h)("div",t.hint)],r=`q--slot-hint-${t.hint}`):(n=(0,E.KR)(c.hint),r="q--slot-hint"));const o=!0===t.counter||void 0!==c.counter;if(!0===t.hideBottomSpace&&!1===o&&void 0===n)return;const a=(0,i.h)("div",{key:r,class:"q-field__messages col"},n);return(0,i.h)("div",{class:"q-field__bottom row items-start q-field__bottom--"+(!0!==t.hideBottomSpace?"animated":"stale")},[!0===t.hideBottomSpace?a:(0,i.h)(s.uT,{name:"q-transition--field-message"},(()=>a)),!0===o?(0,i.h)("div",{class:"q-field__counter"},void 0!==c.counter?c.counter():e.computedCounter.value):null])}function z(e,t){return null===t?null:(0,i.h)("div",{key:e,class:"q-field__append q-field__marginal row no-wrap items-center q-anchor--skip"},t)}return(0,i.YP)((()=>t.for),(t=>{e.targetUid.value=D(t)})),Object.assign(h,{focus:N,blur:M}),(0,i.bv)((()=>{!0===o.uX.value&&void 0===t.for&&(e.targetUid.value=D()),!0===t.autofocus&&h.focus()})),(0,i.Jd)((()=>{clearTimeout(f)})),function(){return(0,i.h)("label",{ref:e.rootRef,class:[k.value,u.class],style:u.style,...x.value},[void 0!==c.before?(0,i.h)("div",{class:"q-field__before q-field__marginal row no-wrap items-center",onClick:R.X$},c.before()):null,(0,i.h)("div",{class:"q-field__inner relative-position col self-stretch"},[(0,i.h)("div",{ref:e.controlRef,class:I.value,tabindex:-1,...e.controlEvents},j()),!0===_.value?$():null]),void 0!==c.after?(0,i.h)("div",{class:"q-field__after q-field__marginal row no-wrap items-center",onClick:R.X$},c.after()):null])}}n(5363);var j=n(1436);const B={date:"####/##/##",datetime:"####/##/## ##:##",time:"##:##",fulltime:"##:##:##",phone:"(###) ### - ####",card:"#### #### #### ####"},$={"#":{pattern:"[\\d]",negate:"[^\\d]"},S:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]"},N:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]"},A:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleUpperCase()},a:{pattern:"[a-zA-Z]",negate:"[^a-zA-Z]",transform:e=>e.toLocaleLowerCase()},X:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleUpperCase()},x:{pattern:"[0-9a-zA-Z]",negate:"[^0-9a-zA-Z]",transform:e=>e.toLocaleLowerCase()}},z=Object.keys($);z.forEach((e=>{$[e].regex=new RegExp($[e].pattern)}));const H=new RegExp("\\\\([^.*+?^${}()|([\\]])|([.*+?^${}()|[\\]])|(["+z.join("")+"])|(.)","g"),K=/[.*+?^${}()|[\]\\]/g,W=String.fromCharCode(1),G={mask:String,reverseFillMask:Boolean,fillMask:[Boolean,String],unmaskedValue:Boolean};function J(e,t,n,s){let o,a,l,c;const u=(0,r.iH)(null),h=(0,r.iH)(f());function d(){return!0===e.autogrow||["textarea","text","search","url","tel","password"].includes(e.type)}function f(){if(g(),!0===u.value){const t=b(T(e.modelValue));return!1!==e.fillMask?E(t):t}return e.modelValue}function p(e){if(e<o.length)return o.slice(-e);let t="",n=o;const r=n.indexOf(W);if(r>-1){for(let r=e-n.length;r>0;r--)t+=W;n=n.slice(0,r)+t+n.slice(r)}return n}function g(){if(u.value=void 0!==e.mask&&e.mask.length>0&&d(),!1===u.value)return c=void 0,o="",void(a="");const t=void 0===B[e.mask]?e.mask:B[e.mask],n="string"===typeof e.fillMask&&e.fillMask.length>0?e.fillMask.slice(0,1):"_",r=n.replace(K,"\\$&"),i=[],s=[],h=[];let f=!0===e.reverseFillMask,p="",g="";t.replace(H,((e,t,n,r,o)=>{if(void 0!==r){const e=$[r];h.push(e),g=e.negate,!0===f&&(s.push("(?:"+g+"+)?("+e.pattern+"+)?(?:"+g+"+)?("+e.pattern+"+)?"),f=!1),s.push("(?:"+g+"+)?("+e.pattern+")?")}else if(void 0!==n)p="\\"+("\\"===n?"":n),h.push(n),i.push("([^"+p+"]+)?"+p+"?");else{const e=void 0!==t?t:o;p="\\"===e?"\\\\\\\\":e.replace(K,"\\\\$&"),h.push(e),i.push("([^"+p+"]+)?"+p+"?")}}));const m=new RegExp("^"+i.join("")+"("+(""===p?".":"[^"+p+"]")+"+)?$"),v=s.length-1,y=s.map(((t,n)=>0===n&&!0===e.reverseFillMask?new RegExp("^"+r+"*"+t):n===v?new RegExp("^"+t+"("+(""===g?".":g)+"+)?"+(!0===e.reverseFillMask?"$":r+"*")):new RegExp("^"+t)));l=h,c=e=>{const t=m.exec(e);null!==t&&(e=t.slice(1).join(""));const n=[],r=y.length;for(let i=0,s=e;i<r;i++){const e=y[i].exec(s);if(null===e)break;s=s.slice(e.shift().length),n.push(...e)}return n.length>0?n.join(""):e},o=h.map((e=>"string"===typeof e?e:W)).join(""),a=o.split(W).join(n)}function m(t,r,l){const c=s.value,u=c.selectionEnd,d=c.value.length-u,f=T(t);!0===r&&g();const p=b(f),m=!1!==e.fillMask?E(p):p,v=h.value!==m;c.value!==m&&(c.value=m),!0===v&&(h.value=m),document.activeElement===c&&(0,i.Y3)((()=>{if(m!==a)if("insertFromPaste"!==l||!0===e.reverseFillMask)if(["deleteContentBackward","deleteContentForward"].indexOf(l)>-1){const t=!0===e.reverseFillMask?0===u?m.length>p.length?1:0:Math.max(0,m.length-(m===a?0:Math.min(p.length,d)+1))+1:u;c.setSelectionRange(t,t,"forward")}else if(!0===e.reverseFillMask)if(!0===v){const e=Math.max(0,m.length-(m===a?0:Math.min(p.length,d+1)));1===e&&1===u?c.setSelectionRange(e,e,"forward"):y.rightReverse(c,e,e)}else{const e=m.length-d;c.setSelectionRange(e,e,"backward")}else if(!0===v){const e=Math.max(0,o.indexOf(W),Math.min(p.length,u)-1);y.right(c,e,e)}else{const e=u-1;y.right(c,e,e)}else{const e=u-1;y.right(c,e,e)}else{const t=!0===e.reverseFillMask?a.length:0;c.setSelectionRange(t,t,"forward")}}));const w=!0===e.unmaskedValue?T(m):m;e.modelValue!==w&&n(w,!0)}function v(e,t,n){const r=b(T(e.value));t=Math.max(0,o.indexOf(W),Math.min(r.length,t)),e.setSelectionRange(t,n,"forward")}(0,i.YP)((()=>e.type+e.autogrow),g),(0,i.YP)((()=>e.mask),(n=>{if(void 0!==n)m(h.value,!0);else{const n=T(h.value);g(),e.modelValue!==n&&t("update:modelValue",n)}})),(0,i.YP)((()=>e.fillMask+e.reverseFillMask),(()=>{!0===u.value&&m(h.value,!0)})),(0,i.YP)((()=>e.unmaskedValue),(()=>{!0===u.value&&m(h.value)}));const y={left(e,t,n,r){const i=-1===o.slice(t-1).indexOf(W);let s=Math.max(0,t-1);for(;s>=0;s--)if(o[s]===W){t=s,!0===i&&t++;break}if(s<0&&void 0!==o[t]&&o[t]!==W)return y.right(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},right(e,t,n,r){const i=e.value.length;let s=Math.min(i,n+1);for(;s<=i;s++){if(o[s]===W){n=s;break}o[s-1]===W&&(n=s)}if(s>i&&void 0!==o[n-1]&&o[n-1]!==W)return y.left(e,i,i);e.setSelectionRange(r?t:n,n,"forward")},leftReverse(e,t,n,r){const i=p(e.value.length);let s=Math.max(0,t-1);for(;s>=0;s--){if(i[s-1]===W){t=s;break}if(i[s]===W&&(t=s,0===s))break}if(s<0&&void 0!==i[t]&&i[t]!==W)return y.rightReverse(e,0,0);t>=0&&e.setSelectionRange(t,!0===r?n:t,"backward")},rightReverse(e,t,n,r){const i=e.value.length,s=p(i),o=-1===s.slice(0,n+1).indexOf(W);let a=Math.min(i,n+1);for(;a<=i;a++)if(s[a-1]===W){n=a,n>0&&!0===o&&n--;break}if(a>i&&void 0!==s[n-1]&&s[n-1]!==W)return y.leftReverse(e,i,i);e.setSelectionRange(!0===r?t:n,n,"forward")}};function w(t){if(!0===(0,j.Wm)(t))return;const n=s.value,r=n.selectionStart,i=n.selectionEnd;if(37===t.keyCode||39===t.keyCode){const s=y[(39===t.keyCode?"right":"left")+(!0===e.reverseFillMask?"Reverse":"")];t.preventDefault(),s(n,r,i,t.shiftKey)}else 8===t.keyCode&&!0!==e.reverseFillMask&&r===i?y.left(n,r,i,!0):46===t.keyCode&&!0===e.reverseFillMask&&r===i&&y.rightReverse(n,r,i,!0)}function b(t){if(void 0===t||null===t||""===t)return"";if(!0===e.reverseFillMask)return _(t);const n=l;let r=0,i="";for(let e=0;e<n.length;e++){const s=t[r],o=n[e];if("string"===typeof o)i+=o,s===o&&r++;else{if(void 0===s||!o.regex.test(s))return i;i+=void 0!==o.transform?o.transform(s):s,r++}}return i}function _(e){const t=l,n=o.indexOf(W);let r=e.length-1,i="";for(let s=t.length-1;s>=0&&r>-1;s--){const o=t[s];let a=e[r];if("string"===typeof o)i=o+i,a===o&&r--;else{if(void 0===a||!o.regex.test(a))return i;do{i=(void 0!==o.transform?o.transform(a):a)+i,r--,a=e[r]}while(n===s&&void 0!==a&&o.regex.test(a))}}return i}function T(e){return"string"!==typeof e||void 0===c?"number"===typeof e?c(""+e):e:c(e)}function E(t){return a.length-t.length<=0?t:!0===e.reverseFillMask&&t.length>0?a.slice(0,-t.length)+t:t+a.slice(t.length)}return{innerValue:h,hasMask:u,moveCursorForPaste:v,updateMaskValue:m,onMaskedKeydown:w}}var Y=n(9550);function X(e,t){function n(){const t=e.modelValue;try{const e="DataTransfer"in window?new DataTransfer:"ClipboardEvent"in window?new ClipboardEvent("").clipboardData:void 0;return Object(t)===t&&("length"in t?Array.from(t):[t]).forEach((t=>{e.items.add(t)})),{files:e.files}}catch(n){return{files:void 0}}}return!0===t?(0,r.Fl)((()=>{if("file"===e.type)return n()})):(0,r.Fl)(n)}const Z=/[\u3000-\u303f\u3040-\u309f\u30a0-\u30ff\uff00-\uff9f\u4e00-\u9faf\u3400-\u4dbf]/,Q=/[\u4e00-\u9fff\u3400-\u4dbf\u{20000}-\u{2a6df}\u{2a700}-\u{2b73f}\u{2b740}-\u{2b81f}\u{2b820}-\u{2ceaf}\uf900-\ufaff\u3300-\u33ff\ufe30-\ufe4f\uf900-\ufaff\u{2f800}-\u{2fa1f}]/u,ee=/[\u3131-\u314e\u314f-\u3163\uac00-\ud7a3]/;function te(e){return function(t){if("compositionend"===t.type||"change"===t.type){if(!0!==t.target.composing)return;t.target.composing=!1,e(t)}else"compositionupdate"===t.type?"string"===typeof t.data&&!1===Z.test(t.data)&&!1===Q.test(t.data)&&!1===ee.test(t.data)&&(t.target.composing=!1):t.target.composing=!0}}var ne=n(908);const re=(0,ne.L)({name:"QInput",inheritAttrs:!1,props:{...M,...G,...Y.Fz,modelValue:{required:!1},shadowText:String,type:{type:String,default:"text"},debounce:[String,Number],autogrow:Boolean,inputClass:[Array,String,Object],inputStyle:[Array,String,Object]},emits:[...q,"paste","change"],setup(e,{emit:t,attrs:n}){const s={};let o,a,l,c,u=NaN;const h=(0,r.iH)(null),d=(0,Y.Do)(e),{innerValue:f,hasMask:p,moveCursorForPaste:g,updateMaskValue:m,onMaskedKeydown:v}=J(e,t,O,h),y=X(e,!0),w=(0,r.Fl)((()=>F(f.value))),b=te(x),_=V(),T=(0,r.Fl)((()=>"textarea"===e.type||!0===e.autogrow)),E=(0,r.Fl)((()=>!0===T.value||["text","search","url","tel","password"].includes(e.type))),k=(0,r.Fl)((()=>{const t={..._.splitAttrs.listeners.value,onInput:x,onPaste:A,onChange:P,onBlur:D,onFocus:R.sT};return t.onCompositionstart=t.onCompositionupdate=t.onCompositionend=b,!0===p.value&&(t.onKeydown=v),!0===e.autogrow&&(t.onAnimationend=N),t})),I=(0,r.Fl)((()=>{const t={tabindex:0,"data-autofocus":!0===e.autofocus||void 0,rows:"textarea"===e.type?6:void 0,"aria-label":e.label,name:d.value,..._.splitAttrs.attributes.value,id:_.targetUid.value,maxlength:e.maxlength,disabled:!0===e.disable,readonly:!0===e.readonly};return!1===T.value&&(t.type=e.type),!0===e.autogrow&&(t.rows=1),t}));function S(){L((()=>{const e=document.activeElement;null===h.value||h.value===e||null!==e&&e.id===_.targetUid.value||h.value.focus()}))}function C(){null!==h.value&&h.value.select()}function A(n){if(!0===p.value&&!0!==e.reverseFillMask){const e=n.target;g(e,e.selectionStart,e.selectionEnd)}t("paste",n)}function x(n){if(!n||!n.target||!0===n.target.composing)return;if("file"===e.type)return void t("update:modelValue",n.target.files);const r=n.target.value;if(!0===p.value)m(r,!1,n.inputType);else if(O(r),!0===E.value&&n.target===document.activeElement){const{selectionStart:e,selectionEnd:t}=n.target;void 0!==e&&void 0!==t&&(0,i.Y3)((()=>{n.target===document.activeElement&&0===r.indexOf(n.target.value)&&n.target.setSelectionRange(e,t)}))}!0===e.autogrow&&N()}function O(n,r){c=()=>{"number"!==e.type&&!0===s.hasOwnProperty("value")&&delete s.value,e.modelValue!==n&&u!==n&&(!0===r&&(a=!0),t("update:modelValue",n),(0,i.Y3)((()=>{u===n&&(u=NaN)}))),c=void 0},"number"===e.type&&(o=!0,s.value=n),void 0!==e.debounce?(clearTimeout(l),s.value=n,l=setTimeout(c,e.debounce)):c()}function N(){const e=h.value;if(null!==e){const t=e.parentNode.style;t.marginBottom=e.scrollHeight-1+"px",e.style.height="1px",e.style.height=e.scrollHeight+"px",t.marginBottom=""}}function P(e){b(e),clearTimeout(l),void 0!==c&&c(),t("change",e.target.value)}function D(t){void 0!==t&&(0,R.sT)(t),clearTimeout(l),void 0!==c&&c(),o=!1,a=!1,delete s.value,"file"!==e.type&&setTimeout((()=>{null!==h.value&&(h.value.value=void 0!==f.value?f.value:"")}))}function M(){return!0===s.hasOwnProperty("value")?s.value:void 0!==f.value?f.value:""}(0,i.YP)((()=>e.modelValue),(t=>{if(!0===p.value){if(!0===a)return void(a=!1);m(t)}else f.value!==t&&(f.value=t,"number"===e.type&&!0===s.hasOwnProperty("value")&&(!0===o?o=!1:delete s.value));!0===e.autogrow&&(0,i.Y3)(N)})),(0,i.YP)((()=>e.autogrow),(e=>{!0===e?(0,i.Y3)(N):null!==h.value&&n.rows>0&&(h.value.style.height="auto")})),(0,i.YP)((()=>e.dense),(()=>{!0===e.autogrow&&(0,i.Y3)(N)})),(0,i.Jd)((()=>{D()})),(0,i.bv)((()=>{!0===e.autogrow&&N()})),Object.assign(_,{innerValue:f,fieldClass:(0,r.Fl)((()=>"q-"+(!0===T.value?"textarea":"input")+(!0===e.autogrow?" q-textarea--autogrow":""))),hasShadow:(0,r.Fl)((()=>"file"!==e.type&&"string"===typeof e.shadowText&&e.shadowText.length>0)),inputRef:h,emitValue:O,hasValue:w,floatingLabel:(0,r.Fl)((()=>!0===w.value||F(e.displayValue))),getControl:()=>(0,i.h)(!0===T.value?"textarea":"input",{ref:h,class:["q-field__native q-placeholder",e.inputClass],style:e.inputStyle,...I.value,...k.value,..."file"!==e.type?{value:M()}:y.value}),getShadowControl:()=>(0,i.h)("div",{class:"q-field__native q-field__shadow absolute-bottom no-pointer-events"+(!0===T.value?"":" text-no-wrap")},[(0,i.h)("span",{class:"invisible"},M()),(0,i.h)("span",e.shadowText)])});const q=U(_),j=(0,i.FN)();return Object.assign(j.proxy,{focus:S,select:C,getNativeElement:()=>h.value}),q}})},3414:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(3673),i=n(1959),s=n(2236),o=n(7277),a=n(908),l=n(7657),c=n(4716),u=n(1436);const h=(0,a.L)({name:"QItem",props:{...s.S,...o.$,tag:{type:String,default:"div"},active:Boolean,clickable:Boolean,dense:Boolean,insetLevel:Number,tabindex:[String,Number],focused:Boolean,manualFocus:Boolean},emits:["click","keyup"],setup(e,{slots:t,emit:n}){const{proxy:{$q:a}}=(0,r.FN)(),h=(0,s.Z)(e,a),{hasLink:d,linkProps:f,linkClass:p,linkTag:g,navigateToLink:m}=(0,o.Z)(),v=(0,i.iH)(null),y=(0,i.iH)(null),w=(0,i.Fl)((()=>!0===e.clickable||!0===d.value||"a"===e.tag||"label"===e.tag)),b=(0,i.Fl)((()=>!0!==e.disable&&!0===w.value)),_=(0,i.Fl)((()=>"q-item q-item-type row no-wrap"+(!0===e.dense?" q-item--dense":"")+(!0===h.value?" q-item--dark":"")+(!0===d.value?p.value:!0===e.active?(void 0!==e.activeClass?` ${e.activeClass}`:"")+" q-item--active":"")+(!0===e.disable?" disabled":"")+(!0===b.value?" q-item--clickable q-link cursor-pointer "+(!0===e.manualFocus?"q-manual-focusable":"q-focusable q-hoverable")+(!0===e.focused?" q-manual-focusable--focused":""):""))),T=(0,i.Fl)((()=>{if(void 0===e.insetLevel)return null;const t=!0===a.lang.rtl?"Right":"Left";return{["padding"+t]:16+56*e.insetLevel+"px"}}));function E(e){!0===b.value&&(null!==y.value&&(!0!==e.qKeyEvent&&document.activeElement===v.value?y.value.focus():document.activeElement===y.value&&v.value.focus()),!0===d.value&&m(e),n("click",e))}function k(e){if(!0===b.value&&!0===(0,u.So)(e,13)){(0,c.NS)(e),e.qKeyEvent=!0;const t=new MouseEvent("click",e);t.qKeyEvent=!0,v.value.dispatchEvent(t)}n("keyup",e)}function I(){const e=(0,l.Bl)(t.default,[]);return!0===b.value&&e.unshift((0,r.h)("div",{class:"q-focus-helper",tabindex:-1,ref:y})),e}return()=>{const t={ref:v,class:_.value,style:T.value,onClick:E,onKeyup:k};return!0===b.value?(t.tabindex=e.tabindex||"0",Object.assign(t,f.value)):!0===w.value&&(t["aria-disabled"]="true"),(0,r.h)(g.value,t,I())}}})},2350:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(1959),i=n(3673),s=n(908),o=n(7657);const a=(0,s.L)({name:"QItemLabel",props:{overline:Boolean,caption:Boolean,header:Boolean,lines:[Number,String]},setup(e,{slots:t}){const n=(0,r.Fl)((()=>parseInt(e.lines,10))),s=(0,r.Fl)((()=>"q-item__label"+(!0===e.overline?" q-item__label--overline text-overline":"")+(!0===e.caption?" q-item__label--caption text-caption":"")+(!0===e.header?" q-item__label--header":"")+(1===n.value?" ellipsis":""))),a=(0,r.Fl)((()=>void 0!==e.lines&&n.value>1?{overflow:"hidden",display:"-webkit-box","-webkit-box-orient":"vertical","-webkit-line-clamp":n.value}:null));return()=>(0,i.h)("div",{style:a.value,class:s.value},(0,o.KR)(t.default))}})},2035:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(1959),i=n(3673),s=n(908),o=n(7657);const a=(0,s.L)({name:"QItemSection",props:{avatar:Boolean,thumbnail:Boolean,side:Boolean,top:Boolean,noWrap:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-item__section column q-item__section--"+(!0===e.avatar||!0===e.side||!0===e.thumbnail?"side":"main")+(!0===e.top?" q-item__section--top justify-start":" justify-center")+(!0===e.avatar?" q-item__section--avatar":"")+(!0===e.thumbnail?" q-item__section--thumbnail":"")+(!0===e.noWrap?" q-item__section--nowrap":"")));return()=>(0,i.h)("div",{class:n.value},(0,o.KR)(t.default))}})},7011:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(3673),i=n(1959),s=n(908),o=n(2236),a=n(7657);const l=(0,s.L)({name:"QList",props:{...o.S,bordered:Boolean,dense:Boolean,separator:Boolean,padding:Boolean},setup(e,{slots:t}){const n=(0,r.FN)(),s=(0,o.Z)(e,n.proxy.$q),l=(0,i.Fl)((()=>"q-list"+(!0===e.bordered?" q-list--bordered":"")+(!0===e.dense?" q-list--dense":"")+(!0===e.separator?" q-list--separator":"")+(!0===s.value?" q-list--dark":"")+(!0===e.padding?" q-list--padding":"")));return()=>(0,r.h)("div",{class:l.value},(0,a.KR)(t.default))}})},3066:(e,t,n)=>{"use strict";n.d(t,{Z:()=>g});var r=n(3673),i=n(1959),s=n(4688),o=n(908),a=n(8400),l=n(4716);const{passive:c}=l.rU,u=["both","horizontal","vertical"],h=(0,o.L)({name:"QScrollObserver",props:{axis:{type:String,validator:e=>u.includes(e),default:"vertical"},debounce:[String,Number],scrollTarget:{default:void 0}},emits:["scroll"],setup(e,{emit:t}){const n={position:{top:0,left:0},direction:"down",directionChanged:!1,delta:{top:0,left:0},inflectionPoint:{top:0,left:0}};let i,s,o=null;function u(){o=null;const r=Math.max(0,(0,a.u3)(i)),s=(0,a.OI)(i),l={top:r-n.position.top,left:s-n.position.left};if("vertical"===e.axis&&0===l.top||"horizontal"===e.axis&&0===l.left)return;const c=Math.abs(l.top)>=Math.abs(l.left)?l.top<0?"up":"down":l.left<0?"left":"right";n.position={top:r,left:s},n.directionChanged=n.direction!==c,n.delta=l,!0===n.directionChanged&&(n.direction=c,n.inflectionPoint=n.position),t("scroll",{...n})}function h(){i=(0,a.b0)(s,e.scrollTarget),i.addEventListener("scroll",f,c),f(!0)}function d(){void 0!==i&&(i.removeEventListener("scroll",f,c),i=void 0)}function f(t){!0===t||0===e.debounce||"0"===e.debounce?u():null===o&&(o=e.debounce?setTimeout(u,e.debounce):requestAnimationFrame(u))}(0,r.YP)((()=>e.scrollTarget),(()=>{d(),h()}));const p=(0,r.FN)();return(0,r.bv)((()=>{s=p.proxy.$el.parentNode,h()})),(0,r.Jd)((()=>{clearTimeout(o),cancelAnimationFrame(o),d()})),Object.assign(p.proxy,{trigger:f,getPosition:()=>n}),l.ZT}});var d=n(5151),f=n(7657),p=n(2547);const g=(0,o.L)({name:"QLayout",props:{container:Boolean,view:{type:String,default:"hhh lpr fff",validator:e=>/^(h|l)h(h|r) lpr (f|l)f(f|r)$/.test(e.toLowerCase())},onScroll:Function,onScrollHeight:Function,onResize:Function},setup(e,{slots:t,emit:n}){const{proxy:{$q:o}}=(0,r.FN)(),l=(0,i.iH)(null),c=(0,i.iH)(o.screen.height),u=(0,i.iH)(!0===e.container?0:o.screen.width),g=(0,i.iH)({position:0,direction:"down",inflectionPoint:0}),m=(0,i.iH)(0),v=(0,i.iH)(!0===s.uX.value?0:(0,a.np)()),y=(0,i.Fl)((()=>"q-layout q-layout--"+(!0===e.container?"containerized":"standard"))),w=(0,i.Fl)((()=>!1===e.container?{minHeight:o.screen.height+"px"}:null)),b=(0,i.Fl)((()=>0!==v.value?{[!0===o.lang.rtl?"left":"right"]:`${v.value}px`}:null)),_=(0,i.Fl)((()=>0!==v.value?{[!0===o.lang.rtl?"right":"left"]:0,[!0===o.lang.rtl?"left":"right"]:`-${v.value}px`,width:`calc(100% + ${v.value}px)`}:null));function T(t){if(!0===e.container||!0!==document.qScrollPrevented){const r={position:t.position.top,direction:t.direction,directionChanged:t.directionChanged,inflectionPoint:t.inflectionPoint.top,delta:t.delta.top};g.value=r,void 0!==e.onScroll&&n("scroll",r)}}function E(t){const{height:r,width:i}=t;let s=!1;c.value!==r&&(s=!0,c.value=r,void 0!==e.onScrollHeight&&n("scroll-height",r),I()),u.value!==i&&(s=!0,u.value=i),!0===s&&void 0!==e.onResize&&n("resize",t)}function k({height:e}){m.value!==e&&(m.value=e,I())}function I(){if(!0===e.container){const e=c.value>m.value?(0,a.np)():0;v.value!==e&&(v.value=e)}}let S;const C={instances:{},view:(0,i.Fl)((()=>e.view)),isContainer:(0,i.Fl)((()=>e.container)),rootRef:l,height:c,containerHeight:m,scrollbarWidth:v,totalWidth:(0,i.Fl)((()=>u.value+v.value)),rows:(0,i.Fl)((()=>{const t=e.view.toLowerCase().split(" ");return{top:t[0].split(""),middle:t[1].split(""),bottom:t[2].split("")}})),header:(0,i.qj)({size:0,offset:0,space:!1}),right:(0,i.qj)({size:300,offset:0,space:!1}),footer:(0,i.qj)({size:0,offset:0,space:!1}),left:(0,i.qj)({size:300,offset:0,space:!1}),scroll:g,animate(){void 0!==S?clearTimeout(S):document.body.classList.add("q-body--layout-animate"),S=setTimeout((()=>{document.body.classList.remove("q-body--layout-animate"),S=void 0}),155)},update(e,t,n){C[e][t]=n}};return(0,r.JJ)(p.YE,C),()=>{const n=(0,f.vs)(t.default,[(0,r.h)(h,{onScroll:T}),(0,r.h)(d.Z,{onResize:E})]),i=(0,r.h)("div",{class:y.value,style:w.value,ref:!0===e.container?void 0:l},n);return!0===e.container?(0,r.h)("div",{class:"q-layout-container overflow-hidden",ref:l},[(0,r.h)(d.Z,{onResize:k}),(0,r.h)("div",{class:"absolute-full",style:b.value},[(0,r.h)("div",{class:"scroll",style:_.value},[i])])]):i}}})},2652:(e,t,n)=>{"use strict";n.d(t,{Z:()=>l});var r=n(3673),i=n(1959),s=n(908),o=n(7657),a=n(2547);const l=(0,s.L)({name:"QPageContainer",setup(e,{slots:t}){const{proxy:{$q:n}}=(0,r.FN)(),s=(0,r.f3)(a.YE,(()=>{console.error("QPageContainer needs to be child of QLayout")}));(0,r.JJ)(a.Mw,!0);const l=(0,i.Fl)((()=>{const e={};return!0===s.header.space&&(e.paddingTop=`${s.header.size}px`),!0===s.right.space&&(e["padding"+(!0===n.lang.rtl?"Left":"Right")]=`${s.right.size}px`),!0===s.footer.space&&(e.paddingBottom=`${s.footer.size}px`),!0===s.left.space&&(e["padding"+(!0===n.lang.rtl?"Right":"Left")]=`${s.left.size}px`),e}));return()=>(0,r.h)("div",{class:"q-page-container",style:l.value},(0,o.KR)(t.default))}})},5151:(e,t,n)=>{"use strict";n.d(t,{Z:()=>h});var r=n(3673),i=n(1959),s=n(4688);function o(){const e=(0,i.iH)(!s.uX.value);return!1===e.value&&(0,r.bv)((()=>{e.value=!0})),e}var a=n(908),l=n(4716);const c="undefined"!==typeof ResizeObserver,u=!0===c?{}:{style:"display:block;position:absolute;top:0;left:0;right:0;bottom:0;height:100%;width:100%;overflow:hidden;pointer-events:none;z-index:-1;",url:"about:blank"},h=(0,a.L)({name:"QResizeObserver",props:{debounce:{type:[String,Number],default:100}},emits:["resize"],setup(e,{emit:t}){let n,i,s={width:-1,height:-1};function a(t){!0===t||0===e.debounce||"0"===e.debounce?h():n||(n=setTimeout(h,e.debounce))}function h(){if(n=void 0,i){const{offsetWidth:e,offsetHeight:n}=i;e===s.width&&n===s.height||(s={width:e,height:n},t("resize",s))}}const d=(0,r.FN)();if(Object.assign(d.proxy,{trigger:a}),!0===c){let e;return(0,r.bv)((()=>{(0,r.Y3)((()=>{i=d.proxy.$el.parentNode,i&&(e=new ResizeObserver(a),e.observe(i),h())}))})),(0,r.Jd)((()=>{clearTimeout(n),void 0!==e&&(void 0!==e.disconnect?e.disconnect():i&&e.unobserve(i))})),l.ZT}{const e=o();let t;function s(){clearTimeout(n),void 0!==t&&(void 0!==t.removeEventListener&&t.removeEventListener("resize",a,l.rU.passive),t=void 0)}function c(){s(),i&&i.contentDocument&&(t=i.contentDocument.defaultView,t.addEventListener("resize",a,l.rU.passive),h())}return(0,r.bv)((()=>{(0,r.Y3)((()=>{i=d.proxy.$el,i&&c()}))})),(0,r.Jd)(s),()=>{if(!0===e.value)return(0,r.h)("object",{style:u.style,tabindex:-1,type:"text/html",data:u.url,"aria-hidden":"true",onLoad:c})}}}})},5869:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(3673),i=n(1959),s=n(2236),o=n(908);const a={true:"inset",item:"item-inset","item-thumbnail":"item-thumbnail-inset"},l={xs:2,sm:4,md:8,lg:16,xl:24},c=(0,o.L)({name:"QSeparator",props:{...s.S,spaced:[Boolean,String],inset:[Boolean,String],vertical:Boolean,color:String,size:String},setup(e){const t=(0,r.FN)(),n=(0,s.Z)(e,t.proxy.$q),o=(0,i.Fl)((()=>!0===e.vertical?"vertical":"horizontal")),c=(0,i.Fl)((()=>` q-separator--${o.value}`)),u=(0,i.Fl)((()=>!1!==e.inset?`${c.value}-${a[e.inset]}`:"")),h=(0,i.Fl)((()=>`q-separator${c.value}${u.value}`+(void 0!==e.color?` bg-${e.color}`:"")+(!0===n.value?" q-separator--dark":""))),d=(0,i.Fl)((()=>{const t={};if(void 0!==e.size&&(t[!0===e.vertical?"width":"height"]=e.size),!1!==e.spaced){const n=!0===e.spaced?`${l.md}px`:e.spaced in l?`${l[e.spaced]}px`:e.spaced,r=!0===e.vertical?["Left","Right"]:["Top","Bottom"];t[`margin${r[0]}`]=t[`margin${r[1]}`]=n}return t}));return()=>(0,r.h)("hr",{class:h.value,style:d.value,"aria-orientation":o.value})}})},2471:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(8880),s=n(908);const o=(0,s.L)({name:"QSlideTransition",props:{appear:Boolean,duration:{type:Number,default:300}},emits:["show","hide"],setup(e,{slots:t,emit:n}){let s,o,a,l,c,u,h=!1;function d(){s&&s(),s=null,h=!1,clearTimeout(a),clearTimeout(l),void 0!==o&&o.removeEventListener("transitionend",c),c=null}function f(t,n,r){t.style.overflowY="hidden",void 0!==n&&(t.style.height=`${n}px`),t.style.transition=`height ${e.duration}ms cubic-bezier(.25, .8, .50, 1)`,h=!0,s=r}function p(e,t){e.style.overflowY=null,e.style.height=null,e.style.transition=null,d(),t!==u&&n(t)}function g(t,n){let r=0;o=t,!0===h?(d(),r=t.offsetHeight===t.scrollHeight?0:void 0):u="hide",f(t,r,n),a=setTimeout((()=>{t.style.height=`${t.scrollHeight}px`,c=e=>{Object(e)===e&&e.target!==t||p(t,"show")},t.addEventListener("transitionend",c),l=setTimeout(c,1.1*e.duration)}),100)}function m(t,n){let r;o=t,!0===h?d():(u="show",r=t.scrollHeight),f(t,r,n),a=setTimeout((()=>{t.style.height=0,c=e=>{Object(e)===e&&e.target!==t||p(t,"hide")},t.addEventListener("transitionend",c),l=setTimeout(c,1.1*e.duration)}),100)}return(0,r.Jd)((()=>{!0===h&&d()})),()=>(0,r.h)(i.uT,{css:!1,appear:e.appear,onEnter:g,onLeave:m},t.default)}})},2025:(e,t,n)=>{"use strict";n.d(t,{Z:()=>o});var r=n(3673),i=n(908);const s=(0,r.h)("div",{class:"q-space"}),o=(0,i.L)({name:"QSpace",setup(){return()=>s}})},9754:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});var r=n(3673),i=n(1959),s=n(2417);const o={size:{type:[Number,String],default:"1em"},color:String};function a(e){return{cSize:(0,i.Fl)((()=>e.size in s.Ok?`${s.Ok[e.size]}px`:e.size)),classes:(0,i.Fl)((()=>"q-spinner"+(e.color?` text-${e.color}`:"")))}}var l=n(908);const c=(0,l.L)({name:"QSpinner",props:{...o,thickness:{type:Number,default:5}},setup(e){const{cSize:t,classes:n}=a(e);return()=>(0,r.h)("svg",{class:n.value+" q-spinner-mat",width:t.value,height:t.value,viewBox:"25 25 50 50"},[(0,r.h)("circle",{class:"path",cx:"50",cy:"50",r:"20",fill:"none",stroke:"currentColor","stroke-width":e.thickness,"stroke-miterlimit":"10"})])}})},2582:(e,t,n)=>{"use strict";n.d(t,{Z:()=>v});var r=n(1959),i=n(3673),s=n(4554),o=n(2236),a=n(2417);function l(e,t){const n=(0,r.iH)(null),s=(0,r.Fl)((()=>!0!==e.disable?null:(0,i.h)("span",{ref:n,class:"no-outline",tabindex:-1})));function o(e){const r=t.value;void 0!==e&&0===e.type.indexOf("key")?null!==r&&document.activeElement!==r&&!0===r.contains(document.activeElement)&&r.focus():null!==n.value&&(void 0===e||null!==r&&!0===r.contains(e.target))&&n.value.focus()}return{refocusTargetEl:s,refocusTarget:o}}var c=n(9550);const u={xs:30,sm:35,md:40,lg:50,xl:60};var h=n(4716),d=n(7657);const f={...o.S,...a.LU,...c.Fz,modelValue:{required:!0,default:null},val:{},trueValue:{default:!0},falseValue:{default:!1},indeterminateValue:{default:null},toggleOrder:{type:String,validator:e=>"tf"===e||"ft"===e},toggleIndeterminate:Boolean,label:String,leftLabel:Boolean,color:String,keepColor:Boolean,dense:Boolean,disable:Boolean,tabindex:[String,Number]},p=["update:modelValue"];function g(e,t){const{props:n,slots:s,emit:f,proxy:p}=(0,i.FN)(),{$q:g}=p,m=(0,o.Z)(n,g),v=(0,r.iH)(null),{refocusTargetEl:y,refocusTarget:w}=l(n,v),b=(0,a.ZP)(n,u),_=(0,r.Fl)((()=>void 0!==n.val&&Array.isArray(n.modelValue))),T=(0,r.Fl)((()=>!0===_.value?n.modelValue.indexOf(n.val):-1)),E=(0,r.Fl)((()=>!0===_.value?T.value>-1:n.modelValue===n.trueValue)),k=(0,r.Fl)((()=>!0===_.value?-1===T.value:n.modelValue===n.falseValue)),I=(0,r.Fl)((()=>!1===E.value&&!1===k.value)),S=(0,r.Fl)((()=>!0===n.disable?-1:n.tabindex||0)),C=(0,r.Fl)((()=>`q-${e} cursor-pointer no-outline row inline no-wrap items-center`+(!0===n.disable?" disabled":"")+(!0===m.value?` q-${e}--dark`:"")+(!0===n.dense?` q-${e}--dense`:"")+(!0===n.leftLabel?" reverse":""))),A=(0,r.Fl)((()=>{const t=!0===E.value?"truthy":!0===k.value?"falsy":"indet",r=void 0===n.color||!0!==n.keepColor&&("toggle"===e?!0!==E.value:!0===k.value)?"":` text-${n.color}`;return`q-${e}__inner relative-position non-selectable q-${e}__inner--${t}${r}`})),x=(0,r.Fl)((()=>{const e={type:"checkbox"};return void 0!==n.name&&Object.assign(e,{checked:E.value,name:n.name,value:!0===_.value?n.val:n.trueValue}),e})),R=(0,c.eX)(x),O=(0,r.Fl)((()=>{const e={tabindex:S.value,role:"checkbox","aria-label":n.label,"aria-checked":!0===I.value?"mixed":!0===E.value?"true":"false"};return!0===n.disable&&(e["aria-disabled"]="true"),e}));function N(e){void 0!==e&&((0,h.NS)(e),w(e)),!0!==n.disable&&f("update:modelValue",L(),e)}function L(){if(!0===_.value){if(!0===E.value){const e=n.modelValue.slice();return e.splice(T.value,1),e}return n.modelValue.concat([n.val])}if(!0===E.value){if("ft"!==n.toggleOrder||!1===n.toggleIndeterminate)return n.falseValue}else{if(!0!==k.value)return"ft"!==n.toggleOrder?n.trueValue:n.falseValue;if("ft"===n.toggleOrder||!1===n.toggleIndeterminate)return n.trueValue}return n.indeterminateValue}function P(e){13!==e.keyCode&&32!==e.keyCode||(0,h.NS)(e)}function D(e){13!==e.keyCode&&32!==e.keyCode||N(e)}const F=t(E,I);return Object.assign(p,{toggle:N}),()=>{const t=F();!0!==n.disable&&R(t,"unshift",` q-${e}__native absolute q-ma-none q-pa-none`);const r=[(0,i.h)("div",{class:A.value,style:b.value},t)];null!==y.value&&r.push(y.value);const o=void 0!==n.label?(0,d.vs)(s.default,[n.label]):(0,d.KR)(s.default);return void 0!==o&&r.push((0,i.h)("div",{class:`q-${e}__label q-anchor--skip`},o)),(0,i.h)("div",{ref:v,class:C.value,...O.value,onClick:N,onKeydown:P,onKeyup:D},r)}}var m=n(908);const v=(0,m.L)({name:"QToggle",props:{...f,icon:String,checkedIcon:String,uncheckedIcon:String,indeterminateIcon:String,iconColor:String},emits:p,setup(e){function t(t,n){const o=(0,r.Fl)((()=>(!0===t.value?e.checkedIcon:!0===n.value?e.indeterminateIcon:e.uncheckedIcon)||e.icon)),a=(0,r.Fl)((()=>{if(!0===t.value)return e.iconColor}));return()=>[(0,i.h)("div",{class:"q-toggle__track"}),(0,i.h)("div",{class:"q-toggle__thumb absolute flex flex-center no-wrap"},void 0!==o.value?[(0,i.h)(s.Z,{name:o.value,color:a.value})]:void 0)]}return g("toggle",t)}})},9570:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(1959),i=n(3673),s=n(908),o=n(7657);const a=(0,s.L)({name:"QToolbar",props:{inset:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-toolbar row no-wrap items-center"+(!0===e.inset?" q-toolbar--inset":"")));return()=>(0,i.h)("div",{class:n.value},(0,o.KR)(t.default))}})},3747:(e,t,n)=>{"use strict";n.d(t,{Z:()=>a});var r=n(1959),i=n(3673),s=n(908),o=n(7657);const a=(0,s.L)({name:"QToolbarTitle",props:{shrink:Boolean},setup(e,{slots:t}){const n=(0,r.Fl)((()=>"q-toolbar__title ellipsis"+(!0===e.shrink?" col-shrink":"")));return()=>(0,i.h)("div",{class:n.value},(0,o.KR)(t.default))}})},9992:(e,t,n)=>{"use strict";n.d(t,{jO:()=>o,ZP:()=>a});var r=n(1959);const i={left:"start",center:"center",right:"end",between:"between",around:"around",evenly:"evenly",stretch:"stretch"},s=Object.keys(i),o={align:{type:String,validator:e=>s.includes(e)}};function a(e){return(0,r.Fl)((()=>{const t=void 0===e.align?!0===e.vertical?"stretch":"left":e.align;return`${!0===e.vertical?"items":"justify"}-${i[t]}`}))}},2236:(e,t,n)=>{"use strict";n.d(t,{S:()=>i,Z:()=>s});var r=n(1959);const i={dark:{type:Boolean,default:null}};function s(e,t){return(0,r.Fl)((()=>null===e.dark?t.dark.isActive:e.dark))}},9550:(e,t,n)=>{"use strict";n.d(t,{Fz:()=>s,eX:()=>o,Do:()=>a});var r=n(3673),i=n(1959);const s={name:String};function o(e={},t={}){return(n,i,s)=>{n[i]((0,r.h)("input",{class:"hidden"+(s||""),...e.value,...t.value}))}}function a(e){return(0,i.Fl)((()=>e.name||e.for))}},7277:(e,t,n)=>{"use strict";n.d(t,{$:()=>f,Z:()=>p});n(5363);var r=n(3673),i=n(1959),s=n(4716),o=n(7445);function a(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}function l(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function c(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!1===Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function u(e,t){return!0===Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function h(e,t){return!0===Array.isArray(e)?u(e,t):!0===Array.isArray(t)?u(t,e):e===t}function d(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!1===h(e[n],t[n]))return!1;return!0}const f={to:[String,Object],replace:Boolean,exact:Boolean,activeClass:{type:String,default:"q-router-link--active"},exactActiveClass:{type:String,default:"q-router-link--exact-active"},disable:Boolean};function p(){const e=(0,r.FN)(),{props:t,attrs:n,proxy:u}=e,h=(0,o.Rb)(e),f=(0,i.Fl)((()=>!0===h&&!0!==t.disable&&void 0!==t.to&&null!==t.to&&""!==t.to)),p=(0,i.Fl)((()=>{if(!0===f.value)try{return u.$router.resolve(t.to)}catch(e){}return null})),g=(0,i.Fl)((()=>null!==p.value)),m=(0,i.Fl)((()=>!0===g.value?"a":t.tag||"div")),v=(0,i.Fl)((()=>{if(!1===g.value)return null;const{matched:e}=p.value,{length:t}=e,n=e[t-1];if(void 0===n)return-1;const r=u.$route.matched;if(0===r.length)return-1;const i=r.findIndex(l.bind(null,n));if(i>-1)return i;const s=a(e[t-2]);return t>1&&a(n)===s&&r[r.length-1].path!==s?r.findIndex(l.bind(null,e[t-2])):i})),y=(0,i.Fl)((()=>!0===g.value&&v.value>-1&&c(u.$route.params,p.value.params))),w=(0,i.Fl)((()=>!0===y.value&&v.value===u.$route.matched.length-1&&d(u.$route.params,p.value.params))),b=(0,i.Fl)((()=>!0===g.value?!0===w.value?` ${t.exactActiveClass} ${t.activeClass}`:!0===t.exact?"":!0===y.value?` ${t.activeClass}`:"":"")),_=(0,i.Fl)((()=>!0===g.value?{href:p.value.href,target:n.target,role:"link"}:{}));function T(e){return!(!0===t.disable||e.metaKey||e.altKey||e.ctrlKey||e.shiftKey||!0!==e.__qNavigate&&!0===e.defaultPrevented||void 0!==e.button&&0!==e.button||"_blank"===n.target)&&((0,s.X$)(e),u.$router[!0===t.replace?"replace":"push"](t.to).catch((()=>{})))}return{hasLink:g,linkTag:m,linkRoute:p,linkIsActive:y,linkIsExactActive:w,linkClass:b,linkProps:_,navigateToLink:T}}},2417:(e,t,n)=>{"use strict";n.d(t,{Ok:()=>i,LU:()=>s,ZP:()=>o});var r=n(1959);const i={xs:18,sm:24,md:32,lg:38,xl:46},s={size:String};function o(e,t=i){return(0,r.Fl)((()=>void 0!==e.size?{fontSize:e.size in t?`${t[e.size]}px`:e.size}:null))}},6489:(e,t,n)=>{"use strict";n.d(t,{Z:()=>u});var r=n(908),i=n(2012),s=n(4716),o=n(1436);function a(e,t=250){let n,r=!1;return function(){return!1===r&&(r=!0,setTimeout((()=>{r=!1}),t),n=e.apply(this,arguments)),n}}function l(e,t,n,r){!0===n.modifiers.stop&&(0,s.sT)(e);const o=n.modifiers.color;let a=n.modifiers.center;a=!0===a||!0===r;const l=document.createElement("span"),c=document.createElement("span"),u=(0,s.FK)(e),{left:h,top:d,width:f,height:p}=t.getBoundingClientRect(),g=Math.sqrt(f*f+p*p),m=g/2,v=(f-g)/2+"px",y=a?v:u.left-h-m+"px",w=(p-g)/2+"px",b=a?w:u.top-d-m+"px";c.className="q-ripple__inner",(0,i.iv)(c,{height:`${g}px`,width:`${g}px`,transform:`translate3d(${y},${b},0) scale3d(.2,.2,1)`,opacity:0}),l.className="q-ripple"+(o?" text-"+o:""),l.setAttribute("dir","ltr"),l.appendChild(c),t.appendChild(l);const _=()=>{l.remove(),clearTimeout(T)};n.abort.push(_);let T=setTimeout((()=>{c.classList.add("q-ripple__inner--enter"),c.style.transform=`translate3d(${v},${w},0) scale3d(1,1,1)`,c.style.opacity=.2,T=setTimeout((()=>{c.classList.remove("q-ripple__inner--enter"),c.classList.add("q-ripple__inner--leave"),c.style.opacity=0,T=setTimeout((()=>{l.remove(),n.abort.splice(n.abort.indexOf(_),1)}),275)}),250)}),50)}function c(e,{modifiers:t,value:n,arg:r,instance:i}){const s=Object.assign({},i.$q.config.ripple,t,n);e.modifiers={early:!0===s.early,stop:!0===s.stop,center:!0===s.center,color:s.color||r,keyCodes:[].concat(s.keyCodes||13)}}const u=(0,r.f)({name:"ripple",beforeMount(e,t){const n={enabled:!1!==t.value,modifiers:{},abort:[],start(t){!0===n.enabled&&!0!==t.qSkipRipple&&(!0===n.modifiers.early?!0===["mousedown","touchstart"].includes(t.type):"click"===t.type)&&l(t,e,n,!0===t.qKeyEvent)},keystart:a((t=>{!0===n.enabled&&!0!==t.qSkipRipple&&!0===(0,o.So)(t,n.modifiers.keyCodes)&&t.type==="key"+(!0===n.modifiers.early?"down":"up")&&l(t,e,n,!0)}),300)};c(n,t),e.__qripple=n,(0,s.M0)(n,"main",[[e,"mousedown","start","passive"],[e,"touchstart","start","passive"],[e,"click","start","passive"],[e,"keydown","keystart","passive"],[e,"keyup","keystart","passive"]])},updated(e,t){if(t.oldValue!==t.value){const n=e.__qripple;n.enabled=!1!==t.value,!0===n.enabled&&Object(t.value)===t.value&&c(n,t)}},beforeUnmount(e){const t=e.__qripple;t.abort.forEach((e=>{e()})),(0,s.ul)(t,"main"),delete e._qripple}})},6583:(e,t,n)=>{"use strict";n.d(t,{Z:()=>c});n(71);var r=n(4688),i=n(4716);const s=()=>!0;function o(e){return"string"===typeof e&&""!==e&&"/"!==e&&"#/"!==e}function a(e){return!0===e.startsWith("#")&&(e=e.substr(1)),!1===e.startsWith("/")&&(e="/"+e),!0===e.endsWith("/")&&(e=e.substr(0,e.length-1)),"#"+e}function l(e){if(!1===e.backButtonExit)return()=>!1;if("*"===e.backButtonExit)return s;const t=["#/"];return!0===Array.isArray(e.backButtonExit)&&t.push(...e.backButtonExit.filter(o).map(a)),()=>t.includes(window.location.hash)}const c={__history:[],add:i.ZT,remove:i.ZT,install({$q:e}){if(!0===this.__installed)return;const{cordova:t,capacitor:n}=r.Lp.is;if(!0!==t&&!0!==n)return;const i=e.config[!0===t?"cordova":"capacitor"];if(void 0!==i&&!1===i.backButton)return;if(!0===n&&(void 0===window.Capacitor||void 0===window.Capacitor.Plugins.App))return;this.add=e=>{void 0===e.condition&&(e.condition=s),this.__history.push(e)},this.remove=e=>{const t=this.__history.indexOf(e);t>=0&&this.__history.splice(t,1)};const o=l(Object.assign({backButtonExit:!0},i)),a=()=>{if(this.__history.length){const e=this.__history[this.__history.length-1];!0===e.condition()&&(this.__history.pop(),e.handler())}else!0===o()?navigator.app.exitApp():window.history.back()};!0===t?document.addEventListener("deviceready",(()=>{document.addEventListener("backbutton",a,!1)})):window.Capacitor.Plugins.App.addListener("backButton",a)}}},4688:(e,t,n)=>{"use strict";n.d(t,{uX:()=>i,aG:()=>s,Lp:()=>p,ZP:()=>m});var r=n(1959);const i=(0,r.iH)(!1);let s,o=!1;function a(e,t){const n=/(edge|edga|edgios)\/([\w.]+)/.exec(e)||/(opr)[\/]([\w.]+)/.exec(e)||/(vivaldi)[\/]([\w.]+)/.exec(e)||/(chrome|crios)[\/]([\w.]+)/.exec(e)||/(iemobile)[\/]([\w.]+)/.exec(e)||/(version)(applewebkit)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+).*(version)[\/]([\w.]+).*(safari)[\/]([\w.]+)/.exec(e)||/(firefox|fxios)[\/]([\w.]+)/.exec(e)||/(webkit)[\/]([\w.]+)/.exec(e)||/(opera)(?:.*version|)[\/]([\w.]+)/.exec(e)||/(msie) ([\w.]+)/.exec(e)||e.indexOf("trident")>=0&&/(rv)(?::| )([\w.]+)/.exec(e)||e.indexOf("compatible")<0&&/(mozilla)(?:.*? rv:([\w.]+)|)/.exec(e)||[];return{browser:n[5]||n[3]||n[1]||"",version:n[2]||n[4]||"0",versionNumber:n[4]||n[2]||"0",platform:t[0]||""}}function l(e){return/(ipad)/.exec(e)||/(ipod)/.exec(e)||/(windows phone)/.exec(e)||/(iphone)/.exec(e)||/(kindle)/.exec(e)||/(silk)/.exec(e)||/(android)/.exec(e)||/(win)/.exec(e)||/(mac)/.exec(e)||/(linux)/.exec(e)||/(cros)/.exec(e)||/(playbook)/.exec(e)||/(bb)/.exec(e)||/(blackberry)/.exec(e)||[]}const c="ontouchstart"in window||window.navigator.maxTouchPoints>0;function u(e){s={is:{...e}},delete e.mac,delete e.desktop;const t=Math.min(window.innerHeight,window.innerWidth)>414?"ipad":"iphone";Object.assign(e,{mobile:!0,ios:!0,platform:t,[t]:!0})}function h(e){const t=e.toLowerCase(),n=l(t),r=a(t,n),i={};r.browser&&(i[r.browser]=!0,i.version=r.version,i.versionNumber=parseInt(r.versionNumber,10)),r.platform&&(i[r.platform]=!0);const s=i.android||i.ios||i.bb||i.blackberry||i.ipad||i.iphone||i.ipod||i.kindle||i.playbook||i.silk||i["windows phone"];return!0===s||t.indexOf("mobile")>-1?(i.mobile=!0,i.edga||i.edgios?(i.edge=!0,r.browser="edge"):i.crios?(i.chrome=!0,r.browser="chrome"):i.fxios&&(i.firefox=!0,r.browser="firefox")):i.desktop=!0,(i.ipod||i.ipad||i.iphone)&&(i.ios=!0),i["windows phone"]&&(i.winphone=!0,delete i["windows phone"]),(i.chrome||i.opr||i.safari||i.vivaldi||!0===i.mobile&&!0!==i.ios&&!0!==s)&&(i.webkit=!0),(i.safari&&i.blackberry||i.bb)&&(r.browser="blackberry",i.blackberry=!0),i.safari&&i.playbook&&(r.browser="playbook",i.playbook=!0),i.opr&&(r.browser="opera",i.opera=!0),i.safari&&i.android&&(r.browser="android",i.android=!0),i.safari&&i.kindle&&(r.browser="kindle",i.kindle=!0),i.safari&&i.silk&&(r.browser="silk",i.silk=!0),i.vivaldi&&(r.browser="vivaldi",i.vivaldi=!0),i.name=r.browser,i.platform=r.platform,t.indexOf("electron")>-1?i.electron=!0:document.location.href.indexOf("-extension://")>-1?i.bex=!0:(void 0!==window.Capacitor?(i.capacitor=!0,i.nativeMobile=!0,i.nativeMobileWrapper="capacitor"):void 0===window._cordovaNative&&void 0===window.cordova||(i.cordova=!0,i.nativeMobile=!0,i.nativeMobileWrapper="cordova"),!0===c&&!0===i.mac&&(!0===i.desktop&&!0===i.safari||!0===i.nativeMobile&&!0!==i.android&&!0!==i.ios&&!0!==i.ipad)&&u(i)),i}const d=navigator.userAgent||navigator.vendor||window.opera,f={has:{touch:!1,webStorage:!1},within:{iframe:!1}},p={userAgent:d,is:h(d),has:{touch:c},within:{iframe:window.self!==window.top}},g={install(e){const{$q:t}=e;!0===i.value?(e.onSSRHydrated.push((()=>{i.value=!1,Object.assign(t.platform,p),s=void 0})),t.platform=(0,r.qj)(this)):t.platform=this}};{let e;Object.defineProperty(p.has,"webStorage",{get:()=>{if(void 0!==e)return e;try{if(window.localStorage)return e=!0,!0}catch(t){}return e=!1,!1}}),o=!0===p.is.ios&&-1===window.navigator.vendor.toLowerCase().indexOf("apple"),!0===i.value?Object.assign(g,p,s,f):Object.assign(g,p)}const m=g},2012:(e,t,n)=>{"use strict";n.d(t,{iv:()=>i,sb:()=>s});var r=n(1959);function i(e,t){const n=e.style;Object.keys(t).forEach((e=>{n[e]=t[e]}))}function s(e){if(void 0===e||null===e)return;if("string"===typeof e)try{return document.querySelector(e)||void 0}catch(n){return}const t=!0===(0,r.dq)(e)?e.value:e;return t?t.$el||t:void 0}},4716:(e,t,n)=>{"use strict";n.d(t,{rU:()=>r,ZT:()=>i,du:()=>s,FK:()=>o,AZ:()=>a,sT:()=>l,X$:()=>c,NS:()=>u,Jf:()=>h,M0:()=>d,ul:()=>f});n(71);const r={hasPassive:!1,passiveCapture:!0,notPassiveCapture:!0};try{const e=Object.defineProperty({},"passive",{get(){Object.assign(r,{hasPassive:!0,passive:{passive:!0},notPassive:{passive:!1},passiveCapture:{passive:!0,capture:!0},notPassiveCapture:{passive:!1,capture:!0}})}});window.addEventListener("qtest",null,e),window.removeEventListener("qtest",null,e)}catch(p){}function i(){}function s(e){return 0===e.button}function o(e){return e.touches&&e.touches[0]?e=e.touches[0]:e.changedTouches&&e.changedTouches[0]?e=e.changedTouches[0]:e.targetTouches&&e.targetTouches[0]&&(e=e.targetTouches[0]),{top:e.clientY,left:e.clientX}}function a(e){if(e.path)return e.path;if(e.composedPath)return e.composedPath();const t=[];let n=e.target;while(n){if(t.push(n),"HTML"===n.tagName)return t.push(document),t.push(window),t;n=n.parentElement}}function l(e){e.stopPropagation()}function c(e){!1!==e.cancelable&&e.preventDefault()}function u(e){!1!==e.cancelable&&e.preventDefault(),e.stopPropagation()}function h(e,t){if(void 0===e||!0===t&&!0===e.__dragPrevented)return;const n=!0===t?e=>{e.__dragPrevented=!0,e.addEventListener("dragstart",c,r.notPassiveCapture)}:e=>{delete e.__dragPrevented,e.removeEventListener("dragstart",c,r.notPassiveCapture)};e.querySelectorAll("a, img").forEach(n)}function d(e,t,n){const i=`__q_${t}_evt`;e[i]=void 0!==e[i]?e[i].concat(n):n,n.forEach((t=>{t[0].addEventListener(t[1],e[t[2]],r[t[3]])}))}function f(e,t){const n=`__q_${t}_evt`;void 0!==e[n]&&(e[n].forEach((t=>{t[0].removeEventListener(t[1],e[t[2]],r[t[3]])})),e[n]=void 0)}},908:(e,t,n)=>{"use strict";n.d(t,{L:()=>s,f:()=>o});var r=n(1959),i=n(3673);const s=e=>(0,r.Xl)((0,i.aZ)(e)),o=e=>(0,r.Xl)(e)},1436:(e,t,n)=>{"use strict";n.d(t,{ZK:()=>i,Wm:()=>s,So:()=>o});let r=!1;function i(e){r=!0===e.isComposing}function s(e){return!0===r||e!==Object(e)||!0===e.isComposing||!0===e.qKeyEvent}function o(e,t){return!0!==s(e)&&[].concat(t).includes(e.keyCode)}},7657:(e,t,n)=>{"use strict";n.d(t,{KR:()=>i,Bl:()=>s,vs:()=>o,pf:()=>a,Jl:()=>l});var r=n(3673);function i(e,t){return void 0!==e&&e()||t}function s(e,t){if(void 0!==e){const t=e();if(void 0!==t&&null!==t)return t.slice()}return t}function o(e,t){return void 0!==e?t.concat(e()):t}function a(e,t){return void 0===e?t:void 0!==t?t.concat(e()):e()}function l(e,t,n,i,s,o){t.key=i+s;const a=(0,r.h)(e,t,n);return!0===s?(0,r.wy)(a,o()):a}},2547:(e,t,n)=>{"use strict";n.d(t,{Ng:()=>r,YE:()=>i,Mw:()=>s,vh:()=>o});const r="_q_",i="_q_l_",s="_q_pc_",o="_q_fo_"},7445:(e,t,n)=>{"use strict";n.d(t,{Rb:()=>r});n(71);function r(e){return void 0!==e.appContext.config.globalProperties.$router}},8400:(e,t,n)=>{"use strict";n.d(t,{b0:()=>s,u3:()=>o,OI:()=>a,np:()=>c,QA:()=>u});var r=n(2012);const i=[null,document,document.body,document.scrollingElement,document.documentElement];function s(e,t){let n=(0,r.sb)(t);if(void 0===n){if(void 0===e||null===e)return window;n=e.closest(".scroll,.scroll-y,.overflow-auto")}return i.includes(n)?window:n}function o(e){return e===window?window.pageYOffset||window.scrollY||document.body.scrollTop||0:e.scrollTop}function a(e){return e===window?window.pageXOffset||window.scrollX||document.body.scrollLeft||0:e.scrollLeft}let l;function c(){if(void 0!==l)return l;const e=document.createElement("p"),t=document.createElement("div");(0,r.iv)(e,{width:"100%",height:"200px"}),(0,r.iv)(t,{position:"absolute",top:"0px",left:"0px",visibility:"hidden",width:"200px",height:"150px",overflow:"hidden"}),t.appendChild(e),document.body.appendChild(t);const n=e.offsetWidth;t.style.overflow="scroll";let i=e.offsetWidth;return n===i&&(i=t.clientWidth),t.remove(),l=n-i,l}function u(e,t=!0){return!(!e||e.nodeType!==Node.ELEMENT_NODE)&&(t?e.scrollHeight>e.clientHeight&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-y"])):e.scrollWidth>e.clientWidth&&(e.classList.contains("scroll")||e.classList.contains("overflow-auto")||["auto","scroll"].includes(window.getComputedStyle(e)["overflow-x"])))}},2277:(e,t,n)=>{"use strict";n.d(t,{Z:()=>F});var r=n(4688),i=n(1959);const s=(e,t)=>{const n={},r=(0,i.qj)(e);return Object.keys(e).forEach((e=>{n[e]={get:()=>r[e],set:t=>{r[e]=t}}})),Object.defineProperties(t,n),t};var o=n(4716);function a(e,t=250,n){let r;function i(){const i=arguments,s=()=>{r=void 0,!0!==n&&e.apply(this,i)};clearTimeout(r),!0===n&&void 0===r&&e.apply(this,i),r=setTimeout(s,t)}return i.cancel=()=>{clearTimeout(r)},i}const l=["sm","md","lg","xl"],{passive:c}=o.rU,u=s({width:0,height:0,name:"xs",sizes:{sm:600,md:1024,lg:1440,xl:1920},lt:{sm:!0,md:!0,lg:!0,xl:!0},gt:{xs:!1,sm:!1,md:!1,lg:!1},xs:!0,sm:!1,md:!1,lg:!1,xl:!1},{setSizes:o.ZT,setDebounce:o.ZT,install({$q:e,onSSRHydrated:t}){if(e.screen=this,!0===this.__installed)return void(void 0!==e.config.screen&&(!1===e.config.screen.bodyClasses?document.body.classList.remove(`screen--${this.name}`):this.__update(!0)));const n=void 0!==e.config.screen&&!0===e.config.screen.bodyClasses;this.__update=e=>{const t=window.innerWidth,r=window.innerHeight;if(r!==this.height&&(this.height=r),t!==this.width)this.width=t;else if(!0!==e)return;let i=this.sizes;this.gt.xs=t>=i.sm,this.gt.sm=t>=i.md,this.gt.md=t>=i.lg,this.gt.lg=t>=i.xl,this.lt.sm=t<i.sm,this.lt.md=t<i.md,this.lt.lg=t<i.lg,this.lt.xl=t<i.xl,this.xs=this.lt.sm,this.sm=!0===this.gt.xs&&!0===this.lt.md,this.md=!0===this.gt.sm&&!0===this.lt.lg,this.lg=!0===this.gt.md&&!0===this.lt.xl,this.xl=this.gt.lg,i=(!0===this.xs?"xs":!0===this.sm&&"sm")||!0===this.md&&"md"||!0===this.lg&&"lg"||"xl",i!==this.name&&(!0===n&&(document.body.classList.remove(`screen--${this.name}`),document.body.classList.add(`screen--${i}`)),this.name=i)};let i,s={},o=16;this.setSizes=e=>{l.forEach((t=>{void 0!==e[t]&&(s[t]=e[t])}))},this.setDebounce=e=>{o=e};const u=()=>{const e=getComputedStyle(document.body),t=void 0!==window.visualViewport?window.visualViewport:window;e.getPropertyValue("--q-size-sm")&&l.forEach((t=>{this.sizes[t]=parseInt(e.getPropertyValue(`--q-size-${t}`),10)})),this.setSizes=e=>{l.forEach((t=>{e[t]&&(this.sizes[t]=e[t])})),this.__update(!0)},this.setDebounce=e=>{void 0!==i&&t.removeEventListener("resize",i,c),i=e>0?a(this.__update,e):this.__update,t.addEventListener("resize",i,c)},this.setDebounce(o),Object.keys(s).length>0?(this.setSizes(s),s=void 0):this.__update(),!0===n&&"xs"===this.name&&document.body.classList.add("screen--xs")};!0===r.uX.value?t.push(u):u()}});n(5363);const h=s({isActive:!1,mode:!1},{__media:void 0,set(e){h.mode=e,"auto"===e?(void 0===h.__media&&(h.__media=window.matchMedia("(prefers-color-scheme: dark)"),h.__updateMedia=()=>{h.set("auto")},h.__media.addListener(h.__updateMedia)),e=h.__media.matches):void 0!==h.__media&&(h.__media.removeListener(h.__updateMedia),h.__media=void 0),h.isActive=!0===e,document.body.classList.remove("body--"+(!0===e?"light":"dark")),document.body.classList.add("body--"+(!0===e?"dark":"light"))},toggle(){h.set(!1===h.isActive)},install({$q:e,onSSRHydrated:t,ssrContext:n}){const{dark:i}=e.config;if(e.dark=this,!0===this.__installed&&void 0===i)return;this.isActive=!0===i;const s=void 0!==i&&i;if(!0===r.uX.value){const e=e=>{this.__fromSSR=e},n=this.set;this.set=e,e(s),t.push((()=>{this.set=n,this.set(this.__fromSSR)}))}else this.set(s)}}),d=h;var f=n(6583);const p={isoName:"en-US",nativeName:"English (US)",label:{clear:"Clear",ok:"OK",cancel:"Cancel",close:"Close",set:"Set",select:"Select",reset:"Reset",remove:"Remove",update:"Update",create:"Create",search:"Search",filter:"Filter",refresh:"Refresh"},date:{days:"Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday".split("_"),daysShort:"Sun_Mon_Tue_Wed_Thu_Fri_Sat".split("_"),months:"January_February_March_April_May_June_July_August_September_October_November_December".split("_"),monthsShort:"Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec".split("_"),firstDayOfWeek:0,format24h:!1,pluralDay:"days"},table:{noData:"No data available",noResults:"No matching records found",loading:"Loading...",selectedRecords:e=>1===e?"1 record selected.":(0===e?"No":e)+" records selected.",recordsPerPage:"Records per page:",allRows:"All",pagination:(e,t,n)=>e+"-"+t+" of "+n,columns:"Columns"},editor:{url:"URL",bold:"Bold",italic:"Italic",strikethrough:"Strikethrough",underline:"Underline",unorderedList:"Unordered List",orderedList:"Ordered List",subscript:"Subscript",superscript:"Superscript",hyperlink:"Hyperlink",toggleFullscreen:"Toggle Fullscreen",quote:"Quote",left:"Left align",center:"Center align",right:"Right align",justify:"Justify align",print:"Print",outdent:"Decrease indentation",indent:"Increase indentation",removeFormat:"Remove formatting",formatting:"Formatting",fontSize:"Font Size",align:"Align",hr:"Insert Horizontal Rule",undo:"Undo",redo:"Redo",heading1:"Heading 1",heading2:"Heading 2",heading3:"Heading 3",heading4:"Heading 4",heading5:"Heading 5",heading6:"Heading 6",paragraph:"Paragraph",code:"Code",size1:"Very small",size2:"A bit small",size3:"Normal",size4:"Medium-large",size5:"Big",size6:"Very big",size7:"Maximum",defaultFont:"Default Font",viewSource:"View Source"},tree:{noNodes:"No nodes available",noResults:"No matching nodes found"}};function g(){const e=!0===Array.isArray(navigator.languages)&&navigator.languages.length>0?navigator.languages[0]:navigator.language;if("string"===typeof e)return e.split(/[-_]/).map(((e,t)=>0===t?e.toLowerCase():t>1||e.length<4?e.toUpperCase():e[0].toUpperCase()+e.slice(1).toLowerCase())).join("-")}const m=s({__langPack:{}},{getLocale:g,set(e=p,t){const n={...e,rtl:!0===e.rtl,getLocale:g};{const e=document.documentElement;e.setAttribute("dir",!0===n.rtl?"rtl":"ltr"),e.setAttribute("lang",n.isoName),n.set=m.set,Object.assign(m.__langPack,n),m.props=n,m.isoName=n.isoName,m.nativeName=n.nativeName}},install({$q:e,lang:t,ssrContext:n}){e.lang=m.__langPack,!0===this.__installed?void 0!==t&&this.set(t):this.set(t||p)}}),v=m;function y(e,t,n=document.body){if("string"!==typeof e)throw new TypeError("Expected a string as propName");if("string"!==typeof t)throw new TypeError("Expected a string as value");if(!(n instanceof Element))throw new TypeError("Expected a DOM element");n.style.setProperty(`--q-${e}`,t)}var w=n(1436);function b(e){return!0===e.ios?"ios":!0===e.android?"android":void 0}function _({is:e,has:t,within:n},r){const i=[!0===e.desktop?"desktop":"mobile",(!1===t.touch?"no-":"")+"touch"];if(!0===e.mobile){const t=b(e);void 0!==t&&i.push("platform-"+t)}if(!0===e.nativeMobile){const t=e.nativeMobileWrapper;i.push(t),i.push("native-mobile"),!0!==e.ios||void 0!==r[t]&&!1===r[t].iosStatusBarPadding||i.push("q-ios-padding")}else!0===e.electron?i.push("electron"):!0===e.bex&&i.push("bex");return!0===n.iframe&&i.push("within-iframe"),i}function T(){const e=document.body.className;let t=e;void 0!==r.aG&&(t=t.replace("desktop","platform-ios mobile")),!0===r.Lp.has.touch&&(t=t.replace("no-touch","touch")),!0===r.Lp.within.iframe&&(t+=" within-iframe"),e!==t&&(document.body.className=t)}function E(e){for(const t in e)y(t,e[t])}const k={install(e){if(!0!==this.__installed){if(!0===r.uX.value)T();else{const{$q:t}=e;void 0!==t.config.brand&&E(t.config.brand);const n=_(r.Lp,t.config);document.body.classList.add.apply(document.body.classList,n)}!0===r.Lp.is.ios&&document.body.addEventListener("touchstart",o.ZT),window.addEventListener("keydown",w.ZK,!0)}}},I={name:"material-icons",type:{positive:"check_circle",negative:"warning",info:"info",warning:"priority_high"},arrow:{up:"arrow_upward",right:"arrow_forward",down:"arrow_downward",left:"arrow_back",dropdown:"arrow_drop_down"},chevron:{left:"chevron_left",right:"chevron_right"},colorPicker:{spectrum:"gradient",tune:"tune",palette:"style"},pullToRefresh:{icon:"refresh"},carousel:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down",navigationIcon:"lens"},chip:{remove:"cancel",selected:"check"},datetime:{arrowLeft:"chevron_left",arrowRight:"chevron_right",now:"access_time",today:"today"},editor:{bold:"format_bold",italic:"format_italic",strikethrough:"strikethrough_s",underline:"format_underlined",unorderedList:"format_list_bulleted",orderedList:"format_list_numbered",subscript:"vertical_align_bottom",superscript:"vertical_align_top",hyperlink:"link",toggleFullscreen:"fullscreen",quote:"format_quote",left:"format_align_left",center:"format_align_center",right:"format_align_right",justify:"format_align_justify",print:"print",outdent:"format_indent_decrease",indent:"format_indent_increase",removeFormat:"format_clear",formatting:"text_format",fontSize:"format_size",align:"format_align_left",hr:"remove",undo:"undo",redo:"redo",heading:"format_size",code:"code",size:"format_size",font:"font_download",viewSource:"code"},expansionItem:{icon:"keyboard_arrow_down",denseIcon:"arrow_drop_down"},fab:{icon:"add",activeIcon:"close"},field:{clear:"cancel",error:"error"},pagination:{first:"first_page",prev:"keyboard_arrow_left",next:"keyboard_arrow_right",last:"last_page"},rating:{icon:"grade"},stepper:{done:"check",active:"edit",error:"warning"},tabs:{left:"chevron_left",right:"chevron_right",up:"keyboard_arrow_up",down:"keyboard_arrow_down"},table:{arrowUp:"arrow_upward",warning:"warning",firstPage:"first_page",prevPage:"chevron_left",nextPage:"chevron_right",lastPage:"last_page"},tree:{icon:"play_arrow"},uploader:{done:"done",clear:"clear",add:"add_box",upload:"cloud_upload",removeQueue:"clear_all",removeUploaded:"done_all"}},S=s({iconMapFn:null,__icons:{}},{set(e,t){const n={...e,rtl:!0===e.rtl};n.set=S.set,Object.assign(S.__icons,n)},install({$q:e,iconSet:t,ssrContext:n}){void 0!==e.config.iconMapFn&&(this.iconMapFn=e.config.iconMapFn),e.iconSet=this.__icons,Object.defineProperty(e,"iconMapFn",{get:()=>this.iconMapFn,set:e=>{this.iconMapFn=e}}),!0===this.__installed?void 0!==t&&this.set(t):this.set(t||I)}}),C=S;var A=n(2547);const x={};let R=!1;function O(){R=!0}const N=[r.ZP,k,d,u,f.Z,v,C];function L(e,t){t.forEach((t=>{t.install(e),t.__installed=!0}))}function P(e,t,n){e.config.globalProperties.$q=n.$q,e.provide(A.Ng,n.$q),L(n,N),void 0!==t.components&&Object.values(t.components).forEach((t=>{Object(t)===t&&void 0!==t.name&&e.component(t.name,t)})),void 0!==t.directives&&Object.values(t.directives).forEach((t=>{Object(t)===t&&void 0!==t.name&&e.directive(t.name,t)})),void 0!==t.plugins&&L(n,Object.values(t.plugins).filter((e=>"function"===typeof e.install&&!1===N.includes(e)))),!0===r.uX.value&&(n.$q.onSSRHydrated=()=>{n.onSSRHydrated.forEach((e=>{e()})),n.$q.onSSRHydrated=()=>{}})}const D=function(e,t={}){const n={version:"2.3.4"};!1===R?(void 0!==t.config&&Object.assign(x,t.config),n.config={...x},O()):n.config=t.config||{},P(e,t,{parentApp:e,$q:n,lang:t.lang,iconSet:t.iconSet,onSSRHydrated:[]})},F={version:"2.3.4",install:D,lang:v,iconSet:C}},7083:e=>{e.exports.BC=function(e){return e}},392:(e,t,n)=>{var r=n(7358),i=n(419),s=n(3353),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a function")}},2722:(e,t,n)=>{var r=n(7358),i=n(7593),s=n(3353),o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not a constructor")}},8248:(e,t,n)=>{var r=n(7358),i=n(419),s=r.String,o=r.TypeError;e.exports=function(e){if("object"==typeof e||i(e))return e;throw o("Can't set "+s(e)+" as a prototype")}},2852:(e,t,n)=>{var r=n(854),i=n(1074),s=n(928),o=r("unscopables"),a=Array.prototype;void 0==a[o]&&s.f(a,o,{configurable:!0,value:i(null)}),e.exports=function(e){a[o][e]=!0}},6412:(e,t,n)=>{"use strict";var r=n(1021).charAt;e.exports=function(e,t,n){return t+(n?r(e,t).length:1)}},2827:(e,t,n)=>{var r=n(7358),i=n(7673),s=r.TypeError;e.exports=function(e,t){if(i(t,e))return e;throw s("Incorrect invocation")}},7950:(e,t,n)=>{var r=n(7358),i=n(776),s=r.String,o=r.TypeError;e.exports=function(e){if(i(e))return e;throw o(s(e)+" is not an object")}},6257:e=>{e.exports="undefined"!=typeof ArrayBuffer&&"undefined"!=typeof DataView},683:(e,t,n)=>{"use strict";var r,i,s,o=n(6257),a=n(9631),l=n(7358),c=n(419),u=n(776),h=n(7322),d=n(5976),f=n(3353),p=n(1904),g=n(298),m=n(928).f,v=n(7673),y=n(4945),w=n(6184),b=n(854),_=n(6862),T=l.Int8Array,E=T&&T.prototype,k=l.Uint8ClampedArray,I=k&&k.prototype,S=T&&y(T),C=E&&y(E),A=Object.prototype,x=l.TypeError,R=b("toStringTag"),O=_("TYPED_ARRAY_TAG"),N=_("TYPED_ARRAY_CONSTRUCTOR"),L=o&&!!w&&"Opera"!==d(l.opera),P=!1,D={Int8Array:1,Uint8Array:1,Uint8ClampedArray:1,Int16Array:2,Uint16Array:2,Int32Array:4,Uint32Array:4,Float32Array:4,Float64Array:8},F={BigInt64Array:8,BigUint64Array:8},M=function(e){if(!u(e))return!1;var t=d(e);return"DataView"===t||h(D,t)||h(F,t)},q=function(e){if(!u(e))return!1;var t=d(e);return h(D,t)||h(F,t)},V=function(e){if(q(e))return e;throw x("Target is not a typed array")},U=function(e){if(c(e)&&(!w||v(S,e)))return e;throw x(f(e)+" is not a typed array constructor")},j=function(e,t,n,r){if(a){if(n)for(var i in D){var s=l[i];if(s&&h(s.prototype,e))try{delete s.prototype[e]}catch(o){}}C[e]&&!n||g(C,e,n?t:L&&E[e]||t,r)}},B=function(e,t,n){var r,i;if(a){if(w){if(n)for(r in D)if(i=l[r],i&&h(i,e))try{delete i[e]}catch(s){}if(S[e]&&!n)return;try{return g(S,e,n?t:L&&S[e]||t)}catch(s){}}for(r in D)i=l[r],!i||i[e]&&!n||g(i,e,t)}};for(r in D)i=l[r],s=i&&i.prototype,s?p(s,N,i):L=!1;for(r in F)i=l[r],s=i&&i.prototype,s&&p(s,N,i);if((!L||!c(S)||S===Function.prototype)&&(S=function(){throw x("Incorrect invocation")},L))for(r in D)l[r]&&w(l[r],S);if((!L||!C||C===A)&&(C=S.prototype,L))for(r in D)l[r]&&w(l[r].prototype,C);if(L&&y(I)!==C&&w(I,C),a&&!h(C,R))for(r in P=!0,m(C,R,{get:function(){return u(this)?this[O]:void 0}}),D)l[r]&&p(l[r],O,r);e.exports={NATIVE_ARRAY_BUFFER_VIEWS:L,TYPED_ARRAY_CONSTRUCTOR:N,TYPED_ARRAY_TAG:P&&O,aTypedArray:V,aTypedArrayConstructor:U,exportTypedArrayMethod:j,exportTypedArrayStaticMethod:B,isView:M,isTypedArray:q,TypedArray:S,TypedArrayPrototype:C}},62:(e,t,n)=>{"use strict";var r=n(7358),i=n(1890),s=n(9631),o=n(6257),a=n(7961),l=n(1904),c=n(9833),u=n(6400),h=n(2827),d=n(1860),f=n(4068),p=n(833),g=n(8830),m=n(4945),v=n(6184),y=n(1454).f,w=n(928).f,b=n(5786),_=n(5771),T=n(1061),E=n(7624),k=a.PROPER,I=a.CONFIGURABLE,S=E.get,C=E.set,A="ArrayBuffer",x="DataView",R="prototype",O="Wrong length",N="Wrong index",L=r[A],P=L,D=P&&P[R],F=r[x],M=F&&F[R],q=Object.prototype,V=r.Array,U=r.RangeError,j=i(b),B=i([].reverse),$=g.pack,z=g.unpack,H=function(e){return[255&e]},K=function(e){return[255&e,e>>8&255]},W=function(e){return[255&e,e>>8&255,e>>16&255,e>>24&255]},G=function(e){return e[3]<<24|e[2]<<16|e[1]<<8|e[0]},J=function(e){return $(e,23,4)},Y=function(e){return $(e,52,8)},X=function(e,t){w(e[R],t,{get:function(){return S(this)[t]}})},Z=function(e,t,n,r){var i=p(n),s=S(e);if(i+t>s.byteLength)throw U(N);var o=S(s.buffer).bytes,a=i+s.byteOffset,l=_(o,a,a+t);return r?l:B(l)},Q=function(e,t,n,r,i,s){var o=p(n),a=S(e);if(o+t>a.byteLength)throw U(N);for(var l=S(a.buffer).bytes,c=o+a.byteOffset,u=r(+i),h=0;h<t;h++)l[c+h]=u[s?h:t-h-1]};if(o){var ee=k&&L.name!==A;if(u((function(){L(1)}))&&u((function(){new L(-1)}))&&!u((function(){return new L,new L(1.5),new L(NaN),ee&&!I})))ee&&I&&l(L,"name",A);else{P=function(e){return h(this,D),new L(p(e))},P[R]=D;for(var te,ne=y(L),re=0;ne.length>re;)(te=ne[re++])in P||l(P,te,L[te]);D.constructor=P}v&&m(M)!==q&&v(M,q);var ie=new F(new P(2)),se=i(M.setInt8);ie.setInt8(0,2147483648),ie.setInt8(1,2147483649),!ie.getInt8(0)&&ie.getInt8(1)||c(M,{setInt8:function(e,t){se(this,e,t<<24>>24)},setUint8:function(e,t){se(this,e,t<<24>>24)}},{unsafe:!0})}else P=function(e){h(this,D);var t=p(e);C(this,{bytes:j(V(t),0),byteLength:t}),s||(this.byteLength=t)},D=P[R],F=function(e,t,n){h(this,M),h(e,D);var r=S(e).byteLength,i=d(t);if(i<0||i>r)throw U("Wrong offset");if(n=void 0===n?r-i:f(n),i+n>r)throw U(O);C(this,{buffer:e,byteLength:n,byteOffset:i}),s||(this.buffer=e,this.byteLength=n,this.byteOffset=i)},M=F[R],s&&(X(P,"byteLength"),X(F,"buffer"),X(F,"byteLength"),X(F,"byteOffset")),c(M,{getInt8:function(e){return Z(this,1,e)[0]<<24>>24},getUint8:function(e){return Z(this,1,e)[0]},getInt16:function(e){var t=Z(this,2,e,arguments.length>1?arguments[1]:void 0);return(t[1]<<8|t[0])<<16>>16},getUint16:function(e){var t=Z(this,2,e,arguments.length>1?arguments[1]:void 0);return t[1]<<8|t[0]},getInt32:function(e){return G(Z(this,4,e,arguments.length>1?arguments[1]:void 0))},getUint32:function(e){return G(Z(this,4,e,arguments.length>1?arguments[1]:void 0))>>>0},getFloat32:function(e){return z(Z(this,4,e,arguments.length>1?arguments[1]:void 0),23)},getFloat64:function(e){return z(Z(this,8,e,arguments.length>1?arguments[1]:void 0),52)},setInt8:function(e,t){Q(this,1,e,H,t)},setUint8:function(e,t){Q(this,1,e,H,t)},setInt16:function(e,t){Q(this,2,e,K,t,arguments.length>2?arguments[2]:void 0)},setUint16:function(e,t){Q(this,2,e,K,t,arguments.length>2?arguments[2]:void 0)},setInt32:function(e,t){Q(this,4,e,W,t,arguments.length>2?arguments[2]:void 0)},setUint32:function(e,t){Q(this,4,e,W,t,arguments.length>2?arguments[2]:void 0)},setFloat32:function(e,t){Q(this,4,e,J,t,arguments.length>2?arguments[2]:void 0)},setFloat64:function(e,t){Q(this,8,e,Y,t,arguments.length>2?arguments[2]:void 0)}});T(P,A),T(F,x),e.exports={ArrayBuffer:P,DataView:F}},5786:(e,t,n)=>{"use strict";var r=n(7475),i=n(1801),s=n(6042);e.exports=function(e){var t=r(this),n=s(t),o=arguments.length,a=i(o>1?arguments[1]:void 0,n),l=o>2?arguments[2]:void 0,c=void 0===l?n:i(l,n);while(c>a)t[a++]=e;return t}},6963:(e,t,n)=>{var r=n(7120),i=n(1801),s=n(6042),o=function(e){return function(t,n,o){var a,l=r(t),c=s(l),u=i(o,c);if(e&&n!=n){while(c>u)if(a=l[u++],a!=a)return!0}else for(;c>u;u++)if((e||u in l)&&l[u]===n)return e||u||0;return!e&&-1}};e.exports={includes:o(!0),indexOf:o(!1)}},2099:(e,t,n)=>{var r=n(422),i=n(1890),s=n(2985),o=n(7475),a=n(6042),l=n(6340),c=i([].push),u=function(e){var t=1==e,n=2==e,i=3==e,u=4==e,h=6==e,d=7==e,f=5==e||h;return function(p,g,m,v){for(var y,w,b=o(p),_=s(b),T=r(g,m),E=a(_),k=0,I=v||l,S=t?I(p,E):n||d?I(p,0):void 0;E>k;k++)if((f||k in _)&&(y=_[k],w=T(y,k,b),e))if(t)S[k]=w;else if(w)switch(e){case 3:return!0;case 5:return y;case 6:return k;case 2:c(S,y)}else switch(e){case 4:return!1;case 7:c(S,y)}return h?-1:i||u?u:S}};e.exports={forEach:u(0),map:u(1),filter:u(2),some:u(3),every:u(4),find:u(5),findIndex:u(6),filterReject:u(7)}},5771:(e,t,n)=>{var r=n(7358),i=n(1801),s=n(6042),o=n(6496),a=r.Array,l=Math.max;e.exports=function(e,t,n){for(var r=s(e),c=i(t,r),u=i(void 0===n?r:n,r),h=a(l(u-c,0)),d=0;c<u;c++,d++)o(h,d,e[c]);return h.length=d,h}},6534:(e,t,n)=>{var r=n(5771),i=Math.floor,s=function(e,t){var n=e.length,l=i(n/2);return n<8?o(e,t):a(e,s(r(e,0,l),t),s(r(e,l),t),t)},o=function(e,t){var n,r,i=e.length,s=1;while(s<i){r=s,n=e[s];while(r&&t(e[r-1],n)>0)e[r]=e[--r];r!==s++&&(e[r]=n)}return e},a=function(e,t,n,r){var i=t.length,s=n.length,o=0,a=0;while(o<i||a<s)e[o+a]=o<i&&a<s?r(t[o],n[a])<=0?t[o++]:n[a++]:o<i?t[o++]:n[a++];return e};e.exports=s},330:(e,t,n)=>{var r=n(7358),i=n(6894),s=n(7593),o=n(776),a=n(854),l=a("species"),c=r.Array;e.exports=function(e){var t;return i(e)&&(t=e.constructor,s(t)&&(t===c||i(t.prototype))?t=void 0:o(t)&&(t=t[l],null===t&&(t=void 0))),void 0===t?c:t}},6340:(e,t,n)=>{var r=n(330);e.exports=function(e,t){return new(r(e))(0===t?0:t)}},8047:(e,t,n)=>{var r=n(854),i=r("iterator"),s=!1;try{var o=0,a={next:function(){return{done:!!o++}},return:function(){s=!0}};a[i]=function(){return this},Array.from(a,(function(){throw 2}))}catch(l){}e.exports=function(e,t){if(!t&&!s)return!1;var n=!1;try{var r={};r[i]=function(){return{next:function(){return{done:n=!0}}}},e(r)}catch(l){}return n}},5173:(e,t,n)=>{var r=n(1890),i=r({}.toString),s=r("".slice);e.exports=function(e){return s(i(e),8,-1)}},5976:(e,t,n)=>{var r=n(7358),i=n(5705),s=n(419),o=n(5173),a=n(854),l=a("toStringTag"),c=r.Object,u="Arguments"==o(function(){return arguments}()),h=function(e,t){try{return e[t]}catch(n){}};e.exports=i?o:function(e){var t,n,r;return void 0===e?"Undefined":null===e?"Null":"string"==typeof(n=h(t=c(e),l))?n:u?o(t):"Object"==(r=o(t))&&s(t.callee)?"Arguments":r}},8438:(e,t,n)=>{var r=n(7322),i=n(7764),s=n(2404),o=n(928);e.exports=function(e,t,n){for(var a=i(t),l=o.f,c=s.f,u=0;u<a.length;u++){var h=a[u];r(e,h)||n&&r(n,h)||l(e,h,c(t,h))}}},123:(e,t,n)=>{var r=n(6400);e.exports=!r((function(){function e(){}return e.prototype.constructor=null,Object.getPrototypeOf(new e)!==e.prototype}))},5912:(e,t,n)=>{"use strict";var r=n(4848).IteratorPrototype,i=n(1074),s=n(5442),o=n(1061),a=n(2184),l=function(){return this};e.exports=function(e,t,n,c){var u=t+" Iterator";return e.prototype=i(r,{next:s(+!c,n)}),o(e,u,!1,!0),a[u]=l,e}},1904:(e,t,n)=>{var r=n(9631),i=n(928),s=n(5442);e.exports=r?function(e,t,n){return i.f(e,t,s(1,n))}:function(e,t,n){return e[t]=n,e}},5442:e=>{e.exports=function(e,t){return{enumerable:!(1&e),configurable:!(2&e),writable:!(4&e),value:t}}},6496:(e,t,n)=>{"use strict";var r=n(8618),i=n(928),s=n(5442);e.exports=function(e,t,n){var o=r(t);o in e?i.f(e,o,s(0,n)):e[o]=n}},8810:(e,t,n)=>{"use strict";var r=n(8934),i=n(3577),s=n(6692),o=n(7961),a=n(419),l=n(5912),c=n(4945),u=n(6184),h=n(1061),d=n(1904),f=n(298),p=n(854),g=n(2184),m=n(4848),v=o.PROPER,y=o.CONFIGURABLE,w=m.IteratorPrototype,b=m.BUGGY_SAFARI_ITERATORS,_=p("iterator"),T="keys",E="values",k="entries",I=function(){return this};e.exports=function(e,t,n,o,p,m,S){l(n,t,o);var C,A,x,R=function(e){if(e===p&&D)return D;if(!b&&e in L)return L[e];switch(e){case T:return function(){return new n(this,e)};case E:return function(){return new n(this,e)};case k:return function(){return new n(this,e)}}return function(){return new n(this)}},O=t+" Iterator",N=!1,L=e.prototype,P=L[_]||L["@@iterator"]||p&&L[p],D=!b&&P||R(p),F="Array"==t&&L.entries||P;if(F&&(C=c(F.call(new e)),C!==Object.prototype&&C.next&&(s||c(C)===w||(u?u(C,w):a(C[_])||f(C,_,I)),h(C,O,!0,!0),s&&(g[O]=I))),v&&p==E&&P&&P.name!==E&&(!s&&y?d(L,"name",E):(N=!0,D=function(){return i(P,this)})),p)if(A={values:R(E),keys:m?D:R(T),entries:R(k)},S)for(x in A)(b||N||!(x in L))&&f(L,x,A[x]);else r({target:t,proto:!0,forced:b||N},A);return s&&!S||L[_]===D||f(L,_,D,{name:p}),g[t]=D,A}},9631:(e,t,n)=>{var r=n(6400);e.exports=!r((function(){return 7!=Object.defineProperty({},1,{get:function(){return 7}})[1]}))},5354:(e,t,n)=>{var r=n(7358),i=n(776),s=r.document,o=i(s)&&i(s.createElement);e.exports=function(e){return o?s.createElement(e):{}}},4296:e=>{e.exports={CSSRuleList:0,CSSStyleDeclaration:0,CSSValueList:0,ClientRectList:0,DOMRectList:0,DOMStringList:0,DOMTokenList:1,DataTransferItemList:0,FileList:0,HTMLAllCollection:0,HTMLCollection:0,HTMLFormElement:0,HTMLSelectElement:0,MediaList:0,MimeTypeArray:0,NamedNodeMap:0,NodeList:1,PaintRequestList:0,Plugin:0,PluginArray:0,SVGLengthList:0,SVGNumberList:0,SVGPathSegList:0,SVGPointList:0,SVGStringList:0,SVGTransformList:0,SourceBufferList:0,StyleSheetList:0,TextTrackCueList:0,TextTrackList:0,TouchList:0}},8753:(e,t,n)=>{var r=n(5354),i=r("span").classList,s=i&&i.constructor&&i.constructor.prototype;e.exports=s===Object.prototype?void 0:s},1544:(e,t,n)=>{var r=n(9173),i=r.match(/firefox\/(\d+)/i);e.exports=!!i&&+i[1]},8979:(e,t,n)=>{var r=n(9173);e.exports=/MSIE|Trident/.test(r)},9173:(e,t,n)=>{var r=n(9694);e.exports=r("navigator","userAgent")||""},5068:(e,t,n)=>{var r,i,s=n(7358),o=n(9173),a=s.process,l=s.Deno,c=a&&a.versions||l&&l.version,u=c&&c.v8;u&&(r=u.split("."),i=r[0]>0&&r[0]<4?1:+(r[0]+r[1])),!i&&o&&(r=o.match(/Edge\/(\d+)/),(!r||r[1]>=74)&&(r=o.match(/Chrome\/(\d+)/),r&&(i=+r[1]))),e.exports=i},1513:(e,t,n)=>{var r=n(9173),i=r.match(/AppleWebKit\/(\d+)\./);e.exports=!!i&&+i[1]},2875:e=>{e.exports=["constructor","hasOwnProperty","isPrototypeOf","propertyIsEnumerable","toLocaleString","toString","valueOf"]},8934:(e,t,n)=>{var r=n(7358),i=n(2404).f,s=n(1904),o=n(298),a=n(3534),l=n(8438),c=n(4389);e.exports=function(e,t){var n,u,h,d,f,p,g=e.target,m=e.global,v=e.stat;if(u=m?r:v?r[g]||a(g,{}):(r[g]||{}).prototype,u)for(h in t){if(f=t[h],e.noTargetGet?(p=i(u,h),d=p&&p.value):d=u[h],n=c(m?h:g+(v?".":"#")+h,e.forced),!n&&void 0!==d){if(typeof f==typeof d)continue;l(f,d)}(e.sham||d&&d.sham)&&s(f,"sham",!0),o(u,h,f,e)}}},6400:e=>{e.exports=function(e){try{return!!e()}catch(t){return!0}}},9529:(e,t,n)=>{"use strict";n(7280);var r=n(1890),i=n(298),s=n(4348),o=n(6400),a=n(854),l=n(1904),c=a("species"),u=RegExp.prototype;e.exports=function(e,t,n,h){var d=a(e),f=!o((function(){var t={};return t[d]=function(){return 7},7!=""[e](t)})),p=f&&!o((function(){var t=!1,n=/a/;return"split"===e&&(n={},n.constructor={},n.constructor[c]=function(){return n},n.flags="",n[d]=/./[d]),n.exec=function(){return t=!0,null},n[d](""),!t}));if(!f||!p||n){var g=r(/./[d]),m=t(d,""[e],(function(e,t,n,i,o){var a=r(e),l=t.exec;return l===s||l===u.exec?f&&!o?{done:!0,value:g(t,n,i)}:{done:!0,value:a(n,t,i)}:{done:!1}}));i(String.prototype,e,m[0]),i(u,d,m[1])}h&&l(u[d],"sham",!0)}},4157:e=>{var t=Function.prototype,n=t.apply,r=t.bind,i=t.call;e.exports="object"==typeof Reflect&&Reflect.apply||(r?i.bind(n):function(){return i.apply(n,arguments)})},422:(e,t,n)=>{var r=n(1890),i=n(392),s=r(r.bind);e.exports=function(e,t){return i(e),void 0===t?e:s?s(e,t):function(){return e.apply(t,arguments)}}},3577:e=>{var t=Function.prototype.call;e.exports=t.bind?t.bind(t):function(){return t.apply(t,arguments)}},7961:(e,t,n)=>{var r=n(9631),i=n(7322),s=Function.prototype,o=r&&Object.getOwnPropertyDescriptor,a=i(s,"name"),l=a&&"something"===function(){}.name,c=a&&(!r||r&&o(s,"name").configurable);e.exports={EXISTS:a,PROPER:l,CONFIGURABLE:c}},1890:e=>{var t=Function.prototype,n=t.bind,r=t.call,i=n&&n.bind(r);e.exports=n?function(e){return e&&i(r,e)}:function(e){return e&&function(){return r.apply(e,arguments)}}},9694:(e,t,n)=>{var r=n(7358),i=n(419),s=function(e){return i(e)?e:void 0};e.exports=function(e,t){return arguments.length<2?s(r[e]):r[e]&&r[e][t]}},7143:(e,t,n)=>{var r=n(5976),i=n(2344),s=n(2184),o=n(854),a=o("iterator");e.exports=function(e){if(void 0!=e)return i(e,a)||i(e,"@@iterator")||s[r(e)]}},2151:(e,t,n)=>{var r=n(7358),i=n(3577),s=n(392),o=n(7950),a=n(3353),l=n(7143),c=r.TypeError;e.exports=function(e,t){var n=arguments.length<2?l(e):t;if(s(n))return o(i(n,e));throw c(a(e)+" is not iterable")}},2344:(e,t,n)=>{var r=n(392);e.exports=function(e,t){var n=e[t];return null==n?void 0:r(n)}},8716:(e,t,n)=>{var r=n(1890),i=n(7475),s=Math.floor,o=r("".charAt),a=r("".replace),l=r("".slice),c=/\$([$&'`]|\d{1,2}|<[^>]*>)/g,u=/\$([$&'`]|\d{1,2})/g;e.exports=function(e,t,n,r,h,d){var f=n+e.length,p=r.length,g=u;return void 0!==h&&(h=i(h),g=c),a(d,g,(function(i,a){var c;switch(o(a,0)){case"$":return"$";case"&":return e;case"`":return l(t,0,n);case"'":return l(t,f);case"<":c=h[l(a,1,-1)];break;default:var u=+a;if(0===u)return i;if(u>p){var d=s(u/10);return 0===d?i:d<=p?void 0===r[d-1]?o(a,1):r[d-1]+o(a,1):i}c=r[u-1]}return void 0===c?"":c}))}},7358:(e,t,n)=>{var r=function(e){return e&&e.Math==Math&&e};e.exports=r("object"==typeof globalThis&&globalThis)||r("object"==typeof window&&window)||r("object"==typeof self&&self)||r("object"==typeof n.g&&n.g)||function(){return this}()||Function("return this")()},7322:(e,t,n)=>{var r=n(1890),i=n(7475),s=r({}.hasOwnProperty);e.exports=Object.hasOwn||function(e,t){return s(i(e),t)}},600:e=>{e.exports={}},9970:(e,t,n)=>{var r=n(9694);e.exports=r("document","documentElement")},7021:(e,t,n)=>{var r=n(9631),i=n(6400),s=n(5354);e.exports=!r&&!i((function(){return 7!=Object.defineProperty(s("div"),"a",{get:function(){return 7}}).a}))},8830:(e,t,n)=>{var r=n(7358),i=r.Array,s=Math.abs,o=Math.pow,a=Math.floor,l=Math.log,c=Math.LN2,u=function(e,t,n){var r,u,h,d=i(n),f=8*n-t-1,p=(1<<f)-1,g=p>>1,m=23===t?o(2,-24)-o(2,-77):0,v=e<0||0===e&&1/e<0?1:0,y=0;e=s(e),e!=e||e===1/0?(u=e!=e?1:0,r=p):(r=a(l(e)/c),h=o(2,-r),e*h<1&&(r--,h*=2),e+=r+g>=1?m/h:m*o(2,1-g),e*h>=2&&(r++,h/=2),r+g>=p?(u=0,r=p):r+g>=1?(u=(e*h-1)*o(2,t),r+=g):(u=e*o(2,g-1)*o(2,t),r=0));while(t>=8)d[y++]=255&u,u/=256,t-=8;r=r<<t|u,f+=t;while(f>0)d[y++]=255&r,r/=256,f-=8;return d[--y]|=128*v,d},h=function(e,t){var n,r=e.length,i=8*r-t-1,s=(1<<i)-1,a=s>>1,l=i-7,c=r-1,u=e[c--],h=127&u;u>>=7;while(l>0)h=256*h+e[c--],l-=8;n=h&(1<<-l)-1,h>>=-l,l+=t;while(l>0)n=256*n+e[c--],l-=8;if(0===h)h=1-a;else{if(h===s)return n?NaN:u?-1/0:1/0;n+=o(2,t),h-=a}return(u?-1:1)*n*o(2,h-t)};e.exports={pack:u,unpack:h}},2985:(e,t,n)=>{var r=n(7358),i=n(1890),s=n(6400),o=n(5173),a=r.Object,l=i("".split);e.exports=s((function(){return!a("z").propertyIsEnumerable(0)}))?function(e){return"String"==o(e)?l(e,""):a(e)}:a},9941:(e,t,n)=>{var r=n(419),i=n(776),s=n(6184);e.exports=function(e,t,n){var o,a;return s&&r(o=t.constructor)&&o!==n&&i(a=o.prototype)&&a!==n.prototype&&s(e,a),e}},3725:(e,t,n)=>{var r=n(1890),i=n(419),s=n(1089),o=r(Function.toString);i(s.inspectSource)||(s.inspectSource=function(e){return o(e)}),e.exports=s.inspectSource},7624:(e,t,n)=>{var r,i,s,o=n(9262),a=n(7358),l=n(1890),c=n(776),u=n(1904),h=n(7322),d=n(1089),f=n(203),p=n(600),g="Object already initialized",m=a.TypeError,v=a.WeakMap,y=function(e){return s(e)?i(e):r(e,{})},w=function(e){return function(t){var n;if(!c(t)||(n=i(t)).type!==e)throw m("Incompatible receiver, "+e+" required");return n}};if(o||d.state){var b=d.state||(d.state=new v),_=l(b.get),T=l(b.has),E=l(b.set);r=function(e,t){if(T(b,e))throw new m(g);return t.facade=e,E(b,e,t),t},i=function(e){return _(b,e)||{}},s=function(e){return T(b,e)}}else{var k=f("state");p[k]=!0,r=function(e,t){if(h(e,k))throw new m(g);return t.facade=e,u(e,k,t),t},i=function(e){return h(e,k)?e[k]:{}},s=function(e){return h(e,k)}}e.exports={set:r,get:i,has:s,enforce:y,getterFor:w}},1558:(e,t,n)=>{var r=n(854),i=n(2184),s=r("iterator"),o=Array.prototype;e.exports=function(e){return void 0!==e&&(i.Array===e||o[s]===e)}},6894:(e,t,n)=>{var r=n(5173);e.exports=Array.isArray||function(e){return"Array"==r(e)}},419:e=>{e.exports=function(e){return"function"==typeof e}},7593:(e,t,n)=>{var r=n(1890),i=n(6400),s=n(419),o=n(5976),a=n(9694),l=n(3725),c=function(){},u=[],h=a("Reflect","construct"),d=/^\s*(?:class|function)\b/,f=r(d.exec),p=!d.exec(c),g=function(e){if(!s(e))return!1;try{return h(c,u,e),!0}catch(t){return!1}},m=function(e){if(!s(e))return!1;switch(o(e)){case"AsyncFunction":case"GeneratorFunction":case"AsyncGeneratorFunction":return!1}try{return p||!!f(d,l(e))}catch(t){return!0}};m.sham=!0,e.exports=!h||i((function(){var e;return g(g.call)||!g(Object)||!g((function(){e=!0}))||e}))?m:g},4389:(e,t,n)=>{var r=n(6400),i=n(419),s=/#|\.prototype\./,o=function(e,t){var n=l[a(e)];return n==u||n!=c&&(i(t)?r(t):!!t)},a=o.normalize=function(e){return String(e).replace(s,".").toLowerCase()},l=o.data={},c=o.NATIVE="N",u=o.POLYFILL="P";e.exports=o},2818:(e,t,n)=>{var r=n(776),i=Math.floor;e.exports=Number.isInteger||function(e){return!r(e)&&isFinite(e)&&i(e)===e}},776:(e,t,n)=>{var r=n(419);e.exports=function(e){return"object"==typeof e?null!==e:r(e)}},6692:e=>{e.exports=!1},410:(e,t,n)=>{var r=n(7358),i=n(9694),s=n(419),o=n(7673),a=n(8476),l=r.Object;e.exports=a?function(e){return"symbol"==typeof e}:function(e){var t=i("Symbol");return s(t)&&o(t.prototype,l(e))}},4848:(e,t,n)=>{"use strict";var r,i,s,o=n(6400),a=n(419),l=n(1074),c=n(4945),u=n(298),h=n(854),d=n(6692),f=h("iterator"),p=!1;[].keys&&(s=[].keys(),"next"in s?(i=c(c(s)),i!==Object.prototype&&(r=i)):p=!0);var g=void 0==r||o((function(){var e={};return r[f].call(e)!==e}));g?r={}:d&&(r=l(r)),a(r[f])||u(r,f,(function(){return this})),e.exports={IteratorPrototype:r,BUGGY_SAFARI_ITERATORS:p}},2184:e=>{e.exports={}},6042:(e,t,n)=>{var r=n(4068);e.exports=function(e){return r(e.length)}},7529:(e,t,n)=>{var r=n(5068),i=n(6400);e.exports=!!Object.getOwnPropertySymbols&&!i((function(){var e=Symbol();return!String(e)||!(Object(e)instanceof Symbol)||!Symbol.sham&&r&&r<41}))},9262:(e,t,n)=>{var r=n(7358),i=n(419),s=n(3725),o=r.WeakMap;e.exports=i(o)&&/native code/.test(s(o))},1074:(e,t,n)=>{var r,i=n(7950),s=n(3605),o=n(2875),a=n(600),l=n(9970),c=n(5354),u=n(203),h=">",d="<",f="prototype",p="script",g=u("IE_PROTO"),m=function(){},v=function(e){return d+p+h+e+d+"/"+p+h},y=function(e){e.write(v("")),e.close();var t=e.parentWindow.Object;return e=null,t},w=function(){var e,t=c("iframe"),n="java"+p+":";return t.style.display="none",l.appendChild(t),t.src=String(n),e=t.contentWindow.document,e.open(),e.write(v("document.F=Object")),e.close(),e.F},b=function(){try{r=new ActiveXObject("htmlfile")}catch(t){}b="undefined"!=typeof document?document.domain&&r?y(r):w():y(r);var e=o.length;while(e--)delete b[f][o[e]];return b()};a[g]=!0,e.exports=Object.create||function(e,t){var n;return null!==e?(m[f]=i(e),n=new m,m[f]=null,n[g]=e):n=b(),void 0===t?n:s(n,t)}},3605:(e,t,n)=>{var r=n(9631),i=n(928),s=n(7950),o=n(7120),a=n(9158);e.exports=r?Object.defineProperties:function(e,t){s(e);var n,r=o(t),l=a(t),c=l.length,u=0;while(c>u)i.f(e,n=l[u++],r[n]);return e}},928:(e,t,n)=>{var r=n(7358),i=n(9631),s=n(7021),o=n(7950),a=n(8618),l=r.TypeError,c=Object.defineProperty;t.f=i?c:function(e,t,n){if(o(e),t=a(t),o(n),s)try{return c(e,t,n)}catch(r){}if("get"in n||"set"in n)throw l("Accessors not supported");return"value"in n&&(e[t]=n.value),e}},2404:(e,t,n)=>{var r=n(9631),i=n(3577),s=n(5604),o=n(5442),a=n(7120),l=n(8618),c=n(7322),u=n(7021),h=Object.getOwnPropertyDescriptor;t.f=r?h:function(e,t){if(e=a(e),t=l(t),u)try{return h(e,t)}catch(n){}if(c(e,t))return o(!i(s.f,e,t),e[t])}},1454:(e,t,n)=>{var r=n(1587),i=n(2875),s=i.concat("length","prototype");t.f=Object.getOwnPropertyNames||function(e){return r(e,s)}},4199:(e,t)=>{t.f=Object.getOwnPropertySymbols},4945:(e,t,n)=>{var r=n(7358),i=n(7322),s=n(419),o=n(7475),a=n(203),l=n(123),c=a("IE_PROTO"),u=r.Object,h=u.prototype;e.exports=l?u.getPrototypeOf:function(e){var t=o(e);if(i(t,c))return t[c];var n=t.constructor;return s(n)&&t instanceof n?n.prototype:t instanceof u?h:null}},7673:(e,t,n)=>{var r=n(1890);e.exports=r({}.isPrototypeOf)},1587:(e,t,n)=>{var r=n(1890),i=n(7322),s=n(7120),o=n(6963).indexOf,a=n(600),l=r([].push);e.exports=function(e,t){var n,r=s(e),c=0,u=[];for(n in r)!i(a,n)&&i(r,n)&&l(u,n);while(t.length>c)i(r,n=t[c++])&&(~o(u,n)||l(u,n));return u}},9158:(e,t,n)=>{var r=n(1587),i=n(2875);e.exports=Object.keys||function(e){return r(e,i)}},5604:(e,t)=>{"use strict";var n={}.propertyIsEnumerable,r=Object.getOwnPropertyDescriptor,i=r&&!n.call({1:2},1);t.f=i?function(e){var t=r(this,e);return!!t&&t.enumerable}:n},6184:(e,t,n)=>{var r=n(1890),i=n(7950),s=n(8248);e.exports=Object.setPrototypeOf||("__proto__"in{}?function(){var e,t=!1,n={};try{e=r(Object.getOwnPropertyDescriptor(Object.prototype,"__proto__").set),e(n,[]),t=n instanceof Array}catch(o){}return function(n,r){return i(n),s(r),t?e(n,r):n.__proto__=r,n}}():void 0)},9308:(e,t,n)=>{var r=n(7358),i=n(3577),s=n(419),o=n(776),a=r.TypeError;e.exports=function(e,t){var n,r;if("string"===t&&s(n=e.toString)&&!o(r=i(n,e)))return r;if(s(n=e.valueOf)&&!o(r=i(n,e)))return r;if("string"!==t&&s(n=e.toString)&&!o(r=i(n,e)))return r;throw a("Can't convert object to primitive value")}},7764:(e,t,n)=>{var r=n(9694),i=n(1890),s=n(1454),o=n(4199),a=n(7950),l=i([].concat);e.exports=r("Reflect","ownKeys")||function(e){var t=s.f(a(e)),n=o.f;return n?l(t,n(e)):t}},9833:(e,t,n)=>{var r=n(298);e.exports=function(e,t,n){for(var i in t)r(e,i,t[i],n);return e}},298:(e,t,n)=>{var r=n(7358),i=n(419),s=n(7322),o=n(1904),a=n(3534),l=n(3725),c=n(7624),u=n(7961).CONFIGURABLE,h=c.get,d=c.enforce,f=String(String).split("String");(e.exports=function(e,t,n,l){var c,h=!!l&&!!l.unsafe,p=!!l&&!!l.enumerable,g=!!l&&!!l.noTargetGet,m=l&&void 0!==l.name?l.name:t;i(n)&&("Symbol("===String(m).slice(0,7)&&(m="["+String(m).replace(/^Symbol\(([^)]*)\)/,"$1")+"]"),(!s(n,"name")||u&&n.name!==m)&&o(n,"name",m),c=d(n),c.source||(c.source=f.join("string"==typeof m?m:""))),e!==r?(h?!g&&e[t]&&(p=!0):delete e[t],p?e[t]=n:o(e,t,n)):p?e[t]=n:a(t,n)})(Function.prototype,"toString",(function(){return i(this)&&h(this).source||l(this)}))},9395:(e,t,n)=>{var r=n(7358),i=n(3577),s=n(7950),o=n(419),a=n(5173),l=n(4348),c=r.TypeError;e.exports=function(e,t){var n=e.exec;if(o(n)){var r=i(n,e,t);return null!==r&&s(r),r}if("RegExp"===a(e))return i(l,e,t);throw c("RegExp#exec called on incompatible receiver")}},4348:(e,t,n)=>{"use strict";var r=n(3577),i=n(1890),s=n(4481),o=n(136),a=n(2351),l=n(1586),c=n(1074),u=n(7624).get,h=n(5337),d=n(1442),f=l("native-string-replace",String.prototype.replace),p=RegExp.prototype.exec,g=p,m=i("".charAt),v=i("".indexOf),y=i("".replace),w=i("".slice),b=function(){var e=/a/,t=/b*/g;return r(p,e,"a"),r(p,t,"a"),0!==e.lastIndex||0!==t.lastIndex}(),_=a.BROKEN_CARET,T=void 0!==/()??/.exec("")[1],E=b||T||_||h||d;E&&(g=function(e){var t,n,i,a,l,h,d,E=this,k=u(E),I=s(e),S=k.raw;if(S)return S.lastIndex=E.lastIndex,t=r(g,S,I),E.lastIndex=S.lastIndex,t;var C=k.groups,A=_&&E.sticky,x=r(o,E),R=E.source,O=0,N=I;if(A&&(x=y(x,"y",""),-1===v(x,"g")&&(x+="g"),N=w(I,E.lastIndex),E.lastIndex>0&&(!E.multiline||E.multiline&&"\n"!==m(I,E.lastIndex-1))&&(R="(?: "+R+")",N=" "+N,O++),n=new RegExp("^(?:"+R+")",x)),T&&(n=new RegExp("^"+R+"$(?!\\s)",x)),b&&(i=E.lastIndex),a=r(p,A?n:E,N),A?a?(a.input=w(a.input,O),a[0]=w(a[0],O),a.index=E.lastIndex,E.lastIndex+=a[0].length):E.lastIndex=0:b&&a&&(E.lastIndex=E.global?a.index+a[0].length:i),T&&a&&a.length>1&&r(f,a[0],n,(function(){for(l=1;l<arguments.length-2;l++)void 0===arguments[l]&&(a[l]=void 0)})),a&&C)for(a.groups=h=c(null),l=0;l<C.length;l++)d=C[l],h[d[0]]=a[d[1]];return a}),e.exports=g},136:(e,t,n)=>{"use strict";var r=n(7950);e.exports=function(){var e=r(this),t="";return e.global&&(t+="g"),e.ignoreCase&&(t+="i"),e.multiline&&(t+="m"),e.dotAll&&(t+="s"),e.unicode&&(t+="u"),e.sticky&&(t+="y"),t}},2351:(e,t,n)=>{var r=n(6400),i=n(7358),s=i.RegExp,o=r((function(){var e=s("a","y");return e.lastIndex=2,null!=e.exec("abcd")})),a=o||r((function(){return!s("a","y").sticky})),l=o||r((function(){var e=s("^r","gy");return e.lastIndex=2,null!=e.exec("str")}));e.exports={BROKEN_CARET:l,MISSED_STICKY:a,UNSUPPORTED_Y:o}},5337:(e,t,n)=>{var r=n(6400),i=n(7358),s=i.RegExp;e.exports=r((function(){var e=s(".","s");return!(e.dotAll&&e.exec("\n")&&"s"===e.flags)}))},1442:(e,t,n)=>{var r=n(6400),i=n(7358),s=i.RegExp;e.exports=r((function(){var e=s("(?<a>b)","g");return"b"!==e.exec("b").groups.a||"bc"!=="b".replace(e,"$<a>c")}))},7933:(e,t,n)=>{var r=n(7358),i=r.TypeError;e.exports=function(e){if(void 0==e)throw i("Can't call method on "+e);return e}},3534:(e,t,n)=>{var r=n(7358),i=Object.defineProperty;e.exports=function(e,t){try{i(r,e,{value:t,configurable:!0,writable:!0})}catch(n){r[e]=t}return t}},4114:(e,t,n)=>{"use strict";var r=n(9694),i=n(928),s=n(854),o=n(9631),a=s("species");e.exports=function(e){var t=r(e),n=i.f;o&&t&&!t[a]&&n(t,a,{configurable:!0,get:function(){return this}})}},1061:(e,t,n)=>{var r=n(928).f,i=n(7322),s=n(854),o=s("toStringTag");e.exports=function(e,t,n){e&&!n&&(e=e.prototype),e&&!i(e,o)&&r(e,o,{configurable:!0,value:t})}},203:(e,t,n)=>{var r=n(1586),i=n(6862),s=r("keys");e.exports=function(e){return s[e]||(s[e]=i(e))}},1089:(e,t,n)=>{var r=n(7358),i=n(3534),s="__core-js_shared__",o=r[s]||i(s,{});e.exports=o},1586:(e,t,n)=>{var r=n(6692),i=n(1089);(e.exports=function(e,t){return i[e]||(i[e]=void 0!==t?t:{})})("versions",[]).push({version:"3.20.0",mode:r?"pure":"global",copyright:"© 2021 Denis Pushkarev (zloirock.ru)"})},7440:(e,t,n)=>{var r=n(7950),i=n(2722),s=n(854),o=s("species");e.exports=function(e,t){var n,s=r(e).constructor;return void 0===s||void 0==(n=r(s)[o])?t:i(n)}},1021:(e,t,n)=>{var r=n(1890),i=n(1860),s=n(4481),o=n(7933),a=r("".charAt),l=r("".charCodeAt),c=r("".slice),u=function(e){return function(t,n){var r,u,h=s(o(t)),d=i(n),f=h.length;return d<0||d>=f?e?"":void 0:(r=l(h,d),r<55296||r>56319||d+1===f||(u=l(h,d+1))<56320||u>57343?e?a(h,d):r:e?c(h,d,d+2):u-56320+(r-55296<<10)+65536)}};e.exports={codeAt:u(!1),charAt:u(!0)}},1801:(e,t,n)=>{var r=n(1860),i=Math.max,s=Math.min;e.exports=function(e,t){var n=r(e);return n<0?i(n+t,0):s(n,t)}},833:(e,t,n)=>{var r=n(7358),i=n(1860),s=n(4068),o=r.RangeError;e.exports=function(e){if(void 0===e)return 0;var t=i(e),n=s(t);if(t!==n)throw o("Wrong length or index");return n}},7120:(e,t,n)=>{var r=n(2985),i=n(7933);e.exports=function(e){return r(i(e))}},1860:e=>{var t=Math.ceil,n=Math.floor;e.exports=function(e){var r=+e;return r!==r||0===r?0:(r>0?n:t)(r)}},4068:(e,t,n)=>{var r=n(1860),i=Math.min;e.exports=function(e){return e>0?i(r(e),9007199254740991):0}},7475:(e,t,n)=>{var r=n(7358),i=n(7933),s=r.Object;e.exports=function(e){return s(i(e))}},701:(e,t,n)=>{var r=n(7358),i=n(1443),s=r.RangeError;e.exports=function(e,t){var n=i(e);if(n%t)throw s("Wrong offset");return n}},1443:(e,t,n)=>{var r=n(7358),i=n(1860),s=r.RangeError;e.exports=function(e){var t=i(e);if(t<0)throw s("The argument can't be less than 0");return t}},2181:(e,t,n)=>{var r=n(7358),i=n(3577),s=n(776),o=n(410),a=n(2344),l=n(9308),c=n(854),u=r.TypeError,h=c("toPrimitive");e.exports=function(e,t){if(!s(e)||o(e))return e;var n,r=a(e,h);if(r){if(void 0===t&&(t="default"),n=i(r,e,t),!s(n)||o(n))return n;throw u("Can't convert object to primitive value")}return void 0===t&&(t="number"),l(e,t)}},8618:(e,t,n)=>{var r=n(2181),i=n(410);e.exports=function(e){var t=r(e,"string");return i(t)?t:t+""}},5705:(e,t,n)=>{var r=n(854),i=r("toStringTag"),s={};s[i]="z",e.exports="[object z]"===String(s)},4481:(e,t,n)=>{var r=n(7358),i=n(5976),s=r.String;e.exports=function(e){if("Symbol"===i(e))throw TypeError("Cannot convert a Symbol value to a string");return s(e)}},3353:(e,t,n)=>{var r=n(7358),i=r.String;e.exports=function(e){try{return i(e)}catch(t){return"Object"}}},6968:(e,t,n)=>{"use strict";var r=n(8934),i=n(7358),s=n(3577),o=n(9631),a=n(8689),l=n(683),c=n(62),u=n(2827),h=n(5442),d=n(1904),f=n(2818),p=n(4068),g=n(833),m=n(701),v=n(8618),y=n(7322),w=n(5976),b=n(776),_=n(410),T=n(1074),E=n(7673),k=n(6184),I=n(1454).f,S=n(9401),C=n(2099).forEach,A=n(4114),x=n(928),R=n(2404),O=n(7624),N=n(9941),L=O.get,P=O.set,D=x.f,F=R.f,M=Math.round,q=i.RangeError,V=c.ArrayBuffer,U=V.prototype,j=c.DataView,B=l.NATIVE_ARRAY_BUFFER_VIEWS,$=l.TYPED_ARRAY_CONSTRUCTOR,z=l.TYPED_ARRAY_TAG,H=l.TypedArray,K=l.TypedArrayPrototype,W=l.aTypedArrayConstructor,G=l.isTypedArray,J="BYTES_PER_ELEMENT",Y="Wrong length",X=function(e,t){W(e);var n=0,r=t.length,i=new e(r);while(r>n)i[n]=t[n++];return i},Z=function(e,t){D(e,t,{get:function(){return L(this)[t]}})},Q=function(e){var t;return E(U,e)||"ArrayBuffer"==(t=w(e))||"SharedArrayBuffer"==t},ee=function(e,t){return G(e)&&!_(t)&&t in e&&f(+t)&&t>=0},te=function(e,t){return t=v(t),ee(e,t)?h(2,e[t]):F(e,t)},ne=function(e,t,n){return t=v(t),!(ee(e,t)&&b(n)&&y(n,"value"))||y(n,"get")||y(n,"set")||n.configurable||y(n,"writable")&&!n.writable||y(n,"enumerable")&&!n.enumerable?D(e,t,n):(e[t]=n.value,e)};o?(B||(R.f=te,x.f=ne,Z(K,"buffer"),Z(K,"byteOffset"),Z(K,"byteLength"),Z(K,"length")),r({target:"Object",stat:!0,forced:!B},{getOwnPropertyDescriptor:te,defineProperty:ne}),e.exports=function(e,t,n){var o=e.match(/\d+$/)[0]/8,l=e+(n?"Clamped":"")+"Array",c="get"+e,h="set"+e,f=i[l],v=f,y=v&&v.prototype,w={},_=function(e,t){var n=L(e);return n.view[c](t*o+n.byteOffset,!0)},E=function(e,t,r){var i=L(e);n&&(r=(r=M(r))<0?0:r>255?255:255&r),i.view[h](t*o+i.byteOffset,r,!0)},x=function(e,t){D(e,t,{get:function(){return _(this,t)},set:function(e){return E(this,t,e)},enumerable:!0})};B?a&&(v=t((function(e,t,n,r){return u(e,y),N(function(){return b(t)?Q(t)?void 0!==r?new f(t,m(n,o),r):void 0!==n?new f(t,m(n,o)):new f(t):G(t)?X(v,t):s(S,v,t):new f(g(t))}(),e,v)})),k&&k(v,H),C(I(f),(function(e){e in v||d(v,e,f[e])})),v.prototype=y):(v=t((function(e,t,n,r){u(e,y);var i,a,l,c=0,h=0;if(b(t)){if(!Q(t))return G(t)?X(v,t):s(S,v,t);i=t,h=m(n,o);var d=t.byteLength;if(void 0===r){if(d%o)throw q(Y);if(a=d-h,a<0)throw q(Y)}else if(a=p(r)*o,a+h>d)throw q(Y);l=a/o}else l=g(t),a=l*o,i=new V(a);P(e,{buffer:i,byteOffset:h,byteLength:a,length:l,view:new j(i)});while(c<l)x(e,c++)})),k&&k(v,H),y=v.prototype=T(K)),y.constructor!==v&&d(y,"constructor",v),d(y,$,v),z&&d(y,z,l),w[l]=v,r({global:!0,forced:v!=f,sham:!B},w),J in v||d(v,J,o),J in y||d(y,J,o),A(l)}):e.exports=function(){}},8689:(e,t,n)=>{var r=n(7358),i=n(6400),s=n(8047),o=n(683).NATIVE_ARRAY_BUFFER_VIEWS,a=r.ArrayBuffer,l=r.Int8Array;e.exports=!o||!i((function(){l(1)}))||!i((function(){new l(-1)}))||!s((function(e){new l,new l(null),new l(1.5),new l(e)}),!0)||i((function(){return 1!==new l(new a(2),1,void 0).length}))},9401:(e,t,n)=>{var r=n(422),i=n(3577),s=n(2722),o=n(7475),a=n(6042),l=n(2151),c=n(7143),u=n(1558),h=n(683).aTypedArrayConstructor;e.exports=function(e){var t,n,d,f,p,g,m=s(this),v=o(e),y=arguments.length,w=y>1?arguments[1]:void 0,b=void 0!==w,_=c(v);if(_&&!u(_)){p=l(v,_),g=p.next,v=[];while(!(f=i(g,p)).done)v.push(f.value)}for(b&&y>2&&(w=r(w,arguments[2])),n=a(v),d=new(h(m))(n),t=0;n>t;t++)d[t]=b?w(v[t],t):v[t];return d}},6862:(e,t,n)=>{var r=n(1890),i=0,s=Math.random(),o=r(1..toString);e.exports=function(e){return"Symbol("+(void 0===e?"":e)+")_"+o(++i+s,36)}},8476:(e,t,n)=>{var r=n(7529);e.exports=r&&!Symbol.sham&&"symbol"==typeof Symbol.iterator},854:(e,t,n)=>{var r=n(7358),i=n(1586),s=n(7322),o=n(6862),a=n(7529),l=n(8476),c=i("wks"),u=r.Symbol,h=u&&u["for"],d=l?u:u&&u.withoutSetter||o;e.exports=function(e){if(!s(c,e)||!a&&"string"!=typeof c[e]){var t="Symbol."+e;a&&s(u,e)?c[e]=u[e]:c[e]=l&&h?h(t):d(t)}return c[e]}},979:(e,t,n)=>{"use strict";var r=n(8934),i=n(1890),s=n(6400),o=n(62),a=n(7950),l=n(1801),c=n(4068),u=n(7440),h=o.ArrayBuffer,d=o.DataView,f=d.prototype,p=i(h.prototype.slice),g=i(f.getUint8),m=i(f.setUint8),v=s((function(){return!new h(2).slice(1,void 0).byteLength}));r({target:"ArrayBuffer",proto:!0,unsafe:!0,forced:v},{slice:function(e,t){if(p&&void 0===t)return p(a(this),e);var n=a(this).byteLength,r=l(e,n),i=l(void 0===t?n:t,n),s=new(u(this,h))(c(i-r)),o=new d(this),f=new d(s),v=0;while(r<i)m(f,v++,g(o,r++));return s}})},6843:(e,t,n)=>{"use strict";var r=n(7120),i=n(2852),s=n(2184),o=n(7624),a=n(928).f,l=n(8810),c=n(6692),u=n(9631),h="Array Iterator",d=o.set,f=o.getterFor(h);e.exports=l(Array,"Array",(function(e,t){d(this,{type:h,target:r(e),index:0,kind:t})}),(function(){var e=f(this),t=e.target,n=e.kind,r=e.index++;return!t||r>=t.length?(e.target=void 0,{value:void 0,done:!0}):"keys"==n?{value:r,done:!1}:"values"==n?{value:t[r],done:!1}:{value:[r,t[r]],done:!1}}),"values");var p=s.Arguments=s.Array;if(i("keys"),i("values"),i("entries"),!c&&u&&"values"!==p.name)try{a(p,"name",{value:"values"})}catch(g){}},6245:(e,t,n)=>{var r=n(2852);r("flat")},7280:(e,t,n)=>{"use strict";var r=n(8934),i=n(4348);r({target:"RegExp",proto:!0,forced:/./.exec!==i},{exec:i})},5363:(e,t,n)=>{"use strict";var r=n(4157),i=n(3577),s=n(1890),o=n(9529),a=n(6400),l=n(7950),c=n(419),u=n(1860),h=n(4068),d=n(4481),f=n(7933),p=n(6412),g=n(2344),m=n(8716),v=n(9395),y=n(854),w=y("replace"),b=Math.max,_=Math.min,T=s([].concat),E=s([].push),k=s("".indexOf),I=s("".slice),S=function(e){return void 0===e?e:String(e)},C=function(){return"$0"==="a".replace(/./,"$0")}(),A=function(){return!!/./[w]&&""===/./[w]("a","$0")}(),x=!a((function(){var e=/./;return e.exec=function(){var e=[];return e.groups={a:"7"},e},"7"!=="".replace(e,"$<a>")}));o("replace",(function(e,t,n){var s=A?"$":"$0";return[function(e,n){var r=f(this),s=void 0==e?void 0:g(e,w);return s?i(s,e,r,n):i(t,d(r),e,n)},function(e,i){var o=l(this),a=d(e);if("string"==typeof i&&-1===k(i,s)&&-1===k(i,"$<")){var f=n(t,o,a,i);if(f.done)return f.value}var g=c(i);g||(i=d(i));var y=o.global;if(y){var w=o.unicode;o.lastIndex=0}var C=[];while(1){var A=v(o,a);if(null===A)break;if(E(C,A),!y)break;var x=d(A[0]);""===x&&(o.lastIndex=p(a,h(o.lastIndex),w))}for(var R="",O=0,N=0;N<C.length;N++){A=C[N];for(var L=d(A[0]),P=b(_(u(A.index),a.length),0),D=[],F=1;F<A.length;F++)E(D,S(A[F]));var M=A.groups;if(g){var q=T([L],D,P,a);void 0!==M&&E(q,M);var V=d(r(i,void 0,q))}else V=m(L,a,P,D,M,i);P>=O&&(R+=I(a,O,P)+V,O=P+L.length)}return R+I(a,O)}]}),!x||!C||A)},246:(e,t,n)=>{"use strict";var r=n(8934),i=n(9631),s=n(7358),o=n(1890),a=n(7322),l=n(419),c=n(7673),u=n(4481),h=n(928).f,d=n(8438),f=s.Symbol,p=f&&f.prototype;if(i&&l(f)&&(!("description"in p)||void 0!==f().description)){var g={},m=function(){var e=arguments.length<1||void 0===arguments[0]?void 0:u(arguments[0]),t=c(p,this)?new f(e):void 0===e?f():f(e);return""===e&&(g[t]=!0),t};d(m,f),m.prototype=p,p.constructor=m;var v="Symbol(test)"==String(f("test")),y=o(p.toString),w=o(p.valueOf),b=/^Symbol\((.*)\)[^)]+$/,_=o("".replace),T=o("".slice);h(p,"description",{configurable:!0,get:function(){var e=w(this),t=y(e);if(a(g,e))return"";var n=v?T(t,7,-1):_(t,b,"$1");return""===n?void 0:n}}),r({global:!0,forced:!0},{Symbol:m})}},5123:(e,t,n)=>{"use strict";var r=n(683),i=n(6042),s=n(1860),o=r.aTypedArray,a=r.exportTypedArrayMethod;a("at",(function(e){var t=o(this),n=i(t),r=s(e),a=r>=0?r:n+r;return a<0||a>=n?void 0:t[a]}))},2396:(e,t,n)=>{"use strict";var r=n(7358),i=n(1890),s=n(6400),o=n(392),a=n(6534),l=n(683),c=n(1544),u=n(8979),h=n(5068),d=n(1513),f=r.Array,p=l.aTypedArray,g=l.exportTypedArrayMethod,m=r.Uint16Array,v=m&&i(m.prototype.sort),y=!!v&&!(s((function(){v(new m(2),null)}))&&s((function(){v(new m(2),{})}))),w=!!v&&!s((function(){if(h)return h<74;if(c)return c<67;if(u)return!0;if(d)return d<602;var e,t,n=new m(516),r=f(516);for(e=0;e<516;e++)t=e%4,n[e]=515-e,r[e]=e-2*t+3;for(v(n,(function(e,t){return(e/4|0)-(t/4|0)})),e=0;e<516;e++)if(n[e]!==r[e])return!0})),b=function(e){return function(t,n){return void 0!==e?+e(t,n)||0:n!==n?-1:t!==t?1:0===t&&0===n?1/t>0&&1/n<0?1:-1:t>n}};g("sort",(function(e){return void 0!==e&&o(e),w?v(this,e):a(p(this),b(e))}),!w||y)},6105:(e,t,n)=>{var r=n(6968);r("Uint8",(function(e){return function(t,n,r){return e(this,t,n,r)}}))},71:(e,t,n)=>{var r=n(7358),i=n(4296),s=n(8753),o=n(6843),a=n(1904),l=n(854),c=l("iterator"),u=l("toStringTag"),h=o.values,d=function(e,t){if(e){if(e[c]!==h)try{a(e,c,h)}catch(r){e[c]=h}if(e[u]||a(e,u,t),i[t])for(var n in o)if(e[n]!==o[n])try{a(e,n,o[n])}catch(r){e[n]=o[n]}}};for(var f in i)d(r[f]&&r[f].prototype,f);d(s,"DOMTokenList")},7410:(e,t,n)=>{"use strict";n.d(t,{IH:()=>pt});var r=n(9036),i=n(1492),s=n(5479),o=n(4676),a=n(3968);const l="@firebase/installations",c="0.5.4",u=1e4,h=`w:${c}`,d="FIS_v2",f="https://firebaseinstallations.googleapis.com/v1",p=36e5,g="installations",m="Installations",v={["missing-app-config-values"]:'Missing App configuration value: "{$valueName}"',["not-registered"]:"Firebase Installation is not registered.",["installation-not-found"]:"Firebase Installation not found.",["request-failed"]:'{$requestName} request failed with error "{$serverCode} {$serverStatus}: {$serverMessage}"',["app-offline"]:"Could not process request. Application offline.",["delete-pending-registration"]:"Can't delete installation while there is a pending registration request."},y=new s.LL(g,m,v);function w(e){return e instanceof s.ZR&&e.code.includes("request-failed")}
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
 */function b({projectId:e}){return`${f}/projects/${e}/installations`}function _(e){return{token:e.token,requestStatus:2,expiresIn:S(e.expiresIn),creationTime:Date.now()}}async function T(e,t){const n=await t.json(),r=n.error;return y.create("request-failed",{requestName:e,serverCode:r.code,serverMessage:r.message,serverStatus:r.status})}function E({apiKey:e}){return new Headers({"Content-Type":"application/json",Accept:"application/json","x-goog-api-key":e})}function k(e,{refreshToken:t}){const n=E(e);return n.append("Authorization",C(t)),n}async function I(e){const t=await e();return t.status>=500&&t.status<600?e():t}function S(e){return Number(e.replace("s","000"))}function C(e){return`${d} ${e}`}
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
 */async function A(e,{fid:t}){const n=b(e),r=E(e),i={fid:t,authVersion:d,appId:e.appId,sdkVersion:h},s={method:"POST",headers:r,body:JSON.stringify(i)},o=await I((()=>fetch(n,s)));if(o.ok){const e=await o.json(),n={fid:e.fid||t,registrationStatus:2,refreshToken:e.refreshToken,authToken:_(e.authToken)};return n}throw await T("Create Installation",o)}
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
 */function x(e){return new Promise((t=>{setTimeout(t,e)}))}
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
 */const F=new Map;function M(e,t){const n=D(e);q(n,t),V(n,t)}function q(e,t){const n=F.get(e);if(n)for(const r of n)r(t)}function V(e,t){const n=j();n&&n.postMessage({key:e,fid:t}),B()}let U=null;function j(){return!U&&"BroadcastChannel"in self&&(U=new BroadcastChannel("[Firebase] FID Change"),U.onmessage=e=>{q(e.data.key,e.data.fid)}),U}function B(){0===F.size&&U&&(U.close(),U=null)}
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
 */const $="firebase-installations-database",z=1,H="firebase-installations-store";let K=null;function W(){return K||(K=(0,a.openDb)($,z,(e=>{switch(e.oldVersion){case 0:e.createObjectStore(H)}}))),K}async function G(e,t){const n=D(e),r=await W(),i=r.transaction(H,"readwrite"),s=i.objectStore(H),o=await s.get(n);return await s.put(t,n),await i.complete,o&&o.fid===t.fid||M(e,t.fid),t}async function J(e){const t=D(e),n=await W(),r=n.transaction(H,"readwrite");await r.objectStore(H).delete(t),await r.complete}async function Y(e,t){const n=D(e),r=await W(),i=r.transaction(H,"readwrite"),s=i.objectStore(H),o=await s.get(n),a=t(o);return void 0===a?await s.delete(n):await s.put(a,n),await i.complete,!a||o&&o.fid===a.fid||M(e,a.fid),a}
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
 */async function X(e){let t;const n=await Y(e,(n=>{const r=Z(n),i=Q(e,r);return t=i.registrationPromise,i.installationEntry}));return n.fid===N?{installationEntry:await t}:{installationEntry:n,registrationPromise:t}}function Z(e){const t=e||{fid:L(),registrationStatus:0};return re(t)}function Q(e,t){if(0===t.registrationStatus){if(!navigator.onLine){const e=Promise.reject(y.create("app-offline"));return{installationEntry:t,registrationPromise:e}}const n={fid:t.fid,registrationStatus:1,registrationTime:Date.now()},r=ee(e,n);return{installationEntry:n,registrationPromise:r}}return 1===t.registrationStatus?{installationEntry:t,registrationPromise:te(e)}:{installationEntry:t}}async function ee(e,t){try{const n=await A(e,t);return G(e,n)}catch(n){throw w(n)&&409===n.customData.serverCode?await J(e):await G(e,{fid:t.fid,registrationStatus:0}),n}}async function te(e){let t=await ne(e);while(1===t.registrationStatus)await x(100),t=await ne(e);if(0===t.registrationStatus){const{installationEntry:t,registrationPromise:n}=await X(e);return n||t}return t}function ne(e){return Y(e,(e=>{if(!e)throw y.create("installation-not-found");return re(e)}))}function re(e){return ie(e)?{fid:e.fid,registrationStatus:0}:e}function ie(e){return 1===e.registrationStatus&&e.registrationTime+u<Date.now()}
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
 */async function se({appConfig:e,platformLoggerProvider:t},n){const r=oe(e,n),i=k(e,n),s=t.getImmediate({optional:!0});s&&i.append("x-firebase-client",s.getPlatformInfoString());const o={installation:{sdkVersion:h}},a={method:"POST",headers:i,body:JSON.stringify(o)},l=await I((()=>fetch(r,a)));if(l.ok){const e=await l.json(),t=_(e);return t}throw await T("Generate Auth Token",l)}function oe(e,{fid:t}){return`${b(e)}/${t}/authTokens:generate`}
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
 */async function ae(e,t=!1){let n;const r=await Y(e.appConfig,(r=>{if(!he(r))throw y.create("not-registered");const i=r.authToken;if(!t&&de(i))return r;if(1===i.requestStatus)return n=le(e,t),r;{if(!navigator.onLine)throw y.create("app-offline");const t=pe(r);return n=ue(e,t),t}})),i=n?await n:r.authToken;return i}async function le(e,t){let n=await ce(e.appConfig);while(1===n.authToken.requestStatus)await x(100),n=await ce(e.appConfig);const r=n.authToken;return 0===r.requestStatus?ae(e,t):r}function ce(e){return Y(e,(e=>{if(!he(e))throw y.create("not-registered");const t=e.authToken;return ge(t)?Object.assign(Object.assign({},e),{authToken:{requestStatus:0}}):e}))}async function ue(e,t){try{const n=await se(e,t),r=Object.assign(Object.assign({},t),{authToken:n});return await G(e.appConfig,r),n}catch(n){if(!w(n)||401!==n.customData.serverCode&&404!==n.customData.serverCode){const n=Object.assign(Object.assign({},t),{authToken:{requestStatus:0}});await G(e.appConfig,n)}else await J(e.appConfig);throw n}}function he(e){return void 0!==e&&2===e.registrationStatus}function de(e){return 2===e.requestStatus&&!fe(e)}function fe(e){const t=Date.now();return t<e.creationTime||e.creationTime+e.expiresIn<t+p}function pe(e){const t={requestStatus:1,requestTime:Date.now()};return Object.assign(Object.assign({},e),{authToken:t})}function ge(e){return 1===e.requestStatus&&e.requestTime+u<Date.now()}
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
 */async function me(e){const t=e,{installationEntry:n,registrationPromise:r}=await X(t.appConfig);return r?r.catch(console.error):ae(t).catch(console.error),n.fid}
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
 */async function ve(e,t=!1){const n=e;await ye(n.appConfig);const r=await ae(n,t);return r.token}async function ye(e){const{registrationPromise:t}=await X(e);t&&await t}
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
 */const _e="installations",Te="installations-internal",Ee=e=>{const t=e.getProvider("app").getImmediate(),n=we(t),i=(0,r.qX)(t,"platform-logger"),s={app:t,appConfig:n,platformLoggerProvider:i,_delete:()=>Promise.resolve()};return s},ke=e=>{const t=e.getProvider("app").getImmediate(),n=(0,r.qX)(t,_e).getImmediate(),i={getId:()=>me(n),getToken:e=>ve(n,e)};return i};function Ie(){(0,r.Xd)(new o.wA(_e,Ee,"PUBLIC")),(0,r.Xd)(new o.wA(Te,ke,"PRIVATE"))}Ie(),(0,r.KN)(l,c),(0,r.KN)(l,c,"esm2017");
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
const Se="analytics",Ce="firebase_id",Ae="origin",xe=6e4,Re="https://firebase.googleapis.com/v1alpha/projects/-/apps/{app-id}/webConfig",Oe="https://www.googletagmanager.com/gtag/js",Ne=new i.Yd("@firebase/analytics");
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
function Le(e){return Promise.all(e.map((e=>e.catch((e=>e)))))}function Pe(e,t){const n=document.createElement("script");n.src=`${Oe}?l=${e}&id=${t}`,n.async=!0,document.head.appendChild(n)}function De(e){let t=[];return Array.isArray(window[e])?t=window[e]:window[e]=t,t}async function Fe(e,t,n,r,i,s){const o=r[i];try{if(o)await t[o];else{const e=await Le(n),r=e.find((e=>e.measurementId===i));r&&await t[r.appId]}}catch(a){Ne.error(a)}e("config",i,s)}async function Me(e,t,n,r,i){try{let s=[];if(i&&i["send_to"]){let e=i["send_to"];Array.isArray(e)||(e=[e]);const r=await Le(n);for(const n of e){const e=r.find((e=>e.measurementId===n)),i=e&&t[e.appId];if(!i){s=[];break}s.push(i)}}0===s.length&&(s=Object.values(t)),await Promise.all(s),e("event",r,i||{})}catch(s){Ne.error(s)}}function qe(e,t,n,r){async function i(i,s,o){try{"event"===i?await Me(e,t,n,s,o):"config"===i?await Fe(e,t,n,r,s,o):e("set",s)}catch(a){Ne.error(a)}}return i}function Ve(e,t,n,r,i){let s=function(...e){window[r].push(arguments)};return window[i]&&"function"===typeof window[i]&&(s=window[i]),window[i]=qe(s,e,t,n),{gtagCore:s,wrappedGtag:window[i]}}function Ue(){const e=window.document.getElementsByTagName("script");for(const t of Object.values(e))if(t.src&&t.src.includes(Oe))return t;return null}
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
 */const je={["already-exists"]:"A Firebase Analytics instance with the appId {$id}  already exists. Only one Firebase Analytics instance can be created for each appId.",["already-initialized"]:"initializeAnalytics() cannot be called again with different options than those it was initially called with. It can be called again with the same options to return the existing instance, or getAnalytics() can be used to get a reference to the already-intialized instance.",["already-initialized-settings"]:"Firebase Analytics has already been initialized.settings() must be called before initializing any Analytics instanceor it will have no effect.",["interop-component-reg-failed"]:"Firebase Analytics Interop Component failed to instantiate: {$reason}",["invalid-analytics-context"]:"Firebase Analytics is not supported in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["indexeddb-unavailable"]:"IndexedDB unavailable or restricted in this environment. Wrap initialization of analytics in analytics.isSupported() to prevent initialization in unsupported environments. Details: {$errorInfo}",["fetch-throttle"]:"The config fetch request timed out while in an exponential backoff state. Unix timestamp in milliseconds when fetch request throttling ends: {$throttleEndTimeMillis}.",["config-fetch-failed"]:"Dynamic config fetch failed: [{$httpStatus}] {$responseMessage}",["no-api-key"]:'The "apiKey" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid API key.',["no-app-id"]:'The "appId" field is empty in the local Firebase config. Firebase Analytics requires this field tocontain a valid app ID.'},Be=new s.LL("analytics","Analytics",je),$e=30,ze=1e3;class He{constructor(e={},t=ze){this.throttleMetadata=e,this.intervalMillis=t}getThrottleMetadata(e){return this.throttleMetadata[e]}setThrottleMetadata(e,t){this.throttleMetadata[e]=t}deleteThrottleMetadata(e){delete this.throttleMetadata[e]}}const Ke=new He;function We(e){return new Headers({Accept:"application/json","x-goog-api-key":e})}async function Ge(e){var t;const{appId:n,apiKey:r}=e,i={method:"GET",headers:We(r)},s=Re.replace("{app-id}",n),o=await fetch(s,i);if(200!==o.status&&304!==o.status){let e="";try{const n=await o.json();(null===(t=n.error)||void 0===t?void 0:t.message)&&(e=n.error.message)}catch(a){}throw Be.create("config-fetch-failed",{httpStatus:o.status,responseMessage:e})}return o.json()}async function Je(e,t=Ke,n){const{appId:r,apiKey:i,measurementId:s}=e.options;if(!r)throw Be.create("no-app-id");if(!i){if(s)return{measurementId:s,appId:r};throw Be.create("no-api-key")}const o=t.getThrottleMetadata(r)||{backoffCount:0,throttleEndTimeMillis:Date.now()},a=new Qe;return setTimeout((async()=>{a.abort()}),void 0!==n?n:xe),Ye({appId:r,apiKey:i,measurementId:s},o,a,t)}async function Ye(e,{throttleEndTimeMillis:t,backoffCount:n},r,i=Ke){const{appId:o,measurementId:a}=e;try{await Xe(r,t)}catch(l){if(a)return Ne.warn(`Timed out fetching this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l.message}]`),{appId:o,measurementId:a};throw l}try{const t=await Ge(e);return i.deleteThrottleMetadata(o),t}catch(l){if(!Ze(l)){if(i.deleteThrottleMetadata(o),a)return Ne.warn(`Failed to fetch this Firebase app's measurement ID from the server. Falling back to the measurement ID ${a} provided in the "measurementId" field in the local Firebase config. [${l.message}]`),{appId:o,measurementId:a};throw l}const t=503===Number(l.customData.httpStatus)?(0,s.$s)(n,i.intervalMillis,$e):(0,s.$s)(n,i.intervalMillis),c={throttleEndTimeMillis:Date.now()+t,backoffCount:n+1};return i.setThrottleMetadata(o,c),Ne.debug(`Calling attemptFetch again in ${t} millis`),Ye(e,c,r,i)}}function Xe(e,t){return new Promise(((n,r)=>{const i=Math.max(t-Date.now(),0),s=setTimeout(n,i);e.addEventListener((()=>{clearTimeout(s),r(Be.create("fetch-throttle",{throttleEndTimeMillis:t}))}))}))}function Ze(e){if(!(e instanceof s.ZR)||!e.customData)return!1;const t=Number(e.customData["httpStatus"]);return 429===t||500===t||503===t||504===t}class Qe{constructor(){this.listeners=[]}addEventListener(e){this.listeners.push(e)}abort(){this.listeners.forEach((e=>e()))}}
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
 */async function et(){if(!(0,s.hl)())return Ne.warn(Be.create("indexeddb-unavailable",{errorInfo:"IndexedDB is not available in this environment."}).message),!1;try{await(0,s.eu)()}catch(e){return Ne.warn(Be.create("indexeddb-unavailable",{errorInfo:e}).message),!1}return!0}async function tt(e,t,n,r,i,s,o){var a;const l=Je(e);l.then((t=>{n[t.measurementId]=t.appId,e.options.measurementId&&t.measurementId!==e.options.measurementId&&Ne.warn(`The measurement ID in the local Firebase config (${e.options.measurementId}) does not match the measurement ID fetched from the server (${t.measurementId}). To ensure analytics events are always sent to the correct Analytics property, update the measurement ID field in the local config or remove it from the local config.`)})).catch((e=>Ne.error(e))),t.push(l);const c=et().then((e=>e?r.getId():void 0)),[u,h]=await Promise.all([l,c]);Ue()||Pe(s,u.measurementId),i("js",new Date);const d=null!==(a=null===o||void 0===o?void 0:o.config)&&void 0!==a?a:{};return d[Ae]="firebase",d.update=!0,null!=h&&(d[Ce]=h),i("config",u.measurementId,d),u.measurementId}
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
 */class nt{constructor(e){this.app=e}_delete(){return delete rt[this.app.options.appId],Promise.resolve()}}let rt={},it=[];const st={};let ot,at,lt="dataLayer",ct="gtag",ut=!1;function ht(){const e=[];if((0,s.ru)()&&e.push("This is a browser extension environment."),(0,s.zI)()||e.push("Cookies are not available."),e.length>0){const t=e.map(((e,t)=>`(${t+1}) ${e}`)).join(" "),n=Be.create("invalid-analytics-context",{errorInfo:t});Ne.warn(n.message)}}function dt(e,t,n){ht();const r=e.options.appId;if(!r)throw Be.create("no-app-id");if(!e.options.apiKey){if(!e.options.measurementId)throw Be.create("no-api-key");Ne.warn(`The "apiKey" field is empty in the local Firebase config. This is needed to fetch the latest measurement ID for this Firebase app. Falling back to the measurement ID ${e.options.measurementId} provided in the "measurementId" field in the local Firebase config.`)}if(null!=rt[r])throw Be.create("already-exists",{id:r});if(!ut){De(lt);const{wrappedGtag:e,gtagCore:t}=Ve(rt,it,st,lt,ct);at=e,ot=t,ut=!0}rt[r]=tt(e,it,st,t,ot,lt,n);const i=new nt(e);return i}
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
 */async function ft(e,t,n,r,i){if(i&&i.global)e("event",n,r);else{const i=await t,s=Object.assign(Object.assign({},r),{send_to:i});e("event",n,s)}}function pt(e=(0,r.Mq)()){e=(0,s.m9)(e);const t=(0,r.qX)(e,Se);return t.isInitialized()?t.getImmediate():gt(e)}function gt(e,t={}){const n=(0,r.qX)(e,Se);if(n.isInitialized()){const e=n.getImmediate();if((0,s.vZ)(t,n.getOptions()))return e;throw Be.create("already-initialized")}const i=n.initialize({options:t});return i}function mt(e,t,n,r){e=(0,s.m9)(e),ft(at,rt[e.app.options.appId],t,n,r).catch((e=>Ne.error(e)))}const vt="@firebase/analytics",yt="0.7.4";function wt(){function e(e){try{const t=e.getProvider(Se).getImmediate();return{logEvent:(e,n,r)=>mt(t,e,n,r)}}catch(t){throw Be.create("interop-component-reg-failed",{reason:t})}}(0,r.Xd)(new o.wA(Se,((e,{options:t})=>{const n=e.getProvider("app").getImmediate(),r=e.getProvider("installations-internal").getImmediate();return dt(n,r,t)}),"PUBLIC")),(0,r.Xd)(new o.wA("analytics-internal",e,"PRIVATE")),(0,r.KN)(vt,yt),(0,r.KN)(vt,yt,"esm2017")}wt()},5720:(e,t,n)=>{"use strict";n.d(t,{ZF:()=>r.ZF});var r=n(9036),i="firebase",s="9.6.1";
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
(0,r.KN)(i,s,"app")},2559:(e,t,n)=>{"use strict";n.d(t,{v0:()=>ir,e5:()=>ot});var r=n(5479),i=n(9036);function s(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"===typeof Object.getOwnPropertySymbols){var i=0;for(r=Object.getOwnPropertySymbols(e);i<r.length;i++)t.indexOf(r[i])<0&&Object.prototype.propertyIsEnumerable.call(e,r[i])&&(n[r[i]]=e[r[i]])}return n}Object.create;Object.create;var o=n(1492),a=n(4676);function l(){return{["dependent-sdk-initialized-before-auth"]:"Another Firebase SDK was initialized and is trying to use Auth before Auth is initialized. Please be sure to call `initializeAuth` or `getAuth` before starting any other Firebase SDK."}}const c=l,u=new r.LL("auth","Firebase",l()),h=new o.Yd("@firebase/auth");function d(e,...t){h.logLevel<=o["in"].ERROR&&h.error(`Auth (${i.Jn}): ${e}`,...t)}
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
 */function T(e,t){const n=(0,i.qX)(e,"auth");if(n.isInitialized()){const e=n.getImmediate(),i=n.getOptions();if((0,r.vZ)(i,null!==t&&void 0!==t?t:{}))return e;f(e,"already-initialized")}const s=n.initialize({options:t});return s}function E(e,t){const n=(null===t||void 0===t?void 0:t.persistence)||[],r=(Array.isArray(n)?n:[n]).map(_);(null===t||void 0===t?void 0:t.errorMap)&&e._updateErrorMap(t.errorMap),e._initializeWithPersistence(r,null===t||void 0===t?void 0:t.popupRedirectResolver)}
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
 */function k(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.href)||""}function I(){return"http:"===S()||"https:"===S()}function S(){var e;return"undefined"!==typeof self&&(null===(e=self.location)||void 0===e?void 0:e.protocol)||null}
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
 */function C(){return!("undefined"!==typeof navigator&&navigator&&"onLine"in navigator&&"boolean"===typeof navigator.onLine&&(I()||(0,r.ru)()||"connection"in navigator))||navigator.onLine}function A(){if("undefined"===typeof navigator)return null;const e=navigator;return e.languages&&e.languages[0]||e.language||null}
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
 */class x{constructor(e,t){this.shortDelay=e,this.longDelay=t,w(t>e,"Short delay should be less than long delay!"),this.isMobile=(0,r.uI)()||(0,r.b$)()}get(){return C()?this.isMobile?this.longDelay:this.shortDelay:Math.min(5e3,this.shortDelay)}}
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
 */const N={["CREDENTIAL_MISMATCH"]:"custom-token-mismatch",["MISSING_CUSTOM_TOKEN"]:"internal-error",["INVALID_IDENTIFIER"]:"invalid-email",["MISSING_CONTINUE_URI"]:"internal-error",["INVALID_PASSWORD"]:"wrong-password",["MISSING_PASSWORD"]:"internal-error",["EMAIL_EXISTS"]:"email-already-in-use",["PASSWORD_LOGIN_DISABLED"]:"operation-not-allowed",["INVALID_IDP_RESPONSE"]:"invalid-credential",["INVALID_PENDING_TOKEN"]:"invalid-credential",["FEDERATED_USER_ID_ALREADY_LINKED"]:"credential-already-in-use",["MISSING_REQ_TYPE"]:"internal-error",["EMAIL_NOT_FOUND"]:"user-not-found",["RESET_PASSWORD_EXCEED_LIMIT"]:"too-many-requests",["EXPIRED_OOB_CODE"]:"expired-action-code",["INVALID_OOB_CODE"]:"invalid-action-code",["MISSING_OOB_CODE"]:"internal-error",["CREDENTIAL_TOO_OLD_LOGIN_AGAIN"]:"requires-recent-login",["INVALID_ID_TOKEN"]:"invalid-user-token",["TOKEN_EXPIRED"]:"user-token-expired",["USER_NOT_FOUND"]:"user-token-expired",["TOO_MANY_ATTEMPTS_TRY_LATER"]:"too-many-requests",["INVALID_CODE"]:"invalid-verification-code",["INVALID_SESSION_INFO"]:"invalid-verification-id",["INVALID_TEMPORARY_PROOF"]:"invalid-credential",["MISSING_SESSION_INFO"]:"missing-verification-id",["SESSION_EXPIRED"]:"code-expired",["MISSING_ANDROID_PACKAGE_NAME"]:"missing-android-pkg-name",["UNAUTHORIZED_DOMAIN"]:"unauthorized-continue-uri",["INVALID_OAUTH_CLIENT_ID"]:"invalid-oauth-client-id",["ADMIN_ONLY_OPERATION"]:"admin-restricted-operation",["INVALID_MFA_PENDING_CREDENTIAL"]:"invalid-multi-factor-session",["MFA_ENROLLMENT_NOT_FOUND"]:"multi-factor-info-not-found",["MISSING_MFA_ENROLLMENT_ID"]:"missing-multi-factor-info",["MISSING_MFA_PENDING_CREDENTIAL"]:"missing-multi-factor-session",["SECOND_FACTOR_EXISTS"]:"second-factor-already-in-use",["SECOND_FACTOR_LIMIT_EXCEEDED"]:"maximum-second-factor-count-exceeded",["BLOCKING_FUNCTION_ERROR_RESPONSE"]:"internal-error"},L=new x(3e4,6e4);
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
 */function P(e,t){return e.tenantId&&!t.tenantId?Object.assign(Object.assign({},t),{tenantId:e.tenantId}):t}async function D(e,t,n,i,s={}){return F(e,s,(async()=>{let s={},o={};i&&("GET"===t?o=i:s={body:JSON.stringify(i)});const a=(0,r.xO)(Object.assign({key:e.config.apiKey},o)).slice(1),l=await e._getAdditionalHeaders();return l["Content-Type"]="application/json",e.languageCode&&(l["X-Firebase-Locale"]=e.languageCode),O.fetch()(q(e,e.config.apiHost,n,a),Object.assign({method:t,headers:l,referrerPolicy:"no-referrer"},s))}))}async function F(e,t,n){e._canInitEmulator=!1;const i=Object.assign(Object.assign({},N),t);try{const t=new V(e),r=await Promise.race([n(),t.promise]);t.clearNetworkTimeout();const s=await r.json();if("needConfirmation"in s)throw U(e,"account-exists-with-different-credential",s);if(r.ok&&!("errorMessage"in s))return s;{const t=r.ok?s.errorMessage:s.error.message,[n,o]=t.split(" : ");if("FEDERATED_USER_ID_ALREADY_LINKED"===n)throw U(e,"credential-already-in-use",s);if("EMAIL_EXISTS"===n)throw U(e,"email-already-in-use",s);const a=i[n]||n.toLowerCase().replace(/[_\s]+/g,"-");if(o)throw g(e,a,o);f(e,a)}}catch(s){if(s instanceof r.ZR)throw s;f(e,"network-request-failed")}}async function M(e,t,n,r,i={}){const s=await D(e,t,n,r,i);return"mfaPendingCredential"in s&&f(e,"multi-factor-auth-required",{_serverResponse:s}),s}function q(e,t,n,r){const i=`${t}${n}?${r}`;return e.config.emulator?R(e.config,i):`${e.config.apiScheme}://${i}`}class V{constructor(e){this.auth=e,this.timer=null,this.promise=new Promise(((e,t)=>{this.timer=setTimeout((()=>t(p(this.auth,"timeout"))),L.get())}))}clearNetworkTimeout(){clearTimeout(this.timer)}}function U(e,t,n){const r={appName:e.name};n.email&&(r.email=n.email),n.phoneNumber&&(r.phoneNumber=n.phoneNumber);const i=p(e,t,r);return i.customData._tokenResponse=n,i}
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
 */async function j(e,t){return D(e,"POST","/v1/accounts:delete",t)}async function B(e,t){return D(e,"POST","/v1/accounts:lookup",t)}
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
 */async function z(e,t=!1){const n=(0,r.m9)(e),i=await n.getIdToken(t),s=K(i);v(s&&s.exp&&s.auth_time&&s.iat,n.auth,"internal-error");const o="object"===typeof s.firebase?s.firebase:void 0,a=null===o||void 0===o?void 0:o["sign_in_provider"];return{claims:s,token:i,authTime:$(H(s.auth_time)),issuedAtTime:$(H(s.iat)),expirationTime:$(H(s.exp)),signInProvider:a||null,signInSecondFactor:(null===o||void 0===o?void 0:o["sign_in_second_factor"])||null}}function H(e){return 1e3*Number(e)}function K(e){const[t,n,i]=e.split(".");if(void 0===t||void 0===n||void 0===i)return d("JWT malformed, contained fewer than 3 sections"),null;try{const e=(0,r.tV)(n);return e?JSON.parse(e):(d("Failed to decode base64 JWT payload"),null)}catch(s){return d("Caught error parsing JWT payload as JSON",s),null}}function W(e){const t=K(e);return v(t,"internal-error"),v("undefined"!==typeof t.exp,"internal-error"),v("undefined"!==typeof t.iat,"internal-error"),Number(t.exp)-Number(t.iat)}
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
 */async function G(e,t,n=!1){if(n)return t;try{return await t}catch(i){throw i instanceof r.ZR&&J(i)&&e.auth.currentUser===e&&await e.auth.signOut(),i}}function J({code:e}){return"auth/user-disabled"===e||"auth/user-token-expired"===e}
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
 */class Y{constructor(e){this.user=e,this.isRunning=!1,this.timerId=null,this.errorBackoff=3e4}_start(){this.isRunning||(this.isRunning=!0,this.schedule())}_stop(){this.isRunning&&(this.isRunning=!1,null!==this.timerId&&clearTimeout(this.timerId))}getInterval(e){var t;if(e){const e=this.errorBackoff;return this.errorBackoff=Math.min(2*this.errorBackoff,96e4),e}{this.errorBackoff=3e4;const e=null!==(t=this.user.stsTokenManager.expirationTime)&&void 0!==t?t:0,n=e-Date.now()-3e5;return Math.max(0,n)}}schedule(e=!1){if(!this.isRunning)return;const t=this.getInterval(e);this.timerId=setTimeout((async()=>{await this.iteration()}),t)}async iteration(){try{await this.user.getIdToken(!0)}catch(e){return void("auth/network-request-failed"===e.code&&this.schedule(!0))}this.schedule()}}
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
 */class X{constructor(e,t){this.createdAt=e,this.lastLoginAt=t,this._initializeTime()}_initializeTime(){this.lastSignInTime=$(this.lastLoginAt),this.creationTime=$(this.createdAt)}_copy(e){this.createdAt=e.createdAt,this.lastLoginAt=e.lastLoginAt,this._initializeTime()}toJSON(){return{createdAt:this.createdAt,lastLoginAt:this.lastLoginAt}}}
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
 */async function Z(e){var t;const n=e.auth,r=await e.getIdToken(),i=await G(e,B(n,{idToken:r}));v(null===i||void 0===i?void 0:i.users.length,n,"internal-error");const s=i.users[0];e._notifyReloadListener(s);const o=(null===(t=s.providerUserInfo)||void 0===t?void 0:t.length)?te(s.providerUserInfo):[],a=ee(e.providerData,o),l=e.isAnonymous,c=!(e.email&&s.passwordHash)&&!(null===a||void 0===a?void 0:a.length),u=!!l&&c,h={uid:s.localId,displayName:s.displayName||null,photoURL:s.photoUrl||null,email:s.email||null,emailVerified:s.emailVerified||!1,phoneNumber:s.phoneNumber||null,tenantId:s.tenantId||null,providerData:a,metadata:new X(s.createdAt,s.lastLoginAt),isAnonymous:u};Object.assign(e,h)}async function Q(e){const t=(0,r.m9)(e);await Z(t),await t.auth._persistUserIfCurrent(t),t.auth._notifyListenersIfCurrent(t)}function ee(e,t){const n=e.filter((e=>!t.some((t=>t.providerId===e.providerId))));return[...n,...t]}function te(e){return e.map((e=>{var{providerId:t}=e,n=s(e,["providerId"]);return{providerId:t,uid:n.rawId||"",displayName:n.displayName||null,email:n.email||null,phoneNumber:n.phoneNumber||null,photoURL:n.photoUrl||null}}))}
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
 */function ie(e,t){v("string"===typeof e||"undefined"===typeof e,"internal-error",{appName:t})}class se{constructor(e){var{uid:t,auth:n,stsTokenManager:r}=e,i=s(e,["uid","auth","stsTokenManager"]);this.providerId="firebase",this.emailVerified=!1,this.isAnonymous=!1,this.tenantId=null,this.providerData=[],this.proactiveRefresh=new Y(this),this.reloadUserInfo=null,this.reloadListener=null,this.uid=t,this.auth=n,this.stsTokenManager=r,this.accessToken=r.accessToken,this.displayName=i.displayName||null,this.email=i.email||null,this.emailVerified=i.emailVerified||!1,this.phoneNumber=i.phoneNumber||null,this.photoURL=i.photoURL||null,this.isAnonymous=i.isAnonymous||!1,this.tenantId=i.tenantId||null,this.metadata=new X(i.createdAt||void 0,i.lastLoginAt||void 0)}async getIdToken(e){const t=await G(this,this.stsTokenManager.getToken(this.auth,e));return v(t,this.auth,"internal-error"),this.accessToken!==t&&(this.accessToken=t,await this.auth._persistUserIfCurrent(this),this.auth._notifyListenersIfCurrent(this)),t}getIdTokenResult(e){return z(this,e)}reload(){return Q(this)}_assign(e){this!==e&&(v(this.uid===e.uid,this.auth,"internal-error"),this.displayName=e.displayName,this.photoURL=e.photoURL,this.email=e.email,this.emailVerified=e.emailVerified,this.phoneNumber=e.phoneNumber,this.isAnonymous=e.isAnonymous,this.tenantId=e.tenantId,this.providerData=e.providerData.map((e=>Object.assign({},e))),this.metadata._copy(e.metadata),this.stsTokenManager._assign(e.stsTokenManager))}_clone(e){return new se(Object.assign(Object.assign({},this),{auth:e,stsTokenManager:this.stsTokenManager._clone()}))}_onReload(e){v(!this.reloadListener,this.auth,"internal-error"),this.reloadListener=e,this.reloadUserInfo&&(this._notifyReloadListener(this.reloadUserInfo),this.reloadUserInfo=null)}_notifyReloadListener(e){this.reloadListener?this.reloadListener(e):this.reloadUserInfo=e}_startProactiveRefresh(){this.proactiveRefresh._start()}_stopProactiveRefresh(){this.proactiveRefresh._stop()}async _updateTokensIfNecessary(e,t=!1){let n=!1;e.idToken&&e.idToken!==this.stsTokenManager.accessToken&&(this.stsTokenManager.updateFromServerResponse(e),n=!0),t&&await Z(this),await this.auth._persistUserIfCurrent(this),n&&this.auth._notifyListenersIfCurrent(this)}async delete(){const e=await this.getIdToken();return await G(this,j(this.auth,{idToken:e})),this.stsTokenManager.clearRefreshToken(),this.auth.signOut()}toJSON(){return Object.assign(Object.assign({uid:this.uid,email:this.email||void 0,emailVerified:this.emailVerified,displayName:this.displayName||void 0,isAnonymous:this.isAnonymous,photoURL:this.photoURL||void 0,phoneNumber:this.phoneNumber||void 0,tenantId:this.tenantId||void 0,providerData:this.providerData.map((e=>Object.assign({},e))),stsTokenManager:this.stsTokenManager.toJSON(),_redirectEventId:this._redirectEventId},this.metadata.toJSON()),{apiKey:this.auth.config.apiKey,appName:this.auth.name})}get refreshToken(){return this.stsTokenManager.refreshToken||""}static _fromJSON(e,t){var n,r,i,s,o,a,l,c;const u=null!==(n=t.displayName)&&void 0!==n?n:void 0,h=null!==(r=t.email)&&void 0!==r?r:void 0,d=null!==(i=t.phoneNumber)&&void 0!==i?i:void 0,f=null!==(s=t.photoURL)&&void 0!==s?s:void 0,p=null!==(o=t.tenantId)&&void 0!==o?o:void 0,g=null!==(a=t._redirectEventId)&&void 0!==a?a:void 0,m=null!==(l=t.createdAt)&&void 0!==l?l:void 0,y=null!==(c=t.lastLoginAt)&&void 0!==c?c:void 0,{uid:w,emailVerified:b,isAnonymous:_,providerData:T,stsTokenManager:E}=t;v(w&&E,e,"internal-error");const k=re.fromJSON(this.name,E);v("string"===typeof w,e,"internal-error"),ie(u,e.name),ie(h,e.name),v("boolean"===typeof b,e,"internal-error"),v("boolean"===typeof _,e,"internal-error"),ie(d,e.name),ie(f,e.name),ie(p,e.name),ie(g,e.name),ie(m,e.name),ie(y,e.name);const I=new se({uid:w,auth:e,email:h,emailVerified:b,displayName:u,isAnonymous:_,photoURL:f,phoneNumber:d,tenantId:p,stsTokenManager:k,createdAt:m,lastLoginAt:y});return T&&Array.isArray(T)&&(I.providerData=T.map((e=>Object.assign({},e)))),g&&(I._redirectEventId=g),I}static async _fromIdTokenResponse(e,t,n=!1){const r=new re;r.updateFromServerResponse(t);const i=new se({uid:t.localId,auth:e,stsTokenManager:r,isAnonymous:n});return await Z(i),i}}
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
 */function ue(e){const t=e.toLowerCase();if(t.includes("opera/")||t.includes("opr/")||t.includes("opios/"))return"Opera";if(pe(t))return"IEMobile";if(t.includes("msie")||t.includes("trident/"))return"IE";if(t.includes("edge/"))return"Edge";if(he(t))return"Firefox";if(t.includes("silk/"))return"Silk";if(me(t))return"Blackberry";if(ve(t))return"Webos";if(de(t))return"Safari";if((t.includes("chrome/")||fe(t))&&!t.includes("edge/"))return"Chrome";if(ge(t))return"Android";{const t=/([a-zA-Z\d\.]+)\/[a-zA-Z\d\.]*$/,n=e.match(t);if(2===(null===n||void 0===n?void 0:n.length))return n[1]}return"Other"}function he(e=(0,r.z$)()){return/firefox\//i.test(e)}function de(e=(0,r.z$)()){const t=e.toLowerCase();return t.includes("safari/")&&!t.includes("chrome/")&&!t.includes("crios/")&&!t.includes("android")}function fe(e=(0,r.z$)()){return/crios\//i.test(e)}function pe(e=(0,r.z$)()){return/iemobile/i.test(e)}function ge(e=(0,r.z$)()){return/android/i.test(e)}function me(e=(0,r.z$)()){return/blackberry/i.test(e)}function ve(e=(0,r.z$)()){return/webos/i.test(e)}function ye(e=(0,r.z$)()){return/iphone|ipad|ipod/i.test(e)}function we(e=(0,r.z$)()){var t;return ye(e)&&!!(null===(t=window.navigator)||void 0===t?void 0:t.standalone)}function be(){return(0,r.w1)()&&10===document.documentMode}function _e(e=(0,r.z$)()){return ye(e)||ge(e)||ve(e)||me(e)||/windows phone/i.test(e)||pe(e)}function Te(){try{return!(!window||window===window.top)}catch(e){return!1}}
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
 */function Ee(e,t=[]){let n;switch(e){case"Browser":n=ue((0,r.z$)());break;case"Worker":n=`${ue((0,r.z$)())}-${e}`;break;default:n=e}const s=t.length?t.join(","):"FirebaseCore-web";return`${n}/JsCore/${i.Jn}/${s}`}
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
 */class ke{constructor(e,t){this.app=e,this.config=t,this.currentUser=null,this.emulatorConfig=null,this.operations=Promise.resolve(),this.authStateSubscription=new Se(this),this.idTokenSubscription=new Se(this),this.redirectUser=null,this.isProactiveRefreshEnabled=!1,this._canInitEmulator=!0,this._isInitialized=!1,this._deleted=!1,this._initializationPromise=null,this._popupRedirectResolver=null,this._errorFactory=u,this.lastNotifiedUid=void 0,this.languageCode=null,this.tenantId=null,this.settings={appVerificationDisabledForTesting:!1},this.frameworks=[],this.name=e.name,this.clientVersion=t.sdkClientVersion}_initializeWithPersistence(e,t){return t&&(this._popupRedirectResolver=_(t)),this._initializationPromise=this.queue((async()=>{var n,r;if(!this._deleted&&(this.persistenceManager=await ce.create(this,e),!this._deleted)){if(null===(n=this._popupRedirectResolver)||void 0===n?void 0:n._shouldInitProactively)try{await this._popupRedirectResolver._initialize(this)}catch(i){}await this.initializeCurrentUser(t),this.lastNotifiedUid=(null===(r=this.currentUser)||void 0===r?void 0:r.uid)||null,this._deleted||(this._isInitialized=!0)}})),this._initializationPromise}async _onStorageEvent(){if(this._deleted)return;const e=await this.assertedPersistence.getCurrentUser();return this.currentUser||e?this.currentUser&&e&&this.currentUser.uid===e.uid?(this._currentUser._assign(e),void await this.currentUser.getIdToken()):void await this._updateCurrentUser(e):void 0}async initializeCurrentUser(e){var t;let n=await this.assertedPersistence.getCurrentUser();if(e&&this.config.authDomain){await this.getOrInitRedirectPersistenceManager();const r=null===(t=this.redirectUser)||void 0===t?void 0:t._redirectEventId,i=null===n||void 0===n?void 0:n._redirectEventId,s=await this.tryRedirectSignIn(e);r&&r!==i||!(null===s||void 0===s?void 0:s.user)||(n=s.user)}return n?n._redirectEventId?(v(this._popupRedirectResolver,this,"argument-error"),await this.getOrInitRedirectPersistenceManager(),this.redirectUser&&this.redirectUser._redirectEventId===n._redirectEventId?this.directlySetCurrentUser(n):this.reloadAndSetCurrentUserOrClear(n)):this.reloadAndSetCurrentUserOrClear(n):this.directlySetCurrentUser(null)}async tryRedirectSignIn(e){let t=null;try{t=await this._popupRedirectResolver._completeRedirectFn(this,e,!0)}catch(n){await this._setRedirectUser(null)}return t}async reloadAndSetCurrentUserOrClear(e){try{await Z(e)}catch(t){if("auth/network-request-failed"!==t.code)return this.directlySetCurrentUser(null)}return this.directlySetCurrentUser(e)}useDeviceLanguage(){this.languageCode=A()}async _delete(){this._deleted=!0}async updateCurrentUser(e){const t=e?(0,r.m9)(e):null;return t&&v(t.auth.config.apiKey===this.config.apiKey,this,"invalid-user-token"),this._updateCurrentUser(t&&t._clone(this))}async _updateCurrentUser(e){if(!this._deleted)return e&&v(this.tenantId===e.tenantId,this,"tenant-id-mismatch"),this.queue((async()=>{await this.directlySetCurrentUser(e),this.notifyAuthListeners()}))}async signOut(){return(this.redirectPersistenceManager||this._popupRedirectResolver)&&await this._setRedirectUser(null),this._updateCurrentUser(null)}setPersistence(e){return this.queue((async()=>{await this.assertedPersistence.setPersistence(_(e))}))}_getPersistence(){return this.assertedPersistence.persistence.type}_updateErrorMap(e){this._errorFactory=new r.LL("auth","Firebase",e())}onAuthStateChanged(e,t,n){return this.registerStateListener(this.authStateSubscription,e,t,n)}onIdTokenChanged(e,t,n){return this.registerStateListener(this.idTokenSubscription,e,t,n)}toJSON(){var e;return{apiKey:this.config.apiKey,authDomain:this.config.authDomain,appName:this.name,currentUser:null===(e=this._currentUser)||void 0===e?void 0:e.toJSON()}}async _setRedirectUser(e,t){const n=await this.getOrInitRedirectPersistenceManager(t);return null===e?n.removeCurrentUser():n.setCurrentUser(e)}async getOrInitRedirectPersistenceManager(e){if(!this.redirectPersistenceManager){const t=e&&_(e)||this._popupRedirectResolver;v(t,this,"argument-error"),this.redirectPersistenceManager=await ce.create(this,[_(t._redirectPersistence)],"redirectUser"),this.redirectUser=await this.redirectPersistenceManager.getCurrentUser()}return this.redirectPersistenceManager}async _redirectUserForId(e){var t,n;return this._isInitialized&&await this.queue((async()=>{})),(null===(t=this._currentUser)||void 0===t?void 0:t._redirectEventId)===e?this._currentUser:(null===(n=this.redirectUser)||void 0===n?void 0:n._redirectEventId)===e?this.redirectUser:null}async _persistUserIfCurrent(e){if(e===this.currentUser)return this.queue((async()=>this.directlySetCurrentUser(e)))}_notifyListenersIfCurrent(e){e===this.currentUser&&this.notifyAuthListeners()}_key(){return`${this.config.authDomain}:${this.config.apiKey}:${this.name}`}_startProactiveRefresh(){this.isProactiveRefreshEnabled=!0,this.currentUser&&this._currentUser._startProactiveRefresh()}_stopProactiveRefresh(){this.isProactiveRefreshEnabled=!1,this.currentUser&&this._currentUser._stopProactiveRefresh()}get _currentUser(){return this.currentUser}notifyAuthListeners(){var e,t;if(!this._isInitialized)return;this.idTokenSubscription.next(this.currentUser);const n=null!==(t=null===(e=this.currentUser)||void 0===e?void 0:e.uid)&&void 0!==t?t:null;this.lastNotifiedUid!==n&&(this.lastNotifiedUid=n,this.authStateSubscription.next(this.currentUser))}registerStateListener(e,t,n,r){if(this._deleted)return()=>{};const i="function"===typeof t?t:t.next.bind(t),s=this._isInitialized?Promise.resolve():this._initializationPromise;return v(s,this,"internal-error"),s.then((()=>i(this.currentUser))),"function"===typeof t?e.addObserver(t,n,r):e.addObserver(t)}async directlySetCurrentUser(e){this.currentUser&&this.currentUser!==e&&(this._currentUser._stopProactiveRefresh(),e&&this.isProactiveRefreshEnabled&&e._startProactiveRefresh()),this.currentUser=e,e?await this.assertedPersistence.setCurrentUser(e):await this.assertedPersistence.removeCurrentUser()}queue(e){return this.operations=this.operations.then(e,e),this.operations}get assertedPersistence(){return v(this.persistenceManager,this,"internal-error"),this.persistenceManager}_logFramework(e){e&&!this.frameworks.includes(e)&&(this.frameworks.push(e),this.frameworks.sort(),this.clientVersion=Ee(this.config.clientPlatform,this._getFrameworks()))}_getFrameworks(){return this.frameworks}async _getAdditionalHeaders(){const e={["X-Client-Version"]:this.clientVersion};return this.app.options.appId&&(e["X-Firebase-gmpid"]=this.app.options.appId),e}}function Ie(e){return(0,r.m9)(e)}class Se{constructor(e){this.auth=e,this.observer=null,this.addObserver=(0,r.ne)((e=>this.observer=e))}get next(){return v(this.observer,this.auth,"internal-error"),this.observer.next.bind(this.observer)}}
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
class Ce{constructor(e,t){this.providerId=e,this.signInMethod=t}toJSON(){return y("not implemented")}_getIdTokenResponse(e){return y("not implemented")}_linkToIdToken(e,t){return y("not implemented")}_getReauthenticationResolver(e){return y("not implemented")}}
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
async function xe(e,t){return M(e,"POST","/v1/accounts:signInWithPassword",P(e,t))}
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
async function Re(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}async function Oe(e,t){return M(e,"POST","/v1/accounts:signInWithEmailLink",P(e,t))}
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
 */class Ne extends Ce{constructor(e,t,n,r=null){super("password",n),this._email=e,this._password=t,this._tenantId=r}static _fromEmailAndPassword(e,t){return new Ne(e,t,"password")}static _fromEmailAndCode(e,t,n=null){return new Ne(e,t,"emailLink",n)}toJSON(){return{email:this._email,password:this._password,signInMethod:this.signInMethod,tenantId:this._tenantId}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e;if((null===t||void 0===t?void 0:t.email)&&(null===t||void 0===t?void 0:t.password)){if("password"===t.signInMethod)return this._fromEmailAndPassword(t.email,t.password);if("emailLink"===t.signInMethod)return this._fromEmailAndCode(t.email,t.password,t.tenantId)}return null}async _getIdTokenResponse(e){switch(this.signInMethod){case"password":return xe(e,{returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Re(e,{email:this._email,oobCode:this._password});default:f(e,"internal-error")}}async _linkToIdToken(e,t){switch(this.signInMethod){case"password":return Ae(e,{idToken:t,returnSecureToken:!0,email:this._email,password:this._password});case"emailLink":return Oe(e,{idToken:t,email:this._email,oobCode:this._password});default:f(e,"internal-error")}}_getReauthenticationResolver(e){return this._getIdTokenResponse(e)}}
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
 */async function Le(e,t){return M(e,"POST","/v1/accounts:signInWithIdp",P(e,t))}
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
 */const Pe="http://localhost";class De extends Ce{constructor(){super(...arguments),this.pendingToken=null}static _fromParams(e){const t=new De(e.providerId,e.signInMethod);return e.idToken||e.accessToken?(e.idToken&&(t.idToken=e.idToken),e.accessToken&&(t.accessToken=e.accessToken),e.nonce&&!e.pendingToken&&(t.nonce=e.nonce),e.pendingToken&&(t.pendingToken=e.pendingToken)):e.oauthToken&&e.oauthTokenSecret?(t.accessToken=e.oauthToken,t.secret=e.oauthTokenSecret):f("argument-error"),t}toJSON(){return{idToken:this.idToken,accessToken:this.accessToken,secret:this.secret,nonce:this.nonce,pendingToken:this.pendingToken,providerId:this.providerId,signInMethod:this.signInMethod}}static fromJSON(e){const t="string"===typeof e?JSON.parse(e):e,{providerId:n,signInMethod:r}=t,i=s(t,["providerId","signInMethod"]);if(!n||!r)return null;const o=new De(n,r);return o.idToken=i.idToken||void 0,o.accessToken=i.accessToken||void 0,o.secret=i.secret,o.nonce=i.nonce,o.pendingToken=i.pendingToken||null,o}_getIdTokenResponse(e){const t=this.buildRequest();return Le(e,t)}_linkToIdToken(e,t){const n=this.buildRequest();return n.idToken=t,Le(e,n)}_getReauthenticationResolver(e){const t=this.buildRequest();return t.autoCreate=!1,Le(e,t)}buildRequest(){const e={requestUri:Pe,returnSecureToken:!0};if(this.pendingToken)e.pendingToken=this.pendingToken;else{const t={};this.idToken&&(t["id_token"]=this.idToken),this.accessToken&&(t["access_token"]=this.accessToken),this.secret&&(t["oauth_token_secret"]=this.secret),t["providerId"]=this.providerId,this.nonce&&!this.pendingToken&&(t["nonce"]=this.nonce),e.postBody=(0,r.xO)(t)}return e}}
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
 */async function Fe(e,t){return D(e,"POST","/v1/accounts:sendVerificationCode",P(e,t))}async function Me(e,t){return M(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t))}async function qe(e,t){const n=await M(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,t));if(n.temporaryProof)throw U(e,"account-exists-with-different-credential",n);return n}const Ve={["USER_NOT_FOUND"]:"user-not-found"};async function Ue(e,t){const n=Object.assign(Object.assign({},t),{operation:"REAUTH"});return M(e,"POST","/v1/accounts:signInWithPhoneNumber",P(e,n),Ve)}
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
 */class je extends Ce{constructor(e){super("phone","phone"),this.params=e}static _fromVerification(e,t){return new je({verificationId:e,verificationCode:t})}static _fromTokenResponse(e,t){return new je({phoneNumber:e,temporaryProof:t})}_getIdTokenResponse(e){return Me(e,this._makeVerificationRequest())}_linkToIdToken(e,t){return qe(e,Object.assign({idToken:t},this._makeVerificationRequest()))}_getReauthenticationResolver(e){return Ue(e,this._makeVerificationRequest())}_makeVerificationRequest(){const{temporaryProof:e,phoneNumber:t,verificationId:n,verificationCode:r}=this.params;return e&&t?{temporaryProof:e,phoneNumber:t}:{sessionInfo:n,code:r}}toJSON(){const e={providerId:this.providerId};return this.params.phoneNumber&&(e.phoneNumber=this.params.phoneNumber),this.params.temporaryProof&&(e.temporaryProof=this.params.temporaryProof),this.params.verificationCode&&(e.verificationCode=this.params.verificationCode),this.params.verificationId&&(e.verificationId=this.params.verificationId),e}static fromJSON(e){"string"===typeof e&&(e=JSON.parse(e));const{verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}=e;return n||t||r||i?new je({verificationId:t,verificationCode:n,phoneNumber:r,temporaryProof:i}):null}}
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
 */function Be(e){switch(e){case"recoverEmail":return"RECOVER_EMAIL";case"resetPassword":return"PASSWORD_RESET";case"signIn":return"EMAIL_SIGNIN";case"verifyEmail":return"VERIFY_EMAIL";case"verifyAndChangeEmail":return"VERIFY_AND_CHANGE_EMAIL";case"revertSecondFactorAddition":return"REVERT_SECOND_FACTOR_ADDITION";default:return null}}function $e(e){const t=(0,r.zd)((0,r.pd)(e))["link"],n=t?(0,r.zd)((0,r.pd)(t))["deep_link_id"]:null,i=(0,r.zd)((0,r.pd)(e))["deep_link_id"],s=i?(0,r.zd)((0,r.pd)(i))["link"]:null;return s||i||n||t||e}class ze{constructor(e){var t,n,i,s,o,a;const l=(0,r.zd)((0,r.pd)(e)),c=null!==(t=l["apiKey"])&&void 0!==t?t:null,u=null!==(n=l["oobCode"])&&void 0!==n?n:null,h=Be(null!==(i=l["mode"])&&void 0!==i?i:null);v(c&&u&&h,"argument-error"),this.apiKey=c,this.operation=h,this.code=u,this.continueUrl=null!==(s=l["continueUrl"])&&void 0!==s?s:null,this.languageCode=null!==(o=l["languageCode"])&&void 0!==o?o:null,this.tenantId=null!==(a=l["tenantId"])&&void 0!==a?a:null}static parseLink(e){const t=$e(e);try{return new ze(t)}catch(n){return null}}}
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
class He{constructor(){this.providerId=He.PROVIDER_ID}static credential(e,t){return Ne._fromEmailAndPassword(e,t)}static credentialWithLink(e,t){const n=ze.parseLink(t);return v(n,"argument-error"),Ne._fromEmailAndCode(e,n.code,n.tenantId)}}He.PROVIDER_ID="password",He.EMAIL_PASSWORD_SIGN_IN_METHOD="password",He.EMAIL_LINK_SIGN_IN_METHOD="emailLink";
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
class Ke{constructor(e){this.providerId=e,this.defaultLanguageCode=null,this.customParameters={}}setDefaultLanguage(e){this.defaultLanguageCode=e}setCustomParameters(e){return this.customParameters=e,this}getCustomParameters(){return this.customParameters}}
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
 */class We extends Ke{constructor(){super(...arguments),this.scopes=[]}addScope(e){return this.scopes.includes(e)||this.scopes.push(e),this}getScopes(){return[...this.scopes]}}
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
class Ge extends We{constructor(){super("facebook.com")}static credential(e){return De._fromParams({providerId:Ge.PROVIDER_ID,signInMethod:Ge.FACEBOOK_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ge.credentialFromTaggedObject(e)}static credentialFromError(e){return Ge.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ge.credential(e.oauthAccessToken)}catch(t){return null}}}Ge.FACEBOOK_SIGN_IN_METHOD="facebook.com",Ge.PROVIDER_ID="facebook.com";
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
class Je extends We{constructor(){super("google.com"),this.addScope("profile")}static credential(e,t){return De._fromParams({providerId:Je.PROVIDER_ID,signInMethod:Je.GOOGLE_SIGN_IN_METHOD,idToken:e,accessToken:t})}static credentialFromResult(e){return Je.credentialFromTaggedObject(e)}static credentialFromError(e){return Je.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthIdToken:t,oauthAccessToken:n}=e;if(!t&&!n)return null;try{return Je.credential(t,n)}catch(r){return null}}}Je.GOOGLE_SIGN_IN_METHOD="google.com",Je.PROVIDER_ID="google.com";
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
class Ye extends We{constructor(){super("github.com")}static credential(e){return De._fromParams({providerId:Ye.PROVIDER_ID,signInMethod:Ye.GITHUB_SIGN_IN_METHOD,accessToken:e})}static credentialFromResult(e){return Ye.credentialFromTaggedObject(e)}static credentialFromError(e){return Ye.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e||!("oauthAccessToken"in e))return null;if(!e.oauthAccessToken)return null;try{return Ye.credential(e.oauthAccessToken)}catch(t){return null}}}Ye.GITHUB_SIGN_IN_METHOD="github.com",Ye.PROVIDER_ID="github.com";
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
class Xe extends We{constructor(){super("twitter.com")}static credential(e,t){return De._fromParams({providerId:Xe.PROVIDER_ID,signInMethod:Xe.TWITTER_SIGN_IN_METHOD,oauthToken:e,oauthTokenSecret:t})}static credentialFromResult(e){return Xe.credentialFromTaggedObject(e)}static credentialFromError(e){return Xe.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{oauthAccessToken:t,oauthTokenSecret:n}=e;if(!t||!n)return null;try{return Xe.credential(t,n)}catch(r){return null}}}Xe.TWITTER_SIGN_IN_METHOD="twitter.com",Xe.PROVIDER_ID="twitter.com";
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
class Ze{constructor(e){this.user=e.user,this.providerId=e.providerId,this._tokenResponse=e._tokenResponse,this.operationType=e.operationType}static async _fromIdTokenResponse(e,t,n,r=!1){const i=await se._fromIdTokenResponse(e,n,r),s=Qe(n),o=new Ze({user:i,providerId:s,_tokenResponse:n,operationType:t});return o}static async _forOperation(e,t,n){await e._updateTokensIfNecessary(n,!0);const r=Qe(n);return new Ze({user:e,providerId:r,_tokenResponse:n,operationType:t})}}function Qe(e){return e.providerId?e.providerId:"phoneNumber"in e?"phone":null}
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
class et extends r.ZR{constructor(e,t,n,r){var i;super(t.code,t.message),this.operationType=n,this.user=r,Object.setPrototypeOf(this,et.prototype),this.customData={appName:e.name,tenantId:null!==(i=e.tenantId)&&void 0!==i?i:void 0,_serverResponse:t.customData._serverResponse,operationType:n}}static _fromErrorAndOperation(e,t,n,r){return new et(e,t,n,r)}}function tt(e,t,n,r){const i="reauthenticate"===t?n._getReauthenticationResolver(e):n._getIdTokenResponse(e);return i.catch((n=>{if("auth/multi-factor-auth-required"===n.code)throw et._fromErrorAndOperation(e,n,t,r);throw n}))}
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
 */async function nt(e,t,n=!1){const r=await G(e,t._linkToIdToken(e.auth,await e.getIdToken()),n);return Ze._forOperation(e,"link",r)}
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
async function rt(e,t,n=!1){const{auth:r}=e,i="reauthenticate";try{const s=await G(e,tt(r,i,t,e),n);v(s.idToken,r,"internal-error");const o=K(s.idToken);v(o,r,"internal-error");const{sub:a}=o;return v(e.uid===a,r,"user-mismatch"),Ze._forOperation(e,i,s)}catch(s){throw"auth/user-not-found"===(null===s||void 0===s?void 0:s.code)&&f(r,"user-mismatch"),s}}
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
 */async function it(e,t,n=!1){const r="signIn",i=await tt(e,r,t),s=await Ze._fromIdTokenResponse(e,r,i);return n||await e._updateCurrentUser(s.user),s}async function st(e,t){return it(Ie(e),t)}function ot(e,t,n){return st((0,r.m9)(e),He.credential(t,n))}
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
function at(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:start",P(e,t))}function lt(e,t){return D(e,"POST","/v2/accounts/mfaEnrollment:finalize",P(e,t))}new WeakMap;const ct="__sak";
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
 */class ut{constructor(e,t){this.storageRetriever=e,this.type=t}_isAvailable(){try{return this.storage?(this.storage.setItem(ct,"1"),this.storage.removeItem(ct),Promise.resolve(!0)):Promise.resolve(!1)}catch(e){return Promise.resolve(!1)}}_set(e,t){return this.storage.setItem(e,JSON.stringify(t)),Promise.resolve()}_get(e){const t=this.storage.getItem(e);return Promise.resolve(t?JSON.parse(t):null)}_remove(e){return this.storage.removeItem(e),Promise.resolve()}get storage(){return this.storageRetriever()}}
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
 */function ht(){const e=(0,r.z$)();return de(e)||ye(e)}const dt=1e3,ft=10;class pt extends ut{constructor(){super((()=>window.localStorage),"LOCAL"),this.boundEventHandler=(e,t)=>this.onStorageEvent(e,t),this.listeners={},this.localCache={},this.pollTimer=null,this.safariLocalStorageNotSynced=ht()&&Te(),this.fallbackToPolling=_e(),this._shouldAllowMigration=!0}forAllChangedKeys(e){for(const t of Object.keys(this.listeners)){const n=this.storage.getItem(t),r=this.localCache[t];n!==r&&e(t,r,n)}}onStorageEvent(e,t=!1){if(!e.key)return void this.forAllChangedKeys(((e,t,n)=>{this.notifyListeners(e,n)}));const n=e.key;if(t?this.detachListener():this.stopPolling(),this.safariLocalStorageNotSynced){const r=this.storage.getItem(n);if(e.newValue!==r)null!==e.newValue?this.storage.setItem(n,e.newValue):this.storage.removeItem(n);else if(this.localCache[n]===e.newValue&&!t)return}const r=()=>{const e=this.storage.getItem(n);(t||this.localCache[n]!==e)&&this.notifyListeners(n,e)},i=this.storage.getItem(n);be()&&i!==e.newValue&&e.newValue!==e.oldValue?setTimeout(r,ft):r()}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t?JSON.parse(t):t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((()=>{this.forAllChangedKeys(((e,t,n)=>{this.onStorageEvent(new StorageEvent("storage",{key:e,oldValue:t,newValue:n}),!0)}))}),dt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}attachListener(){window.addEventListener("storage",this.boundEventHandler)}detachListener(){window.removeEventListener("storage",this.boundEventHandler)}_addListener(e,t){0===Object.keys(this.listeners).length&&(this.fallbackToPolling?this.startPolling():this.attachListener()),this.listeners[e]||(this.listeners[e]=new Set,this.localCache[e]=this.storage.getItem(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&(this.detachListener(),this.stopPolling())}async _set(e,t){await super._set(e,t),this.localCache[e]=JSON.stringify(t)}async _get(e){const t=await super._get(e);return this.localCache[e]=JSON.stringify(t),t}async _remove(e){await super._remove(e),delete this.localCache[e]}}pt.type="LOCAL";const gt=pt;
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
 */class mt extends ut{constructor(){super((()=>window.sessionStorage),"SESSION")}_addListener(e,t){}_removeListener(e,t){}}mt.type="SESSION";const vt=mt;
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
 */function yt(e){return Promise.all(e.map((async e=>{try{const t=await e;return{fulfilled:!0,value:t}}catch(t){return{fulfilled:!1,reason:t}}})))}
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
 */class wt{constructor(e){this.eventTarget=e,this.handlersMap={},this.boundEventHandler=this.handleEvent.bind(this)}static _getInstance(e){const t=this.receivers.find((t=>t.isListeningto(e)));if(t)return t;const n=new wt(e);return this.receivers.push(n),n}isListeningto(e){return this.eventTarget===e}async handleEvent(e){const t=e,{eventId:n,eventType:r,data:i}=t.data,s=this.handlersMap[r];if(!(null===s||void 0===s?void 0:s.size))return;t.ports[0].postMessage({status:"ack",eventId:n,eventType:r});const o=Array.from(s).map((async e=>e(t.origin,i))),a=await yt(o);t.ports[0].postMessage({status:"done",eventId:n,eventType:r,response:a})}_subscribe(e,t){0===Object.keys(this.handlersMap).length&&this.eventTarget.addEventListener("message",this.boundEventHandler),this.handlersMap[e]||(this.handlersMap[e]=new Set),this.handlersMap[e].add(t)}_unsubscribe(e,t){this.handlersMap[e]&&t&&this.handlersMap[e].delete(t),t&&0!==this.handlersMap[e].size||delete this.handlersMap[e],0===Object.keys(this.handlersMap).length&&this.eventTarget.removeEventListener("message",this.boundEventHandler)}}
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
function bt(e="",t=10){let n="";for(let r=0;r<t;r++)n+=Math.floor(10*Math.random());return e+n}
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
 */wt.receivers=[];class _t{constructor(e){this.target=e,this.handlers=new Set}removeMessageHandler(e){e.messageChannel&&(e.messageChannel.port1.removeEventListener("message",e.onMessage),e.messageChannel.port1.close()),this.handlers.delete(e)}async _send(e,t,n=50){const r="undefined"!==typeof MessageChannel?new MessageChannel:null;if(!r)throw new Error("connection_unavailable");let i,s;return new Promise(((o,a)=>{const l=bt("",20);r.port1.start();const c=setTimeout((()=>{a(new Error("unsupported_event"))}),n);s={messageChannel:r,onMessage(e){const t=e;if(t.data.eventId===l)switch(t.data.status){case"ack":clearTimeout(c),i=setTimeout((()=>{a(new Error("timeout"))}),3e3);break;case"done":clearTimeout(i),o(t.data.response);break;default:clearTimeout(c),clearTimeout(i),a(new Error("invalid_response"));break}}},this.handlers.add(s),r.port1.addEventListener("message",s.onMessage),this.target.postMessage({eventType:e,eventId:l,data:t},[r.port2])})).finally((()=>{s&&this.removeMessageHandler(s)}))}}
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
 */function Tt(){return window}function Et(e){Tt().location.href=e}
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
 */function kt(){return"undefined"!==typeof Tt()["WorkerGlobalScope"]&&"function"===typeof Tt()["importScripts"]}async function It(){if(!(null===navigator||void 0===navigator?void 0:navigator.serviceWorker))return null;try{const e=await navigator.serviceWorker.ready;return e.active}catch(e){return null}}function St(){var e;return(null===(e=null===navigator||void 0===navigator?void 0:navigator.serviceWorker)||void 0===e?void 0:e.controller)||null}function Ct(){return kt()?self:null}
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
 */const At="firebaseLocalStorageDb",xt=1,Rt="firebaseLocalStorage",Ot="fbase_key";class Nt{constructor(e){this.request=e}toPromise(){return new Promise(((e,t)=>{this.request.addEventListener("success",(()=>{e(this.request.result)})),this.request.addEventListener("error",(()=>{t(this.request.error)}))}))}}function Lt(e,t){return e.transaction([Rt],t?"readwrite":"readonly").objectStore(Rt)}function Pt(){const e=indexedDB.deleteDatabase(At);return new Nt(e).toPromise()}function Dt(){const e=indexedDB.open(At,xt);return new Promise(((t,n)=>{e.addEventListener("error",(()=>{n(e.error)})),e.addEventListener("upgradeneeded",(()=>{const t=e.result;try{t.createObjectStore(Rt,{keyPath:Ot})}catch(r){n(r)}})),e.addEventListener("success",(async()=>{const n=e.result;n.objectStoreNames.contains(Rt)?t(n):(n.close(),await Pt(),t(await Dt()))}))}))}async function Ft(e,t,n){const r=Lt(e,!0).put({[Ot]:t,value:n});return new Nt(r).toPromise()}async function Mt(e,t){const n=Lt(e,!1).get(t),r=await new Nt(n).toPromise();return void 0===r?null:r.value}function qt(e,t){const n=Lt(e,!0).delete(t);return new Nt(n).toPromise()}const Vt=800,Ut=3;class jt{constructor(){this.type="LOCAL",this._shouldAllowMigration=!0,this.listeners={},this.localCache={},this.pollTimer=null,this.pendingWrites=0,this.receiver=null,this.sender=null,this.serviceWorkerReceiverAvailable=!1,this.activeServiceWorker=null,this._workerInitializationPromise=this.initializeServiceWorkerMessaging().then((()=>{}),(()=>{}))}async _openDb(){return this.db||(this.db=await Dt()),this.db}async _withRetries(e){let t=0;while(1)try{const t=await this._openDb();return await e(t)}catch(n){if(t++>Ut)throw n;this.db&&(this.db.close(),this.db=void 0)}}async initializeServiceWorkerMessaging(){return kt()?this.initializeReceiver():this.initializeSender()}async initializeReceiver(){this.receiver=wt._getInstance(Ct()),this.receiver._subscribe("keyChanged",(async(e,t)=>{const n=await this._poll();return{keyProcessed:n.includes(t.key)}})),this.receiver._subscribe("ping",(async(e,t)=>["keyChanged"]))}async initializeSender(){var e,t;if(this.activeServiceWorker=await It(),!this.activeServiceWorker)return;this.sender=new _t(this.activeServiceWorker);const n=await this.sender._send("ping",{},800);n&&(null===(e=n[0])||void 0===e?void 0:e.fulfilled)&&(null===(t=n[0])||void 0===t?void 0:t.value.includes("keyChanged"))&&(this.serviceWorkerReceiverAvailable=!0)}async notifyServiceWorker(e){if(this.sender&&this.activeServiceWorker&&St()===this.activeServiceWorker)try{await this.sender._send("keyChanged",{key:e},this.serviceWorkerReceiverAvailable?800:50)}catch(t){}}async _isAvailable(){try{if(!indexedDB)return!1;const e=await Dt();return await Ft(e,ct,"1"),await qt(e,ct),!0}catch(e){}return!1}async _withPendingWrite(e){this.pendingWrites++;try{await e()}finally{this.pendingWrites--}}async _set(e,t){return this._withPendingWrite((async()=>(await this._withRetries((n=>Ft(n,e,t))),this.localCache[e]=t,this.notifyServiceWorker(e))))}async _get(e){const t=await this._withRetries((t=>Mt(t,e)));return this.localCache[e]=t,t}async _remove(e){return this._withPendingWrite((async()=>(await this._withRetries((t=>qt(t,e))),delete this.localCache[e],this.notifyServiceWorker(e))))}async _poll(){const e=await this._withRetries((e=>{const t=Lt(e,!1).getAll();return new Nt(t).toPromise()}));if(!e)return[];if(0!==this.pendingWrites)return[];const t=[],n=new Set;for(const{fbase_key:r,value:i}of e)n.add(r),JSON.stringify(this.localCache[r])!==JSON.stringify(i)&&(this.notifyListeners(r,i),t.push(r));for(const r of Object.keys(this.localCache))this.localCache[r]&&!n.has(r)&&(this.notifyListeners(r,null),t.push(r));return t}notifyListeners(e,t){this.localCache[e]=t;const n=this.listeners[e];if(n)for(const r of Array.from(n))r(t)}startPolling(){this.stopPolling(),this.pollTimer=setInterval((async()=>this._poll()),Vt)}stopPolling(){this.pollTimer&&(clearInterval(this.pollTimer),this.pollTimer=null)}_addListener(e,t){0===Object.keys(this.listeners).length&&this.startPolling(),this.listeners[e]||(this.listeners[e]=new Set,this._get(e)),this.listeners[e].add(t)}_removeListener(e,t){this.listeners[e]&&(this.listeners[e].delete(t),0===this.listeners[e].size&&delete this.listeners[e]),0===Object.keys(this.listeners).length&&this.stopPolling()}}jt.type="LOCAL";const Bt=jt;
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
 */function $t(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:start",P(e,t))}function zt(e,t){return D(e,"POST","/v2/accounts/mfaSignIn:finalize",P(e,t))}
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
function Ht(){var e,t;return null!==(t=null===(e=document.getElementsByTagName("head"))||void 0===e?void 0:e[0])&&void 0!==t?t:document}function Kt(e){return new Promise(((t,n)=>{const r=document.createElement("script");r.setAttribute("src",e),r.onload=t,r.onerror=e=>{const t=p("internal-error");t.customData=e,n(t)},r.type="text/javascript",r.charset="UTF-8",Ht().appendChild(r)}))}function Wt(e){return`__${e}${Math.floor(1e6*Math.random())}`}
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
Wt("rcb"),new x(3e4,6e4);
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
const Gt="recaptcha";async function Jt(e,t,n){var r;const i=await n.verify();try{let s;if(v("string"===typeof i,e,"argument-error"),v(n.type===Gt,e,"argument-error"),s="string"===typeof t?{phoneNumber:t}:t,"session"in s){const t=s.session;if("phoneNumber"in s){v("enroll"===t.type,e,"internal-error");const n=await at(e,{idToken:t.credential,phoneEnrollmentInfo:{phoneNumber:s.phoneNumber,recaptchaToken:i}});return n.phoneSessionInfo.sessionInfo}{v("signin"===t.type,e,"internal-error");const n=(null===(r=s.multiFactorHint)||void 0===r?void 0:r.uid)||s.multiFactorUid;v(n,e,"missing-multi-factor-info");const o=await $t(e,{mfaPendingCredential:t.credential,mfaEnrollmentId:n,phoneSignInInfo:{recaptchaToken:i}});return o.phoneResponseInfo.sessionInfo}}{const{sessionInfo:t}=await Fe(e,{phoneNumber:s.phoneNumber,recaptchaToken:i});return t}}finally{n._reset()}}
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
class Yt{constructor(e){this.providerId=Yt.PROVIDER_ID,this.auth=Ie(e)}verifyPhoneNumber(e,t){return Jt(this.auth,e,(0,r.m9)(t))}static credential(e,t){return je._fromVerification(e,t)}static credentialFromResult(e){const t=e;return Yt.credentialFromTaggedObject(t)}static credentialFromError(e){return Yt.credentialFromTaggedObject(e.customData||{})}static credentialFromTaggedObject({_tokenResponse:e}){if(!e)return null;const{phoneNumber:t,temporaryProof:n}=e;return t&&n?je._fromTokenResponse(t,n):null}}
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
function Xt(e,t){return t?_(t):(v(e._popupRedirectResolver,e,"argument-error"),e._popupRedirectResolver)}
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
 */Yt.PROVIDER_ID="phone",Yt.PHONE_SIGN_IN_METHOD="phone";class Zt extends Ce{constructor(e){super("custom","custom"),this.params=e}_getIdTokenResponse(e){return Le(e,this._buildIdpRequest())}_linkToIdToken(e,t){return Le(e,this._buildIdpRequest(t))}_getReauthenticationResolver(e){return Le(e,this._buildIdpRequest())}_buildIdpRequest(e){const t={requestUri:this.params.requestUri,sessionId:this.params.sessionId,postBody:this.params.postBody,tenantId:this.params.tenantId,pendingToken:this.params.pendingToken,returnSecureToken:!0,returnIdpCredential:!0};return e&&(t.idToken=e),t}}function Qt(e){return it(e.auth,new Zt(e),e.bypassAuthState)}function en(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),rt(n,new Zt(e),e.bypassAuthState)}async function tn(e){const{auth:t,user:n}=e;return v(n,t,"internal-error"),nt(n,new Zt(e),e.bypassAuthState)}
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
 */class nn{constructor(e,t,n,r,i=!1){this.auth=e,this.resolver=n,this.user=r,this.bypassAuthState=i,this.pendingPromise=null,this.eventManager=null,this.filter=Array.isArray(t)?t:[t]}execute(){return new Promise((async(e,t)=>{this.pendingPromise={resolve:e,reject:t};try{this.eventManager=await this.resolver._initialize(this.auth),await this.onExecution(),this.eventManager.registerConsumer(this)}catch(n){this.reject(n)}}))}async onAuthEvent(e){const{urlResponse:t,sessionId:n,postBody:r,tenantId:i,error:s,type:o}=e;if(s)return void this.reject(s);const a={auth:this.auth,requestUri:t,sessionId:n,tenantId:i||void 0,postBody:r||void 0,user:this.user,bypassAuthState:this.bypassAuthState};try{this.resolve(await this.getIdpTask(o)(a))}catch(l){this.reject(l)}}onError(e){this.reject(e)}getIdpTask(e){switch(e){case"signInViaPopup":case"signInViaRedirect":return Qt;case"linkViaPopup":case"linkViaRedirect":return tn;case"reauthViaPopup":case"reauthViaRedirect":return en;default:f(this.auth,"internal-error")}}resolve(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.resolve(e),this.unregisterAndCleanUp()}reject(e){w(this.pendingPromise,"Pending promise was never set"),this.pendingPromise.reject(e),this.unregisterAndCleanUp()}unregisterAndCleanUp(){this.eventManager&&this.eventManager.unregisterConsumer(this),this.pendingPromise=null,this.cleanUp()}}
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
 */const rn=new x(2e3,1e4);class sn extends nn{constructor(e,t,n,r,i){super(e,t,r,i),this.provider=n,this.authWindow=null,this.pollId=null,sn.currentPopupAction&&sn.currentPopupAction.cancel(),sn.currentPopupAction=this}async executeNotNull(){const e=await this.execute();return v(e,this.auth,"internal-error"),e}async onExecution(){w(1===this.filter.length,"Popup operations only handle one event");const e=bt();this.authWindow=await this.resolver._openPopup(this.auth,this.provider,this.filter[0],e),this.authWindow.associatedEvent=e,this.resolver._originValidation(this.auth).catch((e=>{this.reject(e)})),this.resolver._isIframeWebStorageSupported(this.auth,(e=>{e||this.reject(p(this.auth,"web-storage-unsupported"))})),this.pollUserCancellation()}get eventId(){var e;return(null===(e=this.authWindow)||void 0===e?void 0:e.associatedEvent)||null}cancel(){this.reject(p(this.auth,"cancelled-popup-request"))}cleanUp(){this.authWindow&&this.authWindow.close(),this.pollId&&window.clearTimeout(this.pollId),this.authWindow=null,this.pollId=null,sn.currentPopupAction=null}pollUserCancellation(){const e=()=>{var t,n;(null===(n=null===(t=this.authWindow)||void 0===t?void 0:t.window)||void 0===n?void 0:n.closed)?this.pollId=window.setTimeout((()=>{this.pollId=null,this.reject(p(this.auth,"popup-closed-by-user"))}),2e3):this.pollId=window.setTimeout(e,rn.get())};e()}}sn.currentPopupAction=null;
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
const on="pendingRedirect",an=new Map;class ln extends nn{constructor(e,t,n=!1){super(e,["signInViaRedirect","linkViaRedirect","reauthViaRedirect","unknown"],t,void 0,n),this.eventId=null}async execute(){let e=an.get(this.auth._key());if(!e){try{const t=await cn(this.resolver,this.auth),n=t?await super.execute():null;e=()=>Promise.resolve(n)}catch(t){e=()=>Promise.reject(t)}an.set(this.auth._key(),e)}return this.bypassAuthState||an.set(this.auth._key(),(()=>Promise.resolve(null))),e()}async onAuthEvent(e){if("signInViaRedirect"===e.type)return super.onAuthEvent(e);if("unknown"!==e.type){if(e.eventId){const t=await this.auth._redirectUserForId(e.eventId);if(t)return this.user=t,super.onAuthEvent(e);this.resolve(null)}}else this.resolve(null)}async onExecution(){}cleanUp(){}}async function cn(e,t){const n=hn(t),r=un(e);if(!await r._isAvailable())return!1;const i="true"===await r._get(n);return await r._remove(n),i}function un(e){return _(e._redirectPersistence)}function hn(e){return le(on,e.config.apiKey,e.name)}
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
 */async function dn(e,t,n=!1){const r=Ie(e),i=Xt(r,t),s=new ln(r,i,n),o=await s.execute();return o&&!n&&(delete o.user._redirectEventId,await r._persistUserIfCurrent(o.user),await r._setRedirectUser(null,t)),o}
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
const fn=6e5;class pn{constructor(e){this.auth=e,this.cachedEventUids=new Set,this.consumers=new Set,this.queuedRedirectEvent=null,this.hasHandledPotentialRedirect=!1,this.lastProcessedEventTime=Date.now()}registerConsumer(e){this.consumers.add(e),this.queuedRedirectEvent&&this.isEventForConsumer(this.queuedRedirectEvent,e)&&(this.sendToConsumer(this.queuedRedirectEvent,e),this.saveEventToCache(this.queuedRedirectEvent),this.queuedRedirectEvent=null)}unregisterConsumer(e){this.consumers.delete(e)}onEvent(e){if(this.hasEventBeenHandled(e))return!1;let t=!1;return this.consumers.forEach((n=>{this.isEventForConsumer(e,n)&&(t=!0,this.sendToConsumer(e,n),this.saveEventToCache(e))})),this.hasHandledPotentialRedirect||!vn(e)||(this.hasHandledPotentialRedirect=!0,t||(this.queuedRedirectEvent=e,t=!0)),t}sendToConsumer(e,t){var n;if(e.error&&!mn(e)){const r=(null===(n=e.error.code)||void 0===n?void 0:n.split("auth/")[1])||"internal-error";t.onError(p(this.auth,r))}else t.onAuthEvent(e)}isEventForConsumer(e,t){const n=null===t.eventId||!!e.eventId&&e.eventId===t.eventId;return t.filter.includes(e.type)&&n}hasEventBeenHandled(e){return Date.now()-this.lastProcessedEventTime>=fn&&this.cachedEventUids.clear(),this.cachedEventUids.has(gn(e))}saveEventToCache(e){this.cachedEventUids.add(gn(e)),this.lastProcessedEventTime=Date.now()}}function gn(e){return[e.type,e.eventId,e.sessionId,e.tenantId].filter((e=>e)).join("-")}function mn({type:e,error:t}){return"unknown"===e&&"auth/no-auth-event"===(null===t||void 0===t?void 0:t.code)}function vn(e){switch(e.type){case"signInViaRedirect":case"linkViaRedirect":case"reauthViaRedirect":return!0;case"unknown":return mn(e);default:return!1}}
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
 */async function yn(e,t={}){return D(e,"GET","/v1/projects",t)}
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
 */const wn=/^\d{1,3}\.\d{1,3}\.\d{1,3}\.\d{1,3}$/,bn=/^https?/;async function _n(e){if(e.config.emulator)return;const{authorizedDomains:t}=await yn(e);for(const r of t)try{if(Tn(r))return}catch(n){}f(e,"unauthorized-domain")}function Tn(e){const t=k(),{protocol:n,hostname:r}=new URL(t);if(e.startsWith("chrome-extension://")){const i=new URL(e);return""===i.hostname&&""===r?"chrome-extension:"===n&&e.replace("chrome-extension://","")===t.replace("chrome-extension://",""):"chrome-extension:"===n&&i.hostname===r}if(!bn.test(n))return!1;if(wn.test(e))return r===e;const i=e.replace(/\./g,"\\."),s=new RegExp("^(.+\\."+i+"|"+i+")$","i");return s.test(r)}
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
 */const En=new x(3e4,6e4);function kn(){const e=Tt().___jsl;if(null===e||void 0===e?void 0:e.H)for(const t of Object.keys(e.H))if(e.H[t].r=e.H[t].r||[],e.H[t].L=e.H[t].L||[],e.H[t].r=[...e.H[t].L],e.CP)for(let n=0;n<e.CP.length;n++)e.CP[n]=null}function In(e){return new Promise(((t,n)=>{var r,i,s;function o(){kn(),gapi.load("gapi.iframes",{callback:()=>{t(gapi.iframes.getContext())},ontimeout:()=>{kn(),n(p(e,"network-request-failed"))},timeout:En.get()})}if(null===(i=null===(r=Tt().gapi)||void 0===r?void 0:r.iframes)||void 0===i?void 0:i.Iframe)t(gapi.iframes.getContext());else{if(!(null===(s=Tt().gapi)||void 0===s?void 0:s.load)){const t=Wt("iframefcb");return Tt()[t]=()=>{gapi.load?o():n(p(e,"network-request-failed"))},Kt(`https://apis.google.com/js/api.js?onload=${t}`).catch((e=>n(e)))}o()}})).catch((e=>{throw Sn=null,e}))}let Sn=null;function Cn(e){return Sn=Sn||In(e),Sn}
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
 */const An=new x(5e3,15e3),xn="__/auth/iframe",Rn="emulator/auth/iframe",On={style:{position:"absolute",top:"-100px",width:"1px",height:"1px"},"aria-hidden":"true",tabindex:"-1"},Nn=new Map([["identitytoolkit.googleapis.com","p"],["staging-identitytoolkit.sandbox.googleapis.com","s"],["test-identitytoolkit.sandbox.googleapis.com","t"]]);function Ln(e){const t=e.config;v(t.authDomain,e,"auth-domain-config-required");const n=t.emulator?R(t,Rn):`https://${e.config.authDomain}/${xn}`,s={apiKey:t.apiKey,appName:e.name,v:i.Jn},o=Nn.get(e.config.apiHost);o&&(s.eid=o);const a=e._getFrameworks();return a.length&&(s.fw=a.join(",")),`${n}?${(0,r.xO)(s).slice(1)}`}async function Pn(e){const t=await Cn(e),n=Tt().gapi;return v(n,e,"internal-error"),t.open({where:document.body,url:Ln(e),messageHandlersFilter:n.iframes.CROSS_ORIGIN_IFRAMES_FILTER,attributes:On,dontclear:!0},(t=>new Promise((async(n,r)=>{await t.restyle({setHideOnLeave:!1});const i=p(e,"network-request-failed"),s=Tt().setTimeout((()=>{r(i)}),An.get());function o(){Tt().clearTimeout(s),n(t)}t.ping(o).then(o,(()=>{r(i)}))}))))}
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
 */const Dn={location:"yes",resizable:"yes",statusbar:"yes",toolbar:"no"},Fn=500,Mn=600,qn="_blank",Vn="http://localhost";class Un{constructor(e){this.window=e,this.associatedEvent=null}close(){if(this.window)try{this.window.close()}catch(e){}}}function jn(e,t,n,i=Fn,s=Mn){const o=Math.max((window.screen.availHeight-s)/2,0).toString(),a=Math.max((window.screen.availWidth-i)/2,0).toString();let l="";const c=Object.assign(Object.assign({},Dn),{width:i.toString(),height:s.toString(),top:o,left:a}),u=(0,r.z$)().toLowerCase();n&&(l=fe(u)?qn:n),he(u)&&(t=t||Vn,c.scrollbars="yes");const h=Object.entries(c).reduce(((e,[t,n])=>`${e}${t}=${n},`),"");if(we(u)&&"_self"!==l)return Bn(t||"",l),new Un(null);const d=window.open(t||"",l,h);v(d,e,"popup-blocked");try{d.focus()}catch(f){}return new Un(d)}function Bn(e,t){const n=document.createElement("a");n.href=e,n.target=t;const r=document.createEvent("MouseEvent");r.initMouseEvent("click",!0,!0,window,1,0,0,0,0,!1,!1,!1,!1,1,null),n.dispatchEvent(r)}
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
 */const $n="__/auth/handler",zn="emulator/auth/handler";function Hn(e,t,n,s,o,a){v(e.config.authDomain,e,"auth-domain-config-required"),v(e.config.apiKey,e,"invalid-api-key");const l={apiKey:e.config.apiKey,appName:e.name,authType:n,redirectUrl:s,v:i.Jn,eventId:o};if(t instanceof Ke){t.setDefaultLanguage(e.languageCode),l.providerId=t.providerId||"",(0,r.xb)(t.getCustomParameters())||(l.customParameters=JSON.stringify(t.getCustomParameters()));for(const[e,t]of Object.entries(a||{}))l[e]=t}if(t instanceof We){const e=t.getScopes().filter((e=>""!==e));e.length>0&&(l.scopes=e.join(","))}e.tenantId&&(l.tid=e.tenantId);const c=l;for(const r of Object.keys(c))void 0===c[r]&&delete c[r];return`${Kn(e)}?${(0,r.xO)(c).slice(1)}`}function Kn({config:e}){return e.emulator?R(e,zn):`https://${e.authDomain}/${$n}`}
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
 */const Wn="webStorageSupport";class Gn{constructor(){this.eventManagers={},this.iframes={},this.originValidationPromises={},this._redirectPersistence=vt,this._completeRedirectFn=dn}async _openPopup(e,t,n,r){var i;w(null===(i=this.eventManagers[e._key()])||void 0===i?void 0:i.manager,"_initialize() not called before _openPopup()");const s=Hn(e,t,n,k(),r);return jn(e,s,bt())}async _openRedirect(e,t,n,r){return await this._originValidation(e),Et(Hn(e,t,n,k(),r)),new Promise((()=>{}))}_initialize(e){const t=e._key();if(this.eventManagers[t]){const{manager:e,promise:n}=this.eventManagers[t];return e?Promise.resolve(e):(w(n,"If manager is not set, promise should be"),n)}const n=this.initAndGetManager(e);return this.eventManagers[t]={promise:n},n.catch((()=>{delete this.eventManagers[t]})),n}async initAndGetManager(e){const t=await Pn(e),n=new pn(e);return t.register("authEvent",(t=>{v(null===t||void 0===t?void 0:t.authEvent,e,"invalid-auth-event");const r=n.onEvent(t.authEvent);return{status:r?"ACK":"ERROR"}}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER),this.eventManagers[e._key()]={manager:n},this.iframes[e._key()]=t,n}_isIframeWebStorageSupported(e,t){const n=this.iframes[e._key()];n.send(Wn,{type:Wn},(n=>{var r;const i=null===(r=null===n||void 0===n?void 0:n[0])||void 0===r?void 0:r[Wn];void 0!==i&&t(!!i),f(e,"internal-error")}),gapi.iframes.CROSS_ORIGIN_IFRAMES_FILTER)}_originValidation(e){const t=e._key();return this.originValidationPromises[t]||(this.originValidationPromises[t]=_n(e)),this.originValidationPromises[t]}get _shouldInitProactively(){return _e()||de()||ye()}}const Jn=Gn;class Yn{constructor(e){this.factorId=e}_process(e,t,n){switch(t.type){case"enroll":return this._finalizeEnroll(e,t.credential,n);case"signin":return this._finalizeSignIn(e,t.credential);default:return y("unexpected MultiFactorSessionType")}}}class Xn extends Yn{constructor(e){super("phone"),this.credential=e}static _fromCredential(e){return new Xn(e)}_finalizeEnroll(e,t,n){return lt(e,{idToken:t,displayName:n,phoneVerificationInfo:this.credential._makeVerificationRequest()})}_finalizeSignIn(e,t){return zt(e,{mfaPendingCredential:t,phoneVerificationInfo:this.credential._makeVerificationRequest()})}}class Zn{constructor(){}static assertion(e){return Xn._fromCredential(e)}}Zn.FACTOR_ID="phone";var Qn="@firebase/auth",er="0.19.4";
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
class tr{constructor(e){this.auth=e,this.internalListeners=new Map}getUid(){var e;return this.assertAuthConfigured(),(null===(e=this.auth.currentUser)||void 0===e?void 0:e.uid)||null}async getToken(e){if(this.assertAuthConfigured(),await this.auth._initializationPromise,!this.auth.currentUser)return null;const t=await this.auth.currentUser.getIdToken(e);return{accessToken:t}}addAuthTokenListener(e){if(this.assertAuthConfigured(),this.internalListeners.has(e))return;const t=this.auth.onIdTokenChanged((t=>{var n;e((null===(n=t)||void 0===n?void 0:n.stsTokenManager.accessToken)||null)}));this.internalListeners.set(e,t),this.updateProactiveRefresh()}removeAuthTokenListener(e){this.assertAuthConfigured();const t=this.internalListeners.get(e);t&&(this.internalListeners.delete(e),t(),this.updateProactiveRefresh())}assertAuthConfigured(){v(this.auth._initializationPromise,"dependent-sdk-initialized-before-auth")}updateProactiveRefresh(){this.internalListeners.size>0?this.auth._startProactiveRefresh():this.auth._stopProactiveRefresh()}}
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
 */function nr(e){switch(e){case"Node":return"node";case"ReactNative":return"rn";case"Worker":return"webworker";case"Cordova":return"cordova";default:return}}function rr(e){(0,i.Xd)(new a.wA("auth",((t,{options:n})=>{const r=t.getProvider("app").getImmediate(),{apiKey:i,authDomain:s}=r.options;return(t=>{v(i&&!i.includes(":"),"invalid-api-key",{appName:t.name}),v(!(null===s||void 0===s?void 0:s.includes(":")),"argument-error",{appName:t.name});const r={apiKey:i,authDomain:s,clientPlatform:e,apiHost:"identitytoolkit.googleapis.com",tokenApiHost:"securetoken.googleapis.com",apiScheme:"https",sdkClientVersion:Ee(e)},o=new ke(t,r);return E(o,n),o})(r)}),"PUBLIC").setInstantiationMode("EXPLICIT").setInstanceCreatedCallback(((e,t,n)=>{const r=e.getProvider("auth-internal");r.initialize()}))),(0,i.Xd)(new a.wA("auth-internal",(e=>{const t=Ie(e.getProvider("auth").getImmediate());return(e=>new tr(e))(t)}),"PRIVATE").setInstantiationMode("EXPLICIT")),(0,i.KN)(Qn,er,nr(e)),(0,i.KN)(Qn,er,"esm2017")}
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
 */function ir(e=(0,i.Mq)()){const t=(0,i.qX)(e,"auth");return t.isInitialized()?t.getImmediate():T(e,{popupRedirectResolver:Jn,persistence:[Bt,gt,vt]})}rr("Browser")},8127:(e,t,n)=>{"use strict";n.d(t,{hJ:()=>Su,oe:()=>ph,JU:()=>Cu,QT:()=>uh,PL:()=>dh,ad:()=>Ru,pl:()=>fh});var r,i=n(9036),s=n(4676),o=n(1492),a=n(5479),l="undefined"!==typeof globalThis?globalThis:"undefined"!==typeof window?window:"undefined"!==typeof n.g?n.g:"undefined"!==typeof self?self:{},c={},u=u||{},h=l||self;function d(){}function f(e){var t=typeof e;return t="object"!=t?t:e?Array.isArray(e)?"array":t:"null","array"==t||"object"==t&&"number"==typeof e.length}function p(e){var t=typeof e;return"object"==t&&null!=e||"function"==t}function g(e){return Object.prototype.hasOwnProperty.call(e,m)&&e[m]||(e[m]=++v)}var m="closure_uid_"+(1e9*Math.random()>>>0),v=0;function y(e,t,n){return e.call.apply(e.bind,arguments)}function w(e,t,n){if(!e)throw Error();if(2<arguments.length){var r=Array.prototype.slice.call(arguments,2);return function(){var n=Array.prototype.slice.call(arguments);return Array.prototype.unshift.apply(n,r),e.apply(t,n)}}return function(){return e.apply(t,arguments)}}function b(e,t,n){return b=Function.prototype.bind&&-1!=Function.prototype.bind.toString().indexOf("native code")?y:w,b.apply(null,arguments)}function _(e,t){var n=Array.prototype.slice.call(arguments,1);return function(){var t=n.slice();return t.push.apply(t,arguments),e.apply(this,t)}}function T(e,t){function n(){}n.prototype=t.prototype,e.Z=t.prototype,e.prototype=new n,e.prototype.constructor=e,e.Vb=function(e,n,r){for(var i=Array(arguments.length-2),s=2;s<arguments.length;s++)i[s-2]=arguments[s];return t.prototype[n].apply(e,i)}}function E(){this.s=this.s,this.o=this.o}var k=0,I={};E.prototype.s=!1,E.prototype.na=function(){if(!this.s&&(this.s=!0,this.M(),0!=k)){var e=g(this);delete I[e]}},E.prototype.M=function(){if(this.o)for(;this.o.length;)this.o.shift()()};const S=Array.prototype.indexOf?function(e,t){return Array.prototype.indexOf.call(e,t,void 0)}:function(e,t){if("string"===typeof e)return"string"!==typeof t||1!=t.length?-1:e.indexOf(t,0);for(let n=0;n<e.length;n++)if(n in e&&e[n]===t)return n;return-1},C=Array.prototype.forEach?function(e,t,n){Array.prototype.forEach.call(e,t,n)}:function(e,t,n){const r=e.length,i="string"===typeof e?e.split(""):e;for(let s=0;s<r;s++)s in i&&t.call(n,i[s],s,e)};function A(e){e:{var t=Kn;const n=e.length,r="string"===typeof e?e.split(""):e;for(let i=0;i<n;i++)if(i in r&&t.call(void 0,r[i],i,e)){t=i;break e}t=-1}return 0>t?null:"string"===typeof e?e.charAt(t):e[t]}function x(e){return Array.prototype.concat.apply([],arguments)}function R(e){const t=e.length;if(0<t){const n=Array(t);for(let r=0;r<t;r++)n[r]=e[r];return n}return[]}function O(e){return/^[\s\xa0]*$/.test(e)}var N,L=String.prototype.trim?function(e){return e.trim()}:function(e){return/^[\s\xa0]*([\s\S]*?)[\s\xa0]*$/.exec(e)[1]};function P(e,t){return-1!=e.indexOf(t)}function D(e,t){return e<t?-1:e>t?1:0}e:{var F=h.navigator;if(F){var M=F.userAgent;if(M){N=M;break e}}N=""}function q(e,t,n){for(const r in e)t.call(n,e[r],r,e)}function V(e){const t={};for(const n in e)t[n]=e[n];return t}var U="constructor hasOwnProperty isPrototypeOf propertyIsEnumerable toLocaleString toString valueOf".split(" ");function j(e,t){let n,r;for(let i=1;i<arguments.length;i++){for(n in r=arguments[i],r)e[n]=r[n];for(let t=0;t<U.length;t++)n=U[t],Object.prototype.hasOwnProperty.call(r,n)&&(e[n]=r[n])}}function B(e){return B[" "](e),e}function $(e){var t=ne;return Object.prototype.hasOwnProperty.call(t,9)?t[9]:t[9]=e(9)}B[" "]=d;var z,H=P(N,"Opera"),K=P(N,"Trident")||P(N,"MSIE"),W=P(N,"Edge"),G=W||K,J=P(N,"Gecko")&&!(P(N.toLowerCase(),"webkit")&&!P(N,"Edge"))&&!(P(N,"Trident")||P(N,"MSIE"))&&!P(N,"Edge"),Y=P(N.toLowerCase(),"webkit")&&!P(N,"Edge");function X(){var e=h.document;return e?e.documentMode:void 0}e:{var Z="",Q=function(){var e=N;return J?/rv:([^\);]+)(\)|;)/.exec(e):W?/Edge\/([\d\.]+)/.exec(e):K?/\b(?:MSIE|rv)[: ]([^\);]+)(\)|;)/.exec(e):Y?/WebKit\/(\S+)/.exec(e):H?/(?:Version)[ \/]?(\S+)/.exec(e):void 0}();if(Q&&(Z=Q?Q[1]:""),K){var ee=X();if(null!=ee&&ee>parseFloat(Z)){z=String(ee);break e}}z=Z}var te,ne={};function re(){return $((function(){let e=0;const t=L(String(z)).split("."),n=L("9").split("."),r=Math.max(t.length,n.length);for(let o=0;0==e&&o<r;o++){var i=t[o]||"",s=n[o]||"";do{if(i=/(\d*)(\D*)(.*)/.exec(i)||["","","",""],s=/(\d*)(\D*)(.*)/.exec(s)||["","","",""],0==i[0].length&&0==s[0].length)break;e=D(0==i[1].length?0:parseInt(i[1],10),0==s[1].length?0:parseInt(s[1],10))||D(0==i[2].length,0==s[2].length)||D(i[2],s[2]),i=i[3],s=s[3]}while(0==e)}return 0<=e}))}if(h.document&&K){var ie=X();te=ie||(parseInt(z,10)||void 0)}else te=void 0;var se=te,oe=function(){if(!h.addEventListener||!Object.defineProperty)return!1;var e=!1,t=Object.defineProperty({},"passive",{get:function(){e=!0}});try{h.addEventListener("test",d,t),h.removeEventListener("test",d,t)}catch(n){}return e}();function ae(e,t){this.type=e,this.g=this.target=t,this.defaultPrevented=!1}function le(e,t){if(ae.call(this,e?e.type:""),this.relatedTarget=this.g=this.target=null,this.button=this.screenY=this.screenX=this.clientY=this.clientX=0,this.key="",this.metaKey=this.shiftKey=this.altKey=this.ctrlKey=!1,this.state=null,this.pointerId=0,this.pointerType="",this.i=null,e){var n=this.type=e.type,r=e.changedTouches&&e.changedTouches.length?e.changedTouches[0]:null;if(this.target=e.target||e.srcElement,this.g=t,t=e.relatedTarget){if(J){e:{try{B(t.nodeName);var i=!0;break e}catch(s){}i=!1}i||(t=null)}}else"mouseover"==n?t=e.fromElement:"mouseout"==n&&(t=e.toElement);this.relatedTarget=t,r?(this.clientX=void 0!==r.clientX?r.clientX:r.pageX,this.clientY=void 0!==r.clientY?r.clientY:r.pageY,this.screenX=r.screenX||0,this.screenY=r.screenY||0):(this.clientX=void 0!==e.clientX?e.clientX:e.pageX,this.clientY=void 0!==e.clientY?e.clientY:e.pageY,this.screenX=e.screenX||0,this.screenY=e.screenY||0),this.button=e.button,this.key=e.key||"",this.ctrlKey=e.ctrlKey,this.altKey=e.altKey,this.shiftKey=e.shiftKey,this.metaKey=e.metaKey,this.pointerId=e.pointerId||0,this.pointerType="string"===typeof e.pointerType?e.pointerType:ce[e.pointerType]||"",this.state=e.state,this.i=e,e.defaultPrevented&&le.Z.h.call(this)}}ae.prototype.h=function(){this.defaultPrevented=!0},T(le,ae);var ce={2:"touch",3:"pen",4:"mouse"};le.prototype.h=function(){le.Z.h.call(this);var e=this.i;e.preventDefault?e.preventDefault():e.returnValue=!1};var ue="closure_listenable_"+(1e6*Math.random()|0),he=0;function de(e,t,n,r,i){this.listener=e,this.proxy=null,this.src=t,this.type=n,this.capture=!!r,this.ia=i,this.key=++he,this.ca=this.fa=!1}function fe(e){e.ca=!0,e.listener=null,e.proxy=null,e.src=null,e.ia=null}function pe(e){this.src=e,this.g={},this.h=0}function ge(e,t){var n=t.type;if(n in e.g){var r,i=e.g[n],s=S(i,t);(r=0<=s)&&Array.prototype.splice.call(i,s,1),r&&(fe(t),0==e.g[n].length&&(delete e.g[n],e.h--))}}function me(e,t,n,r){for(var i=0;i<e.length;++i){var s=e[i];if(!s.ca&&s.listener==t&&s.capture==!!n&&s.ia==r)return i}return-1}pe.prototype.add=function(e,t,n,r,i){var s=e.toString();e=this.g[s],e||(e=this.g[s]=[],this.h++);var o=me(e,t,r,i);return-1<o?(t=e[o],n||(t.fa=!1)):(t=new de(t,this.src,s,!!r,i),t.fa=n,e.push(t)),t};var ve="closure_lm_"+(1e6*Math.random()|0),ye={};function we(e,t,n,r,i){if(r&&r.once)return Te(e,t,n,r,i);if(Array.isArray(t)){for(var s=0;s<t.length;s++)we(e,t[s],n,r,i);return null}return n=xe(n),e&&e[ue]?e.N(t,n,p(r)?!!r.capture:!!r,i):be(e,t,n,!1,r,i)}function be(e,t,n,r,i,s){if(!t)throw Error("Invalid event type");var o=p(i)?!!i.capture:!!i,a=Ce(e);if(a||(e[ve]=a=new pe(e)),n=a.add(t,n,r,o,s),n.proxy)return n;if(r=_e(),n.proxy=r,r.src=e,r.listener=n,e.addEventListener)oe||(i=o),void 0===i&&(i=!1),e.addEventListener(t.toString(),r,i);else if(e.attachEvent)e.attachEvent(Ie(t.toString()),r);else{if(!e.addListener||!e.removeListener)throw Error("addEventListener and attachEvent are unavailable.");e.addListener(r)}return n}function _e(){function e(n){return t.call(e.src,e.listener,n)}var t=Se;return e}function Te(e,t,n,r,i){if(Array.isArray(t)){for(var s=0;s<t.length;s++)Te(e,t[s],n,r,i);return null}return n=xe(n),e&&e[ue]?e.O(t,n,p(r)?!!r.capture:!!r,i):be(e,t,n,!0,r,i)}function Ee(e,t,n,r,i){if(Array.isArray(t))for(var s=0;s<t.length;s++)Ee(e,t[s],n,r,i);else r=p(r)?!!r.capture:!!r,n=xe(n),e&&e[ue]?(e=e.i,t=String(t).toString(),t in e.g&&(s=e.g[t],n=me(s,n,r,i),-1<n&&(fe(s[n]),Array.prototype.splice.call(s,n,1),0==s.length&&(delete e.g[t],e.h--)))):e&&(e=Ce(e))&&(t=e.g[t.toString()],e=-1,t&&(e=me(t,n,r,i)),(n=-1<e?t[e]:null)&&ke(n))}function ke(e){if("number"!==typeof e&&e&&!e.ca){var t=e.src;if(t&&t[ue])ge(t.i,e);else{var n=e.type,r=e.proxy;t.removeEventListener?t.removeEventListener(n,r,e.capture):t.detachEvent?t.detachEvent(Ie(n),r):t.addListener&&t.removeListener&&t.removeListener(r),(n=Ce(t))?(ge(n,e),0==n.h&&(n.src=null,t[ve]=null)):fe(e)}}}function Ie(e){return e in ye?ye[e]:ye[e]="on"+e}function Se(e,t){if(e.ca)e=!0;else{t=new le(t,this);var n=e.listener,r=e.ia||e.src;e.fa&&ke(e),e=n.call(r,t)}return e}function Ce(e){return e=e[ve],e instanceof pe?e:null}var Ae="__closure_events_fn_"+(1e9*Math.random()>>>0);function xe(e){return"function"===typeof e?e:(e[Ae]||(e[Ae]=function(t){return e.handleEvent(t)}),e[Ae])}function Re(){E.call(this),this.i=new pe(this),this.P=this,this.I=null}function Oe(e,t){var n,r=e.I;if(r)for(n=[];r;r=r.I)n.push(r);if(e=e.P,r=t.type||t,"string"===typeof t)t=new ae(t,e);else if(t instanceof ae)t.target=t.target||e;else{var i=t;t=new ae(r,e),j(t,i)}if(i=!0,n)for(var s=n.length-1;0<=s;s--){var o=t.g=n[s];i=Ne(o,r,!0,t)&&i}if(o=t.g=e,i=Ne(o,r,!0,t)&&i,i=Ne(o,r,!1,t)&&i,n)for(s=0;s<n.length;s++)o=t.g=n[s],i=Ne(o,r,!1,t)&&i}function Ne(e,t,n,r){if(t=e.i.g[String(t)],!t)return!0;t=t.concat();for(var i=!0,s=0;s<t.length;++s){var o=t[s];if(o&&!o.ca&&o.capture==n){var a=o.listener,l=o.ia||o.src;o.fa&&ge(e.i,o),i=!1!==a.call(l,r)&&i}}return i&&!r.defaultPrevented}T(Re,E),Re.prototype[ue]=!0,Re.prototype.removeEventListener=function(e,t,n,r){Ee(this,e,t,n,r)},Re.prototype.M=function(){if(Re.Z.M.call(this),this.i){var e,t=this.i;for(e in t.g){for(var n=t.g[e],r=0;r<n.length;r++)fe(n[r]);delete t.g[e],t.h--}}this.I=null},Re.prototype.N=function(e,t,n,r){return this.i.add(String(e),t,!1,n,r)},Re.prototype.O=function(e,t,n,r){return this.i.add(String(e),t,!0,n,r)};var Le=h.JSON.stringify;function Pe(){var e=$e;let t=null;return e.g&&(t=e.g,e.g=e.g.next,e.g||(e.h=null),t.next=null),t}class De{constructor(){this.h=this.g=null}add(e,t){const n=Me.get();n.set(e,t),this.h?this.h.next=n:this.g=n,this.h=n}}var Fe,Me=new class{constructor(e,t){this.i=e,this.j=t,this.h=0,this.g=null}get(){let e;return 0<this.h?(this.h--,e=this.g,this.g=e.next,e.next=null):e=this.i(),e}}((()=>new qe),(e=>e.reset()));class qe{constructor(){this.next=this.g=this.h=null}set(e,t){this.h=e,this.g=t,this.next=null}reset(){this.next=this.g=this.h=null}}function Ve(e){h.setTimeout((()=>{throw e}),0)}function Ue(e,t){Fe||je(),Be||(Fe(),Be=!0),$e.add(e,t)}function je(){var e=h.Promise.resolve(void 0);Fe=function(){e.then(ze)}}var Be=!1,$e=new De;function ze(){for(var e;e=Pe();){try{e.h.call(e.g)}catch(n){Ve(n)}var t=Me;t.j(e),100>t.h&&(t.h++,e.next=t.g,t.g=e)}Be=!1}function He(e,t){Re.call(this),this.h=e||1,this.g=t||h,this.j=b(this.kb,this),this.l=Date.now()}function Ke(e){e.da=!1,e.S&&(e.g.clearTimeout(e.S),e.S=null)}function We(e,t,n){if("function"===typeof e)n&&(e=b(e,n));else{if(!e||"function"!=typeof e.handleEvent)throw Error("Invalid listener argument");e=b(e.handleEvent,e)}return 2147483647<Number(t)?-1:h.setTimeout(e,t||0)}function Ge(e){e.g=We((()=>{e.g=null,e.i&&(e.i=!1,Ge(e))}),e.j);const t=e.h;e.h=null,e.m.apply(null,t)}T(He,Re),r=He.prototype,r.da=!1,r.S=null,r.kb=function(){if(this.da){var e=Date.now()-this.l;0<e&&e<.8*this.h?this.S=this.g.setTimeout(this.j,this.h-e):(this.S&&(this.g.clearTimeout(this.S),this.S=null),Oe(this,"tick"),this.da&&(Ke(this),this.start()))}},r.start=function(){this.da=!0,this.S||(this.S=this.g.setTimeout(this.j,this.h),this.l=Date.now())},r.M=function(){He.Z.M.call(this),Ke(this),delete this.g};class Je extends E{constructor(e,t){super(),this.m=e,this.j=t,this.h=null,this.i=!1,this.g=null}l(e){this.h=arguments,this.g?this.i=!0:Ge(this)}M(){super.M(),this.g&&(h.clearTimeout(this.g),this.g=null,this.i=!1,this.h=null)}}function Ye(e){E.call(this),this.h=e,this.g={}}T(Ye,E);var Xe=[];function Ze(e,t,n,r){Array.isArray(n)||(n&&(Xe[0]=n.toString()),n=Xe);for(var i=0;i<n.length;i++){var s=we(t,n[i],r||e.handleEvent,!1,e.h||e);if(!s)break;e.g[s.key]=s}}function Qe(e){q(e.g,(function(e,t){this.g.hasOwnProperty(t)&&ke(e)}),e),e.g={}}function et(){this.g=!0}function tt(e,t,n,r,i,s){e.info((function(){if(e.g)if(s)for(var o="",a=s.split("&"),l=0;l<a.length;l++){var c=a[l].split("=");if(1<c.length){var u=c[0];c=c[1];var h=u.split("_");o=2<=h.length&&"type"==h[1]?o+(u+"=")+c+"&":o+(u+"=redacted&")}}else o=null;else o=s;return"XMLHTTP REQ ("+r+") [attempt "+i+"]: "+t+"\n"+n+"\n"+o}))}function nt(e,t,n,r,i,s,o){e.info((function(){return"XMLHTTP RESP ("+r+") [ attempt "+i+"]: "+t+"\n"+n+"\n"+s+" "+o}))}function rt(e,t,n,r){e.info((function(){return"XMLHTTP TEXT ("+t+"): "+st(e,n)+(r?" "+r:"")}))}function it(e,t){e.info((function(){return"TIMEOUT: "+t}))}function st(e,t){if(!e.g)return t;if(!t)return null;try{var n=JSON.parse(t);if(n)for(e=0;e<n.length;e++)if(Array.isArray(n[e])){var r=n[e];if(!(2>r.length)){var i=r[1];if(Array.isArray(i)&&!(1>i.length)){var s=i[0];if("noop"!=s&&"stop"!=s&&"close"!=s)for(var o=1;o<i.length;o++)i[o]=""}}}return Le(n)}catch(a){return t}}Ye.prototype.M=function(){Ye.Z.M.call(this),Qe(this)},Ye.prototype.handleEvent=function(){throw Error("EventHandler.handleEvent not implemented")},et.prototype.Aa=function(){this.g=!1},et.prototype.info=function(){};var ot={},at=null;function lt(){return at=at||new Re}function ct(e){ae.call(this,ot.Ma,e)}function ut(e){const t=lt();Oe(t,new ct(t,e))}function ht(e,t){ae.call(this,ot.STAT_EVENT,e),this.stat=t}function dt(e){const t=lt();Oe(t,new ht(t,e))}function ft(e,t){ae.call(this,ot.Na,e),this.size=t}function pt(e,t){if("function"!==typeof e)throw Error("Fn must not be null and must be a function");return h.setTimeout((function(){e()}),t)}ot.Ma="serverreachability",T(ct,ae),ot.STAT_EVENT="statevent",T(ht,ae),ot.Na="timingevent",T(ft,ae);var gt={NO_ERROR:0,lb:1,yb:2,xb:3,sb:4,wb:5,zb:6,Ja:7,TIMEOUT:8,Cb:9},mt={qb:"complete",Mb:"success",Ka:"error",Ja:"abort",Eb:"ready",Fb:"readystatechange",TIMEOUT:"timeout",Ab:"incrementaldata",Db:"progress",tb:"downloadprogress",Ub:"uploadprogress"};function vt(){}function yt(e){return e.h||(e.h=e.i())}function wt(){}vt.prototype.h=null;var bt,_t={OPEN:"a",pb:"b",Ka:"c",Bb:"d"};function Tt(){ae.call(this,"d")}function Et(){ae.call(this,"c")}function kt(){}function It(e,t,n,r){this.l=e,this.j=t,this.m=n,this.X=r||1,this.V=new Ye(this),this.P=Ct,e=G?125:void 0,this.W=new He(e),this.H=null,this.i=!1,this.s=this.A=this.v=this.K=this.F=this.Y=this.B=null,this.D=[],this.g=null,this.C=0,this.o=this.u=null,this.N=-1,this.I=!1,this.O=0,this.L=null,this.aa=this.J=this.$=this.U=!1,this.h=new St}function St(){this.i=null,this.g="",this.h=!1}T(Tt,ae),T(Et,ae),T(kt,vt),kt.prototype.g=function(){return new XMLHttpRequest},kt.prototype.i=function(){return{}},bt=new kt;var Ct=45e3,At={},xt={};function Rt(e,t,n){e.K=1,e.v=tn(Jt(t)),e.s=n,e.U=!0,Ot(e,null)}function Ot(e,t){e.F=Date.now(),Dt(e),e.A=Jt(e.v);var n=e.A,r=e.X;Array.isArray(r)||(r=[String(r)]),vn(n.h,"t",r),e.C=0,n=e.l.H,e.h=new St,e.g=Er(e.l,n?t:null,!e.s),0<e.O&&(e.L=new Je(b(e.Ia,e,e.g),e.O)),Ze(e.V,e.g,"readystatechange",e.gb),t=e.H?V(e.H):{},e.s?(e.u||(e.u="POST"),t["Content-Type"]="application/x-www-form-urlencoded",e.g.ea(e.A,e.u,e.s,t)):(e.u="GET",e.g.ea(e.A,e.u,null,t)),ut(1),tt(e.j,e.u,e.A,e.m,e.X,e.s)}function Nt(e){return!!e.g&&("GET"==e.u&&2!=e.K&&e.l.Ba)}function Lt(e,t,n){let r,i=!0;for(;!e.I&&e.C<n.length;){if(r=Pt(e,n),r==xt){4==t&&(e.o=4,dt(14),i=!1),rt(e.j,e.m,null,"[Incomplete Response]");break}if(r==At){e.o=4,dt(15),rt(e.j,e.m,n,"[Invalid Chunk]"),i=!1;break}rt(e.j,e.m,r,null),Ut(e,r)}Nt(e)&&r!=xt&&r!=At&&(e.h.g="",e.C=0),4!=t||0!=n.length||e.h.h||(e.o=1,dt(16),i=!1),e.i=e.i&&i,i?0<n.length&&!e.aa&&(e.aa=!0,t=e.l,t.g==e&&t.$&&!t.L&&(t.h.info("Great, no buffering proxy detected. Bytes received: "+n.length),gr(t),t.L=!0,dt(11))):(rt(e.j,e.m,n,"[Invalid Chunked Response]"),Vt(e),qt(e))}function Pt(e,t){var n=e.C,r=t.indexOf("\n",n);return-1==r?xt:(n=Number(t.substring(n,r)),isNaN(n)?At:(r+=1,r+n>t.length?xt:(t=t.substr(r,n),e.C=r+n,t)))}function Dt(e){e.Y=Date.now()+e.P,Ft(e,e.P)}function Ft(e,t){if(null!=e.B)throw Error("WatchDog timer not null");e.B=pt(b(e.eb,e),t)}function Mt(e){e.B&&(h.clearTimeout(e.B),e.B=null)}function qt(e){0==e.l.G||e.I||yr(e.l,e)}function Vt(e){Mt(e);var t=e.L;t&&"function"==typeof t.na&&t.na(),e.L=null,Ke(e.W),Qe(e.V),e.g&&(t=e.g,e.g=null,t.abort(),t.na())}function Ut(e,t){try{var n=e.l;if(0!=n.G&&(n.g==e||In(n.i,e)))if(n.I=e.N,!e.J&&In(n.i,e)&&3==n.G){try{var r=n.Ca.g.parse(t)}catch(c){r=null}if(Array.isArray(r)&&3==r.length){var i=r;if(0==i[0]){e:if(!n.u){if(n.g){if(!(n.g.F+3e3<e.F))break e;vr(n),sr(n)}pr(n),dt(18)}}else n.ta=i[1],0<n.ta-n.U&&37500>i[2]&&n.N&&0==n.A&&!n.v&&(n.v=pt(b(n.ab,n),6e3));if(1>=kn(n.i)&&n.ka){try{n.ka()}catch(c){}n.ka=void 0}}else br(n,11)}else if((e.J||n.g==e)&&vr(n),!O(t))for(i=n.Ca.g.parse(t),t=0;t<i.length;t++){let c=i[t];if(n.U=c[0],c=c[1],2==n.G)if("c"==c[0]){n.J=c[1],n.la=c[2];const t=c[3];null!=t&&(n.ma=t,n.h.info("VER="+n.ma));const i=c[4];null!=i&&(n.za=i,n.h.info("SVER="+n.za));const u=c[5];null!=u&&"number"===typeof u&&0<u&&(r=1.5*u,n.K=r,n.h.info("backChannelRequestTimeoutMs_="+r)),r=n;const h=e.g;if(h){const e=h.g?h.g.getResponseHeader("X-Client-Wire-Protocol"):null;if(e){var s=r.i;!s.g&&(P(e,"spdy")||P(e,"quic")||P(e,"h2"))&&(s.j=s.l,s.g=new Set,s.h&&(Sn(s,s.h),s.h=null))}if(r.D){const e=h.g?h.g.getResponseHeader("X-HTTP-Session-Id"):null;e&&(r.sa=e,en(r.F,r.D,e))}}n.G=3,n.j&&n.j.xa(),n.$&&(n.O=Date.now()-e.F,n.h.info("Handshake RTT: "+n.O+"ms")),r=n;var o=e;if(r.oa=Tr(r,r.H?r.la:null,r.W),o.J){Cn(r.i,o);var a=o,l=r.K;l&&a.setTimeout(l),a.B&&(Mt(a),Dt(a)),r.g=o}else fr(r);0<n.l.length&&lr(n)}else"stop"!=c[0]&&"close"!=c[0]||br(n,7);else 3==n.G&&("stop"==c[0]||"close"==c[0]?"stop"==c[0]?br(n,7):ir(n):"noop"!=c[0]&&n.j&&n.j.wa(c),n.A=0)}ut(4)}catch(c){}}function jt(e){if(e.R&&"function"==typeof e.R)return e.R();if("string"===typeof e)return e.split("");if(f(e)){for(var t=[],n=e.length,r=0;r<n;r++)t.push(e[r]);return t}for(r in t=[],n=0,e)t[n++]=e[r];return t}function Bt(e,t){if(e.forEach&&"function"==typeof e.forEach)e.forEach(t,void 0);else if(f(e)||"string"===typeof e)C(e,t,void 0);else{if(e.T&&"function"==typeof e.T)var n=e.T();else if(e.R&&"function"==typeof e.R)n=void 0;else if(f(e)||"string"===typeof e){n=[];for(var r=e.length,i=0;i<r;i++)n.push(i)}else for(i in n=[],r=0,e)n[r++]=i;r=jt(e),i=r.length;for(var s=0;s<i;s++)t.call(void 0,r[s],n&&n[s],e)}}function $t(e,t){this.h={},this.g=[],this.i=0;var n=arguments.length;if(1<n){if(n%2)throw Error("Uneven number of arguments");for(var r=0;r<n;r+=2)this.set(arguments[r],arguments[r+1])}else if(e)if(e instanceof $t)for(n=e.T(),r=0;r<n.length;r++)this.set(n[r],e.get(n[r]));else for(r in e)this.set(r,e[r])}function zt(e){if(e.i!=e.g.length){for(var t=0,n=0;t<e.g.length;){var r=e.g[t];Ht(e.h,r)&&(e.g[n++]=r),t++}e.g.length=n}if(e.i!=e.g.length){var i={};for(n=t=0;t<e.g.length;)r=e.g[t],Ht(i,r)||(e.g[n++]=r,i[r]=1),t++;e.g.length=n}}function Ht(e,t){return Object.prototype.hasOwnProperty.call(e,t)}r=It.prototype,r.setTimeout=function(e){this.P=e},r.gb=function(e){e=e.target;const t=this.L;t&&3==Zn(e)?t.l():this.Ia(e)},r.Ia=function(e){try{if(e==this.g)e:{const u=Zn(this.g);var t=this.g.Da();const d=this.g.ba();if(!(3>u)&&(3!=u||G||this.g&&(this.h.h||this.g.ga()||Qn(this.g)))){this.I||4!=u||7==t||ut(8==t||0>=d?3:2),Mt(this);var n=this.g.ba();this.N=n;t:if(Nt(this)){var r=Qn(this.g);e="";var i=r.length,s=4==Zn(this.g);if(!this.h.i){if("undefined"===typeof TextDecoder){Vt(this),qt(this);var o="";break t}this.h.i=new h.TextDecoder}for(t=0;t<i;t++)this.h.h=!0,e+=this.h.i.decode(r[t],{stream:s&&t==i-1});r.splice(0,i),this.h.g+=e,this.C=0,o=this.h.g}else o=this.g.ga();if(this.i=200==n,nt(this.j,this.u,this.A,this.m,this.X,u,n),this.i){if(this.$&&!this.J){t:{if(this.g){var a,l=this.g;if((a=l.g?l.g.getResponseHeader("X-HTTP-Initial-Response"):null)&&!O(a)){var c=a;break t}}c=null}if(!(n=c)){this.i=!1,this.o=3,dt(12),Vt(this),qt(this);break e}rt(this.j,this.m,n,"Initial handshake response via X-HTTP-Initial-Response"),this.J=!0,Ut(this,n)}this.U?(Lt(this,u,o),G&&this.i&&3==u&&(Ze(this.V,this.W,"tick",this.fb),this.W.start())):(rt(this.j,this.m,o,null),Ut(this,o)),4==u&&Vt(this),this.i&&!this.I&&(4==u?yr(this.l,this):(this.i=!1,Dt(this)))}else 400==n&&0<o.indexOf("Unknown SID")?(this.o=3,dt(12)):(this.o=0,dt(13)),Vt(this),qt(this)}}}catch(u){}},r.fb=function(){if(this.g){var e=Zn(this.g),t=this.g.ga();this.C<t.length&&(Mt(this),Lt(this,e,t),this.i&&4!=e&&Dt(this))}},r.cancel=function(){this.I=!0,Vt(this)},r.eb=function(){this.B=null;const e=Date.now();0<=e-this.Y?(it(this.j,this.A),2!=this.K&&(ut(3),dt(17)),Vt(this),this.o=2,qt(this)):Ft(this,this.Y-e)},r=$t.prototype,r.R=function(){zt(this);for(var e=[],t=0;t<this.g.length;t++)e.push(this.h[this.g[t]]);return e},r.T=function(){return zt(this),this.g.concat()},r.get=function(e,t){return Ht(this.h,e)?this.h[e]:t},r.set=function(e,t){Ht(this.h,e)||(this.i++,this.g.push(e)),this.h[e]=t},r.forEach=function(e,t){for(var n=this.T(),r=0;r<n.length;r++){var i=n[r],s=this.get(i);e.call(t,s,i,this)}};var Kt=/^(?:([^:/?#.]+):)?(?:\/\/(?:([^\\/?#]*)@)?([^\\/?#]*?)(?::([0-9]+))?(?=[\\/?#]|$))?([^?#]+)?(?:\?([^#]*))?(?:#([\s\S]*))?$/;function Wt(e,t){if(e){e=e.split("&");for(var n=0;n<e.length;n++){var r=e[n].indexOf("="),i=null;if(0<=r){var s=e[n].substring(0,r);i=e[n].substring(r+1)}else s=e[n];t(s,i?decodeURIComponent(i.replace(/\+/g," ")):"")}}}function Gt(e,t){if(this.i=this.s=this.j="",this.m=null,this.o=this.l="",this.g=!1,e instanceof Gt){this.g=void 0!==t?t:e.g,Yt(this,e.j),this.s=e.s,Xt(this,e.i),Zt(this,e.m),this.l=e.l,t=e.h;var n=new fn;n.i=t.i,t.g&&(n.g=new $t(t.g),n.h=t.h),Qt(this,n),this.o=e.o}else e&&(n=String(e).match(Kt))?(this.g=!!t,Yt(this,n[1]||"",!0),this.s=sn(n[2]||""),Xt(this,n[3]||"",!0),Zt(this,n[4]),this.l=sn(n[5]||"",!0),Qt(this,n[6]||"",!0),this.o=sn(n[7]||"")):(this.g=!!t,this.h=new fn(null,this.g))}function Jt(e){return new Gt(e)}function Yt(e,t,n){e.j=n?sn(t,!0):t,e.j&&(e.j=e.j.replace(/:$/,""))}function Xt(e,t,n){e.i=n?sn(t,!0):t}function Zt(e,t){if(t){if(t=Number(t),isNaN(t)||0>t)throw Error("Bad port number "+t);e.m=t}else e.m=null}function Qt(e,t,n){t instanceof fn?(e.h=t,wn(e.h,e.g)):(n||(t=on(t,hn)),e.h=new fn(t,e.g))}function en(e,t,n){e.h.set(t,n)}function tn(e){return en(e,"zx",Math.floor(2147483648*Math.random()).toString(36)+Math.abs(Math.floor(2147483648*Math.random())^Date.now()).toString(36)),e}function nn(e){return e instanceof Gt?Jt(e):new Gt(e,void 0)}function rn(e,t,n,r){var i=new Gt(null,void 0);return e&&Yt(i,e),t&&Xt(i,t),n&&Zt(i,n),r&&(i.l=r),i}function sn(e,t){return e?t?decodeURI(e.replace(/%25/g,"%2525")):decodeURIComponent(e):""}function on(e,t,n){return"string"===typeof e?(e=encodeURI(e).replace(t,an),n&&(e=e.replace(/%25([0-9a-fA-F]{2})/g,"%$1")),e):null}function an(e){return e=e.charCodeAt(0),"%"+(e>>4&15).toString(16)+(15&e).toString(16)}Gt.prototype.toString=function(){var e=[],t=this.j;t&&e.push(on(t,ln,!0),":");var n=this.i;return(n||"file"==t)&&(e.push("//"),(t=this.s)&&e.push(on(t,ln,!0),"@"),e.push(encodeURIComponent(String(n)).replace(/%25([0-9a-fA-F]{2})/g,"%$1")),n=this.m,null!=n&&e.push(":",String(n))),(n=this.l)&&(this.i&&"/"!=n.charAt(0)&&e.push("/"),e.push(on(n,"/"==n.charAt(0)?un:cn,!0))),(n=this.h.toString())&&e.push("?",n),(n=this.o)&&e.push("#",on(n,dn)),e.join("")};var ln=/[#\/\?@]/g,cn=/[#\?:]/g,un=/[#\?]/g,hn=/[#\?@]/g,dn=/#/g;function fn(e,t){this.h=this.g=null,this.i=e||null,this.j=!!t}function pn(e){e.g||(e.g=new $t,e.h=0,e.i&&Wt(e.i,(function(t,n){e.add(decodeURIComponent(t.replace(/\+/g," ")),n)})))}function gn(e,t){pn(e),t=yn(e,t),Ht(e.g.h,t)&&(e.i=null,e.h-=e.g.get(t).length,e=e.g,Ht(e.h,t)&&(delete e.h[t],e.i--,e.g.length>2*e.i&&zt(e)))}function mn(e,t){return pn(e),t=yn(e,t),Ht(e.g.h,t)}function vn(e,t,n){gn(e,t),0<n.length&&(e.i=null,e.g.set(yn(e,t),R(n)),e.h+=n.length)}function yn(e,t){return t=String(t),e.j&&(t=t.toLowerCase()),t}function wn(e,t){t&&!e.j&&(pn(e),e.i=null,e.g.forEach((function(e,t){var n=t.toLowerCase();t!=n&&(gn(this,t),vn(this,n,e))}),e)),e.j=t}r=fn.prototype,r.add=function(e,t){pn(this),this.i=null,e=yn(this,e);var n=this.g.get(e);return n||this.g.set(e,n=[]),n.push(t),this.h+=1,this},r.forEach=function(e,t){pn(this),this.g.forEach((function(n,r){C(n,(function(n){e.call(t,n,r,this)}),this)}),this)},r.T=function(){pn(this);for(var e=this.g.R(),t=this.g.T(),n=[],r=0;r<t.length;r++)for(var i=e[r],s=0;s<i.length;s++)n.push(t[r]);return n},r.R=function(e){pn(this);var t=[];if("string"===typeof e)mn(this,e)&&(t=x(t,this.g.get(yn(this,e))));else{e=this.g.R();for(var n=0;n<e.length;n++)t=x(t,e[n])}return t},r.set=function(e,t){return pn(this),this.i=null,e=yn(this,e),mn(this,e)&&(this.h-=this.g.get(e).length),this.g.set(e,[t]),this.h+=1,this},r.get=function(e,t){return e?(e=this.R(e),0<e.length?String(e[0]):t):t},r.toString=function(){if(this.i)return this.i;if(!this.g)return"";for(var e=[],t=this.g.T(),n=0;n<t.length;n++){var r=t[n],i=encodeURIComponent(String(r));r=this.R(r);for(var s=0;s<r.length;s++){var o=i;""!==r[s]&&(o+="="+encodeURIComponent(String(r[s]))),e.push(o)}}return this.i=e.join("&")};var bn=class{constructor(e,t){this.h=e,this.g=t}};function _n(e){this.l=e||Tn,h.PerformanceNavigationTiming?(e=h.performance.getEntriesByType("navigation"),e=0<e.length&&("hq"==e[0].nextHopProtocol||"h2"==e[0].nextHopProtocol)):e=!!(h.g&&h.g.Ea&&h.g.Ea()&&h.g.Ea().Zb),this.j=e?this.l:1,this.g=null,1<this.j&&(this.g=new Set),this.h=null,this.i=[]}var Tn=10;function En(e){return!!e.h||!!e.g&&e.g.size>=e.j}function kn(e){return e.h?1:e.g?e.g.size:0}function In(e,t){return e.h?e.h==t:!!e.g&&e.g.has(t)}function Sn(e,t){e.g?e.g.add(t):e.h=t}function Cn(e,t){e.h&&e.h==t?e.h=null:e.g&&e.g.has(t)&&e.g.delete(t)}function An(e){if(null!=e.h)return e.i.concat(e.h.D);if(null!=e.g&&0!==e.g.size){let t=e.i;for(const n of e.g.values())t=t.concat(n.D);return t}return R(e.i)}function xn(){}function Rn(){this.g=new xn}function On(e,t,n){const r=n||"";try{Bt(e,(function(e,n){let i=e;p(e)&&(i=Le(e)),t.push(r+n+"="+encodeURIComponent(i))}))}catch(i){throw t.push(r+"type="+encodeURIComponent("_badmap")),i}}function Nn(e,t){const n=new et;if(h.Image){const r=new Image;r.onload=_(Ln,n,r,"TestLoadImage: loaded",!0,t),r.onerror=_(Ln,n,r,"TestLoadImage: error",!1,t),r.onabort=_(Ln,n,r,"TestLoadImage: abort",!1,t),r.ontimeout=_(Ln,n,r,"TestLoadImage: timeout",!1,t),h.setTimeout((function(){r.ontimeout&&r.ontimeout()}),1e4),r.src=e}else t(!1)}function Ln(e,t,n,r,i){try{t.onload=null,t.onerror=null,t.onabort=null,t.ontimeout=null,i(r)}catch(s){}}function Pn(e){this.l=e.$b||null,this.j=e.ib||!1}function Dn(e,t){Re.call(this),this.D=e,this.u=t,this.m=void 0,this.readyState=Fn,this.status=0,this.responseType=this.responseText=this.response=this.statusText="",this.onreadystatechange=null,this.v=new Headers,this.h=null,this.C="GET",this.B="",this.g=!1,this.A=this.j=this.l=null}_n.prototype.cancel=function(){if(this.i=An(this),this.h)this.h.cancel(),this.h=null;else if(this.g&&0!==this.g.size){for(const e of this.g.values())e.cancel();this.g.clear()}},xn.prototype.stringify=function(e){return h.JSON.stringify(e,void 0)},xn.prototype.parse=function(e){return h.JSON.parse(e,void 0)},T(Pn,vt),Pn.prototype.g=function(){return new Dn(this.l,this.j)},Pn.prototype.i=function(e){return function(){return e}}({}),T(Dn,Re);var Fn=0;function Mn(e){e.j.read().then(e.Sa.bind(e)).catch(e.ha.bind(e))}function qn(e){e.readyState=4,e.l=null,e.j=null,e.A=null,Vn(e)}function Vn(e){e.onreadystatechange&&e.onreadystatechange.call(e)}r=Dn.prototype,r.open=function(e,t){if(this.readyState!=Fn)throw this.abort(),Error("Error reopening a connection");this.C=e,this.B=t,this.readyState=1,Vn(this)},r.send=function(e){if(1!=this.readyState)throw this.abort(),Error("need to call open() first. ");this.g=!0;const t={headers:this.v,method:this.C,credentials:this.m,cache:void 0};e&&(t.body=e),(this.D||h).fetch(new Request(this.B,t)).then(this.Va.bind(this),this.ha.bind(this))},r.abort=function(){this.response=this.responseText="",this.v=new Headers,this.status=0,this.j&&this.j.cancel("Request was aborted."),1<=this.readyState&&this.g&&4!=this.readyState&&(this.g=!1,qn(this)),this.readyState=Fn},r.Va=function(e){if(this.g&&(this.l=e,this.h||(this.status=this.l.status,this.statusText=this.l.statusText,this.h=e.headers,this.readyState=2,Vn(this)),this.g&&(this.readyState=3,Vn(this),this.g)))if("arraybuffer"===this.responseType)e.arrayBuffer().then(this.Ta.bind(this),this.ha.bind(this));else if("undefined"!==typeof h.ReadableStream&&"body"in e){if(this.j=e.body.getReader(),this.u){if(this.responseType)throw Error('responseType must be empty for "streamBinaryChunks" mode responses.');this.response=[]}else this.response=this.responseText="",this.A=new TextDecoder;Mn(this)}else e.text().then(this.Ua.bind(this),this.ha.bind(this))},r.Sa=function(e){if(this.g){if(this.u&&e.value)this.response.push(e.value);else if(!this.u){var t=e.value?e.value:new Uint8Array(0);(t=this.A.decode(t,{stream:!e.done}))&&(this.response=this.responseText+=t)}e.done?qn(this):Vn(this),3==this.readyState&&Mn(this)}},r.Ua=function(e){this.g&&(this.response=this.responseText=e,qn(this))},r.Ta=function(e){this.g&&(this.response=e,qn(this))},r.ha=function(){this.g&&qn(this)},r.setRequestHeader=function(e,t){this.v.append(e,t)},r.getResponseHeader=function(e){return this.h&&this.h.get(e.toLowerCase())||""},r.getAllResponseHeaders=function(){if(!this.h)return"";const e=[],t=this.h.entries();for(var n=t.next();!n.done;)n=n.value,e.push(n[0]+": "+n[1]),n=t.next();return e.join("\r\n")},Object.defineProperty(Dn.prototype,"withCredentials",{get:function(){return"include"===this.m},set:function(e){this.m=e?"include":"same-origin"}});var Un=h.JSON.parse;function jn(e){Re.call(this),this.headers=new $t,this.u=e||null,this.h=!1,this.C=this.g=null,this.H="",this.m=0,this.j="",this.l=this.F=this.v=this.D=!1,this.B=0,this.A=null,this.J=Bn,this.K=this.L=!1}T(jn,Re);var Bn="",$n=/^https?$/i,zn=["POST","PUT"];function Hn(e){return K&&re()&&"number"===typeof e.timeout&&void 0!==e.ontimeout}function Kn(e){return"content-type"==e.toLowerCase()}function Wn(e,t){e.h=!1,e.g&&(e.l=!0,e.g.abort(),e.l=!1),e.j=t,e.m=5,Gn(e),Yn(e)}function Gn(e){e.D||(e.D=!0,Oe(e,"complete"),Oe(e,"error"))}function Jn(e){if(e.h&&"undefined"!=typeof u&&(!e.C[1]||4!=Zn(e)||2!=e.ba()))if(e.v&&4==Zn(e))We(e.Fa,0,e);else if(Oe(e,"readystatechange"),4==Zn(e)){e.h=!1;try{const l=e.ba();e:switch(l){case 200:case 201:case 202:case 204:case 206:case 304:case 1223:var t=!0;break e;default:t=!1}var n;if(!(n=t)){var r;if(r=0===l){var i=String(e.H).match(Kt)[1]||null;if(!i&&h.self&&h.self.location){var s=h.self.location.protocol;i=s.substr(0,s.length-1)}r=!$n.test(i?i.toLowerCase():"")}n=r}if(n)Oe(e,"complete"),Oe(e,"success");else{e.m=6;try{var o=2<Zn(e)?e.g.statusText:""}catch(a){o=""}e.j=o+" ["+e.ba()+"]",Gn(e)}}finally{Yn(e)}}}function Yn(e,t){if(e.g){Xn(e);const r=e.g,i=e.C[0]?d:null;e.g=null,e.C=null,t||Oe(e,"ready");try{r.onreadystatechange=i}catch(n){}}}function Xn(e){e.g&&e.K&&(e.g.ontimeout=null),e.A&&(h.clearTimeout(e.A),e.A=null)}function Zn(e){return e.g?e.g.readyState:0}function Qn(e){try{if(!e.g)return null;if("response"in e.g)return e.g.response;switch(e.J){case Bn:case"text":return e.g.responseText;case"arraybuffer":if("mozResponseArrayBuffer"in e.g)return e.g.mozResponseArrayBuffer}return null}catch(t){return null}}function er(e){let t="";return q(e,(function(e,n){t+=n,t+=":",t+=e,t+="\r\n"})),t}function tr(e,t,n){e:{for(r in n){var r=!1;break e}r=!0}r||(n=er(n),"string"===typeof e?null!=n&&encodeURIComponent(String(n)):en(e,t,n))}function nr(e,t,n){return n&&n.internalChannelParams&&n.internalChannelParams[e]||t}function rr(e){this.za=0,this.l=[],this.h=new et,this.la=this.oa=this.F=this.W=this.g=this.sa=this.D=this.aa=this.o=this.P=this.s=null,this.Za=this.V=0,this.Xa=nr("failFast",!1,e),this.N=this.v=this.u=this.m=this.j=null,this.X=!0,this.I=this.ta=this.U=-1,this.Y=this.A=this.C=0,this.Pa=nr("baseRetryDelayMs",5e3,e),this.$a=nr("retryDelaySeedMs",1e4,e),this.Ya=nr("forwardChannelMaxRetries",2,e),this.ra=nr("forwardChannelRequestTimeoutMs",2e4,e),this.qa=e&&e.xmlHttpFactory||void 0,this.Ba=e&&e.Yb||!1,this.K=void 0,this.H=e&&e.supportsCrossDomainXhr||!1,this.J="",this.i=new _n(e&&e.concurrentRequestLimit),this.Ca=new Rn,this.ja=e&&e.fastHandshake||!1,this.Ra=e&&e.Wb||!1,e&&e.Aa&&this.h.Aa(),e&&e.forceLongPolling&&(this.X=!1),this.$=!this.ja&&this.X&&e&&e.detectBufferingProxy||!1,this.ka=void 0,this.O=0,this.L=!1,this.B=null,this.Wa=!e||!1!==e.Xb}function ir(e){if(or(e),3==e.G){var t=e.V++,n=Jt(e.F);en(n,"SID",e.J),en(n,"RID",t),en(n,"TYPE","terminate"),hr(e,n),t=new It(e,e.h,t,void 0),t.K=2,t.v=tn(Jt(n)),n=!1,h.navigator&&h.navigator.sendBeacon&&(n=h.navigator.sendBeacon(t.v.toString(),"")),!n&&h.Image&&((new Image).src=t.v,n=!0),n||(t.g=Er(t.l,null),t.g.ea(t.v)),t.F=Date.now(),Dt(t)}_r(e)}function sr(e){e.g&&(gr(e),e.g.cancel(),e.g=null)}function or(e){sr(e),e.u&&(h.clearTimeout(e.u),e.u=null),vr(e),e.i.cancel(),e.m&&("number"===typeof e.m&&h.clearTimeout(e.m),e.m=null)}function ar(e,t){e.l.push(new bn(e.Za++,t)),3==e.G&&lr(e)}function lr(e){En(e.i)||e.m||(e.m=!0,Ue(e.Ha,e),e.C=0)}function cr(e,t){return!(kn(e.i)>=e.i.j-(e.m?1:0))&&(e.m?(e.l=t.D.concat(e.l),!0):!(1==e.G||2==e.G||e.C>=(e.Xa?0:e.Ya))&&(e.m=pt(b(e.Ha,e,t),wr(e,e.C)),e.C++,!0))}function ur(e,t){var n;n=t?t.m:e.V++;const r=Jt(e.F);en(r,"SID",e.J),en(r,"RID",n),en(r,"AID",e.U),hr(e,r),e.o&&e.s&&tr(r,e.o,e.s),n=new It(e,e.h,n,e.C+1),null===e.o&&(n.H=e.s),t&&(e.l=t.D.concat(e.l)),t=dr(e,n,1e3),n.setTimeout(Math.round(.5*e.ra)+Math.round(.5*e.ra*Math.random())),Sn(e.i,n),Rt(n,r,t)}function hr(e,t){e.j&&Bt({},(function(e,n){en(t,n,e)}))}function dr(e,t,n){n=Math.min(e.l.length,n);var r=e.j?b(e.j.Oa,e.j,e):null;e:{var i=e.l;let t=-1;for(;;){const e=["count="+n];-1==t?0<n?(t=i[0].h,e.push("ofs="+t)):t=0:e.push("ofs="+t);let s=!0;for(let o=0;o<n;o++){let n=i[o].h;const a=i[o].g;if(n-=t,0>n)t=Math.max(0,i[o].h-100),s=!1;else try{On(a,e,"req"+n+"_")}catch(ti){r&&r(a)}}if(s){r=e.join("&");break e}}}return e=e.l.splice(0,n),t.D=e,r}function fr(e){e.g||e.u||(e.Y=1,Ue(e.Ga,e),e.A=0)}function pr(e){return!(e.g||e.u||3<=e.A)&&(e.Y++,e.u=pt(b(e.Ga,e),wr(e,e.A)),e.A++,!0)}function gr(e){null!=e.B&&(h.clearTimeout(e.B),e.B=null)}function mr(e){e.g=new It(e,e.h,"rpc",e.Y),null===e.o&&(e.g.H=e.s),e.g.O=0;var t=Jt(e.oa);en(t,"RID","rpc"),en(t,"SID",e.J),en(t,"CI",e.N?"0":"1"),en(t,"AID",e.U),hr(e,t),en(t,"TYPE","xmlhttp"),e.o&&e.s&&tr(t,e.o,e.s),e.K&&e.g.setTimeout(e.K);var n=e.g;e=e.la,n.K=1,n.v=tn(Jt(t)),n.s=null,n.U=!0,Ot(n,e)}function vr(e){null!=e.v&&(h.clearTimeout(e.v),e.v=null)}function yr(e,t){var n=null;if(e.g==t){vr(e),gr(e),e.g=null;var r=2}else{if(!In(e.i,t))return;n=t.D,Cn(e.i,t),r=1}if(e.I=t.N,0!=e.G)if(t.i)if(1==r){n=t.s?t.s.length:0,t=Date.now()-t.F;var i=e.C;r=lt(),Oe(r,new ft(r,n,t,i)),lr(e)}else fr(e);else if(i=t.o,3==i||0==i&&0<e.I||!(1==r&&cr(e,t)||2==r&&pr(e)))switch(n&&0<n.length&&(t=e.i,t.i=t.i.concat(n)),i){case 1:br(e,5);break;case 4:br(e,10);break;case 3:br(e,6);break;default:br(e,2)}}function wr(e,t){let n=e.Pa+Math.floor(Math.random()*e.$a);return e.j||(n*=2),n*t}function br(e,t){if(e.h.info("Error code "+t),2==t){var n=null;e.j&&(n=null);var r=b(e.jb,e);n||(n=new Gt("//www.google.com/images/cleardot.gif"),h.location&&"http"==h.location.protocol||Yt(n,"https"),tn(n)),Nn(n.toString(),r)}else dt(2);e.G=0,e.j&&e.j.va(t),_r(e),or(e)}function _r(e){e.G=0,e.I=-1,e.j&&(0==An(e.i).length&&0==e.l.length||(e.i.i.length=0,R(e.l),e.l.length=0),e.j.ua())}function Tr(e,t,n){let r=nn(n);if(""!=r.i)t&&Xt(r,t+"."+r.i),Zt(r,r.m);else{const e=h.location;r=rn(e.protocol,t?t+"."+e.hostname:e.hostname,+e.port,n)}return e.aa&&q(e.aa,(function(e,t){en(r,t,e)})),t=e.D,n=e.sa,t&&n&&en(r,t,n),en(r,"VER",e.ma),hr(e,r),r}function Er(e,t,n){if(t&&!e.H)throw Error("Can't create secondary domain capable XhrIo object.");return t=n&&e.Ba&&!e.qa?new jn(new Pn({ib:!0})):new jn(e.qa),t.L=e.H,t}function kr(){}function Ir(){if(K&&!(10<=Number(se)))throw Error("Environmental error: no available transport.")}function Sr(e,t){Re.call(this),this.g=new rr(t),this.l=e,this.h=t&&t.messageUrlParams||null,e=t&&t.messageHeaders||null,t&&t.clientProtocolHeaderRequired&&(e?e["X-Client-Protocol"]="webchannel":e={"X-Client-Protocol":"webchannel"}),this.g.s=e,e=t&&t.initMessageHeaders||null,t&&t.messageContentType&&(e?e["X-WebChannel-Content-Type"]=t.messageContentType:e={"X-WebChannel-Content-Type":t.messageContentType}),t&&t.ya&&(e?e["X-WebChannel-Client-Profile"]=t.ya:e={"X-WebChannel-Client-Profile":t.ya}),this.g.P=e,(e=t&&t.httpHeadersOverwriteParam)&&!O(e)&&(this.g.o=e),this.A=t&&t.supportsCrossDomainXhr||!1,this.v=t&&t.sendRawJson||!1,(t=t&&t.httpSessionIdParam)&&!O(t)&&(this.g.D=t,e=this.h,null!==e&&t in e&&(e=this.h,t in e&&delete e[t])),this.j=new xr(this)}function Cr(e){Tt.call(this);var t=e.__sm__;if(t){e:{for(const n in t){e=n;break e}e=void 0}(this.i=e)&&(e=this.i,t=null!==t&&e in t?t[e]:void 0),this.data=t}else this.data=e}function Ar(){Et.call(this),this.status=1}function xr(e){this.g=e}r=jn.prototype,r.ea=function(e,t,n,r){if(this.g)throw Error("[goog.net.XhrIo] Object is active with another request="+this.H+"; newUri="+e);t=t?t.toUpperCase():"GET",this.H=e,this.j="",this.m=0,this.D=!1,this.h=!0,this.g=this.u?this.u.g():bt.g(),this.C=this.u?yt(this.u):yt(bt),this.g.onreadystatechange=b(this.Fa,this);try{this.F=!0,this.g.open(t,String(e),!0),this.F=!1}catch(s){return void Wn(this,s)}e=n||"";const i=new $t(this.headers);r&&Bt(r,(function(e,t){i.set(t,e)})),r=A(i.T()),n=h.FormData&&e instanceof h.FormData,!(0<=S(zn,t))||r||n||i.set("Content-Type","application/x-www-form-urlencoded;charset=utf-8"),i.forEach((function(e,t){this.g.setRequestHeader(t,e)}),this),this.J&&(this.g.responseType=this.J),"withCredentials"in this.g&&this.g.withCredentials!==this.L&&(this.g.withCredentials=this.L);try{Xn(this),0<this.B&&((this.K=Hn(this.g))?(this.g.timeout=this.B,this.g.ontimeout=b(this.pa,this)):this.A=We(this.pa,this.B,this)),this.v=!0,this.g.send(e),this.v=!1}catch(s){Wn(this,s)}},r.pa=function(){"undefined"!=typeof u&&this.g&&(this.j="Timed out after "+this.B+"ms, aborting",this.m=8,Oe(this,"timeout"),this.abort(8))},r.abort=function(e){this.g&&this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1,this.m=e||7,Oe(this,"complete"),Oe(this,"abort"),Yn(this))},r.M=function(){this.g&&(this.h&&(this.h=!1,this.l=!0,this.g.abort(),this.l=!1),Yn(this,!0)),jn.Z.M.call(this)},r.Fa=function(){this.s||(this.F||this.v||this.l?Jn(this):this.cb())},r.cb=function(){Jn(this)},r.ba=function(){try{return 2<Zn(this)?this.g.status:-1}catch(e){return-1}},r.ga=function(){try{return this.g?this.g.responseText:""}catch(e){return""}},r.Qa=function(e){if(this.g){var t=this.g.responseText;return e&&0==t.indexOf(e)&&(t=t.substring(e.length)),Un(t)}},r.Da=function(){return this.m},r.La=function(){return"string"===typeof this.j?this.j:String(this.j)},r=rr.prototype,r.ma=8,r.G=1,r.hb=function(e){try{this.h.info("Origin Trials invoked: "+e)}catch(t){}},r.Ha=function(e){if(this.m)if(this.m=null,1==this.G){if(!e){this.V=Math.floor(1e5*Math.random()),e=this.V++;const i=new It(this,this.h,e,void 0);let s=this.s;if(this.P&&(s?(s=V(s),j(s,this.P)):s=this.P),null===this.o&&(i.H=s),this.ja)e:{for(var t=0,n=0;n<this.l.length;n++){var r=this.l[n];if(r="__data__"in r.g&&(r=r.g.__data__,"string"===typeof r)?r.length:void 0,void 0===r)break;if(t+=r,4096<t){t=n;break e}if(4096===t||n===this.l.length-1){t=n+1;break e}}t=1e3}else t=1e3;t=dr(this,i,t),n=Jt(this.F),en(n,"RID",e),en(n,"CVER",22),this.D&&en(n,"X-HTTP-Session-Id",this.D),hr(this,n),this.o&&s&&tr(n,this.o,s),Sn(this.i,i),this.Ra&&en(n,"TYPE","init"),this.ja?(en(n,"$req",t),en(n,"SID","null"),i.$=!0,Rt(i,n,null)):Rt(i,n,t),this.G=2}}else 3==this.G&&(e?ur(this,e):0==this.l.length||En(this.i)||ur(this))},r.Ga=function(){if(this.u=null,mr(this),this.$&&!(this.L||null==this.g||0>=this.O)){var e=2*this.O;this.h.info("BP detection timer enabled: "+e),this.B=pt(b(this.bb,this),e)}},r.bb=function(){this.B&&(this.B=null,this.h.info("BP detection timeout reached."),this.h.info("Buffering proxy detected and switch to long-polling!"),this.N=!1,this.L=!0,dt(10),sr(this),mr(this))},r.ab=function(){null!=this.v&&(this.v=null,sr(this),pr(this),dt(19))},r.jb=function(e){e?(this.h.info("Successfully pinged google.com"),dt(2)):(this.h.info("Failed to ping google.com"),dt(1))},r=kr.prototype,r.xa=function(){},r.wa=function(){},r.va=function(){},r.ua=function(){},r.Oa=function(){},Ir.prototype.g=function(e,t){return new Sr(e,t)},T(Sr,Re),Sr.prototype.m=function(){this.g.j=this.j,this.A&&(this.g.H=!0);var e=this.g,t=this.l,n=this.h||void 0;e.Wa&&(e.h.info("Origin Trials enabled."),Ue(b(e.hb,e,t))),dt(0),e.W=t,e.aa=n||{},e.N=e.X,e.F=Tr(e,null,e.W),lr(e)},Sr.prototype.close=function(){ir(this.g)},Sr.prototype.u=function(e){if("string"===typeof e){var t={};t.__data__=e,ar(this.g,t)}else this.v?(t={},t.__data__=Le(e),ar(this.g,t)):ar(this.g,e)},Sr.prototype.M=function(){this.g.j=null,delete this.j,ir(this.g),delete this.g,Sr.Z.M.call(this)},T(Cr,Tt),T(Ar,Et),T(xr,kr),xr.prototype.xa=function(){Oe(this.g,"a")},xr.prototype.wa=function(e){Oe(this.g,new Cr(e))},xr.prototype.va=function(e){Oe(this.g,new Ar(e))},xr.prototype.ua=function(){Oe(this.g,"b")},Ir.prototype.createWebChannel=Ir.prototype.g,Sr.prototype.send=Sr.prototype.u,Sr.prototype.open=Sr.prototype.m,Sr.prototype.close=Sr.prototype.close,gt.NO_ERROR=0,gt.TIMEOUT=8,gt.HTTP_ERROR=6,mt.COMPLETE="complete",wt.EventType=_t,_t.OPEN="a",_t.CLOSE="b",_t.ERROR="c",_t.MESSAGE="d",Re.prototype.listen=Re.prototype.N,jn.prototype.listenOnce=jn.prototype.O,jn.prototype.getLastError=jn.prototype.La,jn.prototype.getLastErrorCode=jn.prototype.Da,jn.prototype.getStatus=jn.prototype.ba,jn.prototype.getResponseJson=jn.prototype.Qa,jn.prototype.getResponseText=jn.prototype.ga,jn.prototype.send=jn.prototype.ea;var Rr=c.createWebChannelTransport=function(){return new Ir},Or=c.getStatEventTarget=function(){return lt()},Nr=c.ErrorCode=gt,Lr=c.EventType=mt,Pr=c.Event=ot,Dr=c.Stat={rb:0,ub:1,vb:2,Ob:3,Tb:4,Qb:5,Rb:6,Pb:7,Nb:8,Sb:9,PROXY:10,NOPROXY:11,Lb:12,Hb:13,Ib:14,Gb:15,Jb:16,Kb:17,nb:18,mb:19,ob:20},Fr=c.FetchXmlHttpFactory=Pn,Mr=c.WebChannel=wt,qr=c.XhrIo=jn;const Vr="@firebase/firestore";
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
 */class Ur{constructor(e){this.uid=e}isAuthenticated(){return null!=this.uid}toKey(){return this.isAuthenticated()?"uid:"+this.uid:"anonymous-user"}isEqual(e){return e.uid===this.uid}}Ur.UNAUTHENTICATED=new Ur(null),Ur.GOOGLE_CREDENTIALS=new Ur("google-credentials-uid"),Ur.FIRST_PARTY=new Ur("first-party-uid"),Ur.MOCK_USER=new Ur("mock-user");
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
let jr="9.6.1";
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
 */const Br=new o.Yd("@firebase/firestore");function $r(){return Br.logLevel}function zr(e,...t){if(Br.logLevel<=o["in"].DEBUG){const n=t.map(Wr);Br.debug(`Firestore (${jr}): ${e}`,...n)}}function Hr(e,...t){if(Br.logLevel<=o["in"].ERROR){const n=t.map(Wr);Br.error(`Firestore (${jr}): ${e}`,...n)}}function Kr(e,...t){if(Br.logLevel<=o["in"].WARN){const n=t.map(Wr);Br.warn(`Firestore (${jr}): ${e}`,...n)}}function Wr(e){if("string"==typeof e)return e;try{return t=e,JSON.stringify(t)}catch(t){return e}
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
 */function Gr(e="Unexpected state"){const t=`FIRESTORE (${jr}) INTERNAL ASSERTION FAILED: `+e;throw Hr(t),new Error(t)}function Jr(e,t){e||Gr()}function Yr(e,t){return e}
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
 */const Xr={OK:"ok",CANCELLED:"cancelled",UNKNOWN:"unknown",INVALID_ARGUMENT:"invalid-argument",DEADLINE_EXCEEDED:"deadline-exceeded",NOT_FOUND:"not-found",ALREADY_EXISTS:"already-exists",PERMISSION_DENIED:"permission-denied",UNAUTHENTICATED:"unauthenticated",RESOURCE_EXHAUSTED:"resource-exhausted",FAILED_PRECONDITION:"failed-precondition",ABORTED:"aborted",OUT_OF_RANGE:"out-of-range",UNIMPLEMENTED:"unimplemented",INTERNAL:"internal",UNAVAILABLE:"unavailable",DATA_LOSS:"data-loss"};class Zr extends Error{constructor(e,t){super(t),this.code=e,this.message=t,this.name="FirebaseError",this.toString=()=>`${this.name}: [code=${this.code}]: ${this.message}`}}
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
 */class Qr{constructor(){this.promise=new Promise(((e,t)=>{this.resolve=e,this.reject=t}))}}
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
 */class ei{constructor(e,t){this.user=t,this.type="OAuth",this.headers=new Map,this.headers.set("Authorization",`Bearer ${e}`)}}class ti{getToken(){return Promise.resolve(null)}invalidateToken(){}start(e,t){e.enqueueRetryable((()=>t(Ur.UNAUTHENTICATED)))}shutdown(){}}class ni{constructor(e){this.t=e,this.currentUser=Ur.UNAUTHENTICATED,this.i=0,this.forceRefresh=!1,this.auth=null}start(e,t){let n=this.i;const r=e=>this.i!==n?(n=this.i,t(e)):Promise.resolve();let i=new Qr;this.o=()=>{this.i++,this.currentUser=this.u(),i.resolve(),i=new Qr,e.enqueueRetryable((()=>r(this.currentUser)))};const s=()=>{const t=i;e.enqueueRetryable((async()=>{await t.promise,await r(this.currentUser)}))},o=e=>{zr("FirebaseAuthCredentialsProvider","Auth detected"),this.auth=e,this.auth.addAuthTokenListener(this.o),s()};this.t.onInit((e=>o(e))),setTimeout((()=>{if(!this.auth){const e=this.t.getImmediate({optional:!0});e?o(e):(zr("FirebaseAuthCredentialsProvider","Auth not yet detected"),i.resolve(),i=new Qr)}}),0),s()}getToken(){const e=this.i,t=this.forceRefresh;return this.forceRefresh=!1,this.auth?this.auth.getToken(t).then((t=>this.i!==e?(zr("FirebaseAuthCredentialsProvider","getToken aborted due to token change."),this.getToken()):t?(Jr("string"==typeof t.accessToken),new ei(t.accessToken,this.currentUser)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.auth&&this.auth.removeAuthTokenListener(this.o)}u(){const e=this.auth&&this.auth.getUid();return Jr(null===e||"string"==typeof e),new Ur(e)}}class ri{constructor(e,t,n){this.type="FirstParty",this.user=Ur.FIRST_PARTY,this.headers=new Map,this.headers.set("X-Goog-AuthUser",t);const r=e.auth.getAuthHeaderValueForFirstParty([]);r&&this.headers.set("Authorization",r),n&&this.headers.set("X-Goog-Iam-Authorization-Token",n)}}class ii{constructor(e,t,n){this.h=e,this.l=t,this.m=n}getToken(){return Promise.resolve(new ri(this.h,this.l,this.m))}start(e,t){e.enqueueRetryable((()=>t(Ur.FIRST_PARTY)))}shutdown(){}invalidateToken(){}}class si{constructor(e){this.value=e,this.type="AppCheck",this.headers=new Map,e&&e.length>0&&this.headers.set("x-firebase-appcheck",this.value)}}class oi{constructor(e){this.g=e,this.forceRefresh=!1,this.appCheck=null}start(e,t){this.o=n=>{e.enqueueRetryable((()=>(e=>(null!=e.error&&zr("FirebaseAppCheckTokenProvider",`Error getting App Check token; using placeholder token instead. Error: ${e.error.message}`),t(e.token)))(n)))};const n=e=>{zr("FirebaseAppCheckTokenProvider","AppCheck detected"),this.appCheck=e,this.appCheck.addTokenListener(this.o)};this.g.onInit((e=>n(e))),setTimeout((()=>{if(!this.appCheck){const e=this.g.getImmediate({optional:!0});e?n(e):zr("FirebaseAppCheckTokenProvider","AppCheck not yet detected")}}),0)}getToken(){const e=this.forceRefresh;return this.forceRefresh=!1,this.appCheck?this.appCheck.getToken(e).then((e=>e?(Jr("string"==typeof e.token),new si(e.token)):null)):Promise.resolve(null)}invalidateToken(){this.forceRefresh=!0}shutdown(){this.appCheck&&this.appCheck.removeTokenListener(this.o)}}
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
class ai{constructor(e,t){this.previousValue=e,t&&(t.sequenceNumberHandler=e=>this.p(e),this.T=e=>t.writeSequenceNumber(e))}p(e){return this.previousValue=Math.max(e,this.previousValue),this.previousValue}next(){const e=++this.previousValue;return this.T&&this.T(e),e}}
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
 */function li(e){const t="undefined"!=typeof self&&(self.crypto||self.msCrypto),n=new Uint8Array(e);if(t&&"function"==typeof t.getRandomValues)t.getRandomValues(n);else for(let r=0;r<e;r++)n[r]=Math.floor(256*Math.random());return n}
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
 */ai.I=-1;class ci{static A(){const e="ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz0123456789",t=Math.floor(256/e.length)*e.length;let n="";for(;n.length<20;){const r=li(40);for(let i=0;i<r.length;++i)n.length<20&&r[i]<t&&(n+=e.charAt(r[i]%e.length))}return n}}function ui(e,t){return e<t?-1:e>t?1:0}function hi(e,t,n){return e.length===t.length&&e.every(((e,r)=>n(e,t[r])))}
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
class di{constructor(e,t){if(this.seconds=e,this.nanoseconds=t,t<0)throw new Zr(Xr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(t>=1e9)throw new Zr(Xr.INVALID_ARGUMENT,"Timestamp nanoseconds out of range: "+t);if(e<-62135596800)throw new Zr(Xr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e);if(e>=253402300800)throw new Zr(Xr.INVALID_ARGUMENT,"Timestamp seconds out of range: "+e)}static now(){return di.fromMillis(Date.now())}static fromDate(e){return di.fromMillis(e.getTime())}static fromMillis(e){const t=Math.floor(e/1e3),n=Math.floor(1e6*(e-1e3*t));return new di(t,n)}toDate(){return new Date(this.toMillis())}toMillis(){return 1e3*this.seconds+this.nanoseconds/1e6}_compareTo(e){return this.seconds===e.seconds?ui(this.nanoseconds,e.nanoseconds):ui(this.seconds,e.seconds)}isEqual(e){return e.seconds===this.seconds&&e.nanoseconds===this.nanoseconds}toString(){return"Timestamp(seconds="+this.seconds+", nanoseconds="+this.nanoseconds+")"}toJSON(){return{seconds:this.seconds,nanoseconds:this.nanoseconds}}valueOf(){const e=this.seconds- -62135596800;return String(e).padStart(12,"0")+"."+String(this.nanoseconds).padStart(9,"0")}}
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
 */class fi{constructor(e){this.timestamp=e}static fromTimestamp(e){return new fi(e)}static min(){return new fi(new di(0,0))}compareTo(e){return this.timestamp._compareTo(e.timestamp)}isEqual(e){return this.timestamp.isEqual(e.timestamp)}toMicroseconds(){return 1e6*this.timestamp.seconds+this.timestamp.nanoseconds/1e3}toString(){return"SnapshotVersion("+this.timestamp.toString()+")"}toTimestamp(){return this.timestamp}}
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
 */function pi(e){let t=0;for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t++;return t}function gi(e,t){for(const n in e)Object.prototype.hasOwnProperty.call(e,n)&&t(n,e[n])}function mi(e){for(const t in e)if(Object.prototype.hasOwnProperty.call(e,t))return!1;return!0}
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
 */class vi{constructor(e,t,n){void 0===t?t=0:t>e.length&&Gr(),void 0===n?n=e.length-t:n>e.length-t&&Gr(),this.segments=e,this.offset=t,this.len=n}get length(){return this.len}isEqual(e){return 0===vi.comparator(this,e)}child(e){const t=this.segments.slice(this.offset,this.limit());return e instanceof vi?e.forEach((e=>{t.push(e)})):t.push(e),this.construct(t)}limit(){return this.offset+this.length}popFirst(e){return e=void 0===e?1:e,this.construct(this.segments,this.offset+e,this.length-e)}popLast(){return this.construct(this.segments,this.offset,this.length-1)}firstSegment(){return this.segments[this.offset]}lastSegment(){return this.get(this.length-1)}get(e){return this.segments[this.offset+e]}isEmpty(){return 0===this.length}isPrefixOf(e){if(e.length<this.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}isImmediateParentOf(e){if(this.length+1!==e.length)return!1;for(let t=0;t<this.length;t++)if(this.get(t)!==e.get(t))return!1;return!0}forEach(e){for(let t=this.offset,n=this.limit();t<n;t++)e(this.segments[t])}toArray(){return this.segments.slice(this.offset,this.limit())}static comparator(e,t){const n=Math.min(e.length,t.length);for(let r=0;r<n;r++){const n=e.get(r),i=t.get(r);if(n<i)return-1;if(n>i)return 1}return e.length<t.length?-1:e.length>t.length?1:0}}class yi extends vi{construct(e,t,n){return new yi(e,t,n)}canonicalString(){return this.toArray().join("/")}toString(){return this.canonicalString()}static fromString(...e){const t=[];for(const n of e){if(n.indexOf("//")>=0)throw new Zr(Xr.INVALID_ARGUMENT,`Invalid segment (${n}). Paths must not contain // in them.`);t.push(...n.split("/").filter((e=>e.length>0)))}return new yi(t)}static emptyPath(){return new yi([])}}const wi=/^[_a-zA-Z][_a-zA-Z0-9]*$/;class bi extends vi{construct(e,t,n){return new bi(e,t,n)}static isValidIdentifier(e){return wi.test(e)}canonicalString(){return this.toArray().map((e=>(e=e.replace(/\\/g,"\\\\").replace(/`/g,"\\`"),bi.isValidIdentifier(e)||(e="`"+e+"`"),e))).join(".")}toString(){return this.canonicalString()}isKeyField(){return 1===this.length&&"__name__"===this.get(0)}static keyField(){return new bi(["__name__"])}static fromServerFormat(e){const t=[];let n="",r=0;const i=()=>{if(0===n.length)throw new Zr(Xr.INVALID_ARGUMENT,`Invalid field path (${e}). Paths must not be empty, begin with '.', end with '.', or contain '..'`);t.push(n),n=""};let s=!1;for(;r<e.length;){const t=e[r];if("\\"===t){if(r+1===e.length)throw new Zr(Xr.INVALID_ARGUMENT,"Path has trailing escape character: "+e);const t=e[r+1];if("\\"!==t&&"."!==t&&"`"!==t)throw new Zr(Xr.INVALID_ARGUMENT,"Path has invalid escape sequence: "+e);n+=t,r+=2}else"`"===t?(s=!s,r++):"."!==t||s?(n+=t,r++):(i(),r++)}if(i(),s)throw new Zr(Xr.INVALID_ARGUMENT,"Unterminated ` in path: "+e);return new bi(t)}static emptyPath(){return new bi([])}}
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
 */class _i{constructor(e){this.fields=e,e.sort(bi.comparator)}covers(e){for(const t of this.fields)if(t.isPrefixOf(e))return!0;return!1}isEqual(e){return hi(this.fields,e.fields,((e,t)=>e.isEqual(t)))}}
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
class Ti{constructor(e){this.binaryString=e}static fromBase64String(e){const t=atob(e);return new Ti(t)}static fromUint8Array(e){const t=function(e){let t="";for(let n=0;n<e.length;++n)t+=String.fromCharCode(e[n]);return t}(e);return new Ti(t)}toBase64(){return e=this.binaryString,btoa(e);var e}toUint8Array(){return function(e){const t=new Uint8Array(e.length);for(let n=0;n<e.length;n++)t[n]=e.charCodeAt(n);return t}
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
 */(this.binaryString)}approximateByteSize(){return 2*this.binaryString.length}compareTo(e){return ui(this.binaryString,e.binaryString)}isEqual(e){return this.binaryString===e.binaryString}}Ti.EMPTY_BYTE_STRING=new Ti("");const Ei=new RegExp(/^\d{4}-\d\d-\d\dT\d\d:\d\d:\d\d(?:\.(\d+))?Z$/);function ki(e){if(Jr(!!e),"string"==typeof e){let t=0;const n=Ei.exec(e);if(Jr(!!n),n[1]){let e=n[1];e=(e+"000000000").substr(0,9),t=Number(e)}const r=new Date(e);return{seconds:Math.floor(r.getTime()/1e3),nanos:t}}return{seconds:Ii(e.seconds),nanos:Ii(e.nanos)}}function Ii(e){return"number"==typeof e?e:"string"==typeof e?Number(e):0}function Si(e){return"string"==typeof e?Ti.fromBase64String(e):Ti.fromUint8Array(e)}
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
 */function Ci(e){var t,n;return"server_timestamp"===(null===(n=((null===(t=null==e?void 0:e.mapValue)||void 0===t?void 0:t.fields)||{}).__type__)||void 0===n?void 0:n.stringValue)}function Ai(e){const t=e.mapValue.fields.__previous_value__;return Ci(t)?Ai(t):t}function xi(e){const t=ki(e.mapValue.fields.__local_write_time__.timestampValue);return new di(t.seconds,t.nanos)}
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
 */function Ri(e){return null==e}function Oi(e){return 0===e&&1/e==-1/0}function Ni(e){return"number"==typeof e&&Number.isInteger(e)&&!Oi(e)&&e<=Number.MAX_SAFE_INTEGER&&e>=Number.MIN_SAFE_INTEGER}
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
 */class Li{constructor(e){this.path=e}static fromPath(e){return new Li(yi.fromString(e))}static fromName(e){return new Li(yi.fromString(e).popFirst(5))}hasCollectionId(e){return this.path.length>=2&&this.path.get(this.path.length-2)===e}isEqual(e){return null!==e&&0===yi.comparator(this.path,e.path)}toString(){return this.path.toString()}static comparator(e,t){return yi.comparator(e.path,t.path)}static isDocumentKey(e){return e.length%2==0}static fromSegments(e){return new Li(new yi(e.slice()))}}
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
 */function Pi(e){return"nullValue"in e?0:"booleanValue"in e?1:"integerValue"in e||"doubleValue"in e?2:"timestampValue"in e?3:"stringValue"in e?5:"bytesValue"in e?6:"referenceValue"in e?7:"geoPointValue"in e?8:"arrayValue"in e?9:"mapValue"in e?Ci(e)?4:10:Gr()}function Di(e,t){const n=Pi(e);if(n!==Pi(t))return!1;switch(n){case 0:return!0;case 1:return e.booleanValue===t.booleanValue;case 4:return xi(e).isEqual(xi(t));case 3:return function(e,t){if("string"==typeof e.timestampValue&&"string"==typeof t.timestampValue&&e.timestampValue.length===t.timestampValue.length)return e.timestampValue===t.timestampValue;const n=ki(e.timestampValue),r=ki(t.timestampValue);return n.seconds===r.seconds&&n.nanos===r.nanos}(e,t);case 5:return e.stringValue===t.stringValue;case 6:return function(e,t){return Si(e.bytesValue).isEqual(Si(t.bytesValue))}(e,t);case 7:return e.referenceValue===t.referenceValue;case 8:return function(e,t){return Ii(e.geoPointValue.latitude)===Ii(t.geoPointValue.latitude)&&Ii(e.geoPointValue.longitude)===Ii(t.geoPointValue.longitude)}(e,t);case 2:return function(e,t){if("integerValue"in e&&"integerValue"in t)return Ii(e.integerValue)===Ii(t.integerValue);if("doubleValue"in e&&"doubleValue"in t){const n=Ii(e.doubleValue),r=Ii(t.doubleValue);return n===r?Oi(n)===Oi(r):isNaN(n)&&isNaN(r)}return!1}(e,t);case 9:return hi(e.arrayValue.values||[],t.arrayValue.values||[],Di);case 10:return function(e,t){const n=e.mapValue.fields||{},r=t.mapValue.fields||{};if(pi(n)!==pi(r))return!1;for(const i in n)if(n.hasOwnProperty(i)&&(void 0===r[i]||!Di(n[i],r[i])))return!1;return!0}(e,t);default:return Gr()}}function Fi(e,t){return void 0!==(e.values||[]).find((e=>Di(e,t)))}function Mi(e,t){const n=Pi(e),r=Pi(t);if(n!==r)return ui(n,r);switch(n){case 0:return 0;case 1:return ui(e.booleanValue,t.booleanValue);case 2:return function(e,t){const n=Ii(e.integerValue||e.doubleValue),r=Ii(t.integerValue||t.doubleValue);return n<r?-1:n>r?1:n===r?0:isNaN(n)?isNaN(r)?0:-1:1}(e,t);case 3:return qi(e.timestampValue,t.timestampValue);case 4:return qi(xi(e),xi(t));case 5:return ui(e.stringValue,t.stringValue);case 6:return function(e,t){const n=Si(e),r=Si(t);return n.compareTo(r)}(e.bytesValue,t.bytesValue);case 7:return function(e,t){const n=e.split("/"),r=t.split("/");for(let i=0;i<n.length&&i<r.length;i++){const e=ui(n[i],r[i]);if(0!==e)return e}return ui(n.length,r.length)}(e.referenceValue,t.referenceValue);case 8:return function(e,t){const n=ui(Ii(e.latitude),Ii(t.latitude));return 0!==n?n:ui(Ii(e.longitude),Ii(t.longitude))}(e.geoPointValue,t.geoPointValue);case 9:return function(e,t){const n=e.values||[],r=t.values||[];for(let i=0;i<n.length&&i<r.length;++i){const e=Mi(n[i],r[i]);if(e)return e}return ui(n.length,r.length)}(e.arrayValue,t.arrayValue);case 10:return function(e,t){const n=e.fields||{},r=Object.keys(n),i=t.fields||{},s=Object.keys(i);r.sort(),s.sort();for(let o=0;o<r.length&&o<s.length;++o){const e=ui(r[o],s[o]);if(0!==e)return e;const t=Mi(n[r[o]],i[s[o]]);if(0!==t)return t}return ui(r.length,s.length)}(e.mapValue,t.mapValue);default:throw Gr()}}function qi(e,t){if("string"==typeof e&&"string"==typeof t&&e.length===t.length)return ui(e,t);const n=ki(e),r=ki(t),i=ui(n.seconds,r.seconds);return 0!==i?i:ui(n.nanos,r.nanos)}function Vi(e){return Ui(e)}function Ui(e){return"nullValue"in e?"null":"booleanValue"in e?""+e.booleanValue:"integerValue"in e?""+e.integerValue:"doubleValue"in e?""+e.doubleValue:"timestampValue"in e?function(e){const t=ki(e);return`time(${t.seconds},${t.nanos})`}(e.timestampValue):"stringValue"in e?e.stringValue:"bytesValue"in e?Si(e.bytesValue).toBase64():"referenceValue"in e?(n=e.referenceValue,Li.fromName(n).toString()):"geoPointValue"in e?`geo(${(t=e.geoPointValue).latitude},${t.longitude})`:"arrayValue"in e?function(e){let t="[",n=!0;for(const r of e.values||[])n?n=!1:t+=",",t+=Ui(r);return t+"]"}(e.arrayValue):"mapValue"in e?function(e){const t=Object.keys(e.fields||{}).sort();let n="{",r=!0;for(const i of t)r?r=!1:n+=",",n+=`${i}:${Ui(e.fields[i])}`;return n+"}"}(e.mapValue):Gr();var t,n}function ji(e){return!!e&&"integerValue"in e}function Bi(e){return!!e&&"arrayValue"in e}function $i(e){return!!e&&"nullValue"in e}function zi(e){return!!e&&"doubleValue"in e&&isNaN(Number(e.doubleValue))}function Hi(e){return!!e&&"mapValue"in e}function Ki(e){if(e.geoPointValue)return{geoPointValue:Object.assign({},e.geoPointValue)};if(e.timestampValue&&"object"==typeof e.timestampValue)return{timestampValue:Object.assign({},e.timestampValue)};if(e.mapValue){const t={mapValue:{fields:{}}};return gi(e.mapValue.fields,((e,n)=>t.mapValue.fields[e]=Ki(n))),t}if(e.arrayValue){const t={arrayValue:{values:[]}};for(let n=0;n<(e.arrayValue.values||[]).length;++n)t.arrayValue.values[n]=Ki(e.arrayValue.values[n]);return t}return Object.assign({},e)}
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
 */class Wi{constructor(e){this.value=e}static empty(){return new Wi({mapValue:{}})}field(e){if(e.isEmpty())return this.value;{let t=this.value;for(let n=0;n<e.length-1;++n)if(t=(t.mapValue.fields||{})[e.get(n)],!Hi(t))return null;return t=(t.mapValue.fields||{})[e.lastSegment()],t||null}}set(e,t){this.getFieldsMap(e.popLast())[e.lastSegment()]=Ki(t)}setAll(e){let t=bi.emptyPath(),n={},r=[];e.forEach(((e,i)=>{if(!t.isImmediateParentOf(i)){const e=this.getFieldsMap(t);this.applyChanges(e,n,r),n={},r=[],t=i.popLast()}e?n[i.lastSegment()]=Ki(e):r.push(i.lastSegment())}));const i=this.getFieldsMap(t);this.applyChanges(i,n,r)}delete(e){const t=this.field(e.popLast());Hi(t)&&t.mapValue.fields&&delete t.mapValue.fields[e.lastSegment()]}isEqual(e){return Di(this.value,e.value)}getFieldsMap(e){let t=this.value;t.mapValue.fields||(t.mapValue={fields:{}});for(let n=0;n<e.length;++n){let r=t.mapValue.fields[e.get(n)];Hi(r)&&r.mapValue.fields||(r={mapValue:{fields:{}}},t.mapValue.fields[e.get(n)]=r),t=r}return t.mapValue.fields}applyChanges(e,t,n){gi(t,((t,n)=>e[t]=n));for(const r of n)delete e[r]}clone(){return new Wi(Ki(this.value))}}function Gi(e){const t=[];return gi(e.fields,((e,n)=>{const r=new bi([e]);if(Hi(n)){const e=Gi(n.mapValue).fields;if(0===e.length)t.push(r);else for(const n of e)t.push(r.child(n))}else t.push(r)})),new _i(t)
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
 */}class Ji{constructor(e,t,n,r,i){this.key=e,this.documentType=t,this.version=n,this.data=r,this.documentState=i}static newInvalidDocument(e){return new Ji(e,0,fi.min(),Wi.empty(),0)}static newFoundDocument(e,t,n){return new Ji(e,1,t,n,0)}static newNoDocument(e,t){return new Ji(e,2,t,Wi.empty(),0)}static newUnknownDocument(e,t){return new Ji(e,3,t,Wi.empty(),2)}convertToFoundDocument(e,t){return this.version=e,this.documentType=1,this.data=t,this.documentState=0,this}convertToNoDocument(e){return this.version=e,this.documentType=2,this.data=Wi.empty(),this.documentState=0,this}convertToUnknownDocument(e){return this.version=e,this.documentType=3,this.data=Wi.empty(),this.documentState=2,this}setHasCommittedMutations(){return this.documentState=2,this}setHasLocalMutations(){return this.documentState=1,this}get hasLocalMutations(){return 1===this.documentState}get hasCommittedMutations(){return 2===this.documentState}get hasPendingWrites(){return this.hasLocalMutations||this.hasCommittedMutations}isValidDocument(){return 0!==this.documentType}isFoundDocument(){return 1===this.documentType}isNoDocument(){return 2===this.documentType}isUnknownDocument(){return 3===this.documentType}isEqual(e){return e instanceof Ji&&this.key.isEqual(e.key)&&this.version.isEqual(e.version)&&this.documentType===e.documentType&&this.documentState===e.documentState&&this.data.isEqual(e.data)}clone(){return new Ji(this.key,this.documentType,this.version,this.data.clone(),this.documentState)}toString(){return`Document(${this.key}, ${this.version}, ${JSON.stringify(this.data.value)}, {documentType: ${this.documentType}}), {documentState: ${this.documentState}})`}}
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
 */class Yi{constructor(e,t=null,n=[],r=[],i=null,s=null,o=null){this.path=e,this.collectionGroup=t,this.orderBy=n,this.filters=r,this.limit=i,this.startAt=s,this.endAt=o,this.R=null}}function Xi(e,t=null,n=[],r=[],i=null,s=null,o=null){return new Yi(e,t,n,r,i,s,o)}function Zi(e){const t=Yr(e);if(null===t.R){let e=t.path.canonicalString();null!==t.collectionGroup&&(e+="|cg:"+t.collectionGroup),e+="|f:",e+=t.filters.map((e=>rs(e))).join(","),e+="|ob:",e+=t.orderBy.map((e=>function(e){return e.field.canonicalString()+e.dir}(e))).join(","),Ri(t.limit)||(e+="|l:",e+=t.limit),t.startAt&&(e+="|lb:",e+=fs(t.startAt)),t.endAt&&(e+="|ub:",e+=fs(t.endAt)),t.R=e}return t.R}function Qi(e){let t=e.path.canonicalString();return null!==e.collectionGroup&&(t+=" collectionGroup="+e.collectionGroup),e.filters.length>0&&(t+=`, filters: [${e.filters.map((e=>{return`${(t=e).field.canonicalString()} ${t.op} ${Vi(t.value)}`;var t})).join(", ")}]`),Ri(e.limit)||(t+=", limit: "+e.limit),e.orderBy.length>0&&(t+=`, orderBy: [${e.orderBy.map((e=>function(e){return`${e.field.canonicalString()} (${e.dir})`}(e))).join(", ")}]`),e.startAt&&(t+=", startAt: "+fs(e.startAt)),e.endAt&&(t+=", endAt: "+fs(e.endAt)),`Target(${t})`}function es(e,t){if(e.limit!==t.limit)return!1;if(e.orderBy.length!==t.orderBy.length)return!1;for(let i=0;i<e.orderBy.length;i++)if(!gs(e.orderBy[i],t.orderBy[i]))return!1;if(e.filters.length!==t.filters.length)return!1;for(let i=0;i<e.filters.length;i++)if(n=e.filters[i],r=t.filters[i],n.op!==r.op||!n.field.isEqual(r.field)||!Di(n.value,r.value))return!1;var n,r;return e.collectionGroup===t.collectionGroup&&!!e.path.isEqual(t.path)&&!!vs(e.startAt,t.startAt)&&vs(e.endAt,t.endAt)}function ts(e){return Li.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}class ns extends class{}{constructor(e,t,n){super(),this.field=e,this.op=t,this.value=n}static create(e,t,n){return e.isKeyField()?"in"===t||"not-in"===t?this.P(e,t,n):new is(e,t,n):"array-contains"===t?new ls(e,n):"in"===t?new cs(e,n):"not-in"===t?new us(e,n):"array-contains-any"===t?new hs(e,n):new ns(e,t,n)}static P(e,t,n){return"in"===t?new ss(e,n):new os(e,n)}matches(e){const t=e.data.field(this.field);return"!="===this.op?null!==t&&this.v(Mi(t,this.value)):null!==t&&Pi(this.value)===Pi(t)&&this.v(Mi(t,this.value))}v(e){switch(this.op){case"<":return e<0;case"<=":return e<=0;case"==":return 0===e;case"!=":return 0!==e;case">":return e>0;case">=":return e>=0;default:return Gr()}}V(){return["<","<=",">",">=","!=","not-in"].indexOf(this.op)>=0}}function rs(e){return e.field.canonicalString()+e.op.toString()+Vi(e.value)}class is extends ns{constructor(e,t,n){super(e,t,n),this.key=Li.fromName(n.referenceValue)}matches(e){const t=Li.comparator(e.key,this.key);return this.v(t)}}class ss extends ns{constructor(e,t){super(e,"in",t),this.keys=as("in",t)}matches(e){return this.keys.some((t=>t.isEqual(e.key)))}}class os extends ns{constructor(e,t){super(e,"not-in",t),this.keys=as("not-in",t)}matches(e){return!this.keys.some((t=>t.isEqual(e.key)))}}function as(e,t){var n;return((null===(n=t.arrayValue)||void 0===n?void 0:n.values)||[]).map((e=>Li.fromName(e.referenceValue)))}class ls extends ns{constructor(e,t){super(e,"array-contains",t)}matches(e){const t=e.data.field(this.field);return Bi(t)&&Fi(t.arrayValue,this.value)}}class cs extends ns{constructor(e,t){super(e,"in",t)}matches(e){const t=e.data.field(this.field);return null!==t&&Fi(this.value.arrayValue,t)}}class us extends ns{constructor(e,t){super(e,"not-in",t)}matches(e){if(Fi(this.value.arrayValue,{nullValue:"NULL_VALUE"}))return!1;const t=e.data.field(this.field);return null!==t&&!Fi(this.value.arrayValue,t)}}class hs extends ns{constructor(e,t){super(e,"array-contains-any",t)}matches(e){const t=e.data.field(this.field);return!(!Bi(t)||!t.arrayValue.values)&&t.arrayValue.values.some((e=>Fi(this.value.arrayValue,e)))}}class ds{constructor(e,t){this.position=e,this.before=t}}function fs(e){return`${e.before?"b":"a"}:${e.position.map((e=>Vi(e))).join(",")}`}class ps{constructor(e,t="asc"){this.field=e,this.dir=t}}function gs(e,t){return e.dir===t.dir&&e.field.isEqual(t.field)}function ms(e,t,n){let r=0;for(let i=0;i<e.position.length;i++){const s=t[i],o=e.position[i];if(r=s.field.isKeyField()?Li.comparator(Li.fromName(o.referenceValue),n.key):Mi(o,n.data.field(s.field)),"desc"===s.dir&&(r*=-1),0!==r)break}return e.before?r<=0:r<0}function vs(e,t){if(null===e)return null===t;if(null===t)return!1;if(e.before!==t.before||e.position.length!==t.position.length)return!1;for(let n=0;n<e.position.length;n++)if(!Di(e.position[n],t.position[n]))return!1;return!0}
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
 */class ys{constructor(e,t=null,n=[],r=[],i=null,s="F",o=null,a=null){this.path=e,this.collectionGroup=t,this.explicitOrderBy=n,this.filters=r,this.limit=i,this.limitType=s,this.startAt=o,this.endAt=a,this.S=null,this.D=null,this.startAt,this.endAt}}function ws(e,t,n,r,i,s,o,a){return new ys(e,t,n,r,i,s,o,a)}function bs(e){return new ys(e)}function _s(e){return!Ri(e.limit)&&"F"===e.limitType}function Ts(e){return!Ri(e.limit)&&"L"===e.limitType}function Es(e){return e.explicitOrderBy.length>0?e.explicitOrderBy[0].field:null}function ks(e){for(const t of e.filters)if(t.V())return t.field;return null}function Is(e){return null!==e.collectionGroup}function Ss(e){const t=Yr(e);if(null===t.S){t.S=[];const e=ks(t),n=Es(t);if(null!==e&&null===n)e.isKeyField()||t.S.push(new ps(e)),t.S.push(new ps(bi.keyField(),"asc"));else{let e=!1;for(const n of t.explicitOrderBy)t.S.push(n),n.field.isKeyField()&&(e=!0);if(!e){const e=t.explicitOrderBy.length>0?t.explicitOrderBy[t.explicitOrderBy.length-1].dir:"asc";t.S.push(new ps(bi.keyField(),e))}}}return t.S}function Cs(e){const t=Yr(e);if(!t.D)if("F"===t.limitType)t.D=Xi(t.path,t.collectionGroup,Ss(t),t.filters,t.limit,t.startAt,t.endAt);else{const e=[];for(const i of Ss(t)){const t="desc"===i.dir?"asc":"desc";e.push(new ps(i.field,t))}const n=t.endAt?new ds(t.endAt.position,!t.endAt.before):null,r=t.startAt?new ds(t.startAt.position,!t.startAt.before):null;t.D=Xi(t.path,t.collectionGroup,e,t.filters,t.limit,n,r)}return t.D}function As(e,t,n){return new ys(e.path,e.collectionGroup,e.explicitOrderBy.slice(),e.filters.slice(),t,n,e.startAt,e.endAt)}function xs(e,t){return es(Cs(e),Cs(t))&&e.limitType===t.limitType}function Rs(e){return`${Zi(Cs(e))}|lt:${e.limitType}`}function Os(e){return`Query(target=${Qi(Cs(e))}; limitType=${e.limitType})`}function Ns(e,t){return t.isFoundDocument()&&function(e,t){const n=t.key.path;return null!==e.collectionGroup?t.key.hasCollectionId(e.collectionGroup)&&e.path.isPrefixOf(n):Li.isDocumentKey(e.path)?e.path.isEqual(n):e.path.isImmediateParentOf(n)}(e,t)&&function(e,t){for(const n of e.explicitOrderBy)if(!n.field.isKeyField()&&null===t.data.field(n.field))return!1;return!0}(e,t)&&function(e,t){for(const n of e.filters)if(!n.matches(t))return!1;return!0}(e,t)&&function(e,t){return!(e.startAt&&!ms(e.startAt,Ss(e),t))&&(!e.endAt||!ms(e.endAt,Ss(e),t))}(e,t)}function Ls(e){return(t,n)=>{let r=!1;for(const i of Ss(e)){const e=Ps(i,t,n);if(0!==e)return e;r=r||i.field.isKeyField()}return 0}}function Ps(e,t,n){const r=e.field.isKeyField()?Li.comparator(t.key,n.key):function(e,t,n){const r=t.data.field(e),i=n.data.field(e);return null!==r&&null!==i?Mi(r,i):Gr()}(e.field,t,n);switch(e.dir){case"asc":return r;case"desc":return-1*r;default:return Gr()}}
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
 */function Ds(e,t){if(e.C){if(isNaN(t))return{doubleValue:"NaN"};if(t===1/0)return{doubleValue:"Infinity"};if(t===-1/0)return{doubleValue:"-Infinity"}}return{doubleValue:Oi(t)?"-0":t}}function Fs(e){return{integerValue:""+e}}function Ms(e,t){return Ni(t)?Fs(t):Ds(e,t)}
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
 */class qs{constructor(){this._=void 0}}function Vs(e,t,n){return e instanceof Bs?function(e,t){const n={fields:{__type__:{stringValue:"server_timestamp"},__local_write_time__:{timestampValue:{seconds:e.seconds,nanos:e.nanoseconds}}}};return t&&(n.fields.__previous_value__=t),{mapValue:n}}(n,t):e instanceof $s?zs(e,t):e instanceof Hs?Ks(e,t):function(e,t){const n=js(e,t),r=Gs(n)+Gs(e.N);return ji(n)&&ji(e.N)?Fs(r):Ds(e.k,r)}(e,t)}function Us(e,t,n){return e instanceof $s?zs(e,t):e instanceof Hs?Ks(e,t):n}function js(e,t){return e instanceof Ws?ji(n=t)||function(e){return!!e&&"doubleValue"in e}(n)?t:{integerValue:0}:null;var n}class Bs extends qs{}class $s extends qs{constructor(e){super(),this.elements=e}}function zs(e,t){const n=Js(t);for(const r of e.elements)n.some((e=>Di(e,r)))||n.push(r);return{arrayValue:{values:n}}}class Hs extends qs{constructor(e){super(),this.elements=e}}function Ks(e,t){let n=Js(t);for(const r of e.elements)n=n.filter((e=>!Di(e,r)));return{arrayValue:{values:n}}}class Ws extends qs{constructor(e,t){super(),this.k=e,this.N=t}}function Gs(e){return Ii(e.integerValue||e.doubleValue)}function Js(e){return Bi(e)&&e.arrayValue.values?e.arrayValue.values.slice():[]}
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
 */function Ys(e,t){return e.field.isEqual(t.field)&&function(e,t){return e instanceof $s&&t instanceof $s||e instanceof Hs&&t instanceof Hs?hi(e.elements,t.elements,Di):e instanceof Ws&&t instanceof Ws?Di(e.N,t.N):e instanceof Bs&&t instanceof Bs}(e.transform,t.transform)}class Xs{constructor(e,t){this.version=e,this.transformResults=t}}class Zs{constructor(e,t){this.updateTime=e,this.exists=t}static none(){return new Zs}static exists(e){return new Zs(void 0,e)}static updateTime(e){return new Zs(e)}get isNone(){return void 0===this.updateTime&&void 0===this.exists}isEqual(e){return this.exists===e.exists&&(this.updateTime?!!e.updateTime&&this.updateTime.isEqual(e.updateTime):!e.updateTime)}}function Qs(e,t){return void 0!==e.updateTime?t.isFoundDocument()&&t.version.isEqual(e.updateTime):void 0===e.exists||e.exists===t.isFoundDocument()}class eo{}function to(e,t,n){e instanceof oo?function(e,t,n){const r=e.value.clone(),i=co(e.fieldTransforms,t,n.transformResults);r.setAll(i),t.convertToFoundDocument(n.version,r).setHasCommittedMutations()}(e,t,n):e instanceof ao?function(e,t,n){if(!Qs(e.precondition,t))return void t.convertToUnknownDocument(n.version);const r=co(e.fieldTransforms,t,n.transformResults),i=t.data;i.setAll(lo(e)),i.setAll(r),t.convertToFoundDocument(n.version,i).setHasCommittedMutations()}(e,t,n):function(e,t,n){t.convertToNoDocument(n.version).setHasCommittedMutations()}(0,t,n)}function no(e,t,n){e instanceof oo?function(e,t,n){if(!Qs(e.precondition,t))return;const r=e.value.clone(),i=uo(e.fieldTransforms,n,t);r.setAll(i),t.convertToFoundDocument(so(t),r).setHasLocalMutations()}(e,t,n):e instanceof ao?function(e,t,n){if(!Qs(e.precondition,t))return;const r=uo(e.fieldTransforms,n,t),i=t.data;i.setAll(lo(e)),i.setAll(r),t.convertToFoundDocument(so(t),i).setHasLocalMutations()}(e,t,n):function(e,t){Qs(e.precondition,t)&&t.convertToNoDocument(fi.min())}(e,t)}function ro(e,t){let n=null;for(const r of e.fieldTransforms){const e=t.data.field(r.field),i=js(r.transform,e||null);null!=i&&(null==n&&(n=Wi.empty()),n.set(r.field,i))}return n||null}function io(e,t){return e.type===t.type&&!!e.key.isEqual(t.key)&&!!e.precondition.isEqual(t.precondition)&&!!function(e,t){return void 0===e&&void 0===t||!(!e||!t)&&hi(e,t,((e,t)=>Ys(e,t)))}(e.fieldTransforms,t.fieldTransforms)&&(0===e.type?e.value.isEqual(t.value):1!==e.type||e.data.isEqual(t.data)&&e.fieldMask.isEqual(t.fieldMask))}function so(e){return e.isFoundDocument()?e.version:fi.min()}class oo extends eo{constructor(e,t,n,r=[]){super(),this.key=e,this.value=t,this.precondition=n,this.fieldTransforms=r,this.type=0}}class ao extends eo{constructor(e,t,n,r,i=[]){super(),this.key=e,this.data=t,this.fieldMask=n,this.precondition=r,this.fieldTransforms=i,this.type=1}}function lo(e){const t=new Map;return e.fieldMask.fields.forEach((n=>{if(!n.isEmpty()){const r=e.data.field(n);t.set(n,r)}})),t}function co(e,t,n){const r=new Map;Jr(e.length===n.length);for(let i=0;i<n.length;i++){const s=e[i],o=s.transform,a=t.data.field(s.field);r.set(s.field,Us(o,a,n[i]))}return r}function uo(e,t,n){const r=new Map;for(const i of e){const e=i.transform,s=n.data.field(i.field);r.set(i.field,Vs(e,s,t))}return r}class ho extends eo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=2,this.fieldTransforms=[]}}class fo extends eo{constructor(e,t){super(),this.key=e,this.precondition=t,this.type=3,this.fieldTransforms=[]}}
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
 */class po{constructor(e){this.count=e}}
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
 */var go,mo;function vo(e){switch(e){default:return Gr();case Xr.CANCELLED:case Xr.UNKNOWN:case Xr.DEADLINE_EXCEEDED:case Xr.RESOURCE_EXHAUSTED:case Xr.INTERNAL:case Xr.UNAVAILABLE:case Xr.UNAUTHENTICATED:return!1;case Xr.INVALID_ARGUMENT:case Xr.NOT_FOUND:case Xr.ALREADY_EXISTS:case Xr.PERMISSION_DENIED:case Xr.FAILED_PRECONDITION:case Xr.ABORTED:case Xr.OUT_OF_RANGE:case Xr.UNIMPLEMENTED:case Xr.DATA_LOSS:return!0}}function yo(e){if(void 0===e)return Hr("GRPC error has no .code"),Xr.UNKNOWN;switch(e){case go.OK:return Xr.OK;case go.CANCELLED:return Xr.CANCELLED;case go.UNKNOWN:return Xr.UNKNOWN;case go.DEADLINE_EXCEEDED:return Xr.DEADLINE_EXCEEDED;case go.RESOURCE_EXHAUSTED:return Xr.RESOURCE_EXHAUSTED;case go.INTERNAL:return Xr.INTERNAL;case go.UNAVAILABLE:return Xr.UNAVAILABLE;case go.UNAUTHENTICATED:return Xr.UNAUTHENTICATED;case go.INVALID_ARGUMENT:return Xr.INVALID_ARGUMENT;case go.NOT_FOUND:return Xr.NOT_FOUND;case go.ALREADY_EXISTS:return Xr.ALREADY_EXISTS;case go.PERMISSION_DENIED:return Xr.PERMISSION_DENIED;case go.FAILED_PRECONDITION:return Xr.FAILED_PRECONDITION;case go.ABORTED:return Xr.ABORTED;case go.OUT_OF_RANGE:return Xr.OUT_OF_RANGE;case go.UNIMPLEMENTED:return Xr.UNIMPLEMENTED;case go.DATA_LOSS:return Xr.DATA_LOSS;default:return Gr()}}(mo=go||(go={}))[mo.OK=0]="OK",mo[mo.CANCELLED=1]="CANCELLED",mo[mo.UNKNOWN=2]="UNKNOWN",mo[mo.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",mo[mo.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",mo[mo.NOT_FOUND=5]="NOT_FOUND",mo[mo.ALREADY_EXISTS=6]="ALREADY_EXISTS",mo[mo.PERMISSION_DENIED=7]="PERMISSION_DENIED",mo[mo.UNAUTHENTICATED=16]="UNAUTHENTICATED",mo[mo.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",mo[mo.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",mo[mo.ABORTED=10]="ABORTED",mo[mo.OUT_OF_RANGE=11]="OUT_OF_RANGE",mo[mo.UNIMPLEMENTED=12]="UNIMPLEMENTED",mo[mo.INTERNAL=13]="INTERNAL",mo[mo.UNAVAILABLE=14]="UNAVAILABLE",mo[mo.DATA_LOSS=15]="DATA_LOSS";
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
class wo{constructor(e,t){this.comparator=e,this.root=t||_o.EMPTY}insert(e,t){return new wo(this.comparator,this.root.insert(e,t,this.comparator).copy(null,null,_o.BLACK,null,null))}remove(e){return new wo(this.comparator,this.root.remove(e,this.comparator).copy(null,null,_o.BLACK,null,null))}get(e){let t=this.root;for(;!t.isEmpty();){const n=this.comparator(e,t.key);if(0===n)return t.value;n<0?t=t.left:n>0&&(t=t.right)}return null}indexOf(e){let t=0,n=this.root;for(;!n.isEmpty();){const r=this.comparator(e,n.key);if(0===r)return t+n.left.size;r<0?n=n.left:(t+=n.left.size+1,n=n.right)}return-1}isEmpty(){return this.root.isEmpty()}get size(){return this.root.size}minKey(){return this.root.minKey()}maxKey(){return this.root.maxKey()}inorderTraversal(e){return this.root.inorderTraversal(e)}forEach(e){this.inorderTraversal(((t,n)=>(e(t,n),!1)))}toString(){const e=[];return this.inorderTraversal(((t,n)=>(e.push(`${t}:${n}`),!1))),`{${e.join(", ")}}`}reverseTraversal(e){return this.root.reverseTraversal(e)}getIterator(){return new bo(this.root,null,this.comparator,!1)}getIteratorFrom(e){return new bo(this.root,e,this.comparator,!1)}getReverseIterator(){return new bo(this.root,null,this.comparator,!0)}getReverseIteratorFrom(e){return new bo(this.root,e,this.comparator,!0)}}class bo{constructor(e,t,n,r){this.isReverse=r,this.nodeStack=[];let i=1;for(;!e.isEmpty();)if(i=t?n(e.key,t):1,r&&(i*=-1),i<0)e=this.isReverse?e.left:e.right;else{if(0===i){this.nodeStack.push(e);break}this.nodeStack.push(e),e=this.isReverse?e.right:e.left}}getNext(){let e=this.nodeStack.pop();const t={key:e.key,value:e.value};if(this.isReverse)for(e=e.left;!e.isEmpty();)this.nodeStack.push(e),e=e.right;else for(e=e.right;!e.isEmpty();)this.nodeStack.push(e),e=e.left;return t}hasNext(){return this.nodeStack.length>0}peek(){if(0===this.nodeStack.length)return null;const e=this.nodeStack[this.nodeStack.length-1];return{key:e.key,value:e.value}}}class _o{constructor(e,t,n,r,i){this.key=e,this.value=t,this.color=null!=n?n:_o.RED,this.left=null!=r?r:_o.EMPTY,this.right=null!=i?i:_o.EMPTY,this.size=this.left.size+1+this.right.size}copy(e,t,n,r,i){return new _o(null!=e?e:this.key,null!=t?t:this.value,null!=n?n:this.color,null!=r?r:this.left,null!=i?i:this.right)}isEmpty(){return!1}inorderTraversal(e){return this.left.inorderTraversal(e)||e(this.key,this.value)||this.right.inorderTraversal(e)}reverseTraversal(e){return this.right.reverseTraversal(e)||e(this.key,this.value)||this.left.reverseTraversal(e)}min(){return this.left.isEmpty()?this:this.left.min()}minKey(){return this.min().key}maxKey(){return this.right.isEmpty()?this.key:this.right.maxKey()}insert(e,t,n){let r=this;const i=n(e,r.key);return r=i<0?r.copy(null,null,null,r.left.insert(e,t,n),null):0===i?r.copy(null,t,null,null,null):r.copy(null,null,null,null,r.right.insert(e,t,n)),r.fixUp()}removeMin(){if(this.left.isEmpty())return _o.EMPTY;let e=this;return e.left.isRed()||e.left.left.isRed()||(e=e.moveRedLeft()),e=e.copy(null,null,null,e.left.removeMin(),null),e.fixUp()}remove(e,t){let n,r=this;if(t(e,r.key)<0)r.left.isEmpty()||r.left.isRed()||r.left.left.isRed()||(r=r.moveRedLeft()),r=r.copy(null,null,null,r.left.remove(e,t),null);else{if(r.left.isRed()&&(r=r.rotateRight()),r.right.isEmpty()||r.right.isRed()||r.right.left.isRed()||(r=r.moveRedRight()),0===t(e,r.key)){if(r.right.isEmpty())return _o.EMPTY;n=r.right.min(),r=r.copy(n.key,n.value,null,null,r.right.removeMin())}r=r.copy(null,null,null,null,r.right.remove(e,t))}return r.fixUp()}isRed(){return this.color}fixUp(){let e=this;return e.right.isRed()&&!e.left.isRed()&&(e=e.rotateLeft()),e.left.isRed()&&e.left.left.isRed()&&(e=e.rotateRight()),e.left.isRed()&&e.right.isRed()&&(e=e.colorFlip()),e}moveRedLeft(){let e=this.colorFlip();return e.right.left.isRed()&&(e=e.copy(null,null,null,null,e.right.rotateRight()),e=e.rotateLeft(),e=e.colorFlip()),e}moveRedRight(){let e=this.colorFlip();return e.left.left.isRed()&&(e=e.rotateRight(),e=e.colorFlip()),e}rotateLeft(){const e=this.copy(null,null,_o.RED,null,this.right.left);return this.right.copy(null,null,this.color,e,null)}rotateRight(){const e=this.copy(null,null,_o.RED,this.left.right,null);return this.left.copy(null,null,this.color,null,e)}colorFlip(){const e=this.left.copy(null,null,!this.left.color,null,null),t=this.right.copy(null,null,!this.right.color,null,null);return this.copy(null,null,!this.color,e,t)}checkMaxDepth(){const e=this.check();return Math.pow(2,e)<=this.size+1}check(){if(this.isRed()&&this.left.isRed())throw Gr();if(this.right.isRed())throw Gr();const e=this.left.check();if(e!==this.right.check())throw Gr();return e+(this.isRed()?0:1)}}_o.EMPTY=null,_o.RED=!0,_o.BLACK=!1,_o.EMPTY=new class{constructor(){this.size=0}get key(){throw Gr()}get value(){throw Gr()}get color(){throw Gr()}get left(){throw Gr()}get right(){throw Gr()}copy(e,t,n,r,i){return this}insert(e,t,n){return new _o(e,t)}remove(e,t){return this}isEmpty(){return!0}inorderTraversal(e){return!1}reverseTraversal(e){return!1}minKey(){return null}maxKey(){return null}isRed(){return!1}checkMaxDepth(){return!0}check(){return 0}};
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
class To{constructor(e){this.comparator=e,this.data=new wo(this.comparator)}has(e){return null!==this.data.get(e)}first(){return this.data.minKey()}last(){return this.data.maxKey()}get size(){return this.data.size}indexOf(e){return this.data.indexOf(e)}forEach(e){this.data.inorderTraversal(((t,n)=>(e(t),!1)))}forEachInRange(e,t){const n=this.data.getIteratorFrom(e[0]);for(;n.hasNext();){const r=n.getNext();if(this.comparator(r.key,e[1])>=0)return;t(r.key)}}forEachWhile(e,t){let n;for(n=void 0!==t?this.data.getIteratorFrom(t):this.data.getIterator();n.hasNext();)if(!e(n.getNext().key))return}firstAfterOrEqual(e){const t=this.data.getIteratorFrom(e);return t.hasNext()?t.getNext().key:null}getIterator(){return new Eo(this.data.getIterator())}getIteratorFrom(e){return new Eo(this.data.getIteratorFrom(e))}add(e){return this.copy(this.data.remove(e).insert(e,!0))}delete(e){return this.has(e)?this.copy(this.data.remove(e)):this}isEmpty(){return this.data.isEmpty()}unionWith(e){let t=this;return t.size<e.size&&(t=e,e=this),e.forEach((e=>{t=t.add(e)})),t}isEqual(e){if(!(e instanceof To))return!1;if(this.size!==e.size)return!1;const t=this.data.getIterator(),n=e.data.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(0!==this.comparator(e,r))return!1}return!0}toArray(){const e=[];return this.forEach((t=>{e.push(t)})),e}toString(){const e=[];return this.forEach((t=>e.push(t))),"SortedSet("+e.toString()+")"}copy(e){const t=new To(this.comparator);return t.data=e,t}}class Eo{constructor(e){this.iter=e}getNext(){return this.iter.getNext().key}hasNext(){return this.iter.hasNext()}}
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
 */const ko=new wo(Li.comparator);function Io(){return ko}const So=new wo(Li.comparator);function Co(){return So}const Ao=new wo(Li.comparator);function xo(){return Ao}const Ro=new To(Li.comparator);function Oo(...e){let t=Ro;for(const n of e)t=t.add(n);return t}const No=new To(ui);function Lo(){return No}
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
 */class Po{constructor(e,t,n,r,i){this.snapshotVersion=e,this.targetChanges=t,this.targetMismatches=n,this.documentUpdates=r,this.resolvedLimboDocuments=i}static createSynthesizedRemoteEventForCurrentChange(e,t){const n=new Map;return n.set(e,Do.createSynthesizedTargetChangeForCurrentChange(e,t)),new Po(fi.min(),n,Lo(),Io(),Oo())}}class Do{constructor(e,t,n,r,i){this.resumeToken=e,this.current=t,this.addedDocuments=n,this.modifiedDocuments=r,this.removedDocuments=i}static createSynthesizedTargetChangeForCurrentChange(e,t){return new Do(Ti.EMPTY_BYTE_STRING,t,Oo(),Oo(),Oo())}}
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
 */class Fo{constructor(e,t,n,r){this.$=e,this.removedTargetIds=t,this.key=n,this.F=r}}class Mo{constructor(e,t){this.targetId=e,this.O=t}}class qo{constructor(e,t,n=Ti.EMPTY_BYTE_STRING,r=null){this.state=e,this.targetIds=t,this.resumeToken=n,this.cause=r}}class Vo{constructor(){this.M=0,this.L=Bo(),this.B=Ti.EMPTY_BYTE_STRING,this.U=!1,this.q=!0}get current(){return this.U}get resumeToken(){return this.B}get K(){return 0!==this.M}get j(){return this.q}W(e){e.approximateByteSize()>0&&(this.q=!0,this.B=e)}G(){let e=Oo(),t=Oo(),n=Oo();return this.L.forEach(((r,i)=>{switch(i){case 0:e=e.add(r);break;case 2:t=t.add(r);break;case 1:n=n.add(r);break;default:Gr()}})),new Do(this.B,this.U,e,t,n)}H(){this.q=!1,this.L=Bo()}J(e,t){this.q=!0,this.L=this.L.insert(e,t)}Y(e){this.q=!0,this.L=this.L.remove(e)}X(){this.M+=1}Z(){this.M-=1}tt(){this.q=!0,this.U=!0}}class Uo{constructor(e){this.et=e,this.nt=new Map,this.st=Io(),this.it=jo(),this.rt=new To(ui)}ot(e){for(const t of e.$)e.F&&e.F.isFoundDocument()?this.at(t,e.F):this.ct(t,e.key,e.F);for(const t of e.removedTargetIds)this.ct(t,e.key,e.F)}ut(e){this.forEachTarget(e,(t=>{const n=this.ht(t);switch(e.state){case 0:this.lt(t)&&n.W(e.resumeToken);break;case 1:n.Z(),n.K||n.H(),n.W(e.resumeToken);break;case 2:n.Z(),n.K||this.removeTarget(t);break;case 3:this.lt(t)&&(n.tt(),n.W(e.resumeToken));break;case 4:this.lt(t)&&(this.ft(t),n.W(e.resumeToken));break;default:Gr()}}))}forEachTarget(e,t){e.targetIds.length>0?e.targetIds.forEach(t):this.nt.forEach(((e,n)=>{this.lt(n)&&t(n)}))}dt(e){const t=e.targetId,n=e.O.count,r=this.wt(t);if(r){const e=r.target;if(ts(e))if(0===n){const n=new Li(e.path);this.ct(t,n,Ji.newNoDocument(n,fi.min()))}else Jr(1===n);else this._t(t)!==n&&(this.ft(t),this.rt=this.rt.add(t))}}gt(e){const t=new Map;this.nt.forEach(((n,r)=>{const i=this.wt(r);if(i){if(n.current&&ts(i.target)){const t=new Li(i.target.path);null!==this.st.get(t)||this.yt(r,t)||this.ct(r,t,Ji.newNoDocument(t,e))}n.j&&(t.set(r,n.G()),n.H())}}));let n=Oo();this.it.forEach(((e,t)=>{let r=!0;t.forEachWhile((e=>{const t=this.wt(e);return!t||2===t.purpose||(r=!1,!1)})),r&&(n=n.add(e))}));const r=new Po(e,t,this.rt,this.st,n);return this.st=Io(),this.it=jo(),this.rt=new To(ui),r}at(e,t){if(!this.lt(e))return;const n=this.yt(e,t.key)?2:0;this.ht(e).J(t.key,n),this.st=this.st.insert(t.key,t),this.it=this.it.insert(t.key,this.Tt(t.key).add(e))}ct(e,t,n){if(!this.lt(e))return;const r=this.ht(e);this.yt(e,t)?r.J(t,1):r.Y(t),this.it=this.it.insert(t,this.Tt(t).delete(e)),n&&(this.st=this.st.insert(t,n))}removeTarget(e){this.nt.delete(e)}_t(e){const t=this.ht(e).G();return this.et.getRemoteKeysForTarget(e).size+t.addedDocuments.size-t.removedDocuments.size}X(e){this.ht(e).X()}ht(e){let t=this.nt.get(e);return t||(t=new Vo,this.nt.set(e,t)),t}Tt(e){let t=this.it.get(e);return t||(t=new To(ui),this.it=this.it.insert(e,t)),t}lt(e){const t=null!==this.wt(e);return t||zr("WatchChangeAggregator","Detected inactive target",e),t}wt(e){const t=this.nt.get(e);return t&&t.K?null:this.et.Et(e)}ft(e){this.nt.set(e,new Vo),this.et.getRemoteKeysForTarget(e).forEach((t=>{this.ct(e,t,null)}))}yt(e,t){return this.et.getRemoteKeysForTarget(e).has(t)}}function jo(){return new wo(Li.comparator)}function Bo(){return new wo(Li.comparator)}
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
 */const $o=(()=>{const e={asc:"ASCENDING",desc:"DESCENDING"};return e})(),zo=(()=>{const e={"<":"LESS_THAN","<=":"LESS_THAN_OR_EQUAL",">":"GREATER_THAN",">=":"GREATER_THAN_OR_EQUAL","==":"EQUAL","!=":"NOT_EQUAL","array-contains":"ARRAY_CONTAINS",in:"IN","not-in":"NOT_IN","array-contains-any":"ARRAY_CONTAINS_ANY"};return e})();class Ho{constructor(e,t){this.databaseId=e,this.C=t}}function Ko(e,t){return e.C?`${new Date(1e3*t.seconds).toISOString().replace(/\.\d*/,"").replace("Z","")}.${("000000000"+t.nanoseconds).slice(-9)}Z`:{seconds:""+t.seconds,nanos:t.nanoseconds}}function Wo(e,t){return e.C?t.toBase64():t.toUint8Array()}function Go(e,t){return Ko(e,t.toTimestamp())}function Jo(e){return Jr(!!e),fi.fromTimestamp(function(e){const t=ki(e);return new di(t.seconds,t.nanos)}(e))}function Yo(e,t){return function(e){return new yi(["projects",e.projectId,"databases",e.database])}(e).child("documents").child(t).canonicalString()}function Xo(e){const t=yi.fromString(e);return Jr(Ta(t)),t}function Zo(e,t){return Yo(e.databaseId,t.path)}function Qo(e,t){const n=Xo(t);if(n.get(1)!==e.databaseId.projectId)throw new Zr(Xr.INVALID_ARGUMENT,"Tried to deserialize key from different project: "+n.get(1)+" vs "+e.databaseId.projectId);if(n.get(3)!==e.databaseId.database)throw new Zr(Xr.INVALID_ARGUMENT,"Tried to deserialize key from different database: "+n.get(3)+" vs "+e.databaseId.database);return new Li(ra(n))}function ea(e,t){return Yo(e.databaseId,t)}function ta(e){const t=Xo(e);return 4===t.length?yi.emptyPath():ra(t)}function na(e){return new yi(["projects",e.databaseId.projectId,"databases",e.databaseId.database]).canonicalString()}function ra(e){return Jr(e.length>4&&"documents"===e.get(4)),e.popFirst(5)}function ia(e,t,n){return{name:Zo(e,t),fields:n.value.mapValue.fields}}function sa(e,t){let n;if("targetChange"in t){t.targetChange;const r=function(e){return"NO_CHANGE"===e?0:"ADD"===e?1:"REMOVE"===e?2:"CURRENT"===e?3:"RESET"===e?4:Gr()}(t.targetChange.targetChangeType||"NO_CHANGE"),i=t.targetChange.targetIds||[],s=function(e,t){return e.C?(Jr(void 0===t||"string"==typeof t),Ti.fromBase64String(t||"")):(Jr(void 0===t||t instanceof Uint8Array),Ti.fromUint8Array(t||new Uint8Array))}(e,t.targetChange.resumeToken),o=t.targetChange.cause,a=o&&function(e){const t=void 0===e.code?Xr.UNKNOWN:yo(e.code);return new Zr(t,e.message||"")}(o);n=new qo(r,i,s,a||null)}else if("documentChange"in t){t.documentChange;const r=t.documentChange;r.document,r.document.name,r.document.updateTime;const i=Qo(e,r.document.name),s=Jo(r.document.updateTime),o=new Wi({mapValue:{fields:r.document.fields}}),a=Ji.newFoundDocument(i,s,o),l=r.targetIds||[],c=r.removedTargetIds||[];n=new Fo(l,c,a.key,a)}else if("documentDelete"in t){t.documentDelete;const r=t.documentDelete;r.document;const i=Qo(e,r.document),s=r.readTime?Jo(r.readTime):fi.min(),o=Ji.newNoDocument(i,s),a=r.removedTargetIds||[];n=new Fo([],a,o.key,o)}else if("documentRemove"in t){t.documentRemove;const r=t.documentRemove;r.document;const i=Qo(e,r.document),s=r.removedTargetIds||[];n=new Fo([],s,i,null)}else{if(!("filter"in t))return Gr();{t.filter;const e=t.filter;e.targetId;const r=e.count||0,i=new po(r),s=e.targetId;n=new Mo(s,i)}}return n}function oa(e,t){let n;if(t instanceof oo)n={update:ia(e,t.key,t.value)};else if(t instanceof ho)n={delete:Zo(e,t.key)};else if(t instanceof ao)n={update:ia(e,t.key,t.data),updateMask:_a(t.fieldMask)};else{if(!(t instanceof fo))return Gr();n={verify:Zo(e,t.key)}}return t.fieldTransforms.length>0&&(n.updateTransforms=t.fieldTransforms.map((e=>function(e,t){const n=t.transform;if(n instanceof Bs)return{fieldPath:t.field.canonicalString(),setToServerValue:"REQUEST_TIME"};if(n instanceof $s)return{fieldPath:t.field.canonicalString(),appendMissingElements:{values:n.elements}};if(n instanceof Hs)return{fieldPath:t.field.canonicalString(),removeAllFromArray:{values:n.elements}};if(n instanceof Ws)return{fieldPath:t.field.canonicalString(),increment:n.N};throw Gr()}(0,e)))),t.precondition.isNone||(n.currentDocument=function(e,t){return void 0!==t.updateTime?{updateTime:Go(e,t.updateTime)}:void 0!==t.exists?{exists:t.exists}:Gr()}(e,t.precondition)),n}function aa(e,t){return e&&e.length>0?(Jr(void 0!==t),e.map((e=>function(e,t){let n=e.updateTime?Jo(e.updateTime):Jo(t);return n.isEqual(fi.min())&&(n=Jo(t)),new Xs(n,e.transformResults||[])}(e,t)))):[]}function la(e,t){return{documents:[ea(e,t.path)]}}function ca(e,t){const n={structuredQuery:{}},r=t.path;null!==t.collectionGroup?(n.parent=ea(e,r),n.structuredQuery.from=[{collectionId:t.collectionGroup,allDescendants:!0}]):(n.parent=ea(e,r.popLast()),n.structuredQuery.from=[{collectionId:r.lastSegment()}]);const i=function(e){if(0===e.length)return;const t=e.map((e=>function(e){if("=="===e.op){if(zi(e.value))return{unaryFilter:{field:va(e.field),op:"IS_NAN"}};if($i(e.value))return{unaryFilter:{field:va(e.field),op:"IS_NULL"}}}else if("!="===e.op){if(zi(e.value))return{unaryFilter:{field:va(e.field),op:"IS_NOT_NAN"}};if($i(e.value))return{unaryFilter:{field:va(e.field),op:"IS_NOT_NULL"}}}return{fieldFilter:{field:va(e.field),op:ma(e.op),value:e.value}}}(e)));return 1===t.length?t[0]:{compositeFilter:{op:"AND",filters:t}}}(t.filters);i&&(n.structuredQuery.where=i);const s=function(e){if(0!==e.length)return e.map((e=>function(e){return{field:va(e.field),direction:ga(e.dir)}}(e)))}(t.orderBy);s&&(n.structuredQuery.orderBy=s);const o=function(e,t){return e.C||Ri(t)?t:{value:t}}(e,t.limit);return null!==o&&(n.structuredQuery.limit=o),t.startAt&&(n.structuredQuery.startAt=fa(t.startAt)),t.endAt&&(n.structuredQuery.endAt=fa(t.endAt)),n}function ua(e){let t=ta(e.parent);const n=e.structuredQuery,r=n.from?n.from.length:0;let i=null;if(r>0){Jr(1===r);const e=n.from[0];e.allDescendants?i=e.collectionId:t=t.child(e.collectionId)}let s=[];n.where&&(s=da(n.where));let o=[];n.orderBy&&(o=n.orderBy.map((e=>function(e){return new ps(ya(e.field),function(e){switch(e){case"ASCENDING":return"asc";case"DESCENDING":return"desc";default:return}}(e.direction))}(e))));let a=null;n.limit&&(a=function(e){let t;return t="object"==typeof e?e.value:e,Ri(t)?null:t}(n.limit));let l=null;n.startAt&&(l=pa(n.startAt));let c=null;return n.endAt&&(c=pa(n.endAt)),ws(t,i,o,s,a,"F",l,c)}function ha(e,t){const n=function(e,t){switch(t){case 0:return null;case 1:return"existence-filter-mismatch";case 2:return"limbo-document";default:return Gr()}}(0,t.purpose);return null==n?null:{"goog-listen-tags":n}}function da(e){return e?void 0!==e.unaryFilter?[ba(e)]:void 0!==e.fieldFilter?[wa(e)]:void 0!==e.compositeFilter?e.compositeFilter.filters.map((e=>da(e))).reduce(((e,t)=>e.concat(t))):Gr():[]}function fa(e){return{before:e.before,values:e.position}}function pa(e){const t=!!e.before,n=e.values||[];return new ds(n,t)}function ga(e){return $o[e]}function ma(e){return zo[e]}function va(e){return{fieldPath:e.canonicalString()}}function ya(e){return bi.fromServerFormat(e.fieldPath)}function wa(e){return ns.create(ya(e.fieldFilter.field),function(e){switch(e){case"EQUAL":return"==";case"NOT_EQUAL":return"!=";case"GREATER_THAN":return">";case"GREATER_THAN_OR_EQUAL":return">=";case"LESS_THAN":return"<";case"LESS_THAN_OR_EQUAL":return"<=";case"ARRAY_CONTAINS":return"array-contains";case"IN":return"in";case"NOT_IN":return"not-in";case"ARRAY_CONTAINS_ANY":return"array-contains-any";default:return Gr()}}(e.fieldFilter.op),e.fieldFilter.value)}function ba(e){switch(e.unaryFilter.op){case"IS_NAN":const t=ya(e.unaryFilter.field);return ns.create(t,"==",{doubleValue:NaN});case"IS_NULL":const n=ya(e.unaryFilter.field);return ns.create(n,"==",{nullValue:"NULL_VALUE"});case"IS_NOT_NAN":const r=ya(e.unaryFilter.field);return ns.create(r,"!=",{doubleValue:NaN});case"IS_NOT_NULL":const i=ya(e.unaryFilter.field);return ns.create(i,"!=",{nullValue:"NULL_VALUE"});default:return Gr()}}function _a(e){const t=[];return e.fields.forEach((e=>t.push(e.canonicalString()))),{fieldPaths:t}}function Ta(e){return e.length>=4&&"projects"===e.get(0)&&"databases"===e.get(2)}
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
 */function Ea(e){let t="";for(let n=0;n<e.length;n++)t.length>0&&(t=Ia(t)),t=ka(e.get(n),t);return Ia(t)}function ka(e,t){let n=t;const r=e.length;for(let i=0;i<r;i++){const t=e.charAt(i);switch(t){case"\0":n+="";break;case"":n+="";break;default:n+=t}}return n}function Ia(e){return e+""}class Sa{constructor(e,t,n){this.ownerId=e,this.allowTabSynchronization=t,this.leaseTimestampMs=n}}Sa.store="owner",Sa.key="owner";class Ca{constructor(e,t,n){this.userId=e,this.lastAcknowledgedBatchId=t,this.lastStreamToken=n}}Ca.store="mutationQueues",Ca.keyPath="userId";class Aa{constructor(e,t,n,r,i){this.userId=e,this.batchId=t,this.localWriteTimeMs=n,this.baseMutations=r,this.mutations=i}}Aa.store="mutations",Aa.keyPath="batchId",Aa.userMutationsIndex="userMutationsIndex",Aa.userMutationsKeyPath=["userId","batchId"];class xa{constructor(){}static prefixForUser(e){return[e]}static prefixForPath(e,t){return[e,Ea(t)]}static key(e,t,n){return[e,Ea(t),n]}}xa.store="documentMutations",xa.PLACEHOLDER=new xa;class Ra{constructor(e,t,n,r,i,s){this.unknownDocument=e,this.noDocument=t,this.document=n,this.hasCommittedMutations=r,this.readTime=i,this.parentPath=s}}Ra.store="remoteDocuments",Ra.readTimeIndex="readTimeIndex",Ra.readTimeIndexPath="readTime",Ra.collectionReadTimeIndex="collectionReadTimeIndex",Ra.collectionReadTimeIndexPath=["parentPath","readTime"];class Oa{constructor(e){this.byteSize=e}}Oa.store="remoteDocumentGlobal",Oa.key="remoteDocumentGlobalKey";class Na{constructor(e,t,n,r,i,s,o){this.targetId=e,this.canonicalId=t,this.readTime=n,this.resumeToken=r,this.lastListenSequenceNumber=i,this.lastLimboFreeSnapshotVersion=s,this.query=o}}Na.store="targets",Na.keyPath="targetId",Na.queryTargetsIndexName="queryTargetsIndex",Na.queryTargetsKeyPath=["canonicalId","targetId"];class La{constructor(e,t,n){this.targetId=e,this.path=t,this.sequenceNumber=n}}La.store="targetDocuments",La.keyPath=["targetId","path"],La.documentTargetsIndex="documentTargetsIndex",La.documentTargetsKeyPath=["path","targetId"];class Pa{constructor(e,t,n,r){this.highestTargetId=e,this.highestListenSequenceNumber=t,this.lastRemoteSnapshotVersion=n,this.targetCount=r}}Pa.key="targetGlobalKey",Pa.store="targetGlobal";class Da{constructor(e,t){this.collectionId=e,this.parent=t}}Da.store="collectionParents",Da.keyPath=["collectionId","parent"];class Fa{constructor(e,t,n,r){this.clientId=e,this.updateTimeMs=t,this.networkEnabled=n,this.inForeground=r}}Fa.store="clientMetadata",Fa.keyPath="clientId";class Ma{constructor(e,t,n){this.bundleId=e,this.createTime=t,this.version=n}}Ma.store="bundles",Ma.keyPath="bundleId";class qa{constructor(e,t,n){this.name=e,this.readTime=t,this.bundledQuery=n}}qa.store="namedQueries",qa.keyPath="name";Ca.store,Aa.store,xa.store,Ra.store,Na.store,Sa.store,Pa.store,La.store,Fa.store,Oa.store,Da.store,Ma.store,qa.store;const Va="The current tab is not in the required state to perform this operation. It might be necessary to refresh the browser tab.";class Ua{constructor(){this.onCommittedListeners=[]}addOnCommittedListener(e){this.onCommittedListeners.push(e)}raiseOnCommittedEvent(){this.onCommittedListeners.forEach((e=>e()))}}
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
 */class ja{constructor(e){this.nextCallback=null,this.catchCallback=null,this.result=void 0,this.error=void 0,this.isDone=!1,this.callbackAttached=!1,e((e=>{this.isDone=!0,this.result=e,this.nextCallback&&this.nextCallback(e)}),(e=>{this.isDone=!0,this.error=e,this.catchCallback&&this.catchCallback(e)}))}catch(e){return this.next(void 0,e)}next(e,t){return this.callbackAttached&&Gr(),this.callbackAttached=!0,this.isDone?this.error?this.wrapFailure(t,this.error):this.wrapSuccess(e,this.result):new ja(((n,r)=>{this.nextCallback=t=>{this.wrapSuccess(e,t).next(n,r)},this.catchCallback=e=>{this.wrapFailure(t,e).next(n,r)}}))}toPromise(){return new Promise(((e,t)=>{this.next(e,t)}))}wrapUserFunction(e){try{const t=e();return t instanceof ja?t:ja.resolve(t)}catch(e){return ja.reject(e)}}wrapSuccess(e,t){return e?this.wrapUserFunction((()=>e(t))):ja.resolve(t)}wrapFailure(e,t){return e?this.wrapUserFunction((()=>e(t))):ja.reject(t)}static resolve(e){return new ja(((t,n)=>{t(e)}))}static reject(e){return new ja(((t,n)=>{n(e)}))}static waitFor(e){return new ja(((t,n)=>{let r=0,i=0,s=!1;e.forEach((e=>{++r,e.next((()=>{++i,s&&i===r&&t()}),(e=>n(e)))})),s=!0,i===r&&t()}))}static or(e){let t=ja.resolve(!1);for(const n of e)t=t.next((e=>e?ja.resolve(e):n()));return t}static forEach(e,t){const n=[];return e.forEach(((e,r)=>{n.push(t.call(this,e,r))})),this.waitFor(n)}}
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
 */function Ba(e){return"IndexedDbTransactionError"===e.name}
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
class $a{constructor(e,t,n,r){this.batchId=e,this.localWriteTime=t,this.baseMutations=n,this.mutations=r}applyToRemoteDocument(e,t){const n=t.mutationResults;for(let r=0;r<this.mutations.length;r++){const t=this.mutations[r];t.key.isEqual(e.key)&&to(t,e,n[r])}}applyToLocalView(e){for(const t of this.baseMutations)t.key.isEqual(e.key)&&no(t,e,this.localWriteTime);for(const t of this.mutations)t.key.isEqual(e.key)&&no(t,e,this.localWriteTime)}applyToLocalDocumentSet(e){this.mutations.forEach((t=>{const n=e.get(t.key),r=n;this.applyToLocalView(r),n.isValidDocument()||r.convertToNoDocument(fi.min())}))}keys(){return this.mutations.reduce(((e,t)=>e.add(t.key)),Oo())}isEqual(e){return this.batchId===e.batchId&&hi(this.mutations,e.mutations,((e,t)=>io(e,t)))&&hi(this.baseMutations,e.baseMutations,((e,t)=>io(e,t)))}}class za{constructor(e,t,n,r){this.batch=e,this.commitVersion=t,this.mutationResults=n,this.docVersions=r}static from(e,t,n){Jr(e.mutations.length===n.length);let r=xo();const i=e.mutations;for(let s=0;s<i.length;s++)r=r.insert(i[s].key,n[s].version);return new za(e,t,n,r)}}
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
 */class Ha{constructor(e,t,n,r,i=fi.min(),s=fi.min(),o=Ti.EMPTY_BYTE_STRING){this.target=e,this.targetId=t,this.purpose=n,this.sequenceNumber=r,this.snapshotVersion=i,this.lastLimboFreeSnapshotVersion=s,this.resumeToken=o}withSequenceNumber(e){return new Ha(this.target,this.targetId,this.purpose,e,this.snapshotVersion,this.lastLimboFreeSnapshotVersion,this.resumeToken)}withResumeToken(e,t){return new Ha(this.target,this.targetId,this.purpose,this.sequenceNumber,t,this.lastLimboFreeSnapshotVersion,e)}withLastLimboFreeSnapshotVersion(e){return new Ha(this.target,this.targetId,this.purpose,this.sequenceNumber,this.snapshotVersion,e,this.resumeToken)}}
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
 */class Ka{constructor(e){this.Gt=e}}function Wa(e){const t=ua({parent:e.parent,structuredQuery:e.structuredQuery});return"LAST"===e.limitType?As(t,t.limit,"L"):t}
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
class Ga{constructor(){this.zt=new Ja}addToCollectionParentIndex(e,t){return this.zt.add(t),ja.resolve()}getCollectionParents(e,t){return ja.resolve(this.zt.getEntries(t))}}class Ja{constructor(){this.index={}}add(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t]||new To(yi.comparator),i=!r.has(n);return this.index[t]=r.add(n),i}has(e){const t=e.lastSegment(),n=e.popLast(),r=this.index[t];return r&&r.has(n)}getEntries(e){return(this.index[e]||new To(yi.comparator)).toArray()}}
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
 */class Ya{constructor(e,t,n){this.cacheSizeCollectionThreshold=e,this.percentileToCollect=t,this.maximumSequenceNumbersToCollect=n}static withCacheSize(e){return new Ya(e,Ya.DEFAULT_COLLECTION_PERCENTILE,Ya.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT)}}
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
 */Ya.DEFAULT_COLLECTION_PERCENTILE=10,Ya.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT=1e3,Ya.DEFAULT=new Ya(41943040,Ya.DEFAULT_COLLECTION_PERCENTILE,Ya.DEFAULT_MAX_SEQUENCE_NUMBERS_TO_COLLECT),Ya.DISABLED=new Ya(-1,0,0);
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
class Xa{constructor(e){this.se=e}next(){return this.se+=2,this.se}static ie(){return new Xa(0)}static re(){return new Xa(-1)}}
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
async function Za(e){if(e.code!==Xr.FAILED_PRECONDITION||e.message!==Va)throw e;zr("LocalStore","Unexpectedly lost primary lease")}
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
class Qa{constructor(e,t){this.mapKeyFn=e,this.equalsFn=t,this.inner={}}get(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0!==n)for(const[r,i]of n)if(this.equalsFn(r,e))return i}has(e){return void 0!==this.get(e)}set(e,t){const n=this.mapKeyFn(e),r=this.inner[n];if(void 0!==r){for(let n=0;n<r.length;n++)if(this.equalsFn(r[n][0],e))return void(r[n]=[e,t]);r.push([e,t])}else this.inner[n]=[[e,t]]}delete(e){const t=this.mapKeyFn(e),n=this.inner[t];if(void 0===n)return!1;for(let r=0;r<n.length;r++)if(this.equalsFn(n[r][0],e))return 1===n.length?delete this.inner[t]:n.splice(r,1),!0;return!1}forEach(e){gi(this.inner,((t,n)=>{for(const[r,i]of n)e(r,i)}))}isEmpty(){return mi(this.inner)}}
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
 */class el{constructor(){this.changes=new Qa((e=>e.toString()),((e,t)=>e.isEqual(t))),this.changesApplied=!1}getReadTime(e){const t=this.changes.get(e);return t?t.readTime:fi.min()}addEntry(e,t){this.assertNotApplied(),this.changes.set(e.key,{document:e,readTime:t})}removeEntry(e,t=null){this.assertNotApplied(),this.changes.set(e,{document:Ji.newInvalidDocument(e),readTime:t})}getEntry(e,t){this.assertNotApplied();const n=this.changes.get(t);return void 0!==n?ja.resolve(n.document):this.getFromCache(e,t)}getEntries(e,t){return this.getAllFromCache(e,t)}apply(e){return this.assertNotApplied(),this.changesApplied=!0,this.applyChanges(e)}assertNotApplied(){}}
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
class tl{constructor(e,t,n){this.Je=e,this.An=t,this.Jt=n}Rn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKey(e,t).next((n=>this.Pn(e,t,n)))}Pn(e,t,n){return this.Je.getEntry(e,t).next((e=>{for(const t of n)t.applyToLocalView(e);return e}))}bn(e,t){e.forEach(((e,n)=>{for(const r of t)r.applyToLocalView(n)}))}vn(e,t){return this.Je.getEntries(e,t).next((t=>this.Vn(e,t).next((()=>t))))}Vn(e,t){return this.An.getAllMutationBatchesAffectingDocumentKeys(e,t).next((e=>this.bn(t,e)))}getDocumentsMatchingQuery(e,t,n){return function(e){return Li.isDocumentKey(e.path)&&null===e.collectionGroup&&0===e.filters.length}(t)?this.Sn(e,t.path):Is(t)?this.Dn(e,t,n):this.Cn(e,t,n)}Sn(e,t){return this.Rn(e,new Li(t)).next((e=>{let t=Co();return e.isFoundDocument()&&(t=t.insert(e.key,e)),t}))}Dn(e,t,n){const r=t.collectionGroup;let i=Co();return this.Jt.getCollectionParents(e,r).next((s=>ja.forEach(s,(s=>{const o=function(e,t){return new ys(t,null,e.explicitOrderBy.slice(),e.filters.slice(),e.limit,e.limitType,e.startAt,e.endAt)}(t,s.child(r));return this.Cn(e,o,n).next((e=>{e.forEach(((e,t)=>{i=i.insert(e,t)}))}))})).next((()=>i))))}Cn(e,t,n){let r,i;return this.Je.getDocumentsMatchingQuery(e,t,n).next((n=>(r=n,this.An.getAllMutationBatchesAffectingQuery(e,t)))).next((t=>(i=t,this.Nn(e,i,r).next((e=>{r=e;for(const t of i)for(const e of t.mutations){const n=e.key;let i=r.get(n);null==i&&(i=Ji.newInvalidDocument(n),r=r.insert(n,i)),no(e,i,t.localWriteTime),i.isFoundDocument()||(r=r.remove(n))}}))))).next((()=>(r.forEach(((e,n)=>{Ns(t,n)||(r=r.remove(e))})),r)))}Nn(e,t,n){let r=Oo();for(const s of t)for(const e of s.mutations)e instanceof ao&&null===n.get(e.key)&&(r=r.add(e.key));let i=n;return this.Je.getEntries(e,r).next((e=>(e.forEach(((e,t)=>{t.isFoundDocument()&&(i=i.insert(e,t))})),i)))}}
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
 */class nl{constructor(e,t,n,r){this.targetId=e,this.fromCache=t,this.kn=n,this.xn=r}static $n(e,t){let n=Oo(),r=Oo();for(const i of t.docChanges)switch(i.type){case 0:n=n.add(i.doc.key);break;case 1:r=r.add(i.doc.key)}return new nl(e,t.fromCache,n,r)}}
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
 */class rl{Fn(e){this.On=e}getDocumentsMatchingQuery(e,t,n,r){return function(e){return 0===e.filters.length&&null===e.limit&&null==e.startAt&&null==e.endAt&&(0===e.explicitOrderBy.length||1===e.explicitOrderBy.length&&e.explicitOrderBy[0].field.isKeyField())}(t)||n.isEqual(fi.min())?this.Mn(e,t):this.On.vn(e,r).next((i=>{const s=this.Ln(t,i);return(_s(t)||Ts(t))&&this.Bn(t.limitType,s,r,n)?this.Mn(e,t):($r()<=o["in"].DEBUG&&zr("QueryEngine","Re-using previous result from %s to execute query: %s",n.toString(),Os(t)),this.On.getDocumentsMatchingQuery(e,t,n).next((e=>(s.forEach((t=>{e=e.insert(t.key,t)})),e))))}))}Ln(e,t){let n=new To(Ls(e));return t.forEach(((t,r)=>{Ns(e,r)&&(n=n.add(r))})),n}Bn(e,t,n,r){if(n.size!==t.size)return!0;const i="F"===e?t.last():t.first();return!!i&&(i.hasPendingWrites||i.version.compareTo(r)>0)}Mn(e,t){return $r()<=o["in"].DEBUG&&zr("QueryEngine","Using full collection scan to execute query:",Os(t)),this.On.getDocumentsMatchingQuery(e,t,fi.min())}}
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
 */class il{constructor(e,t,n,r){this.persistence=e,this.Un=t,this.k=r,this.qn=new wo(ui),this.Kn=new Qa((e=>Zi(e)),es),this.jn=fi.min(),this.An=e.getMutationQueue(n),this.Qn=e.getRemoteDocumentCache(),this.He=e.getTargetCache(),this.Wn=new tl(this.Qn,this.An,this.persistence.getIndexManager()),this.Ye=e.getBundleCache(),this.Un.Fn(this.Wn)}collectGarbage(e){return this.persistence.runTransaction("Collect garbage","readwrite-primary",(t=>e.collect(t,this.qn)))}}function sl(e,t,n,r){return new il(e,t,n,r)}async function ol(e,t){const n=Yr(e);let r=n.An,i=n.Wn;const s=await n.persistence.runTransaction("Handle user change","readonly",(e=>{let s;return n.An.getAllMutationBatches(e).next((o=>(s=o,r=n.persistence.getMutationQueue(t),i=new tl(n.Qn,r,n.persistence.getIndexManager()),r.getAllMutationBatches(e)))).next((t=>{const n=[],r=[];let o=Oo();for(const e of s){n.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}for(const e of t){r.push(e.batchId);for(const t of e.mutations)o=o.add(t.key)}return i.vn(e,o).next((e=>({Gn:e,removedBatchIds:n,addedBatchIds:r})))}))}));return n.An=r,n.Wn=i,n.Un.Fn(n.Wn),s}function al(e,t){const n=Yr(e);return n.persistence.runTransaction("Acknowledge batch","readwrite-primary",(e=>{const r=t.batch.keys(),i=n.Qn.newChangeBuffer({trackRemovals:!0});return function(e,t,n,r){const i=n.batch,s=i.keys();let o=ja.resolve();return s.forEach((e=>{o=o.next((()=>r.getEntry(t,e))).next((t=>{const s=n.docVersions.get(e);Jr(null!==s),t.version.compareTo(s)<0&&(i.applyToRemoteDocument(t,n),t.isValidDocument()&&r.addEntry(t,n.commitVersion))}))})),o.next((()=>e.An.removeMutationBatch(t,i)))}(n,e,t,i).next((()=>i.apply(e))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}function ll(e){const t=Yr(e);return t.persistence.runTransaction("Get last remote snapshot version","readonly",(e=>t.He.getLastRemoteSnapshotVersion(e)))}function cl(e,t){const n=Yr(e),r=t.snapshotVersion;let i=n.qn;return n.persistence.runTransaction("Apply remote event","readwrite-primary",(e=>{const s=n.Qn.newChangeBuffer({trackRemovals:!0});i=n.qn;const o=[];t.targetChanges.forEach(((t,s)=>{const a=i.get(s);if(!a)return;o.push(n.He.removeMatchingKeys(e,t.removedDocuments,s).next((()=>n.He.addMatchingKeys(e,t.addedDocuments,s))));const l=t.resumeToken;if(l.approximateByteSize()>0){const c=a.withResumeToken(l,r).withSequenceNumber(e.currentSequenceNumber);i=i.insert(s,c),function(e,t,n){return Jr(t.resumeToken.approximateByteSize()>0),0===e.resumeToken.approximateByteSize()||(t.snapshotVersion.toMicroseconds()-e.snapshotVersion.toMicroseconds()>=3e8||n.addedDocuments.size+n.modifiedDocuments.size+n.removedDocuments.size>0)}(a,c,t)&&o.push(n.He.updateTargetData(e,c))}}));let a=Io();if(t.documentUpdates.forEach(((r,i)=>{t.resolvedLimboDocuments.has(r)&&o.push(n.persistence.referenceDelegate.updateLimboDocument(e,r))})),o.push(ul(e,s,t.documentUpdates,r,void 0).next((e=>{a=e}))),!r.isEqual(fi.min())){const t=n.He.getLastRemoteSnapshotVersion(e).next((t=>n.He.setTargetsMetadata(e,e.currentSequenceNumber,r)));o.push(t)}return ja.waitFor(o).next((()=>s.apply(e))).next((()=>n.Wn.Vn(e,a))).next((()=>a))})).then((e=>(n.qn=i,e)))}function ul(e,t,n,r,i){let s=Oo();return n.forEach((e=>s=s.add(e))),t.getEntries(e,s).next((e=>{let s=Io();return n.forEach(((n,o)=>{const a=e.get(n),l=(null==i?void 0:i.get(n))||r;o.isNoDocument()&&o.version.isEqual(fi.min())?(t.removeEntry(n,l),s=s.insert(n,o)):!a.isValidDocument()||o.version.compareTo(a.version)>0||0===o.version.compareTo(a.version)&&a.hasPendingWrites?(t.addEntry(o,l),s=s.insert(n,o)):zr("LocalStore","Ignoring outdated watch update for ",n,". Current version:",a.version," Watch version:",o.version)})),s}))}function hl(e,t){const n=Yr(e);return n.persistence.runTransaction("Get next mutation batch","readonly",(e=>(void 0===t&&(t=-1),n.An.getNextMutationBatchAfterBatchId(e,t))))}function dl(e,t){const n=Yr(e);return n.persistence.runTransaction("Allocate target","readwrite",(e=>{let r;return n.He.getTargetData(e,t).next((i=>i?(r=i,ja.resolve(r)):n.He.allocateTargetId(e).next((i=>(r=new Ha(t,i,0,e.currentSequenceNumber),n.He.addTargetData(e,r).next((()=>r)))))))})).then((e=>{const r=n.qn.get(e.targetId);return(null===r||e.snapshotVersion.compareTo(r.snapshotVersion)>0)&&(n.qn=n.qn.insert(e.targetId,e),n.Kn.set(t,e.targetId)),e}))}async function fl(e,t,n){const r=Yr(e),i=r.qn.get(t),s=n?"readwrite":"readwrite-primary";try{n||await r.persistence.runTransaction("Release target",s,(e=>r.persistence.referenceDelegate.removeTarget(e,i)))}catch(e){if(!Ba(e))throw e;zr("LocalStore",`Failed to update sequence numbers for target ${t}: ${e}`)}r.qn=r.qn.remove(t),r.Kn.delete(i.target)}function pl(e,t,n){const r=Yr(e);let i=fi.min(),s=Oo();return r.persistence.runTransaction("Execute query","readonly",(e=>function(e,t,n){const r=Yr(e),i=r.Kn.get(n);return void 0!==i?ja.resolve(r.qn.get(i)):r.He.getTargetData(t,n)}(r,e,Cs(t)).next((t=>{if(t)return i=t.lastLimboFreeSnapshotVersion,r.He.getMatchingKeysForTargetId(e,t.targetId).next((e=>{s=e}))})).next((()=>r.Un.getDocumentsMatchingQuery(e,t,n?i:fi.min(),n?s:Oo()))).next((e=>({documents:e,zn:s})))))}
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
class gl{constructor(e){this.k=e,this.Xn=new Map,this.Zn=new Map}getBundleMetadata(e,t){return ja.resolve(this.Xn.get(t))}saveBundleMetadata(e,t){var n;return this.Xn.set(t.id,{id:(n=t).id,version:n.version,createTime:Jo(n.createTime)}),ja.resolve()}getNamedQuery(e,t){return ja.resolve(this.Zn.get(t))}saveNamedQuery(e,t){return this.Zn.set(t.name,function(e){return{name:e.name,query:Wa(e.bundledQuery),readTime:Jo(e.readTime)}}(t)),ja.resolve()}}
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
 */class ml{constructor(){this.ts=new To(vl.es),this.ns=new To(vl.ss)}isEmpty(){return this.ts.isEmpty()}addReference(e,t){const n=new vl(e,t);this.ts=this.ts.add(n),this.ns=this.ns.add(n)}rs(e,t){e.forEach((e=>this.addReference(e,t)))}removeReference(e,t){this.os(new vl(e,t))}cs(e,t){e.forEach((e=>this.removeReference(e,t)))}us(e){const t=new Li(new yi([])),n=new vl(t,e),r=new vl(t,e+1),i=[];return this.ns.forEachInRange([n,r],(e=>{this.os(e),i.push(e.key)})),i}hs(){this.ts.forEach((e=>this.os(e)))}os(e){this.ts=this.ts.delete(e),this.ns=this.ns.delete(e)}ls(e){const t=new Li(new yi([])),n=new vl(t,e),r=new vl(t,e+1);let i=Oo();return this.ns.forEachInRange([n,r],(e=>{i=i.add(e.key)})),i}containsKey(e){const t=new vl(e,0),n=this.ts.firstAfterOrEqual(t);return null!==n&&e.isEqual(n.key)}}class vl{constructor(e,t){this.key=e,this.fs=t}static es(e,t){return Li.comparator(e.key,t.key)||ui(e.fs,t.fs)}static ss(e,t){return ui(e.fs,t.fs)||Li.comparator(e.key,t.key)}}
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
 */class yl{constructor(e,t){this.Jt=e,this.referenceDelegate=t,this.An=[],this.ds=1,this.ws=new To(vl.es)}checkEmpty(e){return ja.resolve(0===this.An.length)}addMutationBatch(e,t,n,r){const i=this.ds;this.ds++,this.An.length>0&&this.An[this.An.length-1];const s=new $a(i,t,n,r);this.An.push(s);for(const o of r)this.ws=this.ws.add(new vl(o.key,i)),this.Jt.addToCollectionParentIndex(e,o.key.path.popLast());return ja.resolve(s)}lookupMutationBatch(e,t){return ja.resolve(this._s(t))}getNextMutationBatchAfterBatchId(e,t){const n=t+1,r=this.gs(n),i=r<0?0:r;return ja.resolve(this.An.length>i?this.An[i]:null)}getHighestUnacknowledgedBatchId(){return ja.resolve(0===this.An.length?-1:this.ds-1)}getAllMutationBatches(e){return ja.resolve(this.An.slice())}getAllMutationBatchesAffectingDocumentKey(e,t){const n=new vl(t,0),r=new vl(t,Number.POSITIVE_INFINITY),i=[];return this.ws.forEachInRange([n,r],(e=>{const t=this._s(e.fs);i.push(t)})),ja.resolve(i)}getAllMutationBatchesAffectingDocumentKeys(e,t){let n=new To(ui);return t.forEach((e=>{const t=new vl(e,0),r=new vl(e,Number.POSITIVE_INFINITY);this.ws.forEachInRange([t,r],(e=>{n=n.add(e.fs)}))})),ja.resolve(this.ys(n))}getAllMutationBatchesAffectingQuery(e,t){const n=t.path,r=n.length+1;let i=n;Li.isDocumentKey(i)||(i=i.child(""));const s=new vl(new Li(i),0);let o=new To(ui);return this.ws.forEachWhile((e=>{const t=e.key.path;return!!n.isPrefixOf(t)&&(t.length===r&&(o=o.add(e.fs)),!0)}),s),ja.resolve(this.ys(o))}ys(e){const t=[];return e.forEach((e=>{const n=this._s(e);null!==n&&t.push(n)})),t}removeMutationBatch(e,t){Jr(0===this.ps(t.batchId,"removed")),this.An.shift();let n=this.ws;return ja.forEach(t.mutations,(r=>{const i=new vl(r.key,t.batchId);return n=n.delete(i),this.referenceDelegate.markPotentiallyOrphaned(e,r.key)})).next((()=>{this.ws=n}))}ee(e){}containsKey(e,t){const n=new vl(t,0),r=this.ws.firstAfterOrEqual(n);return ja.resolve(t.isEqual(r&&r.key))}performConsistencyCheck(e){return this.An.length,ja.resolve()}ps(e,t){return this.gs(e)}gs(e){return 0===this.An.length?0:e-this.An[0].batchId}_s(e){const t=this.gs(e);return t<0||t>=this.An.length?null:this.An[t]}}
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
 */class wl{constructor(e,t){this.Jt=e,this.Ts=t,this.docs=new wo(Li.comparator),this.size=0}addEntry(e,t,n){const r=t.key,i=this.docs.get(r),s=i?i.size:0,o=this.Ts(t);return this.docs=this.docs.insert(r,{document:t.clone(),size:o,readTime:n}),this.size+=o-s,this.Jt.addToCollectionParentIndex(e,r.path.popLast())}removeEntry(e){const t=this.docs.get(e);t&&(this.docs=this.docs.remove(e),this.size-=t.size)}getEntry(e,t){const n=this.docs.get(t);return ja.resolve(n?n.document.clone():Ji.newInvalidDocument(t))}getEntries(e,t){let n=Io();return t.forEach((e=>{const t=this.docs.get(e);n=n.insert(e,t?t.document.clone():Ji.newInvalidDocument(e))})),ja.resolve(n)}getDocumentsMatchingQuery(e,t,n){let r=Io();const i=new Li(t.path.child("")),s=this.docs.getIteratorFrom(i);for(;s.hasNext();){const{key:e,value:{document:i,readTime:o}}=s.getNext();if(!t.path.isPrefixOf(e.path))break;o.compareTo(n)<=0||Ns(t,i)&&(r=r.insert(i.key,i.clone()))}return ja.resolve(r)}Es(e,t){return ja.forEach(this.docs,(e=>t(e)))}newChangeBuffer(e){return new bl(this)}getSize(e){return ja.resolve(this.size)}}class bl extends el{constructor(e){super(),this.De=e}applyChanges(e){const t=[];return this.changes.forEach(((n,r)=>{r.document.isValidDocument()?t.push(this.De.addEntry(e,r.document,this.getReadTime(n))):this.De.removeEntry(n)})),ja.waitFor(t)}getFromCache(e,t){return this.De.getEntry(e,t)}getAllFromCache(e,t){return this.De.getEntries(e,t)}}
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
 */class _l{constructor(e){this.persistence=e,this.Is=new Qa((e=>Zi(e)),es),this.lastRemoteSnapshotVersion=fi.min(),this.highestTargetId=0,this.As=0,this.Rs=new ml,this.targetCount=0,this.Ps=Xa.ie()}forEachTarget(e,t){return this.Is.forEach(((e,n)=>t(n))),ja.resolve()}getLastRemoteSnapshotVersion(e){return ja.resolve(this.lastRemoteSnapshotVersion)}getHighestSequenceNumber(e){return ja.resolve(this.As)}allocateTargetId(e){return this.highestTargetId=this.Ps.next(),ja.resolve(this.highestTargetId)}setTargetsMetadata(e,t,n){return n&&(this.lastRemoteSnapshotVersion=n),t>this.As&&(this.As=t),ja.resolve()}ce(e){this.Is.set(e.target,e);const t=e.targetId;t>this.highestTargetId&&(this.Ps=new Xa(t),this.highestTargetId=t),e.sequenceNumber>this.As&&(this.As=e.sequenceNumber)}addTargetData(e,t){return this.ce(t),this.targetCount+=1,ja.resolve()}updateTargetData(e,t){return this.ce(t),ja.resolve()}removeTargetData(e,t){return this.Is.delete(t.target),this.Rs.us(t.targetId),this.targetCount-=1,ja.resolve()}removeTargets(e,t,n){let r=0;const i=[];return this.Is.forEach(((s,o)=>{o.sequenceNumber<=t&&null===n.get(o.targetId)&&(this.Is.delete(s),i.push(this.removeMatchingKeysForTargetId(e,o.targetId)),r++)})),ja.waitFor(i).next((()=>r))}getTargetCount(e){return ja.resolve(this.targetCount)}getTargetData(e,t){const n=this.Is.get(t)||null;return ja.resolve(n)}addMatchingKeys(e,t,n){return this.Rs.rs(t,n),ja.resolve()}removeMatchingKeys(e,t,n){this.Rs.cs(t,n);const r=this.persistence.referenceDelegate,i=[];return r&&t.forEach((t=>{i.push(r.markPotentiallyOrphaned(e,t))})),ja.waitFor(i)}removeMatchingKeysForTargetId(e,t){return this.Rs.us(t),ja.resolve()}getMatchingKeysForTargetId(e,t){const n=this.Rs.ls(t);return ja.resolve(n)}containsKey(e,t){return ja.resolve(this.Rs.containsKey(t))}}
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
 */class Tl{constructor(e,t){this.bs={},this.Be=new ai(0),this.Ue=!1,this.Ue=!0,this.referenceDelegate=e(this),this.He=new _l(this),this.Jt=new Ga,this.Je=function(e,t){return new wl(e,t)}(this.Jt,(e=>this.referenceDelegate.vs(e))),this.k=new Ka(t),this.Ye=new gl(this.k)}start(){return Promise.resolve()}shutdown(){return this.Ue=!1,Promise.resolve()}get started(){return this.Ue}setDatabaseDeletedListener(){}setNetworkEnabled(){}getIndexManager(){return this.Jt}getMutationQueue(e){let t=this.bs[e.toKey()];return t||(t=new yl(this.Jt,this.referenceDelegate),this.bs[e.toKey()]=t),t}getTargetCache(){return this.He}getRemoteDocumentCache(){return this.Je}getBundleCache(){return this.Ye}runTransaction(e,t,n){zr("MemoryPersistence","Starting transaction:",e);const r=new El(this.Be.next());return this.referenceDelegate.Vs(),n(r).next((e=>this.referenceDelegate.Ss(r).next((()=>e)))).toPromise().then((e=>(r.raiseOnCommittedEvent(),e)))}Ds(e,t){return ja.or(Object.values(this.bs).map((n=>()=>n.containsKey(e,t))))}}class El extends Ua{constructor(e){super(),this.currentSequenceNumber=e}}class kl{constructor(e){this.persistence=e,this.Cs=new ml,this.Ns=null}static ks(e){return new kl(e)}get xs(){if(this.Ns)return this.Ns;throw Gr()}addReference(e,t,n){return this.Cs.addReference(n,t),this.xs.delete(n.toString()),ja.resolve()}removeReference(e,t,n){return this.Cs.removeReference(n,t),this.xs.add(n.toString()),ja.resolve()}markPotentiallyOrphaned(e,t){return this.xs.add(t.toString()),ja.resolve()}removeTarget(e,t){this.Cs.us(t.targetId).forEach((e=>this.xs.add(e.toString())));const n=this.persistence.getTargetCache();return n.getMatchingKeysForTargetId(e,t.targetId).next((e=>{e.forEach((e=>this.xs.add(e.toString())))})).next((()=>n.removeTargetData(e,t)))}Vs(){this.Ns=new Set}Ss(e){const t=this.persistence.getRemoteDocumentCache().newChangeBuffer();return ja.forEach(this.xs,(n=>{const r=Li.fromPath(n);return this.$s(e,r).next((e=>{e||t.removeEntry(r)}))})).next((()=>(this.Ns=null,t.apply(e))))}updateLimboDocument(e,t){return this.$s(e,t).next((e=>{e?this.xs.delete(t.toString()):this.xs.add(t.toString())}))}vs(e){return 0}$s(e,t){return ja.or([()=>ja.resolve(this.Cs.containsKey(t)),()=>this.persistence.getTargetCache().containsKey(e,t),()=>this.persistence.Ds(e,t)])}}
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
 */class Il{constructor(){this.activeTargetIds=Lo()}Ms(e){this.activeTargetIds=this.activeTargetIds.add(e)}Ls(e){this.activeTargetIds=this.activeTargetIds.delete(e)}Os(){const e={activeTargetIds:this.activeTargetIds.toArray(),updateTimeMs:Date.now()};return JSON.stringify(e)}}class Sl{constructor(){this.pi=new Il,this.Ti={},this.onlineStateHandler=null,this.sequenceNumberHandler=null}addPendingMutation(e){}updateMutationState(e,t,n){}addLocalQueryTarget(e){return this.pi.Ms(e),this.Ti[e]||"not-current"}updateQueryState(e,t,n){this.Ti[e]=t}removeLocalQueryTarget(e){this.pi.Ls(e)}isLocalQueryTarget(e){return this.pi.activeTargetIds.has(e)}clearQueryState(e){delete this.Ti[e]}getAllActiveQueryTargets(){return this.pi.activeTargetIds}isActiveQueryTarget(e){return this.pi.activeTargetIds.has(e)}start(){return this.pi=new Il,Promise.resolve()}handleUserChange(e,t,n){}setOnlineState(e){}shutdown(){}writeSequenceNumber(e){}notifyBundleLoaded(){}}
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
 */class Cl{Ei(e){}shutdown(){}}
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
 */class Al{constructor(){this.Ii=()=>this.Ai(),this.Ri=()=>this.Pi(),this.bi=[],this.vi()}Ei(e){this.bi.push(e)}shutdown(){window.removeEventListener("online",this.Ii),window.removeEventListener("offline",this.Ri)}vi(){window.addEventListener("online",this.Ii),window.addEventListener("offline",this.Ri)}Ai(){zr("ConnectivityMonitor","Network connectivity changed: AVAILABLE");for(const e of this.bi)e(0)}Pi(){zr("ConnectivityMonitor","Network connectivity changed: UNAVAILABLE");for(const e of this.bi)e(1)}static bt(){return"undefined"!=typeof window&&void 0!==window.addEventListener&&void 0!==window.removeEventListener}}
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
 */const xl={BatchGetDocuments:"batchGet",Commit:"commit",RunQuery:"runQuery"};
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
 */class Rl{constructor(e){this.Vi=e.Vi,this.Si=e.Si}Di(e){this.Ci=e}Ni(e){this.ki=e}onMessage(e){this.xi=e}close(){this.Si()}send(e){this.Vi(e)}$i(){this.Ci()}Fi(e){this.ki(e)}Oi(e){this.xi(e)}}
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
 */class Ol extends class{constructor(e){this.databaseInfo=e,this.databaseId=e.databaseId;const t=e.ssl?"https":"http";this.Mi=t+"://"+e.host,this.Li="projects/"+this.databaseId.projectId+"/databases/"+this.databaseId.database+"/documents"}Bi(e,t,n,r,i){const s=this.Ui(e,t);zr("RestConnection","Sending: ",s,n);const o={};return this.qi(o,r,i),this.Ki(e,s,o,n).then((e=>(zr("RestConnection","Received: ",e),e)),(t=>{throw Kr("RestConnection",`${e} failed with error: `,t,"url: ",s,"request:",n),t}))}ji(e,t,n,r,i){return this.Bi(e,t,n,r,i)}qi(e,t,n){e["X-Goog-Api-Client"]="gl-js/ fire/"+jr,e["Content-Type"]="text/plain",this.databaseInfo.appId&&(e["X-Firebase-GMPID"]=this.databaseInfo.appId),t&&t.headers.forEach(((t,n)=>e[n]=t)),n&&n.headers.forEach(((t,n)=>e[n]=t))}Ui(e,t){const n=xl[e];return`${this.Mi}/v1/${t}:${n}`}}{constructor(e){super(e),this.forceLongPolling=e.forceLongPolling,this.autoDetectLongPolling=e.autoDetectLongPolling,this.useFetchStreams=e.useFetchStreams}Ki(e,t,n,r){return new Promise(((i,s)=>{const o=new qr;o.listenOnce(Lr.COMPLETE,(()=>{try{switch(o.getLastErrorCode()){case Nr.NO_ERROR:const t=o.getResponseJson();zr("Connection","XHR received:",JSON.stringify(t)),i(t);break;case Nr.TIMEOUT:zr("Connection",'RPC "'+e+'" timed out'),s(new Zr(Xr.DEADLINE_EXCEEDED,"Request time out"));break;case Nr.HTTP_ERROR:const n=o.getStatus();if(zr("Connection",'RPC "'+e+'" failed with status:',n,"response text:",o.getResponseText()),n>0){const e=o.getResponseJson().error;if(e&&e.status&&e.message){const t=function(e){const t=e.toLowerCase().replace(/_/g,"-");return Object.values(Xr).indexOf(t)>=0?t:Xr.UNKNOWN}(e.status);s(new Zr(t,e.message))}else s(new Zr(Xr.UNKNOWN,"Server responded with status "+o.getStatus()))}else s(new Zr(Xr.UNAVAILABLE,"Connection failed."));break;default:Gr()}}finally{zr("Connection",'RPC "'+e+'" completed.')}}));const a=JSON.stringify(r);o.send(t,"POST",a,n,15)}))}Qi(e,t,n){const r=[this.Mi,"/","google.firestore.v1.Firestore","/",e,"/channel"],i=Rr(),s=Or(),o={httpSessionIdParam:"gsessionid",initMessageHeaders:{},messageUrlParams:{database:`projects/${this.databaseId.projectId}/databases/${this.databaseId.database}`},sendRawJson:!0,supportsCrossDomainXhr:!0,internalChannelParams:{forwardChannelRequestTimeoutMs:6e5},forceLongPolling:this.forceLongPolling,detectBufferingProxy:this.autoDetectLongPolling};this.useFetchStreams&&(o.xmlHttpFactory=new Fr({})),this.qi(o.initMessageHeaders,t,n),(0,a.uI)()||(0,a.b$)()||(0,a.d)()||(0,a.w1)()||(0,a.Mn)()||(0,a.ru)()||(o.httpHeadersOverwriteParam="$httpHeaders");const l=r.join("");zr("Connection","Creating WebChannel: "+l,o);const c=i.createWebChannel(l,o);let u=!1,h=!1;const d=new Rl({Vi:e=>{h?zr("Connection","Not sending because WebChannel is closed:",e):(u||(zr("Connection","Opening WebChannel transport."),c.open(),u=!0),zr("Connection","WebChannel sending:",e),c.send(e))},Si:()=>c.close()}),f=(e,t,n)=>{e.listen(t,(e=>{try{n(e)}catch(e){setTimeout((()=>{throw e}),0)}}))};return f(c,Mr.EventType.OPEN,(()=>{h||zr("Connection","WebChannel transport opened.")})),f(c,Mr.EventType.CLOSE,(()=>{h||(h=!0,zr("Connection","WebChannel transport closed"),d.Fi())})),f(c,Mr.EventType.ERROR,(e=>{h||(h=!0,Kr("Connection","WebChannel transport errored:",e),d.Fi(new Zr(Xr.UNAVAILABLE,"The operation could not be completed")))})),f(c,Mr.EventType.MESSAGE,(e=>{var t;if(!h){const n=e.data[0];Jr(!!n);const r=n,i=r.error||(null===(t=r[0])||void 0===t?void 0:t.error);if(i){zr("Connection","WebChannel received error:",i);const e=i.status;let t=function(e){const t=go[e];if(void 0!==t)return yo(t)}(e),n=i.message;void 0===t&&(t=Xr.INTERNAL,n="Unknown error status: "+e+" with message "+i.message),h=!0,d.Fi(new Zr(t,n)),c.close()}else zr("Connection","WebChannel received:",n),d.Oi(n)}})),f(s,Pr.STAT_EVENT,(e=>{e.stat===Dr.PROXY?zr("Connection","Detected buffering proxy"):e.stat===Dr.NOPROXY&&zr("Connection","Detected no buffering proxy")})),setTimeout((()=>{d.$i()}),0),d}}
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
 */function Ll(e){return new Ho(e,!0)}class Pl{constructor(e,t,n=1e3,r=1.5,i=6e4){this.Oe=e,this.timerId=t,this.Wi=n,this.Gi=r,this.zi=i,this.Hi=0,this.Ji=null,this.Yi=Date.now(),this.reset()}reset(){this.Hi=0}Xi(){this.Hi=this.zi}Zi(e){this.cancel();const t=Math.floor(this.Hi+this.tr()),n=Math.max(0,Date.now()-this.Yi),r=Math.max(0,t-n);r>0&&zr("ExponentialBackoff",`Backing off for ${r} ms (base delay: ${this.Hi} ms, delay with jitter: ${t} ms, last attempt: ${n} ms ago)`),this.Ji=this.Oe.enqueueAfterDelay(this.timerId,r,(()=>(this.Yi=Date.now(),e()))),this.Hi*=this.Gi,this.Hi<this.Wi&&(this.Hi=this.Wi),this.Hi>this.zi&&(this.Hi=this.zi)}er(){null!==this.Ji&&(this.Ji.skipDelay(),this.Ji=null)}cancel(){null!==this.Ji&&(this.Ji.cancel(),this.Ji=null)}tr(){return(Math.random()-.5)*this.Hi}}
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
 */class Dl{constructor(e,t,n,r,i,s,o,a){this.Oe=e,this.nr=n,this.sr=r,this.ir=i,this.authCredentialsProvider=s,this.appCheckCredentialsProvider=o,this.listener=a,this.state=0,this.rr=0,this.ar=null,this.cr=null,this.stream=null,this.ur=new Pl(e,t)}hr(){return 1===this.state||5===this.state||this.lr()}lr(){return 2===this.state||3===this.state}start(){4!==this.state?this.auth():this.dr()}async stop(){this.hr()&&await this.close(0)}wr(){this.state=0,this.ur.reset()}_r(){this.lr()&&null===this.ar&&(this.ar=this.Oe.enqueueAfterDelay(this.nr,6e4,(()=>this.mr())))}gr(e){this.yr(),this.stream.send(e)}async mr(){if(this.lr())return this.close(0)}yr(){this.ar&&(this.ar.cancel(),this.ar=null)}pr(){this.cr&&(this.cr.cancel(),this.cr=null)}async close(e,t){this.yr(),this.pr(),this.ur.cancel(),this.rr++,4!==e?this.ur.reset():t&&t.code===Xr.RESOURCE_EXHAUSTED?(Hr(t.toString()),Hr("Using maximum backoff delay to prevent overloading the backend."),this.ur.Xi()):t&&t.code===Xr.UNAUTHENTICATED&&3!==this.state&&(this.authCredentialsProvider.invalidateToken(),this.appCheckCredentialsProvider.invalidateToken()),null!==this.stream&&(this.Tr(),this.stream.close(),this.stream=null),this.state=e,await this.listener.Ni(t)}Tr(){}auth(){this.state=1;const e=this.Er(this.rr),t=this.rr;Promise.all([this.authCredentialsProvider.getToken(),this.appCheckCredentialsProvider.getToken()]).then((([e,n])=>{this.rr===t&&this.Ir(e,n)}),(t=>{e((()=>{const e=new Zr(Xr.UNKNOWN,"Fetching auth token failed: "+t.message);return this.Ar(e)}))}))}Ir(e,t){const n=this.Er(this.rr);this.stream=this.Rr(e,t),this.stream.Di((()=>{n((()=>(this.state=2,this.cr=this.Oe.enqueueAfterDelay(this.sr,1e4,(()=>(this.lr()&&(this.state=3),Promise.resolve()))),this.listener.Di())))})),this.stream.Ni((e=>{n((()=>this.Ar(e)))})),this.stream.onMessage((e=>{n((()=>this.onMessage(e)))}))}dr(){this.state=5,this.ur.Zi((async()=>{this.state=0,this.start()}))}Ar(e){return zr("PersistentStream",`close with error: ${e}`),this.stream=null,this.close(4,e)}Er(e){return t=>{this.Oe.enqueueAndForget((()=>this.rr===e?t():(zr("PersistentStream","stream callback skipped by getCloseGuardedDispatcher."),Promise.resolve())))}}}class Fl extends Dl{constructor(e,t,n,r,i,s){super(e,"listen_stream_connection_backoff","listen_stream_idle","health_check_timeout",t,n,r,s),this.k=i}Rr(e,t){return this.ir.Qi("Listen",e,t)}onMessage(e){this.ur.reset();const t=sa(this.k,e),n=function(e){if(!("targetChange"in e))return fi.min();const t=e.targetChange;return t.targetIds&&t.targetIds.length?fi.min():t.readTime?Jo(t.readTime):fi.min()}(e);return this.listener.Pr(t,n)}br(e){const t={};t.database=na(this.k),t.addTarget=function(e,t){let n;const r=t.target;return n=ts(r)?{documents:la(e,r)}:{query:ca(e,r)},n.targetId=t.targetId,t.resumeToken.approximateByteSize()>0?n.resumeToken=Wo(e,t.resumeToken):t.snapshotVersion.compareTo(fi.min())>0&&(n.readTime=Ko(e,t.snapshotVersion.toTimestamp())),n}(this.k,e);const n=ha(this.k,e);n&&(t.labels=n),this.gr(t)}vr(e){const t={};t.database=na(this.k),t.removeTarget=e,this.gr(t)}}class Ml extends Dl{constructor(e,t,n,r,i,s){super(e,"write_stream_connection_backoff","write_stream_idle","health_check_timeout",t,n,r,s),this.k=i,this.Vr=!1}get Sr(){return this.Vr}start(){this.Vr=!1,this.lastStreamToken=void 0,super.start()}Tr(){this.Vr&&this.Dr([])}Rr(e,t){return this.ir.Qi("Write",e,t)}onMessage(e){if(Jr(!!e.streamToken),this.lastStreamToken=e.streamToken,this.Vr){this.ur.reset();const t=aa(e.writeResults,e.commitTime),n=Jo(e.commitTime);return this.listener.Cr(n,t)}return Jr(!e.writeResults||0===e.writeResults.length),this.Vr=!0,this.listener.Nr()}kr(){const e={};e.database=na(this.k),this.gr(e)}Dr(e){const t={streamToken:this.lastStreamToken,writes:e.map((e=>oa(this.k,e)))};this.gr(t)}}
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
 */class ql extends class{}{constructor(e,t,n,r){super(),this.authCredentials=e,this.appCheckCredentials=t,this.ir=n,this.k=r,this.$r=!1}Fr(){if(this.$r)throw new Zr(Xr.FAILED_PRECONDITION,"The client has already been terminated.")}Bi(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.Bi(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Xr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Zr(Xr.UNKNOWN,e.toString())}))}ji(e,t,n){return this.Fr(),Promise.all([this.authCredentials.getToken(),this.appCheckCredentials.getToken()]).then((([r,i])=>this.ir.ji(e,t,n,r,i))).catch((e=>{throw"FirebaseError"===e.name?(e.code===Xr.UNAUTHENTICATED&&(this.authCredentials.invalidateToken(),this.appCheckCredentials.invalidateToken()),e):new Zr(Xr.UNKNOWN,e.toString())}))}terminate(){this.$r=!0}}class Vl{constructor(e,t){this.asyncQueue=e,this.onlineStateHandler=t,this.state="Unknown",this.Or=0,this.Mr=null,this.Lr=!0}Br(){0===this.Or&&(this.Ur("Unknown"),this.Mr=this.asyncQueue.enqueueAfterDelay("online_state_timeout",1e4,(()=>(this.Mr=null,this.qr("Backend didn't respond within 10 seconds."),this.Ur("Offline"),Promise.resolve()))))}Kr(e){"Online"===this.state?this.Ur("Unknown"):(this.Or++,this.Or>=1&&(this.jr(),this.qr(`Connection failed 1 times. Most recent error: ${e.toString()}`),this.Ur("Offline")))}set(e){this.jr(),this.Or=0,"Online"===e&&(this.Lr=!1),this.Ur(e)}Ur(e){e!==this.state&&(this.state=e,this.onlineStateHandler(e))}qr(e){const t=`Could not reach Cloud Firestore backend. ${e}\nThis typically indicates that your device does not have a healthy Internet connection at the moment. The client will operate in offline mode until it is able to successfully connect to the backend.`;this.Lr?(Hr(t),this.Lr=!1):zr("OnlineStateTracker",t)}jr(){null!==this.Mr&&(this.Mr.cancel(),this.Mr=null)}}
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
 */class Ul{constructor(e,t,n,r,i){this.localStore=e,this.datastore=t,this.asyncQueue=n,this.remoteSyncer={},this.Qr=[],this.Wr=new Map,this.Gr=new Set,this.zr=[],this.Hr=i,this.Hr.Ei((e=>{n.enqueueAndForget((async()=>{Jl(this)&&(zr("RemoteStore","Restarting streams for network reachability change."),await async function(e){const t=Yr(e);t.Gr.add(4),await Bl(t),t.Jr.set("Unknown"),t.Gr.delete(4),await jl(t)}(this))}))})),this.Jr=new Vl(n,r)}}async function jl(e){if(Jl(e))for(const t of e.zr)await t(!0)}async function Bl(e){for(const t of e.zr)await t(!1)}function $l(e,t){const n=Yr(e);n.Wr.has(t.targetId)||(n.Wr.set(t.targetId,t),Gl(n)?Wl(n):dc(n).lr()&&Hl(n,t))}function zl(e,t){const n=Yr(e),r=dc(n);n.Wr.delete(t),r.lr()&&Kl(n,t),0===n.Wr.size&&(r.lr()?r._r():Jl(n)&&n.Jr.set("Unknown"))}function Hl(e,t){e.Yr.X(t.targetId),dc(e).br(t)}function Kl(e,t){e.Yr.X(t),dc(e).vr(t)}function Wl(e){e.Yr=new Uo({getRemoteKeysForTarget:t=>e.remoteSyncer.getRemoteKeysForTarget(t),Et:t=>e.Wr.get(t)||null}),dc(e).start(),e.Jr.Br()}function Gl(e){return Jl(e)&&!dc(e).hr()&&e.Wr.size>0}function Jl(e){return 0===Yr(e).Gr.size}function Yl(e){e.Yr=void 0}async function Xl(e){e.Wr.forEach(((t,n)=>{Hl(e,t)}))}async function Zl(e,t){Yl(e),Gl(e)?(e.Jr.Kr(t),Wl(e)):e.Jr.set("Unknown")}async function Ql(e,t,n){if(e.Jr.set("Online"),t instanceof qo&&2===t.state&&t.cause)try{await async function(e,t){const n=t.cause;for(const r of t.targetIds)e.Wr.has(r)&&(await e.remoteSyncer.rejectListen(r,n),e.Wr.delete(r),e.Yr.removeTarget(r))}(e,t)}catch(n){zr("RemoteStore","Failed to remove targets %s: %s ",t.targetIds.join(","),n),await ec(e,n)}else if(t instanceof Fo?e.Yr.ot(t):t instanceof Mo?e.Yr.dt(t):e.Yr.ut(t),!n.isEqual(fi.min()))try{const t=await ll(e.localStore);n.compareTo(t)>=0&&await function(e,t){const n=e.Yr.gt(t);return n.targetChanges.forEach(((n,r)=>{if(n.resumeToken.approximateByteSize()>0){const i=e.Wr.get(r);i&&e.Wr.set(r,i.withResumeToken(n.resumeToken,t))}})),n.targetMismatches.forEach((t=>{const n=e.Wr.get(t);if(!n)return;e.Wr.set(t,n.withResumeToken(Ti.EMPTY_BYTE_STRING,n.snapshotVersion)),Kl(e,t);const r=new Ha(n.target,t,1,n.sequenceNumber);Hl(e,r)})),e.remoteSyncer.applyRemoteEvent(n)}(e,n)}catch(t){zr("RemoteStore","Failed to raise snapshot:",t),await ec(e,t)}}async function ec(e,t,n){if(!Ba(t))throw t;e.Gr.add(1),await Bl(e),e.Jr.set("Offline"),n||(n=()=>ll(e.localStore)),e.asyncQueue.enqueueRetryable((async()=>{zr("RemoteStore","Retrying IndexedDB access"),await n(),e.Gr.delete(1),await jl(e)}))}function tc(e,t){return t().catch((n=>ec(e,n,t)))}async function nc(e){const t=Yr(e),n=fc(t);let r=t.Qr.length>0?t.Qr[t.Qr.length-1].batchId:-1;for(;rc(t);)try{const e=await hl(t.localStore,r);if(null===e){0===t.Qr.length&&n._r();break}r=e.batchId,ic(t,e)}catch(e){await ec(t,e)}sc(t)&&oc(t)}function rc(e){return Jl(e)&&e.Qr.length<10}function ic(e,t){e.Qr.push(t);const n=fc(e);n.lr()&&n.Sr&&n.Dr(t.mutations)}function sc(e){return Jl(e)&&!fc(e).hr()&&e.Qr.length>0}function oc(e){fc(e).start()}async function ac(e){fc(e).kr()}async function lc(e){const t=fc(e);for(const n of e.Qr)t.Dr(n.mutations)}async function cc(e,t,n){const r=e.Qr.shift(),i=za.from(r,t,n);await tc(e,(()=>e.remoteSyncer.applySuccessfulWrite(i))),await nc(e)}async function uc(e,t){t&&fc(e).Sr&&await async function(e,t){if(n=t.code,vo(n)&&n!==Xr.ABORTED){const n=e.Qr.shift();fc(e).wr(),await tc(e,(()=>e.remoteSyncer.rejectFailedWrite(n.batchId,t))),await nc(e)}var n}(e,t),sc(e)&&oc(e)}async function hc(e,t){const n=Yr(e);t?(n.Gr.delete(2),await jl(n)):t||(n.Gr.add(2),await Bl(n),n.Jr.set("Unknown"))}function dc(e){return e.Xr||(e.Xr=function(e,t,n){const r=Yr(e);return r.Fr(),new Fl(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)
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
 */}(e.datastore,e.asyncQueue,{Di:Xl.bind(null,e),Ni:Zl.bind(null,e),Pr:Ql.bind(null,e)}),e.zr.push((async t=>{t?(e.Xr.wr(),Gl(e)?Wl(e):e.Jr.set("Unknown")):(await e.Xr.stop(),Yl(e))}))),e.Xr}function fc(e){return e.Zr||(e.Zr=function(e,t,n){const r=Yr(e);return r.Fr(),new Ml(t,r.ir,r.authCredentials,r.appCheckCredentials,r.k,n)}(e.datastore,e.asyncQueue,{Di:ac.bind(null,e),Ni:uc.bind(null,e),Nr:lc.bind(null,e),Cr:cc.bind(null,e)}),e.zr.push((async t=>{t?(e.Zr.wr(),await nc(e)):(await e.Zr.stop(),e.Qr.length>0&&(zr("RemoteStore",`Stopping write stream with ${e.Qr.length} pending writes`),e.Qr=[]))}))),e.Zr
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
 */}class pc{constructor(e,t,n,r,i){this.asyncQueue=e,this.timerId=t,this.targetTimeMs=n,this.op=r,this.removalCallback=i,this.deferred=new Qr,this.then=this.deferred.promise.then.bind(this.deferred.promise),this.deferred.promise.catch((e=>{}))}static createAndSchedule(e,t,n,r,i){const s=Date.now()+n,o=new pc(e,t,s,r,i);return o.start(n),o}start(e){this.timerHandle=setTimeout((()=>this.handleDelayElapsed()),e)}skipDelay(){return this.handleDelayElapsed()}cancel(e){null!==this.timerHandle&&(this.clearTimeout(),this.deferred.reject(new Zr(Xr.CANCELLED,"Operation cancelled"+(e?": "+e:""))))}handleDelayElapsed(){this.asyncQueue.enqueueAndForget((()=>null!==this.timerHandle?(this.clearTimeout(),this.op().then((e=>this.deferred.resolve(e)))):Promise.resolve()))}clearTimeout(){null!==this.timerHandle&&(this.removalCallback(this),clearTimeout(this.timerHandle),this.timerHandle=null)}}function gc(e,t){if(Hr("AsyncQueue",`${t}: ${e}`),Ba(e))return new Zr(Xr.UNAVAILABLE,`${t}: ${e}`);throw e}
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
 */class mc{constructor(e){this.comparator=e?(t,n)=>e(t,n)||Li.comparator(t.key,n.key):(e,t)=>Li.comparator(e.key,t.key),this.keyedMap=Co(),this.sortedSet=new wo(this.comparator)}static emptySet(e){return new mc(e.comparator)}has(e){return null!=this.keyedMap.get(e)}get(e){return this.keyedMap.get(e)}first(){return this.sortedSet.minKey()}last(){return this.sortedSet.maxKey()}isEmpty(){return this.sortedSet.isEmpty()}indexOf(e){const t=this.keyedMap.get(e);return t?this.sortedSet.indexOf(t):-1}get size(){return this.sortedSet.size}forEach(e){this.sortedSet.inorderTraversal(((t,n)=>(e(t),!1)))}add(e){const t=this.delete(e.key);return t.copy(t.keyedMap.insert(e.key,e),t.sortedSet.insert(e,null))}delete(e){const t=this.get(e);return t?this.copy(this.keyedMap.remove(e),this.sortedSet.remove(t)):this}isEqual(e){if(!(e instanceof mc))return!1;if(this.size!==e.size)return!1;const t=this.sortedSet.getIterator(),n=e.sortedSet.getIterator();for(;t.hasNext();){const e=t.getNext().key,r=n.getNext().key;if(!e.isEqual(r))return!1}return!0}toString(){const e=[];return this.forEach((t=>{e.push(t.toString())})),0===e.length?"DocumentSet ()":"DocumentSet (\n  "+e.join("  \n")+"\n)"}copy(e,t){const n=new mc;return n.comparator=this.comparator,n.keyedMap=e,n.sortedSet=t,n}}
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
 */class vc{constructor(){this.eo=new wo(Li.comparator)}track(e){const t=e.doc.key,n=this.eo.get(t);n?0!==e.type&&3===n.type?this.eo=this.eo.insert(t,e):3===e.type&&1!==n.type?this.eo=this.eo.insert(t,{type:n.type,doc:e.doc}):2===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):2===e.type&&0===n.type?this.eo=this.eo.insert(t,{type:0,doc:e.doc}):1===e.type&&0===n.type?this.eo=this.eo.remove(t):1===e.type&&2===n.type?this.eo=this.eo.insert(t,{type:1,doc:n.doc}):0===e.type&&1===n.type?this.eo=this.eo.insert(t,{type:2,doc:e.doc}):Gr():this.eo=this.eo.insert(t,e)}no(){const e=[];return this.eo.inorderTraversal(((t,n)=>{e.push(n)})),e}}class yc{constructor(e,t,n,r,i,s,o,a){this.query=e,this.docs=t,this.oldDocs=n,this.docChanges=r,this.mutatedKeys=i,this.fromCache=s,this.syncStateChanged=o,this.excludesMetadataChanges=a}static fromInitialDocuments(e,t,n,r){const i=[];return t.forEach((e=>{i.push({type:0,doc:e})})),new yc(e,t,mc.emptySet(t),i,n,r,!0,!1)}get hasPendingWrites(){return!this.mutatedKeys.isEmpty()}isEqual(e){if(!(this.fromCache===e.fromCache&&this.syncStateChanged===e.syncStateChanged&&this.mutatedKeys.isEqual(e.mutatedKeys)&&xs(this.query,e.query)&&this.docs.isEqual(e.docs)&&this.oldDocs.isEqual(e.oldDocs)))return!1;const t=this.docChanges,n=e.docChanges;if(t.length!==n.length)return!1;for(let r=0;r<t.length;r++)if(t[r].type!==n[r].type||!t[r].doc.isEqual(n[r].doc))return!1;return!0}}
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
 */class wc{constructor(){this.so=void 0,this.listeners=[]}}class bc{constructor(){this.queries=new Qa((e=>Rs(e)),xs),this.onlineState="Unknown",this.io=new Set}}async function _c(e,t){const n=Yr(e),r=t.query;let i=!1,s=n.queries.get(r);if(s||(i=!0,s=new wc),i)try{s.so=await n.onListen(r)}catch(e){const n=gc(e,`Initialization of query '${Os(t.query)}' failed`);return void t.onError(n)}n.queries.set(r,s),s.listeners.push(t),t.ro(n.onlineState),s.so&&t.oo(s.so)&&Ic(n)}async function Tc(e,t){const n=Yr(e),r=t.query;let i=!1;const s=n.queries.get(r);if(s){const e=s.listeners.indexOf(t);e>=0&&(s.listeners.splice(e,1),i=0===s.listeners.length)}if(i)return n.queries.delete(r),n.onUnlisten(r)}function Ec(e,t){const n=Yr(e);let r=!1;for(const i of t){const e=i.query,t=n.queries.get(e);if(t){for(const e of t.listeners)e.oo(i)&&(r=!0);t.so=i}}r&&Ic(n)}function kc(e,t,n){const r=Yr(e),i=r.queries.get(t);if(i)for(const s of i.listeners)s.onError(n);r.queries.delete(t)}function Ic(e){e.io.forEach((e=>{e.next()}))}class Sc{constructor(e,t,n){this.query=e,this.ao=t,this.co=!1,this.uo=null,this.onlineState="Unknown",this.options=n||{}}oo(e){if(!this.options.includeMetadataChanges){const t=[];for(const n of e.docChanges)3!==n.type&&t.push(n);e=new yc(e.query,e.docs,e.oldDocs,t,e.mutatedKeys,e.fromCache,e.syncStateChanged,!0)}let t=!1;return this.co?this.ho(e)&&(this.ao.next(e),t=!0):this.lo(e,this.onlineState)&&(this.fo(e),t=!0),this.uo=e,t}onError(e){this.ao.error(e)}ro(e){this.onlineState=e;let t=!1;return this.uo&&!this.co&&this.lo(this.uo,e)&&(this.fo(this.uo),t=!0),t}lo(e,t){if(!e.fromCache)return!0;const n="Offline"!==t;return(!this.options.wo||!n)&&(!e.docs.isEmpty()||"Offline"===t)}ho(e){if(e.docChanges.length>0)return!0;const t=this.uo&&this.uo.hasPendingWrites!==e.hasPendingWrites;return!(!e.syncStateChanged&&!t)&&!0===this.options.includeMetadataChanges}fo(e){e=yc.fromInitialDocuments(e.query,e.docs,e.mutatedKeys,e.fromCache),this.co=!0,this.ao.next(e)}}
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
class Cc{constructor(e){this.key=e}}class Ac{constructor(e){this.key=e}}class xc{constructor(e,t){this.query=e,this.To=t,this.Eo=null,this.current=!1,this.Io=Oo(),this.mutatedKeys=Oo(),this.Ao=Ls(e),this.Ro=new mc(this.Ao)}get Po(){return this.To}bo(e,t){const n=t?t.vo:new vc,r=t?t.Ro:this.Ro;let i=t?t.mutatedKeys:this.mutatedKeys,s=r,o=!1;const a=_s(this.query)&&r.size===this.query.limit?r.last():null,l=Ts(this.query)&&r.size===this.query.limit?r.first():null;if(e.inorderTraversal(((e,t)=>{const c=r.get(e),u=Ns(this.query,t)?t:null,h=!!c&&this.mutatedKeys.has(c.key),d=!!u&&(u.hasLocalMutations||this.mutatedKeys.has(u.key)&&u.hasCommittedMutations);let f=!1;c&&u?c.data.isEqual(u.data)?h!==d&&(n.track({type:3,doc:u}),f=!0):this.Vo(c,u)||(n.track({type:2,doc:u}),f=!0,(a&&this.Ao(u,a)>0||l&&this.Ao(u,l)<0)&&(o=!0)):!c&&u?(n.track({type:0,doc:u}),f=!0):c&&!u&&(n.track({type:1,doc:c}),f=!0,(a||l)&&(o=!0)),f&&(u?(s=s.add(u),i=d?i.add(e):i.delete(e)):(s=s.delete(e),i=i.delete(e)))})),_s(this.query)||Ts(this.query))for(;s.size>this.query.limit;){const e=_s(this.query)?s.last():s.first();s=s.delete(e.key),i=i.delete(e.key),n.track({type:1,doc:e})}return{Ro:s,vo:n,Bn:o,mutatedKeys:i}}Vo(e,t){return e.hasLocalMutations&&t.hasCommittedMutations&&!t.hasLocalMutations}applyChanges(e,t,n){const r=this.Ro;this.Ro=e.Ro,this.mutatedKeys=e.mutatedKeys;const i=e.vo.no();i.sort(((e,t)=>function(e,t){const n=e=>{switch(e){case 0:return 1;case 2:case 3:return 2;case 1:return 0;default:return Gr()}};return n(e)-n(t)}
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
 */(e.type,t.type)||this.Ao(e.doc,t.doc))),this.So(n);const s=t?this.Do():[],o=0===this.Io.size&&this.current?1:0,a=o!==this.Eo;return this.Eo=o,0!==i.length||a?{snapshot:new yc(this.query,e.Ro,r,i,e.mutatedKeys,0===o,a,!1),Co:s}:{Co:s}}ro(e){return this.current&&"Offline"===e?(this.current=!1,this.applyChanges({Ro:this.Ro,vo:new vc,mutatedKeys:this.mutatedKeys,Bn:!1},!1)):{Co:[]}}No(e){return!this.To.has(e)&&!!this.Ro.has(e)&&!this.Ro.get(e).hasLocalMutations}So(e){e&&(e.addedDocuments.forEach((e=>this.To=this.To.add(e))),e.modifiedDocuments.forEach((e=>{})),e.removedDocuments.forEach((e=>this.To=this.To.delete(e))),this.current=e.current)}Do(){if(!this.current)return[];const e=this.Io;this.Io=Oo(),this.Ro.forEach((e=>{this.No(e.key)&&(this.Io=this.Io.add(e.key))}));const t=[];return e.forEach((e=>{this.Io.has(e)||t.push(new Ac(e))})),this.Io.forEach((n=>{e.has(n)||t.push(new Cc(n))})),t}ko(e){this.To=e.zn,this.Io=Oo();const t=this.bo(e.documents);return this.applyChanges(t,!0)}xo(){return yc.fromInitialDocuments(this.query,this.Ro,this.mutatedKeys,0===this.Eo)}}class Rc{constructor(e,t,n){this.query=e,this.targetId=t,this.view=n}}class Oc{constructor(e){this.key=e,this.$o=!1}}class Nc{constructor(e,t,n,r,i,s){this.localStore=e,this.remoteStore=t,this.eventManager=n,this.sharedClientState=r,this.currentUser=i,this.maxConcurrentLimboResolutions=s,this.Fo={},this.Oo=new Qa((e=>Rs(e)),xs),this.Mo=new Map,this.Lo=new Set,this.Bo=new wo(Li.comparator),this.Uo=new Map,this.qo=new ml,this.Ko={},this.jo=new Map,this.Qo=Xa.re(),this.onlineState="Unknown",this.Wo=void 0}get isPrimaryClient(){return!0===this.Wo}}async function Lc(e,t){const n=Zc(e);let r,i;const s=n.Oo.get(t);if(s)r=s.targetId,n.sharedClientState.addLocalQueryTarget(r),i=s.view.xo();else{const e=await dl(n.localStore,Cs(t)),s=n.sharedClientState.addLocalQueryTarget(e.targetId);r=e.targetId,i=await Pc(n,t,r,"current"===s),n.isPrimaryClient&&$l(n.remoteStore,e)}return i}async function Pc(e,t,n,r){e.Go=(t,n,r)=>async function(e,t,n,r){let i=t.view.bo(n);i.Bn&&(i=await pl(e.localStore,t.query,!1).then((({documents:e})=>t.view.bo(e,i))));const s=r&&r.targetChanges.get(t.targetId),o=t.view.applyChanges(i,e.isPrimaryClient,s);return Kc(e,t.targetId,o.Co),o.snapshot}(e,t,n,r);const i=await pl(e.localStore,t,!0),s=new xc(t,i.zn),o=s.bo(i.documents),a=Do.createSynthesizedTargetChangeForCurrentChange(n,r&&"Offline"!==e.onlineState),l=s.applyChanges(o,e.isPrimaryClient,a);Kc(e,n,l.Co);const c=new Rc(t,n,s);return e.Oo.set(t,c),e.Mo.has(n)?e.Mo.get(n).push(t):e.Mo.set(n,[t]),l.snapshot}async function Dc(e,t){const n=Yr(e),r=n.Oo.get(t),i=n.Mo.get(r.targetId);if(i.length>1)return n.Mo.set(r.targetId,i.filter((e=>!xs(e,t)))),void n.Oo.delete(t);n.isPrimaryClient?(n.sharedClientState.removeLocalQueryTarget(r.targetId),n.sharedClientState.isActiveQueryTarget(r.targetId)||await fl(n.localStore,r.targetId,!1).then((()=>{n.sharedClientState.clearQueryState(r.targetId),zl(n.remoteStore,r.targetId),zc(n,r.targetId)})).catch(Za)):(zc(n,r.targetId),await fl(n.localStore,r.targetId,!0))}async function Fc(e,t,n){const r=Qc(e);try{const e=await function(e,t){const n=Yr(e),r=di.now(),i=t.reduce(((e,t)=>e.add(t.key)),Oo());let s;return n.persistence.runTransaction("Locally write mutations","readwrite",(e=>n.Wn.vn(e,i).next((i=>{s=i;const o=[];for(const e of t){const t=ro(e,s.get(e.key));null!=t&&o.push(new ao(e.key,t,Gi(t.value.mapValue),Zs.exists(!0)))}return n.An.addMutationBatch(e,r,o,t)})))).then((e=>(e.applyToLocalDocumentSet(s),{batchId:e.batchId,changes:s})))}(r.localStore,t);r.sharedClientState.addPendingMutation(e.batchId),function(e,t,n){let r=e.Ko[e.currentUser.toKey()];r||(r=new wo(ui)),r=r.insert(t,n),e.Ko[e.currentUser.toKey()]=r}(r,e.batchId,n),await Jc(r,e.changes),await nc(r.remoteStore)}catch(e){const t=gc(e,"Failed to persist write");n.reject(t)}}async function Mc(e,t){const n=Yr(e);try{const e=await cl(n.localStore,t);t.targetChanges.forEach(((e,t)=>{const r=n.Uo.get(t);r&&(Jr(e.addedDocuments.size+e.modifiedDocuments.size+e.removedDocuments.size<=1),e.addedDocuments.size>0?r.$o=!0:e.modifiedDocuments.size>0?Jr(r.$o):e.removedDocuments.size>0&&(Jr(r.$o),r.$o=!1))})),await Jc(n,e,t)}catch(e){await Za(e)}}function qc(e,t,n){const r=Yr(e);if(r.isPrimaryClient&&0===n||!r.isPrimaryClient&&1===n){const e=[];r.Oo.forEach(((n,r)=>{const i=r.view.ro(t);i.snapshot&&e.push(i.snapshot)})),function(e,t){const n=Yr(e);n.onlineState=t;let r=!1;n.queries.forEach(((e,n)=>{for(const i of n.listeners)i.ro(t)&&(r=!0)})),r&&Ic(n)}(r.eventManager,t),e.length&&r.Fo.Pr(e),r.onlineState=t,r.isPrimaryClient&&r.sharedClientState.setOnlineState(t)}}async function Vc(e,t,n){const r=Yr(e);r.sharedClientState.updateQueryState(t,"rejected",n);const i=r.Uo.get(t),s=i&&i.key;if(s){let e=new wo(Li.comparator);e=e.insert(s,Ji.newNoDocument(s,fi.min()));const n=Oo().add(s),i=new Po(fi.min(),new Map,new To(ui),e,n);await Mc(r,i),r.Bo=r.Bo.remove(s),r.Uo.delete(t),Gc(r)}else await fl(r.localStore,t,!1).then((()=>zc(r,t,n))).catch(Za)}async function Uc(e,t){const n=Yr(e),r=t.batch.batchId;try{const e=await al(n.localStore,t);$c(n,r,null),Bc(n,r),n.sharedClientState.updateMutationState(r,"acknowledged"),await Jc(n,e)}catch(e){await Za(e)}}async function jc(e,t,n){const r=Yr(e);try{const e=await function(e,t){const n=Yr(e);return n.persistence.runTransaction("Reject batch","readwrite-primary",(e=>{let r;return n.An.lookupMutationBatch(e,t).next((t=>(Jr(null!==t),r=t.keys(),n.An.removeMutationBatch(e,t)))).next((()=>n.An.performConsistencyCheck(e))).next((()=>n.Wn.vn(e,r)))}))}(r.localStore,t);$c(r,t,n),Bc(r,t),r.sharedClientState.updateMutationState(t,"rejected",n),await Jc(r,e)}catch(n){await Za(n)}}function Bc(e,t){(e.jo.get(t)||[]).forEach((e=>{e.resolve()})),e.jo.delete(t)}function $c(e,t,n){const r=Yr(e);let i=r.Ko[r.currentUser.toKey()];if(i){const e=i.get(t);e&&(n?e.reject(n):e.resolve(),i=i.remove(t)),r.Ko[r.currentUser.toKey()]=i}}function zc(e,t,n=null){e.sharedClientState.removeLocalQueryTarget(t);for(const r of e.Mo.get(t))e.Oo.delete(r),n&&e.Fo.zo(r,n);e.Mo.delete(t),e.isPrimaryClient&&e.qo.us(t).forEach((t=>{e.qo.containsKey(t)||Hc(e,t)}))}function Hc(e,t){e.Lo.delete(t.path.canonicalString());const n=e.Bo.get(t);null!==n&&(zl(e.remoteStore,n),e.Bo=e.Bo.remove(t),e.Uo.delete(n),Gc(e))}function Kc(e,t,n){for(const r of n)r instanceof Cc?(e.qo.addReference(r.key,t),Wc(e,r)):r instanceof Ac?(zr("SyncEngine","Document no longer in limbo: "+r.key),e.qo.removeReference(r.key,t),e.qo.containsKey(r.key)||Hc(e,r.key)):Gr()}function Wc(e,t){const n=t.key,r=n.path.canonicalString();e.Bo.get(n)||e.Lo.has(r)||(zr("SyncEngine","New document in limbo: "+n),e.Lo.add(r),Gc(e))}function Gc(e){for(;e.Lo.size>0&&e.Bo.size<e.maxConcurrentLimboResolutions;){const t=e.Lo.values().next().value;e.Lo.delete(t);const n=new Li(yi.fromString(t)),r=e.Qo.next();e.Uo.set(r,new Oc(n)),e.Bo=e.Bo.insert(n,r),$l(e.remoteStore,new Ha(Cs(bs(n.path)),r,2,ai.I))}}async function Jc(e,t,n){const r=Yr(e),i=[],s=[],o=[];r.Oo.isEmpty()||(r.Oo.forEach(((e,a)=>{o.push(r.Go(a,t,n).then((e=>{if(e){r.isPrimaryClient&&r.sharedClientState.updateQueryState(a.targetId,e.fromCache?"not-current":"current"),i.push(e);const t=nl.$n(a.targetId,e);s.push(t)}})))})),await Promise.all(o),r.Fo.Pr(i),await async function(e,t){const n=Yr(e);try{await n.persistence.runTransaction("notifyLocalViewChanges","readwrite",(e=>ja.forEach(t,(t=>ja.forEach(t.kn,(r=>n.persistence.referenceDelegate.addReference(e,t.targetId,r))).next((()=>ja.forEach(t.xn,(r=>n.persistence.referenceDelegate.removeReference(e,t.targetId,r)))))))))}catch(e){if(!Ba(e))throw e;zr("LocalStore","Failed to update sequence numbers: "+e)}for(const r of t){const e=r.targetId;if(!r.fromCache){const t=n.qn.get(e),r=t.snapshotVersion,i=t.withLastLimboFreeSnapshotVersion(r);n.qn=n.qn.insert(e,i)}}}(r.localStore,s))}async function Yc(e,t){const n=Yr(e);if(!n.currentUser.isEqual(t)){zr("SyncEngine","User change. New user:",t.toKey());const e=await ol(n.localStore,t);n.currentUser=t,function(e,t){e.jo.forEach((e=>{e.forEach((e=>{e.reject(new Zr(Xr.CANCELLED,t))}))})),e.jo.clear()}(n,"'waitForPendingWrites' promise is rejected due to a user change."),n.sharedClientState.handleUserChange(t,e.removedBatchIds,e.addedBatchIds),await Jc(n,e.Gn)}}function Xc(e,t){const n=Yr(e),r=n.Uo.get(t);if(r&&r.$o)return Oo().add(r.key);{let e=Oo();const r=n.Mo.get(t);if(!r)return e;for(const t of r){const r=n.Oo.get(t);e=e.unionWith(r.view.Po)}return e}}function Zc(e){const t=Yr(e);return t.remoteStore.remoteSyncer.applyRemoteEvent=Mc.bind(null,t),t.remoteStore.remoteSyncer.getRemoteKeysForTarget=Xc.bind(null,t),t.remoteStore.remoteSyncer.rejectListen=Vc.bind(null,t),t.Fo.Pr=Ec.bind(null,t.eventManager),t.Fo.zo=kc.bind(null,t.eventManager),t}function Qc(e){const t=Yr(e);return t.remoteStore.remoteSyncer.applySuccessfulWrite=Uc.bind(null,t),t.remoteStore.remoteSyncer.rejectFailedWrite=jc.bind(null,t),t}class eu{constructor(){this.synchronizeTabs=!1}async initialize(e){this.k=Ll(e.databaseInfo.databaseId),this.sharedClientState=this.Jo(e),this.persistence=this.Yo(e),await this.persistence.start(),this.gcScheduler=this.Xo(e),this.localStore=this.Zo(e)}Xo(e){return null}Zo(e){return sl(this.persistence,new rl,e.initialUser,this.k)}Yo(e){return new Tl(kl.ks,this.k)}Jo(e){return new Sl}async terminate(){this.gcScheduler&&this.gcScheduler.stop(),await this.sharedClientState.shutdown(),await this.persistence.shutdown()}}class tu{async initialize(e,t){this.localStore||(this.localStore=e.localStore,this.sharedClientState=e.sharedClientState,this.datastore=this.createDatastore(t),this.remoteStore=this.createRemoteStore(t),this.eventManager=this.createEventManager(t),this.syncEngine=this.createSyncEngine(t,!e.synchronizeTabs),this.sharedClientState.onlineStateHandler=e=>qc(this.syncEngine,e,1),this.remoteStore.remoteSyncer.handleCredentialChange=Yc.bind(null,this.syncEngine),await hc(this.remoteStore,this.syncEngine.isPrimaryClient))}createEventManager(e){return new bc}createDatastore(e){const t=Ll(e.databaseInfo.databaseId),n=(r=e.databaseInfo,new Ol(r));var r;return function(e,t,n,r){return new ql(e,t,n,r)}(e.authCredentials,e.appCheckCredentials,n,t)}createRemoteStore(e){return t=this.localStore,n=this.datastore,r=e.asyncQueue,i=e=>qc(this.syncEngine,e,0),s=Al.bt()?new Al:new Cl,new Ul(t,n,r,i,s);var t,n,r,i,s}createSyncEngine(e,t){return function(e,t,n,r,i,s,o){const a=new Nc(e,t,n,r,i,s);return o&&(a.Wo=!0),a}(this.localStore,this.remoteStore,this.eventManager,this.sharedClientState,e.initialUser,e.maxConcurrentLimboResolutions,t)}terminate(){return async function(e){const t=Yr(e);zr("RemoteStore","RemoteStore shutting down."),t.Gr.add(5),await Bl(t),t.Hr.shutdown(),t.Jr.set("Unknown")}(this.remoteStore)}}
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
class nu{constructor(e){this.observer=e,this.muted=!1}next(e){this.observer.next&&this.ea(this.observer.next,e)}error(e){this.observer.error?this.ea(this.observer.error,e):console.error("Uncaught Error in snapshot listener:",e)}na(){this.muted=!0}ea(e,t){this.muted||setTimeout((()=>{this.muted||e(t)}),0)}}
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
class ru{constructor(e,t,n,r){this.authCredentials=e,this.appCheckCredentials=t,this.asyncQueue=n,this.databaseInfo=r,this.user=Ur.UNAUTHENTICATED,this.clientId=ci.A(),this.authCredentialListener=()=>Promise.resolve(),this.authCredentials.start(n,(async e=>{zr("FirestoreClient","Received user=",e.uid),await this.authCredentialListener(e),this.user=e})),this.appCheckCredentials.start(n,(()=>Promise.resolve()))}async getConfiguration(){return{asyncQueue:this.asyncQueue,databaseInfo:this.databaseInfo,clientId:this.clientId,authCredentials:this.authCredentials,appCheckCredentials:this.appCheckCredentials,initialUser:this.user,maxConcurrentLimboResolutions:100}}setCredentialChangeListener(e){this.authCredentialListener=e}verifyNotTerminated(){if(this.asyncQueue.isShuttingDown)throw new Zr(Xr.FAILED_PRECONDITION,"The client has already been terminated.")}terminate(){this.asyncQueue.enterRestrictedMode();const e=new Qr;return this.asyncQueue.enqueueAndForgetEvenWhileRestricted((async()=>{try{this.onlineComponents&&await this.onlineComponents.terminate(),this.offlineComponents&&await this.offlineComponents.terminate(),this.authCredentials.shutdown(),this.appCheckCredentials.shutdown(),e.resolve()}catch(t){const n=gc(t,"Failed to shutdown persistence");e.reject(n)}})),e.promise}}async function iu(e,t){e.asyncQueue.verifyOperationInProgress(),zr("FirestoreClient","Initializing OfflineComponentProvider");const n=await e.getConfiguration();await t.initialize(n);let r=n.initialUser;e.setCredentialChangeListener((async e=>{r.isEqual(e)||(await ol(t.localStore,e),r=e)})),t.persistence.setDatabaseDeletedListener((()=>e.terminate())),e.offlineComponents=t}async function su(e,t){e.asyncQueue.verifyOperationInProgress();const n=await ou(e);zr("FirestoreClient","Initializing OnlineComponentProvider");const r=await e.getConfiguration();await t.initialize(n,r),e.setCredentialChangeListener((e=>async function(e,t){const n=Yr(e);n.asyncQueue.verifyOperationInProgress(),zr("RemoteStore","RemoteStore received new credentials");const r=Jl(n);n.Gr.add(3),await Bl(n),r&&n.Jr.set("Unknown"),await n.remoteSyncer.handleCredentialChange(t),n.Gr.delete(3),await jl(n)}(t.remoteStore,e))),e.onlineComponents=t}async function ou(e){return e.offlineComponents||(zr("FirestoreClient","Using default OfflineComponentProvider"),await iu(e,new eu)),e.offlineComponents}async function au(e){return e.onlineComponents||(zr("FirestoreClient","Using default OnlineComponentProvider"),await su(e,new tu)),e.onlineComponents}function lu(e){return au(e).then((e=>e.syncEngine))}async function cu(e){const t=await au(e),n=t.eventManager;return n.onListen=Lc.bind(null,t.syncEngine),n.onUnlisten=Dc.bind(null,t.syncEngine),n}function uu(e,t,n={}){const r=new Qr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new nu({next:s=>{t.enqueueAndForget((()=>Tc(e,o)));const a=s.docs.has(n);!a&&s.fromCache?i.reject(new Zr(Xr.UNAVAILABLE,"Failed to get document because the client is offline.")):a&&s.fromCache&&r&&"server"===r.source?i.reject(new Zr(Xr.UNAVAILABLE,'Failed to get document from server. (However, this document does exist in the local cache. Run again without setting source to "server" to retrieve the cached document.)')):i.resolve(s)},error:e=>i.reject(e)}),o=new Sc(bs(n.path),s,{includeMetadataChanges:!0,wo:!0});return _c(e,o)}(await cu(e),e.asyncQueue,t,n,r))),r.promise}function hu(e,t,n={}){const r=new Qr;return e.asyncQueue.enqueueAndForget((async()=>function(e,t,n,r,i){const s=new nu({next:n=>{t.enqueueAndForget((()=>Tc(e,o))),n.fromCache&&"server"===r.source?i.reject(new Zr(Xr.UNAVAILABLE,'Failed to get documents from server. (However, these documents may exist in the local cache. Run again without setting source to "server" to retrieve the cached documents.)')):i.resolve(n)},error:e=>i.reject(e)}),o=new Sc(n,s,{includeMetadataChanges:!0,wo:!0});return _c(e,o)}(await cu(e),e.asyncQueue,t,n,r))),r.promise}class du{constructor(e,t,n,r,i,s,o,a){this.databaseId=e,this.appId=t,this.persistenceKey=n,this.host=r,this.ssl=i,this.forceLongPolling=s,this.autoDetectLongPolling=o,this.useFetchStreams=a}}class fu{constructor(e,t){this.projectId=e,this.database=t||"(default)"}get isDefaultDatabase(){return"(default)"===this.database}isEqual(e){return e instanceof fu&&e.projectId===this.projectId&&e.database===this.database}}
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
 */const pu=new Map;
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
 */function gu(e,t,n){if(!n)throw new Zr(Xr.INVALID_ARGUMENT,`Function ${e}() cannot be called with an empty ${t}.`)}function mu(e,t,n,r){if(!0===t&&!0===r)throw new Zr(Xr.INVALID_ARGUMENT,`${e} and ${n} cannot be used together.`)}function vu(e){if(!Li.isDocumentKey(e))throw new Zr(Xr.INVALID_ARGUMENT,`Invalid document reference. Document references must have an even number of segments, but ${e} has ${e.length}.`)}function yu(e){if(Li.isDocumentKey(e))throw new Zr(Xr.INVALID_ARGUMENT,`Invalid collection reference. Collection references must have an odd number of segments, but ${e} has ${e.length}.`)}function wu(e){if(void 0===e)return"undefined";if(null===e)return"null";if("string"==typeof e)return e.length>20&&(e=`${e.substring(0,20)}...`),JSON.stringify(e);if("number"==typeof e||"boolean"==typeof e)return""+e;if("object"==typeof e){if(e instanceof Array)return"an array";{const t=function(e){return e.constructor?e.constructor.name:null}(e);return t?`a custom ${t} object`:"an object"}}return"function"==typeof e?"a function":Gr()}function bu(e,t){if("_delegate"in e&&(e=e._delegate),!(e instanceof t)){if(t.name===e.constructor.name)throw new Zr(Xr.INVALID_ARGUMENT,"Type does not match the expected instance. Did you pass a reference from a different Firestore SDK?");{const n=wu(e);throw new Zr(Xr.INVALID_ARGUMENT,`Expected type '${t.name}', but it was: ${n}`)}}return e}
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
class _u{constructor(e){var t;if(void 0===e.host){if(void 0!==e.ssl)throw new Zr(Xr.INVALID_ARGUMENT,"Can't provide ssl option if host option is not set");this.host="firestore.googleapis.com",this.ssl=!0}else this.host=e.host,this.ssl=null===(t=e.ssl)||void 0===t||t;if(this.credentials=e.credentials,this.ignoreUndefinedProperties=!!e.ignoreUndefinedProperties,void 0===e.cacheSizeBytes)this.cacheSizeBytes=41943040;else{if(-1!==e.cacheSizeBytes&&e.cacheSizeBytes<1048576)throw new Zr(Xr.INVALID_ARGUMENT,"cacheSizeBytes must be at least 1048576");this.cacheSizeBytes=e.cacheSizeBytes}this.experimentalForceLongPolling=!!e.experimentalForceLongPolling,this.experimentalAutoDetectLongPolling=!!e.experimentalAutoDetectLongPolling,this.useFetchStreams=!!e.useFetchStreams,mu("experimentalForceLongPolling",e.experimentalForceLongPolling,"experimentalAutoDetectLongPolling",e.experimentalAutoDetectLongPolling)}isEqual(e){return this.host===e.host&&this.ssl===e.ssl&&this.credentials===e.credentials&&this.cacheSizeBytes===e.cacheSizeBytes&&this.experimentalForceLongPolling===e.experimentalForceLongPolling&&this.experimentalAutoDetectLongPolling===e.experimentalAutoDetectLongPolling&&this.ignoreUndefinedProperties===e.ignoreUndefinedProperties&&this.useFetchStreams===e.useFetchStreams}}
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
 */class Tu{constructor(e,t,n){this._authCredentials=t,this._appCheckCredentials=n,this.type="firestore-lite",this._persistenceKey="(lite)",this._settings=new _u({}),this._settingsFrozen=!1,e instanceof fu?this._databaseId=e:(this._app=e,this._databaseId=function(e){if(!Object.prototype.hasOwnProperty.apply(e.options,["projectId"]))throw new Zr(Xr.INVALID_ARGUMENT,'"projectId" not provided in firebase.initializeApp.');return new fu(e.options.projectId)}(e))}get app(){if(!this._app)throw new Zr(Xr.FAILED_PRECONDITION,"Firestore was not initialized using the Firebase SDK. 'app' is not available");return this._app}get _initialized(){return this._settingsFrozen}get _terminated(){return void 0!==this._terminateTask}_setSettings(e){if(this._settingsFrozen)throw new Zr(Xr.FAILED_PRECONDITION,"Firestore has already been started and its settings can no longer be changed. You can only modify settings before calling any other methods on a Firestore object.");this._settings=new _u(e),void 0!==e.credentials&&(this._authCredentials=function(e){if(!e)return new ti;switch(e.type){case"gapi":const t=e.client;return Jr(!("object"!=typeof t||null===t||!t.auth||!t.auth.getAuthHeaderValueForFirstParty)),new ii(t,e.sessionIndex||"0",e.iamToken||null);case"provider":return e.client;default:throw new Zr(Xr.INVALID_ARGUMENT,"makeAuthCredentialsProvider failed due to invalid credential type")}}(e.credentials))}_getSettings(){return this._settings}_freezeSettings(){return this._settingsFrozen=!0,this._settings}_delete(){return this._terminateTask||(this._terminateTask=this._terminate()),this._terminateTask}toJSON(){return{app:this._app,databaseId:this._databaseId,settings:this._settings}}_terminate(){return function(e){const t=pu.get(e);t&&(zr("ComponentProvider","Removing Datastore"),pu.delete(e),t.terminate())}(this),Promise.resolve()}}
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
class Eu{constructor(e,t,n){this.converter=t,this._key=n,this.type="document",this.firestore=e}get _path(){return this._key.path}get id(){return this._key.path.lastSegment()}get path(){return this._key.path.canonicalString()}get parent(){return new Iu(this.firestore,this.converter,this._key.path.popLast())}withConverter(e){return new Eu(this.firestore,e,this._key)}}class ku{constructor(e,t,n){this.converter=t,this._query=n,this.type="query",this.firestore=e}withConverter(e){return new ku(this.firestore,e,this._query)}}class Iu extends ku{constructor(e,t,n){super(e,t,bs(n)),this._path=n,this.type="collection"}get id(){return this._query.path.lastSegment()}get path(){return this._query.path.canonicalString()}get parent(){const e=this._path.popLast();return e.isEmpty()?null:new Eu(this.firestore,null,new Li(e))}withConverter(e){return new Iu(this.firestore,e,this._path)}}function Su(e,t,...n){if(e=(0,a.m9)(e),gu("collection","path",t),e instanceof Tu){const r=yi.fromString(t,...n);return yu(r),new Iu(e,null,r)}{if(!(e instanceof Eu||e instanceof Iu))throw new Zr(Xr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(yi.fromString(t,...n));return yu(r),new Iu(e.firestore,null,r)}}function Cu(e,t,...n){if(e=(0,a.m9)(e),1===arguments.length&&(t=ci.A()),gu("doc","path",t),e instanceof Tu){const r=yi.fromString(t,...n);return vu(r),new Eu(e,null,new Li(r))}{if(!(e instanceof Eu||e instanceof Iu))throw new Zr(Xr.INVALID_ARGUMENT,"Expected first argument to collection() to be a CollectionReference, a DocumentReference or FirebaseFirestore");const r=e._path.child(yi.fromString(t,...n));return vu(r),new Eu(e.firestore,e instanceof Iu?e.converter:null,new Li(r))}}
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
class Au{constructor(){this.ma=Promise.resolve(),this.ga=[],this.ya=!1,this.pa=[],this.Ta=null,this.Ea=!1,this.Ia=!1,this.Aa=[],this.ur=new Pl(this,"async_queue_retry"),this.Ra=()=>{const e=Nl();e&&zr("AsyncQueue","Visibility state changed to "+e.visibilityState),this.ur.er()};const e=Nl();e&&"function"==typeof e.addEventListener&&e.addEventListener("visibilitychange",this.Ra)}get isShuttingDown(){return this.ya}enqueueAndForget(e){this.enqueue(e)}enqueueAndForgetEvenWhileRestricted(e){this.Pa(),this.ba(e)}enterRestrictedMode(e){if(!this.ya){this.ya=!0,this.Ia=e||!1;const t=Nl();t&&"function"==typeof t.removeEventListener&&t.removeEventListener("visibilitychange",this.Ra)}}enqueue(e){if(this.Pa(),this.ya)return new Promise((()=>{}));const t=new Qr;return this.ba((()=>this.ya&&this.Ia?Promise.resolve():(e().then(t.resolve,t.reject),t.promise))).then((()=>t.promise))}enqueueRetryable(e){this.enqueueAndForget((()=>(this.ga.push(e),this.va())))}async va(){if(0!==this.ga.length){try{await this.ga[0](),this.ga.shift(),this.ur.reset()}catch(T){if(!Ba(T))throw T;zr("AsyncQueue","Operation failed with retryable error: "+T)}this.ga.length>0&&this.ur.Zi((()=>this.va()))}}ba(e){const t=this.ma.then((()=>(this.Ea=!0,e().catch((e=>{this.Ta=e,this.Ea=!1;const t=function(e){let t=e.message||"";return e.stack&&(t=e.stack.includes(e.message)?e.stack:e.message+"\n"+e.stack),t}
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
 */(e);throw Hr("INTERNAL UNHANDLED ERROR: ",t),e})).then((e=>(this.Ea=!1,e))))));return this.ma=t,t}enqueueAfterDelay(e,t,n){this.Pa(),this.Aa.indexOf(e)>-1&&(t=0);const r=pc.createAndSchedule(this,e,t,n,(e=>this.Va(e)));return this.pa.push(r),r}Pa(){this.Ta&&Gr()}verifyOperationInProgress(){}async Sa(){let e;do{e=this.ma,await e}while(e!==this.ma)}Da(e){for(const t of this.pa)if(t.timerId===e)return!0;return!1}Ca(e){return this.Sa().then((()=>{this.pa.sort(((e,t)=>e.targetTimeMs-t.targetTimeMs));for(const t of this.pa)if(t.skipDelay(),"all"!==e&&t.timerId===e)break;return this.Sa()}))}Na(e){this.Aa.push(e)}Va(e){const t=this.pa.indexOf(e);this.pa.splice(t,1)}}class xu extends Tu{constructor(e,t,n){super(e,t,n),this.type="firestore",this._queue=new Au,this._persistenceKey="name"in e?e.name:"[DEFAULT]"}_terminate(){return this._firestoreClient||Nu(this),this._firestoreClient.terminate()}}function Ru(e=(0,i.Mq)()){return(0,i.qX)(e,"firestore").getImmediate()}function Ou(e){return e._firestoreClient||Nu(e),e._firestoreClient.verifyNotTerminated(),e._firestoreClient}function Nu(e){var t;const n=e._freezeSettings(),r=function(e,t,n,r){return new du(e,t,n,r.host,r.ssl,r.experimentalForceLongPolling,r.experimentalAutoDetectLongPolling,r.useFetchStreams)}(e._databaseId,(null===(t=e._app)||void 0===t?void 0:t.options.appId)||"",e._persistenceKey,n);e._firestoreClient=new ru(e._authCredentials,e._appCheckCredentials,e._queue,r)}
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
class Lu{constructor(...e){for(let t=0;t<e.length;++t)if(0===e[t].length)throw new Zr(Xr.INVALID_ARGUMENT,"Invalid field name at argument $(i + 1). Field names must not be empty.");this._internalPath=new bi(e)}isEqual(e){return this._internalPath.isEqual(e._internalPath)}}
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
class Pu{constructor(e){this._byteString=e}static fromBase64String(e){try{return new Pu(Ti.fromBase64String(e))}catch(e){throw new Zr(Xr.INVALID_ARGUMENT,"Failed to construct data from Base64 string: "+e)}}static fromUint8Array(e){return new Pu(Ti.fromUint8Array(e))}toBase64(){return this._byteString.toBase64()}toUint8Array(){return this._byteString.toUint8Array()}toString(){return"Bytes(base64: "+this.toBase64()+")"}isEqual(e){return this._byteString.isEqual(e._byteString)}}
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
 */class Du{constructor(e){this._methodName=e}}
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
 */class Fu{constructor(e,t){if(!isFinite(e)||e<-90||e>90)throw new Zr(Xr.INVALID_ARGUMENT,"Latitude must be a number between -90 and 90, but was: "+e);if(!isFinite(t)||t<-180||t>180)throw new Zr(Xr.INVALID_ARGUMENT,"Longitude must be a number between -180 and 180, but was: "+t);this._lat=e,this._long=t}get latitude(){return this._lat}get longitude(){return this._long}isEqual(e){return this._lat===e._lat&&this._long===e._long}toJSON(){return{latitude:this._lat,longitude:this._long}}_compareTo(e){return ui(this._lat,e._lat)||ui(this._long,e._long)}}
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
 */const Mu=/^__.*__$/;class qu{constructor(e,t,n){this.data=e,this.fieldMask=t,this.fieldTransforms=n}toMutation(e,t){return null!==this.fieldMask?new ao(e,this.data,this.fieldMask,t,this.fieldTransforms):new oo(e,this.data,t,this.fieldTransforms)}}function Vu(e){switch(e){case 0:case 2:case 1:return!0;case 3:case 4:return!1;default:throw Gr()}}class Uu{constructor(e,t,n,r,i,s){this.settings=e,this.databaseId=t,this.k=n,this.ignoreUndefinedProperties=r,void 0===i&&this.ka(),this.fieldTransforms=i||[],this.fieldMask=s||[]}get path(){return this.settings.path}get xa(){return this.settings.xa}$a(e){return new Uu(Object.assign(Object.assign({},this.settings),e),this.databaseId,this.k,this.ignoreUndefinedProperties,this.fieldTransforms,this.fieldMask)}Fa(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.Ma(e),r}La(e){var t;const n=null===(t=this.path)||void 0===t?void 0:t.child(e),r=this.$a({path:n,Oa:!1});return r.ka(),r}Ba(e){return this.$a({path:void 0,Oa:!0})}Ua(e){return Xu(e,this.settings.methodName,this.settings.qa||!1,this.path,this.settings.Ka)}contains(e){return void 0!==this.fieldMask.find((t=>e.isPrefixOf(t)))||void 0!==this.fieldTransforms.find((t=>e.isPrefixOf(t.field)))}ka(){if(this.path)for(let e=0;e<this.path.length;e++)this.Ma(this.path.get(e))}Ma(e){if(0===e.length)throw this.Ua("Document fields must not be empty");if(Vu(this.xa)&&Mu.test(e))throw this.Ua('Document fields cannot begin and end with "__"')}}class ju{constructor(e,t,n){this.databaseId=e,this.ignoreUndefinedProperties=t,this.k=n||Ll(e)}ja(e,t,n,r=!1){return new Uu({xa:e,methodName:t,Ka:n,path:bi.emptyPath(),Oa:!1,qa:r},this.databaseId,this.k,this.ignoreUndefinedProperties)}}function Bu(e){const t=e._freezeSettings(),n=Ll(e._databaseId);return new ju(e._databaseId,!!t.ignoreUndefinedProperties,n)}function $u(e,t,n,r,i,s={}){const o=e.ja(s.merge||s.mergeFields?2:0,t,n,i);Wu("Data must be an object, but it was:",o,r);const a=Hu(r,o);let l,c;if(s.merge)l=new _i(o.fieldMask),c=o.fieldTransforms;else if(s.mergeFields){const e=[];for(const r of s.mergeFields){const i=Gu(t,r,n);if(!o.contains(i))throw new Zr(Xr.INVALID_ARGUMENT,`Field '${i}' is specified in your field mask but missing from your input data.`);Zu(e,i)||e.push(i)}l=new _i(e),c=o.fieldTransforms.filter((e=>l.covers(e.field)))}else l=null,c=o.fieldTransforms;return new qu(new Wi(a),l,c)}function zu(e,t){if(Ku(e=(0,a.m9)(e)))return Wu("Unsupported field value:",t,e),Hu(e,t);if(e instanceof Du)return function(e,t){if(!Vu(t.xa))throw t.Ua(`${e._methodName}() can only be used with update() and set()`);if(!t.path)throw t.Ua(`${e._methodName}() is not currently supported inside arrays`);const n=e._toFieldTransform(t);n&&t.fieldTransforms.push(n)}(e,t),null;if(void 0===e&&t.ignoreUndefinedProperties)return null;if(t.path&&t.fieldMask.push(t.path),e instanceof Array){if(t.settings.Oa&&4!==t.xa)throw t.Ua("Nested arrays are not supported");return function(e,t){const n=[];let r=0;for(const i of e){let e=zu(i,t.Ba(r));null==e&&(e={nullValue:"NULL_VALUE"}),n.push(e),r++}return{arrayValue:{values:n}}}(e,t)}return function(e,t){if(null===(e=(0,a.m9)(e)))return{nullValue:"NULL_VALUE"};if("number"==typeof e)return Ms(t.k,e);if("boolean"==typeof e)return{booleanValue:e};if("string"==typeof e)return{stringValue:e};if(e instanceof Date){const n=di.fromDate(e);return{timestampValue:Ko(t.k,n)}}if(e instanceof di){const n=new di(e.seconds,1e3*Math.floor(e.nanoseconds/1e3));return{timestampValue:Ko(t.k,n)}}if(e instanceof Fu)return{geoPointValue:{latitude:e.latitude,longitude:e.longitude}};if(e instanceof Pu)return{bytesValue:Wo(t.k,e._byteString)};if(e instanceof Eu){const n=t.databaseId,r=e.firestore._databaseId;if(!r.isEqual(n))throw t.Ua(`Document reference is for database ${r.projectId}/${r.database} but should be for database ${n.projectId}/${n.database}`);return{referenceValue:Yo(e.firestore._databaseId||t.databaseId,e._key.path)}}throw t.Ua(`Unsupported field value: ${wu(e)}`)}(e,t)}function Hu(e,t){const n={};return mi(e)?t.path&&t.path.length>0&&t.fieldMask.push(t.path):gi(e,((e,r)=>{const i=zu(r,t.Fa(e));null!=i&&(n[e]=i)})),{mapValue:{fields:n}}}function Ku(e){return!("object"!=typeof e||null===e||e instanceof Array||e instanceof Date||e instanceof di||e instanceof Fu||e instanceof Pu||e instanceof Eu||e instanceof Du)}function Wu(e,t,n){if(!Ku(n)||!function(e){return"object"==typeof e&&null!==e&&(Object.getPrototypeOf(e)===Object.prototype||null===Object.getPrototypeOf(e))}(n)){const r=wu(n);throw"an object"===r?t.Ua(e+" a custom object"):t.Ua(e+" "+r)}}function Gu(e,t,n){if((t=(0,a.m9)(t))instanceof Lu)return t._internalPath;if("string"==typeof t)return Yu(e,t);throw Xu("Field path arguments must be of type string or FieldPath.",e,!1,void 0,n)}const Ju=new RegExp("[~\\*/\\[\\]]");function Yu(e,t,n){if(t.search(Ju)>=0)throw Xu(`Invalid field path (${t}). Paths must not contain '~', '*', '/', '[', or ']'`,e,!1,void 0,n);try{return new Lu(...t.split("."))._internalPath}catch(r){throw Xu(`Invalid field path (${t}). Paths must not be empty, begin with '.', end with '.', or contain '..'`,e,!1,void 0,n)}}function Xu(e,t,n,r,i){const s=r&&!r.isEmpty(),o=void 0!==i;let a=`Function ${t}() called with invalid data`;n&&(a+=" (via `toFirestore()`)"),a+=". ";let l="";return(s||o)&&(l+=" (found",s&&(l+=` in field ${r}`),o&&(l+=` in document ${i}`),l+=")"),new Zr(Xr.INVALID_ARGUMENT,a+e+l)}function Zu(e,t){return e.some((e=>e.isEqual(t)))}
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
 */class Qu{constructor(e,t,n,r,i){this._firestore=e,this._userDataWriter=t,this._key=n,this._document=r,this._converter=i}get id(){return this._key.path.lastSegment()}get ref(){return new Eu(this._firestore,this._converter,this._key)}exists(){return null!==this._document}data(){if(this._document){if(this._converter){const e=new eh(this._firestore,this._userDataWriter,this._key,this._document,null);return this._converter.fromFirestore(e)}return this._userDataWriter.convertValue(this._document.data.value)}}get(e){if(this._document){const t=this._document.data.field(th("DocumentSnapshot.get",e));if(null!==t)return this._userDataWriter.convertValue(t)}}}class eh extends Qu{data(){return super.data()}}function th(e,t){return"string"==typeof t?Yu(e,t):t instanceof Lu?t._internalPath:t._delegate._internalPath}
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
 */class nh{constructor(e,t){this.hasPendingWrites=e,this.fromCache=t}isEqual(e){return this.hasPendingWrites===e.hasPendingWrites&&this.fromCache===e.fromCache}}class rh extends Qu{constructor(e,t,n,r,i,s){super(e,t,n,r,s),this._firestore=e,this._firestoreImpl=e,this.metadata=i}exists(){return super.exists()}data(e={}){if(this._document){if(this._converter){const t=new ih(this._firestore,this._userDataWriter,this._key,this._document,this.metadata,null);return this._converter.fromFirestore(t,e)}return this._userDataWriter.convertValue(this._document.data.value,e.serverTimestamps)}}get(e,t={}){if(this._document){const n=this._document.data.field(th("DocumentSnapshot.get",e));if(null!==n)return this._userDataWriter.convertValue(n,t.serverTimestamps)}}}class ih extends rh{data(e={}){return super.data(e)}}class sh{constructor(e,t,n,r){this._firestore=e,this._userDataWriter=t,this._snapshot=r,this.metadata=new nh(r.hasPendingWrites,r.fromCache),this.query=n}get docs(){const e=[];return this.forEach((t=>e.push(t))),e}get size(){return this._snapshot.docs.size}get empty(){return 0===this.size}forEach(e,t){this._snapshot.docs.forEach((n=>{e.call(t,new ih(this._firestore,this._userDataWriter,n.key,n,new nh(this._snapshot.mutatedKeys.has(n.key),this._snapshot.fromCache),this.query.converter))}))}docChanges(e={}){const t=!!e.includeMetadataChanges;if(t&&this._snapshot.excludesMetadataChanges)throw new Zr(Xr.INVALID_ARGUMENT,"To include metadata changes with your document changes, you must also pass { includeMetadataChanges:true } to onSnapshot().");return this._cachedChanges&&this._cachedChangesIncludeMetadataChanges===t||(this._cachedChanges=function(e,t){if(e._snapshot.oldDocs.isEmpty()){let t=0;return e._snapshot.docChanges.map((n=>({type:"added",doc:new ih(e._firestore,e._userDataWriter,n.doc.key,n.doc,new nh(e._snapshot.mutatedKeys.has(n.doc.key),e._snapshot.fromCache),e.query.converter),oldIndex:-1,newIndex:t++})))}{let n=e._snapshot.oldDocs;return e._snapshot.docChanges.filter((e=>t||3!==e.type)).map((t=>{const r=new ih(e._firestore,e._userDataWriter,t.doc.key,t.doc,new nh(e._snapshot.mutatedKeys.has(t.doc.key),e._snapshot.fromCache),e.query.converter);let i=-1,s=-1;return 0!==t.type&&(i=n.indexOf(t.doc.key),n=n.delete(t.doc.key)),1!==t.type&&(n=n.add(t.doc),s=n.indexOf(t.doc.key)),{type:oh(t.type),doc:r,oldIndex:i,newIndex:s}}))}}(this,t),this._cachedChangesIncludeMetadataChanges=t),this._cachedChanges}}function oh(e){switch(e){case 0:return"added";case 2:case 3:return"modified";case 1:return"removed";default:return Gr()}}
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
function ah(e){if(Ts(e)&&0===e.explicitOrderBy.length)throw new Zr(Xr.UNIMPLEMENTED,"limitToLast() queries require specifying at least one orderBy() clause")}
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
class lh{convertValue(e,t="none"){switch(Pi(e)){case 0:return null;case 1:return e.booleanValue;case 2:return Ii(e.integerValue||e.doubleValue);case 3:return this.convertTimestamp(e.timestampValue);case 4:return this.convertServerTimestamp(e,t);case 5:return e.stringValue;case 6:return this.convertBytes(Si(e.bytesValue));case 7:return this.convertReference(e.referenceValue);case 8:return this.convertGeoPoint(e.geoPointValue);case 9:return this.convertArray(e.arrayValue,t);case 10:return this.convertObject(e.mapValue,t);default:throw Gr()}}convertObject(e,t){const n={};return gi(e.fields,((e,r)=>{n[e]=this.convertValue(r,t)})),n}convertGeoPoint(e){return new Fu(Ii(e.latitude),Ii(e.longitude))}convertArray(e,t){return(e.values||[]).map((e=>this.convertValue(e,t)))}convertServerTimestamp(e,t){switch(t){case"previous":const n=Ai(e);return null==n?null:this.convertValue(n,t);case"estimate":return this.convertTimestamp(xi(e));default:return null}}convertTimestamp(e){const t=ki(e);return new di(t.seconds,t.nanos)}convertDocumentKey(e,t){const n=yi.fromString(e);Jr(Ta(n));const r=new fu(n.get(1),n.get(3)),i=new Li(n.popFirst(5));return r.isEqual(t)||Hr(`Document ${i} contains a document reference within a different database (${r.projectId}/${r.database}) which is not supported. It will be treated as a reference in the current database (${t.projectId}/${t.database}) instead.`),i}}
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
 */function ch(e,t,n){let r;return r=e?n&&(n.merge||n.mergeFields)?e.toFirestore(t,n):e.toFirestore(t):t,r}
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
function uh(e){e=bu(e,Eu);const t=bu(e.firestore,xu);return uu(Ou(t),e._key).then((n=>mh(t,e,n)))}class hh extends lh{constructor(e){super(),this.firestore=e}convertBytes(e){return new Pu(e)}convertReference(e){const t=this.convertDocumentKey(e,this.firestore._databaseId);return new Eu(this.firestore,null,t)}}function dh(e){e=bu(e,ku);const t=bu(e.firestore,xu),n=Ou(t),r=new hh(t);return ah(e._query),hu(n,e._query).then((n=>new sh(t,r,e,n)))}function fh(e,t,n){e=bu(e,Eu);const r=bu(e.firestore,xu),i=ch(e.converter,t,n);return gh(r,[$u(Bu(r),"setDoc",e._key,i,null!==e.converter,n).toMutation(e._key,Zs.none())])}function ph(e){return gh(bu(e.firestore,xu),[new ho(e._key,Zs.none())])}function gh(e,t){return function(e,t){const n=new Qr;return e.asyncQueue.enqueueAndForget((async()=>Fc(await lu(e),t,n))),n.promise}(Ou(e),t)}function mh(e,t,n){const r=n.docs.get(t._key),i=new hh(e);return new rh(e,i,t._key,r,new nh(n.hasPendingWrites,n.fromCache),t.converter)}
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
 */!function(e,t=!0){!function(e){jr=e}(i.Jn),(0,i.Xd)(new s.wA("firestore",((e,{options:n})=>{const r=e.getProvider("app").getImmediate(),i=new xu(r,new ni(e.getProvider("auth-internal")),new oi(e.getProvider("app-check-internal")));return n=Object.assign({useFetchStreams:t},n),i._setSettings(n),i}),"PUBLIC")),(0,i.KN)(Vr,"3.4.1",e),(0,i.KN)(Vr,"3.4.1","esm2017")}()},3968:function(e,t){(function(e,n){n(t)})(0,(function(e){"use strict";function t(e){return Array.prototype.slice.call(e)}function n(e){return new Promise((function(t,n){e.onsuccess=function(){t(e.result)},e.onerror=function(){n(e.error)}}))}function r(e,t,r){var i,s=new Promise((function(s,o){i=e[t].apply(e,r),n(i).then(s,o)}));return s.request=i,s}function i(e,t,n){var i=r(e,t,n);return i.then((function(e){if(e)return new u(e,i.request)}))}function s(e,t,n){n.forEach((function(n){Object.defineProperty(e.prototype,n,{get:function(){return this[t][n]},set:function(e){this[t][n]=e}})}))}function o(e,t,n,i){i.forEach((function(i){i in n.prototype&&(e.prototype[i]=function(){return r(this[t],i,arguments)})}))}function a(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return this[t][r].apply(this[t],arguments)})}))}function l(e,t,n,r){r.forEach((function(r){r in n.prototype&&(e.prototype[r]=function(){return i(this[t],r,arguments)})}))}function c(e){this._index=e}function u(e,t){this._cursor=e,this._request=t}function h(e){this._store=e}function d(e){this._tx=e,this.complete=new Promise((function(t,n){e.oncomplete=function(){t()},e.onerror=function(){n(e.error)},e.onabort=function(){n(e.error)}}))}function f(e,t,n){this._db=e,this.oldVersion=t,this.transaction=new d(n)}function p(e){this._db=e}function g(e,t,n){var i=r(indexedDB,"open",[e,t]),s=i.request;return s&&(s.onupgradeneeded=function(e){n&&n(new f(s.result,e.oldVersion,s.transaction))}),i.then((function(e){return new p(e)}))}function m(e){return r(indexedDB,"deleteDatabase",[e])}s(c,"_index",["name","keyPath","multiEntry","unique"]),o(c,"_index",IDBIndex,["get","getKey","getAll","getAllKeys","count"]),l(c,"_index",IDBIndex,["openCursor","openKeyCursor"]),s(u,"_cursor",["direction","key","primaryKey","value"]),o(u,"_cursor",IDBCursor,["update","delete"]),["advance","continue","continuePrimaryKey"].forEach((function(e){e in IDBCursor.prototype&&(u.prototype[e]=function(){var t=this,r=arguments;return Promise.resolve().then((function(){return t._cursor[e].apply(t._cursor,r),n(t._request).then((function(e){if(e)return new u(e,t._request)}))}))})})),h.prototype.createIndex=function(){return new c(this._store.createIndex.apply(this._store,arguments))},h.prototype.index=function(){return new c(this._store.index.apply(this._store,arguments))},s(h,"_store",["name","keyPath","indexNames","autoIncrement"]),o(h,"_store",IDBObjectStore,["put","add","delete","clear","get","getAll","getKey","getAllKeys","count"]),l(h,"_store",IDBObjectStore,["openCursor","openKeyCursor"]),a(h,"_store",IDBObjectStore,["deleteIndex"]),d.prototype.objectStore=function(){return new h(this._tx.objectStore.apply(this._tx,arguments))},s(d,"_tx",["objectStoreNames","mode"]),a(d,"_tx",IDBTransaction,["abort"]),f.prototype.createObjectStore=function(){return new h(this._db.createObjectStore.apply(this._db,arguments))},s(f,"_db",["name","version","objectStoreNames"]),a(f,"_db",IDBDatabase,["deleteObjectStore","close"]),p.prototype.transaction=function(){return new d(this._db.transaction.apply(this._db,arguments))},s(p,"_db",["name","version","objectStoreNames"]),a(p,"_db",IDBDatabase,["close"]),["openCursor","openKeyCursor"].forEach((function(e){[h,c].forEach((function(n){e in n.prototype&&(n.prototype[e.replace("open","iterate")]=function(){var n=t(arguments),r=n[n.length-1],i=this._store||this._index,s=i[e].apply(i,n.slice(0,-1));s.onsuccess=function(){r(s.result)}})}))})),[c,h].forEach((function(e){e.prototype.getAll||(e.prototype.getAll=function(e,t){var n=this,r=[];return new Promise((function(i){n.iterateCursor(e,(function(e){e?(r.push(e.value),void 0===t||r.length!=t?e.continue():i(r)):i(r)}))}))})})),e.openDb=g,e.deleteDb=m,Object.defineProperty(e,"__esModule",{value:!0})}))},4260:(e,t)=>{"use strict";t.Z=(e,t)=>{const n=e.__vccOpts||e;for(const[r,i]of t)n[r]=i;return n}},9582:(e,t,n)=>{"use strict";n.d(t,{p7:()=>tt,r5:()=>K,yj:()=>st,tv:()=>it});var r=n(3673),i=n(1959);
/*!
  * vue-router v4.0.12
  * (c) 2021 Eduardo San Martin Morote
  * @license MIT
  */
const s="function"===typeof Symbol&&"symbol"===typeof Symbol.toStringTag,o=e=>s?Symbol(e):"_vr_"+e,a=o("rvlm"),l=o("rvd"),c=o("r"),u=o("rl"),h=o("rvl"),d="undefined"!==typeof window;function f(e){return e.__esModule||s&&"Module"===e[Symbol.toStringTag]}const p=Object.assign;function g(e,t){const n={};for(const r in t){const i=t[r];n[r]=Array.isArray(i)?i.map(e):e(i)}return n}const m=()=>{};const v=/\/$/,y=e=>e.replace(v,"");function w(e,t,n="/"){let r,i={},s="",o="";const a=t.indexOf("?"),l=t.indexOf("#",a>-1?a:0);return a>-1&&(r=t.slice(0,a),s=t.slice(a+1,l>-1?l:t.length),i=e(s)),l>-1&&(r=r||t.slice(0,l),o=t.slice(l,t.length)),r=C(null!=r?r:t,n),{fullPath:r+(s&&"?")+s+o,path:r,query:i,hash:o}}function b(e,t){const n=t.query?e(t.query):"";return t.path+(n&&"?")+n+(t.hash||"")}function _(e,t){return t&&e.toLowerCase().startsWith(t.toLowerCase())?e.slice(t.length)||"/":e}function T(e,t,n){const r=t.matched.length-1,i=n.matched.length-1;return r>-1&&r===i&&E(t.matched[r],n.matched[i])&&k(t.params,n.params)&&e(t.query)===e(n.query)&&t.hash===n.hash}function E(e,t){return(e.aliasOf||e)===(t.aliasOf||t)}function k(e,t){if(Object.keys(e).length!==Object.keys(t).length)return!1;for(const n in e)if(!I(e[n],t[n]))return!1;return!0}function I(e,t){return Array.isArray(e)?S(e,t):Array.isArray(t)?S(t,e):e===t}function S(e,t){return Array.isArray(t)?e.length===t.length&&e.every(((e,n)=>e===t[n])):1===e.length&&e[0]===t}function C(e,t){if(e.startsWith("/"))return e;if(!e)return t;const n=t.split("/"),r=e.split("/");let i,s,o=n.length-1;for(i=0;i<r.length;i++)if(s=r[i],1!==o&&"."!==s){if(".."!==s)break;o--}return n.slice(0,o).join("/")+"/"+r.slice(i-(i===r.length?1:0)).join("/")}var A,x;(function(e){e["pop"]="pop",e["push"]="push"})(A||(A={})),function(e){e["back"]="back",e["forward"]="forward",e["unknown"]=""}(x||(x={}));function R(e){if(!e)if(d){const t=document.querySelector("base");e=t&&t.getAttribute("href")||"/",e=e.replace(/^\w+:\/\/[^\/]+/,"")}else e="/";return"/"!==e[0]&&"#"!==e[0]&&(e="/"+e),y(e)}const O=/^[^#]+#/;function N(e,t){return e.replace(O,"#")+t}function L(e,t){const n=document.documentElement.getBoundingClientRect(),r=e.getBoundingClientRect();return{behavior:t.behavior,left:r.left-n.left-(t.left||0),top:r.top-n.top-(t.top||0)}}const P=()=>({left:window.pageXOffset,top:window.pageYOffset});function D(e){let t;if("el"in e){const n=e.el,r="string"===typeof n&&n.startsWith("#");0;const i="string"===typeof n?r?document.getElementById(n.slice(1)):document.querySelector(n):n;if(!i)return;t=L(i,e)}else t=e;"scrollBehavior"in document.documentElement.style?window.scrollTo(t):window.scrollTo(null!=t.left?t.left:window.pageXOffset,null!=t.top?t.top:window.pageYOffset)}function F(e,t){const n=history.state?history.state.position-t:-1;return n+e}const M=new Map;function q(e,t){M.set(e,t)}function V(e){const t=M.get(e);return M.delete(e),t}let U=()=>location.protocol+"//"+location.host;function j(e,t){const{pathname:n,search:r,hash:i}=t,s=e.indexOf("#");if(s>-1){let t=i.includes(e.slice(s))?e.slice(s).length:1,n=i.slice(t);return"/"!==n[0]&&(n="/"+n),_(n,"")}const o=_(n,e);return o+r+i}function B(e,t,n,r){let i=[],s=[],o=null;const a=({state:s})=>{const a=j(e,location),l=n.value,c=t.value;let u=0;if(s){if(n.value=a,t.value=s,o&&o===l)return void(o=null);u=c?s.position-c.position:0}else r(a);i.forEach((e=>{e(n.value,l,{delta:u,type:A.pop,direction:u?u>0?x.forward:x.back:x.unknown})}))};function l(){o=n.value}function c(e){i.push(e);const t=()=>{const t=i.indexOf(e);t>-1&&i.splice(t,1)};return s.push(t),t}function u(){const{history:e}=window;e.state&&e.replaceState(p({},e.state,{scroll:P()}),"")}function h(){for(const e of s)e();s=[],window.removeEventListener("popstate",a),window.removeEventListener("beforeunload",u)}return window.addEventListener("popstate",a),window.addEventListener("beforeunload",u),{pauseListeners:l,listen:c,destroy:h}}function $(e,t,n,r=!1,i=!1){return{back:e,current:t,forward:n,replaced:r,position:window.history.length,scroll:i?P():null}}function z(e){const{history:t,location:n}=window,r={value:j(e,n)},i={value:t.state};function s(r,s,o){const a=e.indexOf("#"),l=a>-1?(n.host&&document.querySelector("base")?e:e.slice(a))+r:U()+e+r;try{t[o?"replaceState":"pushState"](s,"",l),i.value=s}catch(c){console.error(c),n[o?"replace":"assign"](l)}}function o(e,n){const o=p({},t.state,$(i.value.back,e,i.value.forward,!0),n,{position:i.value.position});s(e,o,!0),r.value=e}function a(e,n){const o=p({},i.value,t.state,{forward:e,scroll:P()});s(o.current,o,!0);const a=p({},$(r.value,e,null),{position:o.position+1},n);s(e,a,!1),r.value=e}return i.value||s(r.value,{back:null,current:r.value,forward:null,position:t.length-1,replaced:!0,scroll:null},!0),{location:r,state:i,push:a,replace:o}}function H(e){e=R(e);const t=z(e),n=B(e,t.state,t.location,t.replace);function r(e,t=!0){t||n.pauseListeners(),history.go(e)}const i=p({location:"",base:e,go:r,createHref:N.bind(null,e)},t,n);return Object.defineProperty(i,"location",{enumerable:!0,get:()=>t.location.value}),Object.defineProperty(i,"state",{enumerable:!0,get:()=>t.state.value}),i}function K(e){return e=location.host?e||location.pathname+location.search:"",e.includes("#")||(e+="#"),H(e)}function W(e){return"string"===typeof e||e&&"object"===typeof e}function G(e){return"string"===typeof e||"symbol"===typeof e}const J={path:"/",name:void 0,params:{},query:{},hash:"",fullPath:"/",matched:[],meta:{},redirectedFrom:void 0},Y=o("nf");var X;(function(e){e[e["aborted"]=4]="aborted",e[e["cancelled"]=8]="cancelled",e[e["duplicated"]=16]="duplicated"})(X||(X={}));function Z(e,t){return p(new Error,{type:e,[Y]:!0},t)}function Q(e,t){return e instanceof Error&&Y in e&&(null==t||!!(e.type&t))}const ee="[^/]+?",te={sensitive:!1,strict:!1,start:!0,end:!0},ne=/[.+*?^${}()[\]/\\]/g;function re(e,t){const n=p({},te,t),r=[];let i=n.start?"^":"";const s=[];for(const u of e){const e=u.length?[]:[90];n.strict&&!u.length&&(i+="/");for(let t=0;t<u.length;t++){const r=u[t];let o=40+(n.sensitive?.25:0);if(0===r.type)t||(i+="/"),i+=r.value.replace(ne,"\\$&"),o+=40;else if(1===r.type){const{value:e,repeatable:n,optional:a,regexp:l}=r;s.push({name:e,repeatable:n,optional:a});const h=l||ee;if(h!==ee){o+=10;try{new RegExp(`(${h})`)}catch(c){throw new Error(`Invalid custom RegExp for param "${e}" (${h}): `+c.message)}}let d=n?`((?:${h})(?:/(?:${h}))*)`:`(${h})`;t||(d=a&&u.length<2?`(?:/${d})`:"/"+d),a&&(d+="?"),i+=d,o+=20,a&&(o+=-8),n&&(o+=-20),".*"===h&&(o+=-50)}e.push(o)}r.push(e)}if(n.strict&&n.end){const e=r.length-1;r[e][r[e].length-1]+=.7000000000000001}n.strict||(i+="/?"),n.end?i+="$":n.strict&&(i+="(?:/|$)");const o=new RegExp(i,n.sensitive?"":"i");function a(e){const t=e.match(o),n={};if(!t)return null;for(let r=1;r<t.length;r++){const e=t[r]||"",i=s[r-1];n[i.name]=e&&i.repeatable?e.split("/"):e}return n}function l(t){let n="",r=!1;for(const i of e){r&&n.endsWith("/")||(n+="/"),r=!1;for(const e of i)if(0===e.type)n+=e.value;else if(1===e.type){const{value:s,repeatable:o,optional:a}=e,l=s in t?t[s]:"";if(Array.isArray(l)&&!o)throw new Error(`Provided param "${s}" is an array but it is not repeatable (* or + modifiers)`);const c=Array.isArray(l)?l.join("/"):l;if(!c){if(!a)throw new Error(`Missing required param "${s}"`);i.length<2&&(n.endsWith("/")?n=n.slice(0,-1):r=!0)}n+=c}}return n}return{re:o,score:r,keys:s,parse:a,stringify:l}}function ie(e,t){let n=0;while(n<e.length&&n<t.length){const r=t[n]-e[n];if(r)return r;n++}return e.length<t.length?1===e.length&&80===e[0]?-1:1:e.length>t.length?1===t.length&&80===t[0]?1:-1:0}function se(e,t){let n=0;const r=e.score,i=t.score;while(n<r.length&&n<i.length){const e=ie(r[n],i[n]);if(e)return e;n++}return i.length-r.length}const oe={type:0,value:""},ae=/[a-zA-Z0-9_]/;function le(e){if(!e)return[[]];if("/"===e)return[[oe]];if(!e.startsWith("/"))throw new Error(`Invalid path "${e}"`);function t(e){throw new Error(`ERR (${n})/"${c}": ${e}`)}let n=0,r=n;const i=[];let s;function o(){s&&i.push(s),s=[]}let a,l=0,c="",u="";function h(){c&&(0===n?s.push({type:0,value:c}):1===n||2===n||3===n?(s.length>1&&("*"===a||"+"===a)&&t(`A repeatable param (${c}) must be alone in its segment. eg: '/:ids+.`),s.push({type:1,value:c,regexp:u,repeatable:"*"===a||"+"===a,optional:"*"===a||"?"===a})):t("Invalid state to consume buffer"),c="")}function d(){c+=a}while(l<e.length)if(a=e[l++],"\\"!==a||2===n)switch(n){case 0:"/"===a?(c&&h(),o()):":"===a?(h(),n=1):d();break;case 4:d(),n=r;break;case 1:"("===a?n=2:ae.test(a)?d():(h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--);break;case 2:")"===a?"\\"==u[u.length-1]?u=u.slice(0,-1)+a:n=3:u+=a;break;case 3:h(),n=0,"*"!==a&&"?"!==a&&"+"!==a&&l--,u="";break;default:t("Unknown state");break}else r=n,n=4;return 2===n&&t(`Unfinished custom RegExp for param "${c}"`),h(),o(),i}function ce(e,t,n){const r=re(le(e.path),n);const i=p(r,{record:e,parent:t,children:[],alias:[]});return t&&!i.record.aliasOf===!t.record.aliasOf&&t.children.push(i),i}function ue(e,t){const n=[],r=new Map;function i(e){return r.get(e)}function s(e,n,r){const i=!r,a=de(e);a.aliasOf=r&&r.record;const c=me(t,e),u=[a];if("alias"in e){const t="string"===typeof e.alias?[e.alias]:e.alias;for(const e of t)u.push(p({},a,{components:r?r.record.components:a.components,path:e,aliasOf:r?r.record:a}))}let h,d;for(const t of u){const{path:u}=t;if(n&&"/"!==u[0]){const e=n.record.path,r="/"===e[e.length-1]?"":"/";t.path=n.record.path+(u&&r+u)}if(h=ce(t,n,c),r?r.alias.push(h):(d=d||h,d!==h&&d.alias.push(h),i&&e.name&&!pe(h)&&o(e.name)),"children"in a){const e=a.children;for(let t=0;t<e.length;t++)s(e[t],h,r&&r.children[t])}r=r||h,l(h)}return d?()=>{o(d)}:m}function o(e){if(G(e)){const t=r.get(e);t&&(r.delete(e),n.splice(n.indexOf(t),1),t.children.forEach(o),t.alias.forEach(o))}else{const t=n.indexOf(e);t>-1&&(n.splice(t,1),e.record.name&&r.delete(e.record.name),e.children.forEach(o),e.alias.forEach(o))}}function a(){return n}function l(e){let t=0;while(t<n.length&&se(e,n[t])>=0)t++;n.splice(t,0,e),e.record.name&&!pe(e)&&r.set(e.record.name,e)}function c(e,t){let i,s,o,a={};if("name"in e&&e.name){if(i=r.get(e.name),!i)throw Z(1,{location:e});o=i.record.name,a=p(he(t.params,i.keys.filter((e=>!e.optional)).map((e=>e.name))),e.params),s=i.stringify(a)}else if("path"in e)s=e.path,i=n.find((e=>e.re.test(s))),i&&(a=i.parse(s),o=i.record.name);else{if(i=t.name?r.get(t.name):n.find((e=>e.re.test(t.path))),!i)throw Z(1,{location:e,currentLocation:t});o=i.record.name,a=p({},t.params,e.params),s=i.stringify(a)}const l=[];let c=i;while(c)l.unshift(c.record),c=c.parent;return{name:o,path:s,params:a,matched:l,meta:ge(l)}}return t=me({strict:!1,end:!0,sensitive:!1},t),e.forEach((e=>s(e))),{addRoute:s,resolve:c,removeRoute:o,getRoutes:a,getRecordMatcher:i}}function he(e,t){const n={};for(const r of t)r in e&&(n[r]=e[r]);return n}function de(e){return{path:e.path,redirect:e.redirect,name:e.name,meta:e.meta||{},aliasOf:void 0,beforeEnter:e.beforeEnter,props:fe(e),children:e.children||[],instances:{},leaveGuards:new Set,updateGuards:new Set,enterCallbacks:{},components:"components"in e?e.components||{}:{default:e.component}}}function fe(e){const t={},n=e.props||!1;if("component"in e)t.default=n;else for(const r in e.components)t[r]="boolean"===typeof n?n:n[r];return t}function pe(e){while(e){if(e.record.aliasOf)return!0;e=e.parent}return!1}function ge(e){return e.reduce(((e,t)=>p(e,t.meta)),{})}function me(e,t){const n={};for(const r in e)n[r]=r in t?t[r]:e[r];return n}const ve=/#/g,ye=/&/g,we=/\//g,be=/=/g,_e=/\?/g,Te=/\+/g,Ee=/%5B/g,ke=/%5D/g,Ie=/%5E/g,Se=/%60/g,Ce=/%7B/g,Ae=/%7C/g,xe=/%7D/g,Re=/%20/g;function Oe(e){return encodeURI(""+e).replace(Ae,"|").replace(Ee,"[").replace(ke,"]")}function Ne(e){return Oe(e).replace(Ce,"{").replace(xe,"}").replace(Ie,"^")}function Le(e){return Oe(e).replace(Te,"%2B").replace(Re,"+").replace(ve,"%23").replace(ye,"%26").replace(Se,"`").replace(Ce,"{").replace(xe,"}").replace(Ie,"^")}function Pe(e){return Le(e).replace(be,"%3D")}function De(e){return Oe(e).replace(ve,"%23").replace(_e,"%3F")}function Fe(e){return null==e?"":De(e).replace(we,"%2F")}function Me(e){try{return decodeURIComponent(""+e)}catch(t){}return""+e}function qe(e){const t={};if(""===e||"?"===e)return t;const n="?"===e[0],r=(n?e.slice(1):e).split("&");for(let i=0;i<r.length;++i){const e=r[i].replace(Te," "),n=e.indexOf("="),s=Me(n<0?e:e.slice(0,n)),o=n<0?null:Me(e.slice(n+1));if(s in t){let e=t[s];Array.isArray(e)||(e=t[s]=[e]),e.push(o)}else t[s]=o}return t}function Ve(e){let t="";for(let n in e){const r=e[n];if(n=Pe(n),null==r){void 0!==r&&(t+=(t.length?"&":"")+n);continue}const i=Array.isArray(r)?r.map((e=>e&&Le(e))):[r&&Le(r)];i.forEach((e=>{void 0!==e&&(t+=(t.length?"&":"")+n,null!=e&&(t+="="+e))}))}return t}function Ue(e){const t={};for(const n in e){const r=e[n];void 0!==r&&(t[n]=Array.isArray(r)?r.map((e=>null==e?null:""+e)):null==r?r:""+r)}return t}function je(){let e=[];function t(t){return e.push(t),()=>{const n=e.indexOf(t);n>-1&&e.splice(n,1)}}function n(){e=[]}return{add:t,list:()=>e,reset:n}}function Be(e,t,n,r,i){const s=r&&(r.enterCallbacks[i]=r.enterCallbacks[i]||[]);return()=>new Promise(((o,a)=>{const l=e=>{!1===e?a(Z(4,{from:n,to:t})):e instanceof Error?a(e):W(e)?a(Z(2,{from:t,to:e})):(s&&r.enterCallbacks[i]===s&&"function"===typeof e&&s.push(e),o())},c=e.call(r&&r.instances[i],t,n,l);let u=Promise.resolve(c);e.length<3&&(u=u.then(l)),u.catch((e=>a(e)))}))}function $e(e,t,n,r){const i=[];for(const s of e)for(const e in s.components){let o=s.components[e];if("beforeRouteEnter"===t||s.instances[e])if(ze(o)){const a=o.__vccOpts||o,l=a[t];l&&i.push(Be(l,n,r,s,e))}else{let a=o();0,i.push((()=>a.then((i=>{if(!i)return Promise.reject(new Error(`Couldn't resolve component "${e}" at "${s.path}"`));const o=f(i)?i.default:i;s.components[e]=o;const a=o.__vccOpts||o,l=a[t];return l&&Be(l,n,r,s,e)()}))))}}return i}function ze(e){return"object"===typeof e||"displayName"in e||"props"in e||"__vccOpts"in e}function He(e){const t=(0,r.f3)(c),n=(0,r.f3)(u),s=(0,i.Fl)((()=>t.resolve((0,i.SU)(e.to)))),o=(0,i.Fl)((()=>{const{matched:e}=s.value,{length:t}=e,r=e[t-1],i=n.matched;if(!r||!i.length)return-1;const o=i.findIndex(E.bind(null,r));if(o>-1)return o;const a=Ye(e[t-2]);return t>1&&Ye(r)===a&&i[i.length-1].path!==a?i.findIndex(E.bind(null,e[t-2])):o})),a=(0,i.Fl)((()=>o.value>-1&&Je(n.params,s.value.params))),l=(0,i.Fl)((()=>o.value>-1&&o.value===n.matched.length-1&&k(n.params,s.value.params)));function h(n={}){return Ge(n)?t[(0,i.SU)(e.replace)?"replace":"push"]((0,i.SU)(e.to)).catch(m):Promise.resolve()}return{route:s,href:(0,i.Fl)((()=>s.value.href)),isActive:a,isExactActive:l,navigate:h}}const Ke=(0,r.aZ)({name:"RouterLink",props:{to:{type:[String,Object],required:!0},replace:Boolean,activeClass:String,exactActiveClass:String,custom:Boolean,ariaCurrentValue:{type:String,default:"page"}},useLink:He,setup(e,{slots:t}){const n=(0,i.qj)(He(e)),{options:s}=(0,r.f3)(c),o=(0,i.Fl)((()=>({[Xe(e.activeClass,s.linkActiveClass,"router-link-active")]:n.isActive,[Xe(e.exactActiveClass,s.linkExactActiveClass,"router-link-exact-active")]:n.isExactActive})));return()=>{const i=t.default&&t.default(n);return e.custom?i:(0,r.h)("a",{"aria-current":n.isExactActive?e.ariaCurrentValue:null,href:n.href,onClick:n.navigate,class:o.value},i)}}}),We=Ke;function Ge(e){if(!(e.metaKey||e.altKey||e.ctrlKey||e.shiftKey)&&!e.defaultPrevented&&(void 0===e.button||0===e.button)){if(e.currentTarget&&e.currentTarget.getAttribute){const t=e.currentTarget.getAttribute("target");if(/\b_blank\b/i.test(t))return}return e.preventDefault&&e.preventDefault(),!0}}function Je(e,t){for(const n in t){const r=t[n],i=e[n];if("string"===typeof r){if(r!==i)return!1}else if(!Array.isArray(i)||i.length!==r.length||r.some(((e,t)=>e!==i[t])))return!1}return!0}function Ye(e){return e?e.aliasOf?e.aliasOf.path:e.path:""}const Xe=(e,t,n)=>null!=e?e:null!=t?t:n,Ze=(0,r.aZ)({name:"RouterView",inheritAttrs:!1,props:{name:{type:String,default:"default"},route:Object},setup(e,{attrs:t,slots:n}){const s=(0,r.f3)(h),o=(0,i.Fl)((()=>e.route||s.value)),c=(0,r.f3)(l,0),u=(0,i.Fl)((()=>o.value.matched[c]));(0,r.JJ)(l,c+1),(0,r.JJ)(a,u),(0,r.JJ)(h,o);const d=(0,i.iH)();return(0,r.YP)((()=>[d.value,u.value,e.name]),(([e,t,n],[r,i,s])=>{t&&(t.instances[n]=e,i&&i!==t&&e&&e===r&&(t.leaveGuards.size||(t.leaveGuards=i.leaveGuards),t.updateGuards.size||(t.updateGuards=i.updateGuards))),!e||!t||i&&E(t,i)&&r||(t.enterCallbacks[n]||[]).forEach((t=>t(e)))}),{flush:"post"}),()=>{const i=o.value,s=u.value,a=s&&s.components[e.name],l=e.name;if(!a)return Qe(n.default,{Component:a,route:i});const c=s.props[e.name],h=c?!0===c?i.params:"function"===typeof c?c(i):c:null,f=e=>{e.component.isUnmounted&&(s.instances[l]=null)},g=(0,r.h)(a,p({},h,t,{onVnodeUnmounted:f,ref:d}));return Qe(n.default,{Component:g,route:i})||g}}});function Qe(e,t){if(!e)return null;const n=e(t);return 1===n.length?n[0]:n}const et=Ze;function tt(e){const t=ue(e.routes,e),n=e.parseQuery||qe,s=e.stringifyQuery||Ve,o=e.history;const a=je(),l=je(),f=je(),v=(0,i.XI)(J);let y=J;d&&e.scrollBehavior&&"scrollRestoration"in history&&(history.scrollRestoration="manual");const _=g.bind(null,(e=>""+e)),E=g.bind(null,Fe),k=g.bind(null,Me);function I(e,n){let r,i;return G(e)?(r=t.getRecordMatcher(e),i=n):i=e,t.addRoute(i,r)}function S(e){const n=t.getRecordMatcher(e);n&&t.removeRoute(n)}function C(){return t.getRoutes().map((e=>e.record))}function x(e){return!!t.getRecordMatcher(e)}function R(e,r){if(r=p({},r||v.value),"string"===typeof e){const i=w(n,e,r.path),s=t.resolve({path:i.path},r),a=o.createHref(i.fullPath);return p(i,s,{params:k(s.params),hash:Me(i.hash),redirectedFrom:void 0,href:a})}let i;if("path"in e)i=p({},e,{path:w(n,e.path,r.path).path});else{const t=p({},e.params);for(const e in t)null==t[e]&&delete t[e];i=p({},e,{params:E(e.params)}),r.params=E(r.params)}const a=t.resolve(i,r),l=e.hash||"";a.params=_(k(a.params));const c=b(s,p({},e,{hash:Ne(l),path:a.path})),u=o.createHref(c);return p({fullPath:c,hash:l,query:s===Ve?Ue(e.query):e.query||{}},a,{redirectedFrom:void 0,href:u})}function O(e){return"string"===typeof e?w(n,e,v.value.path):p({},e)}function N(e,t){if(y!==e)return Z(8,{from:t,to:e})}function L(e){return j(e)}function M(e){return L(p(O(e),{replace:!0}))}function U(e){const t=e.matched[e.matched.length-1];if(t&&t.redirect){const{redirect:n}=t;let r="function"===typeof n?n(e):n;return"string"===typeof r&&(r=r.includes("?")||r.includes("#")?r=O(r):{path:r},r.params={}),p({query:e.query,hash:e.hash,params:e.params},r)}}function j(e,t){const n=y=R(e),r=v.value,i=e.state,o=e.force,a=!0===e.replace,l=U(n);if(l)return j(p(O(l),{state:i,force:o,replace:a}),t||n);const c=n;let u;return c.redirectedFrom=t,!o&&T(s,r,n)&&(u=Z(16,{to:c,from:r}),ie(r,r,!0,!1)),(u?Promise.resolve(u):$(c,r)).catch((e=>Q(e)?e:te(e,c,r))).then((e=>{if(e){if(Q(e,2))return j(p(O(e.to),{state:i,force:o,replace:a}),t||c)}else e=H(c,r,!0,a,i);return z(c,r,e),e}))}function B(e,t){const n=N(e,t);return n?Promise.reject(n):Promise.resolve()}function $(e,t){let n;const[r,i,s]=rt(e,t);n=$e(r.reverse(),"beforeRouteLeave",e,t);for(const a of r)a.leaveGuards.forEach((r=>{n.push(Be(r,e,t))}));const o=B.bind(null,e,t);return n.push(o),nt(n).then((()=>{n=[];for(const r of a.list())n.push(Be(r,e,t));return n.push(o),nt(n)})).then((()=>{n=$e(i,"beforeRouteUpdate",e,t);for(const r of i)r.updateGuards.forEach((r=>{n.push(Be(r,e,t))}));return n.push(o),nt(n)})).then((()=>{n=[];for(const r of e.matched)if(r.beforeEnter&&!t.matched.includes(r))if(Array.isArray(r.beforeEnter))for(const i of r.beforeEnter)n.push(Be(i,e,t));else n.push(Be(r.beforeEnter,e,t));return n.push(o),nt(n)})).then((()=>(e.matched.forEach((e=>e.enterCallbacks={})),n=$e(s,"beforeRouteEnter",e,t),n.push(o),nt(n)))).then((()=>{n=[];for(const r of l.list())n.push(Be(r,e,t));return n.push(o),nt(n)})).catch((e=>Q(e,8)?e:Promise.reject(e)))}function z(e,t,n){for(const r of f.list())r(e,t,n)}function H(e,t,n,r,i){const s=N(e,t);if(s)return s;const a=t===J,l=d?history.state:{};n&&(r||a?o.replace(e.fullPath,p({scroll:a&&l&&l.scroll},i)):o.push(e.fullPath,i)),v.value=e,ie(e,t,n,a),re()}let K;function W(){K=o.listen(((e,t,n)=>{const r=R(e),i=U(r);if(i)return void j(p(i,{replace:!0}),r).catch(m);y=r;const s=v.value;d&&q(F(s.fullPath,n.delta),P()),$(r,s).catch((e=>Q(e,12)?e:Q(e,2)?(j(e.to,r).then((e=>{Q(e,20)&&!n.delta&&n.type===A.pop&&o.go(-1,!1)})).catch(m),Promise.reject()):(n.delta&&o.go(-n.delta,!1),te(e,r,s)))).then((e=>{e=e||H(r,s,!1),e&&(n.delta?o.go(-n.delta,!1):n.type===A.pop&&Q(e,20)&&o.go(-1,!1)),z(r,s,e)})).catch(m)}))}let Y,X=je(),ee=je();function te(e,t,n){re(e);const r=ee.list();return r.length?r.forEach((r=>r(e,t,n))):console.error(e),Promise.reject(e)}function ne(){return Y&&v.value!==J?Promise.resolve():new Promise(((e,t)=>{X.add([e,t])}))}function re(e){Y||(Y=!0,W(),X.list().forEach((([t,n])=>e?n(e):t())),X.reset())}function ie(t,n,i,s){const{scrollBehavior:o}=e;if(!d||!o)return Promise.resolve();const a=!i&&V(F(t.fullPath,0))||(s||!i)&&history.state&&history.state.scroll||null;return(0,r.Y3)().then((()=>o(t,n,a))).then((e=>e&&D(e))).catch((e=>te(e,t,n)))}const se=e=>o.go(e);let oe;const ae=new Set,le={currentRoute:v,addRoute:I,removeRoute:S,hasRoute:x,getRoutes:C,resolve:R,options:e,push:L,replace:M,go:se,back:()=>se(-1),forward:()=>se(1),beforeEach:a.add,beforeResolve:l.add,afterEach:f.add,onError:ee.add,isReady:ne,install(e){const t=this;e.component("RouterLink",We),e.component("RouterView",et),e.config.globalProperties.$router=t,Object.defineProperty(e.config.globalProperties,"$route",{enumerable:!0,get:()=>(0,i.SU)(v)}),d&&!oe&&v.value===J&&(oe=!0,L(o.location).catch((e=>{0})));const n={};for(const s in J)n[s]=(0,i.Fl)((()=>v.value[s]));e.provide(c,t),e.provide(u,(0,i.qj)(n)),e.provide(h,v);const r=e.unmount;ae.add(e),e.unmount=function(){ae.delete(e),ae.size<1&&(y=J,K&&K(),v.value=J,oe=!1,Y=!1),r()}}};return le}function nt(e){return e.reduce(((e,t)=>e.then((()=>t()))),Promise.resolve())}function rt(e,t){const n=[],r=[],i=[],s=Math.max(t.matched.length,e.matched.length);for(let o=0;o<s;o++){const s=t.matched[o];s&&(e.matched.find((e=>E(e,s)))?r.push(s):n.push(s));const a=e.matched[o];a&&(t.matched.find((e=>E(e,a)))||i.push(a))}return[n,r,i]}function it(){return(0,r.f3)(c)}function st(){return(0,r.f3)(u)}},9036:(e,t,n)=>{"use strict";n.d(t,{Jn:()=>K,qX:()=>B,Xd:()=>j,Mq:()=>G,ZF:()=>W,KN:()=>J});var r=n(4676),i=n(1492),s=n(5479);
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
class o{constructor(e){this.container=e}getPlatformInfoString(){const e=this.container.getProviders();return e.map((e=>{if(a(e)){const t=e.getImmediate();return`${t.library}/${t.version}`}return null})).filter((e=>e)).join(" ")}}function a(e){const t=e.getComponent();return"VERSION"===(null===t||void 0===t?void 0:t.type)}const l="@firebase/app",c="0.7.11",u=new i.Yd("@firebase/app"),h="@firebase/app-compat",d="@firebase/analytics-compat",f="@firebase/analytics",p="@firebase/app-check-compat",g="@firebase/app-check",m="@firebase/auth",v="@firebase/auth-compat",y="@firebase/database",w="@firebase/database-compat",b="@firebase/functions",_="@firebase/functions-compat",T="@firebase/installations",E="@firebase/installations-compat",k="@firebase/messaging",I="@firebase/messaging-compat",S="@firebase/performance",C="@firebase/performance-compat",A="@firebase/remote-config",x="@firebase/remote-config-compat",R="@firebase/storage",O="@firebase/storage-compat",N="@firebase/firestore",L="@firebase/firestore-compat",P="firebase",D="9.6.1",F="[DEFAULT]",M={[l]:"fire-core",[h]:"fire-core-compat",[f]:"fire-analytics",[d]:"fire-analytics-compat",[g]:"fire-app-check",[p]:"fire-app-check-compat",[m]:"fire-auth",[v]:"fire-auth-compat",[y]:"fire-rtdb",[w]:"fire-rtdb-compat",[b]:"fire-fn",[_]:"fire-fn-compat",[T]:"fire-iid",[E]:"fire-iid-compat",[k]:"fire-fcm",[I]:"fire-fcm-compat",[S]:"fire-perf",[C]:"fire-perf-compat",[A]:"fire-rc",[x]:"fire-rc-compat",[R]:"fire-gcs",[O]:"fire-gcs-compat",[N]:"fire-fst",[L]:"fire-fst-compat","fire-js":"fire-js",[P]:"fire-js-all"},q=new Map,V=new Map;function U(e,t){try{e.container.addComponent(t)}catch(n){u.debug(`Component ${t.name} failed to register with FirebaseApp ${e.name}`,n)}}function j(e){const t=e.name;if(V.has(t))return u.debug(`There were multiple attempts to register component ${t}.`),!1;V.set(t,e);for(const n of q.values())U(n,e);return!0}function B(e,t){return e.container.getProvider(t)}
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
const $={["no-app"]:"No Firebase App '{$appName}' has been created - call Firebase App.initializeApp()",["bad-app-name"]:"Illegal App name: '{$appName}",["duplicate-app"]:"Firebase App named '{$appName}' already exists with different options or config",["app-deleted"]:"Firebase App named '{$appName}' already deleted",["invalid-app-argument"]:"firebase.{$appName}() takes either no argument or a Firebase App instance.",["invalid-log-argument"]:"First argument to `onLog` must be null or a function."},z=new s.LL("app","Firebase",$);
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
class H{constructor(e,t,n){this._isDeleted=!1,this._options=Object.assign({},e),this._config=Object.assign({},t),this._name=t.name,this._automaticDataCollectionEnabled=t.automaticDataCollectionEnabled,this._container=n,this.container.addComponent(new r.wA("app",(()=>this),"PUBLIC"))}get automaticDataCollectionEnabled(){return this.checkDestroyed(),this._automaticDataCollectionEnabled}set automaticDataCollectionEnabled(e){this.checkDestroyed(),this._automaticDataCollectionEnabled=e}get name(){return this.checkDestroyed(),this._name}get options(){return this.checkDestroyed(),this._options}get config(){return this.checkDestroyed(),this._config}get container(){return this._container}get isDeleted(){return this._isDeleted}set isDeleted(e){this._isDeleted=e}checkDestroyed(){if(this.isDeleted)throw z.create("app-deleted",{appName:this._name})}}
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
 */const K=D;function W(e,t={}){if("object"!==typeof t){const e=t;t={name:e}}const n=Object.assign({name:F,automaticDataCollectionEnabled:!1},t),i=n.name;if("string"!==typeof i||!i)throw z.create("bad-app-name",{appName:String(i)});const o=q.get(i);if(o){if((0,s.vZ)(e,o.options)&&(0,s.vZ)(n,o.config))return o;throw z.create("duplicate-app",{appName:i})}const a=new r.H0(i);for(const r of V.values())a.addComponent(r);const l=new H(e,n,a);return q.set(i,l),l}function G(e=F){const t=q.get(e);if(!t)throw z.create("no-app",{appName:e});return t}function J(e,t,n){var i;let s=null!==(i=M[e])&&void 0!==i?i:e;n&&(s+=`-${n}`);const o=s.match(/\s|\//),a=t.match(/\s|\//);if(o||a){const e=[`Unable to register library "${s}" with version "${t}":`];return o&&e.push(`library name "${s}" contains illegal characters (whitespace or "/")`),o&&a&&e.push("and"),a&&e.push(`version name "${t}" contains illegal characters (whitespace or "/")`),void u.warn(e.join(" "))}j(new r.wA(`${s}-version`,(()=>({library:s,version:t})),"VERSION"))}
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
function Y(e){j(new r.wA("platform-logger",(e=>new o(e)),"PRIVATE")),J(l,c,e),J(l,c,"esm2017"),J("fire-js","")}Y("")},4676:(e,t,n)=>{"use strict";n.d(t,{wA:()=>i,H0:()=>c});var r=n(5479);class i{constructor(e,t,n){this.name=e,this.instanceFactory=t,this.type=n,this.multipleInstances=!1,this.serviceProps={},this.instantiationMode="LAZY",this.onInstanceCreated=null}setInstantiationMode(e){return this.instantiationMode=e,this}setMultipleInstances(e){return this.multipleInstances=e,this}setServiceProps(e){return this.serviceProps=e,this}setInstanceCreatedCallback(e){return this.onInstanceCreated=e,this}}
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
 */class c{constructor(e){this.name=e,this.providers=new Map}addComponent(e){const t=this.getProvider(e.name);if(t.isComponentSet())throw new Error(`Component ${e.name} has already been registered with ${this.name}`);t.setComponent(e)}addOrOverwriteComponent(e){const t=this.getProvider(e.name);t.isComponentSet()&&this.providers.delete(e.name),this.addComponent(e)}getProvider(e){if(this.providers.has(e))return this.providers.get(e);const t=new o(e,this);return this.providers.set(e,t),t}getProviders(){return Array.from(this.providers.values())}}},1492:(e,t,n)=>{"use strict";n.d(t,{in:()=>i,Yd:()=>c});
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
const r=[];var i;(function(e){e[e["DEBUG"]=0]="DEBUG",e[e["VERBOSE"]=1]="VERBOSE",e[e["INFO"]=2]="INFO",e[e["WARN"]=3]="WARN",e[e["ERROR"]=4]="ERROR",e[e["SILENT"]=5]="SILENT"})(i||(i={}));const s={debug:i.DEBUG,verbose:i.VERBOSE,info:i.INFO,warn:i.WARN,error:i.ERROR,silent:i.SILENT},o=i.INFO,a={[i.DEBUG]:"log",[i.VERBOSE]:"log",[i.INFO]:"info",[i.WARN]:"warn",[i.ERROR]:"error"},l=(e,t,...n)=>{if(t<e.logLevel)return;const r=(new Date).toISOString(),i=a[t];if(!i)throw new Error(`Attempted to log a message with an invalid logType (value: ${t})`);console[i](`[${r}]  ${e.name}:`,...n)};class c{constructor(e){this.name=e,this._logLevel=o,this._logHandler=l,this._userLogHandler=null,r.push(this)}get logLevel(){return this._logLevel}set logLevel(e){if(!(e in i))throw new TypeError(`Invalid value "${e}" assigned to \`logLevel\``);this._logLevel=e}setLogLevel(e){this._logLevel="string"===typeof e?s[e]:e}get logHandler(){return this._logHandler}set logHandler(e){if("function"!==typeof e)throw new TypeError("Value assigned to `logHandler` must be a function");this._logHandler=e}get userLogHandler(){return this._userLogHandler}set userLogHandler(e){this._userLogHandler=e}debug(...e){this._userLogHandler&&this._userLogHandler(this,i.DEBUG,...e),this._logHandler(this,i.DEBUG,...e)}log(...e){this._userLogHandler&&this._userLogHandler(this,i.VERBOSE,...e),this._logHandler(this,i.VERBOSE,...e)}info(...e){this._userLogHandler&&this._userLogHandler(this,i.INFO,...e),this._logHandler(this,i.INFO,...e)}warn(...e){this._userLogHandler&&this._userLogHandler(this,i.WARN,...e),this._logHandler(this,i.WARN,...e)}error(...e){this._userLogHandler&&this._userLogHandler(this,i.ERROR,...e),this._logHandler(this,i.ERROR,...e)}}}}]);
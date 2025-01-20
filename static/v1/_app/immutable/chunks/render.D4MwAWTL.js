import{Y as W,z as p,as as x,az as B,aJ as L,ak as E,ad as z,aC as A,v as M,l as R,x as U,ar as K,y as X,aK as Z,aL as $,aI as T,F as w,C as k,K as m,aM as N,aN as O,A as ee,aB as te,aO as ne,aP as oe,av as ae,aQ as re,I as se,p as ue,a as ce,c as ie}from"./index-client.CGppiJvc.js";import{d as le}from"./disclose-version.DZhRUPAc.js";function de(e){return e.endsWith("capture")&&e!=="gotpointercapture"&&e!=="lostpointercapture"}const fe=["beforeinput","click","change","dblclick","contextmenu","focusin","focusout","input","keydown","keyup","mousedown","mousemove","mouseout","mouseover","mouseup","pointerdown","pointermove","pointerout","pointerover","pointerup","touchend","touchmove","touchstart"];function ve(e){return fe.includes(e)}const pe={formnovalidate:"formNoValidate",ismap:"isMap",nomodule:"noModule",playsinline:"playsInline",readonly:"readOnly",defaultvalue:"defaultValue",defaultchecked:"defaultChecked",srcobject:"srcObject"};function me(e){return e=e.toLowerCase(),pe[e]??e}const he=["touchstart","touchmove"];function _e(e){return he.includes(e)}function we(e,t){if(t){const n=document.body;e.autofocus=!0,W(()=>{document.activeElement===n&&e.focus()})}}function ye(e){p&&x(e)!==null&&B(e)}let D=!1;function J(){D||(D=!0,document.addEventListener("reset",e=>{Promise.resolve().then(()=>{var t;if(!e.defaultPrevented)for(const n of e.target.elements)(t=n.__on_r)==null||t.call(n)})},{capture:!0}))}function ge(e,t,n,a=!0){a&&n();for(var r of t)e.addEventListener(r,n);z(()=>{for(var o of t)e.removeEventListener(o,n)})}function P(e){var t=A,n=M;L(null),E(null);try{return e()}finally{L(t),E(n)}}function be(e,t,n,a=n){e.addEventListener(t,()=>P(n));const r=e.__on_r;r?e.__on_r=()=>{r(),a(!0)}:e.__on_r=()=>a(!0),J()}const Q=new Set,S=new Set;function Y(e,t,n,a){function r(o){if(a.capture||g.call(t,o),!o.cancelBubble)return P(()=>n.call(this,o))}return e.startsWith("pointer")||e.startsWith("touch")||e==="wheel"?W(()=>{t.addEventListener(e,r,a)}):t.addEventListener(e,r,a),r}function Le(e,t,n,a,r){var o={capture:a,passive:r},i=Y(e,t,n,o);(t===document.body||t===window||t===document)&&z(()=>{t.removeEventListener(e,i,o)})}function Ee(e){for(var t=0;t<e.length;t++)Q.add(e[t]);for(var n of S)n(e)}function g(e){var V;var t=this,n=t.ownerDocument,a=e.type,r=((V=e.composedPath)==null?void 0:V.call(e))||[],o=r[0]||e.target,i=0,h=e.__root;if(h){var f=r.indexOf(h);if(f!==-1&&(t===document||t===window)){e.__root=t;return}var _=r.indexOf(t);if(_===-1)return;f<=_&&(i=f)}if(o=r[i]||e.target,o!==t){R(e,"currentTarget",{configurable:!0,get(){return o||n}});var C=A,l=M;L(null),E(null);try{for(var s,u=[];o!==null;){var d=o.assignedSlot||o.parentNode||o.host||null;try{var v=o["__"+a];if(v!==void 0&&!o.disabled)if(U(v)){var[G,...H]=v;G.apply(o,[e,...H])}else v.call(o,e)}catch(b){s?u.push(b):s=b}if(e.cancelBubble||d===t||d===null)break;o=d}if(s){for(let b of u)queueMicrotask(()=>{throw b});throw s}}finally{e.__root=t,delete e.currentTarget,L(C),E(l)}}}let c;function ke(){c=void 0}function Ce(e){let t=null,n=p;var a;if(p){for(t=m,c===void 0&&(c=x(document.head));c!==null&&(c.nodeType!==8||c.data!==$);)c=T(c);c===null?w(!1):c=k(T(c))}p||(a=document.head.appendChild(K()));try{X(()=>e(a),Z)}finally{n&&(w(!0),c=m,k(t))}}let j=!0;function xe(e,t){var n=t==null?"":typeof t=="object"?t+"":t;n!==(e.__t??(e.__t=e.nodeValue))&&(e.__t=n,e.nodeValue=n==null?"":n+"")}function q(e,t){return F(e,t)}function Me(e,t){N(),t.intro=t.intro??!1;const n=t.target,a=p,r=m;try{for(var o=x(n);o&&(o.nodeType!==8||o.data!==$);)o=T(o);if(!o)throw O;w(!0),k(o),ee();const i=F(e,{...t,anchor:o});if(m===null||m.nodeType!==8||m.data!==te)throw ne(),O;return w(!1),i}catch(i){if(i===O)return t.recover===!1&&oe(),N(),B(n),w(!1),q(e,t);throw i}finally{w(a),k(r),ke()}}const y=new Map;function F(e,{target:t,anchor:n,props:a={},events:r,context:o,intro:i=!0}){N();var h=new Set,f=l=>{for(var s=0;s<l.length;s++){var u=l[s];if(!h.has(u)){h.add(u);var d=_e(u);t.addEventListener(u,g,{passive:d});var v=y.get(u);v===void 0?(document.addEventListener(u,g,{passive:d}),y.set(u,1)):y.set(u,v+1)}}};f(ae(Q)),S.add(f);var _=void 0,C=re(()=>{var l=n??t.appendChild(K());return se(()=>{if(o){ue({});var s=ie;s.c=o}r&&(a.$$events=r),p&&le(l,null),j=i,_=e(l,a)||{},j=!0,p&&(M.nodes_end=m),o&&ce()}),()=>{var d;for(var s of h){t.removeEventListener(s,g);var u=y.get(s);--u===0?(document.removeEventListener(s,g),y.delete(s)):y.set(s,u)}S.delete(f),l!==n&&((d=l.parentNode)==null||d.removeChild(l))}});return I.set(_,C),_}let I=new WeakMap;function Te(e,t){const n=I.get(e);return n?(I.delete(e),n(t)):Promise.resolve()}export{Me as a,J as b,Y as c,Ee as d,Le as e,we as f,ve as g,Ce as h,de as i,j,ge as k,be as l,q as m,me as n,ye as r,xe as s,Te as u,P as w};

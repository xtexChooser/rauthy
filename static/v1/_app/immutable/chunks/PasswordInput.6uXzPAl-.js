import{a as m,n as A,b as j}from"./disclose-version.DZhRUPAc.js";import{a2 as f,p as aa,a7 as oa,a3 as l,n as ra,a5 as n,a1 as k,a as ea}from"./index-client.CGppiJvc.js";import{d as ta,e as I,s as sa}from"./render.D4MwAWTL.js";import{i as V}from"./if.DUA6Hpfn.js";import{s as ia}from"./snippet.xhmr1ywJ.js";import{s as t,e as la,g as na,t as da,b as va}from"./Loading.FF_EHyHU.js";import{y as u}from"./dataFetching.Dto1xJW6.js";import{b as ca}from"./this.B23tdsYu.js";import{p as r,r as pa}from"./props.Df_pGDSd.js";import{g as ha}from"./helpers.DVmWh-6p.js";var ma=A('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M8.25 7.5V6.108c0-1.135.845-2.098 1.976-2.192.373-.03.748-.057 1.123-.08M15.75 18H18a2.25 2.25 0 002.25-2.25V6.108c0-1.135-.845-2.098-1.976-2.192a48.424 48.424 0 00-1.123-.08M15.75 18.75v-1.875a3.375 3.375 0 00-3.375-3.375h-1.5a1.125 1.125 0 01-1.125-1.125v-1.5A3.375 3.375 0 006.375 7.5H5.25m11.9-3.664A2.251 2.251 0 0015 2.25h-1.5a2.251 2.251 0 00-2.15 1.586m5.8 0c.065.21.1.433.1.664v.75h-6V4.5c0-.231.035-.454.1-.664M6.75 7.5H4.875c-.621 0-1.125.504-1.125 1.125v12c0 .621.504 1.125 1.125 1.125h9.75c.621 0 1.125-.504 1.125-1.125V16.5a9 9 0 00-9-9z"></path></svg>');function W(c,a){let d=r(a,"opacity",3,.9),v=r(a,"width",3,20);var s=ma();t(s,"stroke-width",2),f(()=>{t(s,"width",v()),t(s,"opacity",d())}),m(c,s)}var ua=A('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M3.98 8.223A10.477 10.477 0 001.934 12C3.226 16.338 7.244 19.5 12 19.5c.993 0 1.953-.138 2.863-.395M6.228 6.228A10.45 10.45 0 0112 4.5c4.756 0 8.773 3.162 10.065 7.498a10.523 10.523 0 01-4.293 5.774M6.228 6.228L3 3m3.228 3.228l3.65 3.65m7.894 7.894L21 21m-3.228-3.228l-3.65-3.65m0 0a3 3 0 10-4.243-4.243m4.242 4.242L9.88 9.88"></path></svg>');function E(c,a){let d=r(a,"color",3,"var(--col-err)"),v=r(a,"opacity",3,.9),s=r(a,"width",3,24);var e=ua();t(e,"stroke-width",2),f(()=>{t(e,"width",s()),t(e,"color",d()),t(e,"opacity",v())}),m(c,e)}var wa=A('<svg fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" d="M2.036 12.322a1.012 1.012 0 010-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178z"></path><path stroke-linecap="round" stroke-linejoin="round" d="M15 12a3 3 0 11-6 0 3 3 0 016 0z"></path></svg>');function P(c,a){let d=r(a,"color",3,"var(--col-ok)"),v=r(a,"opacity",3,.9),s=r(a,"width",3,24);var e=wa();t(e,"stroke-width",2),f(()=>{t(e,"width",s()),t(e,"color",d()),t(e,"opacity",v())}),m(c,e)}var ba=j('<div role="button" tabindex="0" class="btn clip svelte-6ql6gz"><!></div>'),fa=j('<div class="rel svelte-6ql6gz"><div class="err font-label svelte-6ql6gz"> </div></div>'),ga=j('<div class="container svelte-6ql6gz"><div class="label svelte-6ql6gz"><div class="labelInner font-label noselect svelte-6ql6gz"><label><!></label></div></div> <input> <div class="rel svelte-6ql6gz"><!> <div role="button" tabindex="0" class="btn show svelte-6ql6gz"><!></div></div> <!></div>');function ka(c,a){aa(a,!0);let d=r(a,"bindThis",15,void 0),v=r(a,"name",19,ha),s=r(a,"disabled",3,!1),e=r(a,"error",3,""),_=r(a,"showCopy",3,!1),y=r(a,"value",15,""),x=r(a,"width",3,"250px"),D=r(a,"maxWidth",3,"inherit"),F=r(a,"autocomplete",3,"current-password"),w=r(a,"type",15,"password"),J=pa(a,["$$slots","$$events","$$legacy","bindThis","name","disabled","error","showCopy","value","width","maxWidth","autocomplete","type","children"]);const z=oa();function K(o){o.code==="Enter"?z("enter",!0):z("keypress",!0)}function O(){z("blur",!0)}function B(){navigator.clipboard.writeText(y())}function H(){w()==="password"?w("text"):w("password")}function R(o){y(o.target.value)}var b=ga(),q=l(b),M=l(q),C=l(M),S=l(C);ia(S,()=>a.children??ra),n(C),n(M),n(q);var p=k(q,2);la(p);let L;ca(p,o=>d(o),()=>d());var $=k(p,2),T=l($);{var X=o=>{var i=ba();i.__click=B;var h=l(i);W(h,{}),n(i),I("keypress",i,B),m(o,i)};V(T,o=>{_()&&o(X)})}var g=k(T,2);g.__click=H;var Y=l(g);{var Z=o=>{E(o,{width:22})},G=o=>{P(o,{width:22})};V(Y,o=>{w()==="password"?o(Z):o(G,!1)})}n(g),n($);var N=k($,2);{var Q=o=>{var i=fa(),h=l(i),U=l(h,!0);n(h),n(i),f(()=>{u(h,"width",x()),sa(U,e())}),da(7,h,()=>va,()=>({duration:250})),m(o,i)};V(N,o=>{e()&&o(Q)})}n(b),f(()=>{u(b,"width",`calc(${x()??""} + 12px)`),u(b,"max-width",D()),u(M,"background",s()?"var(--col-gmid)":"var(--col-bg)"),t(C,"for",v()),L=na(p,L,{type:w(),name:v(),disabled:s(),value:y(),autocomplete:F(),...J,oninput:R,onkeypress:K,onblur:O},"svelte-6ql6gz"),u(p,"width",x()),u(p,"padding-right",_()?"45px":"25px")}),I("keypress",g,H),m(c,b),ea()}ta(["click"]);export{E as I,ka as P,P as a,W as b};

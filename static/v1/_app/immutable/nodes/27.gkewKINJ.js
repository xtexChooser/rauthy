import{a as t,b as $,c as _,t as Q}from"../chunks/disclose-version.DZhRUPAc.js";import{p as O,o as z,a1 as A,a0 as m,a as B,j as o,g as c,_ as b,n as S,$ as U,a3 as F,a4 as Y,a5 as G,a2 as q}from"../chunks/index-client.CGppiJvc.js";import{h as D,s as I}from"../chunks/render.D4MwAWTL.js";import{i as k}from"../chunks/if.DUA6Hpfn.js";import{p}from"../chunks/proxy.DB4Km9hY.js";import{g as J,Q as K,S as V,T as X}from"../chunks/dataFetching.Dto1xJW6.js";import{W as Z}from"../chunks/WebauthnRequest.CHVZELhw.js";import{s as aa}from"../chunks/snippet.xhmr1ywJ.js";import{L as ea}from"../chunks/LangSelector.mSh8cV6Q.js";import{B as oa}from"../chunks/Button.BH2_dPry.js";import{u as sa}from"../chunks/i18n.svelte.BTGsPiz_.js";var ta=$("<div><h2>Cookies disabled</h2> <p>You need to enable Cookies.<br> Without them, a safe login cannot be executed.</p></div>"),ra=$("<noscript></noscript> <!>",1);function ia(j,g){O(g,!0);let x=b(!1),u=b(!1);z(()=>{o(u,p(navigator.cookieEnabled)),o(x,!0)});var s=ra(),n=A(m(s),2);{var y=h=>{var a=_(),C=m(a);{var e=i=>{var l=_(),R=m(l);aa(R,()=>g.children??S),t(i,l)},r=i=>{var l=ta();t(i,l)};k(C,i=>{c(u)?i(e):i(r,!1)})}t(h,a)};k(n,h=>{c(x)&&h(y)})}t(j,s),B()}var na=$('<div class="btn flex-col svelte-1dkpwyo"><!></div>'),ca=$('<div class="error svelte-1dkpwyo"> </div>'),la=$("<!> <!>",1);function va(j,g){O(g,!0);let x=sa(),u=b(!1),s=b(""),n=b(void 0);z(async()=>{const a=J();if(a.error){o(s,`${a.error}: ${a.error_description}`);return}let C={state:a.state,code:a.code,pkce_verifier:K(),xsrf_token:V()},e=await X(C);if(e.status===202)window.location.replace(e.headers.get("location"));else if(e.status===200)o(s,""),o(n,p(await e.json()));else if(e.status===204)window.location.replace("/auth/v1/account");else if(e.status===403){let r=await e.json();console.error(r),o(s,p(r.message))}else if(e.status===406)o(s,p(x.authorize.clientForceMfa)),o(u,!0);else{let r=await e.text();o(s,`HTTP ${e.status}: ${r}`)}});function y(a){o(s,p(a||"ERROR")),o(n,void 0)}function h(a){a&&window.location.replace(a.loc)}D(a=>{U.title="Callback"}),ia(j,{children:(a,C)=>{var e=la(),r=m(e);{var i=v=>{Z(v,{onSuccess:h,onError:y,get data(){return c(n)},set data(E){o(n,p(E))}})},l=v=>{var E=_(),H=m(E);{var M=d=>{var f=na(),W=F(f);oa(W,{$$events:{click:()=>window.location.href="/auth/v1/account"},children:(L,T)=>{Y();var w=Q("ACCOUNT LOGIN");t(L,w)},$$slots:{default:!0}}),G(f),t(d,f)},N=d=>{var f=_(),W=m(f);{var L=T=>{var w=ca(),P=F(w,!0);G(w),q(()=>I(P,c(s))),t(T,w)};k(W,T=>{c(s)&&T(L)},!0)}t(d,f)};k(H,d=>{c(u)?d(M):d(N,!1)},!0)}t(v,E)};k(r,v=>{c(n)?v(i):v(l,!1)})}var R=A(r,2);ea(R,{absolute:!0}),t(a,e)},$$slots:{default:!0}}),B()}export{va as component};
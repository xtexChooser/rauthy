import{c as w,a as o,b as d}from"./disclose-version.DZhRUPAc.js";import{p as h,o as A,j as i,a0 as $,g as t,a as x,_ as p,a3 as v,a5 as l,a2 as u}from"./index-client.CGppiJvc.js";import{s as _}from"./render.D4MwAWTL.js";import{i as B}from"./if.DUA6Hpfn.js";import{s as C}from"./Loading.FF_EHyHU.js";import{p as m}from"./proxy.DB4Km9hY.js";import{j as D}from"./dataFetching.Dto1xJW6.js";var L=d('<div class="ver upd svelte-zcqypp"><a target="_blank" class="svelte-zcqypp"> </a></div>'),M=d('<div class="ver svelte-zcqypp"> </div>');function U(y,j){h(j,!0);let e=p(""),c=p(!1),f=p("");A(()=>{q()});async function q(){let s=await D();if(s.ok){let a=await s.json();i(e,m(a.current)),a.last_check,a.latest,i(f,m(a.latest_url)),i(c,m(a.update_available))}}var n=w(),z=$(n);{var b=s=>{var a=L(),r=v(a),k=v(r);l(r),l(a),u(()=>{C(r,"href",t(f)),_(k,`v${t(e)??""}\u26A0\uFE0F`)}),o(s,a)},g=s=>{var a=M(),r=v(a);l(a),u(()=>_(r,`v${t(e)??""}`)),o(s,a)};B(z,s=>{t(c)?s(b):s(g,!1)})}o(y,n),x()}export{U as A};
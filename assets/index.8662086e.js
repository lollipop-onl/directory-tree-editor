import{r as S,p as B,g as D,o as G,d as w,w as J,a as k,c as $,k as M,b as _,e as b,u as g,i as Q,f as R,n as U,h as W,j as X,l as I,m as u,t as Y,q as K,s as Z,v as ee}from"./vendor.c14e1ed1.js";const te=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const r of s.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerpolicy&&(s.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?s.credentials="include":e.crossorigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function t(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}};te();var oe="/assets/logo.9cd6f5e5.svg";const V=()=>{const i=S(""),o=t=>{i.value=t;const e=B.deflate(t),s=D.fromUint8Array(e,!0);window.history.replaceState(null,"",`#${s}`)},n=()=>{try{const t=window.location.hash.replace(/^#/,"").trim(),e=D.toUint8Array(t);return B.inflate(e,{to:"string"})||""}catch{return""}};return G(()=>{i.value=n()}),{state:i,commit:o}},se=["value","placeholder","readonly"],O=w({props:{value:null,scrollPosition:null,readOnly:{type:Boolean,default:!1},placeholder:null},emits:["update:scrollPosition","update:value"],setup(i,{emit:o}){const n=i,t=S(),e=()=>new Promise(l=>requestAnimationFrame(()=>l())),s=l=>{const d=/^ +/.exec(l);return(d==null?void 0:d[0].length)||0},r=l=>{l.target instanceof HTMLTextAreaElement&&o("update:scrollPosition",l.target.scrollTop)},a=l=>{l.target instanceof HTMLTextAreaElement&&o("update:value",l.target.value)},c=async l=>{const{target:d}=l;if(n.readOnly||!(d instanceof HTMLTextAreaElement))return;const{value:v}=d;let{selectionStart:E,selectionEnd:T}=d;const A=v.substring(0,E).split(`
`).length-1,F=v.substring(0,T).split(`
`).length-1;if(M.isEventKey(l,"tab")){l.preventDefault();const h=v.split(`
`).map((p,m)=>{if(m<A||m>F)return p;const y=/^ +/.exec(p),f=((y==null?void 0:y[0].length)||0)%2?1:2;return l.shiftKey?y?(E-=m===A?f:0,T-=f,p.substring(f)):p:(E+=m===A?f:0,T+=f,[" ".repeat(f),p].join(""))});o("update:value",h.join(`
`)),await e(),d.setSelectionRange(E,T);return}if(M.isEventKey(l,"enter")){if(await e(),!t.value)return;const{value:h}=t.value;let{selectionStart:p,selectionEnd:m}=t.value;if(p!==m)return;const y=s(h.split(`
`)[A]),f=h.substring(0,p).split(`
`).length-1,C=s(h.split(`
`)[f]),x=y-C;if(x===0)return;const H=h.split(`
`).map((j,q)=>q!==f?j:x>0?[" ".repeat(x),j].join(""):j.substring(x));o("update:value",H.join(`
`)),await e(),t.value.setSelectionRange(p+x+C,m+x+C);return}};return J(()=>n.scrollPosition,l=>{t.value&&t.value.scrollTop!==l&&t.value.scrollTo({top:l})},{immediate:!0}),(l,d)=>(k(),$("textarea",{ref_key:"textarea",ref:t,value:n.value,class:"resize-none scroll-p-8 overflow-scroll py-5 px-8 font-mono text-sm leading-relaxed text-black outline-none",wrap:"off",spellcheck:"false",placeholder:n.placeholder,readonly:n.readOnly,onScroll:r,onInput:a,onKeydown:c},null,40,se))}}),P=i=>{var o;return Math.floor((((o=/^ +/.exec(i))==null?void 0:o[0].length)||0)/2)},L=i=>{const o=i.split(/\n|\r\n/);return o.map((n,t)=>{const e=n.replace(/^(?: |\t)+/,""),s=P(n);let r="";for(let a=1;a<=s;a++){let c=1/0;for(let l=t+1;l<o.length;l++){const d=o[l],v=P(d);if(v<a)break;c=Math.min(c,v)}a===s&&!/^#/.test(e)?r+=c<=a?"\u251C\u2500\u2500 ":"\u2514\u2500\u2500 ":r+=c<=a?"\u2502   ":"    "}return`${r}${e}`}).join(`
`)},ne={class:"grid min-h-full grid-rows-2 gap-2 overflow-y-auto text-white md:grid-cols-2 md:grid-rows-1"},le=w({setup(i){const o=`.
  # Assets files
  /assets
    /images
    /css
    /fonts
  # Vue components
  /components
    /Atoms
    /Molecules
    /Organisms
  # Page components
  /containers
    ...
  # Utilities
  /utils
    # Entry file
    index.ts
    ...
  # Node.js packages
  /node_modules
  # Node.js configuration file
  package.json
  # Documentation (this file)
  README.md`,n=V(),t=S(0),e=_({get(){return n.state.value},set(r){n.commit(r)}}),s=_(()=>L(e.value));return(r,a)=>(k(),$("div",ne,[b(O,{value:g(e),"onUpdate:value":a[0]||(a[0]=c=>Q(e)?e.value=c:null),"scroll-position":t.value,"onUpdate:scroll-position":a[1]||(a[1]=c=>t.value=c),placeholder:o},null,8,["value","scroll-position"]),b(O,{"scroll-position":t.value,"onUpdate:scroll-position":a[2]||(a[2]=c=>t.value=c),value:g(s),placeholder:g(L)(o),"read-only":""},null,8,["scroll-position","value","placeholder"])]))}}),re=w({props:{active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["click"],setup(i,{emit:o}){const n=i;return(t,e)=>(k(),$("button",{class:U(["rounded-md border border-stone-400 px-2 py-1 font-mono text-xs text-stone-400 transition",{"border-stone-100 text-stone-100":n.active,"hover:border-stone-100 hover:text-stone-100":!n.disabled}]),onClick:e[0]||(e[0]=W(s=>o("click"),["prevent"]))},[R(t.$slots,"default")],2))}}),ae={class:"relative block"},N=w({props:{data:null,disabled:{type:Boolean,default:!1}},setup(i){const o=i,n=S(!1);let t=-1;const e=async()=>{window.clearTimeout(t),await navigator.clipboard.writeText(o.data),n.value=!0,t=window.setTimeout(()=>{n.value=!1},1500)};return(s,r)=>(k(),X(re,{active:n.value,disabled:o.disabled,onClick:e},{default:I(()=>[u("span",ae,[u("span",{class:U(["absolute inset-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 bg-stone-900 opacity-0 transition",{"opacity-100":n.value}])}," Copied! ",2),R(s.$slots,"default")])]),_:3},8,["active","disabled"]))}}),ie={class:"flex h-full w-full flex-col overflow-hidden bg-stone-900 px-4 md:px-6"},ce={class:"flex h-16 flex-shrink-0 items-center space-x-3 md:px-2"},ue=u("img",{class:"mr-auto h-5",src:oe,alt:"DirectoryTree Editor"},null,-1),de=K(" Copy URL "),pe=K(" Copy DirectoryTree "),fe={class:"flex-grow"},me=u("div",{class:"grid h-full grid-rows-2 gap-1 md:grid-cols-2 md:grid-rows-1"},null,-1),ge=u("span",{class:"font-mono text-[10px]"},[u("span",{class:"mr-1 inline-block text-gray-400"},"by"),u("a",{class:"text-gray-300 hover:text-gray-100",href:"https://twitter.com/lollipop_onl",target:"_blank"},"@lollipop_onl ")],-1),ve=u("p",{class:"mt-1 text-center text-[10px] text-stone-400 md:absolute md:top-1/2 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2"}," \u3053\u306E\u30B5\u30A4\u30C8\u3067\u306F\u6539\u5584\u306E\u305F\u3081 Google Analytics \u3092\u5C0E\u5165\u3057\u3066\u3044\u307E\u3059 ",-1),he=w({setup(i){const o="v2.0.0",n=V(),t=_(()=>{const{origin:r,hash:a}=window.location,c=new URL("/",r);return c.hash=a,c.toString()}),e=_(()=>L(n.state.value.split(`
`).filter(r=>r.trim()).join(`
`))),s=_(()=>n.state.value.trim().length===0);return(r,a)=>(k(),$("div",ie,[u("header",ce,[ue,b(N,{data:g(t),disabled:g(s)},{default:I(()=>[de]),_:1},8,["data","disabled"]),b(N,{data:g(e),disabled:g(s)},{default:I(()=>[pe]),_:1},8,["data","disabled"])]),u("main",fe,[b(le),me]),u("footer",{class:"relative flex-shrink-0 p-2 leading-none"},[u("div",{class:"flex items-center justify-between"},[ge,u("a",{class:"font-mono text-xs text-gray-400 hover:text-gray-100",href:"https://github.com/lollipop-onl/directory-tree-editor",target:"_blank"},Y(o))]),ve])]))}}),z=Z(he);z.use(ee.createGtm({id:"GTM-KQJBKCN"}));z.mount("#root");

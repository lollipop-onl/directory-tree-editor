import{r as S,p as D,g as O,o as q,d as w,w as G,a as b,c as $,k as P,b as A,e as x,u as _,i as J,f as U,n as B,h as Q,j as W,l as I,m as c,t as X,q as K,s as Y}from"./vendor.1bac66eb.js";const Z=function(){const n=document.createElement("link").relList;if(n&&n.supports&&n.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const i of o.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&t(i)}).observe(document,{childList:!0,subtree:!0});function s(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerpolicy&&(o.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?o.credentials="include":e.crossorigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function t(e){if(e.ep)return;e.ep=!0;const o=s(e);fetch(e.href,o)}};Z();var ee="/assets/logo.9cd6f5e5.svg";const V=()=>{const a=S(""),n=t=>{a.value=t;const e=D.deflate(t),o=O.fromUint8Array(e,!0);window.history.replaceState(null,"",`#${o}`)},s=()=>{try{const t=window.location.hash.replace(/^#/,"").trim(),e=O.toUint8Array(t);return D.inflate(e,{to:"string"})||""}catch{return""}};return q(()=>{a.value=s()}),{state:a,commit:n}},te=["value","placeholder","readonly"],M=w({props:{value:null,scrollPosition:null,readOnly:{type:Boolean,default:!1},placeholder:null},emits:["update:scrollPosition","update:value"],setup(a,{emit:n}){const s=a,t=S(),e=()=>new Promise(r=>requestAnimationFrame(()=>r())),o=r=>{const d=/^ +/.exec(r);return(d==null?void 0:d[0].length)||0},i=r=>{r.target instanceof HTMLTextAreaElement&&n("update:scrollPosition",r.target.scrollTop)},l=r=>{r.target instanceof HTMLTextAreaElement&&n("update:value",r.target.value)},u=async r=>{const{target:d}=r;if(s.readOnly||!(d instanceof HTMLTextAreaElement))return;const{value:g}=d;let{selectionStart:k,selectionEnd:E}=d;const T=g.substring(0,k).split(`
`).length-1,z=g.substring(0,E).split(`
`).length-1;if(P.isEventKey(r,"tab")){r.preventDefault();const h=g.split(`
`).map((p,m)=>{if(m<T||m>z)return p;const v=/^ +/.exec(p),f=((v==null?void 0:v[0].length)||0)%2?1:2;return r.shiftKey?v?(k-=m===T?f:0,E-=f,p.substring(f)):p:(k+=m===T?f:0,E+=f,[" ".repeat(f),p].join(""))});n("update:value",h.join(`
`)),await e(),d.setSelectionRange(k,E);return}if(P.isEventKey(r,"enter")){if(await e(),!t.value)return;const{value:h}=t.value;let{selectionStart:p,selectionEnd:m}=t.value;if(p!==m)return;const v=o(h.split(`
`)[T]),f=h.substring(0,p).split(`
`).length-1,j=o(h.split(`
`)[f]),y=v-j;if(y===0)return;const F=h.split(`
`).map((C,H)=>H!==f?C:y>0?[" ".repeat(y),C].join(""):C.substring(y));n("update:value",F.join(`
`)),await e(),t.value.setSelectionRange(p+y+j,m+y+j);return}};return G(()=>s.scrollPosition,r=>{t.value&&t.value.scrollTop!==r&&t.value.scrollTo({top:r})},{immediate:!0}),(r,d)=>(b(),$("textarea",{ref_key:"textarea",ref:t,value:s.value,class:"resize-none scroll-p-8 overflow-scroll py-5 px-8 font-mono text-sm leading-relaxed text-black outline-none",wrap:"off",spellcheck:"false",placeholder:s.placeholder,readonly:s.readOnly,onScroll:i,onInput:l,onKeydown:u},null,40,te))}}),N=a=>{var n;return Math.floor((((n=/^ +/.exec(a))==null?void 0:n[0].length)||0)/2)},L=a=>{const n=a.split(/\n|\r\n/);return n.map((s,t)=>{const e=s.replace(/^(?: |\t)+/,""),o=N(s);let i="";for(let l=1;l<=o;l++){let u=1/0;for(let r=t+1;r<n.length;r++){const d=n[r],g=N(d);if(g<l)break;u=Math.min(u,g)}l===o&&!/^#/.test(e)?i+=u<=l?"\u251C\u2500\u2500 ":"\u2514\u2500\u2500 ":i+=u<=l?"\u2502   ":"    "}return`${i}${e}`}).join(`
`)},oe={class:"grid min-h-full grid-rows-2 gap-2 overflow-y-auto text-white md:grid-cols-2 md:grid-rows-1"},ne=w({setup(a){const n=`.
  # Assets files
  assets
    images
    css
    fonts
  # Vue components
  components
    Atoms
    Molecules
    Organisms
  # Page components
  containers
    ...
  # Utilities
  utils
    # Entry file
    index.ts
    ...
  # Node.js packages
  node_modules
  # Node.js configuration file
  package.json
  # Documentation (this file)
  README.md`,s=V(),t=S(0),e=A({get(){return s.state.value},set(i){s.commit(i)}}),o=A(()=>L(e.value));return(i,l)=>(b(),$("div",oe,[x(M,{value:_(e),"onUpdate:value":l[0]||(l[0]=u=>J(e)?e.value=u:null),"scroll-position":t.value,"onUpdate:scroll-position":l[1]||(l[1]=u=>t.value=u),placeholder:n},null,8,["value","scroll-position"]),x(M,{"scroll-position":t.value,"onUpdate:scroll-position":l[2]||(l[2]=u=>t.value=u),value:_(o),placeholder:_(L)(n),"read-only":""},null,8,["scroll-position","value","placeholder"])]))}}),se=w({props:{active:{type:Boolean,default:!1}},emits:["click"],setup(a,{emit:n}){const s=a;return(t,e)=>(b(),$("button",{class:B(["rounded-md border border-stone-400 px-2 py-1 font-mono text-xs text-stone-400 transition hover:border-stone-100 hover:text-stone-100",{"border-stone-100 text-stone-100":s.active}]),onClick:e[0]||(e[0]=Q(o=>n("click"),["prevent"]))},[U(t.$slots,"default")],2))}}),re={class:"relative block"},R=w({props:{data:null},setup(a){const n=a,s=S(!1);let t=-1;const e=async()=>{window.clearTimeout(t),await navigator.clipboard.writeText(n.data),s.value=!0,t=window.setTimeout(()=>{s.value=!1},1500)};return(o,i)=>(b(),W(se,{active:s.value,onClick:e},{default:I(()=>[c("span",re,[c("span",{class:B(["absolute inset-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 bg-stone-900 opacity-0 transition",{"opacity-100":s.value}])}," Copied! ",2),U(o.$slots,"default")])]),_:3},8,["active"]))}}),le={class:"flex h-full w-full flex-col overflow-hidden bg-stone-900 px-4 md:px-6"},ae={class:"flex h-16 flex-shrink-0 items-center space-x-3 md:px-2"},ie=c("img",{class:"mr-auto h-5",src:ee,alt:"DirectoryTree Editor"},null,-1),ce=K("Copy URL"),ue=K("Copy DirectoryTree"),de={class:"flex-grow"},pe=c("div",{class:"grid h-full grid-rows-2 gap-1 md:grid-cols-2 md:grid-rows-1"},null,-1),fe=c("span",{class:"font-mono text-[10px]"},[c("span",{class:"mr-1 inline-block text-gray-400"},"by"),c("a",{class:"text-gray-300 hover:text-gray-100",href:"https://twitter.com/lollipop_onl",target:"_blank"},"@lollipop_onl ")],-1),me=c("p",{class:"mt-1 text-center text-[10px] text-stone-400 md:absolute md:top-1/2 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2"}," \u3053\u306E\u30B5\u30A4\u30C8\u3067\u306F\u6539\u5584\u306E\u305F\u3081 Google Analytics \u3092\u5C0E\u5165\u3057\u3066\u3044\u307E\u3059 ",-1),ge=w({setup(a){const n="v2.0.0",s=V(),t=A(()=>{const{origin:o,hash:i}=window.location,l=new URL("/",o);return l.hash=i,l.toString()}),e=A(()=>L(s.state.value.split(`
`).filter(o=>o.trim()).join(`
`)));return(o,i)=>(b(),$("div",le,[c("header",ae,[ie,x(R,{data:_(t)},{default:I(()=>[ce]),_:1},8,["data"]),x(R,{data:_(e)},{default:I(()=>[ue]),_:1},8,["data"])]),c("main",de,[x(ne),pe]),c("footer",{class:"relative flex-shrink-0 p-2 leading-none"},[c("div",{class:"flex items-center justify-between"},[fe,c("a",{class:"font-mono text-xs text-gray-400 hover:text-gray-100",href:"https://github.com/lollipop-onl/directory-tree-editor",target:"_blank"},X(n))]),me])]))}});Y(ge).mount("#root");

import{r as S,p as D,g as O,o as q,d as w,w as G,a as k,c as $,k as P,b as _,e as b,u as g,i as J,f as R,n as U,h as Q,j as W,l as I,m as u,t as X,q as K,s as Y}from"./vendor.1bac66eb.js";const Z=function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))t(e);new MutationObserver(e=>{for(const n of e)if(n.type==="childList")for(const r of n.addedNodes)r.tagName==="LINK"&&r.rel==="modulepreload"&&t(r)}).observe(document,{childList:!0,subtree:!0});function s(e){const n={};return e.integrity&&(n.integrity=e.integrity),e.referrerpolicy&&(n.referrerPolicy=e.referrerpolicy),e.crossorigin==="use-credentials"?n.credentials="include":e.crossorigin==="anonymous"?n.credentials="omit":n.credentials="same-origin",n}function t(e){if(e.ep)return;e.ep=!0;const n=s(e);fetch(e.href,n)}};Z();var ee="/assets/logo.9cd6f5e5.svg";const V=()=>{const i=S(""),o=t=>{i.value=t;const e=D.deflate(t),n=O.fromUint8Array(e,!0);window.history.replaceState(null,"",`#${n}`)},s=()=>{try{const t=window.location.hash.replace(/^#/,"").trim(),e=O.toUint8Array(t);return D.inflate(e,{to:"string"})||""}catch{return""}};return q(()=>{i.value=s()}),{state:i,commit:o}},te=["value","placeholder","readonly"],B=w({props:{value:null,scrollPosition:null,readOnly:{type:Boolean,default:!1},placeholder:null},emits:["update:scrollPosition","update:value"],setup(i,{emit:o}){const s=i,t=S(),e=()=>new Promise(l=>requestAnimationFrame(()=>l())),n=l=>{const d=/^ +/.exec(l);return(d==null?void 0:d[0].length)||0},r=l=>{l.target instanceof HTMLTextAreaElement&&o("update:scrollPosition",l.target.scrollTop)},a=l=>{l.target instanceof HTMLTextAreaElement&&o("update:value",l.target.value)},c=async l=>{const{target:d}=l;if(s.readOnly||!(d instanceof HTMLTextAreaElement))return;const{value:h}=d;let{selectionStart:E,selectionEnd:T}=d;const A=h.substring(0,E).split(`
`).length-1,z=h.substring(0,T).split(`
`).length-1;if(P.isEventKey(l,"tab")){l.preventDefault();const v=h.split(`
`).map((p,m)=>{if(m<A||m>z)return p;const y=/^ +/.exec(p),f=((y==null?void 0:y[0].length)||0)%2?1:2;return l.shiftKey?y?(E-=m===A?f:0,T-=f,p.substring(f)):p:(E+=m===A?f:0,T+=f,[" ".repeat(f),p].join(""))});o("update:value",v.join(`
`)),await e(),d.setSelectionRange(E,T);return}if(P.isEventKey(l,"enter")){if(await e(),!t.value)return;const{value:v}=t.value;let{selectionStart:p,selectionEnd:m}=t.value;if(p!==m)return;const y=n(v.split(`
`)[A]),f=v.substring(0,p).split(`
`).length-1,j=n(v.split(`
`)[f]),x=y-j;if(x===0)return;const F=v.split(`
`).map((C,H)=>H!==f?C:x>0?[" ".repeat(x),C].join(""):C.substring(x));o("update:value",F.join(`
`)),await e(),t.value.setSelectionRange(p+x+j,m+x+j);return}};return G(()=>s.scrollPosition,l=>{t.value&&t.value.scrollTop!==l&&t.value.scrollTo({top:l})},{immediate:!0}),(l,d)=>(k(),$("textarea",{ref_key:"textarea",ref:t,value:s.value,class:"resize-none scroll-p-8 overflow-scroll py-5 px-8 font-mono text-sm leading-relaxed text-black outline-none",wrap:"off",spellcheck:"false",placeholder:s.placeholder,readonly:s.readOnly,onScroll:r,onInput:a,onKeydown:c},null,40,te))}}),M=i=>{var o;return Math.floor((((o=/^ +/.exec(i))==null?void 0:o[0].length)||0)/2)},L=i=>{const o=i.split(/\n|\r\n/);return o.map((s,t)=>{const e=s.replace(/^(?: |\t)+/,""),n=M(s);let r="";for(let a=1;a<=n;a++){let c=1/0;for(let l=t+1;l<o.length;l++){const d=o[l],h=M(d);if(h<a)break;c=Math.min(c,h)}a===n&&!/^#/.test(e)?r+=c<=a?"\u251C\u2500\u2500 ":"\u2514\u2500\u2500 ":r+=c<=a?"\u2502   ":"    "}return`${r}${e}`}).join(`
`)},oe={class:"grid min-h-full grid-rows-2 gap-2 overflow-y-auto text-white md:grid-cols-2 md:grid-rows-1"},ne=w({setup(i){const o=`.
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
  README.md`,s=V(),t=S(0),e=_({get(){return s.state.value},set(r){s.commit(r)}}),n=_(()=>L(e.value));return(r,a)=>(k(),$("div",oe,[b(B,{value:g(e),"onUpdate:value":a[0]||(a[0]=c=>J(e)?e.value=c:null),"scroll-position":t.value,"onUpdate:scroll-position":a[1]||(a[1]=c=>t.value=c),placeholder:o},null,8,["value","scroll-position"]),b(B,{"scroll-position":t.value,"onUpdate:scroll-position":a[2]||(a[2]=c=>t.value=c),value:g(n),placeholder:g(L)(o),"read-only":""},null,8,["scroll-position","value","placeholder"])]))}}),se=w({props:{active:{type:Boolean,default:!1},disabled:{type:Boolean,default:!1}},emits:["click"],setup(i,{emit:o}){const s=i;return(t,e)=>(k(),$("button",{class:U(["rounded-md border border-stone-400 px-2 py-1 font-mono text-xs text-stone-400 transition",{"border-stone-100 text-stone-100":s.active,"hover:border-stone-100 hover:text-stone-100":!s.disabled}]),onClick:e[0]||(e[0]=Q(n=>o("click"),["prevent"]))},[R(t.$slots,"default")],2))}}),le={class:"relative block"},N=w({props:{data:null,disabled:{type:Boolean,default:!1}},setup(i){const o=i,s=S(!1);let t=-1;const e=async()=>{window.clearTimeout(t),await navigator.clipboard.writeText(o.data),s.value=!0,t=window.setTimeout(()=>{s.value=!1},1500)};return(n,r)=>(k(),W(se,{active:s.value,disabled:o.disabled,onClick:e},{default:I(()=>[u("span",le,[u("span",{class:U(["absolute inset-1/2 block h-full w-full -translate-x-1/2 -translate-y-1/2 bg-stone-900 opacity-0 transition",{"opacity-100":s.value}])}," Copied! ",2),R(n.$slots,"default")])]),_:3},8,["active","disabled"]))}}),re={class:"flex h-full w-full flex-col overflow-hidden bg-stone-900 px-4 md:px-6"},ae={class:"flex h-16 flex-shrink-0 items-center space-x-3 md:px-2"},ie=u("img",{class:"mr-auto h-5",src:ee,alt:"DirectoryTree Editor"},null,-1),ce=K(" Copy URL "),ue=K(" Copy DirectoryTree "),de={class:"flex-grow"},pe=u("div",{class:"grid h-full grid-rows-2 gap-1 md:grid-cols-2 md:grid-rows-1"},null,-1),fe=u("span",{class:"font-mono text-[10px]"},[u("span",{class:"mr-1 inline-block text-gray-400"},"by"),u("a",{class:"text-gray-300 hover:text-gray-100",href:"https://twitter.com/lollipop_onl",target:"_blank"},"@lollipop_onl ")],-1),me=u("p",{class:"mt-1 text-center text-[10px] text-stone-400 md:absolute md:top-1/2 md:left-1/2 md:mt-0 md:-translate-x-1/2 md:-translate-y-1/2"}," \u3053\u306E\u30B5\u30A4\u30C8\u3067\u306F\u6539\u5584\u306E\u305F\u3081 Google Analytics \u3092\u5C0E\u5165\u3057\u3066\u3044\u307E\u3059 ",-1),ge=w({setup(i){const o="v2.0.0",s=V(),t=_(()=>{const{origin:r,hash:a}=window.location,c=new URL("/",r);return c.hash=a,c.toString()}),e=_(()=>L(s.state.value.split(`
`).filter(r=>r.trim()).join(`
`))),n=_(()=>s.state.value.trim().length===0);return(r,a)=>(k(),$("div",re,[u("header",ae,[ie,b(N,{data:g(t),disabled:g(n)},{default:I(()=>[ce]),_:1},8,["data","disabled"]),b(N,{data:g(e),disabled:g(n)},{default:I(()=>[ue]),_:1},8,["data","disabled"])]),u("main",de,[b(ne),pe]),u("footer",{class:"relative flex-shrink-0 p-2 leading-none"},[u("div",{class:"flex items-center justify-between"},[fe,u("a",{class:"font-mono text-xs text-gray-400 hover:text-gray-100",href:"https://github.com/lollipop-onl/directory-tree-editor",target:"_blank"},X(o))]),me])]))}});Y(ge).mount("#root");

import{o as l,f as a,g as m,d as x,n as g,b as k,c as P,w as B,k as t,i as n,v as L,h as c,F as p,x as C,y as R,A as U}from"./index-b5e1cd86.js";import{_ as s}from"./InputCopyable.vue_vue_type_script_setup_true_lang-e995f994.js";import{i as V}from"./boolean-c7e7c785.js";import{w as E}from"./defaults-4d6daddf.js";import{_ as N}from"./Divider-dd3be70b.js";const O={viewBox:"0 0 24 24",width:"1.2em",height:"1.2em"},$=m("path",{fill:"currentColor",d:"m20 16l-5.5 5.5l-1.42-1.41L16.17 17H10.5A6.5 6.5 0 0 1 4 10.5V4h2v6.5C6 13 8 15 10.5 15h5.67l-3.08-3.09l1.41-1.41L20 16Z"},null,-1),j=[$];function A(d,o){return l(),a("svg",O,j)}const F={name:"mdi-arrow-right-bottom",render:A},H={style:{flex:"1 0 110px"}},I=x({__name:"url-parser",setup(d){const o=g("https://me:pwd@it-tools.tech:3000/url-parser?key1=value&key2=value2#the-hash"),_=k(()=>E(()=>new URL(o.value),void 0)),h=[{validator:u=>V(()=>new URL(u)),message:"Invalid url"}],v=[{title:"Protocol",key:"protocol"},{title:"Username",key:"username"},{title:"Password",key:"password"},{title:"Hostname",key:"hostname"},{title:"Port",key:"port"},{title:"Path",key:"pathname"},{title:"Params",key:"search"}];return(u,i)=>{const f=C,b=N,w=F,y=R;return l(),P(y,null,{default:B(()=>[t(f,{value:n(o),"onUpdate:value":i[0]||(i[0]=e=>L(o)?o.value=e:null),label:"Your url to parse:",placeholder:"Your url to parse...","raw-text":"","validation-rules":h},null,8,["value"]),t(b),(l(),a(p,null,c(v,({title:e,key:r})=>t(s,{key:r,label:e,value:n(_)?.[r]??"",readonly:"","label-position":"left","label-width":"110px","mb-2":"",placeholder:" "},null,8,["label","value"])),64)),(l(!0),a(p,null,c(Object.entries(Object.fromEntries(n(_)?.searchParams.entries()??[])),([e,r])=>(l(),a("div",{key:e,"mb-2":"","w-full":"",flex:""},[m("div",H,[t(w)]),t(s,{value:e,readonly:""},null,8,["value"]),t(s,{value:r,readonly:""},null,8,["value"])]))),128))]),_:1})}}});const z=U(I,[["__scopeId","data-v-2ecbdcbb"]]);export{z as default};

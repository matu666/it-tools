import{d as w,o as p,f as v,af as T,W as L,b as g,e as D,g as d,t as F,i as o,k as u,B as S,p as V,v as x,c as I,w as m,F as M,h as U,l as j,S as W,x as q,ag as G,m as H}from"./index-b5e1cd86.js";import{i as k,a as $}from"./ipv4-address-converter.service-e43cae64.js";import{c as N}from"./integer-base-converter.model-81b950ae.js";import{_ as C}from"./SpanCopyable.vue_vue_type_script_setup_true_lang-2838703f.js";import{_ as J}from"./Alert-6395fdaa.js";import{_ as K}from"./Table-8d359bfd.js";const Q={xmlns:"http://www.w3.org/2000/svg","xmlns:xlink":"http://www.w3.org/1999/xlink",viewBox:"0 0 24 24"},X=T('<g fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="5" cy="18" r="2"></circle><circle cx="19" cy="6" r="2"></circle><path d="M19 8v5a5 5 0 0 1-5 5h-3l3-3m0 6l-3-3"></path><path d="M5 16v-5a5 5 0 0 1 5-5h3l-3-3m0 6l3-3"></path></g>',1),Y=[X],Z=w({name:"Exchange",render:function(e,a){return p(),v("svg",Q,Y)}});function B(t){return`${t>>>24}.${t>>16&255}.${t>>8&255}.${t&255}`}function f(t,e){return t==null||e==null?-1:1+Number.parseInt(e,2)-Number.parseInt(t,2)}function ee(t,e){if(t==null||e==null||f(t,e)<1)return null;let s=32;for(let i=0;i<32;i++)if(t[i]!==e[i]){s=i;break}const r=t.substring(0,s)+"0".repeat(32-s),n=e.substring(0,s)+"1".repeat(32-s);return{start:r,end:n,mask:s}}function te({startIp:t,endIp:e}){const a=N({value:k({ip:t}).toString(),fromBase:10,toBase:2}).padStart(32,"0"),s=N({value:k({ip:e}).toString(),fromBase:10,toBase:2}).padStart(32,"0"),r=ee(a,s);if(r!=null){const n={};return n.newEnd=B(Number.parseInt(r.end,2)),n.newStart=B(Number.parseInt(r.start,2)),n.newCidr=`${n.newStart}/${r.mask}`,n.newSize=f(r.start,r.end),n.oldSize=f(a,s),n}}const ae={"font-bold":""},ne=["data-test-id"],le=["data-test-id"],se=w({__name:"result-row",props:{label:{default:""},oldValue:{default:""},newValue:{default:""}},setup(t){const e=t,{label:a,oldValue:s,newValue:r}=L(e),n=g(()=>D.kebabCase(a.value));return(i,h)=>(p(),v("tr",null,[d("td",ae,F(o(a)),1),d("td",{"data-test-id":`${o(n)}.old`},[u(C,{value:o(s),class:"monospace"},null,8,["value"])],8,ne),d("td",{"data-test-id":`${o(n)}.new`},[u(C,{value:o(r)},null,8,["value"])],8,le)]))}}),oe={"mb-4":"",flex:"","gap-4":""},re=d("thead",null,[d("tr",null,[d("th",{scope:"col"},"   "),d("th",{scope:"col"}," old value "),d("th",{scope:"col"}," new value ")])],-1),de=d("div",{"my-3":"","op-70":""}," The end IPv4 address is lower than the start IPv4 address. This is not valid and no result could be calculated. In the most cases the solution to solve this problem is to change start and end address. ",-1),me=w({__name:"ipv4-range-expander",setup(t){const e=S("ipv4-range-expander:startAddress","192.168.1.1"),a=S("ipv4-range-expander:endAddress","192.168.6.255"),s=g(()=>te({startIp:e.value,endIp:a.value})),r=[{label:"Start address",getOldValue:()=>e.value,getNewValue:l=>l?.newStart},{label:"End address",getOldValue:()=>a.value,getNewValue:l=>l?.newEnd},{label:"Addresses in range",getOldValue:l=>l?.oldSize?.toLocaleString(),getNewValue:l=>l?.newSize?.toLocaleString()},{label:"CIDR",getOldValue:()=>"",getNewValue:l=>l?.newCidr}],n=V({source:e,rules:[{message:"Invalid ipv4 address",validator:l=>$({ip:l})}]}),i=V({source:a,rules:[{message:"Invalid ipv4 address",validator:l=>$({ip:l})}]}),h=g(()=>i.isValid&&n.isValid&&s.value!==void 0);function E(){const l=e.value;e.value=a.value,a.value=l}return(l,_)=>{const b=q,y=K,z=G,P=H,A=J;return p(),v("div",null,[d("div",oe,[u(b,{value:o(e),"onUpdate:value":_[0]||(_[0]=c=>x(e)?e.value=c:null),label:"Start address",placeholder:"Start IPv4 address...",validation:o(n),clearable:""},null,8,["value","validation"]),u(b,{value:o(a),"onUpdate:value":_[1]||(_[1]=c=>x(a)?a.value=c:null),label:"End address",placeholder:"End IPv4 address...",validation:o(i),clearable:""},null,8,["value","validation"])]),o(h)?(p(),I(y,{key:0,"data-test-id":"result"},{default:m(()=>[re,d("tbody",null,[(p(),v(M,null,U(r,({label:c,getOldValue:R,getNewValue:O})=>u(se,{key:c,label:c,"old-value":R(o(s)),"new-value":O(o(s))},null,8,["label","old-value","new-value"])),64))])]),_:1})):o(n).isValid&&o(i).isValid?(p(),I(A,{key:1,title:"Invalid combination of start and end IPv4 address",type:"error"},{default:m(()=>[de,u(P,{onClick:E},{default:m(()=>[u(z,{"mr-2":"",component:o(Z),depth:"3",size:"22"},null,8,["component"]),j(" Switch start and end IPv4 address ")]),_:1})]),_:1})):W("",!0)])}}});export{me as default};

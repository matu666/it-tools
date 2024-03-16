import{e as i,k as a,F as y,l as b,s as O,d as C,ad as L,n as g,W as $,ae as I,b as m,i as l,o as v,f as x,g as P,w as A,v as k,c as Y,S as M,y as W,A as j,x as w}from"./index-b5e1cd86.js";import{l as h}from"./index-231c3e11.js";import{_ as z}from"./Switch-021f9dde.js";import{_ as G}from"./FormItem-b41870cf.js";import{w as N}from"./defaults-4d6daddf.js";import{i as H}from"./boolean-c7e7c785.js";import"./use-form-item-8e6c3144.js";function K(e,t,{onlyShowDifferences:s=!1}={}){return i.isArray(e)&&i.isArray(t)?{key:"",type:"array",children:E(e,t,{onlyShowDifferences:s}),oldValue:e,value:t,status:p(e,t)}:i.isObject(e)&&i.isObject(t)?{key:"",type:"object",children:S(e,t,{onlyShowDifferences:s}),oldValue:e,value:t,status:p(e,t)}:{key:"",type:"value",oldValue:e,value:t,status:p(e,t)}}function S(e,t,{onlyShowDifferences:s=!1}={}){return Object.keys({...e,...t}).map(r=>D(e?.[r],t?.[r],r,{onlyShowDifferences:s})).filter(r=>!s||r.status!=="unchanged")}function D(e,t,s,{onlyShowDifferences:n=!1}={}){const r=_(e);return r==="object"?{key:s,type:r,children:S(e,t,{onlyShowDifferences:n}),oldValue:e,value:t,status:p(e,t)}:r==="array"?{key:s,type:r,children:E(e,t,{onlyShowDifferences:n}),value:t,oldValue:e,status:p(e,t)}:{key:s,type:r,value:t,oldValue:e,status:p(e,t)}}function E(e,t,{onlyShowDifferences:s=!1}={}){const n=Math.max(0,e?.length,t?.length);return Array.from({length:n},(r,o)=>D(e?.[o],t?.[o],o,{onlyShowDifferences:s})).filter(r=>!s||r.status!=="unchanged")}function _(e){return e===null?"value":Array.isArray(e)?"array":typeof e=="object"?"object":"value"}function p(e,t){if(e===void 0)return"added";if(t===void 0)return"removed";const s=_(e)==="object"&&_(t)==="object",n=_(e)==="array"&&_(t)==="array";return i.isEqual(e,t)?"unchanged":s||n?"children-updated":"updated"}function Q({diff:e}){return a("div",{class:"diffs-viewer"},[a("ul",null,[R({diff:e,showKeys:!1})])])}function R({diff:e,showKeys:t=!0}){const{type:s,status:n}=e;return n==="updated"?Z({diff:e,showKeys:t}):s==="array"?T({diff:e,showKeys:t,showChildrenKeys:!1,openTag:"[",closeTag:"]"}):s==="object"?T({diff:e,showKeys:t,openTag:"{",closeTag:"}"}):X({diff:e,showKeys:t})}function X({diff:e,showKeys:t}){const{value:s,key:n,status:r,oldValue:o}=e,u=r==="removed"?o:s;return a("li",null,[a("span",{class:[r,"result"]},[t&&a(y,null,[a("span",{class:"key"},[n]),": "]),J({value:u,status:r})]),b(",")])}function Z({diff:e,showKeys:t}){const{value:s,key:n,oldValue:r}=e;return a("li",{class:"updated-line"},[t&&a(y,null,[a("span",{class:"key"},[n]),": "]),J({value:r,status:"removed"}),J({value:s,status:"added"}),b(",")])}function T({diff:e,openTag:t,closeTag:s,showKeys:n,showChildrenKeys:r=!0}){const{children:o,key:u,status:c,type:f}=e;return a("li",null,[a("div",{class:[f,c],style:{display:"inline-block"}},[n&&a(y,null,[a("span",{class:"key"},[u]),": "]),t,o.length>0&&a("ul",null,[o.map(d=>R({diff:d,showKeys:r}))]),`${s},`])])}function ee(e){return i.isNull(e)?"null":JSON.stringify(e)}function J({value:e,status:t}){const s=ee(e),{copy:n}=O({source:s});return a("span",{class:["value",t],onClick:()=>n()},[s])}const te={key:0},se={flex:"","justify-center":""},re={key:0,"text-center":"","op-70":""},ne=C({__name:"diff-viewer",props:{leftJson:{},rightJson:{}},setup(e){const t=e;L(d=>({"7a613f80":l(o).text.mutedColor,ed7825ee:l(o).success.colorFaded,"31e3079f":l(o).success.color,"8956bfb8":l(o).error.colorFaded,"3a20e0b8":l(o).error.color,"29d2da8a":l(o).text.baseColor}));const s=g(!1),{leftJson:n,rightJson:r}=$(t),o=I(),u=m(()=>K(n.value,r.value,{onlyShowDifferences:s.value})),c=m(()=>i.isEqual(n.value,r.value)),f=m(()=>!i.isUndefined(n.value)&&!i.isUndefined(r.value));return(d,V)=>{const U=z,q=G,B=W;return l(f)?(v(),x("div",te,[P("div",se,[a(q,{label:"Only show differences","label-placement":"left"},{default:A(()=>[a(U,{value:l(s),"onUpdate:value":V[0]||(V[0]=F=>k(s)?s.value=F:null)},null,8,["value"])]),_:1})]),a(B,{"data-test-id":"diff-result"},{default:A(()=>[l(c)?(v(),x("div",re," The provided JSONs are the same ")):(v(),Y(l(Q),{key:1,diff:l(u)},null,8,["diff"]))]),_:1})])):M("",!0)}}});const ae=j(ne,[["__scopeId","data-v-d84bb557"]]),pe=C({__name:"json-diff",setup(e){const t=g(""),s=g(""),n=m(()=>N(()=>h.parse(t.value),void 0)),r=m(()=>N(()=>h.parse(s.value),void 0)),o=[{validator:u=>u===""||H(()=>h.parse(u)),message:"Invalid JSON format"}];return(u,c)=>{const f=w;return v(),x(y,null,[a(f,{value:l(t),"onUpdate:value":c[0]||(c[0]=d=>k(t)?t.value=d:null),"validation-rules":o,label:"Your first JSON",placeholder:"Paste your first JSON here...",rows:"20",multiline:"","test-id":"leftJson","raw-text":"",monospace:""},null,8,["value"]),a(f,{value:l(s),"onUpdate:value":c[1]||(c[1]=d=>k(s)?s.value=d:null),"validation-rules":o,label:"Your JSON to compare",placeholder:"Paste your JSON to compare here...",rows:"20",multiline:"","test-id":"rightJson","raw-text":"",monospace:""},null,8,["value"]),a(ae,{"left-json":l(n),"right-json":l(r)},null,8,["left-json","right-json"])],64)}}});export{pe as default};

import{_ as e}from"./FormatTransformer.vue_vue_type_script_setup_true_lang-d270656c.js";import{p as s}from"./toml-esm-9c5f6a1e.js";import{w as n}from"./defaults-4d6daddf.js";import{i}from"./toml.services-387bcfeb.js";import{d as m,o as p,c as l}from"./index-b5e1cd86.js";import"./TextareaCopyable-bde10f46.js";import"./Copy-88a8dea2.js";import"./Scrollbar-22aa569c.js";import"./boolean-c7e7c785.js";const v=m({__name:"toml-to-json",setup(u){const r=o=>o===""?"":n(()=>JSON.stringify(s(o),null,3),""),t=[{validator:i,message:"Provided TOML is not valid."}];return(o,c)=>{const a=e;return p(),l(a,{"input-label":"Your TOML","input-placeholder":"Paste your TOML here...","output-label":"JSON from your TOML","output-language":"json","input-validation-rules":t,transformer:r})}}});export{v as default};

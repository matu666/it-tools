import{aw as dn,b as Q,aJ as hn,aj as _n,C as ue,D as pn,G as Ce,am as bn,d as Ge,H as En,n as We,a6 as mn,a4 as Ee,ap as Le,I as Fe,L as yn,O as ke,R as vn,W as wn,aK as Nn,s as xn,o as me,f as Ie,k as W,w as q,aL as Mn,i as I,g as Rn,c as On,S as je,l as Sn,t as Tn,aM as An,ag as Cn,m as Ln,aN as kn,y as In,A as jn}from"./index-b5e1cd86.js";import{C as $n}from"./Copy-88a8dea2.js";import{_ as Dn}from"./Scrollbar-22aa569c.js";function Bn(e,n){const t=dn(hn,null);return Q(()=>e.hljs||t?.mergedHljsRef.value)}const Pn=e=>{const{textColor2:n,fontSize:t,fontWeightStrong:o,textColor3:g}=e;return{textColor:n,fontSize:t,fontWeightStrong:o,"mono-3":"#a0a1a7","hue-1":"#0184bb","hue-2":"#4078f2","hue-3":"#a626a4","hue-4":"#50a14f","hue-5":"#e45649","hue-5-2":"#c91243","hue-6":"#986801","hue-6-2":"#c18401",lineNumberTextColor:g}},Hn={name:"Code",common:_n,self:Pn},Un=Hn,zn=ue([pn("code",`
 font-size: var(--n-font-size);
 font-family: var(--n-font-family);
 `,[Ce("show-line-numbers",`
 display: flex;
 `),bn("line-numbers",`
 user-select: none;
 padding-right: 12px;
 text-align: right;
 transition: color .3s var(--n-bezier);
 color: var(--n-line-number-text-color);
 `),Ce("word-wrap",[ue("pre",`
 white-space: pre-wrap;
 word-break: break-all;
 `)]),ue("pre",`
 margin: 0;
 line-height: inherit;
 font-size: inherit;
 font-family: inherit;
 `),ue("[class^=hljs]",`
 color: var(--n-text-color);
 transition: 
 color .3s var(--n-bezier),
 background-color .3s var(--n-bezier);
 `)]),({props:e})=>{const n=`${e.bPrefix}code`;return[`${n} .hljs-comment,
 ${n} .hljs-quote {
 color: var(--n-mono-3);
 font-style: italic;
 }`,`${n} .hljs-doctag,
 ${n} .hljs-keyword,
 ${n} .hljs-formula {
 color: var(--n-hue-3);
 }`,`${n} .hljs-section,
 ${n} .hljs-name,
 ${n} .hljs-selector-tag,
 ${n} .hljs-deletion,
 ${n} .hljs-subst {
 color: var(--n-hue-5);
 }`,`${n} .hljs-literal {
 color: var(--n-hue-1);
 }`,`${n} .hljs-string,
 ${n} .hljs-regexp,
 ${n} .hljs-addition,
 ${n} .hljs-attribute,
 ${n} .hljs-meta-string {
 color: var(--n-hue-4);
 }`,`${n} .hljs-built_in,
 ${n} .hljs-class .hljs-title {
 color: var(--n-hue-6-2);
 }`,`${n} .hljs-attr,
 ${n} .hljs-variable,
 ${n} .hljs-template-variable,
 ${n} .hljs-type,
 ${n} .hljs-selector-class,
 ${n} .hljs-selector-attr,
 ${n} .hljs-selector-pseudo,
 ${n} .hljs-number {
 color: var(--n-hue-6);
 }`,`${n} .hljs-symbol,
 ${n} .hljs-bullet,
 ${n} .hljs-link,
 ${n} .hljs-meta,
 ${n} .hljs-selector-id,
 ${n} .hljs-title {
 color: var(--n-hue-2);
 }`,`${n} .hljs-emphasis {
 font-style: italic;
 }`,`${n} .hljs-strong {
 font-weight: var(--n-font-weight-strong);
 }`,`${n} .hljs-link {
 text-decoration: underline;
 }`]}]),Kn=Object.assign(Object.assign({},Fe.props),{language:String,code:{type:String,default:""},trim:{type:Boolean,default:!0},hljs:Object,uri:Boolean,inline:Boolean,wordWrap:Boolean,showLineNumbers:Boolean,internalFontSize:Number,internalNoHighlight:Boolean}),Gn=Ge({name:"Code",props:Kn,setup(e,{slots:n}){const{internalNoHighlight:t}=e,{mergedClsPrefixRef:o,inlineThemeDisabled:g}=En(),f=We(null),i=t?{value:void 0}:Bn(e),r=(E,x,N)=>{const{value:M}=i;return!M||!(E&&M.getLanguage(E))?null:M.highlight(N?x.trim():x,{language:E}).value},c=Q(()=>e.inline||e.wordWrap?!1:e.showLineNumbers),_=()=>{if(n.default)return;const{value:E}=f;if(!E)return;const{language:x}=e,N=e.uri?window.decodeURIComponent(e.code):e.code;if(x){const T=r(x,N,e.trim);if(T!==null){if(e.inline)E.innerHTML=T;else{const $=E.querySelector(".__code__");$&&E.removeChild($);const A=document.createElement("pre");A.className="__code__",A.innerHTML=T,E.appendChild(A)}return}}if(e.inline){E.textContent=N;return}const M=E.querySelector(".__code__");if(M)M.textContent=N;else{const T=document.createElement("pre");T.className="__code__",T.textContent=N,E.innerHTML="",E.appendChild(T)}};mn(_),Ee(Le(e,"language"),_),Ee(Le(e,"code"),_),t||Ee(i,_);const b=Fe("Code","-code",zn,Un,e,o),S=Q(()=>{const{common:{cubicBezierEaseInOut:E,fontFamilyMono:x},self:{textColor:N,fontSize:M,fontWeightStrong:T,lineNumberTextColor:$,"mono-3":A,"hue-1":k,"hue-2":Z,"hue-3":J,"hue-4":D,"hue-5":he,"hue-5-2":B,"hue-6":se,"hue-6-2":re}}=b.value,{internalFontSize:ie}=e;return{"--n-font-size":ie?`${ie}px`:M,"--n-font-family":x,"--n-font-weight-strong":T,"--n-bezier":E,"--n-text-color":N,"--n-mono-3":A,"--n-hue-1":k,"--n-hue-2":Z,"--n-hue-3":J,"--n-hue-4":D,"--n-hue-5":he,"--n-hue-5-2":B,"--n-hue-6":se,"--n-hue-6-2":re,"--n-line-number-text-color":$}}),w=g?yn("code",Q(()=>`${e.internalFontSize||"a"}`),S,e):void 0;return{mergedClsPrefix:o,codeRef:f,mergedShowLineNumbers:c,lineNumbers:Q(()=>{let E=1;const x=[];let N=!1;for(const M of e.code)M===`
`?(N=!0,x.push(E++)):N=!1;return N||x.push(E++),x.join(`
`)}),cssVars:g?void 0:S,themeClass:w?.themeClass,onRender:w?.onRender}},render(){var e,n;const{mergedClsPrefix:t,wordWrap:o,mergedShowLineNumbers:g,onRender:f}=this;return f?.(),ke("code",{class:[`${t}-code`,this.themeClass,o&&`${t}-code--word-wrap`,g&&`${t}-code--show-line-numbers`],style:this.cssVars,ref:"codeRef"},g?ke("pre",{class:`${t}-code__line-numbers`},this.lineNumbers):null,(n=(e=this.$slots).default)===null||n===void 0?void 0:n.call(e))}});var ve={exports:{}};function we(e){return e instanceof Map?e.clear=e.delete=e.set=function(){throw new Error("map is read-only")}:e instanceof Set&&(e.add=e.clear=e.delete=function(){throw new Error("set is read-only")}),Object.freeze(e),Object.getOwnPropertyNames(e).forEach(function(n){var t=e[n];typeof t=="object"&&!Object.isFrozen(t)&&we(t)}),e}ve.exports=we;ve.exports.default=we;class $e{constructor(n){n.data===void 0&&(n.data={}),this.data=n.data,this.isMatchIgnored=!1}ignoreMatch(){this.isMatchIgnored=!0}}function Ye(e){return e.replace(/&/g,"&amp;").replace(/</g,"&lt;").replace(/>/g,"&gt;").replace(/"/g,"&quot;").replace(/'/g,"&#x27;")}function K(e,...n){const t=Object.create(null);for(const o in e)t[o]=e[o];return n.forEach(function(o){for(const g in o)t[g]=o[g]}),t}const Wn="</span>",De=e=>!!e.scope||e.sublanguage&&e.language,Fn=(e,{prefix:n})=>{if(e.includes(".")){const t=e.split(".");return[`${n}${t.shift()}`,...t.map((o,g)=>`${o}${"_".repeat(g+1)}`)].join(" ")}return`${n}${e}`};class Yn{constructor(n,t){this.buffer="",this.classPrefix=t.classPrefix,n.walk(this)}addText(n){this.buffer+=Ye(n)}openNode(n){if(!De(n))return;let t="";n.sublanguage?t=`language-${n.language}`:t=Fn(n.scope,{prefix:this.classPrefix}),this.span(t)}closeNode(n){De(n)&&(this.buffer+=Wn)}value(){return this.buffer}span(n){this.buffer+=`<span class="${n}">`}}const Be=(e={})=>{const n={children:[]};return Object.assign(n,e),n};class Ne{constructor(){this.rootNode=Be(),this.stack=[this.rootNode]}get top(){return this.stack[this.stack.length-1]}get root(){return this.rootNode}add(n){this.top.children.push(n)}openNode(n){const t=Be({scope:n});this.add(t),this.stack.push(t)}closeNode(){if(this.stack.length>1)return this.stack.pop()}closeAllNodes(){for(;this.closeNode(););}toJSON(){return JSON.stringify(this.rootNode,null,4)}walk(n){return this.constructor._walk(n,this.rootNode)}static _walk(n,t){return typeof t=="string"?n.addText(t):t.children&&(n.openNode(t),t.children.forEach(o=>this._walk(n,o)),n.closeNode(t)),n}static _collapse(n){typeof n!="string"&&n.children&&(n.children.every(t=>typeof t=="string")?n.children=[n.children.join("")]:n.children.forEach(t=>{Ne._collapse(t)}))}}class Vn extends Ne{constructor(n){super(),this.options=n}addKeyword(n,t){n!==""&&(this.openNode(t),this.addText(n),this.closeNode())}addText(n){n!==""&&this.add(n)}addSublanguage(n,t){const o=n.root;o.sublanguage=!0,o.language=t,this.add(o)}toHTML(){return new Yn(this,this.options).value()}finalize(){return!0}}function ee(e){return e?typeof e=="string"?e:e.source:null}function Ve(e){return V("(?=",e,")")}function qn(e){return V("(?:",e,")*")}function Xn(e){return V("(?:",e,")?")}function V(...e){return e.map(t=>ee(t)).join("")}function Qn(e){const n=e[e.length-1];return typeof n=="object"&&n.constructor===Object?(e.splice(e.length-1,1),n):{}}function xe(...e){return"("+(Qn(e).capture?"":"?:")+e.map(o=>ee(o)).join("|")+")"}function qe(e){return new RegExp(e.toString()+"|").exec("").length-1}function Zn(e,n){const t=e&&e.exec(n);return t&&t.index===0}const Jn=/\[(?:[^\\\]]|\\.)*\]|\(\??|\\([1-9][0-9]*)|\\./;function Me(e,{joinWith:n}){let t=0;return e.map(o=>{t+=1;const g=t;let f=ee(o),i="";for(;f.length>0;){const r=Jn.exec(f);if(!r){i+=f;break}i+=f.substring(0,r.index),f=f.substring(r.index+r[0].length),r[0][0]==="\\"&&r[1]?i+="\\"+String(Number(r[1])+g):(i+=r[0],r[0]==="("&&t++)}return i}).map(o=>`(${o})`).join(n)}const et=/\b\B/,Xe="[a-zA-Z]\\w*",Re="[a-zA-Z_]\\w*",Qe="\\b\\d+(\\.\\d+)?",Ze="(-?)(\\b0[xX][a-fA-F0-9]+|(\\b\\d+(\\.\\d*)?|\\.\\d+)([eE][-+]?\\d+)?)",Je="\\b(0b[01]+)",nt="!|!=|!==|%|%=|&|&&|&=|\\*|\\*=|\\+|\\+=|,|-|-=|/=|/|:|;|<<|<<=|<=|<|===|==|=|>>>=|>>=|>=|>>>|>>|>|\\?|\\[|\\{|\\(|\\^|\\^=|\\||\\|=|\\|\\||~",tt=(e={})=>{const n=/^#![ ]*\//;return e.binary&&(e.begin=V(n,/.*\b/,e.binary,/\b.*/)),K({scope:"meta",begin:n,end:/$/,relevance:0,"on:begin":(t,o)=>{t.index!==0&&o.ignoreMatch()}},e)},ne={begin:"\\\\[\\s\\S]",relevance:0},st={scope:"string",begin:"'",end:"'",illegal:"\\n",contains:[ne]},rt={scope:"string",begin:'"',end:'"',illegal:"\\n",contains:[ne]},it={begin:/\b(a|an|the|are|I'm|isn't|don't|doesn't|won't|but|just|should|pretty|simply|enough|gonna|going|wtf|so|such|will|you|your|they|like|more)\b/},de=function(e,n,t={}){const o=K({scope:"comment",begin:e,end:n,contains:[]},t);o.contains.push({scope:"doctag",begin:"[ ]*(?=(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):)",end:/(TODO|FIXME|NOTE|BUG|OPTIMIZE|HACK|XXX):/,excludeBegin:!0,relevance:0});const g=xe("I","a","is","so","us","to","at","if","in","it","on",/[A-Za-z]+['](d|ve|re|ll|t|s|n)/,/[A-Za-z]+[-][a-z]+/,/[A-Za-z][a-z]{2,}/);return o.contains.push({begin:V(/[ ]+/,"(",g,/[.]?[:]?([.][ ]|[ ])/,"){3}")}),o},at=de("//","$"),ot=de("/\\*","\\*/"),ct=de("#","$"),lt={scope:"number",begin:Qe,relevance:0},ut={scope:"number",begin:Ze,relevance:0},gt={scope:"number",begin:Je,relevance:0},ft={begin:/(?=\/[^/\n]*\/)/,contains:[{scope:"regexp",begin:/\//,end:/\/[gimuy]*/,illegal:/\n/,contains:[ne,{begin:/\[/,end:/\]/,relevance:0,contains:[ne]}]}]},dt={scope:"title",begin:Xe,relevance:0},ht={scope:"title",begin:Re,relevance:0},_t={begin:"\\.\\s*"+Re,relevance:0},pt=function(e){return Object.assign(e,{"on:begin":(n,t)=>{t.data._beginMatch=n[1]},"on:end":(n,t)=>{t.data._beginMatch!==n[1]&&t.ignoreMatch()}})};var ge=Object.freeze({__proto__:null,MATCH_NOTHING_RE:et,IDENT_RE:Xe,UNDERSCORE_IDENT_RE:Re,NUMBER_RE:Qe,C_NUMBER_RE:Ze,BINARY_NUMBER_RE:Je,RE_STARTERS_RE:nt,SHEBANG:tt,BACKSLASH_ESCAPE:ne,APOS_STRING_MODE:st,QUOTE_STRING_MODE:rt,PHRASAL_WORDS_MODE:it,COMMENT:de,C_LINE_COMMENT_MODE:at,C_BLOCK_COMMENT_MODE:ot,HASH_COMMENT_MODE:ct,NUMBER_MODE:lt,C_NUMBER_MODE:ut,BINARY_NUMBER_MODE:gt,REGEXP_MODE:ft,TITLE_MODE:dt,UNDERSCORE_TITLE_MODE:ht,METHOD_GUARD:_t,END_SAME_AS_BEGIN:pt});function bt(e,n){e.input[e.index-1]==="."&&n.ignoreMatch()}function Et(e,n){e.className!==void 0&&(e.scope=e.className,delete e.className)}function mt(e,n){n&&e.beginKeywords&&(e.begin="\\b("+e.beginKeywords.split(" ").join("|")+")(?!\\.)(?=\\b|\\s)",e.__beforeBegin=bt,e.keywords=e.keywords||e.beginKeywords,delete e.beginKeywords,e.relevance===void 0&&(e.relevance=0))}function yt(e,n){Array.isArray(e.illegal)&&(e.illegal=xe(...e.illegal))}function vt(e,n){if(e.match){if(e.begin||e.end)throw new Error("begin & end are not supported with match");e.begin=e.match,delete e.match}}function wt(e,n){e.relevance===void 0&&(e.relevance=1)}const Nt=(e,n)=>{if(!e.beforeMatch)return;if(e.starts)throw new Error("beforeMatch cannot be used with starts");const t=Object.assign({},e);Object.keys(e).forEach(o=>{delete e[o]}),e.keywords=t.keywords,e.begin=V(t.beforeMatch,Ve(t.begin)),e.starts={relevance:0,contains:[Object.assign(t,{endsParent:!0})]},e.relevance=0,delete t.beforeMatch},xt=["of","and","for","in","not","or","if","then","parent","list","value"],Mt="keyword";function en(e,n,t=Mt){const o=Object.create(null);return typeof e=="string"?g(t,e.split(" ")):Array.isArray(e)?g(t,e):Object.keys(e).forEach(function(f){Object.assign(o,en(e[f],n,f))}),o;function g(f,i){n&&(i=i.map(r=>r.toLowerCase())),i.forEach(function(r){const c=r.split("|");o[c[0]]=[f,Rt(c[0],c[1])]})}}function Rt(e,n){return n?Number(n):Ot(e)?0:1}function Ot(e){return xt.includes(e.toLowerCase())}const Pe={},Y=e=>{console.error(e)},He=(e,...n)=>{console.log(`WARN: ${e}`,...n)},X=(e,n)=>{Pe[`${e}/${n}`]||(console.log(`Deprecated as of ${e}. ${n}`),Pe[`${e}/${n}`]=!0)},fe=new Error;function nn(e,n,{key:t}){let o=0;const g=e[t],f={},i={};for(let r=1;r<=n.length;r++)i[r+o]=g[r],f[r+o]=!0,o+=qe(n[r-1]);e[t]=i,e[t]._emit=f,e[t]._multi=!0}function St(e){if(Array.isArray(e.begin)){if(e.skip||e.excludeBegin||e.returnBegin)throw Y("skip, excludeBegin, returnBegin not compatible with beginScope: {}"),fe;if(typeof e.beginScope!="object"||e.beginScope===null)throw Y("beginScope must be object"),fe;nn(e,e.begin,{key:"beginScope"}),e.begin=Me(e.begin,{joinWith:""})}}function Tt(e){if(Array.isArray(e.end)){if(e.skip||e.excludeEnd||e.returnEnd)throw Y("skip, excludeEnd, returnEnd not compatible with endScope: {}"),fe;if(typeof e.endScope!="object"||e.endScope===null)throw Y("endScope must be object"),fe;nn(e,e.end,{key:"endScope"}),e.end=Me(e.end,{joinWith:""})}}function At(e){e.scope&&typeof e.scope=="object"&&e.scope!==null&&(e.beginScope=e.scope,delete e.scope)}function Ct(e){At(e),typeof e.beginScope=="string"&&(e.beginScope={_wrap:e.beginScope}),typeof e.endScope=="string"&&(e.endScope={_wrap:e.endScope}),St(e),Tt(e)}function Lt(e){function n(i,r){return new RegExp(ee(i),"m"+(e.case_insensitive?"i":"")+(e.unicodeRegex?"u":"")+(r?"g":""))}class t{constructor(){this.matchIndexes={},this.regexes=[],this.matchAt=1,this.position=0}addRule(r,c){c.position=this.position++,this.matchIndexes[this.matchAt]=c,this.regexes.push([c,r]),this.matchAt+=qe(r)+1}compile(){this.regexes.length===0&&(this.exec=()=>null);const r=this.regexes.map(c=>c[1]);this.matcherRe=n(Me(r,{joinWith:"|"}),!0),this.lastIndex=0}exec(r){this.matcherRe.lastIndex=this.lastIndex;const c=this.matcherRe.exec(r);if(!c)return null;const _=c.findIndex((S,w)=>w>0&&S!==void 0),b=this.matchIndexes[_];return c.splice(0,_),Object.assign(c,b)}}class o{constructor(){this.rules=[],this.multiRegexes=[],this.count=0,this.lastIndex=0,this.regexIndex=0}getMatcher(r){if(this.multiRegexes[r])return this.multiRegexes[r];const c=new t;return this.rules.slice(r).forEach(([_,b])=>c.addRule(_,b)),c.compile(),this.multiRegexes[r]=c,c}resumingScanAtSamePosition(){return this.regexIndex!==0}considerAll(){this.regexIndex=0}addRule(r,c){this.rules.push([r,c]),c.type==="begin"&&this.count++}exec(r){const c=this.getMatcher(this.regexIndex);c.lastIndex=this.lastIndex;let _=c.exec(r);if(this.resumingScanAtSamePosition()&&!(_&&_.index===this.lastIndex)){const b=this.getMatcher(0);b.lastIndex=this.lastIndex+1,_=b.exec(r)}return _&&(this.regexIndex+=_.position+1,this.regexIndex===this.count&&this.considerAll()),_}}function g(i){const r=new o;return i.contains.forEach(c=>r.addRule(c.begin,{rule:c,type:"begin"})),i.terminatorEnd&&r.addRule(i.terminatorEnd,{type:"end"}),i.illegal&&r.addRule(i.illegal,{type:"illegal"}),r}function f(i,r){const c=i;if(i.isCompiled)return c;[Et,vt,Ct,Nt].forEach(b=>b(i,r)),e.compilerExtensions.forEach(b=>b(i,r)),i.__beforeBegin=null,[mt,yt,wt].forEach(b=>b(i,r)),i.isCompiled=!0;let _=null;return typeof i.keywords=="object"&&i.keywords.$pattern&&(i.keywords=Object.assign({},i.keywords),_=i.keywords.$pattern,delete i.keywords.$pattern),_=_||/\w+/,i.keywords&&(i.keywords=en(i.keywords,e.case_insensitive)),c.keywordPatternRe=n(_,!0),r&&(i.begin||(i.begin=/\B|\b/),c.beginRe=n(c.begin),!i.end&&!i.endsWithParent&&(i.end=/\B|\b/),i.end&&(c.endRe=n(c.end)),c.terminatorEnd=ee(c.end)||"",i.endsWithParent&&r.terminatorEnd&&(c.terminatorEnd+=(i.end?"|":"")+r.terminatorEnd)),i.illegal&&(c.illegalRe=n(i.illegal)),i.contains||(i.contains=[]),i.contains=[].concat(...i.contains.map(function(b){return kt(b==="self"?i:b)})),i.contains.forEach(function(b){f(b,c)}),i.starts&&f(i.starts,r),c.matcher=g(c),c}if(e.compilerExtensions||(e.compilerExtensions=[]),e.contains&&e.contains.includes("self"))throw new Error("ERR: contains `self` is not supported at the top-level of a language.  See documentation.");return e.classNameAliases=K(e.classNameAliases||{}),f(e)}function tn(e){return e?e.endsWithParent||tn(e.starts):!1}function kt(e){return e.variants&&!e.cachedVariants&&(e.cachedVariants=e.variants.map(function(n){return K(e,{variants:null},n)})),e.cachedVariants?e.cachedVariants:tn(e)?K(e,{starts:e.starts?K(e.starts):null}):Object.isFrozen(e)?K(e):e}var It="11.7.0";class jt extends Error{constructor(n,t){super(n),this.name="HTMLInjectionError",this.html=t}}const ye=Ye,Ue=K,ze=Symbol("nomatch"),$t=7,Dt=function(e){const n=Object.create(null),t=Object.create(null),o=[];let g=!0;const f="Could not find the language '{}', did you forget to load/include a language module?",i={disableAutodetect:!0,name:"Plain text",contains:[]};let r={ignoreUnescapedHTML:!1,throwUnescapedHTML:!1,noHighlightRe:/^(no-?highlight)$/i,languageDetectRe:/\blang(?:uage)?-([\w-]+)\b/i,classPrefix:"hljs-",cssSelector:"pre code",languages:null,__emitter:Vn};function c(s){return r.noHighlightRe.test(s)}function _(s){let u=s.className+" ";u+=s.parentNode?s.parentNode.className:"";const p=r.languageDetectRe.exec(u);if(p){const y=B(p[1]);return y||(He(f.replace("{}",p[1])),He("Falling back to no-highlight mode for this block.",s)),y?p[1]:"no-highlight"}return u.split(/\s+/).find(y=>c(y)||B(y))}function b(s,u,p){let y="",R="";typeof u=="object"?(y=s,p=u.ignoreIllegals,R=u.language):(X("10.7.0","highlight(lang, code, ...args) has been deprecated."),X("10.7.0",`Please use highlight(code, options) instead.
https://github.com/highlightjs/highlight.js/issues/2277`),R=s,y=u),p===void 0&&(p=!0);const j={code:y,language:R};ae("before:highlight",j);const H=j.result?j.result:S(j.language,j.code,p);return H.code=j.code,ae("after:highlight",H),H}function S(s,u,p,y){const R=Object.create(null);function j(a,l){return a.keywords[l]}function H(){if(!d.keywords){O.addText(v);return}let a=0;d.keywordPatternRe.lastIndex=0;let l=d.keywordPatternRe.exec(v),h="";for(;l;){h+=v.substring(a,l.index);const m=z.case_insensitive?l[0].toLowerCase():l[0],C=j(d,m);if(C){const[P,gn]=C;if(O.addText(h),h="",R[m]=(R[m]||0)+1,R[m]<=$t&&(le+=gn),P.startsWith("_"))h+=l[0];else{const fn=z.classNameAliases[P]||P;O.addKeyword(l[0],fn)}}else h+=l[0];a=d.keywordPatternRe.lastIndex,l=d.keywordPatternRe.exec(v)}h+=v.substring(a),O.addText(h)}function oe(){if(v==="")return;let a=null;if(typeof d.subLanguage=="string"){if(!n[d.subLanguage]){O.addText(v);return}a=S(d.subLanguage,v,!0,Ae[d.subLanguage]),Ae[d.subLanguage]=a._top}else a=E(v,d.subLanguage.length?d.subLanguage:null);d.relevance>0&&(le+=a.relevance),O.addSublanguage(a._emitter,a.language)}function L(){d.subLanguage!=null?oe():H(),v=""}function U(a,l){let h=1;const m=l.length-1;for(;h<=m;){if(!a._emit[h]){h++;continue}const C=z.classNameAliases[a[h]]||a[h],P=l[h];C?O.addKeyword(P,C):(v=P,H(),v=""),h++}}function Oe(a,l){return a.scope&&typeof a.scope=="string"&&O.openNode(z.classNameAliases[a.scope]||a.scope),a.beginScope&&(a.beginScope._wrap?(O.addKeyword(v,z.classNameAliases[a.beginScope._wrap]||a.beginScope._wrap),v=""):a.beginScope._multi&&(U(a.beginScope,l),v="")),d=Object.create(a,{parent:{value:d}}),d}function Se(a,l,h){let m=Zn(a.endRe,h);if(m){if(a["on:end"]){const C=new $e(a);a["on:end"](l,C),C.isMatchIgnored&&(m=!1)}if(m){for(;a.endsParent&&a.parent;)a=a.parent;return a}}if(a.endsWithParent)return Se(a.parent,l,h)}function an(a){return d.matcher.regexIndex===0?(v+=a[0],1):(be=!0,0)}function on(a){const l=a[0],h=a.rule,m=new $e(h),C=[h.__beforeBegin,h["on:begin"]];for(const P of C)if(P&&(P(a,m),m.isMatchIgnored))return an(l);return h.skip?v+=l:(h.excludeBegin&&(v+=l),L(),!h.returnBegin&&!h.excludeBegin&&(v=l)),Oe(h,a),h.returnBegin?0:l.length}function cn(a){const l=a[0],h=u.substring(a.index),m=Se(d,a,h);if(!m)return ze;const C=d;d.endScope&&d.endScope._wrap?(L(),O.addKeyword(l,d.endScope._wrap)):d.endScope&&d.endScope._multi?(L(),U(d.endScope,a)):C.skip?v+=l:(C.returnEnd||C.excludeEnd||(v+=l),L(),C.excludeEnd&&(v=l));do d.scope&&O.closeNode(),!d.skip&&!d.subLanguage&&(le+=d.relevance),d=d.parent;while(d!==m.parent);return m.starts&&Oe(m.starts,a),C.returnEnd?0:l.length}function ln(){const a=[];for(let l=d;l!==z;l=l.parent)l.scope&&a.unshift(l.scope);a.forEach(l=>O.openNode(l))}let ce={};function Te(a,l){const h=l&&l[0];if(v+=a,h==null)return L(),0;if(ce.type==="begin"&&l.type==="end"&&ce.index===l.index&&h===""){if(v+=u.slice(l.index,l.index+1),!g){const m=new Error(`0 width match regex (${s})`);throw m.languageName=s,m.badRule=ce.rule,m}return 1}if(ce=l,l.type==="begin")return on(l);if(l.type==="illegal"&&!p){const m=new Error('Illegal lexeme "'+h+'" for mode "'+(d.scope||"<unnamed>")+'"');throw m.mode=d,m}else if(l.type==="end"){const m=cn(l);if(m!==ze)return m}if(l.type==="illegal"&&h==="")return 1;if(pe>1e5&&pe>l.index*3)throw new Error("potential infinite loop, way more iterations than matches");return v+=h,h.length}const z=B(s);if(!z)throw Y(f.replace("{}",s)),new Error('Unknown language: "'+s+'"');const un=Lt(z);let _e="",d=y||un;const Ae={},O=new r.__emitter(r);ln();let v="",le=0,G=0,pe=0,be=!1;try{for(d.matcher.considerAll();;){pe++,be?be=!1:d.matcher.considerAll(),d.matcher.lastIndex=G;const a=d.matcher.exec(u);if(!a)break;const l=u.substring(G,a.index),h=Te(l,a);G=a.index+h}return Te(u.substring(G)),O.closeAllNodes(),O.finalize(),_e=O.toHTML(),{language:s,value:_e,relevance:le,illegal:!1,_emitter:O,_top:d}}catch(a){if(a.message&&a.message.includes("Illegal"))return{language:s,value:ye(u),illegal:!0,relevance:0,_illegalBy:{message:a.message,index:G,context:u.slice(G-100,G+100),mode:a.mode,resultSoFar:_e},_emitter:O};if(g)return{language:s,value:ye(u),illegal:!1,relevance:0,errorRaised:a,_emitter:O,_top:d};throw a}}function w(s){const u={value:ye(s),illegal:!1,relevance:0,_top:i,_emitter:new r.__emitter(r)};return u._emitter.addText(s),u}function E(s,u){u=u||r.languages||Object.keys(n);const p=w(s),y=u.filter(B).filter(re).map(L=>S(L,s,!1));y.unshift(p);const R=y.sort((L,U)=>{if(L.relevance!==U.relevance)return U.relevance-L.relevance;if(L.language&&U.language){if(B(L.language).supersetOf===U.language)return 1;if(B(U.language).supersetOf===L.language)return-1}return 0}),[j,H]=R,oe=j;return oe.secondBest=H,oe}function x(s,u,p){const y=u&&t[u]||p;s.classList.add("hljs"),s.classList.add(`language-${y}`)}function N(s){let u=null;const p=_(s);if(c(p))return;if(ae("before:highlightElement",{el:s,language:p}),s.children.length>0&&(r.ignoreUnescapedHTML||(console.warn("One of your code blocks includes unescaped HTML. This is a potentially serious security risk."),console.warn("https://github.com/highlightjs/highlight.js/wiki/security"),console.warn("The element with unescaped HTML:"),console.warn(s)),r.throwUnescapedHTML))throw new jt("One of your code blocks includes unescaped HTML.",s.innerHTML);u=s;const y=u.textContent,R=p?b(y,{language:p,ignoreIllegals:!0}):E(y);s.innerHTML=R.value,x(s,p,R.language),s.result={language:R.language,re:R.relevance,relevance:R.relevance},R.secondBest&&(s.secondBest={language:R.secondBest.language,relevance:R.secondBest.relevance}),ae("after:highlightElement",{el:s,result:R,text:y})}function M(s){r=Ue(r,s)}const T=()=>{k(),X("10.6.0","initHighlighting() deprecated.  Use highlightAll() now.")};function $(){k(),X("10.6.0","initHighlightingOnLoad() deprecated.  Use highlightAll() now.")}let A=!1;function k(){if(document.readyState==="loading"){A=!0;return}document.querySelectorAll(r.cssSelector).forEach(N)}function Z(){A&&k()}typeof window<"u"&&window.addEventListener&&window.addEventListener("DOMContentLoaded",Z,!1);function J(s,u){let p=null;try{p=u(e)}catch(y){if(Y("Language definition for '{}' could not be registered.".replace("{}",s)),g)Y(y);else throw y;p=i}p.name||(p.name=s),n[s]=p,p.rawDefinition=u.bind(null,e),p.aliases&&se(p.aliases,{languageName:s})}function D(s){delete n[s];for(const u of Object.keys(t))t[u]===s&&delete t[u]}function he(){return Object.keys(n)}function B(s){return s=(s||"").toLowerCase(),n[s]||n[t[s]]}function se(s,{languageName:u}){typeof s=="string"&&(s=[s]),s.forEach(p=>{t[p.toLowerCase()]=u})}function re(s){const u=B(s);return u&&!u.disableAutodetect}function ie(s){s["before:highlightBlock"]&&!s["before:highlightElement"]&&(s["before:highlightElement"]=u=>{s["before:highlightBlock"](Object.assign({block:u.el},u))}),s["after:highlightBlock"]&&!s["after:highlightElement"]&&(s["after:highlightElement"]=u=>{s["after:highlightBlock"](Object.assign({block:u.el},u))})}function sn(s){ie(s),o.push(s)}function ae(s,u){const p=s;o.forEach(function(y){y[p]&&y[p](u)})}function rn(s){return X("10.7.0","highlightBlock will be removed entirely in v12.0"),X("10.7.0","Please use highlightElement now."),N(s)}Object.assign(e,{highlight:b,highlightAuto:E,highlightAll:k,highlightElement:N,highlightBlock:rn,configure:M,initHighlighting:T,initHighlightingOnLoad:$,registerLanguage:J,unregisterLanguage:D,listLanguages:he,getLanguage:B,registerAliases:se,autoDetection:re,inherit:Ue,addPlugin:sn}),e.debugMode=function(){g=!1},e.safeMode=function(){g=!0},e.versionString=It,e.regex={concat:V,lookahead:Ve,either:xe,optional:Xn,anyNumberOfTimes:qn};for(const s in ge)typeof ge[s]=="object"&&ve.exports(ge[s]);return Object.assign(e,ge),e};var te=Dt({}),Bt=te;te.HighlightJS=te;te.default=te;const F=vn(Bt);function Pt(e){const n={className:"attr",begin:/"(\\.|[^\\"\r\n])*"(?=\s*:)/,relevance:1.01},t={match:/[{}[\],:]/,className:"punctuation",relevance:0},o=["true","false","null"],g={scope:"literal",beginKeywords:o.join(" ")};return{name:"JSON",keywords:{literal:o},contains:[n,t,e.QUOTE_STRING_MODE,g,e.C_NUMBER_MODE,e.C_LINE_COMMENT_MODE,e.C_BLOCK_COMMENT_MODE],illegal:"\\S"}}function Ht(e){const n=e.regex,t=e.COMMENT("--","$"),o={className:"string",variants:[{begin:/'/,end:/'/,contains:[{begin:/''/}]}]},g={begin:/"/,end:/"/,contains:[{begin:/""/}]},f=["true","false","unknown"],i=["double precision","large object","with timezone","without timezone"],r=["bigint","binary","blob","boolean","char","character","clob","date","dec","decfloat","decimal","float","int","integer","interval","nchar","nclob","national","numeric","real","row","smallint","time","timestamp","varchar","varying","varbinary"],c=["add","asc","collation","desc","final","first","last","view"],_=["abs","acos","all","allocate","alter","and","any","are","array","array_agg","array_max_cardinality","as","asensitive","asin","asymmetric","at","atan","atomic","authorization","avg","begin","begin_frame","begin_partition","between","bigint","binary","blob","boolean","both","by","call","called","cardinality","cascaded","case","cast","ceil","ceiling","char","char_length","character","character_length","check","classifier","clob","close","coalesce","collate","collect","column","commit","condition","connect","constraint","contains","convert","copy","corr","corresponding","cos","cosh","count","covar_pop","covar_samp","create","cross","cube","cume_dist","current","current_catalog","current_date","current_default_transform_group","current_path","current_role","current_row","current_schema","current_time","current_timestamp","current_path","current_role","current_transform_group_for_type","current_user","cursor","cycle","date","day","deallocate","dec","decimal","decfloat","declare","default","define","delete","dense_rank","deref","describe","deterministic","disconnect","distinct","double","drop","dynamic","each","element","else","empty","end","end_frame","end_partition","end-exec","equals","escape","every","except","exec","execute","exists","exp","external","extract","false","fetch","filter","first_value","float","floor","for","foreign","frame_row","free","from","full","function","fusion","get","global","grant","group","grouping","groups","having","hold","hour","identity","in","indicator","initial","inner","inout","insensitive","insert","int","integer","intersect","intersection","interval","into","is","join","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","language","large","last_value","lateral","lead","leading","left","like","like_regex","listagg","ln","local","localtime","localtimestamp","log","log10","lower","match","match_number","match_recognize","matches","max","member","merge","method","min","minute","mod","modifies","module","month","multiset","national","natural","nchar","nclob","new","no","none","normalize","not","nth_value","ntile","null","nullif","numeric","octet_length","occurrences_regex","of","offset","old","omit","on","one","only","open","or","order","out","outer","over","overlaps","overlay","parameter","partition","pattern","per","percent","percent_rank","percentile_cont","percentile_disc","period","portion","position","position_regex","power","precedes","precision","prepare","primary","procedure","ptf","range","rank","reads","real","recursive","ref","references","referencing","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","release","result","return","returns","revoke","right","rollback","rollup","row","row_number","rows","running","savepoint","scope","scroll","search","second","seek","select","sensitive","session_user","set","show","similar","sin","sinh","skip","smallint","some","specific","specifictype","sql","sqlexception","sqlstate","sqlwarning","sqrt","start","static","stddev_pop","stddev_samp","submultiset","subset","substring","substring_regex","succeeds","sum","symmetric","system","system_time","system_user","table","tablesample","tan","tanh","then","time","timestamp","timezone_hour","timezone_minute","to","trailing","translate","translate_regex","translation","treat","trigger","trim","trim_array","true","truncate","uescape","union","unique","unknown","unnest","update","upper","user","using","value","values","value_of","var_pop","var_samp","varbinary","varchar","varying","versioning","when","whenever","where","width_bucket","window","with","within","without","year"],b=["abs","acos","array_agg","asin","atan","avg","cast","ceil","ceiling","coalesce","corr","cos","cosh","count","covar_pop","covar_samp","cume_dist","dense_rank","deref","element","exp","extract","first_value","floor","json_array","json_arrayagg","json_exists","json_object","json_objectagg","json_query","json_table","json_table_primitive","json_value","lag","last_value","lead","listagg","ln","log","log10","lower","max","min","mod","nth_value","ntile","nullif","percent_rank","percentile_cont","percentile_disc","position","position_regex","power","rank","regr_avgx","regr_avgy","regr_count","regr_intercept","regr_r2","regr_slope","regr_sxx","regr_sxy","regr_syy","row_number","sin","sinh","sqrt","stddev_pop","stddev_samp","substring","substring_regex","sum","tan","tanh","translate","translate_regex","treat","trim","trim_array","unnest","upper","value_of","var_pop","var_samp","width_bucket"],S=["current_catalog","current_date","current_default_transform_group","current_path","current_role","current_schema","current_transform_group_for_type","current_user","session_user","system_time","system_user","current_time","localtime","current_timestamp","localtimestamp"],w=["create table","insert into","primary key","foreign key","not null","alter table","add constraint","grouping sets","on overflow","character set","respect nulls","ignore nulls","nulls first","nulls last","depth first","breadth first"],E=b,x=[..._,...c].filter(A=>!b.includes(A)),N={className:"variable",begin:/@[a-z0-9]+/},M={className:"operator",begin:/[-+*/=%^~]|&&?|\|\|?|!=?|<(?:=>?|<|>)?|>[>=]?/,relevance:0},T={begin:n.concat(/\b/,n.either(...E),/\s*\(/),relevance:0,keywords:{built_in:E}};function $(A,{exceptions:k,when:Z}={}){const J=Z;return k=k||[],A.map(D=>D.match(/\|\d+$/)||k.includes(D)?D:J(D)?`${D}|0`:D)}return{name:"SQL",case_insensitive:!0,illegal:/[{}]|<\//,keywords:{$pattern:/\b[\w\.]+/,keyword:$(x,{when:A=>A.length<3}),literal:f,type:r,built_in:S},contains:[{begin:n.either(...w),relevance:0,keywords:{$pattern:/[\w\.]+/,keyword:x.concat(w),literal:f,type:r}},{className:"type",begin:n.either(...i)},T,N,o,g,e.C_NUMBER_MODE,e.C_BLOCK_COMMENT_MODE,t,M]}}function Ke(e){const n=e.regex,t=n.concat(/[\p{L}_]/u,n.optional(/[\p{L}0-9_.-]*:/u),/[\p{L}0-9_.-]*/u),o=/[\p{L}0-9._:-]+/u,g={className:"symbol",begin:/&[a-z]+;|&#[0-9]+;|&#x[a-f0-9]+;/},f={begin:/\s/,contains:[{className:"keyword",begin:/#?[a-z_][a-z1-9_-]+/,illegal:/\n/}]},i=e.inherit(f,{begin:/\(/,end:/\)/}),r=e.inherit(e.APOS_STRING_MODE,{className:"string"}),c=e.inherit(e.QUOTE_STRING_MODE,{className:"string"}),_={endsWithParent:!0,illegal:/</,relevance:0,contains:[{className:"attr",begin:o,relevance:0},{begin:/=\s*/,relevance:0,contains:[{className:"string",endsParent:!0,variants:[{begin:/"/,end:/"/,contains:[g]},{begin:/'/,end:/'/,contains:[g]},{begin:/[^\s"'=<>`]+/}]}]}]};return{name:"HTML, XML",aliases:["html","xhtml","rss","atom","xjb","xsd","xsl","plist","wsf","svg"],case_insensitive:!0,unicodeRegex:!0,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,relevance:10,contains:[f,c,r,i,{begin:/\[/,end:/\]/,contains:[{className:"meta",begin:/<![a-z]/,end:/>/,contains:[f,i,c,r]}]}]},e.COMMENT(/<!--/,/-->/,{relevance:10}),{begin:/<!\[CDATA\[/,end:/\]\]>/,relevance:10},g,{className:"meta",end:/\?>/,variants:[{begin:/<\?xml/,relevance:10,contains:[c]},{begin:/<\?[a-z][a-z0-9]+/}]},{className:"tag",begin:/<style(?=\s|>)/,end:/>/,keywords:{name:"style"},contains:[_],starts:{end:/<\/style>/,returnEnd:!0,subLanguage:["css","xml"]}},{className:"tag",begin:/<script(?=\s|>)/,end:/>/,keywords:{name:"script"},contains:[_],starts:{end:/<\/script>/,returnEnd:!0,subLanguage:["javascript","handlebars","xml"]}},{className:"tag",begin:/<>|<\/>/},{className:"tag",begin:n.concat(/</,n.lookahead(n.concat(t,n.either(/\/>/,/>/,/\s/)))),end:/\/?>/,contains:[{className:"name",begin:t,relevance:0,starts:_}]},{className:"tag",begin:n.concat(/<\//,n.lookahead(n.concat(t,/>/))),contains:[{className:"name",begin:t,relevance:0},{begin:/>/,relevance:0,endsParent:!0}]}]}}function Ut(e){const n="true false yes no null",t="[\\w#;/?:@&=+$,.~*'()[\\]]+",o={className:"attr",variants:[{begin:"\\w[\\w :\\/.-]*:(?=[ 	]|$)"},{begin:'"\\w[\\w :\\/.-]*":(?=[ 	]|$)'},{begin:"'\\w[\\w :\\/.-]*':(?=[ 	]|$)"}]},g={className:"template-variable",variants:[{begin:/\{\{/,end:/\}\}/},{begin:/%\{/,end:/\}/}]},f={className:"string",relevance:0,variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/\S+/}],contains:[e.BACKSLASH_ESCAPE,g]},i=e.inherit(f,{variants:[{begin:/'/,end:/'/},{begin:/"/,end:/"/},{begin:/[^\s,{}[\]]+/}]}),r="[0-9]{4}(-[0-9][0-9]){0,2}",c="([Tt \\t][0-9][0-9]?(:[0-9][0-9]){2})?",_="(\\.[0-9]*)?",b="([ \\t])*(Z|[-+][0-9][0-9]?(:[0-9][0-9])?)?",S={className:"number",begin:"\\b"+r+c+_+b+"\\b"},w={end:",",endsWithParent:!0,excludeEnd:!0,keywords:n,relevance:0},E={begin:/\{/,end:/\}/,contains:[w],illegal:"\\n",relevance:0},x={begin:"\\[",end:"\\]",contains:[w],illegal:"\\n",relevance:0},N=[o,{className:"meta",begin:"^---\\s*$",relevance:10},{className:"string",begin:"[\\|>]([1-9]?[+-])?[ ]*\\n( +)[^ ][^\\n]*\\n(\\2[^\\n]+\\n?)*"},{begin:"<%[%=-]?",end:"[%-]?%>",subLanguage:"ruby",excludeBegin:!0,excludeEnd:!0,relevance:0},{className:"type",begin:"!\\w+!"+t},{className:"type",begin:"!<"+t+">"},{className:"type",begin:"!"+t},{className:"type",begin:"!!"+t},{className:"meta",begin:"&"+e.UNDERSCORE_IDENT_RE+"$"},{className:"meta",begin:"\\*"+e.UNDERSCORE_IDENT_RE+"$"},{className:"bullet",begin:"-(?=[ ]|$)",relevance:0},e.HASH_COMMENT_MODE,{beginKeywords:n,keywords:{literal:n}},S,{className:"number",begin:e.C_NUMBER_RE+"\\b",relevance:0},E,x,f],M=[...N];return M.pop(),M.push(i),w.contains=M,{name:"YAML",case_insensitive:!0,aliases:["yml"],contains:N}}function zt(e){const n=e.regex,t={className:"number",relevance:0,variants:[{begin:/([+-]+)?[\d]+_[\d_]+/},{begin:e.NUMBER_RE}]},o=e.COMMENT();o.variants=[{begin:/;/,end:/$/},{begin:/#/,end:/$/}];const g={className:"variable",variants:[{begin:/\$[\w\d"][\w\d_]*/},{begin:/\$\{(.*?)\}/}]},f={className:"literal",begin:/\bon|off|true|false|yes|no\b/},i={className:"string",contains:[e.BACKSLASH_ESCAPE],variants:[{begin:"'''",end:"'''",relevance:10},{begin:'"""',end:'"""',relevance:10},{begin:'"',end:'"'},{begin:"'",end:"'"}]},r={begin:/\[/,end:/\]/,contains:[o,f,g,i,t,"self"],relevance:0},c=/[A-Za-z0-9_-]+/,_=/"(\\"|[^"])*"/,b=/'[^']*'/,S=n.either(c,_,b),w=n.concat(S,"(\\s*\\.\\s*",S,")*",n.lookahead(/\s*=\s*[^#\s]/));return{name:"TOML, also INI",aliases:["toml"],case_insensitive:!0,illegal:/\S/,contains:[o,{className:"section",begin:/\[+/,end:/\]+/},{begin:w,className:"attr",starts:{end:/$/,contains:[o,r,f,g,i,t]}}]}}const Kt={style:{"overflow-x":"hidden",width:"100%"}},Gt={absolute:"","right-10px":"","top-10px":""},Wt={key:0,"mt-4":"",flex:"","justify-center":""},Ft=Ge({__name:"TextareaCopyable",props:{value:{},followHeightOf:{default:null},language:{default:"txt"},copyPlacement:{default:"top-right"},copyMessage:{default:"Copy to clipboard"}},setup(e){const n=e;F.registerLanguage("sql",Ht),F.registerLanguage("json",Pt),F.registerLanguage("html",Ke),F.registerLanguage("xml",Ke),F.registerLanguage("yaml",Ut),F.registerLanguage("toml",zt);const{value:t,language:o,followHeightOf:g,copyPlacement:f,copyMessage:i}=wn(n),{height:r}=g.value?Nn(g):{height:We(null)},{copy:c,isJustCopied:_}=xn({source:t,createToast:!1}),b=Q(()=>_.value?"Copied!":i.value);return(S,w)=>{const E=Gn,x=An,N=Dn,M=Cn,T=Ln,$=kn,A=In;return me(),Ie("div",Kt,[W(A,{relative:""},{default:q(()=>[W(N,{"x-scrollable":"",trigger:"none",style:Mn(I(r)?`min-height: ${I(r)-40+10}px`:"")},{default:q(()=>[W(x,{hljs:I(F)},{default:q(()=>[W(E,{code:I(t),language:I(o),trim:!1,"data-test-id":"area-content"},null,8,["code","language"])]),_:1},8,["hljs"])]),_:1},8,["style"]),Rn("div",Gt,[I(t)?(me(),On($,{key:0,tooltip:I(b),position:"left"},{default:q(()=>[W(T,{circle:"","important:h-10":"","important:w-10":"",onClick:w[0]||(w[0]=k=>I(c)())},{default:q(()=>[W(M,{size:"22",component:I($n)},null,8,["component"])]),_:1})]),_:1},8,["tooltip"])):je("",!0)])]),_:1}),I(f)==="outside"?(me(),Ie("div",Wt,[W(T,{onClick:w[1]||(w[1]=k=>I(c)())},{default:q(()=>[Sn(Tn(I(b)),1)]),_:1})])):je("",!0)])}}});const Xt=jn(Ft,[["__scopeId","data-v-486e5d1f"]]);export{Xt as T};

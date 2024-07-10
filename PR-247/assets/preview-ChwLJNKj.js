import{j as n}from"./jsx-runtime-CKrituN3.js";import{c as S,e as T,G as c,t as u,g as v,a as P}from"./index-D2m8a1IB.js";import{R as r}from"./index-CBqU2yxZ.js";import{a as _}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./index-BtM5VmRH.js";import{t as F}from"./chunk-EIRT5I3Z-CbnHSNsj.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-DJVMZnyl.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";const x=o=>S`
  ${T}

  *,
  *:before,
  *:after {
    box-sizing: inherit;
    padding: 0;
    margin: 0;
  }

  html {
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: greyscale;
    font-family: ${o.fontFamily.default};
    box-sizing: border-box;
  }

  body {
    font-family: ${o.fontFamily.default};
    width: 100%;
    min-height: 100vh;

    ${o.fontStyles.p}
  }

  a {
    text-decoration: none;
    cursor: pointer;
  }
`,R=({theme:o=u,webFonts:t=[],children:e})=>n.jsxs(n.Fragment,{children:[n.jsx(c,{styles:[x(o),...t]}),n.jsx(_,{theme:o,children:e})]}),{useParameter:D,addons:A,useEffect:oo,useMemo:W}=__STORYBOOK_MODULE_PREVIEW_API__;var k=Object.defineProperty,C=(o,t)=>{for(var e in t)k(o,e,{get:t[e],enumerable:!0})},I={};C(I,{initializeThemeState:()=>y,pluckThemeFromContext:()=>d,useThemeParameters:()=>b});var h="themes",M=`storybook/${h}}`,O="theme",j={},G={REGISTER_THEMES:`${M}/REGISTER_THEMES`};function d({globals:o}){return o[O]||""}function b(){return D(h,j)}function y(o,t){A.getChannel().emit(G.REGISTER_THEMES,{defaultTheme:t,themes:o})}var $=([o,t])=>t,z=({Provider:o,GlobalStyles:t,defaultTheme:e,themes:f={}})=>{let a=Object.keys(f),i=e||a[0];return y(a,i),(l,g)=>{let{themeOverride:s}=b(),m=d(g),w=W(()=>{let E=s||m||i,p=Object.entries(f);return p.length===1?$(p[0]):f[E]},[f,m,s]);return o?r.createElement(o,{theme:w},t&&r.createElement(t,null),l()):r.createElement(r.Fragment,null,t&&r.createElement(t,null),l())}};const N=[{"@font-face":{fontFamily:"Roboto",fontStyle:"normal",fontWeight:400,src:"url(/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff) format('woff'), url(/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Roboto",fontStyle:"italic",fontWeight:400,src:"url(/fonts/roboto-v30-latin/roboto-v30-latin-italic.woff) format('woff'), url(/fonts/roboto-v30-latin/roboto-v30-latin-italic.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Roboto",fontStyle:"normal",fontWeight:900,src:"url(/fonts/roboto-v30-latin/roboto-v30-latin-900.woff) format('woff'), url(/fonts/roboto-v30-latin/roboto-v30-latin-900.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,src:"url(/fonts/poppins/poppins-regular.woff) format('woff'), url(/fonts/poppins/poppins-regular.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"italic",fontWeight:400,src:"url(/fonts/poppins/poppins-italic.woff) format('woff'), url(/fonts/poppins/poppins-italic.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:600,src:"url(/fonts/poppins/poppins-semi-bold.woff) format('woff'), url(/fonts/poppins/poppins-semi-bold.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:700,src:"url(/fonts/poppins/poppins-bold.woff) format('woff'), url(/fonts/poppins/poppins-bold.woff2) format('woff2')"}},{"@font-face":{fontFamily:"DaimlerCSPro",fontStyle:"normal",fontWeight:400,src:"url(/fonts/daimler-cs-pro/DaimlerCSPro-Regular.otf) format('opentype')"}},{"@font-face":{fontFamily:"DaimlerCSPro",fontStyle:"normal",fontWeight:700,src:"url(/fonts/daimler-cs-pro/DaimlerCSPro-Bold.otf) format('opentype')"}},{"@font-face":{fontFamily:"DaimlerCSPro",fontStyle:"italic",fontWeight:400,src:"url(/fonts/daimler-cs-pro/DaimlerCSPro-Italic.otf) format('opentype')"}}],H=()=>n.jsx(c,{styles:[...N]}),to=[z({themes:{Default:u,Greenlane:v,TruckAPI:P},defaultTheme:"Default",Provider:R,GlobalStyles:H})],eo={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},viewMode:"docs",previewTabs:{"storybook/docs/panel":{index:-1},canvas:{title:"Sandbox"}},options:{storySort:{order:["Contribution Guidelines","Foundations","*"]}},docs:{theme:F.light}}};export{to as decorators,eo as default};

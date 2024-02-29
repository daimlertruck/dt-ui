import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{c as S,G as c}from"./emotion-react.browser.esm-OUs2k2GK.js";import{R as r}from"./index-4g5l5LRQ.js";import{e as T,t as u,g as v,a as P}from"./index-ZSUVOW7k.js";import{a as _}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./index-jmm5gWkb.js";import{t as F}from"./chunk-ZGA76URP-Uk8hDnuP.js";import"./extends-E30VzY7q.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";const x=o=>S`
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
`,R=({theme:o=u,webFonts:t=[],children:e})=>n.jsxs(n.Fragment,{children:[n.jsx(c,{styles:[x(o),...t]}),n.jsx(_,{theme:o,children:e})]}),{useParameter:D,addons:A,useEffect:to,useMemo:W}=__STORYBOOK_MODULE_PREVIEW_API__;var k=Object.defineProperty,C=(o,t)=>{for(var e in t)k(o,e,{get:t[e],enumerable:!0})},I={};C(I,{initializeThemeState:()=>y,pluckThemeFromContext:()=>d,useThemeParameters:()=>b});var h="themes",M=`storybook/${h}}`,O="theme",j={},G={REGISTER_THEMES:`${M}/REGISTER_THEMES`};function d({globals:o}){return o[O]||""}function b(){return D(h,j)}function y(o,t){A.getChannel().emit(G.REGISTER_THEMES,{defaultTheme:t,themes:o})}var $=([o,t])=>t,z=({Provider:o,GlobalStyles:t,defaultTheme:e,themes:f={}})=>{let a=Object.keys(f),i=e||a[0];return y(a,i),(l,g)=>{let{themeOverride:s}=b(),m=d(g),w=W(()=>{let E=s||m||i,p=Object.entries(f);return p.length===1?$(p[0]):f[E]},[f,m,s]);return o?r.createElement(o,{theme:w},t&&r.createElement(t,null),l()):r.createElement(r.Fragment,null,t&&r.createElement(t,null),l())}};const N=[{"@font-face":{fontFamily:"Roboto",fontStyle:"normal",fontWeight:400,src:"url(/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff) format('woff'), url(/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Roboto",fontStyle:"italic",fontWeight:400,src:"url(/fonts/roboto-v30-latin/roboto-v30-latin-italic.woff) format('woff'), url(/fonts/roboto-v30-latin/roboto-v30-latin-italic.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Roboto",fontStyle:"normal",fontWeight:900,src:"url(/fonts/roboto-v30-latin/roboto-v30-latin-900.woff) format('woff'), url(/fonts/roboto-v30-latin/roboto-v30-latin-900.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,src:"url(/fonts/poppins/poppins-regular.woff) format('woff'), url(/fonts/poppins/poppins-regular.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"italic",fontWeight:400,src:"url(/fonts/poppins/poppins-italic.woff) format('woff'), url(/fonts/poppins/poppins-italic.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:600,src:"url(/fonts/poppins/poppins-semi-bold.woff) format('woff'), url(/fonts/poppins/poppins-semi-bold.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:700,src:"url(/fonts/poppins/poppins-bold.woff) format('woff'), url(/fonts/poppins/poppins-bold.woff2) format('woff2')"}},{"@font-face":{fontFamily:"DaimlerCSPro",fontStyle:"normal",fontWeight:400,src:"url(/fonts/daimler-cs-pro/DaimlerCSPro-Regular.otf) format('opentype')"}},{"@font-face":{fontFamily:"DaimlerCSPro",fontStyle:"normal",fontWeight:700,src:"url(/fonts/daimler-cs-pro/DaimlerCSPro-Bold.otf) format('opentype')"}},{"@font-face":{fontFamily:"DaimlerCSPro",fontStyle:"italic",fontWeight:400,src:"url(/fonts/daimler-cs-pro/DaimlerCSPro-Italic.otf) format('opentype')"}}],H=()=>n.jsx(c,{styles:[...N]}),eo=[z({themes:{Default:u,Greenlane:v,TruckAPI:P},defaultTheme:"Default",Provider:R,GlobalStyles:H})],ro={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},viewMode:"docs",previewTabs:{"storybook/docs/panel":{index:-1},canvas:{title:"Sandbox"}},options:{storySort:{order:["Contribution Guidelines","Foundations","*"]}},docs:{theme:F.light}}};export{eo as decorators,ro as default};

import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{c as T,G as u}from"./emotion-react.browser.esm-OUs2k2GK.js";import{R as r}from"./index-4g5l5LRQ.js";import{e as v,t as a,g as P,a as _}from"./index-5j7WHYEJ.js";import{a as F}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./index-jmm5gWkb.js";import{t as x}from"./chunk-ZGA76URP-Uk8hDnuP.js";import"./extends-E30VzY7q.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";const h=o=>T`
  ${v}

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
`,R=({theme:o=a,webFonts:t=[],children:e})=>n.jsxs(n.Fragment,{children:[n.jsx(u,{styles:[h(o),...t]}),n.jsx(F,{theme:o,children:e})]}),{useParameter:D,addons:A,useEffect:to,useMemo:W}=__STORYBOOK_MODULE_PREVIEW_API__;var k=Object.defineProperty,C=(o,t)=>{for(var e in t)k(o,e,{get:t[e],enumerable:!0})},I={};C(I,{initializeThemeState:()=>g,pluckThemeFromContext:()=>b,useThemeParameters:()=>y});var d="themes",M=`storybook/${d}}`,O="theme",j={},G={REGISTER_THEMES:`${M}/REGISTER_THEMES`};function b({globals:o}){return o[O]||""}function y(){return D(d,j)}function g(o,t){A.getChannel().emit(G.REGISTER_THEMES,{defaultTheme:t,themes:o})}var $=([o,t])=>t,z=({Provider:o,GlobalStyles:t,defaultTheme:e,themes:f={}})=>{let i=Object.keys(f),l=e||i[0];return g(i,l),(s,w)=>{let{themeOverride:m}=y(),p=b(w),E=W(()=>{let S=m||p||l,c=Object.entries(f);return c.length===1?$(c[0]):f[S]},[f,p,m]);return o?r.createElement(o,{theme:E},t&&r.createElement(t,null),s()):r.createElement(r.Fragment,null,t&&r.createElement(t,null),s())}};const N=[{"@font-face":{fontFamily:"Roboto",fontStyle:"normal",fontWeight:400,src:"url(/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff) format('woff'), url(/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Roboto",fontStyle:"italic",fontWeight:400,src:"url(/fonts/roboto-v30-latin/roboto-v30-latin-italic.woff) format('woff'), url(/fonts/roboto-v30-latin/roboto-v30-latin-italic.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Roboto",fontStyle:"normal",fontWeight:900,src:"url(/fonts/roboto-v30-latin/roboto-v30-latin-900.woff) format('woff'), url(/fonts/roboto-v30-latin/roboto-v30-latin-900.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,src:"url(/fonts/poppins/poppins-regular.woff) format('woff'), url(/fonts/poppins/poppins-regular.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"italic",fontWeight:400,src:"url(/fonts/poppins/poppins-italic.woff) format('woff'), url(/fonts/poppins/poppins-italic.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:600,src:"url(/fonts/poppins/poppins-semi-bold.woff) format('woff'), url(/fonts/poppins/poppins-semi-bold.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:700,src:"url(/fonts/poppins/poppins-bold.woff) format('woff'), url(/fonts/poppins/poppins-bold.woff2) format('woff2')"}},{"@font-face":{fontFamily:"DaimlerCSPro",fontStyle:"normal",fontWeight:400,src:"url(/fonts/daimler-cs-pro/DaimlerCSPro-Regular.otf) format('opentype')"}},{"@font-face":{fontFamily:"DaimlerCSPro",fontStyle:"normal",fontWeight:700,src:"url(/fonts/daimler-cs-pro/DaimlerCSPro-Bold.otf) format('opentype')"}},{"@font-face":{fontFamily:"DaimlerCSPro",fontStyle:"italic",fontWeight:400,src:"url(/fonts/daimler-cs-pro/DaimlerCSPro-Italic.otf) format('opentype')"}}],H=()=>n.jsx(u,{styles:[h(a),...N]}),eo=[z({themes:{Default:a,Greenlane:P,TruckAPI:_},defaultTheme:"Default",Provider:R,GlobalStyles:H})],ro={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},viewMode:"docs",previewTabs:{"storybook/docs/panel":{index:-1},canvas:{title:"Sandbox"}},options:{storySort:{order:["Contribution Guidelines","Foundations","*"]}},docs:{theme:x.light}}};export{eo as decorators,ro as default};

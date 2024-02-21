import{j as g}from"./jsx-runtime-vNq4Oc-g.js";import{c as E,G as S}from"./emotion-react.browser.esm-OUs2k2GK.js";import{R as e}from"./index-4g5l5LRQ.js";import{e as T,t as p,g as v,a as P}from"./index-4VJbID32.js";import"./index-jmm5gWkb.js";import{t as _}from"./chunk-ZGA76URP-Uk8hDnuP.js";import{a as F}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./extends-E30VzY7q.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";const R=o=>E`
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
`,{useParameter:x,addons:D,useEffect:oo,useMemo:A}=__STORYBOOK_MODULE_PREVIEW_API__;var W=Object.defineProperty,k=(o,t)=>{for(var r in t)W(o,r,{get:t[r],enumerable:!0})},C={};k(C,{initializeThemeState:()=>d,pluckThemeFromContext:()=>u,useThemeParameters:()=>h});var c="themes",I=`storybook/${c}}`,M="theme",O={},$={REGISTER_THEMES:`${I}/REGISTER_THEMES`};function u({globals:o}){return o[M]||""}function h(){return x(c,O)}function d(o,t){D.getChannel().emit($.REGISTER_THEMES,{defaultTheme:t,themes:o})}var G=([o,t])=>t,j=({Provider:o,GlobalStyles:t,defaultTheme:r,themes:n={}})=>{let f=Object.keys(n),a=r||f[0];return d(f,a),(i,b)=>{let{themeOverride:l}=h(),s=u(b),y=A(()=>{let w=l||s||a,m=Object.entries(n);return m.length===1?G(m[0]):n[w]},[n,s,l]);return o?e.createElement(o,{theme:y},t&&e.createElement(t,null),i()):e.createElement(e.Fragment,null,t&&e.createElement(t,null),i())}};const z=[{"@font-face":{fontFamily:"Roboto",fontStyle:"normal",fontWeight:400,src:"url(/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff) format('woff'), url(/fonts/roboto-v30-latin/roboto-v30-latin-regular.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Roboto",fontStyle:"italic",fontWeight:400,src:"url(/fonts/roboto-v30-latin/roboto-v30-latin-italic.woff) format('woff'), url(/fonts/roboto-v30-latin/roboto-v30-latin-italic.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Roboto",fontStyle:"normal",fontWeight:900,src:"url(/fonts/roboto-v30-latin/roboto-v30-latin-900.woff) format('woff'), url(/fonts/roboto-v30-latin/roboto-v30-latin-900.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:400,src:"url(/fonts/poppins/poppins-regular.woff) format('woff'), url(/fonts/poppins/poppins-regular.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"italic",fontWeight:400,src:"url(/fonts/poppins/poppins-italic.woff) format('woff'), url(/fonts/poppins/poppins-italic.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:600,src:"url(/fonts/poppins/poppins-semi-bold.woff) format('woff'), url(/fonts/poppins/poppins-semi-bold.woff2) format('woff2')"}},{"@font-face":{fontFamily:"Poppins",fontStyle:"normal",fontWeight:700,src:"url(/fonts/poppins/poppins-bold.woff) format('woff'), url(/fonts/poppins/poppins-bold.woff2) format('woff2')"}},{"@font-face":{fontFamily:"DaimlerCSPro",fontStyle:"normal",fontWeight:400,src:"url(/fonts/daimler-cs-pro/DaimlerCSPro-Regular.otf) format('opentype')"}},{"@font-face":{fontFamily:"DaimlerCSPro",fontStyle:"normal",fontWeight:700,src:"url(/fonts/daimler-cs-pro/DaimlerCSPro-Bold.otf) format('opentype')"}},{"@font-face":{fontFamily:"DaimlerCSPro",fontStyle:"italic",fontWeight:400,src:"url(/fonts/daimler-cs-pro/DaimlerCSPro-Italic.otf) format('opentype')"}}],N=()=>g.jsx(S,{styles:[R(p),...z]}),to=[j({themes:{Default:p,Greenlane:v,TruckAPI:P},defaultTheme:"Default",Provider:F,GlobalStyles:N})],eo={parameters:{actions:{argTypesRegex:"^on[A-Z].*"},controls:{matchers:{color:/(background|color)$/i,date:/Date$/i}},viewMode:"docs",previewTabs:{"storybook/docs/panel":{index:-1},canvas:{title:"Sandbox"}},options:{storySort:{order:["Contribution Guidelines","Foundations","*"]}},docs:{theme:_.light}}};export{to as decorators,eo as default};

import{j as l}from"./jsx-runtime-CKrituN3.js";import{n as m}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as p}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const f={small:"12px",medium:"16px",large:"24px"},c=m.i`
  ${({size:o,theme:t,variant:e,color:n})=>`
    font-family: DTUI-icons-${t.icons};
    font-weight: normal;
    font-style: normal;
    font-size: ${f[o]};
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    font-variation-settings: 'FILL' ${e==="filled"?1:0};
    color: ${n};

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
  
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
  
    /* Support for IE. */
    font-feature-settings: 'liga';
  `}
`,x=({code:o,color:t,dataTestId:e,size:n="large",style:i,variant:r="outlined",onClick:a})=>{const s=p();return l.jsx(c,{color:t??s.palette.content.body,"data-testid":e??"icon",onClick:a,size:n,style:i,variant:r,children:o})};export{x as I};

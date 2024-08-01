import{j as l}from"./jsx-runtime-CKrituN3.js";import{n as p}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as f}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const m={small:"12px",medium:"16px",large:"24px"},c=p.i`
  ${({size:o,theme:t,variant:e,color:n,hasClick:r})=>`
    font-family: DTUI-icons-${t.icons};
    font-weight: normal;
    font-style: normal;
    font-size: ${m[o]};
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

    ${r&&`
        cursor: pointer;
        user-select: none;
      `};
  `}
`,h=({code:o,color:t,dataTestId:e,size:n="large",style:r,variant:s="outlined",onClick:i})=>{const a=f();return l.jsx(c,{color:t??a.palette.content.default,"data-testid":e??"icon",hasClick:!!i,onClick:i,size:n,style:r,variant:s,children:o})};export{h as I};

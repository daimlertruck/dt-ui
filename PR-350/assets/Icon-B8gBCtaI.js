import{j as l}from"./jsx-runtime-DMAvRu52.js";import{n as p,u as f}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const m={small:"12px",medium:"16px",large:"24px"},c=p.i`
  ${({size:t,theme:o,variant:e,color:n,hasClick:r})=>`
    font-family: DTUI-icons-${o.icons};
    font-weight: normal;
    font-style: normal;
    font-size: ${m[t]};
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
`,g=({code:t,color:o,dataTestId:e,size:n="large",style:r,variant:s="outlined",onClick:i})=>{const a=f();return l.jsx(c,{color:o??a.palette.content.default,"data-testid":e??"icon",hasClick:!!i,onClick:i,size:n,style:r,variant:s,children:t})};export{g as I};

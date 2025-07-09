import{j as l}from"./jsx-runtime-DMAvRu52.js";import{n as p,u as f}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const c={small:"12px",medium:"16px",large:"24px"},m=p.i`
  ${({size:o,theme:t,variant:e,color:n,hasClick:r})=>`
    font-family: DTUI-icons-${t.icons};
    font-weight: normal;
    font-style: normal;
    font-size: ${c[o]};
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
        &:hover {
          color: ${t.palette.accent.default};
        }
      `};
  `}
`,g=({code:o,color:t,dataTestId:e,size:n="large",style:r,variant:a="outlined",onClick:i})=>{const s=f();return l.jsx(m,{color:t??s.palette.content.default,"data-testid":e??"icon",hasClick:!!i,onClick:i,size:n,style:r,variant:a,children:o})};export{g as I};

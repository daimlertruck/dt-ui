import{j as l}from"./jsx-runtime-DMAvRu52.js";import{n as p,u as f}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const c={xs:"12px",s:"16px",m:"20px",l:"24px",xl:"32px"},m=p.i`
  ${({size:t,theme:o,variant:e,color:n,hasClick:r})=>`
    font-family: DTUI-icons-${o.icons};
    font-weight: normal;
    font-style: normal;
    font-size: ${c[t]};
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
`,u=({code:t,color:o,dataTestId:e,size:n="l",style:r,variant:s="outlined",onClick:i})=>{const a=f();return l.jsx(m,{color:o??a.palette.content.default,"data-testid":e??"icon",hasClick:!!i,onClick:i,size:n,style:r,variant:s,children:t})};export{u as I,c as f};

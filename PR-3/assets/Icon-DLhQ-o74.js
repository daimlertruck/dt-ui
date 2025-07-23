import{j as s}from"./jsx-runtime-DMAvRu52.js";import{n as p,u as c}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const f={xs:"12px",s:"16px",m:"20px",l:"24px",xl:"32px"},m=p.i`
  ${({size:e,theme:t,variant:n,color:r,disabled:o})=>`
    font-family: DTUI-icons-${t.icons};
    font-weight: normal;
    font-style: normal;
    font-size: ${f[e]};
    display: inline-block;
    line-height: 1;
    text-transform: none;
    letter-spacing: normal;
    word-wrap: normal;
    white-space: nowrap;
    font-variation-settings: 'FILL' ${n==="filled"?1:0};
    color: ${o?t.palette.content.light:r};

    /* Support for all WebKit browsers. */
    -webkit-font-smoothing: antialiased;
    /* Support for Safari and Chrome. */
    text-rendering: optimizeLegibility;
  
    /* Support for Firefox. */
    -moz-osx-font-smoothing: grayscale;
  
    /* Support for IE. */
    font-feature-settings: 'liga';

    cursor: ${o?"not-allowed":"pointer"};
    user-select: none;

      &:hover, &:active {
        color: ${o?t.palette.content.light:t.palette.accent.default};
      }
  `}
`,d=({code:e,color:t,dataTestId:n,size:r="l",style:o,variant:i="outlined",isDisabled:a})=>{const l=c();return s.jsx(m,{color:t??l.palette.content.default,"data-testid":n??"icon",disabled:a,size:r,style:o,variant:i,children:e})};export{d as I,f};

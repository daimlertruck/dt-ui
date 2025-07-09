import{j as f}from"./jsx-runtime-DMAvRu52.js";import{n as m,u as d}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const u={"extra-small":"12px",small:"16px",medium:"20px",large:"24px","extra-large":"32px"},g=m.i`
  ${({size:e,theme:t,variant:n,color:r,hasClick:a,disabled:o})=>`
    font-family: DTUI-icons-${t.icons};
    font-weight: normal;
    font-style: normal;
    font-size: ${u[e]};
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

    ${a&&`
        cursor: ${o?"not-allowed":"pointer"};
        user-select: none;

        &:not(:disabled) > i {
          &:hover, &:active {
            color: ${t.palette.accent.default};
          }
        }
      `};
  `}
`,w=({code:e,color:t,dataTestId:n,size:r="large",style:a,variant:o="outlined",onClick:i,isDisabled:s})=>{const p=d(),c=l=>{s||(l.preventDefault(),l.stopPropagation(),i&&i(l))};return f.jsx(g,{color:t??p.palette.content.default,"data-testid":n??"icon",disabled:s,hasClick:!!i,onClick:c,size:r,style:a,variant:o,children:e})};export{w as I};

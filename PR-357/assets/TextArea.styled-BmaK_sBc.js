import{n as t}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const l=(e,r)=>({default:r.palette.surface.default,contrast:r.palette.surface.contrast,light:r.palette.surface.light})[e]||r.palette.surface.default,s=t.div`
  ${({theme:e})=>`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    width: 100%;
    
    border-style: solid;
    border-width: 0;
    border-color: ${e.palette.border.dark};
    
    
    `}
`,n=t.div`
  ${({theme:e})=>`padding-left: ${e.spacing["2xs"]}`};
`,p=t.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`,c=t.textarea`
  ${({theme:e,enableResize:r=!1,backgroundFill:o})=>`
    ${e.fontStyles.body1}

    background-color: ${l(o,e)};

    border-style: none;
    width: 100%;
    color: ${e.palette.content.dark};
    resize: ${r?"vertical":"none"};
    outline: none;
  `}
`,f=t.div`
  ${({theme:e,variant:r,hasError:o=!1,backgroundFill:a})=>{const d=o?e.palette.error.default:e.palette.primary.default;return`
    background-color: ${l(a,e)};
    position: relative;
    padding: 25px 0px 0px 10px;
    width: 100%;

    ${r==="outlined"?`border-radius: ${e.shape.formField};
            border: 1px solid ${o?e.palette.error.default:e.palette.border.default};
            &:focus { border: 1px solid ${d}};
            &:hover { border: 1px solid ${d}};
          `:`border-radius: ${e.shape.formField} ${e.shape.formField} 0 0;
            border-bottom: 1px solid ${o?e.palette.error.default:e.palette.border.default};
            &:focus { border-bottom: 1px solid  ${d}};
            &:hover { border-bottom: 1px solid ${d}};
          `};

    ${r==="outlined"?"border-width: 1px":"border-width: 0 0 1px"};
  `}}
`;export{f as C,s as T,c as a,p as b,n as c};

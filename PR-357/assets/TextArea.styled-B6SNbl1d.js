import{n as a}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const o=(e,t)=>({default:t.palette.surface.default,contrast:t.palette.surface.contrast,light:t.palette.surface.light})[e]||t.palette.surface.default,i=a.div`
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
`,s=a.div`
  ${({theme:e})=>`padding-left: ${e.spacing["2xs"]}`};
`,p=a.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`,n=a.textarea`
  ${({theme:e,enableResize:t=!1,backgroundFill:r})=>`
    ${e.fontStyles.body1}

    background-color: ${o(r,e)};

    border-style: none;
    width: 100%;
    color: ${e.palette.content.dark};
    resize: ${t?"vertical":"none"};
    outline: none;
  `}
`,f=a.div`
  ${({theme:e,variant:t,hasError:r=!1,backgroundFill:d})=>`

    background-color: ${o(d,e)};
    position: relative;
    padding: 25px 0px 0px 10px;
    width: 100%;

    ${t==="outlined"?`border-radius: ${e.shape.formField};
            border: 1px solid ${r?e.palette.error.default:e.palette.border.default};
              &:focus { border: 1px solid ${r?e.palette.error.default:e.palette.primary.default}};`:`border-radius: ${e.shape.formField} 
                            ${e.shape.formField} 0 0;
            border-bottom: 1px solid ${r?e.palette.error.default:e.palette.border.default};
              &:focus { border-bottom: 1px solid  ${r?e.palette.error.default:e.palette.primary.default};}`};

    ${t==="outlined"?"border-width: 1px":"border-width: 0 0 1px"};
  `}
`;export{f as C,i as T,n as a,p as b,s as c};

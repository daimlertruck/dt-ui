import{n as a}from"./emotion-styled.browser.esm-BiJbFOXH.js";const o=(e,t)=>({default:t.palette.surface.default,contrast:t.palette.surface.contrast,light:t.palette.surface.light})[e]||t.palette.surface.default,s=a.div`
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
`,p=a.div`
  ${({theme:e})=>`padding-left: ${e.spacing["2xs"]}`};
`,n=a.div`
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-between;
  align-items: baseline;
  width: 100%;
`,f=a.textarea`
  ${({theme:e,variant:t,enableResize:l=!1,hasError:r=!1,backgroundFill:d})=>`
    ${e.fontStyles.body1}

    background-color: ${o(d,e)};

    width: 100%;
    padding: 20px 14px 14px 14px;
    margin-top: 5px;
    color: ${e.palette.content.dark};
    resize: ${l?"vertical":"none"};
    outline: none;


    ${t==="outlined"?`border-radius: ${e.shape.formField};
            border: 1px solid ${r?e.palette.error.default:e.palette.border.default};
              &:focus { border: 1px solid ${r?e.palette.error.default:e.palette.primary.default}};`:`border-radius: ${e.shape.formField} 
                            ${e.shape.formField} 0 0;
            border-bottom: 1px solid ${r?e.palette.error.default:e.palette.border.default};
              &:focus { border-bottom: 1px solid  ${r?e.palette.error.default:e.palette.primary.default};}`};

    ${t==="outlined"?"border-width: 1px":"border-width: 0 0 1px"};

  `}
`;export{s as T,f as a,n as b,p as c};

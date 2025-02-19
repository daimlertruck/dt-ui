import{n as o}from"./emotion-styled.browser.esm-B1le5_Hy.js";const p=o.div`
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
`,s=o.div`
  ${({theme:e})=>`padding-left: ${e.spacing["2xs"]}`};
`,i=o.div`
  ${({})=>`
    display:flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    align-items: baseline;
    width: 100%
  `}
`,f=o.textarea`
  ${({theme:e,variant:r,resize:d,hasError:t=!1,backgroundFill:l})=>`
    ${e.fontStyles.pSmall}

    background-color: ${l==="default"?e.palette.surface.default:l==="contrast"?e.palette.surface.contrast:e.palette.surface.light};

    width: 100%;
    padding: 20px 14px 14px 14px;
    margin-top: 5px;
    color: ${e.palette.content.dark};

    

   

    border-radius: ${r==="outlined"?e.shape.formField:`${e.shape.formField} ${e.shape.formField} 0 0`};

    border-width: ${r==="outlined"?"1px":"0 0 1px"};
    
    outline: none;
    ${r==="outlined"?`&:focus { border: 1px solid ${e.palette.primary.default};}`:`&:focus { border-bottom: 1px solid ${e.palette.primary.default};}`};

    

    resize: ${d}


    ${t&&`
        ${r} === 'outlined'
        ? 'border: 2px solid ${e.palette.error.default};}'
        : 'border-bottom: 2px solid ${e.palette.error.default};}'

        border-color: ${e.palette.error.default};

        ${r==="outlined"?`&:focus { border: 1px solid ${e.palette.error.default};}`:`&:focus { border-bottom: 1px solid ${e.palette.error.default};}`};
    `};

    border-color: ${t?e.palette.error.default:e.palette.border.default}

    
  
  `}
`;export{p as T,f as a,i as b,s as c};

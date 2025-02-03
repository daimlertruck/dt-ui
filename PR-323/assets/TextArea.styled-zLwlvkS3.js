import{n as e}from"./emotion-styled.browser.esm-B1le5_Hy.js";const d=e.div`
  ${({theme:r})=>`
    display: flex;
    flex-direction: column;
    align-items: flex-end;
    position: relative;
    width: 100%;
    
    border-style: solid;
    border-width: 0;
    border-color: ${r.palette.border.dark};
    
    &:has(input:focus) {
      border-color: ${r.palette.primary.default};
    }

    &:has(input[data-error="true"]) {
      border-color: ${r.palette.error.default};

      &:focus {
        border-color: ${r.palette.error.default};
      }
    }

    `}
`,p=e.textarea`
  ${({theme:r,variant:o,backgroundColor:t,resize:l})=>`
    ${r.fontStyles.pSmall}

   
    background-color: ${t==="contrast"?r.palette.surface.contrast:r.palette.surface.light};;

    resize: ${l};


    width: 100%;
    padding: 20px 14px 14px 14px;
    margin-top: 5px;
    color: ${r.palette.content.dark};

    border-color: ${r.palette.border.default};

    border-radius: ${o==="outlined"?r.shape.formField:`${r.shape.formField} ${r.shape.formField} 0 0`};

    border-width: ${o==="outlined"?"1px":"0 0 1px"};
    
    outline: none;
    ${o==="outlined"?`&:focus { border: 1px solid ${r.palette.primary.default};}`:`&:focus { border-bottom: 1px solid ${r.palette.primary.default};}`};

  `}
`;export{d as T,p as a};

import{n as e}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const d=e.div`
  ${({theme:t,isFloatingLabel:o=!0})=>`
    display: flex;
    flex-direction: column;
    gap: ${t.spacing["5xs"]};
    width: 100%;
    position: relative;

    label:has(~div i) {
      left: 0;
      padding-left: ${o?t.spacing.l:""};
    }

    i {
      color: ${t.palette.content.medium};
    }

    :has(input[disabled]) i{
      color: ${t.palette.content.light};
    }

    :has(input[readonly]:not(input[disabled])) {
      label {
        color: ${o?t.palette.content.medium:t.palette.content.default};
        }
      }
  `}
`,a=e.input`
  ${({theme:t,isFloatingLabel:o,variant:l})=>`
    ${t.fontStyles.body2}

    color: ${t.palette.content.default};

    background-color: ${t.palette.surface.contrast};
    border-radius: ${l==="outlined"?t.shape.formField:`${t.shape.formField} ${t.shape.formField} 0 0`};
    border-style: solid;
    outline: 0;

    ${l==="outlined"?"border-width: 1px":"border-width: 0 0 1px"};
    
    border-color: ${t.palette.border.dark};

    min-width: 198px;
    padding: ${o?"20px 12px 5px 15px":"15px"};
    width: 100%;
    height: 53px;

    &:focus {
      border-color: ${t.palette.primary.default};
    }

    &[data-error="true"] {
      border-color: ${t.palette.error.default};

      &:focus {
        border-color: ${t.palette.error.default};
      }
    }

    &[readonly]:not([disabled]) {
      background-color: ${t.palette.surface.default};
      color: ${t.palette.content.medium};
    }

    &:disabled {
      color: ${t.palette.content.light};
      background-color: ${t.palette.surface.light};
      border-color: ${t.palette.border.default};
      cursor: not-allowed;

      &::placeholder {
       color: ${o?"transparent":t.palette.content.light};
      }
    }

    &::placeholder {
      color: ${o?"transparent":t.palette.content.medium};
    }
  `}
`,p=e.span`
  ${({theme:t})=>`
  position: absolute;
  left: 12px;
  width: 24px;
  height: 24px;

  ~ input {
     padding-left: ${t.spacing.l};
    }
  `}
`,i=e.span`
  position: absolute;
  right: 12px;
  width: 24px;
  height: 24px;

  ~ input {
    padding-right: ${({theme:t})=>t.spacing.l};
  }
`,n=e.div`
  display: flex;
  align-items: center;
`,c=e.div`
  padding-left: 15px;
`;export{n as I,d as T,p as a,i as b,a as c,c as d};

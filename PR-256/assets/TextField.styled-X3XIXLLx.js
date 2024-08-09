import{n as l}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const d=l.div`
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
`,e=l.input`
  ${({theme:t,isFloatingLabel:o,variant:r})=>`
    ${t.fontStyles.body2}

    color: ${t.palette.content.default};

    background-color: ${t.palette.surface.contrast};
    border-radius: ${r==="outlined"?t.shape.formField:`${t.shape.formField} ${t.shape.formField} 0 0`};
    border-style: solid;
    outline: 0;

    ${r==="outlined"?"border-width: 1px":"border-width: 0 0 1px"};
    
    border-color: ${t.palette.border.dark};

    min-width: 198px;
    padding: ${o?`${t.spacing.xs} ${t.spacing["2xs"]} ${t.spacing["4xs"]}`:t.spacing["2xs"]};
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
`,i=l.span`
  ${({theme:t})=>`
  position: absolute;
  left: 12px;
  width: 24px;
  height: 24px;

  ~ input {
     padding-left: ${t.spacing.l};
    }
  `}
`,n=l.span`
  position: absolute;
  right: 12px;
  width: 24px;
  height: 24px;

  ~ input {
    padding-right: ${({theme:t})=>t.spacing.l};
  }
`,p=l.div`
  display: flex;
  align-items: center;
`,s=l.div`
  padding-left: ${({theme:t})=>t.spacing["2xs"]};
`;export{p as I,d as T,i as a,n as b,e as c,s as d};

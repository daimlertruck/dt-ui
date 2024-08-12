import{n as o}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const r=o.div`
  ${({theme:t,isFloatingLabel:l=!0,hasPrefix:a=!1})=>`
    display: flex;
    flex-direction: column;
    gap: ${t.spacing["5xs"]};
    width: 100%;
    position: relative;

    ${a?`
    label {
      left: 0;
      padding-left: ${l?t.spacing.l:""};
    }
    `:""}

    i {
      color: ${t.palette.content.medium};
    }

    :has(input[disabled]) {
      i, label > span {
        color: ${t.palette.content.light};
      }
    }

    :has(input[readonly]:not(input[disabled])) {
      label, label > span {
        color: ${l?t.palette.content.medium:t.palette.content.default};
        }
      }
  `}
`,d=o.input`
  ${({theme:t,isFloatingLabel:l,variant:a})=>`
    ${t.fontStyles.body2}

    color: ${t.palette.content.default};

    background-color: ${t.palette.surface.contrast};
    border-radius: ${a==="outlined"?t.shape.formField:`${t.shape.formField} ${t.shape.formField} 0 0`};
    border-style: solid;
    outline: 0;

    ${a==="outlined"?"border-width: 1px":"border-width: 0 0 1px"};
    
    border-color: ${t.palette.border.dark};

    min-width: 198px;
    padding: ${l?`${t.spacing.xs} ${t.spacing["2xs"]} ${t.spacing["4xs"]}`:t.spacing["2xs"]};
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
       color: ${l?"transparent":t.palette.content.light};
      }
    }

    &::placeholder {
      color: ${l?"transparent":t.palette.content.medium};
    }
  `}
`,n=o.span`
  ${({theme:t})=>`
  position: absolute;
  left: 12px;
  width: 24px;
  height: 24px;

  ~ input {
     padding-left: ${t.spacing.l};
    }
  `}
`,i=o.span`
  position: absolute;
  right: 12px;
  width: 24px;
  height: 24px;

  ~ input {
    padding-right: ${({theme:t})=>t.spacing.l};
  }
`;o.div`
  display: flex;
  align-items: center;
`;const p=o.div`
  padding-left: ${({theme:t})=>t.spacing["2xs"]};
`;export{n as I,r as T,d as a,i as b,p as c};

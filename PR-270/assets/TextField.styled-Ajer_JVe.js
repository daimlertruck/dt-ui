import{n as e}from"./emotion-styled.browser.esm-B1le5_Hy.js";const i=e.div`
  ${({theme:t,isFloatingLabel:o=!0,hasPrefix:r=!1})=>`
    display: flex;
    flex-direction: column;
    gap: ${t.spacing["5xs"]};
    width: 100%;
    position: relative;

    ${r?`
    label {
      left: 0;
      padding-left: ${o?t.spacing.l:""};
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
        color: ${o?t.palette.content.medium:t.palette.content.default};
        }
      }
  `}

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`,p=e.input`
  ${({theme:t,isFloatingLabel:o,variant:r,hasExtraSuffix:a,isTypeSearch:l})=>`
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

    padding-right: ${a?l?t.spacing.xl:t.spacing.l:""};
  `}
`,d=e.span`
  ${({theme:t,isClickable:o})=>`
  position: absolute;
  left: 12px;
  width: 24px;
  height: 24px;

  ~ input {
     padding-left: ${t.spacing.l};
    }

  cursor: ${o?"pointer":"default"};

  &:hover > i  {
    color: ${t.palette.content.dark};
  }
  
  `}
`,s=e.span`
  ${({theme:t,isClickable:o})=>`
  position: absolute;
  right: 12px;
  width: 24px;
  height: 24px;

  cursor: ${o?"pointer":"default"};

  ${o&&`
  &:hover > i  {
    color: ${t.palette.content.dark};
  }
`}
  `}
`;e.div`
  display: flex;
  align-items: center;
`;const c=e.div`
  padding-left: ${({theme:t})=>t.spacing["2xs"]};
`,u=e.span`
  ${({theme:t})=>`
  position: absolute;
  right: 36px;
  cursor: pointer;
  height: 24px;

  :hover > i {
    color: ${t.palette.content.dark}
  }
  `}
`;export{d as I,u as R,i as T,p as a,s as b,c};

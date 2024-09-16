import{n as o}from"./emotion-styled.browser.esm-B1le5_Hy.js";const l=o.div`
  ${({theme:t,isFloatingLabel:e=!0,hasPrefix:r=!1})=>`
    display: flex;
    flex-direction: column;
    gap: ${t.spacing["5xs"]};
    width: 100%;
    position: relative;

    ${r?`
    label {
      left: 0;
      padding-left: ${e?t.spacing.l:""};
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
        color: ${e?t.palette.content.medium:t.palette.content.default};
        }
      }
  `}

  input[type="search"]::-webkit-search-decoration,
  input[type="search"]::-webkit-search-cancel-button,
  input[type="search"]::-webkit-search-results-button,
  input[type="search"]::-webkit-search-results-decoration {
    display: none;
  }
`,n=o.input`
  ${({theme:t,isFloatingLabel:e})=>`
    ${t.fontStyles.body2}
    border: 0;
    outline: 0;
    width: 100%;
    background-color: inherit;


    input:-webkit-autofill,
    input:-webkit-autofill:hover,
    input:-webkit-autofill:focus,
    input:-webkit-autofill:active {
        transition: background-color 5000s ease-in-out 0s;
    }

    &::placeholder {
      color: ${e?"transparent":t.palette.content.medium};
    }

    padding: ${e?`${t.spacing.xs} 0 ${t.spacing["4xs"]} 0`:""};

  `}
`,i=o.div`
  ${({theme:t,isClickable:e})=>`
    display: flex;
    cursor: ${e?"pointer":"default"};

    ${e&&`
        &:hover > i  {
          color: ${t.palette.content.dark};
        }
      `}
  
  `}
`,d=o.div`
  ${({theme:t,isClickable:e})=>`
    display: flex;
    cursor: ${e?"pointer":"default"};

    ${e&&`
        &:hover > i  {
          color: ${t.palette.content.dark};
        }
      `}
  `}
`,p=o.div`
  padding-left: ${({theme:t})=>t.spacing["2xs"]};
`,s=o.div`
  ${({theme:t})=>`
    cursor: pointer;
    display: flex;

    :hover > i {
      color: ${t.palette.content.dark}
    }
  `}
`,c=o.div`
  ${({theme:t,isFloatingLabel:e,variant:r})=>`
    display:flex;
    flex-direction: row;
    align-items: center;
    min-width: 198px;
    width: 100%;
    height: 54px;
    color: ${t.palette.content.default};
    gap: ${t.spacing["4xs"]};
    background-color: ${t.palette.surface.contrast};
    padding-inline: ${t.spacing["3xs"]};

    border-radius: ${r==="outlined"?t.shape.formField:`${t.shape.formField} ${t.shape.formField} 0 0`};
    border-style: solid;
    ${r==="outlined"?"border-width: 1px":"border-width: 0 0 1px"};
    border-color: ${t.palette.border.dark};

    &:has(input:focus) {
      border-color: ${t.palette.primary.default};
    }

    &:has(input[data-error="true"]) {
      border-color: ${t.palette.error.default};

      &:focus {
        border-color: ${t.palette.error.default};
      }
    }

    &:has(input[readonly]:not([disabled])) {
      background-color: ${t.palette.surface.default};
      color: ${t.palette.content.medium};
    }

    &:has(input[disabled]), &:has(input[disabled]) > * {
      color: ${t.palette.content.light};
      background-color: ${t.palette.surface.light};
      border-color: ${t.palette.border.default};
      cursor: not-allowed;

      input::placeholder {
        color: ${e?"transparent":t.palette.content.light};
      }
    }
  `}
`;export{c as I,s as R,l as T,i as a,n as b,d as c,p as d};

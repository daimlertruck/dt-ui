import{n as l}from"./emotion-styled.browser.esm-B1le5_Hy.js";const a=l.div`
  ${({theme:t,isFloatingLabel:o=!0,hasPrefix:e=!1})=>`
    display: flex;
    flex-direction: column;
    gap: ${t.spacing["5xs"]};
    width: 100%;
    position: relative;

    ${e?`
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
`,i=l.input`
  ${({theme:t,isFloatingLabel:o,isSearchType:e})=>`
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
      color: ${o?"transparent":t.palette.content.medium};
    }

    padding: ${o&&!e?`${t.spacing.xs} 0 ${t.spacing["4xs"]} 0`:""};

  `}
`,n=l.div`
  ${({theme:t,onClick:o})=>{const e=!!o;return`
    display: flex;
    cursor: ${e?"pointer":"default"};

    ${e&&`
        &:hover > i  {
          color: ${t.palette.content.dark};
        }
      `}
  
  `}}
`,d=l.div`
  ${({theme:t,onClick:o})=>{const e=!!o;return`
    display: flex;
    cursor: ${e?"pointer":"default"};

    ${e&&`
        &:hover > i  {
          color: ${t.palette.content.dark};
        }
      `}
  `}}
`,s=l.div`
  padding-left: ${({theme:t})=>t.spacing["2xs"]};
`,c=l.div`
  ${({theme:t})=>`
    cursor: pointer;
    display: flex;

    :hover > i {
      color: ${t.palette.content.dark}
    }
  `}
`,p=l.div`
  ${({theme:t,isFloatingLabel:o,variant:e})=>`
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

    border-radius: ${e==="outlined"?t.shape.formField:`${t.shape.formField} ${t.shape.formField} 0 0`};
    border-style: solid;
    ${e==="outlined"?"border-width: 1px":"border-width: 0 0 1px"};
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
        color: ${o?"transparent":t.palette.content.light};
      }
    }
  `}
`;export{p as I,c as R,a as T,n as a,i as b,d as c,s as d};

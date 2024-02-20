import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{B as d}from"./index-H1EXaXUo.js";import{n}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const s=n.input`
  ${({theme:e})=>`
    appearance: none;
    margin: 0;
    border: 1px solid ${e.palette.border.default};
    background-color: ${e.palette.base.default};
    transform: translateY(-0.075em);
    height: 16px;
    width: 16px;
    display: grid;
    place-content: center;
    cursor: pointer;

    &:before {
      content: '';
      width: 0.85em;
      height: 0.85em;
      clip-path: polygon(28% 38%, 41% 53%, 75% 24%, 86% 38%, 40% 78%, 15% 50%);
      transform: scale(0);
      box-shadow: inset 1em 1em ${e.palette.base.default};
      background-color: CanvasText;
    }
    
    &:checked::before {
      transform: scale(1);
    }

    &:checked {
      background: ${e.palette.primary.default};
      border: none;
    }

    &:disabled {
      pointer-events: none;
    }

    &:disabled:checked {
      background-color: ${e.palette.primary.light};
    }

    &:disabled:not(checked){
      background-color: ${e.palette.base.light};
    }

    &:disabled:not(checked) ~ label {
      color: ${e.palette.content.disabled};
      pointer-events: none;
    }
  `}
`,i=n.label`
  ${({theme:e})=>`
    user-select: none;
    position: relative;
    cursor: pointer;
    display: inline-flex;
    align-items: center;
    padding-left: 8px;
    ${e.fontStyles.p};
    color: ${e.palette.content.body};
  `}
`,p=({onChange:e,dataTestId:a,children:r,isChecked:l=!1,isDisabled:c=!1})=>{const t=a??"checkbox-id";return o.jsxs(d,{style:{flexDirection:"row"},children:[o.jsx(s,{checked:l,"data-testid":t,disabled:c,id:t,onChange:e,type:"checkbox"}),o.jsx(i,{htmlFor:t,children:r})]})},h=p;export{h as C};

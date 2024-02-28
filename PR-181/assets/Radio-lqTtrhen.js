import{j as i}from"./jsx-runtime-vNq4Oc-g.js";import{B as s}from"./index-QDCYB1ew.js";import{r as n}from"./index-4g5l5LRQ.js";import{n as p}from"./emotion-styled.browser.esm-QTPHyGVR.js";const c=p.input`
  ${({theme:e})=>`
    background: ${e.palette.base.default};
    border: 1px solid ${e.palette.border.default};
    border-radius: 50%;
    width: 16px;
    height: 16px;
    appearance: none;
    
    &:disabled {
      background: ${e.palette.base.light};
      pointer-events: none;
    }

    &:disabled + label {
      color: ${e.palette.content.disabled};
    }

    &:checked {
      border-width: 5px;
      border-color: ${e.palette.primary.default};
    }

    &:checked:disabled {
      border-color: ${e.palette.border.default};
    }

    &:checked:before {
      content: '';
      height: 10px;
      width: 10px;
      border-radius: 50%;
      display: block;
    }
  `}
`,b=p.label`
  ${({theme:e})=>`
    ${e.fontStyles.p};
    color: ${e.palette.content.body};
    cursor: inherit;
  `}
`,u=p.div`
  ${({direction:e})=>`
    display: flex;
    flex-direction: ${e};
    align-items: center;
    gap: 12px;
  `}
`,h=({children:e,onChange:r,dataTestId:l,direction:t="row",name:d})=>{const a=n.useMemo(()=>n.Children.map(e,o=>o&&n.cloneElement(o,{...o.props,onChange:r,name:d})),[e,r,d]);return i.jsx(u,{"data-testid":l??"radio-group",direction:t,children:a})},x=({onChange:e,label:r,isDefaultChecked:l,isDisabled:t,name:d="radio-group-name",value:a})=>{const o=`${a}-id`;return i.jsxs(s,{style:{flexDirection:"row",gap:8,cursor:t?"default":"pointer"},children:[i.jsx(c,{defaultChecked:l,disabled:t,id:o,name:d,onChange:e,type:"radio",value:a}),i.jsx(b,{htmlFor:o,children:r})]})},m=x;export{m as R,h as a};

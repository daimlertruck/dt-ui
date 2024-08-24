import{j as t}from"./jsx-runtime-CKrituN3.js";import{I as c}from"./Icon-DOElHRRq.js";import{T as l,O as m}from"./Tooltip-B_S9_H1I.js";import{T as d}from"./Typography-DvHa2txy.js";import{n}from"./emotion-styled.browser.esm-B1le5_Hy.js";const p=n.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({theme:e})=>e.spacing.medium};
`,x=n.div`
  row-gap: ${({theme:e})=>e.spacing.xmedium};
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({theme:e})=>e.palette.content.default};
`,f=n.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`,u=n.div`
  ${({theme:e,disabled:o})=>`
    display: flex;
    column-gap: ${e.spacing.xmedium};
    justify-content: stretch;
    align-items: start;
    ${o&&`
        opacity: 0.5;
        pointer-events: none;
      `}
  `}
`,y=e=>e.preventDefault(),h=({children:e,dataTestId:o,style:r,onSubmit:s=y})=>{const i=o??"test-form";return t.jsx(p,{"data-testid":i,onSubmit:s,style:r,children:e})};h.Group=({children:e,isDisabled:o,title:r,tooltip:s,style:i,isRequired:a=!1})=>t.jsxs(x,{style:i,children:[r?t.jsxs(f,{children:[t.jsxs(d,{color:"primary.default",fontStyles:"body1Bold",children:[r,a?t.jsx(d,{color:"error.default",element:"span",fontStyles:"body1Bold",children:"*"}):null]}),s?t.jsxs(l,{children:[t.jsx(c,{code:"error",size:"medium"}),t.jsx(l.Content,{direction:m.Right,style:{maxWidth:250},children:s})]}):null]}):null,t.jsx(u,{disabled:o,children:e})]});export{h as F};

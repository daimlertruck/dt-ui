import{j as t}from"./jsx-runtime-CKrituN3.js";import{I as a}from"./Icon-DOElHRRq.js";import{T as l,O as c}from"./Tooltip-B_S9_H1I.js";import{T as d}from"./Typography-DvHa2txy.js";import{n}from"./emotion-styled.browser.esm-B1le5_Hy.js";const m=n.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({theme:e})=>e.spacing.medium};
`,p=n.div`
  row-gap: ${({theme:e})=>e.spacing.xmedium};
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({theme:e})=>e.palette.content.default};
`,x=n.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`,f=n.div`
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
`,u=e=>e.preventDefault(),y=({children:e,dataTestId:o,style:r,onSubmit:s=u})=>{const i=o??"test-form";return t.jsx(m,{"data-testid":i,onSubmit:s,style:r,children:e})};y.Group=({children:e,isDisabled:o,title:r,tooltip:s,isRequired:i=!1})=>t.jsxs(p,{children:[r?t.jsxs(x,{children:[t.jsxs(d,{color:"primary.default",fontStyles:"h6",children:[r,i?t.jsx(d,{color:"error.default",element:"span",fontStyles:"h6",children:"*"}):null]}),s?t.jsxs(l,{children:[t.jsx(a,{code:"error",size:"medium"}),t.jsx(l.Content,{direction:c.Right,style:{maxWidth:250},children:s})]}):null]}):null,t.jsx(f,{disabled:o,children:e})]});export{y as F};

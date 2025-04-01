import{j as e}from"./jsx-runtime-CKrituN3.js";import{T as n,O as a}from"./Tooltip-BCpzR2Q_.js";import{T as d}from"./Typography-DMDAI9bI.js";import{I as c}from"./Info-BPeIL3LD.js";import{n as r}from"./emotion-styled.browser.esm-B1le5_Hy.js";const p=r.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({theme:t})=>t.spacing.medium};
`,m=r.div`
  row-gap: ${({theme:t})=>t.spacing.xmedium};
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({theme:t})=>t.palette.content.default};
`,x=r.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`,f=r.div`
  ${({theme:t,disabled:o})=>`
    display: flex;
    column-gap: ${t.spacing.xmedium};
    justify-content: stretch;
    align-items: start;
    ${o&&`
        opacity: 0.5;
        pointer-events: none;
      `}
  `}
`,u=t=>t.preventDefault(),y=({children:t,dataTestId:o,style:i,onSubmit:s=u})=>{const l=o??"test-form";return e.jsx(p,{"data-testid":l,onSubmit:s,style:i,children:t})};y.Group=({children:t,isDisabled:o,title:i,tooltip:s})=>e.jsxs(m,{children:[i?e.jsxs(x,{children:[e.jsx(d,{color:"primary.default",fontStyles:"h6",style:{textTransform:"uppercase"},children:i}),s?e.jsxs(n,{children:[e.jsx(c,{height:"16",width:"16"}),e.jsx(n.Content,{direction:a.Right,style:{maxWidth:250},children:s})]}):null]}):null,e.jsx(f,{disabled:o,children:t})]});export{y as F};

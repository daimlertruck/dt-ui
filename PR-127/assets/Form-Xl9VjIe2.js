import{j as e}from"./jsx-runtime-CbCNBOXy.js";import"./index-Hhmu2M5c.js";import{I as d}from"./Info-qTLqlLM2.js";import{T as n,O as a}from"./Tooltip-vKzeukWq.js";import{T as p}from"./Typography-qT9DMSUX.js";import{n as s}from"./emotion-styled.browser.esm-yeljtSWm.js";const m=s.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({theme:t})=>t.spacing.medium};
`,c=s.div`
  row-gap: ${({theme:t})=>t.spacing.xmedium};
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({theme:t})=>t.palette.text.body};
`,x=s.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`,f=s.div`
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
`,u=t=>t.preventDefault(),y=({children:t,dataTestId:o,style:i,onSubmit:r=u})=>{const l=o??"test-form";return e.jsx(m,{"data-testid":l,onSubmit:r,style:i,children:t})};y.Group=({children:t,isDisabled:o,title:i,tooltip:r})=>e.jsxs(c,{children:[i?e.jsxs(x,{children:[e.jsx(p,{color:"primary.default",fontStyles:"h6",style:{textTransform:"uppercase"},children:i}),r?e.jsxs(n,{children:[e.jsx(d,{height:"16",width:"16"}),e.jsx(n.Content,{direction:a.Right,style:{maxWidth:250},children:r})]}):null]}):null,e.jsx(f,{disabled:o,children:t})]});export{y as F};

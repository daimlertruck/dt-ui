import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{T as n,O as a}from"./Tooltip-YOkM3WSS.js";import{I as c}from"./Info-eLlTCXLO.js";import{T as m}from"./Typography-D6FO4u36.js";import{n as r}from"./emotion-styled.browser.esm-QTPHyGVR.js";const p=r.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({theme:t})=>t.spacing.medium};
`,x=r.div`
  row-gap: ${({theme:t})=>t.spacing.xmedium};
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({theme:t})=>t.palette.content.body};
`,f=r.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`,u=r.div`
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
`,y=t=>t.preventDefault(),l=({children:t,dataTestId:o,style:s,onSubmit:i=y})=>{const d=o??"test-form";return e.jsx(p,{"data-testid":d,onSubmit:i,style:s,children:t})};l.Group=({children:t,isDisabled:o,title:s,tooltip:i})=>e.jsxs(x,{children:[s?e.jsxs(f,{children:[e.jsx(m,{color:"primary.default",fontStyles:"h6",style:{textTransform:"uppercase"},children:s}),i?e.jsxs(n,{children:[e.jsx(c,{height:"16",width:"16"}),e.jsx(n.Content,{direction:a.Right,style:{maxWidth:250},children:i})]}):null]}):null,e.jsx(u,{disabled:o,children:t})]});const S=l;export{S as F};

import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import"./index-lb1Yyg-x.js";import{I as d}from"./Info-eLlTCXLO.js";import{T as n,O as c}from"./Tooltip-xKo2aG_s.js";import{T as a}from"./Typography-VWNkGQM0.js";import{n as r}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const m=r.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({theme:t})=>t.spacing.medium};
`,p=r.div`
  row-gap: ${({theme:t})=>t.spacing.xmedium};
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({theme:t})=>t.colors.grey_100};
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
`,u=t=>t.preventDefault(),y=({children:t,dataTestId:o,style:s,onSubmit:i=u})=>{const l=o??"test-form";return e.jsx(m,{"data-testid":l,onSubmit:i,style:s,children:t})};y.Group=({children:t,isDisabled:o,title:s,tooltip:i})=>e.jsxs(p,{children:[s?e.jsxs(x,{children:[e.jsx(a,{color:"blue_100",fontStyles:"h6",style:{textTransform:"uppercase"},children:s}),i?e.jsxs(n,{children:[e.jsx(d,{height:"16",width:"16"}),e.jsx(n.Content,{direction:c.Right,style:{maxWidth:250},children:i})]}):null]}):null,e.jsx(f,{disabled:o,children:t})]});export{y as F};

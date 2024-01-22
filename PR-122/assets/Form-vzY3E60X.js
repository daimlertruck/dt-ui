import{j as e}from"./jsx-runtime-CbCNBOXy.js";import"./index-Hhmu2M5c.js";import{T as r,O as d}from"./Tooltip-i_6FrtaN.js";import{T as c}from"./Typography-9OPir1PX.js";import{n}from"./emotion-styled.browser.esm-yeljtSWm.js";const a=t=>e.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM13 17H11V11H13V17ZM13 9H11V7H13V9Z",fill:"white"})}),p=n.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({theme:t})=>t.spacing.medium};
`,m=n.div`
  row-gap: ${({theme:t})=>t.spacing.xmedium};
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({theme:t})=>t.colors.grey_100};
`,x=n.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`,h=n.div`
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
`,f=t=>t.preventDefault(),u=({children:t,dataTestId:o,style:s,onSubmit:i=f})=>{const l=o??"test-form";return e.jsx(p,{"data-testid":l,onSubmit:i,style:s,children:t})};u.Group=({children:t,isDisabled:o,title:s,tooltip:i})=>e.jsxs(m,{children:[s?e.jsxs(x,{children:[e.jsx(c,{color:"blue_100",fontStyles:"h6",style:{textTransform:"uppercase"},children:s}),i?e.jsxs(r,{children:[e.jsx(a,{height:"16",width:"16"}),e.jsx(r.Content,{direction:d.Right,style:{maxWidth:250},children:i})]}):null]}):null,e.jsx(h,{disabled:o,children:t})]});export{u as F,a as I};

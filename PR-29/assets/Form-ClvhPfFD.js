import{j as e}from"./jsx-runtime-CB_V9I5Y.js";import{T as n,O as d}from"./Tooltip-CfG03z0l.js";import{T as a}from"./Typography-DqiQHYtc.js";import{I as c}from"./Info-CbG8KzIT.js";import{s}from"./emotion-styled.browser.esm-DuL_gwYN.js";const p=s.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({theme:t})=>t.spacing.medium};
`,m=s.div`
  ${({theme:t})=>`
    row-gap: ${t.spacing.xmedium};
    display: flex;
    flex-direction: column;
    width: 100%;
    color: ${t.palette.content.default};
  `}
`,x=s.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`,f=s.div`
  ${({theme:t,disabled:o})=>`
    display: flex;
    gap: ${t.spacing.xmedium};
    justify-content: stretch;
    align-items: start;
    flex-direction: column;

    @media only screen and (min-width: ${t.breakpoints.mq3}px) {
      flex-direction: row;
    }

    ${o&&`
        opacity: 0.5;
        pointer-events: none;
      `}
  `}
`,u=t=>t.preventDefault(),y=({children:t,dataTestId:o,style:i,onSubmit:r=u})=>{const l=o??"test-form";return e.jsx(p,{"data-testid":l,onSubmit:r,style:i,children:t})};y.Group=({children:t,isDisabled:o,title:i,tooltip:r})=>e.jsxs(m,{children:[i?e.jsxs(x,{children:[e.jsx(a,{color:"primary.default",fontStyles:"h6",style:{textTransform:"uppercase"},children:i}),r?e.jsxs(n,{children:[e.jsx(c,{height:"16",width:"16"}),e.jsx(n.Content,{direction:d.Right,style:{maxWidth:250},children:r})]}):null]}):null,e.jsx(f,{disabled:o,children:t})]});export{y as F};

import{j as n}from"./jsx-runtime-CKrituN3.js";import{I as h}from"./Icon-DOElHRRq.js";import{T as y}from"./Typography-Cqe0TSjB.js";import{r as p}from"./index-CBqU2yxZ.js";import{n as d,u as S}from"./emotion-styled.browser.esm-B1le5_Hy.js";import{S as b}from"./Stepper.styled-DZBfSbLM.js";import"./index-CmU8lkWL.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./extends-DJVMZnyl.js";const u=({children:e,dataTestId:t,orientation:r})=>{const l=t??"default";return n.jsx(b,{"data-testid":`${l}-stepper`,orientation:r,children:e})},j=d.span`
  ${({theme:e,color:t,outlined:r,isLarge:l})=>`
    ${e.fontStyles.tag}
    color: ${e.palette.content.contrast};
    border: ${e.spacing.none};
    align-items: center;
    justify-content: center;
    display: flex;
    width: ${l?"24px":"16px"};
    height: ${l?"24px":"16px"};
    border-radius: 50%;
    background-color: ${t==="disabled"?e.palette.content.default:e.palette[t].default};

    ${r&&`
        border: 2px solid ${t==="disabled"?e.palette.content.light:e.palette[t].default};
        color: ${t==="disabled"?e.palette.content.light:e.palette[t].default};
        background-color: ${e.palette.surface.contrast}
      `};
  `}
`,$=({children:e,color:t="informative",dataTestId:r,style:l,outlined:s=!1,isLarge:o=!1})=>n.jsx(j,{color:t,"data-testid":r??"counter",isLarge:o,outlined:s,style:l,children:e}),C=d.li`
  display: flex;
  gap: 12px;
  align-items: center;
`,v=d.span`
  ${({theme:e,color:t})=>`
    ${e.fontStyles.pSmall};
    color: ${t==="disabled"?e.palette.content.light:e.palette[t].default};
  `}
`,a=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:l=!1,isError:s=!1})=>{const o=p.useMemo(()=>p.Children.map(e,i=>i&&p.cloneElement(i,{isActive:t,isCompleted:r,isDisabled:l,isError:s,...i.props})),[e,t,r,l,s]);return n.jsx(C,{children:o})},E=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:l=!1,isError:s=!1})=>{const o=S(),i=s?"error":l?"disabled":"primary",g=s?o.palette.error.light:o.palette.primary.light;return n.jsx($,{color:i,isLarge:!0,outlined:!r,style:{borderWidth:1,...t&&{backgroundColor:g}},children:r?n.jsx(h,{code:"check",color:o.palette.surface.light,size:"medium"}):n.jsx(y,{color:i==="disabled"?"content.light":`${i}.default`,element:"span",fontStyles:"pXXSmall",style:{fontWeight:700,width:24,height:24,display:"flex",alignItems:"center",justifyContent:"center"},children:e})})};a.Counter=E;const L=({isActive:e,isError:t,isDisabled:r,isCompleted:l})=>t?"error":e||l?"primary":r?"disabled":"secondary";a.Label=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:l=!1,isError:s=!1})=>{const o=L({isActive:t,isError:s,isDisabled:l,isCompleted:r});return n.jsx(v,{color:o,children:e})};const D={Vertical:"vertical",Horizontal:"horizontal"},V={title:"Data Display/Stepper",component:u,argTypes:{currentStep:{control:{type:"number",min:1}},orientation:{options:D,control:{type:"radio"}},completed:{control:{type:"array"}},options:{control:{type:"array"}}},render:({currentStep:e,orientation:t,options:r,completed:l})=>n.jsxs(u,{orientation:t,children:[r.map((s,o)=>n.jsxs(a,{isActive:e===o+1,isCompleted:l.includes(o+1),children:[n.jsx(a.Counter,{children:o+1}),n.jsx(a.Label,{children:s})]},s)),n.jsxs(a,{isDisabled:!0,children:[n.jsx(a.Counter,{children:r.length+1}),n.jsx(a.Label,{children:"Disabled"})]},r.length),n.jsxs(a,{isError:!0,children:[n.jsx(a.Counter,{children:r.length+2}),n.jsx(a.Label,{children:"Error"})]},r.length+1),n.jsxs(a,{isActive:!0,isError:!0,children:[n.jsx(a.Counter,{children:r.length+3}),n.jsx(a.Label,{children:"Active Error"})]},r.length+2)]})},c={args:{currentStep:1,completed:[3],orientation:"vertical",options:["Step 1","Step 2","Step 3"]}};var f,m,x;c.parameters={...c.parameters,docs:{...(f=c.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentStep: 1,
    completed: [3],
    orientation: 'vertical',
    options: ['Step 1', 'Step 2', 'Step 3']
  }
}`,...(x=(m=c.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const q=["Default"];export{c as Default,q as __namedExportsOrder,V as default};

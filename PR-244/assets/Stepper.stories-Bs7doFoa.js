import{j as n}from"./jsx-runtime-CKrituN3.js";import{I as y}from"./Icon-CHFlL13I.js";import{T as S}from"./Typography-gBi7_xh9.js";import{r as d}from"./index-CBqU2yxZ.js";import{n as c}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as g}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import{S as j}from"./Stepper.styled-C6G5PIkd.js";import"./index-D2m8a1IB.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-DJVMZnyl.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";const u=({children:e,dataTestId:t,orientation:r})=>{const l=t??"default";return n.jsx(j,{"data-testid":`${l}-stepper`,orientation:r,children:e})},h=c.span`
  ${({theme:e,color:t,outlined:r,isLarge:l})=>`
    ${e.fontStyles.tag}
    color: ${t==="disabled"?e.palette.content.contrast:e.palette[t].contrast};
    border: ${e.spacing.none};
    align-items: center;
    justify-content: center;
    display: flex;
    width: ${l?"24px":"16px"};
    height: ${l?"24px":"16px"};
    border-radius: 50%;
    background-color: ${t==="disabled"?e.palette.content.body:e.palette[t].default};

    ${r&&`
        border: 2px solid ${t==="disabled"?e.palette.content.disabled:e.palette[t].default};
        color: ${t==="disabled"?e.palette.content.disabled:e.palette[t].default};
        background-color: ${e.palette.base.default}
      `};
  `}
`,$=({children:e,color:t="informative",dataTestId:r,style:l,outlined:o=!1,isLarge:s=!1})=>n.jsx(h,{color:t,"data-testid":r??"counter",isLarge:s,outlined:o,style:l,children:e}),C=c.li`
  display: flex;
  gap: 12px;
  align-items: center;
`,v=c.span`
  ${({theme:e,color:t})=>`
    ${e.fontStyles.pSmall};
    color: ${t==="disabled"?e.palette.content.disabled:e.palette[t].default};
  `}
`,a=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:l=!1,isError:o=!1})=>{const s=d.useMemo(()=>d.Children.map(e,i=>i&&d.cloneElement(i,{isActive:t,isCompleted:r,isDisabled:l,isError:o,...i.props})),[e,t,r,l,o]);return n.jsx(C,{children:s})},E=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:l=!1,isError:o=!1})=>{const s=g(),i=o?"error":l?"disabled":"primary",x=o?s.palette.error.light:s.palette.primary.light;return n.jsx($,{color:i,isLarge:!0,outlined:!r,style:{borderWidth:1,...t&&{backgroundColor:x}},children:r?n.jsx(y,{code:"check",color:s.palette.base.light,size:"medium"}):n.jsx(S,{color:i==="disabled"?"content.disabled":`${i}.default`,element:"span",fontStyles:"pXXSmall",style:{fontWeight:700},children:e})})};a.Counter=E;const L=({isActive:e,isError:t,isDisabled:r,isCompleted:l})=>t?"error":e||l?"primary":r?"disabled":"secondary";a.Label=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:l=!1,isError:o=!1})=>{const s=L({isActive:t,isError:o,isDisabled:l,isCompleted:r});return n.jsx(v,{color:s,children:e})};const D={Vertical:"vertical",Horizontal:"horizontal"},q={title:"Data Display/Stepper",component:u,argTypes:{currentStep:{control:{type:"number",min:1}},orientation:{options:D,control:{type:"radio"}},completed:{control:{type:"array"}},options:{control:{type:"array"}}},render:({currentStep:e,orientation:t,options:r,completed:l})=>n.jsxs(u,{orientation:t,children:[r.map((o,s)=>n.jsxs(a,{isActive:e===s+1,isCompleted:l.includes(s+1),children:[n.jsx(a.Counter,{children:s+1}),n.jsx(a.Label,{children:o})]},o)),n.jsxs(a,{isDisabled:!0,children:[n.jsx(a.Counter,{children:r.length+1}),n.jsx(a.Label,{children:"Disabled"})]},r.length),n.jsxs(a,{isError:!0,children:[n.jsx(a.Counter,{children:r.length+2}),n.jsx(a.Label,{children:"Error"})]},r.length+1),n.jsxs(a,{isActive:!0,isError:!0,children:[n.jsx(a.Counter,{children:r.length+3}),n.jsx(a.Label,{children:"Active Error"})]},r.length+2)]})},p={args:{currentStep:1,completed:[3],orientation:"vertical",options:["Step 1","Step 2","Step 3"]}};var f,m,b;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentStep: 1,
    completed: [3],
    orientation: 'vertical',
    options: ['Step 1', 'Step 2', 'Step 3']
  }
}`,...(b=(m=p.parameters)==null?void 0:m.docs)==null?void 0:b.source}}};const B=["Default"];export{p as Default,B as __namedExportsOrder,q as default};

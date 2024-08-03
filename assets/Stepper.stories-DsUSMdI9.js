import{j as n}from"./jsx-runtime-CKrituN3.js";import{I as y}from"./Icon-Y_fTWZv7.js";import{T as S}from"./Typography-BM34Rtmj.js";import{r as c}from"./index-CBqU2yxZ.js";import{n as d}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as h}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import{S as b}from"./Stepper.styled-C6G5PIkd.js";import"./index-C8nwnA3-.js";import"./_commonjsHelpers-BosuxZz1.js";import"./extends-DJVMZnyl.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";const u=({children:e,dataTestId:t,orientation:r})=>{const l=t??"default";return n.jsx(b,{"data-testid":`${l}-stepper`,orientation:r,children:e})},j=d.span`
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
`,$=({children:e,color:t="informative",dataTestId:r,style:l,outlined:s=!1,isLarge:a=!1})=>n.jsx(j,{color:t,"data-testid":r??"counter",isLarge:a,outlined:s,style:l,children:e}),C=d.li`
  display: flex;
  gap: 12px;
  align-items: center;
`,v=d.span`
  ${({theme:e,color:t})=>`
    ${e.fontStyles.pSmall};
    color: ${t==="disabled"?e.palette.content.light:e.palette[t].default};
  `}
`,o=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:l=!1,isError:s=!1})=>{const a=c.useMemo(()=>c.Children.map(e,i=>i&&c.cloneElement(i,{isActive:t,isCompleted:r,isDisabled:l,isError:s,...i.props})),[e,t,r,l,s]);return n.jsx(C,{children:a})},E=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:l=!1,isError:s=!1})=>{const a=h(),i=s?"error":l?"disabled":"primary",g=s?a.palette.error.light:a.palette.primary.light;return n.jsx($,{color:i,isLarge:!0,outlined:!r,style:{borderWidth:1,...t&&{backgroundColor:g}},children:r?n.jsx(y,{code:"check",color:a.palette.surface.light,size:"medium"}):n.jsx(S,{color:i==="disabled"?"content.light":`${i}.default`,element:"span",fontStyles:"pXXSmall",style:{fontWeight:700},children:e})})};o.Counter=E;const L=({isActive:e,isError:t,isDisabled:r,isCompleted:l})=>t?"error":e||l?"primary":r?"disabled":"secondary";o.Label=({children:e,isActive:t=!1,isCompleted:r=!1,isDisabled:l=!1,isError:s=!1})=>{const a=L({isActive:t,isError:s,isDisabled:l,isCompleted:r});return n.jsx(v,{color:a,children:e})};const D={Vertical:"vertical",Horizontal:"horizontal"},q={title:"Data Display/Stepper",component:u,argTypes:{currentStep:{control:{type:"number",min:1}},orientation:{options:D,control:{type:"radio"}},completed:{control:{type:"array"}},options:{control:{type:"array"}}},render:({currentStep:e,orientation:t,options:r,completed:l})=>n.jsxs(u,{orientation:t,children:[r.map((s,a)=>n.jsxs(o,{isActive:e===a+1,isCompleted:l.includes(a+1),children:[n.jsx(o.Counter,{children:a+1}),n.jsx(o.Label,{children:s})]},s)),n.jsxs(o,{isDisabled:!0,children:[n.jsx(o.Counter,{children:r.length+1}),n.jsx(o.Label,{children:"Disabled"})]},r.length),n.jsxs(o,{isError:!0,children:[n.jsx(o.Counter,{children:r.length+2}),n.jsx(o.Label,{children:"Error"})]},r.length+1),n.jsxs(o,{isActive:!0,isError:!0,children:[n.jsx(o.Counter,{children:r.length+3}),n.jsx(o.Label,{children:"Active Error"})]},r.length+2)]})},p={args:{currentStep:1,completed:[3],orientation:"vertical",options:["Step 1","Step 2","Step 3"]}};var f,m,x;p.parameters={...p.parameters,docs:{...(f=p.parameters)==null?void 0:f.docs,source:{originalSource:`{
  args: {
    currentStep: 1,
    completed: [3],
    orientation: 'vertical',
    options: ['Step 1', 'Step 2', 'Step 3']
  }
}`,...(x=(m=p.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const B=["Default"];export{p as Default,B as __namedExportsOrder,q as default};

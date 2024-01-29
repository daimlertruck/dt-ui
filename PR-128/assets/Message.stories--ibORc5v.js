import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{L as M,a as b}from"./Link-59NfnAIC.js";import{r as k}from"./index-4g5l5LRQ.js";import"./index-lb1Yyg-x.js";import{C as $}from"./Close-fCiS4iy8.js";import{I as L}from"./Info-eLlTCXLO.js";import{E as v}from"./Error-ONMH080z.js";import{T as p}from"./Typography-_GTkkcG8.js";import{n as a}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./Button.styled-AWsdAV6e.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./TooltipProvider-MBvKdTIL.js";const _=e=>o.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:o.jsx("path",{d:"M1 21.5H23L12 2.5L1 21.5ZM13 18.5H11V16.5H13V18.5ZM13 14.5H11V10.5H13V14.5Z"})}),D=e=>o.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:o.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"})}),T=a.div`
  ${({theme:e,type:t})=>{var r,c;return`
    padding: ${e.spacing["3xs"]} ${e.spacing["2xs"]};
    background-color: ${e.colors[(r=l[t])==null?void 0:r.backgroundColor]};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: ${e.shape.message};
    border: 1px dashed ${e.palette[(c=l[t])==null?void 0:c.color]};
    width: 100%;
    height: 100%;
    gap: ${e.spacing["4xs"]};
  `}}
`,A=a.div`
  ${({theme:e})=>`
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: start;
    gap: ${e.spacing["6xs"]};
  `}
`,I=a.div`
  ${({theme:e})=>`
    padding-top: ${e.spacing["4xs"]};
  `}
`,E=a.div`
  ${({theme:e,color:t})=>`
    height: 100%;
    display: flex;
    align-items: center;
    color: ${e.palette[t]}
  `}
`,V=a.button`
  ${({theme:e})=>`
    color: ${e.colors.grey_60};
    border: 0;
    cursor: pointer;
    background: transparent;
    display: flex;
  
    &:hover {
      background-color: ${e.colors.white};
    }
  `}
`,l={Error:{icon:v,color:"error",backgroundColor:"red_10"},Info:{icon:L,color:"info",backgroundColor:"blue_10"},Success:{icon:D,color:"success",backgroundColor:"green_10"},Warning:{icon:_,color:"warning",backgroundColor:"yellow_10"},Default:{icon:()=>null,color:"neutralDark_100",backgroundColor:"grey_10"}},n=({children:e,dataTestId:t,type:r,description:c,title:d})=>{const y=l[r].icon,w=l[r].color,[S,j]=k.useState(!1),C=()=>{j(!0)};return S?null:o.jsxs(T,{"data-testid":t??"message",type:r,children:[o.jsx(E,{color:w,children:o.jsx(y,{"data-testid":"message-icon",height:"16px",width:"16px"})}),o.jsxs(A,{children:[d?o.jsx(p,{color:"textPrimary",element:"h2",fontStyles:"body2Bold",children:d}):null,o.jsx(p,{color:"textSecondary",fontStyles:"body3",children:c}),e]}),o.jsx(V,{onClick:C,children:o.jsx($,{height:"16px",width:"16px"})})]})};n.Action=({children:e,dataTestId:t})=>o.jsx(I,{"data-testid":t??"message-action",children:e});const oe={title:"Data Display/Message",component:n},H=({title:e,description:t,type:r})=>o.jsx(n,{description:t,title:e,type:r,children:o.jsx(n.Action,{children:o.jsx(M,{href:"/",textSize:b.Small,children:"View action"})})}),s=H.bind({});s.args={title:"This is a title",description:"Some important information will appear here.",type:"Error"};const W=({title:e,description:t,type:r})=>o.jsx(n,{description:t,title:e,type:r}),i=W.bind({});i.args={title:"This is a title",description:"Some important information will appear here.",type:"Success"};var g,m,u;s.parameters={...s.parameters,docs:{...(g=s.parameters)==null?void 0:g.docs,source:{originalSource:`({
  title,
  description,
  type
}) => {
  return <Message description={description} title={title} type={type}>
      <Message.Action>
        <Link href='/' textSize={LinkTextSize.Small}>
          View action
        </Link>
      </Message.Action>
    </Message>;
}`,...(u=(m=s.parameters)==null?void 0:m.docs)==null?void 0:u.source}}};var x,h,f;i.parameters={...i.parameters,docs:{...(x=i.parameters)==null?void 0:x.docs,source:{originalSource:`({
  title,
  description,
  type
}) => {
  return <Message description={description} title={title} type={type} />;
}`,...(f=(h=i.parameters)==null?void 0:h.docs)==null?void 0:f.source}}};const te=["Default","WithoutAction"];export{s as Default,i as WithoutAction,te as __namedExportsOrder,oe as default};

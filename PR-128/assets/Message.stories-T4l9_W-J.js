import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{L,a as M}from"./Link-vLAX9Xsl.js";import{r as C}from"./index-4g5l5LRQ.js";import"./index-lb1Yyg-x.js";import{C as v}from"./Close-fCiS4iy8.js";import{I as b}from"./Info-eLlTCXLO.js";import{E as D}from"./Error-ONMH080z.js";import{T as d}from"./Typography-F64zFEEd.js";import{n as c}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./Button.styled-ddkBO3zQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./TooltipProvider-3aowIJjA.js";const k=t=>e.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{d:"M1 21.5H23L12 2.5L1 21.5ZM13 18.5H11V16.5H13V18.5ZM13 14.5H11V10.5H13V14.5Z"})}),I=t=>e.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"})});var r=(t=>(t.Default="default",t.Error="error",t.Info="info",t.Success="success",t.Warning="warning",t))(r||{});const A=c.div`
  ${({theme:t,type:s})=>`
    padding: ${t.spacing["3xs"]} ${t.spacing["2xs"]};
    background-color: ${s===r.Default?t.colors.grey_10:t.palette[`${s}Light_100`]};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: ${t.shape.message};
    border: 1px dashed ${s===r.Default?t.colors.grey_10:t.palette[s]};
    width: 100%;
    height: 100%;
    gap: ${t.spacing["4xs"]};
  `}
`,E=c.div`
  ${({theme:t})=>`
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: start;
    gap: ${t.spacing["6xs"]};
  `}
`,_=c.div`
  ${({theme:t})=>`
    padding-top: ${t.spacing["4xs"]};
  `}
`,V=c.div`
  ${({theme:t,type:s})=>`
    height: 100%;
    display: flex;
    align-items: center;
    color: ${s==="default"?t.colors.grey_10:t.palette[s]};
    margin-top: ${t.spacing["6xs"]};
  `}
`,W=c.button`
  ${({theme:t})=>`
    color: ${t.colors.grey_60};
    border: 0;
    cursor: pointer;
    background: transparent;
    display: flex;
  
    &:hover {
      background-color: ${t.colors.white};
    }
  `}
`,H={[r.Error]:D,[r.Info]:b,[r.Success]:I,[r.Warning]:k,[r.Default]:()=>null},a=({children:t,dataTestId:s,type:i,description:f,title:l,isDismissable:S=!0})=>{const[w,y]=C.useState(!1),j=H[i],$=()=>{y(!0)};return w?null:e.jsxs(A,{"data-testid":s??"message",type:i,children:[e.jsx(V,{type:i,children:e.jsx(j,{"data-testid":"message-icon",height:"16px",width:"16px"})}),e.jsxs(E,{children:[l?e.jsx(d,{color:"textPrimary",element:"h2",fontStyles:"body2Bold",children:l}):null,e.jsx(d,{color:"textSecondary",fontStyles:"body3",children:f}),t]}),S?e.jsx(W,{onClick:$,children:e.jsx(v,{height:"16px",width:"16px"})}):null]})};a.Action=({children:t,dataTestId:s})=>e.jsx(_,{"data-testid":s??"message-action",children:t});const st={title:"Data Display/Message",component:a},Z=({title:t,description:s,type:i})=>e.jsx(a,{description:s,title:t,type:i,children:e.jsx(a.Action,{children:e.jsx(L,{href:"/",textSize:M.Small,children:"View action"})})}),o=Z.bind({});o.args={title:"This is a title",description:"Some important information will appear here.",type:"Error"};const z=({title:t,description:s,type:i})=>e.jsx(a,{description:s,title:t,type:i}),n=z.bind({});n.args={title:"This is a title",description:"Some important information will appear here.",type:"Success"};var p,g,u;o.parameters={...o.parameters,docs:{...(p=o.parameters)==null?void 0:p.docs,source:{originalSource:`({
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
}`,...(u=(g=o.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};var m,x,h;n.parameters={...n.parameters,docs:{...(m=n.parameters)==null?void 0:m.docs,source:{originalSource:`({
  title,
  description,
  type
}) => {
  return <Message description={description} title={title} type={type} />;
}`,...(h=(x=n.parameters)==null?void 0:x.docs)==null?void 0:h.source}}};const rt=["Default","WithoutAction"];export{o as Default,n as WithoutAction,rt as __namedExportsOrder,st as default};

import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{L as S,a as M}from"./Link-vLAX9Xsl.js";import{r as C}from"./index-4g5l5LRQ.js";import"./index-lb1Yyg-x.js";import{C as D}from"./Close-fCiS4iy8.js";import{I as $}from"./Info-eLlTCXLO.js";import{E as b}from"./Error-ONMH080z.js";import{T as h}from"./Typography-F64zFEEd.js";import{n as l}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./Button.styled-ddkBO3zQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./TooltipProvider-3aowIJjA.js";const L=s=>e.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...s,children:e.jsx("path",{d:"M1 21.5H23L12 2.5L1 21.5ZM13 18.5H11V16.5H13V18.5ZM13 14.5H11V10.5H13V14.5Z"})}),v=s=>e.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...s,children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"})});var r=(s=>(s.Default="default",s.Error="error",s.Info="info",s.Success="success",s.Warning="warning",s))(r||{});const I=l.div`
  ${({theme:s,type:t})=>`
    padding: ${s.spacing["3xs"]} ${s.spacing["2xs"]};
    background-color: ${t===r.Default?s.colors.grey_10:s.palette[`${t}Light_100`]};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: ${s.shape.message};
    border: 1px dashed ${t===r.Default?s.colors.grey_10:s.palette[t]};
    width: 100%;
    height: 100%;
    gap: ${s.spacing["4xs"]};
  `}
`,k=l.div`
  ${({theme:s})=>`
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: start;
    gap: ${s.spacing["6xs"]};
  `}
`,T=l.div`
  ${({theme:s})=>`
    padding-top: ${s.spacing["4xs"]};
  `}
`,E=l.div`
  ${({theme:s,type:t})=>`
    height: 100%;
    display: flex;
    align-items: center;
    color: ${t==="default"?s.colors.grey_10:s.palette[t]};
    margin-top: ${s.spacing["6xs"]};
  `}
`,_=l.button`
  ${({theme:s})=>`
    color: ${s.colors.grey_60};
    border: 0;
    cursor: pointer;
    background: transparent;
    display: flex;
  
    &:hover {
      background-color: ${s.colors.white};
    }
  `}
`,V={[r.Error]:b,[r.Info]:$,[r.Success]:v,[r.Warning]:L,[r.Default]:null},i=({children:s,dataTestId:t,type:n,isDismissable:f=!0})=>{const[j,y]=C.useState(!1),c=V[n],w=()=>{y(!0)};return j?null:e.jsxs(I,{"data-testid":t??"message",type:n,children:[c?e.jsx(E,{type:n,children:e.jsx(c,{"data-testid":"message-icon",height:"16px",width:"16px"})}):null,e.jsx(k,{children:s}),f?e.jsx(_,{onClick:w,children:e.jsx(D,{height:"16px",width:"16px"})}):null]})};i.Title=({children:s})=>e.jsx(h,{color:"textPrimary",element:"h2",fontStyles:"body2Bold",children:s});i.Description=({children:s})=>e.jsx(h,{color:"textSecondary",fontStyles:"body3",children:s});i.Action=({children:s,dataTestId:t})=>e.jsx(T,{"data-testid":t??"message-action",children:s});const ss={title:"Data Display/Message",component:i},W=({title:s,description:t,type:n})=>e.jsxs(i,{type:n,children:[e.jsx(i.Title,{children:s}),e.jsx(i.Description,{children:t}),e.jsx(i.Action,{children:e.jsx(S,{href:"#",textSize:M.Small,children:"View action"})})]}),o=W.bind({});o.args={title:"This is a title",description:"Some important information will appear here.",type:r.Error};const A=({type:s,isDismissable:t})=>e.jsx(i,{isDismissable:t,type:s,children:e.jsx("p",{children:"This is a custom and non-dismissable content"})}),a=A.bind({});a.args={type:r.Info,isDismissable:!1};var d,p,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`({
  title,
  description,
  type
}) => {
  return <Message type={type}>
      <Message.Title>{title}</Message.Title>
      <Message.Description>{description}</Message.Description>
      <Message.Action>
        <Link href='#' textSize={LinkTextSize.Small}>
          View action
        </Link>
      </Message.Action>
    </Message>;
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var m,u,x;a.parameters={...a.parameters,docs:{...(m=a.parameters)==null?void 0:m.docs,source:{originalSource:`({
  type,
  isDismissable
}) => {
  return <Message isDismissable={isDismissable} type={type}>
      <p>This is a custom and non-dismissable content</p>
    </Message>;
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const es=["Default","WithCustomContent"];export{o as Default,a as WithCustomContent,es as __namedExportsOrder,ss as default};

import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{L as M,a as S}from"./Link-h5OL-K5T.js";import{r as y}from"./index-4g5l5LRQ.js";import"./index-lb1Yyg-x.js";import{C}from"./Close-fCiS4iy8.js";import{I as D}from"./Info-eLlTCXLO.js";import{E as $}from"./Error-bZYIneX_.js";import{T as f}from"./Typography-zYZCbdVR.js";import{n as l}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./Button.styled-fGz7p1PP.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./typography-EBgY2913.js";const L=t=>e.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{d:"M1 21.5H23L12 2.5L1 21.5ZM13 18.5H11V16.5H13V18.5ZM13 14.5H11V10.5H13V14.5Z"})}),v=t=>e.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"})});var n=(t=>(t.Default="default",t.Error="error",t.Info="informative",t.Success="success",t.Warning="warning",t))(n||{});const I=l.div`
  ${({theme:t,type:s})=>`
    padding: ${t.spacing["3xs"]} ${t.spacing["2xs"]};
    background-color: ${s===n.Default?t.palette.base.light:t.palette[s].light};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: ${t.shape.message};
    border: 1px dashed ${s===n.Default?t.palette.border.default:t.palette[s].default};
    width: 100%;
    height: 100%;
    gap: ${t.spacing["4xs"]};
  `}
`,k=l.div`
  ${({theme:t})=>`
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: start;
    gap: ${t.spacing["6xs"]};
  `}
`,T=l.div`
  ${({theme:t})=>`
    padding-top: ${t.spacing["4xs"]};
  `}
`,E=l.div`
  ${({theme:t,type:s})=>`
    height: 100%;
    display: flex;
    align-items: center;
    color: ${s==="default"?t.palette.content.body:t.palette[s].default};
    margin-top: ${t.spacing["6xs"]};
  `}
`,V=l.button`
  ${({theme:t})=>`
    color: ${t.palette.content.body};
    border: 0;
    cursor: pointer;
    background: transparent;
    display: flex;
  
    &:hover {
      background-color: ${t.palette.base.default};
    }
  `}
`,W={[n.Error]:$,[n.Info]:D,[n.Success]:v,[n.Warning]:L,[n.Default]:null},i=({children:t,dataTestId:s,type:r,isDismissable:h=!0})=>{const[b,j]=y.useState(!1),c=W[r],w=()=>{j(!0)};return b?null:e.jsxs(I,{"data-testid":s??"message",type:r,children:[c?e.jsx(E,{type:r,children:e.jsx(c,{"data-testid":"message-icon",height:"16px",width:"16px"})}):null,e.jsx(k,{children:t}),h?e.jsx(V,{onClick:w,children:e.jsx(C,{height:"16px",width:"16px"})}):null]})};i.Title=({children:t})=>e.jsx(f,{color:"content.heading",element:"h2",fontStyles:"body2Bold",children:t});i.Description=({children:t})=>e.jsx(f,{color:"content.body",fontStyles:"body3",children:t});i.Action=({children:t,dataTestId:s})=>e.jsx(T,{"data-testid":s??"message-action",children:t});const tt={title:"Data Display/Message",component:i},A=({title:t,description:s,type:r})=>e.jsxs(i,{type:r,children:[e.jsx(i.Title,{children:t}),e.jsx(i.Description,{children:s}),e.jsx(i.Action,{children:e.jsx(M,{href:"#",textSize:S.Small,children:"View action"})})]}),o=A.bind({});o.args={title:"This is a title",description:"Some important information will appear here.",type:n.Error};const H=({type:t,isDismissable:s})=>e.jsx(i,{isDismissable:s,type:t,children:e.jsx("p",{children:"This is a custom and non-dismissable content"})}),a=H.bind({});a.args={type:n.Info,isDismissable:!1};var d,p,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
}`,...(x=(u=a.parameters)==null?void 0:u.docs)==null?void 0:x.source}}};const et=["Default","WithCustomContent"];export{o as Default,a as WithCustomContent,et as __namedExportsOrder,tt as default};

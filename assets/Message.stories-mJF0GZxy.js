import{j as t}from"./jsx-runtime-vNq4Oc-g.js";import{L as w,a as M}from"./Link-h5OL-K5T.js";import{r as S}from"./index-4g5l5LRQ.js";import"./index-lb1Yyg-x.js";import{C}from"./Close-fCiS4iy8.js";import{I as D}from"./Info-eLlTCXLO.js";import{E as $}from"./Error-bZYIneX_.js";import{T as f}from"./Typography-zYZCbdVR.js";import{n as l}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./Button.styled-fGz7p1PP.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./typography-EBgY2913.js";const v=e=>t.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:t.jsx("path",{d:"M1 21.5H23L12 2.5L1 21.5ZM13 18.5H11V16.5H13V18.5ZM13 14.5H11V10.5H13V14.5Z"})}),L=e=>t.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...e,children:t.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"})});var n=(e=>(e.Default="default",e.Error="error",e.Info="informative",e.Success="success",e.Warning="warning",e))(n||{});const I=l.div`
  ${({theme:e,type:s})=>`
    padding: ${e.spacing["3xs"]} ${e.spacing["2xs"]};
    background-color: ${s===n.Default?e.palette.base.light:e.palette[s].light};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: ${e.shape.message};
    border: 1px dashed ${s===n.Default?e.palette.border.default:e.palette[s].default};
    width: 100%;
    height: 100%;
    gap: ${e.spacing["4xs"]};
  `}
`,k=l.div`
  ${({theme:e})=>`
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: start;
    gap: ${e.spacing["6xs"]};
  `}
`,T=l.div`
  ${({theme:e})=>`
    padding-top: ${e.spacing["4xs"]};
  `}
`,E=l.div`
  ${({theme:e,type:s})=>`
    height: 100%;
    display: flex;
    align-items: center;
    color: ${s==="default"?e.palette.content.body:e.palette[s].default};
    margin-top: ${e.spacing["6xs"]};
  `}
`,V=l.button`
  ${({theme:e})=>`
    color: ${e.palette.content.body};
    border: 0;
    cursor: pointer;
    background: transparent;
    display: flex;
  
    &:hover {
      background-color: ${e.palette.base.default};
    }
  `}
`,W={[n.Error]:$,[n.Info]:D,[n.Success]:L,[n.Warning]:v,[n.Default]:null},i=({children:e,dataTestId:s,type:r,isDismissable:h=!0})=>{const[b,j]=S.useState(!1),c=W[r],y=()=>{j(!0)};return b?null:t.jsxs(I,{"data-testid":s??"message",type:r,children:[c?t.jsx(E,{type:r,children:t.jsx(c,{"data-testid":"message-icon",height:"16px",width:"16px"})}):null,t.jsx(k,{children:e}),h?t.jsx(V,{onClick:y,children:t.jsx(C,{height:"16px",width:"16px"})}):null]})};i.Title=({children:e})=>t.jsx(f,{color:"content.heading",element:"h2",fontStyles:"body2Bold",children:e});i.Description=({children:e})=>t.jsx(f,{color:"content.body",fontStyles:"body3",children:e});i.Action=({children:e,dataTestId:s})=>t.jsx(T,{"data-testid":s??"message-action",children:e});const ee={title:"Data Display/Message",component:i,argTypes:{type:{options:Object.values(n),control:{type:"inline-radio"}}}},A=({title:e,description:s,type:r})=>t.jsxs(i,{type:r,children:[t.jsx(i.Title,{children:e}),t.jsx(i.Description,{children:s}),t.jsx(i.Action,{children:t.jsx(w,{href:"#",textSize:M.Small,children:"View action"})})]}),o=A.bind({});o.args={title:"This is a title",description:"Some important information will appear here.",type:n.Error};const H=({type:e,isDismissable:s})=>t.jsx(i,{isDismissable:s,type:e,children:t.jsx("p",{children:"This is a custom and non-dismissable content"})}),a=H.bind({});a.args={type:n.Info,isDismissable:!1};var d,p,g;o.parameters={...o.parameters,docs:{...(d=o.parameters)==null?void 0:d.docs,source:{originalSource:`({
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
}`,...(g=(p=o.parameters)==null?void 0:p.docs)==null?void 0:g.source}}};var u,m,x;a.parameters={...a.parameters,docs:{...(u=a.parameters)==null?void 0:u.docs,source:{originalSource:`({
  type,
  isDismissable
}) => {
  return <Message isDismissable={isDismissable} type={type}>
      <p>This is a custom and non-dismissable content</p>
    </Message>;
}`,...(x=(m=a.parameters)==null?void 0:m.docs)==null?void 0:x.source}}};const te=["Default","WithCustomContent"];export{o as Default,a as WithCustomContent,te as __namedExportsOrder,ee as default};

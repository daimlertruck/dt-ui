import{j as s}from"./jsx-runtime-vNq4Oc-g.js";import{r as p}from"./index-4g5l5LRQ.js";import"./index-lb1Yyg-x.js";import{C as x}from"./Close-fCiS4iy8.js";import{E as f}from"./Error-bZYIneX_.js";import{I as h}from"./Info-eLlTCXLO.js";import{T as l}from"./Typography-hl8z6s4j.js";import{n}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const m=t=>s.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:s.jsx("path",{d:"M12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM10 17L5 12L6.41 10.59L10 14.17L17.59 6.58L19 8L10 17Z"})}),w=t=>s.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:s.jsx("path",{d:"M1 21.5H23L12 2.5L1 21.5ZM13 18.5H11V16.5H13V18.5ZM13 14.5H11V10.5H13V14.5Z"})});var o=(t=>(t.Default="default",t.Error="error",t.Info="informative",t.Success="success",t.Warning="warning",t))(o||{});const $=n.div`
  ${({theme:t,type:e})=>`
    padding: ${t.spacing["3xs"]} ${t.spacing["2xs"]};
    background-color: ${e===o.Default?t.palette.base.light:t.palette[e].light};
    display: flex;
    align-items: flex-start;
    justify-content: center;
    border-radius: ${t.shape.message};
    border: 1px dashed ${e===o.Default?t.palette.border.default:t.palette[e].default};
    width: 100%;
    height: 100%;
    gap: ${t.spacing["4xs"]};
  `}
`,j=n.div`
  ${({theme:t})=>`
    display: flex;
    flex-direction: column;
    flex: 1;
    text-align: start;
    gap: ${t.spacing["6xs"]};
  `}
`,b=n.div`
  ${({theme:t})=>`
    padding-top: ${t.spacing["4xs"]};
  `}
`,v=n.div`
  ${({theme:t,type:e})=>`
    height: 100%;
    display: flex;
    align-items: center;
    color: ${e==="default"?t.palette.content.body:t.palette[e].default};
    margin-top: ${t.spacing["6xs"]};
  `}
`,C=n.button`
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
`,S={[o.Error]:f,[o.Info]:h,[o.Success]:m,[o.Warning]:w,[o.Default]:null},i=({children:t,dataTestId:e,type:r,isDismissable:c=!0})=>{const[d,g]=p.useState(!1),a=S[r],u=()=>{g(!0)};return d?null:s.jsxs($,{"data-testid":e??"message",type:r,children:[a?s.jsx(v,{type:r,children:s.jsx(a,{"data-testid":"message-icon",height:"16px",width:"16px"})}):null,s.jsx(j,{children:t}),c?s.jsx(C,{onClick:u,children:s.jsx(x,{height:"16px",width:"16px"})}):null]})};i.Title=({children:t})=>s.jsx(l,{color:"content.heading",element:"h2",fontStyles:"body2Bold",children:t});i.Description=({children:t})=>s.jsx(l,{color:"content.body",fontStyles:"body3",children:t});i.Action=({children:t,dataTestId:e})=>s.jsx(b,{"data-testid":e??"message-action",children:t});export{i as M,o as a};

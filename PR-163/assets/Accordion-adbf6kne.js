import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{r as L}from"./index-4g5l5LRQ.js";import{n as c}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{D as S}from"./Divider-b2fMfDtF.js";const m=o=>n.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...o,children:n.jsx("g",{children:n.jsx("path",{d:"M7.40991 18.59L8.82991 20L11.9999 16.83L15.1699 20L16.5799 18.59L11.9999 14L7.40991 18.59ZM16.5899 5.41L15.1699 4L11.9999 7.17L8.82991 4L7.40991 5.41L11.9999 10L16.5899 5.41Z",fill:"currentColor",id:"Vector"})})}),v=o=>n.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...o,children:n.jsx("g",{children:n.jsx("path",{d:"M11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83ZM11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17Z",fill:"currentColor",id:"Vector"})})}),C={Small:"small",Large:"large"},$={White:"white",Grey:"grey"},l=o=>({small:o.spacing["2xs"],large:o.spacing.xs}),A=()=>({small:"248px",large:"468px"}),u=o=>({white:o.palette.primary.contrast,grey:o.palette.base.light}),k=o=>({white:o.palette.primary.light,grey:o.palette.secondary.medium}),b=c.div`
  ${({theme:o,size:t,backgroundColor:r,isDisabled:e})=>`
    width: ${A()[t]};
    background-color: ${u(o)[r]};
    border-radius: ${o.radius["5xs"]};

    ${e?`
        background-color: ${u(o)[$.Grey]}
      `:`
        &:hover {
          background-color: ${k(o)[r]};
        }
      `}
  `}
`,j="1px",B=c.header`
  ${({theme:o,size:t,isDisabled:r})=>`
    padding: ${l(o)[t]};
    padding-bottom: ${o.spacing.none};
    cursor: ${r?"not-allowed":"pointer"};
  `}
`,H=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,E=c.div`
  width: 100%;
`,M=c.div`
  width: 24px;
  height: 24px;

  ${({theme:o,isDisabled:t})=>`
    margin-left: ${o.spacing["3xs"]};
    color: ${t?o.palette.secondary.medium:o.palette.content.secondary}
  `}
`,I=c(S)`
  ${({theme:o,size:t,backgroundColor:r})=>`
    border: none;
    padding-top: ${l(o)[t]};

    ${r===$.White&&`
        border-bottom: ${j} solid ${o.palette.secondary.medium};
        padding-top: calc(${l(o)[t]} - ${j});
      `}
    
  `}
`,W=({handleHeaderClick:o,handleHeaderKeyPress:t,isOpenState:r,size:e,backgroundColor:a,showIcon:s,isDisabled:d,children:p,dataTestId:g,style:i})=>n.jsxs(B,{"aria-disabled":d,"data-testid":g??"accordion-header",isDisabled:d,onClick:d?()=>{}:o,onKeyDown:d?()=>{}:t,role:"button",size:e,style:i,tabIndex:d?-1:0,children:[n.jsxs(H,{children:[n.jsx(E,{children:p}),s?n.jsx(M,{isDisabled:d,children:r?n.jsx(m,{}):n.jsx(v,{})}):null]}),n.jsx(I,{backgroundColor:a,size:e})]}),Z=c.div`
  ${({theme:o,size:t,isOpenState:r})=>`
    padding: ${l(o)[t]};
    padding-top: ${o.spacing.none};
    display: ${r?"block":"none"};
  `}
`,G=c.div`
  ${({theme:o})=>`
    padding: ${o.spacing["2xs"]};
  `}
`,P=({size:o,isOpenState:t,children:r,dataTestId:e,style:a})=>n.jsx(Z,{"data-testid":e??"accordion-body",isOpenState:t,size:o,style:a,children:n.jsx(G,{children:r})}),R=({isOpen:o,headerContent:t,size:r=C.Large,backgroundColor:e=$.White,showIcon:a=!0,isDisabled:s=!1,children:d,dataTestId:p,style:g})=>{const[i,w]=L.useState(o),h=x=>w(x);L.useEffect(()=>{h(o)},[o]);const y=()=>{h(!i)},f=x=>{x.key==="Enter"&&y()};return n.jsxs(b,{backgroundColor:e,"data-testid":p??"accordion-container",isDisabled:s,size:r,style:g,children:[n.jsx(W,{backgroundColor:e,handleHeaderClick:y,handleHeaderKeyPress:f,isDisabled:s,isOpenState:i,showIcon:a,size:r,children:t}),n.jsx(P,{isOpenState:i,size:r,children:d})]})},V=R;export{V as A,C as a,$ as b};

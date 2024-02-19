import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{r as L}from"./index-4g5l5LRQ.js";import{n as d}from"./emotion-styled.browser.esm-QTPHyGVR.js";const m=o=>n.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...o,children:n.jsx("g",{children:n.jsx("path",{d:"M7.40991 18.59L8.82991 20L11.9999 16.83L15.1699 20L16.5799 18.59L11.9999 14L7.40991 18.59ZM16.5899 5.41L15.1699 4L11.9999 7.17L8.82991 4L7.40991 5.41L11.9999 10L16.5899 5.41Z",fill:"currentColor",id:"Vector"})})}),C=o=>n.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...o,children:n.jsx("g",{children:n.jsx("path",{d:"M11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83ZM11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17Z",fill:"currentColor",id:"Vector"})})}),A={Small:"small",Large:"large"},x={White:"white",Grey:"grey"},k=()=>({small:"248px",large:"468px"}),u=o=>({white:o.palette.primary.contrast,grey:o.palette.base.light}),B=o=>({white:o.palette.primary.light,grey:o.palette.secondary.medium}),H=d.div`
  ${({theme:o,size:t,backgroundColor:r,isDisabled:c})=>`
    width: ${k()[t]};
    background-color: ${u(o)[r]};
    border-radius: ${o.radius["5xs"]};

    ${c?`
        background-color: ${u(o)[x.Grey]}
      `:`
        &:hover {
          background-color: ${B(o)[r]};
        }
      `}
  `}
`,j="1px",p=o=>({small:o.spacing["2xs"],large:o.spacing.xs}),b=d.header`
  ${({theme:o,size:t,isDisabled:r})=>`
    padding: ${p(o)[t]};
    padding-bottom: ${o.spacing.none};
    cursor: ${r?"not-allowed":"pointer"};
  `}
`,E=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,M=d.div`
  width: 100%;
`,I=d.div`
  width: 24px;
  height: 24px;

  ${({theme:o,isDisabled:t})=>`
    margin-left: ${o.spacing["3xs"]};
    color: ${t?o.palette.secondary.medium:o.palette.content.secondary}
  `}
`,P=d.hr`
  ${({theme:o,size:t,backgroundColor:r})=>`
    border: none;
    padding-top: ${p(o)[t]};

    ${r===x.White&&`
        border-bottom: ${j} solid ${o.palette.secondary.medium};
        padding-top: calc(${p(o)[t]} - ${j});
      `}
    
  `}
`,w=({handleHeaderClick:o,handleHeaderKeyPress:t,isOpenState:r,size:c,backgroundColor:s,showIcon:a,isDisabled:e,children:i})=>n.jsxs(b,{"aria-disabled":e,"data-testid":"accordion-header",isDisabled:e,onClick:e?()=>{}:o,onKeyDown:e?()=>{}:t,role:"button",size:c,tabIndex:e?-1:0,children:[n.jsxs(E,{children:[n.jsx(M,{children:i}),a?n.jsx(I,{isDisabled:e,children:r?n.jsx(m,{}):n.jsx(C,{})}):null]}),n.jsx(P,{backgroundColor:s,size:c})]}),W=o=>({small:o.spacing["2xs"],large:o.spacing.xs}),Z=d.div`
  ${({theme:o,size:t,isOpenState:r})=>`
    padding: ${W(o)[t]};
    padding-top: ${o.spacing.none};
    display: ${r?"block":"none"};
  `}
`,G=d.div`
  ${({theme:o})=>`
    padding: ${o.spacing["2xs"]};
  `}
`,f=({size:o,isOpenState:t,children:r})=>n.jsx(Z,{"data-testid":"accordion-body",isOpenState:t,size:o,children:n.jsx(G,{children:r})}),$=({isOpen:o,headerContent:t,size:r=A.Large,backgroundColor:c=x.White,showIcon:s=!0,isDisabled:a=!1,children:e,dataTestId:i})=>{const[l,S]=L.useState(o),y=g=>S(g);L.useEffect(()=>{y(o)},[o]);const h=()=>{y(!l)},v=g=>{g.key==="Enter"&&h()};return n.jsxs(H,{backgroundColor:c,"data-testid":i??"accordion-container",isDisabled:a,size:r,children:[n.jsx(w,{backgroundColor:c,handleHeaderClick:h,handleHeaderKeyPress:v,isDisabled:a,isOpenState:l,showIcon:s,size:r,children:t}),n.jsx(f,{isOpenState:l,size:r,children:e})]})};$.Header=w;$.Body=f;const T=$;export{T as A,A as a,x as b};

import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{r as y}from"./index-4g5l5LRQ.js";import{n as c}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{D as f}from"./Divider-b2fMfDtF.js";const S=o=>n.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...o,children:n.jsx("g",{children:n.jsx("path",{d:"M7.40991 18.59L8.82991 20L11.9999 16.83L15.1699 20L16.5799 18.59L11.9999 14L7.40991 18.59ZM16.5899 5.41L15.1699 4L11.9999 7.17L8.82991 4L7.40991 5.41L11.9999 10L16.5899 5.41Z",fill:"currentColor",id:"Vector"})})}),m=o=>n.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...o,children:n.jsx("g",{children:n.jsx("path",{d:"M11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83ZM11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17Z",fill:"currentColor",id:"Vector"})})}),v={Small:"small",Large:"large"},x={White:"white",Grey:"grey"},s=o=>({small:o.spacing["2xs"],large:o.spacing.xs}),C=()=>({small:"248px",large:"468px"}),L=o=>({white:o.palette.primary.contrast,grey:o.palette.base.light}),A=o=>({white:o.palette.primary.light,grey:o.palette.secondary.medium}),k=c.div`
  ${({theme:o,size:t,backgroundColor:r,isDisabled:e})=>`
    width: ${C()[t]};
    background-color: ${L(o)[r]};
    border-radius: ${o.radius["5xs"]};

    ${e?`
        background-color: ${L(o)[x.Grey]}
      `:`
        &:hover {
          background-color: ${A(o)[r]};
        }
      `}
  `}
`,j="1px",b=c.header`
  ${({theme:o,size:t,isDisabled:r})=>`
    padding: ${s(o)[t]};
    padding-bottom: ${o.spacing.none};
    cursor: ${r?"not-allowed":"pointer"};
  `}
`,B=c.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,H=c.div`
  width: 100%;
`,E=c.div`
  width: 24px;
  height: 24px;

  ${({theme:o,isDisabled:t})=>`
    margin-left: ${o.spacing["3xs"]};
    color: ${t?o.palette.secondary.medium:o.palette.content.secondary}
  `}
`,M=c(f)`
  ${({theme:o,size:t,backgroundColor:r})=>`
    border: none;
    padding-top: ${s(o)[t]};

    ${r===x.White&&`
        border-bottom: ${j} solid ${o.palette.secondary.medium};
        padding-top: calc(${s(o)[t]} - ${j});
      `}
    
  `}
`,I=({handleHeaderClick:o,handleHeaderKeyPress:t,isOpenState:r,size:e,backgroundColor:a,isDisabled:d,children:l,dataTestId:p,style:i})=>n.jsxs(b,{"aria-disabled":d,"data-testid":p??"accordion-header",isDisabled:d,onClick:d?()=>{}:o,onKeyDown:d?()=>{}:t,role:"button",size:e,style:i,tabIndex:d?-1:0,children:[n.jsxs(B,{children:[n.jsx(H,{children:l}),n.jsx(E,{isDisabled:d,children:r?n.jsx(S,{}):n.jsx(m,{})})]}),n.jsx(M,{backgroundColor:a,size:e})]}),W=c.div`
  ${({theme:o,size:t,isOpenState:r})=>`
    padding: ${s(o)[t]};
    padding-top: ${o.spacing.none};
    display: ${r?"block":"none"};
  `}
`,Z=c.div`
  ${({theme:o})=>`
    padding: ${o.spacing["2xs"]};
  `}
`,G=({size:o,isOpenState:t,children:r,dataTestId:e,style:a})=>n.jsx(W,{"data-testid":e??"accordion-body",isOpenState:t,size:o,style:a,children:n.jsx(Z,{children:r})}),P=({isOpen:o,headerContent:t,size:r=v.Large,backgroundColor:e=x.White,isDisabled:a=!1,children:d,dataTestId:l,style:p})=>{const[i,w]=y.useState(o),$=g=>w(g);y.useEffect(()=>{$(o)},[o]);const h=()=>{$(!i)},u=g=>{g.key==="Enter"&&h()};return n.jsxs(k,{backgroundColor:e,"data-testid":l??"accordion-container",isDisabled:a,size:r,style:p,children:[n.jsx(I,{backgroundColor:e,handleHeaderClick:h,handleHeaderKeyPress:u,isDisabled:a,isOpenState:i,size:r,children:t}),n.jsx(G,{isOpenState:i,size:r,children:d})]})},U=P;export{U as A,v as a,x as b};

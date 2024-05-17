import{j as n}from"./jsx-runtime-CKrituN3.js";import{r as g}from"./index-CBqU2yxZ.js";import{n as i}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const u=o=>n.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...o,children:n.jsx("g",{children:n.jsx("path",{d:"M7.40991 18.59L8.82991 20L11.9999 16.83L15.1699 20L16.5799 18.59L11.9999 14L7.40991 18.59ZM16.5899 5.41L15.1699 4L11.9999 7.17L8.82991 4L7.40991 5.41L11.9999 10L16.5899 5.41Z",fill:"currentColor",id:"Vector"})})}),L=o=>n.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...o,children:n.jsx("g",{children:n.jsx("path",{d:"M11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83ZM11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17Z",fill:"currentColor",id:"Vector"})})}),w={White:"white",Grey:"grey"},h=o=>({white:o.palette.primary.contrast,grey:o.palette.base.light}),j=o=>({white:o.palette.primary.light,grey:o.palette.secondary.medium}),f=o=>({white:`0px 1px 0px 0px ${o.palette.border.light}`,grey:"none"}),v=i.div`
  ${({theme:o,backgroundColor:t,isDisabled:e,isOpenState:r})=>`
    position: relative;
    width: 100%;
    min-width: '248px';
    background-color: ${h(o)[t]};
    border-radius: ${o.shape.accordion};
    box-shadow: ${r?"none":f(o)[t]};

    ${e?`
        background-color: ${h(o)[w.Grey]}
      `:`
        &:hover {
          background-color: ${j(o)[t]};
          box-shadow: ${o.shadows.xs}
        }
      `}
  `}
`,b=i.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;

  ${({theme:o})=>`
    background-color: ${o.palette.secondary.medium}
    border-radius: ${o.shape.accordion};
  `}
`,k=i.header`
  ${({theme:o,isDisabled:t})=>`
    padding: ${o.spacing["2xs"]};
    cursor: ${t?"not-allowed":"pointer"};
   
    @media (min-width: ${o.breakpoints.s}) {
      padding: ${o.spacing.xs};
    }
  `}
`,S=i.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,C=i.div`
  width: 100%;
`,B=i.div`
  width: 24px;
  height: 24px;

  ${({theme:o})=>`
    margin-left: ${o.spacing["3xs"]};
    color: ${o.palette.content.secondary}
  `}
`,m=({handleHeaderClick:o,handleHeaderKeyPress:t,isOpenState:e,isDisabled:r,children:s,dataTestId:c,style:a})=>n.jsx(k,{"aria-disabled":r,"data-testid":c??"accordion-header",isDisabled:r,onClick:o,onKeyDown:t,role:"button",style:a,tabIndex:r?-1:0,children:n.jsxs(S,{children:[n.jsx(C,{children:s}),n.jsx(B,{children:e?n.jsx(u,{}):n.jsx(L,{})})]})}),A=i.div`
  ${({theme:o,isOpenState:t})=>`
    padding: ${o.spacing["2xs"]};
    padding-top: ${o.spacing.none};
    
    display: ${t?"block":"none"};

    @media only screen and (min-width: ${o.breakpoints.s}) {
      padding: ${o.spacing.xs};
      padding-top: ${o.spacing.none};
    }
  `}
`,M=({isOpenState:o,children:t,dataTestId:e,style:r})=>n.jsx(A,{"data-testid":e??"accordion-body",isOpenState:o,style:r,children:t}),H=({isOpen:o,headerContent:t,backgroundColor:e=w.White,isDisabled:r=!1,children:s,dataTestId:c,style:a})=>{const[d,y]=g.useState(o),p=l=>y(l);g.useEffect(()=>{p(o)},[o]);const x=()=>{r||p(!d)},$=l=>{l.key==="Enter"&&x()};return n.jsxs(v,{backgroundColor:e,"data-testid":c??"accordion-container",isDisabled:r,isOpenState:d,style:a,children:[r?n.jsx(b,{}):null,n.jsx(m,{handleHeaderClick:x,handleHeaderKeyPress:$,isDisabled:r,isOpenState:d,children:t}),n.jsx(M,{isOpenState:d,children:s})]})},G=H;export{G as A,w as a};

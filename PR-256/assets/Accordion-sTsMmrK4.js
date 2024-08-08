import{j as n}from"./jsx-runtime-CKrituN3.js";import{r as g}from"./index-CBqU2yxZ.js";import{n as d}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const y=o=>n.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...o,children:n.jsx("g",{children:n.jsx("path",{d:"M7.40991 18.59L8.82991 20L11.9999 16.83L15.1699 20L16.5799 18.59L11.9999 14L7.40991 18.59ZM16.5899 5.41L15.1699 4L11.9999 7.17L8.82991 4L7.40991 5.41L11.9999 10L16.5899 5.41Z",fill:"currentColor",id:"Vector"})})}),L=o=>n.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...o,children:n.jsx("g",{children:n.jsx("path",{d:"M11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83ZM11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17Z",fill:"currentColor",id:"Vector"})})}),w={White:"white",Grey:"grey"},h=o=>({white:o.palette.surface.contrast,grey:o.palette.surface.default}),f=o=>({white:o.palette.primary.light,grey:o.palette.surface.medium}),j=o=>({white:`0px 1px 0px 0px ${o.palette.border.light}`,grey:"none"}),v=d.div`
  ${({theme:o,backgroundColor:t,isDisabled:r,isOpenState:e})=>`
    position: relative;
    width: 100%;
    min-width: '248px';
    background-color: ${h(o)[t]};
    border-radius: ${o.shape.accordion};
    box-shadow: ${e?"none":j(o)[t]};

    ${r?`
        background-color: ${h(o)[w.Grey]}
      `:`
        &:hover {
          background-color: ${f(o)[t]};
          box-shadow: ${o.shadows.xs}
        }
      `}
  `}
`,b=d.div`
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
`,k=d.header`
  ${({theme:o,isDisabled:t})=>`
    padding: ${o.spacing["2xs"]};
    cursor: ${t?"not-allowed":"pointer"};
   
    @media (min-width: ${o.breakpoints.s}) {
      padding: ${o.spacing.xs};
    }
  `}
`,S=d.div`
  display: flex;
  align-items: center;
  justify-content: center;
`,C=d.div`
  width: 100%;
`,m=d.div`
  width: 24px;
  height: 24px;

  ${({theme:o})=>`
    margin-left: ${o.spacing["3xs"]};
    color: ${o.palette.content.medium}
  `}
`,B=({handleHeaderClick:o,handleHeaderKeyPress:t,isOpenState:r,isDisabled:e,children:c,dataTestId:s,style:a})=>n.jsx(k,{"aria-disabled":e,"data-testid":s??"accordion-header",isDisabled:e,onClick:o,onKeyDown:t,role:"button",style:a,tabIndex:e?-1:0,children:n.jsxs(S,{children:[n.jsx(C,{children:c}),n.jsx(m,{children:r?n.jsx(y,{}):n.jsx(L,{})})]})}),A=d.div`
  ${({theme:o,isOpenState:t})=>`
    padding: ${o.spacing["2xs"]};
    padding-top: ${o.spacing.none};
    
    display: ${t?"block":"none"};

    @media only screen and (min-width: ${o.breakpoints.s}) {
      padding: ${o.spacing.xs};
      padding-top: ${o.spacing.none};
    }
  `}
`,M=({isOpenState:o,children:t,dataTestId:r,style:e})=>n.jsx(A,{"data-testid":r??"accordion-body",isOpenState:o,style:e,children:t}),H=({isOpen:o,headerContent:t,backgroundColor:r=w.White,isDisabled:e=!1,children:c,dataTestId:s,style:a})=>{const[i,u]=g.useState(o),p=l=>u(l);g.useEffect(()=>{p(o)},[o]);const x=()=>{e||p(!i)},$=l=>{l.key==="Enter"&&x()};return n.jsxs(v,{backgroundColor:r,"data-testid":s??"accordion-container",isDisabled:e,isOpenState:i,style:a,children:[e?n.jsx(b,{}):null,n.jsx(B,{handleHeaderClick:x,handleHeaderKeyPress:$,isDisabled:e,isOpenState:i,children:t}),n.jsx(M,{isOpenState:i,children:c})]})},G=H;export{G as A,w as a};

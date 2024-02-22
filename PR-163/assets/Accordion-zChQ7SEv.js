import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{r as y}from"./index-4g5l5LRQ.js";import{n as d}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{D as L}from"./Divider-b2fMfDtF.js";const j=n=>o.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...n,children:o.jsx("g",{children:o.jsx("path",{d:"M7.40991 18.59L8.82991 20L11.9999 16.83L15.1699 20L16.5799 18.59L11.9999 14L7.40991 18.59ZM16.5899 5.41L15.1699 4L11.9999 7.17L8.82991 4L7.40991 5.41L11.9999 10L16.5899 5.41Z",fill:"currentColor",id:"Vector"})})}),u=n=>o.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...n,children:o.jsx("g",{children:o.jsx("path",{d:"M11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83ZM11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17Z",fill:"currentColor",id:"Vector"})})}),p={White:"white",Grey:"grey"},$=n=>({white:n.palette.primary.contrast,grey:n.palette.base.light}),f=n=>({white:n.palette.primary.light,grey:n.palette.secondary.medium}),m=d.div`
  ${({theme:n,backgroundColor:t,isDisabled:r})=>`
    width: 100%;
    min-width: '248px';
    background-color: ${$(n)[t]};
    border-radius: ${n.radius["5xs"]};

    ${r?`
        background-color: ${$(n)[p.Grey]}
      `:`
        &:hover {
          background-color: ${f(n)[t]};
        }
      `}
  `}
`,v=d.header`
  ${({theme:n,isDisabled:t})=>`
    padding: ${n.spacing["2xs"]};
    padding-bottom: ${n.spacing.none};
    cursor: ${t?"not-allowed":"pointer"};

    @media only screen and (min-width: ${n.breakpoints.s}) {
      padding: ${n.spacing.xs};
      padding-bottom: ${n.spacing.none};
    }
  `}
`,k=d.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({theme:n})=>`
    padding-bottom: ${n.spacing["2xs"]};

    @media only screen and (min-width: ${n.breakpoints.s}) {
      padding-bottom: ${n.spacing.xs};
    }
  `}
`,C=d.div`
  width: 100%;
`,S=d.div`
  width: 24px;
  height: 24px;

  ${({theme:n,isDisabled:t})=>`
    margin-left: ${n.spacing["3xs"]};
    color: ${t?n.palette.secondary.medium:n.palette.content.secondary}
  `}
`,b=({handleHeaderClick:n,handleHeaderKeyPress:t,isOpenState:r,backgroundColor:e,isDisabled:i,children:c,dataTestId:a,style:s})=>o.jsxs(v,{"aria-disabled":i,"data-testid":a??"accordion-header",isDisabled:i,onClick:i?()=>{}:n,onKeyDown:i?()=>{}:t,role:"button",style:s,tabIndex:i?-1:0,children:[o.jsxs(k,{children:[o.jsx(C,{children:c}),o.jsx(S,{isDisabled:i,children:r?o.jsx(j,{}):o.jsx(u,{})})]}),e===p.White?o.jsx(L,{style:{margin:0,marginTop:-1}}):null]}),A=d.div`
  ${({theme:n,isOpenState:t})=>`
    padding: ${n.spacing["2xs"]};
    padding-top: ${n.spacing.none};
    display: ${t?"block":"none"};

    @media only screen and (min-width: ${n.breakpoints.s}) {
      padding: ${n.spacing.xs};
    }
  `}
`,B=d.div`
  ${({theme:n})=>`
    padding: ${n.spacing["2xs"]};
  `}
`,M=({isOpenState:n,children:t,dataTestId:r,style:e})=>o.jsx(A,{"data-testid":r??"accordion-body",isOpenState:n,style:e,children:o.jsx(B,{children:t})}),H=({isOpen:n,headerContent:t,backgroundColor:r=p.White,isDisabled:e=!1,children:i,dataTestId:c,style:a})=>{const[s,h]=y.useState(n),g=l=>h(l);y.useEffect(()=>{g(n)},[n]);const x=()=>{g(!s)},w=l=>{l.key==="Enter"&&x()};return o.jsxs(m,{backgroundColor:r,"data-testid":c??"accordion-container",isDisabled:e,style:a,children:[o.jsx(b,{backgroundColor:r,handleHeaderClick:x,handleHeaderKeyPress:w,isDisabled:e,isOpenState:s,children:t}),o.jsx(M,{isOpenState:s,children:i})]})},G=H;export{G as A,p as a};

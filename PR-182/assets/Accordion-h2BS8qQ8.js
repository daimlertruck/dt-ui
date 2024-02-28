import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{r as $}from"./index-4g5l5LRQ.js";import{n as e}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{D as u}from"./Divider-b2fMfDtF.js";const L=n=>o.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...n,children:o.jsx("g",{children:o.jsx("path",{d:"M7.40991 18.59L8.82991 20L11.9999 16.83L15.1699 20L16.5799 18.59L11.9999 14L7.40991 18.59ZM16.5899 5.41L15.1699 4L11.9999 7.17L8.82991 4L7.40991 5.41L11.9999 10L16.5899 5.41Z",fill:"currentColor",id:"Vector"})})}),j=n=>o.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...n,children:o.jsx("g",{children:o.jsx("path",{d:"M11.9999 5.83L15.1699 9L16.5799 7.59L11.9999 3L7.40991 7.59L8.82991 9L11.9999 5.83ZM11.9999 18.17L8.82991 15L7.41991 16.41L11.9999 21L16.5899 16.41L15.1699 15L11.9999 18.17Z",fill:"currentColor",id:"Vector"})})}),p={White:"white",Grey:"grey"},y=n=>({white:n.palette.primary.contrast,grey:n.palette.base.light}),f=n=>({white:n.palette.primary.light,grey:n.palette.secondary.medium}),v=e.div`
  ${({theme:n,backgroundColor:t,isDisabled:i})=>`
    position: relative;
    width: 100%;
    min-width: '248px';
    background-color: ${y(n)[t]};
    border-radius: ${n.radius["5xs"]};

    ${i?`
        background-color: ${y(n)[p.Grey]}
      `:`
        &:hover {
          background-color: ${f(n)[t]};
        }
      `}
  `}
`,m=e.div`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  opacity: 0.5;
  pointer-events: none;
  cursor: not-allowed;

  ${({theme:n})=>`
    background-color: ${n.palette.secondary.medium}
  `}
`,b=e.header`
  ${({theme:n,isDisabled:t})=>`
    padding: ${n.spacing["2xs"]};
    padding-bottom: ${n.spacing.none};
    cursor: ${t?"not-allowed":"pointer"};

    @media only screen and (min-width: ${n.breakpoints.s}) {
      padding: ${n.spacing.xs};
      padding-bottom: ${n.spacing.none};
    }
  `}
`,k=e.div`
  display: flex;
  align-items: center;
  justify-content: center;

  ${({theme:n})=>`
    padding-bottom: ${n.spacing["2xs"]};

    @media only screen and (min-width: ${n.breakpoints.s}) {
      padding-bottom: ${n.spacing.xs};
    }
  `}
`,S=e.div`
  width: 100%;
`,C=e.div`
  width: 24px;
  height: 24px;

  ${({theme:n})=>`
    margin-left: ${n.spacing["3xs"]};
    color: ${n.palette.content.secondary}
  `}
`,A=({handleHeaderClick:n,handleHeaderKeyPress:t,isOpenState:i,backgroundColor:r,isDisabled:s,children:c,dataTestId:a,style:d})=>o.jsxs(b,{"aria-disabled":s,"data-testid":a??"accordion-header",isDisabled:s,onClick:n,onKeyDown:t,role:"button",style:d,tabIndex:s?-1:0,children:[o.jsxs(k,{children:[o.jsx(S,{children:c}),o.jsx(C,{children:i?o.jsx(L,{}):o.jsx(j,{})})]}),r===p.White?o.jsx(u,{style:{margin:0,marginTop:-1}}):null]}),B=e.div`
  ${({theme:n,isOpenState:t})=>`
    padding: calc(${n.spacing["2xs"]} + ${n.spacing["2xs"]});
    padding-top: calc(${n.spacing.none} + ${n.spacing["2xs"]});
    display: ${t?"block":"none"};

    @media only screen and (min-width: ${n.breakpoints.s}) {
      padding:calc(${n.spacing.xs} + ${n.spacing["2xs"]});
    }
  `}
`,M=({isOpenState:n,children:t,dataTestId:i,style:r})=>o.jsx(B,{"data-testid":i??"accordion-body",isOpenState:n,style:r,children:t}),H=({isOpen:n,headerContent:t,backgroundColor:i=p.White,isDisabled:r=!1,children:s,dataTestId:c,style:a})=>{const[d,h]=$.useState(n),g=l=>h(l);$.useEffect(()=>{g(n)},[n]);const x=()=>{r||g(!d)},w=l=>{l.key==="Enter"&&x()};return o.jsxs(v,{backgroundColor:i,"data-testid":c??"accordion-container",isDisabled:r,style:a,children:[r?o.jsx(m,{}):null,o.jsx(A,{backgroundColor:i,handleHeaderClick:x,handleHeaderKeyPress:w,isDisabled:r,isOpenState:d,children:t}),o.jsx(M,{isOpenState:d,children:s})]})},G=H;export{G as A,p as a};

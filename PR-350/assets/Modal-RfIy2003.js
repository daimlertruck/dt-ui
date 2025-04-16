import{j as a}from"./jsx-runtime-DMAvRu52.js";import{h as x,a as f}from"./Backdrop-CvML7MJW.js";import"./index-DeHwOOJ2.js";import{P as u}from"./Portal-DcNaNmD6.js";import{r as p}from"./index-Dl6G-zuu.js";import{u as m}from"./useClickOutside-CBJSS0tk.js";import{n as s}from"./emotion-styled.browser.esm-DpDeK1WQ.js";import{B as y}from"./index-DECWwmT6.js";import{I as $}from"./Icon-B8gBCtaI.js";import{T as c}from"./Typography-B0UZ90zJ.js";import{S as g}from"./Spinner-BWT4rcWl.js";import"./index-DCrStp1_.js";import{M as b}from"./z-index-Ds5QkyqS.js";const h=s.div`
  ${({theme:t})=>`
    padding: ${t.spacing.xs};
    overflow-y: auto;

    @media only screen and (max-width: ${t.breakpoints.s}px) {
      flex: 1;
      }
    `}
`,w=({children:t,style:e,dataTestId:o})=>a.jsx(h,{"data-testid":o,style:e,children:t}),j=s.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: inherit;

  ${({theme:t,hasBackgroundColor:e,hasBorder:o})=>`
      background-color: ${e?t.palette.surface.light:"transparent"};
      border-top: ${o?`1px solid ${t.palette.border.default}`:"none"};
      gap: ${t.spacing["3xs"]};
      padding: ${t.spacing.xs};
      @media only screen and (max-width: ${t.breakpoints.s}px) {
        flex-direction: column-reverse;
      }
  `}
`,k=({children:t,style:e,hasBackgroundColor:o=!1,hasBorder:n=!1,dataTestId:r})=>a.jsx(j,{"data-testid":r,hasBackgroundColor:o,hasBorder:n,style:e,children:t}),v=s.div`
  display: flex;
  flex-direction: column;
  border-radius: inherit;

  ${({theme:t,hasBackgroundColor:e,hasBorder:o})=>`
    padding: ${t.spacing.xs};
    background-color: ${e?t.palette.surface.light:"transparent"};
    border-bottom: ${o?`1px solid ${t.palette.border.default}`:"none"};
    gap: ${t.spacing["4xs"]};

    @media only screen and (min-width: ${t.breakpoints.s}px) {
      padding-top: ${t.spacing.s};
    }

    button {
      color: ${t.palette.content.default};
    }

    svg {
      cursor: pointer;
    }
  `}
`,M=({dataTestId:t,handleClose:e,hasBackgroundColor:o=!1,hasBorder:n=!1,title:r,subTitle:i,style:d})=>a.jsxs(v,{"data-testid":t??"modal-header",hasBackgroundColor:o,hasBorder:n,style:d,children:[a.jsxs(y,{style:{justifyContent:"space-between",flexDirection:"row"},children:[a.jsx(c,{color:"content.dark",element:"h4",fontStyles:"h4",children:r}),a.jsx($,{code:"close",dataTestId:"close-icon",onClick:e,size:"large"})]}),i?a.jsx(c,{color:"content.default",element:"h5",fontStyles:"body1",children:i}):null]}),S=s.div`
  ${({theme:t})=>`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${x(t.palette.surface.light,.8)};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`,C=()=>a.jsx(S,{children:a.jsx(g,{size:"extra-large"})}),O=s.div`
  position: fixed;
  z-index: ${b};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  ${({theme:t})=>`
      background-color: ${t.palette.surface.contrast};
      border-radius: ${t.shape.modal};
      box-shadow: ${t.shadows.s};

      @media only screen and (min-width: ${t.breakpoints.s}px)  {
        min-width: 30%;
        height: auto;
        width: auto;
        justify-content: normal;
      }

      @media only screen and (min-width: ${t.breakpoints.s}px) and (max-width: ${t.breakpoints.m}px) {
        max-width: 80%;
      }

      @media only screen and (min-width: ${t.breakpoints.m}px) and (max-width: ${t.breakpoints.xl}px) {
        max-width: 60%;
      }

      @media only screen and (min-width: ${t.breakpoints.xl}px) {
        max-width: 50%;
      }
  `}
`,N=p.forwardRef(({children:t,dataTestId:e,isOpen:o,type:n},r)=>a.jsx(u,{isOpen:o,children:a.jsx(f,{dataTestId:e,isOpen:o,ref:r,type:n,children:t})})),l=({children:t,handleClose:e,hasClickOutside:o=!1,isLoading:n=!1,style:r,dataTestId:i})=>{const d=p.useRef(null);return m({ref:o&&!n?d:{},handler:e}),a.jsxs(O,{"data-testid":i,ref:d,style:r,children:[n?a.jsx(C,{}):null,t]})};l.Header=M;l.Content=w;l.Footer=k;export{l as M,N as O};

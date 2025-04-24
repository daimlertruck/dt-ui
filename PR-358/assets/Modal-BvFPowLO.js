import{j as e}from"./jsx-runtime-DMAvRu52.js";import{h as x,a as f}from"./Backdrop-C2uoMr3t.js";import"./index-XSWqEKQT.js";import{P as u}from"./Portal-DcNaNmD6.js";import{r as p}from"./index-Dl6G-zuu.js";import{u as m}from"./useClickOutside-CBJSS0tk.js";import{n as s}from"./emotion-styled.browser.esm-DpDeK1WQ.js";import{B as y}from"./index-DECWwmT6.js";import{I as $}from"./Icon-B8gBCtaI.js";import{I as g}from"./IconButton-9qzMwZsu.js";import{T as c}from"./Typography-C3O3nNhN.js";import{S as b}from"./Spinner-B0ydGOkU.js";import"./index-DCrStp1_.js";import{M as h}from"./z-index-Ds5QkyqS.js";const w=s.div`
  ${({theme:t})=>`
    padding: ${t.spacing.xs};
    overflow-y: auto;

    @media only screen and (max-width: ${t.breakpoints.s}px) {
      flex: 1;
      }
    `}
`,j=({children:t,style:n,dataTestId:o})=>e.jsx(w,{"data-testid":o,style:n,children:t}),k=s.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: inherit;

  ${({theme:t,hasBackgroundColor:n,hasBorder:o})=>`
      background-color: ${n?t.palette.surface.light:"transparent"};
      border-top: ${o?`1px solid ${t.palette.border.default}`:"none"};
      gap: ${t.spacing["3xs"]};
      padding: ${t.spacing.xs};
      @media only screen and (max-width: ${t.breakpoints.s}px) {
        flex-direction: column-reverse;
      }
  `}
`,v=({children:t,style:n,hasBackgroundColor:o=!1,hasBorder:a=!1,dataTestId:r})=>e.jsx(k,{"data-testid":r,hasBackgroundColor:o,hasBorder:a,style:n,children:t}),M=s.div`
  display: flex;
  flex-direction: column;
  border-radius: inherit;

  ${({theme:t,hasBackgroundColor:n,hasBorder:o})=>`
    padding: ${t.spacing.xs};
    background-color: ${n?t.palette.surface.light:"transparent"};
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
`,S=({dataTestId:t,handleClose:n,hasBackgroundColor:o=!1,hasBorder:a=!1,title:r,subTitle:i,style:d})=>e.jsxs(M,{"data-testid":t??"modal-header",hasBackgroundColor:o,hasBorder:a,style:d,children:[e.jsxs(y,{style:{justifyContent:"space-between",flexDirection:"row"},children:[e.jsx(c,{color:"content.dark",element:"h4",fontStyles:"h4",children:r}),e.jsx(g,{color:"accent",dataTestId:"close-button",onClick:n,children:e.jsx($,{code:"close",size:"large"})})]}),i?e.jsx(c,{color:"content.default",element:"h5",fontStyles:"body1",children:i}):null]}),C=s.div`
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
`,I=()=>e.jsx(C,{children:e.jsx(b,{size:"extra-large"})}),O=s.div`
  position: fixed;
  z-index: ${h};
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
`,Z=p.forwardRef(({children:t,dataTestId:n,isOpen:o,type:a},r)=>e.jsx(u,{isOpen:o,children:e.jsx(f,{dataTestId:n,isOpen:o,ref:r,type:a,children:t})})),l=({children:t,handleClose:n,hasClickOutside:o=!1,isLoading:a=!1,style:r,dataTestId:i})=>{const d=p.useRef(null);return m({ref:o&&!a?d:{},handler:n}),e.jsxs(O,{"data-testid":i,ref:d,style:r,children:[a?e.jsx(I,{}):null,t]})};l.Header=S;l.Content=j;l.Footer=v;export{l as M,Z as O};

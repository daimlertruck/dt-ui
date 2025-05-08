import{j as e}from"./jsx-runtime-DMAvRu52.js";import{h as x,a as f}from"./Backdrop-CWQuCFCb.js";import"./index-B0QtY69y.js";import{P as m}from"./Portal-DcNaNmD6.js";import{r as c}from"./index-Dl6G-zuu.js";import{u}from"./useClickOutside-CBJSS0tk.js";import{S as y}from"./Spinner-BpI8Ruk2.js";import"./index-DCrStp1_.js";import{n as i}from"./emotion-styled.browser.esm-DpDeK1WQ.js";import{B as $}from"./index-DECWwmT6.js";import{I as g}from"./Icon-B8gBCtaI.js";import{I as b}from"./IconButton-9qzMwZsu.js";import{T as l}from"./Typography-JasfMg-a.js";import"./Box.styled-Bx5NRrR7.js";import"./Spinner.styled-Bux1Lr1z.js";import{M as h}from"./z-index-Ds5QkyqS.js";const w=i.div`
  ${({theme:t})=>`
      position: absolute;
      inset: 0;
      background-color: ${x(t.palette.surface.light,.8)};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`,j=()=>e.jsx(w,{children:e.jsx(y,{size:"extra-large"})}),k=i.div`
  ${({theme:t})=>`
    padding: ${t.spacing.s};
    overflow-y: auto;
    position: relative;

    @media only screen and (max-width: ${t.breakpoints.s}px) {
      flex: 1;
      }
    `}
`,v=({children:t,style:n,dataTestId:o,isLoading:a=!1})=>e.jsxs(k,{"data-testid":o,style:n,children:[a?e.jsx(j,{}):null,t]}),M=i.div`
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
`,S=({children:t,style:n,hasBackgroundColor:o=!1,hasBorder:a=!1,dataTestId:r})=>e.jsx(M,{"data-testid":r,hasBackgroundColor:o,hasBorder:a,style:n,children:t}),C=i.div`
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
`,I=({dataTestId:t,onClose:n,hasBackgroundColor:o=!1,hasBorder:a=!1,title:r,subTitle:s,style:p})=>e.jsxs(C,{"data-testid":t??"modal-header",hasBackgroundColor:o,hasBorder:a,style:p,children:[e.jsxs($,{style:{justifyContent:"space-between",flexDirection:"row"},children:[e.jsx(l,{color:"content.dark",element:"h4",fontStyles:"h4",children:r}),e.jsx(b,{color:"accent",dataTestId:"close-button",onClick:n,children:e.jsx(g,{code:"close",size:"large"})})]}),s?e.jsx(l,{color:"content.default",element:"h5",fontStyles:"body1",children:s}):null]}),O=i.div`
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
`,G=c.forwardRef(({children:t,dataTestId:n,isOpen:o,type:a},r)=>e.jsx(m,{isOpen:o,children:e.jsx(f,{dataTestId:n,isOpen:o,ref:r,type:a,children:t})})),d=({children:t,onClose:n,hasClickOutside:o=!1,style:a,dataTestId:r})=>{const s=c.useRef(null);return u({ref:o?s:{},handler:n||(()=>{})}),e.jsx(O,{"data-testid":r,ref:s,style:a,children:t})};d.Header=I;d.Content=v;d.Footer=S;export{d as M,G as O};

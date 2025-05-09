import{j as e}from"./jsx-runtime-DMAvRu52.js";import{h as p,a as x}from"./Backdrop-CFkcc-oV.js";import"./index-D-bkGsN8.js";import{P as f}from"./Portal-DcNaNmD6.js";import{r as l}from"./index-Dl6G-zuu.js";import{u as m}from"./useClickOutside-CBJSS0tk.js";import{S as u}from"./Spinner-DalCpdTp.js";import"./index-DCrStp1_.js";import{n as s}from"./emotion-styled.browser.esm-DpDeK1WQ.js";import{B as y}from"./index-DECWwmT6.js";import{I as $}from"./Icon-B8gBCtaI.js";import{I as b}from"./IconButton-9qzMwZsu.js";import{T as d}from"./Typography-BfOL4XXq.js";import"./Box.styled-Bx5NRrR7.js";import"./Spinner.styled-DlwfXPaH.js";import{M as g}from"./z-index-Ds5QkyqS.js";const h=s.div`
  ${({theme:t})=>`
      position: absolute;
      inset: 0;
      background-color: ${p(t.palette.surface.light,.8)};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`,w=()=>e.jsx(h,{children:e.jsx(u,{size:"extra-large"})}),j=s.div`
  ${({theme:t})=>`
    padding: ${t.spacing.s};
    overflow-y: auto;
    position: relative;

    @media only screen and (max-width: ${t.breakpoints.s}px) {
      flex: 1;
      }
    `}
`,k=({children:t,style:o,dataTestId:n,isLoading:a=!1})=>e.jsxs(j,{"data-testid":n,style:o,children:[a?e.jsx(w,{}):null,t]}),v=s.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: inherit;

  ${({theme:t,hasBackgroundColor:o,hasBorder:n})=>`
      background-color: ${o?t.palette.surface.default:"transparent"};
      border-top: ${n?`1px solid ${t.palette.border.default}`:"none"};
      gap: ${t.spacing["3xs"]};
      padding: ${t.spacing.xs};
      @media only screen and (max-width: ${t.breakpoints.s}px) {
        flex-direction: column-reverse;
      }
  `}
`,M=({children:t,style:o,hasBackgroundColor:n=!1,hasBorder:a=!1,dataTestId:r})=>e.jsx(v,{"data-testid":r,hasBackgroundColor:n,hasBorder:a,style:o,children:t}),S=s.div`
  display: flex;
  flex-direction: column;
  border-radius: inherit;

  ${({theme:t,hasBorder:o})=>`
    padding: ${t.spacing.xs};

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
`,I=({dataTestId:t,onClose:o,hasBorder:n=!1,title:a,subTitle:r,style:c})=>e.jsxs(S,{"data-testid":t??"modal-header",hasBorder:n,style:c,children:[e.jsxs(y,{style:{justifyContent:"space-between",flexDirection:"row"},children:[e.jsx(d,{color:"content.dark",element:"h4",fontStyles:"h4",children:a}),e.jsx(b,{color:"accent",dataTestId:"close-button",onClick:o,children:e.jsx($,{code:"close",size:"large"})})]}),r?e.jsx(d,{color:"content.default",element:"h5",fontStyles:"body1",children:r}):null]}),C=s.div`
  position: fixed;
  z-index: ${g};
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
`,q=l.forwardRef(({children:t,dataTestId:o,isOpen:n,type:a},r)=>e.jsx(f,{isOpen:n,children:e.jsx(x,{dataTestId:o,isOpen:n,ref:r,type:a,children:t})})),i=({children:t,onClickOutside:o,style:n,dataTestId:a})=>{const r=l.useRef(null);return m({ref:o?r:{},handler:o||(()=>{})}),e.jsx(C,{"data-testid":a,ref:r,style:n,children:t})};i.Header=I;i.Content=k;i.Footer=M;export{i as M,q as O};

import{j as n}from"./jsx-runtime-DMAvRu52.js";import{h as x,a as f}from"./Backdrop-C67-7swO.js";import"./index-CXEPXGPE.js";import{P as m}from"./Portal-DcNaNmD6.js";import{r as c}from"./index-Dl6G-zuu.js";import{u}from"./useClickOutside-CBJSS0tk.js";import{S as y}from"./Spinner-BEmgZnEt.js";import"./index-DCrStp1_.js";import{n as s}from"./emotion-styled.browser.esm-DpDeK1WQ.js";import{B as $}from"./index-DECWwmT6.js";import{I as g}from"./Icon-B8gBCtaI.js";import{I as b}from"./IconButton-9qzMwZsu.js";import{T as l}from"./Typography-ToGiZJP8.js";import"./Box.styled-Bx5NRrR7.js";import"./Spinner.styled-BfOkghcS.js";import{M as h}from"./z-index-Ds5QkyqS.js";const w=s.div`
  ${({theme:t})=>`
      position: absolute;
      inset: 0;
      background-color: ${x(t.palette.surface.light,.8)};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`,j=()=>n.jsx(w,{children:n.jsx(y,{size:"extra-large"})}),k=s.div`
  ${({theme:t})=>`
    padding: ${t.spacing.s};
    overflow-y: auto;
    position: relative;

    @media only screen and (max-width: ${t.breakpoints.s}px) {
      flex: 1;
      }
    `}
`,v=({children:t,style:o,dataTestId:e,isLoading:a=!1})=>n.jsxs(k,{"data-testid":e,style:o,children:[a?n.jsx(j,{}):null,t]}),M=s.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: inherit;

  ${({theme:t,hasBackgroundColor:o,hasBorder:e})=>`
      background-color: ${o?t.palette.surface.light:"transparent"};
      border-top: ${e?`1px solid ${t.palette.border.default}`:"none"};
      gap: ${t.spacing["3xs"]};
      padding: ${t.spacing.xs};
      @media only screen and (max-width: ${t.breakpoints.s}px) {
        flex-direction: column-reverse;
      }
  `}
`,S=({children:t,style:o,hasBackgroundColor:e=!1,hasBorder:a=!1,dataTestId:r})=>n.jsx(M,{"data-testid":r,hasBackgroundColor:e,hasBorder:a,style:o,children:t}),I=s.div`
  display: flex;
  flex-direction: column;
  border-radius: inherit;

  ${({theme:t,hasBackgroundColor:o,hasBorder:e})=>`
    padding: ${t.spacing.xs};
    background-color: ${o?t.palette.surface.light:"transparent"};
    border-bottom: ${e?`1px solid ${t.palette.border.default}`:"none"};
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
`,C=({dataTestId:t,onClose:o,hasBackgroundColor:e=!1,hasBorder:a=!1,title:r,subTitle:d,style:p})=>n.jsxs(I,{"data-testid":t??"modal-header",hasBackgroundColor:e,hasBorder:a,style:p,children:[n.jsxs($,{style:{justifyContent:"space-between",flexDirection:"row"},children:[n.jsx(l,{color:"content.dark",element:"h4",fontStyles:"h4",children:r}),n.jsx(b,{color:"accent",dataTestId:"close-button",onClick:o,children:n.jsx(g,{code:"close",size:"large"})})]}),d?n.jsx(l,{color:"content.default",element:"h5",fontStyles:"body1",children:d}):null]}),B=s.div`
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
`,G=c.forwardRef(({children:t,dataTestId:o,isOpen:e,type:a},r)=>n.jsx(m,{isOpen:e,children:n.jsx(f,{dataTestId:o,isOpen:e,ref:r,type:a,children:t})})),i=({children:t,onClickOutside:o,style:e,dataTestId:a})=>{const r=c.useRef(null);return u({ref:o?r:{},handler:o||(()=>{})}),n.jsx(B,{"data-testid":a,ref:r,style:e,children:t})};i.Header=C;i.Content=v;i.Footer=S;export{i as M,G as O};

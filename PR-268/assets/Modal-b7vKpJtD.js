import{j as t}from"./jsx-runtime-CKrituN3.js";import{h as p,a as f}from"./Backdrop-BOVSC-Qe.js";import"./index-CJ73Y9Wi.js";import{P as x}from"./Portal-U_0UEmB3.js";import{r as c}from"./index-CBqU2yxZ.js";import{u}from"./useClickOutside-D7JrBqcS.js";import{n as s}from"./emotion-styled.browser.esm-B1le5_Hy.js";import{B as m}from"./index-DMRWov4L.js";import{I as y}from"./Icon-DOElHRRq.js";import{T as l}from"./Typography-DvHa2txy.js";import{S as $}from"./Spinner-CbnPEEx9.js";import"./index-BtM5VmRH.js";import{M as g}from"./z-index-Ds5QkyqS.js";const b=s.div`
  ${({theme:o})=>`
    padding: ${o.spacing.xs};
    overflow-y: auto;

    @media only screen and (max-width: ${o.breakpoints.s}) {
      flex: 1;
      }
    `}
`,h=({children:o})=>t.jsx(b,{children:o}),w=s.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: inherit;

  ${({theme:o,hasBackgroundColor:n,hasBorder:e})=>`
      background-color: ${n?o.palette.surface.light:"transparent"};
      border-top: ${e?`1px solid ${o.palette.border.default}`:"none"};
      gap: ${o.spacing["3xs"]};
      padding: ${o.spacing.xs};
      @media only screen and (max-width: ${o.breakpoints.s}) {
        flex-direction: column-reverse;
      }
  `}
`,j=({children:o,style:n,hasBackgroundColor:e=!1,hasBorder:r=!1})=>t.jsx(w,{hasBackgroundColor:e,hasBorder:r,style:n,children:o}),k=s.div`
  display: flex;
  flex-direction: column;
  border-radius: inherit;

  ${({theme:o,hasBackgroundColor:n,hasBorder:e})=>`
    padding: ${o.spacing.xs};
    background-color: ${n?o.palette.surface.light:"transparent"};
    border-bottom: ${e?`1px solid ${o.palette.border.default}`:"none"};
    gap: ${o.spacing["4xs"]};

    @media only screen and (min-width: ${o.breakpoints.s}) {
      padding-top: ${o.spacing.s};
    }

    button {
      color: ${o.palette.content.default};
    }

    svg {
      cursor: pointer;
    }
  `}
`,v=({dataTestId:o,handleClose:n,hasBackgroundColor:e=!1,hasBorder:r=!1,title:a,subTitle:d})=>t.jsxs(k,{"data-testid":o??"modal-header",hasBackgroundColor:e,hasBorder:r,children:[t.jsxs(m,{style:{justifyContent:"space-between",flexDirection:"row"},children:[t.jsx(l,{color:"content.dark",element:"h4",fontStyles:"h4",children:a}),t.jsx(y,{code:"close",dataTestId:"close-icon",onClick:n,size:"large"})]}),d?t.jsx(l,{color:"content.default",element:"h5",fontStyles:"body1",children:d}):null]}),M=s.div`
  ${({theme:o})=>`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${p(o.palette.surface.light,.8)};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`,S=()=>t.jsx(M,{children:t.jsx($,{size:"extra-large"})}),C=s.div`
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
  ${({theme:o})=>`
      background-color: ${o.palette.surface.contrast};
      border-radius: ${o.shape.modal};
      box-shadow: ${o.shadows.s};

      @media only screen and (min-width: ${o.breakpoints.s})  {
        min-width: 30%;
        height: auto;
        width: auto;
        justify-content: normal;
      }

      @media only screen and (min-width: ${o.breakpoints.s}) and (max-width: ${o.breakpoints.m}) {
        max-width: 80%;
      }

      @media only screen and (min-width: ${o.breakpoints.m}) and (max-width: ${o.breakpoints.xl}) {
        max-width: 60%;
      }

      @media only screen and (min-width: ${o.breakpoints.xl}) {
        max-width: 50%;
      }
  `}
`,A=c.forwardRef(({children:o,dataTestId:n,isOpen:e,type:r},a)=>t.jsx(x,{isOpen:e,children:t.jsx(f,{dataTestId:n,isOpen:e,ref:a,type:r,children:o})})),i=({children:o,handleClose:n,hasClickOutside:e=!1,isLoading:r=!1})=>{const a=c.useRef(null);return u({ref:e&&!r?a:{},handler:n}),t.jsxs(C,{ref:a,children:[r?t.jsx(S,{}):null,o]})};i.Header=v;i.Content=h;i.Footer=j;export{i as M,A as O};

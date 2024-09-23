import{j as t}from"./jsx-runtime-CKrituN3.js";import{h as f,a as x}from"./Backdrop-DM0ZJj2z.js";import"./index-BYYJHUbT.js";import{P as u}from"./Portal-U_0UEmB3.js";import{r as p}from"./index-CBqU2yxZ.js";import{u as m}from"./useClickOutside-D7JrBqcS.js";import{n as s}from"./emotion-styled.browser.esm-B1le5_Hy.js";import{B as y}from"./index-DMRWov4L.js";import{I as $}from"./Icon-DOElHRRq.js";import{T as c}from"./Typography-DDs1RNAw.js";import{S as g}from"./Spinner-Bhrm1IeL.js";import"./index-BtM5VmRH.js";import{M as b}from"./z-index-Ds5QkyqS.js";const h=s.div`
  ${({theme:o})=>`
    padding: ${o.spacing.xs};
    overflow-y: auto;

    @media only screen and (max-width: ${o.breakpoints.s}) {
      flex: 1;
      }
    `}
`,w=({children:o})=>t.jsx(h,{children:o}),j=s.div`
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
`,k=({children:o,style:n,hasBackgroundColor:e=!1,hasBorder:a=!1})=>t.jsx(j,{hasBackgroundColor:e,hasBorder:a,style:n,children:o}),v=s.div`
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
`,M=({dataTestId:o,handleClose:n,hasBackgroundColor:e=!1,hasBorder:a=!1,title:r,subTitle:i})=>t.jsxs(v,{"data-testid":o??"modal-header",hasBackgroundColor:e,hasBorder:a,children:[t.jsxs(y,{style:{justifyContent:"space-between",flexDirection:"row"},children:[t.jsx(c,{color:"content.dark",element:"h4",fontStyles:"h4",children:r}),t.jsx($,{code:"close",dataTestId:"close-icon",onClick:n,size:"large"})]}),i?t.jsx(c,{color:"content.default",element:"h5",fontStyles:"body1",children:i}):null]}),S=s.div`
  ${({theme:o})=>`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${f(o.palette.surface.light,.8)};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`,C=()=>t.jsx(S,{children:t.jsx(g,{size:"extra-large"})}),O=s.div`
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
`,N=p.forwardRef(({children:o,dataTestId:n,isOpen:e,type:a},r)=>t.jsx(u,{isOpen:e,children:t.jsx(x,{dataTestId:n,isOpen:e,ref:r,type:a,children:o})})),d=({children:o,handleClose:n,hasClickOutside:e=!1,isLoading:a=!1,style:r,dataTestId:i})=>{const l=p.useRef(null);return m({ref:e&&!a?l:{},handler:n}),t.jsxs(O,{"data-testid":i,ref:l,style:r,children:[a?t.jsx(C,{}):null,o]})};d.Header=M;d.Content=w;d.Footer=k;export{d as M,N as O};

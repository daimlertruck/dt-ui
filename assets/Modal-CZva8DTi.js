import{j as t}from"./jsx-runtime-CKrituN3.js";import{h as p,a as x}from"./Backdrop-CylKFbv7.js";import"./index-DWb54gmw.js";import{P as f}from"./Portal-U_0UEmB3.js";import{r as c}from"./index-CBqU2yxZ.js";import{u as m}from"./useClickOutside-D7JrBqcS.js";import{n as s}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{B as u}from"./index-gq_RjDZX.js";import{I as b}from"./Icon-CHFlL13I.js";import{T as l}from"./Typography-AgncjmvB.js";import{S as y}from"./Spinner-BozOXSvy.js";import"./index-BtM5VmRH.js";import{M as $}from"./z-index-Ds5QkyqS.js";const g=s.div`
  ${({theme:o})=>`
    padding: ${o.spacing.xs};
    overflow-y: auto;

    @media only screen and (max-width: ${o.breakpoints.s}) {
      flex: 1;
      }
    `}
`,h=({children:o})=>t.jsx(g,{children:o}),w=s.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: inherit;

  ${({theme:o,hasBackgroundColor:n,hasBorder:e})=>`
      background-color: ${n?o.palette.base.light:"transparent"};
      border-top: ${e?`1px solid ${o.palette.border.default}`:"none"};
      gap: ${o.spacing["3xs"]};
      padding: ${o.spacing.xs};
      @media only screen and (max-width: ${o.breakpoints.s}) {
        flex-direction: column-reverse;
      }
  `}
`,j=({children:o,style:n,hasBackgroundColor:e=!1,hasBorder:a=!1})=>t.jsx(w,{hasBackgroundColor:e,hasBorder:a,style:n,children:o}),k=s.div`
  display: flex;
  flex-direction: column;
  border-radius: inherit;

  ${({theme:o,hasBackgroundColor:n,hasBorder:e})=>`
    padding: ${o.spacing.xs};
    background-color: ${n?o.palette.base.light:"transparent"};
    border-bottom: ${e?`1px solid ${o.palette.border.default}`:"none"};
    gap: ${o.spacing["4xs"]};

    @media only screen and (min-width: ${o.breakpoints.s}) {
      padding-top: ${o.spacing.s};
    }

    button {
      color: ${o.palette.content.body};
    }

    svg {
      cursor: pointer;
    }
  `}
`,v=({dataTestId:o,handleClose:n,hasBackgroundColor:e=!1,hasBorder:a=!1,title:r,subTitle:d})=>t.jsxs(k,{"data-testid":o??"modal-header",hasBackgroundColor:e,hasBorder:a,children:[t.jsxs(u,{style:{justifyContent:"space-between",flexDirection:"row"},children:[t.jsx(l,{color:"content.heading",element:"h4",fontStyles:"h4",children:r}),t.jsx(b,{code:"close",dataTestId:"close-icon",onClick:n,size:"large"})]}),d?t.jsx(l,{color:"content.body",element:"h5",fontStyles:"body1",children:d}):null]}),M=s.div`
  ${({theme:o})=>`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${p(o.palette.base.light,.8)};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`,S=()=>t.jsx(M,{children:t.jsx(y,{size:"extra-large"})}),C=s.div`
  position: fixed;
  z-index: ${$};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  ${({theme:o})=>`
      background-color: ${o.palette.base.default};
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
`,A=c.forwardRef(({children:o,dataTestId:n,isOpen:e,type:a},r)=>t.jsx(f,{isOpen:e,children:t.jsx(x,{dataTestId:n,isOpen:e,ref:r,type:a,children:o})})),i=({children:o,handleClose:n,hasClickOutside:e=!1,isLoading:a=!1})=>{const r=c.useRef(null);return m({ref:e&&!a?r:{},handler:n}),t.jsxs(C,{ref:r,children:[a?t.jsx(S,{}):null,o]})};i.Header=v;i.Content=h;i.Footer=j;export{i as M,A as O};

import{j as e}from"./jsx-runtime-CKrituN3.js";import{h as p,a as f}from"./Backdrop-ByuKJMA6.js";import"./index-8Kg4V25X.js";import{P as x}from"./Portal-U_0UEmB3.js";import{r as c}from"./index-CBqU2yxZ.js";import{u as m}from"./useClickOutside-D7JrBqcS.js";import{S as u}from"./Spinner-CG33EUCP.js";import{T as l}from"./Typography-C0EWJ3ZN.js";import{C as b}from"./Close-CGHfkSk3.js";import{I as y}from"./IconButton-BS2RgPV3.js";import"./index-BtM5VmRH.js";import{M as $}from"./z-index-Bx-k-k_v.js";import{n as s}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const g=s.div`
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
`,h=s.div`
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
`,w=s.div`
  display: flex;
  flex-direction: column;

  ${({theme:o,hasBackgroundColor:n,hasBorder:t})=>`
    padding: ${o.spacing.xs};
    background-color: ${n?o.palette.base.light:"transparent"};
    border-bottom: ${t?`1px solid ${o.palette.border.default}`:"none"};
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
`,j=s.div`
  display: flex;
  justify-content: space-between;
`,k=s.div`
  ${({theme:o})=>`
    padding: ${o.spacing.xs};
    overflow-y: auto;

    @media only screen and (max-width: ${o.breakpoints.s}) {
      flex: 1;
      }
    `}
`,v=s.div`
  display: flex;
  justify-content: end;
  align-items: center;

  ${({theme:o,hasBackgroundColor:n,hasBorder:t})=>`
      background-color: ${n?o.palette.base.light:"transparent"};
      border-top: ${t?`1px solid ${o.palette.border.default}`:"none"};
      gap: ${o.spacing["3xs"]};
      padding: ${o.spacing.xs};
      @media only screen and (max-width: ${o.breakpoints.s}) {
        flex-direction: column-reverse;
      }
  `}
`,P=c.forwardRef(({children:o,dataTestId:n,isOpen:t,type:a},r)=>e.jsx(x,{isOpen:t,children:e.jsx(f,{dataTestId:n,isOpen:t,ref:r,type:a,children:o})})),i=({children:o,handleClose:n,hasClickOutside:t=!1,isLoading:a=!1})=>{const r=c.useRef(null);return m({ref:t&&!a?r:{},handler:n}),e.jsxs(g,{ref:r,children:[a?e.jsx(h,{children:e.jsx(u,{size:"extra-large"})}):null,o]})};i.Header=({dataTestId:o,handleClose:n,hasBackgroundColor:t=!1,hasBorder:a=!1,title:r,subTitle:d})=>e.jsxs(w,{"data-testid":o??"modal-header",hasBackgroundColor:t,hasBorder:a,children:[e.jsxs(j,{children:[e.jsx(l,{color:"content.heading",element:"h4",fontStyles:"h4",children:r}),e.jsx(y,{ariaLabel:"close modal",color:"default",onMouseDown:n,children:e.jsx(b,{})})]}),d?e.jsx(l,{color:"content.body",element:"h5",fontStyles:"body1",children:d}):null]});i.Content=({children:o})=>e.jsx(k,{children:o});i.Footer=({children:o,style:n,hasBackgroundColor:t=!1,hasBorder:a=!1})=>e.jsx(v,{hasBackgroundColor:t,hasBorder:a,style:n,children:o});export{i as M,P as O};

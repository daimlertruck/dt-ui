import{j as r}from"./jsx-runtime-CbCNBOXy.js";import{r as c}from"./index-IybTgENJ.js";import{C as p}from"./Close-ix0QOkL6.js";import{u as x}from"./useClickOutside-031TREIJ.js";import{B as m}from"./Backdrop-9hXWVlqq.js";import{S as f}from"./Spinner-4Zh3-3sj.js";import"./Button.styled-JMA4V0n6.js";import{I as y}from"./IconButton-IYnpnAtS.js";import{P as u}from"./Portal-cbzhSllL.js";import{T as l}from"./Typography-RHlndGo4.js";import{n as s}from"./emotion-styled.browser.esm-yeljtSWm.js";import{M as $}from"./z-index-n4kBdkOc.js";import"./TooltipProvider-eIt6yA1p.js";import"./index-Hhmu2M5c.js";import{h as g}from"./hexToRgba-fpzAFQCT.js";const b=s.div`
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
      background-color: ${o.colors.white};
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
`,w=s.div`
  ${({theme:o})=>`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${g(o.colors.grey_10,.8)};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`,h=s.div`
  display: flex;
  flex-direction: column;

  ${({theme:o,hasBackgroundColor:e,hasBorder:n})=>`
    padding: ${o.spacing.xs};
    background-color: ${e?o.colors.grey_10:"transparent"};
    border-bottom: ${n?`1px solid ${o.colors.grey_30}`:"none"};
    gap: ${o.spacing["4xs"]};

    @media only screen and (min-width: ${o.breakpoints.s}) {
      padding-top: ${o.spacing.s};
    }

    button {
      color: ${o.palette.neutralDark_500};
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

  ${({theme:o,hasBackgroundColor:e,hasBorder:n})=>`
      background-color: ${e?o.colors.grey_10:"transparent"};
      border-top: ${n?`1px solid ${o.colors.grey_30}`:"none"};
      gap: ${o.spacing["3xs"]};
      padding: ${o.spacing.xs};
      @media only screen and (max-width: ${o.breakpoints.s}) {
        flex-direction: column-reverse;
       }
  `}
`,T=c.forwardRef(({children:o,dataTestId:e,isOpen:n,type:a},t)=>r.jsx(u,{isOpen:n,children:r.jsx(m,{dataTestId:e,isOpen:n,ref:t,type:a,children:o})})),i=({children:o,handleClose:e,hasClickOutside:n=!1,isLoading:a=!1})=>{const t=c.useRef(null);return x({ref:n&&!a?t:{},handler:e}),r.jsxs(b,{ref:t,children:[a?r.jsx(w,{children:r.jsx(f,{size:"extra-large"})}):null,o]})};i.Header=({dataTestId:o,handleClose:e,hasBackgroundColor:n=!1,hasBorder:a=!1,title:t,subTitle:d})=>r.jsxs(h,{"data-testid":o??"modal-header",hasBackgroundColor:n,hasBorder:a,children:[r.jsxs(j,{children:[r.jsx(l,{color:"textPrimary",element:"h4",fontStyles:"h4",children:t}),r.jsx(y,{ariaLabel:"close modal",color:"neutralDark_700",onMouseDown:e,children:r.jsx(p,{})})]}),d?r.jsx(l,{color:"textSecondary",element:"h5",fontStyles:"body1",children:d}):null]});i.Content=({children:o})=>r.jsx(k,{children:o});i.Footer=({children:o,style:e,hasBackgroundColor:n=!1,hasBorder:a=!1})=>r.jsx(v,{hasBackgroundColor:n,hasBorder:a,style:e,children:o});export{i as M,T as O};

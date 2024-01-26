import{j as t}from"./jsx-runtime-CbCNBOXy.js";import{r as p}from"./index-IybTgENJ.js";import{C as c}from"./Close-ix0QOkL6.js";import{u as f}from"./useClickOutside-031TREIJ.js";import{B as x}from"./Backdrop-eNr6x6p_.js";import{S as m}from"./Spinner-MMmfZH5v.js";import"./Button.styled-3C_lV10f.js";import{I as u}from"./IconButton-TJE1o41T.js";import{P as b}from"./Portal-cbzhSllL.js";import{T as l}from"./Typography-ZNxoi-hx.js";import{n as s}from"./emotion-styled.browser.esm-MfHNkeEy.js";import{M as y}from"./z-index-n4kBdkOc.js";import"./TooltipProvider--5O1-WdZ.js";import"./index-qqeelA58.js";import{h as $}from"./hexToRgba-fpzAFQCT.js";const g=s.div`
  position: fixed;
  z-index: ${y};
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
      background-color: ${$(o.palette.base.light,.8)};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`,w=s.div`
  display: flex;
  flex-direction: column;

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

  ${({theme:o,hasBackgroundColor:n,hasBorder:e})=>`
      background-color: ${n?o.palette.base.light:"transparent"};
      border-top: ${e?`1px solid ${o.palette.border.default}`:"none"};
      gap: ${o.spacing["3xs"]};
      padding: ${o.spacing.xs};
      @media only screen and (max-width: ${o.breakpoints.s}) {
        flex-direction: column-reverse;
      }
  `}
`,_=p.forwardRef(({children:o,dataTestId:n,isOpen:e,type:a},r)=>t.jsx(b,{isOpen:e,children:t.jsx(x,{dataTestId:n,isOpen:e,ref:r,type:a,children:o})})),i=({children:o,handleClose:n,hasClickOutside:e=!1,isLoading:a=!1})=>{const r=p.useRef(null);return f({ref:e&&!a?r:{},handler:n}),t.jsxs(g,{ref:r,children:[a?t.jsx(h,{children:t.jsx(m,{size:"extra-large"})}):null,o]})};i.Header=({dataTestId:o,handleClose:n,hasBackgroundColor:e=!1,hasBorder:a=!1,title:r,subTitle:d})=>t.jsxs(w,{"data-testid":o??"modal-header",hasBackgroundColor:e,hasBorder:a,children:[t.jsxs(j,{children:[t.jsx(l,{color:"content.heading",element:"h4",fontStyles:"h4",children:r}),t.jsx(u,{ariaLabel:"close modal",onMouseDown:n,children:t.jsx(c,{})})]}),d?t.jsx(l,{color:"content.body",element:"h5",fontStyles:"body1",children:d}):null]});i.Content=({children:o})=>t.jsx(k,{children:o});i.Footer=({children:o,style:n,hasBackgroundColor:e=!1,hasBorder:a=!1})=>t.jsx(v,{hasBackgroundColor:e,hasBorder:a,style:n,children:o});export{i as M,_ as O};

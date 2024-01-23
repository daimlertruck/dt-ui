import{j as l}from"./jsx-runtime-CbCNBOXy.js";import{B as b}from"./index-dL_sMmnb.js";import{C as M}from"./Close-ix0QOkL6.js";import{u as j,A as S,M as O}from"./TooltipProvider-eIt6yA1p.js";import{n as x,u as C}from"./emotion-styled.browser.esm-yeljtSWm.js";import{r as d}from"./index-IybTgENJ.js";import{O as k,a as D,D as R}from"./DropdownMenu-CUedQC0E.js";import{T as E}from"./Tag-qdEcNpvW.js";import{T as w}from"./Typography-Bp0by5Aw.js";import"./index-Hhmu2M5c.js";import{u as _}from"./useClickOutside-031TREIJ.js";const A=x.li`
  ${({theme:e,disabled:t})=>`
    ${e.fontStyles.pXSmall}
    list-style: none;
    padding: ${e.spacing.small} ${e.spacing.xmedium};
    text-overflow: ellipsis;
    overflow-x: hidden;
    display: flex;
    align-items: center;
    justify-content: space-between;
    flex-grow: 60;


    &:hover {
      background: ${e.colors.grey_70};
      cursor: pointer;
    }

    ${t&&`
      opacity: 0.4;
      pointer-events: none;
    `}
  `}
`,I=x.button`
  ${({theme:e})=>`
    border: 0;
    cursor: pointer;
    background: transparent;
    align-self: flex-start;
    padding-right: 12px;
    padding-top: 12px;
    color: ${e.colors.grey_90};
    &:hover {
      color: currentColor;
      cursor: pointer;
    }
  `}
`,T=({dataTestId:e,option:t,children:r,isDisabled:o,onClick:a,onClose:p})=>{const{state:n,dispatch:c,name:f}=j(),u={text:t.text??t.value,value:t.value},g=()=>{a&&a(t==null?void 0:t.value,f),c({type:S.ADD,payload:t})},y=()=>{c({type:S.REMOVE,payload:u}),p&&p(t)},v=!!n.find(s=>s.value===t.value),m=o||v,h=e??`multi-select-option-${t.value}`;return l.jsxs(b,{style:{flexDirection:"row",justifyContent:"space-between"},children:[l.jsx(A,{"data-testid":h,disabled:m,onClick:g,role:"option",children:r},t.value),t.isRemovable&&m?l.jsx(I,{onClick:y,children:l.jsx(M,{height:12,width:12})}):null]})},B=x.div`
  ${({theme:e,hasError:t=!1,isDisabled:r})=>`
    background: ${e.colors.white};
    border: 1px solid ${e.colors.grey_90};
    border-radius: 3px;
    padding: ${e.spacing.xsmall} ${e.spacing.xmedium};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    min-height: 60px;
    cursor: pointer;
    
    ${t&&`border-bottom: 2px solid ${e.palette.error}`};

    ${r&&`
        pointer-events: none;
        background-color: ${e.colors.grey_70};
      `}
  `}
`,X=({children:e,label:t,placeholder:r,dataTestId:o="multi-select-item",isDisabled:a=!1,hasError:p=!1,onClose:n})=>{const{state:c,dispatch:f,isOpen:u,setIsOpen:g}=j(),y=C(),v=s=>{s.preventDefault(),g(i=>!i)},m=(s,i)=>{s.stopPropagation(),f({type:S.REMOVE,payload:i}),n&&n(i)},h=d.useMemo(()=>d.Children.map(e,s=>s&&d.cloneElement(s,{...s.props,onClose:n})),[e,n]);return l.jsxs(l.Fragment,{children:[l.jsxs(B,{"data-testid":o,hasError:p,isDisabled:a,onClick:v,children:[l.jsxs("div",{style:{overflow:"hidden"},children:[l.jsx(w,{color:"grey_100",fontStyles:"pXXSmall",children:t}),c.length?l.jsx(b,{style:{flexDirection:"row",gap:"8px"},children:c.map(s=>d.createElement(E,{dataTestId:"multi-select-tag",...s.isRemovable&&{onClose:i=>m(i,s)},isClickable:s.isRemovable,key:`tag--${s.value}`},s.text))}):l.jsx(w,{color:"grey_200",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:r??"Select an option"})]}),u?l.jsx(D,{}):l.jsx(k,{color:a?y.colors.grey_90:"currentColor"})]}),u?l.jsx(R,{dataTestId:o,children:h}):null]})},P=({children:e})=>{const{setIsOpen:t}=j(),r=d.useRef(null);return _({ref:r,handler:()=>t(!1)}),l.jsx("div",{ref:r,children:e})},V=x.div`
  ${({theme:e})=>`
    margin: ${e.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
  `}
`,$=({children:e,defaultValue:t,name:r,dataTestId:o="multi-select"})=>l.jsx(O,{defaultValue:t,name:r,children:l.jsx(V,{"data-testid":o,role:"menu",children:e})});$.Container=P;$.Select=X;$.Option=T;export{$ as M};

import{j as l}from"./jsx-runtime-CbCNBOXy.js";import{B as w}from"./index-dL_sMmnb.js";import{C as M}from"./Close-ix0QOkL6.js";import{u as S,A as b,M as O}from"./TooltipProvider-Z8-dQ5a2.js";import{n as x,u as C}from"./emotion-styled.browser.esm-yeljtSWm.js";import{r as d}from"./index-IybTgENJ.js";import{O as k,a as D,D as R}from"./DropdownMenu-ISJK5xyu.js";import{T as E}from"./Tag-tT1V3oqe.js";import{T as $}from"./Typography-qT9DMSUX.js";import"./index-Hhmu2M5c.js";import{u as A}from"./useClickOutside-031TREIJ.js";const I=x.li`
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
      background: ${e.palette.primary.light};
      cursor: pointer;
    }

    ${t&&`
      opacity: 0.4;
      pointer-events: none;
    `}
  `}
`,T=x.button`
  ${({theme:e})=>`
    border: 0;
    cursor: pointer;
    background: transparent;
    align-self: flex-start;
    padding-right: 12px;
    padding-top: 12px;
    color: ${e.palette.text.body};
    &:hover {
      color: currentColor;
      cursor: pointer;
    }
  `}
`,B=({dataTestId:e,option:t,children:r,isDisabled:n,onClick:i,onClose:p})=>{const{state:o,dispatch:c,name:f}=S(),u={text:t.text??t.value,value:t.value},g=()=>{i&&i(t==null?void 0:t.value,f),c({type:b.ADD,payload:t})},v=()=>{c({type:b.REMOVE,payload:u}),p&&p(t)},y=!!o.find(s=>s.value===t.value),m=n||y,h=e??`multi-select-option-${t.value}`;return l.jsxs(w,{style:{flexDirection:"row",justifyContent:"space-between"},children:[l.jsx(I,{"data-testid":h,disabled:m,onClick:g,role:"option",children:r},t.value),t.isRemovable&&m?l.jsx(T,{onClick:v,children:l.jsx(M,{height:12,width:12})}):null]})},X=x.div`
  ${({theme:e,hasError:t=!1,isDisabled:r})=>`
    background: ${e.palette.base.default};
    border: 1px solid ${e.palette.border.default};
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
    
    ${t&&`border-bottom: 2px solid ${e.palette.error.default}`};

    ${r&&`
        pointer-events: none;
        background-color: ${e.palette.base.light};
      `}
  `}
`,P=({children:e,label:t,placeholder:r,dataTestId:n="multi-select-item",isDisabled:i=!1,hasError:p=!1,onClose:o})=>{const{state:c,dispatch:f,isOpen:u,setIsOpen:g}=S(),v=C(),y=s=>{s.preventDefault(),g(a=>!a)},m=(s,a)=>{s.stopPropagation(),f({type:b.REMOVE,payload:a}),o&&o(a)},h=d.useMemo(()=>d.Children.map(e,s=>s&&d.cloneElement(s,{...s.props,onClose:o})),[e,o]);return l.jsxs(l.Fragment,{children:[l.jsxs(X,{"data-testid":n,hasError:p,isDisabled:i,onClick:y,children:[l.jsxs("div",{style:{overflow:"hidden"},children:[l.jsx($,{color:"text.body",fontStyles:"pXXSmall",children:t}),c.length?l.jsx(w,{style:{flexDirection:"row",gap:"8px"},children:c.map(s=>d.createElement(E,{dataTestId:"multi-select-tag",...s.isRemovable&&{onClose:a=>m(a,s)},isClickable:s.isRemovable,key:`tag--${s.value}`},s.text))}):l.jsx($,{color:"text.disabled",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:r??"Select an option"})]}),u?l.jsx(D,{}):l.jsx(k,{color:i?v.palette.text.disabled:"currentColor"})]}),u?l.jsx(R,{dataTestId:n,children:h}):null]})},V=({children:e})=>{const{setIsOpen:t}=S(),r=d.useRef(null);return A({ref:r,handler:()=>t(!1)}),l.jsx("div",{ref:r,children:e})},F=x.div`
  ${({theme:e})=>`
    margin: ${e.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
  `}
`,j=({children:e,defaultValue:t,name:r,dataTestId:n="multi-select"})=>l.jsx(O,{defaultValue:t,name:r,children:l.jsx(F,{"data-testid":n,role:"menu",children:e})});j.Container=V;j.Select=P;j.Option=B;export{j as M};

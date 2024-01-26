import{j as l}from"./jsx-runtime-CbCNBOXy.js";import{B as w}from"./index-3YscyN0J.js";import{C as M}from"./Close-ix0QOkL6.js";import{u as S,A as b,M as O}from"./TooltipProvider--5O1-WdZ.js";import{n as x}from"./emotion-styled.browser.esm-MfHNkeEy.js";import{r as d}from"./index-IybTgENJ.js";import{O as C,a as k,D}from"./DropdownMenu-DsrUEvQy.js";import{T as R}from"./Tag-v9QVZJWG.js";import{T as $}from"./Typography-ZNxoi-hx.js";import{u as E}from"./emotion-element-c39617d8.browser.esm-HJoeL-IU.js";import"./index-qqeelA58.js";import{u as A}from"./useClickOutside-031TREIJ.js";const I=x.li`
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
    color: ${e.palette.content.body};
    &:hover {
      color: currentColor;
      cursor: pointer;
    }
  `}
`,B=({dataTestId:e,option:t,children:n,isDisabled:o,onClick:i,onClose:p})=>{const{state:r,dispatch:c,name:f}=S(),u={text:t.text??t.value,value:t.value},g=()=>{i&&i(t==null?void 0:t.value,f),c({type:b.ADD,payload:t})},v=()=>{c({type:b.REMOVE,payload:u}),p&&p(t)},y=!!r.find(s=>s.value===t.value),m=o||y,h=e??`multi-select-option-${t.value}`;return l.jsxs(w,{style:{flexDirection:"row",justifyContent:"space-between"},children:[l.jsx(I,{"data-testid":h,disabled:m,onClick:g,role:"option",children:n},t.value),t.isRemovable&&m?l.jsx(T,{onClick:v,children:l.jsx(M,{height:12,width:12})}):null]})},X=x.div`
  ${({theme:e,hasError:t=!1,isDisabled:n})=>`
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

    ${n&&`
        pointer-events: none;
        background-color: ${e.palette.base.light};
      `}
  `}
`,P=({children:e,label:t,placeholder:n,dataTestId:o="multi-select-item",isDisabled:i=!1,hasError:p=!1,onClose:r})=>{const{state:c,dispatch:f,isOpen:u,setIsOpen:g}=S(),v=E(),y=s=>{s.preventDefault(),g(a=>!a)},m=(s,a)=>{s.stopPropagation(),f({type:b.REMOVE,payload:a}),r&&r(a)},h=d.useMemo(()=>d.Children.map(e,s=>s&&d.cloneElement(s,{...s.props,onClose:r})),[e,r]);return l.jsxs(l.Fragment,{children:[l.jsxs(X,{"data-testid":o,hasError:p,isDisabled:i,onClick:y,children:[l.jsxs("div",{style:{overflow:"hidden"},children:[l.jsx($,{color:"content.body",fontStyles:"pXXSmall",children:t}),c.length?l.jsx(w,{style:{flexDirection:"row",gap:"8px"},children:c.map(s=>d.createElement(R,{dataTestId:"multi-select-tag",...s.isRemovable&&{onClose:a=>m(a,s)},isClickable:s.isRemovable,key:`tag--${s.value}`},s.text))}):l.jsx($,{color:"content.disabled",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:n??"Select an option"})]}),u?l.jsx(k,{}):l.jsx(C,{color:i?v.palette.content.disabled:"currentColor"})]}),u?l.jsx(D,{dataTestId:o,children:h}):null]})},V=({children:e})=>{const{setIsOpen:t}=S(),n=d.useRef(null);return A({ref:n,handler:()=>t(!1)}),l.jsx("div",{ref:n,children:e})},F=x.div`
  ${({theme:e})=>`
    margin: ${e.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
  `}
`,j=({children:e,defaultValue:t,name:n,dataTestId:o="multi-select"})=>l.jsx(O,{defaultValue:t,name:n,children:l.jsx(F,{"data-testid":o,role:"menu",children:e})});j.Container=V;j.Select=P;j.Option=B;export{j as M};

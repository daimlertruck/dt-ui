import{j as l}from"./jsx-runtime-vNq4Oc-g.js";import{B as w}from"./index-lOH_pZ5X.js";import{C as M}from"./Close-fCiS4iy8.js";import{u as $,A as S,M as O}from"./MultiSelectProvider-vrdgqO57.js";import{n as x}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{r as d}from"./index-4g5l5LRQ.js";import{T as C}from"./Tag-t4dOy4wM.js";import{O as k,a as D,D as R}from"./DropdownMenu-j_xckHCs.js";import{T as j}from"./Typography-D6FO4u36.js";import{u as E}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./index-ZSUVOW7k.js";import"./index-jmm5gWkb.js";import{u as A}from"./useClickOutside-5i9YsATO.js";const I=x.li`
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
`,B=({dataTestId:e,option:t,children:n,isDisabled:o,onClick:i,onClose:p})=>{const{state:r,dispatch:c,name:g}=$(),u={text:t.text??t.value,value:t.value},v=()=>{i&&i(t==null?void 0:t.value,g),c({type:S.ADD,payload:t})},y=()=>{c({type:S.REMOVE,payload:u}),p&&p(t)},h=!!r.find(s=>s.value===t.value),m=o||h,b=e??`multi-select-option-${t.value}`;return l.jsxs(w,{style:{flexDirection:"row",justifyContent:"space-between"},children:[l.jsx(I,{"data-testid":b,disabled:m,onClick:v,role:"option",children:n},t.value),t.isRemovable&&m?l.jsx(T,{onClick:y,children:l.jsx(M,{height:12,width:12})}):null]})},X=x.div`
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
`,P=({children:e,label:t,placeholder:n,dataTestId:o="multi-select-item",isDisabled:i=!1,hasError:p=!1,onClose:r})=>{const{state:c,dispatch:g,isOpen:u,setIsOpen:v}=$(),y=E(),h=s=>{s.preventDefault(),v(a=>!a)},m=(s,a)=>{s.stopPropagation(),g({type:S.REMOVE,payload:a}),r&&r(a)},b=d.useMemo(()=>d.Children.map(e,s=>s&&d.cloneElement(s,{...s.props,onClose:r})),[e,r]);return l.jsxs(l.Fragment,{children:[l.jsxs(X,{"data-testid":o,hasError:p,isDisabled:i,onClick:h,children:[l.jsxs("div",{style:{overflow:"hidden"},children:[l.jsx(j,{color:"content.body",fontStyles:"pXXSmall",children:t}),c.length?l.jsx(w,{style:{flexDirection:"row",gap:"8px"},children:c.map(s=>d.createElement(C,{dataTestId:"multi-select-tag",...s.isRemovable&&{onClose:a=>m(a,s)},isClickable:s.isRemovable,key:`tag--${s.value}`},s.text))}):l.jsx(j,{color:"content.disabled",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:n??"Select an option"})]}),u?l.jsx(D,{}):l.jsx(k,{color:i?y.palette.content.disabled:"currentColor"})]}),u?l.jsx(R,{dataTestId:o,children:b}):null]})},V=({children:e})=>{const{setIsOpen:t}=$(),n=d.useRef(null);return A({ref:n,handler:()=>t(!1)}),l.jsx("div",{ref:n,children:e})},F=x.div`
  ${({theme:e})=>`
    margin: ${e.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
  `}
`,f=({children:e,defaultValue:t,name:n,dataTestId:o="multi-select"})=>l.jsx(O,{defaultValue:t,name:n,children:l.jsx(F,{"data-testid":o,role:"menu",children:e})});f.Container=V;f.Select=P;f.Option=B;const _=f;export{_ as M};

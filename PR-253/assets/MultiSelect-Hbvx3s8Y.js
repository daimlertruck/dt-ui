import{j as l}from"./jsx-runtime-CKrituN3.js";import{B as O}from"./index-gq_RjDZX.js";import{C as D}from"./Close-CGHfkSk3.js";import{r as o}from"./index-CBqU2yxZ.js";import{n as f}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{a as E}from"./Dropdown-BNvqEoC8.js";import{T as M}from"./Typography-AgncjmvB.js";import"./Icon-CHFlL13I.js";import"./index-DWb54gmw.js";import"./index-BtM5VmRH.js";import{T as C}from"./Tag-D-KFSfjp.js";import{u as L}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import{u as R}from"./useClickOutside-D7JrBqcS.js";const k=e=>l.jsx("svg",{fill:"none",height:"8",viewBox:"0 0 12 8",width:"12",xmlns:"http://www.w3.org/2000/svg",...e,children:l.jsx("path",{d:"M1.41 0.0898438L6 4.66984L10.59 0.0898438L12 1.49984L6 7.49984L0 1.49984L1.41 0.0898438Z",fill:"currentColor"})}),A=e=>l.jsx("svg",{fill:"none",height:"8",viewBox:"0 0 12 8",width:"12",xmlns:"http://www.w3.org/2000/svg",...e,children:l.jsx("path",{d:"M10.59 7.91016L6 3.33016L1.41 7.91016L1.23266e-07 6.50016L6 0.500156L12 6.50016L10.59 7.91016Z",fill:"currentColor"})});var d=(e=>(e.ADD="ADD",e.REMOVE="REMOVE",e))(d||{});const I=(e,t)=>{const{type:r}=t;switch(r){case d.ADD:return e.find(n=>n.value===t.payload.value)?e.map(n=>n.value===t.payload.value?t.payload:n):[...e,t.payload];case d.REMOVE:return e.filter(n=>n.value!==t.payload.value);default:return e}},b={state:[],isOpen:!1,dispatch:()=>null,setIsOpen:()=>null},$=o.createContext(b),B=({children:e,defaultValue:t,name:r})=>{const[i,n]=o.useReducer(I,b.state),[p,a]=o.useState(b.isOpen);return o.useEffect(()=>t&&t.forEach(c=>n({type:d.ADD,payload:c})),[t]),l.jsx($.Provider,{value:{state:i,dispatch:n,isOpen:p,setIsOpen:a,name:r},children:e})},j=()=>{const e=o.useContext($);if(!e)throw new Error("MultiSelect compound components cannot be rendered outside the MultiSelect component");return e},T=f.li`
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
`,V=f.button`
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
`,P=({dataTestId:e,option:t,children:r,isDisabled:i,onClick:n,onClose:p})=>{const{state:a,dispatch:c,name:h}=j(),x={text:t.text??t.value,value:t.value},g=()=>{n&&n(t==null?void 0:t.value,h),c({type:d.ADD,payload:t})},y=()=>{c({type:d.REMOVE,payload:x}),p&&p(t)},w=!!a.find(s=>s.value===t.value),m=i||w,S=e??`multi-select-option-${t.value}`;return l.jsxs(O,{style:{flexDirection:"row",justifyContent:"space-between"},children:[l.jsx(T,{"data-testid":S,disabled:m,onClick:g,role:"option",children:r},t.value),t.isRemovable&&m?l.jsx(V,{onClick:y,children:l.jsx(D,{height:12,width:12})}):null]})},U=f.div`
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
`,X=({children:e,label:t,placeholder:r,dataTestId:i="multi-select-item",isDisabled:n=!1,hasError:p=!1,onClose:a})=>{const{state:c,dispatch:h,isOpen:x,setIsOpen:g}=j(),y=L(),w=s=>{s.preventDefault(),g(u=>!u)},m=(s,u)=>{s.stopPropagation(),h({type:d.REMOVE,payload:u}),a&&a(u)},S=o.useMemo(()=>o.Children.map(e,s=>s&&o.cloneElement(s,{...s.props,onClose:a})),[e,a]);return l.jsxs(l.Fragment,{children:[l.jsxs(U,{"data-testid":i,hasError:p,isDisabled:n,onClick:w,children:[l.jsxs("div",{style:{overflow:"hidden"},children:[l.jsx(M,{color:"content.body",fontStyles:"pXXSmall",children:t}),c.length?l.jsx(O,{style:{flexDirection:"row",gap:"8px"},children:c.map(s=>o.createElement(C,{dataTestId:"multi-select-tag",...s.isRemovable&&{onClose:u=>m(u,s)},isClickable:s.isRemovable,key:`tag--${s.value}`},s.text))}):l.jsx(M,{color:"content.disabled",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:r??"Select an option"})]}),x?l.jsx(A,{}):l.jsx(k,{color:n?y.palette.content.disabled:"currentColor"})]}),x?l.jsx(E,{dataTestId:i,children:S}):null]})},F=({children:e})=>{const{setIsOpen:t}=j(),r=o.useRef(null);return R({ref:r,handler:()=>t(!1)}),l.jsx("div",{ref:r,children:e})},Z=f.div`
  ${({theme:e})=>`
    margin: ${e.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
  `}
`,v=({children:e,defaultValue:t,name:r,dataTestId:i="multi-select"})=>l.jsx(B,{defaultValue:t,name:r,children:l.jsx(Z,{"data-testid":i,role:"menu",children:e})});v.Container=F;v.Select=X;v.Option=P;const le=v;export{le as M};

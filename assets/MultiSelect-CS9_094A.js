import{j as l}from"./jsx-runtime-CKrituN3.js";import{B as w}from"./index-gq_RjDZX.js";import{C as D}from"./Close-CGHfkSk3.js";import{r as o}from"./index-CBqU2yxZ.js";import{n as f}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{T as E}from"./Tag-D-KFSfjp.js";import{T as j}from"./Typography-Bej0cKKK.js";import{O as C,a as R,D as k}from"./DropdownMenu-BEZbRjMA.js";import{u as A}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./index-BUn_IA5M.js";import"./index-BtM5VmRH.js";import{u as I}from"./useClickOutside-D7JrBqcS.js";var d=(e=>(e.ADD="ADD",e.REMOVE="REMOVE",e))(d||{});const T=(e,t)=>{const{type:r}=t;switch(r){case d.ADD:return e.find(s=>s.value===t.payload.value)?e.map(s=>s.value===t.payload.value?t.payload:s):[...e,t.payload];case d.REMOVE:return e.filter(s=>s.value!==t.payload.value);default:return e}},O={state:[],isOpen:!1,dispatch:()=>null,setIsOpen:()=>null},$=o.createContext(O),B=({children:e,defaultValue:t,name:r})=>{const[a,s]=o.useReducer(T,O.state),[p,i]=o.useState(O.isOpen);return o.useEffect(()=>t&&t.forEach(c=>s({type:d.ADD,payload:c})),[t]),l.jsx($.Provider,{value:{state:a,dispatch:s,isOpen:p,setIsOpen:i,name:r},children:e})},M=()=>{const e=o.useContext($);if(!e)throw new Error("MultiSelect compound components cannot be rendered outside the MultiSelect component");return e},V=f.li`
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
`,P=f.button`
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
`,U=({dataTestId:e,option:t,children:r,isDisabled:a,onClick:s,onClose:p})=>{const{state:i,dispatch:c,name:y}=M(),m={text:t.text??t.value,value:t.value},h=()=>{s&&s(t==null?void 0:t.value,y),c({type:d.ADD,payload:t})},g=()=>{c({type:d.REMOVE,payload:m}),p&&p(t)},S=!!i.find(n=>n.value===t.value),x=a||S,b=e??`multi-select-option-${t.value}`;return l.jsxs(w,{style:{flexDirection:"row",justifyContent:"space-between"},children:[l.jsx(V,{"data-testid":b,disabled:x,onClick:h,role:"option",children:r},t.value),t.isRemovable&&x?l.jsx(P,{onClick:g,children:l.jsx(D,{height:12,width:12})}):null]})},X=f.div`
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
`,F=({children:e,label:t,placeholder:r,dataTestId:a="multi-select-item",isDisabled:s=!1,hasError:p=!1,onClose:i})=>{const{state:c,dispatch:y,isOpen:m,setIsOpen:h}=M(),g=A(),S=n=>{n.preventDefault(),h(u=>!u)},x=(n,u)=>{n.stopPropagation(),y({type:d.REMOVE,payload:u}),i&&i(u)},b=o.useMemo(()=>o.Children.map(e,n=>n&&o.cloneElement(n,{...n.props,onClose:i})),[e,i]);return l.jsxs(l.Fragment,{children:[l.jsxs(X,{"data-testid":a,hasError:p,isDisabled:s,onClick:S,children:[l.jsxs("div",{style:{overflow:"hidden"},children:[l.jsx(j,{color:"content.body",fontStyles:"pXXSmall",children:t}),c.length?l.jsx(w,{style:{flexDirection:"row",gap:"8px"},children:c.map(n=>o.createElement(E,{dataTestId:"multi-select-tag",...n.isRemovable&&{onClose:u=>x(u,n)},isClickable:n.isRemovable,key:`tag--${n.value}`},n.text))}):l.jsx(j,{color:"content.disabled",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:r??"Select an option"})]}),m?l.jsx(R,{}):l.jsx(C,{color:s?g.palette.content.disabled:"currentColor"})]}),m?l.jsx(k,{dataTestId:a,children:b}):null]})},L=({children:e})=>{const{setIsOpen:t}=M(),r=o.useRef(null);return I({ref:r,handler:()=>t(!1)}),l.jsx("div",{ref:r,children:e})},_=f.div`
  ${({theme:e})=>`
    margin: ${e.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
  `}
`,v=({children:e,defaultValue:t,name:r,dataTestId:a="multi-select"})=>l.jsx(B,{defaultValue:t,name:r,children:l.jsx(_,{"data-testid":a,role:"menu",children:e})});v.Container=L;v.Select=F;v.Option=U;const te=v;export{te as M};

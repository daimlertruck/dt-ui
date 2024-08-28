import{j as l}from"./jsx-runtime-CKrituN3.js";import{B as $}from"./index-DMRWov4L.js";import{C as D}from"./Close-CGHfkSk3.js";import{r as o}from"./index-CBqU2yxZ.js";import{n as f,u as E}from"./emotion-styled.browser.esm-B1le5_Hy.js";import{a as C}from"./Dropdown-CN0UBmjb.js";import"./Icon-DOElHRRq.js";import{T as O}from"./Typography-DvHa2txy.js";import"./index-CJ73Y9Wi.js";import"./index-BtM5VmRH.js";import{T as L}from"./Tag-BPLs6AKY.js";import{u as R}from"./useClickOutside-D7JrBqcS.js";const k=e=>l.jsx("svg",{fill:"none",height:"8",viewBox:"0 0 12 8",width:"12",xmlns:"http://www.w3.org/2000/svg",...e,children:l.jsx("path",{d:"M1.41 0.0898438L6 4.66984L10.59 0.0898438L12 1.49984L6 7.49984L0 1.49984L1.41 0.0898438Z",fill:"currentColor"})}),A=e=>l.jsx("svg",{fill:"none",height:"8",viewBox:"0 0 12 8",width:"12",xmlns:"http://www.w3.org/2000/svg",...e,children:l.jsx("path",{d:"M10.59 7.91016L6 3.33016L1.41 7.91016L1.23266e-07 6.50016L6 0.500156L12 6.50016L10.59 7.91016Z",fill:"currentColor"})});var d=(e=>(e.ADD="ADD",e.REMOVE="REMOVE",e))(d||{});const I=(e,t)=>{const{type:r}=t;switch(r){case d.ADD:return e.find(n=>n.value===t.payload.value)?e.map(n=>n.value===t.payload.value?t.payload:n):[...e,t.payload];case d.REMOVE:return e.filter(n=>n.value!==t.payload.value);default:return e}},S={state:[],isOpen:!1,dispatch:()=>null,setIsOpen:()=>null},b=o.createContext(S),B=({children:e,defaultValue:t,name:r})=>{const[a,n]=o.useReducer(I,S.state),[p,i]=o.useState(S.isOpen);return o.useEffect(()=>t&&t.forEach(c=>n({type:d.ADD,payload:c})),[t]),l.jsx(b.Provider,{value:{state:a,dispatch:n,isOpen:p,setIsOpen:i,name:r},children:e})},j=()=>{const e=o.useContext(b);if(!e)throw new Error("MultiSelect compound components cannot be rendered outside the MultiSelect component");return e},T=f.li`
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
    color: ${e.palette.content.default};
    &:hover {
      color: currentColor;
      cursor: pointer;
    }
  `}
`,P=({dataTestId:e,option:t,children:r,isDisabled:a,onClick:n,onClose:p})=>{const{state:i,dispatch:c,name:h}=j(),x={text:t.text??t.value,value:t.value},v=()=>{n&&n(t==null?void 0:t.value,h),c({type:d.ADD,payload:t})},g=()=>{c({type:d.REMOVE,payload:x}),p&&p(t)},y=!!i.find(s=>s.value===t.value),m=a||y,w=e??`multi-select-option-${t.value}`;return l.jsxs($,{style:{flexDirection:"row",justifyContent:"space-between"},children:[l.jsx(T,{"data-testid":w,disabled:m,onClick:v,role:"option",children:r},t.value),t.isRemovable&&m?l.jsx(V,{onClick:g,children:l.jsx(D,{height:12,width:12})}):null]})},U=f.div`
  ${({theme:e,hasError:t=!1,isDisabled:r})=>`
    background: ${e.palette.surface.contrast};
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
        background-color: ${e.palette.surface.light};
      `}
  `}
`,X=({children:e,label:t,placeholder:r,dataTestId:a="multi-select-item",isDisabled:n=!1,hasError:p=!1,onClose:i})=>{const{state:c,dispatch:h,isOpen:x,setIsOpen:v}=j(),g=E(),y=s=>{s.preventDefault(),v(u=>!u)},m=(s,u)=>{s.stopPropagation(),h({type:d.REMOVE,payload:u}),i&&i(u)},w=o.useMemo(()=>o.Children.map(e,s=>s&&o.cloneElement(s,{...s.props,onClose:i})),[e,i]);return l.jsxs(l.Fragment,{children:[l.jsxs(U,{"data-testid":a,hasError:p,isDisabled:n,onClick:y,children:[l.jsxs("div",{style:{overflow:"hidden"},children:[l.jsx(O,{color:"content.default",fontStyles:"pXXSmall",children:t}),c.length?l.jsx($,{style:{flexDirection:"row",gap:"8px"},children:c.map(s=>o.createElement(L,{dataTestId:"multi-select-tag",...s.isRemovable&&{onClose:u=>m(u,s)},isClickable:s.isRemovable,key:`tag--${s.value}`},s.text))}):l.jsx(O,{color:"content.light",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:r??"Select an option"})]}),x?l.jsx(A,{}):l.jsx(k,{color:n?g.palette.content.light:"currentColor"})]}),x?l.jsx(C,{dataTestId:a,children:w}):null]})},F=({children:e})=>{const{setIsOpen:t}=j(),r=o.useRef(null);return R({ref:r,handler:()=>t(!1)}),l.jsx("div",{ref:r,children:e})},Z=f.div`
  ${({theme:e})=>`
    margin: ${e.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
  `}
`,M=({children:e,defaultValue:t,name:r,dataTestId:a="multi-select"})=>l.jsx(B,{defaultValue:t,name:r,children:l.jsx(Z,{"data-testid":a,role:"menu",children:e})});M.Container=F;M.Select=X;M.Option=P;export{M};

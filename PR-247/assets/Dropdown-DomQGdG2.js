import{j as o}from"./jsx-runtime-CKrituN3.js";import{n as b}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{r as l}from"./index-CBqU2yxZ.js";import{T as S}from"./Typography-gBi7_xh9.js";import{O as C,a as h,D as O}from"./DropdownMenu-Deo-_WEv.js";import{u as k}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./index-D2m8a1IB.js";import"./index-BtM5VmRH.js";import{u as E}from"./useClickOutside-D7JrBqcS.js";const A=b.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 4px;
`,I=({children:t,dataTestId:e})=>o.jsx(A,{"data-testid":e??"dropdown-text",children:t}),g={state:{text:"",value:""},isOpen:!1,setState:()=>null,setIsOpen:()=>null},j=l.createContext(g),T=({children:t,defaultValue:e,name:s})=>{const[r,n]=l.useState(e??g.state),[u,x]=l.useState(g.isOpen);return l.useEffect(()=>e&&n(e),[e]),o.jsx(j.Provider,{value:{state:r,setState:n,isOpen:u,setIsOpen:x,name:s},children:t})},y=()=>{const t=l.useContext(j);if(!t)throw new Error("Dropdown compound components cannot be rendered outside the Dropdown component");return t},U=b.li`
  ${({theme:t,disabled:e})=>`
    ${t.fontStyles.body2}
    color: ${t.palette.content.body};
    list-style: none;
    padding: ${t.spacing["4xs"]} ${t.spacing["2xs"]};
    text-overflow: ellipsis;
    overflow-x: hidden;

    &:hover {
      background: ${e?t.palette.base.light:t.palette.primary.light};
      cursor: ${e?"not-allowed":"pointer"};
    }

    ${e&&`
        color: ${t.palette.content.disabled};
        background: ${t.palette.base.light};
      `}
  `}
`,F=({dataTestId:t,option:e,children:s,isDisabled:r,onClick:n})=>{const{state:u,setState:x,setIsOpen:d,name:p}=y(),v={text:e.text??e.value,value:e.value},m=f=>{w||(d(!1),x(v),n&&n(e.value,p,f))},w=r||u.value===e.value,D=t??`dropdown-option-${e.value}`;return o.jsx(U,{"data-testid":D,disabled:w,onClick:m,role:"option",children:s},e.value)},L=b.button`
  ${({theme:t,style:e,hasBorder:s=!0,hasError:r=!1})=>`
    background: ${t.palette.base.default};
    border: ${s?`1px solid ${t.palette.border.default}`:"0"};
    border-radius: 3px;
    padding: ${t.spacing.xsmall} ${s?t.spacing.xmedium:"0"};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    height: 53px;
    cursor: pointer;

    ${r&&`border-bottom: 2px solid ${t.palette.error.default}`};
    &:disabled {
      pointer-events: none;
      background-color: ${t.palette.base.light};
    }
    
    ${e}
  `}
`,M=({children:t,label:e,style:s,dataTestId:r="dropdown-select",isDisabled:n=!1,hasBorder:u=!0,hasError:x=!1})=>{const{state:d,setState:p,isOpen:v,setIsOpen:m}=y(),w=k(),D=a=>{a.preventDefault(),m(i=>!i)},f=l.Children.count(t);l.useEffect(()=>{l.Children.toArray(t).find(i=>i.props.option.value===d.value)||p({text:"",value:""})},[t,p,d.value]),l.useEffect(()=>{if(f===1){const a=l.Children.map(t,i=>i&&i.props.option);if(a&&a[0]){const i={text:a[0].text??a[0].value,value:a[0].value};p(i)}}},[f,p,t]);const $=n||f<2;return o.jsxs(o.Fragment,{children:[o.jsxs(L,{"data-testid":r,disabled:$,hasBorder:u,hasError:x,onClick:D,style:s,children:[o.jsxs("div",{style:{overflow:"hidden"},children:[o.jsx(S,{color:$?"content.disabled":"content.body",fontStyles:"pXXSmall",children:e}),o.jsx(S,{color:$?"content.disabled":"content.body",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:d.value?d.text:"Select an option"})]}),v?o.jsx(h,{}):o.jsx(C,{color:n?w.palette.content.disabled:"currentColor"})]}),v?o.jsx(O,{dataTestId:r,children:t}):null]})},P=({children:t,style:e,dataTestId:s})=>{const{setIsOpen:r}=y(),n=l.useRef(null);return E({ref:n,handler:()=>r(!1)}),o.jsx("div",{"data-testid":s,ref:n,style:e,children:t})},R=b.div`
  ${({theme:t,style:e})=>`
    margin: ${t.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
    ${e}
  `}
`,c=({children:t,defaultValue:e,style:s,name:r,dataTestId:n="dropdown"})=>o.jsx(T,{defaultValue:e,name:r,children:o.jsx(R,{"data-testid":n,role:"menu",style:s,children:t})});c.Container=P;c.Detail=I;c.Select=M;c.Option=F;c.Menu=O;const N=c;export{N as D};

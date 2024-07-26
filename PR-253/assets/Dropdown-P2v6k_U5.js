import{j as o}from"./jsx-runtime-CKrituN3.js";import{n as v}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{r as a}from"./index-CBqU2yxZ.js";import{I as C}from"./Icon-CHFlL13I.js";import{T as S}from"./Typography-AgncjmvB.js";import"./index-DWb54gmw.js";import"./index-BtM5VmRH.js";import{a as h}from"./z-index-Ds5QkyqS.js";import{u as k}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import{u as E}from"./useClickOutside-D7JrBqcS.js";const I=v.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 4px;
`,_=({children:t,dataTestId:e})=>o.jsx(I,{"data-testid":e??"dropdown-text",children:t}),y={state:{text:"",value:""},isOpen:!1,setState:()=>null,setIsOpen:()=>null},O=a.createContext(y),M=({children:t,defaultValue:e,name:n})=>{const[r,s]=a.useState(e??y.state),[c,u]=a.useState(y.isOpen);return a.useEffect(()=>e&&s(e),[e]),o.jsx(O.Provider,{value:{state:r,setState:s,isOpen:c,setIsOpen:u,name:n},children:t})},D=()=>{const t=a.useContext(O);if(!t)throw new Error("Dropdown compound components cannot be rendered outside the Dropdown component");return t},A=v.li`
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
`,N=({dataTestId:t,option:e,children:n,isDisabled:r,onClick:s})=>{const{state:c,setState:u,setIsOpen:d,name:p}=D(),x={text:e.text??e.value,value:e.value},g=f=>{$||(d(!1),u(x),s&&s(e.value,p,f))},$=r||c.value===e.value,b=t??`dropdown-option-${e.value}`;return o.jsx(A,{"data-testid":b,disabled:$,onClick:g,role:"option",children:n},e.value)},P=v.ul`
  ${({theme:t})=>`
    background: ${t.palette.base.default};
    border: 1px solid ${t.palette.border.default};
    border-radius: ${t.shape.dropdown};
    width: 100%;
    padding:${t.spacing["4xs"]} ${t.spacing.none};
    margin: ${t.spacing["6xs"]} ${t.spacing.none};
    position: absolute;
    right: 0;
    z-index: ${h};
    max-height: 180px;
    overflow: auto;
  `}
`,j=({children:t,dataTestId:e,style:n})=>o.jsx(P,{"data-testid":`${e?e+"-":""}menu`,style:n,children:t}),R=v.button`
  ${({theme:t,style:e,hasBorder:n=!0,hasError:r=!1})=>`
    background: ${t.palette.base.default};
    border: ${n?`1px solid ${t.palette.border.default}`:"0"};
    border-radius: 3px;
    padding: ${t.spacing.xsmall} ${n?t.spacing.xmedium:"0"};
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
`,U=({children:t,label:e,style:n,dataTestId:r="dropdown-select",isDisabled:s=!1,hasBorder:c=!0,hasError:u=!1})=>{const{state:d,setState:p,isOpen:x,setIsOpen:g}=D(),$=k(),b=l=>{l.preventDefault(),g(i=>!i)},f=a.Children.count(t);a.useEffect(()=>{a.Children.toArray(t).find(i=>i.props.option.value===d.value)||p({text:"",value:""})},[t,p,d.value]),a.useEffect(()=>{if(f===1){const l=a.Children.map(t,i=>i&&i.props.option);if(l&&l[0]){const i={text:l[0].text??l[0].value,value:l[0].value};p(i)}}},[f,p,t]);const m=s||f<2;return o.jsxs(o.Fragment,{children:[o.jsxs(R,{"data-testid":r,disabled:m,hasBorder:c,hasError:u,onClick:b,style:n,children:[o.jsxs("div",{style:{overflow:"hidden"},children:[o.jsx(S,{color:m?"content.disabled":"content.body",fontStyles:"pXXSmall",children:e}),o.jsx(S,{color:m?"content.disabled":"content.body",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:d.value?d.text:"Select an option"})]}),o.jsx(C,{code:x?"expand_less":"expand_more",color:!x&&s?$.palette.content.disabled:"currentColor",size:"medium"})]}),x?o.jsx(j,{dataTestId:r,children:t}):null]})},X=({children:t,style:e,dataTestId:n})=>{const{setIsOpen:r}=D(),s=a.useRef(null);return E({ref:s,handler:()=>r(!1)}),o.jsx("div",{"data-testid":n,ref:s,style:e,children:t})},z=v.div`
  ${({theme:t,style:e})=>`
    margin: ${t.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
    ${e}
  `}
`,w=({children:t,defaultValue:e,style:n,name:r,dataTestId:s="dropdown"})=>o.jsx(M,{defaultValue:e,name:r,children:o.jsx(z,{"data-testid":s,role:"menu",style:n,children:t})});w.Container=X;w.Detail=_;w.Select=U;w.Option=N;w.Menu=j;export{w as D,j as a};

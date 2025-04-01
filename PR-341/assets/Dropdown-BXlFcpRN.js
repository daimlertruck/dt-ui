import{j as o}from"./jsx-runtime-CKrituN3.js";import{n as g,u as h}from"./emotion-styled.browser.esm-B1le5_Hy.js";import{r as a}from"./index-CBqU2yxZ.js";import{I as C}from"./Icon-DOElHRRq.js";import{T as b}from"./Typography-DMDAI9bI.js";import"./index-CNA5UvzY.js";import"./index-BtM5VmRH.js";import{a as k}from"./z-index-Ds5QkyqS.js";import{u as E}from"./useClickOutside-D7JrBqcS.js";const I=g.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 4px;
`,_=({children:t,dataTestId:e})=>o.jsx(I,{"data-testid":e??"dropdown-text",children:t}),y={state:{text:"",value:""},isOpen:!1,setState:()=>null,setIsOpen:()=>null},O=a.createContext(y),M=({children:t,defaultValue:e,name:n})=>{const[r,s]=a.useState(e??y.state),[c,u]=a.useState(y.isOpen);return a.useEffect(()=>e&&s(e),[e]),o.jsx(O.Provider,{value:{state:r,setState:s,isOpen:c,setIsOpen:u,name:n},children:t})},S=()=>{const t=a.useContext(O);if(!t)throw new Error("Dropdown compound components cannot be rendered outside the Dropdown component");return t},A=g.li`
  ${({theme:t,disabled:e})=>`
    ${t.fontStyles.body2}
    color: ${t.palette.content.default};
    list-style: none;
    padding: ${t.spacing["4xs"]} ${t.spacing["2xs"]};
    text-overflow: ellipsis;
    overflow-x: hidden;

    &:hover {
      background: ${e?t.palette.surface.light:t.palette.primary.light};
      cursor: ${e?"not-allowed":"pointer"};
    }

    ${e&&`
        color: ${t.palette.content.light};
        background: ${t.palette.surface.light};
      `}
  `}
`,N=({dataTestId:t,option:e,children:n,isDisabled:r,onClick:s})=>{const{state:c,setState:u,setIsOpen:p,name:d}=S(),x={text:e.text??e.value,value:e.value},$=f=>{w||(p(!1),u(x),s&&s(e.value,d,f))},w=r||c.value===e.value,m=t??`dropdown-option-${e.value}`;return o.jsx(A,{"data-testid":m,disabled:w,onClick:$,role:"option",children:n},e.value)},P=g.ul`
  ${({theme:t})=>`
    background: ${t.palette.surface.contrast};
    border: 1px solid ${t.palette.border.default};
    border-radius: ${t.shape.dropdown};
    width: 100%;
    padding:${t.spacing["4xs"]} ${t.spacing.none};
    margin: ${t.spacing["6xs"]} ${t.spacing.none};
    position: absolute;
    right: 0;
    z-index: ${k};
    max-height: 180px;
    overflow: auto;
  `}
`,j=({children:t,dataTestId:e,style:n})=>o.jsx(P,{"data-testid":`${e?e+"-":""}menu`,style:n,children:t}),R=g.button`
  ${({theme:t,style:e,hasBorder:n=!0,hasError:r=!1})=>`
    background: ${t.palette.surface.contrast};
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
      background-color: ${t.palette.surface.light};
    }
    
    ${e}
  `}
`,U=({children:t,label:e,style:n,dataTestId:r="dropdown-select",isDisabled:s=!1,hasBorder:c=!0,hasError:u=!1})=>{const{state:p,setState:d,isOpen:x,setIsOpen:$}=S(),w=h(),m=l=>{l.preventDefault(),$(i=>!i)},f=a.Children.count(t);a.useEffect(()=>{a.Children.toArray(t).find(i=>i.props.option.value===p.value)||d({text:"",value:""})},[t,d,p.value]),a.useEffect(()=>{if(f===1){const l=a.Children.map(t,i=>i&&i.props.option);if(l&&l[0]){const i={text:l[0].text??l[0].value,value:l[0].value};d(i)}}},[f,d,t]);const D=s||f<2;return o.jsxs(o.Fragment,{children:[o.jsxs(R,{"data-testid":r,disabled:D,hasBorder:c,hasError:u,onClick:m,style:n,children:[o.jsxs("div",{style:{overflow:"hidden"},children:[o.jsx(b,{color:D?"content.light":"content.default",fontStyles:"pXXSmall",children:e}),o.jsx(b,{color:D?"content.light":"content.default",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:p.value?p.text:"Select an option"})]}),o.jsx(C,{code:x?"expand_less":"expand_more",color:!x&&s?w.palette.content.light:"currentColor",size:"medium"})]}),x?o.jsx(j,{dataTestId:r,children:t}):null]})},X=({children:t,style:e,dataTestId:n})=>{const{setIsOpen:r}=S(),s=a.useRef(null);return E({ref:s,handler:()=>r(!1)}),o.jsx("div",{"data-testid":n,ref:s,style:e,children:t})},z=g.div`
  ${({theme:t,style:e})=>`
    margin: ${t.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
    ${e}
  `}
`,v=({children:t,defaultValue:e,style:n,name:r,dataTestId:s="dropdown"})=>o.jsx(M,{defaultValue:e,name:r,children:o.jsx(z,{"data-testid":s,role:"menu",style:n,children:t})});v.Container=X;v.Detail=_;v.Select=U;v.Option=N;v.Menu=j;export{v as D};

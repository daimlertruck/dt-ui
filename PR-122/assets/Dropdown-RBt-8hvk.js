import{j as o}from"./jsx-runtime-CbCNBOXy.js";import{n as D,u as O}from"./emotion-styled.browser.esm-yeljtSWm.js";import{e as j,D as $}from"./TooltipProvider-7kej92-2.js";import{D as h}from"./DropdownOption.styled-yoz7iS2-.js";import{r as p}from"./index-IybTgENJ.js";import{O as C,a as b,D as k}from"./DropdownMenu-KY8CoAPM.js";import{T as S}from"./Typography-9OPir1PX.js";import"./index-Hhmu2M5c.js";import{u as _}from"./useClickOutside-031TREIJ.js";const E=D.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 4px;
`,A=({children:e,dataTestId:t})=>o.jsx(E,{"data-testid":t??"dropdown-text",children:e}),I=({dataTestId:e,option:t,children:n,isDisabled:s,onClick:a})=>{const{state:x,setState:f,setIsOpen:i,name:d}=j(),c={text:t.text??t.value,value:t.value},m=()=>{a&&a(t.value,d),i(!1),f(c)},v=s||x.value===t.value,w=e??`dropdown-option-${t.value}`;return o.jsx(h,{"data-testid":w,disabled:v,onClick:m,role:"option",children:n},t.value)},R=D.button`
  ${({theme:e,style:t,hasBorder:n=!0,hasError:s=!1})=>`
    background: ${e.colors.white};
    border: ${n?`1px solid ${e.colors.grey_90}`:"0"};
    border-radius: 3px;
    padding: ${e.spacing.xsmall} ${n?e.spacing.xmedium:"0"};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    height: 53px;
    cursor: pointer;

    ${s&&`border-bottom: 2px solid ${e.palette.error}`};
    &:disabled {
      pointer-events: none;
      background-color: ${e.colors.grey_70};
    }
    
    ${t}
  `}
`,T=({children:e,label:t,style:n,dataTestId:s="dropdown-select",isDisabled:a=!1,hasBorder:x=!0,hasError:f=!1})=>{const{state:i,setState:d,isOpen:c,setIsOpen:m}=j(),v=O(),w=r=>{r.preventDefault(),m(l=>!l)},y=p.Children.count(e);p.useEffect(()=>{p.Children.toArray(e).find(l=>l.props.option.value===i.value)||d({text:"",value:""})},[e,d,i.value]),p.useEffect(()=>{if(y===1){const r=p.Children.map(e,l=>l&&l.props.option);if(r&&r[0]){const l={text:r[0].text??r[0].value,value:r[0].value};d(l)}}},[y,d,e]);const g=a||y<2;return o.jsxs(o.Fragment,{children:[o.jsxs(R,{"data-testid":s,disabled:g,hasBorder:x,hasError:f,onClick:w,style:n,children:[o.jsxs("div",{style:{overflow:"hidden"},children:[o.jsx(S,{color:g?"grey_90":"grey_100",fontStyles:"pXXSmall",children:t}),o.jsx(S,{color:g?"grey_100":"grey_300",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:i.value?i.text:"Select an option"})]}),c?o.jsx(b,{}):o.jsx(C,{color:a?v.colors.grey_90:"currentColor"})]}),c?o.jsx(k,{dataTestId:s,children:e}):null]})},X=({children:e})=>{const{setIsOpen:t}=j(),n=p.useRef(null);return _({ref:n,handler:()=>t(!1)}),o.jsx("div",{ref:n,children:e})},F=D.div`
  ${({theme:e,style:t})=>`
    margin: ${e.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
    ${t}
  `}
`,u=({children:e,defaultValue:t,style:n,name:s,dataTestId:a="dropdown"})=>o.jsx($,{defaultValue:t,name:s,children:o.jsx(F,{"data-testid":a,role:"menu",style:n,children:e})});u.Container=X;u.Detail=A;u.Select=T;u.Option=I;export{u as D};

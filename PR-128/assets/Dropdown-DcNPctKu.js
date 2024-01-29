import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{n as D,u as $}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import{e as j,D as h}from"./TooltipProvider-y9Uc-rOM.js";import{D as C}from"./DropdownOption.styled-jNXaeOqf.js";import{r as p}from"./index-4g5l5LRQ.js";import{O as b,a as k,D as O}from"./DropdownMenu-GN9O42qz.js";import{T as S}from"./Typography-VWNkGQM0.js";import"./index-lb1Yyg-x.js";import{u as _}from"./useClickOutside-5i9YsATO.js";const E=D.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 4px;
`,A=({children:e,dataTestId:t})=>o.jsx(E,{"data-testid":t??"dropdown-text",children:e}),I=({dataTestId:e,option:t,children:n,isDisabled:s,onClick:r})=>{const{state:f,setState:m,setIsOpen:i,name:d}=j(),u={text:t.text??t.value,value:t.value},v=()=>{x||(i(!1),m(u),r&&r(t.value,d))},x=s||f.value===t.value,w=e??`dropdown-option-${t.value}`;return o.jsx(C,{"data-testid":w,disabled:x,onClick:v,role:"option",children:n},t.value)},M=D.button`
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
`,R=({children:e,label:t,style:n,dataTestId:s="dropdown-select",isDisabled:r=!1,hasBorder:f=!0,hasError:m=!1})=>{const{state:i,setState:d,isOpen:u,setIsOpen:v}=j(),x=$(),w=l=>{l.preventDefault(),v(a=>!a)},y=p.Children.count(e);p.useEffect(()=>{p.Children.toArray(e).find(a=>a.props.option.value===i.value)||d({text:"",value:""})},[e,d,i.value]),p.useEffect(()=>{if(y===1){const l=p.Children.map(e,a=>a&&a.props.option);if(l&&l[0]){const a={text:l[0].text??l[0].value,value:l[0].value};d(a)}}},[y,d,e]);const g=r||y<2;return o.jsxs(o.Fragment,{children:[o.jsxs(M,{"data-testid":s,disabled:g,hasBorder:f,hasError:m,onClick:w,style:n,children:[o.jsxs("div",{style:{overflow:"hidden"},children:[o.jsx(S,{color:g?"grey_90":"grey_100",fontStyles:"pXXSmall",children:t}),o.jsx(S,{color:g?"grey_100":"grey_300",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:i.value?i.text:"Select an option"})]}),u?o.jsx(k,{}):o.jsx(b,{color:r?x.colors.grey_90:"currentColor"})]}),u?o.jsx(O,{dataTestId:s,children:e}):null]})},T=({children:e,style:t,dataTestId:n})=>{const{setIsOpen:s}=j(),r=p.useRef(null);return _({ref:r,handler:()=>s(!1)}),o.jsx("div",{"data-testid":n,ref:r,style:t,children:e})},X=D.div`
  ${({theme:e,style:t})=>`
    margin: ${e.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
    ${t}
  `}
`,c=({children:e,defaultValue:t,style:n,name:s,dataTestId:r="dropdown"})=>o.jsx(h,{defaultValue:t,name:s,children:o.jsx(X,{"data-testid":r,role:"menu",style:n,children:e})});c.Container=T;c.Detail=A;c.Select=R;c.Option=I;c.Menu=O;export{c as D};

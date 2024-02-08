import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{n as y,u as O}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import{e as g,D as $}from"./typography-EFa8skSH.js";import{D as h}from"./DropdownOption.styled-WDQMJYkj.js";import{r as p}from"./index-4g5l5LRQ.js";import{O as C,a as k,D as S}from"./DropdownMenu--X_l1VJa.js";import{T as j}from"./Typography-33DxhsRi.js";import"./index-X02A2_j2.js";import{u as E}from"./useClickOutside-5i9YsATO.js";const A=y.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 4px;
`,I=({children:t,dataTestId:e})=>o.jsx(A,{"data-testid":e??"dropdown-text",children:t}),M=({dataTestId:t,option:e,children:n,isDisabled:s,onClick:r})=>{const{state:x,setState:m,setIsOpen:i,name:d}=g(),u={text:e.text??e.value,value:e.value},v=()=>{f||(i(!1),m(u),r&&r(e.value,d))},f=s||x.value===e.value,w=t??`dropdown-option-${e.value}`;return o.jsx(h,{"data-testid":w,disabled:f,onClick:v,role:"option",children:n},e.value)},R=y.button`
  ${({theme:t,style:e,hasBorder:n=!0,hasError:s=!1})=>`
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

    ${s&&`border-bottom: 2px solid ${t.palette.error.default}`};
    &:disabled {
      pointer-events: none;
      background-color: ${t.palette.base.light};
    }
    
    ${e}
  `}
`,T=({children:t,label:e,style:n,dataTestId:s="dropdown-select",isDisabled:r=!1,hasBorder:x=!0,hasError:m=!1})=>{const{state:i,setState:d,isOpen:u,setIsOpen:v}=g(),f=O(),w=l=>{l.preventDefault(),v(a=>!a)},D=p.Children.count(t);p.useEffect(()=>{p.Children.toArray(t).find(a=>a.props.option.value===i.value)||d({text:"",value:""})},[t,d,i.value]),p.useEffect(()=>{if(D===1){const l=p.Children.map(t,a=>a&&a.props.option);if(l&&l[0]){const a={text:l[0].text??l[0].value,value:l[0].value};d(a)}}},[D,d,t]);const b=r||D<2;return o.jsxs(o.Fragment,{children:[o.jsxs(R,{"data-testid":s,disabled:b,hasBorder:x,hasError:m,onClick:w,style:n,children:[o.jsxs("div",{style:{overflow:"hidden"},children:[o.jsx(j,{color:b?"content.disabled":"content.body",fontStyles:"pXXSmall",children:e}),o.jsx(j,{color:b?"content.disabled":"content.body",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:i.value?i.text:"Select an option"})]}),u?o.jsx(k,{}):o.jsx(C,{color:r?f.palette.content.disabled:"currentColor"})]}),u?o.jsx(S,{dataTestId:s,children:t}):null]})},X=({children:t,style:e,dataTestId:n})=>{const{setIsOpen:s}=g(),r=p.useRef(null);return E({ref:r,handler:()=>s(!1)}),o.jsx("div",{"data-testid":n,ref:r,style:e,children:t})},F=y.div`
  ${({theme:t,style:e})=>`
    margin: ${t.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
    ${e}
  `}
`,c=({children:t,defaultValue:e,style:n,name:s,dataTestId:r="dropdown"})=>o.jsx($,{defaultValue:e,name:s,children:o.jsx(F,{"data-testid":r,role:"menu",style:n,children:t})});c.Container=X;c.Detail=I;c.Select=T;c.Option=M;c.Menu=S;export{c as D};

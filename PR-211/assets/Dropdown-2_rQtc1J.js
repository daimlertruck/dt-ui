import{j as o}from"./jsx-runtime-CKrituN3.js";import{n as v}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as y,D as S}from"./DropdownProvider-D86Tot7W.js";import{T as D}from"./Typography-C0EWJ3ZN.js";import{r as p}from"./index-CBqU2yxZ.js";import{O,a as C,D as j}from"./DropdownMenu-DY6jBT7O.js";import{u as h}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./index-8Kg4V25X.js";import"./index-BtM5VmRH.js";import{u as k}from"./useClickOutside-D7JrBqcS.js";const E=v.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 4px;
`,A=({children:t,dataTestId:e})=>o.jsx(E,{"data-testid":e??"dropdown-text",children:t}),I=v.li`
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
`,M=({dataTestId:t,option:e,children:n,isDisabled:s,onClick:l})=>{const{state:w,setState:$,setIsOpen:i,name:d}=y(),x={text:e.text??e.value,value:e.value},b=u=>{f||(i(!1),$(x),l&&l(e.value,d,u))},f=s||w.value===e.value,g=t??`dropdown-option-${e.value}`;return o.jsx(I,{"data-testid":g,disabled:f,onClick:b,role:"option",children:n},e.value)},R=v.button`
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
`,T=({children:t,label:e,style:n,dataTestId:s="dropdown-select",isDisabled:l=!1,hasBorder:w=!0,hasError:$=!1})=>{const{state:i,setState:d,isOpen:x,setIsOpen:b}=y(),f=h(),g=r=>{r.preventDefault(),b(a=>!a)},u=p.Children.count(t);p.useEffect(()=>{p.Children.toArray(t).find(a=>a.props.option.value===i.value)||d({text:"",value:""})},[t,d,i.value]),p.useEffect(()=>{if(u===1){const r=p.Children.map(t,a=>a&&a.props.option);if(r&&r[0]){const a={text:r[0].text??r[0].value,value:r[0].value};d(a)}}},[u,d,t]);const m=l||u<2;return o.jsxs(o.Fragment,{children:[o.jsxs(R,{"data-testid":s,disabled:m,hasBorder:w,hasError:$,onClick:g,style:n,children:[o.jsxs("div",{style:{overflow:"hidden"},children:[o.jsx(D,{color:m?"content.disabled":"content.body",fontStyles:"pXXSmall",children:e}),o.jsx(D,{color:m?"content.disabled":"content.body",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:i.value?i.text:"Select an option"})]}),x?o.jsx(C,{}):o.jsx(O,{color:l?f.palette.content.disabled:"currentColor"})]}),x?o.jsx(j,{dataTestId:s,children:t}):null]})},X=({children:t,style:e,dataTestId:n})=>{const{setIsOpen:s}=y(),l=p.useRef(null);return k({ref:l,handler:()=>s(!1)}),o.jsx("div",{"data-testid":n,ref:l,style:e,children:t})},F=v.div`
  ${({theme:t,style:e})=>`
    margin: ${t.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
    ${e}
  `}
`,c=({children:t,defaultValue:e,style:n,name:s,dataTestId:l="dropdown"})=>o.jsx(S,{defaultValue:e,name:s,children:o.jsx(F,{"data-testid":l,role:"menu",style:n,children:t})});c.Container=X;c.Detail=A;c.Select=T;c.Option=M;c.Menu=j;const N=c;export{N as D};

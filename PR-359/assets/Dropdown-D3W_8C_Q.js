import{j as o}from"./jsx-runtime-DMAvRu52.js";import{T as $}from"./Typography-CqPnf99D.js";import{n as g,u as M}from"./emotion-styled.browser.esm-DpDeK1WQ.js";import{r as l}from"./index-Dl6G-zuu.js";import{B as P}from"./index-DECWwmT6.js";import{I as O}from"./Icon-B8gBCtaI.js";import"./index-hJyVjSa4.js";import"./index-DCrStp1_.js";import{a as T}from"./z-index-Ds5QkyqS.js";import{u as z}from"./useClickOutside-CBJSS0tk.js";const A=g.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 4px;
`,F=({dataTestId:t,isDisabled:e=!1,hasError:n=!1,children:r=""})=>{const s=e?"content.light":"content.medium";return o.jsx(A,{"data-testid":t??"dropdown-text",children:o.jsx($,{color:n?"error.default":s,element:"span",fontStyles:"body3",children:r})})},h={state:{text:"",value:""},isOpen:!1,setState:()=>null,setIsOpen:()=>null},k=l.createContext(h),N=({children:t,defaultValue:e,name:n})=>{const[r,s]=l.useState(e??h.state),[i,c]=l.useState(h.isOpen);return l.useEffect(()=>e&&s(e),[e]),o.jsx(k.Provider,{value:{state:r,setState:s,isOpen:i,setIsOpen:c,name:n},children:t})},C=()=>{const t=l.useContext(k);if(!t)throw new Error("Dropdown compound components cannot be rendered outside the Dropdown component");return t},R=g.li`
  ${({theme:t,disabled:e,isSelected:n})=>`
    ${t.fontStyles[n?"body2Bold":"body2"]};
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
`,U=({dataTestId:t,option:e,children:n,isDisabled:r,onClick:s})=>{const{state:i,setState:c,setIsOpen:f,name:x}=C(),m=t??`dropdown-option-${e.value}`,y={text:e.text??e.value,value:e.value},p=u=>{r||(f(!1),c(y),s&&s(e.value,x,u))};return o.jsx(R,{"data-testid":m,disabled:r,isSelected:i.value===e.value,onClick:p,role:"option",children:n},e.value)},L=g.ul`
  ${({theme:t})=>`
    background: ${t.palette.surface.contrast};
    border: 1px solid ${t.palette.border.default};
    border-radius: ${t.shape.dropdown};
    width: 100%;
    padding:${t.spacing["2xs"]} ${t.spacing.none};
    margin: ${t.spacing["5xs"]} ${t.spacing.none};
    position: absolute;
    right: 0;
    z-index: ${T};
    max-height: 180px;
    overflow: auto;
  `}
`,E=({children:t,dataTestId:e,style:n})=>o.jsx(L,{"data-testid":`${e?e+"-":""}menu`,style:n,children:t}),W=(t,e)=>({default:e.palette.surface.default,contrast:e.palette.surface.contrast,light:e.palette.surface.light})[t],X=g.button`
  ${({theme:t,hasBorder:e=!0,hasError:n=!1,isOpen:r=!1,variant:s="outlined",fill:i="default"})=>{const c=t.palette.border.medium,f=t.palette.content.dark,x=t.palette.error.default;return`
      background: ${t.palette.surface.contrast};
      padding: ${t.spacing.xsmall} ${e?t.spacing.xmedium:"0"};
      position: relative;
      display: flex;
      align-items: center;
      justify-content: space-between;
      text-align: left;
      width: 100%;
      height: 53px;
      cursor: pointer;
      outline: none;

      background-color: ${W(i,t)};

      border-width: ${s==="outlined"?"1px":"0 0 1px"};
      border-color: ${r?f:c};
      border-style: solid;

      &:focus, &:hover {
        border-color: ${n?x:f};
      }

      ${n&&`border-color: ${x}`};
      ${!e&&"border: none"};

      &:disabled {
        pointer-events: none;
      }
    `}}
`,Z=({children:t,label:e,style:n,dataTestId:r="dropdown-select",isDisabled:s=!1,isRequired:i,hasBorder:c=!0,hasError:f=!1,hasDeselect:x=!1,variant:m="outlined",fill:y="default"})=>{const{state:p,setState:u,isOpen:b,setIsOpen:I}=C(),S=M(),D=l.Children.count(t)===1,w=s||D,j=w?S.palette.content.light:S.palette.content.default,_=a=>{a.preventDefault(),I(d=>!d)},B=a=>{a.stopPropagation(),u({text:"",value:""})};return l.useEffect(()=>{l.Children.toArray(t).find(d=>d.props.option.value===p.value)||u({text:"",value:""})},[t,u,p.value]),l.useEffect(()=>{if(D){const a=l.Children.map(t,d=>d&&d.props.option);if(a&&a[0]){const d={text:a[0].text??a[0].value,value:a[0].value};u(d)}}},[D,u,t]),o.jsxs(o.Fragment,{children:[o.jsxs(X,{"data-testid":r,disabled:w,fill:y,hasBorder:c,hasError:f,isOpen:b,onClick:_,style:n,variant:m,children:[o.jsxs("div",{style:{overflow:"hidden"},children:[o.jsxs($,{color:w?"content.light":"content.default",fontStyles:"body3",children:[e,i?o.jsx($,{color:"error.default",element:"span",fontStyles:"body3",children:"*"}):null]}),o.jsx($,{color:w?"content.light":"content.default",fontStyles:"body2",style:{textOverflow:"ellipsis",overflow:"hidden"},children:p.value?p.text:"Select an option"})]}),o.jsxs(P,{style:{flexDirection:"row",gap:"0.5rem"},children:[x&&p.value?o.jsx(O,{code:"close",color:j,dataTestId:"deselect-value",onClick:B,size:"medium"}):null,o.jsx(O,{code:b?"expand_less":"expand_more",color:j,size:"large"})]})]}),b?o.jsx(E,{dataTestId:r,children:t}):null]})},q=({children:t,style:e,dataTestId:n})=>{const{setIsOpen:r}=C(),s=l.useRef(null);return z({ref:s,handler:()=>r(!1)}),o.jsx("div",{"data-testid":n,ref:s,style:e,children:t})},G=g.div`
  ${({theme:t,style:e})=>`
    margin: ${t.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
    ${e}
  `}
`,v=({children:t,defaultValue:e,style:n,name:r,dataTestId:s="dropdown"})=>o.jsx(N,{defaultValue:e,name:r,children:o.jsx(G,{"data-testid":s,role:"menu",style:n,children:t})});v.Container=q;v.Detail=F;v.Select=Z;v.Option=U;v.Menu=E;export{v as D};

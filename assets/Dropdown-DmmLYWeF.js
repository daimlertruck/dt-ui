import{j as o}from"./jsx-runtime-DMAvRu52.js";import{T as y}from"./Typography-BJmAJdBI.js";import{n as v,u as M}from"./emotion-styled.browser.esm-DpDeK1WQ.js";import{r as l}from"./index-Dl6G-zuu.js";import{B as P}from"./index-LNaMzCj1.js";import{I as O}from"./Icon-BZQueZez.js";import"./index-BEYE5dGg.js";import"./index-DCrStp1_.js";import{a as T}from"./z-index-Ds5QkyqS.js";import{u as z}from"./useClickOutside-CBJSS0tk.js";const A=v.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 4px;
`,F=({dataTestId:t,isDisabled:e=!1,hasError:n=!1,children:r=""})=>{const s=e?"content.light":"content.medium";return o.jsx(A,{"data-testid":t??"dropdown-text",children:o.jsx(y,{color:n?"error.default":s,element:"span",fontStyles:"body3",children:r})})},h={state:{text:"",value:""},isOpen:!1,setState:()=>null,setIsOpen:()=>null},k=l.createContext(h),N=({children:t,defaultValue:e,name:n})=>{const[r,s]=l.useState(e??h.state),[d,c]=l.useState(h.isOpen);return l.useEffect(()=>e&&s(e),[e]),o.jsx(k.Provider,{value:{state:r,setState:s,isOpen:d,setIsOpen:c,name:n},children:t})},C=()=>{const t=l.useContext(k);if(!t)throw new Error("Dropdown compound components cannot be rendered outside the Dropdown component");return t},R=v.li`
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
`,U=({dataTestId:t,option:e,children:n,style:r,isDisabled:s,onClick:d})=>{const{state:c,setState:f,setIsOpen:x,name:b}=C(),m=t??`dropdown-option-${e.value}`,p={text:e.text??e.value,value:e.value},u=g=>{s||(x(!1),f(p),d&&d(e.value,b,g))};return o.jsx(R,{"data-testid":m,disabled:s,isSelected:c.value===e.value,onClick:u,role:"option",style:r,children:n},e.value)},L=v.ul`
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
`,E=({children:t,dataTestId:e,style:n})=>o.jsx(L,{"data-testid":`${e?e+"-":""}menu`,style:n,children:t}),W=(t,e)=>({default:e.palette.surface.default,contrast:e.palette.surface.contrast,light:e.palette.surface.light})[t],X=v.button`
  ${({theme:t,hasBorder:e=!0,hasError:n=!1,isOpen:r=!1,variant:s="outlined",fill:d="default"})=>{const c=t.palette.border.medium,f=t.palette.content.dark,x=t.palette.error.default;return`
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

      background-color: ${W(d,t)};

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
`,Z=({children:t,label:e,style:n,dataTestId:r="dropdown-select",isDisabled:s=!1,isRequired:d,hasBorder:c=!0,hasError:f=!1,hasDeselect:x=!1,variant:b="outlined",fill:m="default"})=>{const{state:p,setState:u,isOpen:g,setIsOpen:I}=C(),S=M(),D=l.Children.count(t)===1,$=s||D,j=$?S.palette.content.light:S.palette.content.default,_=a=>{a.preventDefault(),I(i=>!i)},B=a=>{a.stopPropagation(),u({text:"",value:""})};return l.useEffect(()=>{l.Children.toArray(t).find(i=>i.props.option.value===p.value)||u({text:"",value:""})},[t,u,p.value]),l.useEffect(()=>{if(D){const a=l.Children.map(t,i=>i&&i.props.option);if(a&&a[0]){const i={text:a[0].text??a[0].value,value:a[0].value};u(i)}}},[D,u,t]),o.jsxs(o.Fragment,{children:[o.jsxs(X,{"data-testid":r,disabled:$,fill:m,hasBorder:c,hasError:f,isOpen:g,onClick:_,style:n,variant:b,children:[o.jsxs("div",{style:{overflow:"hidden"},children:[o.jsxs(y,{color:$?"content.light":"content.default",fontStyles:"body3",children:[e,d?o.jsx(y,{color:"error.default",element:"span",fontStyles:"body3",children:"*"}):null]}),o.jsx(y,{color:$?"content.light":"content.default",fontStyles:"body2",style:{textOverflow:"ellipsis",overflow:"hidden"},children:p.value?p.text:"Select an option"})]}),o.jsxs(P,{style:{flexDirection:"row",gap:"0.5rem"},children:[x&&p.value?o.jsx(O,{code:"close",color:j,dataTestId:"deselect-value",onClick:B,size:"s"}):null,o.jsx(O,{code:g?"expand_less":"expand_more",color:j,size:"l"})]})]}),g?o.jsx(E,{dataTestId:r,children:t}):null]})},q=({children:t,style:e,dataTestId:n})=>{const{setIsOpen:r}=C(),s=l.useRef(null);return z({ref:s,handler:()=>r(!1)}),o.jsx("div",{"data-testid":n,ref:s,style:e,children:t})},G=v.div`
  ${({theme:t,style:e})=>`
    margin: ${t.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
    ${e}
  `}
`,w=({children:t,defaultValue:e,style:n,name:r,dataTestId:s="dropdown"})=>o.jsx(N,{defaultValue:e,name:r,children:o.jsx(G,{"data-testid":s,role:"menu",style:n,children:t})});w.Container=q;w.Detail=F;w.Select=Z;w.Option=U;w.Menu=E;export{w as D};

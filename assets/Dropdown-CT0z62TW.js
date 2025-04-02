import{j as n}from"./jsx-runtime-CKrituN3.js";import{T as m}from"./Typography-D8tl62dX.js";import{n as v,u as B}from"./emotion-styled.browser.esm-B1le5_Hy.js";import{r as l}from"./index-CBqU2yxZ.js";import{B as M}from"./index-DMRWov4L.js";import{I as j}from"./Icon-DOElHRRq.js";import"./index-DhoK5pdg.js";import"./index-BtM5VmRH.js";import{a as P}from"./z-index-Ds5QkyqS.js";import{u as T}from"./useClickOutside-D7JrBqcS.js";const z=v.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 4px;
`,A=({dataTestId:t,isDisabled:e=!1,hasError:o=!1,children:r=""})=>{const s=e?"content.light":"content.medium";return n.jsx(z,{"data-testid":t??"dropdown-text",children:n.jsx(m,{color:o?"error.default":s,element:"span",fontStyles:"body3",children:r})})},D={state:{text:"",value:""},isOpen:!1,setState:()=>null,setIsOpen:()=>null},O=l.createContext(D),F=({children:t,defaultValue:e,name:o})=>{const[r,s]=l.useState(e??D.state),[d,c]=l.useState(D.isOpen);return l.useEffect(()=>e&&s(e),[e]),n.jsx(O.Provider,{value:{state:r,setState:s,isOpen:d,setIsOpen:c,name:o},children:t})},C=()=>{const t=l.useContext(O);if(!t)throw new Error("Dropdown compound components cannot be rendered outside the Dropdown component");return t},N=v.li`
  ${({theme:t,disabled:e,isSelected:o})=>`
    ${t.fontStyles[o?"body2Bold":"body2"]};
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
`,R=({dataTestId:t,option:e,children:o,isDisabled:r,onClick:s})=>{const{state:d,setState:c,setIsOpen:f,name:x}=C(),y=t??`dropdown-option-${e.value}`,p={text:e.text??e.value,value:e.value},u=g=>{r||(f(!1),c(p),s&&s(e.value,x,g))};return n.jsx(N,{"data-testid":y,disabled:r,isSelected:d.value===e.value,onClick:u,role:"option",children:o},e.value)},U=v.ul`
  ${({theme:t})=>`
    background: ${t.palette.surface.contrast};
    border: 1px solid ${t.palette.border.default};
    border-radius: ${t.shape.dropdown};
    width: 100%;
    padding:${t.spacing["2xs"]} ${t.spacing.none};
    margin: ${t.spacing["5xs"]} ${t.spacing.none};
    position: absolute;
    right: 0;
    z-index: ${P};
    max-height: 180px;
    overflow: auto;
  `}
`,k=({children:t,dataTestId:e,style:o})=>n.jsx(U,{"data-testid":`${e?e+"-":""}menu`,style:o,children:t}),L=(t,e)=>({default:e.palette.surface.default,contrast:e.palette.surface.contrast,light:e.palette.surface.light})[t],W=v.button`
  ${({theme:t,hasBorder:e=!0,hasError:o=!1,isOpen:r=!1,variant:s="outlined",fill:d="default"})=>{const c=t.palette.border.dark,f=t.palette.content.dark,x=t.palette.error.default;return`
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

      background-color: ${L(d,t)};

      border-width: ${s==="outlined"?"1px":"0 0 1px"};
      border-color: ${r?f:c};
      border-style: solid;

      &:focus, &:hover {
        border-color: ${o?x:f};
      }

      ${o&&`border-color: ${x}`};
      ${!e&&"border: none"};

      &:disabled {
        pointer-events: none;
      }
    `}}
`,X=({children:t,label:e,style:o,dataTestId:r="dropdown-select",isDisabled:s=!1,hasBorder:d=!0,hasError:c=!1,hasDeselect:f=!1,variant:x="outlined",fill:y="default"})=>{const{state:p,setState:u,isOpen:g,setIsOpen:E}=C(),h=B(),b=l.Children.count(t)===1,$=s||b,S=$?h.palette.content.light:h.palette.content.default,I=a=>{a.preventDefault(),E(i=>!i)},_=a=>{a.stopPropagation(),u({text:"",value:""})};return l.useEffect(()=>{l.Children.toArray(t).find(i=>i.props.option.value===p.value)||u({text:"",value:""})},[t,u,p.value]),l.useEffect(()=>{if(b){const a=l.Children.map(t,i=>i&&i.props.option);if(a&&a[0]){const i={text:a[0].text??a[0].value,value:a[0].value};u(i)}}},[b,u,t]),n.jsxs(n.Fragment,{children:[n.jsxs(W,{"data-testid":r,disabled:$,fill:y,hasBorder:d,hasError:c,isOpen:g,onClick:I,style:o,variant:x,children:[n.jsxs("div",{style:{overflow:"hidden"},children:[n.jsx(m,{color:$?"content.light":"content.default",fontStyles:"body3",children:e}),n.jsx(m,{color:$?"content.light":"content.default",fontStyles:"body2",style:{textOverflow:"ellipsis",overflow:"hidden"},children:p.value?p.text:"Select an option"})]}),n.jsxs(M,{style:{flexDirection:"row",gap:"0.5rem"},children:[f&&p.value?n.jsx(j,{code:"close",color:S,dataTestId:"deselect-value",onClick:_,size:"medium"}):null,n.jsx(j,{code:g?"expand_less":"expand_more",color:S,size:"large"})]})]}),g?n.jsx(k,{dataTestId:r,children:t}):null]})},Z=({children:t,style:e,dataTestId:o})=>{const{setIsOpen:r}=C(),s=l.useRef(null);return T({ref:s,handler:()=>r(!1)}),n.jsx("div",{"data-testid":o,ref:s,style:e,children:t})},q=v.div`
  ${({theme:t,style:e})=>`
    margin: ${t.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;
    ${e}
  `}
`,w=({children:t,defaultValue:e,style:o,name:r,dataTestId:s="dropdown"})=>n.jsx(F,{defaultValue:e,name:r,children:n.jsx(q,{"data-testid":s,role:"menu",style:o,children:t})});w.Container=Z;w.Detail=A;w.Select=X;w.Option=R;w.Menu=k;export{w as D};

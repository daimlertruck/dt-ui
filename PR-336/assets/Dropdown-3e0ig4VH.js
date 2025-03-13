import{j as l}from"./jsx-runtime-CKrituN3.js";import{T as S}from"./Typography-C3Apdm1M.js";import{n as x,u as F}from"./emotion-styled.browser.esm-B1le5_Hy.js";import{r as s}from"./index-CBqU2yxZ.js";import{I as O}from"./Icon-DOElHRRq.js";import"./index-bKUcOz2Q.js";import"./index-BtM5VmRH.js";import{a as _}from"./z-index-Ds5QkyqS.js";import{u as M}from"./useClickOutside-D7JrBqcS.js";const R=x.div`
  display: flex;
  align-items: center;
  padding-left: 15px;
  margin-top: 4px;
`,T=({dataTestId:t,isDisabled:e=!1,hasError:o=!1,message:r=""})=>{const n=r,a=e?"content.light":"content.medium";return l.jsx(R,{"data-testid":t??"dropdown-text",children:l.jsx(S,{color:o?"error.default":a,element:"span",fontStyles:"body3",children:n})})},j={state:{text:"",value:""},isOpen:!1,setState:()=>null,setIsOpen:()=>null},h=s.createContext(j),z=({children:t,defaultValue:e,name:o})=>{const[r,n]=s.useState(e??j.state),[a,f]=s.useState(j.isOpen);return s.useEffect(()=>e&&n(e),[e]),l.jsx(h.Provider,{value:{state:r,setState:n,isOpen:a,setIsOpen:f,name:o},children:t})},C=()=>{const t=s.useContext(h);if(!t)throw new Error("Dropdown compound components cannot be rendered outside the Dropdown component");return t},k=(t,e)=>({default:e.palette.surface.default,contrast:e.palette.surface.contrast,light:e.palette.surface.light})[t]||e.palette.surface.default,A=x.li`
  ${({theme:t,disabled:e,backgroundFill:o="default"})=>`
    ${t.fontStyles.body2}
    color: ${t.palette.content.default};
    list-style: none;
    padding: ${t.spacing["4xs"]} ${t.spacing["2xs"]};
    text-overflow: ellipsis;
    overflow-x: hidden;

    background-color: ${k(o,t)};

    &:hover {
      background: ${e?t.palette.surface.light:t.palette.primary.light};
      cursor: ${e?"not-allowed":"pointer"};
    }

    ${e&&`
        color: ${t.palette.content.light};
        background: ${t.palette.surface.light};
      `}
  `}
`,N=({dataTestId:t,option:e,children:o,isDisabled:r,onClick:n,backgroundFill:a="default"})=>{const{state:f,setState:$,setIsOpen:b,name:m}=C(),p={text:e.text??e.value,value:e.value},c=w=>{u||(b(!1),$(p),n&&n(e.value,m,w))},u=r||f.value===e.value,v=t??`dropdown-option-${e.value}`;return l.jsx(A,{backgroundFill:a,"data-testid":v,disabled:u,onClick:c,role:"option",children:o},e.value)},P=x.ul`
  ${({theme:t})=>`
    background: ${t.palette.surface.contrast};
    border: 1px solid ${t.palette.border.default};
    border-radius: ${t.shape.dropdown};
    width: 100%;
    position: absolute;
    right: 0;
    z-index: ${_};
    max-height: 180px;
    overflow: auto;
  `}
`,I=({children:t,dataTestId:e,style:o})=>l.jsx(P,{"data-testid":`${e?e+"-":""}menu`,style:o,children:t}),U=x.button`
  ${({theme:t,style:e,hasBorder:o=!0,hasError:r=!1,variant:n="outlined",backgroundFill:a="default"})=>`
    background: ${t.palette.surface.contrast};
    padding: ${t.spacing.xsmall} ${o?t.spacing.xmedium:"0"};
    position: relative;
    display: flex;
    align-items: center;
    justify-content: space-between;
    text-align: left;
    width: 100%;
    height: 53px;
    cursor: pointer;
    outline: none;

    background-color: ${k(a,t)};


    ${o?n==="outlined"?`border-radius: ${t.shape.formField};
            border: 1px solid ${r?t.palette.error.default:t.palette.border.default};
              &:focus { border: 1px solid ${r?t.palette.error.default:t.palette.primary.default}};`:`border-radius: ${t.shape.formField} 
                            ${t.shape.formField} 0 0;
            border-bottom: 1px solid ${r?t.palette.error.default:t.palette.border.default};
              &:focus { border-bottom: 1px solid  ${r?t.palette.error.default:t.palette.primary.default};}`:"border: none;"};

    ${o?n==="outlined"?"border-width: 1px":"border-width: 0 0 1px":"border-width: none"};


    &:disabled {
      pointer-events: none;
      background-color: ${t.palette.surface.light};
    }


    ${e}
    
  `}
`,X=({children:t,label:e,style:o,dataTestId:r="dropdown-select",isDisabled:n=!1,hasBorder:a=!0,hasError:f=!1,hasDeselect:$=!1,variant:b="outlined",backgroundFill:m="default"})=>{const{state:p,setState:c,isOpen:u,setIsOpen:v}=C(),w=F(),E=d=>{d.preventDefault(),v(i=>!i)},y=s.Children.count(t);s.useEffect(()=>{s.Children.toArray(t).find(i=>i.props.option.value===p.value)||c({text:"",value:""})},[t,c,p.value]),s.useEffect(()=>{if(y===1){const d=s.Children.map(t,i=>i&&i.props.option);if(d&&d[0]){const i={text:d[0].text??d[0].value,value:d[0].value};c(i)}}},[y,c,t]);const D=n||y<2;return l.jsxs(l.Fragment,{children:[l.jsxs(U,{backgroundFill:m,"data-testid":r,disabled:D,hasBorder:a,hasError:f,onClick:E,style:o,variant:b,children:[l.jsxs("div",{style:{overflow:"hidden"},children:[l.jsx(S,{color:D?"content.light":"content.default",fontStyles:"pXXSmall",children:e}),l.jsx(S,{color:D?"content.light":"content.default",fontStyles:"pSmall",style:{textOverflow:"ellipsis",overflow:"hidden"},children:p.value?p.text:"Select an option"})]}),l.jsxs("div",{children:[$&&p.value?l.jsx(O,{code:"close",color:!u&&n?w.palette.content.light:"currentColor",dataTestId:"deselect-value",onClick:()=>{c({text:"",value:""}),v(!0)},size:"medium",style:{paddingRight:"1rem"}}):null,l.jsx(O,{code:u?"expand_less":"expand_more",color:!u&&n?w.palette.content.light:"currentColor",size:"medium"})]})]}),u?l.jsx(I,{dataTestId:r,children:t}):null]})},L=({children:t,style:e,dataTestId:o})=>{const{setIsOpen:r}=C(),n=s.useRef(null);return M({ref:n,handler:()=>r(!1)}),l.jsx("div",{"data-testid":o,ref:n,style:e,children:t})},W=x.div`
  ${({theme:t,style:e})=>`
    margin: ${t.spacing.none};
    display: inline-block;
    position: relative;
    width: 100%;

    ${e}
  `}
`,g=({children:t,defaultValue:e,style:o,name:r,dataTestId:n="dropdown"})=>l.jsx(z,{defaultValue:e,name:r,children:l.jsx(W,{"data-testid":n,role:"menu",style:o,children:t})});g.Container=L;g.Detail=T;g.Select=X;g.Option=N;g.Menu=I;export{g as D};

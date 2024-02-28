import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{r as o}from"./index-4g5l5LRQ.js";import{n as u}from"./emotion-styled.browser.esm-QTPHyGVR.js";const l={state:{text:"",value:""},isOpen:!1,setState:()=>null,setIsOpen:()=>null},m=o.createContext(l),A=({children:e,defaultValue:t,name:s})=>{const[a,n]=o.useState(t??l.state),[c,i]=o.useState(l.isOpen);return o.useEffect(()=>t&&n(t),[t]),r.jsx(m.Provider,{value:{state:a,setState:n,isOpen:c,setIsOpen:i,name:s},children:e})},g=()=>{const e=o.useContext(m);if(!e)throw new Error("Dropdown compound components cannot be rendered outside the Dropdown component");return e};var p=(e=>(e.ADD="ADD",e.REMOVE="REMOVE",e))(p||{});const v=(e,t)=>{const{type:s}=t;switch(s){case p.ADD:return e.find(n=>n.value===t.payload.value)?e.map(n=>n.value===t.payload.value?t.payload:n):[...e,t.payload];case p.REMOVE:return e.filter(n=>n.value!==t.payload.value);default:return e}},d={state:[],isOpen:!1,dispatch:()=>null,setIsOpen:()=>null},x=o.createContext(d),y=({children:e,defaultValue:t,name:s})=>{const[a,n]=o.useReducer(v,d.state),[c,i]=o.useState(d.isOpen);return o.useEffect(()=>t&&t.forEach(f=>n({type:p.ADD,payload:f})),[t]),r.jsx(x.Provider,{value:{state:a,dispatch:n,isOpen:c,setIsOpen:i,name:s},children:e})},j=()=>{const e=o.useContext(x);if(!e)throw new Error("MultiSelect compound components cannot be rendered outside the MultiSelect component");return e};var D=(e=>(e.Decimal="decimal",e.Disc="disc",e.LowerAlpha="lower-alpha",e.UpperRoman="upper-roman",e.None="none",e))(D||{});const w=u.dl`
  ${({theme:e,listStyleType:t})=>`
    padding: ${e.spacing.none};
    padding-left: 10px;
    margin-left: 1em;
    list-style-type: ${t};
  `}
`,O=u.dt`
  ${({theme:e})=>e.fontStyles.pSmall};
  font-weight: 700;
  margin-bottom: 10px;
  display: list-item;
`,S=u.dd`
  margin-bottom: 10px;
  padding-left: 20px;
`,E=({children:e,dataTestId:t,listStyleType:s=D.None})=>r.jsx(w,{"data-testid":`${t?t+"-":""}description-list`,listStyleType:s,children:e});E.Term=({children:e})=>r.jsx(O,{children:e});E.Description=({children:e})=>r.jsx(S,{children:e});export{p as A,E as D,D as L,y as M,A as a,j as b,g as u};

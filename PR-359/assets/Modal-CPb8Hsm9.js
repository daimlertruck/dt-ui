import{j as i}from"./jsx-runtime-DMAvRu52.js";import{h as I,a as L}from"./Backdrop-DoWzJoVe.js";import"./index-Ch3lNOOY.js";import{P as O}from"./Portal-DcNaNmD6.js";import{r as d}from"./index-Dl6G-zuu.js";import{u as _}from"./useClickOutside-CBJSS0tk.js";import{n as u}from"./emotion-styled.browser.esm-DpDeK1WQ.js";import{I as M}from"./IconButton-9qzMwZsu.js";import"./Link-DJURaLnb.js";import"./AccordionBody.styled-CR-1yGH3.js";import"./Tooltip-l6_Yz3LM.js";import"./Avatar.styled-TZ4ZdhzH.js";import{B as H}from"./index-DECWwmT6.js";import"./Breadcrumb-DoblZ4zz.js";import"./index-DCrStp1_.js";import"./Divider.styled-Cm1mEvej.js";import"./Drawer-nqyCMibg.js";import"./EmptyState-BRvozMyi.js";import{I as P}from"./Icon-B8gBCtaI.js";import{T as R}from"./Typography-DKtU9XeT.js";import"./LabelField-DHe5Fmu1.js";import"./Message-BgWWVq49.js";import"./Spinner.styled-cFJI6BNe.js";import"./Tabs-CIhpIntP.js";import"./Tag-DarPqZ64.js";import"./index-B6Q6Ce0v.js";import"./Checkbox-DCu8g_Y2.js";import"./TextField.styled-D_btMrKR.js";import{b as B,c as D,M as N}from"./z-index-Ds5QkyqS.js";import"./Button.styled-DrlIsltv.js";import"./ProgressBar.styled-m8XzoYja.js";import"./Select-DnrygYmN.js";import"./Step-CmgG9pY9.js";import"./Radio.styled-yyYnSofk.js";import{S as W}from"./Spinner-BKzzu7Ze.js";import"./Card-BNSgpTyG.js";import"./SegmentedControl-BBDvK4Gd.js";import"./Dropdown-CP6AwwM-.js";import"./Toggle-opm0uok4.js";import"./TextArea.styled-DQv77iaI.js";import"./Form-CPmiFdJJ.js";import"./Pagination-ffyLkkT3.js";const A={columnsLength:0,setColumnsLength:()=>null,fixedColumnCount:0,fixedEndColumnCount:0,fixedColumns:[],setFixedColumns:()=>null,fixedEndColumns:[],setFixedEndColumns:()=>null,showBoxShadow:[],setShowBoxShadow:()=>null,isColumnsFixed:!1},F=d.createContext(A),z=({children:t,fixedColumnCount:o,fixedEndColumnCount:e,isColumnsFixed:r})=>{const n=d.useRef([]),s=d.useRef([]),a=d.useRef(0),l=d.useRef([]),f={get columnsLength(){return a.current},setColumnsLength:c=>{a.current=c},fixedColumnCount:o,fixedEndColumnCount:e,isColumnsFixed:r,get fixedColumns(){return n.current},setFixedColumns:c=>{n.current=c},get fixedEndColumns(){return s.current},setFixedEndColumns:c=>{s.current=c},get showBoxShadow(){return l.current},setShowBoxShadow:c=>{l.current=c}};return i.jsx(F.Provider,{value:f,children:t})},w=()=>{const t=d.useContext(F);if(!t)throw new Error("Table compound components cannot be rendered outside the Table component");return t},U=u.thead`
  ${({theme:t,hasFixedHeader:o})=>`
    display: table-header-group;
    ${o&&`
        position: sticky;
        top: 0;
        background-color: ${t.palette.surface.contrast};
        z-index: ${B};
        box-shadow: ${t.shadows.xs};
      `}
`}
`,V=({style:t,dataTestId:o,children:e,hasFixedHeader:r=!1})=>{const{setColumnsLength:n}=w();return d.Children.map(e,s=>{var a;d.isValidElement(s)&&n(((a=s.props.children)==null?void 0:a.length)??0)}),i.jsx(U,{"data-testid":o??"table-head",hasFixedHeader:r,style:t,children:e})},X=u.th`
  ${({theme:t,textAlign:o,showBoxShadow:e=!1,fixed:r=!1,fixedEnd:n=!1,fixedPosition:s=0})=>`
    text-align: ${o};
    color: ${t.palette.content.dark};
    padding: 0 ${t.spacing["2xs"]} ${t.spacing["2xs"]};
    ${t.fontStyles.button3};

    ${(r||n)&&`
        left: ${r?`${s}px`:"unset"};
        right: ${n?`${s}px`:"unset"};
        position: sticky;
        z-index: ${B};
        background: ${t.palette.primary.contrast};
        box-shadow: ${e?`${n?"-1px":"1px"} 0 0 0 ${t.palette.border.light}`:"unset"};
      `}
  `}
`,Z=({children:t,style:o,dataTestId:e,textAlign:r="left",...n})=>{const{fixedColumns:s,fixedEndColumns:a,showBoxShadow:l}=w(),p=Number(n["data-column-index"]),x=Number(n["data-fixed-position"]),b=s.indexOf(p),h=a.indexOf(p);let f={};return(s!=null&&s.length||a!=null&&a.length)&&(f={fixed:b!==-1,fixedEnd:h!==-1,showBoxShadow:l.includes(p),fixedPosition:x}),i.jsx(X,{"data-testid":e??"table-column-header",style:o,textAlign:r,...f,...n,children:t})},G=u.tbody`
  ${({theme:t})=>`
    display: table-header-group;
    
    tr:hover td {
      background-color: ${t.palette.surface.light};
    }
  `}
`,K=({children:t,style:o,dataTestId:e})=>i.jsx(G,{"data-testid":e??"table-body",style:o,children:t}),Y=(t,o,e,r)=>{const n=new IntersectionObserver(([{isIntersecting:s}])=>{r((o>0||e>0)&&!s)},{threshold:1});return t.current&&n.observe(t.current),n},q=(t,o)=>d.Children.map(t,(e,r)=>d.isValidElement(e)?o(e,r):e),J=t=>[...t.children].map(e=>e.clientWidth),Q=(t,o)=>o.slice(0,t).reduce((n,s)=>n+s,0),tt=(t,o)=>o.slice(t+1).reduce((n,s)=>n+s,0),ot=u.tr`
  ${({theme:t,selectableRow:o})=>`
    display: table-row;
    border-radius: ${t.radius.none};
    box-shadow: ${t.shadows.none};
    padding: ${t.spacing.none};
    width: 100%;
    background-color: ${t.palette.surface.contrast};
    cursor: ${o?"pointer":"auto"};
  `}
`,et=0,nt=1,st=({children:t,dataTestId:o,style:e,onClick:r})=>{const n=!!r,{columnsLength:s,setFixedColumns:a,setFixedEndColumns:l,fixedColumnCount:p,fixedEndColumnCount:x,isColumnsFixed:b,setShowBoxShadow:h}=w(),f=d.useRef(null);let c=t;if(b&&f.current){const j=[],k=[],g=[],v=J(f.current);c=q(t,(y,m)=>{let C=0;const E=m<p,T=m>=s-x;return E&&(C=Q(m,v),j.push(m),g[et]=m),T&&(C=tt(m,v),k.unshift(m),g[nt]=g[1]??m),E||T?d.cloneElement(y,{...y.props,"data-column-index":m,"data-fixed-position":C}):y}),a(j),l(k),h(g)}return i.jsx(ot,{ref:f,...r&&{onClick:r},"data-testid":o??"table-row",selectableRow:n,style:e,children:c})},rt=110,at=u.td`
  ${({theme:t,columnWidth:o,textAlign:e,showBoxShadow:r=!1,fixed:n=!1,fixedEnd:s=!1,fixedPosition:a=0})=>`
    display: table-cell;
    min-width: ${rt}px;
    word-break: break-word;
    border-top: 1px solid ${t.palette.border.light};
    padding: ${t.spacing["2xs"]};
    text-align: ${e};
    color: ${t.palette.content.default};
    ${t.fontStyles.body2};

    &:first-of-type {
      padding-top: ${t.spacing["2xs"]};
      border-bottom: none;
    }

    ${o?`
        width: ${o};
        max-width: ${o};
      `:""}

    ${(n||s)&&`
        left: ${n?`${a}px`:"unset"};
        right: ${s?`${a}px`:"unset"};
        position: sticky;
        z-index: ${D};
        background: ${t.palette.primary.contrast};
        box-shadow: ${r?`${s?"-1px":"1px"} 0 0 0 ${t.palette.border.light}`:"unset"};
      `}
  `}
`,it=({children:t,columnWidth:o,style:e,dataTestId:r,textAlign:n="left",...s})=>{const{fixedColumns:a,fixedEndColumns:l,showBoxShadow:p}=w(),x=Number(s["data-column-index"]),b=Number(s["data-fixed-position"]),h=a.indexOf(x),f=l.indexOf(x);let c={};return(a!=null&&a.length||l!=null&&l.length)&&(c={fixed:h!==-1,fixedEnd:f!==-1,showBoxShadow:p.includes(x),fixedPosition:b}),i.jsx(at,{columnWidth:o,"data-testid":r??"table-data-cell",style:e,textAlign:n,...c,...s,children:t})},dt=u.table`
  ${({isFixed:t})=>`
    table-layout: ${t?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,$=({children:t,dataTestId:o,style:e,isFixed:r=!1,fixedColumnCount:n=0,fixedEndColumnCount:s=0})=>{const a=d.useRef(null),[l,p]=d.useState(!1);return d.useEffect(()=>{const x=Y(a,n,s,p);return()=>x.disconnect()},[n,s]),i.jsx(z,{fixedColumnCount:n,fixedEndColumnCount:s,isColumnsFixed:l,children:i.jsx(dt,{"data-testid":o??"table",isFixed:r,ref:a,style:e,children:t})})};$.Head=V;$.ColumnHeader=Z;$.Body=K;$.Row=st;$.DataCell=it;const lt=u.div`
  ${({theme:t})=>`
    padding: ${t.spacing.xs};
    overflow-y: auto;

    @media only screen and (max-width: ${t.breakpoints.s}px) {
      flex: 1;
      }
    `}
`,ct=({children:t,style:o,dataTestId:e})=>i.jsx(lt,{"data-testid":e,style:o,children:t}),ut=u.div`
  display: flex;
  justify-content: end;
  align-items: center;
  border-radius: inherit;

  ${({theme:t,hasBackgroundColor:o,hasBorder:e})=>`
      background-color: ${o?t.palette.surface.light:"transparent"};
      border-top: ${e?`1px solid ${t.palette.border.default}`:"none"};
      gap: ${t.spacing["3xs"]};
      padding: ${t.spacing.xs};
      @media only screen and (max-width: ${t.breakpoints.s}px) {
        flex-direction: column-reverse;
      }
  `}
`,pt=({children:t,style:o,hasBackgroundColor:e=!1,hasBorder:r=!1,dataTestId:n})=>i.jsx(ut,{"data-testid":n,hasBackgroundColor:e,hasBorder:r,style:o,children:t}),xt=u.div`
  display: flex;
  flex-direction: column;
  border-radius: inherit;

  ${({theme:t,hasBackgroundColor:o,hasBorder:e})=>`
    padding: ${t.spacing.xs};
    background-color: ${o?t.palette.surface.light:"transparent"};
    border-bottom: ${e?`1px solid ${t.palette.border.default}`:"none"};
    gap: ${t.spacing["4xs"]};

    @media only screen and (min-width: ${t.breakpoints.s}px) {
      padding-top: ${t.spacing.s};
    }

    button {
      color: ${t.palette.content.default};
    }

    svg {
      cursor: pointer;
    }
  `}
`,ft=({dataTestId:t,handleClose:o,hasBackgroundColor:e=!1,hasBorder:r=!1,title:n,subTitle:s,style:a})=>i.jsxs(xt,{"data-testid":t??"modal-header",hasBackgroundColor:e,hasBorder:r,style:a,children:[i.jsxs(H,{style:{justifyContent:"space-between",flexDirection:"row"},children:[i.jsx(R,{color:"content.dark",element:"h4",fontStyles:"h4",children:n}),i.jsx(M,{color:"accent",dataTestId:"close-button",onClick:o,children:i.jsx(P,{code:"close",size:"large"})})]}),s?i.jsx(R,{color:"content.default",element:"h5",fontStyles:"body1",children:s}):null]}),mt=u.div`
  ${({theme:t})=>`
      position: absolute;
      top: 0;
      left: 0;
      right: 0;
      bottom: 0;
      background-color: ${I(t.palette.surface.light,.8)};
      display: flex;
      align-items: center;
      justify-content: center;
  `}
`,bt=()=>i.jsx(mt,{children:i.jsx(W,{size:"extra-large"})}),ht=u.div`
  position: fixed;
  z-index: ${N};
  left: 50%;
  top: 50%;
  transform: translate(-50%, -50%);
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: space-between;

  flex-direction: column;
  ${({theme:t})=>`
      background-color: ${t.palette.surface.contrast};
      border-radius: ${t.shape.modal};
      box-shadow: ${t.shadows.s};

      @media only screen and (min-width: ${t.breakpoints.s}px)  {
        min-width: 30%;
        height: auto;
        width: auto;
        justify-content: normal;
      }

      @media only screen and (min-width: ${t.breakpoints.s}px) and (max-width: ${t.breakpoints.m}px) {
        max-width: 80%;
      }

      @media only screen and (min-width: ${t.breakpoints.m}px) and (max-width: ${t.breakpoints.xl}px) {
        max-width: 60%;
      }

      @media only screen and (min-width: ${t.breakpoints.xl}px) {
        max-width: 50%;
      }
  `}
`,ao=d.forwardRef(({children:t,dataTestId:o,isOpen:e,type:r},n)=>i.jsx(O,{isOpen:e,children:i.jsx(L,{dataTestId:o,isOpen:e,ref:n,type:r,children:t})})),S=({children:t,handleClose:o,hasClickOutside:e=!1,isLoading:r=!1,style:n,dataTestId:s})=>{const a=d.useRef(null);return _({ref:e&&!r?a:{},handler:o}),i.jsxs(ht,{"data-testid":s,ref:a,style:n,children:[r?i.jsx(bt,{}):null,t]})};S.Header=ft;S.Content=ct;S.Footer=pt;export{S as M,ao as O,$ as T};

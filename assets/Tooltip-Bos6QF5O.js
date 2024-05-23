import{j as s}from"./jsx-runtime-CKrituN3.js";import{r as a}from"./index-CBqU2yxZ.js";import{n as w}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./index-eD4KSPJ7.js";import{P as C}from"./Portal-U_0UEmB3.js";import"./index-BtM5VmRH.js";import{T as R}from"./z-index-C-tE6wDk.js";const x={containerRectProperties:{top:-1,left:-1,height:-1,width:-1},isVisible:!1,setContainerRectProperties:()=>null,setIsVisible:()=>null},u=a.createContext(x),O=({children:t})=>{const[o,e]=a.useState(x.containerRectProperties),[r,i]=a.useState(x.isVisible);return s.jsx(u.Provider,{value:{containerRectProperties:o,setContainerRectProperties:e,isVisible:r,setIsVisible:i},children:t})},f=()=>{const t=a.useContext(u);if(!t)throw new Error("Tooltip compound components cannot be rendered outside the Tooltip component");return t},y=w.div`
  position: relative;
  display: inline-flex;
  width: fit-content;
`,E=({children:t,style:o,dataTestId:e,hideDelay:r=0})=>{const{setIsVisible:i,setContainerRectProperties:c}=f();let l;const d=m=>{clearTimeout(l);const{top:g,left:h,height:$,width:P}=m.currentTarget.getBoundingClientRect();c({top:g,left:h,height:$,width:P}),i(!0)},b=()=>{l=setTimeout(()=>{i(!1)},r)};return s.jsx(y,{"data-testid":e??"tooltip-container",onMouseEnter:d,onMouseLeave:b,style:o,children:t})},n={Top:"top",Bottom:"bottom",Right:"right",Left:"left"},T={Full:"full",Opacity:"opacity"},S=4,j=8,p=S+j,k={top:-1,left:-1},v=t=>{const{containerRectProperties:{top:o,left:e,height:r,width:i}}=f();return typeof window>"u"?k:{[n.Bottom]:{top:o+r+p+window.scrollY,left:e+i/2+window.scrollX},[n.Top]:{top:o-p+window.scrollY,left:e+i/2+window.scrollX},[n.Left]:{top:o+r/2+window.scrollY,left:e-p+window.scrollX},[n.Right]:{top:o+r/2+window.scrollY,left:e+i+p+window.scrollX}}[t]},F=w.div`
  ${({theme:t,direction:o,top:e,left:r,background:i})=>`
    ${t.fontStyles.body3};
    width: max-content;
    max-width: calc(200px + 2 * ${t.spacing["4xs"]});
    overflow-wrap: break-word;
    padding: ${t.spacing["4xs"]};
    background-color: ${t.palette.base.dark};
    box-shadow: ${t.shadows.s};
    color: ${t.palette.content.contrast};
    border-radius: ${t.shape.tooltip};
    text-align: left;
    white-space: initial;
    position: absolute;
    z-index: ${R}; 
    top: ${e}px;
    left: ${r}px;
    
    &:after {
      content: "";
      position: absolute;
      border: 0px solid transparent;
    }
    ${i===T.Opacity&&"opacity: 80%"};
    ${o===n.Bottom&&`
      transform: translateX(-50%);
        &:after {
          bottom: 100%;
          left: 50%;
          margin-left: -7px;
          border-width: 0px 7px 8px 7px;
          border-bottom-color: ${t.palette.base.dark};
        }
      `};
    ${o===n.Top&&`
        transform: translate(-50%, -100%);
        &:after {
          top: 100%;
          left: 50%;
          margin-left: -7px;
          border-width: 8px 7px 0px 7px;
          border-top-color: ${t.palette.base.dark};
        }
      `};
    ${o===n.Right&&`
        transform: translateY(-50%);
        &:after {
          top: 50%;
          right: 100%;
          margin-top: -7px;
          border-width: 7px 8px 7px 0px;
          border-right-color: ${t.palette.base.dark};
        }
      `};
    ${o===n.Left&&`
        transform: translate(-100%, -50%);
        
        &:after {
          top: 50%;
          left: 100%;
          margin-top: -7px;
          border-width: 7px 0px 7px 8px;
          border-left-color: ${t.palette.base.dark};
        }
      `}
  `}
`,I=({children:t,direction:o=n.Top,background:e=T.Full,style:r,dataTestId:i})=>{const{isVisible:c}=f(),{top:l,left:d}=v(o);return t?s.jsx(C,{isOpen:c,children:s.jsx(F,{background:e,"data-testid":i??"tooltip-content",direction:o,left:d,role:"tooltip",style:r,top:l,children:t})}):null},L=({children:t,style:o,dataTestId:e,hideDelay:r})=>s.jsx(O,{children:s.jsx(E,{dataTestId:e,hideDelay:r,style:o,children:t})});L.Content=I;export{n as O,L as T,T as a};

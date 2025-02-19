import{j as f}from"./jsx-runtime-CKrituN3.js";import{r as d}from"./index-CBqU2yxZ.js";import{n as w}from"./emotion-styled.browser.esm-B1le5_Hy.js";import"./index-CmU8lkWL.js";import{P as C}from"./Portal-U_0UEmB3.js";import"./index-BtM5VmRH.js";import{T as M}from"./z-index-Ds5QkyqS.js";const x={containerRectProperties:{top:-1,left:-1,height:-1,width:-1},isVisible:!1,setContainerRectProperties:()=>null,setIsVisible:()=>null},T=d.createContext(x),P=({children:t})=>{const[o,n]=d.useState(x.containerRectProperties),[i,s]=d.useState(x.isVisible);return f.jsx(T.Provider,{value:{containerRectProperties:o,setContainerRectProperties:n,isVisible:i,setIsVisible:s},children:t})},m=()=>{const t=d.useContext(T);if(!t)throw new Error("Tooltip compound components cannot be rendered outside the Tooltip component");return t},O=w.div`
  position: relative;
  display: inline-flex;
  width: fit-content;
`,L=({children:t,style:o,dataTestId:n,hideDelay:i=0})=>{const{setIsVisible:s,setContainerRectProperties:c}=m();let e;const r=a=>{clearTimeout(e);const{top:p,left:b,height:$,width:y}=a.currentTarget.getBoundingClientRect();c({top:p,left:b,height:$,width:y}),s(!0)},h=()=>{e=setTimeout(()=>{s(!1)},i)};return f.jsx(O,{"data-testid":n??"tooltip-container",onMouseEnter:r,onMouseLeave:h,style:o,children:t})},l={Top:"top",Bottom:"bottom",Right:"right",Left:"left"},g={Full:"full",Opacity:"opacity"},E=4,S=8,u=E+S,R={top:-1,left:-1},j=(t,o)=>{const{containerRectProperties:{top:n,left:i,height:s,width:c}}=m();if(typeof window>"u")return R;const e=window.scrollX,r=window.scrollY;return{[l.Top]:(()=>{const a=n-u+r,p=i+c/2+e;return{top:Math.max(a,r+o.height),left:Math.min(e+window.innerWidth-o.width/2,Math.max(e+o.width/2,p))}})(),[l.Bottom]:(()=>{const a=n+s+u+r,p=i+c/2+e;return{top:Math.min(a,r+window.innerHeight-o.height),left:Math.min(e+window.innerWidth-o.width/2,Math.max(e+o.width/2,p))}})(),[l.Left]:(()=>{const a=n+s/2+r,p=i-u+e;return{top:Math.min(r+window.innerHeight-o.height/2,Math.max(r+o.height/2,a)),left:Math.max(p,e+o.width)}})(),[l.Right]:(()=>{const a=n+s/2+r,p=i+c+u+e;return{top:Math.min(r+window.innerHeight-o.height/2,Math.max(r+o.height/2,a)),left:Math.min(p,e+window.innerWidth-o.width)}})()}[t]},k=w.div`
  ${({theme:t,direction:o,top:n,left:i,background:s})=>`
    ${t.fontStyles.body3};
    width: max-content;
    max-width: calc(200px + 2 * ${t.spacing["4xs"]});
    overflow-wrap: break-word;
    padding: ${t.spacing["4xs"]};
    background-color: ${t.palette.secondary.dark};
    box-shadow: ${t.shadows.s};
    color: ${t.palette.content.contrast};
    border-radius: ${t.shape.tooltip};
    text-align: left;
    white-space: initial;
    position: absolute;
    z-index: ${M}; 
    top: ${n}px;
    left: ${i}px;
    
    &:after {
      content: "";
      position: absolute;
      border: 0px solid transparent;
    }
    ${s===g.Opacity&&"opacity: 80%"};
    ${o===l.Bottom&&`
      transform: translateX(-50%);
        &:after {
          bottom: 100%;
          left: 50%;
          margin-left: -7px;
          border-width: 0px 7px 8px 7px;
          border-bottom-color: ${t.palette.secondary.dark};
        }
      `};
    ${o===l.Top&&`
        transform: translate(-50%, -100%);
        &:after {
          top: 100%;
          left: 50%;
          margin-left: -7px;
          border-width: 8px 7px 0px 7px;
          border-top-color: ${t.palette.secondary.dark};
        }
      `};
    ${o===l.Right&&`
        transform: translateY(-50%);
        &:after {
          top: 50%;
          right: 100%;
          margin-top: -7px;
          border-width: 7px 8px 7px 0px;
          border-right-color: ${t.palette.secondary.dark};
        }
      `};
    ${o===l.Left&&`
        transform: translate(-100%, -50%);
        
        &:after {
          top: 50%;
          left: 100%;
          margin-top: -7px;
          border-width: 7px 0px 7px 8px;
          border-left-color: ${t.palette.secondary.dark};
        }
      `}
  `}
`,v=({children:t,direction:o=l.Top,background:n=g.Full,style:i,dataTestId:s})=>{const{isVisible:c}=m(),e=d.useRef(null),[r,h]=d.useState(new DOMRect(0,0,0,0));d.useLayoutEffect(()=>{e.current&&h(e.current.getBoundingClientRect())},[c,t]);const a=j(o,r);return t?f.jsx(C,{isOpen:c,children:f.jsx(k,{background:n,"data-testid":s??"tooltip-content",direction:o,left:a.left,ref:e,role:"tooltip",style:i,top:a.top,children:t})}):null},F=({children:t,style:o,dataTestId:n,hideDelay:i})=>f.jsx(P,{children:f.jsx(L,{dataTestId:n,hideDelay:i,style:o,children:t})});F.Content=v;export{l as O,F as T,g as a};

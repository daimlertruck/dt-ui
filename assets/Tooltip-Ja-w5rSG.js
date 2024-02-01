import{j as s}from"./jsx-runtime-vNq4Oc-g.js";import{g as d,T as $}from"./TooltipProvider-3aowIJjA.js";import{n as f}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import{P as h}from"./Portal-EY94Zi_-.js";import{a as y}from"./z-index-zwCKGdcf.js";const O=f.div`
  position: relative;
  display: inline-flex;
  width: fit-content;
`,C=({children:o,style:t,dataTestId:r,hideDelay:i=0})=>{const{setIsVisible:e,setContainerRectProperties:a}=d();let l;const c=T=>{clearTimeout(l);const{top:g,left:u,height:b,width:m}=T.currentTarget.getBoundingClientRect();a({top:g,left:u,height:b,width:m}),e(!0)},w=()=>{l=setTimeout(()=>{e(!1)},i)};return s.jsx(O,{"data-testid":r??"tooltip-container",onMouseEnter:c,onMouseLeave:w,style:t,children:o})},n={Top:"top",Bottom:"bottom",Right:"right",Left:"left"},x={Full:"full",Opacity:"opacity"},P=4,R=8,p=P+R,_={top:-1,left:-1},j=o=>{const{containerRectProperties:{top:t,left:r,height:i,width:e}}=d();return typeof window>"u"?_:{[n.Bottom]:{top:t+i+p+window.scrollY,left:r+e/2+window.scrollX},[n.Top]:{top:t-p+window.scrollY,left:r+e/2+window.scrollX},[n.Left]:{top:t+i/2+window.scrollY,left:r-p+window.scrollX},[n.Right]:{top:t+i/2+window.scrollY,left:r+e+p+window.scrollX}}[o]},F=f.div`
  ${({theme:o,direction:t,top:r,left:i,background:e})=>`
    ${o.fontStyles.body3};
    width: max-content;
    max-width: calc(200px + 2 * ${o.spacing["4xs"]});
    overflow-wrap: break-word;
    padding: ${o.spacing["4xs"]};
    background-color: ${o.colors.grey_90};
    box-shadow: ${o.shadows.s};
    color: ${o.colors.white};
    border-radius: ${o.spacing["5xs"]};
    text-align: left;
    white-space: initial;
    position: absolute;
    z-index: ${y}; 
    top: ${r}px;
    left: ${i}px;
    
    &:after {
      content: "";
      position: absolute;
      border: 0px solid transparent;
    }

    ${e===x.Opacity&&"opacity: 80%"};

    ${t===n.Bottom&&`
      transform: translateX(-50%);

        &:after {
          bottom: 100%;
          left: 50%;
          margin-left: -7px;
          border-width: 0px 7px 8px 7px;
          border-bottom-color: ${o.colors.grey_90};
        }
      `};

    ${t===n.Top&&`
        transform: translate(-50%, -100%);

        &:after {
          top: 100%;
          left: 50%;
          margin-left: -7px;
          border-width: 8px 7px 0px 7px;
          border-top-color: ${o.colors.grey_90};
        }
      `};

    ${t===n.Right&&`
        transform: translateY(-50%);

        &:after {
          top: 50%;
          right: 100%;
          margin-top: -7px;
          border-width: 7px 8px 7px 0px;
          border-right-color: ${o.colors.grey_90};
        }
      `};

    ${t===n.Left&&`
        transform: translate(-100%, -50%);
        
        &:after {
          top: 50%;
          left: 100%;
          margin-top: -7px;
          border-width: 7px 0px 7px 8px;
          border-left-color: ${o.colors.grey_90};
        }
      `}
  `}
`,S=({children:o,direction:t=n.Top,background:r=x.Full,style:i,dataTestId:e})=>{const{isVisible:a}=d(),{top:l,left:c}=j(t);return o?s.jsx(h,{isOpen:a,children:s.jsx(F,{background:r,"data-testid":e??"tooltip-content",direction:t,left:c,role:"tooltip",style:i,top:l,children:o})}):null},v=({children:o,style:t,dataTestId:r,hideDelay:i})=>s.jsx($,{children:s.jsx(C,{dataTestId:r,hideDelay:i,style:t,children:o})});v.Content=S;export{n as O,v as T,x as a,S as b};

import{j as s}from"./jsx-runtime-vNq4Oc-g.js";import{h as c,T as $}from"./typography-x6m-R7VO.js";import{n as f}from"./emotion-styled.browser.esm-Scfyu_ZY.js";import{P as h}from"./Portal-EY94Zi_-.js";import{a as O}from"./z-index-zwCKGdcf.js";const y=f.div`
  position: relative;
  display: inline-flex;
  width: fit-content;
`,C=({children:t,style:o,dataTestId:e,hideDelay:r=0})=>{const{setIsVisible:i,setContainerRectProperties:a}=c();let l;const d=T=>{clearTimeout(l);const{top:b,left:u,height:g,width:m}=T.currentTarget.getBoundingClientRect();a({top:b,left:u,height:g,width:m}),i(!0)},w=()=>{l=setTimeout(()=>{i(!1)},r)};return s.jsx(y,{"data-testid":e??"tooltip-container",onMouseEnter:d,onMouseLeave:w,style:o,children:t})},n={Top:"top",Bottom:"bottom",Right:"right",Left:"left"},x={Full:"full",Opacity:"opacity"},P=4,R=8,p=P+R,k={top:-1,left:-1},j=t=>{const{containerRectProperties:{top:o,left:e,height:r,width:i}}=c();return typeof window>"u"?k:{[n.Bottom]:{top:o+r+p+window.scrollY,left:e+i/2+window.scrollX},[n.Top]:{top:o-p+window.scrollY,left:e+i/2+window.scrollX},[n.Left]:{top:o+r/2+window.scrollY,left:e-p+window.scrollX},[n.Right]:{top:o+r/2+window.scrollY,left:e+i+p+window.scrollX}}[t]},F=f.div`
  ${({theme:t,direction:o,top:e,left:r,background:i})=>`
    ${t.fontStyles.body3};
    width: max-content;
    max-width: calc(200px + 2 * ${t.spacing["4xs"]});
    overflow-wrap: break-word;
    padding: ${t.spacing["4xs"]};
    background-color: ${t.palette.base.dark};
    box-shadow: ${t.shadows.s};
    color: ${t.palette.content.contrast};
    border-radius: ${t.spacing["5xs"]};
    text-align: left;
    white-space: initial;
    position: absolute;
    z-index: ${O}; 
    top: ${e}px;
    left: ${r}px;
    
    &:after {
      content: "";
      position: absolute;
      border: 0px solid transparent;
    }

    ${i===x.Opacity&&"opacity: 80%"};

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
`,S=({children:t,direction:o=n.Top,background:e=x.Full,style:r,dataTestId:i})=>{const{isVisible:a}=c(),{top:l,left:d}=j(o);return t?s.jsx(h,{isOpen:a,children:s.jsx(F,{background:e,"data-testid":i??"tooltip-content",direction:o,left:d,role:"tooltip",style:r,top:l,children:t})}):null},v=({children:t,style:o,dataTestId:e,hideDelay:r})=>s.jsx($,{children:s.jsx(C,{dataTestId:e,hideDelay:r,style:o,children:t})});v.Content=S;export{n as O,v as T,x as a,S as b};

import{j as u}from"./jsx-runtime-CB_V9I5Y.js";import{C as B}from"./Close-BgpoXZkN.js";import{k as N}from"./index-NlDCoUS8.js";import{s as v}from"./emotion-styled.browser.esm-DuL_gwYN.js";import{r as d}from"./index-CTjT7uj6.js";const F=t=>u.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6ZM17.508 6.696L9.6 14.604L6.492 11.508L4.8 13.2L9.6 18L19.2 8.4L17.508 6.696Z",fill:"currentColor"})}),R=t=>u.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M11.988 0C5.364 0 0 5.376 0 12C0 18.624 5.364 24 11.988 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 11.988 0ZM12 21.6C6.696 21.6 2.4 17.304 2.4 12C2.4 6.696 6.696 2.4 12 2.4C17.304 2.4 21.6 6.696 21.6 12C21.6 17.304 17.304 21.6 12 21.6ZM10.8 15.6H13.2V18H10.8V15.6ZM10.8 6H13.2V13.2H10.8V6Z",fill:"currentColor"})}),_=t=>u.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"})}),P=t=>u.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M12 6.49L19.53 19.5H4.47L12 6.49ZM12 2.5L1 21.5H23L12 2.5ZM13 16.5H11V18.5H13V16.5ZM13 10.5H11V14.5H13V10.5Z"})});var W=(t=>(t.TopLeft="top-left",t.TopCenter="top-center",t.TopRight="top-right",t.BottomLeft="bottom-left",t.BottomCenter="bottom-center",t.BottomRight="bottom-right",t))(W||{}),j=(t=>(t.Success="success",t.Error="error",t.Info="informative",t.Warning="warning",t))(j||{});const U=v.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  ${({theme:t,type:e})=>`
    background-color: ${t.palette[e].default};  
    color: ${t.palette.content.contrast}
`}
`,q=N`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Y=v.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 360px;
  animation: ${q} 0.75s ease-in;
  transition: all 0.75s ease-in-out;
  overflow: hidden;
  ${({theme:t,isVisible:e})=>`
    background-color: ${t.palette.surface.contrast};  
    opacity: ${e?1:0};
    color: ${t.palette.content.default};
    border-radius: ${t.shape.toast};
    box-shadow: ${t.shadows.s};
  `}
`,J=v.div`
  ${({theme:t})=>`
    height: 100%;
    flex-grow: 1;
    padding: ${t.spacing["2xs"]} ${t.spacing["2xs"]};
  `}
`,K=v.div`
  ${({theme:t})=>`
      ${t.fontStyles.h6};
      color: ${t.palette.content.dark};
      margin-bottom: ${t.spacing["5xs"]};
      text-transform: capitalize;
  `}
`,X=v.div`
  ${({theme:t})=>`
    ${t.fontStyles.body2};
    color: ${t.palette.content.default};
    overflow: hidden;
    word-break: break-word;
    hyphens: auto;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  `}
`,G=v.button`
  ${({theme:t})=>`
    color: ${t.palette.content.default};
    border: 0;
    cursor: pointer;
    background: transparent;
    align-self: flex-start;
    font-size: 0;
    line-height: 0;
  
    &:hover {
      background-color: ${t.palette.surface.contrast};
    }
  `}
`,Q=v.div`
  ${({theme:t,hasCloseButton:e})=>`
    display: grid;
    ${e?"grid-template-columns: auto 24px;":"grid-template-rows: auto auto;"}
    column-gap: ${t.spacing["2xs"]};
  `}
`,tt=v.div`
  ${({theme:t,hasChildren:e})=>`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: ${e?t.spacing["5xs"]:0};
  `}
`,et={[j.Success]:F,[j.Error]:R,[j.Info]:_,[j.Warning]:P},Kt=({children:t,id:e,dataTestId:o,title:i,message:n,onClose:r,type:s,isVisible:a=!0,dismissible:l=!0})=>{const c=et[s],p=o??`toast-${e}`;return u.jsxs(Y,{"data-testid":p,isVisible:a,type:s,children:[u.jsx(U,{type:s,children:u.jsx(c,{height:20,width:20})}),u.jsxs(J,{children:[u.jsxs(Q,{hasCloseButton:l,children:[u.jsx(K,{children:i}),l?u.jsx(G,{onClick:r,children:u.jsx(B,{})}):null,u.jsx(X,{children:n})]}),u.jsx(tt,{hasChildren:!!t,children:t})]})]},e)};let rt={data:""},ot=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||rt,at=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,st=/\/\*[^]*?\*\/|  +/g,L=/\n+/g,b=(t,e)=>{let o="",i="",n="";for(let r in t){let s=t[r];r[0]=="@"?r[1]=="i"?o=r+" "+s+";":i+=r[1]=="f"?b(s,r):r+"{"+b(s,r[1]=="k"?"":e)+"}":typeof s=="object"?i+=b(s,e?e.replace(/([^,])+/g,a=>r.replace(/([^,]*:\S+\([^)]*\))|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,a):a?a+" "+l:l)):r):s!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),n+=b.p?b.p(r,s):r+":"+s+";")}return o+(e&&n?e+"{"+n+"}":n)+i},y={},T=t=>{if(typeof t=="object"){let e="";for(let o in t)e+=o+T(t[o]);return e}return t},it=(t,e,o,i,n)=>{let r=T(t),s=y[r]||(y[r]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(r));if(!y[s]){let l=r!==t?t:(c=>{let p,g,m=[{}];for(;p=at.exec(c.replace(st,""));)p[4]?m.shift():p[3]?(g=p[3].replace(L," ").trim(),m.unshift(m[0][g]=m[0][g]||{})):m[0][p[1]]=p[2].replace(L," ").trim();return m[0]})(t);y[s]=b(n?{["@keyframes "+s]:l}:l,o?"":"."+s)}let a=o&&y.g?y.g:null;return o&&(y.g=y[s]),((l,c,p,g)=>{g?c.data=c.data.replace(g,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(y[s],e,i,a),s},nt=(t,e,o)=>t.reduce((i,n,r)=>{let s=e[r];if(s&&s.call){let a=s(o),l=a&&a.props&&a.props.className||/^go/.test(a)&&a;s=l?"."+l:a&&typeof a=="object"?a.props?"":b(a,""):a===!1?"":a}return i+n+(s??"")},"");function S(t){let e=this||{},o=t.call?t(e.p):t;return it(o.unshift?o.raw?nt(o,[].slice.call(arguments,1),e.p):o.reduce((i,n)=>Object.assign(i,n&&n.call?n(e.p):n),{}):o,ot(e.target),e.g,e.o,e.k)}let V,Z,D;S.bind({g:1});let x=S.bind({k:1});function lt(t,e,o,i){b.p=e,V=t,Z=o,D=i}function w(t,e){let o=this||{};return function(){let i=arguments;function n(r,s){let a=Object.assign({},r),l=a.className||n.className;o.p=Object.assign({theme:Z&&Z()},a),o.o=/ *go\d+/.test(l),a.className=S.apply(o,i)+(l?" "+l:"");let c=t;return t[0]&&(c=a.as||t,delete a.as),D&&c[0]&&D(a),V(c,a)}return e?e(n):n}}var ct=t=>typeof t=="function",H=(t,e)=>ct(t)?t(e):t,dt=(()=>{let t=0;return()=>(++t).toString()})(),z=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),pt=20,A=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,pt)};case 1:return{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:o}=e;return A(t,{type:t.toasts.find(r=>r.id===o.id)?1:0,toast:o});case 3:let{toastId:i}=e;return{...t,toasts:t.toasts.map(r=>r.id===i||i===void 0?{...r,dismissed:!0,visible:!1}:r)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let n=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+n}))}}},O=[],C={toasts:[],pausedAt:void 0},$=t=>{C=A(C,t),O.forEach(e=>{e(C)})},ut={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},ft=(t={})=>{let[e,o]=d.useState(C),i=d.useRef(C);d.useEffect(()=>(i.current!==C&&o(C),O.push(o),()=>{let r=O.indexOf(o);r>-1&&O.splice(r,1)}),[]);let n=e.toasts.map(r=>{var s,a,l;return{...t,...t[r.type],...r,removeDelay:r.removeDelay||((s=t[r.type])==null?void 0:s.removeDelay)||(t==null?void 0:t.removeDelay),duration:r.duration||((a=t[r.type])==null?void 0:a.duration)||(t==null?void 0:t.duration)||ut[r.type],style:{...t.style,...(l=t[r.type])==null?void 0:l.style,...r.style}}});return{...e,toasts:n}},mt=(t,e="blank",o)=>({createdAt:Date.now(),visible:!0,dismissed:!1,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...o,id:(o==null?void 0:o.id)||dt()}),E=t=>(e,o)=>{let i=mt(e,t,o);return $({type:2,toast:i}),i.id},f=(t,e)=>E("blank")(t,e);f.error=E("error");f.success=E("success");f.loading=E("loading");f.custom=E("custom");f.dismiss=t=>{$({type:3,toastId:t})};f.remove=t=>$({type:4,toastId:t});f.promise=(t,e,o)=>{let i=f.loading(e.loading,{...o,...o==null?void 0:o.loading});return typeof t=="function"&&(t=t()),t.then(n=>{let r=e.success?H(e.success,n):void 0;return r?f.success(r,{id:i,...o,...o==null?void 0:o.success}):f.dismiss(i),n}).catch(n=>{let r=e.error?H(e.error,n):void 0;r?f.error(r,{id:i,...o,...o==null?void 0:o.error}):f.dismiss(i)}),t};var gt=(t,e)=>{$({type:1,toast:{id:t,height:e}})},ht=()=>{$({type:5,time:Date.now()})},k=new Map,yt=1e3,xt=(t,e=yt)=>{if(k.has(t))return;let o=setTimeout(()=>{k.delete(t),$({type:4,toastId:t})},e);k.set(t,o)},bt=t=>{let{toasts:e,pausedAt:o}=ft(t);d.useEffect(()=>{if(o)return;let r=Date.now(),s=e.map(a=>{if(a.duration===1/0)return;let l=(a.duration||0)+a.pauseDuration-(r-a.createdAt);if(l<0){a.visible&&f.dismiss(a.id);return}return setTimeout(()=>f.dismiss(a.id),l)});return()=>{s.forEach(a=>a&&clearTimeout(a))}},[e,o]);let i=d.useCallback(()=>{o&&$({type:6,time:Date.now()})},[o]),n=d.useCallback((r,s)=>{let{reverseOrder:a=!1,gutter:l=8,defaultPosition:c}=s||{},p=e.filter(h=>(h.position||c)===(r.position||c)&&h.height),g=p.findIndex(h=>h.id===r.id),m=p.filter((h,I)=>I<g&&h.visible).length;return p.filter(h=>h.visible).slice(...a?[m+1]:[0,m]).reduce((h,I)=>h+(I.height||0)+l,0)},[e]);return d.useEffect(()=>{e.forEach(r=>{if(r.dismissed)xt(r.id,r.removeDelay);else{let s=k.get(r.id);s&&(clearTimeout(s),k.delete(r.id))}})},[e]),{toasts:e,handlers:{updateHeight:gt,startPause:ht,endPause:i,calculateOffset:n}}},vt=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,wt=x`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ct=x`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,$t=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${vt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${wt} 0.15s ease-out forwards;
    animation-delay: 150ms;
    position: absolute;
    border-radius: 3px;
    opacity: 0;
    background: ${t=>t.secondary||"#fff"};
    bottom: 9px;
    left: 4px;
    height: 2px;
    width: 12px;
  }

  &:before {
    animation: ${Ct} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,jt=x`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,kt=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${jt} 1s linear infinite;
`,Et=x`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,Mt=x`
0% {
	height: 0;
	width: 0;
	opacity: 0;
}
40% {
  height: 0;
	width: 6px;
	opacity: 1;
}
100% {
  opacity: 1;
  height: 10px;
}`,Ot=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Et} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${Mt} 0.2s ease-out forwards;
    opacity: 0;
    animation-delay: 200ms;
    position: absolute;
    border-right: 2px solid;
    border-bottom: 2px solid;
    border-color: ${t=>t.secondary||"#fff"};
    bottom: 6px;
    left: 6px;
    height: 10px;
    width: 6px;
  }
`,Ht=w("div")`
  position: absolute;
`,St=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,It=x`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Zt=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${It} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Dt=({toast:t})=>{let{icon:e,type:o,iconTheme:i}=t;return e!==void 0?typeof e=="string"?d.createElement(Zt,null,e):e:o==="blank"?null:d.createElement(St,null,d.createElement(kt,{...i}),o!=="loading"&&d.createElement(Ht,null,o==="error"?d.createElement($t,{...i}):d.createElement(Ot,{...i})))},Lt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Tt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,Vt="0%{opacity:0;} 100%{opacity:1;}",zt="0%{opacity:1;} 100%{opacity:0;}",At=w("div")`
  display: flex;
  align-items: center;
  background: #fff;
  color: #363636;
  line-height: 1.3;
  will-change: transform;
  box-shadow: 0 3px 10px rgba(0, 0, 0, 0.1), 0 3px 3px rgba(0, 0, 0, 0.05);
  max-width: 350px;
  pointer-events: auto;
  padding: 8px 10px;
  border-radius: 8px;
`,Bt=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Nt=(t,e)=>{let o=t.includes("top")?1:-1,[i,n]=z()?[Vt,zt]:[Lt(o),Tt(o)];return{animation:e?`${x(i)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${x(n)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ft=d.memo(({toast:t,position:e,style:o,children:i})=>{let n=t.height?Nt(t.position||e||"top-center",t.visible):{opacity:0},r=d.createElement(Dt,{toast:t}),s=d.createElement(Bt,{...t.ariaProps},H(t.message,t));return d.createElement(At,{className:t.className,style:{...n,...o,...t.style}},typeof i=="function"?i({icon:r,message:s}):d.createElement(d.Fragment,null,r,s))});lt(d.createElement);var Rt=({id:t,className:e,style:o,onHeightUpdate:i,children:n})=>{let r=d.useCallback(s=>{if(s){let a=()=>{let l=s.getBoundingClientRect().height;i(t,l)};a(),new MutationObserver(a).observe(s,{subtree:!0,childList:!0,characterData:!0})}},[t,i]);return d.createElement("div",{ref:r,className:e,style:o},n)},_t=(t,e)=>{let o=t.includes("top"),i=o?{top:0}:{bottom:0},n=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(o?1:-1)}px)`,...i,...n}},Pt=S`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,M=16,Xt=({reverseOrder:t,position:e="top-center",toastOptions:o,gutter:i,children:n,containerStyle:r,containerClassName:s})=>{let{toasts:a,handlers:l}=bt(o);return d.createElement("div",{id:"_rht_toaster",style:{position:"fixed",zIndex:9999,top:M,left:M,right:M,bottom:M,pointerEvents:"none",...r},className:s,onMouseEnter:l.startPause,onMouseLeave:l.endPause},a.map(c=>{let p=c.position||e,g=l.calculateOffset(c,{reverseOrder:t,gutter:i,defaultPosition:e}),m=_t(p,g);return d.createElement(Rt,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?Pt:"",style:m},c.type==="custom"?H(c.message,c):n?n(c):d.createElement(Ft,{toast:c,position:p}))}))};export{_ as I,Xt as O,j as T,Kt as a,W as b,f as c};

import{j as u}from"./jsx-runtime-CKrituN3.js";import{k as R}from"./index-eD4KSPJ7.js";import"./index-BtM5VmRH.js";import{u as _}from"./useMedia-BZw1ksCX.js";import{r as d}from"./index-CBqU2yxZ.js";import{C as F}from"./Close-CGHfkSk3.js";import{n as v}from"./emotion-styled.browser.esm-DhD7UCCJ.js";import{u as P}from"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";const U=t=>u.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6ZM17.508 6.696L9.6 14.604L6.492 11.508L4.8 13.2L9.6 18L19.2 8.4L17.508 6.696Z",fill:"currentColor"})}),W=t=>u.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M11.988 0C5.364 0 0 5.376 0 12C0 18.624 5.364 24 11.988 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 11.988 0ZM12 21.6C6.696 21.6 2.4 17.304 2.4 12C2.4 6.696 6.696 2.4 12 2.4C17.304 2.4 21.6 6.696 21.6 12C21.6 17.304 17.304 21.6 12 21.6ZM10.8 15.6H13.2V18H10.8V15.6ZM10.8 6H13.2V13.2H10.8V6Z",fill:"currentColor"})}),Y=t=>u.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M11 7H13V9H11V7ZM11 11H13V17H11V11ZM12 2C6.48 2 2 6.48 2 12C2 17.52 6.48 22 12 22C17.52 22 22 17.52 22 12C22 6.48 17.52 2 12 2ZM12 20C7.59 20 4 16.41 4 12C4 7.59 7.59 4 12 4C16.41 4 20 7.59 20 12C20 16.41 16.41 20 12 20Z"})}),q=t=>u.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M12 6.49L19.53 19.5H4.47L12 6.49ZM12 2.5L1 21.5H23L12 2.5ZM13 16.5H11V18.5H13V16.5ZM13 10.5H11V14.5H13V10.5Z"})});var Z=(t=>(t.TopLeft="top-left",t.TopCenter="top-center",t.TopRight="top-right",t.BottomLeft="bottom-left",t.BottomCenter="bottom-center",t.BottomRight="bottom-right",t))(Z||{}),$=(t=>(t.Success="success",t.Error="error",t.Info="informative",t.Warning="warning",t))($||{});const G=v.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  ${({theme:t,type:e})=>`
    background-color: ${t.palette[e].default};  
    color: ${t.palette[e].contrast}
`}
`,J=R`
  from { opacity: 0; }
  to   { opacity: 1; }
`,Q=v.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 360px;
  animation: ${J} 0.75s ease-in;
  transition: all 0.75s ease-in-out;
  overflow: hidden;
  ${({theme:t,isVisible:e})=>`
    background-color: ${t.palette.base.default};  
    opacity: ${e?1:0};
    color: ${t.palette.content.body};
    border-radius: ${t.shape.toast};
    box-shadow: ${t.shadows.s};
  `}
`,X=v.div`
  ${({theme:t})=>`
    height: 100%;
    flex-grow: 1;
    padding: ${t.spacing["2xs"]} ${t.spacing["2xs"]};
  `}
`,K=v.div`
  ${({theme:t})=>`
      ${t.fontStyles.h6};
      color: ${t.palette.content.heading};
      margin-bottom: ${t.spacing["5xs"]};
      text-transform: capitalize;
  `}
`,tt=v.div`
  ${({theme:t})=>`
    ${t.fontStyles.body2};
    color: ${t.palette.content.body};
    overflow: hidden;
    word-break: break-word;
    hyphens: auto;
    display: -webkit-box;
    -webkit-line-clamp: 6;
    -webkit-box-orient: vertical;
  `}
`,et=v.button`
  ${({theme:t})=>`
    color: ${t.palette.content.body};
    border: 0;
    cursor: pointer;
    background: transparent;
    align-self: flex-start;
    font-size: 0;
    line-height: 0;
  
    &:hover {
      background-color: ${t.palette.base.light};
    }
  `}
`,ot=v.div`
  ${({theme:t,hasCloseButton:e})=>`
    display: grid;
    ${e?"grid-template-columns: auto 24px;":"grid-template-rows: auto auto;"}
    column-gap: ${t.spacing["2xs"]};
  `}
`,rt=v.div`
  ${({theme:t,hasChildren:e})=>`
    display: flex;
    flex-direction: row;
    justify-content: flex-end;
    padding-top: ${e?t.spacing["5xs"]:0};
  `}
`,at={[$.Success]:U,[$.Error]:W,[$.Info]:Y,[$.Warning]:q},st=({children:t,id:e,dataTestId:o,title:s,message:a,onClose:r,type:n,isVisible:i=!0,dismissible:l=!0})=>{const c=at[n],p=o??`toast-${e}`;return u.jsxs(Q,{"data-testid":p,isVisible:i,type:n,children:[u.jsx(G,{type:n,children:u.jsx(c,{height:20,width:20})}),u.jsxs(X,{children:[u.jsxs(ot,{hasCloseButton:l,children:[u.jsx(K,{children:s}),l?u.jsx(et,{onClick:r,children:u.jsx(F,{})}):null,u.jsx(tt,{children:a})]}),u.jsx(rt,{hasChildren:!!t,children:t})]})]},e)};let it={data:""},nt=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||it,lt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ct=/\/\*[^]*?\*\/|  +/g,V=/\n+/g,y=(t,e)=>{let o="",s="",a="";for(let r in t){let n=t[r];r[0]=="@"?r[1]=="i"?o=r+" "+n+";":s+=r[1]=="f"?y(n,r):r+"{"+y(n,r[1]=="k"?"":e)+"}":typeof n=="object"?s+=y(n,e?e.replace(/([^,])+/g,i=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=y.p?y.p(r,n):r+":"+n+";")}return o+(e&&a?e+"{"+a+"}":a)+s},x={},D=t=>{if(typeof t=="object"){let e="";for(let o in t)e+=o+D(t[o]);return e}return t},dt=(t,e,o,s,a)=>{let r=D(t),n=x[r]||(x[r]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(r));if(!x[n]){let l=r!==t?t:(c=>{let p,g,f=[{}];for(;p=lt.exec(c.replace(ct,""));)p[4]?f.shift():p[3]?(g=p[3].replace(V," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][p[1]]=p[2].replace(V," ").trim();return f[0]})(t);x[n]=y(a?{["@keyframes "+n]:l}:l,o?"":"."+n)}let i=o&&x.g?x.g:null;return o&&(x.g=x[n]),((l,c,p,g)=>{g?c.data=c.data.replace(g,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(x[n],e,s,i),n},pt=(t,e,o)=>t.reduce((s,a,r)=>{let n=e[r];if(n&&n.call){let i=n(o),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":y(i,""):i===!1?"":i}return s+a+(n??"")},"");function O(t){let e=this||{},o=t.call?t(e.p):t;return dt(o.unshift?o.raw?pt(o,[].slice.call(arguments,1),e.p):o.reduce((s,a)=>Object.assign(s,a&&a.call?a(e.p):a),{}):o,nt(e.target),e.g,e.o,e.k)}let N,H,A;O.bind({g:1});let b=O.bind({k:1});function ut(t,e,o,s){y.p=e,N=t,H=o,A=s}function w(t,e){let o=this||{};return function(){let s=arguments;function a(r,n){let i=Object.assign({},r),l=i.className||a.className;o.p=Object.assign({theme:H&&H()},i),o.o=/ *go\d+/.test(l),i.className=O.apply(o,s)+(l?" "+l:""),e&&(i.ref=n);let c=t;return t[0]&&(c=i.as||t,delete i.as),A&&c[0]&&A(i),N(c,i)}return e?e(a):a}}var mt=t=>typeof t=="function",T=(t,e)=>mt(t)?t(e):t,ft=(()=>{let t=0;return()=>(++t).toString()})(),z=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),gt=20,k=new Map,ht=1e3,B=t=>{if(k.has(t))return;let e=setTimeout(()=>{k.delete(t),C({type:4,toastId:t})},ht);k.set(t,e)},xt=t=>{let e=k.get(t);e&&clearTimeout(e)},L=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,gt)};case 1:return e.toast.id&&xt(e.toast.id),{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:o}=e;return t.toasts.find(r=>r.id===o.id)?L(t,{type:1,toast:o}):L(t,{type:0,toast:o});case 3:let{toastId:s}=e;return s?B(s):t.toasts.forEach(r=>{B(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===s||s===void 0?{...r,visible:!1}:r)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let a=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+a}))}}},I=[],M={toasts:[],pausedAt:void 0},C=t=>{M=L(M,t),I.forEach(e=>{e(M)})},bt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},yt=(t={})=>{let[e,o]=d.useState(M);d.useEffect(()=>(I.push(o),()=>{let a=I.indexOf(o);a>-1&&I.splice(a,1)}),[e]);let s=e.toasts.map(a=>{var r,n;return{...t,...t[a.type],...a,duration:a.duration||((r=t[a.type])==null?void 0:r.duration)||(t==null?void 0:t.duration)||bt[a.type],style:{...t.style,...(n=t[a.type])==null?void 0:n.style,...a.style}}});return{...e,toasts:s}},vt=(t,e="blank",o)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...o,id:(o==null?void 0:o.id)||ft()}),j=t=>(e,o)=>{let s=vt(e,t,o);return C({type:2,toast:s}),s.id},m=(t,e)=>j("blank")(t,e);m.error=j("error");m.success=j("success");m.loading=j("loading");m.custom=j("custom");m.dismiss=t=>{C({type:3,toastId:t})};m.remove=t=>C({type:4,toastId:t});m.promise=(t,e,o)=>{let s=m.loading(e.loading,{...o,...o==null?void 0:o.loading});return t.then(a=>(m.success(T(e.success,a),{id:s,...o,...o==null?void 0:o.success}),a)).catch(a=>{m.error(T(e.error,a),{id:s,...o,...o==null?void 0:o.error})}),t};var wt=(t,e)=>{C({type:1,toast:{id:t,height:e}})},Ct=()=>{C({type:5,time:Date.now()})},$t=t=>{let{toasts:e,pausedAt:o}=yt(t);d.useEffect(()=>{if(o)return;let r=Date.now(),n=e.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(l<0){i.visible&&m.dismiss(i.id);return}return setTimeout(()=>m.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[e,o]);let s=d.useCallback(()=>{o&&C({type:6,time:Date.now()})},[o]),a=d.useCallback((r,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:c}=n||{},p=e.filter(h=>(h.position||c)===(r.position||c)&&h.height),g=p.findIndex(h=>h.id===r.id),f=p.filter((h,S)=>S<g&&h.visible).length;return p.filter(h=>h.visible).slice(...i?[f+1]:[0,f]).reduce((h,S)=>h+(S.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:wt,startPause:Ct,endPause:s,calculateOffset:a}}},jt=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,Et=b`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,kt=b`
from {
  transform: scale(0) rotate(90deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(90deg);
	opacity: 1;
}`,It=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#ff4b4b"};
  position: relative;
  transform: rotate(45deg);

  animation: ${jt} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;

  &:after,
  &:before {
    content: '';
    animation: ${Et} 0.15s ease-out forwards;
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
    animation: ${kt} 0.15s ease-out forwards;
    animation-delay: 180ms;
    transform: rotate(90deg);
  }
`,Mt=b`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Tt=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Mt} 1s linear infinite;
`,Ot=b`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,St=b`
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
}`,Ht=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${Ot} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${St} 0.2s ease-out forwards;
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
`,At=w("div")`
  position: absolute;
`,Lt=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,Zt=b`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Vt=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${Zt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Bt=({toast:t})=>{let{icon:e,type:o,iconTheme:s}=t;return e!==void 0?typeof e=="string"?d.createElement(Vt,null,e):e:o==="blank"?null:d.createElement(Lt,null,d.createElement(Tt,{...s}),o!=="loading"&&d.createElement(At,null,o==="error"?d.createElement(It,{...s}):d.createElement(Ht,{...s})))},Dt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Nt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,zt="0%{opacity:0;} 100%{opacity:1;}",Rt="0%{opacity:1;} 100%{opacity:0;}",_t=w("div")`
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
`,Ft=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Pt=(t,e)=>{let o=t.includes("top")?1:-1,[s,a]=z()?[zt,Rt]:[Dt(o),Nt(o)];return{animation:e?`${b(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${b(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Ut=d.memo(({toast:t,position:e,style:o,children:s})=>{let a=t.height?Pt(t.position||e||"top-center",t.visible):{opacity:0},r=d.createElement(Bt,{toast:t}),n=d.createElement(Ft,{...t.ariaProps},T(t.message,t));return d.createElement(_t,{className:t.className,style:{...a,...o,...t.style}},typeof s=="function"?s({icon:r,message:n}):d.createElement(d.Fragment,null,r,n))});ut(d.createElement);var Wt=({id:t,className:e,style:o,onHeightUpdate:s,children:a})=>{let r=d.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;s(t,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return d.createElement("div",{ref:r,className:e,style:o},a)},Yt=(t,e)=>{let o=t.includes("top"),s=o?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:z()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(o?1:-1)}px)`,...s,...a}},qt=O`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,E=16,Gt=({reverseOrder:t,position:e="top-center",toastOptions:o,gutter:s,children:a,containerStyle:r,containerClassName:n})=>{let{toasts:i,handlers:l}=$t(o);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:E,left:E,right:E,bottom:E,pointerEvents:"none",...r},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(c=>{let p=c.position||e,g=l.calculateOffset(c,{reverseOrder:t,gutter:s,defaultPosition:e}),f=Yt(p,g);return d.createElement(Wt,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?qt:"",style:f},c.type==="custom"?T(c.message,c):a?a(c):d.createElement(Ut,{toast:c,position:p}))}))};const Jt=4e3,Qt=1/0,Xt=Z.BottomCenter,Kt=Z.BottomRight,le=({type:t,title:e,message:o,children:s,dismissible:a,...r})=>{const n=t===$.Error?Qt:Jt;m.custom(i=>{const l=d.Children.map(s,c=>c&&d.cloneElement(c,{toastId:i.id,...c.props}));return u.jsx(st,{dismissible:a,id:i.id,isVisible:i.visible,message:o,onClose:()=>m.dismiss(i.id),title:e,type:t,children:l})},{duration:n,...r})},ce=({gutter:t=8,...e})=>{const o=P(),s=_(`(max-width: ${o.breakpoints.s})`),a=s?Xt:Kt,r=s?8:16;return u.jsx(Gt,{gutter:t,position:a,...e,containerStyle:{bottom:16,right:r,top:r,left:r,...e.containerStyle}})};export{Y as I,st as T,$ as a,ce as b,le as e};

import{j as u}from"./jsx-runtime-vNq4Oc-g.js";import"./index-tGsFdLcJ.js";import"./index-jmm5gWkb.js";import{u as F}from"./useMedia-S1QLeel4.js";import{r as d}from"./index-4g5l5LRQ.js";import{C as P,E as U}from"./ErrorOutline-r55wasc1.js";import{C as V}from"./Close-fCiS4iy8.js";import{I as Z}from"./InfoOutline-vkAQEiMk.js";import{k as W}from"./emotion-react.browser.esm-OUs2k2GK.js";import{n as v}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{u as Y}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";const q=t=>u.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:u.jsx("path",{d:"M12 6.49L19.53 19.5H4.47L12 6.49ZM12 2.5L1 21.5H23L12 2.5ZM13 16.5H11V18.5H13V16.5ZM13 10.5H11V14.5H13V10.5Z"})});var z=(t=>(t.TopLeft="top-left",t.TopCenter="top-center",t.TopRight="top-right",t.BottomLeft="bottom-left",t.BottomCenter="bottom-center",t.BottomRight="bottom-right",t))(z||{}),E=(t=>(t.Success="success",t.Error="error",t.Info="informative",t.Warning="warning",t))(E||{});const G=v.div`
  height: 100%;
  display: flex;
  align-items: center;
  padding-left: 8px;
  padding-right: 8px;
  ${({theme:t,type:e})=>`
    background-color: ${t.palette[e].default};  
    color: ${t.palette[e].contrast}
`}
`,J=W`
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
    border-radius: ${t.radius["5xs"]};
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
`,at={[E.Success]:P,[E.Error]:U,[E.Info]:Z,[E.Warning]:q},st=({children:t,id:e,dataTestId:o,title:s,message:a,onClose:r,type:n,isVisible:i=!0,dismissible:l=!0})=>{const c=at[n],p=o??`toast-${e}`;return u.jsxs(Q,{"data-testid":p,isVisible:i,type:n,children:[u.jsx(G,{type:n,children:u.jsx(c,{height:20,width:20})}),u.jsxs(X,{children:[u.jsxs(ot,{hasCloseButton:l,children:[u.jsx(K,{children:s}),l?u.jsx(et,{onClick:r,children:u.jsx(V,{})}):null,u.jsx(tt,{children:a})]}),u.jsx(rt,{hasChildren:!!t,children:t})]})]},e)};let it={data:""},nt=t=>typeof window=="object"?((t?t.querySelector("#_goober"):window._goober)||Object.assign((t||document.head).appendChild(document.createElement("style")),{innerHTML:" ",id:"_goober"})).firstChild:t||it,lt=/(?:([\u0080-\uFFFF\w-%@]+) *:? *([^{;]+?);|([^;}{]*?) *{)|(}\s*)/g,ct=/\/\*[^]*?\*\/|  +/g,H=/\n+/g,x=(t,e)=>{let o="",s="",a="";for(let r in t){let n=t[r];r[0]=="@"?r[1]=="i"?o=r+" "+n+";":s+=r[1]=="f"?x(n,r):r+"{"+x(n,r[1]=="k"?"":e)+"}":typeof n=="object"?s+=x(n,e?e.replace(/([^,])+/g,i=>r.replace(/(^:.*)|([^,])+/g,l=>/&/.test(l)?l.replace(/&/g,i):i?i+" "+l:l)):r):n!=null&&(r=/^--/.test(r)?r:r.replace(/[A-Z]/g,"-$&").toLowerCase(),a+=x.p?x.p(r,n):r+":"+n+";")}return o+(e&&a?e+"{"+a+"}":a)+s},b={},R=t=>{if(typeof t=="object"){let e="";for(let o in t)e+=o+R(t[o]);return e}return t},dt=(t,e,o,s,a)=>{let r=R(t),n=b[r]||(b[r]=(l=>{let c=0,p=11;for(;c<l.length;)p=101*p+l.charCodeAt(c++)>>>0;return"go"+p})(r));if(!b[n]){let l=r!==t?t:(c=>{let p,g,f=[{}];for(;p=lt.exec(c.replace(ct,""));)p[4]?f.shift():p[3]?(g=p[3].replace(H," ").trim(),f.unshift(f[0][g]=f[0][g]||{})):f[0][p[1]]=p[2].replace(H," ").trim();return f[0]})(t);b[n]=x(a?{["@keyframes "+n]:l}:l,o?"":"."+n)}let i=o&&b.g?b.g:null;return o&&(b.g=b[n]),((l,c,p,g)=>{g?c.data=c.data.replace(g,l):c.data.indexOf(l)===-1&&(c.data=p?l+c.data:c.data+l)})(b[n],e,s,i),n},pt=(t,e,o)=>t.reduce((s,a,r)=>{let n=e[r];if(n&&n.call){let i=n(o),l=i&&i.props&&i.props.className||/^go/.test(i)&&i;n=l?"."+l:i&&typeof i=="object"?i.props?"":x(i,""):i===!1?"":i}return s+a+(n??"")},"");function S(t){let e=this||{},o=t.call?t(e.p):t;return dt(o.unshift?o.raw?pt(o,[].slice.call(arguments,1),e.p):o.reduce((s,a)=>Object.assign(s,a&&a.call?a(e.p):a),{}):o,nt(e.target),e.g,e.o,e.k)}let B,D,M;S.bind({g:1});let y=S.bind({k:1});function ut(t,e,o,s){x.p=e,B=t,D=o,M=s}function w(t,e){let o=this||{};return function(){let s=arguments;function a(r,n){let i=Object.assign({},r),l=i.className||a.className;o.p=Object.assign({theme:D&&D()},i),o.o=/ *go\d+/.test(l),i.className=S.apply(o,s)+(l?" "+l:""),e&&(i.ref=n);let c=t;return t[0]&&(c=i.as||t,delete i.as),M&&c[0]&&M(i),B(c,i)}return e?e(a):a}}var mt=t=>typeof t=="function",O=(t,e)=>mt(t)?t(e):t,ft=(()=>{let t=0;return()=>(++t).toString()})(),_=(()=>{let t;return()=>{if(t===void 0&&typeof window<"u"){let e=matchMedia("(prefers-reduced-motion: reduce)");t=!e||e.matches}return t}})(),gt=20,C=new Map,ht=1e3,L=t=>{if(C.has(t))return;let e=setTimeout(()=>{C.delete(t),$({type:4,toastId:t})},ht);C.set(t,e)},bt=t=>{let e=C.get(t);e&&clearTimeout(e)},N=(t,e)=>{switch(e.type){case 0:return{...t,toasts:[e.toast,...t.toasts].slice(0,gt)};case 1:return e.toast.id&&bt(e.toast.id),{...t,toasts:t.toasts.map(r=>r.id===e.toast.id?{...r,...e.toast}:r)};case 2:let{toast:o}=e;return t.toasts.find(r=>r.id===o.id)?N(t,{type:1,toast:o}):N(t,{type:0,toast:o});case 3:let{toastId:s}=e;return s?L(s):t.toasts.forEach(r=>{L(r.id)}),{...t,toasts:t.toasts.map(r=>r.id===s||s===void 0?{...r,visible:!1}:r)};case 4:return e.toastId===void 0?{...t,toasts:[]}:{...t,toasts:t.toasts.filter(r=>r.id!==e.toastId)};case 5:return{...t,pausedAt:e.time};case 6:let a=e.time-(t.pausedAt||0);return{...t,pausedAt:void 0,toasts:t.toasts.map(r=>({...r,pauseDuration:r.pauseDuration+a}))}}},I=[],T={toasts:[],pausedAt:void 0},$=t=>{T=N(T,t),I.forEach(e=>{e(T)})},yt={blank:4e3,error:4e3,success:2e3,loading:1/0,custom:4e3},xt=(t={})=>{let[e,o]=d.useState(T);d.useEffect(()=>(I.push(o),()=>{let a=I.indexOf(o);a>-1&&I.splice(a,1)}),[e]);let s=e.toasts.map(a=>{var r,n;return{...t,...t[a.type],...a,duration:a.duration||((r=t[a.type])==null?void 0:r.duration)||(t==null?void 0:t.duration)||yt[a.type],style:{...t.style,...(n=t[a.type])==null?void 0:n.style,...a.style}}});return{...e,toasts:s}},vt=(t,e="blank",o)=>({createdAt:Date.now(),visible:!0,type:e,ariaProps:{role:"status","aria-live":"polite"},message:t,pauseDuration:0,...o,id:(o==null?void 0:o.id)||ft()}),j=t=>(e,o)=>{let s=vt(e,t,o);return $({type:2,toast:s}),s.id},m=(t,e)=>j("blank")(t,e);m.error=j("error");m.success=j("success");m.loading=j("loading");m.custom=j("custom");m.dismiss=t=>{$({type:3,toastId:t})};m.remove=t=>$({type:4,toastId:t});m.promise=(t,e,o)=>{let s=m.loading(e.loading,{...o,...o==null?void 0:o.loading});return t.then(a=>(m.success(O(e.success,a),{id:s,...o,...o==null?void 0:o.success}),a)).catch(a=>{m.error(O(e.error,a),{id:s,...o,...o==null?void 0:o.error})}),t};var wt=(t,e)=>{$({type:1,toast:{id:t,height:e}})},$t=()=>{$({type:5,time:Date.now()})},Et=t=>{let{toasts:e,pausedAt:o}=xt(t);d.useEffect(()=>{if(o)return;let r=Date.now(),n=e.map(i=>{if(i.duration===1/0)return;let l=(i.duration||0)+i.pauseDuration-(r-i.createdAt);if(l<0){i.visible&&m.dismiss(i.id);return}return setTimeout(()=>m.dismiss(i.id),l)});return()=>{n.forEach(i=>i&&clearTimeout(i))}},[e,o]);let s=d.useCallback(()=>{o&&$({type:6,time:Date.now()})},[o]),a=d.useCallback((r,n)=>{let{reverseOrder:i=!1,gutter:l=8,defaultPosition:c}=n||{},p=e.filter(h=>(h.position||c)===(r.position||c)&&h.height),g=p.findIndex(h=>h.id===r.id),f=p.filter((h,A)=>A<g&&h.visible).length;return p.filter(h=>h.visible).slice(...i?[f+1]:[0,f]).reduce((h,A)=>h+(A.height||0)+l,0)},[e]);return{toasts:e,handlers:{updateHeight:wt,startPause:$t,endPause:s,calculateOffset:a}}},jt=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
 transform: scale(1) rotate(45deg);
  opacity: 1;
}`,kt=y`
from {
  transform: scale(0);
  opacity: 0;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ct=y`
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
    animation: ${kt} 0.15s ease-out forwards;
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
`,Tt=y`
  from {
    transform: rotate(0deg);
  }
  to {
    transform: rotate(360deg);
  }
`,Ot=w("div")`
  width: 12px;
  height: 12px;
  box-sizing: border-box;
  border: 2px solid;
  border-radius: 100%;
  border-color: ${t=>t.secondary||"#e0e0e0"};
  border-right-color: ${t=>t.primary||"#616161"};
  animation: ${Tt} 1s linear infinite;
`,St=y`
from {
  transform: scale(0) rotate(45deg);
	opacity: 0;
}
to {
  transform: scale(1) rotate(45deg);
	opacity: 1;
}`,At=y`
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
}`,Dt=w("div")`
  width: 20px;
  opacity: 0;
  height: 20px;
  border-radius: 10px;
  background: ${t=>t.primary||"#61d345"};
  position: relative;
  transform: rotate(45deg);

  animation: ${St} 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
  animation-delay: 100ms;
  &:after {
    content: '';
    box-sizing: border-box;
    animation: ${At} 0.2s ease-out forwards;
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
`,Mt=w("div")`
  position: absolute;
`,Nt=w("div")`
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  min-width: 20px;
  min-height: 20px;
`,zt=y`
from {
  transform: scale(0.6);
  opacity: 0.4;
}
to {
  transform: scale(1);
  opacity: 1;
}`,Ht=w("div")`
  position: relative;
  transform: scale(0.6);
  opacity: 0.4;
  min-width: 20px;
  animation: ${zt} 0.3s 0.12s cubic-bezier(0.175, 0.885, 0.32, 1.275)
    forwards;
`,Lt=({toast:t})=>{let{icon:e,type:o,iconTheme:s}=t;return e!==void 0?typeof e=="string"?d.createElement(Ht,null,e):e:o==="blank"?null:d.createElement(Nt,null,d.createElement(Ot,{...s}),o!=="loading"&&d.createElement(Mt,null,o==="error"?d.createElement(It,{...s}):d.createElement(Dt,{...s})))},Rt=t=>`
0% {transform: translate3d(0,${t*-200}%,0) scale(.6); opacity:.5;}
100% {transform: translate3d(0,0,0) scale(1); opacity:1;}
`,Bt=t=>`
0% {transform: translate3d(0,0,-1px) scale(1); opacity:1;}
100% {transform: translate3d(0,${t*-150}%,-1px) scale(.6); opacity:0;}
`,_t="0%{opacity:0;} 100%{opacity:1;}",Ft="0%{opacity:1;} 100%{opacity:0;}",Pt=w("div")`
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
`,Ut=w("div")`
  display: flex;
  justify-content: center;
  margin: 4px 10px;
  color: inherit;
  flex: 1 1 auto;
  white-space: pre-line;
`,Vt=(t,e)=>{let o=t.includes("top")?1:-1,[s,a]=_()?[_t,Ft]:[Rt(o),Bt(o)];return{animation:e?`${y(s)} 0.35s cubic-bezier(.21,1.02,.73,1) forwards`:`${y(a)} 0.4s forwards cubic-bezier(.06,.71,.55,1)`}},Zt=d.memo(({toast:t,position:e,style:o,children:s})=>{let a=t.height?Vt(t.position||e||"top-center",t.visible):{opacity:0},r=d.createElement(Lt,{toast:t}),n=d.createElement(Ut,{...t.ariaProps},O(t.message,t));return d.createElement(Pt,{className:t.className,style:{...a,...o,...t.style}},typeof s=="function"?s({icon:r,message:n}):d.createElement(d.Fragment,null,r,n))});ut(d.createElement);var Wt=({id:t,className:e,style:o,onHeightUpdate:s,children:a})=>{let r=d.useCallback(n=>{if(n){let i=()=>{let l=n.getBoundingClientRect().height;s(t,l)};i(),new MutationObserver(i).observe(n,{subtree:!0,childList:!0,characterData:!0})}},[t,s]);return d.createElement("div",{ref:r,className:e,style:o},a)},Yt=(t,e)=>{let o=t.includes("top"),s=o?{top:0}:{bottom:0},a=t.includes("center")?{justifyContent:"center"}:t.includes("right")?{justifyContent:"flex-end"}:{};return{left:0,right:0,display:"flex",position:"absolute",transition:_()?void 0:"all 230ms cubic-bezier(.21,1.02,.73,1)",transform:`translateY(${e*(o?1:-1)}px)`,...s,...a}},qt=S`
  z-index: 9999;
  > * {
    pointer-events: auto;
  }
`,k=16,Gt=({reverseOrder:t,position:e="top-center",toastOptions:o,gutter:s,children:a,containerStyle:r,containerClassName:n})=>{let{toasts:i,handlers:l}=Et(o);return d.createElement("div",{style:{position:"fixed",zIndex:9999,top:k,left:k,right:k,bottom:k,pointerEvents:"none",...r},className:n,onMouseEnter:l.startPause,onMouseLeave:l.endPause},i.map(c=>{let p=c.position||e,g=l.calculateOffset(c,{reverseOrder:t,gutter:s,defaultPosition:e}),f=Yt(p,g);return d.createElement(Wt,{id:c.id,key:c.id,onHeightUpdate:l.updateHeight,className:c.visible?qt:"",style:f},c.type==="custom"?O(c.message,c):a?a(c):d.createElement(Zt,{toast:c,position:p}))}))};const Jt=4e3,Qt=1/0,Xt=z.BottomCenter,Kt=z.BottomRight,pe=({type:t,title:e,message:o,children:s,dismissible:a,...r})=>{const n=t===E.Error?Qt:Jt;m.custom(i=>{const l=d.Children.map(s,c=>c&&d.cloneElement(c,{toastId:i.id,...c.props}));return u.jsx(st,{dismissible:a,id:i.id,isVisible:i.visible,message:o,onClose:()=>m.dismiss(i.id),title:e,type:t,children:l})},{duration:n,...r})},ue=({gutter:t=8,...e})=>{const o=Y(),s=F(`(max-width: ${o.breakpoints.s})`),a=s?Xt:Kt,r=s?8:16;return u.jsx(Gt,{gutter:t,position:a,...e,containerStyle:{bottom:16,right:r,top:r,left:r,...e.containerStyle}})};export{st as T,E as a,ue as b,pe as e};

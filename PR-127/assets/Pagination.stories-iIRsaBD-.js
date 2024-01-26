import{j as o}from"./jsx-runtime-CbCNBOXy.js";import{r as l}from"./index-IybTgENJ.js";import{P as r,a as d}from"./Pagination-b-jgRMCb.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-qqeelA58.js";import"./emotion-react.browser.esm-jJwm7MoD.js";import"./emotion-element-c39617d8.browser.esm-HJoeL-IU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./ArrowRight-CIKtTgQV.js";import"./TooltipProvider--5O1-WdZ.js";import"./debounce-hfrKQpz_.js";import"./Typography-ZNxoi-hx.js";import"./index-PWMXJtKE.js";import"./emotion-styled.browser.esm-MfHNkeEy.js";const m=()=>{const[e,n]=l.useState(1),t=a=>{const p=["Enter","Backspace","Tab"];!/Digit\d/.test(a.code)&&!p.includes(a.code)&&a.preventDefault()},s=l.useCallback(a=>{n(a)},[]);return{currentPage:e,handleChange:s,handleUserInput:t}},N={title:"Data Display/Pagination",component:r},P=({totalPages:e})=>{const{currentPage:n,handleChange:t,handleUserInput:s}=m();return o.jsxs(r,{children:[o.jsx(r.PreviousItem,{disabled:n<=1||n>e,onClick:()=>t(n-1)}),o.jsx(d,{onChange:t,onHandleKeyDown:s,totalPages:e,value:n}),o.jsx(r.Content,{onClick:()=>t(e),totalPages:e}),o.jsx(r.NextItem,{disabled:n>=e||n<1,onClick:()=>t(n+1)})]})},i=P.bind({});i.args={totalPages:10};var c,g,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`({
  totalPages
}) => {
  const {
    currentPage,
    handleChange,
    handleUserInput
  } = usePagination();
  return <Pagination>
      <Pagination.PreviousItem disabled={currentPage <= 1 || currentPage > totalPages} onClick={() => handleChange(currentPage - 1)} />
      <PaginationInput onChange={handleChange} onHandleKeyDown={handleUserInput} totalPages={totalPages} value={currentPage} />
      <Pagination.Content onClick={() => handleChange(totalPages)} totalPages={totalPages} />
      <Pagination.NextItem disabled={currentPage >= totalPages || currentPage < 1} onClick={() => handleChange(currentPage + 1)} />
    </Pagination>;
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const S=["Default"];export{i as Default,S as __namedExportsOrder,N as default};

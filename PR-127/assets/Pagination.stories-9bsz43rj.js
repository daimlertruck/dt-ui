import{j as o}from"./jsx-runtime-CbCNBOXy.js";import{r as l}from"./index-IybTgENJ.js";import{P as r,a as p}from"./Pagination-pecEldLg.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-Hhmu2M5c.js";import"./emotion-react.browser.esm-bvpyIPwg.js";import"./emotion-styled.browser.esm-yeljtSWm.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./ArrowRight-CIKtTgQV.js";import"./TooltipProvider-e8-_owln.js";import"./debounce-hfrKQpz_.js";import"./Typography-j_MlwlO0.js";const P=()=>{const[e,n]=l.useState(1),a=t=>{const d=["Enter","Backspace","Tab"];!/Digit\d/.test(t.code)&&!d.includes(t.code)&&t.preventDefault()},s=l.useCallback(t=>{n(t)},[]);return{currentPage:e,handleChange:s,handleUserInput:a}},H={title:"Data Display/Pagination",component:r},m=({totalPages:e})=>{const{currentPage:n,handleChange:a,handleUserInput:s}=P();return o.jsxs(r,{children:[o.jsx(r.PreviousItem,{disabled:n<=1||n>e,onClick:()=>a(n-1)}),o.jsx(p,{onChange:a,onHandleKeyDown:s,totalPages:e,value:n}),o.jsx(r.Content,{onClick:()=>a(e),totalPages:e}),o.jsx(r.NextItem,{disabled:n>=e||n<1,onClick:()=>a(n+1)})]})},i=m.bind({});i.args={totalPages:10};var c,g,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const K=["Default"];export{i as Default,K as __namedExportsOrder,H as default};

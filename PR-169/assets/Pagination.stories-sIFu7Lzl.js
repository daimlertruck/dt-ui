import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{r as l}from"./index-4g5l5LRQ.js";import{P as r,a as d}from"./Pagination-qnIUs27d.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-LonLnBAn.js";import"./index-jmm5gWkb.js";import"./Icon.styled-_wbYwLP-.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./debounce-hfrKQpz_.js";import"./ArrowRight-R00SQyn0.js";import"./Typography-hG7SbwPH.js";import"./MultiSelectProvider-vrdgqO57.js";const m=()=>{const[e,n]=l.useState(1),t=a=>{const p=["Enter","Backspace","Tab"];!/Digit\d/.test(a.code)&&!p.includes(a.code)&&a.preventDefault()},s=l.useCallback(a=>{n(a)},[]);return{currentPage:e,handleChange:s,handleUserInput:t}},N={title:"Data Display/Pagination",component:r},P=({totalPages:e})=>{const{currentPage:n,handleChange:t,handleUserInput:s}=m();return o.jsxs(r,{children:[o.jsx(r.PreviousItem,{disabled:n<=1||n>e,onClick:()=>t(n-1)}),o.jsx(d,{onChange:t,onHandleKeyDown:s,totalPages:e,value:n}),o.jsx(r.Content,{onClick:()=>t(e),totalPages:e}),o.jsx(r.NextItem,{disabled:n>=e||n<1,onClick:()=>t(n+1)})]})},i=P.bind({});i.args={totalPages:10};var c,g,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`({
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

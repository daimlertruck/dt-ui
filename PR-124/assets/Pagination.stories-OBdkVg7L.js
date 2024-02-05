import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{r as l}from"./index-4g5l5LRQ.js";import{P as r,a as p}from"./Pagination-2cD9Qogb.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./ArrowRight-R00SQyn0.js";import"./typography-KYNEswLX.js";import"./debounce-hfrKQpz_.js";import"./Typography-pZHG6q9R.js";const P=()=>{const[e,n]=l.useState(1),a=t=>{const d=["Enter","Backspace","Tab"];!/Digit\d/.test(t.code)&&!d.includes(t.code)&&t.preventDefault()},s=l.useCallback(t=>{n(t)},[]);return{currentPage:e,handleChange:s,handleUserInput:a}},H={title:"Data Display/Pagination",component:r},m=({totalPages:e})=>{const{currentPage:n,handleChange:a,handleUserInput:s}=P();return o.jsxs(r,{children:[o.jsx(r.PreviousItem,{disabled:n<=1||n>e,onClick:()=>a(n-1)}),o.jsx(p,{onChange:a,onHandleKeyDown:s,totalPages:e,value:n}),o.jsx(r.Content,{onClick:()=>a(e),totalPages:e}),o.jsx(r.NextItem,{disabled:n>=e||n<1,onClick:()=>a(n+1)})]})},i=m.bind({});i.args={totalPages:10};var c,g,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`({
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

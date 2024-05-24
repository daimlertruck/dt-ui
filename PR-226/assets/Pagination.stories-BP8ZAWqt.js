import{j as o}from"./jsx-runtime-CKrituN3.js";import{r as l}from"./index-CBqU2yxZ.js";import{P as r,a as d}from"./Pagination-BNKQDdu9.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-B2rOpc4E.js";import"./index-BbP3371Q.js";import"./index-BAMY2Nnw.js";import"./index-BtM5VmRH.js";import"./client-BvKKsruy.js";import"./index-Bl7H5CcN.js";import"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./extends-DJVMZnyl.js";import"./index-BDlDW0Uq.js";import"./debounce-BF4Cdv7I.js";import"./Typography-hP6P_hwr.js";import"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./ArrowRight-Bcd3dS55.js";const m=()=>{const[e,n]=l.useState(1),t=a=>{const p=["Enter","Backspace","Tab"];!/Digit\d/.test(a.code)&&!p.includes(a.code)&&a.preventDefault()},s=l.useCallback(a=>{n(a)},[]);return{currentPage:e,handleChange:s,handleUserInput:t}},N={title:"Data Display/Pagination",component:r},P=({totalPages:e})=>{const{currentPage:n,handleChange:t,handleUserInput:s}=m();return o.jsxs(r,{children:[o.jsx(r.PreviousItem,{disabled:n<=1||n>e,onClick:()=>t(n-1)}),o.jsx(d,{onChange:t,onHandleKeyDown:s,totalPages:e,value:n}),o.jsx(r.Content,{onClick:()=>t(e),totalPages:e}),o.jsx(r.NextItem,{disabled:n>=e||n<1,onClick:()=>t(n+1)})]})},i=P.bind({});i.args={totalPages:10};var c,g,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`({
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

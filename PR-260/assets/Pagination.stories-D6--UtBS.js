import{j as o}from"./jsx-runtime-CKrituN3.js";import{r as l}from"./index-CBqU2yxZ.js";import{P as r,a as p}from"./Pagination-GKpjzWri.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-CJ73Y9Wi.js";import"./emotion-styled.browser.esm-B1le5_Hy.js";import"./extends-DJVMZnyl.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./debounce-BF4Cdv7I.js";import"./Typography-DvHa2txy.js";import"./ArrowRight-Bcd3dS55.js";const P=()=>{const[e,n]=l.useState(1),a=t=>{const d=["Enter","Backspace","Tab"];!/Digit\d/.test(t.code)&&!d.includes(t.code)&&t.preventDefault()},s=l.useCallback(t=>{n(t)},[]);return{currentPage:e,handleChange:s,handleUserInput:a}},w={title:"Data Display/Pagination",component:r},m=({totalPages:e})=>{const{currentPage:n,handleChange:a,handleUserInput:s}=P();return o.jsxs(r,{children:[o.jsx(r.PreviousItem,{disabled:n<=1||n>e,onClick:()=>a(n-1)}),o.jsx(p,{onChange:a,onHandleKeyDown:s,totalPages:e,value:n}),o.jsx(r.Content,{onClick:()=>a(e),totalPages:e}),o.jsx(r.NextItem,{disabled:n>=e||n<1,onClick:()=>a(n+1)})]})},i=m.bind({});i.args={totalPages:10};var c,g,u;i.parameters={...i.parameters,docs:{...(c=i.parameters)==null?void 0:c.docs,source:{originalSource:`({
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
}`,...(u=(g=i.parameters)==null?void 0:g.docs)==null?void 0:u.source}}};const H=["Default"];export{i as Default,H as __namedExportsOrder,w as default};

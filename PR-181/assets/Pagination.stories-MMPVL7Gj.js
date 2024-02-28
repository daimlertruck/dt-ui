import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{r as p}from"./index-4g5l5LRQ.js";import{P as r,q as u}from"./Toaster-qQQeWMmC.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-QDCYB1ew.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./Link-_Aovc20k.js";import"./IconButton-CybuRvMK.js";import"./Nav.styled-GsNCx_OC.js";import"./NavContainer.styled-U8vOQ75V.js";import"./DescriptionList-iMIY3Ofq.js";import"./ProfileInfo-W3kZ6w9g.js";import"./index-5j7WHYEJ.js";import"./index-jmm5gWkb.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./hexToRgba-fpzAFQCT.js";import"./z-index-Gl5ZkgZ3.js";import"./Header.styled-dSjoYgc7.js";import"./Tooltip-HGZMkqB_.js";import"./Avatar.styled-CUHg7m_f.js";import"./NavItem.styled-F-Ro6JRH.js";import"./Table-vPzD7-MQ.js";import"./LabelField-OWWqgjhK.js";import"./Footer.styled-ViVzqoaf.js";import"./Backdrop-W-F6eJUj.js";import"./Tag-Fq2qdiql.js";import"./Counter-LGyezUq9.js";import"./Breadcrumb-1_ppty26.js";import"./Tabs-tjTOCvAj.js";import"./Checkbox-AvcVMVeH.js";import"./Radio-lqTtrhen.js";import"./Divider-b2fMfDtF.js";import"./Icon.styled-XhfvdDtU.js";import"./Accordion-h2BS8qQ8.js";const d=()=>{const[n,t]=p.useState(1),e=a=>{const g=["Enter","Backspace","Tab"];!/Digit\d/.test(a.code)&&!g.includes(a.code)&&a.preventDefault()},s=p.useCallback(a=>{t(a)},[]);return{currentPage:n,handleChange:s,handleUserInput:e}},nt={title:"Data Display/Pagination",component:r},P=({totalPages:n})=>{const{currentPage:t,handleChange:e,handleUserInput:s}=d();return o.jsxs(r,{children:[o.jsx(r.PreviousItem,{disabled:t<=1||t>n,onClick:()=>e(t-1)}),o.jsx(u,{onChange:e,onHandleKeyDown:s,totalPages:n,value:t}),o.jsx(r.Content,{onClick:()=>e(n),totalPages:n}),o.jsx(r.NextItem,{disabled:t>=n||t<1,onClick:()=>e(t+1)})]})},i=P.bind({});i.args={totalPages:10};var m,l,c;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`({
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
}`,...(c=(l=i.parameters)==null?void 0:l.docs)==null?void 0:c.source}}};const et=["Default"];export{i as Default,et as __namedExportsOrder,nt as default};

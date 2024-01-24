import{j as e}from"./jsx-runtime-CbCNBOXy.js";import"./index-9BaFkuMC.js";import{B as n}from"./Breadcrumb-OpLmqGjN.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-react.browser.esm-bvpyIPwg.js";import"./emotion-styled.browser.esm-yeljtSWm.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./ArrowRight-CIKtTgQV.js";import"./Tooltip-QjaVfdnv.js";import"./TooltipProvider-pK6yN7rV.js";import"./Portal-cbzhSllL.js";import"./index-xIHD0DlW.js";import"./z-index-mmXzY7sY.js";import"./debounce-hfrKQpz_.js";import"./useMedia-QA4teFwo.js";const p=a=>e.jsxs("svg",{...a,fill:"none",height:"17",viewBox:"0 0 16 17",width:"16",xmlns:"http://www.w3.org/2000/svg",children:[e.jsx("path",{d:"M12.6667 9.33329H3.33333C2.6 9.33329 2 9.93329 2 10.6666V13.3333C2 14.0666 2.6 14.6666 3.33333 14.6666H12.6667C13.4 14.6666 14 14.0666 14 13.3333V10.6666C14 9.93329 13.4 9.33329 12.6667 9.33329ZM12.6667 13.3333H3.33333V10.6666H12.6667V13.3333Z",fill:"currentColor"}),e.jsx("path",{d:"M12.6667 2.66663H3.33333C2.6 2.66663 2 3.26663 2 3.99996V6.66663C2 7.39996 2.6 7.99996 3.33333 7.99996H12.6667C13.4 7.99996 14 7.39996 14 6.66663V3.99996C14 3.26663 13.4 2.66663 12.6667 2.66663ZM12.6667 6.66663H3.33333V3.99996H12.6667V6.66663Z",fill:"currentColor"})]}),v={title:"Data Display/Breadcrumb",component:n},c=({separator:a})=>{const i=[{name:"Name 1",showIcon:!0},{name:"Second page has a long text to describe its path"},{name:"Name 3"},{name:"Last page has a long text to describe its path"}];return e.jsx(n,{separator:a,children:i.map(t=>e.jsxs(n.Item,{children:[t.showIcon?e.jsx(p,{}):null,e.jsx("a",{href:"/",children:t.name})]},t.name))})},r=c.bind({});r.args={separator:"slash"};var o,s,m;r.parameters={...r.parameters,docs:{...(o=r.parameters)==null?void 0:o.docs,source:{originalSource:`({
  separator
}) => {
  const breadcrumbs = [{
    name: 'Name 1',
    showIcon: true
  }, {
    name: 'Second page has a long text to describe its path'
  }, {
    name: 'Name 3'
  }, {
    name: 'Last page has a long text to describe its path'
  }];
  return <Breadcrumb separator={separator}>
      {breadcrumbs.map(breadcrumb => <Breadcrumb.Item key={breadcrumb.name}>
          {breadcrumb.showIcon ? <ViewAgendaIcon /> : null}
          <a href='/'>{breadcrumb.name}</a>
        </Breadcrumb.Item>)}
    </Breadcrumb>;
}`,...(m=(s=r.parameters)==null?void 0:s.docs)==null?void 0:m.source}}};const S=["Default"];export{r as Default,S as __namedExportsOrder,v as default};

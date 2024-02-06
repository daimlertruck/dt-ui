import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import"./index-lb1Yyg-x.js";import"./typography-tjmP3crQ.js";import{T as y,a as i,e as T,b as k}from"./Toaster-sAQptwaD.js";import{B as s}from"./Button-ngavVHWi.js";import"./IconButton.styled-39rpUtWL.js";import"./Nav.styled-wZZ9GwDG.js";import"./NavContainer.styled-bHGHfkby.js";import"./Dropdown-wP_K84EF.js";import"./Header.styled-eWFGRoIX.js";import"./ProfileInfo-rqOeFgjj.js";import"./Tooltip-X3IACSlU.js";import"./index-4g5l5LRQ.js";import"./Avatar.styled-0ZAnmqU-.js";import"./NavItem.styled-BxyWYfVo.js";import"./Grid.styled-vRffuNmn.js";import"./Card-qqBFVO_m.js";import"./Table.styled-YLe7EEgM.js";import"./Tag-xrGueKzV.js";import"./Box.styled-oB9eueTz.js";import"./Typography-KfkZJNal.js";import"./Spinner.styled-2Rn7jPaQ.js";import"./LabelFied.styled-i3rg1hk1.js";import"./TextField.styled-YT1MGQwK.js";import"./SearchField.styled-gyZY-xru.js";import"./TextArea.styled-jtIE47Bf.js";import"./Toggle-wnlXVmoC.js";import"./Form-G_Cglead.js";import"./Footer.styled-q2F64OA1.js";import"./Link-h5OL-K5T.js";import"./Divider.styled-3Nhqj9z_.js";import"./Breadcrumb-18k-MpW5.js";import"./Modal-_PCQL9gb.js";import"./Counter-aYlenIO8.js";import"./List-wcMRSLVp.js";import"./DescriptionList-TMDn3KBS.js";import"./Pagination-ok8aqqLB.js";import"./Tabs-cZ_63QZf.js";import"./Step-WndFiXPt.js";import"./CheckBox.styled-_L0ULugl.js";import"./Radio.styled-8Zpm3yia.js";import"./MultiSelect-6DNEj4Pw.js";import"./EmptyState-tv7g1m0n.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./Close-fCiS4iy8.js";import"./Spinner-CUu8fHFk.js";import"./index-H1EXaXUo.js";import"./Button.styled-fGz7p1PP.js";import"./DropdownOption.styled-WDQMJYkj.js";import"./DropdownMenu--X_l1VJa.js";import"./z-index-zwCKGdcf.js";import"./useClickOutside-5i9YsATO.js";import"./hexToRgba-fpzAFQCT.js";import"./Portal-EY94Zi_-.js";import"./index-jmm5gWkb.js";import"./Info-eLlTCXLO.js";import"./ArrowRight-R00SQyn0.js";import"./debounce-hfrKQpz_.js";import"./Backdrop-m0znsckh.js";import"./IconButton--b11-rHN.js";import"./constants-libmexsO.js";const _o={title:"Data Display/Toast",component:y,argTypes:{type:{mapping:i,options:Object.values(i).filter(e=>typeof e=="string"),control:{type:"inline-radio"}}},render:({children:e,type:d,title:g,message:u,dismissible:h,...x})=>o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>T({type:d,title:g,message:u,dismissible:h,children:e}),type:"button",children:"Click me"}),o.jsx(k,{...x})]})},t={args:{type:i.Success,title:"success",dismissible:!0,message:"This is a success message showed in the Toast.",onClose:()=>console.log("clicked")}},r={args:{type:i.Error,title:"error",message:"This is an error message showed in the Toast.",onClose:()=>console.log("clicked"),children:o.jsxs(o.Fragment,{children:[o.jsx(s,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 1"}),o.jsx(s,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 2"})]})}};var p,n,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: ToastType.Success,
    title: 'success',
    dismissible: true,
    message: 'This is a success message showed in the Toast.',
    onClose: () => console.log('clicked')
  }
}`,...(m=(n=t.parameters)==null?void 0:n.docs)==null?void 0:m.source}}};var a,c,l;r.parameters={...r.parameters,docs:{...(a=r.parameters)==null?void 0:a.docs,source:{originalSource:`{
  args: {
    type: ToastType.Error,
    title: 'error',
    message: 'This is an error message showed in the Toast.',
    onClose: () => console.log('clicked'),
    children: <>
        <Button color='secondary' onClick={() => console.log('clicked')} style={{
        padding: '8px 12px'
      }} variant='text'>
          Action 1
        </Button>
        <Button color='secondary' onClick={() => console.log('clicked')} style={{
        padding: '8px 12px'
      }} variant='text'>
          Action 2
        </Button>
      </>
  }
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const Ro=["Default","WithChildren"];export{t as Default,r as WithChildren,Ro as __namedExportsOrder,_o as default};

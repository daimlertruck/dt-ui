import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{B as s}from"./Button-H9BT5Rrr.js";import"./IconButton.styled-B_RRHdai.js";import"./Nav.styled-GsNCx_OC.js";import"./NavContainer.styled-U8vOQ75V.js";import"./Dropdown-BAOJn7X5.js";import"./MultiSelectProvider-vrdgqO57.js";import"./Header.styled-dSjoYgc7.js";import"./ProfileInfo-tlaQKtQk.js";import"./Tooltip-Kt2lY6UW.js";import"./index-4g5l5LRQ.js";import"./Avatar.styled-5c-I8N7j.js";import{T as y,a as i,e as T,b as k}from"./Toaster-wKN_Kon2.js";import"./NavItem.styled-F-Ro6JRH.js";import"./Grid.styled-IM57ROHE.js";import"./Card-dBhmV7ty.js";import"./Table.styled-HJRK4vTh.js";import"./Tag-S0pXlfY5.js";import"./Box.styled-zcGhU7kj.js";import"./Typography-D6FO4u36.js";import"./Spinner.styled-euKDJvzq.js";import"./LabelField-OWWqgjhK.js";import"./TextField.styled-LipUM-ms.js";import"./index-P2lXlfzc.js";import"./index-jmm5gWkb.js";import"./SearchField.styled-CiYqvoJZ.js";import"./TextArea-L2Ft5u-6.js";import"./Toggle-1sjFNmFv.js";import"./Form-0NlPNLCz.js";import"./Footer.styled-ViVzqoaf.js";import"./Link-c-Kgo-en.js";import"./Divider.styled-s1zDPfzJ.js";import"./Breadcrumb-GSpIc_VH.js";import"./Modal-COGYOJ2Q.js";import"./Counter-LGyezUq9.js";import"./List-qXYUixbk.js";import"./DescriptionList-DLLpITdb.js";import"./Pagination-rZwo0BFR.js";import"./Tabs-tjTOCvAj.js";import"./Step-TX1mgo7v.js";import"./Checkbox-YsqCbiLt.js";import"./Radio--p6mHLZJ.js";import"./MultiSelect-f1SmLgnA.js";import"./ProgressBar.styled-jrxdW072.js";import"./EmptyState-9WGoEOxR.js";import"./Spinner-TJ4Xns0i.js";import"./index-lOH_pZ5X.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./extends-E30VzY7q.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Button.styled-bXS5oslU.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./DropdownOption.styled-eYi-Js2k.js";import"./DropdownMenu-cGu4x9Hy.js";import"./z-index-zwCKGdcf.js";import"./useClickOutside-5i9YsATO.js";import"./hexToRgba-fpzAFQCT.js";import"./Portal-EY94Zi_-.js";import"./Close-fCiS4iy8.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./Info-eLlTCXLO.js";import"./ArrowRight-R00SQyn0.js";import"./debounce-hfrKQpz_.js";import"./Backdrop-F6D-wywJ.js";import"./IconButton-q8eJfSTD.js";import"./constants-libmexsO.js";const qo={title:"Data Display/Toast",component:y,argTypes:{type:{mapping:i,options:Object.values(i).filter(e=>typeof e=="string"),control:{type:"inline-radio"}}},render:({children:e,type:d,title:g,message:u,dismissible:h,...x})=>o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>T({type:d,title:g,message:u,dismissible:h,children:e}),type:"button",children:"Click me"}),o.jsx(k,{...x})]})},t={args:{type:i.Success,title:"success",dismissible:!0,message:"This is a success message showed in the Toast.",onClose:()=>console.log("clicked")}},r={args:{type:i.Error,title:"error",message:"This is an error message showed in the Toast.",onClose:()=>console.log("clicked"),children:o.jsxs(o.Fragment,{children:[o.jsx(s,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 1"}),o.jsx(s,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 2"})]})}};var p,n,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const zo=["Default","WithChildren"];export{t as Default,r as WithChildren,zo as __namedExportsOrder,qo as default};

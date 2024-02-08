import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import"./index-X02A2_j2.js";import"./typography-EFa8skSH.js";import{T as y,a as i,e as T,b as k}from"./Toaster-ODKzVzqp.js";import{B as s}from"./Button-D3S-86IP.js";import"./IconButton.styled-39rpUtWL.js";import"./Nav.styled-wZZ9GwDG.js";import"./NavContainer.styled-bHGHfkby.js";import"./Dropdown--h1aTKiL.js";import"./Header.styled-eWFGRoIX.js";import"./ProfileInfo-UNRJkzgo.js";import"./Tooltip-X3IACSlU.js";import"./index-4g5l5LRQ.js";import"./Avatar.styled-nLI_Otuz.js";import"./NavItem.styled-BxyWYfVo.js";import"./Grid.styled-vRffuNmn.js";import"./Card-tC9GqAzv.js";import"./Table.styled-6lrBlWr-.js";import"./Tag-xrGueKzV.js";import"./Box.styled-oB9eueTz.js";import"./Typography-33DxhsRi.js";import"./Spinner.styled-2Rn7jPaQ.js";import"./LabelFied.styled-i3rg1hk1.js";import"./TextField.styled-YT1MGQwK.js";import"./SearchField.styled-gyZY-xru.js";import"./TextArea.styled-jtIE47Bf.js";import"./Toggle-_FvSTBul.js";import"./Form--wZ_91eA.js";import"./Footer.styled-q2F64OA1.js";import"./Link-h5OL-K5T.js";import"./Divider.styled-3Nhqj9z_.js";import"./Breadcrumb-xb3EWmHk.js";import"./Modal-GPiP4C0W.js";import"./Counter-aYlenIO8.js";import"./List-wKpUDy6l.js";import"./DescriptionList-1KJqVNg4.js";import"./Pagination-hxUP5b96.js";import"./Tabs-cZ_63QZf.js";import"./Step-Tkm7K4X-.js";import"./CheckBox.styled-_L0ULugl.js";import"./Radio.styled-8Zpm3yia.js";import"./MultiSelect-DPQalgOV.js";import"./ProgressBar.styled-JJlYPLN9.js";import"./Backdrop-t7FIUSsr.js";import"./EmptyState-lGQo-21u.js";import"./Message-XCrLiJqp.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./Close-fCiS4iy8.js";import"./Spinner-937B3-iS.js";import"./index-H1EXaXUo.js";import"./Button.styled-fGz7p1PP.js";import"./DropdownOption.styled-WDQMJYkj.js";import"./DropdownMenu--X_l1VJa.js";import"./z-index-zwCKGdcf.js";import"./useClickOutside-5i9YsATO.js";import"./hexToRgba-fpzAFQCT.js";import"./Portal-EY94Zi_-.js";import"./index-jmm5gWkb.js";import"./Info-eLlTCXLO.js";import"./ArrowRight-R00SQyn0.js";import"./debounce-hfrKQpz_.js";import"./IconButton--b11-rHN.js";import"./constants-libmexsO.js";import"./Error-bZYIneX_.js";const zo={title:"Data Display/Toast",component:y,argTypes:{type:{mapping:i,options:Object.values(i).filter(e=>typeof e=="string"),control:{type:"inline-radio"}}},render:({children:e,type:d,title:g,message:u,dismissible:h,...x})=>o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>T({type:d,title:g,message:u,dismissible:h,children:e}),type:"button",children:"Click me"}),o.jsx(k,{...x})]})},t={args:{type:i.Success,title:"success",dismissible:!0,message:"This is a success message showed in the Toast.",onClose:()=>console.log("clicked")}},r={args:{type:i.Error,title:"error",message:"This is an error message showed in the Toast.",onClose:()=>console.log("clicked"),children:o.jsxs(o.Fragment,{children:[o.jsx(s,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 1"}),o.jsx(s,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 2"})]})}};var p,n,m;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(l=(c=r.parameters)==null?void 0:c.docs)==null?void 0:l.source}}};const Go=["Default","WithChildren"];export{t as Default,r as WithChildren,Go as __namedExportsOrder,zo as default};

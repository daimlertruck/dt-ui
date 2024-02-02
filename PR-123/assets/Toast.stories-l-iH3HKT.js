import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import"./index-lb1Yyg-x.js";import"./typography-i172ZzKq.js";import{T,a as e,e as h,b}from"./Toaster-_YoL_gBh.js";import{B as s}from"./Button-7iMPT5H8.js";import"./IconButton.styled-39rpUtWL.js";import"./Nav.styled-wZZ9GwDG.js";import"./NavContainer.styled-bHGHfkby.js";import"./Dropdown-E2NiqKVE.js";import"./Header.styled-eWFGRoIX.js";import"./ProfileInfo-wk6nHWvD.js";import"./index-4g5l5LRQ.js";import"./Tooltip-LOvNRh5a.js";import"./index-jmm5gWkb.js";import"./Avatar.styled-0ZAnmqU-.js";import"./NavItem.styled-BxyWYfVo.js";import"./Grid.styled-vRffuNmn.js";import"./Card-OnzBiy89.js";import"./Table.styled-YLe7EEgM.js";import"./Tag-xrGueKzV.js";import"./Box.styled-oB9eueTz.js";import"./Typography-rdSq6_KA.js";import"./Spinner.styled-2Rn7jPaQ.js";import"./LabelFied.styled-i3rg1hk1.js";import"./TextField.styled-YT1MGQwK.js";import"./SearchField.styled-gyZY-xru.js";import"./TextArea.styled-jtIE47Bf.js";import"./Toggle-5fw5uzDx.js";import"./Form-KvMY1sqm.js";import"./Footer.styled-q2F64OA1.js";import"./Link-h5OL-K5T.js";import"./Divider.styled-3Nhqj9z_.js";import"./Breadcrumb-Ft0keHhE.js";import"./Modal-1rO52p-I.js";import"./Counter-aYlenIO8.js";import"./List-cUdpPOYe.js";import"./DescriptionList-soZIKDf8.js";import"./Pagination-iaSJzG2c.js";import"./Tabs-cZ_63QZf.js";import"./Step-Ulgo8iWp.js";import"./CheckBox.styled-_L0ULugl.js";import"./Radio.styled-8Zpm3yia.js";import"./MultiSelect-GzpE5wQN.js";import"./EmptyState-Lciv-T99.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./Close-fCiS4iy8.js";import"./Spinner-FXl9lRAm.js";import"./index-H1EXaXUo.js";import"./Button.styled-fGz7p1PP.js";import"./DropdownOption.styled-WDQMJYkj.js";import"./DropdownMenu--X_l1VJa.js";import"./z-index-zwCKGdcf.js";import"./useClickOutside-5i9YsATO.js";import"./hexToRgba-fpzAFQCT.js";import"./Portal-EY94Zi_-.js";import"./Info-eLlTCXLO.js";import"./ArrowRight-R00SQyn0.js";import"./debounce-hfrKQpz_.js";import"./Backdrop-T_w_S3XD.js";import"./IconButton--b11-rHN.js";import"./constants-libmexsO.js";const Zo={title:"Data Display/Toast",component:T,argTypes:{type:{mapping:e,options:Object.values(e).filter(i=>typeof i=="string"),control:{type:"inline-radio"}}},render:({children:i,type:d,title:u,message:g,dismissible:y,...x})=>o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:()=>h({type:d,title:u,message:g,dismissible:y,children:i}),type:"button",children:"Click me"}),o.jsx(b,{...x})]})},t={args:{type:e.Success,title:"success",dismissible:!0,message:"The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.",onClose:()=>console.log("clicked")}},r={args:{type:e.Error,title:"success",message:"The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.",onClose:()=>console.log("clicked"),children:o.jsxs(o.Fragment,{children:[o.jsx(s,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 1"}),o.jsx(s,{color:"secondary",onClick:()=>console.log("clicked"),style:{padding:"8px 12px"},variant:"text",children:"Action 2"})]})}};var p,n,c;t.parameters={...t.parameters,docs:{...(p=t.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    type: ToastType.Success,
    title: 'success',
    dismissible: true,
    message: 'The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.',
    onClose: () => console.log('clicked')
  }
}`,...(c=(n=t.parameters)==null?void 0:n.docs)==null?void 0:c.source}}};var m,a,l;r.parameters={...r.parameters,docs:{...(m=r.parameters)==null?void 0:m.docs,source:{originalSource:`{
  args: {
    type: ToastType.Error,
    title: 'success',
    message: 'The Team ‘XYZ’ was created! You can now create your Apps and subscribe Products.',
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
}`,...(l=(a=r.parameters)==null?void 0:a.docs)==null?void 0:l.source}}};const Fo=["Default","WithChildren"];export{t as Default,r as WithChildren,Fo as __namedExportsOrder,Zo as default};

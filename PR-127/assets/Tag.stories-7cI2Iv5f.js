import{j as r}from"./jsx-runtime-CbCNBOXy.js";import{T as s,a as m}from"./Tag-v9QVZJWG.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Close-ix0QOkL6.js";import"./emotion-styled.browser.esm-MfHNkeEy.js";import"./emotion-element-c39617d8.browser.esm-HJoeL-IU.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";const j={title:"Data Display/Tag",component:s,argTypes:{onClick:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClick",undefined:"Does not have onClick"}}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}}}},g=({onClick:o,onClose:u,...a})=>r.jsx(s,{...a,...o&&{onClick:()=>console.log("clicked")},...u&&{onClose:()=>console.log("closed")},children:a.children}),e=g.bind({});e.args={children:"tag label",variant:"solid",size:"small",color:"primary",border:"squared",isClickable:!1,isDisabled:!1,onClick:void 0,onClose:void 0};const C=({...o})=>r.jsxs(m,{children:[r.jsx(s,{...o,children:o.children}),r.jsx(s,{...o,children:o.children})]}),n=C.bind({});n.args={children:"active",onClose:()=>null};var l,i,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
  onClick,
  onClose,
  ...props
}) => {
  return <Tag {...props} {...onClick && (({
    onClick: () => console.log('clicked')
  } as unknown) as TagProps['onClick'])} {...onClose && (({
    onClose: () => console.log('closed')
  } as unknown) as TagProps['onClose'])}>
      {props.children}
    </Tag>;
}`,...(t=(i=e.parameters)==null?void 0:i.docs)==null?void 0:t.source}}};var c,p,d;n.parameters={...n.parameters,docs:{...(c=n.parameters)==null?void 0:c.docs,source:{originalSource:`({
  ...props
}) => {
  return <TagGroup>
      <Tag {...props}>{props.children}</Tag>
      <Tag {...props}>{props.children}</Tag>
    </TagGroup>;
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const G=["Default","DefaultGroup"];export{e as Default,n as DefaultGroup,G as __namedExportsOrder,j as default};

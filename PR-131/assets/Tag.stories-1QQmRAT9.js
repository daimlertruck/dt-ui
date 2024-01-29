import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{T as s,a as g}from"./Tag-nnR3e7Vs.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Close-fCiS4iy8.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";const x={title:"Data Display/Tag",component:s,argTypes:{onClick:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClick",undefined:"Does not have onClick"}}},onClose:{options:[!0,void 0],control:{type:"radio",labels:{true:"Has onClose",undefined:"Does not have onClose"}}}}},m=({onClick:o,onClose:u,...a})=>r.jsx(s,{...a,...o&&{onClick:()=>console.log("clicked")},...u&&{onClose:()=>console.log("closed")},children:a.children}),e=m.bind({});e.args={children:"tag label",variant:"solid",size:"small",color:"primary",border:"squared",isClickable:!1,isDisabled:!1,onClick:void 0,onClose:void 0};const C=({...o})=>r.jsxs(g,{children:[r.jsx(s,{...o,children:o.children}),r.jsx(s,{...o,children:o.children})]}),n=C.bind({});n.args={children:"active",onClose:()=>null};var l,i,t;e.parameters={...e.parameters,docs:{...(l=e.parameters)==null?void 0:l.docs,source:{originalSource:`({
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
}`,...(d=(p=n.parameters)==null?void 0:p.docs)==null?void 0:d.source}}};const j=["Default","DefaultGroup"];export{e as Default,n as DefaultGroup,j as __namedExportsOrder,x as default};

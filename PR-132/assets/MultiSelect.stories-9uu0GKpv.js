import{j as l}from"./jsx-runtime-vNq4Oc-g.js";import{M as t}from"./MultiSelect-DDcbhH5V.js";import"./TooltipProvider-_0wtW8eX.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./index-H1EXaXUo.js";import"./Box.styled-oB9eueTz.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./Close-fCiS4iy8.js";import"./DropdownMenu-Dp4avPla.js";import"./z-index-zwCKGdcf.js";import"./Tag-nnR3e7Vs.js";import"./Typography-WNFydnn9.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./useClickOutside-5i9YsATO.js";const N={title:"Data Display/MultiSelect",component:t},r=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2",isRemovable:!0},{text:"Option 3",value:"3",isRemovable:!0},{text:"Option 4",value:"4",isRemovable:!0}],e=({options:n,...s})=>l.jsx(t,{defaultValue:[r[0],r[1]],children:l.jsx(t.Container,{children:l.jsx(t.Select,{label:"Label",placeholder:"Select the Items",...s,children:n.map(o=>l.jsx(t.Option,{option:o,children:o.text??o.value},o.value))})})});e.args={options:r,hasError:!1,isDisabled:!1};var i,p,a;e.parameters={...e.parameters,docs:{...(i=e.parameters)==null?void 0:i.docs,source:{originalSource:`({
  options,
  ...props
}: MultiSelectStoryProps) => {
  return <MultiSelect defaultValue={[OPTIONS[0], OPTIONS[1]]}>
      <MultiSelect.Container>
        <MultiSelect.Select label='Label' placeholder='Select the Items' {...props}>
          {options.map(option => <MultiSelect.Option key={option.value} option={option}>
              {option.text ?? option.value}
            </MultiSelect.Option>)}
        </MultiSelect.Select>
      </MultiSelect.Container>
    </MultiSelect>;
}`,...(a=(p=e.parameters)==null?void 0:p.docs)==null?void 0:a.source}}};const T=["Default"];export{e as Default,T as __namedExportsOrder,N as default};

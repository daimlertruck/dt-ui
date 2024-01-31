import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{D as o}from"./Dropdown-QMzpCofU.js";import"./typography-x6m-R7VO.js";import"./index-4g5l5LRQ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./DropdownOption.styled-WDQMJYkj.js";import"./DropdownMenu--X_l1VJa.js";import"./z-index-zwCKGdcf.js";import"./Typography-bxgesGP9.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./useClickOutside-5i9YsATO.js";const J={title:"Data Display/Dropdown",component:o},l=[{text:"Option 1",value:"1"},{text:"Option 2",value:"2"}],i=({options:r,defaultValue:t,...a})=>e.jsx(o,{defaultValue:t,children:e.jsx(o.Container,{children:e.jsx(o.Select,{label:"Label",...a,children:r.map(n=>e.jsx(o.Option,{option:n,children:n.text??n.value},n.value))})})});i.args={options:l,isDisabled:!1,hasBorder:!0,hasError:!1};const d=({options:r,defaultValue:t,...a})=>e.jsx(o,{defaultValue:t,children:e.jsx(o.Container,{children:e.jsx(o.Select,{label:"Label",...a,children:r.map(n=>e.jsx(o.Option,{option:n,children:n.text??n.value},n.value))})})});d.args={options:l,defaultValue:l[1],isDisabled:!1,hasBorder:!0};const u=({options:r,defaultValue:t,...a})=>e.jsx(o,{defaultValue:t,children:e.jsx(o.Container,{children:e.jsx(o.Select,{label:"Label",...a,children:r.map(n=>e.jsx(o.Option,{option:n,children:n.text??n.value},n.value))})})});u.args={options:l.slice(0,1),isDisabled:!1,hasBorder:!0};const c=({options:r,defaultValue:t,message:a,...n})=>e.jsx(o,{defaultValue:t,children:e.jsxs(o.Container,{children:[e.jsx(o.Select,{label:"Label",...n,children:r.map(p=>e.jsx(o.Option,{option:p,children:p.text??p.value},p.value))}),e.jsx(o.Detail,{children:a})]})});c.args={options:l.slice(0,1),message:"A short message.",isDisabled:!1,hasBorder:!0};const D=({options:r,defaultValue:t,message:a,...n})=>e.jsx(o,{defaultValue:t,children:e.jsxs(o.Container,{children:[e.jsx(o.Select,{label:"Label",...n,children:r.map(p=>{const s={value:p.value};return e.jsx(o.Option,{option:s,children:(s==null?void 0:s.text)??s.value},p.value)})}),e.jsx(o.Detail,{children:a})]})});D.args={options:l,isDisabled:!1,hasBorder:!0};var m,w,x;i.parameters={...i.parameters,docs:{...(m=i.parameters)==null?void 0:m.docs,source:{originalSource:`({
  options,
  defaultValue,
  ...props
}: DropdownStoryProps) => {
  return <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map(option => <Dropdown.Option key={option.value} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>)}
        </Dropdown.Select>
      </Dropdown.Container>
    </Dropdown>;
}`,...(x=(w=i.parameters)==null?void 0:w.docs)==null?void 0:x.source}}};var h,O,f;d.parameters={...d.parameters,docs:{...(h=d.parameters)==null?void 0:h.docs,source:{originalSource:`({
  options,
  defaultValue,
  ...props
}: DropdownStoryProps) => {
  return <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map(option => <Dropdown.Option key={option.value} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>)}
        </Dropdown.Select>
      </Dropdown.Container>
    </Dropdown>;
}`,...(f=(O=d.parameters)==null?void 0:O.docs)==null?void 0:f.source}}};var v,S,b;u.parameters={...u.parameters,docs:{...(v=u.parameters)==null?void 0:v.docs,source:{originalSource:`({
  options,
  defaultValue,
  ...props
}: DropdownStoryProps) => {
  return <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map(option => <Dropdown.Option key={option.value} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>)}
        </Dropdown.Select>
      </Dropdown.Container>
    </Dropdown>;
}`,...(b=(S=u.parameters)==null?void 0:S.docs)==null?void 0:b.source}}};var j,V,g;c.parameters={...c.parameters,docs:{...(j=c.parameters)==null?void 0:j.docs,source:{originalSource:`({
  options,
  defaultValue,
  message,
  ...props
}: DropdownStoryProps) => {
  return <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map(option => <Dropdown.Option key={option.value} option={option}>
              {option.text ?? option.value}
            </Dropdown.Option>)}
        </Dropdown.Select>
        <Dropdown.Detail>{message}</Dropdown.Detail>
      </Dropdown.Container>
    </Dropdown>;
}`,...(g=(V=c.parameters)==null?void 0:V.docs)==null?void 0:g.source}}};var C,y,L;D.parameters={...D.parameters,docs:{...(C=D.parameters)==null?void 0:C.docs,source:{originalSource:`({
  options,
  defaultValue,
  message,
  ...props
}: DropdownStoryProps) => {
  return <Dropdown defaultValue={defaultValue}>
      <Dropdown.Container>
        <Dropdown.Select label='Label' {...props}>
          {options.map(option => {
          const internalOption: DropdownOptionValue = {
            value: option.value
          };
          return <Dropdown.Option key={option.value} option={internalOption}>
                {internalOption?.text ?? internalOption.value}
              </Dropdown.Option>;
        })}
        </Dropdown.Select>
        <Dropdown.Detail>{message}</Dropdown.Detail>
      </Dropdown.Container>
    </Dropdown>;
}`,...(L=(y=D.parameters)==null?void 0:y.docs)==null?void 0:L.source}}};const K=["Default","WithDefaultValue","WithOneOption","WithMessageOption","OptionsWithOnlyValue"];export{i as Default,D as OptionsWithOnlyValue,d as WithDefaultValue,c as WithMessageOption,u as WithOneOption,K as __namedExportsOrder,J as default};

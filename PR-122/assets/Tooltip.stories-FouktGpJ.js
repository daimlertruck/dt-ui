import{j as t}from"./jsx-runtime-CbCNBOXy.js";import{n as p}from"./emotion-styled.browser.esm-yeljtSWm.js";import"./index-9BaFkuMC.js";import"./Box.styled-0PR27JmK.js";import"./TooltipProvider-pK6yN7rV.js";import"./Typography-yGibSjxV.js";import"./Spinner.styled-rmxTGO73.js";import"./Button.styled-JMA4V0n6.js";import{I as m}from"./IconButton-IYnpnAtS.js";import{T as e,O as h,a as u}from"./Tooltip-QjaVfdnv.js";import"./index-IybTgENJ.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-use-insertion-effect-with-fallbacks.browser.esm-_OkO9XJu.js";import"./emotion-react.browser.esm-bvpyIPwg.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-HrY-sHGj.js";import"./IconButton.styled-exhLHJAm.js";import"./Portal-cbzhSllL.js";import"./index-xIHD0DlW.js";import"./z-index-mmXzY7sY.js";const x=n=>t.jsxs("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...n,children:[t.jsxs("g",{clipPath:"url(#clip0_287_3834)",children:[t.jsx("path",{d:"M8 9H16V19H8V9Z",fill:"currentColor",opacity:"0.3"}),t.jsx("path",{d:"M15.5 4L14.5 3H9.5L8.5 4H5V6H19V4H15.5ZM6 19C6 20.1 6.9 21 8 21H16C17.1 21 18 20.1 18 19V7H6V19ZM8 9H16V19H8V9Z",fill:"currentColor"})]}),t.jsx("defs",{children:t.jsx("clipPath",{id:"clip0_287_3834",children:t.jsx("rect",{fill:"white",height:"24",width:"24"})})})]}),F={title:"Data Display/Tooltip",component:e},g=p.div`
  text-align: center;
  margin-top: 100px;
`,j=({container:{children:n,hideDelay:c},content:{children:s,direction:a,background:d}})=>t.jsx(g,{children:t.jsxs(e,{hideDelay:c,children:[n,t.jsx(e.Content,{background:d,direction:a,children:s})]})}),o=j.bind({});o.args={container:{hideDelay:0,children:t.jsx(m,{color:"error",dataTestId:"delete-access-id-button-",isDisabled:!1,onClick:()=>console.log("hey"),children:t.jsx(x,{})})},content:{direction:h.Top,background:u.Full,children:"Delete"}};var r,i,l;o.parameters={...o.parameters,docs:{...(r=o.parameters)==null?void 0:r.docs,source:{originalSource:`({
  container: {
    children,
    hideDelay
  },
  content: {
    children: contentChildren,
    direction,
    background
  }
}) => {
  return <StyledContainer>
      <Tooltip hideDelay={hideDelay}>
        {children}
        <Tooltip.Content background={background} direction={direction}>
          {contentChildren}
        </Tooltip.Content>
      </Tooltip>
    </StyledContainer>;
}`,...(l=(i=o.parameters)==null?void 0:i.docs)==null?void 0:l.source}}};const R=["Default"];export{o as Default,R as __namedExportsOrder,F as default};

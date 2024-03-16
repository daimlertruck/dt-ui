import{j as o}from"./jsx-runtime-CKrituN3.js";import{B as i}from"./Button-BgsA7i9J.js";import"./Button.styled-CrKUpX37.js";import{r as c}from"./index-CBqU2yxZ.js";import{M as t,O as M}from"./Modal-B_cg73KP.js";import"./Spinner-B4SWVbj5.js";import"./index-gq_RjDZX.js";import"./Box.styled-B8MVCI1k.js";import"./emotion-styled.browser.esm-DhD7UCCJ.js";import"./extends-DJVMZnyl.js";import"./emotion-element-43c6fea0.browser.esm-CsO0Y6lU.js";import"./_commonjsHelpers-BosuxZz1.js";import"./Typography-DreKLixn.js";import"./index-DkmeO_0L.js";import"./index-BtM5VmRH.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./Spinner.styled-8BV7AkYo.js";import"./Backdrop-CTPc9cxr.js";import"./z-index-Bx-k-k_v.js";import"./hexToRgba-DXb69hOD.js";import"./Portal-U_0UEmB3.js";import"./useClickOutside-D7JrBqcS.js";import"./Close-CGHfkSk3.js";import"./IconButton-BS2RgPV3.js";const b=(e=!1)=>{const[a,n]=c.useState(!!e);return c.useEffect(()=>{n(e)},[e]),{isModalOpen:a,toggleModal:()=>{n(s=>!s)}}},W={title:"Data Display/Modal",component:t,argTypes:{hasHeaderBorder:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add bottom border to Header"},hasHeaderBackgroundColor:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add background color to Header"},hasFooterBorder:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add top border to footer"},hasFooterBackgroundColor:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add background color to Footer"},hasClickOutside:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Enables click outside to trigger close action"},isLoading:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Adds loading spinner and overlay"}}},y=({actionTitle:e,content:a,title:n,subTitle:d,hasClickOutside:s,hasHeaderBorder:h,hasHeaderBackgroundColor:g,hasFooterBorder:C,hasFooterBackgroundColor:B,isLoading:f})=>{const{isModalOpen:k,toggleModal:l}=b();return o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:l,type:"button",children:"Click me"}),o.jsx(M,{isOpen:k,children:o.jsxs(t,{handleClose:l,hasClickOutside:s,isLoading:f,children:[o.jsx(t.Header,{handleClose:l,hasBackgroundColor:g,hasBorder:h,subTitle:d,title:n}),a?o.jsx(t.Content,{children:o.jsx("p",{children:a})}):null,o.jsxs(t.Footer,{hasBackgroundColor:B,hasBorder:C,children:[o.jsx(i,{color:"secondary",dataTestId:"cancel",onClick:l,variant:"outlined",children:"Cancel"}),o.jsx(i,{dataTestId:"action",onClick:()=>null,children:e})]})]})})]})},r=y.bind({});r.args={actionTitle:"Action",content:"Some content here",title:"Title",subTitle:"Some random Subtitle here",hasHeaderBorder:!1,hasHeaderBackgroundColor:!1,hasFooterBorder:!1,hasFooterBackgroundColor:!1,hasClickOutside:!1,isLoading:!1};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`({
  actionTitle,
  content,
  title,
  subTitle,
  hasClickOutside,
  hasHeaderBorder,
  hasHeaderBackgroundColor,
  hasFooterBorder,
  hasFooterBackgroundColor,
  isLoading
}) => {
  const {
    isModalOpen,
    toggleModal
  } = useModal();
  return <>
      <button onClick={toggleModal} type='button'>
        Click me
      </button>
      <Overlay isOpen={isModalOpen}>
        <Modal handleClose={toggleModal} hasClickOutside={hasClickOutside} isLoading={isLoading}>
          <Modal.Header handleClose={toggleModal} hasBackgroundColor={hasHeaderBackgroundColor} hasBorder={hasHeaderBorder} subTitle={subTitle} title={title} />
          {content ? <Modal.Content>
              <p>{content}</p>
            </Modal.Content> : null}
          <Modal.Footer hasBackgroundColor={hasFooterBackgroundColor} hasBorder={hasFooterBorder}>
            <Button color='secondary' dataTestId='cancel' onClick={toggleModal} variant='outlined'>
              Cancel
            </Button>
            <Button dataTestId='action' onClick={() => null}>
              {actionTitle}
            </Button>
          </Modal.Footer>
        </Modal>
      </Overlay>
    </>;
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const X=["Default"];export{r as Default,X as __namedExportsOrder,W as default};

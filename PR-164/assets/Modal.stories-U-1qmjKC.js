import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{B as i}from"./Button-H9BT5Rrr.js";import"./IconButton.styled-B_RRHdai.js";import{r as c}from"./index-4g5l5LRQ.js";import{M as t,O as M}from"./Modal-Er-LA5ue.js";import"./Spinner-TJ4Xns0i.js";import"./index-lOH_pZ5X.js";import"./Box.styled-zcGhU7kj.js";import"./emotion-styled.browser.esm-QTPHyGVR.js";import"./extends-E30VzY7q.js";import"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Typography-D6FO4u36.js";import"./MultiSelectProvider-vrdgqO57.js";import"./Spinner.styled-euKDJvzq.js";import"./emotion-react.browser.esm-OUs2k2GK.js";import"./Button.styled-bXS5oslU.js";import"./Backdrop-UR-1KdrD.js";import"./index-J-zQttXR.js";import"./index-jmm5gWkb.js";import"./index-XRl7aEt-.js";import"./util-p6oSlpjm.js";import"./index-5tMk2lpP.js";import"./z-index-zwCKGdcf.js";import"./hexToRgba-fpzAFQCT.js";import"./Portal-EY94Zi_-.js";import"./useClickOutside-5i9YsATO.js";import"./Close-fCiS4iy8.js";import"./IconButton-q8eJfSTD.js";const b=(e=!1)=>{const[a,n]=c.useState(!!e);return c.useEffect(()=>{n(e)},[e]),{isModalOpen:a,toggleModal:()=>{n(s=>!s)}}},Z={title:"Data Display/Modal",component:t,argTypes:{hasHeaderBorder:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add bottom border to Header"},hasHeaderBackgroundColor:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add background color to Header"},hasFooterBorder:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add top border to footer"},hasFooterBackgroundColor:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add background color to Footer"},hasClickOutside:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Enables click outside to trigger close action"},isLoading:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Adds loading spinner and overlay"}}},y=({actionTitle:e,content:a,title:n,subTitle:d,hasClickOutside:s,hasHeaderBorder:h,hasHeaderBackgroundColor:g,hasFooterBorder:C,hasFooterBackgroundColor:B,isLoading:f})=>{const{isModalOpen:k,toggleModal:l}=b();return o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:l,type:"button",children:"Click me"}),o.jsx(M,{isOpen:k,children:o.jsxs(t,{handleClose:l,hasClickOutside:s,isLoading:f,children:[o.jsx(t.Header,{handleClose:l,hasBackgroundColor:g,hasBorder:h,subTitle:d,title:n}),a?o.jsx(t.Content,{children:o.jsx("p",{children:a})}):null,o.jsxs(t.Footer,{hasBackgroundColor:B,hasBorder:C,children:[o.jsx(i,{color:"secondary",dataTestId:"cancel",onClick:l,variant:"outlined",children:"Cancel"}),o.jsx(i,{dataTestId:"action",onClick:()=>null,children:e})]})]})})]})},r=y.bind({});r.args={actionTitle:"Action",content:"Some content here",title:"Title",subTitle:"Some random Subtitle here",hasHeaderBorder:!1,hasHeaderBackgroundColor:!1,hasFooterBorder:!1,hasFooterBackgroundColor:!1,hasClickOutside:!1,isLoading:!1};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const $=["Default"];export{r as Default,$ as __namedExportsOrder,Z as default};

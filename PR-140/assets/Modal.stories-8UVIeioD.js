import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{B as i}from"./Button-8muNlxk8.js";import"./IconButton.styled-39rpUtWL.js";import{r as c}from"./index-4g5l5LRQ.js";import{M as t,O as M}from"./Modal-fTTOBaHr.js";import"./Spinner-VIKuw408.js";import"./index-H1EXaXUo.js";import"./Box.styled-oB9eueTz.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./Typography-GeESgPPh.js";import"./typography--O4Wr7D9.js";import"./index-lb1Yyg-x.js";import"./emotion-react.browser.esm-7R29exhq.js";import"./index-XRl7aEt-.js";import"./index-5tMk2lpP.js";import"./util-p6oSlpjm.js";import"./Spinner.styled-2Rn7jPaQ.js";import"./Button.styled-fGz7p1PP.js";import"./Close-fCiS4iy8.js";import"./useClickOutside-5i9YsATO.js";import"./Backdrop-e_xTm6dU.js";import"./z-index-zwCKGdcf.js";import"./hexToRgba-fpzAFQCT.js";import"./IconButton--b11-rHN.js";import"./Portal-EY94Zi_-.js";import"./index-jmm5gWkb.js";const b=(e=!1)=>{const[a,n]=c.useState(!!e);return c.useEffect(()=>{n(e)},[e]),{isModalOpen:a,toggleModal:()=>{n(s=>!s)}}},Y={title:"Data Display/Modal",component:t,argTypes:{hasHeaderBorder:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add bottom border to Header"},hasHeaderBackgroundColor:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add background color to Header"},hasFooterBorder:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add top border to footer"},hasFooterBackgroundColor:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Add background color to Footer"},hasClickOutside:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Enables click outside to trigger close action"},isLoading:{control:{type:"boolean"},defaultValue:{summary:!1},description:"Adds loading spinner and overlay"}}},y=({actionTitle:e,content:a,title:n,subTitle:d,hasClickOutside:s,hasHeaderBorder:h,hasHeaderBackgroundColor:g,hasFooterBorder:C,hasFooterBackgroundColor:B,isLoading:f})=>{const{isModalOpen:k,toggleModal:l}=b();return o.jsxs(o.Fragment,{children:[o.jsx("button",{onClick:l,type:"button",children:"Click me"}),o.jsx(M,{isOpen:k,children:o.jsxs(t,{handleClose:l,hasClickOutside:s,isLoading:f,children:[o.jsx(t.Header,{handleClose:l,hasBackgroundColor:g,hasBorder:h,subTitle:d,title:n}),a?o.jsx(t.Content,{children:o.jsx("p",{children:a})}):null,o.jsxs(t.Footer,{hasBackgroundColor:B,hasBorder:C,children:[o.jsx(i,{color:"secondary",dataTestId:"cancel",onClick:l,variant:"outlined",children:"Cancel"}),o.jsx(i,{dataTestId:"action",onClick:()=>null,children:e})]})]})})]})},r=y.bind({});r.args={actionTitle:"Action",content:"Some content here",title:"Title",subTitle:"Some random Subtitle here",hasHeaderBorder:!1,hasHeaderBackgroundColor:!1,hasFooterBorder:!1,hasFooterBackgroundColor:!1,hasClickOutside:!1,isLoading:!1};var u,p,m;r.parameters={...r.parameters,docs:{...(u=r.parameters)==null?void 0:u.docs,source:{originalSource:`({
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
}`,...(m=(p=r.parameters)==null?void 0:p.docs)==null?void 0:m.source}}};const Z=["Default"];export{r as Default,Z as __namedExportsOrder,Y as default};

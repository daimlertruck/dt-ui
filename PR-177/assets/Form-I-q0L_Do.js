import{n as o}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{j as n}from"./jsx-runtime-vNq4Oc-g.js";import{T as l,a as d}from"./Tooltip-iOfpf38U.js";import{I as p}from"./Message--86pBn_H.js";import{T as c}from"./Typography-D6FO4u36.js";o.button`
  ${({theme:t,disabled:e})=>`
    background-color: transparent;
    border: none;
    cursor: ${e?"default":"pointer"};
    display: flex;
    align-items: center;
    gap: 2;

    svg:first-of-type {
      margin-left: ${t.spacing.small};
    }
  `}
`;const w=o.div`
  display: block;
  height: auto;
  width: 100%;
  position: relative;
`,j=o.input`
  ${({theme:t,hasError:e,disabled:i})=>`
    ${t.fontStyles.body2}

    background-color: ${i?t.palette.base.light:t.palette.base.default};
    border-radius: ${t.shape.textField};

    // Change border based on input status
    border: ${e?`1px solid ${t.palette.error.default}`:`1px solid ${t.palette.border.default}`};

    color: ${i?t.palette.content.disabled:t.palette.content.body};
    min-width: 198px;
    padding: 20px 15px 5px 15px;
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 53px;
  `}
`,v=o.span`
  color: ${({theme:t,hasError:e})=>e?t.palette.error.default:t.palette.content.secondary};
`,T=o.span`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 24px;
  height: 24px;
`,F=o.div`
  padding-left: 15px;
`,I=o.span`
  align-items: center;
  background-color: ${({theme:t})=>t.palette.base.default};
  cursor: pointer;
  display: flex;
  flex-flow: column nowrap;
  height: 35px;
  justify-content: space-around;
  position: absolute;
  right: 10px;
  top: 10px;
  width: 35px;

  svg {
    fill: ${({theme:t})=>t.palette.content.body};
    transition: all 0.2s ease-in-out;
  }

  &:hover {
    svg {
      fill: ${({theme:t})=>t.palette.content.heading};
    }
  }
`,x=o.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({theme:t})=>t.spacing.medium};
`,u=o.div`
  row-gap: ${({theme:t})=>t.spacing.xmedium};
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({theme:t})=>t.palette.content.body};
`,f=o.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`,g=o.div`
  ${({theme:t,disabled:e})=>`
    display: flex;
    column-gap: ${t.spacing.xmedium};
    justify-content: stretch;
    align-items: start;
    ${e&&`
        opacity: 0.5;
        pointer-events: none;
      `}
  `}
`,y=t=>t.preventDefault(),a=({children:t,dataTestId:e,style:i,onSubmit:s=y})=>{const r=e??"test-form";return n.jsx(x,{"data-testid":r,onSubmit:s,style:i,children:t})};a.Group=({children:t,isDisabled:e,title:i,tooltip:s})=>n.jsxs(u,{children:[i?n.jsxs(f,{children:[n.jsx(c,{color:"primary.default",fontStyles:"h6",style:{textTransform:"uppercase"},children:i}),s?n.jsxs(l,{children:[n.jsx(p,{height:"16",width:"16"}),n.jsx(l.Content,{direction:d.Right,style:{maxWidth:250},children:s})]}):null]}):null,n.jsx(g,{disabled:e,children:t})]});const k=a;export{k as F,T as I,v as L,I as S,w as T,j as a,F as b};

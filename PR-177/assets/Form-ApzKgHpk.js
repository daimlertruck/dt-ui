import{n as e}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{j as r}from"./jsx-runtime-vNq4Oc-g.js";import{T as n,a as d}from"./Tooltip-7z1FKPw1.js";import{I as p}from"./Message--86pBn_H.js";import{T as c}from"./Typography-D6FO4u36.js";e.button`
  ${({theme:t,disabled:o})=>`
    background-color: transparent;
    border: none;
    cursor: ${o?"default":"pointer"};
    display: flex;
    align-items: center;
    gap: 2;

    svg:first-of-type {
      margin-left: ${t.spacing.small};
    }
  `}
`;const w=e.div`
  display: block;
  height: auto;
  width: 100%;
  position: relative;
`,T=e.input`
  ${({theme:t,hasError:o,disabled:l})=>`
    ${t.fontStyles.pSmall}

    background-color: ${l?t.palette.base.light:t.palette.base.default};
    border: 1px solid ${t.palette.border.default};
    border-radius: ${t.radius["6xs"]};

    // Change border based on input status
    border: ${o?`1px solid ${t.palette.error.default}`:`1px solid ${t.palette.border.default}`};

    color: ${l?t.palette.content.disabled:t.palette.secondary.default};
    min-width: 198px;
    padding: 20px 15px 5px 15px;
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 53px;
  `}
`,j=e.span`
  color: ${({theme:t,hasError:o,isActive:l})=>o?t.palette.error.default:l?t.palette.secondary.default:t.colors.grey_40};
`,v=e.span`
  color: ${({theme:t})=>t.palette.error.default};
`,F=e.span`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 24px;
  height: 24px;
`,I=e.div`
  padding-left: 15px;
`,L=e.span`
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
`,u=e.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  row-gap: ${({theme:t})=>t.spacing.medium};
`,x=e.div`
  row-gap: ${({theme:t})=>t.spacing.xmedium};
  display: flex;
  flex-direction: column;
  width: 100%;
  color: ${({theme:t})=>t.palette.content.body};
`,f=e.div`
  display: flex;
  flex-direction: row;
  column-gap: 10px;
  align-items: center;
`,g=e.div`
  ${({theme:t,disabled:o})=>`
    display: flex;
    column-gap: ${t.spacing.xmedium};
    justify-content: stretch;
    align-items: start;
    ${o&&`
        opacity: 0.5;
        pointer-events: none;
      `}
  `}
`,y=t=>t.preventDefault(),s=({children:t,dataTestId:o,style:l,onSubmit:a=y})=>{const i=o??"test-form";return r.jsx(u,{"data-testid":i,onSubmit:a,style:l,children:t})};s.Group=({children:t,isDisabled:o,title:l,tooltip:a})=>r.jsxs(x,{children:[l?r.jsxs(f,{children:[r.jsx(c,{color:"primary.default",fontStyles:"h6",style:{textTransform:"uppercase"},children:l}),a?r.jsxs(n,{children:[r.jsx(p,{height:"16",width:"16"}),r.jsx(n.Content,{direction:d.Right,style:{maxWidth:250},children:a})]}):null]}):null,r.jsx(g,{disabled:o,children:t})]});const k=s;export{k as F,F as I,j as L,L as S,w as T,v as a,T as b,I as c};

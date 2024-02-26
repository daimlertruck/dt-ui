import{n as e}from"./emotion-styled.browser.esm-QTPHyGVR.js";import{j as l}from"./jsx-runtime-vNq4Oc-g.js";import{T as s,a as d}from"./Tooltip-R0WK66Ug.js";import{I as p}from"./Message--86pBn_H.js";import{T as c}from"./Typography-D6FO4u36.js";e.button`
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
`,j=e.input`
  ${({theme:t,hasError:o,disabled:i})=>`
    ${t.fontStyles.pSmall}

    background-color: ${i?t.palette.base.light:t.palette.base.default};
    border: 1px solid ${t.palette.border.default};
    border-radius: ${t.radius["6xs"]};

    // Change border based on input status
    border: ${o?`1px solid ${t.palette.error.default}`:`1px solid ${t.palette.border.default}`};

    color: ${i?t.palette.content.disabled:t.palette.content.body};
    min-width: 198px;
    padding: 20px 15px 5px 15px;
    transition: all 0.2s ease-in-out;
    width: 100%;
    height: 53px;
  `}
`,v=e.span`
  position: absolute;
  right: 15px;
  top: 15px;
  width: 24px;
  height: 24px;
  cursor: not-allowed;
  color: ${({theme:t})=>t.palette.error.default};
`,T=e.div`
  padding-left: 15px;
`,F=e.span`
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
`,m=t=>t.preventDefault(),a=({children:t,dataTestId:o,style:i,onSubmit:n=m})=>{const r=o??"test-form";return l.jsx(u,{"data-testid":r,onSubmit:n,style:i,children:t})};a.Group=({children:t,isDisabled:o,title:i,tooltip:n})=>l.jsxs(x,{children:[i?l.jsxs(f,{children:[l.jsx(c,{color:"primary.default",fontStyles:"h6",style:{textTransform:"uppercase"},children:i}),n?l.jsxs(s,{children:[l.jsx(p,{height:"16",width:"16"}),l.jsx(s.Content,{direction:d.Right,style:{maxWidth:250},children:n})]}):null]}):null,l.jsx(g,{disabled:o,children:t})]});const I=a;export{I as F,v as I,F as S,w as T,j as a,T as b};

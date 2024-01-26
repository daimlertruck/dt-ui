import{j as o}from"./jsx-runtime-CbCNBOXy.js";import{W as d}from"./Warning-rclJqbPA.js";import{I as c}from"./Info-qTLqlLM2.js";import{E as p}from"./Error-66i8C3IS.js";import{n as i}from"./emotion-styled.browser.esm-yeljtSWm.js";const x=i.div`
  ${({type:r,theme:t})=>`
    display: flex;
    flex-direction: row;
    align-items: center;
    padding: 16px 14px;
    gap: 18px;
    border: 2px solid ${t.palette[r].default};
    border-radius: 2px;
  `}
`,m=i.div`
  width: 24px;
  height: 24px;
  color: ${({theme:r,type:t})=>r.palette[t].default};
  mix-blend-mode: normal;
`,f=i.div`
  ${({theme:r})=>`
    ${r.fontStyles.pSmall};
    color: ${r.palette.content.body};
    height: 100%;
  `}
`;var n=(r=>(r.Error="error",r.Warning="warning",r.Info="informative",r))(n||{});const g={[n.Error]:p,[n.Warning]:d,[n.Info]:c},$=({children:r,dataTestId:t,type:e,style:a})=>{const s=g[e],l=t??"alert";return o.jsxs(x,{"data-testid":l,style:a,type:e,children:[o.jsx(m,{type:e,children:o.jsx(s,{})}),o.jsx(f,{children:r})]})};export{$ as A,n as a};

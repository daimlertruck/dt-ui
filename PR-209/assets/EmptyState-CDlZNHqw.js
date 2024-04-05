import{j as n}from"./jsx-runtime-CKrituN3.js";import{T as s}from"./Typography-DeSH24ip.js";import{n as i}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const d=i.div`
  ${({theme:t})=>`
    padding: ${t.spacing.l} ${t.spacing.s};
    background-color: ${t.palette.base.light};
    flex-direction: column;
    display: flex;
    align-items: center;
    justify-content: center;
    border-radius: ${t.shape.emptyState};
    border: 1px dashed ${t.palette.border.default};
    width: 100%;
    height: 100%;
    gap: ${t.spacing.xs};
    
    @media only screen and (min-width: ${t.breakpoints.s}) {
      padding: ${t.spacing["2xl"]} ${t.spacing["5xl"]};
    }
  `}
`,r=i.div`
  flex-direction: column;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  ${({theme:t})=>`
      gap: ${t.spacing["4xs"]};

      @media only screen and (min-width: ${t.breakpoints.s}) {
        gap: ${t.spacing["3xs"]};
      }
  `}
`,c=({children:t,dataTestId:e,style:a})=>n.jsx(d,{"data-testid":e??"empty-state",style:a,children:t});c.Content=({dataTestId:t,style:e,title:a,description:o})=>n.jsxs(r,{"data-testid":t??"empty-state-content",style:e,children:[n.jsx(s,{color:"content.heading",element:"h2",fontStyles:"h4",children:a}),n.jsx(s,{color:"content.body",fontStyles:"body1",children:o})]});export{c as E};

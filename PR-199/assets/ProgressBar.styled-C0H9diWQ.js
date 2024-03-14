import{n as e}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const n={small:"4px",large:"8px"},s=r=>({active:{background:r.palette.informative.default,helper:r.palette.content.secondary,percentage:r.palette.content.body},success:{background:r.palette.success.default,helper:r.palette.content.secondary,percentage:r.palette.content.body},error:{background:r.palette.error.default,helper:r.palette.error.default,percentage:r.palette.error.default}}),l=e.div`
  ${({theme:r})=>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${r.spacing["5xs"]};
    min-width: 48px;
  `}
`,p=e.div`
  ${({theme:r})=>`
    display: grid;
    grid-template-columns: minmax(48px, 1fr) 28px 16px;
    align-items: center;
    gap: ${r.spacing["5xs"]};
    width: 100%;
    height: 16px;
  `}
`,c=e.div`
  ${({theme:r,size:a,state:t,progress:o})=>`
    width: ${o}%;
    height: ${n[a]};
    background-color: ${s(r)[t].background};
    transition: width 0.2s ease-in-out;
    border-radius: ${r.radius.none} ${r.shape.progressbar} ${r.shape.progressbar} ${r.radius.none}; 
  `};
`,i=e.div`
  ${({theme:r})=>`
    width: 100%;
    background-color: ${r.palette.secondary.medium};
    border-radius: ${r.shape.progressbar};
    overflow: hidden;
  `};
`,g=e.p`
  ${({theme:r,state:a})=>`
    ${r.fontStyles.body3}
    color: ${s(r)[a].helper};
  `};
`,u=e.div`
  ${({theme:r,state:a})=>`
    ${r.fontStyles.body3}
    text-align: center;
    color: ${s(r)[a].percentage};
  `};
`,$=e.div`
  height: 16px;
  line-height: 16px;
`;export{l as P,p as a,i as b,c,g as d,u as e,$ as f};

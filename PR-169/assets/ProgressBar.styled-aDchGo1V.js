import{n as a}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const n={small:"4px",large:"8px"},t=e=>({active:{background:e.palette.informative.default,helper:e.palette.content.secondary,percentage:e.palette.content.body,icon:e.palette.content.body},success:{background:e.palette.success.default,helper:e.palette.content.secondary,percentage:e.palette.content.body,icon:e.palette.success.default},error:{background:e.palette.error.default,helper:e.palette.error.default,percentage:e.palette.error.default,icon:e.palette.error.default}}),d=a.div`
  ${({theme:e})=>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${e.spacing["5xs"]};
    min-width: 48px;
  `}
`,c=a.div`
  ${({theme:e})=>`
    display: grid;
    grid-template-columns: minmax(48px, 1fr) 28px 16px;
    align-items: center;
    gap: ${e.spacing["5xs"]};
    width: 100%;
    height: 16px;
  `}
`,p=a.div`
  ${({theme:e,size:r,state:o,progress:s})=>`
    width: ${s}%;
    height: ${n[r]};
    background-color: ${t(e)[o].background};
    transition: width 0.2s ease-in-out;
    border-radius: ${e.radius.none} ${e.shape.progressbar} ${e.shape.progressbar} ${e.radius.none}; 
  `};
`,i=a.div`
  ${({theme:e})=>`
    width: 100%;
    background-color: ${e.palette.secondary.medium};
    border-radius: ${e.shape.progressbar};
    overflow: hidden;
  `};
`,g=a.p`
  ${({theme:e,state:r})=>`
    ${e.fontStyles.body3}
    color: ${t(e)[r].helper};
  `};
`,u=a.div`
  ${({theme:e,state:r})=>`
    ${e.fontStyles.body3}
    text-align: center;
    color: ${t(e)[r].percentage};
  `};
`,$=a.div`
  ${({theme:e,state:r})=>`
    height: 16px;
    color: ${t(e)[r].icon};
    line-height: 16px;
  `};
`;export{d as P,c as a,i as b,p as c,g as d,u as e,$ as f};

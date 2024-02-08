import{j as o}from"./jsx-runtime-vNq4Oc-g.js";import{n as t}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const d=r=>o.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...r,children:o.jsx("path",{d:"M12 0C5.376 0 0 5.376 0 12C0 18.624 5.376 24 12 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 12 0ZM12 21.6C6.708 21.6 2.4 17.292 2.4 12C2.4 6.708 6.708 2.4 12 2.4C17.292 2.4 21.6 6.708 21.6 12C21.6 17.292 17.292 21.6 12 21.6ZM17.508 6.696L9.6 14.604L6.492 11.508L4.8 13.2L9.6 18L19.2 8.4L17.508 6.696Z",fill:"currentColor"})}),p=r=>o.jsx("svg",{fill:"none",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...r,children:o.jsx("path",{d:"M11.988 0C5.364 0 0 5.376 0 12C0 18.624 5.364 24 11.988 24C18.624 24 24 18.624 24 12C24 5.376 18.624 0 11.988 0ZM12 21.6C6.696 21.6 2.4 17.304 2.4 12C2.4 6.696 6.696 2.4 12 2.4C17.304 2.4 21.6 6.696 21.6 12C21.6 17.304 17.304 21.6 12 21.6ZM10.8 15.6H13.2V18H10.8V15.6ZM10.8 6H13.2V13.2H10.8V6Z",fill:"currentColor"})}),l={small:"4px",large:"8px"},s=r=>({active:{background:r.palette.informative.default,helper:r.palette.content.secondary,percentage:r.palette.content.body,icon:r.palette.content.body},success:{background:r.palette.success.default,helper:r.palette.content.secondary,percentage:r.palette.content.body,icon:r.palette.success.default},error:{background:r.palette.error.default,helper:r.palette.error.default,percentage:r.palette.error.default,icon:r.palette.error.default}}),g=t.div`
  ${({theme:r})=>`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: ${r.spacing["5xs"]};
    min-width: 48px;
  `}
`,u=t.div`
  ${({theme:r})=>`
    display: grid;
    grid-template-columns: minmax(48px, 1fr) 28px 16px;
    align-items: center;
    gap: ${r.spacing["5xs"]};
    width: 100%;
    height: 16px;
  `}
`,x=t.div`
  ${({theme:r,size:e,state:a,progress:n})=>`
    width: ${n}%;
    height: ${l[e]};
    background-color: ${s(r)[a].background};
    transition: width 0.2s ease-in-out;
    border-radius: ${r.radius.none} ${r.shape.progressbar} ${r.shape.progressbar} ${r.radius.none}; 
  `};
`,C=t.div`
  ${({theme:r})=>`
    width: 100%;
    background-color: ${r.palette.secondary.medium};
    border-radius: ${r.shape.progressbar};
    overflow: hidden;
  `};
`,$=t.p`
  ${({theme:r,state:e})=>`
    ${r.fontStyles.body3}
    color: ${s(r)[e].helper};
  `};
`,f=t.div`
  ${({theme:r,state:e})=>`
    ${r.fontStyles.body3}
    text-align: center;
    color: ${s(r)[e].percentage};
  `};
`,y=t.div`
  ${({theme:r,state:e})=>`
    height: 16px;
    color: ${s(r)[e].icon};
    line-height: 16px;
  `};
`;export{d as C,p as E,g as P,u as a,C as b,x as c,$ as d,f as e,y as f};

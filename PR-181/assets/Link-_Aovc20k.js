import{j as d}from"./jsx-runtime-vNq4Oc-g.js";import{r as $}from"./index-4g5l5LRQ.js";import{n as p}from"./emotion-styled.browser.esm-QTPHyGVR.js";const b=r=>({primary:`
    color: ${r.palette.primary.default};
    background-color: ${r.palette.primary.contrast};
    border: 1px solid ${r.palette.primary.default};
    &:hover {
      color: ${r.palette.primary.dark};
      border: 1px solid ${r.palette.primary.dark};
    }
    &:active {
      color: ${r.palette.primary.dark};
      border: 1px solid ${r.palette.primary.dark};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${r.palette.primary.medium};
      border: 1px solid ${r.palette.primary.medium};
    }
  `,error:`
    color: ${r.palette.error.default};
    background-color: ${r.palette.error.contrast};
    border: 1px solid ${r.palette.error.default};
    &:hover {
      color: ${r.palette.error.dark};
      border: 1px solid ${r.palette.error.dark};
    }
    &:active {
      color: ${r.palette.error.dark};
      border: 1px solid ${r.palette.error.dark};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${r.palette.error.medium};
      border: 1px solid ${r.palette.error.medium};
    }
  `,secondary:`
    color: ${r.palette.secondary.default};
    background-color: ${r.palette.secondary.contrast};
    border: 1px solid ${r.palette.secondary.default};
    &:hover {
      color: ${r.palette.secondary.dark};
      border: 1px solid ${r.palette.secondary.dark};
    }
    &:active {
      color: ${r.palette.secondary.dark};
      border: 1px solid ${r.palette.secondary.dark};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${r.palette.secondary.medium};
      border: 1px solid ${r.palette.secondary.medium};
    }
  `}),y=(r,o,a)=>({solid:`
      border: ${o.spacing.none};
      color: ${o.palette[a].contrast};
      background-color: ${o.palette[a].default};
      
      &:hover {
        color: ${o.palette[a].contrast};
        background-color: ${o.palette[a].dark};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 38%;
      }
    `,outlined:b(o)[a],text:`
      border: none;
      color: ${o.palette[a].default};
      background-color: transparent;
      
      &:hover {
        color: ${o.palette[a].dark};
        background-color: transparent;
      }
      
      &:disabled {
        cursor: not-allowed;
        color: ${o.palette[a].medium};
      }
    `})[r],g=(r,o)=>({large:`
      ${o.fontStyles.button1}
      padding: ${o.spacing["2xs"]} ${o.spacing.s};
    `,medium:`
      ${o.fontStyles.button2}
      padding: ${o.spacing["3xs"]} ${o.spacing.xs};
    `,small:`
      ${o.fontStyles.button2}
      padding: ${o.spacing["4xs"]} ${o.spacing["2xs"]};
    `})[r],k=p.button`
  ${({theme:r,variant:o,color:a,size:t})=>`
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    min-width: 80px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    align-items: center;
    gap: ${r.spacing["4xs"]};
    border-radius: ${r.shape.button};
    
    ${g(t,r)}
    ${y(o,r,a)}

    @media only screen and (min-width: ${r.breakpoints.s}) {
      width: auto;
    }
  `}
`;var l=(r=>(r.Small="small",r.Medium="medium",r.Large="large",r))(l||{});const x=p.a`
  ${({theme:r,disabled:o,isUnderline:a,textSize:t})=>`
    color: ${r.palette.primary.default};
    text-decoration: ${a?"underline":"none"};

    ${o&&`
        opacity: 0.4;
        pointer-events: none;
    
      `};

    ${t==l.Large&&`
        ${r.fontStyles.p}
      `};

    ${t==l.Medium&&`
        ${r.fontStyles.pSmall}
      `};

    ${t==l.Small&&`
        ${r.fontStyles.pXXSmall}
      `};
  `}
`,f=k.withComponent("a"),j=$.forwardRef(({isDisabled:r,children:o,isUnderline:a=!0,textSize:t=l.Medium,dataTestId:n,onClick:c,style:s,type:u="text",...e},i)=>d.jsx(d.Fragment,{children:u==="button"?d.jsx(f,{"data-testid":n??"link-button",ref:i,size:t,style:s,variant:"solid",...e,color:"primary",children:o}):d.jsx(x,{"data-testid":n??"link",disabled:r,isUnderline:a,onClick:c,ref:i,style:s,textSize:t,...e,children:o})}));export{k as B,j as L,l as a};

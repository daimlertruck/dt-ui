import{n as d}from"./emotion-styled.browser.esm-QTPHyGVR.js";const l=r=>({primary:`
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
  `}),n=(r,o,a)=>({solid:`
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
    `,outlined:l(o)[a],text:`
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
    `})[r],e=(r,o)=>({large:`
      ${o.fontStyles.button1}
      padding: ${o.spacing["2xs"]} ${o.spacing.s};
    `,medium:`
      ${o.fontStyles.button2}
      padding: ${o.spacing["3xs"]} ${o.spacing.xs};
    `,small:`
      ${o.fontStyles.button2}
      padding: ${o.spacing["4xs"]} ${o.spacing["2xs"]};
    `})[r],p=d.button`
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
    
    ${e(t,r)}
    ${n(o,r,a)}

    @media only screen and (min-width: ${r.breakpoints.s}) {
      width: auto;
    }
  `}
`;export{p as B};

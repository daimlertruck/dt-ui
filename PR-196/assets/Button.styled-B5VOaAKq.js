import{n as l}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const d=o=>({primary:`
    color: ${o.palette.primary.default};
    border-color: ${o.palette.primary.default};
    background-color: transparent;

    &:hover {
      color: ${o.palette.primary.dark};
      border-color: ${o.palette.primary.dark};
    }

    &:active {
      color: ${o.palette.primary.dark};
      border-color: ${o.palette.primary.dark};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${o.palette.primary.medium};
      border-color: ${o.palette.primary.medium};
    }
  `,error:`
    color: ${o.palette.error.default};
    background-color: transparent;
    border-color: ${o.palette.error.default};

    &:hover {
      color: ${o.palette.error.dark};
      border-color: ${o.palette.error.dark};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${o.palette.error.medium};
      border-color: ${o.palette.error.medium};
    }
  `,secondary:`
    color: ${o.palette.secondary.default};
    border-color: ${o.palette.secondary.default};
    background-color: transparent;
    
    &:hover {
      color: ${o.palette.secondary.dark};
      border-color: ${o.palette.secondary.dark};
    }
    &:active {
      color: ${o.palette.secondary.dark};
      border-color: ${o.palette.secondary.dark};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${o.palette.secondary.medium};
      border-color: ${o.palette.secondary.medium};
    }
  `}),e=(o,r,a)=>a==="inverted"?{solid:`
        color: ${r.palette.content.heading};
        background-color: ${r.palette.base.default};
        border-color: ${r.palette.border.contrast};

        &:hover {
          background-color: ${r.palette.primary.medium};
          border-color: ${r.palette.primary.medium};
        }
        &:disabled {
          cursor: not-allowed;
          color: ${r.palette.content.disabled};
          border-color: ${r.palette.base.default};
          background-color: ${r.palette.base.default};
        }
      `,outlined:`    
        color: ${r.palette.content.contrast};
        border-color: ${r.palette.border.contrast};
        background-color: transparent;

        &:hover {
          color: ${r.palette.primary.medium};
          border-color: ${r.palette.primary.medium};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${r.palette.content.disabled};
          border-color: ${r.palette.border.default};
        }
      `,text:`
        color: ${r.palette.primary.contrast};
        background-color: transparent;
        
        &:hover {
          color: ${r.palette.primary.medium};
        }
        
        &:disabled {
          cursor: not-allowed;
          color: ${r.palette.content.disabled};
        }
      `}[o]:{solid:`
        border-color: ${r.palette[a].default};
        color: ${r.palette[a].contrast};
        background-color: ${r.palette[a].default};
        
        &:hover {
          color: ${r.palette[a].contrast};
          background-color: ${r.palette[a].dark};
          border-color: ${r.palette[a].dark};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${r.palette[a].contrast};
          background-color: ${r.palette[a].medium};
          border-color: ${r.palette[a].medium};
        }
    `,outlined:d(r)[a],text:`
        color: ${r.palette[a].default};
        background-color: transparent;
        
        &:hover {
          color: ${r.palette[a].dark};
        }
        
        &:disabled {
          cursor: not-allowed;
          color: ${r.palette[a].medium};
        }
    `}[o],n=(o,r)=>({large:`
      ${r.fontStyles.button1}
      padding: ${r.spacing["2xs"]} ${r.spacing.s};
    `,medium:`
      ${r.fontStyles.button2}
      padding: ${r.spacing["3xs"]} ${r.spacing.xs};
    `,small:`
      ${r.fontStyles.button2}
      padding: ${r.spacing["4xs"]} ${r.spacing["2xs"]};
    `})[o],p=l.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  min-width: 80px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  align-items: center;
  border: 2px solid transparent;
  ${({theme:o,variant:r,color:a,size:t})=>`
    gap: ${o.spacing["4xs"]};
    border-radius: ${o.shape.button};
    ${n(t,o)}
    ${e(r,o,a)}

    @media only screen and (min-width: ${o.breakpoints.s}) {
      width: auto;
    }
  `};
`;export{p as B};

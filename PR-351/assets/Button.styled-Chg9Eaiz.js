import{n as c}from"./emotion-styled.browser.esm-BiJbFOXH.js";const e=o=>({primary:`
    color: ${o.palette.primary.default};
    border-color: ${o.palette.primary.default};
    background-color: transparent;

    &:hover {
      color: ${o.palette.primary.default};
      border-color: ${o.palette.primary.default};
      background-color: ${o.palette.primary.light};
    }

    &:active {
      color: ${o.palette.primary.default};
      border-color: ${o.palette.primary.default};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${o.palette.primary.light};
      border-color: ${o.palette.primary.light};
      background-color: transparent;
    }
  `,error:`
    color: ${o.palette.error.default};
    background-color: transparent;
    border-color: ${o.palette.error.default};

    &:hover {
      color: ${o.palette.error.default};
      border-color: ${o.palette.error.default};
      background-color: ${o.palette.error.light};
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
      color: ${o.palette.secondary.default};
      border-color: ${o.palette.secondary.default};
      background-color: ${o.palette.secondary.light};
    }
    &:active {
      color: ${o.palette.secondary.default};
      border-color: ${o.palette.secondary.default};
      background-color: ${o.palette.secondary.light};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${o.palette.secondary.medium};
      border-color: ${o.palette.secondary.medium};
      background-color: transparent;
    }
  `,accent:`
    color: ${o.palette.accent.default};
    border-color: ${o.palette.accent.default};
    background-color: transparent;
    
    &:hover {
      color: ${o.palette.accent.default};
      border-color: ${o.palette.accent.default};
      background-color: ${o.palette.accent.light};
    }
    &:active {
      color: ${o.palette.accent.default};
      border-color: ${o.palette.accent.default};
      background-color: ${o.palette.accent.light};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${o.palette.accent.light};
      border-color: ${o.palette.accent.light};
      background-color: transparent;
    }`}),n=(o,r,t)=>{if(t==="contrast")return{solid:`
        color: ${r.palette.content.dark};
        background-color: ${r.palette.surface.contrast};
        border-color: ${r.palette.surface.contrast};

        &:hover {
          background-color: ${r.palette.primary.light};
          border-color: ${r.palette.primary.light};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${r.palette.content.light};
          border-color: ${r.palette.surface.contrast};
          background-color: ${r.palette.surface.contrast};
        }
      `,outlined:`
        color: ${r.palette.content.contrast};
        border-color: ${r.palette.primary.contrast};
        background-color: transparent;

        &:hover {
          color: ${r.palette.content.contrast};
          border-color: ${r.palette.surface.contrast};
          background-color: ${r.palette.primary.medium};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${r.palette.secondary.default};
          border-color: ${r.palette.secondary.default};
          background-color: transparent;
        }
      `,text:`
        color: ${r.palette.content.contrast};
        background-color: transparent;

        &:hover {
          color: ${r.palette.content.contrast};
          background-color: ${r.palette.primary.medium};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${r.palette.secondary.default};
          background-color: transparent;
        }
      `}[o];{const a=t==="primary"?"medium":"dark",l=t==="primary"?"light":"medium";return{solid:`
        border-color: ${r.palette[t].default};
        color: ${r.palette.content.contrast};
        background-color: ${r.palette[t].default};
        
        &:hover {
          color: ${r.palette.content.contrast};
          background-color: ${r.palette[t][a]};
          border-color: ${r.palette[t][a]};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${r.palette.content.contrast};
          background-color: ${r.palette[t][l]};
          border-color: ${r.palette[t][l]};
        }
    `,outlined:e(r)[t],text:`
        color: ${r.palette[t].default};
        background-color: transparent;
        
        &:hover {
          color: ${r.palette[t].default};
          background-color: ${r.palette[t].light};
        }
        
        &:disabled {
          cursor: not-allowed;
          color: ${r.palette[t][l]};
          background-color: transparent;
        }
    `}[o]}},d=(o,r)=>({large:`
      ${r.fontStyles.button1}
      padding: ${r.spacing["2xs"]} ${r.spacing.s};
    `,medium:`
      ${r.fontStyles.button2}
      padding: ${r.spacing["3xs"]} ${r.spacing.xs};
    `,small:`
      ${r.fontStyles.button2}
      padding: ${r.spacing["4xs"]} ${r.spacing["2xs"]};
    `})[o],s=c.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  min-width: 80px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  align-items: center;
  border: 2px solid transparent;

  ${({theme:o,variant:r,color:t,size:a})=>`
    gap: ${o.spacing["4xs"]};
    border-radius: ${o.shape.button}; 
    ${d(a,o)}
    ${n(r,o,t)}

    &:focus-visible {
      ${t==="contrast"?`
          outline: 1px solid ${o.palette.content.dark};
          outline-offset: -3px;
        `:`
          outline: 3px solid ${o.palette.border.dark};
          outline-offset: 1px;
        `}
    }

    @media only screen and (min-width: ${o.breakpoints.mq3}px) {
      width: auto;
    }
  `};
`;export{s as B};

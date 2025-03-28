import{n as c}from"./emotion-styled.browser.esm-B1le5_Hy.js";const e=r=>({primary:`
    color: ${r.palette.primary.default};
    border-color: ${r.palette.primary.default};
    background-color: transparent;

    &:hover {
      color: ${r.palette.primary.default};
      border-color: ${r.palette.primary.default};
      background-color: ${r.palette.primary.light};
    }

    &:active {
      color: ${r.palette.primary.default};
      border-color: ${r.palette.primary.default};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${r.palette.primary.light};
      border-color: ${r.palette.primary.light};
      background-color: transparent;
    }
  `,error:`
    color: ${r.palette.error.default};
    background-color: transparent;
    border-color: ${r.palette.error.default};

    &:hover {
      color: ${r.palette.error.default};
      border-color: ${r.palette.error.default};
      background-color: ${r.palette.error.light};
    }

    &:disabled {
      cursor: not-allowed;
      color: ${r.palette.error.medium};
      border-color: ${r.palette.error.medium};
    }
  `,secondary:`
    color: ${r.palette.secondary.default};
    border-color: ${r.palette.secondary.default};
    background-color: transparent;
    
    &:hover {
      color: ${r.palette.secondary.default};
      border-color: ${r.palette.secondary.default};
      background-color: ${r.palette.secondary.light};
    }
    &:active {
      color: ${r.palette.secondary.default};
      border-color: ${r.palette.secondary.default};
      background-color: ${r.palette.secondary.light};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${r.palette.secondary.medium};
      border-color: ${r.palette.secondary.medium};
      background-color: transparent;
    }
  `,accent:`
    color: ${r.palette.accent.default};
    border-color: ${r.palette.accent.default};
    background-color: transparent;
    
    &:hover {
      color: ${r.palette.accent.default};
      border-color: ${r.palette.accent.default};
      background-color: ${r.palette.accent.light};
    }
    &:active {
      color: ${r.palette.accent.default};
      border-color: ${r.palette.accent.default};
      background-color: ${r.palette.accent.light};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${r.palette.accent.light};
      border-color: ${r.palette.accent.light};
      background-color: transparent;
    }`}),n=(r,o,t)=>{if(t==="contrast")return{solid:`
        color: ${o.palette.content.dark};
        background-color: ${o.palette.primary.contrast};
        border-color: ${o.palette.primary.contrast};

        &:hover {
          background-color: ${o.palette.primary.light};
          border-color: ${o.palette.primary.light};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${o.palette.content.default};
          border-color: ${o.palette.content.dark};
          background-color: ${o.palette.content.dark};
        }
      `,outlined:`
        color: ${o.palette.primary.contrast};
        border-color: ${o.palette.primary.contrast};
        background-color: transparent;

        &:hover {
          color: ${o.palette.surface.contrast};
          border-color: ${o.palette.surface.contrast};
          background-color: ${o.palette.primary.dark};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${o.palette.content.default};
          border-color: ${o.palette.content.default};
          background-color: transparent;
        }
      `,text:`
        color: ${o.palette.surface.light};
        background-color: transparent;

        &:hover {
          color: ${o.palette.content.contrast};
          background-color: ${o.palette.primary.dark};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${o.palette.content.default};
          background-color: transparent;
        }
      `}[r];{const a=t==="primary"?"medium":"dark",l=t==="primary"?"light":"medium";return{solid:`
        border-color: ${o.palette[t].default};
        color: ${o.palette.content.contrast};
        background-color: ${o.palette[t].default};
        
        &:hover {
          color: ${o.palette.content.contrast};
          background-color: ${o.palette[t][a]};
          border-color: ${o.palette[t][a]};
        }

        &:disabled {
          cursor: not-allowed;
          color: ${o.palette.content.contrast};
          background-color: ${o.palette[t][l]};
          border-color: ${o.palette[t][l]};
        }
    `,outlined:e(o)[t],text:`
        color: ${o.palette[t].default};
        background-color: transparent;
        
        &:hover {
          color: ${o.palette[t].default};
          background-color: ${o.palette[t].light};
        }
        
        &:disabled {
          cursor: not-allowed;
          color: ${o.palette[t][l]};
          background-color: transparent;
        }
    `}[r]}},d=(r,o)=>({large:`
      ${o.fontStyles.button1}
      padding: ${o.spacing["2xs"]} ${o.spacing.s};
    `,medium:`
      ${o.fontStyles.button2}
      padding: ${o.spacing["3xs"]} ${o.spacing.xs};
    `,small:`
      ${o.fontStyles.button2}
      padding: ${o.spacing["4xs"]} ${o.spacing["2xs"]};
    `})[r],s=c.button`
  display: flex;
  justify-content: center;
  cursor: pointer;
  width: 100%;
  min-width: 80px;
  transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out,
    border-color 0.2s ease-in-out;
  align-items: center;
  border: 2px solid transparent;

  ${({theme:r,variant:o,color:t,size:a})=>`
    gap: ${r.spacing["4xs"]};
    border-radius: ${r.shape.button}; 
    ${d(a,r)}
    ${n(o,r,t)}

    &:focus-visible {
      ${t==="contrast"?`
          outline: 1px solid ${r.palette.content.dark};
          outline-offset: -3px;
        `:`
          outline: 3px solid ${r.palette.border.dark};
          outline-offset: 1px;
        `}
    }

    @media only screen and (min-width: ${r.breakpoints.s}px) {
      width: auto;
    }
  `};
`;export{s as B};

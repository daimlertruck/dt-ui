import{n}from"./emotion-styled.browser.esm-yeljtSWm.js";const c=r=>({primary:`
    color: ${r.palette.primary};
    background-color: ${r.colors.white};
    border: 1px solid ${r.palette.primary};
    &:hover {
      color: ${r.palette.primaryDark_300};
      background-color: ${r.colors.white};
      border: 1px solid ${r.palette.primaryDark_300};
    }
    &:active {
      color: ${r.palette.primaryDark_300};
      background-color: ${r.colors.white};
      border: 1px solid ${r.palette.primaryDark_300};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${r.palette.primaryLight_300};
      background-color: ${r.colors.white};
      border: 1px solid ${r.palette.primaryLight_300};
    }
  `,error:`
    color: ${r.palette.error};
    background-color: ${r.colors.white};
    border: 1px solid ${r.palette.error};
    &:hover {
      color: ${r.palette.errorDark_300};
      background-color: ${r.colors.white};
      border: 1px solid ${r.palette.errorDark_300};
    }
    &:active {
      color: ${r.palette.errorDark_300};
      background-color: ${r.colors.white};
      border: 1px solid ${r.palette.errorDark_300};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${r.palette.errorLight_300};
      background-color: ${r.colors.white};
      border: 1px solid ${r.palette.errorLight_300};
    }
  `,neutral:`
    color: ${r.palette.neutralDark_400};
    background-color: ${r.colors.white};
    border: 1px solid ${r.palette.neutralDark_100};
    &:hover {
      color: ${r.palette.neutralDark_700};
      background-color: ${r.colors.white};
      border: 1px solid ${r.palette.neutralDark_200};
    }
    &:active {
      color: ${r.palette.neutralDark_700};
      background-color: ${r.colors.white};
      border: 1px solid ${r.palette.neutralDark_200};
    }
    &:disabled {
      cursor: not-allowed;
      color: ${r.palette.neutralDark_100};
      background-color: ${r.colors.white};
      border: 1px solid ${r.palette.neutralDark_100};
    }
  `}),i=(r,o,a)=>({solid:`
      border: ${o.spacing.none};
      color: ${o.colors.white};
      background-color: ${o.palette[a]};
      
      &:hover {
        color: ${o.colors.white};
        background-color: ${o.palette[`${a}Dark_300`]};
      }

      &:disabled {
        cursor: not-allowed;
        opacity: 38%;
      }
    `,outlined:c(o)[a],text:`
      border: none;
      color: ${o.palette[a]};
      background-color: 'transparent';
      
      &:hover {
        color: ${o.palette[`${a}Dark_300`]};
        background-color: 'transparent';
      }
      
      &:disabled {
        cursor: not-allowed;
        color: ${o.palette.neutralLight_100};
      }
    `})[r],s=(r,o)=>({large:`
      ${o.fontStyles.button1}
      padding: ${o.spacing["2xs"]} ${o.spacing.s};
    `,medium:`
      ${o.fontStyles.button2}
      padding: ${o.spacing["3xs"]} ${o.spacing.xs};
    `,small:`
      ${o.fontStyles.button2}
      padding: ${o.spacing["4xs"]} ${o.spacing["2xs"]};
    `})[r],p=n.button`
  ${({theme:r,isUppercased:o,variant:a,color:l,size:t})=>`
    display: flex;
    justify-content: center;
    cursor: pointer;
    width: 100%;
    min-width: 80px;
    transition: background-color 0.2s ease-in-out, color 0.2s ease-in-out;
    align-items: center;
    gap: ${r.spacing["4xs"]};
    border-radius: ${r.shape.button};
    text-transform: ${o?"uppercase":"none"};
    
    ${s(t,r)}
    ${i(a,r,l)}

    @media only screen and (min-width: ${r.breakpoints.s}) {
      width: auto;
    }
  `}
`;export{p as B};

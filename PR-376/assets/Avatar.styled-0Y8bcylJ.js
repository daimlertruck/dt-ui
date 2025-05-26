import{n as l}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const e={Primary:"primary",Secondary:"secondary",Tertiary:"tertiary",Profile:"profile"},o={Small:"small",Medium:"medium",Large:"large"},p=l.div`
  ${({theme:r,type:t,size:i})=>{let a=`
      & > * {
        width: 100%;
        height: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        font-weight: 700;
        text-transform: uppercase;
        border-radius: ${r.radius.full};
        cursor: pointer;
      }
    `;switch(i){case o.Small:a+=`
          width: 16px;
          height: 16px;
          font-size: 8px;
          line-height: 10px;
          
          & > * {
            padding: 3px 2px 2px 2px;
          }
        `;break;case o.Medium:a+=`
          width: 24px;
          height: 24px;
          font-size: 10px;
          line-height: 14px;
        `;break;case o.Large:a+=`
          width: 32px;
          height: 32px;
          font-size: 12px;
          line-height: 16px;
        `;break}switch(t){case e.Primary:a+=`
          color: ${r.colors.grey_00};
          
          & > * {
            background-color: ${r.palette.primary.default};

            &:hover {
              background-color: ${r.palette.primary.dark};
            }
          }
        `;break;case e.Secondary:a+=`
          color: ${r.colors.grey_00};
          
          & > * {
            background-color: ${r.palette.secondary.default};

            &:hover {
              background-color: ${r.palette.secondary.dark};
            }
          }
        `;break;case e.Tertiary:a+=`
          color: ${r.palette.primary.default};
          
          & > * {
            background-color: ${r.colors.grey_00};

            &:hover {
              background-color: ${r.palette.primary.light};
            }
          }
        `;break;case e.Profile:a+=`
          & > * {
            padding: initial;
          }
        `;break}return a}}
`;export{o as A,e as a,p as b};

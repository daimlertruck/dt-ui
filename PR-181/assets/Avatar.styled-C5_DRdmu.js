import{n as l}from"./emotion-styled.browser.esm-CRzct0lr.js";const e={Primary:"primary",Secondary:"secondary",Tertiary:"tertiary",Profile:"profile"},t={Small:"small",Medium:"medium",Large:"large"},c=l.div`
  ${({theme:r,type:i,size:o})=>{let a=`
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
    `;switch(o){case t.Small:a+=`
          width: 16px;
          height: 16px;
          font-size: 8px;
          line-height: 10px;
          
          & > * {
            padding: 3px 2px 2px 2px;
          }
        `;break;case t.Medium:a+=`
          width: 24px;
          height: 24px;
          font-size: 10px;
          line-height: 14px;
        `;break;case t.Large:a+=`
          width: 32px;
          height: 32px;
          font-size: 12px;
          line-height: 16px;
        `;break}switch(i){case e.Primary:a+=`
          color: ${r.palette.primary.contrast};
          
          & > * {
            background-color: ${r.palette.primary.default};

            &:hover {
              background-color: ${r.palette.primary.dark};
            }
          }
        `;break;case e.Secondary:a+=`
          color: ${r.palette.secondary.contrast};
          
          & > * {
            background-color: ${r.palette.secondary.default};

            &:hover {
              background-color: ${r.palette.secondary.dark};
            }
          }
        `;break;case e.Tertiary:a+=`
          color: ${r.palette.primary.default};
          
          & > * {
            background-color: ${r.palette.primary.contrast};

            &:hover {
              background-color: ${r.palette.primary.light};
            }
          }
        `;break;case e.Profile:a+=`
          & > * {
            padding: initial;
          }
        `;break}return a}}
`;export{t as A,e as a,c as b};

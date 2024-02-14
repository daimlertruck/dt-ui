import{n as l}from"./emotion-styled.browser.esm-QTPHyGVR.js";const r=l.li`
  ${({theme:o,disabled:t})=>`
    ${o.fontStyles.body2}
    color: ${o.palette.content.body};
    list-style: none;
    padding: ${o.spacing["4xs"]} ${o.spacing["2xs"]};
    text-overflow: ellipsis;
    overflow-x: hidden;

    &:hover {
      background: ${t?o.palette.base.light:o.palette.primary.light};
      cursor: ${t?"not-allowed":"pointer"};
    }

    ${t&&`
        color: ${o.palette.content.disabled};
        background: ${o.palette.base.light};
      `}
  `}
`;export{r as D};

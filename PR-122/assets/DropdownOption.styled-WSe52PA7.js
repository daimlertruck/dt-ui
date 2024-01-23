import{n as r}from"./emotion-styled.browser.esm-yeljtSWm.js";const l=r.li`
  ${({theme:o,disabled:t})=>`
    ${o.fontStyles.body2}
    list-style: none;
    padding: ${o.spacing["4xs"]} ${o.spacing["2xs"]};
    text-overflow: ellipsis;
    overflow-x: hidden;

    &:hover {
      background: ${o.palette.primaryLight_500};
      cursor: ${t?"not-allowed":"pointer"};
    }

    ${t&&`
      color: ${o.palette.textTertiary};
      background: ${o.palette.neutralLight_100};
    `}
  `}
`;export{l as D};

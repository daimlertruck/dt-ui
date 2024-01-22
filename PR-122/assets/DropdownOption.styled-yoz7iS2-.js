import{n as l}from"./emotion-styled.browser.esm-yeljtSWm.js";const i=l.li`
  ${({theme:o,disabled:n})=>`
    ${o.fontStyles.pXSmall}
    list-style: none;
    padding: ${o.spacing.small} ${o.spacing.xmedium};
    text-overflow: ellipsis;
    overflow-x: hidden;

    &:hover {
      background: ${o.colors.grey_70};
      cursor: pointer;
    }

    ${n&&`
      opacity: 0.4;
      pointer-events: none;
    `}
  `}
`;export{i as D};

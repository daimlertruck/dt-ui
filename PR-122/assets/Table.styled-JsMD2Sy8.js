import{n as t}from"./emotion-styled.browser.esm-yeljtSWm.js";const s=t.table`
  ${({isFixed:a})=>`
    table-layout: ${a?"fixed":"auto"};
    width: 100%;
    border-spacing: 0;
  `}
`,n=t.tbody`
  ${({theme:a})=>`
    display: grid;
    grid-template-columns: 1fr;
    gap: ${a.spacing["3xs"]};
    
    tr:hover {
      background-color: ${a.palette.neutralLight_100};
    }

    @media (min-width: ${a.breakpoints.s}) {
      grid-template-columns: 1fr 1fr;
    }

    @media (min-width: ${a.breakpoints.m}) {
      display: table-header-group;
    }
  `}
`,i=t.thead`
  ${({theme:a})=>`
    display: none;

    tr {
      background: transparent;
    }

    @media (min-width: ${a.breakpoints.m}) {
      display: table-header-group;
    }
`}
`,l=t.tr`
  ${({theme:a,selectableRow:o=!0})=>`
    display: block;
    padding: ${a.spacing.xs};
    width: 100%;
    background-color: ${a.colors.white};
    border-radius: ${a.radius["4xs"]};
    box-shadow: ${a.shadows.s};
    cursor: ${o?"pointer":"auto"};
    flex: 1;

    @media (min-width: ${a.breakpoints.m}) {
      display: table-row;
      border-radius: ${a.radius.none};
      box-shadow: ${a.shadows.none};
      padding: ${a.spacing.none};
    }

  `}
`,e=t.th`
  ${({theme:a,textAlign:o})=>`
    text-align: ${o};
    color: ${a.palette.textPrimary};
    padding: 0 ${a.spacing["2xs"]} ${a.spacing["2xs"]};
    ${a.fontStyles.button3};
  `}
`,p=t.td`
  ${({theme:a,columnWidth:o,textAlign:d})=>`
    display: flex;
    justify-content: space-between;
    align-items: center;
    gap: ${a.spacing["3xs"]};
    padding: ${a.spacing["3xs"]} ${a.spacing["2xs"]};
    word-break: break-word;
    text-align: ${d};
    color: ${a.palette.textSecondary};
    ${a.fontStyles.body2};

    &:not(:first-of-type){
      &:before {
        content: attr(data-label);
        color: ${a.palette.textPrimary};
        word-break: keep-all;
        ${a.fontStyles.button2};
      }
    }

    &:first-of-type {
      color: ${a.palette.textPrimary};
      border-bottom: 1px solid ${a.palette.neutral};
      padding-top: 0;
      ${a.fontStyles.body2Bold};
    }

    @media (min-width: ${a.breakpoints.m}) {
      display: table-cell;      
      border-top: 1px solid ${a.palette.neutral};
      padding: ${a.spacing["2xs"]};
      max-width: 0;
      ${a.fontStyles.body2};
      
      &:first-of-type {
        color: ${a.palette.textSecondary};
        padding-top: ${a.spacing["2xs"]};
        border-bottom: none;
        ${a.fontStyles.body2};
      }

      &:before {
        display: none;
      }
      
      white-space: nowrap;
      overflow: hidden;
      text-overflow: ellipsis;

      ${!!o&&`
        white-space: unset;
        word-break: break-word;
        width: ${o};
        max-width: ${o};
      `}
    }

  `}
`;export{e as C,l as R,s as T,i as a,n as b,p as c};

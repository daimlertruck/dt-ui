import{n as a}from"./emotion-styled.browser.esm-MfHNkeEy.js";const n=a.footer`
  ${({theme:t,isFixed:o})=>`
    ${t.fontStyles.pXSmall}
    display: flex;
    flex-wrap: nowrap;
    align-items: center;
    justify-content: start;
    max-width: ${t.breakpoints.xxl};
    width: 90%;
    bottom: 0;
    margin-top: auto;
    margin-left: auto;
    margin-right: auto;
    min-height: 5vh;
    position: ${o?"fixed":"static"};

    ${o&&`
        left: 50%;
        transform: translateX(-50%);
      `}
  `}
`,i=a.li`
  display: inline-block;
  list-style: none;
  padding: 0px;
  white-space: nowrap;

  a {
    color: ${({theme:t})=>t.palette.content.body};
  }
`;export{n as F,i as a};

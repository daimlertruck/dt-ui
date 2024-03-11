import{n as t}from"./emotion-styled.browser.esm-DhD7UCCJ.js";const n=t.header`
  position: fixed;
  display: flex;
  flex-wrap: nowrap;
  align-items: center;
  justify-content: space-between;
  top: ${({theme:e})=>e.spacing.none};
  width: 90%;
  max-width: ${({theme:e})=>e.breakpoints.xxl};
  left: 50%;
  transform: translateX(-50%);
  height: 75px;
  color: ${({theme:e})=>e.colors.white};
  z-index: 2;

  &:after {
    content: '';
    height: 100%;
    width: 100vw;
    background-color: ${({theme:e})=>e.colors.blue_500};
    position: absolute;
    z-index: -1;
    left: 50%;
    transform: translateX(-50%);
  }
`;export{n as H};

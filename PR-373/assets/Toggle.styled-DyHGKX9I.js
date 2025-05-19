import{n as o}from"./emotion-styled.browser.esm-DpDeK1WQ.js";const r=o.div`
  position: relative;
  display: flex;
  gap: 4px;
  align-items: center;
  width: fit-content;
`,n=o.label`
  position: absolute;
  width: 40px;
  height: 20px;
  border-radius: 10px;
  background: ${({theme:t})=>t.palette.surface.contrast};
  cursor: pointer;

  &::after {
    content: '';
    display: block;
    border-radius: 50%;
    width: 16px;
    height: 16px;
    margin: 2px;
    background: ${({theme:t})=>t.palette.surface.contrast};
    transition: 0.2s;
  }
`,i=o.input`
  opacity: 0;
  width: 0;
  height: 0;
  position: absolute;

  & + label {
    position: relative;
    display: inline-block;
    width: 40px;
    height: 20px;
    border-radius: 20px;
    transition: background 0.3s ease;
    cursor: pointer;
  }

  & + label::after {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    width: 16px;
    height: 16px;
    border-radius: 50%;
    background: white;
    transition: transform 0.3s ease;
  }

  ${({theme:t,disabled:e})=>`
    & + label {
      background: ${e?t.palette.surface.light:t.palette.surface.default};
      cursor: ${e?"not-allowed":"pointer"};
    }

    &:checked + label {
      background: ${e?t.palette.accent.light:t.palette.accent.default};
    }

    &:checked + label::after {
      transform: translateX(20px);
    }

    & ~ span {
      ${t.fontStyles.body2};
      cursor: ${e?"not-allowed":"pointer"};
      color: ${e?t.palette.content.light:t.palette.content.default};
      user-select: none;
    }
  `}
`;export{r as T,i as a,n as b};

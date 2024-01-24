import{j as t}from"./jsx-runtime-CbCNBOXy.js";import{T as a}from"./Typography-yGibSjxV.js";import{n as o}from"./emotion-styled.browser.esm-yeljtSWm.js";const l=o.div`
  ${({theme:i})=>`
    margin: ${i.spacing.none};
    background-color: ${i.colors.white};
    width: 100%;
    max-width: 530px;
    height: 100%;
    padding: 47px 24px 52px 24px;
    transition: all 0.2s ease-in-out;
    border-radius: 3px;
    display: flex;
    flex-direction: column;
    
    &::after {
      content: '';
      background-color: ${i.palette.primary};
      border-radius: ${i.spacing.xxsmall};
      width: 40px;
      height: 5px;
      margin-top: 14px;
    }

    &:hover {
      box-shadow: ${i.shadows[1]};
    }
  `}
`,d=o.div`
  width: 100%;
  display: -webkit-box;
  -webkit-line-clamp: 1;
  -webkit-box-orient: vertical;
  text-overflow: ellipsis;
  overflow: hidden;
`,s=o.div`
  ${({theme:i})=>`
    margin-top: ${i.spacing.small};
    width: 100%;
    height: auto;
    max-height: ${i.spacing.xlarge};
    display: -webkit-box;
    -webkit-line-clamp: 2;
    -webkit-box-orient: vertical;
    text-overflow: ellipsis;
    overflow: hidden;
  `}
`,e=({children:i,dataTestId:r})=>t.jsx(l,{"data-testid":r??"card",children:i});e.Title=({children:i})=>t.jsx(d,{children:t.jsx(a,{element:"h2",fontStyles:"h4",children:i})});e.Detail=({children:i})=>t.jsx(s,{children:i});export{e as C};

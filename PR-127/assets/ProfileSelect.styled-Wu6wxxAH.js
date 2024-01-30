import{t as a}from"./Typography-66na6NNO.js";import{p as o,c as r,s as n,r as t,f as l,g as e}from"./typography-aU13o_mh.js";import{n as i}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const d={...o,primary:{default:r.greenPastel_60,light:r.greenPastel_10,medium:r.greenPastel_40,dark:r.greenPastel_80,contrast:r.white},success:{default:r.greenPastel_60,light:r.greenPastel_10,medium:r.greenPastel_30,dark:r.greenPastel_80,contrast:r.white}},g={...n,button:t.xl,modal:t["3xs"]},p={default:"Poppins, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, 'Helvetica Neue', sans-serif"},c={...l,h1:e(600,"2.5rem","3rem","0.03rem"),h2:e(600,"2rem","2.5rem"),h3:e(600,"1.5rem","1.75rem"),h4:e(600,"1.25rem","1.5rem"),h5:e(600,"1rem","1.25rem"),h6:e(600,"1rem","1.5rem"),body1Bold:e(600,"1rem","1.5rem"),body2Bold:e(600,"0.875rem","1.25rem"),body3Bold:e(600,"0.75rem","1rem"),body4Bold:e(600,"0.625rem","0.875rem"),link1Bold:e(600,"1rem","1.5rem"),link2Bold:e(600,"0.875rem","1.25rem"),link3Bold:e(600,"0.75rem","1rem"),button1:e(700,"1rem","1.5rem","0.02rem"),button2:e(700,"0.875rem","1.25rem","0.018rem"),button3:e(700,"0.875rem","1rem","0.015rem")},y={...a,fontFamily:p,fontStyles:c,palette:d,shape:g};i.button`
  ${({theme:m,disabled:s})=>`
    background-color: transparent;
    border: none;
    cursor: ${s?"default":"pointer"};
    display: flex;
    align-items: center;
    gap: 2;

    svg:first-of-type {
      margin-left: ${m.spacing.small};
    }
  `}
`;export{y as g};

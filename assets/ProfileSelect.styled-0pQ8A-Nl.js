import{t as s}from"./Typography-zYZCbdVR.js";import{p as a,c as r,s as n,r as t,f as l,g as e}from"./typography-EBgY2913.js";import{n as p}from"./emotion-styled.browser.esm-Scfyu_ZY.js";const i={...a,primary:{default:r.greenPastel_60,light:r.greenPastel_10,medium:r.greenPastel_30,dark:r.greenPastel_80,contrast:r.white}},d={...n,button:t.xl,modal:t["3xs"]},c={default:"Poppins, Inter, -apple-system, BlinkMacSystemFont, 'Segoe UI', Ubuntu, 'Helvetica Neue', sans-serif"},u={...l,h1:e(600,"2.5rem","3rem","0.03rem"),h2:e(600,"2rem","2.5rem"),h3:e(600,"1.5rem","1.75rem"),h4:e(600,"1.25rem","1.5rem"),h5:e(600,"1rem","1.25rem"),h6:e(600,"1rem","1.5rem","normal","uppercase"),body1Bold:e(600,"1rem","1.5rem"),body2Bold:e(600,"0.875rem","1.25rem"),body3Bold:e(600,"0.75rem","1rem"),body4Bold:e(600,"0.625rem","0.875rem"),link1Bold:e(600,"1rem","1.5rem"),link2Bold:e(600,"0.875rem","1.25rem"),link3Bold:e(600,"0.75rem","1rem"),button1:e(700,"1rem","1.5rem","0.02rem","uppercase"),button2:e(700,"0.875rem","1.25rem","0.018rem","uppercase"),button3:e(700,"0.625rem","1rem","0.015rem","uppercase")},b={...s,fontFamily:c,fontStyles:u,palette:i,shape:d};p.button`
  ${({theme:m,disabled:o})=>`
    background-color: transparent;
    border: none;
    cursor: ${o?"default":"pointer"};
    display: flex;
    align-items: center;
    gap: 2;

    svg:first-of-type {
      margin-left: ${m.spacing.small};
    }
  `}
`;export{b as g};

import{j as f}from"./jsx-runtime-vNq4Oc-g.js";import{r as y}from"./index-4g5l5LRQ.js";import"./Box.styled-zcGhU7kj.js";import{g as c}from"./Typography-2uwYii8o.js";import"./Spinner.styled-euKDJvzq.js";import"./Button.styled-bXS5oslU.js";import"./IconButton.styled-B_RRHdai.js";import"./Nav.styled-GsNCx_OC.js";import"./NavContainer.styled-U8vOQ75V.js";import"./Dropdown-cbHJLZH7.js";import"./MultiSelectProvider-vrdgqO57.js";import"./Header.styled-dSjoYgc7.js";import"./ProfileInfo-uByVuM9L.js";import"./Tooltip-0s9nAgHk.js";import"./Avatar.styled-CUHg7m_f.js";import{n as m}from"./emotion-styled.browser.esm-QTPHyGVR.js";import"./NavItem.styled-F-Ro6JRH.js";import"./Grid.styled-IM57ROHE.js";import"./Card-qp_sDtZy.js";import"./Table-YdoaFONJ.js";import"./LabelField-OWWqgjhK.js";import"./TextField.styled-LipUM-ms.js";import"./index-5j7WHYEJ.js";import"./index-jmm5gWkb.js";import"./SearchField.styled-CiYqvoJZ.js";import"./TextArea-nbVLpKBp.js";import"./Toggle-Q1gtj7Vf.js";import"./Form-N5D8RY0X.js";import"./Footer.styled-ViVzqoaf.js";import"./Link-c-Kgo-en.js";import"./Modal-J1b7LnTu.js";import"./Counter-LGyezUq9.js";import"./List-3rR8KQBQ.js";import"./DescriptionList-DLLpITdb.js";import"./Pagination-171H_8cz.js";import"./Tabs-tjTOCvAj.js";import"./Step-lcrBMFSs.js";import"./Checkbox-YsqCbiLt.js";import"./Radio--p6mHLZJ.js";import"./MultiSelect-HRnKfFkW.js";import"./ProgressBar.styled-1TccEzHa.js";import"./Backdrop-1jizL95N.js";import"./Breadcrumb-MDS6jBZ9.js";import"./Divider-b2fMfDtF.js";import"./Drawer-zoOSygEW.js";import"./EmptyState-SDF_owXZ.js";import"./Icon.styled-XhfvdDtU.js";import"./Message-CeP1zJOo.js";import"./Tag-t4dOy4wM.js";import"./Toaster-LweNxdtY.js";import"./Accordion-h2BS8qQ8.js";import{u}from"./emotion-element-c39617d8.browser.esm-4Kx8mvQ5.js";m.button`
  ${({theme:t,disabled:o})=>`
    background-color: transparent;
    border: none;
    cursor: ${o?"default":"pointer"};
    display: flex;
    align-items: center;
    gap: 2;

    svg:first-of-type {
      margin-left: ${t.spacing.small};
    }
  `}
`;const g=["unset","inherit"],d=m.p`
  ${({theme:t,fontStyles:o,color:r})=>{const p=g.includes(r)?r:t.colors[r]||c(r,t);return`
      ${t.fontStyles[o]};
      color: ${p};
      ${t.responsiveFontStyles[o]}
    `}};
`,gt=y.forwardRef(({children:t,element:o,fontStyles:r,color:p="grey_300",dataTestId:s,style:n},e)=>{const a=u(),i=o,l=r??(a.fontStyles[i]?i:"body1");return f.jsx(d,{as:o,color:p,"data-testid":s??"typography",fontStyles:l,ref:e,style:n,children:t})});export{gt as T};

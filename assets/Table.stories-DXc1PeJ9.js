import{j as e}from"./jsx-runtime-BTCK_S7S.js";import{I as C}from"./index-DRzhTbUG.js";import{I as w}from"./IconButton-deB7rk91.js";import"./Link-EItEcb3Z.js";import"./index-CBqU2yxZ.js";import"./AccordionBody.styled-CuP-ETG9.js";import{A as y}from"./Avatar-Cz2vd8_g.js";import{a as b,A as v}from"./Avatar.styled-CbYTFWMd.js";import"./Backdrop--0H_CVZ1.js";import"./Box.styled-B_R5XVxs.js";import"./Breadcrumb-Pfhekuzd.js";import"./index-alWhQwoC.js";import"./index-D_w70K-N.js";import"./Divider.styled-BCjYZpT0.js";import"./Drawer-CRG8Svt2.js";import"./EmptyState-nXoEQ7cP.js";import"./Icon-_on6jYg0.js";import"./Typography-BmDPVo4c.js";import"./LabelField-CfIyw03g.js";import"./Message-i1E2D7_z.js";import"./Spinner.styled-DKVt3JB6.js";import"./Tabs-BoOiaDDx.js";import{T as A}from"./Tag-NDtnTRMi.js";import{T as s}from"./Tooltip-BxV2U-93.js";import"./Checkbox-kK5GVS9f.js";import"./TextField.styled-C9Qy5Wmp.js";import{T as n}from"./Table-D8RFC-J6.js";import"./Button.styled-DlWoDIQY.js";import"./ProgressBar.styled-TE5udr71.js";import"./Select-DEposZbC.js";import"./Step-Dr8yfWYu.js";import"./Radio.styled-BYRQ829q.js";import"./Modal-BREoLr_w.js";import"./Card-CGuPJsRM.js";import"./SegmentedControl-Do1wffd9.js";import"./Dropdown-FCcMkQAt.js";import"./Toggle-BWxJ-BTk.js";import"./TextArea.styled-DWcq9Q7w.js";import"./Form-CxuMApzU.js";import"./Pagination-DNSfeTEk.js";import"./Close-B4vRQiIP.js";import"./emotion-styled.browser.esm-DQrX-Ye0.js";import"./extends-D3DEmvZu.js";import"./_commonjsHelpers-BosuxZz1.js";import"./z-index-Ds5QkyqS.js";import"./useMedia-BZw1ksCX.js";import"./useDebounceResize-BIJLixv5.js";import"./debounce-BF4Cdv7I.js";import"./index-BAMY2Nnw.js";import"./util-CeDosPPD.js";import"./index-BwrsF4c9.js";import"./Info-Ol3Oms6R.js";import"./index-fXDQo6IV.js";import"./Portal-CRlApbYa.js";import"./useClickOutside-D7JrBqcS.js";import"./index-D3ylJrlI.js";import"./Spinner-B-MhMyfv.js";const D=t=>e.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{d:"M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"})}),i=["Name","Email","Role","Status","Phone","Department","Location","Actions"],T=[["John Doe","john@example.com","Developer","green","+123456789","Engineering","New York",""],["Jane Smith","jane@example.com","Designer","grey","+987654321","Design","San Francisco",""],["Alice Johnson","alice@example.com","Manager","yellow","+135792468","Management","Los Angeles",""],["Bob Brown","bob@example.com","Engineer","green","+246813579","Engineering","Chicago",""]],j={Name:"200px",Status:"120px",Actions:"fit-content"},S=t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(y,{size:v.Small,title:t,type:b.Primary}),t]}),I=t=>e.jsx(A,{border:"rounded",color:t,size:"small",children:{green:"ACTIVE",yellow:"PENDING",grey:"DEACTIVATED"}[t]}),f=(t,r)=>{const o=i[t];return{Name:S(r),Status:I(r),Actions:E()}[o]??r},E=()=>e.jsx(w,{children:e.jsx(D,{})}),We={title:"Data Display/Table",component:n,render:({isFixed:t,hasFixedHeader:r})=>e.jsx("div",{style:{...r&&{height:"200px",overflow:"auto"}},children:e.jsxs(n,{isFixed:t,children:[e.jsx(n.Head,{hasFixedHeader:r,children:e.jsx(n.Row,{children:i.map(o=>e.jsx(n.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[o,o==="Status"&&e.jsxs(s,{children:[e.jsx(C,{height:16,width:16}),e.jsx(s.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${o}`))})}),e.jsx(n.Body,{children:T.map(o=>e.jsx(n.Row,{children:o.map((m,d)=>e.jsx(n.DataCell,{columnWidth:j[i[d]],children:f(d,m)},`column-${i[d]}-${m}`))},o.toString()))})]})})},a={args:{isFixed:!1,hasFixedHeader:!1}},R=1,B=2,l={title:"Table",component:n,render:()=>e.jsx("div",{style:{width:"500px",overflow:"auto"},children:e.jsxs(n,{fixedColumnCount:R,fixedEndColumnCount:B,children:[e.jsx(n.Head,{children:e.jsx(n.Row,{children:i.map(t=>e.jsx(n.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[t,t==="Status"&&e.jsxs(s,{children:[e.jsx(C,{height:16,width:16}),e.jsx(s.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${t}`))})}),e.jsx(n.Body,{children:T.map(t=>e.jsx(n.Row,{children:t.map((r,o)=>e.jsx(n.DataCell,{columnWidth:j[i[o]],style:{...i[o]==="Actions"&&{minWidth:"65px"}},children:f(o,r)},`column-${i[o]}-${r}`))},t.toString()))})]})})};var p,c,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
  args: {
    isFixed: false,
    hasFixedHeader: false
  }
}`,...(u=(c=a.parameters)==null?void 0:c.docs)==null?void 0:u.source}}};var h,x,g;l.parameters={...l.parameters,docs:{...(h=l.parameters)==null?void 0:h.docs,source:{originalSource:`{
  title: 'Table',
  component: Table,
  render: () => <div style={{
    width: '500px',
    overflow: 'auto'
  }}>
      <Table fixedColumnCount={fixedColumnCount} fixedEndColumnCount={fixedEndColumnCount}>
        <Table.Head>
          <Table.Row>
            {columns.map((column: string) => <Table.ColumnHeader dataTestId='test' key={\`column-header-\${column}\`}>
                <div style={{
              display: 'flex',
              alignItems: 'center',
              gap: 4
            }}>
                  {column}
                  {column === 'Status' && <Tooltip>
                      <InfoOutlineIcon height={16} width={16} />
                      <Tooltip.Content>
                        Pending: Yellow | Active: Green | Deactivated: Grey
                      </Tooltip.Content>
                    </Tooltip>}
                </div>
              </Table.ColumnHeader>)}
          </Table.Row>
        </Table.Head>
        <Table.Body>
          {rows.map((row: string[]) => <Table.Row key={row.toString()}>
              {row.map((content: string, i: number) => <Table.DataCell columnWidth={columnSizes[columns[i]]} key={\`column-\${columns[i]}-\${content}\`} style={{
            ...(columns[i] === 'Actions' && {
              minWidth: '65px'
            })
          }}>
                  {renderContent(i, content)}
                </Table.DataCell>)}
            </Table.Row>)}
        </Table.Body>
      </Table>
    </div>
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Ge=["Default","TableWithPinnedColumns"];export{a as Default,l as TableWithPinnedColumns,Ge as __namedExportsOrder,We as default};

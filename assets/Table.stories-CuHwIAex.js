import{j as e}from"./jsx-runtime-DMAvRu52.js";import{I as C}from"./index-RqUHmx0h.js";import"./Link-pnAUiaAZ.js";import"./index-Dl6G-zuu.js";import"./AccordionBody.styled-CR-1yGH3.js";import{A as w}from"./Avatar-BZO1thuy.js";import{a as y,A as b}from"./Avatar.styled-TZ4ZdhzH.js";import"./Backdrop-C_yxH-fC.js";import"./Box.styled-Bx5NRrR7.js";import"./Breadcrumb-CsJOw4o_.js";import"./index-B1KTZmHq.js";import"./index-DCrStp1_.js";import"./Divider.styled-Cm1mEvej.js";import"./Drawer-B3It5iAz.js";import"./EmptyState-BjOWSA2g.js";import"./Icon-B8gBCtaI.js";import"./Typography-B4wdSiSO.js";import"./LabelField-DJp3gmyL.js";import"./Message-Bbp2Nv9t.js";import"./Spinner.styled-CRljMwSC.js";import"./Tabs-NvDiUT5i.js";import{T as v}from"./Tag-DarPqZ64.js";import{T as s}from"./Tooltip-BxYusQYI.js";import"./Checkbox-DCu8g_Y2.js";import"./TextField.styled-D_btMrKR.js";import{T as t}from"./Table-BU9Pl8gM.js";import"./Button.styled-Bp3ur7y4.js";import"./ProgressBar.styled-m8XzoYja.js";import"./Select-B2_RO0pQ.js";import"./Step-C855uwme.js";import"./Radio.styled-yyYnSofk.js";import"./Modal-D8Ex0xxl.js";import"./Card-C1Y35B-2.js";import"./SegmentedControl-BpvnJeRm.js";import"./Dropdown-DZlXF2xC.js";import"./Toggle-CJTYQWZj.js";import"./TextArea.styled-DQv77iaI.js";import"./Form-DGW-SbM5.js";import"./Pagination-3751xWxH.js";import{I as A}from"./IconButton-9qzMwZsu.js";import"./Close-mVzWqPf0.js";import"./emotion-styled.browser.esm-DpDeK1WQ.js";import"./z-index-Ds5QkyqS.js";import"./useMedia-D3XZz7EL.js";import"./useDebounceResize-B3b7Ep81.js";import"./debounce-BF4Cdv7I.js";import"./index-BAMY2Nnw.js";import"./iframe-CRY_Jkxq.js";import"./Info-BRKcLzcc.js";import"./index-DECWwmT6.js";import"./Portal-DcNaNmD6.js";import"./useClickOutside-CBJSS0tk.js";import"./Spinner-C8z37KZc.js";const D=n=>e.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...n,children:e.jsx("path",{d:"M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"})}),i=["Name","Email","Role","Status","Phone","Department","Location","Actions"],T=[["John Doe","john@example.com","Developer","green","+123456789","Engineering","New York",""],["Jane Smith","jane@example.com","Designer","grey","+987654321","Design","San Francisco",""],["Alice Johnson","alice@example.com","Manager","yellow","+135792468","Management","Los Angeles",""],["Bob Brown","bob@example.com","Engineer","green","+246813579","Engineering","Chicago",""]],j={Name:"200px",Status:"120px",Actions:"fit-content"},S=n=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(w,{size:b.Small,title:n,type:y.Primary}),n]}),I=n=>e.jsx(v,{border:"rounded",color:n,size:"small",children:{green:"ACTIVE",yellow:"PENDING",grey:"DEACTIVATED"}[n]}),f=(n,r)=>{const o=i[n];return{Name:S(r),Status:I(r),Actions:E()}[o]??r},E=()=>e.jsx(A,{children:e.jsx(D,{})}),Be={title:"Data Display/Table",component:t,render:({isFixed:n,hasFixedHeader:r})=>e.jsx("div",{style:{...r&&{height:"200px",overflow:"auto"}},children:e.jsxs(t,{isFixed:n,children:[e.jsx(t.Head,{hasFixedHeader:r,children:e.jsx(t.Row,{children:i.map(o=>e.jsx(t.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[o,o==="Status"&&e.jsxs(s,{children:[e.jsx(C,{height:16,width:16}),e.jsx(s.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${o}`))})}),e.jsx(t.Body,{children:T.map(o=>e.jsx(t.Row,{children:o.map((m,d)=>e.jsx(t.DataCell,{columnWidth:j[i[d]],children:f(d,m)},`column-${i[d]}-${m}`))},o.toString()))})]})})},a={args:{isFixed:!1,hasFixedHeader:!1}},R=1,B=2,l={title:"Table",component:t,render:()=>e.jsx("div",{style:{width:"500px",overflow:"auto"},children:e.jsxs(t,{fixedColumnCount:R,fixedEndColumnCount:B,children:[e.jsx(t.Head,{children:e.jsx(t.Row,{children:i.map(n=>e.jsx(t.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[n,n==="Status"&&e.jsxs(s,{children:[e.jsx(C,{height:16,width:16}),e.jsx(s.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${n}`))})}),e.jsx(t.Body,{children:T.map(n=>e.jsx(t.Row,{children:n.map((r,o)=>e.jsx(t.DataCell,{columnWidth:j[i[o]],style:{...i[o]==="Actions"&&{minWidth:"65px"}},children:f(o,r)},`column-${i[o]}-${r}`))},n.toString()))})]})})};var p,c,u;a.parameters={...a.parameters,docs:{...(p=a.parameters)==null?void 0:p.docs,source:{originalSource:`{
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
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const He=["Default","TableWithPinnedColumns"];export{a as Default,l as TableWithPinnedColumns,He as __namedExportsOrder,Be as default};

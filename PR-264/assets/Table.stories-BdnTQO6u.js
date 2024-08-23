import{j as e}from"./jsx-runtime-CKrituN3.js";import{I as C}from"./Toaster-BZ8u5tz-.js";import{I as w}from"./IconButton-vDYD3EF6.js";import"./index-CJ73Y9Wi.js";import"./index-BtM5VmRH.js";import"./index-CBqU2yxZ.js";import"./Box.styled-TgnH4Hzf.js";import"./Typography-DvHa2txy.js";import"./LabelField-Cy5ugnCm.js";import"./TextField.styled-D7RLo66B.js";import"./SearchField.styled-D8K5NE1I.js";import"./TextArea.styled-BgdXJPw-.js";import"./Toggle-CIM1e1vH.js";import"./Link-DKmRjSVW.js";import"./Pagination-GKpjzWri.js";import"./MultiSelect-B4sOXrR-.js";import"./AccordionBody.styled-BbwZykMG.js";import{A as y}from"./Avatar-BO9sSMAG.js";import{a as b,A as v}from"./Avatar.styled-D2JslZ4U.js";import"./Backdrop-BOVSC-Qe.js";import"./Breadcrumb-hRvAJiFB.js";import"./Divider.styled-D49xH-DK.js";import"./Drawer-DseZxHwG.js";import"./EmptyState-CA5ImhEF.js";import"./Icon-DOElHRRq.js";import"./Message-CBxCpsDP.js";import"./Spinner.styled-amYs8BR3.js";import"./Tabs-DFLhdMFa.js";import{T as A}from"./Tag-BPLs6AKY.js";import{T as s}from"./Tooltip-B_S9_H1I.js";import"./Checkbox-xG7MOetM.js";import{T as n}from"./Table-BeDmbos5.js";import"./Button.styled-DnUhGC_u.js";import"./ProgressBar.styled-CnO7SpH6.js";import"./Select-Cj6VoaTw.js";import"./Stepper.styled-Pyi8-3xE.js";import"./Radio.styled-BiGNASgb.js";import"./Modal-b7vKpJtD.js";import"./Card-_ji-KIZB.js";import"./SegmentedControl-DfeR7Qpy.js";import"./Dropdown-CN0UBmjb.js";import"./Form-CufinmES.js";import"./useMedia-BZw1ksCX.js";import"./Close-CGHfkSk3.js";import"./emotion-styled.browser.esm-B1le5_Hy.js";import"./extends-DJVMZnyl.js";import"./_commonjsHelpers-BosuxZz1.js";import"./index-BAMY2Nnw.js";import"./util-BQ0cylCP.js";import"./index-BDlDW0Uq.js";import"./debounce-BF4Cdv7I.js";import"./ArrowRight-Bcd3dS55.js";import"./index-DMRWov4L.js";import"./useClickOutside-D7JrBqcS.js";import"./z-index-Ds5QkyqS.js";import"./useDebounceResize-C5wLqg0o.js";import"./Portal-U_0UEmB3.js";import"./index-D3ylJrlI.js";import"./Spinner-CbnPEEx9.js";const D=t=>e.jsx("svg",{fill:"currentColor",height:"24",viewBox:"0 0 24 24",width:"24",xmlns:"http://www.w3.org/2000/svg",...t,children:e.jsx("path",{d:"M12 8C13.1 8 14 7.1 14 6C14 4.9 13.1 4 12 4C10.9 4 10 4.9 10 6C10 7.1 10.9 8 12 8ZM12 10C10.9 10 10 10.9 10 12C10 13.1 10.9 14 12 14C13.1 14 14 13.1 14 12C14 10.9 13.1 10 12 10ZM12 16C10.9 16 10 16.9 10 18C10 19.1 10.9 20 12 20C13.1 20 14 19.1 14 18C14 16.9 13.1 16 12 16Z"})}),i=["Name","Email","Role","Status","Phone","Department","Location","Actions"],T=[["John Doe","john@example.com","Developer","green","+123456789","Engineering","New York",""],["Jane Smith","jane@example.com","Designer","grey","+987654321","Design","San Francisco",""],["Alice Johnson","alice@example.com","Manager","yellow","+135792468","Management","Los Angeles",""],["Bob Brown","bob@example.com","Engineer","green","+246813579","Engineering","Chicago",""]],j={Name:"200px",Status:"120px",Actions:"fit-content"},S=t=>e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:"8px"},children:[e.jsx(y,{size:b.Small,title:t,type:v.Primary}),t]}),I=t=>e.jsx(A,{border:"rounded",color:t,size:"small",children:{green:"ACTIVE",yellow:"PENDING",grey:"DEACTIVATED"}[t]}),f=(t,r)=>{const o=i[t];return{Name:S(r),Status:I(r),Actions:E()}[o]??r},E=()=>e.jsx(w,{children:e.jsx(D,{})}),Ne={title:"Data Display/Table",component:n,render:({isFixed:t,hasFixedHeader:r})=>e.jsx("div",{style:{...r&&{height:"200px",overflow:"auto"}},children:e.jsxs(n,{isFixed:t,children:[e.jsx(n.Head,{hasFixedHeader:r,children:e.jsx(n.Row,{children:i.map(o=>e.jsx(n.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[o,o==="Status"&&e.jsxs(s,{children:[e.jsx(C,{height:16,width:16}),e.jsx(s.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${o}`))})}),e.jsx(n.Body,{children:T.map(o=>e.jsx(n.Row,{children:o.map((m,p)=>e.jsx(n.DataCell,{columnWidth:j[i[p]],children:f(p,m)},`column-${i[p]}-${m}`))},o.toString()))})]})})},a={args:{isFixed:!1,hasFixedHeader:!1}},R=1,B=2,l={title:"Table",component:n,render:()=>e.jsx("div",{style:{width:"500px",overflow:"auto"},children:e.jsxs(n,{fixedColumnCount:R,fixedEndColumnCount:B,children:[e.jsx(n.Head,{children:e.jsx(n.Row,{children:i.map(t=>e.jsx(n.ColumnHeader,{dataTestId:"test",children:e.jsxs("div",{style:{display:"flex",alignItems:"center",gap:4},children:[t,t==="Status"&&e.jsxs(s,{children:[e.jsx(C,{height:16,width:16}),e.jsx(s.Content,{children:"Pending: Yellow | Active: Green | Deactivated: Grey"})]})]})},`column-header-${t}`))})}),e.jsx(n.Body,{children:T.map(t=>e.jsx(n.Row,{children:t.map((r,o)=>e.jsx(n.DataCell,{columnWidth:j[i[o]],style:{...i[o]==="Actions"&&{minWidth:"65px"}},children:f(o,r)},`column-${i[o]}-${r}`))},t.toString()))})]})})};var d,c,u;a.parameters={...a.parameters,docs:{...(d=a.parameters)==null?void 0:d.docs,source:{originalSource:`{
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
}`,...(g=(x=l.parameters)==null?void 0:x.docs)==null?void 0:g.source}}};const Me=["Default","TableWithPinnedColumns"];export{a as Default,l as TableWithPinnedColumns,Me as __namedExportsOrder,Ne as default};

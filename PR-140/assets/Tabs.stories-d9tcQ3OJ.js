import{j as e}from"./jsx-runtime-vNq4Oc-g.js";import{r as c}from"./index-4g5l5LRQ.js";import{T as n,a as r}from"./Tabs-cZ_63QZf.js";import"./_commonjsHelpers-4gQjN7DL.js";import"./emotion-styled.browser.esm-Scfyu_ZY.js";import"./extends-E30VzY7q.js";import"./emotion-react.browser.esm-7R29exhq.js";const x=t=>{const[d,b]=c.useState(t);return c.useEffect(()=>{b(t)},[t]),{activeTab:d,handleChange:a=>{b(a)}}},I={title:"Data Display/Tabs",component:n,parameters:{backgrounds:{default:"light"}}},m=({tabName:t,tabPanelGridTitle:d,tabPanelGridSubtitle:b,orientation:l})=>{const{activeTab:a,handleChange:i}=x("first");return e.jsxs("div",{style:{display:"flex",flexDirection:l==="horizontal"?"column":"row"},children:[e.jsxs(n,{orientation:l,children:[e.jsx(n.Item,{activeTab:a,handleChange:i,index:"first",children:t}),e.jsx(n.Item,{activeTab:a,handleChange:i,index:"second",children:"Tab 2"}),e.jsx(n.Item,{activeTab:a,handleChange:i,index:"third",children:"Tab 3"}),e.jsx(n.Item,{activeTab:a,handleChange:i,index:"fourth",isDisabled:!0,children:"Tab 4"}),e.jsx(n.Item,{activeTab:a,handleChange:i,hasError:!0,index:"fifth",children:"Tab 5"})]}),e.jsx(r,{activeTab:a,index:"first",children:e.jsxs(r.Grid,{children:[e.jsx("p",{children:d}),e.jsx("p",{children:b})]})}),e.jsx(r,{activeTab:a,index:"second",children:"Tab 2 content"}),e.jsx(r,{activeTab:a,index:"third",children:"Tab 3 content"}),e.jsx(r,{activeTab:a,index:"fifth",children:"Tab 5 content"})]})},s=m.bind({});s.args={tabName:"Tab 1",tabPanelGridTitle:"Testing tab panel grid:",tabPanelGridSubtitle:"Tab 1 content",orientation:"horizontal"};var T,o,h;s.parameters={...s.parameters,docs:{...(T=s.parameters)==null?void 0:T.docs,source:{originalSource:`({
  tabName,
  tabPanelGridTitle,
  tabPanelGridSubtitle,
  orientation
}) => {
  const {
    activeTab,
    handleChange
  } = useTabs('first');
  return <div style={{
    display: 'flex',
    flexDirection: orientation === 'horizontal' ? 'column' : 'row'
  }}>
      <Tabs orientation={orientation}>
        <Tabs.Item activeTab={activeTab} handleChange={handleChange} index='first'>
          {tabName}
        </Tabs.Item>
        <Tabs.Item activeTab={activeTab} handleChange={handleChange} index='second'>
          Tab 2
        </Tabs.Item>
        <Tabs.Item activeTab={activeTab} handleChange={handleChange} index='third'>
          Tab 3
        </Tabs.Item>
        <Tabs.Item activeTab={activeTab} handleChange={handleChange} index='fourth' isDisabled>
          Tab 4
        </Tabs.Item>
        <Tabs.Item activeTab={activeTab} handleChange={handleChange} hasError index='fifth'>
          Tab 5
        </Tabs.Item>
      </Tabs>
      <TabPanel activeTab={activeTab} index='first'>
        <TabPanel.Grid>
          <p>{tabPanelGridTitle}</p>
          <p>{tabPanelGridSubtitle}</p>
        </TabPanel.Grid>
      </TabPanel>
      <TabPanel activeTab={activeTab} index='second'>
        Tab 2 content
      </TabPanel>
      <TabPanel activeTab={activeTab} index='third'>
        Tab 3 content
      </TabPanel>
      <TabPanel activeTab={activeTab} index='fifth'>
        Tab 5 content
      </TabPanel>
    </div>;
}`,...(h=(o=s.parameters)==null?void 0:o.docs)==null?void 0:h.source}}};const C=["Default"];export{s as Default,C as __namedExportsOrder,I as default};

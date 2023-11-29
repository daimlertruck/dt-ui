# Tabs

The Tabs component allows different views/information to be switched easily.
If the Tabs run out of space, they will break into a new line.

## Usage

```jsx
import { Tabs, TabPanel, useTabs } from '@dt-ui/react';

const { activeTab, handleChange } = useTabs('first');

return (
  <>
    <Tabs>
      <Tabs.Item
        index='first'
        handleChange={handleChange}
        activeTab={activeTab}
      >
        Tab 1
      </Tabs.Item>
      <Tabs.Item
        index='second'
        handleChange={handleChange}
        activeTab={activeTab}
      >
        Tab 2
      </Tabs.Item>
      <Tabs.Item
        index='third'
        handleChange={handleChange}
        activeTab={activeTab}
        disabled={true}
      >
        Tab 3
      </Tabs.Item>
    </Tabs>
    <TabPanel activeTab={activeTab} index='first'>
      <TabPanel.Grid>
        <p>Testing tab panel grid:</p>
        <p>Tab 1 content</p>
      </TabPanel.Grid>
    </TabPanel>
    <TabPanel activeTab={activeTab} index='second'>
      Tab 2 content
    </TabPanel>
  </>
);
```

## API

### Tabs

| Property      | Type                    | Default    | Description                     |
|---------------|-------------------------|------------|---------------------------------|
| `children`    | `ReactNode`             | -          | Child components to be rendered |
| `dataTestId`  | `string`                | -          | Customizable test identifier    |
| `orientation` | `horizontal \ vertical` | horizontal | The tab orientation             |
| `style`       | `React.CSSProperties`   | -          | Styles to be used in the Tabs   |

### Tabs.Item

| Property       | Type                    | Default    | Description                                                                                       |
|----------------|-------------------------|------------|---------------------------------------------------------------------------------------------------|
| `activeTab`    | `string`                | -          | Represents the active tab                                                                         |
| `children`     | `ReactNode`             | -          | Child components to be rendered                                                                   |
| `dataTestId`   | `string`                | -          | Customizable test identifier                                                                      |
| `disabled`     | `string`                | -          | Determines the disabled state of the tab                                                          |
| `handleChange` | `function`              | -          | When clicked, this tab represents the active one                                                  |
| `index`        | `string`                | -          | The tab identifier                                                                                |
| `orientation`  | `horizontal \ vertical` | horizontal | The tab orientation                                                                               |
| `hasError`     | `boolean`               | -          | If set to true, the tab will appear with error colors. Only applies to vertical orientation tabs. |

### TabPanel

Represents the tab content.

| Property     | Type                  | Default | Description                                        |
|--------------|-----------------------|---------|----------------------------------------------------|
| `activeTab`  | `string`              | -       | Represents the active tab                          |
| `children`   | `ReactNode`           | -       | Child components to be rendered                    |
| `dataTestId` | `string`              | -       | Customizable test identifier                       |
| `index`      | `string`              | -       | The tab identifier to which the content belongs to |
| `style`      | `React.CSSProperties` | -       | Styles to be used in the TabPanel                  |

### TabPanel.Grid

Allows the insertion of a two column grid (first column with fixed with of 196px)

| Property     | Type        | Default | Description                     |
|--------------|-------------|---------|---------------------------------|
| `children`   | `ReactNode` | -       | Child components to be rendered |
| `dataTestId` | `string`    | -       | Customizable test identifier    |

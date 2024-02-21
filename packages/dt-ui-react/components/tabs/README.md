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
  </>
);
```

## API

### Tabs

| Property     | Type                  | Default | Description                     |
| ------------ | --------------------- | ------- | ------------------------------- |
| `children`   | `ReactNode`           | -       | Child components to be rendered |
| `dataTestId` | `string`              | -       | Customizable test identifier    |
| `style`      | `React.CSSProperties` | -       | Styles to be used in the Tabs   |

### Tabs.Item

| Property       | Type        | Default | Description                                      |
| -------------- | ----------- | ------- | ------------------------------------------------ |
| `activeTab`    | `string`    | -       | Represents the active tab                        |
| `children`     | `ReactNode` | -       | Child components to be rendered                  |
| `dataTestId`   | `string`    | -       | Customizable test identifier                     |
| `isDisabled`   | `string`    | -       | Determines the disabled state of the tab         |
| `handleChange` | `function`  | -       | When clicked, this tab represents the active one |
| `index`        | `string`    | -       | The tab identifier                               |

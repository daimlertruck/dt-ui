# Drawer

A drawer is a component that slides in from the side of the screen. It is typically used to display additional content, such as a detail view or a list of options.

## Usage

```jsx
import { Drawer } from '@dt-ui/react';

export const App = () => {
  const [isDrawerVisible, setIsDrawerVisible] = useState(props.isVisible);

  const toggleDrawer = () => {
    setIsDrawerVisible((prevState) => !prevState);
  };

  return (
    <>
      <button onClick={toggleDrawer} type='button'>
        Open Drawer
      </button>

      <Drawer isVisible={isDrawerVisible} setIsVisible={setIsDrawerVisible}>
        <Drawer.Header>
          <Drawer.Title title='Drawer title' />
          <div>Drawer header content here.</div>
        </Drawer.Header>
        <Drawer.ScrollEffectContainer />
        <Drawer.Body>
          <div>Drawer body content here.</div>
        </Drawer.Body>
      </Drawer>
    </>
  );
};
```

## API

### Drawer

| Property       | Type        | Default | Description                                                                  |
| -------------- | ----------- | ------- | ---------------------------------------------------------------------------- |
| `isVisible`    | `boolean`   | false   | State function boolean value to define if the drawer is being shown or not   |
| `setIsVisible` | `function`  | -       | State function set to handle the drawer open and close via its boolean value |
| `children`     | `ReactNode` | -       | Child component to be rendered on the drawer body                            |
| `dataTestId`   | `string`    | drawer  | Drawer test identifier                                                       |

### Drawer.Title

| Property | Type     | Default | Description              |
| -------- | -------- | ------- | ------------------------ |
| `title`  | `string` | -       | Defines the drawer title |

### Drawer.Header

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

### Drawer.ScrollEffectContainer

| Property | Type | Default | Description |
| -------- | ---- | ------- | ----------- |
| -        | -    | -       | -           |

### Drawer.Body

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

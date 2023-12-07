# Breadcrumbs

This component allows the user to configure its history navigation using breadcrumbs

## Usage

```jsx
import { Breadcrumb } from '@dt-ui/react';

export const App = () => {
  const breadcrumbs = [
    { name: 'Name 1', showIcon: true},
    { name: 'Name 2' },
    { disabled: true, name: 'Name 3' },
    { name: 'Name 4' },
  ];

  return (
    <Breadcrumb separator='slash'>
      {breadcrumbs.map((breadcrumb, i) => (
        <Breadcrumb.Item
          key={`${i}-${breadcrumb.name}`}
          disabled={breadcrumb.disabled}
        >
            {breadcrumb.showIcon && <ViewAgendaIcon />}
            <a href='/'>{breadcrumb.name}</a>
        </Breadcrumb.Item>
      ))}
    </Breadcrumb>
  );
};
```

## API

### Breadcrumb

#### Props

| Property     | Type                  | Default | Description                                                                     |
| ------------ | --------------------- | --------| ------------------------------------------------------------------------------- |
| `children`   | `ReactNode`           | -       | To achieve the desired behaviour use the Breadcrumb.Item as child.              |
| `separator`  | `BreadcrumbSeparator` | `slash` | Defines the breadcrumbs separator                                               |

### Breadcrumb.Item

#### Props

| Property     | Type        | Default | Description                                                                     |
| ------------ | ----------- | ------- | ------------------------------------------------------------------------------- |
| `children`   | `ReactNode` | -       | Child components to be rendered, the breadcrumb doesn't provide a anchor, if you want navigation you need to provide your own      navigation component, as well as icons as follows in the example.                                                        |
| `disabled`   | `boolean`   | `false` | Disables the breadcrumb                                                         |


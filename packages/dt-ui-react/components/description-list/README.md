# Menu

This component represents a description list, with terms and descriptions.

## Usage

```jsx
import { DescriptionList } from '@dt-ui/react';

export const App = () => {
  return (
    <DescriptionList>
      <DescriptionList.Term>Term 1</DescriptionList.Term>
      <DescriptionList.Description>
        Some description 1
      </DescriptionList.Description>
      <DescriptionList.Term>Term 2</DescriptionList.Term>
      <DescriptionList.Description>
        Some description 2
      </DescriptionList.Description>
      <DescriptionList.Term>Term 3</DescriptionList.Term>
      <DescriptionList.Description>
        Some description 3
      </DescriptionList.Description>
    </DescriptionList>
  );
};
```

## API

### Menu

| Property        | Type                  | Default              | Description                                                                                       |
| --------------- | --------------------- | -------------------- | ------------------------------------------------------------------------------------------------- |
| `children`      | `ReactNode`           | -                    | Child components to be rendered. Usually `DescriptionList.Term` and `DescriptionList.Description` |
| `listStyleType` | `enum<ListStyleType>` | `ListStyleType.None` | Specifies the type of list-item marker in a list.                                                 |
| `dataTestId`    | `string`              | -                    | Customizable test identifier                                                                      |

### DescriptionList.Term

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

### DescriptionList.Description

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

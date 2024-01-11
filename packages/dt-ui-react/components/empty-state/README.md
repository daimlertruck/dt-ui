# EmptyState

This component fills the width of the container where is placed and its height varies depending on the content in it.
The usage of this component is to show a message to the user when there is no data to display.
Furthermore, it can be used to show additional information like a button, a link or an image as children.

## Usage

```jsx
import { EmptyState } from '@dt-ui/react';

export const App = () => {
  const title = 'Some Title';
  const description = 'Some Description';

  return (
    <EmptyState>
        <img />
      <EmptyState.Content
        title={title}
        description={description}
      />
        <Button onClick={() => {}} variant='solid'>
          Action
        </Button>
    </EmptyState>
  );
};
```

## API

### EmptyState

| Property      | Type        | Default         | Description                                                 |
|---------------|-------------|-----------------|-------------------------------------------------------------|
| `children`    | `ReactNode` | -               | Child components to be rendered.                            |
| `dataTestId`  | `string`    | `'empty-state'` | Customizable test identifier.                               |  
| `title`       | `string`    | -               | Text to be presented as Title within the Empty State.       |  
| `description` | `string`    | -               | Text to be presented as Description within the Empty State. |  

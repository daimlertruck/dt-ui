# Message

This component fills the width of the container where is placed and its height varies depending on the content in it.
The usage of this component is to show a message to call attention to something, be it useful information or a warning message. They should be used to provide context in proximity to a piece of content.
Furthermore, it can be used to add an action like a link, by passing it as a children.

## Usage

```jsx
import { Message } from '@dt-ui/react';

export const App = () => {
  const title = 'Some Title';
  const description = 'Some Description';
  const type = 'Error';

  return (
    <Message type={type}>
      <Message.Title>{title}</Message.Title>
      <Message.Description>{description}</Message.Description>
      <Message.Action>
        <Link textSize={LinkTextSize.Small} href='/'>View action</Link>
      </Message.Action>
    </Message>
  );
};
```

## API

### Message

| Property      | Type          | Default     | Description                                                                                                                          |
|---------------|---------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `children`    | `ReactNode`   | -           | Child components to be rendered. There is flexibility on what the content can be, but the recommendation is that it should be a link with a character count limit of 25. |
| `dataTestId`  | `string`      | `'message'` | Customizable test identifier.                                                                                                        |  
| `type`        | `MessageType` | -           | Sets the type of the Message, responsible for the icon and It's color, the background color and color of the dashed border           |  
| `title`       | `string`      | -           | Optional Text to be presented as Title within the Message.Content, It should have text character count limit: 50.                    |  
| `description` | `string`      | -           | Text to be presented as Description within the Message.Content, It should have text character count limit: 230.  

### Message.Title

| Property      | Type          | Default     | Description                                                                                                                          |
|---------------|---------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `children`    | `ReactNode`   | -           | Child components to be rendered within the action. Text is expected. |

### Message.Description

| Property      | Type          | Default     | Description                                                                                                                          |
|---------------|---------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `children`    | `ReactNode`   | -           | Child components to be rendered within the action. Text is expected. |

### Message.Action

| Property      | Type          | Default     | Description                                                                                                                          |
|---------------|---------------|-------------|--------------------------------------------------------------------------------------------------------------------------------------|
| `children`    | `ReactNode`   | -           | Child components to be rendered within the action. |
| `dataTestId`  | `string`      | `'message-action'` | Customizable test identifier for the action. |

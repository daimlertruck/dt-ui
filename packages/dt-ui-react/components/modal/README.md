# Modal

This component appears in front of the app content to provide critical information or ask for a decision.

## Usage

```jsx
import {
  Button,
  Modal,
  Overlay,
  TextField,
  useModal,
} from '@dt-ui/react';

export const App = () => {
  const { isModalOpen, toggleModal } = useModal(); // Handles modal open state

  const handleAction = () => null; // Main button action

  return (
    <>
      <button onClick={toggleModal}>Click me</button>
      <Overlay isOpen={isModalOpen}>
        <Modal hasClickOutside={true} handleClose={toggleModal}>
          <Modal.Header handleClose={toggleModal}>Title</Modal.Header>
          <Modal.Content>
            <Modal.ContentTitle>
              Subtitle
            </Modal.ContentTitle>
            <p>Some information here</p>
          </Modal.Content>
          <Modal.Footer>
            <Button
              variant='outlined'
              color='neutral'
              onClick={toggleModal}
              dataTestId='cancel'
            >
              Cancel
            </Button>
            <Button onClick={handleAction} dataTestId='action' />Action</Button>
          </Modal.Footer>
        </Modal>
      </Overlay>
    </>
  );
};
```

## API

### Overlay

Component that determines the main display as well as sets the background.

| Property   | Type        | Default | Description                                                   |
| ---------- | ----------- | ------- | ------------------------------------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered                               |
| `isOpen`   | `boolean`   | false   | Determines if the component is open or close                  |
| `ref`      | `RefObject` | -       | Provides a way to access DOM node or React element reference. |

### Modal

Main modal container that sets the modal dimensions and receives the content children. This component also uses the `useClickOutside` hook to handle the close of the modal everytime the user click outside of the content.

| Property          | Type         | Default | Description                                                                     |
| ----------------- | ------------ | ------- | ------------------------------------------------------------------------------- |
| `children`        | `ReactNode`  | -       | Child components to be rendered                                                 |
| `handleClose`     | `() => void` | -       | Handles the close action of the modal when user clicks outside of the component |
| `hasClickOutside` | `boolean`    | false   | Determines if clicking outside of the modal can close it or not                 |

### Modal.Header

Header information (for example, the 'x' close button).

| Property      | Type         | Default | Description                                       |
| ------------- | ------------ | ------- | ------------------------------------------------- |
| `children`    | `ReactNode`  | -       | Child components to be rendered                   |
| `handleClose` | `() => void` | -       | Handles the close action of the 'x' button        |
| `disabled`    | `boolean`    | -       | Determines if the close button is disabled or not |

### Modal.Content

Main content of the modal.

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

### Modal.ContentTitle

Main title of the content section.

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

### Modal.Footer

Footer Actions (for example, the 'Cancel' button)

| Property   | Type                  | Default | Description                           |
| ---------- | --------------------- | ------- | ------------------------------------- |
| `children` | `ReactNode`           | -       | Child components to be rendered       |
| `style`    | `React.CSSProperties` | -       | Gives the Modal Footer css properties |

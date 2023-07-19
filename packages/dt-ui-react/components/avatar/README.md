# Avatar

Avatars can be used to display circular user profile in user menu, tables etc.

## Usage

```jsx
import { Avatar, AvatarType } from '@dt-ui/react';

export const App = () => {
  return (
    <div>
      <Avatar type={AvatarType.Profile} title='User Name' />
    </div>
  );
};
```

## API

### Avatar

This component can contain upto two simple characters by passing a string in prop `title`

| Property     | Type               | Default | Description                                                        |
| ------------ | ------------------ | ------- | ------------------------------------------------------------------ |
| `title`      | `ReactNode`        | -       | Letter characters shown in the avatar                              |
| `isLoading`  | `boolean`          | false   | Set to true if you want to wait for the data to be loaded          |
| `type`       | `enum<AvatarType>` | profile | You can choose type of the Avatar you want for different use cases |
| `dataTestId` | `string`           | avatar  | Avatar test identifier                                             |

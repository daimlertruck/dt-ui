# Page Header

This component can be used in the header of every page to provide relevent information related to that page.

## Usage

- List Page Header

```jsx
import { PageHeader } from '@dt-ui/react';

export const App = () => {
  return (
    <PageHeader dataTestId='list'>
      <PageHeader.Title>Page Title</PageHeader.Title>
    </PageHeader>
  );
};
```

- Detail Page Header

```jsx
import { PageHeader, PageType, Button } from '@dt-ui/react';

export const App = () => {
  return (
    <PageHeader variant={PageType.Detail} dataTestId='detail'>
      <PageHeader.Segment>
        <PageHeader.Title variant={PageType.Detail}>
          Page Title
        </PageHeader.Title>
        <PageHeader.Description>
          <Typography>
            Some optional description
          </Typography>
        </PageHeader.Description>
      </PageHeader.Segment>
      <PageHeader.Segment isAlignToRight={true}>
        <Button onClick={() => null} dataTestId='click-me' />Click Me</Button>
      </PageHeader.Segment>
    </PageHeader>
  );
};
```

## API

### PageHeader

Main header container with display flex that can contain all childrens.

| Property     | Type             | Default      | Description                       |
| ------------ | ---------------- | ------------ | --------------------------------- |
| `children`   | `ReactNode`      | -            | Child components to be rendered   |
| `variant`    | `enum<PageType>` | None         | Sets the page header type         |
| `dataTestId` | `string`         | -page-header | PageHeader custom test identifier |
| `direction`  | `row` `column`   | row          | Sets the flex direction of header |

### <PageHeader.Title>

Main title (h1) of page header.

| Property   | Type             | Default | Description                     |
| ---------- | ---------------- | ------- | ------------------------------- |
| `children` | `ReactNode`      | -       | Child components to be rendered |
| `variant`  | `enum<PageType>` | None    | Sets the page header type       |

### <PageHeader.TextDetail>

This component can render the given content.

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

### <PageHeader.Description>

Main Description of page header.

| Property   | Type        | Default | Description                     |
| ---------- | ----------- | ------- | ------------------------------- |
| `children` | `ReactNode` | -       | Child components to be rendered |

### <PageHeader.Segment>

You can have multiple Segments within PageHeader container.

| Property         | Type        | Default | Description                                                                  |
| ---------------- | ----------- | ------- | ---------------------------------------------------------------------------- |
| `children`       | `ReactNode` | -       | Child components to be rendered                                              |
| `isAlignToRight` | `boolean`   | false   | Set to true if you want to align the elements inside the segmen to the right |

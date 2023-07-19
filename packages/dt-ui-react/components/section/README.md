# Section

This component defines a section in a document.

## Usage

```jsx
import { Section } from '@dt-ui/react';

export const App = () => {
  return (
    <Section>
      <Section.Header>
        <Section.Title>My Awesome Title</Section.Title>
        <p>Some header info</p>
      </Section.Header>
      <Section.Content>
        <Section.SubSection>
          <Section.Detail title='Detail Title 1'>First info</Section.Detail>
          <Section.Detail title='Detail Title 2'>Second info</Section.Detail>
          <Section.Detail title='Detail Title 3'>Third info</Section.Detail>
        </Section.SubSection>
        <Typography element='h2' fontStyles='h5' style={{ margin: '15px 0px' }}>
          A subtitle
        </Typography>
        <p>Some text content after a subtitle</p>
      </Section.Content>
    </Section>
  );
};
```

## API

### Section

Main section container that determined the variant of it:

- SectionVariant.Table: will render a section with any particular css styles
- SectionVariant.Box: will render a section with a white background color and other specific css styles.

| Property         | Type                   | Default              | Description                                               |
| ---------------- | ---------------------- | -------------------- | --------------------------------------------------------- |
| `children`       | `ReactNode`            | -                    | Child components to be rendered                           |
| `dataTestId`     | `string`               | -                    | Test identifier                                           |
| `variant`        | `enum<SectionVariant>` | `SectionVariant.Box` | Sets the section variant (will load different css styled) |
| `withPageHeader` | `boolean`              | `false`              | Determines if the section includes a page header inside   |
| `style`          | `React.CSSProperties`  | -                    | Styles to be used in the section                          |

### Section.Header

| Property     | Type        | Default | Description                     |
| ------------ | ----------- | ------- | ------------------------------- |
| `children`   | `ReactNode` | -       | Child components to be rendered |
| `dataTestId` | `string`    | -       | Test identifier                 |

### Section.Title

| Property     | Type        | Default | Description                     |
| ------------ | ----------- | ------- | ------------------------------- |
| `children`   | `ReactNode` | -       | Child components to be rendered |
| `dataTestId` | `string`    | -       | Test identifier                 |

### Section.Content

Handles the loading state of the section content.

| Property    | Type        | Default | Description                     |
| ----------- | ----------- | ------- | ------------------------------- |
| `children`  | `ReactNode` | -       | Child components to be rendered |
| `isLoading` | `boolean`   | -       | Loading state                   |

### Section.Detail

Shows a label followed by a text.

| Property     | Type                  | Default | Description                                        |
| ------------ | --------------------- | ------- | -------------------------------------------------- |
| `children`   | `ReactNode`           | -       | Child components to be rendered                    |
| `dataTestId` | `string`              | -       | Test identifier                                    |
| `title`      | `string`              | -       | Main label to show                                 |
| `isInline`   | `boolean`             | `false` | Determines if the text has to be display in a line |
| `style`      | `React.CSSProperties` | -       | Styles to be used in the section                   |

### Section.Subsection

| Property     | Type        | Default | Description                     |
| ------------ | ----------- | ------- | ------------------------------- |
| `children`   | `ReactNode` | -       | Child components to be rendered |
| `dataTestId` | `string`    | -       | Test identifier                 |

### Section.Container

| Property     | Type                  | Default | Description                                |
| ------------ | --------------------- | ------- | ------------------------------------------ |
| `children`   | `ReactNode`           | -       | Child components to be rendered            |
| `dataTestId` | `string`              | -       | Test identifier                            |
| `style`      | `React.CSSProperties` | -       | Styles to be used in the section container |

### Section.Footer

| Property     | Type        | Default | Description                     |
| ------------ | ----------- | ------- | ------------------------------- |
| `children`   | `ReactNode` | -       | Child components to be rendered |
| `dataTestId` | `string`    | -       | Test identifier                 |

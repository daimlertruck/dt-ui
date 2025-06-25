# Accordion Package

An accordion is a vertically stacked list of headers that reveal or hide associated sections of content.

## Accordion Usage

```jsx
import { Accordion } from '@dt-ui/react';

export const App = () => {
  const headerCustomContent = <>Header content here.</>;

  return (
    <Accordion headerContent={headerCustomContent}>
      Body content here.
    </Accordion>
  );
};
```

## Properties

| Property        | Type                  | Default             | Description                                                 |
| --------------- | --------------------- | ------------------- | ----------------------------------------------------------- |
| `isOpen`        | `boolean`             | false               | Boolean value to define if the accordion is open or closed  |
| `hasBackground` | `boolean`             | false               | Sets the Accordion background color                         |
| `headerContent` | `ReactNode`           | -                   | Child component to be rendered on the accordion header      |
| `isDisabled`    | `boolean`             | false               | Boolean value to define if the Accordion is disabled or not |
| `children`      | `ReactNode`           | -                   | Child component to be rendered on the accordion body        |
| `dataTestId`    | `string`              | accordion-container | Accordion test identifier                                   |
| `style`         | `React.CSSProperties` | -                   | Gives the Accordion CSS properties                          |
| `hasBorderBottom`| `boolean`             | false               | Sets the Accordion border-bottom                            |

### Stack

- [TypeScript](https://www.typescriptlang.org/) for static type checking
- [React](https://reactjs.org/) — JavaScript library for user interfaces
- [Emotion](https://emotion.sh/docs/introduction) — for writing css styles with JavaScript
- [Storybook](https://storybook.js.org/) — UI component environment powered by Vite
- [Jest](https://jestjs.io/) - JavaScript Testing Framework
- [React Testing Library](https://testing-library.com/) - to test UI components in a user-centric way
- [ESLint](https://eslint.org/) for code linting
- [Prettier](https://prettier.io) for code formatting
- [Tsup](https://github.com/egoist/tsup) — TypeScript bundler powered by esbuild
- [Yarn](https://yarnpkg.com/) from managing packages

### Commands

- `yarn build` - Build the package
- `yarn dev` - Run the package locally
- `yarn lint` - Lint all files within this package
- `yarn test` - Run all unit tests
- `yarn test:report` - Open the test coverage report
- `yarn test:update:snapshot` - Run all unit tests and update the snapshot

### Compilation

Running `yarn build` from the root of the package will use [tsup](https://tsup.egoist.dev/) to compile the raw TypeScript and React code to plain JavaScript.

The `/dist` folder contains the compiled output.

```bash
accordion
└── dist
    ├── index.d.ts  <-- Types
    ├── index.js    <-- CommonJS version
    └── index.mjs   <-- ES Modules version
    ...
```

### Versioning

Follows [semantic versioning](https://semver.org/)

## &copy; License

Licensed under [MIT License](LICENSE.md)

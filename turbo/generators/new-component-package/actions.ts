import { PlopTypes } from '@turbo/gen';

const componentFileName =
  '{{ turbo.paths.root }}/packages/react-packages/{{packageName}}/src/{{componentName}}';

const packagesPath = '{{ turbo.paths.root }}/packages';

const addComponentAction = (ext: string): PlopTypes.AddActionConfig => ({
  type: 'add',
  path: `${componentFileName}.${ext}`,
  templateFile: `new-component-package/templates/src/Component.${ext}.hbs`,
});

export const addComponentActions: PlopTypes.AddActionConfig[] = [
  addComponentAction('test.tsx'),
  addComponentAction('styled.ts'),
  addComponentAction('stories.tsx'),
  addComponentAction('tsx'),
];

export const modifyStorybookComponentsPathAction: PlopTypes.ModifyActionConfig =
  {
    type: 'modify',
    path: '{{ turbo.paths.root }}/apps/docs/.storybook/main.ts',
    pattern: 'const components = [',
    template: "const components = ['{{packageName}}', ",
    templateFile: '',
  };

export const modifyDTUIReacAddNewPackageAction: PlopTypes.ModifyActionConfig[] =
  [
    {
      type: 'modify',
      path: `${packagesPath}/dt-ui-react/index.ts`,
      templateFile: '',
      pattern:
        /(\/\/independent component packages\s*\n)(export[\s\S]*?)\n\s*\n/,
      template: "$1$2\nexport * from '@dt-ui/react-{{ packageName }}';\n\n",
    },
    {
      type: 'modify',
      path: `${packagesPath}/dt-ui-react/package.json`,
      templateFile: '',
      pattern: /("dependencies":\s*{)([\s\S]*?)(\n\s*}\n)/,
      template:
        '$1\n    "@dt-ui/react-{{ packageName }}": "{{ packageVersion }}",$2$3',
    },
  ];

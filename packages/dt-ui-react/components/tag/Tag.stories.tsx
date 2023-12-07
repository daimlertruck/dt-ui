import { Story } from '@storybook/react';

import { Tag, TagGroup, TagProps } from './Tag';

export default {
  title: 'Data Display/Tag',
  component: Tag,
  argTypes: {
    onClick: {
      options: [true, undefined],
      control: {
        type: 'radio',
        labels: {
          true: 'Has onClick',
          undefined: 'Does not have onClick',
        },
      },
    },
    onClose: {
      options: [true, undefined],
      control: {
        type: 'radio',
        labels: {
          true: 'Has onClose',
          undefined: 'Does not have onClose',
        },
      },
    },
  },
};

const Template: Story<TagProps> = ({ onClick, onClose, ...props }) => {
  return (
    <Tag
      {...props}
      {...(onClick &&
        ({
          onClick: () => console.log('clicked'),
        } as unknown as TagProps['onClick']))}
      {...(onClose &&
        ({
          onClose: () => console.log('closed'),
        } as unknown as TagProps['onClose']))}
    >
      {props.children}
    </Tag>
  );
};

export const Default = Template.bind({});

Default.args = {
  children: 'tag label',
  variant: 'solid',
  size: 'small',
  color: 'primary',
  border: 'squared',
  isClickable: false,
  isDisabled: false,
  onClick: undefined,
  onClose: undefined,
};

const GroupTemplate: Story<TagProps> = ({ ...props }) => {
  return (
    <TagGroup>
      <Tag {...props}>{props.children}</Tag>
      <Tag {...props}>{props.children}</Tag>
    </TagGroup>
  );
};

export const DefaultGroup = GroupTemplate.bind({});

DefaultGroup.args = {
  children: 'active',
  onClose: () => null,
};

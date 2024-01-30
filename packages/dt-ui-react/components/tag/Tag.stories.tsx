import { Story } from '@storybook/react';

import { Tag, TagProps } from './Tag';

export default {
  title: 'Data Display/Tag',
  component: Tag,
};

const Template: Story<TagProps> = ({ ...props }) => {
  return <Tag {...props}>{props.children}</Tag>;
};

export const Default = Template.bind({});

Default.args = {
  children: 'active',
  onClick: () => null,
  onClose: () => null,
};

const GroupTemplate: Story<TagProps> = ({ ...props }) => {
  return (
    <Tag.Group>
      <Tag {...props}>{props.children}</Tag>
      <Tag {...props}>{props.children}</Tag>
    </Tag.Group>
  );
};
export const DefaultGroup = GroupTemplate.bind({});

DefaultGroup.args = {
  children: 'active',
  variant: 'colored',
  isDisabled: false,
  isClickable: false,
  onClose: () => null,
};

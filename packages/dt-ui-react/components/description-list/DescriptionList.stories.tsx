import { Story } from '@storybook/react';

import { ListStyleType } from '../../utils';

import { DescriptionList } from './DescriptionList';

export default {
  title: 'Data Display/DescriptionList',
  component: DescriptionList,
};
const Template: Story = ({ ...props }) => {
  return (
    <DescriptionList {...props}>
      <DescriptionList.Term>Term 1</DescriptionList.Term>
      <DescriptionList.Description>
        Some description 1
      </DescriptionList.Description>
      <DescriptionList.Term>Term 2</DescriptionList.Term>
      <DescriptionList.Description>
        Some description 2
      </DescriptionList.Description>
      <DescriptionList.Term>Term 3</DescriptionList.Term>
      <DescriptionList.Description>
        Some description 3
      </DescriptionList.Description>
    </DescriptionList>
  );
};

export const Default = Template.bind({});

Default.args = {
  listStyleType: ListStyleType.Disc,
};

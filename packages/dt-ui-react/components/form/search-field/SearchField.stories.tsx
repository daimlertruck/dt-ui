import { Story } from '@storybook/react';

import { SearchField, SearchFieldProps } from './SearchField';

export default {
  title: 'Data Display/form/SearchField',
  component: SearchField,
};

const Template: Story<SearchFieldProps> = ({ ...props }) => {
  return <SearchField {...props} />;
};

export const Default = Template.bind({});

Default.args = {
  isLoading: false,
  label: 'Search for anything',
  initialValue: 'Initial Value',
};

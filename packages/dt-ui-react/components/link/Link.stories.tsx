import { Story } from '@storybook/react';

import { LinkTextSize } from './constants';

import { Link, LinkProps } from '.';

export default {
  title: 'Data Display/Link',
  component: Link,
};

const Template: Story<LinkProps> = ({ ...props }) => {
  return <Link {...props} />;
};

export const Default = Template.bind({});

Default.args = {
  children: 'Redirect to',
  href: 'https://www.google.com/',
  target: '_blank',
  textSize: LinkTextSize.Medium,
  isUnderline: true,
  isDisabled: false,
};

import { Story } from '@storybook/react';

import { PageHeader, Button } from '../../..';
import { PageType } from '../constants';

export default {
  title: 'Data Display/PageHeader',
  component: PageHeader,
};

const Template: Story = ({ title, description, variant }) => {
  return (
    <PageHeader variant={variant}>
      <PageHeader.Segment>
        <PageHeader.Title variant={variant}>{title}</PageHeader.Title>
        <PageHeader.Description>{description}</PageHeader.Description>
      </PageHeader.Segment>
      <PageHeader.Segment isAlignToRight={true}>
        <Button onClick={() => null}>Click Me</Button>
      </PageHeader.Segment>
    </PageHeader>
  );
};

export const Default = Template.bind({});

Default.args = {
  title: 'Page Title',
  description: 'This is a optional description',
  variant: PageType.None,
};

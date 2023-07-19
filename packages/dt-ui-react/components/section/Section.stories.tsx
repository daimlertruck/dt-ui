import { Story } from '@storybook/react';

import { Typography } from '../typography';

import { SectionVariant } from './constants';
import { Section, SectionProps } from './Section';

export default {
  title: 'Data Display/Section',
  component: Section,
};

const Template: Story = ({
  title,
  variant,
  withPageHeader,
  isInline,
  isLoading,
}) => (
  <Section variant={variant} withPageHeader={withPageHeader}>
    <Section.Header>
      <Section.Title>{title}</Section.Title>
    </Section.Header>
    <Section.Content isLoading={isLoading}>
      <Section.SubSection>
        <Section.Detail isInline={isInline} title='Detail Title 1'>
          First info
        </Section.Detail>
        <Section.Detail isInline={isInline} title='Detail Title 2'>
          Second info
        </Section.Detail>
        <Section.Detail isInline={isInline} title='Detail Title 3'>
          Third info
        </Section.Detail>
      </Section.SubSection>
    </Section.Content>
  </Section>
);

export const SectionWithSubtitle = (props: SectionProps) => (
  <Section {...props}>
    <Typography element='h2' fontStyles='h5' style={{ margin: '15px 0px' }}>
      A subtitle
    </Typography>
    <p>Some text content after a subtitle</p>
  </Section>
);

export const Default = Template.bind({});

Default.args = {
  title: 'My Awesome Title',
  variant: SectionVariant.Box,
  isInline: false,
  isLoading: false,
};

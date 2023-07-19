import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../utils';
import { Typography } from '../typography';

import { Section } from './Section';

describe('<Section /> component', () => {
  const ProvidedSection = withProviders(Section);

  it('renders section component', () => {
    const { container } = render(
      <ProvidedSection>
        <Section.Header>
          <Section.Title>My Awesome Title</Section.Title>
          <p>Some header info</p>
        </Section.Header>
        <Section.SubSection>
          <Section.Detail title='Detail Title 1'>
            <Typography>First info</Typography>
          </Section.Detail>
          <Section.Detail title='Detail Title 2'>
            <Typography>Second info</Typography>
          </Section.Detail>
          <Section.Detail title='Detail Title 3' isInline={true}>
            <Typography>Third inline info</Typography>
          </Section.Detail>
        </Section.SubSection>
        <Typography element='h2' fontStyles='h5' style={{ margin: '15px 0px' }}>
          A subtitle
        </Typography>
        <p>Some text content after a subtitle</p>
      </ProvidedSection>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders section component with loading content', () => {
    const { container } = render(
      <ProvidedSection>
        <Section.Header>
          <Section.Title>My Awesome Title</Section.Title>
        </Section.Header>
        <Section.Content isLoading={true}>Some content</Section.Content>
      </ProvidedSection>
    );

    expect(container).toMatchSnapshot();
  });
});

describe('<Section.Container /> component', () => {
  const ProvidedSection = withProviders(Section.Container);

  it('renders a div html element with correct content', () => {
    const { container } = render(
      <ProvidedSection>
        <Section.Header>
          <Section.Title>My Awesome Title</Section.Title>
        </Section.Header>
        <Section.Footer>Footer content</Section.Footer>
      </ProvidedSection>
    );

    expect(container).toMatchSnapshot();
  });
});

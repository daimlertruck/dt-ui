import { withProviders } from '@dt-ui/react-core';
import { render, screen, fireEvent } from '@testing-library/react';

import { AccordionBackgroundColor } from './constants';

import { Accordion } from '.';

describe('<ProvidedAccordion /> component', () => {
  const ProvidedAccordion = withProviders(Accordion);

  it('renders correctly the closed accordion', () => {
    const { container } = render(
      <ProvidedAccordion headerContent='Header Content' isOpen={false}>
        <div>Accordion Body</div>
      </ProvidedAccordion>
    );

    expect(container).toMatchSnapshot();
  });

  it('renders correctly the opened accordion', () => {
    render(
      <ProvidedAccordion headerContent='Header Content' isOpen>
        <div>Body Content</div>
      </ProvidedAccordion>
    );

    expect(screen.getByText('Header Content')).toBeInTheDocument();
    expect(screen.getByText('Body Content')).toBeInTheDocument();
  });

  it('toggles open/close when clicking the header', () => {
    render(
      <ProvidedAccordion headerContent='Header Content' isOpen={false}>
        Accordion Body
      </ProvidedAccordion>
    );

    const header = screen.getByTestId('accordion-header');

    fireEvent.click(header);
    expect(screen.getByTestId('accordion-body')).toHaveStyle('display: block');

    fireEvent.click(header);
    expect(screen.getByTestId('accordion-body')).toHaveStyle('display: none');
  });

  it('applies correct background color', () => {
    render(
      <ProvidedAccordion
        backgroundColor={AccordionBackgroundColor.Grey}
        headerContent='Header Content'
        isOpen={false}
      >
        Accordion Body
      </ProvidedAccordion>
    );

    const accordionContainer = screen.getByTestId('accordion-container');
    expect(accordionContainer).toHaveStyle(
      'background-color: rgb(222, 222, 222);'
    );
  });

  it('applies showIcon prop as false', () => {
    render(
      <ProvidedAccordion headerContent='Header Content' isOpen={false}>
        Accordion Body
      </ProvidedAccordion>
    );

    expect(screen.queryByTestId('accordion-icon')).toBeNull();
  });

  it('applies isDisabled prop', () => {
    render(
      <ProvidedAccordion
        headerContent='Header Content'
        isDisabled
        isOpen={false}
      >
        Accordion Body
      </ProvidedAccordion>
    );

    const accordionContainer = screen.getByTestId('accordion-container');
    expect(accordionContainer).toHaveStyle(
      'background-color: rgb(243, 243, 243);'
    );
  });
});

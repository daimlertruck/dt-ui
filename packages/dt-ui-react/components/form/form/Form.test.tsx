import { render } from '@testing-library/react';
import React from 'react';

import { withProviders } from '../../../utils';
import { TextField } from '../text-field';

import { Form } from '.';

describe('<Form /> component', () => {
  const ProvidedForm = withProviders(Form);

  it('renders simple form', () => {
    const { container } = render(
      <ProvidedForm>
        <TextField label='label 1' />
        <TextField label='label 2' />
      </ProvidedForm>
    );

    expect(container).toMatchSnapshot();
  });

  describe('with Form.Group', () => {
    it('should render a form with display flex', () => {
      const { container } = render(
        <ProvidedForm>
          <Form.Group>
            <TextField label='label 1' />
            <TextField label='label 2' />
          </Form.Group>
        </ProvidedForm>
      );

      expect(container).toMatchSnapshot();
    });

    it('should render a form with group title', () => {
      const { container } = render(
        <ProvidedForm>
          <Form.Group title='Group title'>
            <TextField label='label 1' />
            <TextField label='label 2' />
          </Form.Group>
        </ProvidedForm>
      );

      expect(container).toMatchSnapshot();
    });

    it('should render a disabled form group', () => {
      const { container } = render(
        <ProvidedForm>
          <Form.Group isDisabled={true}>
            <TextField label='label 1' />
          </Form.Group>
        </ProvidedForm>
      );

      expect(container).toMatchSnapshot();
    });

    it('should render the info svg and a tooltip', () => {
      const { container } = render(
        <ProvidedForm>
          <Form.Group title='Title' tooltip='Testing tooltip'>
            <TextField label='label 1' />
          </Form.Group>
        </ProvidedForm>
      );

      expect(container).toMatchSnapshot();
    });
  });
});

import { Story } from '@storybook/react';
import { useState } from 'react';

import { BaseProps } from '../../../types';
import { TextArea } from '../text-area';
import { TextField } from '../text-field';
import { Toggle } from '../toggle';

import { GroupProps } from './Form';

import { Form } from '.';

export default {
  title: 'Data Display/form/Form',
  component: Form,
};

const Template: Story<BaseProps> = () => {
  return (
    <Form>
      <TextField label='label 1' />
      <Toggle onChange={() => console.log(0)}>
        <Toggle.Label>inactive</Toggle.Label>
      </Toggle>
    </Form>
  );
};

export const Default = Template.bind({});

Default.args = {};

const TemplateFormGroup: Story<GroupProps> = ({
  isDisabled,
  title,
  tooltip,
}) => {
  const [checked, setChecked] = useState(false);
  return (
    <Form>
      <Form.Group title={title} tooltip={tooltip}>
        <TextField label='label 1' />
        <Toggle
          isChecked={checked}
          onChange={() => setChecked(!checked)}
          isDisabled={true}
        >
          <Toggle.Label>inactive</Toggle.Label>
        </Toggle>
      </Form.Group>
      <Form.Group isDisabled={isDisabled}>
        <TextField label='label 2' />
        <TextField label='label 3' />
      </Form.Group>
      <Form.Group>
        <TextArea label='My area' />
      </Form.Group>
    </Form>
  );
};

export const FormGroup = TemplateFormGroup.bind({});

FormGroup.args = {
  title: '',
  tooltip: '',
  isDisabled: false,
};

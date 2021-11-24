import React from 'react';
import { Story, Meta } from '@storybook/react';
import DefaultButton, {
  DefaultButtonProps,
} from '../../../atoms/buttons/defaultButton';

export default {
  title: 'Atoms/Buttons/DefaultButton',
  component: DefaultButton,
} as Meta;

const Template: Story<DefaultButtonProps & { disabled: boolean }> = (args) => (
  <DefaultButton {...args}>My button</DefaultButton>
);

export const Default = Template.bind({});

Default.args = {
  disabled: false,
};

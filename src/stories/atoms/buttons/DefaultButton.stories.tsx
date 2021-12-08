import React from 'react';
import { Story, Meta } from '@storybook/react';
import DefaultButton from '../../../atoms/buttons/defaultButton';

export default {
  title: 'Atoms/Buttons/DefaultButton',
  component: DefaultButton,
} as Meta;

const Template: Story = (args) => (
  <DefaultButton {...args}>Создать запись</DefaultButton>
);

export const Default = Template.bind({});

Default.args = {
  disabled: false,
  isFullWidth: false,
  variant: 'primary',
  size: 'medium'
};

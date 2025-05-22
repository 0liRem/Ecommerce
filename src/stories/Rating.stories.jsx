import React from 'react';
import Rating from './Rating';

export default {
  title: 'Components/Rating',
  component: Rating,
  argTypes: {
    value: {
      control: { type: 'range', min: 0, max: 5, step: 0.1 },
      defaultValue: 3.5
    },
    max: {
      control: { type: 'number', min: 1, max: 10 },
      defaultValue: 5
    },
    editable: {
      control: 'boolean',
      defaultValue: false
    }
  }
};

const Template = (args) => <Rating {...args} />;

export const Default = Template.bind({});
Default.args = {
  value: 3.5,
  max: 5,
  editable: false
};

export const Editable = Template.bind({});
Editable.args = {
  value: 0,
  max: 5,
  editable: true
};

export const CustomMax = Template.bind({});
CustomMax.args = {
  value: 7,
  max: 10,
  editable: false
};

export const FullRating = Template.bind({});
FullRating.args = {
  value: 5,
  max: 5,
  editable: false
};

export const LowRating = Template.bind({});
LowRating.args = {
  value: 1,
  max: 5,
  editable: false
};
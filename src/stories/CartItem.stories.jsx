import React from 'react';
import CartItem from './CartItem';

export default {
  title: 'Components/CartItem',
  component: CartItem,
  argTypes: {
    item: {
      control: 'object',
      defaultValue: {
        id: '1',
        title: 'Sample Book',
        author: 'Author Name',
        price: 19.99,
        image: 'https://via.placeholder.com/80x120',
        quantity: 1
      }
    }
  }
};

const Template = (args) => <CartItem {...args} />;

export const Default = Template.bind({});
Default.args = {
  item: {
    id: '1',
    title: 'Sample Book',
    author: 'Author Name',
    price: 19.99,
    image: 'https://via.placeholder.com/80x120',
    quantity: 1
  }
};

export const MultipleQuantity = Template.bind({});
MultipleQuantity.args = {
  item: {
    id: '2',
    title: 'Popular Novel',
    author: 'Bestselling Author',
    price: 24.99,
    image: 'https://via.placeholder.com/80x120',
    quantity: 3
  }
};

export const MaxQuantity = Template.bind({});
MaxQuantity.args = {
  item: {
    id: '3',
    title: 'Limited Edition',
    author: 'Famous Writer',
    price: 39.99,
    image: 'https://via.placeholder.com/80x120',
    quantity: 9
  }
};
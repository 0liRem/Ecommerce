import React from 'react';
import CartSummary from './CartSummary';

// Mock context provider for Storybook
const MockCartProvider = ({ children, cart, total }) => {
  return (
    <div>
      {children}
    </div>
  );
};

export default {
  title: 'Components/CartSummary',
  component: CartSummary,
  argTypes: {
    cart: {
      control: 'array',
      defaultValue: [
        { id: '1', title: 'Book 1', price: 19.99, quantity: 1 },
        { id: '2', title: 'Book 2', price: 24.99, quantity: 2 }
      ]
    },
    total: {
      control: 'number',
      defaultValue: 69.97
    }
  }
};

const Template = (args) => (
  <MockCartProvider cart={args.cart} total={args.total}>
    <CartSummary {...args} />
  </MockCartProvider>
);

export const Default = Template.bind({});
Default.args = {
  cart: [
    { id: '1', title: 'Book 1', price: 19.99, quantity: 1 },
    { id: '2', title: 'Book 2', price: 24.99, quantity: 2 }
  ],
  total: 69.97
};

export const EmptyCart = Template.bind({});
EmptyCart.args = {
  cart: [],
  total: 0
};

export const ErrorState = Template.bind({});
ErrorState.args = {
  cart: [
    { id: '1', title: 'Expensive Book', price: 999.99, quantity: 1 }
  ],
  total: 999.99
};
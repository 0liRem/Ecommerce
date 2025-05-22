import React from 'react';
import Recommendations from './Recommendations';

const sampleBooks = [
  {
    id: '1',
    title: 'Recommended Book 1',
    author: 'Author One',
    description: 'First recommended book description.',
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    image: 'https://via.placeholder.com/150x200',
    genre: 'Fiction',
    pages: 320,
    rating: 4.2
  },
  {
    id: '2',
    title: 'Recommended Book 2',
    author: 'Author Two',
    description: 'Second recommended book description.',
    price: 15.99,
    image: 'https://via.placeholder.com/150x200',
    genre: 'Non-Fiction',
    pages: 250,
    rating: 3.5
  },
  {
    id: '3',
    title: 'Recommended Book 3',
    author: 'Author Three',
    description: 'Third recommended book description.',
    price: 29.99,
    originalPrice: 34.99,
    discount: 15,
    image: 'https://via.placeholder.com/150x200',
    genre: 'Fantasy',
    pages: 450,
    rating: 4.9
  }
];

export default {
  title: 'Components/Recommendations',
  component: Recommendations,
  argTypes: {
    books: {
      control: 'array',
      defaultValue: sampleBooks
    },
    title: {
      control: 'text',
      defaultValue: 'Recommended For You'
    }
  }
};

const Template = (args) => <Recommendations {...args} />;

export const Default = Template.bind({});
Default.args = {
  books: sampleBooks,
  title: 'Recommended For You'
};

export const Empty = Template.bind({});
Empty.args = {
  books: [],
  title: 'No Recommendations'
};

export const SingleItem = Template.bind({});
SingleItem.args = {
  books: [sampleBooks[0]],
  title: 'Top Pick'
};

export const CustomTitle = Template.bind({});
CustomTitle.args = {
  books: sampleBooks,
  title: 'Bestsellers'
};
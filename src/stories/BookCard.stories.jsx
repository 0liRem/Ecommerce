import React from 'react';
import BookCard from '../Components/BookCard';
import Rating from '../Rating/Rating';

export default {
  title: 'Components/BookCard',
  component: BookCard,
  argTypes: {
    book: {
      control: 'object',
      defaultValue: {
        id: '1',
        title: 'Sample Book Title',
        author: 'Author Name',
        description: 'This is a sample book description that would appear in the detailed view.',
        price: 19.99,
        originalPrice: 24.99,
        discount: 20,
        image: 'https://via.placeholder.com/150x200',
        genre: 'Fiction',
        pages: 320,
        rating: 4.2
      }
    }
  }
};

const Template = (args) => <BookCard {...args} />;

export const Default = Template.bind({});
Default.args = {
  book: {
    id: '1',
    title: 'The Great Novel',
    author: 'Jane Doe',
    description: 'A captivating story about life and adventures.',
    price: 19.99,
    originalPrice: 24.99,
    discount: 20,
    image: 'https://via.placeholder.com/150x200',
    genre: 'Fiction',
    pages: 320,
    rating: 4.2
  }
};

export const NoDiscount = Template.bind({});
NoDiscount.args = {
  book: {
    id: '2',
    title: 'Regular Priced Book',
    author: 'John Smith',
    description: 'A standard priced book with no discounts.',
    price: 15.99,
    image: 'https://via.placeholder.com/150x200',
    genre: 'Non-Fiction',
    pages: 250,
    rating: 3.5
  }
};

export const HighRating = Template.bind({});
HighRating.args = {
  book: {
    id: '3',
    title: 'Bestseller',
    author: 'Famous Author',
    description: 'A highly rated bestseller.',
    price: 29.99,
    originalPrice: 34.99,
    discount: 15,
    image: 'https://via.placeholder.com/150x200',
    genre: 'Fantasy',
    pages: 450,
    rating: 4.9
  }
};
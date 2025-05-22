import React from 'react';
import BookCard from '../BookCard/BookCard';
import './Recommendations.css';

const Recommendations = ({ books, title }) => {
  if (!books || books.length === 0) return null;
  
  return (
    <div className="recommendations-section">
      <h2>{title}</h2>
      <div className="recommendations-grid">
        {books.map(book => (
          <BookCard key={book.id} book={book} />
        ))}
      </div>
    </div>
  );
};

export default Recommendations;
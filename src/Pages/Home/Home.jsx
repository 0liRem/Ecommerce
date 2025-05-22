///           Documentation
///
///   Author: Oli Viau
///     
///   Context: REACT app using HOOKS to create a ecommerce
///
///   RESOURCES:
///           https://react.dev/learn
///           https://www.w3schools.com/react/react_props.asp
///           UVG Resources
///           https://create-react-app.dev/docs/adding-a-css-modules-stylesheet/
///           https://www.geeksforgeeks.org/how-to-create-dynamic-search-box-in-reactjs/
///           CHAT GPT 4 FOR CSS and help with the validations
///
///   Date: 
///       [000] 19/5/2025
///       [001] 20/5/2025
///       [002] 21/5/2025
///


//Imports
import React, { useState, useContext, useMemo } from 'react';
import { CartContext } from '../../Context/Cartcontext';
import BookCard from '../../Components/BookCard/BookCard';
import SearchBar from '../../Components/SearchBar/SearchBar';
import booksData from './BooksData';
import './Home.css';
import { useNavigate } from 'react-router-dom';



//Main page
const Home = () => {
  const { cart1, totalItems } = useContext(CartContext); 
  const { favorites, cart } = useContext(CartContext);
  const [searchQuery, setSearchQuery] = useState('');
  const [showFavorites, setShowFavorites] = useState(false);
  const navigate = useNavigate();

  // Filter based in the author or title of a book
  const filteredBooks = booksData.filter(book => {
    const matchesSearch = searchQuery === '' || 
      book.title.toLowerCase().includes(searchQuery.toLowerCase()) || 
      book.author.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesFavorites = !showFavorites || favorites.some(fav => fav.id === book.id);
    
    return matchesSearch && matchesFavorites;
  });
// HTML
  return (
    <div className="home-page">
      <h1>LilyBros</h1>
      
      <div className="search-bar-container">
        <SearchBar 
          onSearch={setSearchQuery} 
          onToggleFavorites={() => setShowFavorites(!showFavorites)}
          showFavorites={showFavorites}
        />
      </div>

      {/* Cart Button */}
      <button 
        className="cart-btn"
        onClick={() => navigate('/cart')}
      >
         Ver Carrito ({totalItems})
      </button>
      
      <div className="books-grid">
        {filteredBooks.length > 0 ? (
          filteredBooks.map(book => (
            <BookCard key={book.id} book={book} />
          ))
        ) : (
          <p className="no-results">No se encontraron libros</p>
        )}
      </div>
    </div>
  );
};

export default Home;
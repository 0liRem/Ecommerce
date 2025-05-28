import React, { useContext } from 'react';
import PropTypes from 'prop-types';
import { useNavigate } from 'react-router-dom'; // Agregar esta importación
import { CartContext } from '../../Context/Cartcontext';
import Rating from '../Rating/Rating';
import './BookCard.css';

/**@param options  */
const BookCard = ({ book }) => {
  const { addToCart, toggleFavorite, favorites } = useContext(CartContext);
  const navigate = useNavigate(); // Agregar este hook
  const isFavorite = favorites.some(fav => fav.id === book.id);

  const handleAddToCart = () => {
    addToCart(book);
  };

  const handleToggleFavorite = () => {
    toggleFavorite(book);
  };

  // Función para navegar a los detalles del libro
  const handleImageClick = () => {
    navigate(`/book/${book.id}`);
  };

  return (
    <div className="book-card">
      <div className="book-image-container">
        <img 
          src={book.image} 
          alt={book.title} 
          className="book-image"
          onClick={handleImageClick} // Usar la nueva función
          style={{ cursor: 'pointer' }} // Agregar cursor pointer para UX
        />
      </div>
      
      <div className="book-info">
        <h3 className="book-title">{book.title}</h3>
        <p className="book-author">{book.author}</p>
        
        <div className="book-rating">
          <Rating value={book.rating} />
        </div>

        <div className="book-meta">
          <span className="book-genre">{book.genre}</span>
          <span className="book-pages">{book.pages} págs.</span>
        </div>
        
        <div className="book-price">
          {book.discount ? (
            <>
              <span className="original-price">${book.originalPrice.toFixed(2)}</span>
              <span className="discounted-price">${book.price.toFixed(2)}</span>
              <span className="discount-badge">{book.discount}% OFF</span>
            </>
          ) : (
            <span>${book.price.toFixed(2)}</span>
          )}
        </div>
        
        <div className="book-actions">
          <button 
            onClick={handleAddToCart}
            className="add-to-cart-btn"
          >
            Agregar al carrito
          </button>
          <button 
            onClick={handleToggleFavorite}
            className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            aria-label={isFavorite ? 'Quitar de favoritos' : 'Agregar a favoritos'}
          >
            {isFavorite ? '❤️' : '♡'}
          </button>
        </div>
      </div>
    </div>
  );
};

BookCard.propTypes = {
  book: PropTypes.shape({
    id: PropTypes.string.isRequired,
    title: PropTypes.string.isRequired,
    author: PropTypes.string.isRequired,
    description: PropTypes.string.isRequired,
    price: PropTypes.number.isRequired,
    originalPrice: PropTypes.number,
    discount: PropTypes.number,
    image: PropTypes.string.isRequired,
    genre: PropTypes.string.isRequired,
    pages: PropTypes.number.isRequired,
    rating: PropTypes.number.isRequired,
  }).isRequired
};

export default BookCard;
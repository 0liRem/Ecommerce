import React, { useContext, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/Cartcontext';
import Rating from '../../Components/Rating/Rating';
import Recommendations from '../../Components/Recommendations/Recommendations';
import booksData from '../Home/BooksData';
import './BookDetails.css';

const BookDetails = () => {
  const { cart1, totalItems } = useContext(CartContext); 
  const { id } = useParams();
  const navigate = useNavigate();
  const { addToCart, addToHistory, viewHistory, favorites, toggleFavorite} = useContext(CartContext);
  
  const book = booksData.find(b => b.id === id);
  //Para mostrar los libros vistos recientemente
  useEffect(() => {
    if (book) {
      addToHistory(book);
    }
  }, [book, addToHistory]);

  if (!book) {
    return <div>Libro no encontrado</div>;
  }
  
  const isFavorite = favorites.some(fav => fav.id === book.id);
  
  const similarBooks = booksData
    .filter(b => b.id !== book.id && (b.genre === book.genre || b.author === book.author))
    .slice(0, 3);

  

  const handleGoToCart = () => {
    navigate('/cart');
  };
  return (
    <div className="book-details-page">
      <button onClick={() => navigate(-1)} className="back-button">
        Volver
      </button>

      <button onClick={handleGoToCart} className="cart-btn">
       Ver Carrito ({totalItems})
      </button>
      
      <div className="book-details-container">
        <div className="book-details-image">
          <img src={book.image} alt={book.title} />
        </div>
        
        <div className="book-details-info">
          <h1>{book.title}</h1>
          <p className="author">Por {book.author}</p>
          <Rating value={book.rating} />
          <p className="genre">{book.genre}</p>
          <p className="pages">{book.pages} páginas</p>
          
          <div className="price-section">
            {book.discount ? (
              <>
                <span className="original-price">${book.originalPrice}</span>
                <span className="discounted-price">${book.price}</span>
                <span className="discount-badge">-{book.discount}%</span>
              </>
            ) : (
              <span className="price">${book.price}</span>
            )}
          </div>
          
          <div className="actions">
            <button 
              onClick={() => addToCart(book)} 
              className="add-to-cart"
            >
              Agregar al carrito
            </button>
            <button 
              onClick={() => toggleFavorite(book)} 
              className={`favorite-btn ${isFavorite ? 'active' : ''}`}
            >
              {isFavorite ? '❤️' : '♡'}
            </button>
          </div>
          
          <div className="description">
            <h3>Descripción</h3>
            <p>{book.description}</p>
          </div>
        </div>
      </div>
      
      <Recommendations books={similarBooks} title="Libros similares" />
      
      {viewHistory.length > 0 && (
        <Recommendations 
          books={viewHistory.filter(b => b.id !== id)} 
          title="Recientemente vistos" 
        />
      )}
    </div>
  );
};

export default BookDetails;
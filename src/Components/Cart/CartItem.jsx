import React from 'react';
import { CartContext } from '../../Context/Cartcontext';
import './CartItem.css';

const CartItem = ({ item }) => {
  const { updateQuantity, removeFromCart } = React.useContext(CartContext);

  const handleIncrement = () => {
    if (item.quantity < 9) {
      updateQuantity(item.id, item.quantity + 1);
    }
  };

  const handleDecrement = () => {
    if (item.quantity > 1) {
      updateQuantity(item.id, item.quantity - 1);
    } else {
      removeFromCart(item.id);
    }
  };

  return (
    <div className="cart-item">
      <div className="item-image">
        <img src={item.image} alt={item.title} />
      </div>
      
      <div className="item-details">
        <h3 className="item-title">{item.title}</h3>
        <p className="item-author">{item.author}</p>
        <div className="item-price">${item.price.toFixed(2)}</div>
      </div>
      
      <div className="item-quantity">
        <button 
          onClick={handleDecrement}
          className="quantity-btn"
          aria-label="Reducir cantidad"
        >
          −
        </button>
        
        <span className="quantity-value">{item.quantity}</span>
        
        <button 
          onClick={handleIncrement}
          className="quantity-btn"
          aria-label="Aumentar cantidad"
          disabled={item.quantity >= 9}
        >
          +
        </button>
      </div>
      
      <div className="item-subtotal">
        ${(item.price * item.quantity).toFixed(2)}
      </div>
      
      <button 
        onClick={() => removeFromCart(item.id)}
        className="remove-btn"
        aria-label="Eliminar producto"
      >
        ×
      </button>
    </div>
  );
};

export default CartItem;
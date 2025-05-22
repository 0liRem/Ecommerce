import React from 'react';
import { CartContext } from '../../Context/Cartcontext';
import './CartSummary.css';

const CartSummary = () => {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const shippingCost = 5.99; //ELIMINAR CUANDO HAYA BASE DE DATOS
  const subtotal = total;
  const orderTotal = subtotal + shippingCost;

  const isError = total > 999.99;
  const isCartEmpty = cart.length === 0;

  return (
    <div className="cart-summary">
      <h3>Resumen del Pedido</h3>
      
      <div className="summary-row">
        <span>Subtotal ({cart.length} {cart.length === 1 ? 'artículo' : 'artículos'}):</span>
        <span>${subtotal.toFixed(2)}</span>
      </div>
      
      <div className="summary-row">
        <span>Envío:</span>
        <span>${shippingCost.toFixed(2)}</span>
      </div>
      
      <div className="summary-total">
        <span>Total:</span>
        <span className={isError ? 'error-text' : ''}>
          ${orderTotal.toFixed(2)}
        </span>
      </div>

      {isError && (
        <div className="error-message">
          El total no puede exceder $999.99
        </div>
      )}

      <div className="summary-actions">
        <button
          onClick={clearCart}
          className="clear-cart-btn"
          disabled={isCartEmpty}
        >
          Vaciar Carrito
        </button>
        
        <button
          className="checkout-btn"
          disabled={isCartEmpty || isError}
        >
          Proceder al Pago
        </button>
      </div>
    </div>
  );
};

export default CartSummary;
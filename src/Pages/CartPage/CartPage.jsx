import React from 'react';
import { useNavigate } from 'react-router-dom';
import { CartContext } from '../../Context/Cartcontext';
import CartItem from '../../Components/Cart/CartItem';
import CartSummary from '../../Components/Cart/CartSummary';
import './CartPage.css';

const CartPage = () => {
  const { cart, total, clearCart } = React.useContext(CartContext);
  const navigate = useNavigate();
  const isError = total > 999.99; //Validación para que no se pase de 999 por así decirlo
  const isCartEmpty = cart.length === 0;

  const handleCheckout = () => {
    if (isError) return;
    navigate('/checkout');
  };

  return (
    <div className="cart-page">
      {/* Botón Volver */}
      <button onClick={() => navigate(-1)} className="back-button">
        ← Volver
      </button>

      <h1>Tu Carrito</h1>
      
      {isCartEmpty ? (
        <div className="empty-cart">
          <p>Tu carrito está vacío</p>
        </div>
      ) : (
        <>
          <div className="cart-items">
            {cart.map(item => (
              <CartItem key={item.id} item={item} />
            ))}
          </div>
          
          <CartSummary 
            total={total} 
            error={isError} 
            onCheckout={handleCheckout} 
            onClearCart={clearCart}
          />
          
        </>
      )}
    </div>
  );
};

export default CartPage;
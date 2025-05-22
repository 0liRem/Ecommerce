import React, { createContext, useState, useEffect, useMemo } from 'react';

export const CartContext = createContext();

export const CartProvider = ({ children }) => {
  // Local Storage para persistencia
  const loadState = (key, defaultValue) => {
    try {
      const savedState = localStorage.getItem(key);
      return savedState ? JSON.parse(savedState) : defaultValue;
    } catch (error) {
      console.error(`Error loading ${key} from localStorage:`, error);
      return defaultValue;
    }
  };

  // States 🤑
  const [cart, setCart] = useState(() => loadState('cart', []));
  const [favorites, setFavorites] = useState(() => loadState('favorites', []));
  const [viewHistory, setViewHistory] = useState(() => loadState('viewHistory', []));

  
  // Vuelve Json los datos para así guardarlos localmente (truquito que use para mi novela visual WEB (nefasto))
  useEffect(() => {
    localStorage.setItem('cart', JSON.stringify(cart));
  }, [cart]);

  useEffect(() => {
    localStorage.setItem('favorites', JSON.stringify(favorites));
  }, [favorites]);

  useEffect(() => {
    localStorage.setItem('viewHistory', JSON.stringify(viewHistory));
  }, [viewHistory]);

  // Carrito
  const addToCart = (book, quantity = 1) => {
    setCart(prevCart => {
      const existingItem = prevCart.find(item => item.id === book.id);
      if (existingItem) {
        const newQuantity = Math.min(existingItem.quantity + quantity, 9);
        return prevCart.map(item =>
          item.id === book.id ? { ...item, quantity: newQuantity } : item
        );
      }
      return [...prevCart, { ...book, quantity }];
    });
  };

  const removeFromCart = (bookId) => {
    setCart(prevCart => prevCart.filter(item => item.id !== bookId));
  };

  const updateQuantity = (bookId, newQuantity) => {
    if (newQuantity < 1 || newQuantity > 9) return;
    setCart(prevCart =>
      prevCart.map(item =>
        item.id === bookId ? { ...item, quantity: newQuantity } : item
      )
    );
  };

  const clearCart = () => {
    setCart([]);
  };

  // Toggle para los favoritos
  const toggleFavorite = (book) => {
    setFavorites(prev =>
      prev.some(fav => fav.id === book.id)
        ? prev.filter(fav => fav.id !== book.id)
        : [...prev, book]
    );
  };

  const addToHistory = React.useCallback((book) => {
  setViewHistory(prev => {
    const filtered = prev.filter(b => b.id !== book.id);
    return [book, ...filtered].slice(0, 5);
  });
}, []);

  // Valores calculados
  const totalItems = useMemo(() => 
    cart.reduce((total, item) => total + item.quantity, 0), 
    [cart]
  );

  const cartTotal = useMemo(() => 
    cart.reduce((sum, item) => sum + (item.price * item.quantity), 0), 
    [cart]
  );

  return (
    <CartContext.Provider
      value={{
        cart,
        favorites,
        viewHistory,
        total: cartTotal,
        totalItems,
        addToCart,
        removeFromCart,
        updateQuantity,
        clearCart,
        toggleFavorite,
        addToHistory
      }}
    >
      {children}
    </CartContext.Provider>
  );
};
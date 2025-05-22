import React, { useState, useRef, useEffect } from 'react';
import './SearchBar.css';

const SearchBar = ({ onSearch, onToggleFavorites, showFavorites }) => {
  const [query, setQuery] = useState('');
  const searchInputRef = useRef(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      onSearch(query);
    }, 300);
    return () => clearTimeout(timer);
  }, [query, onSearch]);

  const handleClear = () => {
    setQuery('');
    searchInputRef.current.focus();
  };

  return (
    <div className="search-bar">
      <div className="search-input-container">
        <input
          ref={searchInputRef}
          type="text"
          value={query}
          onChange={(e) => setQuery(e.target.value)}
          placeholder="Buscar libros..."
          className="search-input"
        />
        {query && (
          <button onClick={handleClear} className="clear-btn">
            ×
          </button>
        )}
      </div>
      <button
        onClick={onToggleFavorites}
        className={`favorites-filter-btn ${showFavorites ? 'active' : ''}`}
      >
        {showFavorites ? 'Mostrar todos' : 'Solo favoritos'}
      </button>
    </div>
  );
};

export default SearchBar;
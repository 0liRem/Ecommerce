import React from 'react';
import PropTypes from 'prop-types';
import './Rating.css';

const Rating = ({ value, max = 5, editable = false, onChange }) => {
  const stars = Array.from({ length: max }, (_, index) => index + 1);

  const handleClick = (newValue) => {
    if (editable && onChange) {
      onChange(newValue);
    }
  };

  return (
    <div className="rating-container">
      {stars.map((star) => (
        <span
          key={star}
          className={`rating-star ${star <= value ? 'filled' : ''} ${editable ? 'editable' : ''}`}
          onClick={() => handleClick(star)}
          onKeyDown={(e) => {
            if (e.key === 'Enter' || e.key === ' ') {
              handleClick(star);
            }
          }}
          role={editable ? 'button' : 'img'}
          aria-label={editable ? `Calificar con ${star} ${star === 1 ? 'estrella' : 'estrellas'}` : `Calificación: ${value} de ${max} estrellas`}
          tabIndex={editable ? 0 : -1}
        >
          {star <= value ? '★' : '☆'}
        </span>
      ))}
      {!editable && <span className="rating-value">({value.toFixed(1)})</span>}
    </div>
  );
};

Rating.propTypes = {
  value: PropTypes.number.isRequired,
  max: PropTypes.number,
  editable: PropTypes.bool,
  onChange: PropTypes.func
};

export default Rating;
import React, { useState } from 'react';
import PropTypes from 'prop-types';

function RatingWidget({ productId, onRatingSubmit }) {
  const [selectedRating, setSelectedRating] = useState(0);

  const handleClick = (rating) => {
    setSelectedRating(rating);
    onRatingSubmit(productId, rating);
  };

  return (
    <div className="rating-widget">
      <p>Rate this product:</p>
      {[1, 2, 3, 4, 5].map((star) => (
        <span
          key={star}
          onClick={() => handleClick(star)}
          className={selectedRating >= star ? 'star filled' : 'star'}
        >
          ★
        </span>
      ))}
    </div>
  );
}

RatingWidget.propTypes = {
  productId: PropTypes.number.isRequired,
  onRatingSubmit: PropTypes.func.isRequired,
};

export default RatingWidget;

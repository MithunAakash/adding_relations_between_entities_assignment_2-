import React from 'react';
import PropTypes from 'prop-types';
import RatingWidget from './RatingWidget';

function ProductCard({ product, onRatingSubmit }) {
  return (
    <div className="product-card">
      <img src={product.image} alt={product.name} className="product-img" />
      <h2>{product.name}</h2>
      <p>{product.description}</p>
      <p><strong>Average Rating:</strong> {product.avgRating.toFixed(1)} ⭐</p>
      <p><strong>Total Ratings:</strong> {product.totalRatings}</p>
      <RatingWidget productId={product.id} onRatingSubmit={onRatingSubmit} />
    </div>
  );
}

ProductCard.propTypes = {
  product: PropTypes.shape({
    id: PropTypes.number,
    name: PropTypes.string,
    description: PropTypes.string,
    image: PropTypes.string,
    avgRating: PropTypes.number,
    totalRatings: PropTypes.number
  }).isRequired,
  onRatingSubmit: PropTypes.func.isRequired
};

export default ProductCard;

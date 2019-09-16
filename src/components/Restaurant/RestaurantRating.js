import React from 'react';

function getRatingClass(rating) {
  if (!rating) return '';
  return rating < 4.0 ? 'orange' : 'green';
}

const RestaurantRating = ({ rating }) => {
  return (
    <div className={'restaurant-rating ' + getRatingClass(rating)}>
      <i className="icon-rating-star fa fa-star" aria-hidden="true"></i>
      <span>{rating ? rating : '--'}</span>
    </div>
  );
};

export default RestaurantRating;

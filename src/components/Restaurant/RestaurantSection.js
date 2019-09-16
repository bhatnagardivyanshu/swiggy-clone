import React from 'react';

import RestaurantList from './RestaurantList';

const RestaurantSection = ({ restaurants, categorize }) => (
  <div className="restaurant-section">
    {restaurants.map((item, index) => (
      <RestaurantList categorize={categorize} data={item} key={index} />
    ))}
  </div>
);

export default RestaurantSection;

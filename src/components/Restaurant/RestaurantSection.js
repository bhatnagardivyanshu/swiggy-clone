import React from 'react';

import RestaurantList from './RestaurantList';
import { getRestaurants } from '../../services/CommonService';

const RestaurantSection = ({ categorize }) => {
  let restaurants = getRestaurants(categorize);
  return (
    <div className="restaurant-section">
      {restaurants.map((item, index) => (
        <RestaurantList categorize={categorize} data={item} key={index} />
      ))}
    </div>
  );
};

export default RestaurantSection;

import React from 'react';

import RestaurantCardMeta from './RestaurantCardMeta';
import { getRandomRestaurantImage } from '../../services/CommonService';

const CardDetails = ({ restaurant }) => {
  let randomImageUrl = getRandomRestaurantImage();

  return (
    <div>
      <div style={{ backgroundImage: `url(${randomImageUrl}` }} className="restaurant-cover-pic"></div>
      <div className="restaurant-title-name">{restaurant.name}</div>
      <div className="restaurant-title-categories">
        <div>{restaurant.food_types.join(', ')}</div>
      </div>
      <RestaurantCardMeta restaurant={restaurant} />
    </div>
  );
};

export default CardDetails;

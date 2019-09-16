import React from 'react';

import RestaurantRating from './RestaurantRating';

const RestaurantCardMeta = ({ restaurant }) => {
    return (
        <div className="restaurant-meta">
            <RestaurantRating rating={restaurant.ratings} />
            <div>•</div>
            <div>{restaurant.delivery_time}</div>
            <div>•</div>
            <div>{restaurant.price_for_two} for two</div>
        </div>
    )
}

export default RestaurantCardMeta;
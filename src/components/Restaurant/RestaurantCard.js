import React from 'react';
import Card from 'antd/es/card';
import Col from 'antd/es/col';

import CardDetails from './CardDetails';

// const { Meta } = Card;

const RestaurantCard = ({ restaurant }) => {
  return (
    <Col>
      <Card bordered={false} className="restaurant-card">
        <CardDetails restaurant={restaurant} />
      </Card>
    </Col>
  );
};

export default RestaurantCard;

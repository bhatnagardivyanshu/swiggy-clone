import React from 'react';
import Col from 'antd/es/col';
import Row from 'antd/es/row';
import Card from 'antd/es/card';

import CardDetails from './CardDetails';
import RestaurantQuickView from './RestaurantQuickView';

const RestaurantListItem = ({ restaurant }) => {
  return (
    <Row className="restaurant-list-item">
      <Col className="restaurant-card-container">
        <Card bordered={false} className="restaurant-card">
          <CardDetails restaurant={restaurant} />
          <RestaurantQuickView />
        </Card>
      </Col>
    </Row>
  );
};

export default RestaurantListItem;

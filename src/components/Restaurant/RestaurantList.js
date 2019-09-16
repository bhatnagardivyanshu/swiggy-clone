import React from 'react';
import Row from 'antd/es/row';
import Col from 'antd/es/col';
import chunk from 'lodash/chunk';

import ShowMore from './ShowMore';
import { convertTextCase } from '../../utils/helpers';
import RestaurantListItem from './RestaurantListItem';

class RestaurantList extends React.Component {
  appendCardsCount = 6;
  categorySelector = convertTextCase(this.props.data.category);

  constructor(props) {
    super(props);
    this.state = {
      page: 1,
      restaurantsList: [],
    };
  }

  componentDidMount() {
    this.getRestaurants();
  }

  componentDidUpdate(prevProps) {
    if (prevProps.categorize !== this.props.categorize) {
      this.getRestaurants(1, this.props.categorize);
    }
  }

  getRestaurants(page = 1, categorize = true) {
    let restaurants = [];
    let { restaurantList } = this.props.data;

    // if show all
    if (!categorize) {
      restaurants = restaurantList;
    } else {
      let restaurantsCount = page * this.appendCardsCount;
      if (restaurantsCount < restaurantList.length) {
        // show 1 less restaurant and add show more btn
        restaurantsCount--;
      }
      restaurants = restaurantList.slice(0, restaurantsCount);
    }

    this.setState({
      page,
      restaurantsList: restaurants,
    });
  }

  showMoreRestaurants = () => {
    this.getRestaurants(this.state.page + 1);
  };

  getRestaurantsListItems = () => {
    return this.state.restaurantsList.map((item, index) => (
      <Col span={8} key={index} className="restaurant-list-item-container">
        <RestaurantListItem restaurant={item} />
      </Col>
    ));
  };

  getRemainingRestaurantsCount = () => this.props.data.restaurantList.length - this.state.restaurantsList.length;

  // make rows of three items
  getRestaurantsListRows = () => {
    let restaurantsListItems = this.getRestaurantsListItems();
    let remainingRestaurantsCount = this.getRemainingRestaurantsCount();
    let shouldAddShowMoreBtn = remainingRestaurantsCount > 0;

    // make rows of three restaurant items
    return chunk(restaurantsListItems, 3).map((item, index) => {
      if (item.length < 3 && this.props.categorize && shouldAddShowMoreBtn) {
        item.push(
          <Col span={8} key="show_more" className="restaurant-list-item-container show-more">
            <ShowMore count={remainingRestaurantsCount} onClick={this.showMoreRestaurants} />
          </Col>
        );
      }
      return (
        <Row className="restaurant-list-row" gutter={48} key={index}>
          {item}
        </Row>
      );
    });
  };

  render() {
    let listItems = this.getRestaurantsListRows();

    return (
      <div id={this.categorySelector} className="restaurant-list">
        <div className="restaurant-list-title">{this.props.data.category}</div>
        {listItems}
      </div>
    );
  }
}

export default RestaurantList;

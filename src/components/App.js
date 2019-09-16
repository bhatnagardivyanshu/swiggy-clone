import React from 'react';
import Row from 'antd/es/row'; // importing this way reduces bundle size
import Col from 'antd/es/col';

import 'antd/dist/antd.css';
import SidebarSection from './Sidebar/SidebarSection';
import RestaurantSection from './Restaurant/RestaurantSection';
import { getRestaurants } from '../services/CommonService';

class App extends React.Component {
  state = {
    categorize: true,
    restaurants: [],
  };

  componentDidMount() {
    // passing the restaurants list to children
    this.getRestaurantsList();
  }

  getRestaurantsList = () => {
    let restaurants = getRestaurants();
    this.setState({
      restaurants,
    });
  };

  handleCategorySelection = category => {
    this.setState({ categorize: category !== 'see_all' });
  };

  render() {
    return (
      <div className="main">
        <Row gutter={48}>
          <Col span={6} className="sidebar-section-container">
            <SidebarSection onCategoryClick={this.handleCategorySelection} restaurants={this.state.restaurants} />
          </Col>
          <Col span={18} className="restaurant-section-container">
            <RestaurantSection categorize={this.state.categorize} restaurants={this.state.restaurants} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

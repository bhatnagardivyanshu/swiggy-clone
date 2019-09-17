import React from 'react';
import Row from 'antd/es/row'; // importing this way reduces bundle size
import Col from 'antd/es/col';

import 'antd/dist/antd.css';
import SidebarSection from './Sidebar/SidebarSection';
import RestaurantSection from './Restaurant/RestaurantSection';

class App extends React.Component {
  state = {
    categorize: true,
    restaurants: [],
  };

  handleCategorySelection = category => {
    this.setState({ categorize: category !== 'see_all' });
  };

  render() {
    return (
      <div className="main">
        <Row gutter={48}>
          <Col span={6} className="sidebar-section-container">
            <SidebarSection categorize={this.state.categorize} onCategoryClick={this.handleCategorySelection} />
          </Col>
          <Col span={18} className="restaurant-section-container">
            <RestaurantSection categorize={this.state.categorize} />
          </Col>
        </Row>
      </div>
    );
  }
}

export default App;

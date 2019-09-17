import React from 'react';
import Card from 'antd/es/card';
import { Link } from 'react-scroll';

import { convertTextCase } from '../../utils/helpers';

const SidebarCategoryItem = ({ category, onCategoryClick, categorize: shouldSpy }) => {
  let categorySelector = convertTextCase(category.title, 'snake');

  return (
    <Link
      to={categorySelector}
      spy={shouldSpy}
      activeClass={shouldSpy && 'selected'}
      smooth={true}
      duration={500}
      offset={-70}
    >
      <Card onClick={() => onCategoryClick(categorySelector)} bordered={false} className="sidebar-category-item">
        <div className="title">{category.title}</div>
        <div className="subtitle">{category.subtitle}</div>
      </Card>
    </Link>
  );
};

export default SidebarCategoryItem;

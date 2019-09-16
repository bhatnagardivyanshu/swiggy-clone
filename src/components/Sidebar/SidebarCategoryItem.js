import React from 'react';
import Card from 'antd/es/card';
import { Link } from 'react-scroll';

import { convertTextCase } from '../../utils/helpers';

const SidebarCategoryItem = ({ category, onCategoryClick, isSelected }) => {
  let categorySelector = convertTextCase(category.title, 'snake');

  return (
    <Link to={categorySelector} spy={true} activeClass="selected" smooth={true} duration={0} offset={-70}>
      <Card onClick={() => onCategoryClick(categorySelector)} bordered={false} className="sidebar-category-item">
        <div className="title">{category.title}</div>
        <div className="subtitle">{category.subtitle}</div>
      </Card>
    </Link>
  );
};

export default SidebarCategoryItem;

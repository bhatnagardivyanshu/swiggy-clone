import React from 'react';

import SidebarCategoryItem from './SidebarCategoryItem';
import { getSidebarCategoryItems } from '../../services/CommonService';

const SidebarSection = ({ restaurants, onCategoryClick }) => {
  const items = getSidebarCategoryItems(restaurants);

  const sidebarList = items.map((category, index) => (
    <SidebarCategoryItem
      onCategoryClick={onCategoryClick}
      key={'category_' + index}
      category={category}
      isSelected={index === 0}
    />
  ));

  return <div className="sidebar">{sidebarList}</div>;
};

export default SidebarSection;

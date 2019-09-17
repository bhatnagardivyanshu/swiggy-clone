import React from 'react';

import SidebarCategoryItem from './SidebarCategoryItem';
import { getSidebarCategoryItems } from '../../services/CommonService';

const SidebarSection = ({ onCategoryClick, categorize }) => {
  const items = getSidebarCategoryItems();

  const sidebarList = items.map((category, index) => (
    <SidebarCategoryItem
      categorize={categorize}
      onCategoryClick={onCategoryClick}
      key={'category_' + index}
      category={category}
      isSelected={index === 0}
    />
  ));

  return <div className="sidebar">{sidebarList}</div>;
};

export default SidebarSection;

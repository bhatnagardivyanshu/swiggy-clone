import images from '../data/restaurant-images';
import data from '../data/restaurant-details.json';
import { getRandomElementFromArr } from '../utils/helpers';

export const getSidebarCategoryItems = () => {
  const categories = [];
  let totalRestaurants = 0;
  let exclusiveRestaurants = 0;
  let data = getRestaurants();

  // using for loop since it is faster than map/forEach..
  for (let i = 0; i < data.length; i++) {
    let item = data[i];
    let restaurantList = item.restaurantList;

    // prepare category
    categories.push({
      title: item.category,
      subtitle: `${restaurantList.length} options`,
    });

    // calculate total restaurants
    totalRestaurants += restaurantList.length;

    // calculate total exculive restaurants
    exclusiveRestaurants += getExclusiveRestaurantsCount(restaurantList);
  }

  // add total and exclusive restaurants to categories
  let totalRestaurantsCategory = {
    title: 'Only On Swiggy',
    subtitle: `${totalRestaurants} options`,
  };

  let exclusiveRestaurantsCategory = {
    title: 'SEE ALL',
    subtitle: `${exclusiveRestaurants} restaurants`,
  };

  categories.push(totalRestaurantsCategory, exclusiveRestaurantsCategory);

  return categories;
};

function getExclusiveRestaurantsCount(restaurantList) {
  let counter = 0;
  for (let i = 0; i < restaurantList.length; i++) {
    let restaurant = restaurantList[i];
    if (restaurant.isExclusive) {
      counter += 1;
    }
  }
  return counter;
}

export const getRestaurants = (categorize = true) => {
  if (categorize) {
    return data;
  }

  let allRestaurants = data.reduce((allRestaurants, item) => {
    allRestaurants.push(...item.restaurantList);
    return allRestaurants;
  }, []);

  return [
    {
      category: 'ALL RESTAURANTS',
      restaurantList: allRestaurants,
    },
  ];
};

export const getRandomRestaurantImage = () => {
  let randomInd = getRandomElementFromArr(images.length);
  return images[randomInd];
};

import { Record } from 'immutable';
import * as act from './actions';

const initialState = new Record({
  banners: [],
  categories: [],
  restaurants: [],
  items: [],
  fetching: false
})();

function chunk(arr, size) {
  var myArray = [];
  for(var i = 0; i < arr.length; i += size) {
    myArray.push(arr.slice(i, i+size));
  }
  return myArray;
}

export default (state = initialState, action) => {
  switch (action.type) {
    case act.MENU_LOAD:
      return state.set('fetching', true);

    case act.MENU_LOAD_SUCCESS: {

      const data = [];
      const dishes = action.data.dishes;

      action.data.categories.map((item) => {
        data.push({
          key: item.id,
          category: item,
          data: []
        })
      })

      dishes.map((item) => {
        const cat = data.find(c => c.category.id === item.category_id)
        if (cat) {
          cat.data.push(item);
        }
      })

      data.map((item) => {
        console.log(item)
        item.data = chunk(item.data, 2)
      })

      data.sort((a,b) => {
        if (a.category.position > b.category.position) {return 1;}
        if (a.category.position < b.category.position) {return -1;}
        return 0;
      });

      const categories = action.data.categories;
      categories.sort((a,b) => {
        if (a.position > b.position) {return 1;}
        if (a.position < b.position) {return -1;}
        return 0;
      });

      return state.set('fetching', false)
        .set('banners', action.data.banners)
        .set('categories', categories)
        .set('chain', action.data.chain)
        .set('client', action.data.client)
        .set('restaurants', action.data.restaurants)
        .set('items', data)
    }


    case act.MENU_LOAD_FAILED:
      return state.set('fetching', false);

    default:
      return state
  }
}

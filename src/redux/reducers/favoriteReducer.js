import {ADD_FAVORITE, REMOVE_FAVORITE} from '../constants/action-types';

const INITIAL_STATE = {
  favorites: [],
};

export const favoriteReducer = (state = INITIAL_STATE, action) => {
  console.log ('action :', action);
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.concat (action.payload),
      };

    case REMOVE_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.filter (
          favorite => favorite.etag !== action.payload.etag
        ),
      };

    default:
      return state;
  }
};

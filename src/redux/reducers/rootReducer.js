import {ADD_FAVORITE, REMOVE_FAVORITE} from '../constants/action-types';

const initialState = {
  favorites: [],
};

export const favoriteReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_FAVORITE:
      return {
        ...state,
        favorites: state.favorites.concat (action.payload),
      };

    case REMOVE_FAVORITE:
      const removedFavorites = state.favorites.filter (
        book => book.id !== action.payload.id
      );
      return {...state, removedFavorites};

    default:
      return state;
  }
};

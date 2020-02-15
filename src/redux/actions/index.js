export const addFavorite = book => ({
  type: 'ADD_FAVORITE',
  payload: book,
});

export const removeFavorite = book => ({
  type: 'REMOVE_FAVORITE',
  payload: book,
});

export const setUser = user => ({
  type: 'SET_CURRENT_USER',
  payload: user,
});

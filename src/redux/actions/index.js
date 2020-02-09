export const addFavorite = book => ({
  type: 'ADD_FAVORITE',
  payload: book,
});

export const removeFavorite = book => ({
  type: 'REMOVE_FAVORITE',
  payload: book,
});

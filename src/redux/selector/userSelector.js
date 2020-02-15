import {createSelector} from 'reselect';

//returns user state from the whole state
const selectUser = state => state.user;

// first argument is the array we extracted as selectUser
export const selectCurrentUser = createSelector (
  [selectUser],
  user => user.currentUser
);

import * as FavoriteActions from './r-favorite.actions';
import { RecipeFavorites } from '../recipe/models/r-favorites';
export type Action = FavoriteActions.All;

/// Initial app state
const initialState: RecipeFavorites[] = [];

/// Reducer function
export function favoritesReducer(
  state: RecipeFavorites[] = initialState,
  action: Action
) {
  console.log('favorites reducer:', action.type, state);
  switch (action.type) {
    case FavoriteActions.ADD_FAVORITE:
      let uniqueState = [...state];
      for (let i = 0; i < uniqueState.length; i++) {
        if (uniqueState[i].id === action.payload.id) {
          return uniqueState;
        }
      }
      return [action.payload, ...state];

    case FavoriteActions.REMOVE_FAVORITE:
      let newState = [...state];
      return newState.filter((favorites) => favorites.id !== action.payload);

    default:
      return state;
  }
}

import { Action } from '@ngrx/store';
import { RecipeFavorites } from '../recipe/models/r-favorites';

export const ADD_FAVORITE = '[Favorite] Add Favorite';
export const REMOVE_FAVORITE = '[Favorite] Remove Favorite';

export class AddFavorite implements Action {
  readonly type = ADD_FAVORITE;

  constructor(public payload: RecipeFavorites) {}
}
export class RemoveFavorite implements Action {
  readonly type = REMOVE_FAVORITE;

  constructor(public payload: number) {}
}

export type All = AddFavorite | RemoveFavorite;

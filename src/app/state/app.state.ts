import { RecipeFavorites } from "../recipe/models/r-favorites";
import { favoritesReducer } from "./r-favorite.reducer";
import { ActionReducerMap } from "@ngrx/store";

export const rootReducer = {};

export interface AppState {
    favorites: RecipeFavorites[];
}

export const reducers: ActionReducerMap<AppState, any> = {
    favorites: favoritesReducer
}
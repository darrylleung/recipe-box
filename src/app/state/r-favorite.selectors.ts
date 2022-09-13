import { createSelector } from '@ngrx/store';
import { RecipeFavorites } from '../recipe/models/r-favorites';
import { AppState } from './app.state';
import { select } from '@ngrx/store';
import { pipe } from 'rxjs';

export const selectFavorites = (state: AppState) => state.favorites;

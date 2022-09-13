import { Component, OnInit, EventEmitter, Output } from '@angular/core';
import { StoreService } from '../services/store.service';
import { RecipeInfo } from '../models/r-info';
import { Observable } from 'rxjs';
import { RecipeFavorites } from '../models/r-favorites';
import { Store } from '@ngrx/store';
import * as FavoriteActions from '../../state/r-favorite.actions';


@Component({
  selector: 'app-r-info',
  templateUrl: './r-info.component.html',
  styleUrls: ['./r-info.component.css'],
})
export class RInfoComponent implements OnInit {
  recipe$: Observable<RecipeInfo> = this.store.recipeInfoObs;

  addFavorite(newFavorite: RecipeFavorites) {
    this.favoriteStore.dispatch(new FavoriteActions.AddFavorite(newFavorite));
  }

  constructor(private store: StoreService, private favoriteStore: Store) {}

  ngOnInit(): void {}
}

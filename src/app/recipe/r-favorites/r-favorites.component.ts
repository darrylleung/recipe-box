import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { select, Store } from '@ngrx/store';
import { RecipeFavorites } from '../models/r-favorites';
import * as FavoriteActions from '../../state/r-favorite.actions';
import { Observable } from 'rxjs';
import { AppState } from 'src/app/state/app.state';
import { RecipeList } from '../models/r-list';
import { RecipeService } from '../services/recipe.service';
import { StoreService } from '../services/store.service';
import { Router } from '@angular/router';


@Component({
  selector: 'app-r-favorites',
  templateUrl: './r-favorites.component.html',
  styleUrls: ['./r-favorites.component.css'],
})
export class RFavoritesComponent implements OnInit {
  favorites$: Observable<RecipeFavorites[]>;

  constructor(
    private favoriteStore: Store<AppState>,
    private recipeService: RecipeService,
    private store: StoreService,
    private router: Router
  ) {
    this.favorites$ = this.favoriteStore.select('favorites');
  }

  isHoverActive: boolean = false;

  removeFavorite(recipeId: number) {
    console.log('id of favorite to remove: ', recipeId);
    this.favoriteStore.dispatch(new FavoriteActions.RemoveFavorite(recipeId));
  }

  onRecipeSelect(selectedRecipe: number): void {
    console.log('selected recipe: ', selectedRecipe);
    this.getRecipeInfo(selectedRecipe);
    this.router.navigateByUrl('/recipe');
  }

  private getRecipeInfo(recipeId: number): void {
    this.recipeService.getRecipeInfo(recipeId).subscribe((recipeInfo) => {
      this.store.updateRecipeInfo(recipeInfo);
    });
  }

  ngOnInit(): void {
    this.favoriteStore.select('favorites').subscribe((favorites) => favorites);
  }
}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { RecipeComponent } from './recipe.component';
import { RInfoComponent } from './r-info/r-info.component';
import { RecipeService } from './services/recipe.service';
import { StoreService } from './services/store.service';
import { RFavoritesComponent } from './r-favorites/r-favorites.component';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../state/app.state';
import { MatButtonModule } from '@angular/material/button';
import { MatGridListModule } from '@angular/material/grid-list';

@NgModule({
  declarations: [RecipeComponent, RInfoComponent, RFavoritesComponent],
  imports: [
    CommonModule,
    MatButtonModule,
    MatGridListModule,
    StoreModule.forRoot(reducers),
  ],
  exports: [RecipeComponent, RInfoComponent, RFavoritesComponent],
  providers: [RecipeService, StoreService],
})
export class RecipeModule {}

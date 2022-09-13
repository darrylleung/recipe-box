import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { RFavoritesComponent } from '../recipe/r-favorites/r-favorites.component';
import { RecipeComponent } from '../recipe/recipe.component';

const routes: Routes = [
  { path: 'favorites', component: RFavoritesComponent },
  { path: 'recipe', component: RecipeComponent },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class NavRoutingModule {}

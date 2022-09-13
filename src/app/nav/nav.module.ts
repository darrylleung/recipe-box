import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { NavComponent } from './nav.component';
import { RSearchComponent } from './r-search/r-search.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { MatButtonModule } from '@angular/material/button';
import { MatInputModule } from '@angular/material/input';
import { MatFormFieldModule } from '@angular/material/form-field';
import { MatAutocompleteModule } from '@angular/material/autocomplete';
import { RecipeService } from '../recipe/services/recipe.service';
import { StoreService } from '../recipe/services/store.service';
import { StoreModule } from '@ngrx/store';
import { reducers } from '../state/app.state';
import { RecipeComponent } from '../recipe/recipe.component';
import { NavRoutingModule } from './nav-routing.module';

@NgModule({
  declarations: [NavComponent, RSearchComponent],
  imports: [
    CommonModule,
    NavRoutingModule,
    FormsModule,
    ReactiveFormsModule,
    MatButtonModule,
    MatInputModule,
    MatFormFieldModule,
    MatAutocompleteModule,
    StoreModule.forRoot(reducers),
  ],
  exports: [NavComponent, RSearchComponent],
  providers: [RecipeService, StoreService],
})
export class NavModule {}

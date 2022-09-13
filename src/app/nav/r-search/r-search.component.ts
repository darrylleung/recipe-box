import { Component, OnInit } from '@angular/core';
import { RecipeList } from '../../recipe/models/r-list';
import { FormControl } from '@angular/forms';
import { Observable, of } from 'rxjs';
import {
  debounceTime,
  distinctUntilChanged,
  filter,
  tap,
  switchMap,
  finalize,
  map,
} from 'rxjs/operators';
import { MatAutocompleteSelectedEvent } from '@angular/material/autocomplete';
import { RecipeService } from '../../recipe/services/recipe.service';
import { StoreService } from '../../recipe/services/store.service';
import { HttpResponse } from '@angular/common/http';
import { Router } from '@angular/router';

@Component({
  selector: 'app-r-search',
  templateUrl: './r-search.component.html',
  styleUrls: ['./r-search.component.css'],
})
export class RSearchComponent implements OnInit {
  recipeList: FormControl = new FormControl();
  recipeList$: Observable<RecipeList[]> | undefined;

  constructor(
    private recipeService: RecipeService,
    private store: StoreService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.onRecipeListValueChange();
  }

  recipeDisplayValue(recipe: RecipeList): string {
    return recipe && recipe.title;
  }

  onRecipeSelect(selectedEvent: MatAutocompleteSelectedEvent): void {
    const selectedRecipe: RecipeList = selectedEvent.option.value;
    console.log('recipe selected!');
    this.getRecipeInfo(selectedRecipe.id);
    this.router.navigateByUrl('/recipe');
  }

  private getRecipeInfo(recipeId: number): void {
    this.recipeService.getRecipeInfo(recipeId).subscribe((recipeInfo) => {
      this.store.updateRecipeInfo(recipeInfo);
    });
  }

  private onRecipeListValueChange(): void {
    this.recipeList$ = this.recipeList.valueChanges.pipe(
      debounceTime(1000),
      distinctUntilChanged(),
      switchMap((val) => this.searchRecipes(val))
    );
  }

  private searchRecipes(query: string): Observable<RecipeList[]> {
    return this.recipeService.getRecipeList(query);
  }
}

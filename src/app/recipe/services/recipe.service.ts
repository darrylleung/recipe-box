import { Injectable } from '@angular/core';
import { of, Observable, catchError, map, tap } from 'rxjs';
import { environment } from 'src/environments/environment';
import { RecipeList } from '../models/r-list';
import { RecipeInfo } from '../models/r-info';
import { HttpClient } from '@angular/common/http';

@Injectable({ providedIn: 'any' })
export class RecipeService {
  // recipeInfo$!: Observable<RecipeInfo>;

  private readonly api: string = environment.apiUrl;

  constructor(private http: HttpClient) {}

  getRecipeList(query: string, records: number = 10): Observable<RecipeList[]> {
    return this.http
      .get<RecipeList[]>(
        `${this.api}recipes/autocomplete?query=${query}&number=${records}`
      )
      .pipe(catchError(() => of([])));
  }

  getRecipeInfo(recipeId: number): Observable<RecipeInfo> {
    return this.http
      .get<RecipeInfo>(`${this.api}recipes/${recipeId}/information`)
      .pipe(catchError(() => of({} as RecipeInfo)));
  }
}

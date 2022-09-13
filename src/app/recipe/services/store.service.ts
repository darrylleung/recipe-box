import { Injectable } from '@angular/core';
import { RecipeInfo } from '../models/r-info';
import { Subject, Observable } from 'rxjs';

@Injectable({ providedIn: 'any' })
export class StoreService {
  constructor() {}

  private recipeInfoSub: Subject<RecipeInfo> = new Subject<RecipeInfo>();

  recipeInfoObs: Observable<RecipeInfo> = this.recipeInfoSub.asObservable();

  updateRecipeInfo(recipeInfo: RecipeInfo) {
    this.recipeInfoSub.next(recipeInfo);
  }
}

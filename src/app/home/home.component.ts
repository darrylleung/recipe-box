import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { RecipeService } from '../recipe/services/recipe.service';
import { StoreService } from '../recipe/services/store.service';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css'],
})
export class HomeComponent implements OnInit {
  constructor(
    private router: Router,
    private recipeService: RecipeService,
    private store: StoreService
  ) {}

  isHoverActive: boolean = false

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

  mouseEnter(): void {
    this.isHoverActive = true;
  }

  mouseLeave(): void {
    this.isHoverActive = false;
  }

  ngOnInit(): void {}
}

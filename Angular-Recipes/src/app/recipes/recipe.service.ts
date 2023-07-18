import { EventEmitter } from '@angular/core';
import { Recipe } from './recipe.model';
import { Ingredient } from '../shared/ingredient.model';

export class RecipeService {
  public recipeSelected = new EventEmitter<Recipe>();
  private recipes: Recipe[] = [
    new Recipe(
      'Spaghetii',
      'Italian food',
      'https://static01.nyt.com/images/2022/12/23/multimedia/afg-spaghetti-alla-assassina-1-19ef/afg-spaghetti-alla-assassina-1-19ef-mediumSquareAt3X.jpg',
      [new Ingredient('tomatos', 4), new Ingredient('pasta', 250)]
    ),
    new Recipe(
      'Pizza',
      'Without ananas',
      'https://hips.hearstapps.com/hmg-prod/images/classic-cheese-pizza-recipe-2-64429a0cb408b.jpg?crop=0.8888888888888888xw:1xh;center,top&resize=1200:*',
      [new Ingredient('dough', 10), new Ingredient('salami', 15)]
    ),
  ];

  getRecipes() {
    return this.recipes.slice();
  }
}

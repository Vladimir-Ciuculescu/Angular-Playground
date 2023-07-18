import { EventEmitter } from '@angular/core';
import { Ingredient } from '../shared/ingredient.model';

export class ShoppingListService {
  // public addIngredient = new EventEmitter<{ name: string; amount: number }>();
  public ingredientsChanged = new EventEmitter<Ingredient[]>();
  private ingredients: Ingredient[] = [
    new Ingredient('Salt', 350),
    new Ingredient('Pasta', 100),
    new Ingredient('Tomatoes', 4),
  ];

  getIngredients() {
    return this.ingredients.slice();
  }

  addIngredient(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingredients: Ingredient[]) {
    this.ingredients = [...this.ingredients, ...ingredients];
    this.ingredientsChanged.emit(this.ingredients.slice());
  }
}

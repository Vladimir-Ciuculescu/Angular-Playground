import { Component, Input } from '@angular/core';
import { Recipe } from '../recipe.model';
import { ShoppingListService } from 'src/app/shopping-list/shopping-list.service';
import { Ingredient } from 'src/app/shared/ingredient.model';

@Component({
  selector: 'app-recipe-detail',
  templateUrl: './recipe-detail.component.html',
  styleUrls: ['./recipe-detail.component.css'],
})
export class RecipeDetailComponent {
  @Input() selectedRecipe!: Recipe;

  constructor(private shoppingListSevice: ShoppingListService) {}

  // onAddToShoppingList(ingredients: Ingredient[]) {
  //   ingredients.forEach((item) => {
  //     this.shoppingListSevice.addIngredient(item);
  //   });
  // }
  onAddToShoppingList(ingredients: Ingredient[]) {
    this.shoppingListSevice.addIngredients(ingredients);
  }
}

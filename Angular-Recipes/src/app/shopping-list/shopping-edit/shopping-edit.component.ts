import { Component, EventEmitter, Output } from '@angular/core';
import { ShoppingListService } from '../shopping-list.service';

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css'],
})
export class ShoppingEditComponent {
  // @Output() onAddedIngredient = new EventEmitter<{
  //   name: string;
  //   amount: number;
  // }>();

  constructor(private shoppingListService: ShoppingListService) {}

  name!: string;
  amount!: number;
  value: number = 20;

  // onAddIngredient() {
  //   this.shoppingListService.addIngredient.emit({
  //     name: this.name,
  //     amount: this.amount,
  //   });
  // }
  onAddIngredient() {
    this.shoppingListService.addIngredient({
      name: this.name,
      amount: this.amount,
    });
  }
}

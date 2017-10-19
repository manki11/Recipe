import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, Injector} from "@angular/core";

export class ShoppingService {
  ingredientsChanged= new EventEmitter<Ingredient[]>();

  private ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 4)
  ];

  getIngridients() {
    return this.ingredients.slice();
  }

  onAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

  addIngredients(ingrediesnts: Ingredient[]) {
    this.ingredients.push(...ingrediesnts);
    this.ingredientsChanged.emit(this.ingredients.slice());
  }

}

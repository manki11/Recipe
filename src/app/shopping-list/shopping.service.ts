import {Ingredient} from "../shared/ingredient.model";
import {EventEmitter, Injector} from "@angular/core";
import {Subject} from "rxjs/Subject";

export class ShoppingService {
  ingredientsChanged= new Subject<Ingredient[]>();

  private ingredients: Ingredient[]= [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 4)
  ];

  getIngridients() {
    return this.ingredients.slice();
  }

  onAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingrediesnts: Ingredient[]) {
    this.ingredients.push(...ingrediesnts);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

}

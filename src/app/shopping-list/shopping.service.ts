import {Ingredient} from "../shared/ingredient.model";
import {Subject} from "rxjs/Subject";

export class ShoppingService {
  ingredientsChanged = new Subject<Ingredient[]>();
  startedEditing = new Subject<number>();

  private ingredients: Ingredient[] = [
    new Ingredient('Apples', 5),
    new Ingredient('Tomato', 4)
  ];

  getIngridients() {
    return this.ingredients.slice();
  }

  getIngridient(index: number) {
    return this.ingredients[index];
  }

  onAdded(ingredient: Ingredient) {
    this.ingredients.push(ingredient);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  addIngredients(ingrediesnts: Ingredient[]) {
    this.ingredients.push(...ingrediesnts);
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  updateIngridient(index: number, ingridient: Ingredient) {
    this.ingredients[index] = ingridient;
    this.ingredientsChanged.next(this.ingredients.slice());
  }

  deleteIngridient(index: number){
    this.ingredients.splice(index,1);
    this.ingredientsChanged.next(this.ingredients.slice());
  }
}

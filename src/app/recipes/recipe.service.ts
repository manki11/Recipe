import {Recipe} from "./recipes.model";
import {EventEmitter, Injectable} from "@angular/core";
import {Ingredient} from "../shared/ingredient.model";
import {ShoppingService} from "../shopping-list/shopping.service";

@Injectable()
export class RecipeService {
  recipeSelected = new EventEmitter<Recipe>();

  constructor(private shoppingService: ShoppingService){}

  private recipes: Recipe[] = [
    new Recipe(
      'How to make a cookie',
      'A cookie is a baked or cooked good that is small, flat and sweet. It usually contains flour, sugar and some type of oil or fat. It may include other ingredients such as raisins, oats, chocolate chips, nuts, etc.',
      'http://www.greatamericancookies.com/app/themes/greatamericancookies/library/images/home/carousel1.png',
      [
        new Ingredient('bread', 5),
        new Ingredient('choco',10)
      ]),
    new Recipe(
      'How to make a pizza',
      'Pizza is a yeasted flatbread typically topped with tomato sauce and cheese and baked in an oven. It is commonly topped with a selection of meats, vegetables and condiments.',
      'https://upload.wikimedia.org/wikipedia/commons/thumb/a/a3/Eq_it-na_pizza-margherita_sep2005_sml.jpg/440px-Eq_it-na_pizza-margherita_sep2005_sml.jpg',
      [
        new Ingredient('pizza bread',2),
        new Ingredient('cheeze', 10)
      ])
  ];

  getRecipes() {
    return this.recipes.slice();
  }

  addIngredientsToShoppingList(ingredients: Ingredient[]) {
    this.shoppingService.addIngredients(ingredients);
  }

}

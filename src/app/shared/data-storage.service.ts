import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

declare function require(name: string);

const secret = require('../../assets/secret.json');
import 'rxjs/Rx';
import {RecipeService} from "../recipes/recipe.service";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService) {
  }

  saveRecipes() {
    const recipes = this.recipeService.getRecipes();
    return this.http.put(secret.firebaseURL, recipes)
      .map(
        (response) => {
          const data = response;
          return data.json();
        }
      );
  }

  getRecipes() {
    return this.http.get(secret.firebaseURL)
      .map(
        (response) => {
          const data = response.json();
          this.recipeService.updateRecipesfromDB(data);
          return data;
        }
      );
  }
}

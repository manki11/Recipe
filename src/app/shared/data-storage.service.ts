import {Injectable} from "@angular/core";
import {Http} from "@angular/http";

declare function require(name: string);

const secret = require('../../assets/secret.json');
import 'rxjs/Rx';
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipes.model";
import {AuthService} from "../auth/auth.service";

@Injectable()
export class DataStorageService {
  constructor(private http: Http, private recipeService: RecipeService, private authService: AuthService) {
  }

  saveRecipes() {
    const token = this.authService.getToken();

    const recipes = this.recipeService.getRecipes();
    return this.http.put(secret.firebaseURL + '?auth=' + token, recipes)
      .map(
        (response) => {
          const data = response;
          return data.json();
        }
      );
  }

  getRecipes() {
    const token = this.authService.getToken();

    return this.http.get(secret.firebaseURL + '?auth=' + token)
      .map(
        (response) => {
          const data: Recipe[] = response.json();
          for (let recipe of data) {
            if (!recipe['ingredients']) {
              recipe['ingredients'] = [];
            }
          }
          this.recipeService.updateRecipesfromDB(data);
          return data;
        }
      );
  }
}

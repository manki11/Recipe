import {Injectable} from "@angular/core";
import {Http} from "@angular/http";
import {Recipe} from "../recipes/recipes.model";

const secret = require('../../assets/secret.json');
import 'rxjs/Rx';

@Injectable()
export class DataStorageService {
  constructor(private http: Http) {
  }

  saveRecipes(recipes: Recipe[]) {
    return this.http.put(secret.firebaseURL, recipes)
      .map(
        (response) => {
          const data = response;
          return data.json();
        }
      );
  }
}

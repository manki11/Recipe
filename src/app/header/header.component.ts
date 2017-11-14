import {Component, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {RecipeService} from "../recipes/recipe.service";
import {Recipe} from "../recipes/recipes.model";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorage: DataStorageService) {
  }


  onSave() {

    this.dataStorage.saveRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onFetch() {
    this.dataStorage.getRecipes().subscribe(
      (response) =>{
        console.log(response);
      }
    );
  }

}

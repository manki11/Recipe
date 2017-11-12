import {Component, OnInit} from '@angular/core';
import {ActivatedRoute, Params, Router} from "@angular/router";
import {FormArray, FormControl, FormGroup, NgForm} from "@angular/forms";
import {RecipeService} from "../recipe.service";
import {Recipe} from "../recipes.model";

@Component({
  selector: 'app-recipe-edit',
  templateUrl: './recipe-edit.component.html',
  styleUrls: ['./recipe-edit.component.css']
})
export class RecipeEditComponent implements OnInit {
  id: number;
  editMode = false;
  recipeForm: FormGroup;

  constructor(private route: ActivatedRoute, private recipeService: RecipeService, private router: Router) {
  }

  ngOnInit() {
    this.route.params
      .subscribe(
        (params: Params) => {
          this.id = +params['id'];
          this.editMode = params['id'] != null;
          this.initForm();
        }
      );
  }

  private initForm() {
    let recipename = '';
    let recipeImagePath = '';
    let recipeDesc = '';
    let recipeIngredients = new FormArray([]);

    if (this.editMode) {
      let recipe = this.recipeService.getRecipeById(this.id);
      recipename = recipe.name;
      recipeImagePath = recipe.imagePath;
      recipeDesc = recipe.description;
      if (recipe['ingredients']) {
        for (let ingredient of recipe.ingredients) {
          recipeIngredients.push(
            new FormGroup({
              'name': new FormControl(ingredient.name),
              'amount': new FormControl(ingredient.amount)
            })
          );
        }
      }
    }

    this.recipeForm = new FormGroup({
      'name': new FormControl(recipename),
      'imagePath': new FormControl(recipeImagePath),
      'description': new FormControl(recipeDesc),
      'ingredients': recipeIngredients
    });

  }

  onAddIngredient() {
    (<FormArray>this.recipeForm.get('ingredients')).push(
      new FormGroup({
        name: new FormControl(),
        amount: new FormControl()
      })
    );
  }

  onSubmit() {
    const value = this.recipeForm.value;
    const newRecipe = new Recipe(value.name, value.description, value.imagePath, []);

    if (this.editMode) {
      this.recipeService.updateRecipeById(this.id, newRecipe);
      this.editMode = false;
      this.router.navigate(['/']);
    } else {
      this.recipeService.addNewRecipe(newRecipe);
      this.router.navigate(['/']);
    }
    console.log(this.recipeForm);
  }

}

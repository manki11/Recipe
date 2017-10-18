import { Component, OnInit } from '@angular/core';
import {Recipe} from "./recipes.model";

@Component({
  selector: 'app-recipes',
  templateUrl: './recipes.component.html',
  styleUrls: ['./recipes.component.css']
})
export class RecipesComponent implements OnInit {

  Selectedrecipe: Recipe;

  onChange(recipe: Recipe){
    this.Selectedrecipe= recipe;
  }


  constructor() { }

  ngOnInit() {
  }

}

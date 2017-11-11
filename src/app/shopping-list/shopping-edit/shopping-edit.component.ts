import {Component, ElementRef, EventEmitter, OnInit, Output, ViewChild} from '@angular/core';
import {Ingredient} from "../../shared/ingredient.model";
import {ShoppingService} from "../shopping.service";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-shopping-edit',
  templateUrl: './shopping-edit.component.html',
  styleUrls: ['./shopping-edit.component.css']
})
export class ShoppingEditComponent implements OnInit {
  constructor(private shoppingService: ShoppingService) {
  }

  ngOnInit() {

  }

  onAddItem(form: NgForm) {
    const value = form.value;

    const newIngridient = new Ingredient(value.name, value.amount);
    this.shoppingService.onAdded(newIngridient);
  }

}

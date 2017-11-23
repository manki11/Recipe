import {NgModule} from "@angular/core";
import {DropDownDirective} from "./dropdown.directive";
import {CommonModule} from "@angular/common";
import {FormsModule} from "@angular/forms";

@NgModule({
  declarations: [
    DropDownDirective
  ],
  exports: [
    DropDownDirective,
    CommonModule,
    FormsModule
  ]
})
export class SharedModule {
}

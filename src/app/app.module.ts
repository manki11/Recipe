import {BrowserModule} from '@angular/platform-browser';
import {NgModule} from '@angular/core';

import {AppComponent} from './app.component';
import {HeaderComponent} from "./header/header.component";
import {ShoppingService} from "./shopping-list/shopping.service";
import {AppRoutingModule} from "./app-routing.module";
import {RecipeService} from "./recipes/recipe.service";
import {DataStorageService} from "./shared/data-storage.service";
import {HttpModule} from "@angular/http";
import {AuthService} from "./auth/auth.service";
import {AuthGaurdService} from "./auth/auth-gaurd.service";
import {RecipesModule} from "./recipes/recipes.module";
import {SharedModule} from "./shared/shared.module";
import {ShoppingListModule} from "./shopping-list/shopping-list.module";
import {AuthModule} from "./auth/auth.module";

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpModule,
    RecipesModule,
    SharedModule,
    AuthModule,
    ShoppingListModule,
  ],
  providers: [ShoppingService, RecipeService, DataStorageService, AuthService, AuthGaurdService],
  bootstrap: [AppComponent]
})
export class AppModule {
}

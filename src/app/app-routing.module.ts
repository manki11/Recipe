import {NgModule} from "@angular/core";
import {PreloadAllModules, PreloadingStrategy, RouterModule, Routes} from "@angular/router";
import {HomeComponent} from "./core/home/home.component";

const routes: Routes = [
  {path: '', component: HomeComponent},
  {path: 'recipes', loadChildren: './recipes/recipes.module#RecipesModule'}
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes,{preloadingStrategy: PreloadAllModules})
  ],
  exports: [RouterModule]
})
export class AppRoutingModule {

}

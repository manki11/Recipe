import {Component, EventEmitter, Output} from '@angular/core';
import {DataStorageService} from "../shared/data-storage.service";
import {AuthService} from "../auth/auth.service";

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected = new EventEmitter<string>();

  constructor(private dataStorage: DataStorageService, private authService: AuthService) {
  }


  onSave() {

    this.dataStorage.saveRecipes()
      .subscribe(
        (response) => {
          console.log(response);
        }
      );
  }

  onLogout() {
    this.authService.logOut();
  }

  onFetch() {
    this.dataStorage.getRecipes().subscribe(
      (response) => {
        console.log(response);
      }
    );
  }

}

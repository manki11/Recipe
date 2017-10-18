import {Component, EventEmitter, Output} from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html'
})
export class HeaderComponent {
  @Output() featureSelected= new EventEmitter<string>();

  onselect (selected: string) {
    this.featureSelected.emit(selected);
  }

}

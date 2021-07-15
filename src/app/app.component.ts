import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  title = 'AgmApp';
public isCollapsed = false;

active = 1;

toggleMenu() {
  this.isCollapsed = !this.isCollapsed;
}


}

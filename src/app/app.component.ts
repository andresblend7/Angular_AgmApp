import { SidebarService } from './shared/services/sidebar.service';
import { Component } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  constructor(private router: Router, sidebarSvc: SidebarService) {
    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        sidebarSvc.navigationEnded();
      }
    });
  }

  title = 'AgmApp';
  public isCollapsed = false;

  active = 1;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }
}

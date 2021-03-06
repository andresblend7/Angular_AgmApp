import { SidebarService } from './shared/services/sidebar.service';
import { Component, OnInit } from '@angular/core';
import { NavigationStart, Router } from '@angular/router';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent implements OnInit {
  objeto = {
    nombre: 'andres'
  }

  constructor(private router: Router, sidebarSvc: SidebarService) {

    this.router.events.subscribe((event: any) => {
      if (event instanceof NavigationStart) {
        sidebarSvc.navigationEnded();
      }
    });
  }
  ngOnInit(): void {

  }

  title = 'AgmApp';
  public isCollapsed = false;

  active = 1;

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }




}

export interface  Sujeto{
  nombre:string;
  edad: number;
}

import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit, Output } from '@angular/core';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  userFullName='Agm Developer'

  public isMenuCollapsed = true;
  constructor(private sidebarService: SidebarService) {}

  ngOnInit(): void {}

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }
}

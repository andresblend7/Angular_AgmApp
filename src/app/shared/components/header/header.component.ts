import { UserResponse } from './../../models/user.interface';
import { UserDataService } from './../../services/user-data.service';
import { SidebarService } from './../../services/sidebar.service';
import { Component, OnInit, Output } from '@angular/core';
import { pipe } from 'rxjs';


@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss'],
})
export class HeaderComponent implements OnInit {

  userFullName='Agm Developer'

  public isMenuCollapsed = true;
  constructor(private sidebarService: SidebarService, private userSv:UserDataService) {}

  ngOnInit(): void {

    this.userSv.$userData.subscribe((res:UserResponse)=>{
      this.userFullName = res.names;
      console.log("header", res.names);
    });

  }

  toggleSidebar(): void {
    this.sidebarService.toggleSidebar();
  }
}

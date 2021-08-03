import { HomeRoutingModule } from './home-routing.module';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './pages/home/home.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { BlogTimeLineComponent } from './components/blog-time-line/blog-time-line.component';
import { SidebarComponent } from '@app/shared/components/sidebar/sidebar.component';
import { SidebarModule } from 'ng-sidebar';

import { HeaderComponent } from '../../shared/components/header/header.component';
import { BreadcrumbComponent } from '../../shared/components/breadcrumb/breadcrumb.component';


import {BreadcrumbModule} from 'xng-breadcrumb';
import { InitComponent } from './init/init.component';


@NgModule({
  declarations: [
    HomeComponent,
    BlogTimeLineComponent,
    SidebarComponent,
    HeaderComponent,
    BreadcrumbComponent,
    InitComponent
  ],
  imports: [
    CommonModule,
    HomeRoutingModule,
    NgbModule,
    SidebarModule.forRoot(),
    BreadcrumbModule
  ]
})
export class HomeModule { }

import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';

import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import {BreadcrumbModule} from 'xng-breadcrumb';
import { SidebarModule } from 'ng-sidebar';

import { SidebarComponent } from './shared/components/sidebar/sidebar.component';
// import { HeaderComponent } from './shared/components/header/header.component';
// import { BreadcrumbComponent } from './shared/components/breadcrumb/breadcrumb.component';
import { ToastNotificationsComponent } from './shared/components/toast-notifications/toast-notifications.component';
import { LoginComponent } from './modules/auth/login/login.component';


@NgModule({
  declarations: [
    AppComponent,
    // SidebarComponent,
    // HeaderComponent,
    // BreadcrumbComponent,
    ToastNotificationsComponent,
    LoginComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BreadcrumbModule,
    NgbModule,
    // SidebarModule.forRoot(),
  ],
  exports:[
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

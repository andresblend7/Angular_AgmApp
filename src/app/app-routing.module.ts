import { LoginComponent } from './modules/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './modules/componentes/components/components.component';

import { AuthGuard } from './shared/guards/auth.guard';

const routes: Routes = [
  {
    path: 'login',
    component: LoginComponent,
  },
  {
    path: 'board',
    // canActivate: [AuthGuard],
    loadChildren: () => import('@home/home.module').then((m) => m.HomeModule),
    data: {
      title: 'page1',
      breadcrumb: [
        {
          label: 'Home',
          url: 'home',
        },
      ],
    },
  },
  {
    path:'**',
    redirectTo:'board'
  }


];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

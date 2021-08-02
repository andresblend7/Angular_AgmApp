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
    path: 'home',
    canActivate: [AuthGuard],
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
    path: 'componentes',
    canActivate: [AuthGuard],

    loadChildren: () =>
      import('./modules/componentes/componentes.module').then(
        (m) => m.ComponentesModule
      ),
  },
  {
    path: 'admin',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/admin/admin.module').then((m) => m.AdminModule),
    data: {
      title: 'page1',
      breadcrumb: [
        {
          label: 'Admin',
          url: 'admin',
        },
      ],
    },
  },
  {
    path: 'dev',
    canActivate: [AuthGuard],
    loadChildren: () =>
      import('./modules/expodev/expodev.module').then((m) => m.ExpodevModule),
  },
  {
    path: '**',
    redirectTo: 'login',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

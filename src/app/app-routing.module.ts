import { LoginComponent } from './modules/auth/login/login.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './modules/componentes/components/components.component';

const routes: Routes = [
  {
    path: 'home',
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
    loadChildren: () =>
      import('./modules/componentes/componentes.module').then(
        (m) => m.ComponentesModule
      ),
  },
  {
    path: 'admin',
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
    loadChildren: () =>
      import('./modules/expodev/expodev.module').then((m) => m.ExpodevModule),
  },
  {
    path:"login",
    component:LoginComponent
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

import { ApiResponsesComponent } from './../api-responses/api-responses.component';
import { HomeComponent } from './pages/home/home.component';
import { Routes, RouterModule, Router } from '@angular/router';
import { NgModule } from '@angular/core';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { InitComponent } from './init/init.component';

const routes: Routes = [
  // {
  //   path: 'home',
  //   component: HomeComponent,
  // },
  // {
    {
    path: '',
    component: HomeComponent,
    children: [
      {
        path: 'home',
        component: InitComponent,
      },

      {
        path: 'componentes',
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import('../../modules/componentes/componentes.module').then(
            (m) => m.ComponentesModule
          ),
      },
      {
        path: 'admin',
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import('../../modules/admin/admin.module').then((m) => m.AdminModule),
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
        // canActivate: [AuthGuard],
        loadChildren: () =>
          import('../../modules/expodev/expodev.module').then(
            (m) => m.ExpodevModule
          ),
      },
      {
        path: 'api',
        // canActivate: [AuthGuard],
        component:ApiResponsesComponent,
        data: {
          title: 'ApiResponse',
          breadcrumb: [
            {
              label: 'ApiResponse',
              url: 'home',
            },
          ],
        },
      },
      {
        path: '**',
        redirectTo: 'home',
      },
    ],
  },
  {
    path: '**',
    redirectTo: 'home',
  },
];

@NgModule({
  declarations: [],
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class HomeRoutingModule {}

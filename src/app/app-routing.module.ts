import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
  {
    path: 'home',
    loadChildren: () =>
      import('./modules/home/home.module').then((m) => m.HomeModule),
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
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}

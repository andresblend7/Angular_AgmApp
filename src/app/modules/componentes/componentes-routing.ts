import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        canActivate: [AuthGuard],
        path: '',
        component: ComponentsComponent ,
      },
      {
        canActivate: [AuthGuard],
        path:'**',
        redirectTo : ''
      }
    ],
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ComponentesRoutingModule {}

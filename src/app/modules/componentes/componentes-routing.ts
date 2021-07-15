import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ComponentsComponent } from './components/components.component';

const routes: Routes = [
  {
    path: '',
    children: [
      {
        path: '',
        component: ComponentsComponent ,
      },
      {
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

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { DirectivasComponent } from './directivas/directivas.component';
import { PipesComponent } from './pipes/pipes.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  { path: 'directivas', component: DirectivasComponent },
  {path:'pipes', component: PipesComponent},
  {path:'rxjs', component: RxjsComponent},
  { path: '', redirectTo: 'directivas' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpodevRoutingModule {}

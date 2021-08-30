import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AuthGuard } from '@app/shared/guards/auth.guard';
import { DirectivasComponent } from './directivas/directivas.component';
import { PipesComponent } from './pipes/pipes.component';
import { RxjsComponent } from './rxjs/rxjs.component';

const routes: Routes = [
  {      canActivate: [AuthGuard], path: 'directivas', component: DirectivasComponent },
  {      canActivate: [AuthGuard], path: 'pipes', component: PipesComponent },
  {       canActivate: [AuthGuard], path: 'rxjs', component: RxjsComponent },
  {       canActivate: [AuthGuard], path: '', redirectTo: 'directivas' },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class ExpodevRoutingModule {}

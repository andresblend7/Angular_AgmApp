import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ExpodevRoutingModule } from './expodev-routing.module';
import { DirectivasComponent } from './directivas/directivas.component';
import { PipesComponent } from './pipes/pipes.component';
import { CustomPipePipe } from '@app/shared/pipes/custom-pipe.pipe';
import { AppModule } from '@app/app.module';
import { SharedModule } from '@app/shared/shared.module';
import { RxjsComponent } from './rxjs/rxjs.component';


@NgModule({
  declarations: [
    DirectivasComponent,
    PipesComponent,
    RxjsComponent,
  ],
  imports: [
    CommonModule,
    ExpodevRoutingModule,
    SharedModule
  ]
})
export class ExpodevModule { }

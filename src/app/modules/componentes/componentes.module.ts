import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentesRoutingModule } from './componentes-routing';
import { ModalComponent } from './components/modal/modal.component';
import { GchartsComponent } from './components/gcharts/gcharts.component';

import { ChartsModule } from 'ng2-charts';

@NgModule({
  declarations: [
    ComponentsComponent,
    ModalComponent,
    GchartsComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ComponentesRoutingModule,
    ChartsModule
  ],
  exports:[
    ComponentsComponent
  ]
})
export class ComponentesModule { }

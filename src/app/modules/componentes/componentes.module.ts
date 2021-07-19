import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentesRoutingModule } from './componentes-routing';
import { ModalComponent } from './components/modal/modal.component';

@NgModule({
  declarations: [
    ComponentsComponent,
    ModalComponent
  ],
  imports: [
    CommonModule,
    NgbModule,
    ComponentesRoutingModule
  ],
  exports:[
    ComponentsComponent
  ]
})
export class ComponentesModule { }

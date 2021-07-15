import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { ComponentsComponent } from './components/components.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';

import { ComponentesRoutingModule } from './componentes-routing';

@NgModule({
  declarations: [
    ComponentsComponent
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

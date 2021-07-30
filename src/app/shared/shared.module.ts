import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { SecureURLPipe } from './pipes/secure-url.pipe';
import { CustomDirectivaDirective } from './directivas/custom-directiva.directive';



@NgModule({
  declarations: [
    CustomPipePipe,
    SecureURLPipe,
    CustomDirectivaDirective
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomPipePipe,
    SecureURLPipe,
    CustomDirectivaDirective
  ]
})
export class SharedModule { }

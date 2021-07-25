import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CustomPipePipe } from './pipes/custom-pipe.pipe';
import { SecureURLPipe } from './pipes/secure-url.pipe';



@NgModule({
  declarations: [
    CustomPipePipe,
    SecureURLPipe
  ],
  imports: [
    CommonModule
  ],
  exports:[
    CustomPipePipe,
    SecureURLPipe
  ]
})
export class SharedModule { }

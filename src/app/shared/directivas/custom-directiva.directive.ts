import { Directive, ElementRef, Input, OnInit } from '@angular/core';

@Directive({
  selector: '[appCustomDirectiva]'
})


export class CustomDirectivaDirective  implements OnInit{

  @Input("appCustomDirectiva") colorBorder!:string;

  constructor(private elr:ElementRef) {
    console.info('directiva custom llamada ', this.colorBorder);


  }
  ngOnInit(): void {
    this.changeColor(this.colorBorder);
  }

  changeColor(color:string){
    this.elr.nativeElement.style.border='2px dashed '+color;
  }


}

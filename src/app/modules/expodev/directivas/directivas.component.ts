import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  alertClass='alert-info';
  cargando:boolean = false;

  texto={
    warning:true
  }

  constructor() { }

  ngOnInit(): void {
  }
  changeClass(success:boolean){
   this.alertClass = (success) ? 'alert-success' : 'alert-info';
  }

  asyncIconClass(){
    this.cargando= true;
    setTimeout(() => {
      this.cargando= false;
    }, 3500);
  }

}

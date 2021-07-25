import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directivas',
  templateUrl: './directivas.component.html',
  styleUrls: ['./directivas.component.scss']
})
export class DirectivasComponent implements OnInit {

  alertClass='alert-info';

  texto={
    warning:true
  }

  constructor() { }

  ngOnInit(): void {
  }
  changeClass(success:boolean){
   this.alertClass = (success) ? 'alert-success' : 'alert-info';
  }

}

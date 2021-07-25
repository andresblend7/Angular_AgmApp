import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-pipes',
  templateUrl: './pipes.component.html',
  styleUrls: ['./pipes.component.scss']
})
export class PipesComponent implements OnInit {

  fecha = new Date(1995,6,2);
  nombre = 'Andrés Gómez Mendoza';
  palabras = 'esto es un oración';
  fechaEnMiliseg = Date.now();
  arreglo = ['uno', 'dos', 'tres', 'cuatro', 'cinco'];
  dinero = 9752;
  porcentaje=0.578;
  videoUrl= 'https://www.youtube.com/embed/WCi2DLYE82A';


  valorPromesa = new Promise<string>((resolve)=> {
    setTimeout(() => {
      resolve('Finalizó la promesa')
    }, 2500);
  });


  constructor() { }

  ngOnInit(): void {
  }

}

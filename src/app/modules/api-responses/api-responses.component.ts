import { map, tap } from 'rxjs/operators';
import { ApiRolesService } from './../services/api-roles.service';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-api-responses',
  templateUrl: './api-responses.component.html',
  styleUrls: ['./api-responses.component.scss']
})
export class ApiResponsesComponent implements OnInit {



  constructor(private _usrRolSv: ApiRolesService) { }

  rows = [
    { name: 'Austin', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany', gender: 'Male', company: 'KFC' },
    { name: 'Molly', gender: 'Female', company: 'Burger King' }
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  ngOnInit(): void {
    this._usrRolSv.getAllUsersWithRole()
    .pipe(
      map((resp:any[])=>
        resp.map(item =>({'name':item.usuario.names, 'gender': item.rol.nombre, 'company' : 'Esta es una frase que quiero ver como se va a acomodar el texto, e quiero ver como se va a acomodar el texto'}))
        ),
      tap(mappedItems => console.log("mappedItems",mappedItems))
     )
    .subscribe((res)=>{
      //Data obtenida
      this.rows = res;
    });
  }

}

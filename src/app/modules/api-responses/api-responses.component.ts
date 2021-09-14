import { map, tap } from 'rxjs/operators';
import { ApiRolesService } from './../services/api-roles.service';
import { Component, OnInit } from '@angular/core';
import { BehaviorSubject } from 'rxjs';

@Component({
  selector: 'app-api-responses',
  templateUrl: './api-responses.component.html',
  styleUrls: ['./api-responses.component.scss'],
})
export class ApiResponsesComponent implements OnInit {
  pagesItems$ = new BehaviorSubject<any[]>([
    { name: 'Loading...', gender: 'Loading...', company: 'Loading...' },
  ]);

  sliceIndex:number = 0;
  amountTake:number = 5;
  actualPage:number = 1;
  maxPages=1;
  constructor(private _usrRolSv: ApiRolesService) {}

  rows = [
    { name: 'Austin 1', gender: 'Male', company: 'Swimlane' },
    { name: 'Dany 2 ', gender: 'Male', company: 'KFC' },
    { name: 'Dany 3 ', gender: 'Male', company: 'KFC' },
    { name: 'Dany 4', gender: 'Male', company: 'KFC' },
    { name: 'Dany 5', gender: 'Male', company: 'KFC' },
    { name: 'Dany 6', gender: 'Male', company: 'KFC' },
    { name: 'Dany 7', gender: 'Male', company: 'KFC' },
    { name: 'Dany 8 ', gender: 'Male', company: 'KFC' },
    { name: 'Dany 9', gender: 'Male', company: 'KFC' },
    { name: 'Dany 10', gender: 'Male', company: 'KFC' },
    { name: 'Dany 11', gender: 'Male', company: 'KFC' },
    { name: 'Molly 12', gender: 'Female', company: 'Burger King' },
  ];
  columns = [{ prop: 'name' }, { name: 'Gender' }, { name: 'Company' }];

  getRowsToView() {
    console.log(this.sliceIndex+" ♣ "+(this.sliceIndex + parseInt(""+this.amountTake)));

    this.pagesItems$.next(
      this.rows.slice(this.sliceIndex, this.sliceIndex + parseInt(""+this.amountTake))
    );
  }

  listenChangePageItems(){
    this.sliceIndex=0;
    this.actualPage=1;
    this.getRowsToView();
  }

  getCountPages(): number {
    let roundResult = Math.round(this.rows.length / this.amountTake);
    let realResult = this.rows.length / this.amountTake;
    this.maxPages = realResult > roundResult ? roundResult + 1 : roundResult;
    return this.maxPages;
  }

  nextPage() {
   if(this.actualPage<this.maxPages){
     console.log(this.sliceIndex+" - "+this.amountTake);
    this.sliceIndex += parseInt(""+this.amountTake);
    this.actualPage++;
    console.log(this.sliceIndex+" * "+this.amountTake);
    this.getRowsToView();
   }
  }

  prevPage() {
    if (this.actualPage > 1) {
      this.sliceIndex -= parseInt(""+this.amountTake);
      this.actualPage--;
      this.getRowsToView();
    }
  }

  ngOnInit(): void {
    this.getRowsToView();

    this._usrRolSv
      .getAllUsersWithRole()
      .pipe(
        map((resp: any[]) =>
          resp.map((item) => ({
            name: item.usuario.names,
            gender: item.rol.nombre,
            company:
              'Esta es una frase que quiero ver como se va a acomodar el texto, e quiero ver como se va a acomodar el texto',
          }))
        ),
        tap((mappedItems) => console.log('mappedItems', mappedItems))
      )
      .subscribe((res) => {
        //Data obtenida
        //this.rows = res;
      });
  }
}

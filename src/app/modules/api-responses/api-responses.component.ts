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

  sliceIndex = 0;
  amountTake = 5;
  actualPage = 1;
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

    this.pagesItems$.next(
      this.rows.slice(this.sliceIndex, this.sliceIndex + this.amountTake)
    );
  }

  getCountPages(): number {
    let roundResult = Math.round(this.rows.length / this.amountTake);
    let realResult = this.rows.length / this.amountTake;
    this.maxPages = realResult > roundResult ? roundResult + 1 : roundResult;
    return this.maxPages;
  }

  nextPage() {
   if(this.actualPage<this.maxPages){
    this.sliceIndex += this.amountTake;
    this.actualPage++;
    this.getRowsToView();
   }
  }

  prevPage() {
    if (this.actualPage > 1) {
      this.sliceIndex -= this.amountTake;
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

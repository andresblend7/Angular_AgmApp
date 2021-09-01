import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { environment } from 'environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ApiRolesService {

  private API_URL = environment.API_URL;

  constructor(private _http:HttpClient) { }

  getAllUsersWithRole():Observable<any>{
    return this._http.get(`${this.API_URL}/Admin`);
  }


}

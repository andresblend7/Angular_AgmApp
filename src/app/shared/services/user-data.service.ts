import { UserLogged, UserResponse } from './../models/user.interface';
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { __LSStoreKey } from '../Helpers/dictionaries';

@Injectable({
  providedIn: 'root'
})
export class UserDataService {

   userDataDefault:UserResponse = {
    accessId  :'',
    names : '',
    photo : '',
    username : ''
  };

  $userData= new BehaviorSubject<UserResponse>(this.userDataDefault);

  constructor() {
    this.getUserData();
  }

  getUserData():Observable<UserResponse>{
    const dataLs= localStorage.getItem(__LSStoreKey);
    if(dataLs){
      const dataParsed = JSON.parse(''+dataLs);
      this.$userData.next(dataParsed.user);
    }
    return this.$userData.asObservable();
  }




}

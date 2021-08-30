import { Router, NavigationStart } from '@angular/router';
import { AuthService } from './../auth.service';
import { Component, OnInit } from '@angular/core';
import { UserLogin } from '@app/shared/models/user.interface';
import { EmailValidator, FormControl, FormGroup, Validators } from '@angular/forms';
@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})
export class LoginComponent implements OnInit {

  loading:boolean = false;

  loginForm= new FormGroup({
    userName: new FormControl('',[Validators.email, Validators.required]),
    password : new FormControl('', [Validators.required])
  });

  constructor(private _oathService:AuthService, private _router: Router) {
    _oathService.logOut();

   }

  userData:UserLogin={
    password:'321',
    userName:'andres'
 };


  ngOnInit(): void {

  }

  login(){
    this.loading = true;
    console.log({...this.loginForm.controls});
    this.userData = {...this.loginForm.value} ;
    // console.log({...this.userData});
    this._oathService.logIn(this.userData).subscribe((res)=> {
      console.log('mmm', res);
      if(res!=null){
        this._router.navigateByUrl('/dashboard');
      }else{
        this.loading = false;
      }
    });
  }

  repeatLoginTest(){
    this._oathService.logIn(this.userData).subscribe((res)=> {console.log('RESSS')});
  }

 }

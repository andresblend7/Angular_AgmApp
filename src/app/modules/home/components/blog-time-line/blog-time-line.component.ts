import { Component, OnInit } from '@angular/core';
import { AuthService } from '@app/modules/auth/auth.service';

@Component({
  selector: 'app-blog-time-line',
  templateUrl: './blog-time-line.component.html',
  styleUrls: ['./blog-time-line.component.scss']
})
export class BlogTimeLineComponent implements OnInit {

  accesId!:string;

  constructor(private _oauthSv: AuthService) { }

  ngOnInit(): void {
    // this.accesId = this._oauthSv
  }

}

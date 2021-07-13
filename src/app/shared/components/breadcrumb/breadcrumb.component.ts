import { AfterViewInit, Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-breadcrumb',
  templateUrl: './breadcrumb.component.html',
  styleUrls: ['./breadcrumb.component.scss']
})
export class BreadcrumbComponent implements OnInit, AfterViewInit {

  htmlLoaded:boolean = false;
  constructor() {
  this.htmlLoaded = false;

  }
  ngAfterViewInit(): void {
    setTimeout(() => {
      this.htmlLoaded= true;
    }, 2600);
  }

  ngOnInit(): void {
  }

}

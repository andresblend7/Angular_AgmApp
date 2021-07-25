import { SidebarService } from './../../services/sidebar.service';
import { Component, HostListener, OnInit } from '@angular/core';
import { SidebarModule } from 'ng-sidebar';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.scss'],
})
export class SidebarComponent implements OnInit {

  private minWithDock=900;

  _opened: boolean = true;
  activedock = true;
  isCollapsed1 = true;
  isCollapsed2 = true;

  private widthScreen$ = new Subject<number>();

  _MODES: Array<any> = ['over', 'push', 'slide'];
  public modeSideBar = 1;

  constructor(private sidebarService: SidebarService) {
    this.widthScreen$.next(window.innerWidth);

    this.sidebarService.toggleSidebarEvent.subscribe((change) => {
      this._toggleSidebar();
    });

    this.sidebarService.navigationSidebarEndEvent.subscribe(()=>{
      this.navigationByWindowSize();
    });

    if(window.innerWidth<this.minWithDock)
    this._opened= false;
  }

  setMode(mode: number): void {
    this.modeSideBar = mode;
  }

  //Si se navegó en una resolución pequeña se cierra el menú
  navigationByWindowSize(){
    if(window.innerWidth<this.minWithDock)
    this._opened= false;
  }

  ngOnInit(): void {
    this.widthScreen$.subscribe((data) => {
      if (data < this.minWithDock) {
        this.setMode(0);
        this.activedock = false;
      } else {
        this.setMode(1);
        this.activedock = true;
      }
    });

    this.widthScreen$.next(window.innerWidth);
  }

  @HostListener('window:resize', ['$event'])
  onResize(event: any) {
    this.widthScreen$.next(window.innerWidth);
  }
  _toggleSidebar() {
    this._opened = !this._opened;
  }

  toggleForChilds(){
    if(!this._opened)
      this._opened=true;
  }
}

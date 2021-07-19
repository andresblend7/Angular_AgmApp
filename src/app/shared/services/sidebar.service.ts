import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  @Output()  navigationSidebarEndEvent = new EventEmitter();
  @Output()  toggleSidebarEvent = new EventEmitter();

  toggleSidebar(): void {
    this.toggleSidebarEvent.emit();
  }

  navigationEnded(): void{
    this.navigationSidebarEndEvent.emit();
  }

}

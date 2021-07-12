import { EventEmitter, Injectable, Output } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SidebarService {

  @Output() toggleSidebarEvent = new EventEmitter();

  constructor() { }

  toggleSidebar(): void {
    this.toggleSidebarEvent.emit();
  }


}

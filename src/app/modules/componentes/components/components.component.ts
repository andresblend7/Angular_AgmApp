import { Component, OnInit } from '@angular/core';
import { ToastNotificationsService } from '@app/shared/services/toast-notifications.service';

@Component({
  selector: 'app-components',
  templateUrl: './components.component.html',
  styleUrls: ['./components.component.scss'],
})
export class ComponentsComponent implements OnInit {
  showAlerts = true;
  showToast = true;

  tabs = [1, 2, 3, 4, 5];
  counter = this.tabs.length + 1;
  active: number = 1;
  public isCollapsed = true;

  close(event: MouseEvent, toRemove: number) {
    this.tabs = this.tabs.filter((id) => id !== toRemove);
    event.preventDefault();
    event.stopImmediatePropagation();
  }

  add(event: MouseEvent) {
    this.tabs.push(this.counter++);
    event.preventDefault();
  }

  constructor(private toastSvc: ToastNotificationsService) {}

  ngOnInit(): void {}

  toggleMenu() {
    this.isCollapsed = !this.isCollapsed;
  }

  closeToast() {
    this.showToast = !this.showToast;
  }

  closeAlert(): void {
    this.showAlerts = !this.showAlerts;
  }

  toastSucess(clase:string, texto:string, icon:string): void {

    this.toastSvc.show(
      texto,
      { classname: clase, delay: 4700, header: '', icon :icon }
    );
  }
}

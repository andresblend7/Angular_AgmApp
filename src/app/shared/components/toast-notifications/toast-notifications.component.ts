import { Component, OnInit, TemplateRef } from '@angular/core';
import { ToastNotificationsService } from '@app/shared/services/toast-notifications.service';

@Component({
  selector: 'app-toast-notifications',
  templateUrl: './toast-notifications.component.html',
  styleUrls: ['./toast-notifications.component.scss'],
  host: { '[class.ngb-toasts]': 'true' },
})
export class ToastNotificationsComponent implements OnInit {
  constructor(public toastService: ToastNotificationsService) {}

  ngOnInit(): void {}

  isTemplate(toast: any) {
    return toast.textOrTpl instanceof TemplateRef;
  }

  showStandard() {
    this.toastService.show('I am a standard toast');
  }

  showSuccess() {
    this.toastService.show(
      'Esto es un texto bastante más grande para ver como se adecua el contenido a la notificación',
      { classname: 'bg-danger text-light', delay: 24500, header: '' }
    );
  }

  showDanger(dangerTpl: any) {
    this.toastService.show(dangerTpl, {
      classname: 'bg-danger text-light',
      delay: 15000,
    });
  }
}

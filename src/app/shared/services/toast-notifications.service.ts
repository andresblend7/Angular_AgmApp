import { Injectable, TemplateRef } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class ToastNotificationsService {

  toasts:any[] = [];

  constructor() { }

  show(textOrTpl: string | TemplateRef<any>, options: any = {}){
    this.toasts.push({textOrTpl, ...options});

    console.log('toasts', this.toasts);
  }

  remove(toast:any){
    this.toasts = this.toasts.filter(t=> t!== toast);
  }


}

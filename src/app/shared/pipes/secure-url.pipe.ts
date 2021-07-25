import { Pipe, PipeTransform } from '@angular/core';
import{DomSanitizer, SafeResourceUrl} from '@angular/platform-browser';

@Pipe({
  name: 'secureURL'
})
export class SecureURLPipe implements PipeTransform {

  constructor(private domSeguro:DomSanitizer){

  }

  transform(url: string, ...args: unknown[]): SafeResourceUrl {

    return this.domSeguro.bypassSecurityTrustResourceUrl(url)

  }

}

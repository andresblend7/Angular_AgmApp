import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'customPipe',
})
export class CustomPipePipe implements PipeTransform {
  // transform(value: unknown, ...args: unknown[]): string {
  transform(value: string, numero: number): string {
    console.info(numero);
    let result = value.replace(/ /g, '♦');
    result = result.replace('oración', 'PipeCustom');
    return result;
  }
}


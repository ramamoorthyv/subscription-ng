import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'join',
  pure: false,
})
export class JoinPipe implements PipeTransform {
  transform(value: unknown, ...args: unknown[]): unknown {
    return (Array.isArray(value) ? value : [value]).concat(args).join('');
  }
}

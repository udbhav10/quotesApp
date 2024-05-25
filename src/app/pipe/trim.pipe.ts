import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'trim'
})
export class TrimPipe implements PipeTransform {

  transform(quote: string, length: number = 120): string {
    return quote.length > length ? quote.slice(0, length) + '...' : quote;
  }

}

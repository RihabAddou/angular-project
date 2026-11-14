import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'titleColor',
})
export class TitleColorPipe implements PipeTransform {
  transform(title: string): string {
    return title.length > 10 ? 'red' : 'green';
  }
}
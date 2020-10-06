import { Pipe, PipeTransform } from '@angular/core';
import * as moment from 'moment';

@Pipe({
  name: 'format',
  pure: false
})
export class FormatPipe implements PipeTransform {

  transform(date: moment.Moment, format: string = 'YYYY MMMM'): string {
    return date.format(format);
  }

}

import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'daysAgo'
})
export class DaysAgoPipe implements PipeTransform {

  transform(value: Date) {
    if (value) {
      const today = new Date().getTime();
      const feedTime = new Date(value).getTime()
      const daySince  = Math.floor((today - feedTime) / 86400000);
      if (daySince == 0){
        return 'Today';
      }
      if(daySince == 1) {
        return 'A Day Ago'
      }
      if( daySince < 365) {
        return daySince + ' days ago';
      }
      return Math.floor(daySince / 365) +  ' years ago'
    }
    return value;
  }

}

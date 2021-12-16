import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'like'
})
export class LikePipe implements PipeTransform {

  transform(value: number): string {
    if(!value) {
      return 'No likes yet';
    }
    if (value == 1){
      return '1 Like';
    }
    return value + ' Likes';
  }
}

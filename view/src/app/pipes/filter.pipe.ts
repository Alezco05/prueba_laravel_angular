import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '') return value;
    const resultPosts = [];
    if(value){
    for (const post of value) {
      console.log(post.nombre)
      if (post.pais.toLowerCase().indexOf(arg.toLowerCase()) > -1) {
        resultPosts.push(post);
      };
    };
    }
    return resultPosts;
  }


}

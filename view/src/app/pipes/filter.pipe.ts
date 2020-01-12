import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'filter'
})
export class FilterPipe implements PipeTransform {

  transform(value: any, arg: any): any {
    if (arg === '') return value;
    const cadena = arg;
    let filter = cadena.split(':')[0];
    const busqueda = cadena.split(':')[1];
    filter = filter.toLowerCase();
    const resultPosts = [];
    if(value) {
    for (const post of value) {
      if (filter === 'nombre') {
        if (post.nombre.toLowerCase().indexOf(busqueda.toLowerCase()) > -1) {
          resultPosts.push(post);
        }
      }
      if (filter === 'pais') {
        if (post.pais.toLowerCase().indexOf(busqueda.toLowerCase()) > -1) {
          resultPosts.push(post);
        }
      }
      if (filter === 'cedula') {
        if (post.cedula.toLowerCase().indexOf(busqueda.toLowerCase()) > -1) {
          resultPosts.push(post);
        }
      }
      if (filter === 'fecha') {
        if (post.fechaNacimiento.toLowerCase().indexOf(busqueda.toLowerCase()) > -1) {
          resultPosts.push(post);
        }
      }
    }
    }
    return resultPosts;
  }


}

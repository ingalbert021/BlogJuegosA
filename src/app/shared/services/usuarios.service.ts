import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { ResquestResponse } from '../models';
import { map } from 'rxjs/operators';


@Injectable({
  providedIn: 'root'
})
export class UsuariosService {

  constructor(private http: HttpClient) {}

  cargarUsuarios() {
/*
    const url = 'https://jsonplaceholder.typicode.com/users';
 return this.http.get<ResquestResponse>( url );
 */

    const url = 'https://reqres.in/api/users';

  return this.http.get<ResquestResponse>( url )
    .pipe(
      map( resp =>  {
        return resp.data;
      } )
    )




	}
}

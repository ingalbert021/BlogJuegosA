import { Injectable } from '@angular/core';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { ResquestResponse, ResponseI, LoginI } from '../models';
import { map } from 'rxjs/operators';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})


export class UsuariosService {

  constructor(private http: HttpClient) {}
/*login servicio del login*/

  login(form:LoginI):Observable<ResponseI>{
    let dirrecion = 'https://reqres.in/api/login';
    return this.http.post<ResponseI>(dirrecion, form);

  }




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

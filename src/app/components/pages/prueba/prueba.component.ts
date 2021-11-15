import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../shared/services/usuarios.service';

@Component({
  selector: 'app-prueba',
  templateUrl: './prueba.component.html',
  styleUrls: ['./prueba.component.css']
})
export class PruebaComponent implements OnInit {

  public usuarios: any = []

  constructor( private usuariosService: UsuariosService ) { }

  ngOnInit(): void {
  	
  	this.usuariosService.cargarUsuarios()
    .subscribe( usuarios => {

     console.log( usuarios );
   this.usuarios = usuarios;
    });



  }

}

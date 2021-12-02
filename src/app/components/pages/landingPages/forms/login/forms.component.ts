import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../../../shared/services/usuarios.service';
import { LoginI, ResponseI } from '../../../../../shared/models/index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {
 public validacion:any;

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),

  })
  constructor( private api:UsuariosService) {


  }

  ngOnInit(): void {


  }

  onLogin(form:LoginI){
    this.api.login(form).subscribe(data =>{
      console.log(data);
       let dataResponse:ResponseI = data;

      if(dataResponse.token == "QpwL5tke4Pnpja7X6"){

        this.validacion = "logeado";
        console.log(this.validacion);
      }


    });

    if(this.validacion !== "logeado"){
      this.validacion = "error";
    };
  }






}

import { Component, OnInit } from '@angular/core';
import { UsuariosService } from '../../../../shared/services/usuarios.service';
import { LoginI } from '../../../../shared/models/index';
import { FormGroup, FormControl, Validators } from '@angular/forms';
@Component({
  selector: 'app-forms',
  templateUrl: './forms.component.html',
  styleUrls: ['./forms.component.css']
})
export class FormsComponent implements OnInit {

  loginForm = new FormGroup({
    email : new FormControl('',Validators.required),
    password : new FormControl('',Validators.required),

  })
  myScriptElement: HTMLScriptElement;

  constructor( private api:UsuariosService) {

    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "../../../../../assets/js/javaScript.js";
    document.body.appendChild(this.myScriptElement);
  }
  ngOnInit(): void {

  }

  onLogin(form:LoginI){
    this.api.login(form).subscribe(data =>{
      console.log(data);
    })
  }


}

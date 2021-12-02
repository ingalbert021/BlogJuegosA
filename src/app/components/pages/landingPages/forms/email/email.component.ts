import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-email',
  templateUrl: './email.component.html',
  styleUrls: ['./email.component.css']
})
export class EmailComponent implements OnInit {

 myScriptElement: HTMLScriptElement;

 constructor() {

  this.myScriptElement = document.createElement("script");
   this.myScriptElement.src = "../../../../../assets/js/javaScript.js";
   document.body.appendChild(this.myScriptElement);
 }


  ngOnInit(): void {
  }

}

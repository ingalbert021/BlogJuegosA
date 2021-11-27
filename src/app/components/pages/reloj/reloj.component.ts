import { Component, OnInit } from '@angular/core';


@Component({
  selector: 'app-reloj',
  templateUrl: './reloj.component.html',
  styleUrls: ['./reloj.component.css']
})
export class RelojComponent implements OnInit {
  myScriptElement: HTMLScriptElement;
  constructor() {

    this.myScriptElement = document.createElement("script");
    this.myScriptElement.src = "../../../../assets/js/javaScript.js";
    document.body.appendChild(this.myScriptElement);
  }
  ngOnInit(): void {
  }

}

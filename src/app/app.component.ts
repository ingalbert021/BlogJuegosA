import { Component } from '@angular/core';

declare function Reloj(): void;

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'BlogVideosJuegos';

constructor(){
Reloj();

}

}

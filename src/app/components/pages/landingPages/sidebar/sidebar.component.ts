import { Component, OnInit } from '@angular/core';

import * as moment from 'moment';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {

    post = {
post1: {
title:"God of War",
date: 'publicado el dia:'+ moment().date()+ " de " +moment().format("MMMM")+" " +'del'+moment().format(" YYYY"),
content:' es una serie de videojuegos en 3ª. persona creada por SCE Santa Monica Studio y distribuida por Sony Computer Entertainment. Se basa en las aventuras de un semidiós espartano, Kratos, quien se enfrenta a diversos personajes de la mitología griega y nórdica, tanto héroes '

 },

  post2:{
 
  title:"Need For Speed Most Wanted",
  date: 'publicado el dia:'+ moment().date()+ " de " +moment().format("MMMM")+" " +'del'+moment().format(" YYYY"),
  content:'Nuestro objetivo en Need for Speed Most Wanted es conseguir ser el más buscado por las fuerzas del orden. Para ello nos tendremos que valer de nuestro coche, el cual tendremos que tunear al máximo para conseguir ganar en las carreras ilegales que se celebrana en plena ciudad. '
 },

post3:{
  title:"Grand Theft Auto V",
  date: 'publicado el dia:'+ moment().date()+ " de " +moment().format("MMMM")+" " +'del'+moment().format(" YYYY"),
  content:'Grand Theft Auto V (abreviado como GTA V o GTA 5) es un videojuego de acción-aventura de mundo abierto desarrollado por el estudio Rockstar North y distribuido por Rockstar Games. Fue lanzado el 17 de septiembre de 2013 para las consolas PlayStation 3 y Xbox 360.4​ Posteriormente, fue lanzado el 18 de noviembre de 2014 para las consolas de nueva generación'
},

 post4:{

  title:"Mortal Kombat",
  date: 'publicado el dia:'+ moment().date()+ " de " +moment().format("MMMM")+" " +'del'+moment().format(" YYYY"),
  content:'Mortal Kombat es una franquicia de videojuego de lucha creada por Ed Boon y John Tobias en 1992. Las cuatro primeras entregas fueron distribuidas por Midway Games y lanzadas principalmente en máquinas arcade posteriormente estuvieron disponibles en consolas domésticas.'
},

post5:{
  title:"Saga mario Bros",
  date: 'publicado el dia:'+ moment().date()+ " de " +moment().format("MMMM")+" " +'del'+moment().format(" YYYY"),
  content:'Super Mario es una serie de videojuegos de plataformas creados por la empresa desarrolladora Nintendo y protagonizados por su mascota, Mario. También conocida como la serie Super Mario Bros. o simplemente la serie Mario, es la serie principal de la franquicia de Mario'
  }

};

data = Object.values(this.post);
 

  constructor() {

   }

  ngOnInit(): void {

  
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { SidebarComponent } from './components/pages/landingPages/sidebar/sidebar.component';
import { RelojComponent } from './components/pages/reloj/reloj.component';
import { InfoComponent } from './components/pages/info/info.component';

import { PruebaComponent } from './components/pages/prueba/prueba.component';

const routes: Routes = [


		{
			path:'', component: SidebarComponent
		},

		 {

		 	path:'inicio', component: SidebarComponent
		 },


		  {

		 	path:'reloj', component: RelojComponent
		  },

		  {

		 	path:'detalles', component: InfoComponent
		  },


		  {

		 	path:'usuarios', component: PruebaComponent
		  
		  }




];

@NgModule({
  declarations: [],
  imports: [
  	RouterModule.forRoot(routes),
    CommonModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

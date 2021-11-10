import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';


import { AppComponent } from './app.component';
import { HeaderComponent } from './shared/components/header/header.component';
import { FooterComponent } from './shared/components/footer/footer.component';
import { FormsComponent } from './components/pages/landingPages/forms/forms.component';
import { SliderComponent } from './components/pages/landingPages/slider/slider.component';
import { SidebarComponent } from './components/pages/landingPages/sidebar/sidebar.component';
import { RelojComponent } from './components/pages/reloj/reloj.component';
import { InfoComponent } from './components/pages/info/info.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material.module';
import { AppRoutingModule } from './app-routing.module';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    FooterComponent,
    FormsComponent,
    SliderComponent,
    SidebarComponent,
    RelojComponent,
    InfoComponent
  ],
  imports: [
    BrowserModule,
    BrowserAnimationsModule,
    MaterialModule,
    AppRoutingModule



  ],
  providers: [ ],
  bootstrap: [AppComponent]
})
export class AppModule { }

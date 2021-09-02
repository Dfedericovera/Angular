import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './pages/home/home.component';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { LoginComponent } from './component/clase1ej2/login/login.component';
import { VideoComponent } from './component/video/video.component';
import { Clase1ej1Component } from './component/clase1ej1/clase1ej1.component';
import { Clase1ej2Component } from './component/clase1ej2/clase1ej2.component';
import { BienvenidoComponent } from './component/clase1ej2/bienvenido/bienvenido.component';
import { ErrorComponent } from './component/clase1ej2/error/error.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LoginComponent,
    VideoComponent,
    Clase1ej1Component,
    Clase1ej2Component,
    BienvenidoComponent,
    ErrorComponent,        
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    ReactiveFormsModule    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

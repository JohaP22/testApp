import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import {routing, appRoutingProviders} from './app routing';
import { AppComponent } from './app.component';
import { VideojuegoComponent } from './videojuego/videojuego.component';
import { ColorComponent } from './colores/colores.component';
import { TemasComponent } from './temas/temas.component';
import { HomeComponent } from './home/home.component';
import { VideoJuegoService } from './services/videojuego.service';
import { ExternComponent } from './extern/extern.component';
import { CalculadoraPipe } from './pipe/calculadora.pipe';
import { CalculadoraComponent } from './calculadora/calculadora.component';
import { ContactoComponent } from './contacto/contacto.component';

@NgModule({
  declarations: [
    AppComponent,
    VideojuegoComponent,
    ColorComponent,
    TemasComponent,
    HomeComponent,
    ExternComponent,
    CalculadoraPipe,
    CalculadoraComponent,
    ContactoComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    routing
  ],
  providers: [
    appRoutingProviders,
    VideoJuegoService
  ],
  bootstrap: [AppComponent]
})
export class AppModule {
}

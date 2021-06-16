import { ModuleWithProviders} from '@angular/core'
import {Routes, RouterModule} from '@angular/router'
import {VideojuegoComponent} from './videojuego/videojuego.component'
import {ColorComponent} from './colores/colores.component'
import {TemasComponent} from './temas/temas.component'
import {HomeComponent} from './home/home.component'
import {ExternComponent} from './extern/extern.component'
import {CalculadoraComponent} from './calculadora/calculadora.component'
import {ContactoComponent} from './contacto/contacto.component'

const appRoutes: Routes = [
    {path:'',component:HomeComponent},
    {path:'color',component:ColorComponent},
    {path:'videojuego',component:VideojuegoComponent},
    {path:'temas',component:TemasComponent},
    {path:'temas/:titulo',component:TemasComponent},
    {path:'extern',component:ExternComponent},
    {path:'calculadora',component:CalculadoraComponent},
    {path:'contacto',component:ContactoComponent},
    {path:'**' , component:HomeComponent},
];
export const appRoutingProviders: any [] = [];
export const routing: ModuleWithProviders<any> = RouterModule.forRoot(appRoutes);
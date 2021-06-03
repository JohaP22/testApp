import {Component} from '@angular/core';
@Component({
    selector:'color',
    templateUrl:'./colores.component.html'
})
export class ColorComponent {
    public title:string;
    constructor(){
        this.title="Colores recomendados";
    }
}
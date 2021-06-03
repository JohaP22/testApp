import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { from } from 'rxjs';
import { Configuration } from '../models/configuration';
import {Videogame} from '../models/videogame'
@Component({
    selector:'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public title: string;
    public lista_videos: Array<Videogame>;
    public gender_game:string;
    public aditional_game:string;
    constructor(){
        this.title = Configuration.title; 
        this.gender_game = 'Cars';       
        this.aditional_game = '';       
        this.lista_videos = [
            new Videogame(0,'GTA',5,'Cars'),
            new Videogame(1,'MineCraft',2,'Architecture'),
            new Videogame(2,'Mario Bross',4,'Competitive'),
            new Videogame(3,'Test',0,'Labs'),
        ];
        console.log(this.lista_videos);
        console.log('Inicia el constructor')
    }
    ngOnInit(){
        console.log('cargo el componente, gracias a Dios');
    }
    ngDoCheck(){
        console.log('Estoy comprobando cuando se hace un cambio');
    }
    changeTitle(){
        this.title = "Componente de VideoJuegos"
    }
    addVideo(){
        let index:number = this.lista_videos.length;
        this.lista_videos.push(new Videogame(index,this.aditional_game,0,'Cars'))
    }
    removeVideo(index:number){
        this.lista_videos.splice(index,1)
    }
    ngOnDestroy(){
        console.log('Se elimino el componente')
    }
}
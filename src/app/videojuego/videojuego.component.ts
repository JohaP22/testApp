import { Component, OnInit, DoCheck, OnDestroy } from '@angular/core';
import { from } from 'rxjs';
import { Configuration } from '../models/configuration';
import {Videogame} from '../models/videogame';
import {VideoJuegoService} from '../services/videojuego.service'
@Component({
    selector:'videojuego',
    templateUrl: './videojuego.component.html'
})
export class VideojuegoComponent implements OnInit, DoCheck, OnDestroy {
    public title: string;
    public lista_videos: Array<Videogame>;
    public gender_game:string;
    public aditional_game:string;
    constructor(
        private _videoService: VideoJuegoService
    ){
        this.title = Configuration.title; 
        this.gender_game = 'Cars';       
        this.aditional_game = '';       
        this.lista_videos = [];       
        console.log('Inicia el constructor')
    }
    ngOnInit(){
        this.lista_videos = this._videoService.getVideogames();
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
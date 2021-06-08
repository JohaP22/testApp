import {Injectable} from '@angular/core'
import {Videogame} from '../models/videogame'
@Injectable()
export class VideoJuegoService{
    public videogames:Array<Videogame>;
    constructor(){
        this.videogames= [
            new Videogame(0,'GTA',5,'Cars'),
            new Videogame(1,'MineCraft',2,'Architecture'),
            new Videogame(2,'Mario Bross',4,'Competitive'),
            new Videogame(3,'Test',0,'Labs'),
        ];
    }
    getTexto(){
        console.log('Te digo Hola, desde un servicio Gracias a Dios')
    }
    getVideogames():Array<Videogame>{
        return this.videogames;
    }
}
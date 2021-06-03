import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'testApp';
  public videojuegos_show:boolean;
  constructor(){
    this.videojuegos_show = true;
  }
  showVideo(){
    this.videojuegos_show = true;
  }
  hideVideo(){
    this.videojuegos_show = false;

  }
}

import { Component, OnInit } from '@angular/core';
import { PeticionesService } from '../services/peticiones.service'
@Component({
  selector: 'app-extern',
  templateUrl: './extern.component.html',
  styleUrls: ['./extern.component.css'],
  providers: [PeticionesService]
})
export class ExternComponent implements OnInit {
  public user: any;
  public userId:any;
  constructor(
    private _peticionServ: PeticionesService
  ) {
    this.userId =1;
  }

  ngOnInit() {
    this.findUser();
  }
  findUser(){
    this.user= false;
    this._peticionServ.getUser(this.userId).subscribe(
      result => {
        this.user = result.data;
      },
      error => {
        console.log(<any>error)
      }
    );
  }
}

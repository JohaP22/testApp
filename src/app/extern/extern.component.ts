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
  public fecha:any;
  public new_user: any;
  constructor(
    private _peticionServ: PeticionesService
  ) {
    this.userId =1;
    this.new_user={
      "name": "",
      "job": ""
    }
  }

  ngOnInit() {
    this.findUser();
    this.fecha = new Date();
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
  newUsers(form:any){
    this._peticionServ.createUser(this.new_user).subscribe(
      response=>{
        console.log(response)
      },
      error=>{
        console.log(error)
      }
      )
      form.reset();
  }
}

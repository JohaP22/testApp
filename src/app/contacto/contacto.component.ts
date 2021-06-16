import { Component, OnInit } from '@angular/core';
import {user} from '../models/user'

@Component({
  selector: 'app-contacto',
  templateUrl: './contacto.component.html',
  styleUrls: ['./contacto.component.css']
})
export class ContactoComponent implements OnInit {
  public usuario:user;
  constructor() { 
    this.usuario = new user('','','','')
  }

  ngOnInit(){
  }
  onSubmit(form: any){
    form.reset();
  }
}

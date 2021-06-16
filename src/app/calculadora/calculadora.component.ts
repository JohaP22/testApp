import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-calculadora',
  templateUrl: './calculadora.component.html',
  styleUrls: ['./calculadora.component.css']
})
export class CalculadoraComponent implements OnInit {
  public numero:any;
  constructor() { 
  }

  ngOnInit(){
  }
  calculate(numero:Number){
    this.numero = numero;
  }
}

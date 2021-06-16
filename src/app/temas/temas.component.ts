import { Component, OnInit } from '@angular/core';
import { Router, ActivatedRoute, Params } from '@angular/router';

@Component({
  selector: 'temas',
  templateUrl: './temas.component.html',
  styleUrls: ['./temas.component.css']
})
export class TemasComponent implements OnInit {
  public title: string = "";
  constructor(
    private _route: ActivatedRoute,
    private _router: Router
  ) {
  }
  ngOnInit() {
    this._route.params.subscribe((params: Params) => {
      this.title = params.titulo;
    })
  }
  redirect() {
    this._router.navigate(['/color'])
  }
}

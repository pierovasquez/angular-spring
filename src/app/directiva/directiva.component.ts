import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-directiva',
  templateUrl: './directiva.component.html',
  styleUrls: ['./directiva.component.scss']
})
export class DirectivaComponent implements OnInit {

  public listaCurso: string[] = ['TypeScript', 'Javascript', 'Java SE', 'C#', 'PHP'];

  public habilitar: boolean = true;

  constructor() { }

  ngOnInit() {
  }

  changeHabilitar() {
    this.habilitar = !this.habilitar;
  }
}

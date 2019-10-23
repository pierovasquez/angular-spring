import { Component, OnInit } from '@angular/core';

export interface Author {
  name?: string;
  surname?: string;
}

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {

  public author: Author = {name: 'Piero', surname: 'Vasquez'};

  constructor() { }

  ngOnInit() {
  }

}

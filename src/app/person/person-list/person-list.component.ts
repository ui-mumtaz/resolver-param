import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'person-list',
  templateUrl: './person-list.component.html'
})
export class PersonListComponent implements OnInit {
  persons: any;
  constructor() { }

  ngOnInit() {
    this.persons = [
      {"code": "001", "Name": "Mumtaz"},
      {"code": "002", "Name": "Sami"},
      {"code": "003", "Name": "Wasi"}
    ]
  }

}

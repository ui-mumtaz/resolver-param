import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'company-list',
  templateUrl: './company-list.component.html'
})
export class CompanyListComponent implements OnInit {
  companys: any;
  constructor() { }

  ngOnInit() {
    this.companys = [
      {"code": "001", "Name": "HCL"},
      {"code": "002", "Name": "TCS"},
      {"code": "003", "Name": "Nokia"}
    ]
  }

}

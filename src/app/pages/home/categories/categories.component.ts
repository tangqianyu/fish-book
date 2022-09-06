import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-categories',
  templateUrl: './categories.component.html',
  styleUrls: ['./categories.component.less']
})
export class CategorysComponent implements OnInit {
  categories = [];
  constructor() { }

  ngOnInit() {
  }

}

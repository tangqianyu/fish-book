import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.less']
})
export class TagsComponent implements OnInit {
  tags = [
    {
      name: 'Default',
      color: ''
    },
    {
      name: 'Red',
      color: 'red'
    },
    {
      name: 'Orange',
      color: 'orange'
    },
    {
      name: 'Yellow',
      color: 'yellow'
    },
    {
      name: 'Green',
      color: 'green'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

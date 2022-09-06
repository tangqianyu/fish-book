import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-tags',
  templateUrl: './tags.component.html',
  styleUrls: ['./tags.component.less']
})
export class TagsComponent implements OnInit {
  tags = [
    {
      name: 'Default'
    },
    {
      name: 'Red'
    },
    {
      name: 'Orange'
    },
    {
      name: 'Yellow'
    },
    {
      name: 'Green'
    }
  ];
  constructor() { }

  ngOnInit() {
  }

}

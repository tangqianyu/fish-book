import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'page-header',
  templateUrl: './page-header.component.html',
  styleUrls: ['./page-header.component.less']
})
export class PageHeaderComponent implements OnInit {
  @Input() title!: string;

  constructor() { }

  ngOnInit() {
  }

}

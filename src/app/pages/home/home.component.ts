import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../../core/services';
// import { NzSiderComponent } from "ng-zorro-antd/layout";
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  menus: Menu[] = [
    {
      text: 'PAGES.HOME.MENU.POST_LIST',
      icon: 'book',
      link: 'post-list',
    },
    {
      text: 'PAGES.HOME.MENU.TAGS',
      icon: 'tags',
      link: 'tags',
    },
    {
      text: 'PAGES.HOME.MENU.CATEGORIES',
      icon: 'bars',
      link: 'categorys',
    },

    {
      text: 'PAGES.HOME.MENU.SETTING',
      icon: 'setting',
      link: 'setting',
    }
  ];

  constructor(
    private electronService: ElectronService,
    private router: Router
  ) {
  }

  ngOnInit() {
    this.electronService.setNormalSize();
  }

  create() {
    this.router.navigate(['home/post-create']);
  }


}

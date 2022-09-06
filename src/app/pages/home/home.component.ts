import { Component, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { NzIconService } from 'ng-zorro-antd/icon';
import { AppSettings } from '../../appSettings';
import { ElectronService } from '../../core/services';
// import { NzSiderComponent } from "ng-zorro-antd/layout";
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {
  appSettings= AppSettings;
  menus: Menu[] = [
    {
      text: 'PAGES.HOME.MENU.POST_LIST',
      icon: 'icon-post',
      link: 'post-list',
    },
    // {
    //   text: 'PAGES.HOME.MENU.TAGS',
    //   icon: 'tags',
    //   link: 'tags',
    // },
    {
      text: 'PAGES.HOME.MENU.CATEGORIES',
      icon: 'icon-libary',
      link: 'categories',
    },
    {
      text: 'PAGES.HOME.MENU.DRAFTS',
      icon: 'file',
      link: 'drafts',
    },

    {
      text: 'PAGES.HOME.MENU.SETTING',
      icon: 'setting',
      link: 'setting',
    }
  ];

  constructor(
    private electronService: ElectronService,
    private router: Router,
    private iconService: NzIconService
  ) {
    this.iconService.fetchFromIconfont({
      scriptUrl: this.appSettings.iconfontUrl
    });
  }

  ngOnInit() {
    this.electronService.setNormalSize();
  }

  create() {
    this.router.navigate(['home/post-create']);
  }


}

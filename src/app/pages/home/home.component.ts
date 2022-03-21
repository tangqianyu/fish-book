import { Component, OnInit, ViewChild } from '@angular/core';
import { NzSiderComponent } from "ng-zorro-antd/layout";
import { Menu } from '../../models/menu.model';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.less']
})
export class HomeComponent implements OnInit {

  isCollapsed = false;
  menus: Menu[] = [
    {
      text: 'PAGES.HOME.MENU.POST_LIST',
      icon: 'book',
      link: 'post-list',
    },
    {
      text: 'PAGES.HOME.MENU.POST_CREATE',
      icon: 'edit',
      link: 'post-create',
    },

    {
      text: 'PAGES.HOME.MENU.SETTING',
      icon: 'setting',
      link: 'setting',
    }
  ]

  @ViewChild('slider') sliderRef!: NzSiderComponent


  constructor() {
  }

  ngOnInit() {

  }

  ngAfterViewInit() {
    setTimeout(() => {
      this.setCollapsedWidth();
    }, 0)
    window.addEventListener("resize", () => {
      this.setCollapsedWidth();
    });
  }

  setCollapsedWidth() {
    if (document.documentElement.clientWidth <= 767) {
      this.isCollapsed = true;
      this.sliderRef.nzCollapsedWidth = 0;
    } else {
      this.sliderRef.nzCollapsedWidth = 80;
    }
  }


  handleTriggerClick() {
    this.isCollapsed = !this.isCollapsed;
  }

}

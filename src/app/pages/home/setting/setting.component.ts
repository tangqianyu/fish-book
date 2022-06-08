import { Component, OnInit, TemplateRef } from '@angular/core';
import { Router } from '@angular/router';
import { TranslateService } from '@ngx-translate/core';
import { en_US, zh_CN, NzI18nService } from 'ng-zorro-antd/i18n';

@Component({
  selector: 'app-setting',
  templateUrl: './setting.component.html',
  styleUrls: ['./setting.component.less']
})
export class SettingComponent implements OnInit {
  language!: string;
  proxyEnable = false;
  proxyAddress = '';
  imageHostingEnable = false;
  imageHostingAddress = '';
  accessToken = '';


  constructor(
    private router: Router,
    private translate: TranslateService,
    private i18n: NzI18nService,
  ) { }

  ngOnInit() {
    this.language = this.translate.getDefaultLang();
  }

  changeLang(val: string) {
    this.translate.setDefaultLang(val);
    switch (val) {
      case 'en_US':
        this.i18n.setLocale(en_US);
        break;
      case 'zh_CN':
        this.i18n.setLocale(zh_CN);
        break;
      default:
        return en_US;
    }

  }

  save() {

  }


}

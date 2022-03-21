import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

import { WebviewDirective } from './directives/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, ReactiveFormsModule, SHARED_ZORRO_MODULES]
})
export class SharedModule { }

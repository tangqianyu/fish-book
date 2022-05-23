import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TranslateModule } from '@ngx-translate/core';
import { SHARED_ZORRO_MODULES } from './shared-zorro.module';

import { WebviewDirective } from './directives/';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { EditorModule } from '@tinymce/tinymce-angular';

@NgModule({
  declarations: [WebviewDirective],
  imports: [CommonModule, TranslateModule, FormsModule, ReactiveFormsModule, SHARED_ZORRO_MODULES, EditorModule],
  exports: [TranslateModule, WebviewDirective, FormsModule, ReactiveFormsModule,EditorModule, SHARED_ZORRO_MODULES]
})
export class SharedModule { }

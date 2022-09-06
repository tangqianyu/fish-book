import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { HomeComponent } from './home.component';
import { SharedModule } from '../../shared/shared.module';
import { HomeRoutingModule } from './home-routing.module';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostWriteComponent } from './post/post-write/post-write.component';
import { HeaderUserComponent, PageHeaderComponent } from './components';
import { SettingComponent } from './setting/setting.component';
import { TagsComponent } from './tags/tags.component';
import { CategorysComponent } from './categories/categories.component';

@NgModule({
  declarations: [
    HomeComponent,
    PostListComponent,
    PostWriteComponent,
    TagsComponent,
    CategorysComponent,
    SettingComponent,
    HeaderUserComponent,
    PageHeaderComponent
  ],
  imports: [CommonModule, SharedModule, HomeRoutingModule],
})
export class HomeModule { }

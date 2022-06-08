import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostWriteComponent } from './post/post-write/post-write.component';
import { SettingComponent } from './setting/setting.component';
import { TagsComponent } from './tags/tags.component';
import { CategorysComponent } from './categorys/categorys.component';


const routes: Routes = [
  {
    path: 'home',
    component: HomeComponent,
    children: [
      {
        path: '',
        redirectTo: 'post-list',
        pathMatch: 'full'
      },
      {
        path: 'post-list',
        component: PostListComponent,
      },
      {
        path: 'tags',
        component: TagsComponent,
      },
      {
        path: 'categorys',
        component: CategorysComponent,
      },
      {
        path: 'post-create',
        component: PostWriteComponent,
        data: { type: 'create' }
      },
      {
        path: 'post-update',
        component: PostWriteComponent,
        data: { type: 'update' }
      },
      {
        path: 'setting',
        component: SettingComponent,
      }
    ]
  },
];

@NgModule({
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class HomeRoutingModule { }

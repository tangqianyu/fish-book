import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { HomeComponent } from './home.component';
import { PostListComponent } from './post/post-list/post-list.component';
import { PostWriteComponent } from './post/post-write/post-write.component';
import { SettingComponent } from './setting/setting.component';


const routes: Routes = [
  {
    path: '',
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

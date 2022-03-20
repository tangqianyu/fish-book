import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Routes, RouterModule } from '@angular/router';
import { PostListComponent } from './post-list/post-list.component';


const routes: Routes = [
  {
    path: 'post-list',
    component: PostListComponent
  },
  {
    path: 'post-create',
    component: PostListComponent,
    data: { type: 'create' }
  },
  {
    path: 'post-update',
    component: PostListComponent,
    data: { type: 'update' }
  }
];

@NgModule({
  declarations: [],
  imports: [CommonModule, RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class PostRoutingModule { }

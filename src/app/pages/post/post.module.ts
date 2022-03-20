import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { PostRoutingModule } from './post-routing.module';
import { PostListComponent } from './post-list/post-list.component';
import { PostWriteComponent } from './post-write/post-write.component';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [PostListComponent, PostWriteComponent],
  imports: [CommonModule, SharedModule, PostRoutingModule],
})
export class PostModule { }

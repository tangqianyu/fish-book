import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { AuthRoutingModule } from './pages/auth/auth-routing.module';
import { PostModule } from './pages/post/post.module';




const routes: Routes = [
  {
    path: '',
    redirectTo: 'post-list',
    pathMatch: 'full'
  }
];

@NgModule({
  imports: [
    RouterModule.forRoot(routes, { relativeLinkResolution: 'legacy' }),
    AuthRoutingModule,
    PostModule
  ],
  exports: [RouterModule]
})
export class AppRoutingModule { }

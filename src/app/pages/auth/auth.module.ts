import { NgModule } from '@angular/core';
import { LoginComponent } from './login/login.component';
import { AuthRoutingModule } from './auth-routing.module';
import { CommonModule } from '@angular/common';
import { SharedModule } from '../../shared/shared.module';


@NgModule({
  declarations: [LoginComponent],
  imports: [CommonModule,SharedModule, AuthRoutingModule],
  exports: [],
  providers: [],
})
export class AuthModule {}

import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {


  constructor(
    private router: Router
  ) {

  }

  ngOnInit() {
  }

  submit() {


  }

}

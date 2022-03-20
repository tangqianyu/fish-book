import { Component, OnInit } from '@angular/core';
import { FormBuilder, Validators, FormGroup } from '@angular/forms';
import { Router } from '@angular/router';

@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit {
  form: FormGroup


  constructor(
    fb: FormBuilder,
    private router: Router
  ) {
    this.form = fb.group({
      account: [null, Validators.required],
      password: [null, Validators.required],
    });
  }

  ngOnInit() {
  }

  submit() {


  }

}

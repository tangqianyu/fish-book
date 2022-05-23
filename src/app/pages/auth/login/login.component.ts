import { AfterViewInit, Component, ElementRef, OnInit, ViewChild } from '@angular/core';
import { Router } from '@angular/router';
import { ElectronService } from '../../../core/services';


@Component({
  selector: 'admin-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.less']
})
export class LoginComponent implements OnInit, AfterViewInit {
  constructor(
    private router: Router,
    private electronService: ElectronService
  ) {

  }

  ngOnInit() {
    this.setPageSize();
  }

  ngAfterViewInit(): void {
    this.setPageSize();
  }

  setPageSize() {
    this.electronService.setAuthSize();
  }

  skip() {
    this.router.navigate(['/home']);
  }

}

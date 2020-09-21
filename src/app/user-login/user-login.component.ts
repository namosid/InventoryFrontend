import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { IUsesr } from '../inventory-edit/inventory-edit.component';
import { ProductApiService } from "../shared/product-api.service";
import * as alertify from 'alertifyjs'
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-user-login',
  templateUrl: './user-login.component.html',
  styleUrls: ['./user-login.component.css']
})
export class UserLoginComponent implements OnInit {
  user: IUsesr ={} as IUsesr;
  status={};

  constructor(
    public productApi: ProductApiService,
    public router: Router
  ) { }

  ngOnInit() {
  }

  onLogin(loginForm: NgForm) {
    return this.productApi.getUser(this.user.loginId,this.user.password).subscribe((data: {}) => {
      this.status = data;
      this.router.navigate(['/inventory-list'])
    })
  }
}

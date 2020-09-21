import { Component, OnInit, Input } from '@angular/core';
import { Router } from '@angular/router';
import { ProductApiService } from "../shared/product-api.service";
import { Location } from '@angular/common';

@Component({
  selector: 'app-inventory-create',
  templateUrl: './inventory-create.component.html',
  styleUrls: ['./inventory-create.component.css']
})
export class InventoryCreateComponent implements OnInit {

 
  @Input() productDetails = {productName: '',price: 0, quantity: 0 , createdDate:null, modifiedBy:''}

  constructor(
    public restApi: ProductApiService, 
    public router: Router,
    private _location: Location
  ) { }

  ngOnInit() { }

  addProduct(dataProduct) {
    this.restApi.createProduct(this.productDetails).subscribe((data: {}) => {
      this.router.navigate(['/inventory-list'])
    })
  }

  backClicked() {
    this._location.back();
  }

}

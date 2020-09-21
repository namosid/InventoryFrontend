import { Component, OnInit } from '@angular/core';
import { ProductApiService } from "../shared/product-api.service";
import { ActivatedRoute, Router } from '@angular/router';
import { Location } from '@angular/common';

@Component({
  selector: 'app-inventory-edit',
  templateUrl: './inventory-edit.component.html',
  styleUrls: ['./inventory-edit.component.css']
})
export class InventoryEditComponent implements OnInit {

  id = this.actRoute.snapshot.params['id'];
  productData: IProduct ;

  constructor(
    public restApi: ProductApiService,
    public actRoute: ActivatedRoute,
    public router: Router,
    private _location: Location
  ) { 
  }

  ngOnInit() { 
    this.restApi.getProduct(this.id).subscribe((data) => {
      debugger
      this.productData = {} as IProduct;
      this.productData = data ;
    })
  }

  // Update employee data
  updateProduct() {
    if(window.confirm('Are you sure, you want to update?')){
      debugger;
      this.restApi.updateProduct(this.id, this.productData).subscribe(data => {
        this.router.navigate(['/inventory-list'])
      })
    }
  }

  backClicked() {
    this._location.back();
  }
}

export interface IProduct{
   productId:number;        
      productName:String;
        price:number;
        quantity:number;
         createdDate:string;
        modifiedBy:string;
}

export interface IUsesr{
  loginId:string;
  password:string;
}

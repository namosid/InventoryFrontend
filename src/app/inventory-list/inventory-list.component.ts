import { Component, OnInit } from '@angular/core';
import { ProductApiService } from "../shared/product-api.service";

@Component({
  selector: 'app-inventory-list',
  templateUrl: './inventory-list.component.html',
  styleUrls: ['./inventory-list.component.css']
})
export class InventoryListComponent implements OnInit {
  Products: any = [];

  constructor(
    public productApi: ProductApiService
  ) { }

  ngOnInit() {
    this.loadProducts()
  }

  // Get employees list
  loadProducts() {
    return this.productApi.getProducts().subscribe((data: {}) => {
      this.Products = data;
    })
  }
}

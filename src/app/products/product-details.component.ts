import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ActivatedRoute, Router } from '@angular/router';
import { ProductService } from './product.service';

@Component({
  templateUrl: './product-details.component.html',
  styleUrls: ['./product-details.component.css']
})

export class ProductDetailsComponent implements OnInit {
  //fields
  pageTitle: string = "Product Detail";
  product: IProduct;

  //constructor
  constructor(private _route: ActivatedRoute,
    private _router: Router,
    private _productService: ProductService) { }

  //methods
  ngOnInit() {
    // + converts string id to int id
    let id = +this._route.snapshot.paramMap.get("id");
    this._productService.getProduct(id).subscribe(p => this.product = p);
  }

  onBack(): void {
    this._router.navigate(["/products"]);
  }
}

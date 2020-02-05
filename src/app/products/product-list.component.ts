import { Component, OnInit } from '@angular/core';
import { IProduct } from './product';
import { ProductService } from './product.service';

@Component({
    templateUrl: "./product-list.component.html",
    styleUrls: ["./product-list.component.css"]
})

export class ProductListComponent implements OnInit {

    //fields
    pageTitle: string = "Product List Page";
    showImages: boolean = false;
    filteredProducts: IProduct[] = [];
    _productFilter: string;
    products: IProduct[] = [];
    errorMessage: string;

    //constructor
    constructor(private _productService: ProductService) { }

    //getter/setter
    get productFilter(): string {
        return this._productFilter;
    }

    set productFilter(filter: string) {
        this._productFilter = filter;
        this.filteredProducts = this.productFilter ? this.performFilter(this.productFilter) : this.products;
    }

    //methods
    performFilter(filter: string): IProduct[] {
        filter = filter.toLocaleLowerCase();
        return this.products.filter(
            (p: IProduct) => p.productName.toLocaleLowerCase().indexOf(filter) !== -1);
    }

    toggleImages(): void {
        this.showImages = !this.showImages;
    }

    ngOnInit(): void {
        console.log("In OnInit.");
        this._productService.getProducts()
            .subscribe(products => {
                this.products = products;
                this.filteredProducts = this.products;
            },
                error => this.errorMessage = <any>error
            );
    }

    onRatingClicked(message: string): void {
        this.pageTitle = "Product List: " + message;
    }
}
import { Injectable } from '@angular/core';
import { HttpClient, HttpErrorResponse } from '@angular/common/http';
import { Observable, throwError } from 'rxjs';
import { catchError, tap, map } from 'rxjs/operators';

import { IProduct } from './product';

@Injectable()

export class ProductService {
    //fields
    private _productUrl: string = "./api/products/products.json";

    //constructor
    constructor(private _http: HttpClient) { }

    //methods
    getProducts(): Observable<IProduct[]> {
        return this._http.get<IProduct[]>(this._productUrl)
            .pipe(
                tap(data => console.log("All: " + JSON.stringify(data))),
                catchError(this.handleError)
            );
    }

    getProduct(id: number): Observable<IProduct> {
        return this.getProducts()
            .pipe(map((products: IProduct[]) => products.find(p => p.productId === id)));
            // === checks type and equality
    }

    private handleError(err: HttpErrorResponse) {
        let errorMessage = "";

        if (err.error instanceof ErrorEvent) {
            errorMessage = `An error occured: ${err.error.message}`;
        }
        else {
            errorMessage = `Server returned code: ${err.status}, error message is ${err.message}`;
        }

        console.log(errorMessage);
        return throwError(errorMessage);
    }
}
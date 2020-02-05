import { Injectable } from '@angular/core';
import { CanActivate, ActivatedRouteSnapshot, Router } from '@angular/router';

@Injectable({
  providedIn: 'root'
})

export class ProductGuardService implements CanActivate {
  //constructor
  constructor(private _router: Router) { }

  //methods
  canActivate(route: ActivatedRouteSnapshot): any {
    let id = +route.url[1].path;

    if (isNaN(id) || id < 1) {
      alert("Invalid product id");
      this._router.navigate(["/products"]);
      return false;
    }

    return true;
  }
}

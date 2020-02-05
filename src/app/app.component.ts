import { Component } from '@angular/core';

@Component({
  selector: "pm-root",
  template: `
    <div>
      <nav class="navbar navbar-light bg-light border">
        <a class="navbar-brand" href="#">{{pageTitle}}</a>
        <div class="mr-auto">
          <ul class="nav">
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/welcome']">Home</a>
            </li>
            <li class="nav-item">
              <a class="nav-link" [routerLink]="['/products']">Products</a>
            </li>
          </ul>
        </div>
      </nav>
    </div>
    <div class="container-fluid">
      <router-outlet></router-outlet>
    </div>
  `
})

export class AppComponent {
  pageTitle: string = "My Angular Application";
}
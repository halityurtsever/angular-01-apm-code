import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

import { SharedModule } from '../shared/shared.module';

import { ProductListComponent } from './product-list.component';
import { ProductDetailsComponent } from './product-details.component';
import { ConvertToSpacesPipe } from '../shared/convert-to-space.pipe';
import { ProductGuardService } from './product-guard.service';
import { ProductService } from './product.service';


@NgModule({
  declarations: [
    ProductListComponent,
    ProductDetailsComponent,
    ConvertToSpacesPipe,
  ],

  imports: [
    RouterModule.forChild([
      { path: "products", component: ProductListComponent },
      { path: "product/:id", canActivate: [ProductGuardService], component: ProductDetailsComponent }
    ]),
    SharedModule
  ],

  providers: [ProductService, ProductGuardService]
})
export class ProductModule { }

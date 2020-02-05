import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';
import { RouterModule } from '@angular/router';

import { ProductModule } from './products/product.module';

import { AppComponent } from './app.component';
import { WelcomeComponent } from './home/welcome.component';

//refers to root Angular module
@NgModule({
  //which of our components belongs to this module
  declarations: [
    AppComponent,
    WelcomeComponent
  ],

  //external modules that we want to have it available
  //they could be Angular, third party or our own Angular modules
  imports: [
    BrowserModule,
    HttpClientModule,
    RouterModule.forRoot([
      { path: "welcome", component: WelcomeComponent },
      { path: "", redirectTo: "welcome", pathMatch: "full" },
      { path: "**", redirectTo: "welcome", pathMatch: "full" /*component: PageNotFountComponent*/ }
    ]),
    ProductModule
  ],

  //defines the startup component of the application
  bootstrap: [AppComponent]
})

export class AppModule { }

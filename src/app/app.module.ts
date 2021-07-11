import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { ProductListComponent } from './product-list/product-list.component';
import { MiniCartComponent } from './mini-cart/mini-cart.component';

@NgModule({
  declarations: [
    AppComponent,
    ProductListComponent,
    MiniCartComponent
  ],
  imports: [
    BrowserModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

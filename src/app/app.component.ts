import { Component } from '@angular/core';
import { IProduct } from './models/product';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  totalCount = 0;
  products: IProduct[] = [
    {
      id: "I123",
      title: "Iphone8",
      description: "This is iphone8",
      price: 100,
      imgUrl: "https://www.shopwish.in/wp-content/uploads/2021/01/iphone-9.png"
  },
  {
      id: 'sam123',
      title: "Samsung s20",
      description: "This is samsung s20",
      price: 200,
      imgUrl: "https://images-na.ssl-images-amazon.com/images/I/81vDZyJQ-4L._SL1500_.jpg"
  }
  ]
  cart:any = {};
  onItemAddToCart(product: IProduct){
    this.cart[product.id]=this.cart[product.id]||0;
    this.cart[product.id]++;
    this.totalCount= Object.values(this.cart).reduce((acc:any, curr:any) => acc + curr) as number;
  }
}

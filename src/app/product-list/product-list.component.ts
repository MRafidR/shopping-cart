import { Component, OnInit, Input, Output, EventEmitter} from '@angular/core';
import { IProduct } from '../models/product';

@Component({
  selector: 'app-product-list',
  templateUrl: './product-list.component.html',
  styleUrls: ['./product-list.component.css']
})
export class ProductListComponent implements OnInit {
  @Input()
  list: IProduct [] = [];

  @Output()
  onAddToCart: EventEmitter<IProduct>= new EventEmitter();

 

  constructor() { }

  ngOnInit(): void {
  }
  onBtnClick(product:IProduct){
    this.onAddToCart.emit(product);

  }

}

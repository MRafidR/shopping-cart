import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-mini-cart',
  templateUrl: './mini-cart.component.html',
  styleUrls: ['./mini-cart.component.css']
})
export class MiniCartComponent implements OnInit {
  @Input()
  cartCount:number= 0;

  constructor() { }

  ngOnInit(): void {
  }

}

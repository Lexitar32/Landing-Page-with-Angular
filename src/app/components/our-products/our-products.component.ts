import { Component, OnInit } from '@angular/core';
import { products } from '../../templates/index'

@Component({
  selector: 'app-our-products',
  templateUrl: './our-products.component.html',
  styleUrls: ['./our-products.component.css']
})
export class OurProductsComponent implements OnInit {

  productList = products;

  constructor() { }

  ngOnInit(): void {
  }

}

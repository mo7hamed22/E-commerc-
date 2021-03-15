import { Component, OnInit } from '@angular/core';
import { ProductService } from '../services/product.service';
import { IProduct } from '../shared classes and types/interfaceProduct';

@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.scss']
})
export class HomeComponent implements OnInit {
products:IProduct[]=[];
  constructor(private productService:ProductService) { }

  ngOnInit(): void {
this.products=this.productService.GetAllProducts();
  }

}

import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { IProduct } from '../shared classes and types/interfaceProduct';
import { ICategory } from '../shared classes and types/interfaceCategory';
import { DiscountOffers } from '../shared classes and types/enums';
import { ProductService } from '../services/product.service';
import { ActivatedRoute, Router } from '@angular/router';


@Component({
  selector: 'app-products',
  templateUrl: './products.component.html',
  styleUrls: ['./products.component.scss']
})
export class ProductsComponent implements OnInit {
  
 @Output() allproductsfromChild =new EventEmitter()



  discount: DiscountOffers;
  storeName: string;
  storeLogo: string;
  productList: IProduct[];
  categoryList: ICategory[];
  clientName: string;
  isPurchased: boolean;
  
  name="";
  // constructor(discount:DiscountOffers,storName:string,storeLogo:string
  //   ,productList:IProduct[],categoryList:ICategory[],clientName:string,
  //   isPurchased:boolean
  //   ) 
  
  style_obj={
    color:"green",
    fontStyle:"italic"
  }
 

  constructor(private productService:ProductService,
    private route:Router,private activeRouter:ActivatedRoute)
     {

    this.discount = DiscountOffers.value2;
    this.storeLogo = "";
    this.storeName = "productStore";
    this.categoryList = [
      {
        ID: 1,
        categoryName: "Category1"
      },
      {
        ID: 2,
        categoryName: "Category2"
      },
      {
        ID: 2,
        categoryName: "Category3"
      },
      {
        ID: 2,
        categoryName: "Category4"
      }


    ];
  
    this.productList = this.productService.GetAllProducts();
    this.clientName = "Mohamed";
    this.isPurchased = false;

  }
  discountEnum=DiscountOffers;



  ngOnInit(): void {
    
  }
  //MSG="";
  displayTable()
    {
      
      this.isPurchased=!this.isPurchased;
      
    }

    sendProducts(){
      this.allproductsfromChild.emit(this.productList);
    }
    goToProductsWithDiscount(){
      this.route.navigate(['discount'],
      {relativeTo:this.activeRouter}) 

    }
    goToProductsWithoutDiscount(){
      this.route.navigate(['withoutDiscount'],
      {relativeTo:this.activeRouter}) 
    }

}

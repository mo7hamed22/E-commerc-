import { Injectable } from '@angular/core';
import { DiscountOffers } from '../shared classes and types/enums';
import { IProduct } from '../shared classes and types/interfaceProduct';
import { ProductService } from './product.service';

@Injectable({
  providedIn: 'root'
})
export class DiscountserviceService {
  enumData=DiscountOffers ;
  

products:IProduct[]=[];
noDiscountProducts:IProduct[]=[];
  constructor(private productService:ProductService) { 
  }
  withDiscount():IProduct[]{
 this.productService.
    GetAllProducts().filter(pro=>{
     if(pro.discount==true)
     this.products.push(pro)

    })

return this.products ;

  }
    withoutDiscount():IProduct[]{
      this.productService.
      GetAllProducts().filter(pro=>{
       if(pro.discount!=true)
      { this.noDiscountProducts.push(pro)}
  
      })
  
  return this.noDiscountProducts ;
    }
      


  }





import { Injectable } from '@angular/core';
import { IProduct } from '../shared classes and types/interfaceProduct';

@Injectable({
  providedIn: 'root'
})
export class ProductService {
allProducts:IProduct[] =[
  {
    ID: 1,
    name: "Product1",
    Quantity: 1,
    Price: 22,
    img:"../../assets/img/img3.jpg",
    discount:true
  },
  {
    ID: 2,
    name: "Product2",
    Quantity: 3,
    Price: 44,
    img: "../../assets/img/img2.jpg",
    discount:true

  },
  {
    ID:4,
    name: "Product3",
    Quantity:5,
    Price:88,
    img:"../../assets/img/img3.jpg",
    discount:false

  },
  {
    ID:5,
    name: "Product5",
    Quantity:5,
    Price:90,
    img:"../../assets/img/img3.jpg",
    discount:false

  }

]
  constructor() { }
  GetAllProducts(){
    return this.allProducts;
  
}
GetProductById(productId:number)
{
  if(isNaN (productId))
    {return null} 
    
let productVal  
=this.allProducts.
find(product=>product.ID===productId)
if(productVal)
{
return productVal
}
else return null;
}
}

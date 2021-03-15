import { Component, OnInit } from '@angular/core';
import { DiscountserviceService } from '../services/discountservice.service';
import { IProduct } from '../shared classes and types/interfaceProduct';

@Component({
  selector: 'app-with-discount',
  templateUrl: './with-discount.component.html',
  styleUrls: ['./with-discount.component.scss']
})
export class WithDiscountComponent implements OnInit {
  productHaveDiscount:IProduct[]=[];
  constructor(private discounService:DiscountserviceService) { }

  ngOnInit(): void {
    this.productHaveDiscount=this.discounService.withDiscount();

    console.log(this.productHaveDiscount)
  } 

}

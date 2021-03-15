import { Component, OnInit } from '@angular/core';
import { DiscountserviceService } from '../services/discountservice.service';
import { IProduct } from '../shared classes and types/interfaceProduct';

@Component({
  selector: 'app-without-discount',
  templateUrl: './without-discount.component.html',
  styleUrls: ['./without-discount.component.scss']
})
export class WithoutDiscountComponent implements OnInit {
  productHaveNOtDiscount:IProduct[]=[];

  constructor(private discounService:DiscountserviceService) { }

  ngOnInit(): void {
    this.productHaveNOtDiscount=this.discounService.withoutDiscount();

  }

}

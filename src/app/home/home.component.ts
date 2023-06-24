import { Component, OnInit } from '@angular/core';
import { ProductServiceService } from '../product-service.service';
import { Products } from '../products';


@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent implements OnInit {

  products: Products[];

  constructor(private prodService: ProductServiceService) { }

  ngOnInit(): void {
    this.products = this.prodService.getProduct();
  }

}

import { Injectable } from '@angular/core';
import { Products } from './products';

@Injectable({
  providedIn: 'root'
})
export class ProductServiceService {

productList: Products[] =[
  {name: "Dinner Package", price: 60, imgUrl: "/assets/images/vegetables-2203300_1920.jpg"},
  {name: "Fresh Green Pepper", price: 10, imgUrl: "/assets/images/paprika-1539491_1920.jpg"},
  {name: "Fresh Green Apples", price: 10, imgUrl: "/assets/images/apple-1532055_1920.jpg"},
  {name: "Basket of Carrot", price: 60, imgUrl: "/assets/images/carrots-673184_1920.jpg"}
];


getProduct(){
  return this.productList;
}

  constructor() { }
}

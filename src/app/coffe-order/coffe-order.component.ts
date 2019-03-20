import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-coffe-order',
  templateUrl: './coffe-order.component.html',
  styleUrls: ['./coffe-order.component.css']
})
export class CofferOrderComponent implements OnInit {

  totalPrice = 0;
  coffMap;
  orders = [];
  coffees = [];


  constructor() { this.init(); }

  ngOnInit() {
  }

  addToBasket(coffeeType) {

    if(coffeeType === 'Latte'){
      this.orders.push({
        coffeeType,
        price: 21
      });
      this.totalPrice += 21; 
    } else {
      this.orders.push({
        coffeeType,
        price: this.coffMap[this.jsLcfirst(coffeeType)]
      });
      this.totalPrice += this.coffMap[this.jsLcfirst(coffeeType)];
    }
 
  }

  removeFromBasket(i) {
    this.totalPrice -= this.coffMap[this.jsLcfirst(this.orders[i].coffeeType)];
    this.orders.splice(i, 1);
  }

  buy() {
    alert('Have a good one!');
    this.totalPrice = 0;
    this.orders.length = 0;
  }

  init() {
    this.coffMap = {
      americano: 10,
      white: 15,
      chaitea: 16,
      latte: 12,
    }
    this.initCoffes();
  }

  initCoffes() {
    for (let coffeeType in this.coffMap) {
      this.coffees.push({
        coffeeType: this.jsUcfirst(coffeeType),
        price: this.coffMap[coffeeType],
        id: this.getRandomInt(10, 20),
      })
    }
    // this.coffees.sort((a, b) => a.id - b.id);
  }

  getRandomInt(min, max) {
    min = Math.ceil(min);
    max = Math.floor(max);
    return Math.floor(Math.random() * (max - min + 1)) + min;
  }

  jsUcfirst(string) {
    return string.charAt(0).toUpperCase() + string.slice(1);
  }

  jsLcfirst(string) {
    return string.charAt(0).toLowerCase() + string.slice(1);
  }



}

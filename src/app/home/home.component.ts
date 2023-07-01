import { Component, OnInit } from '@angular/core';
import { FoodService } from '../services/food/food.service';
import { Foods } from '../shared/models/food';
import { CartService } from '../services/cart.service';
import { Router } from '@angular/router';
@Component({
  selector: 'app-home',
  templateUrl: './home.component.html',
  styleUrls: ['./home.component.css']
})
export class HomeComponent {
  private counter=0;
  foodForCart!:Foods;
  foods:Foods[]=[];
  constructor(private fs:FoodService, private cartService:CartService,
   private router:Router ){}

  ngOnInit():void{
    this.foods=this.fs.getAll(); // shows all food in home
  }

  addToCart(){
    this.cartService.addToCart(this.foods[this.counter++]);
    window.alert('Your product has been added to the cart!');
    this.router.navigateByUrl('/cart-page')
    // console.log('ADD TO CART CLICKED!')
  }
}

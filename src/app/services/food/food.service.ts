import { Injectable } from '@angular/core';
import { Foods } from 'src/app/shared/models/food';
@Injectable({
  providedIn: 'root'
})
export class FoodService {

  constructor() { }

  getAll():Foods[]{
    return [
      // '/assets/afgani-murg-seekh-kabab.jpg',
      // '/assets/chicken_Relevance_PDP_Chicken_Breast_470_X_320_PDP_(1).jpg',
      // '/assets/chicken_Relevance_PDP_Chicken_Curry_Cut_Small)_470_X_320_PDP_(1).jpg',
      // '/assets/rohu.jpg',
      // '/assets/egg.jpg'
      
      //Now adding data of food
      {
        id:1, 
        price:269,
        name:'afgani-murg-seekh-kabab',
        favourite:false,
        star:4.4,
        tags:['chicken', 'ready-to-cook'],
        imageUrl:'/assets/afgani-murg-seekh-kabab.jpg',
        pieces:4,
        weight:4,
        cookTime:'5-7 mins',
        origins:['afgan'],
        delDay:"Tomorrow",
        delTime:"6 AM - 8 AM"
      },
      {
        id:2, 
        price:269,
        name:'Chicken Breast',
        favourite:false,
        star:4.4,
        tags:['chicken'],
        imageUrl:'/assets/chicken_Relevance_PDP_Chicken_Breast_470_X_320_PDP_(1).jpg',
        pieces:4,
        weight:4,
        cookTime:'5-7 mins',
        origins:['afgan'],
        delDay:"Tomorrow",
        delTime:"6 AM - 8 AM"
      },
      {
        id:3, 
        price:269,
        name:'Chicken Cut Small',
        favourite:false,
        star:4.4,
        tags:['chicken'],
        imageUrl:'/assets/chicken_Relevance_PDP_Chicken_Curry_Cut_Small)_470_X_320_PDP_(1).jpg',
        pieces:4,
        weight:4,
        cookTime:'5-7 mins',
        origins:['afgan'],
        delDay:"Tomorrow",
        delTime:"6 AM - 8 AM"
      },
      {
        id:4, 
        price:269,
        name:'Rohu Fish',
        favourite:false,
        star:4.4,
        tags:['fish'],
        imageUrl:'/assets/rohu.jpg',
        pieces:4,
        weight:4,
        cookTime:'5-7 mins',
        origins:['afgan'],
        delDay:"Tomorrow",
        delTime:"6 AM - 8 AM"
      },
    
    ]
  }
}

// this file will contain the details of the card
export class Foods{
    id!:number; // if ! is not used then we have to make a costructor
    price!:number;
    name!:string;
    favourite:boolean=false;
    star:number=0;
    tags?:string[];
    imageUrl!:string;
    pieces!:number;
    weight!:number;
    cookTime!:string;
    origins!:string[];
    delDay!:string;
    delTime!:string;
}
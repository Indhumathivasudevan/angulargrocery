import Category from "./Category";



export default class Products{
    
    constructor(public productId:number,public productName:string,public cost:number,public discount:number,
        public description:string,public rating:number,public image:string){

        }
}
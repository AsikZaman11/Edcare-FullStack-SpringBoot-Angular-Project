import { Component, OnInit } from '@angular/core';
import { ApiService } from '../api.service';
import { CartService } from '../cart.service';


@Component({
  selector: 'app-product',
  templateUrl: './product.component.html',
  styleUrls: ['./product.component.css']
})
export class ProductComponent implements OnInit {
  public productList: any;
  public filterCatagory: any;
  searchkey:string="";
  addtocartmsg:any;
  constructor(private api:ApiService, private cartService: CartService) { }

  ngOnInit(): void {
    this.api.getProduct().subscribe(res=>{
      this.productList = res;
      this.filterCatagory = res;
      this.productList.forEach((a:any)=>{
        if(a.catagory ==='JSC'||a.catagory ==='SSC'||a.catagory ==='HSC'){
          a.catagory
         
        }
        Object.assign(a,{quantity:1,total:a.price});
      });
      console.log(this.productList);
      
    });
    this.cartService.search.subscribe((val:any)=>{
      this.searchkey = val;
    })
  }
addToCart(item: any){
  if(confirm('Added Successfuly'))
this.cartService.addToCart(item)
this.addtocartmsg='';
 this.addtocartmsg='Buy any 2 to get 5% Off';
}
filter(catagory:string){
this.filterCatagory = this.productList.filter((a:any)=>{
  if(a.catagory==catagory||catagory==''){
    return a;
  }
})
}
}

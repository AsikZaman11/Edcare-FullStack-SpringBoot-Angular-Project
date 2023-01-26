import { Component, OnInit } from '@angular/core';
import { CartService } from '../cart.service';

@Component({
  selector: 'app-cart',
  templateUrl: './cart.component.html',
  styleUrls: ['./cart.component.css']
})
export class CartComponent implements OnInit {
  public product : any =[];
  public grandTotal!: number;
  constructor(private cartservice:CartService) { }

  ngOnInit(): void {
    this.cartservice.getProduct().subscribe(res=>{
      this.product = res;
      this.grandTotal = this.cartservice.getTotalPrice();
    })
  }
  removeItem(item:any){
    if(confirm('Are you sure ?'))
    this.cartservice.removeCartItem(item);
    // alert('Deleted Sucessfully')
  }
  emptyCart(){
    this.cartservice.removeAll();
  }
}

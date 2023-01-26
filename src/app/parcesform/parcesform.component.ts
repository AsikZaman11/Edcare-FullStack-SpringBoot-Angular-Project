import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { CartService } from '../component/cart.service';
import { Cupon } from '../cupon/cupon';

@Component({
  selector: 'app-parcesform',
  templateUrl: './parcesform.component.html',
  styleUrls: ['./parcesform.component.css']
})
export class ParcesformComponent implements OnInit {
  userDemo:any;
  
  user  = new Cupon('')

  constructor(private http:HttpClient, private cart:CartService) { }

  ngOnDestroy(): void {
    clearInterval(this.display)
  }

  ngOnInit(): void {
  }

  display:any;


  genCupon(){
    this.http.get("http://localhost:8080api/cp/cupon/"+this.user.cuponid).subscribe((data)=>{
      this.userDemo = data;
      console.log(this.userDemo);
     });


     this.display = setInterval(()=>{
      if (this.user.cuponid == this.userDemo.cuponid) {
        
      }
    
     }, 500);
     
    //  clearInterval(this.display)
  }



  gt:number=this.cart.getTotalPrice()+(this.cart.getTotalPrice()*0.05)
 
total?:any;
token?:any;
quantity?:any;
quantityOff?:string=''
discount?:any;
discountResult?:any;
final?:any;
t:string='';
netprice:any;
m:any;
successmsg:string='';
hell:string='';

genCup(){
  this.http.get("http://localhost:8080/api/cp/cupon/"+this.user.cuponid).subscribe((data)=>{
    this.userDemo = data;
    if(this.userDemo==null){
      confirm('Cupon doesnot match?')
    }
    console.log(this.userDemo);
   });


   this.display = setInterval(()=>{
    if (this.user.cuponid == this.userDemo.cuponid) {
      this.hell="hello"
      this.discount = this.user.cuponid.match(/\d+/g); 
      this.discountResult = parseInt(this.discount[0]);
    }
  
   }, 500);
   
  //  clearInterval(this.display)
}





dis(){


if(this.quantity>1){
this.final=this.gt-((this.gt*0.05)+(this.gt*(this.discountResult/100)))
this.t=''
this.t='Discount for cupon is '+this.discountResult+' %'
this.quantityOff=''
this.quantityOff='5 % discount for avobe 2 pices'

}
else{
this.final=this.gt-(this.gt*(this.discountResult/100))
this.t=''
this.t='Discount for cupon is TK '+this.discountResult+' %' 
this.quantityOff=''

}



}

onProductCreate(products:{name:string, mobile:string, address:string, productName:string, cls:string, date:string, productQantity:number, total:number}){
console.log(products);
this.http.post('http://localhost:8080/api/pp/fromsave', products).subscribe((res)=>{
// console.log(res);
this.successmsg="Parches Successfull"
})
}



}

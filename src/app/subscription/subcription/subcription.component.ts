import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-subcription',
  templateUrl: './subcription.component.html',
  styleUrls: ['./subcription.component.css']
})
export class SubcriptionComponent implements OnInit {

  constructor(private http:HttpClient) { }

  ngOnInit(): void {
  }

  total?:any;
  week?:any;
  perweek?:any;
  due?:any;
  quantity:any;
  msg:any;
  spackage:any;
  cAll:any;
  subs1(){
    this.quantity=1;
    this.week=4
    this.total=10000
    this.spackage='S1'
    this.cAll='ALL'
    this.perweek=this.total/this.week
    this.due=this.total-this.perweek
    this.msg=''
    
  }
  subs2(){
    this.quantity=1;
    this.week=8
    this.total=8000
    this.spackage='S2'
    this.cAll='ALL'
    this.perweek=this.total/this.week
    this.due=this.total-this.perweek
    this.msg=''
    
  }

  onProductCreate(products:{name:string, mobile:string, address:string,  cls:string, date:string, productQantity:number, total:number}){
    console.log(products);
    this.http.post('http://localhost:8080/api/pp/fromsave', products).subscribe((res)=>{
    // console.log(res);
    this.msg='Subscribtion Complete'
    })
    }
}

import { HttpClient } from '@angular/common/http';
import { Component, OnDestroy, OnInit } from '@angular/core';
import { ActivatedRoute, Route, Router } from '@angular/router';
import { User } from '../model/user';
import { User1 } from '../user-model/user1';
import { User2 } from '../user-model/user2';

@Component({
  selector: 'app-genpass',
  templateUrl: './genpass.component.html',
  styleUrls: ['./genpass.component.css']
})
export class GenpassComponent implements OnInit, OnDestroy {
  userDemo:any;
  
  user  = new User("", "");

  user1  = new User1("", "", "");
  user2  = new User2("", "", "", "");

  msg:any;
  msg2:any;
  constructor(private http:HttpClient,private router: Router) { }

  ngOnDestroy(): void {
    clearInterval(this.display)
  }

  ngOnInit(): void {
    
  }
  

 display:any;

  genPass(){
    console.log(this.user2);
    
    this.http.get("http://localhost:8080/user/parses/password/"+this.user.email).subscribe((data)=>{
      this.userDemo = data;
      console.log(this.userDemo);
     });


     this.display = setInterval(()=>{
      if (this.user.password == this.userDemo.password) {
        this.router.navigate(['course']);
      }
      if (this.user.password != this.userDemo.password) {
        this.msg=''
        this.msg='Does not match !'
      }
    
     }, 500);
     
  }

  genPassSub(){
    this.http.get("http://localhost:8080/user/parses/password/"+this.user1.email).subscribe((data)=>{
      this.userDemo = data;
      if(this.userDemo==null){
        confirm('Doesnot match?')
      }
      console.log(this.userDemo);
      
     });

     
     this.display = setInterval(()=>{
      if (this.user1.password == this.userDemo.password && this.user1.cls == 'S1') {
       
        this.router.navigate(['course1']);
      }
      // if (this.user1.password == this.userDemo.password && this.user1.cls == this.userDemo.cls) {
      else  if (this.user1.password == this.userDemo.password && this.user1.cls == 'S2') {
          
          this.router.navigate(['course2']);
      }
      else if (this.user1.password != this.userDemo.password) {
        // confirm('Cupon doesnot match?')

        this.msg2=''
        this.msg2='Does not match !'
      }
      
     }, 500);

  }

  genPassPac(){
    console.log(this.user2);
    
    this.http.get("http://localhost:8080/user/pacparses/password/"+this.user2.email).subscribe((data)=>{
      this.userDemo = data;
      if(this.userDemo==null){
        confirm('Doesnot match?')
      }
      console.log(this.userDemo);
      
     });

     alert('Login Successful')
     this.display = setInterval(()=>{
      if (this.user2.password == this.userDemo.password && this.user2.cls == 'JSC' && this.user2.sub == 'BANGLA') {
        
        this.router.navigate(['course3']);
        console.log('Cor1');
        
      }
      else if (this.user2.password == this.userDemo.password && this.user2.cls == 'JSC' && this.user2.sub == 'ENGLISH') {
       
        this.router.navigate(['course4']);
        console.log('Cor2');
      }
      else if (this.user2.password == this.userDemo.password && this.user2.cls == this.userDemo.cls && this.user2.sub == 'BANGLA') {
        
        this.router.navigate(['course']);
        console.log('Cor2');
      }
      else if (this.user2.password == this.userDemo.password && this.user2.cls == this.userDemo.cls && this.user2.sub == this.userDemo.sub) {
        
        this.router.navigate(['course5']);
        console.log('Cor2');
      }
     
      else if (this.user2.password != this.userDemo.password) {
        // confirm('Doesnot match?')

        this.msg=''
        this.msg='Does not match !'
       
      }

  
      
     }, 500);

  }


}

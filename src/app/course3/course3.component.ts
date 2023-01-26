import { Component, OnInit } from '@angular/core';
import { ApiService } from '../component/api.service';

@Component({
  selector: 'app-course3',
  templateUrl: './course3.component.html',
  styleUrls: ['./course3.component.css']
})
export class Course3Component implements OnInit {
  public moduleList:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getCourseModule().subscribe(res=>{
      this.moduleList = res;
    })
  }

}

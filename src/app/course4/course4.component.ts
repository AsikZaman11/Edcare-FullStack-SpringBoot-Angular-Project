import { Component, OnInit } from '@angular/core';
import { ApiService } from '../component/api.service';

@Component({
  selector: 'app-course4',
  templateUrl: './course4.component.html',
  styleUrls: ['./course4.component.css']
})
export class Course4Component implements OnInit {
  public moduleList:any;
  constructor(private api:ApiService) { }

  ngOnInit(): void {
    this.api.getCourseModule().subscribe(res=>{
      this.moduleList = res;
    })
  }

}

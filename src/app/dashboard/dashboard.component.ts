import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { StudentRequestService } from '../student-request.service';
import { Student } from '../Student';

@Component({
  selector: 'app-dashboard',
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.css']
})
export class DashboardComponent implements OnInit {

  student;
  allStudents:Array<Student>;
  show:boolean;
  constructor(public activeRouter: ActivatedRoute,public studentService:StudentRequestService) {
    this.activeRouter.queryParams.subscribe(params => {
      this.student = JSON.parse(params['student']);
    });
  }

  ngOnInit(): void {
  }

  showStudents(){
    this.studentService.getAllStudents().subscribe(students=>{
      this.allStudents = students;
      console.log(this.allStudents);
      this.show = true;
    });
  }

  hideStudents(){
    this.show = false;
  }

}

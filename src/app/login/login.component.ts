import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentRequestService } from '../student-request.service';
import { Student } from '../Student';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  fail = false;
  constructor(private router:Router,private studentService:StudentRequestService) { }

  ngOnInit(): void {
  }

  login(loginForm){
    console.log(loginForm);
    this.studentService.loginStudent(loginForm).subscribe(student=>{
      if(student){
        if(student.email == loginForm.email && student.password == loginForm.password){
          this.router.navigate(['/dashboard'],{ queryParams: { 'student': JSON.stringify(student) }, skipLocationChange: true });
        }else{
          this.fail = true;
        }
      }else{
        this.fail = true;
      }
    })
  }

}

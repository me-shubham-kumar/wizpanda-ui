import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';
import { StudentRequestService } from '../student-request.service';

@Component({
  selector: 'app-register',
  templateUrl: './register.component.html',
  styleUrls: ['./register.component.css']
})
export class RegisterComponent implements OnInit {

  error = false;
  constructor(private router:Router,private studentService:StudentRequestService) { }

  ngOnInit(): void {
  }

  register(registerForm){
    console.log(registerForm);
    this.studentService.registerStudent(registerForm).subscribe(student=>{
      if(student){
        this.router.navigate(['/dashboard'],{ queryParams: { 'student': JSON.stringify(student) }, skipLocationChange: true });
      }else{
        this.error = true;
      }
    })
  }
}

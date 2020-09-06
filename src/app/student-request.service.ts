import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class StudentRequestService {

  constructor(public httpClient:HttpClient) { }
  loginStudent(student:any):Observable<any>{
    console.log(student);
    return this.httpClient.post("http://localhost:8030/SpringMVCWithRestHibernateMaven/login",student,{responseType:'json'});
  }
  registerStudent(student):Observable<any>{
    return this.httpClient.post("http://localhost:8030/SpringMVCWithRestHibernateMaven/student/create/",student,{responseType:'json'});
  }
  getAllStudents():Observable<any>{
    return this.httpClient.get("http://localhost:8030/SpringMVCWithRestHibernateMaven/students/",{responseType:'json'});
  }
}

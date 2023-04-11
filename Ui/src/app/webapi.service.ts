import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';



@Injectable({
  providedIn: 'root'
})
export class WebapiService {
  url: any = "http://localhost:3000/request/"
  url2: any = "http://localhost:3000/donar/"
  url3: any = "http://localhost:3000/recipent/"
  url4: any = "http://localhost:3000/verified/"
  constructor(private http: HttpClient) { }
  PostDataD(emp: any) {
    debugger;
    return this.http.post(this.url , emp);
  }
  PostDataA(emp: any) {
    debugger;
    return this.http.post(this.url + "acceptorinsertdata", emp);
  }
  GetDataA(): Observable<any[]> {
    debugger;
    return this.http.get<any>(this.url3 + "getrecipent");
  }

  GetDataD(): Observable<any[]> {
    return this.http.get<any>(this.url2 + "getDonar");
  }
  GetDataAll(): Observable<any[]> {
    return this.http.get<any>(this.url + "getalldata");
  }
  Acceptbyid(data:any) {
    debugger;
    return this.http.get(this.url + "getbyidaccepter", data);
  }
  postVeriData(emp:any) {
    if (emp.DA == "Donar") {
      return this.http.post(this.url2 + "postDonar", emp);
    }
    else {
      return this.http.post(this.url3 + "postRecipent", emp);
    }
  }
  Getverified(): Observable<any[]> {
    return this.http.get<any>(this.url4 + "getverifieddata");
  }
  GetByEAP(post:any) {
    debugger
    return this.http.post(this.url + "login",post);
  }
  GetBloodDatadonor() {
    debugger
    return this.http.get(this.url + "getgraph");
  }
  getbyEmail(Email:any) {
    return this.http.get(this.url + "getbyEmail?Email=" + Email);
  }
  Postreq(obj:any) {
    debugger;
    return this.http.post(this.url + "reqlist", obj);
  }
  requetlist(): Observable<any[]> {
    return this.http.get<any>(this.url + "getAll");
  }
  delFromReqlist(obj:any) {
    console.log(obj);
    return this.http.post(this.url + "delete", obj);
  }
  GetHistory(): Observable<any[]> {
    return this.http.get<any>(this.url + "history");
  }
  getByCOokies(){
    debugger
    return this.http.get(this.url+ "userToken" )
  }

  //dashbord is here

getdashbord(){

  return this.http.get(this.url + "dashbord")
}
}


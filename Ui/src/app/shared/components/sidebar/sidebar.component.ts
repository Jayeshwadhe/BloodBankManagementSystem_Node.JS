import { Component, OnInit } from '@angular/core';
import { Router } from '@angular/router';

@Component({
  selector: 'app-sidebar',
  templateUrl: './sidebar.component.html',
  styleUrls: ['./sidebar.component.css']
})
export class SidebarComponent implements OnInit {
  role : any;

  constructor(private router: Router) { }

  ngOnInit(): void {

    this.role =sessionStorage['Role'];
    console.log(this.role);
    
  }

  goTo() {
    debugger
    this.router.navigate(['/Admin/dashboard'])
  }
  goTodonar(){
    this.router.navigate(['/Admin/donerlist'])
   
  }
  goToacceptor(){
    this.router.navigate(['/Admin/acceptorlist'])
  }
 gotoverifieddat(){
  this.router.navigate(['/Admin/verifieddata'])
 }
 gotohi(){
  this.router.navigate(["/Admin/history"])
 }
 gotoBlood(){
  this.router.navigate(['/Admin/blooddata'])
 }

 Requeted(){
  this.router.navigate(["/Admin/request"])
 }
}

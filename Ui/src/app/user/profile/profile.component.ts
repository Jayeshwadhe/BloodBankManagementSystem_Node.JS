import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-profile',
  templateUrl: './profile.component.html',
  styleUrls: ['./profile.component.css']
})
export class ProfileComponent implements OnInit {
  rec: any;
  arr1: any = [];
  arr2: any;
  reciptent: any;

  constructor(private route: ActivatedRoute) { }

  ngOnInit(): void {
    debugger;
    this.arr1 = new Array();
    this.arr1 = JSON.parse(sessionStorage.getItem("detail"));
    this.arr2 = this.arr1[0];
    console.log(this.arr1, 'dgfhjdsf')
    this.reciptent = this.arr1.DA
  }

}

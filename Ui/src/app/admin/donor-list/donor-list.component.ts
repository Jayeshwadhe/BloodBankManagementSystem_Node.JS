import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';
@Component({
  selector: 'app-donor-list',
  templateUrl: './donor-list.component.html',
  styleUrls: ['./donor-list.component.css']
})
export class DonorListComponent implements OnInit {
  Array1: any = [];
  constructor(private web:WebapiService) { }

  ngOnInit(): void {
    this.web.GetDataD().subscribe((rec) => {
      console.log(rec);
      this.Array1 = rec;
    });
    
}
Accept(list:any){
  debugger;
  this.web.postVeriData(list).subscribe((rec) => {
    console.log(rec);
    this.Array1 = rec;
  });
}
}

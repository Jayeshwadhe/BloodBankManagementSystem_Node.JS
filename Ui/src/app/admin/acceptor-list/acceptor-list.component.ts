import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';



@Component({
  selector: 'app-acceptor-list',
  templateUrl: './acceptor-list.component.html',
  styleUrls: ['./acceptor-list.component.css']
})

export class AcceptorListComponent implements OnInit {
  Array1: any = [];
  Array2: any = [];
  constructor(private web:WebapiService) { }

  ngOnInit(): void {
    this.web.GetDataA().subscribe((rec) => {
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

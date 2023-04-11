import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';

@Component({
  selector: 'app-history',
  templateUrl: './history.component.html',
  styleUrls: ['./history.component.css']
})
export class HistoryComponent implements OnInit {
  
  
  Array1: any=[];

  constructor(private web:WebapiService) { }

  ngOnInit(): void {
    this.web.GetHistory().subscribe((rec) => {
      console.log(rec);
      this.Array1 = rec;
    });
  }

}
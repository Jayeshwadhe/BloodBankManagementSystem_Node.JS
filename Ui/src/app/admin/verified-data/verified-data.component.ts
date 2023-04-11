import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';

@Component({
  selector: 'app-verified-data',
  templateUrl: './verified-data.component.html',
  styleUrls: ['./verified-data.component.css']
})
export class VerifiedDataComponent implements OnInit {
  Array1: any;

  constructor(private web:WebapiService) { }

  ngOnInit(): void {
    this.web.Getverified().subscribe((rec) => {
      console.log(rec);
      this.Array1 = rec;
    });
}
}
import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';

@Component({
  selector: 'app-request',
  templateUrl: './request.component.html',
  styleUrls: ['./request.component.css']
})
export class RequestComponent implements OnInit {
  Array1: any=[];

  constructor(private web:WebapiService) { }

  ngOnInit(): void {
    this.web.requetlist().subscribe((rec) => {
      console.log(rec);
      this.Array1 = rec;
    });
  }
  Accept(list:any){
    debugger;
    this.web.postVeriData(list).subscribe((res) => {
      console.log(res);
      this.Array1 = res;

    });
    var obj ={ ...list , isActive:true}
    console.log(obj);
       
    this.web.delFromReqlist(obj).subscribe((res: any) => {
      console.log(this.Array1.Id); 
      this.ngOnInit();   
     });
    
  }
  Delete(list:any){
    debugger
    console.log(list);
    var obj ={ ...list , isActive:false}
    this.web.delFromReqlist(obj).subscribe((res: any) => {
      console.log(this.Array1.Id);    
     });
  }

}

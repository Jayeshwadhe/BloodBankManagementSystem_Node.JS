import { Component, OnInit } from '@angular/core';
import { WebapiService } from 'src/app/webapi.service';

@Component({
  selector: 'app-blooddata',
  templateUrl: './blooddata.component.html',
  styleUrls: ['./blooddata.component.css']
})
export class BlooddataComponent implements OnInit {
  arryofrecipent: any = []
  arryofDonar:any =[]
  constructor(private web: WebapiService) { }

  ngOnInit(): void {

    this.getDashbord();
  }
  getDashbord() {
    this.web.getdashbord().subscribe((rec) => {
      this.arryofrecipent = new Array()
      this.arryofDonar = new Array()

      console.log(rec);
      
      this.arryofrecipent =rec['bloodAccepter']
      this.arryofDonar =rec['bloodDonar']
      // console.log(this.arry );
    });
  }
}

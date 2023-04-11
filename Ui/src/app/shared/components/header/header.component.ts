import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebapiService } from 'src/app/webapi.service';
// import { Router } from '@angular/router';
interface blood {

}
@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.css']
})

export class HeaderComponent implements OnInit {
  Array1: Object;
  reqbloodvalue: FormGroup;
  Bloods: blood[] = [
    { value: 'A+', viewValue: 'A+' },
    { value: 'A-', viewValue: 'A-' },
    { value: 'B+', viewValue: 'B+' },
    { value: 'B-', viewValue: 'B-' },
    { value: 'o+', viewValue: 'o+' },
    { value: 'o-', viewValue: 'o-' },
    { value: 'AB+', viewValue: 'AB+' },
    { value: 'AB+', viewValue: 'AB+' },
  ];
  role: any;
  constructor(private web: WebapiService,
    private formbuilder: FormBuilder,
    private router: Router) { }

  ngOnInit(): void {
    this.reqbloodvalue = this.formbuilder.group({
      Name: new FormControl('', [Validators.required, Validators.email]),
      father_name: new FormControl('', [Validators.required, Validators.required]),
      email: new FormControl('', [Validators.required, Validators.required]),
      number: new FormControl('', [Validators.required, Validators.required]),
      address: new FormControl('', [Validators.required, Validators.required]),
      blood_g: new FormControl('', [Validators.required, Validators.required]),
      date: new FormControl('', [Validators.required, Validators.required]),
      password: "1234",
      DA: "recipent",
      age: new FormControl('', [Validators.required, Validators.required]),
      amount: new FormControl('', [Validators.required, Validators.required])
    })

    this.role = sessionStorage['Role'];
    console.log(this.role);
  }
  reqblood(value) {
    debugger;
    var err = this.web.PostDataD(value).subscribe((rec) => {
      console.log(rec);
      this.Array1 = rec;
      alert('Blood amount is available , Your pass word is 123')
    },
      (err) => {
        console.log(err.error.message);
        alert(err.error.message)
      })


  }
  role2() {
    debugger;
    this.role = null;
    sessionStorage['Role'] = this.role
  }
  cookies() {
    debugger;
    this.web.getByCOokies().subscribe((res) => {
      debugger;
      console.log(res);

    })
  }
}

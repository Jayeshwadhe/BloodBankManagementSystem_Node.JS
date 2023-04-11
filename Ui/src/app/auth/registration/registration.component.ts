
import { Component, OnInit, Input } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, FormGroupDirective, NgForm, Validators } from '@angular/forms';
import { ErrorStateMatcher } from '@angular/material/core';
import { Router } from '@angular/router';
import { WebapiService } from 'src/app/webapi.service';
import Swal from 'sweetalert2'


interface blood {
  value: string;
  viewValue: string;
}
interface db {
  value: string;
  viewValue: string;
}
@Component({
  selector: 'app-registration',
  templateUrl: './registration.component.html',
  styleUrls: ['./registration.component.css']
})

export class RegistrationComponent implements OnInit {

  // @Input() Name: any;
  // @Input() father_name: any;
  // @Input() email: any;
  // @Input() number: any;
  // @Input() address: any;
  // @Input() Blood: any;
  // @Input() date: any;
  // @Input() password:any;

  matcher = new MyErrorStateMatcher();
  Bloods: blood[] = [
    { value: 'A+', viewValue: 'A+' },
    { value: 'A-', viewValue: 'A-' },
    { value: 'B+', viewValue: 'B+' },
    { value: 'B-', viewValue: 'B-' },
    { value: 'O+', viewValue: 'O+' },
    { value: 'O-', viewValue: 'O-' },
    { value: 'AB+', viewValue: 'AB+' },
    { value: 'AB+', viewValue: 'AB+' },
  ];
  // db: db[] = [
  //   { value: 'Donar', viewValue: 'Donar' },
  //   { value: 'recipient', viewValue: 'Recipient' },

  // ];
  registrationForm: FormGroup;
  constructor(private web: WebapiService, private formbuilder: FormBuilder, private router: Router) { }
  ngOnInit(): void {

    this.registrationForm = this.formbuilder.group({
      Name: new FormControl('', [Validators.required, Validators.required]),
      father_name: new FormControl('', [Validators.required, Validators.required]),
      email: new FormControl('', [Validators.required, Validators.required]),
      number: new FormControl('', [Validators.required, Validators.required]),
      address: new FormControl('', [Validators.required, Validators.required]),
      blood_g: new FormControl('', [Validators.required, Validators.required]),
      date: new FormControl('', [Validators.required, Validators.required]),
      password: new FormControl('', [Validators.required, Validators.required]),
      DA: 'Donar',
      age: new FormControl('', [Validators.required, Validators.required]),
      amount: 200
    })
  }

  AddData(data) {
    debugger;

    console.log(this.registrationForm.value, data)
    // var obj = { "Name": this.nameFormControl, "father_name": this.fatherFormControl, "email": this.email1FormControl, "number": this.numberFormControl, "address": this.addressFormControl, "blood_g": this.blood_gFormControl, "date": this.dateFormControl, "password": this.passFormControl };
    if (this.registrationForm.value.DA == "Donar") {
      this.web.PostDataD(data).subscribe((res: any) => {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Your work has been saved',
          showConfirmButton: false,
          timer: 1500
        }),
          this.router.navigate([""])
      }, (err) => {
        console.log(err, '<===afshvgjasdfvg');
        
        alert(err.error.message[0])
      });
    }
    // if (this.registrationForm.value.DA == "recipient") {
    //   debugger;
    //   this.web.PostDataA(data).subscribe((res: any) => {
    //     Swal.fire({
    //       position: 'top-end',
    //       icon: 'success',
    //       title: 'Your work has been saved',
    //       showConfirmButton: false,
    //       timer: 1500
    //     })
    //     this.router.navigate([""])

    //   });
    // }

  }
}

export class MyErrorStateMatcher implements ErrorStateMatcher {
  isErrorState(control: FormControl | null, form: FormGroupDirective | NgForm | null): boolean {
    const isSubmitted = form && form.submitted;
    return !!(control && control.invalid && (control.dirty || control.touched || isSubmitted));
  }
}



export class InputErrorStateMatcherExample {
  emailFormControl = new FormControl('', [Validators.required, Validators.email]);
  nameFormControl = new FormControl('', [Validators.required, Validators.required]);
  matcher = new MyErrorStateMatcher();
}
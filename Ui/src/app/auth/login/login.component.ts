import { Component, OnInit } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';
import { Router } from '@angular/router';
import { WebapiService } from 'src/app/webapi.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {
  formGroup: FormGroup = new FormGroup({
    UserName: new FormControl(''),
    Password: new FormControl(''),
  });
  submitted: boolean = false;
  fieldTextType: boolean = false;
  Array1: any;
  username: any;
  password: any;

  constructor(private formBuilder: FormBuilder, private web: WebapiService,
    private router: Router) { }

  ngOnInit(): void {

    this.form();
    this.web.GetDataA().subscribe((rec) => {
      console.log(rec);
      this.Array1 = rec;
    });

  }
  form() {
    this.formGroup = this.formBuilder.group({
      'email': [null, Validators.required],
      'password': [null, Validators.required]
    });
  }
  get f() { return this.formGroup.controls; }
  login(post: any) {
    debugger;
    
    this.submitted = true;
    if (this.formGroup.invalid) {
      return;
    }
    console.log(post, "post");
    debugger;
    console.log(post.UserName, post.Password);
    this.username = post.UserName;
    this.password = post.Password;
    this.web.GetByEAP(post).subscribe((rec) => {
      console.log(rec, "ress");
      var existingEntries;
      if (existingEntries == null) existingEntries = [];
      existingEntries.push(rec);
      sessionStorage.setItem("detail", JSON.stringify(existingEntries));
      this.router.navigate(['/User/profile'])
    });
    if (post.email === 'admin@gmail.com' && post.password === 'Admin@123') {
      sessionStorage.setItem('Role', 'Admin');
      sessionStorage.setItem('username', post.UserName);
      this.router.navigate(['/Admin/request'])
    }
    else {
      sessionStorage.setItem('Role', 'User');
    }
  }
  toggleFieldTextType() {
    this.fieldTextType = !this.fieldTextType;
  }
}

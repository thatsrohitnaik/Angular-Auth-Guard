import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { Router } from '@angular/router';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  constructor(private form: FormBuilder,
    private router: Router,
    private authService: AuthService) { }

  ngOnInit(): void {
  }

  login = this.form.group({
    username: "",
    password: ""
  })

  onSubmit() {
    this.authService.authenticate(this.login.value)
    if(this.authService.isAuthorised){
      this.router.navigate(['/dashboard'])
    }
    else{
      this.router.navigate(['/login'])
    }
  }
}

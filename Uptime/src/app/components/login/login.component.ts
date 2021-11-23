import { Component, OnInit } from '@angular/core';
import { AuthService } from 'src/app/services/auth.service';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService) { }

  ngOnInit(): void {
  }

  ingresar(){
    console.log(this.user);
    const {email, password} = this.user;
    this.authService.login(email, password).then(res =>{
      console.log("Se registró el usuario: ", res);
    });
  }

  ingresarGoogle(){
    console.log(this.user);
    const {email, password} = this.user;
    this.authService.loginGoogle(email, password).then(res =>{
      console.log("Se registró el usuario: ", res);
    });
  }

}

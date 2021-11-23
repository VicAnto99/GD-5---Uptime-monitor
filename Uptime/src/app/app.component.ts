import { Component } from '@angular/core';
import { AuthService } from './services/auth.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {

  title = 'Uptime';

  user = {
    email: '',
    password: ''
  }

  constructor(private authService: AuthService){

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

  salir(){
    this.authService.logout();
  }

}

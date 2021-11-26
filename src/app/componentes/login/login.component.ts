import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../servicios/login.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-login',
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.css']
})
export class LoginComponent implements OnInit {

  email: string;
  password:string;

  constructor(private router:Router,
  private loginService: LoginService
  ) { }

  ngOnInit(): void {
    this.loginService.getAut().subscribe( auth =>{
      if(auth){
        this.router.navigate(['/']);
      }
    });
  }

  login(){
    this.loginService.login(this.email,this.password)
      .then( res => {
          this.router.navigate(['/']);
        }).catch(error => {
          Swal.fire({
            icon: 'error',
            title: 'Error...',
            text: 'Se produjo un error al iniciar sesion!',
            confirmButtonColor: 'red',
          })
        });
  }
}

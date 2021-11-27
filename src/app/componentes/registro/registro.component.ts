import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {LoginService} from "../../servicios/login.service";
import Swal from 'sweetalert2';

@Component({
  selector: 'app-registro',
  templateUrl: './registro.component.html',
  styleUrls: ['./registro.component.css']
})
export class RegistroComponent implements OnInit {

  email:string
  password:string

  constructor(private router:Router,
              private loginService: LoginService) { }

  ngOnInit(): void {
    this.loginService.getAut().subscribe( auth =>{
      if(auth){
        this.router.navigate(['/']);
      }
    });
  }

  registro(){
    this.loginService.registrarse(this.email,this.password).then(res => {
      this.router.navigate(['/']);
    }).catch( error => {
        Swal.fire({
          icon: 'error',
          title: 'Error...',
          text: 'Se produjo un error al registrar el Usuario!',
          confirmButtonColor: 'red',
        })
      });
  }
}

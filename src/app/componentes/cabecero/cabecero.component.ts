import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../servicios/login.service";
import {Router} from "@angular/router";
import {ConfiguracionService} from "../../servicios/configuracion.service";

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string | null;
  mostrarRegistro: boolean | undefined;

  constructor(private loginService:LoginService,
              private router:Router,
              private configuracionService:ConfiguracionService) { }

  ngOnInit(): void {
    this.loginService.getAut().subscribe(auth => {
        if(auth){
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
        }else{
          this.isLoggedIn = false;
        }
      });

    this.configuracionService.getConfiguracion().subscribe(
      (configuracion:any) => {
        this.mostrarRegistro = configuracion.permitirRegistro;
      });
  }

  logout(){
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    this.loginService.logout();
  }
}

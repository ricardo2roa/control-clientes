import { Component, OnInit } from '@angular/core';
import {LoginService} from "../../servicios/login.service";
import {Router} from "@angular/router";

@Component({
  selector: 'app-cabecero',
  templateUrl: './cabecero.component.html',
  styleUrls: ['./cabecero.component.css']
})
export class CabeceroComponent implements OnInit {

  isLoggedIn: boolean;
  loggedInUser: string | null;

  constructor(private loginService:LoginService,
              private router:Router) { }

  ngOnInit(): void {
    this.loginService.getAut().subscribe(auth => {
        if(auth){
          this.isLoggedIn = true;
          this.loggedInUser = auth.email;
        }else{
          this.isLoggedIn = false;
        }
      });
  }

  logout(){
    this.isLoggedIn = false;
    this.router.navigate(['/login']);
    this.loginService.logout();
  }
}

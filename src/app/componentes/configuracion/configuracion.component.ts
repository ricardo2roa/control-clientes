import { Component, OnInit } from '@angular/core';
import {Router} from "@angular/router";
import {ConfiguracionService} from "../../servicios/configuracion.service";
import {ConfiguracionModel} from "../../modelo/configuracion.model";

@Component({
  selector: 'app-configuracion',
  templateUrl: './configuracion.component.html',
  styleUrls: ['./configuracion.component.css']
})
export class ConfiguracionComponent implements OnInit {

  permitirRegistro:boolean | undefined = false;

  constructor(private router:Router,
              private configuracionServicio:ConfiguracionService) { }

  ngOnInit(): void {
    this.configuracionServicio.getConfiguracion().subscribe(
      (configuracion:any) =>{
          this.permitirRegistro = configuracion.permitirRegistro;
      });
  }

  guardar(){
    let configuracion = {permitirRegistro : this.permitirRegistro};
    this.configuracionServicio.modificarConfiguracion(configuracion);
    this.router.navigate(['/']);
  }
}

import {CanActivate, Router} from "@angular/router";
import {Injectable} from "@angular/core";
import {ConfiguracionService} from "../servicios/configuracion.service";
import {Observable} from "rxjs";
import {map} from "rxjs/operators";
import {ConfiguracionModel} from "../modelo/configuracion.model";

@Injectable()
export class confGuard implements CanActivate{

  constructor(private router:Router,
              private configuracionService:ConfiguracionService) {}

  canActivate(): Observable<boolean> {
    return this.configuracionService.getConfiguracion().pipe(
      map( (configuracion:ConfiguracionModel | undefined)=>{
        if(configuracion?.permitirRegistro){
          return true
        }else{
          this.router.navigate(['/login'])
          return false
        }
      })
    )
  }
}

import {Injectable} from "@angular/core";
import {AngularFireAuth} from "@angular/fire/compat/auth";
import {map} from "rxjs/operators";
import {resolve} from "@angular/compiler-cli/src/ngtsc/file_system";

@Injectable()
export class LoginService{
  constructor(private authService:AngularFireAuth) {}

  login(email:string,password:string){
    return new Promise((resolve, reject)=>{
      this.authService.signInWithEmailAndPassword(email,password)
        .then(datos => resolve(datos),
          error => reject(error)
        )
    })
  }

  getAut(){
    return this.authService.authState.pipe(
      map( auth => auth)
    );
  }

  logout(){
    this.authService.signOut();

    //auth.singOut();
  }
}

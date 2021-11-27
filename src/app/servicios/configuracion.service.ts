import {Injectable} from "@angular/core";
import {AngularFirestore, AngularFirestoreDocument} from "@angular/fire/compat/firestore";
import {ConfiguracionModel} from "../modelo/configuracion.model";
import {Observable} from "rxjs";
import {switchMap} from "rxjs/operators";

@Injectable()
export class ConfiguracionService{
    configuracionDoc: AngularFirestoreDocument<ConfiguracionModel>;
    configuracion: Observable<ConfiguracionModel | undefined>;

    //id Unico de la coleccion de configuracion
    id = "1";

    constructor(private db:AngularFirestore){}

    getConfiguracion():Observable<ConfiguracionModel | undefined>{
      this.configuracionDoc = this.db.doc<ConfiguracionModel>(`configuracion/${this.id}`);
      this.configuracion = this.configuracionDoc.valueChanges();

      return this.configuracion;
    }

    modificarConfiguracion(configuracion:ConfiguracionModel){
      this.configuracionDoc = this.db.doc<ConfiguracionModel>(`configuracion/${this.id}`);
      this.configuracionDoc.update(configuracion);
    }
}

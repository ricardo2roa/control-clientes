import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

//Modulos firestore
import {environment} from "../environments/environment";
import {AngularFireModule} from "@angular/fire/compat";
import {AngularFirestoreModule, SETTINGS} from "@angular/fire/compat/firestore";
import {AngularFireAuthModule} from "@angular/fire/compat/auth";
//fin de importaciones

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { CabeceroComponent } from './componentes/cabecero/cabecero.component';
import { TableroComponent } from './componentes/tablero/tablero.component';
import { ClientesComponent } from './componentes/clientes/clientes.component';
import { EditarClienteComponent } from './componentes/editar-cliente/editar-cliente.component';
import { LoginComponent } from './componentes/login/login.component';
import { RegistroComponent } from './componentes/registro/registro.component';
import { ConfiguracionComponent } from './componentes/configuracion/configuracion.component';
import { NoEncontradoComponent } from './componentes/no-encontrado/no-encontrado.component';
import { PiePaginaComponent } from './componentes/pie-pagina/pie-pagina.component';
import {FormsModule} from "@angular/forms";
import {ClienteService} from "./servicios/cliente.service";
import {LoginService} from "./servicios/login.service";
import {AuthGuard} from "./guardianes/auth.guard";
import {ConfiguracionService} from "./servicios/configuracion.service";
import {confGuard} from "./guardianes/conf.guard";


@NgModule({
  declarations: [
    AppComponent,
    CabeceroComponent,
    TableroComponent,
    ClientesComponent,
    EditarClienteComponent,
    LoginComponent,
    RegistroComponent,
    ConfiguracionComponent,
    NoEncontradoComponent,
    PiePaginaComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    AngularFireModule.initializeApp(environment.firestore,'control-clientes'),
    AngularFirestoreModule,
    AngularFireAuthModule,
  ],
  providers: [ClienteService,LoginService, AuthGuard, ConfiguracionService, ConfiguracionService, confGuard],
  bootstrap: [AppComponent]
})
export class AppModule { }

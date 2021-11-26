import {Component, ElementRef, OnInit, ViewChild} from '@angular/core';
import {ClienteService} from "../../servicios/cliente.service";
import {Cliente} from "../../modelo/cliente.model";
import Swal from 'sweetalert2';
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[] ;
  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
  };

  @ViewChild("clienteForm") clienteform:NgForm
  @ViewChild("botonCerrar") botonCerrar:ElementRef

  constructor(private clientesServicio: ClienteService){ }

  ngOnInit(): void {
    this.clientesServicio.getClientes().subscribe(clientes =>{
      this.clientes = clientes;
    });
  }

  getSaldoTotal():number{
    let saldoTotal: number=0;
    if(this.clientes){
      this.clientes.forEach(
        (cliente) =>{
          if(cliente.saldo){
            saldoTotal += cliente.saldo;
          }
        })
    }
    return saldoTotal;
  }

  agregar({value, valid}: NgForm){
    if(!valid){
      Swal.fire({
        icon: 'error',
        title: 'Error',
        text: 'Debe completar todos los campos!',
        /*footer: '<a href="">Why do I have this issue?</a>'*/
      })
    }else {
      //Agregar el nuevo cliente
      this.clientesServicio.agregarCliente(value)
      this.clienteform.resetForm();
      this.cerrarModal();
    }
  }

  private cerrarModal(){
    this.botonCerrar.nativeElement.click()
  }
}

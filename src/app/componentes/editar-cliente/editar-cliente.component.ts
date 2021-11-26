import { Component, OnInit } from '@angular/core';
import {Cliente} from "../../modelo/cliente.model";
import {ClienteService} from "../../servicios/cliente.service";
import Swal from 'sweetalert2';
import {ActivatedRoute, Router} from "@angular/router";
import {NgForm} from "@angular/forms";

@Component({
  selector: 'app-editar-cliente',
  templateUrl: './editar-cliente.component.html',
  styleUrls: ['./editar-cliente.component.css']
})
export class EditarClienteComponent implements OnInit {

  cliente: Cliente = {
    nombre: '',
    apellido: '',
    email: '',
    saldo: 0,
  } ;

  id:string;

  constructor(private clientesServicio: ClienteService,
              private router:Router,
              private route:ActivatedRoute
  ){ }

  ngOnInit(): void {
    this.id = this.route.snapshot.params["id"];
    this.clientesServicio.getCliente(this.id).subscribe( cliente =>{
      if(cliente != null){
        this.cliente = cliente;
      }
    });
  }

  guardar({value,valid}:NgForm){
    if(!valid){
      Swal.fire({
        icon: 'error',
        title: 'Error...',
        text: 'Por favor llena el formulario correctamente!',
        confirmButtonColor: 'red',
      });
    }else{
      value.id = this.id;
      //modificar el cliente
      this.clientesServicio.modificarCliente(value);
      this.router.navigate(['/']);
    }
  }
  eliminar(){
    Swal.fire({
      title: 'Estas seguro?',
      text: "Deseas eliminar este usuario!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#198754',
      cancelButtonColor: 'red',
      confirmButtonText: 'Eliminar',
      cancelButtonText: 'Cancelar'
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          position: 'top-end',
          icon: 'success',
          title: 'Se elimino correctamente',
          showConfirmButton: false,
          timer: 1500
        })
        this.clientesServicio.eliminarCliente(this.cliente);
        this.router.navigate(['/']);
      }
    });

  }
}

import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';

@Component({
  selector: 'app-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit {

  titulo;

  isDirty = false;

  title = 'guard';
  public cliente: Cliente = new Cliente();

  constructor() { }

  ngOnInit() {
  }

  createCliente(): void {
    console.log('clicked');
    console.log('cliente', this.cliente);
  }
}

import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../shared/clientes.service';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(
    private clientesService: ClientesService
  ) { }

  ngOnInit() {
    this.clientesService.getClientes()
    .subscribe(clientes => {
      this.clientes = clientes;
    });
  }

}

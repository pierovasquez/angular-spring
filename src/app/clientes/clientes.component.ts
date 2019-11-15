import { Component, OnInit } from '@angular/core';
import { Cliente } from '../models/cliente';
import { ClientesService } from '../shared/shared-services/clientes.service';

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
    this.getClientes();
    this.configureAgGrid();
  }

  private getClientes() {
    this.clientesService.getClientes()
      .subscribe(clientes => {
        this.clientes = clientes;
      });
  }

  private configureAgGrid() {
    
  }

}

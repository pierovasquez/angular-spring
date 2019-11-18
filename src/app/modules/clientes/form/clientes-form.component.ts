import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/shared-services/clientes.service';
import { Router } from '@angular/router';
import swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';

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

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private translateService: TranslateService
  ) { }

  ngOnInit() {
  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(cliente => {
      this.router.navigate(['/shell/clientes']);
      swal.fire(
        this.translateService.instant('services.clients.sweet-alert.new-client'),
        this.translateService.instant('services.clients.sweet-alert.create-success', { value: cliente.nombre }),
        'success'
        );
    });
  }
}

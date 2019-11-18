import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/shared-services/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';

@Component({
  selector: 'app-form',
  templateUrl: './clientes-form.component.html',
  styleUrls: ['./clientes-form.component.scss']
})
export class ClientesFormComponent implements OnInit, OnDestroy {

  titulo;
  isDirty = false;
  title = 'guard';

  public cliente: Cliente = new Cliente();

  private _ngUnsubscribe: Subject<any> = new Subject<any>();

  constructor(
    private clienteService: ClienteService,
    private router: Router,
    private translateService: TranslateService,
    private activatedRoute: ActivatedRoute
  ) { }

  ngOnInit() {
    this.checkIfClientAndLoadIt();
  }

  ngOnDestroy() {
    this._ngUnsubscribe.next();
    this._ngUnsubscribe.complete();
  }

  private checkIfClientAndLoadIt(): void {
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      takeUntil(this._ngUnsubscribe)
    ).subscribe(id => {
      if (id) {
        this.loadClient(+id);
      }
    });

  }
  private loadClient(id: number) {
    this.clienteService.getCliente(id).subscribe((cliente: Cliente) => this.cliente = cliente);
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

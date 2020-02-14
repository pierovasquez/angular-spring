import { Component, OnInit, OnDestroy } from '@angular/core';
import { Cliente } from 'src/app/shared/models/cliente';
import { ClienteService } from 'src/app/shared/shared-services/clientes.service';
import { Router, ActivatedRoute } from '@angular/router';
import swal from 'sweetalert2';
import { TranslateService } from '@ngx-translate/core';
import { map, takeUntil } from 'rxjs/operators';
import { Subject } from 'rxjs';
import { NgForm } from '@angular/forms';

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
  private _isEditing: boolean;

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

  console(form: NgForm) {
    console.log(form);

  }

  private checkIfClientAndLoadIt(): void {
    this.activatedRoute.paramMap.pipe(
      map(params => params.get('id')),
      takeUntil(this._ngUnsubscribe)
    ).subscribe(id => {
      if (id) {
        this.loadClient(+id);
        this._isEditing = true;
      } else {
        this._isEditing = false;
      }
    });

  }
  private loadClient(id: number) {
    this.clienteService.getCliente(id).subscribe((cliente: Cliente) => this.cliente = cliente);
    console.log('string', this.isEditing);
  }

  confirm() {
    swal.fire({
      title: this.isEditing
        ? this.translateService.instant('services.clients.sweet-alert.confirm.update-client-title')
        : this.translateService.instant('services.clients.sweet-alert.confirm.create-client-title'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: this.isEditing
        ? this.translateService.instant('services.clients.sweet-alert.confirm.update-client-confirm')
        : this.translateService.instant('services.clients.sweet-alert.confirm.create-client-confirm'),
      cancelButtonColor: '#d33',
      cancelButtonText: this.translateService.instant('services.clients.sweet-alert.confirm.cancel')
    }).then(result => {
      if (result.value) {
        this.isEditing ? this.updateCliente() : this.createCliente();
      }
    });
  }

  createCliente(): void {
    this.clienteService.create(this.cliente).subscribe(cliente => {
      this.router.navigate(['/shell/clientes']);
      swal.fire(
        this.translateService.instant('services.clients.sweet-alert.new-client'),
        this.translateService.instant('services.clients.sweet-alert.create-success', { value: cliente.nombre }),
        'success'
      );
    },
      (error) => swal.fire(
        this.translateService.instant('services.clients.sweet-alert.error.create'),
        `${error.error.message}`, 'error'));
  }

  updateCliente(): void {
    this.clienteService.update(this.cliente).subscribe(cliente => {
      this.router.navigate(['/shell/clientes']);
      swal.fire(
        this.translateService.instant('services.clients.sweet-alert.update-client'),
        this.translateService.instant('services.clients.sweet-alert.update-success', { value: cliente.nombre }),
        'success'
      );
    },
      (error) => swal.fire(
        this.translateService.instant('services.clients.sweet-alert.error.update'),
        `${error.error.mensaje}`, 'error'));
  }

  get isEditing() {
    return this._isEditing;
  }
}

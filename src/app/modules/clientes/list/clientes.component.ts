import { Component, OnInit, Inject, forwardRef } from '@angular/core';
import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ColDef, GridOptions, ICellRendererParams, IAfterGuiAttachedParams } from '@ag-grid-community/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/shared/shared-services/clientes.service';
import { ICellRendererAngularComp } from '@ag-grid-community/angular';
import { Cliente } from 'src/app/shared/models/cliente';
import swal from 'sweetalert2';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.scss']
})
export class ClientesComponent implements OnInit {

  clientes;
  colDef: ColDef[] = [];

  gridOptions = <GridOptions>{};
  modules = AllCommunityModules;

  isDirty = false;
  title = 'asd';

  showForm = false;

  constructor(
    private clientesService: ClienteService,
    private translateService: TranslateService,
    private router: Router
  ) {
    translateService.onLangChange.subscribe((event: LangChangeEvent) => {
      this.colDef = [];
      this.setColDefTranslation();

    });
  }

  ngOnInit() {
    this.getClientes();
  }

  private getClientes() {
    this.clientesService.getClientes().subscribe(clientes => {
      this.clientes = clientes;
      this.configureAgGrid();
    });
  }

  private configureAgGrid() {
    this.setColDefTranslation();
  }

  private setColDefTranslation() {
    const clients = 'services.clients.';
    this.translateService.get([
      `${clients}name`,
      `${clients}surname`,
      `${clients}email`,
      `${clients}date`,
      `${clients}actions`,
    ])
      .pipe(take(1))
      .subscribe(res => {
        this.colDef = [
          { headerName: res[`${clients}name`], headerTooltip: res[`${clients}name`], field: 'nombre', sortable: true },
          { headerName: res[`${clients}surname`], headerTooltip: res[`${clients}surname`], field: 'apellido', sortable: true },
          { headerName: res[`${clients}email`], headerTooltip: res[`${clients}email`], field: 'email', sortable: true },
          { headerName: res[`${clients}date`], headerTooltip: res[`${clients}date`], field: 'createAt', sortable: true },
          {
            headerName: res[`${clients}actions`], headerTooltip: res[`${clients}actions`],
            cellRendererFramework: ClientesEditButtonComponent
          },
        ];
      });
  }

  // ACTIONS

  deleteClient(client: Cliente) {
    this.clientesService.delete(client.id).subscribe(response => {
      swal.fire(
        this.translateService.instant('services.clients.sweet-alert.delete-success', { value: client.nombre }),
        '', 'success'
      );

      this.clientes = this.clientes.filter(cliente => cliente !== client);
    });
  }

  onAddClientSelected() {
    this.showForm = !this.showForm;
  }

  openForm() {
    this.router.navigate(['shell/clientes/form']);
  }

}



@Component({
  selector: 'app-clientes-edit-button',
  template: `
        <app-custom-button (click)="onClick()">Edit</app-custom-button>
        <app-custom-button (click)="onDelete()">Delete</app-custom-button>
    `,
  styles: [``]
})
export class ClientesEditButtonComponent implements ICellRendererAngularComp {

  private cliente: Cliente;
  private rowIndex: number;
  private clientes: Cliente[];

  constructor(
    private router: Router,
    private translateService: TranslateService,
    @Inject(forwardRef(() => ClientesComponent)) private clientesComponent: ClientesComponent
  ) {
  }

  refresh(params: any): boolean {
    console.log('refresh', params);
    return false;
  }
  agInit(params: ICellRendererParams): void {
    this.cliente = params.data;
    this.rowIndex = params.rowIndex;
  }
  afterGuiAttached?(params?: IAfterGuiAttachedParams): void {
    if (params) {
      console.log('attached', params);
    }
  }
  onClick() {
    this.router.navigate(['/shell/clientes/form', this.cliente.id]);
  }

  onDelete() {
    swal.fire({
      title: this.translateService.instant('services.clients.sweet-alert.confirm.delete-client-title'),
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      confirmButtonText: this.translateService.instant('services.clients.sweet-alert.confirm.delete-client-confirm'),
      cancelButtonColor: '#d33',
      cancelButtonText: this.translateService.instant('services.clients.sweet-alert.confirm.cancel')
    }).then(result => {
      if (result.value) {
        this.deleteClient();
      }
    });
  }

  private deleteClient() {
    this.clientesComponent.deleteClient(this.cliente);

  }

}

import { Component, OnInit } from '@angular/core';

import { TranslateService, LangChangeEvent } from '@ngx-translate/core';
import { ColDef, GridOptions } from '@ag-grid-community/core';
import { AllCommunityModules } from '@ag-grid-community/all-modules';
import { take } from 'rxjs/operators';
import { Router } from '@angular/router';
import { ClienteService } from 'src/app/shared/shared-services/clientes.service';

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
  title = 'asd'

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
    this.configureAgGrid();
  }

  private getClientes() {
    this.clientes = this.clientesService.getClientes();
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
    ])
      .pipe(take(1))
      .subscribe(res => {
        this.colDef = [
          { headerName: res[`${clients}name`], headerTooltip: res[`${clients}name`], field: 'nombre', sortable: true },
          { headerName: res[`${clients}surname`], headerTooltip: res[`${clients}surname`], field: 'apellido', sortable: true },
          { headerName: res[`${clients}email`], headerTooltip: res[`${clients}email`], field: 'email', sortable: true },
          { headerName: res[`${clients}date`], headerTooltip: res[`${clients}date`], field: 'createAt', sortable: true },
        ];
      });
  }

  onAddClientSelected() {
    this.showForm = !this.showForm;
  }

  openForm() {
    this.router.navigate(['shell/clientes/form']);
  }

}

import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent, ClientesEditButtonComponent } from './list/clientes.component';
import { AgGridModule } from '@ag-grid-community/angular';
import { TranslateModule } from '@ngx-translate/core';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';
import { SharedModulesModule } from 'src/app/shared/shared-modules.module';
import { DataEditGuard } from 'src/app/core/guards/data-edit.guard';
import { ClientesFormComponent } from './form/clientes-form.component';

@NgModule({
  declarations: [
    ClientesComponent,
    ClientesFormComponent,
    ClientesEditButtonComponent,
  ],
  imports: [
    ClientesRoutingModule,
    SharedComponentsModule,
    SharedModulesModule,
    AgGridModule.withComponents([
      ClientesEditButtonComponent
    ]),
    TranslateModule.forChild()
  ],
  exports: [
    ClientesComponent
  ],
  providers: [],

})
export class ClientesModule { }

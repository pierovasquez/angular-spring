import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { FormComponent } from './form.component';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';
import { SharedModulesModule } from '../shared/shared-modules.module';

@NgModule({
  declarations: [
    ClientesComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    SharedComponentsModule,
    SharedModulesModule
  ],
  exports: [
    ClientesComponent
  ]
})
export class ClientesModule { }

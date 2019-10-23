import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { ClientesRoutingModule } from './clientes-routing.module';
import { ClientesComponent } from './clientes.component';
import { FormComponent } from './form.component';
import {FormsModule} from '@angular/forms';
import { SharedComponentsModule } from '../shared/shared-components/shared-components.module';

@NgModule({
  declarations: [
    ClientesComponent,
    FormComponent
  ],
  imports: [
    CommonModule,
    ClientesRoutingModule,
    FormsModule,
    SharedComponentsModule
  ],
  exports: [
    ClientesComponent
  ]
})
export class ClientesModule { }

import { NgModule } from '@angular/core';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';
import { SharedModulesModule } from '../shared-modules.module';
import { CommonModule } from '@angular/common';
import { CustomAddressComponent } from './custom-address/custom-address.component';
import { AngularMaterialModule } from '../angular-material-modules.module';

@NgModule({
  declarations: [
    CustomInputComponent,
    CustomAddressComponent
  ],
  imports: [
    CommonModule,
    SharedModulesModule,
    AngularMaterialModule,
  ],
  exports: [
    CustomInputComponent,
  ]
})
export class SharedComponentsModule { }

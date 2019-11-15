import { NgModule } from '@angular/core';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';
import { SharedModulesModule } from '../shared-modules.module';
import { CommonModule } from '@angular/common';
import { CustomAddressComponent } from './custom-address/custom-address.component';

@NgModule({
  declarations: [
    CustomInputComponent,
    CustomAddressComponent
  ],
  imports: [
    CommonModule,
    SharedModulesModule
  ],
  exports: [
    CustomInputComponent
  ]
})
export class SharedComponentsModule { }

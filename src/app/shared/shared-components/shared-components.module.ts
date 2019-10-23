import { NgModule } from '@angular/core';
import { CustomInputComponent } from './custom-input/custom-input.component';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    CustomInputComponent
  ],
  imports: [
    FormsModule
  ],
  exports: [
    CustomInputComponent
  ]
})
export class SharedComponentsModule { }

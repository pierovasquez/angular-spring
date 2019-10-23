import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivaRoutingModule } from './directiva-routing.module';
import { DirectivaComponent } from './directiva.component';

@NgModule({
  declarations: [
    DirectivaComponent
  ],
  imports: [
    CommonModule,
    DirectivaRoutingModule
  ],
  exports: [
    DirectivaComponent
  ]
})
export class DirectivaModule { }

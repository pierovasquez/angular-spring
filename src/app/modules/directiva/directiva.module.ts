import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { DirectivaRoutingModule } from './directiva-routing.module';
import { DirectivaComponent } from './directiva.component';
import { SharedModulesModule } from 'src/app/shared/shared-modules.module';

@NgModule({
  declarations: [
    DirectivaComponent
  ],
  imports: [
    CommonModule,
    DirectivaRoutingModule,
    SharedModulesModule,
  ],
  exports: [
    DirectivaComponent
  ]
})
export class DirectivaModule { }

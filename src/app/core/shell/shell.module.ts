import { NgModule } from '@angular/core';
import { ShellRoutingModule } from './shell-routing.module';
import { CommonModule } from '@angular/common';
import { HeaderComponent } from '../header/header.component';
import { FooterComponent } from '../footer/footer.component';
import { TranslateModule } from '@ngx-translate/core';
import { SharedComponentsModule } from 'src/app/shared/shared-components/shared-components.module';

@NgModule({
    declarations: [
        HeaderComponent,
        FooterComponent,
    ],
    imports: [
        ShellRoutingModule,
        SharedComponentsModule,
        TranslateModule.forChild(),
    ],
    exports: [
        HeaderComponent,
        FooterComponent,
    ]
})
export class ShellModule { }

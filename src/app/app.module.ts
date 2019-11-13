import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './header/header.component';
import { FooterComponent } from './footer/footer.component';

import { ClientesService } from './shared/clientes.service';
import { ClientesModule } from './clientes/clientes.module';
import { DirectivaModule } from './directiva/directiva.module';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    FooterComponent
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    FormsModule,
    AppRoutingModule,
    ClientesModule,
    DirectivaModule,
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }

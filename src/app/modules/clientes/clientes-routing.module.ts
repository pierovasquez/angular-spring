import { NgModule } from '@angular/core';
import { Routes, RouterModule } from '@angular/router';
import { ClientesComponent } from './list/clientes.component';
import { ClientesFormComponent } from './form/clientes-form.component';

const routes: Routes = [
  {
    path: '',
    redirectTo: 'list',
    pathMatch: 'full'
  },
  {
    path: '',
    children: [
      {
        path: 'list',
        component: ClientesComponent
      },
      {
        path: 'form',
        component: ClientesFormComponent
      }
    ]
  }
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule]
})
export class  ClientesRoutingModule { }

import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

const routes: Routes = [
    { path: '', redirectTo: 'clientes', pathMatch: 'full' },
    {
        path: 'clientes',
        loadChildren: () => import('../../modules/clientes/clientes.module').then(m => m.ClientesModule)
    },
    {
        path: 'directivas',
        loadChildren: () => import('../../modules/directiva/directiva.module').then(m => m.DirectivaModule)
    }
];

@NgModule({
    imports: [RouterModule.forChild(routes)],
    exports: [RouterModule]
})
export class ShellRoutingModule { }

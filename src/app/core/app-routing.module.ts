import { NgModule } from '@angular/core';
import { Routes, RouterModule, PreloadAllModules } from '@angular/router';
import { NotFoundComponent } from './not-found/not-found.component';
import { LoginComponent } from './login/login.component';
import { ShellComponent } from './shell/shell.component';

const routes: Routes = [
  {
    path: 'shell', component: ShellComponent,
    loadChildren: () => import('../core/shell/shell.module').then(m => m.ShellModule)
  },
  {
    path: '', component: LoginComponent
  },
  {
    path: '**', component: NotFoundComponent
  }
];

@NgModule({
  imports: [RouterModule.forRoot(routes, {preloadingStrategy: PreloadAllModules})],
  exports: [RouterModule]
})
export class AppRoutingModule { }

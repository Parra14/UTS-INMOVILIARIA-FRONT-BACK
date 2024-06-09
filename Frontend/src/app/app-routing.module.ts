import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
//componentes
import { SingnupComponent } from './components/singnup/singnup.component'
import { SigninComponent } from './components/signin/signin.component'
import { LoadComponent } from './shaders/load/load.component'
import { AuthGuard } from "./auth.guard";
import { ListarOficinaComponent } from './components/oficina/list-oficina/list-oficina.component';
import { CreateOficinaComponent } from './components/oficina/create-oficina/create-oficina.component';
import { ListInmuebleComponent } from './components/inmuebles/list-inmueble/list-inmueble.component';
import { CreateInmuebleComponent } from './components/inmuebles/create-inmueble/create-inmueble.component';

const routes: Routes = [

  { path: 'signup', component: SingnupComponent },
  { path: 'signin', component: SigninComponent },
  { path: 'load', component: LoadComponent },
  { path: 'list-inmueble', component: ListInmuebleComponent, canActivate: [AuthGuard] },
  { path: 'create-inmueble', component: CreateInmuebleComponent, canActivate: [AuthGuard] },
  { path: 'list-oficina', component: ListarOficinaComponent, canActivate: [AuthGuard] },
  { path: 'create-oficina', component: CreateOficinaComponent, canActivate: [AuthGuard] },
  { path: '**', redirectTo: '/list-inmueble', pathMatch: 'full' },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }

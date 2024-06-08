import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from "@angular/forms";
import { ReactiveFormsModule } from '@angular/forms';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { ToastrModule } from 'ngx-toastr';
import { HttpClientModule, HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthGuard } from "./auth.guard";
import { TokenInterceptorService } from "./services/token-interceptor.service";

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { SingnupComponent } from './components/singnup/singnup.component';
import { SigninComponent } from './components/signin/signin.component';
import { HeaderComponent } from './shaders/header/header.component';
import { LoadComponent } from './shaders/load/load.component';

import { ListInmuebleComponent } from './components/inmuebles/list-inmueble/list-inmueble.component';
import { CreateInmuebleComponent } from './components/inmuebles/create-inmueble/create-inmueble.component';

@NgModule({
  declarations: [
    AppComponent,
    SingnupComponent,
    SigninComponent,
    HeaderComponent,
    LoadComponent,
    ListInmuebleComponent,
    CreateInmuebleComponent,
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    ReactiveFormsModule,
    FormsModule,
    BrowserAnimationsModule,
    ToastrModule.forRoot(),
    HttpClientModule
  ],
  providers: [
    AuthGuard,
    {
      provide: HTTP_INTERCEPTORS,
      useClass: TokenInterceptorService,
      multi: true
    }
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }

import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';
import { Inmueble } from '../models/inmueble';

@Injectable({
  providedIn: 'root'
})
export class InmuebleServicesService {

  constructor(private http: HttpClient) { }

  
  getInmueble(): Observable<any> {
    return this.http.get(environment.apiURL + '/inmuebles/casa');
  }

  eliminarInmueble(id: string): Observable<any> {
    return this.http.delete(environment.apiURL + '/inmuebles/casa/' + id);
  }

  guardarInmueble(inmueble: Inmueble): Observable<any> {
    return this.http.post(environment.apiURL + '/inmuebles/casa', inmueble);
  }

  obtenerInmueble(id: string): Observable<any> {
    return this.http.get(environment.apiURL + '/inmuebles/casa/' + id);
  }

}

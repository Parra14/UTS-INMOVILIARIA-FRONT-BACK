import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Oficina } from '../models/oficina';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OfficeService {

  constructor(private http: HttpClient) {}

  crearOficina(oficina: Oficina): Observable<Oficina> {
    return this.http.post<Oficina>(environment.apiURL + '/oficinas/', oficina);
  }

  obtenerOficinas(): Observable<Oficina[]> {
    return this.http.get<Oficina[]>(environment.apiURL+ '/oficinas/');
  }

  eliminarOficina(id: string): Observable<void> {
    return this.http.delete<void>(`${environment.apiURL + '/oficinas/'}/${id}`);
  }
}

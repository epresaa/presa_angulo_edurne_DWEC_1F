import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root'
})
export class EleccionesService {
  private baseUrl = '/api';
  
  constructor(private _httpclient: HttpClient) { }

  // POST - Método para votar: recibe los datos del formulario como parámetro
  public votar(datos: any): Observable<any> {
    return this._httpclient.post(`${this.baseUrl}/vote`, datos);
  }

  // GET - Método para visualizar votos: devuelve los candidatos y los votos de cada uno
  public getvotes(): Observable<any> {
    return this._httpclient.get(`${this.baseUrl}/getvotes`);
  }
}

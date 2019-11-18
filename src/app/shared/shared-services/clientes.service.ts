import { Injectable } from '@angular/core';
import { Observable, of } from 'rxjs';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { map } from 'rxjs/operators';
import { Cliente } from '../models/cliente';

@Injectable({
  providedIn: 'root'
})
export class ClienteService {

  private urlEndPoint = 'http://localhost:9999/api/clientes';

  private httpHeaders = new HttpHeaders({'Content-type': 'application/json'});
  constructor(
    private http: HttpClient
  ) { }

  getClientes(): Observable<Cliente[]> {
    // return this.http.get<Cliente[]>(this.urlEndPoint);

    return this.http.get(this.urlEndPoint).pipe(
      map(res => res as Cliente[])
    );
  }

  create(cliente: Cliente): Observable<Cliente> {
    return this.http.post<Cliente>(this.urlEndPoint, cliente, {headers: this.httpHeaders});
  }

  getCliente(id): Observable<Cliente> {
    return this.http.get<Cliente>(`${this.urlEndPoint}/${id}`)
  }
}

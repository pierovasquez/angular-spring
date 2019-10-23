import { Injectable } from '@angular/core';
import { Cliente } from '../models/cliente';
import { Observable, of } from 'rxjs';
import { HttpClient } from '@angular/common/http';
import { map } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class ClientesService {

  private urlEndPoint = 'http://localhost:9999/api/clientes';

  constructor(
    private http: HttpClient
  ) { }

  getClientes(): Observable<Cliente[]> {
    // return this.http.get<Cliente[]>(this.urlEndPoint);

    return this.http.get(this.urlEndPoint).pipe(
      map(res => res as Cliente[])
    );
  }
}

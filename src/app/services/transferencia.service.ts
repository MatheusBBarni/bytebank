import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Transferencia } from '../models/Transferencia.model';
import { Observable } from 'rxjs';

type TransferenciaValue = { valor: number; destino: number };

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private transferencias: Array<TransferenciaValue & { data: Date }>;
  private url: string = 'http://localhost:3000/transferencias';

  constructor(private readonly httpClient: HttpClient) {
    this.transferencias = [];
  }

  getTransferencias(): Observable<Array<Transferencia>> {
    return this.httpClient.get<Array<Transferencia>>(this.url);
  }

  transferir(transferencia: Transferencia): Observable<Transferencia> {
    return this.httpClient.post<Transferencia>(this.url, {
      ...transferencia,
      data: new Date(),
    });
  }
}

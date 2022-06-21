import { Injectable } from '@angular/core';

type TransferenciaValue = { valor: number; destino: number };

@Injectable({
  providedIn: 'root',
})
export class TransferenciaService {
  private transferencias: Array<TransferenciaValue & { data: Date }>;

  constructor() {
    this.transferencias = [];
  }

  getTransferencias() {
    return this.transferencias;
  }

  transferir(transferencia: TransferenciaValue) {
    this.transferencias.push({ ...transferencia, data: new Date() });
  }
}

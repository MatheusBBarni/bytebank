import { TransferenciaService } from './../services/transferencia.service';
import { Component, OnInit } from '@angular/core';

type TransferenciaValue = { valor: number; destino: number; data: Date };

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: Array<TransferenciaValue> = [];

  constructor(private readonly transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.transferencias = this.transferenciaService.getTransferencias();
  }
}

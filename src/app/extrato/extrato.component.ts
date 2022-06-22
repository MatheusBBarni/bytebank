import { Component, OnInit } from '@angular/core';

import { TransferenciaService } from './../services/transferencia.service';
import { Transferencia } from '../models/Transferencia.model';

@Component({
  selector: 'app-extrato',
  templateUrl: './extrato.component.html',
  styleUrls: ['./extrato.component.scss'],
})
export class ExtratoComponent implements OnInit {
  transferencias: Array<Transferencia> = [];

  constructor(private readonly transferenciaService: TransferenciaService) {}

  ngOnInit(): void {
    this.transferenciaService
      .getTransferencias()
      .subscribe((transferencias) => {
        this.transferencias = transferencias;
      });
  }
}

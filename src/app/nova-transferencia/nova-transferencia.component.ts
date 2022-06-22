import { Component } from '@angular/core';
import { Router } from '@angular/router';

import { TransferenciaService } from './../services/transferencia.service';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  valor: number;
  destino: string;

  constructor(
    private readonly transferenciaService: TransferenciaService,
    private readonly router: Router
  ) {}

  transferir() {
    const { valor, destino } = this;

    this.transferenciaService.transferir({ valor, destino }).subscribe(() => {
      this.router.navigateByUrl('extrato');
    }, console.error);
  }
}

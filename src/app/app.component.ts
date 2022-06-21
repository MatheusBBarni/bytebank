import { Component } from '@angular/core';

import { TransferenciaService } from './services/transferencia.service';

type TransferenciaValue = { valor: number; destino: number };

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'bytebank';

  constructor(private readonly transferenciaService: TransferenciaService) {}

  transferir($event: TransferenciaValue) {
    this.transferenciaService.transferir($event);
  }
}

import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-nova-transferencia',
  templateUrl: './nova-transferencia.component.html',
  styleUrls: ['./nova-transferencia.component.scss'],
})
export class NovaTransferenciaComponent {
  @Output() aoTransferir = new EventEmitter<{
    valor: number;
    destino: number;
  }>();

  valor: number;
  destino: number;

  transferir() {
    const { valor, destino } = this;
    this.aoTransferir.emit({ valor, destino });
    this.limparCampos();
  }

  limparCampos() {
    this.valor = 0;
    this.destino = 0;
  }
}

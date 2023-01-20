import { Component } from '@angular/core';

@Component({
  selector: 'app-contador',
  template: `
    <h1>{{ titulo }}</h1>
    <h3>
      Base number: <strong>{{ base }}</strong>
    </h3>

    <button (click)="acumulador(base)">+{{ base }}</button>
    <span>{{ numero }}</span>
    <button (click)="acumulador(-base)">-{{ base }}</button>
  `,
})
export class ContadorComponent {
  titulo: string = 'Contador App';
  numero: number = 10;
  readonly base: number = 5;

  acumulador(value: number) {
    this.numero += value;
  }
}

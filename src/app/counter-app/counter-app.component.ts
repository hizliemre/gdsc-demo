import { Component } from '@angular/core';

@Component({
  standalone: true,
  selector: 'counter-app',
  templateUrl: './counter-app.component.html',
})
export default class CounterAppComponent {

  public counter = 0;

  public increment() {
    this.counter++;
  }

  public decrement() {
    this.counter--;
  }

}

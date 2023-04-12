import { NgFor } from '@angular/common';
import { Component, ViewChild, inject } from '@angular/core';
import { TodoStateService } from './todo-app.service';

@Component({
  standalone: true,
  selector: 'todo-app',
  templateUrl: './todo-app.component.html',
  imports: [NgFor]
})
export default class TodoAppComponent {

  @ViewChild('todoInput') todoInput!: HTMLInputElement;

  state = inject(TodoStateService)


}

import { Injectable } from '@angular/core';
import { v4 as uuid } from 'uuid';

export interface Todo {
  id: string;
  title: string;
  completed: boolean;
}

@Injectable({
  providedIn: 'root'
})
export class TodoStateService {

  public todos: Todo[] = [];

  public addTodo(title: string) {
    const todo = { id: uuid(), title, completed: false };
    this.todos = [...this.todos, todo];
  }

  public removeTodo(id: string) {
    this.todos = this.todos.filter(todo => todo.id !== id);
  }

  public toggleTodo(id: string) {
    this.todos = this.todos.map(todo => {
      if (todo.id === id) {
        return { ...todo, completed: !todo.completed };
      }
      return todo;
    });
  }
}

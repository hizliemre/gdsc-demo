import { AsyncPipe, NgFor, NgIf } from '@angular/common';
import { HttpClient } from '@angular/common/http';
import { Component, inject } from '@angular/core';

@Component({
  standalone: true,
  selector: 'fetch-data',
  templateUrl: './fetch-data-app.component.html',
  imports: [NgIf, AsyncPipe, NgFor]
})
export default class FetchDataComponent {

  http = inject(HttpClient);

  posts$ = this.http.get<any[]>('https://jsonplaceholder.typicode.com/posts');

}

import { Component } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Message } from '@der-grune-bauer/api-interfaces';
import { HeaderComponent } from '../app/components/header/header.component';

@Component({
  selector: 'der-grune-bauer-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css'],
})
export class AppComponent {
  // hello$ = this.http.get<Message>('/api/hello');
  constructor(private http: HttpClient) {}
}

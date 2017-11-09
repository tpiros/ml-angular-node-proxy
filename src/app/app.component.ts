import { Component } from '@angular/core';
import { Http } from '@angular/http';
import 'rxjs/add/operator/map';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  constructor(private http: Http) {
    this.http.get('http://localhost:5555/v1/documents?uri=/character/darthvader.json')
    .map(response => response.json())
    .subscribe(response => console.log(response));
  }
}

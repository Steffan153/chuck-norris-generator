import { HttpClient } from '@angular/common/http';
import { Component } from '@angular/core';
import { Joke } from '../joke.model';

@Component({
  selector: 'app-search',
  templateUrl: './search.component.html',
  styleUrls: ['./search.component.scss'],
})
export class SearchComponent {
  constructor(private http: HttpClient) {}

  encodeURIComponent = (x: string) => encodeURIComponent(x);

  search = '';
  results: Joke[] = null;
  loading = false;

  doSearch() {
    this.results = null;
    this.loading = true;
    this.http
      .get<{ result: Joke[]; total: number }>(
        `https://api.chucknorris.io/jokes/search?query=${this.search}`
      )
      .subscribe(
        (x) => {
          this.loading = false;
          this.results = x.result;
        },
        (e) => {
          console.log(e);
          this.loading = false;
          this.results = null;
        }
      );
  }
}

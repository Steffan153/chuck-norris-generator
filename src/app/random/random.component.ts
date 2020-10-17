import { HttpClient } from '@angular/common/http';
import { Component, OnInit } from '@angular/core';
import { Joke } from '../joke.model';

@Component({
  selector: 'app-random',
  templateUrl: './random.component.html',
  styleUrls: ['./random.component.scss'],
})
export class RandomComponent {
  constructor(private http: HttpClient) {}

  loading = false;
  categories = [
    'all categories',
    'animal',
    'career',
    'celebrity',
    'dev',
    'explicit',
    'fashion',
    'food',
    'history',
    'money',
    'movie',
    'music',
    'political',
    'religion',
    'science',
    'sport',
    'travel',
  ];
  encodeURIComponent = (x: string) => encodeURIComponent(x);

  joke = '';
  category = 'all categories';

  findJoke() {
    this.loading = true;
    this.http
      .get<Joke>(
        this.category === 'all categories'
          ? 'https://api.chucknorris.io/jokes/random'
          : `https://api.chucknorris.io/jokes/random?category=${this.category}`
      )
      .subscribe(
        (x) => {
          console.log(x);
          this.joke = x.value;
          this.loading = false;
        },
        () => {
          this.loading = false;
        }
      );
  }
}

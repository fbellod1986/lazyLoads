import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/HTTP';
import { tap } from 'rxjs/operators';

@Injectable({
  providedIn: 'root'
})
export class DataService {

  constructor( private http: HttpClient) { }

  getPost() {
    return this.http.get('https://jsonplaceholder.typicode.com/posts')
    .pipe(
      tap(console.log)
    );
  }
}
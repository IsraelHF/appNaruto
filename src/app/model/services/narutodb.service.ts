import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';

export enum SearchType {
  all = '',
  character = 'character',
  clan = 'clan',
  tailed_beast = 'tailed-beast',
  team = 'team',
  village = 'village',
}

@Injectable({
  providedIn: 'root',
})
export class NarutodbService {
  url = 'https://narutodb.xyz/api';

  constructor(private http: HttpClient) {}

  getAll(name: string, type: SearchType): Observable<any> {
    return this.http.get(`${this.url}?`)
  }
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';

@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private http: HttpClient) { }

  getMangas(): Observable<any> {
    return this.http.get(`${environment.baseUrl}/manga/{id}`);
  }

  getMangasDetails() {}
}

import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { environment } from 'src/environments/environment';


export interface ApiResult {
  page: number;
  results: any[];
  total_pages: number;
  total_results: number;
}



@Injectable({
  providedIn: 'root'
})
export class MangaService {

  constructor(private http: HttpClient) { }

  getMangas(page = 1): Observable<ApiResult> {
    return this.http.get<ApiResult>(
      `${environment.baseUrl}/movie/popular?api_key=${environment.apiKey}&page=${page}`);
  }
 
  getMangasDetails(id: string) {
    return this.http.get(
      `${environment.baseUrl}/movie/${id}${environment.apiKey}`
    )
  }
}

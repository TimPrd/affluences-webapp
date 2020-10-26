import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {environment} from '../../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class AffluencesService {

  constructor(private http: HttpClient) {
  }

  public getTime(date: string): Observable<{ available: boolean }> {
    return this.http.get<{ available: boolean }>(`${environment.apiUrl}/resource/1337/available?datetime=${date}`);
  }


}

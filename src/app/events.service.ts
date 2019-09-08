import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { environment } from './../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class EventsService {

  uri = environment.apiUrl + '/events';

  constructor(private http: HttpClient) { }

  refreshLastSeason() {

    this.http.post(`${this.uri}/refreshLastSeason`, {})
      .subscribe(res => console.log('Done'));
  }
}

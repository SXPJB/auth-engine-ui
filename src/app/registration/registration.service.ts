import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenderResponse, HttpResponse } from '../../types/responses';
import { environment } from '../../environments/environment';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private readonly findGenders = `${environment.apiURL}/catalog/findAllGenders`;

  constructor(private readonly http: HttpClient) {}

  public findAllGenders(): Observable<HttpResponse<GenderResponse[]>> {
    return this.http.get(this.findGenders) as Observable<
      HttpResponse<GenderResponse[]>
    >;
  }
}

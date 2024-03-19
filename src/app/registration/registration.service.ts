import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { GenderResponse, HttpResponse } from '../../types/responses';

@Injectable({
  providedIn: 'root',
})
export class RegistrationService {
  private readonly findGenders = '/catalog/findAllGenders';

  constructor(private readonly http: HttpClient) {}

  public findAllGenders(): Observable<HttpResponse<GenderResponse[]>> {
    return this.http.get(this.findGenders) as Observable<
      HttpResponse<GenderResponse[]>
    >;
  }
}

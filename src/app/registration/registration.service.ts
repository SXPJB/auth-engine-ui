import { Injectable } from '@angular/core';
import { type HttpClient } from '@angular/common/http';
import { type Observable } from 'rxjs';
import { type GenderResponse, type HttpResponse } from '../../types/responses';

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

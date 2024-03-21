import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import {
  GenderResponse,
  HttpResponse,
  UserResponse,
} from '../../types/responses';
import { environment } from '../../environments/environment';
import { UserRequest } from '../../types/requests';

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

  public registerUser(
    user: UserRequest,
  ): Observable<HttpResponse<UserResponse>> {
    return this.http.post(`${environment.apiURL}/register`, user) as Observable<
      HttpResponse<UserResponse>
    >;
  }
}

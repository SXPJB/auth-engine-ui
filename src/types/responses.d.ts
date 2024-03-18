export interface GenderResponse {
  code: string;
  display: string;
}

export interface HttpResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

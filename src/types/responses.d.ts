export interface GenderResponse {
  code: string;
  display: string;
}

export interface UserResponse {
  id_user: string;
  id_person: string;
  username: string;
  first_name: string;
  last_name: string;
  gender: string;
  email: string;
}

export interface HttpResponse<T> {
  success: boolean;
  data: T;
  message: string;
}

export interface ErrorResponse {
  id: string;
  filed: string;
  message: string;
}

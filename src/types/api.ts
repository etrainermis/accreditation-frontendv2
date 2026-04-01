export interface ApiListResponse<T> {
  data: T[];
  total: number;
}

export interface ApiSingleResponse<T> {
  data: T;
}

export interface ApiErrorShape {
  message: string;
  statusCode: number;
  details?: Record<string, string[]>;
}

export interface RequestOptions extends RequestInit {
  query?: Record<string, string | number | boolean | undefined>;
}

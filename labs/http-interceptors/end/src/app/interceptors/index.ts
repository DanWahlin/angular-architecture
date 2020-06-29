import { HTTP_INTERCEPTORS } from "@angular/common/http";
import { AuthInterceptor } from "./auth.interceptor";
import { CSRFInterceptor } from "./csrf.interceptor";
import { LogResponseTimeInterceptor } from "./log-response.interceptor";
import { LogHeadersInterceptor } from "./log-headers.interceptor";

export * from "./auth.interceptor";
export * from "./csrf.interceptor";
export * from "./log-headers.interceptor";
export * from "./log-response.interceptor";

const provide = HTTP_INTERCEPTORS;
const multi = true;

export const httpInterceptorProviders = [
  { provide, useClass: AuthInterceptor, multi },
  { provide, useClass: CSRFInterceptor, multi },
  { provide, useClass: LogHeadersInterceptor, multi },
  { provide, useClass: LogResponseTimeInterceptor, multi },
];

import { AxiosRequestConfig } from "axios";

export interface CustomAxiosRequestConfig extends AxiosRequestConfig {
  skipAuth?: boolean;
}


export interface SignUpData {
  name: string;
  email: string;
  mobile_country_code: string;
  mobile: string;
  password: string;
  confirmPassword: string;
}
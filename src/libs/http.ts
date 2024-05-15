import axios, {
  AxiosError,
  AxiosRequestConfig,
  AxiosResponse,
  InternalAxiosRequestConfig,
} from "axios";

export interface HttpResponse<T = unknown> {
  status: number;
  msg: string;
  code: number;
  data: T;
}

export interface ErrorResponse<T = unknown> {
  response: {
    data: T;
  };
}

const config: AxiosRequestConfig = {
  baseURL: import.meta.env.BASE_URL,
  timeout: 60000,
  headers: {
    "Content-Type": "application/json",
  },
};

const api = axios.create(config);
api.interceptors.request.use(
  (config: InternalAxiosRequestConfig): InternalAxiosRequestConfig => {
    if (config.url?.includes("download")) {
      config.responseType = "blob";
    }
    return config;
  },
  (err: AxiosError) => {
    console.error(err);
    return Promise.reject(err);
  }
);

/**
 * 返回
 */
api.interceptors.response.use(
  (response: AxiosResponse<HttpResponse>) => {
    const res = response;
    const url = response.config.url;
    if (url?.includes("download")) {
      response.headers.responseType = "blob";
    }
    return res;
  },
  (error: AxiosError) => {
    console.error(error);
    return Promise.reject(error);
  }
);

export default api;

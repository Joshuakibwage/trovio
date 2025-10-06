
import axios from "axios";

const baseURL = process.env.NEXT_PUBLIC_API_URL;

const axiosClient = axios.create({
  baseURL,
  withCredentials: true, 
  headers: { "Content-Type": "application/json" },
});

let isRefreshing = false;
let failedQueue: Array<{ resolve: (v?: any) => void; reject: (err: any) => void; config: any }> = [];

const processQueue = (error: any, token: string | null = null) => {
  failedQueue.forEach((p) => {
    if (error) p.reject(error);
    else {
      if (token && p.config) p.config.headers["Authorization"] = `Bearer ${token}`;
      p.resolve(axiosClient(p.config));
    }
  });
  failedQueue = [];
};

axiosClient.interceptors.request.use((config) => {
  
  try {
    if (typeof window !== "undefined") {
      const access = window.localStorage?.getItem("accessToken");
      if (access && config.headers) config.headers.Authorization = `Bearer ${access}`;
    }
  } catch (e) {
    
  }
  return config;
});

axiosClient.interceptors.response.use(
  (res) => res,
  async (err) => {
    const originalConfig = err.config;

    if (err.response?.status === 401 && !originalConfig._retry) {
      if (isRefreshing) {
        // queue the request
        return new Promise(function (resolve, reject) {
          failedQueue.push({ resolve, reject, config: originalConfig });
        });
      }

      originalConfig._retry = true;
      isRefreshing = true;

      try {
       
        // cookie-based refresh 
        let refreshRes;
        try {
          refreshRes = await axios.post(
            `${baseURL}/accounts/token/refresh/`,
            {}, // backend may accept empty body and use cookie
            { withCredentials: true }
          );
        } catch (e) {
          // fallback to localStorage-based refresh
          const refreshToken = typeof window !== "undefined" ? localStorage.getItem("refreshToken") : null;
          if (!refreshToken) throw e;
          refreshRes = await axios.post(`${baseURL}/accounts/token/refresh/`, { refresh: refreshToken });
        }

        const newAccess = refreshRes.data.access;
        // persist new access token (and optionally new refresh)
        if (typeof window !== "undefined") {
          localStorage.setItem("accessToken", newAccess);
          // if backend returns a new refresh token:
          if (refreshRes.data.refresh) localStorage.setItem("refreshToken", refreshRes.data.refresh);
        }

        axiosClient.defaults.headers.common["Authorization"] = `Bearer ${newAccess}`;
        processQueue(null, newAccess);
        return axiosClient(originalConfig);
      } catch (refreshError) {
        processQueue(refreshError, null);
        // cleanup and redirect to login
        if (typeof window !== "undefined") {
          localStorage.removeItem("accessToken");
          localStorage.removeItem("refreshToken");
          window.location.href = "/auth/login";
        }
        return Promise.reject(refreshError);
      } finally {
        isRefreshing = false;
      }
    }

    return Promise.reject(err);
  }
);

export default axiosClient;

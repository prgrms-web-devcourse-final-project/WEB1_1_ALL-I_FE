import axios, { AxiosInstance } from "axios";

// Axios 인스턴스 생성
const apiClient: AxiosInstance = axios.create({
  baseURL: import.meta.env.VITE_API_BASE_URL, // 기본 URL 설정,
  timeout: 3000, // 요청 타임아웃 설정
  headers: { "Content-Type": "application/json" }, // 기본 헤더 설정
});

// 토큰 관련 인터셉터 추가
apiClient.interceptors.request.use(
  (config) => {
    // 토큰 저장한 방식에 맞춰 아래 코드 변경하면 될 것 같습니다.
    const token = localStorage.getItem("accessToken");
    if (token) {
      config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// GET 요청 함수
export const getRequest = async (url: string, params?: object) => {
  try {
    const response = await apiClient.get(url, { params });
    return response.data;
  } catch (error) {
    console.error("GET 요청 에러:", error);
    throw error;
  }
};

// POST 요청 함수
export const postRequest = async (url: string, data: object) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST 요청 에러:", error);
    throw error;
  }
};

// PATCH 요청 함수
export const updateRequest = async (url: string, data: object) => {
  try {
    const response = await apiClient.patch(url, data);
    return response.data;
  } catch (error) {
    console.error("PATCH 요청 에러:", error);
    throw error;
  }
};

// DELETE 요청 함수
export const deleteRequest = async (url: string, params?: object) => {
  try {
    const response = await apiClient.delete(url, { params });
    return response.data;
  } catch (error) {
    console.error("DELETE 요청 에러:", error);
    throw error;
  }
};

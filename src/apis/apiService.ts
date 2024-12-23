import axios, { AxiosInstance } from "axios";
import useAuthStore from "@/store/useAuthStore";

// Axios 인스턴스 생성
const apiClient: AxiosInstance = axios.create({
  baseURL:
    import.meta.env.VITE_API_MODE === "development"
      ? import.meta.env.VITE_API_DEVELOPMENT_BASE_URL
      : import.meta.env.VITE_API_DEPLOYMENT_BASE_URL, // 환경변수에서 baseURL 가져오기
  withCredentials: true, // 쿠키 데이터 전송
  timeout: 30000, // 요청 타임아웃 설정
  headers: { "Content-Type": "application/json" }, // 기본 헤더 설정
});

// 토큰 관련 인터셉터 추가
apiClient.interceptors.request.use(
  (config) => {
    // 토큰 저장한 방식에 맞춰 아래 코드 변경하면 될 것 같습니다.
    const token = useAuthStore.getState().access_token;
    if (token) {
      config.headers.Authorization = `${token}`;
    }
    return config;
  },
  (error) => {
    return Promise.reject(error);
  }
);

// 토큰 재발급, 오류로 인해 주석처리
// apiClient.interceptors.response.use(
//   (response) => {
//     // 응답이 성공적이면 그대로 반환
//     return response;
//   },
//   async (error) => {
//     const originalRequest = error.config;

//     // 401 오류이고, 재시도 중이 아닌 경우
//     if (
//       error.response?.status === 401 &&
//       !originalRequest._retry // _retry 플래그를 사용하여 무한 루프 방지
//     ) {
//       originalRequest._retry = true;

//       try {
//         // Refresh 토큰을 사용하여 새 액세스 토큰 요청
//         const { data } = await postRequest(`/user/reissue`, {});

//         alert("리프레시 토큰을 통해 액세스 토큰 재발급 확인!");
//         console.log(data); // 토큰값 확인
//         // 새로운 액세스 토큰 저장
//         useAuthStore.getState().setAccessToken(data.access_token);

//         // 원래 요청에 새 토큰 추가
//         originalRequest.headers.Authorization =
//           useAuthStore.getState().access_token;

//         // 원래 요청 재시도
//         // return apiClient(originalRequest);
//       } catch (refreshError) {
//         // Refresh 실패 시 로그아웃 처리
//         useAuthStore.getState().logout(); // 로그아웃 처리
//         console.log("로그아웃 처리 ");
//         return Promise.reject(refreshError);
//       }
//     }

//     // 그 외의 에러는 그대로 반환
//     // return Promise.reject(error);
//   }
// );

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
export const postRequest = async (url: string, data?: object) => {
  try {
    const response = await apiClient.post(url, data);
    return response.data;
  } catch (error) {
    console.error("POST 요청 에러:", error);
    throw error;
  }
};

// PATCH 요청 함수
export const updateRequest = async (url: string, data?: object) => {
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

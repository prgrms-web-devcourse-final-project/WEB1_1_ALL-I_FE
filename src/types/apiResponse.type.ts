import { Category } from "@/types/category.type";
import { AlarmResDTO } from "@/types/notification.types";

// API 응답 타입
export interface ApiResponse<T> {
  code: number;
  status: string;
  message: string;
  data: T;
}

// 카테고리 조회
export type CategoryResponse = ApiResponse<Category[]>;

// 알림 조회
export type AlarmResponse = ApiResponse<AlarmResDTO[]>;

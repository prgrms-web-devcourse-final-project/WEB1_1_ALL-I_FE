import { DateRequestParams } from "@/types/todo.types";
import { getRequest } from "./apiService";

// 예시용 특정 달의 투두 조회 API
export const getPersonalTodos = async (dateData: DateRequestParams) => {
  try {
    return await getRequest("/todos/monthly", dateData);
  } catch (error) {
    console.error("투두 조회 실패:", error);
    throw error;
  }
};

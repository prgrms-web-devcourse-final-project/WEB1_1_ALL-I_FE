/**
 * 임시로 더미데이터 사용하고,
 * api 연동시 query 로직이 포함될 예정입니다.
 */

import { PERSONAL_TODO_DATA } from "@/mocks/PERSONAL_TODO_DATA";

export const useMainTodos = () => {
  return { data: PERSONAL_TODO_DATA, isLoading: false, error: null };
};

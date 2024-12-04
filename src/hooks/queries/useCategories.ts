/**
 * 임시로 더미데이터 사용하고,
 * api 연동시 query 로직이 포함될 예정입니다.
 */

import { CATEGORY_DATA } from "@/mocks/CTEGORY_DATA";

export const useCategories = () => {
  return { data: CATEGORY_DATA, isLoading: false };
};

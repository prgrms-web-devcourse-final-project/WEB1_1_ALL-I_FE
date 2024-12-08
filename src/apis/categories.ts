import {
  CreateCategoryRequest,
  EditCategoryRequest,
} from "@/types/apiRequest.type";
import {
  deleteRequest,
  getRequest,
  postRequest,
  updateRequest,
} from "./apiService";

// 카테고리 조회
export const getCategories = async () => {
  try {
    return await getRequest("/categories");
  } catch (error) {
    console.error("카테고리 조회 실패:", error);
    throw error;
  }
};

// 카테고리 생성
export const createCategory = async (categoryData: CreateCategoryRequest) => {
  try {
    return await postRequest("/categories", categoryData);
  } catch (error) {
    console.error("카테고리 생성 실패:", error);
    throw error;
  }
};

// 카테고리 수정
export const editCategory = async (categoryData: EditCategoryRequest) => {
  try {
    return await updateRequest(
      `/categories/${categoryData.categoryId} `,
      categoryData
    );
  } catch (error) {
    console.error("카테고리 수정 실패:", error);
    throw error;
  }
};

// 카테고리 삭제
export const deleteCategory = async (categoryId: string) => {
  try {
    return await deleteRequest(`/categories/${categoryId}`);
  } catch (error) {
    console.error("카테고리 삭제 실패:", error);
    throw error;
  }
};

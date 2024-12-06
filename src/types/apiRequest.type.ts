// 카테고리 생성
export type CreateCategoryRequest = {
  name: string;
  color: string;
};

// 카테고리 수정
export type EditCategoryRequest = {
  categoryId: string;
  name?: string;
  color?: string;
};

// 투두 생성
export interface CreatePersonalTodoRequest {
  title: string;
  date: string;
  startTime: string | null;
  categoryId: string;
}

// 투두 수정
export interface EditPersonalTodoRequest {
  title: string;
  date: string;
  startTime: string | null;
  categoryId: string;
}
